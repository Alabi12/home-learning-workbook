// src/domain/quiz.js
// Normalises answers and checks quiz submissions.

export function normalise(str) {
  return String(str).trim().toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.!?]+$/, '');
}

export function checkAnswer(userInput, acceptedAnswers) {
  const val = normalise(userInput);
  if (!val) return { status: 'empty' };
  const ok = acceptedAnswers.some((a) => normalise(a) === val);
  return ok
    ? { status: 'correct', message: '⭐ Great job!' }
    : { status: 'wrong', message: `Try again. Answer: ${acceptedAnswers[0]}` };
}

export function scoreQuiz(quiz, userAnswers) {
  let correct = 0;
  quiz.forEach((q, i) => {
    const res = checkAnswer(userAnswers[i] || '', q.a);
    if (res.status === 'correct') correct++;
  });
  const total = quiz.length;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return { correct, total, pct };
}