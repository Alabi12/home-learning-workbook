// src/app.js
// Main application — professional UI version.
// Wires store, router, curriculum, and UI.

import { createStore } from './core/store.js';
import { createRouter } from './core/router.js';
import { createCurriculum } from './domain/curriculum.js';
import { progressForGrade } from './domain/progress.js';
import {
  describeCurrentSlot,
  TIMETABLE,
  DAY_ORDER,
  getTodayKey,
  fmtRange
} from './domain/timetable.js';
import { speakText } from './domain/speech.js';
import { checkAnswer } from './domain/quiz.js';
import { h, clear, $ } from './utils/dom.js';

export function createApp(root) {
  const store = createStore();
  const router = createRouter(store);
  const curriculum = createCurriculum();

  /* ========================================================================
     SAFE HELPERS
     ======================================================================== */

  function safeClear(selector) {
    const el = typeof selector === 'string' ? $(selector) : selector;
    if (!el) {
      console.warn(`[app] Missing element: ${selector}`);
      return null;
    }
    clear(el);
    return el;
  }

  function safeAppend(selector, ...children) {
    const el = typeof selector === 'string' ? $(selector) : selector;
    if (!el) {
      console.warn(`[app] Cannot append — element missing: ${selector}`);
      return null;
    }
    children.forEach((c) => {
      if (c === null || c === undefined) return;
      el.appendChild(c);
    });
    return el;
  }
/* ========================================================================
   RENDER — GRADE SWITCHER (header)
   ======================================================================== */
function renderGradeBar() {
  const bar = safeClear('#gradeBar');
  if (!bar) return;
  const currentGrade = store.get().grade;
  const grades = curriculum.getGrades();

  /* Sliding indicator — sized/positioned by CSS using data attributes */
  const count = grades.length;
  const index = Math.max(0, grades.indexOf(currentGrade));

  bar.style.setProperty('--grade-count', count);
  bar.style.setProperty('--grade-index', index);

  grades.forEach((g) => {
    const active = currentGrade === g;
    bar.appendChild(h('button', {
      class: 'grade-switcher__btn' + (active ? ' is-active' : ''),
      'aria-pressed': active ? 'true' : 'false',
      'data-grade': g,
      onClick: () => store.set({ grade: g, subject: 'english', week: 1, day: 1 })
    },
      h('span', { class: 'grade-switcher__num' }, g)
    ));
  });
}

/* ========================================================================
   RENDER — SUBJECT BAR (below header)
   ======================================================================== */
function renderSubjectTabs() {
  const el = safeClear('#subjectTabs');
  if (!el) return;
  const { grade, subject } = store.get();
  const subjects = curriculum.getSubjects(grade);
  const count = subjects.length;
  const index = Math.max(0, subjects.indexOf(subject));

  el.style.setProperty('--subject-count', count);
  el.style.setProperty('--subject-index', index);

  subjects.forEach((s) => {
    const meta = curriculum.getSubjectMeta(s);
    const active = subject === s;
    el.appendChild(h('button', {
      class: 'subject-chip' + (active ? ' is-active' : ''),
      'data-subject': s,
      onClick: () => store.set({ subject: s, week: 1, day: 1 })
    },
      h('span', { class: 'subject-chip__icon' }, meta.icon),
      h('span', { class: 'subject-chip__label' }, meta.label)
    ));
  });
}

  /* ========================================================================
     RENDER — WEEK LIST (sidebar)
     ======================================================================== */

  function renderWeekList() {
    const el = safeClear('#weekList');
    if (!el) return;
    const { grade, subject, week, day, done } = store.get();
    const weeks = curriculum.getWeeks(grade, subject);

    weeks.forEach((wk) => {
      const open = wk.week === week;
      const block = h('div', { class: 'week-block' + (open ? ' is-open' : '') });

      const head = h('div', {
        class: 'week-head',
        onClick: () => block.classList.toggle('is-open')
      },
        h('div', {},
          h('div', { class: 'week-head__title' }, `Week ${wk.week}`),
          h('span', { class: 'week-head__theme' }, wk.theme)
        ),
        h('span', { class: 'week-head__chevron' }, '›')
      );

      const days = h('div', { class: 'week-days' });
      wk.days.forEach((d) => {
        const key = curriculum.lessonKey(grade, subject, wk.week, d.day);
        const isDone = !!done[key];
        const isActive = wk.week === week && d.day === day;

        days.appendChild(h('button', {
          class: 'day-btn' + (isActive ? ' is-active' : ''),
          onClick: () => store.set({ week: wk.week, day: d.day })
        },
          h('span', { class: 'day-btn__num' }, String(d.day)),
          h('span', { class: 'day-btn__title' }, d.title),
          isDone ? h('span', { class: 'day-btn__done' }, '✓') : null
        ));
      });

      block.appendChild(head);
      block.appendChild(days);
      el.appendChild(block);
    });
  }

  /* ========================================================================
     RENDER — TIMETABLE
     ======================================================================== */

  function renderTimetable() {
    const el = safeClear('#timetable');
    if (!el) return;
    const today = getTodayKey();

    el.appendChild(h('div', { class: 'timetable__header' },
      h('h2', {}, '📅 Weekly Timetable'),
      h('div', { class: 'timetable__clock', id: 'liveClock' }, '🕐 Loading…')
    ));

    const grid = h('div', { class: 'timetable__grid' });
    DAY_ORDER.forEach((key) => {
      const d = TIMETABLE[key];
      const isToday = key === today;
      const card = h('div', {
        class: 'timetable__day' + (isToday ? ' is-today' : '')
      });

      card.appendChild(h('div', { class: 'timetable__day-title' },
        h('span', {}, d.icon),
        h('span', {}, d.label + (isToday ? ' · Today' : ''))
      ));
      card.appendChild(h('div', { class: 'timetable__day-hours' }, d.hours));

      const ul = h('ul', { class: 'timetable__slots' });
      d.slots.forEach((slot) => {
        const isRev = slot.subject === 'revision';
        ul.appendChild(h('li', {
          class: 'timetable__slot' + (isRev ? ' is-revision' : '')
        },
          h('b', {}, fmtRange(slot.start, slot.end)),
          h('span', {}, slot.note)
        ));
      });
      card.appendChild(ul);
      grid.appendChild(card);
    });
    el.appendChild(grid);
  }

  /* ========================================================================
     RENDER — NOW CARD
     ======================================================================== */

  function renderNowCard() {
    const el = safeClear('#nowCard');
    if (!el) return;
    const info = describeCurrentSlot(new Date());

    el.appendChild(h('div', { class: 'now-card__title' }, '🎯 What Should I Do Now?'));
    el.appendChild(h('div', { class: 'now-card__headline' }, info.headline));
    el.appendChild(h('div', { class: 'now-card__detail' }, info.detail));
    el.appendChild(h('button', {
      class: 'btn',
      onClick: renderNowCard
    }, 'Refresh'));
  }

  /* ========================================================================
     RENDER — STAR TRACKER (progress bar)
     ======================================================================== */

  function renderStarTracker() {
    const el = safeClear('#starTrack');
    if (!el) return;
    const { grade, done } = store.get();
    const p = progressForGrade(curriculum, grade, done);

    el.appendChild(h('div', { class: 'progress__label' },
      h('span', {}, '⭐ Progress')
    ));
    el.appendChild(h('div', { class: 'progress__bar' },
      h('div', { class: 'progress__fill', style: `width:${p.pct}%` })
    ));
    el.appendChild(h('div', { class: 'progress__count' },
      `${p.completed} / ${p.total} · ${p.pct}%`
    ));
  }

  /* ========================================================================
     RENDER — LESSON
     ======================================================================== */

  function renderLesson() {
    const el = safeClear('#content');
    if (!el) return;
    const { grade, subject, week, day, done } = store.get();
    const lesson = curriculum.getLesson(grade, subject, week, day);

    /* ---------- Empty state ---------- */
    if (!lesson) {
      el.appendChild(h('div', { class: 'empty-state' },
        h('div', { class: 'empty-state__icon' }, '📚'),
        h('div', { class: 'empty-state__title' }, 'Welcome to your Workbook'),
        h('p', {}, 'Choose a grade, subject, and day to begin learning.')
      ));
      return;
    }

    const key = curriculum.lessonKey(grade, subject, week, day);
    const isDone = !!done[key];
    const wk = curriculum.getWeek(grade, subject, week);
    const meta = curriculum.getSubjectMeta(subject);

    /* ---------- LESSON HEADER ---------- */
    const header = h('div', { class: 'lesson-header' });
    header.appendChild(h('div', { class: 'lesson-header__breadcrumb' },
      h('span', {}, `Grade ${grade}`),
      h('span', { class: 'lesson-header__breadcrumb-sep' }, '·'),
      h('span', {}, meta.label),
      h('span', { class: 'lesson-header__breadcrumb-sep' }, '·'),
      h('span', {}, `Week ${week}`)
    ));
    header.appendChild(h('h1', { class: 'lesson-header__title' }, lesson.title));
    header.appendChild(h('div', { class: 'lesson-header__meta' },
      h('span', { class: 'badge badge--brand' }, `Day ${day}`),
      wk ? h('span', { class: 'badge badge--neutral' }, wk.theme) : null,
      isDone ? h('span', { class: 'badge badge--success' }, '⭐ Completed') : null
    ));
    el.appendChild(header);

    /* ---------- MAIN CARD ---------- */
    const mainCard = h('div', { class: 'card card--accent' });
    mainCard.appendChild(h('div', { class: 'objective' },
      h('span', { class: 'objective__label' }, 'Learning Objective'),
      h('div', { html: lesson.objective || '' })
    ));
    mainCard.appendChild(h('div', {
      class: 'lesson-notes',
      html: lesson.notes || ''
    }));
    el.appendChild(mainCard);

    /* ---------- EXERCISES ---------- */
    if (lesson.exercises?.length) {
      const exCard = h('div', { class: 'card' });
      exCard.appendChild(h('div', { class: 'card__header' },
        h('h2', { class: 'card__title' }, '✏️ Practice'),
        h('span', { class: 'badge badge--warning' },
          `${lesson.exercises.length} ${lesson.exercises.length === 1 ? 'exercise' : 'exercises'}`)
      ));
      lesson.exercises.forEach((ex) => {
        const box = h('div', { class: 'exercise' });
        box.appendChild(h('div', { class: 'exercise__heading' }, ex.heading));
        if (ex.items?.length) {
          const ol = h('ol');
          ex.items.forEach((it) => ol.appendChild(h('li', { html: it })));
          box.appendChild(ol);
        }
        exCard.appendChild(box);
      });
      el.appendChild(exCard);
    }

    /* ---------- ANSWERS ---------- */
    if (lesson.answers) {
      const a = h('div', { class: 'card' });
      a.appendChild(h('div', { class: 'card__header' },
        h('h2', { class: 'card__title' }, '✅ Answer Key')
      ));
      a.appendChild(h('div', { class: 'answers', html: lesson.answers }));
      el.appendChild(a);
    }

    /* ---------- QUIZ ---------- */
    if (lesson.quiz?.length) {
      const q = h('div', { class: 'card' });
      q.appendChild(h('div', { class: 'card__header' },
        h('h2', { class: 'card__title' }, '🎯 Quick Quiz'),
        h('span', { class: 'badge badge--brand' },
          `${lesson.quiz.length} ${lesson.quiz.length === 1 ? 'question' : 'questions'}`)
      ));

      const quizBox = h('div', { class: 'quiz' });
      lesson.quiz.forEach((item, i) => {
        const qi = h('div', { class: 'quiz__item' });
        qi.appendChild(h('div', { class: 'quiz__q' },
          h('span', { class: 'quiz__qnum' }, String(i + 1)),
          h('span', {}, item.q)
        ));
        const input = h('input', {
          class: 'quiz__input',
          type: 'text',
          placeholder: 'Type your answer…'
        });
        const fb = h('div', { class: 'quiz__feedback' });
        qi.appendChild(input);
        qi.appendChild(fb);
        quizBox.appendChild(qi);
        item._input = input;
        item._feedback = fb;
      });

      q.appendChild(quizBox);
      q.appendChild(h('div', { style: 'margin-top:16px' },
        h('button', {
          class: 'btn btn--primary',
          onClick: () => runQuizCheck(lesson.quiz)
        }, 'Check Answers')
      ));
      el.appendChild(q);
    }

    /* ---------- NAV FOOTER ---------- */
    const prev = curriculum.findPrevLesson(grade, subject, week, day);
    const next = curriculum.findNextLesson(grade, subject, week, day);

    el.appendChild(h('div', { class: 'nav-footer' },
      h('button', {
        class: 'btn btn--outline',
        disabled: !prev,
        onClick: () => prev && store.set(prev)
      }, '← Previous'),

      h('div', { class: 'nav-footer__center' },
        h('button', {
          class: 'btn ' + (isDone ? 'btn--success' : 'btn--primary'),
          onClick: () => store.toggleDone(key)
        }, isDone ? '✓ Completed' : 'Mark as Done')
      ),

      h('button', {
        class: 'btn btn--primary',
        disabled: !next,
        onClick: () => next && store.set(next)
      }, 'Next →')
    ));
  }

  /* ========================================================================
     ACTIONS
     ======================================================================== */

  function runQuizCheck(quiz) {
    quiz.forEach((item) => {
      if (!item._input || !item._feedback) return;
      const res = checkAnswer(item._input.value, item.a);

      item._input.classList.remove('is-correct', 'is-wrong');
      item._feedback.classList.remove('is-correct', 'is-wrong');

      if (res.status === 'correct') {
        item._input.classList.add('is-correct');
        item._feedback.classList.add('is-correct');
        item._feedback.textContent = '✓ ' + res.message;
      } else if (res.status === 'wrong') {
        item._input.classList.add('is-wrong');
        item._feedback.classList.add('is-wrong');
        item._feedback.textContent = '✕ ' + res.message;
      } else {
        item._feedback.textContent = 'Please type an answer.';
      }
    });
  }

  function onSpeak() {
    const content = $('#content');
    if (content) speakText(content.innerText);
  }

  function onReset() {
    const { grade } = store.get();
    if (confirm(`Reset all progress for Grade ${grade}? ⭐`)) {
      store.resetGrade(grade);
    }
  }

  /* ========================================================================
     LIVE CLOCK
     ======================================================================== */

  function startClock() {
    const tick = () => {
      const el = document.getElementById('liveClock');
      if (!el) return;
      const now = new Date();
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      el.textContent = `🕐 ${day} — ${hh}:${mm}:${ss}`;
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ========================================================================
     MASTER RENDER
     ======================================================================== */

  function render() {
    renderGradeBar();
    renderSubjectTabs();
    renderWeekList();
    renderTimetable();
    renderNowCard();
    renderStarTracker();
    renderLesson();
  }

  /* ========================================================================
     BOOTSTRAP
     ======================================================================== */

  function start() {
    store.subscribe(render);
    router.start();
    render();
    startClock();

    /* ---------- Expose actions for header buttons ---------- */
    window.__hlw = {
      speak: onSpeak,
      reset: onReset
    };
  }

  return { start };
}