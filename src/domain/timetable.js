// src/domain/timetable.js
// Weekly timetable + "what should I do now?" logic.

export const TIMETABLE = {
  monday: { label: 'Monday', icon: '1️⃣', hours: '5:00pm – 7:00pm', slots: [
    { start: [17, 0], end: [17, 40], subject: 'english',   note: 'English' },
    { start: [17, 40], end: [18, 20], subject: 'numeracy', note: 'Maths' },
    { start: [18, 20], end: [19, 0], subject: 'science',    note: 'Science' }
  ]},
  tuesday: { label: 'Tuesday', icon: '2️⃣', hours: '5:00pm – 7:00pm', slots: [
    { start: [17, 0], end: [17, 40], subject: 'computing', note: 'Computing' },
    { start: [17, 40], end: [18, 20], subject: 'english',   note: 'English' },
    { start: [18, 20], end: [19, 0], subject: 'numeracy',   note: 'Maths' }
  ]},
  wednesday: { label: 'Wednesday', icon: '3️⃣', hours: '5:00pm – 7:00pm', slots: [
    { start: [17, 0], end: [17, 40], subject: 'science',   note: 'Science' },
    { start: [17, 40], end: [18, 20], subject: 'computing', note: 'Computing' },
    { start: [18, 20], end: [19, 0], subject: 'english',    note: 'English' }
  ]},
  thursday: { label: 'Thursday', icon: '4️⃣', hours: '5:00pm – 7:00pm', slots: [
    { start: [17, 0], end: [17, 40], subject: 'numeracy',  note: 'Maths' },
    { start: [17, 40], end: [18, 20], subject: 'science',   note: 'Science' },
    { start: [18, 20], end: [19, 0], subject: 'computing',  note: 'Computing' }
  ]},
  friday: { label: 'Friday', icon: '5️⃣', hours: '5:00pm – 7:00pm', slots: [
    { start: [17, 0], end: [17, 40], subject: 'english',   note: 'English' },
    { start: [17, 40], end: [18, 20], subject: 'computing', note: 'Computing' },
    { start: [18, 20], end: [19, 0], subject: 'numeracy',  note: 'Maths' }
  ]},
  saturday: { label: 'Saturday', icon: '🌟', hours: '10:00am – 2:00pm', slots: [
    { start: [10, 0], end: [11, 0], subject: 'english',   note: 'English' },
    { start: [11, 0], end: [12, 0], subject: 'numeracy',  note: 'Maths' },
    { start: [12, 0], end: [12, 30], subject: 'break',    note: '🍎 Snack & Rest' },
    { start: [12, 30], end: [13, 15], subject: 'science',  note: 'Science' },
    { start: [13, 15], end: [14, 0], subject: 'computing', note: 'Computing + Weekly Test' }
  ]},
  sunday: { label: 'Sunday', icon: '🙏', hours: '3:00pm – 7:00pm', slots: [
    { start: [15, 0], end: [15, 45], subject: 'revision', note: 'Revise English' },
    { start: [15, 45], end: [16, 30], subject: 'revision', note: 'Revise Maths' },
    { start: [16, 30], end: [17, 15], subject: 'revision', note: 'Revise Science' },
    { start: [17, 15], end: [17, 30], subject: 'break',    note: '🍵 Break' },
    { start: [17, 30], end: [18, 15], subject: 'revision', note: 'Revise Computing' },
    { start: [18, 15], end: [19, 0], subject: 'revision', note: 'Fun Review & Star Check ⭐' }
  ]}
};

export const DAY_KEYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
export const DAY_ORDER = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

const SUBJECT_NAMES = {
  english: '📖 English', numeracy: '🔢 Maths', science: '🔬 Science',
  computing: '💻 Computing', revision: '🔁 Revision', break: '☕ Break'
};

export function pad(n) { return String(n).padStart(2, '0'); }

export function fmtRange(start, end) {
  return `${start[0]}:${pad(start[1])} – ${end[0]}:${pad(end[1])}`;
}

export function getTodayKey(date = new Date()) {
  return DAY_KEYS[date.getDay()];
}

export function getCurrentSlot(date = new Date()) {
  const dayKey = getTodayKey(date);
  const day = TIMETABLE[dayKey];
  const mins = date.getHours() * 60 + date.getMinutes();
  for (const slot of day.slots) {
    const s = slot.start[0] * 60 + slot.start[1];
    const e = slot.end[0] * 60 + slot.end[1];
    if (mins >= s && mins < e) return { day, slot, dayKey };
  }
  return { day, slot: null, dayKey };
}

export function describeCurrentSlot(now = new Date()) {
  const { day, slot } = getCurrentSlot(now);
  if (!slot) {
    return {
      headline: `📚 It's not study time on ${day.label}.`,
      detail: `Study time: ${day.hours}. Rest, play, and read for fun!`
    };
  }
  if (slot.subject === 'break') {
    return {
      headline: `☕ Break time! (${fmtRange(slot.start, slot.end)})`,
      detail: 'Eat a snack, drink water, and rest your eyes.'
    };
  }
  if (slot.subject === 'revision') {
    return {
      headline: `🔁 ${slot.note} (${fmtRange(slot.start, slot.end)})`,
      detail: 'Open the subject on the left and revise the week’s lessons.'
    };
  }
  const meta = SUBJECT_NAMES[slot.subject] || slot.note;
  return {
    headline: `${meta} (${fmtRange(slot.start, slot.end)})`,
    detail: `Click "${meta}" on the left, then open the week and day.`
  };
}