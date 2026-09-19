// src/utils/dom.js
// Tiny DOM helpers — no framework, just functions.

export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') el.className = v;
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (k.startsWith('on') && typeof v === 'function') {
      el.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (k === 'html') {
      el.innerHTML = v;
    } else if (v !== null && v !== undefined) {
      el.setAttribute(k, v);
    }
  });
  children.flat().forEach((c) => {
    if (c === null || c === undefined) return;
    el.append(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return el;
}

export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
}