// src/components/IBDashboard.jsx
// Dashboard showing all IB units

import React from 'react';
import { ibGrade3 } from '../data/ib/grade3/index.js';

export function IBDashboard({ onSelectUnit }) {
  const units = ibGrade3.numeracy;

  return (
    <div className="ib-dashboard">
      <div className="dashboard-header" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '32px',
        borderRadius: '16px',
        marginBottom: '32px',
        textAlign: 'center'
      }}>
        <h1>🌍 IB PYP Grade 3</h1>
        <h2>International Baccalaureate Primary Years Programme</h2>
        <p>Inquiry-based · Transdisciplinary · Concept-driven</p>
      </div>

      <div className="units-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {units.map((unit, i) => (
          <div
            key={i}
            className="unit-card"
            onClick={() => onSelectUnit(unit)}
            style={{
              background: 'white',
              border: '2px solid #e0e0e0',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>
              {unit.days[0]?.emoji || '📚'}
            </div>
            <h3>Unit {unit.week}: {unit.theme}</h3>
            <p style={{ color: '#666' }}>
              {unit.days.length} days of inquiry-based learning
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}