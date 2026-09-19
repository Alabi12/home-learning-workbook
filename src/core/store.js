// src/core/store.js
// Central state store with subscription support.

import { storage } from './storage.js';
import { createEventBus } from './events.js';

const STORAGE_KEY = 'state:v1';

const DEFAULT_STATE = {
  grade: '2',
  subject: 'english',
  week: 1,
  day: 1,
  done: {},        // key: "grade-subject-week-day" -> true
  theme: 'light'
};

export function createStore() {
  const bus = createEventBus();
  let state = { ...DEFAULT_STATE, ...storage.get(STORAGE_KEY, {}) };

  function persist() {
    storage.set(STORAGE_KEY, state);
  }

  function get() {
    return state;
  }

  function set(patch, meta = {}) {
    const prev = state;
    state = { ...state, ...patch };
    persist();
    bus.emit('change', { state, prev, meta });
  }

  function toggleDone(key) {
    const next = { ...state.done };
    if (next[key]) delete next[key];
    else next[key] = true;
    set({ done: next }, { reason: 'toggleDone', key });
  }

  function resetGrade(grade) {
    const next = {};
    Object.keys(state.done).forEach((k) => {
      if (!k.startsWith(grade + '-')) next[k] = state.done[k];
    });
    set({ done: next }, { reason: 'resetGrade', grade });
  }

  return {
    get,
    set,
    toggleDone,
    resetGrade,
    subscribe: (handler) => bus.on('change', handler),
    on: bus.on
  };
}