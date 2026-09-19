// src/ui/render.js
import { h, clear } from '../utils/dom.js';

export function renderShell(root) {
  if (!root) return;
  clear(root);

  const shell = h('div', { class: 'app-shell' },

    /* ---------- HEADER ---------- */
    h('header', { class: 'app-header' },

      /* Left: menu toggle (mobile) + brand */
      h('div', { class: 'app-header__left' },
        h('button', {
          class: 'app-header__menu',
          id: 'menuToggle',
          'aria-label': 'Open menu',
          title: 'Menu'
        }, '☰'),
        h('div', { class: 'app-header__brand' },
          h('div', { class: 'app-header__logo' }, 'HL'),
          h('div', { class: 'app-header__brand-text' },
            h('div', { class: 'app-header__title' }, 'Home Learning'),
            h('div', { class: 'app-header__subtitle' }, 'Workbook · G2–G7')
          )
        )
      ),

      /* Center: grade switcher */
      h('div', { class: 'app-header__grades-wrapper' },
        h('div', { class: 'grade-switcher', id: 'gradeBar', 'aria-label': 'Grade selector' })
      ),

      /* Right: actions */
      h('div', { class: 'app-header__actions', id: 'headerActions' })
    ),

    /* ---------- SUBJECT BAR (mobile-friendly subject switcher) ---------- */
    h('div', { class: 'subject-bar', id: 'subjectBar' },
      h('div', { class: 'subject-bar__inner', id: 'subjectTabs' })
    ),

    /* ---------- SIDEBAR (weeks only now) ---------- */
    h('aside', { class: 'app-sidebar', id: 'sidebar' },
      h('div', { class: 'sidebar__section' },
        h('div', { class: 'sidebar__label' }, 'Weeks'),
        h('div', { id: 'weekList' })
      )
    ),

    /* ---------- MAIN ---------- */
    h('main', { class: 'app-main', id: 'main' },
      h('section', { class: 'timetable', id: 'timetable' }),
      h('section', { class: 'now-card', id: 'nowCard' }),
      h('div', { class: 'progress', id: 'starTrack' }),
      h('div', { id: 'content' })
    ),

    /* ---------- BOTTOM NAV (mobile) ---------- */
    h('nav', { class: 'bottom-nav', id: 'bottomNav' })
  );

  root.appendChild(shell);
}