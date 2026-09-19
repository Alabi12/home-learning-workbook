// src/main.js
import './styles/main.css';
import { renderShell } from './ui/render.js';
import { createApp } from './app.js';
import { h } from './utils/dom.js';

function boot() {
  const root = document.getElementById('app');
  if (!root) {
    console.error('[main] #app not found');
    return;
  }

  renderShell(root);

  /* ---------- Header actions ---------- */
  const actions = document.getElementById('headerActions');
  if (actions) {
    actions.appendChild(actionBtn('🔊', 'Read aloud', () => window.__hlw?.speak?.()));
    actions.appendChild(actionBtn('🖨️', 'Print lesson', () => window.print()));
    actions.appendChild(actionBtn('🌙', 'Toggle theme', () => {
      const cur = document.body.dataset.theme || 'light';
      document.body.dataset.theme = cur === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('hlw:theme', document.body.dataset.theme); } catch {}
    }));
    actions.appendChild(actionBtn('♻️', 'Reset progress', () => window.__hlw?.reset?.()));
  }

  /* ---------- Menu toggle ---------- */
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      if (!sidebar) return;
      sidebar.classList.toggle('is-open');
      document.body.style.overflow = sidebar.classList.contains('is-open') ? 'hidden' : '';
    });
  }

  /* ---------- Bottom nav ---------- */
  const bottomNav = document.getElementById('bottomNav');
  if (bottomNav) {
    bottomNav.appendChild(bottomNavItem('📚', 'Lessons', () => {
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.toggle('is-open');
      document.body.style.overflow = sidebar?.classList.contains('is-open') ? 'hidden' : '';
    }));
    bottomNav.appendChild(bottomNavItem('📅', 'Timetable', () => {
      document.getElementById('timetable')?.scrollIntoView({ behavior: 'smooth' });
    }));
    bottomNav.appendChild(bottomNavItem('🔊', 'Read', () => window.__hlw?.speak?.()));
    bottomNav.appendChild(bottomNavItem('🌙', 'Theme', () => {
      const cur = document.body.dataset.theme || 'light';
      document.body.dataset.theme = cur === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('hlw:theme', document.body.dataset.theme); } catch {}
    }));
  }

  /* ---------- Sidebar auto-close on click outside ---------- */
  document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar || !sidebar.classList.contains('is-open')) return;
    if (sidebar.contains(e.target)) return;
    if (e.target.closest('#menuToggle')) return;
    if (e.target.closest('.bottom-nav__item')) return;
    sidebar.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  /* ---------- Restore theme ---------- */
  try {
    const saved = localStorage.getItem('hlw:theme');
    if (saved) document.body.dataset.theme = saved;
  } catch {}

  const app = createApp(root);
  app.start();
}

/* ---------- Helpers ---------- */
function actionBtn(icon, label, onClick) {
  return h('button', {
    class: 'action-btn',
    'aria-label': label,
    title: label,
    onClick
  },
    h('span', { class: 'action-btn__icon' }, icon),
    h('span', { class: 'action-btn__tooltip' }, label)
  );
}

function bottomNavItem(icon, label, onClick) {
  return h('button', {
    class: 'bottom-nav__item',
    onClick
  },
    h('span', { class: 'bottom-nav__icon' }, icon),
    h('span', { class: 'bottom-nav__label' }, label)
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}