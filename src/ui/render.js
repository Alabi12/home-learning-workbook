// src/ui/render.js
// Renders the app shell once; later modules fill regions.

import { h, clear } from '../utils/dom.js';

export function renderShell(root) {
  clear(root);
  const shell = h('div', { class: 'app-shell' },
    h('div', { class: 'grade-bar', id: 'gradeBar' }),
    h('div', { class: 'app' },
      h('aside', { id: 'sidebar' },
        h('div', { class: 'subject-tabs', id: 'subjectTabs' }),
        h('div', { id: 'weekList' })
      ),
      h('main', { id: 'main' },
        h('header', { class: 'topbar', id: 'topbar' }),
        h('section', { class: 'timetable', id: 'timetable' }),
        h('section', { class: 'now-card', id: 'nowCard' }),
        h('div', { class: 'star-track', id: 'starTrack' }),
        h('div', { id: 'content' })
      )
    )
  );
  root.appendChild(shell);
}