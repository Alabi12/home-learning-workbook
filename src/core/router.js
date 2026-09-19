// src/core/router.js
// Simple hash router: #/grade/subject/week/day

export function createRouter(store) {
  function parseHash() {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (!hash) return null;
    const [grade, subject, week, day] = hash.split('/');
    return {
      grade: grade || undefined,
      subject: subject || undefined,
      week: week ? Number(week) : undefined,
      day: day ? Number(day) : undefined
    };
  }

  function buildHash(state) {
    return `#/${state.grade}/${state.subject}/${state.week}/${state.day}`;
  }

  function syncFromUrl() {
    const parsed = parseHash();
    if (!parsed) return;
    const patch = {};
    if (parsed.grade) patch.grade = parsed.grade;
    if (parsed.subject) patch.subject = parsed.subject;
    if (parsed.week) patch.week = parsed.week;
    if (parsed.day) patch.day = parsed.day;
    if (Object.keys(patch).length) store.set(patch, { reason: 'url' });
  }

  function syncToUrl(state) {
    const target = buildHash(state);
    if (window.location.hash !== target) {
      window.history.replaceState(null, '', target);
    }
  }

  function start() {
    window.addEventListener('hashchange', syncFromUrl);
    store.subscribe(({ state, meta }) => {
      if (meta?.reason !== 'url') syncToUrl(state);
    });
    syncFromUrl();
  }

  return { start, syncToUrl };
}