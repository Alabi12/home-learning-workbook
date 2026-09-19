// src/domain/curriculum.js
// Loads the curriculum, indexes it, and answers queries.

import { CURRICULUM_BY_GRADE, SUBJECT_META } from '../data/index.js';

export function createCurriculum() {
  // Cache: grade -> subject -> weeks[]
  const cache = new Map();

  function getGrades() {
    return Object.keys(CURRICULUM_BY_GRADE);
  }

  function getSubjects(grade) {
    const g = CURRICULUM_BY_GRADE[grade];
    if (!g) return [];
    return Object.keys(SUBJECT_META).filter((s) => g[s]);
  }

  function getSubjectMeta(subject) {
    return SUBJECT_META[subject] || { label: subject, icon: '📘' };
  }

  function getWeeks(grade, subject) {
    const key = `${grade}:${subject}`;
    if (cache.has(key)) return cache.get(key);
    const weeks = CURRICULUM_BY_GRADE[grade]?.[subject] || [];
    cache.set(key, weeks);
    return weeks;
  }

  function getWeek(grade, subject, week) {
    return getWeeks(grade, subject).find((w) => w.week === Number(week)) || null;
  }

  function getLesson(grade, subject, week, day) {
    const wk = getWeek(grade, subject, week);
    return wk?.days.find((d) => d.day === Number(day)) || null;
  }

  function countLessons(grade) {
    let total = 0;
    getSubjects(grade).forEach((subject) => {
      getWeeks(grade, subject).forEach((w) => {
        total += w.days.length;
      });
    });
    return total;
  }

  function countDone(grade, done) {
    let count = 0;
    Object.keys(done).forEach((k) => {
      if (k.startsWith(grade + '-') && done[k]) count++;
    });
    return count;
  }

  function lessonKey(grade, subject, week, day) {
    return `${grade}-${subject}-${week}-${day}`;
  }

  function findPrevLesson(grade, subject, week, day) {
    const weeks = getWeeks(grade, subject);
    const wi = weeks.findIndex((w) => w.week === Number(week));
    if (wi < 0) return null;
    const wk = weeks[wi];
    const di = wk.days.findIndex((d) => d.day === Number(day));
    if (di > 0) return { week: wk.week, day: wk.days[di - 1].day };
    if (wi > 0) {
      const prev = weeks[wi - 1];
      return { week: prev.week, day: prev.days[prev.days.length - 1].day };
    }
    return null;
  }

  function findNextLesson(grade, subject, week, day) {
    const weeks = getWeeks(grade, subject);
    const wi = weeks.findIndex((w) => w.week === Number(week));
    if (wi < 0) return null;
    const wk = weeks[wi];
    const di = wk.days.findIndex((d) => d.day === Number(day));
    if (di >= 0 && di < wk.days.length - 1) {
      return { week: wk.week, day: wk.days[di + 1].day };
    }
    if (wi < weeks.length - 1) {
      const next = weeks[wi + 1];
      return { week: next.week, day: next.days[0].day };
    }
    return null;
  }

  return {
    getGrades,
    getSubjects,
    getSubjectMeta,
    getWeeks,
    getWeek,
    getLesson,
    countLessons,
    countDone,
    lessonKey,
    findPrevLesson,
    findNextLesson
  };
}