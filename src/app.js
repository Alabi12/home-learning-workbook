// src/app.js
// Main application — wires store, router, curriculum, and UI.

import { createStore } from './core/store.js';
import { createRouter } from './core/router.js';
import { createCurriculum } from './domain/curriculum.js';
import { progressForGrade } from './domain/progress.js';
import { describeCurrentSlot, TIMETABLE, DAY_ORDER, getTodayKey, fmtRange } from './domain/timetable.js';
import { speakText } from './domain/speech.js';
import { checkAnswer } from './domain/quiz.js';
import { h, clear, $ } from './utils/dom.js';

export function createApp(root) {
  const store = createStore();
  const router = createRouter(store);
  const curriculum = createCurriculum();

  // ---------- Renderers ----------
  function renderGradeBar() {
    const bar = $('#gradeBar');
    clear(bar);
    bar.appendChild(h('span', { class: 'title' }, '🌈 Home Learning Workbook'));
    const wrap = h('span', { class: 'grade-buttons' });
    curriculum.getGrades().forEach((g) => {
      const active = store.get().grade === g;
      wrap.appendChild(h('button', {
        class: active ? 'active' : '',
        onClick: () => store.set({ grade: g, subject: 'english', week: 1, day: 1 })
      }, `Grade ${g}`));
    });
    bar.appendChild(wrap);
  }

  function renderSubjectTabs() {
    const el = $('#subjectTabs');
    clear(el);
    const { grade, subject } = store.get();
    curriculum.getSubjects(grade).forEach((s) => {
      const meta = curriculum.getSubjectMeta(s);
      el.appendChild(h('button', {
        class: subject === s ? 'active' : '',
        onClick: () => store.set({ subject: s, week: 1, day: 1 })
      }, `${meta.icon} ${meta.label}`));
    });
  }

  function renderWeekList() {
    const el = $('#weekList');
    clear(el);
    const { grade, subject, week, day, done } = store.get();
    const weeks = curriculum.getWeeks(grade, subject);
    weeks.forEach((wk) => {
      const open = wk.week === week;
      const block = h('div', { class: 'week-block' + (open ? ' open' : '') });
      const head = h('div', { class: 'week-head', onClick: () => block.classList.toggle('open') },
        h('span', {}, `Week ${wk.week}: ${wk.theme}`),
        h('span', {}, '▾')
      );
      const days = h('div', { class: 'week-days' });
      wk.days.forEach((d) => {
        const key = curriculum.lessonKey(grade, subject, wk.week, d.day);
        const isDone = !!done[key];
        const isActive = wk.week === week && d.day === day;
        days.appendChild(h('button', {
          class: 'day-btn' + (isActive ? ' active' : ''),
          onClick: () => store.set({ week: wk.week, day: d.day })
        },
          h('span', {}, `${d.emoji} Day ${d.day}: ${d.title}`),
          isDone ? h('span', { class: 'tick' }, '⭐') : null
        ));
      });
      block.appendChild(head);
      block.appendChild(days);
      el.appendChild(block);
    });
  }

  function renderTopBar() {
    const el = $('#topbar');
    clear(el);
    const { grade, subject, week, day } = store.get();
    const meta = curriculum.getSubjectMeta(subject);
    const lesson = curriculum.getLesson(grade, subject, week, day);
    const title = lesson
      ? `${lesson.emoji} Grade ${grade} ${meta.label} — Week ${week}, Day ${day}`
      : 'Welcome!';
    const sub = lesson ? `${curriculum.getWeek(grade, subject, week)?.theme} • ${lesson.title}` : '';

    el.appendChild(h('div', {},
      h('h1', {}, title),
      h('div', { class: 'sub' }, sub)
    ));
    el.appendChild(h('div', { class: 'actions' },
      h('button', { class: 'btn ghost', onClick: onSpeak }, '🔊 Read'),
      h('button', { class: 'btn ghost', onClick: () => window.print() }, '🖨️ Print'),
      h('button', { class: 'btn ghost', onClick: onReset }, '♻️ Reset')
    ));
  }

  function renderTimetable() {
    const el = $('#timetable');
    clear(el);
    const today = getTodayKey();
    el.appendChild(h('h2', {}, '📅 Our Weekly Timetable'));
    el.appendChild(h('div', { class: 'clock', id: 'liveClock' }, '🕐 Loading…'));
    const grid = h('div', { class: 'tt-grid' });
    DAY_ORDER.forEach((key) => {
      const d = TIMETABLE[key];
      const card = h('div', { class: 'tt-day' + (key === today ? ' today' : '') });
      card.appendChild(h('h3', {}, `${d.icon} ${d.label}${key === today ? ' ⬅️ TODAY' : ''}`));
      card.appendChild(h('div', { class: 'time' }, d.hours));
      const ul = h('ul');
      d.slots.forEach((slot) => {
        ul.appendChild(h('li', { class: slot.subject === 'revision' ? 'rev' : '' },
          h('b', {}, fmtRange(slot.start, slot.end)),
          ' — ',
          slot.subject === 'break' ? slot.note : slot.note
        ));
      });
      card.appendChild(ul);
      grid.appendChild(card);
    });
    el.appendChild(grid);
  }

  function renderNowCard() {
    const el = $('#nowCard');
    clear(el);
    const info = describeCurrentSlot(new Date());
    el.appendChild(h('h2', {}, '🎯 What Should I Do Now?'));
    el.appendChild(h('p', { class: 'big' }, info.headline));
    el.appendChild(h('p', {}, info.detail));
    el.appendChild(h('div', { style: 'margin-top:10px' },
      h('button', { class: 'btn purple', onClick: renderNowCard }, '✨ Refresh')
    ));
  }

  function renderStarTracker() {
    const el = $('#starTrack');
    clear(el);
    const { grade, done } = store.get();
    const p = progressForGrade(curriculum, grade, done);
    el.appendChild(h('span', {}, '⭐ Stars:'));
    const bar = h('div', { class: 'bar' }, h('div', { style: `width:${p.pct}%` }));
    el.appendChild(bar);
    el.appendChild(h('span', {}, `${p.completed} / ${p.total}`));
  }

  function renderLesson() {
    const el = $('#content');
    clear(el);
    const { grade, subject, week, day, done } = store.get();
    const lesson = curriculum.getLesson(grade, subject, week, day);
    if (!lesson) {
      el.appendChild(h('div', { class: 'empty' },
        h('div', { class: 'big' }, '🎈'),
        h('h2', {}, 'Hello, friend!'),
        h('p', {}, 'Choose a grade, subject, and day to begin.')
      ));
      return;
    }
    const key = curriculum.lessonKey(grade, subject, week, day);
    const isDone = !!done[key];

    // Main card
    const main = h('div', { class: 'card' });
    main.appendChild(h('span', { class: 'big-emoji' }, lesson.emoji));
    main.appendChild(h('h2', {}, lesson.title));
    main.appendChild(h('div', { class: 'objective', html: `<strong>Objective:</strong> ${lesson.objective}` }));
    main.appendChild(h('div', { class: 'notes', html: lesson.notes || '' }));
    el.appendChild(main);

    // Exercises
    if (lesson.exercises?.length) {
      const exCard = h('div', { class: 'card' });
      exCard.appendChild(h('h2', {}, '✏️ Let’s Practise'));
      lesson.exercises.forEach((ex) => {
        const box = h('div', { class: 'exercise' });
        box.appendChild(h('h4', {}, ex.heading));
        if (ex.items?.length) {
          const ol = h('ol');
          ex.items.forEach((it) => ol.appendChild(h('li', { html: it })));
          box.appendChild(ol);
        }
        exCard.appendChild(box);
      });
      el.appendChild(exCard);
    }

    // Answers
    if (lesson.answers) {
      const a = h('div', { class: 'card' });
      a.appendChild(h('h2', {}, '✅ Answers'));
      a.appendChild(h('div', { class: 'answers', html: lesson.answers }));
      el.appendChild(a);
    }

    // Quiz
    if (lesson.quiz?.length) {
      const q = h('div', { class: 'card' });
      q.appendChild(h('h2', {}, '🎯 Quick Quiz'));
      const quizBox = h('div', { class: 'quiz' });
      lesson.quiz.forEach((item, i) => {
        const qi = h('div', { class: 'quiz-q' });
        qi.appendChild(h('p', {}, `${i + 1}. ${item.q}`));
        const input = h('input', { type: 'text', placeholder: 'Type here…' });
        const fb = h('div', { class: 'feedback' });
        qi.appendChild(input);
        qi.appendChild(fb);
        quizBox.appendChild(qi);
        item._input = input;   // stored for the check handler
        item._feedback = fb;
      });
      q.appendChild(quizBox);
      q.appendChild(h('div', { style: 'margin-top:12px' },
        h('button', { class: 'btn primary', onClick: () => runQuizCheck(lesson.quiz) }, 'Check Answers ✓')
      ));
      el.appendChild(q);
    }

    // Nav
    const prev = curriculum.findPrevLesson(grade, subject, week, day);
    const next = curriculum.findNextLesson(grade, subject, week, day);
    el.appendChild(h('div', { class: 'nav-footer' },
      h('button', { class: 'btn', disabled: !prev, onClick: () => prev && store.set(prev) }, '⬅️ Back'),
      h('button', {
        class: 'btn ' + (isDone ? 'primary' : 'pink'),
        onClick: () => store.toggleDone(key)
      }, isDone ? '⭐ Done!' : '⭐ Mark Done'),
      h('button', { class: 'btn blue', disabled: !next, onClick: () => next && store.set(next) }, 'Next ➡️')
    ));
  }

  // ---------- Actions ----------
  function runQuizCheck(quiz) {
    quiz.forEach((item) => {
      const res = checkAnswer(item._input.value, item.a);
      item._input.classList.remove('correct', 'wrong');
      item._feedback.classList.remove('ok', 'no');
      if (res.status === 'correct') {
        item._input.classList.add('correct');
        item._feedback.classList.add('ok');
      } else if (res.status === 'wrong') {
        item._input.classList.add('wrong');
        item._feedback.classList.add('no');
      }
      item._feedback.textContent = res.message;
    });
  }

  function onSpeak() {
    const content = $('#content');
    if (content) speakText(content.innerText);
  }

  function onReset() {
    const { grade } = store.get();
    if (confirm(`Reset all stars for Grade ${grade}? ⭐`)) {
      store.resetGrade(grade);
    }
  }

  // ---------- Live clock ----------
  function startClock() {
    const tick = () => {
      const el = document.getElementById('liveClock');
      if (!el) return;
      const now = new Date();
      const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][now.getDay()];
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      el.textContent = `🕐 ${day} — ${hh}:${mm}:${ss}`;
    };
    tick();
    setInterval(tick, 1000);
  }

  // ---------- Master render ----------
  function render() {
    renderGradeBar();
    renderSubjectTabs();
    renderWeekList();
    renderTopBar();
    renderTimetable();
    renderNowCard();
    renderStarTracker();
    renderLesson();
  }

  // ---------- Bootstrap ----------
  function start() {
    store.subscribe(render);
    router.start();
    render();
    startClock();
  }

  return { start };
}