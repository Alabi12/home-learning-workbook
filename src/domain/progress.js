// src/domain/progress.js
// Computes star counts and completion %.

export function progressForGrade(curriculum, grade, done) {
  const total = curriculum.countLessons(grade);
  const completed = curriculum.countDone(grade, done);
  const pct = total ? Math.round((completed / total) * 100) : 0;
  return { total, completed, pct };
}