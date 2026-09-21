// src/components/IBUnitOverview.jsx
// Component to display IB unit overview

import React from 'react';

export function IBUnitOverview({ unit, onSelectDay }) {
  return (
    <div className="ib-unit-overview">
      <div className="unit-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '24px',
        borderRadius: '12px',
        marginBottom: '24px'
      }}>
        <h1>🌍 IB PYP Unit</h1>
        <h2>{unit.theme}</h2>
        <p>Week {unit.week} · 5 Days</p>
      </div>

      <div className="transdisciplinary-info" style={{
        background: '#f0f4ff',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <h3>🔍 Transdisciplinary Learning</h3>
        <p>This unit connects numeracy to real-world themes through inquiry-based learning.</p>
      </div>

      <div className="days-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px'
      }}>
        {unit.days.map((day, i) => (
          <div
            key={i}
            className="day-card"
            onClick={() => onSelectDay(day)}
            style={{
              background: 'white',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              padding: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              hover: { borderColor: '#667eea' }
            }}
          >
            <div style={{ fontSize: '32px' }}>{day.emoji}</div>
            <h4>Day {day.day}: {day.title}</h4>
            <p style={{ color: '#666', fontSize: '14px' }}>{day.objective}</p>
          </div>
        ))}
      </div>
    </div>
  );
}