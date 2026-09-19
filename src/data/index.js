// src/data/index.js
// Aggregates every grade into a single CURRICULUM_BY_GRADE object.

import { grade2 } from './grade2/index.js';
import { grade3 } from './grade3/index.js';
import { grade4 } from './grade4/index.js';
import { grade5 } from './grade5/index.js';
import { grade6 } from './grade6/index.js';
import { grade7 } from './grade7/index.js';

export const CURRICULUM_BY_GRADE = {
  '2': grade2,
  '3': grade3,
  '4': grade4,
  '5': grade5,
  '6': grade6,
  '7': grade7
};

export const SUBJECT_META = {
  english:   { label: 'English',   icon: '📖' },
  numeracy:  { label: 'Maths',     icon: '🔢' },
  science:   { label: 'Science',   icon: '🔬' },
  computing: { label: 'Computing', icon: '💻' }
};