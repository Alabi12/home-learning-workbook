// src/domain/grading.js
// Converts numeric scores into grades & feedback.

export function gradeFromPercent(pct) {
  if (pct >= 80) return { label: 'Excellent', tone: 'ok' };
  if (pct >= 65) return { label: 'Good',      tone: 'ok' };
  if (pct >= 50) return { label: 'Fair',      tone: 'warn' };
  return           { label: 'Needs revision', tone: 'bad' };
}