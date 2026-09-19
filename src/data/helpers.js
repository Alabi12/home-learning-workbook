// src/data/helpers.js
// Factories for building lesson and week objects concisely.

export function D(day, emoji, title, objective, notes, exercises, answers, quiz) {
  return {
    day, emoji, title, objective,
    notes: notes || '',
    exercises: exercises || [],
    answers: answers || '',
    quiz: quiz || []
  };
}

export function wk(week, theme, titles) {
  return {
    week, theme,
    days: titles.map((t, i) =>
      D(i + 1, '📘', t, 'Follow the lesson outline below.',
        `<p>This week's theme: <b>${theme}</b>.</p>
         <p>Day ${i + 1} focus: <b>${t}</b>.</p>
         <p>Use your workbook, notebook, or printed page to complete this lesson.</p>`,
        [{ heading: 'Practice', items: [
          'Read the lesson with your parent.',
          'Say the new words out loud.',
          'Do the practice examples in your notebook.'
        ]}],
        '<p>Parent should check the child’s notebook and praise effort. ⭐</p>',
        [{ q: 'What is today’s focus?', a: [t.toLowerCase()] }]
      )
    )
  };
}