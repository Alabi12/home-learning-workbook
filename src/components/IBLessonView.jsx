// src/components/IBLessonView.jsx
// Component to display IB lessons with transdisciplinary theme info

import React from 'react';

export function IBLessonView({ lesson, onBack }) {
  return (
    <div className="ib-lesson-view">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="ib-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '20px'
      }}>
        <h1>🌍 IB PYP Lesson</h1>
        <h2>{lesson.theme}</h2>
        <p><strong>Day {lesson.day}:</strong> {lesson.title}</p>
      </div>

      <div className="lesson-objective" style={{
        background: '#f0f4ff',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <strong>🎯 Learning Objective:</strong> {lesson.objective}
      </div>

      <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />

      {lesson.exercises && lesson.exercises.map((ex, i) => (
        <div key={i} className="exercise-block" style={{
          background: '#fafafa',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '12px'
        }}>
          <h3>{ex.heading}</h3>
          <ul>
            {ex.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      ))}

      {lesson.answers && (
        <div className="answers" style={{
          background: '#e8f5e9',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px'
        }}>
          <strong>✅ Answers:</strong>
          <div dangerouslySetInnerHTML={{ __html: lesson.answers }} />
        </div>
      )}

      {lesson.quickCheck && (
        <div className="quick-check" style={{
          background: '#fff3e0',
          padding: '16px',
          borderRadius: '8px'
        }}>
          <h3>💭 Quick Check</h3>
          {lesson.quickCheck.map((q, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <strong>{q.q}</strong>
              <span style={{ color: '#666', marginLeft: '8px' }}>
                (Answer: {q.a.join(' / ')})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}