// src/data/grade2/numeracy.js
// Grade 2 Numeracy — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Number · Algebra · Geometry & Measurement · Data

import { D, wk } from '../helpers.js';

export const numeracy = [

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Counting, Representation and Cardinality
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: 'Numbers 1–10', days: [

    D(1, '1️⃣', 'Count 1–5',
      'Count, read, and write numbers from 1 to 5.',
      `<p class='big-emoji'>1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣</p>
       <p>Let's count from 1 to 5. We use numbers to tell <b>how many</b> things there are.</p>

       <h3>The Numbers 1 to 5</h3>
       <ul>
         <li><b>1 = one</b> 🍎</li>
         <li><b>2 = two</b> 🍎🍎</li>
         <li><b>3 = three</b> 🍎🍎🍎</li>
         <li><b>4 = four</b> 🍎🍎🍎🍎</li>
         <li><b>5 = five</b> 🍎🍎🍎🍎🍎</li>
       </ul>

       <h3>How to Write</h3>
       <p>1 — a straight line down.<br>2 — a curve at the top then a straight line.<br>3 — two curves, like a bird flying.<br>4 — a down line with a cross.<br>5 — a straight line then a curve at the bottom.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes. In each box, draw the correct number of dots. Write the number and word below.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Count the apples: 🍎🍎🍎. How many?</p>
       <p><b>Answer:</b> <b>Three</b> apples.</p>`,

      [{ heading: 'Exercise 1.1 — Say and write', items: ['one', 'two', 'three', 'four', 'five'] },
       { heading: 'Exercise 1.2 — Count and write the number', items: ['🍎🍎🍎 → ___', '⭐⭐ → ___', '🐟🐟🐟🐟 → ___', '🌸 → ___', '🍌🍌🍌🍌🍌 → ___'] },
       { heading: 'Exercise 1.3 — Draw and count', items: ['Draw 3 stones.', 'Draw 5 fingers.', 'Draw 1 star.'] }],

      `<p><b>1.2:</b> 1. 3 2. 2 3. 4 4. 1 5. 5</p>`,

      [{ q: 'Count 🍎🍎🍎', a: ['3', 'three'] }, { q: 'Count ⭐⭐', a: ['2', 'two'] }, { q: 'Count 🐟🐟🐟🐟🐟', a: ['5', 'five'] }]),

    D(2, '6️⃣', 'Count 6–10',
      'Count, read, and write numbers from 6 to 10.',
      `<p class='big-emoji'>6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟</p>

       <h3>The Numbers 6 to 10</h3>
       <ul>
         <li><b>6 = six</b> 🍎🍎🍎🍎🍎🍎</li>
         <li><b>7 = seven</b> 🍎🍎🍎🍎🍎🍎🍎</li>
         <li><b>8 = eight</b> 🍎🍎🍎🍎🍎🍎🍎🍎</li>
         <li><b>9 = nine</b> 🍎🍎🍎🍎🍎🍎🍎🍎🍎</li>
         <li><b>10 = ten</b> 🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes with 6, 7, 8, 9, and 10 dots. Write the number and word under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Count the fish: 🐟🐟🐟🐟🐟🐟. How many?</p>
       <p><b>Answer:</b> <b>Six</b> fish.</p>`,

      [{ heading: 'Exercise 2.1 — Say and write', items: ['six', 'seven', 'eight', 'nine', 'ten'] },
       { heading: 'Exercise 2.2 — Count and write the number', items: ['🐟🐟🐟🐟🐟🐟 → ___', '🌟🌟🌟🌟🌟🌟🌟 → ___', '🍎🍎🍎🍎🍎🍎🍎🍎 → ___', '🐝🐝🐝🐝🐝🐝🐝🐝🐝 → ___', '🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸 → ___'] },
       { heading: 'Exercise 2.3 — Write 6 to 10', items: ['6 7 8 9 10'] }],

      `<p><b>2.2:</b> 1. 6 2. 7 3. 8 4. 9 5. 10</p>`,

      [{ q: 'Count 🐟🐟🐟🐟🐟🐟', a: ['6', 'six'] }, { q: 'Count 🌟🌟🌟🌟🌟🌟🌟', a: ['7', 'seven'] }, { q: 'Count 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸', a: ['10', 'ten'] }]),

    D(3, '➕', 'Add to 5',
      'Add numbers whose sum is up to 5.',
      `<p class='big-emoji'>➕ 🍎 🍎</p>
       <p><b>Adding</b> means putting things together to find how many in total. We use the sign <b>+</b> (plus) and <b>=</b> (equals).</p>

       <h3>Examples</h3>
       <ul><li>1 + 1 = 2</li><li>2 + 1 = 3</li><li>2 + 2 = 4</li><li>2 + 3 = 5</li><li>3 + 2 = 5</li><li>4 + 1 = 5</li></ul>

       <h3>Counting on Your Fingers</h3>
       <p>To add 2 + 3: hold up 2 fingers on one hand, 3 on the other, then count them all: 1, 2, 3, 4, 5. Answer = 5.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 apples and 3 apples in a group. Show the total with a big circle around all 5.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 2 + 2 = ?</p>
       <p><b>Answer:</b> 2 + 2 = <b>4</b>.</p>`,

      [{ heading: 'Exercise 3.1 — Add', items: ['1 + 1 = ___', '2 + 1 = ___', '2 + 2 = ___', '2 + 3 = ___', '3 + 2 = ___', '4 + 1 = ___'] },
       { heading: 'Exercise 3.2 — Count and add', items: ['🍎🍎 + 🍎 = ___', '⭐⭐ + ⭐⭐ = ___', '🌸🌸🌸 + 🌸 = ___'] },
       { heading: 'Exercise 3.3 — Draw and add', items: ['Draw 2 + 3 and write the answer.', 'Draw 4 + 1 and write the answer.'] }],

      `<p><b>3.1:</b> 1. 2 2. 3 3. 4 4. 5 5. 5 6. 5</p>
       <p><b>3.2:</b> 1. 3 2. 4 3. 4</p>`,

      [{ q: '1 + 1 = ?', a: ['2'] }, { q: '2 + 2 = ?', a: ['4'] }, { q: '2 + 3 = ?', a: ['5'] }]),

    D(4, '➖', 'Subtract from 5',
      'Subtract numbers from up to 5.',
      `<p class='big-emoji'>➖ 🍎 ❌</p>
       <p><b>Subtracting</b> means taking away. We use the sign <b>−</b> (minus).</p>

       <h3>Examples</h3>
       <ul><li>5 − 1 = 4</li><li>5 − 2 = 3</li><li>5 − 3 = 2</li><li>4 − 1 = 3</li><li>4 − 2 = 2</li><li>3 − 1 = 2</li></ul>

       <h3>Counting Down</h3>
       <p>To subtract 5 − 2: start at 5, count down 2 steps: 5 → 4 → 3. Answer = 3.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 apples. Cross out 2 with a red X. Write "5 − 2 = 3" under the picture.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 − 2 = ?</p>
       <p><b>Answer:</b> 5 − 2 = <b>3</b>.</p>`,

      [{ heading: 'Exercise 4.1 — Subtract', items: ['5 − 1 = ___', '5 − 2 = ___', '5 − 3 = ___', '4 − 1 = ___', '4 − 2 = ___', '3 − 1 = ___'] },
       { heading: 'Exercise 4.2 — Count and subtract', items: ['🍎🍎🍎🍎🍎 − 🍎🍎 = ___', '⭐⭐⭐⭐ − ⭐ = ___', '🌸🌸🌸 − 🌸 = ___'] },
       { heading: 'Exercise 4.3 — Draw and subtract', items: ['Draw 4 balls. Cross out 2. How many are left?'] }],

      `<p><b>4.1:</b> 1. 4 2. 3 3. 2 4. 3 5. 2 6. 2</p>
       <p><b>4.2:</b> 1. 3 2. 3 3. 2</p>`,

      [{ q: '5 − 1 = ?', a: ['4'] }, { q: '5 − 3 = ?', a: ['2'] }, { q: '4 − 2 = ?', a: ['2'] }]),

    D(5, '🎨', 'Number Poster',
      'Consolidate learning about numbers 1–10.',
      `<p>Today we make a number poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Numbers 1–10"</b></li><li>Draw 10 boxes in 2 rows of 5.</li><li>In each box, write the number, the word, and draw that many dots.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Count the dots in each box aloud.</p>`,

      [{ heading: 'Exercise 5.1 — Draw your number poster', items: ['1 – one – ●', '2 – two – ●●', '3 – three – ●●●', '4 – four – ●●●●', '5 – five – ●●●●●', '6 – six – ●●●●●●', '7 – seven – ●●●●●●●', '8 – eight – ●●●●●●●●', '9 – nine – ●●●●●●●●●', '10 – ten – ●●●●●●●●●●'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'How do you write 7 in words?', a: ['seven'] }, { q: 'How do you write 9 in words?', a: ['nine'] }, { q: 'How do you write 10 in words?', a: ['ten'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Numbers 11–20
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: 'Numbers 11–20', days: [

    D(1, '1️⃣', 'Count 11–15',
      'Count, read, and write numbers from 11 to 15.',
      `<p class='big-emoji'>🔢 ✋ ✋</p>
       <p>After 10, the numbers continue. Let's learn 11 to 15.</p>

       <h3>The Numbers 11 to 15</h3>
       <ul><li>11 = <b>eleven</b></li><li>12 = <b>twelve</b></li><li>13 = <b>thirteen</b></li><li>14 = <b>fourteen</b></li><li>15 = <b>fifteen</b></li></ul>

       <h3>Hint</h3>
       <p>Numbers from 13 to 19 end in "<b>-teen</b>" — three-teen becomes thirteen, four-teen becomes fourteen.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 rows with 11, 12, 13, 14, 15 dots. Write the number next to each row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write 12 in words.</p>
       <p><b>Answer:</b> <b>Twelve</b>.</p>`,

      [{ heading: 'Exercise 6.1 — Say and write', items: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'] },
       { heading: 'Exercise 6.2 — Write in words', items: ['11 → ___', '12 → ___', '13 → ___', '14 → ___', '15 → ___'] },
       { heading: 'Exercise 6.3 — Count', items: ['Count 11 stones.', 'Count 13 beans.', 'Count 15 sticks.'] }],

      `<p><b>6.2:</b> 1. eleven 2. twelve 3. thirteen 4. fourteen 5. fifteen</p>`,

      [{ q: 'Write 12 in words.', a: ['twelve'] }, { q: 'Write 13 in words.', a: ['thirteen'] }, { q: 'Write 15 in words.', a: ['fifteen'] }]),

    D(2, '1️⃣', 'Count 16–20',
      'Count, read, and write numbers from 16 to 20.',
      `<p class='big-emoji'>🔢 🔟 🔟</p>

       <h3>The Numbers 16 to 20</h3>
       <ul><li>16 = <b>sixteen</b></li><li>17 = <b>seventeen</b></li><li>18 = <b>eighteen</b></li><li>19 = <b>nineteen</b></li><li>20 = <b>twenty</b></li></ul>

       <h3>Hint</h3>
       <p>Numbers from 16 to 19 also end in "<b>-teen</b>". Only 20 is different — it is <b>twenty</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 rows with 16, 17, 18, 19, 20 dots. Write the number next to each row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write 20 in words.</p>
       <p><b>Answer:</b> <b>Twenty</b>.</p>`,

      [{ heading: 'Exercise 7.1 — Say and write', items: ['sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'] },
       { heading: 'Exercise 7.2 — Write in words', items: ['16 → ___', '17 → ___', '18 → ___', '19 → ___', '20 → ___'] },
       { heading: 'Exercise 7.3 — Count', items: ['Count 16 stones.', 'Count 18 beans.', 'Count 20 sticks.'] }],

      `<p><b>7.2:</b> 1. sixteen 2. seventeen 3. eighteen 4. nineteen 5. twenty</p>`,

      [{ q: 'Write 16 in words.', a: ['sixteen'] }, { q: 'Write 19 in words.', a: ['nineteen'] }, { q: 'Write 20 in words.', a: ['twenty'] }]),

    D(3, '➕', 'Add to 10',
      'Add numbers whose sum is up to 10.',
      `<p class='big-emoji'>➕ 🔟</p>

       <h3>Examples</h3>
       <ul><li>5 + 5 = 10</li><li>4 + 6 = 10</li><li>3 + 7 = 10</li><li>2 + 8 = 10</li><li>1 + 9 = 10</li><li>6 + 3 = 9</li><li>7 + 2 = 9</li></ul>

       <h3>Trick: Add with 10</h3>
       <p>Every number has a partner that makes 10: 1+9, 2+8, 3+7, 4+6, 5+5.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 beads in a row. Circle the first 6 in one colour and the last 4 in another. Write "6 + 4 = 10".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 5 = ?</p>
       <p><b>Answer:</b> 5 + 5 = <b>10</b>.</p>`,

      [{ heading: 'Exercise 8.1 — Add', items: ['5 + 5 = ___', '4 + 6 = ___', '3 + 7 = ___', '2 + 8 = ___', '1 + 9 = ___', '6 + 3 = ___'] },
       { heading: 'Exercise 8.2 — Find the partner', items: ['1 + ___ = 10', '2 + ___ = 10', '3 + ___ = 10', '4 + ___ = 10', '5 + ___ = 10'] },
       { heading: 'Exercise 8.3 — Count and add', items: ['🐟🐟🐟🐟🐟 + 🐟🐟🐟🐟🐟 = ___', '🌸🌸🌸🌸 + 🌸🌸🌸🌸🌸🌸 = ___'] }],

      `<p><b>8.1:</b> 1. 10 2. 10 3. 10 4. 10 5. 10 6. 9</p>
       <p><b>8.2:</b> 1. 9 2. 8 3. 7 4. 6 5. 5</p>`,

      [{ q: '5 + 5 = ?', a: ['10'] }, { q: '3 + 7 = ?', a: ['10'] }, { q: '1 + 9 = ?', a: ['10'] }]),

    D(4, '➖', 'Subtract from 10',
      'Subtract numbers from 10.',
      `<p class='big-emoji'>➖ 🔟</p>

       <h3>Examples</h3>
       <ul><li>10 − 1 = 9</li><li>10 − 2 = 8</li><li>10 − 3 = 7</li><li>10 − 4 = 6</li><li>10 − 5 = 5</li><li>10 − 6 = 4</li><li>10 − 7 = 3</li><li>10 − 8 = 2</li><li>10 − 9 = 1</li><li>10 − 10 = 0</li></ul>

       <h3>Counting Down</h3>
       <p>To subtract 10 − 4: start at 10, count down 4: 10 → 9 → 8 → 7 → 6. Answer = 6.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 dots. Cross out 3. Write "10 − 3 = 7".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 − 3 = ?</p>
       <p><b>Answer:</b> 10 − 3 = <b>7</b>.</p>`,

      [{ heading: 'Exercise 9.1 — Subtract', items: ['10 − 1 = ___', '10 − 2 = ___', '10 − 3 = ___', '10 − 4 = ___', '10 − 5 = ___'] },
       { heading: 'Exercise 9.2 — Find the missing number', items: ['10 − ___ = 9', '10 − ___ = 8', '10 − ___ = 7', '10 − ___ = 6', '10 − ___ = 5'] },
       { heading: 'Exercise 9.3 — Draw and subtract', items: ['Draw 10 balls. Cross out 6. How many left?'] }],

      `<p><b>9.1:</b> 1. 9 2. 8 3. 7 4. 6 5. 5</p>
       <p><b>9.2:</b> 1. 1 2. 2 3. 3 4. 4 5. 5</p>`,

      [{ q: '10 − 1 = ?', a: ['9'] }, { q: '10 − 5 = ?', a: ['5'] }, { q: '10 − 7 = ?', a: ['3'] }]),

    D(5, '🎨', 'Teen Number Poster',
      'Consolidate learning about numbers 11–20.',
      `<p>Today we make a poster for numbers 11–20.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Numbers 11–20"</b></li><li>Draw 10 boxes in 2 rows of 5.</li><li>In each box, write the number, the word, and draw that many dots.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Count the dots in each box aloud.</p>`,

      [{ heading: 'Exercise 10.1 — Draw your poster', items: ['11 – eleven', '12 – twelve', '13 – thirteen', '14 – fourteen', '15 – fifteen', '16 – sixteen', '17 – seventeen', '18 – eighteen', '19 – nineteen', '20 – twenty'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'How do you write 15 in words?', a: ['fifteen'] }, { q: 'How do you write 20 in words?', a: ['twenty'] }, { q: 'How do you write 17 in words?', a: ['seventeen'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GEOMETRY — Shapes
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: 'Shapes', days: [

    D(1, '⚪', 'Circle & Square',
      'Identify and describe circles and squares.',
      `<p class='big-emoji'>⚪ ⬛</p>

       <h3>Circle ⚪</h3>
       <p>A circle is round. It has no sides and no corners. Examples: a ball, a plate, the sun.</p>

       <h3>Square ⬛</h3>
       <p>A square has <b>4 equal sides</b> and <b>4 corners</b>. Examples: a box, a window, a tile.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a circle and a square side by side. Colour the circle red and the square blue.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many sides does a square have?</p>
       <p><b>Answer:</b> A square has <b>4 sides</b>.</p>`,

      [{ heading: 'Exercise 11.1 — Find', items: ['Find 3 circles in your home.', 'Find 3 squares in your home.'] },
       { heading: 'Exercise 11.2 — Draw and label', items: ['Draw a circle.', 'Draw a square.', 'Write the number of sides under each.'] },
       { heading: 'Exercise 11.3 — Answer', items: ['How many sides does a circle have?', 'How many sides does a square have?', 'Is a ball a circle or a square?'] }],

      `<p><b>11.3:</b> 1. 0 (no sides) 2. 4 3. Circle</p>`,

      [{ q: 'How many sides does a square have?', a: ['4', 'four'] }, { q: 'How many sides does a circle have?', a: ['0', 'zero', 'no sides'] }, { q: 'Is a ball a circle or square?', a: ['circle'] }]),

    D(2, '🔺', 'Triangle & Rectangle',
      'Identify and describe triangles and rectangles.',
      `<p class='big-emoji'>🔺 ▬</p>

       <h3>Triangle 🔺</h3>
       <p>A triangle has <b>3 sides</b> and <b>3 corners</b>. Examples: a slice of pizza, a roof.</p>

       <h3>Rectangle ▬</h3>
       <p>A rectangle has <b>4 sides</b> and <b>4 corners</b>. Two sides are longer. Examples: a door, a book, a ruler.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a triangle and a rectangle. Colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many sides does a triangle have?</p>
       <p><b>Answer:</b> A triangle has <b>3 sides</b>.</p>`,

      [{ heading: 'Exercise 12.1 — Find', items: ['Find 3 triangles.', 'Find 3 rectangles.'] },
       { heading: 'Exercise 12.2 — Draw and label', items: ['Draw a triangle.', 'Draw a rectangle.'] },
       { heading: 'Exercise 12.3 — Answer', items: ['How many sides does a triangle have?', 'How many sides does a rectangle have?', 'Which one has 3 sides?'] }],

      `<p><b>12.3:</b> 1. 3 2. 4 3. Triangle</p>`,

      [{ q: 'How many sides does a triangle have?', a: ['3', 'three'] }, { q: 'How many sides does a rectangle have?', a: ['4', 'four'] }]),

    D(3, '⭐', 'Star & Heart',
      'Identify and describe stars and hearts.',
      `<p class='big-emoji'>⭐ ❤️</p>

       <h3>Star ⭐</h3>
       <p>A star has <b>5 points</b>. It looks like the stars in the night sky.</p>

       <h3>Heart ❤️</h3>
       <p>A heart is a symbol of love. It has two round tops and a pointed bottom.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 stars and 3 hearts. Colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many points does a star have?</p>
       <p><b>Answer:</b> A star has <b>5 points</b>.</p>`,

      [{ heading: 'Exercise 13.1 — Say and find', items: ['Find a star shape.', 'Find a heart shape.'] },
       { heading: 'Exercise 13.2 — Draw and label', items: ['Draw a star.', 'Draw a heart.', 'Write 5 under the star.'] },
       { heading: 'Exercise 13.3 — Answer', items: ['How many points does a star have?', 'What does a heart mean?'] }],

      `<p><b>13.3:</b> 1. 5 2. Love</p>`,

      [{ q: 'How many points does a star have?', a: ['5', 'five'] }, { q: 'What does a heart mean?', a: ['love'] }]),

    D(4, '🔢', 'Shape Counting',
      'Count different shapes and record the number.',
      `<p class='big-emoji'>🔢 ⚪ ⬛ 🔺</p>

       <h3>Count the Shapes</h3>
       <p>Look around you. Count how many of each shape you can find.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a table with 4 columns: Circle, Square, Triangle, Rectangle. Draw a picture of each shape at the top. Count how many you see at home and write the number.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Count: ⚪⚪⚪⚪. How many circles?</p>
       <p><b>Answer:</b> <b>4 circles</b>.</p>`,

      [{ heading: 'Exercise 14.1 — Count', items: ['Count: ⚪⚪⚪ = ___', 'Count: ⬛⬛ = ___', 'Count: 🔺🔺🔺🔺 = ___', 'Count: ▬▬▬ = ___'] },
       { heading: 'Exercise 14.2 — Record', items: ['How many circles in your home?', 'How many squares?'] },
       { heading: 'Exercise 14.3 — Draw', items: ['Draw 5 circles and count them.'] }],

      `<p><b>14.1:</b> 1. 3 2. 2 3. 4 4. 3</p>`,

      [{ q: 'Count: ⚪⚪⚪⚪', a: ['4', 'four'] }, { q: 'Count: 🔺🔺🔺', a: ['3', 'three'] }]),

    D(5, '🎨', 'Shape Poster',
      'Consolidate learning about shapes.',
      `<p>Today we make a "Shapes" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Shapes Around Me"</b></li><li>Draw 6 shapes: circle, square, triangle, rectangle, star, heart.</li><li>Label each shape.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and say each shape.</p>`,

      [{ heading: 'Exercise 15.1 — Draw your shape poster', items: ['Circle', 'Square', 'Triangle', 'Rectangle', 'Star', 'Heart'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 shapes.', a: ['circle', 'square', 'triangle', 'any'] }, { q: 'How many sides does a square have?', a: ['4'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ALGEBRA — Patterns
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: 'Patterns', days: [

    D(1, '🔴', 'Colour Patterns',
      'Identify and continue colour patterns.',
      `<p class='big-emoji'>🔴 🔵 🔴 🔵 🔴</p>

       <h3>What is a Pattern?</h3>
       <p>A pattern repeats in a certain order. Colour patterns repeat the same colours again and again.</p>

       <h3>Example Patterns</h3>
       <ul><li>🔴 🔵 🔴 🔵 🔴 🔵 …</li><li>🟡 🟢 🟡 🟢 🟡 🟢 …</li><li>🟣 🟠 🟣 🟠 🟣 🟠 …</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a colour pattern of 6 items.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: 🔴🔵🔴🔵 ___</p>
       <p><b>Answer:</b> The next is <b>🔴 (red)</b>.</p>`,

      [{ heading: 'Exercise 16.1 — Continue', items: ['🔴🔵🔴🔵 ___', '🟡🟢🟡🟢 ___', '🟣🟠🟣🟠 ___'] },
       { heading: 'Exercise 16.2 — Create', items: ['Make your own colour pattern.'] },
       { heading: 'Exercise 16.3 — Draw', items: ['Draw a 6-item colour pattern.'] }],

      `<p><b>16.1:</b> 1. 🔴 2. 🟡 3. 🟣</p>`,

      [{ q: 'Continue: 🔴🔵🔴🔵 ___', a: ['🔴', 'red'] }, { q: 'Continue: 🟡🟢🟡🟢 ___', a: ['🟡', 'yellow'] }]),

    D(2, '🔢', 'Number Patterns',
      'Identify and continue number patterns.',
      `<p class='big-emoji'>1️⃣ 2️⃣ 3️⃣ 4️⃣</p>

       <h3>Number Patterns</h3>
       <ul><li>1, 2, 3, 4, 5, 6, …</li><li>2, 4, 6, 8, 10, …</li><li>5, 10, 15, 20, …</li><li>10, 9, 8, 7, 6, …</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Write the number pattern 1, 2, 3, 4, 5, 6 in a row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: 1, 2, 3, 4, ___</p>
       <p><b>Answer:</b> <b>5</b>.</p>`,

      [{ heading: 'Exercise 17.1 — Continue', items: ['1, 2, 3, 4, ___', '2, 4, 6, 8, ___', '5, 10, 15, ___', '10, 9, 8, ___'] },
       { heading: 'Exercise 17.2 — Say 3 more', items: ['1, 2, 3, …', '2, 4, 6, …'] },
       { heading: 'Exercise 17.3 — Create', items: ['Make your own number pattern.'] }],

      `<p><b>17.1:</b> 1. 5 2. 10 3. 20 4. 7</p>`,

      [{ q: 'Continue: 1, 2, 3, 4, ___', a: ['5'] }, { q: 'Continue: 2, 4, 6, 8, ___', a: ['10'] }]),

    D(3, '🔷', 'Shape Patterns',
      'Identify and continue shape patterns.',
      `<p class='big-emoji'>⬛ 🔺 ⬛ 🔺</p>

       <h3>Shape Patterns</h3>
       <ul><li>⬛ 🔺 ⬛ 🔺 ⬛ …</li><li>⚪ ⬛ ⚪ ⬛ …</li><li>⭐ ❤️ ⭐ ❤️ …</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 6-item shape pattern.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: ⬛🔺⬛🔺 ___</p>
       <p><b>Answer:</b> <b>⬛ (square)</b>.</p>`,

      [{ heading: 'Exercise 18.1 — Continue', items: ['⬛🔺⬛🔺 ___', '⚪⬛⚪⬛ ___', '⭐❤️⭐❤️ ___'] },
       { heading: 'Exercise 18.2 — Create', items: ['Make your own shape pattern.'] },
       { heading: 'Exercise 18.3 — Draw', items: ['Draw a 6-item shape pattern.'] }],

      `<p><b>18.1:</b> 1. ⬛ 2. ⚪ 3. ⭐</p>`,

      [{ q: 'Continue: ⬛🔺⬛🔺 ___', a: ['⬛', 'square'] }, { q: 'Continue: ⭐❤️⭐❤️ ___', a: ['⭐', 'star'] }]),

    D(4, '📝', 'Create a Pattern',
      'Create original patterns using colours, numbers, and shapes.',
      `<p class='big-emoji'>✍️ 🔴 🔢 🔺</p>

       <h3>Create Your Pattern</h3>
       <ul><li>A colour pattern</li><li>A number pattern</li><li>A shape pattern</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 rows: one for colour, one for numbers, one for shapes.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Make a colour pattern.</p>
       <p><b>Answer:</b> 🔴🔴🔵🔴🔴🔵 (or any other repeating pattern).</p>`,

      [{ heading: 'Exercise 19.1 — Create', items: ['A colour pattern', 'A number pattern', 'A shape pattern'] },
       { heading: 'Exercise 19.2 — Draw', items: ['Draw your 3 patterns.'] }],

      `<p>Any valid repeating pattern earns a ⭐.</p>`,

      [{ q: 'Make a pattern with 2 colours.', a: ['any'] }, { q: 'Make a pattern with numbers.', a: ['any'] }]),

    D(5, '🎨', 'Pattern Poster',
      'Consolidate learning about patterns.',
      `<p>Today we make a "Patterns" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Patterns"</b></li><li>Draw 5 different patterns in 5 rows.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say what repeats in each pattern.</p>`,

      [{ heading: 'Exercise 20.1 — Draw your pattern poster', items: ['Pattern 1', 'Pattern 2', 'Pattern 3', 'Pattern 4', 'Pattern 5'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Give an example of a pattern.', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Addition
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: 'Addition', days: [

    D(1, '➕', 'Add to 10',
      'Add numbers whose sum is up to 10.',
      `<p class='big-emoji'>➕ 🔟</p>

       <h3>Examples</h3>
       <ul><li>3 + 2 = 5</li><li>4 + 3 = 7</li><li>5 + 5 = 10</li><li>6 + 3 = 9</li><li>7 + 3 = 10</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 + 3 as apples and count the total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 3 + 2 = ?</p>
       <p><b>Answer:</b> 3 + 2 = <b>5</b>.</p>`,

      [{ heading: 'Exercise 21.1 — Add', items: ['3 + 2 = ___', '4 + 3 = ___', '5 + 5 = ___', '6 + 2 = ___', '7 + 3 = ___'] },
       { heading: 'Exercise 21.2 — Count and add', items: ['🍎🍎 + 🍎 = ___', '⭐⭐⭐ + ⭐⭐ = ___', '🌸🌸🌸🌸 + 🌸 = ___'] },
       { heading: 'Exercise 21.3 — Word problems', items: ['I have 4 mangoes. Mum gives me 3 more. How many?', 'I have 5 books. I get 2 more. How many?'] }],

      `<p><b>21.1:</b> 1. 5 2. 7 3. 10 4. 8 5. 10</p>
       <p><b>21.3:</b> 1. 7 2. 7</p>`,

      [{ q: '3 + 2 = ?', a: ['5'] }, { q: '5 + 5 = ?', a: ['10'] }, { q: '4 + 3 = ?', a: ['7'] }]),

    D(2, '➕', 'Add to 20',
      'Add numbers whose sum is up to 20.',
      `<p class='big-emoji'>➕ 2️⃣0️⃣</p>

       <h3>Examples</h3>
       <ul><li>10 + 5 = 15</li><li>12 + 4 = 16</li><li>15 + 5 = 20</li><li>11 + 3 = 14</li><li>13 + 6 = 19</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 + 5 as two groups. Count the total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 + 5 = ?</p>
       <p><b>Answer:</b> 10 + 5 = <b>15</b>.</p>`,

      [{ heading: 'Exercise 22.1 — Add', items: ['10 + 5 = ___', '12 + 4 = ___', '15 + 5 = ___', '11 + 3 = ___', '13 + 6 = ___'] },
       { heading: 'Exercise 22.2 — Count and add', items: ['10 🍎 + 5 🍎 = ___', '12 ⭐ + 4 ⭐ = ___'] },
       { heading: 'Exercise 22.3 — Word problems', items: ['I have 12 pencils. I get 4 more. How many?', 'I have 15 sweets. I get 5 more. How many?'] }],

      `<p><b>22.1:</b> 1. 15 2. 16 3. 20 4. 14 5. 19</p>
       <p><b>22.3:</b> 1. 16 2. 20</p>`,

      [{ q: '10 + 5 = ?', a: ['15'] }, { q: '15 + 5 = ?', a: ['20'] }, { q: '12 + 4 = ?', a: ['16'] }]),

    D(3, '🍎', 'Add with Pictures',
      'Add using pictures of objects.',
      `<p class='big-emoji'>🍎 🍎 🍎</p>

       <h3>Count and Add</h3>
       <p>We can use pictures to help us add.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 + 3 as apples. Count the total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 🍎🍎 + 🍎🍎🍎 = ?</p>
       <p><b>Answer:</b> <b>5 apples</b>.</p>`,

      [{ heading: 'Exercise 23.1 — Count and add', items: ['🍎🍎 + 🍎 = ___', '⭐⭐⭐ + ⭐⭐ = ___', '🐟🐟🐟 + 🐟🐟 = ___', '🌸🌸 + 🌸🌸🌸 = ___', '🎈🎈🎈 + 🎈 = ___'] },
       { heading: 'Exercise 23.2 — Draw and add', items: ['Draw 2 + 3.', 'Draw 4 + 1.'] }],

      `<p><b>23.1:</b> 1. 3 2. 5 3. 5 4. 5 5. 4</p>`,

      [{ q: '🍎🍎 + 🍎 = ?', a: ['3', 'three'] }, { q: '⭐⭐⭐ + ⭐⭐ = ?', a: ['5', 'five'] }, { q: '🌸🌸 + 🌸🌸🌸 = ?', a: ['5', 'five'] }]),

    D(4, '📝', 'Word Problems',
      'Solve addition word problems.',
      `<p class='big-emoji'>📝 ➕</p>

       <h3>Read and Solve</h3>
       <p>Read the problem carefully. Find the numbers. Add them.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture of the word problem.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> I have 5 mangoes. Mum gives me 3 more. How many now?</p>
       <p><b>Answer:</b> 5 + 3 = <b>8 mangoes</b>.</p>`,

      [{ heading: 'Exercise 24.1 — Solve', items: ['5 + 3 = ___ (mangoes)', 'I have 4 books. I get 2 more. How many?', 'I have 6 sweets. I get 4 more. How many?', 'I have 8 pencils. I get 2 more. How many?', 'I have 7 toys. I get 3 more. How many?'] },
       { heading: 'Exercise 24.2 — Draw', items: ['Draw one word problem and solve it.'] }],

      `<p><b>24.1:</b> 1. 8 2. 6 3. 10 4. 10 5. 10</p>`,

      [{ q: '5 + 3 = ?', a: ['8'] }, { q: '4 + 2 = ?', a: ['6'] }, { q: '6 + 4 = ?', a: ['10'] }]),

    D(5, '🎨', 'Addition Poster',
      'Consolidate learning about addition.',
      `<p>Today we make an "Addition" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Let's Add!"</b></li><li>Draw 3 addition problems with pictures.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the answer to each problem.</p>`,

      [{ heading: 'Exercise 25.1 — Draw your addition poster', items: ['2 + 3', '4 + 5', '6 + 4'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: '2 + 3 = ?', a: ['5'] }, { q: '4 + 5 = ?', a: ['9'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Subtraction
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: 'Subtraction', days: [

    D(1, '➖', 'Subtract to 10',
      'Subtract numbers up to 10.',
      `<p class='big-emoji'>➖ 1️⃣0️⃣</p>

       <h3>Examples</h3>
       <ul><li>8 − 3 = 5</li><li>9 − 4 = 5</li><li>10 − 5 = 5</li><li>7 − 2 = 5</li><li>6 − 4 = 2</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 8 dots. Cross out 3. Count what is left.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 8 − 3 = ?</p>
       <p><b>Answer:</b> 8 − 3 = <b>5</b>.</p>`,

      [{ heading: 'Exercise 26.1 — Subtract', items: ['8 − 3 = ___', '9 − 4 = ___', '10 − 5 = ___', '7 − 2 = ___', '6 − 4 = ___'] },
       { heading: 'Exercise 26.2 — Count and subtract', items: ['🍎🍎🍎🍎🍎 − 🍎🍎 = ___', '⭐⭐⭐⭐ − ⭐ = ___', '🐟🐟🐟🐟 − 🐟🐟 = ___'] },
       { heading: 'Exercise 26.3 — Word problems', items: ['I have 8 sweets. I eat 3. How many left?', 'I have 10 books. I give 4 away. How many left?'] }],

      `<p><b>26.1:</b> 1. 5 2. 5 3. 5 4. 5 5. 2</p>
       <p><b>26.3:</b> 1. 5 2. 6</p>`,

      [{ q: '8 − 3 = ?', a: ['5'] }, { q: '10 − 5 = ?', a: ['5'] }, { q: '7 − 2 = ?', a: ['5'] }]),

    D(2, '➖', 'Subtract to 20',
      'Subtract numbers up to 20.',
      `<p class='big-emoji'>➖ 2️⃣0️⃣</p>

       <h3>Examples</h3>
       <ul><li>15 − 5 = 10</li><li>18 − 8 = 10</li><li>20 − 10 = 10</li><li>14 − 4 = 10</li><li>16 − 6 = 10</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 15 dots. Cross out 5. Count what is left.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 15 − 5 = ?</p>
       <p><b>Answer:</b> 15 − 5 = <b>10</b>.</p>`,

      [{ heading: 'Exercise 27.1 — Subtract', items: ['15 − 5 = ___', '18 − 8 = ___', '20 − 10 = ___', '14 − 4 = ___', '16 − 6 = ___'] },
       { heading: 'Exercise 27.2 — Count and subtract', items: ['15 🍎 − 5 🍎 = ___', '20 ⭐ − 10 ⭐ = ___'] },
       { heading: 'Exercise 27.3 — Word problems', items: ['I have 15 sweets. I eat 5. How many left?', 'I have 20 books. I give 10 away. How many?'] }],

      `<p><b>27.1:</b> 1. 10 2. 10 3. 10 4. 10 5. 10</p>`,

      [{ q: '15 − 5 = ?', a: ['10'] }, { q: '20 − 10 = ?', a: ['10'] }, { q: '18 − 8 = ?', a: ['10'] }]),

    D(3, '🍎', 'Subtract with Pictures',
      'Subtract using pictures of objects.',
      `<p class='big-emoji'>🍎 ❌</p>

       <h3>Count and Subtract</h3>
       <p>We can use pictures to help us subtract. Cross out the ones we take away.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 apples. Cross out 2. Count the rest.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 🍎🍎🍎🍎🍎 − 🍎🍎 = ?</p>
       <p><b>Answer:</b> <b>3 apples</b>.</p>`,

      [{ heading: 'Exercise 28.1 — Count and subtract', items: ['🍎🍎🍎🍎🍎 − 🍎🍎 = ___', '⭐⭐⭐⭐ − ⭐ = ___', '🐟🐟🐟🐟 − 🐟🐟 = ___', '🌸🌸🌸🌸🌸 − 🌸🌸🌸 = ___'] },
       { heading: 'Exercise 28.2 — Draw and subtract', items: ['Draw 6 balls. Cross out 2. How many left?', 'Draw 7 stars. Cross out 3. How many left?'] }],

      `<p><b>28.1:</b> 1. 3 2. 3 3. 2 4. 2</p>`,

      [{ q: '🍎🍎🍎🍎🍎 − 🍎🍎 = ?', a: ['3', 'three'] }, { q: '⭐⭐⭐⭐ − ⭐ = ?', a: ['3', 'three'] }]),

    D(4, '📝', 'Word Problems',
      'Solve subtraction word problems.',
      `<p class='big-emoji'>📝 ➖</p>

       <h3>Read and Solve</h3>
       <p>Read the problem carefully. Find the numbers. Subtract them.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture of the word problem.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> I have 8 sweets. I eat 3. How many left?</p>
       <p><b>Answer:</b> 8 − 3 = <b>5 sweets</b>.</p>`,

      [{ heading: 'Exercise 29.1 — Solve', items: ['8 − 3 = ___ (sweets)', 'I have 10 books. I give 4 away. How many left?', 'I have 9 mangoes. I eat 5. How many left?', 'I have 12 pencils. I lose 2. How many left?', 'I have 15 oranges. I sell 5. How many left?'] },
       { heading: 'Exercise 29.2 — Draw', items: ['Draw one word problem and solve it.'] }],

      `<p><b>29.1:</b> 1. 5 2. 6 3. 4 4. 10 5. 10</p>`,

      [{ q: '8 − 3 = ?', a: ['5'] }, { q: '10 − 4 = ?', a: ['6'] }, { q: '15 − 5 = ?', a: ['10'] }]),

    D(5, '🎨', 'Subtraction Poster',
      'Consolidate learning about subtraction.',
      `<p>Today we make a "Subtraction" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Let's Subtract!"</b></li><li>Draw 3 subtraction problems with pictures.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the answer to each problem.</p>`,

      [{ heading: 'Exercise 30.1 — Draw your subtraction poster', items: ['5 − 2', '7 − 3', '8 − 4'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: '5 − 2 = ?', a: ['3'] }, { q: '8 − 4 = ?', a: ['4'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Money
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: 'Money', days: [

    D(1, '💰', 'Money 1–5',
      'Recognise coins and notes from 1 to 5 cedis.',
      `<p class='big-emoji'>💰 🪙 💵</p>

       <h3>Ghanaian Money</h3>
       <ul><li>1 cedi = 100 pesewas</li><li>Coins: 1 pesewa, 5 pesewas, 10 pesewas, 20 pesewas, 50 pesewas, 1 cedi</li><li>Notes: 1 cedi, 2 cedis, 5 cedis</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 1 cedi coin and a 5 cedi note.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many cedis is 5 + 2?</p>
       <p><b>Answer:</b> <b>7 cedis</b>.</p>`,

      [{ heading: 'Exercise 31.1 — Say', items: ['How many pesewas in 1 cedi?', 'What coins do you know?', 'What notes do you know?'] },
       { heading: 'Exercise 31.2 — Add', items: ['5 + 2 = ___ cedis', '1 + 1 + 1 = ___ cedis', '2 + 2 = ___ cedis'] },
       { heading: 'Exercise 31.3 — Draw', items: ['Draw 3 coins and 1 note.'] }],

      `<p><b>31.1:</b> 1. 100 2. 1p, 5p, 10p, 20p, 50p, 1 cedi 3. 1, 2, 5 cedis</p>
       <p><b>31.2:</b> 1. 7 2. 3 3. 4</p>`,

      [{ q: '5 + 2 = ? cedis', a: ['7', 'seven'] }, { q: '1 + 1 + 1 = ? cedis', a: ['3', 'three'] }]),

    D(2, '💰', 'Money 10–20',
      'Recognise coins and notes from 10 to 20 cedis.',
      `<p class='big-emoji'>💰 🔟 2️⃣0️⃣</p>

       <h3>Notes 10–20 Cedis</h3>
       <ul><li>10 cedis</li><li>20 cedis</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 10 cedi note and a 20 cedi note.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 + 10 = ? cedis</p>
       <p><b>Answer:</b> <b>20 cedis</b>.</p>`,

      [{ heading: 'Exercise 32.1 — Add', items: ['10 + 10 = ___ cedis', '5 + 5 + 5 = ___ cedis', '10 + 5 = ___ cedis'] },
       { heading: 'Exercise 32.2 — Draw', items: ['Draw a 10 cedi note.'] }],

      `<p><b>32.1:</b> 1. 20 2. 15 3. 15</p>`,

      [{ q: '10 + 10 = ? cedis', a: ['20', 'twenty'] }, { q: '5 + 5 + 5 = ? cedis', a: ['15', 'fifteen'] }]),

    D(3, '💰', 'Adding Money',
      'Add amounts of money.',
      `<p class='big-emoji'>➕ 💰</p>

       <h3>Examples</h3>
       <ul><li>5 + 5 = 10 cedis</li><li>10 + 5 = 15 cedis</li><li>10 + 10 = 20 cedis</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 coins of 5 cedis. Write "5 + 5 = 10".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 5 = ?</p>
       <p><b>Answer:</b> 5 + 5 = <b>10 cedis</b>.</p>`,

      [{ heading: 'Exercise 33.1 — Add', items: ['5 + 5 = ___', '10 + 5 = ___', '10 + 10 = ___', '5 + 2 = ___', '10 + 2 = ___'] },
       { heading: 'Exercise 33.2 — Word problems', items: ['I have 5 cedis. Mum gives me 5 more. How much?', 'I have 10 cedis. I find 5 cedis. How much?'] }],

      `<p><b>33.1:</b> 1. 10 2. 15 3. 20 4. 7 5. 12</p>`,

      [{ q: '5 + 5 = ?', a: ['10'] }, { q: '10 + 5 = ?', a: ['15'] }]),

    D(4, '💰', 'Subtracting Money',
      'Subtract amounts of money.',
      `<p class='big-emoji'>➖ 💰</p>

       <h3>Examples</h3>
       <ul><li>20 − 5 = 15 cedis</li><li>20 − 10 = 10 cedis</li><li>10 − 5 = 5 cedis</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 20 cedi note. Write "20 − 5 = 15".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 20 − 5 = ?</p>
       <p><b>Answer:</b> 20 − 5 = <b>15 cedis</b>.</p>`,

      [{ heading: 'Exercise 34.1 — Subtract', items: ['20 − 5 = ___', '20 − 10 = ___', '10 − 5 = ___', '15 − 5 = ___', '10 − 2 = ___'] },
       { heading: 'Exercise 34.2 — Word problems', items: ['I have 20 cedis. I buy a book for 5. How much left?', 'I have 10 cedis. I buy rice for 5. How much left?'] }],

      `<p><b>34.1:</b> 1. 15 2. 10 3. 5 4. 10 5. 8</p>`,

      [{ q: '20 − 5 = ?', a: ['15'] }, { q: '20 − 10 = ?', a: ['10'] }]),

    D(5, '🎨', 'Money Poster',
      'Consolidate learning about money.',
      `<p>Today we make a "Money" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Ghanaian Money"</b></li><li>Draw the coins and notes you have learned.</li><li>Label each one with its value.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the value of each coin and note.</p>`,

      [{ heading: 'Exercise 35.1 — Draw your money poster', items: ['1 cedi', '2 cedis', '5 cedis', '10 cedis', '20 cedis'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'How many pesewas in 1 cedi?', a: ['100'] }, { q: 'Name 3 coins.', a: ['1 pesewa', '5 pesewas', '10 pesewas', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GEOMETRY & MEASUREMENT — Measurement
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: 'Measurement', days: [

    D(1, '📏', 'Length',
      'Compare the length of objects.',
      `<p class='big-emoji'>📏 📐</p>

       <h3>Length Words</h3>
       <ul><li><b>long</b> — a long rope</li><li><b>short</b> — a short pencil</li><li><b>tall</b> — a tall tree</li><li><b>small</b> — a small ant</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a long rope and a short rope.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which is longer, a pencil or a ruler?</p>
       <p><b>Answer:</b> A <b>ruler</b> is usually longer.</p>`,

      [{ heading: 'Exercise 36.1 — Compare', items: ['Which is longer: a pencil or a ruler?', 'Which is shorter: a finger or an arm?', 'Which is taller: a tree or a chair?'] },
       { heading: 'Exercise 36.2 — Find', items: ['Find something long.', 'Find something short.', 'Find something tall.'] },
       { heading: 'Exercise 36.3 — Draw', items: ['Draw a long line and a short line.'] }],

      `<p><b>36.1:</b> 1. Ruler 2. Finger 3. Tree</p>`,

      [{ q: 'Which is longer: a pencil or a ruler?', a: ['ruler', 'pencil'] }, { q: 'Which is shorter: a finger or an arm?', a: ['finger'] }]),

    D(2, '⚖️', 'Weight',
      'Compare the weight of objects.',
      `<p class='big-emoji'>⚖️ 🪨 🍃</p>

       <h3>Weight Words</h3>
       <ul><li><b>heavy</b> — a heavy stone</li><li><b>light</b> — a light feather</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a stone and a feather. Write "heavy" and "light" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which is heavier, a stone or a leaf?</p>
       <p><b>Answer:</b> A <b>stone</b>.</p>`,

      [{ heading: 'Exercise 37.1 — Compare', items: ['Which is heavier: a stone or a leaf?', 'Which is lighter: a feather or a book?', 'Which is heavier: a chair or a pencil?'] },
       { heading: 'Exercise 37.2 — Find', items: ['Find something heavy.', 'Find something light.'] },
       { heading: 'Exercise 37.3 — Draw', items: ['Draw something heavy and something light.'] }],

      `<p><b>37.1:</b> 1. Stone 2. Feather 3. Chair</p>`,

      [{ q: 'Which is heavier: a stone or a leaf?', a: ['stone'] }, { q: 'Which is lighter: a feather or a book?', a: ['feather'] }]),

    D(3, '🥛', 'Capacity',
      'Compare the capacity of containers.',
      `<p class='big-emoji'>🥛 🪣 🥄</p>

       <h3>Capacity Words</h3>
       <ul><li><b>full</b> — a full cup</li><li><b>empty</b> — an empty cup</li><li><b>more</b> — a bucket holds more than a cup</li><li><b>less</b> — a spoon holds less than a cup</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a full cup and an empty cup.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which holds more, a cup or a bucket?</p>
       <p><b>Answer:</b> A <b>bucket</b>.</p>`,

      [{ heading: 'Exercise 38.1 — Compare', items: ['Which holds more: a cup or a bucket?', 'Which holds less: a spoon or a cup?', 'Which holds more: a bottle or a glass?'] },
       { heading: 'Exercise 38.2 — Find', items: ['Find something full.', 'Find something empty.'] },
       { heading: 'Exercise 38.3 — Draw', items: ['Draw a full cup and an empty cup.'] }],

      `<p><b>38.1:</b> 1. Bucket 2. Spoon 3. Bottle</p>`,

      [{ q: 'Which holds more: a cup or a bucket?', a: ['bucket'] }, { q: 'Which holds less: a spoon or a cup?', a: ['spoon'] }]),

    D(4, '📝', 'Measure Sentences',
      'Write sentences using measurement words.',
      `<p class='big-emoji'>✍️ 📏 📝</p>

       <h3>Example Sentences</h3>
       <ul><li>The tree is <b>tall</b>.</li><li>The pencil is <b>short</b>.</li><li>The stone is <b>heavy</b>.</li><li>The cup is <b>full</b>.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 things and write a sentence about each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The tree is ___."</p>
       <p><b>Answer:</b> The tree is <b>tall</b>.</p>`,

      [{ heading: 'Exercise 39.1 — Write 3 sentences', items: ['The ______ is tall.', 'The ______ is short.', 'The ______ is heavy.'] },
       { heading: 'Exercise 39.2 — Fill in the blank', items: ['The tree is ___.', 'The pencil is ___.', 'The stone is ___.'] },
       { heading: 'Exercise 39.3 — Draw', items: ['Draw a tall tree and a short pencil.'] }],

      `<p><b>39.2:</b> 1. tall 2. short 3. heavy</p>`,

      [{ q: 'Complete: The tree is ___.', a: ['tall'] }, { q: 'Complete: The pencil is ___.', a: ['short'] }]),

    D(5, '🎨', 'Measure Poster',
      'Consolidate learning about measurement.',
      `<p>Today we make a "Measurement" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Long, Short, Heavy, Light"</b></li><li>Draw pairs: long/short, tall/small, heavy/light.</li><li>Label each.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each word and its meaning.</p>`,

      [{ heading: 'Exercise 40.1 — Draw your measurement poster', items: ['tall tree', 'short pencil', 'heavy stone', 'light feather'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Which is heavier: a stone or a leaf?', a: ['stone'] }, { q: 'Which is longer: a pencil or a ruler?', a: ['ruler'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Time
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: 'Time', days: [

    D(1, '🕐', "O'clock",
      'Read time on the hour.',
      `<p class='big-emoji'>🕐 🕒 🕕</p>

       <h3>O'clock Times</h3>
       <ul><li>1:00 = one o'clock</li><li>3:00 = three o'clock</li><li>6:00 = six o'clock</li><li>9:00 = nine o'clock</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 clocks showing 1, 3, 6, 9 o'clock.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 3:00?</p>
       <p><b>Answer:</b> <b>Three o'clock</b>.</p>`,

      [{ heading: 'Exercise 41.1 — Say', items: ['1:00', '3:00', '6:00', '9:00'] },
       { heading: 'Exercise 41.2 — Answer', items: ['What time is 3:00?', 'What time is 6:00?'] },
       { heading: 'Exercise 41.3 — Draw', items: ['Draw a clock showing 3:00.'] }],

      `<p><b>41.2:</b> 1. three o'clock 2. six o'clock</p>`,

      [{ q: 'What time is 3:00?', a: ["three o'clock", '3 o\'clock'] }, { q: 'What time is 6:00?', a: ["six o'clock", '6 o\'clock'] }]),

    D(2, '🕜', 'Half Past',
      'Read time at half past the hour.',
      `<p class='big-emoji'>🕜 🕞</p>

       <h3>Half Past Times</h3>
       <ul><li>1:30 = half past one</li><li>3:30 = half past three</li><li>6:30 = half past six</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 clocks showing half past 1, 3, 6.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 3:30?</p>
       <p><b>Answer:</b> <b>Half past three</b>.</p>`,

      [{ heading: 'Exercise 42.1 — Say', items: ['1:30', '3:30', '6:30'] },
       { heading: 'Exercise 42.2 — Answer', items: ['What is 3:30?', 'What is 6:30?'] },
       { heading: 'Exercise 42.3 — Draw', items: ['Draw a clock showing half past 4.'] }],

      `<p><b>42.2:</b> 1. half past three 2. half past six</p>`,

      [{ q: 'What is 3:30?', a: ['half past three'] }, { q: 'What is 6:30?', a: ['half past six'] }]),

    D(3, '📅', 'Days of the Week',
      'Name the days of the week in order.',
      `<p class='big-emoji'>📅 🗓️</p>

       <h3>The 7 Days</h3>
       <ol><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li>Sunday</li></ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 7 boxes and write each day of the week.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What day comes after Monday?</p>
       <p><b>Answer:</b> <b>Tuesday</b>.</p>`,

      [{ heading: 'Exercise 43.1 — Say', items: ['What day is today?', 'What day is tomorrow?', 'What day was yesterday?'] },
       { heading: 'Exercise 43.2 — Answer', items: ['What day comes after Monday?', 'What day comes before Sunday?', 'How many days in a week?'] },
       { heading: 'Exercise 43.3 — Write', items: ['Write the 7 days in order.'] }],

      `<p><b>43.2:</b> 1. Tuesday 2. Saturday 3. Seven</p>`,

      [{ q: 'What day comes after Monday?', a: ['tuesday'] }, { q: 'What day is the last day?', a: ['sunday'] }]),

    D(4, '📝', 'Time Sentences',
      'Write sentences using time words.',
      `<p class='big-emoji'>✍️ 🕐 📝</p>

       <h3>Example Sentences</h3>
       <ul><li>I wake up at <b>6 o'clock</b>.</li><li>I eat lunch at <b>12 o'clock</b>.</li><li>I go to bed at <b>9 o'clock</b>.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing when you wake up.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I wake up at ___."</p>
       <p><b>Answer:</b> I wake up at <b>6 o'clock</b>.</p>`,

      [{ heading: 'Exercise 44.1 — Write 3 sentences', items: ['I wake up at ______.', 'I eat lunch at ______.', 'I sleep at ______.'] },
       { heading: 'Exercise 44.2 — Fill in the blank', items: ['I wake up at ___.', 'I sleep at ___.'] },
       { heading: 'Exercise 44.3 — Draw', items: ['Draw the clock when you wake up.'] }],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: I wake up at ___.', a: ['any'] }, { q: 'Complete: I sleep at ___.', a: ['any'] }]),

    D(5, '🎨', 'Clock Poster',
      'Consolidate learning about time.',
      `<p>Today we make a "Time" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Telling Time"</b></li><li>Draw 5 clocks showing different times.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the time on each clock.</p>`,

      [{ heading: 'Exercise 45.1 — Draw your clock poster', items: ['3:00', '6:00', '9:00', '12:00', '4:30'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is 3:00?', a: ["three o'clock"] }, { q: 'What is 4:30?', a: ['half past four'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Counting to 100
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: 'Counting to 100', days: [

    D(1, '🔢', 'Count by 2s',
      'Skip-count by 2s up to 20.',
      `<p class='big-emoji'>2️⃣ 4️⃣ 6️⃣ 8️⃣</p>

       <h3>Counting by 2s</h3>
       <p>2, 4, 6, 8, 10, 12, 14, 16, 18, 20</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Write 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 in a row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: 2, 4, 6, ___</p>
       <p><b>Answer:</b> <b>8</b>.</p>`,

      [{ heading: 'Exercise 46.1 — Continue', items: ['2, 4, 6, ___', '8, 10, 12, ___', '14, 16, 18, ___'] },
       { heading: 'Exercise 46.2 — Count', items: ['Count by 2s to 20.'] },
       { heading: 'Exercise 46.3 — Write', items: ['Write 2 to 20 counting by 2s.'] }],

      `<p><b>46.1:</b> 1. 8 2. 14 3. 20</p>`,

      [{ q: 'Continue: 2, 4, 6, ___', a: ['8'] }, { q: 'Continue: 10, 12, 14, ___', a: ['16'] }]),

    D(2, '🔢', 'Count by 5s',
      'Skip-count by 5s up to 50.',
      `<p class='big-emoji'>5️⃣ 🔟 1️⃣5️⃣</p>

       <h3>Counting by 5s</h3>
       <p>5, 10, 15, 20, 25, 30, 35, 40, 45, 50</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Write 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 in a row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: 5, 10, 15, ___</p>
       <p><b>Answer:</b> <b>20</b>.</p>`,

      [{ heading: 'Exercise 47.1 — Continue', items: ['5, 10, 15, ___', '20, 25, 30, ___', '35, 40, 45, ___'] },
       { heading: 'Exercise 47.2 — Count', items: ['Count by 5s to 50.'] },
       { heading: 'Exercise 47.3 — Write', items: ['Write 5 to 50 counting by 5s.'] }],

      `<p><b>47.1:</b> 1. 20 2. 35 3. 50</p>`,

      [{ q: 'Continue: 5, 10, 15, ___', a: ['20'] }, { q: 'Continue: 20, 25, 30, ___', a: ['35'] }]),

    D(3, '🔢', 'Count by 10s',
      'Skip-count by 10s up to 100.',
      `<p class='big-emoji'>🔟 2️⃣0️⃣ 3️⃣0️⃣</p>

       <h3>Counting by 10s</h3>
       <p>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Write 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 in a row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Continue: 10, 20, 30, ___</p>
       <p><b>Answer:</b> <b>40</b>.</p>`,

      [{ heading: 'Exercise 48.1 — Continue', items: ['10, 20, 30, ___', '40, 50, 60, ___', '70, 80, 90, ___'] },
       { heading: 'Exercise 48.2 — Count', items: ['Count by 10s to 100.'] },
       { heading: 'Exercise 48.3 — Write', items: ['Write 10 to 100 counting by 10s.'] }],

      `<p><b>48.1:</b> 1. 40 2. 70 3. 100</p>`,

      [{ q: 'Continue: 10, 20, 30, ___', a: ['40'] }, { q: 'Continue: 40, 50, 60, ___', a: ['70'] }]),

    D(4, '📝', 'Number Sentences',
      'Write number sentences about counting.',
      `<p class='big-emoji'>✍️ 🔢 📝</p>

       <h3>Number Sentences</h3>
       <ul><li>I can count to 100.</li><li>I can count by 2s.</li><li>I can count by 5s.</li><li>I can count by 10s.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Write 1–20 in a grid.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes after 99?</p>
       <p><b>Answer:</b> <b>100</b>.</p>`,

      [{ heading: 'Exercise 49.1 — Write', items: ['Write 1–20.', 'Write 10, 20, 30… 100.', 'Write 5, 10, 15… 50.'] },
       { heading: 'Exercise 49.2 — Answer', items: ['What comes after 99?', 'What comes before 50?'] }],

      `<p><b>49.2:</b> 1. 100 2. 49</p>`,

      [{ q: 'What comes after 99?', a: ['100'] }, { q: 'What comes before 50?', a: ['49'] }]),

    D(5, '🎨', '100 Chart',
      'Consolidate learning about counting to 100.',
      `<p>Today we make a "100 Chart".</p>

       <h3>What to Draw</h3>
       <ul><li>Draw a grid with 10 rows and 10 columns.</li><li>Write numbers 1 to 100 in the grid.</li><li>Colour the 5s red and the 10s blue.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your chart. Count by 2s, 5s, and 10s.</p>`,

      [{ heading: 'Exercise 50.1 — Draw your 100 chart', items: ['Numbers 1–100', '5s in red', '10s in blue'] }],

      `<p>⭐ for a complete chart.</p>`,

      [{ q: 'Count by 10s: 10, 20, ___', a: ['30'] }, { q: 'Count by 5s: 5, 10, ___', a: ['15'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Fractions
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: 'Fractions', days: [

    D(1, '🍕', 'Halves',
      'Understand and identify one half.',
      `<p class='big-emoji'>🍕 ✂️</p>

       <h3>What is a Half?</h3>
       <p>When we cut something into <b>2 equal parts</b>, each part is a <b>half</b>. We write half as: <b>1/2</b></p>

       <h3>Examples</h3>
       <ul><li>Half of an orange</li><li>Half of a piece of bread</li><li>Half of 4 apples = 2 apples</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a circle. Draw a line through the middle. Colour one half. Write "1/2" below.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is half of 6?</p>
       <p><b>Answer:</b> Half of 6 is <b>3</b>.</p>`,

      [{ heading: 'Exercise 51.1 — Say', items: ['Cut a piece of paper into 2 equal parts.', 'Colour one half.', 'Say "one half".'] },
       { heading: 'Exercise 51.2 — Answer', items: ['How many halves make a whole?', 'Is half of 4 = 2?', 'Is half of 8 = 4?'] },
       { heading: 'Exercise 51.3 — Draw', items: ['Draw 2 halves of a circle.'] }],

      `<p><b>51.2:</b> 1. 2 2. Yes 3. Yes</p>`,

      [{ q: 'How many halves make a whole?', a: ['2', 'two'] }, { q: 'Is half of 4 = 2?', a: ['yes'] }, { q: 'Half of 6?', a: ['3'] }]),

    D(2, '🍰', 'Quarters',
      'Understand and identify one quarter.',
      `<p class='big-emoji'>🍰 ✂️</p>

       <h3>What is a Quarter?</h3>
       <p>When we cut something into <b>4 equal parts</b>, each part is a <b>quarter</b>. We write quarter as: <b>1/4</b></p>

       <h3>Examples</h3>
       <ul><li>Quarter of a pawpaw</li><li>Quarter of 8 mangoes = 2</li><li>Two quarters = one half</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a square. Draw lines to make 4 equal parts. Colour one quarter.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a quarter of 8?</p>
       <p><b>Answer:</b> A quarter of 8 is <b>2</b>.</p>`,

      [{ heading: 'Exercise 52.1 — Say', items: ['Cut into 4 equal parts.', 'Colour one quarter.'] },
       { heading: 'Exercise 52.2 — Answer', items: ['How many quarters make a whole?', 'Is a quarter of 8 = 2?', 'Is a quarter of 12 = 3?'] },
       { heading: 'Exercise 52.3 — Draw', items: ['Draw a square divided into 4 quarters.'] }],

      `<p><b>52.2:</b> 1. 4 2. Yes 3. Yes</p>`,

      [{ q: 'How many quarters make a whole?', a: ['4', 'four'] }, { q: 'Is a quarter of 8 = 2?', a: ['yes'] }]),

    D(3, '📝', 'Fractions in Words',
      'Write fractions in words.',
      `<p class='big-emoji'>✍️ ½ ¼</p>

       <h3>Fractions in Words</h3>
       <ul><li>1/2 = one half</li><li>1/4 = one quarter</li><li>2/4 = two quarters (= one half)</li><li>1/3 = one third</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Write 1/2 and 1/4 and draw a picture for each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you say 1/2?</p>
       <p><b>Answer:</b> <b>One half</b>.</p>`,

      [{ heading: 'Exercise 53.1 — Write in words', items: ['1/2 = ___', '1/4 = ___', '2/4 = ___', '1/3 = ___'] },
       { heading: 'Exercise 53.2 — Say', items: ['Say 1/2.', 'Say 1/4.'] }],

      `<p><b>53.1:</b> 1. one half 2. one quarter 3. two quarters 4. one third</p>`,

      [{ q: '1/2 in words?', a: ['one half', 'half'] }, { q: '1/4 in words?', a: ['one quarter', 'quarter'] }]),

    D(4, '📝', 'Fraction Sentences',
      'Write sentences using fractions.',
      `<p class='big-emoji'>✍️ 🍕 📝</p>

       <h3>Example Sentences</h3>
       <ul><li>I ate <b>half</b> of my apple.</li><li>She ate a <b>quarter</b> of the cake.</li><li>Two <b>quarters</b> make a half.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw an apple cut in half. Write "I ate half of my apple."</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ate ___ of my apple."</p>
       <p><b>Answer:</b> I ate <b>half</b> of my apple.</p>`,

      [{ heading: 'Exercise 54.1 — Write 3 sentences', items: ['I ate ______ of my ______.', 'She ate ______ of the ______.', 'He ate ______ of the ______.'] },
       { heading: 'Exercise 54.2 — Fill in the blank', items: ['I ate ___ of my apple.', 'She ate a ___ of the cake.'] },
       { heading: 'Exercise 54.3 — Draw', items: ['Draw a cake and colour half of it.'] }],

      `<p><b>54.2:</b> 1. half 2. quarter</p>`,

      [{ q: 'Complete: I ate ___ of my apple.', a: ['half'] }, { q: 'Complete: She ate a ___ of the cake.', a: ['quarter'] }]),

    D(5, '🎨', 'Fraction Poster',
      'Consolidate learning about fractions.',
      `<p>Today we make a "Fractions" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Fractions"</b></li><li>Draw a whole, a half, and a quarter.</li><li>Write the fraction under each.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each fraction.</p>`,

      [{ heading: 'Exercise 55.1 — Draw your fraction poster', items: ['1 (whole)', '1/2 (half)', '1/4 (quarter)'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'How many halves in a whole?', a: ['2'] }, { q: 'How many quarters in a whole?', a: ['4'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Review (Week 12)
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: 'Review', days: [

    D(1, '🔁', 'Review Numbers',
      'Review counting 1–100.',
      `<p class='big-emoji'>🔢 🔁</p>

       <h3>Review</h3>
       <ul><li>Count 1–20</li><li>Count by 2s</li><li>Count by 5s</li><li>Count by 10s</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Count by 10s: 10, 20, ___</p>
       <p><b>Answer:</b> <b>30</b>.</p>`,

      [{ heading: 'Exercise 56.1 — Say', items: ['Count 1–20.', 'Count by 2s.', 'Count by 5s.', 'Count by 10s.'] },
       { heading: 'Exercise 56.2 — Answer', items: ['Count by 10s: 10, 20, ___', 'Count by 5s: 5, 10, ___'] }],

      `<p><b>56.2:</b> 1. 30 2. 15</p>`,

      [{ q: 'Count by 10s: 10, 20, ___', a: ['30'] }, { q: 'Count by 5s: 5, 10, ___', a: ['15'] }]),

    D(2, '🔁', 'Review Addition',
      'Review addition.',
      `<p class='big-emoji'>➕ 🔁</p>

       <h3>Review</h3>
       <ul><li>Add to 10</li><li>Add to 20</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 3 = ?</p>
       <p><b>Answer:</b> 5 + 3 = <b>8</b>.</p>`,

      [{ heading: 'Exercise 57.1 — Add', items: ['5 + 3 = ___', '8 + 4 = ___', '10 + 6 = ___', '12 + 5 = ___', '15 + 5 = ___'] }],

      `<p><b>57.1:</b> 1. 8 2. 12 3. 16 4. 17 5. 20</p>`,

      [{ q: '5 + 3 = ?', a: ['8'] }, { q: '12 + 5 = ?', a: ['17'] }]),

    D(3, '🔁', 'Review Subtraction',
      'Review subtraction.',
      `<p class='big-emoji'>➖ 🔁</p>

       <h3>Review</h3>
       <ul><li>Subtract to 10</li><li>Subtract to 20</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 − 3 = ?</p>
       <p><b>Answer:</b> 10 − 3 = <b>7</b>.</p>`,

      [{ heading: 'Exercise 58.1 — Subtract', items: ['10 − 3 = ___', '15 − 5 = ___', '18 − 8 = ___', '20 − 10 = ___', '16 − 6 = ___'] }],

      `<p><b>58.1:</b> 1. 7 2. 10 3. 10 4. 10 5. 10</p>`,

      [{ q: '10 − 3 = ?', a: ['7'] }, { q: '18 − 8 = ?', a: ['10'] }]),

    D(4, '🔁', 'Review Shapes & Money',
      'Review shapes and money.',
      `<p class='big-emoji'>🔺 💰</p>

       <h3>Review</h3>
       <ul><li>Shapes: circle, square, triangle, rectangle, star, heart</li><li>Money: 1, 2, 5, 10, 20 cedis</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 5 = ? cedis</p>
       <p><b>Answer:</b> <b>10 cedis</b>.</p>`,

      [{ heading: 'Exercise 59.1 — Say', items: ['Name 6 shapes.', 'Add: 5 + 5 cedis.', 'Add: 10 + 5 cedis.'] },
       { heading: 'Exercise 59.2 — Answer', items: ['How many sides does a triangle have?', 'How many pesewas in 1 cedi?'] }],

      `<p><b>59.1:</b> 1. (any 6) 2. 10 3. 15</p>
       <p><b>59.2:</b> 1. 3 2. 100</p>`,

      [{ q: '5 + 5 cedis = ?', a: ['10', '10 cedis'] }, { q: '10 + 5 cedis = ?', a: ['15', '15 cedis'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate learning.',
      `<p class='big-emoji'>🎉 ⭐</p>

       <h3>Well Done!</h3>
       <p>You have completed Month 3 of Grade 2 Numeracy.</p>

       <h3>Show and Tell</h3>
       <p>Show your posters to your family. Give yourself a big star! ⭐</p>`,

      [{ heading: 'Exercise 60.1 — Celebrate!', items: ['Show your posters.', 'Count to 100 proudly.', 'Give yourself a big star! ⭐'] }],

      `<p>⭐ for a wonderful month of learning!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Even & Odd
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: 'Even & Odd', days: [

    D(1, '2️⃣', 'Even Numbers',
      'Identify and list even numbers.',
      `<p class='big-emoji'>2️⃣ 4️⃣ 6️⃣ 8️⃣ 🔟</p>

       <h3>What are Even Numbers?</h3>
       <p>Even numbers can be divided into <b>2 equal groups</b>. They end in 0, 2, 4, 6, or 8.</p>

       <h3>Even Numbers from 1 to 20</h3>
       <p>2, 4, 6, 8, 10, 12, 14, 16, 18, 20</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 6 stones in 2 equal rows. Write "6 is even".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 8 an even number?</p>
       <p><b>Answer:</b> Yes. 8 can be split into 4 and 4, so it is <b>even</b>.</p>`,

      [{ heading: 'Exercise 61.1 — Say', items: ['2, 4, 6, 8, 10', '12, 14, 16, 18, 20'] },
       { heading: 'Exercise 61.2 — Circle even numbers', items: ['3, 4, 7, 8, 11, 12, 15, 16'] },
       { heading: 'Exercise 61.3 — Answer', items: ['Is 4 even?', 'Is 10 even?', 'Is 6 even?'] }],

      `<p><b>61.2:</b> Circle 4, 8, 12, 16.</p>`,

      [{ q: 'Is 4 even?', a: ['yes'] }, { q: 'Is 10 even?', a: ['yes'] }, { q: 'Is 6 even?', a: ['yes'] }]),

    D(2, '1️⃣', 'Odd Numbers',
      'Identify and list odd numbers.',
      `<p class='big-emoji'>1️⃣ 3️⃣ 5️⃣ 7️⃣ 9️⃣</p>

       <h3>What are Odd Numbers?</h3>
       <p>Odd numbers <b>cannot</b> be divided into 2 equal groups. They end in 1, 3, 5, 7, or 9.</p>

       <h3>Odd Numbers from 1 to 20</h3>
       <p>1, 3, 5, 7, 9, 11, 13, 15, 17, 19</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 stones in 2 rows. One row has 3, the other has 2. Write "5 is odd".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 7 an odd number?</p>
       <p><b>Answer:</b> Yes. 7 cannot be split into 2 equal groups, so it is <b>odd</b>.</p>`,

      [{ heading: 'Exercise 62.1 — Say', items: ['1, 3, 5, 7, 9', '11, 13, 15, 17, 19'] },
       { heading: 'Exercise 62.2 — Circle odd numbers', items: ['2, 3, 6, 7, 10, 11, 14, 15'] },
       { heading: 'Exercise 62.3 — Answer', items: ['Is 3 odd?', 'Is 9 odd?', 'Is 5 odd?'] }],

      `<p><b>62.2:</b> Circle 3, 7, 11, 15.</p>`,

      [{ q: 'Is 3 odd?', a: ['yes'] }, { q: 'Is 7 odd?', a: ['yes'] }, { q: 'Is 9 odd?', a: ['yes'] }]),

    D(3, '🔢', 'Even or Odd?',
      'Identify whether a number is even or odd.',
      `<p class='big-emoji'>🔢 🔍</p>

       <h3>Even or Odd?</h3>
       <p>Look at the last digit of the number:</p>
       <ul>
         <li>Ends in 0, 2, 4, 6, 8 → <b>Even</b></li>
         <li>Ends in 1, 3, 5, 7, 9 → <b>Odd</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 columns. Label them "Even" and "Odd". Write numbers 1–10 in the correct column.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 12 even or odd?</p>
       <p><b>Answer:</b> 12 ends in 2, so it is <b>even</b>.</p>`,

      [{ heading: 'Exercise 63.1 — Say even or odd', items: ['2', '3', '8', '9', '6', '11', '14', '15'] },
       { heading: 'Exercise 63.2 — Sort', items: ['Sort: 4, 7, 10, 13, 16, 19'] },
       { heading: 'Exercise 63.3 — Answer', items: ['Is 6 even or odd?', 'Is 5 even or odd?', 'Is 20 even or odd?'] }],

      `<p><b>63.1:</b> 1. Even 2. Odd 3. Even 4. Odd 5. Even 6. Odd 7. Even 8. Odd</p>
       <p><b>63.2:</b> Even: 4, 10, 16. Odd: 7, 13, 19.</p>`,

      [{ q: 'Is 6 even or odd?', a: ['even'] }, { q: 'Is 5 even or odd?', a: ['odd'] }, { q: 'Is 20 even or odd?', a: ['even'] }]),

    D(4, '📝', 'Even & Odd Sentences',
      'Write even and odd numbers.',
      `<p class='big-emoji'>✍️ 🔢 📝</p>

       <h3>Examples</h3>
       <ul><li>Even: 2, 4, 6</li><li>Odd: 1, 3, 5</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 even numbers and 5 odd numbers with dots.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write an even number between 4 and 8.</p>
       <p><b>Answer:</b> <b>6</b>.</p>`,

      [{ heading: 'Exercise 64.1 — Write', items: ['Write 5 even numbers.', 'Write 5 odd numbers.'] },
       { heading: 'Exercise 64.2 — Fill in the blank', items: ['___ is even', '___ is odd', '___ is even', '___ is odd'] },
       { heading: 'Exercise 64.3 — Draw', items: ['Draw 4 even stones.'] }],

      `<p>Any correct even/odd numbers. ⭐ for accuracy.</p>`,

      [{ q: 'Write an even number between 4 and 8.', a: ['6'] }, { q: 'Write an odd number between 2 and 6.', a: ['3', '5'] }]),

    D(5, '🎨', 'Even & Odd Poster',
      'Consolidate learning about even and odd numbers.',
      `<p>Today we make an "Even & Odd" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Even & Odd Numbers"</b></li><li>Left: even numbers 2, 4, 6, 8, 10 with dots.</li><li>Right: odd numbers 1, 3, 5, 7, 9 with dots.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say which numbers are even and which are odd.</p>`,

      [{ heading: 'Exercise 65.1 — Draw your poster', items: ['Even: 2, 4, 6, 8, 10', 'Odd: 1, 3, 5, 7, 9'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Is 8 even or odd?', a: ['even'] }, { q: 'Is 9 even or odd?', a: ['odd'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Ordinal Numbers
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: 'Ordinal Numbers', days: [

    D(1, '🥇', 'First to Fifth',
      'Identify and use ordinal numbers 1st to 5th.',
      `<p class='big-emoji'>🥇 🥈 🥉 4️⃣ 5️⃣</p>

       <h3>Ordinal Numbers</h3>
       <p><b>Ordinal numbers</b> tell us the position or order of things.</p>
       <ul>
         <li>1st = <b>first</b></li>
         <li>2nd = <b>second</b></li>
         <li>3rd = <b>third</b></li>
         <li>4th = <b>fourth</b></li>
         <li>5th = <b>fifth</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 children in a line. Write 1st, 2nd, 3rd, 4th, 5th under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who comes 1st in a race?</p>
       <p><b>Answer:</b> The <b>first</b> person (the winner).</p>`,

      [{ heading: 'Exercise 66.1 — Say', items: ['1st', '2nd', '3rd', '4th', '5th'] },
       { heading: 'Exercise 66.2 — Answer', items: ['Who comes 1st in a race?', 'Who comes 3rd?', 'Who comes 5th?'] },
       { heading: 'Exercise 66.3 — Draw', items: ['Draw 5 children in a line and label their positions.'] }],

      `<p><b>66.2:</b> 1. First 2. Third 3. Fifth</p>`,

      [{ q: 'Who comes 1st in a race?', a: ['first'] }, { q: 'Who comes 3rd?', a: ['third'] }, { q: 'Who comes 5th?', a: ['fifth'] }]),

    D(2, '🥈', 'Sixth to Tenth',
      'Identify and use ordinal numbers 6th to 10th.',
      `<p class='big-emoji'>6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟</p>

       <h3>Ordinal Numbers 6th to 10th</h3>
       <ul>
         <li>6th = <b>sixth</b></li>
         <li>7th = <b>seventh</b></li>
         <li>8th = <b>eighth</b></li>
         <li>9th = <b>ninth</b></li>
         <li>10th = <b>tenth</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 children in a line. Label 6th to 10th.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 10th?</p>
       <p><b>Answer:</b> <b>Tenth</b>.</p>`,

      [{ heading: 'Exercise 67.1 — Say', items: ['6th', '7th', '8th', '9th', '10th'] },
       { heading: 'Exercise 67.2 — Answer', items: ['What is 10th?', 'What is 7th?', 'What is 9th?'] },
       { heading: 'Exercise 67.3 — Draw', items: ['Draw a line of 10 objects and label the 6th to 10th.'] }],

      `<p><b>67.2:</b> 1. Tenth 2. Seventh 3. Ninth</p>`,

      [{ q: 'What is 10th?', a: ['tenth'] }, { q: 'What is 7th?', a: ['seventh'] }, { q: 'What is 9th?', a: ['ninth'] }]),

    D(3, '📝', 'Ordinal Sentences',
      'Write sentences using ordinal numbers.',
      `<p class='big-emoji'>✍️ 🥇 📝</p>

       <h3>Examples</h3>
       <ul><li>I am <b>first</b> in line.</li><li>She is <b>second</b>.</li><li>He is <b>third</b>.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself in a line of 3 people. Write "I am first."</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I am ___ in line."</p>
       <p><b>Answer:</b> I am <b>first</b> in line.</p>`,

      [{ heading: 'Exercise 68.1 — Write 3 sentences', items: ['I am ______ in line.', 'She is ______.', 'He is ______.'] },
       { heading: 'Exercise 68.2 — Fill in the blank', items: ['I am ___ in line.', 'She is ___.'] },
       { heading: 'Exercise 68.3 — Draw', items: ['Draw your family in a line and label their positions.'] }],

      `<p>Any correct ordinal sentences.</p>`,

      [{ q: 'Complete: I am ___ in line.', a: ['first', 'second', 'third', 'any'] }, { q: 'Complete: She is ___.', a: ['any'] }]),

    D(4, '🏁', 'Race Ordinals',
      'Use ordinal numbers to describe a race.',
      `<p class='big-emoji'>🏁 🥇 🥈 🥉</p>

       <h3>A Race</h3>
       <p>Imagine 5 children running a race. Here is the result:</p>
       <ul>
         <li>🥇 Ama — <b>1st</b> (first)</li>
         <li>🥈 Kofi — <b>2nd</b> (second)</li>
         <li>🥉 Yaw — <b>3rd</b> (third)</li>
         <li>Akosua — <b>4th</b> (fourth)</li>
         <li>Kojo — <b>5th</b> (fifth)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the 5 children crossing the finish line. Label who came 1st, 2nd, 3rd, 4th, 5th.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who came 2nd?</p>
       <p><b>Answer:</b> <b>Kofi</b>.</p>`,

      [{ heading: 'Exercise 69.1 — Answer', items: ['Who came 1st?', 'Who came 2nd?', 'Who came 3rd?', 'Who came 4th?', 'Who came 5th?'] },
       { heading: 'Exercise 69.2 — Write', items: ['Write the names in order (1st to 5th).'] }],

      `<p><b>69.1:</b> 1. Ama 2. Kofi 3. Yaw 4. Akosua 5. Kojo</p>`,

      [{ q: 'Who came 1st in the race?', a: ['ama'] }, { q: 'Who came 2nd?', a: ['kofi'] }]),

    D(5, '🎨', 'Ordinal Poster',
      'Consolidate learning about ordinal numbers.',
      `<p>Today we make an "Ordinal Numbers" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"1st, 2nd, 3rd…"</b></li><li>Draw 5 children in a line.</li><li>Label each one with their ordinal number: 1st, 2nd, 3rd, 4th, 5th.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each ordinal number.</p>`,

      [{ heading: 'Exercise 70.1 — Draw your ordinal poster', items: ['1st', '2nd', '3rd', '4th', '5th'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is 1st?', a: ['first'] }, { q: 'What is 5th?', a: ['fifth'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — More Addition
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: 'More Addition', days: [

    D(1, '➕', 'Add to 30',
      'Add numbers whose sum is up to 30.',
      `<p class='big-emoji'>➕ 3️⃣0️⃣</p>

       <h3>Examples</h3>
       <ul><li>15 + 10 = 25</li><li>20 + 5 = 25</li><li>12 + 8 = 20</li><li>14 + 6 = 20</li><li>18 + 2 = 20</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 15 + 10 as two groups of dots. Count them all.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 15 + 10 = ?</p>
       <p><b>Answer:</b> 15 + 10 = <b>25</b>.</p>`,

      [{ heading: 'Exercise 71.1 — Add', items: ['15 + 10 = ___', '20 + 5 = ___', '12 + 8 = ___', '14 + 6 = ___', '18 + 2 = ___'] },
       { heading: 'Exercise 71.2 — Word problems', items: ['I have 15 books. I get 10 more. How many?', 'I have 12 pencils. I get 8 more. How many?'] },
       { heading: 'Exercise 71.3 — Draw', items: ['Draw 20 + 5 and write the answer.'] }],

      `<p><b>71.1:</b> 1. 25 2. 25 3. 20 4. 20 5. 20</p>`,

      [{ q: '15 + 10 = ?', a: ['25'] }, { q: '20 + 5 = ?', a: ['25'] }]),

    D(2, '➕', 'Add 3 Numbers',
      'Add three numbers together.',
      `<p class='big-emoji'>➕ ➕ ➕</p>

       <h3>Examples</h3>
       <ul><li>2 + 3 + 4 = 9</li><li>1 + 2 + 3 = 6</li><li>5 + 5 + 5 = 15</li><li>3 + 3 + 3 = 9</li><li>4 + 4 + 4 = 12</li></ul>

       <h3>How to Add 3 Numbers</h3>
       <p>Add the first two numbers, then add the third number to the answer. Example: 2 + 3 + 4 → (2 + 3) = 5, then 5 + 4 = 9.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 groups of dots: 2 dots, 3 dots, 4 dots. Count them all.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 2 + 3 + 4 = ?</p>
       <p><b>Answer:</b> 2 + 3 + 4 = <b>9</b>.</p>`,

      [{ heading: 'Exercise 72.1 — Add', items: ['2 + 3 + 4 = ___', '1 + 2 + 3 = ___', '5 + 5 + 5 = ___', '3 + 3 + 3 = ___', '4 + 4 + 4 = ___'] },
       { heading: 'Exercise 72.2 — Count and add', items: ['🍎🍎 + 🍎🍎🍎 + 🍎 = ___', '⭐⭐ + ⭐⭐ + ⭐ = ___'] },
       { heading: 'Exercise 72.3 — Draw', items: ['Draw 1 + 2 + 3 and write the answer.'] }],

      `<p><b>72.1:</b> 1. 9 2. 6 3. 15 4. 9 5. 12</p>`,

      [{ q: '2 + 3 + 4 = ?', a: ['9'] }, { q: '5 + 5 + 5 = ?', a: ['15'] }]),

    D(3, '➕', 'Doubles',
      'Learn doubles (adding a number to itself).',
      `<p class='big-emoji'>➕ 🔁</p>

       <h3>What is a Double?</h3>
       <p>A <b>double</b> is a number added to itself.</p>
       <ul>
         <li>1 + 1 = 2</li>
         <li>2 + 2 = 4</li>
         <li>3 + 3 = 6</li>
         <li>4 + 4 = 8</li>
         <li>5 + 5 = 10</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 groups of 4 apples. Write "4 + 4 = 8".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 6 + 6 = ?</p>
       <p><b>Answer:</b> 6 + 6 = <b>12</b>.</p>`,

      [{ heading: 'Exercise 73.1 — Say', items: ['1 + 1 = ___', '2 + 2 = ___', '3 + 3 = ___', '4 + 4 = ___', '5 + 5 = ___'] },
       { heading: 'Exercise 73.2 — Answer', items: ['6 + 6 = ?', '7 + 7 = ?', '8 + 8 = ?'] },
       { heading: 'Exercise 73.3 — Write', items: ['Write 5 doubles.'] }],

      `<p><b>73.1:</b> 1. 2 2. 4 3. 6 4. 8 5. 10</p>
       <p><b>73.2:</b> 1. 12 2. 14 3. 16</p>`,

      [{ q: '6 + 6 = ?', a: ['12'] }, { q: '7 + 7 = ?', a: ['14'] }, { q: '8 + 8 = ?', a: ['16'] }]),

    D(4, '📝', 'Addition Word Problems',
      'Solve more addition word problems.',
      `<p class='big-emoji'>📝 ➕</p>

       <h3>Read and Solve</h3>
       <p>Read carefully. Find the numbers. Add them.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture for one of the problems.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Mum has 15 oranges. She buys 10 more. How many now?</p>
       <p><b>Answer:</b> 15 + 10 = <b>25 oranges</b>.</p>`,

      [{ heading: 'Exercise 74.1 — Solve', items: ['15 + 10 = ___ (oranges)', 'I have 12 pencils. I get 8 more. How many?', 'I have 20 sweets. I get 5 more. How many?', 'I have 14 books. I get 6 more. How many?', 'I have 18 toys. I get 2 more. How many?'] },
       { heading: 'Exercise 74.2 — Draw', items: ['Draw one problem and solve it.'] }],

      `<p><b>74.1:</b> 1. 25 2. 20 3. 25 4. 20 5. 20</p>`,

      [{ q: '15 + 10 = ?', a: ['25'] }, { q: '12 + 8 = ?', a: ['20'] }]),

    D(5, '🎨', 'Addition Poster',
      'Consolidate learning about addition.',
      `<p>Today we make an "Addition" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Let's Add!"</b></li><li>Draw 3 addition problems with pictures.</li><li>One of them should be a double.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the answer to each problem.</p>`,

      [{ heading: 'Exercise 75.1 — Draw your addition poster', items: ['10 + 5', '15 + 5', '20 + 5'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: '10 + 5 = ?', a: ['15'] }, { q: '15 + 5 = ?', a: ['20'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — More Subtraction
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: 'More Subtraction', days: [

    D(1, '➖', 'Subtract to 30',
      'Subtract numbers up to 30.',
      `<p class='big-emoji'>➖ 3️⃣0️⃣</p>

       <h3>Examples</h3>
       <ul><li>25 − 5 = 20</li><li>20 − 10 = 10</li><li>25 − 10 = 15</li><li>18 − 8 = 10</li><li>15 − 5 = 10</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 25 dots. Cross out 5. Count what is left.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 25 − 5 = ?</p>
       <p><b>Answer:</b> 25 − 5 = <b>20</b>.</p>`,

      [{ heading: 'Exercise 76.1 — Subtract', items: ['25 − 5 = ___', '20 − 10 = ___', '25 − 10 = ___', '18 − 8 = ___', '15 − 5 = ___'] },
       { heading: 'Exercise 76.2 — Word problems', items: ['I have 25 sweets. I eat 5. How many left?', 'I have 20 books. I give 10 away. How many?'] },
       { heading: 'Exercise 76.3 — Draw', items: ['Draw 20 balls. Cross out 5. How many left?'] }],

      `<p><b>76.1:</b> 1. 20 2. 10 3. 15 4. 10 5. 10</p>`,

      [{ q: '25 − 5 = ?', a: ['20'] }, { q: '20 − 10 = ?', a: ['10'] }]),

    D(2, '➖', 'Halves & Doubles',
      'Use halves and doubles.',
      `<p class='big-emoji'>➖ 🔁</p>

       <h3>Halves</h3>
       <p>A <b>half</b> is when we split a number into two equal parts.</p>
       <ul>
         <li>Half of 4 = 2</li>
         <li>Half of 6 = 3</li>
         <li>Half of 10 = 5</li>
         <li>Half of 20 = 10</li>
         <li>Half of 30 = 15</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 dots. Draw a line through the middle. Count each half: 5 and 5.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Half of 10 = ?</p>
       <p><b>Answer:</b> Half of 10 = <b>5</b>.</p>`,

      [{ heading: 'Exercise 77.1 — Say', items: ['Half of 4 = ___', 'Half of 6 = ___', 'Half of 10 = ___', 'Half of 20 = ___', 'Half of 30 = ___'] },
       { heading: 'Exercise 77.2 — Answer', items: ['What is half of 8?', 'What is half of 12?', 'What is half of 20?'] },
       { heading: 'Exercise 77.3 — Draw', items: ['Draw 20 dots in 2 equal groups.'] }],

      `<p><b>77.1:</b> 1. 2 2. 3 3. 5 4. 10 5. 15</p>
       <p><b>77.2:</b> 1. 4 2. 6 3. 10</p>`,

      [{ q: 'Half of 10 = ?', a: ['5'] }, { q: 'Half of 20 = ?', a: ['10'] }, { q: 'Half of 30 = ?', a: ['15'] }]),

    D(3, '➖', 'Subtract 3 Numbers',
      'Subtract 3 numbers in a row.',
      `<p class='big-emoji'>➖ ➖ ➖</p>

       <h3>Examples</h3>
       <ul><li>10 − 2 − 3 = 5</li><li>15 − 5 − 5 = 5</li><li>20 − 10 − 5 = 5</li><li>18 − 8 − 5 = 5</li><li>12 − 2 − 2 = 8</li></ul>

       <h3>How to Subtract 3 Numbers</h3>
       <p>Subtract the first two numbers, then subtract the third from the answer. Example: 10 − 2 − 3 → (10 − 2) = 8, then 8 − 3 = 5.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 dots. Cross out 2, then cross out 3 more. Count what is left.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 − 2 − 3 = ?</p>
       <p><b>Answer:</b> 10 − 2 − 3 = <b>5</b>.</p>`,

      [{ heading: 'Exercise 78.1 — Subtract', items: ['10 − 2 − 3 = ___', '15 − 5 − 5 = ___', '20 − 10 − 5 = ___', '18 − 8 − 5 = ___', '12 − 2 − 2 = ___'] },
       { heading: 'Exercise 78.2 — Word problems', items: ['I have 15 sweets. I eat 5, then give 5 away. How many left?'] },
       { heading: 'Exercise 78.3 — Draw', items: ['Draw 10 balls. Cross out 2, then 3. How many left?'] }],

      `<p><b>78.1:</b> 1. 5 2. 5 3. 5 4. 5 5. 8</p>`,

      [{ q: '10 − 2 − 3 = ?', a: ['5'] }, { q: '20 − 10 − 5 = ?', a: ['5'] }]),

    D(4, '📝', 'Subtraction Word Problems',
      'Solve more subtraction word problems.',
      `<p class='big-emoji'>📝 ➖</p>

       <h3>Read and Solve</h3>
       <p>Read carefully. Find the numbers. Subtract them.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture for one of the problems.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> I had 20 mangoes. I gave away 5. How many left?</p>
       <p><b>Answer:</b> 20 − 5 = <b>15 mangoes</b>.</p>`,

      [{ heading: 'Exercise 79.1 — Solve', items: ['20 − 5 = ___ (mangoes)', 'I had 25 sweets. I ate 10. How many left?', 'I had 30 pencils. I lost 5. How many left?', 'I had 18 oranges. I sold 8. How many left?', 'I had 12 books. I gave 2 away. How many left?'] },
       { heading: 'Exercise 79.2 — Draw', items: ['Draw one problem and solve it.'] }],

      `<p><b>79.1:</b> 1. 15 2. 15 3. 25 4. 10 5. 10</p>`,

      [{ q: '20 − 5 = ?', a: ['15'] }, { q: '25 − 10 = ?', a: ['15'] }]),

    D(5, '🎨', 'Subtraction Poster',
      'Consolidate learning about subtraction.',
      `<p>Today we make a "Subtraction" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Let's Subtract!"</b></li><li>Draw 3 subtraction problems with pictures.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the answer to each problem.</p>`,

      [{ heading: 'Exercise 80.1 — Draw your subtraction poster', items: ['20 − 5', '25 − 5', '30 − 10'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: '20 − 5 = ?', a: ['15'] }, { q: '30 − 10 = ?', a: ['20'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Multiplication Basics
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: 'Multiplication Basics', days: [

    D(1, '✖️', 'Groups of 2',
      'Understand multiplication as groups of 2.',
      `<p class='big-emoji'>✖️ 2️⃣</p>

       <h3>Multiplication</h3>
       <p>Multiplication is <b>repeated addition</b>. When we say "2 × 3", we mean 2 groups of 3.</p>

       <h3>Groups of 2</h3>
       <ul>
         <li>2 × 1 = 2</li>
         <li>2 × 2 = 4 (2 + 2)</li>
         <li>2 × 3 = 6 (2 + 2 + 2)</li>
         <li>2 × 4 = 8 (2 + 2 + 2 + 2)</li>
         <li>2 × 5 = 10</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 pairs of shoes. Count them: 2, 4, 6, 8, 10.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 2 × 3 = ?</p>
       <p><b>Answer:</b> 2 × 3 = 2 + 2 + 2 = <b>6</b>.</p>`,

      [{ heading: 'Exercise 81.1 — Say', items: ['2 × 1 = ___', '2 × 2 = ___', '2 × 3 = ___', '2 × 4 = ___', '2 × 5 = ___'] },
       { heading: 'Exercise 81.2 — Draw groups', items: ['Draw 2 groups of 3.', 'Draw 3 groups of 2.'] },
       { heading: 'Exercise 81.3 — Answer', items: ['2 × 3 = ?', '2 × 4 = ?', '2 × 5 = ?'] }],

      `<p><b>81.1:</b> 1. 2 2. 4 3. 6 4. 8 5. 10</p>`,

      [{ q: '2 × 3 = ?', a: ['6'] }, { q: '2 × 4 = ?', a: ['8'] }, { q: '2 × 5 = ?', a: ['10'] }]),

    D(2, '✖️', 'Groups of 5',
      'Understand multiplication as groups of 5.',
      `<p class='big-emoji'>✖️ 5️⃣</p>

       <h3>Groups of 5</h3>
       <ul>
         <li>5 × 1 = 5</li>
         <li>5 × 2 = 10 (5 + 5)</li>
         <li>5 × 3 = 15 (5 + 5 + 5)</li>
         <li>5 × 4 = 20</li>
         <li>5 × 5 = 25</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 hands with 5 fingers each. Count: 5, 10, 15.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 × 3 = ?</p>
       <p><b>Answer:</b> 5 × 3 = 5 + 5 + 5 = <b>15</b>.</p>`,

      [{ heading: 'Exercise 82.1 — Say', items: ['5 × 1 = ___', '5 × 2 = ___', '5 × 3 = ___', '5 × 4 = ___', '5 × 5 = ___'] },
       { heading: 'Exercise 82.2 — Draw groups', items: ['Draw 2 groups of 5.', 'Draw 3 groups of 5.'] },
       { heading: 'Exercise 82.3 — Answer', items: ['5 × 3 = ?', '5 × 4 = ?', '5 × 5 = ?'] }],

      `<p><b>82.1:</b> 1. 5 2. 10 3. 15 4. 20 5. 25</p>`,

      [{ q: '5 × 3 = ?', a: ['15'] }, { q: '5 × 4 = ?', a: ['20'] }, { q: '5 × 5 = ?', a: ['25'] }]),

    D(3, '✖️', 'Groups of 10',
      'Understand multiplication as groups of 10.',
      `<p class='big-emoji'>✖️ 🔟</p>

       <h3>Groups of 10</h3>
       <ul>
         <li>10 × 1 = 10</li>
         <li>10 × 2 = 20</li>
         <li>10 × 3 = 30</li>
         <li>10 × 4 = 40</li>
         <li>10 × 5 = 50</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 bundles of 10 sticks. Count: 10, 20, 30.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 × 3 = ?</p>
       <p><b>Answer:</b> 10 × 3 = <b>30</b>.</p>`,

      [{ heading: 'Exercise 83.1 — Say', items: ['10 × 1 = ___', '10 × 2 = ___', '10 × 3 = ___', '10 × 4 = ___', '10 × 5 = ___'] },
       { heading: 'Exercise 83.2 — Draw groups', items: ['Draw 2 groups of 10.', 'Draw 3 groups of 10.'] },
       { heading: 'Exercise 83.3 — Answer', items: ['10 × 3 = ?', '10 × 4 = ?', '10 × 5 = ?'] }],

      `<p><b>83.1:</b> 1. 10 2. 20 3. 30 4. 40 5. 50</p>`,

      [{ q: '10 × 3 = ?', a: ['30'] }, { q: '10 × 4 = ?', a: ['40'] }, { q: '10 × 5 = ?', a: ['50'] }]),

    D(4, '📝', 'Multiplication Sentences',
      'Write multiplication sentences.',
      `<p class='big-emoji'>✍️ ✖️ 📝</p>

       <h3>Examples</h3>
       <ul>
         <li>2 groups of 3 = 2 × 3 = 6</li>
         <li>3 groups of 2 = 3 × 2 = 6</li>
         <li>4 groups of 5 = 4 × 5 = 20</li>
         <li>2 groups of 10 = 2 × 10 = 20</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 groups of 5 stars. Write "2 × 5 = 10".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 2 groups of 3 = ?</p>
       <p><b>Answer:</b> 2 groups of 3 = 2 × 3 = <b>6</b>.</p>`,

      [{ heading: 'Exercise 84.1 — Write', items: ['2 groups of 3 = ___', '3 groups of 2 = ___', '4 groups of 5 = ___', '2 groups of 10 = ___'] },
       { heading: 'Exercise 84.2 — Solve', items: ['2 groups of 4 = ?', '5 groups of 2 = ?'] },
       { heading: 'Exercise 84.3 — Draw', items: ['Draw 3 groups of 3 and write the multiplication sentence.'] }],

      `<p><b>84.1:</b> 1. 6 2. 6 3. 20 4. 20</p>`,

      [{ q: '2 groups of 3 = ?', a: ['6'] }, { q: '4 groups of 5 = ?', a: ['20'] }]),

    D(5, '🎨', 'Multiplication Poster',
      'Consolidate learning about multiplication.',
      `<p>Today we make a "Multiplication" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Multiplication"</b></li><li>Draw 3 multiplication problems as groups of objects.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the multiplication sentence and its answer.</p>`,

      [{ heading: 'Exercise 85.1 — Draw your multiplication poster', items: ['2 × 3', '5 × 2', '10 × 2'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: '2 × 3 = ?', a: ['6'] }, { q: '5 × 2 = ?', a: ['10'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DATA — Data & Graphs
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: 'Data & Graphs', days: [

    D(1, '📊', 'Collect Data',
      'Collect simple data from family members.',
      `<p class='big-emoji'>📊 ❓</p>

       <h3>What is Data?</h3>
       <p><b>Data</b> is information we collect. We can collect data by asking questions.</p>

       <h3>Example Survey</h3>
       <p>Ask 5 people in your family: "What is your favourite fruit?" Write down their answers.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a table with 2 columns: "Name" and "Favourite Fruit". Write each person's answer.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> If 2 people chose mango and 3 chose banana, which fruit is more popular?</p>
       <p><b>Answer:</b> <b>Banana</b> is more popular (3 > 2).</p>`,

      [{ heading: 'Exercise 86.1 — Ask and record', items: ['Ask 5 people their favourite fruit.', 'Write their answers in a table.', 'Which fruit was chosen most?'] },
       { heading: 'Exercise 86.2 — Ask and record', items: ['Ask 5 people their favourite colour.', 'Write their answers.'] }],

      `<p>Any valid data recorded.</p>`,

      [{ q: 'What is data?', a: ['information', 'collected information', 'any'] },
       { q: 'If 2 chose mango and 3 chose banana, which is more popular?', a: ['banana'] }]),

    D(2, '📊', 'Tally Chart',
      'Make a tally chart.',
      `<p class='big-emoji'>📊 🖐️</p>

       <h3>Tally Marks</h3>
       <p>We use <b>tally marks</b> to count quickly.</p>
       <ul>
         <li>| = 1</li>
         <li>|| = 2</li>
         <li>||| = 3</li>
         <li>|||| = 4</li>
         <li>~~||||~~ = 5 (a group of 5)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a tally chart for favourite fruits. Use tally marks to show how many chose each fruit.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many tally marks is ~~||||~~ |||?</p>
       <p><b>Answer:</b> 5 + 3 = <b>8</b>.</p>`,

      [{ heading: 'Exercise 87.1 — Make a tally chart', items: ['Count how many chose mango.', 'Count how many chose banana.', 'Count how many chose orange.'] },
       { heading: 'Exercise 87.2 — Read the tally', items: ['||| = ___', '~~||||~~ = ___', '~~||||~~ || = ___'] }],

      `<p><b>87.2:</b> 1. 3 2. 5 3. 7</p>`,

      [{ q: 'How many is |||?', a: ['3'] }, { q: 'How many is ~~||||~~ ~~||||~~?', a: ['10'] }]),

    D(3, '📊', 'Bar Chart',
      'Draw a bar chart.',
      `<p class='big-emoji'>📊 📈</p>

       <h3>Bar Charts</h3>
       <p>A <b>bar chart</b> uses bars to show data. Longer bars mean more. Shorter bars mean less.</p>

       <h3>Example</h3>
       <p>If 3 people chose mango, 5 chose banana, 2 chose orange:</p>
       <ul>
         <li>Mango: ███ (3)</li>
         <li>Banana: █████ (5)</li>
         <li>Orange: ██ (2)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bar chart showing your family's favourite fruits.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which fruit has the longest bar?</p>
       <p><b>Answer:</b> The fruit that the most people chose.</p>`,

      [{ heading: 'Exercise 88.1 — Draw a bar chart', items: ['Use your data from Day 1.', 'Draw bars for each fruit.', 'Colour each bar.'] },
       { heading: 'Exercise 88.2 — Answer', items: ['Which fruit has the longest bar?', 'Which has the shortest bar?'] }],

      `<p>Any valid bar chart.</p>`,

      [{ q: 'Which bar is longest if 5 people chose banana?', a: ['banana'] }]),

    D(4, '📝', 'Data Sentences',
      'Write sentences about data.',
      `<p class='big-emoji'>✍️ 📊 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>Most people like <b>banana</b>.</li>
         <li>Fewest people like <b>orange</b>.</li>
         <li><b>Three</b> people like mango.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a chart showing your data. Write 3 sentences about it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a sentence about your data.</p>
       <p><b>Answer:</b> Most people chose <b>banana</b>.</p>`,

      [{ heading: 'Exercise 89.1 — Write 3 sentences', items: ['Most people like ______.', 'Fewest people like ______.', '______ people like ______.'] },
       { heading: 'Exercise 89.2 — Draw', items: ['Draw your chart with labels.'] }],

      `<p>Any 3 correct sentences.</p>`,

      [{ q: 'Write a sentence about your data.', a: ['any'] }]),

    D(5, '🎨', 'Data Poster',
      'Consolidate learning about data.',
      `<p>Today we make a "Data" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"My Class Survey"</b></li><li>Table with data</li><li>Tally chart</li><li>Bar chart</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain what your data shows.</p>`,

      [{ heading: 'Exercise 90.1 — Draw your data poster', items: ['Table', 'Tally chart', 'Bar chart'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What does a bar chart show?', a: ['data', 'information', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Money Problems
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: 'Money Problems', days: [

    D(1, '💰', 'Shopping',
      'Buy things and add money.',
      `<p class='big-emoji'>💰 🛒</p>

       <h3>Shopping</h3>
       <p>When we buy things, we <b>add</b> the prices together.</p>

       <h3>Example</h3>
       <ul>
         <li>Apple: 5 cedis</li>
         <li>Banana: 3 cedis</li>
         <li>Total: 5 + 3 = 8 cedis</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a shop with 3 items and their prices. Write the total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Apple (5 cedis) + Banana (3 cedis) = ?</p>
       <p><b>Answer:</b> <b>8 cedis</b>.</p>`,

      [{ heading: 'Exercise 91.1 — Add', items: ['5 + 3 = ___', '10 + 5 = ___', '2 + 2 = ___'] },
       { heading: 'Exercise 91.2 — Word problems', items: ['I buy rice for 10 cedis and oil for 5 cedis. How much?', 'I buy a book for 5 cedis and a pen for 2 cedis. How much?'] },
       { heading: 'Exercise 91.3 — Draw', items: ['Draw a shop with 3 items and prices.'] }],

      `<p><b>91.1:</b> 1. 8 2. 15 3. 4</p>`,

      [{ q: '5 + 3 cedis = ?', a: ['8', '8 cedis'] }, { q: '10 + 5 cedis = ?', a: ['15', '15 cedis'] }]),

    D(2, '💰', 'Change',
      'Calculate change.',
      `<p class='big-emoji'>💰 🔄</p>

       <h3>Change</h3>
       <p>When we pay with a bigger amount, we get <b>change</b> back. Change = money paid − cost.</p>

       <h3>Example</h3>
       <p>You pay 10 cedis for a 5 cedi item. Change = 10 − 5 = 5 cedis.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 10 cedi note and a 5 cedi item. Write "Change: 5 cedis".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> You pay 20 cedis for a 10 cedi item. How much change?</p>
       <p><b>Answer:</b> 20 − 10 = <b>10 cedis</b>.</p>`,

      [{ heading: 'Exercise 92.1 — Calculate change', items: ['10 − 5 = ___', '20 − 10 = ___', '15 − 5 = ___', '20 − 5 = ___'] },
       { heading: 'Exercise 92.2 — Word problems', items: ['You pay 20 for a 5 cedi item. What is the change?', 'You pay 10 for a 2 cedi item. What is the change?'] }],

      `<p><b>92.1:</b> 1. 5 2. 10 3. 10 4. 15</p>`,

      [{ q: '10 − 5 = ?', a: ['5', '5 cedis'] }, { q: '20 − 10 = ?', a: ['10', '10 cedis'] }]),

    D(3, '💰', 'Saving',
      'Calculate savings.',
      `<p class='big-emoji'>💰 🏦</p>

       <h3>Saving Money</h3>
       <p><b>Saving</b> means keeping money to use later. Every day we save a small amount.</p>

       <h3>Example</h3>
       <p>Save 1 cedi a day. In 5 days you save 1 + 1 + 1 + 1 + 1 = 5 cedis.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a money box. Write "Save 1 cedi a day".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Save 2 cedis a day for 3 days. How much saved?</p>
       <p><b>Answer:</b> 2 + 2 + 2 = <b>6 cedis</b>.</p>`,

      [{ heading: 'Exercise 93.1 — Calculate', items: ['1 + 1 + 1 + 1 + 1 = ___', '2 + 2 + 2 = ___', '5 + 5 = ___'] },
       { heading: 'Exercise 93.2 — Answer', items: ['Save 1 cedi for 5 days. Total?', 'Save 2 cedis for 3 days. Total?'] }],

      `<p><b>93.1:</b> 1. 5 2. 6 3. 10</p>`,

      [{ q: 'Save 1 cedi for 5 days. Total?', a: ['5', '5 cedis'] }, { q: 'Save 2 cedis for 3 days. Total?', a: ['6', '6 cedis'] }]),

    D(4, '📝', 'Money Sentences',
      'Write sentences about money.',
      `<p class='big-emoji'>✍️ 💰 📝</p>

       <h3>Example Sentences</h3>
       <ul><li>I bought a book for <b>5 cedis</b>.</li><li>I saved <b>10 cedis</b>.</li><li>I paid <b>20 cedis</b> for rice.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw something you bought and write the price.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I bought ______ for ______ cedis."</p>
       <p><b>Answer:</b> I bought a <b>book</b> for <b>5</b> cedis.</p>`,

      [{ heading: 'Exercise 94.1 — Write 3 sentences', items: ['I bought ______ for ______ cedis.', 'I saved ______ cedis.', 'I paid ______ cedis.'] },
       { heading: 'Exercise 94.2 — Draw', items: ['Draw something you bought.'] }],

      `<p>Any correct sentences.</p>`,

      [{ q: 'Complete: I bought ___ for ___ cedis.', a: ['any'] }]),

    D(5, '🎨', 'Shop Poster',
      'Consolidate learning about money.',
      `<p>Today we make a "Shop" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"My Shop"</b></li><li>Draw 5 items with their prices.</li><li>Write what you can buy with 20 cedis.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the price of each item.</p>`,

      [{ heading: 'Exercise 95.1 — Draw your shop poster', items: ['Apple 5 cedis', 'Banana 3 cedis', 'Book 10 cedis', 'Pen 2 cedis', 'Bag 20 cedis'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Add: 5 + 3 = ?', a: ['8'] }, { q: 'Change: 20 − 10 = ?', a: ['10'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GEOMETRY — Position & Direction
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: 'Position & Direction', days: [

    D(1, '⬆️', 'Up & Down',
      'Learn direction words: up and down.',
      `<p class='big-emoji'>⬆️ ⬇️</p>

       <h3>Direction Words</h3>
       <ul>
         <li><b>up</b> — towards the top</li>
         <li><b>down</b> — towards the bottom</li>
         <li><b>left</b> — to the left side</li>
         <li><b>right</b> — to the right side</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw arrows pointing up, down, left, and right. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Point up.</p>
       <p><b>Answer:</b> Raise your hand towards the ceiling.</p>`,

      [{ heading: 'Exercise 96.1 — Say and point', items: ['Point up.', 'Point down.', 'Point left.', 'Point right.'] },
       { heading: 'Exercise 96.2 — Draw', items: ['Draw a sun above a house (up).', 'Draw a ball under a chair (down).'] }],

      `<p>⭐ for correct actions.</p>`,

      [{ q: 'Which way is up?', a: ['up', 'upward'] }, { q: 'Which way is down?', a: ['down', 'downward'] }]),

    D(2, '⬅️', 'Left & Right',
      'Learn left and right.',
      `<p class='big-emoji'>⬅️ ➡️</p>

       <h3>Left and Right</h3>
       <p>Your <b>left hand</b> is on the left side. Your <b>right hand</b> is on the right side.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself with both hands. Label the left hand "left" and the right hand "right".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which hand do you use to write?</p>
       <p><b>Answer:</b> Most people use their <b>right hand</b> (or left hand for left-handed people).</p>`,

      [{ heading: 'Exercise 97.1 — Say and act', items: ['Show your left hand.', 'Show your right hand.', 'Turn left.', 'Turn right.'] },
       { heading: 'Exercise 97.2 — Answer', items: ['Which hand do you use to write?'] }],

      `<p>⭐ for correct actions.</p>`,

      [{ q: 'Show your right hand.', a: ['right', 'any'] }, { q: 'Show your left hand.', a: ['left', 'any'] }]),

    D(3, '🧭', 'In Front & Behind',
      'Learn position words: in front, behind, next to.',
      `<p class='big-emoji'>🧍 🚶</p>

       <h3>Position Words</h3>
       <ul>
         <li><b>in front</b> — ahead of</li>
         <li><b>behind</b> — at the back of</li>
         <li><b>next to / beside</b> — at the side of</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 children in a line. Write "front", "middle", "behind".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where is the person standing first in a line?</p>
       <p><b>Answer:</b> They are <b>in front</b>.</p>`,

      [{ heading: 'Exercise 98.1 — Say and act', items: ['Stand in front of a chair.', 'Stand behind a chair.', 'Stand next to a chair.'] },
       { heading: 'Exercise 98.2 — Answer', items: ['Where is the teacher?', 'Where is the bag?'] }],

      `<p>⭐ for correct actions.</p>`,

      [{ q: 'Where is the teacher?', a: ['in front'] }, { q: 'Where is the bag behind the door?', a: ['behind'] }]),

    D(4, '📝', 'Direction Sentences',
      'Write sentences using direction words.',
      `<p class='big-emoji'>✍️ 🧭 📝</p>

       <h3>Example Sentences</h3>
       <ul><li>I walk <b>up</b> the hill.</li><li>I walk <b>down</b> the hill.</li><li>I turn <b>left</b> at the shop.</li><li>I stand <b>behind</b> the door.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a path with arrows showing up, down, left, right.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I walk ___ the hill."</p>
       <p><b>Answer:</b> I walk <b>up</b> the hill.</p>`,

      [{ heading: 'Exercise 99.1 — Write 3 sentences', items: ['I walk ______.', 'I turn ______.', 'I stand ______.'] },
       { heading: 'Exercise 99.2 — Draw', items: ['Draw a path with arrows.'] }],

      `<p>Any correct sentences.</p>`,

      [{ q: 'Complete: I walk ___ the hill.', a: ['up', 'down'] }, { q: 'Complete: I turn ___.', a: ['left', 'right'] }]),

    D(5, '🎨', 'Direction Poster',
      'Consolidate learning about position and direction.',
      `<p>Today we make a "Direction" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"Where?"</b></li><li>Draw a map of your room. Label left, right, up, down.</li><li>Draw your friend beside you.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say where things are.</p>`,

      [{ heading: 'Exercise 100.1 — Draw your direction poster', items: ['left', 'right', 'up', 'down', 'behind', 'beside'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is the opposite of up?', a: ['down'] }, { q: 'What is the opposite of left?', a: ['right'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Number Stories
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: 'Number Stories', days: [

    D(1, '📖', 'Add Stories',
      'Solve addition stories.',
      `<p class='big-emoji'>📖 ➕</p>

       <h3>Addition Stories</h3>
       <p>Read the story. Find the numbers. Add them.</p>

       <h3>Story</h3>
       <p>Tom has 5 balls. He gets 3 more. How many balls does Tom have now?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw Tom with 5 balls, then add 3 more. Count the total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 3 = ?</p>
       <p><b>Answer:</b> Tom has <b>8 balls</b>.</p>`,

      [{ heading: 'Exercise 101.1 — Solve', items: ['5 + 3 = ___', 'Sara has 6 dolls. She gets 4 more. How many?', 'Ben has 8 sweets. He gets 2 more. How many?'] },
       { heading: 'Exercise 101.2 — Draw', items: ['Draw the story of Tom and his balls.'] }],

      `<p><b>101.1:</b> 1. 8 2. 10 3. 10</p>`,

      [{ q: '5 + 3 = ?', a: ['8'] }, { q: '6 + 4 = ?', a: ['10'] }]),

    D(2, '📖', 'Subtract Stories',
      'Solve subtraction stories.',
      `<p class='big-emoji'>📖 ➖</p>

       <h3>Subtraction Stories</h3>
       <p>Read the story. Find the numbers. Subtract them.</p>

       <h3>Story</h3>
       <p>Ama has 8 mangoes. She eats 3. How many mangoes are left?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 8 mangoes. Cross out 3. Count the rest.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 8 − 3 = ?</p>
       <p><b>Answer:</b> Ama has <b>5 mangoes</b> left.</p>`,

      [{ heading: 'Exercise 102.1 — Solve', items: ['8 − 3 = ___', 'Kofi has 10 books. He gives 4 away. How many?', 'Esi has 9 oranges. She sells 5. How many?'] },
       { heading: 'Exercise 102.2 — Draw', items: ['Draw the story of Ama and her mangoes.'] }],

      `<p><b>102.1:</b> 1. 5 2. 6 3. 4</p>`,

      [{ q: '8 − 3 = ?', a: ['5'] }, { q: '10 − 4 = ?', a: ['6'] }]),

    D(3, '📖', 'Money Stories',
      'Solve money stories.',
      `<p class='big-emoji'>📖 💰</p>

       <h3>Money Stories</h3>
       <p>Read the story. Find the numbers. Add or subtract.</p>

       <h3>Story</h3>
       <p>Mum gives you 10 cedis. You buy a book for 5 cedis. How much is left?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 10 cedi note and a book. Show the change.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 − 5 = ?</p>
       <p><b>Answer:</b> <b>5 cedis</b> left.</p>`,

      [{ heading: 'Exercise 103.1 — Solve', items: ['10 − 5 = ___', 'You have 20 cedis. You buy a pen for 5. How much left?', 'You have 15 cedis. You buy rice for 10. How much left?'] },
       { heading: 'Exercise 103.2 — Draw', items: ['Draw the story with the money.'] }],

      `<p><b>103.1:</b> 1. 5 2. 15 3. 5</p>`,

      [{ q: '10 − 5 = ?', a: ['5'] }, { q: '20 − 5 = ?', a: ['15'] }]),

    D(4, '📝', 'Write a Number Story',
      'Write your own number story.',
      `<p class='big-emoji'>✍️ 📖 📝</p>

       <h3>Write Your Story</h3>
       <p>Write a story with numbers. Include addition or subtraction. Then solve it.</p>

       <h3>Example</h3>
       <p>Ben has 6 kites. He gives 2 away. How many are left?</p>
       <p>Answer: 6 − 2 = 4 kites.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture of your story.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a story about 5 + 4.</p>
       <p><b>Answer:</b> <b>(Any story with 5 + 4 = 9.)</b></p>`,

      [{ heading: 'Exercise 104.1 — Write your story', items: ['Write the story.', 'Write the answer.'] },
       { heading: 'Exercise 104.2 — Draw', items: ['Draw your story.'] }],

      `<p>⭐ for a complete story.</p>`,

      [{ q: 'Write a story about 5 + 4.', a: ['any'] }]),

    D(5, '🎨', 'Story Poster',
      'Consolidate learning with a story poster.',
      `<p>Today we make a "Story" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"My Number Story"</b></li><li>Draw your story.</li><li>Write the number sentence below.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Tell the story.</p>`,

      [{ heading: 'Exercise 105.1 — Draw your story poster', items: ['Drawing', 'Number sentence', 'Answer'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is your story about?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Word Problems
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: 'Word Problems', days: [

    D(1, '📝', 'Everyday Addition',
      'Solve everyday addition problems.',
      `<p class='big-emoji'>📝 ➕</p>

       <h3>Addition Problems</h3>
       <p>Find the numbers. Add them.</p>

       <h3>Example</h3>
       <p>You have 3 pencils. You find 2 more. How many now? 3 + 2 = 5.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the pencils.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 3 + 2 = ?</p>
       <p><b>Answer:</b> <b>5 pencils</b>.</p>`,

      [{ heading: 'Exercise 106.1 — Solve', items: ['3 + 2 = ___', 'You have 5 books. You get 5 more. How many?', 'You have 4 toys. You get 3 more. How many?'] },
       { heading: 'Exercise 106.2 — Draw', items: ['Draw one problem.'] }],

      `<p><b>106.1:</b> 1. 5 2. 10 3. 7</p>`,

      [{ q: '3 + 2 = ?', a: ['5'] }, { q: '5 + 5 = ?', a: ['10'] }]),

    D(2, '📝', 'Everyday Subtraction',
      'Solve everyday subtraction problems.',
      `<p class='big-emoji'>📝 ➖</p>

       <h3>Subtraction Problems</h3>
       <p>Find the numbers. Subtract them.</p>

       <h3>Example</h3>
       <p>You have 10 sweets. You eat 4. How many left? 10 − 4 = 6.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the sweets.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 10 − 4 = ?</p>
       <p><b>Answer:</b> <b>6 sweets</b>.</p>`,

      [{ heading: 'Exercise 107.1 — Solve', items: ['10 − 4 = ___', 'You have 8 mangoes. You eat 2. How many left?', 'You have 12 oranges. You sell 6. How many left?'] },
       { heading: 'Exercise 107.2 — Draw', items: ['Draw one problem.'] }],

      `<p><b>107.1:</b> 1. 6 2. 6 3. 6</p>`,

      [{ q: '10 − 4 = ?', a: ['6'] }, { q: '8 − 2 = ?', a: ['6'] }]),

    D(3, '📝', 'Money Problems',
      'Solve money problems.',
      `<p class='big-emoji'>📝 💰</p>

       <h3>Money Problems</h3>

       <h3>Example</h3>
       <p>You save 5 cedis a week. How much in 4 weeks? 5 + 5 + 5 + 5 = 20 cedis.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 weeks of savings.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 5 + 5 + 5 = ?</p>
       <p><b>Answer:</b> <b>20 cedis</b>.</p>`,

      [{ heading: 'Exercise 108.1 — Solve', items: ['5 + 5 + 5 + 5 = ___', 'Save 10 cedis a week for 3 weeks.', 'Save 2 cedis a day for 5 days.'] },
       { heading: 'Exercise 108.2 — Draw', items: ['Draw your savings plan.'] }],

      `<p><b>108.1:</b> 1. 20 2. 30 3. 10</p>`,

      [{ q: '5 + 5 + 5 + 5 = ?', a: ['20'] }, { q: '10 + 10 + 10 = ?', a: ['30'] }]),

    D(4, '📝', 'Time Problems',
      'Solve time problems.',
      `<p class='big-emoji'>📝 🕐</p>

       <h3>Time Problems</h3>

       <h3>Example</h3>
       <p>You start reading at 3:00. You read for 1 hour. What time do you finish? 3:00 + 1 hour = 4:00.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 clocks: one at 3:00, one at 4:00.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 3:00 + 1 hour = ?</p>
       <p><b>Answer:</b> <b>4:00</b>.</p>`,

      [{ heading: 'Exercise 109.1 — Solve', items: ['3:00 + 1 hour = ___', '6:00 + 1 hour = ___', '9:00 + 2 hours = ___'] },
       { heading: 'Exercise 109.2 — Draw', items: ['Draw a clock showing 4:00.'] }],

      `<p><b>109.1:</b> 1. 4:00 2. 7:00 3. 11:00</p>`,

      [{ q: '3:00 + 1 hour = ?', a: ['4:00', "4 o'clock"] }, { q: '6:00 + 1 hour = ?', a: ['7:00', "7 o'clock"] }]),

    D(5, '🎨', 'Problem Poster',
      'Consolidate learning with a problem poster.',
      `<p>Today we make a "Problem" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"My Word Problems"</b></li><li>Write 2 problems.</li><li>Draw the pictures.</li><li>Write the answers.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Read the problems and answers.</p>`,

      [{ heading: 'Exercise 110.1 — Draw your problem poster', items: ['Problem 1', 'Problem 2', 'Answers'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Read your favourite problem.', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: NUMBER — Fun with Numbers
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: 'Fun with Numbers', days: [

    D(1, '🎲', 'Number Games',
      'Play number games with dice.',
      `<p class='big-emoji'>🎲 🎯</p>

       <h3>Roll and Add</h3>
       <p>Roll 2 dice. Add the numbers. Write the answer.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 dice with their numbers.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Roll a 3 and a 4. What is the total?</p>
       <p><b>Answer:</b> 3 + 4 = <b>7</b>.</p>`,

      [{ heading: 'Exercise 111.1 — Roll and add', items: ['Roll 2 dice. Add the numbers.', 'Roll again. Add.', 'Who has more?'] },
       { heading: 'Exercise 111.2 — Draw', items: ['Draw the dice you rolled.'] }],

      `<p>⭐ for correct answers.</p>`,

      [{ q: 'Roll a 3 and 4. Total?', a: ['7'] }]),

    D(2, '🎲', 'Card Games',
      'Play number games with cards.',
      `<p class='big-emoji'>🎴 🎯</p>

       <h3>Card Games</h3>
       <p>Use cards 1–10. Pick 2 cards. Add them.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 cards and their total.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Pick a 5 and a 6. Total?</p>
       <p><b>Answer:</b> 5 + 6 = <b>11</b>.</p>`,

      [{ heading: 'Exercise 112.1 — Play', items: ['Pick 2 cards. Add them.', 'Pick 3 cards. Add them.', 'Who has the highest total?'] },
       { heading: 'Exercise 112.2 — Draw', items: ['Draw the cards you picked.'] }],

      `<p>⭐ for correct answers.</p>`,

      [{ q: '5 + 6 = ?', a: ['11'] }]),

    D(3, '🎲', 'Number Hunt',
      'Find numbers around the home.',
      `<p class='big-emoji'>🔍 🔢</p>

       <h3>Number Hunt</h3>
       <p>Find numbers on clocks, books, TV, phones. Write down each number.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 objects with numbers.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What number is on the clock?</p>
       <p><b>Answer:</b> <b>(Any number from the clock.)</b></p>`,

      [{ heading: 'Exercise 113.1 — Find and write', items: ['Number 1', 'Number 5', 'Number 10', 'Number 20'] },
       { heading: 'Exercise 113.2 — Draw', items: ['Draw 5 objects with numbers.'] }],

      `<p>⭐ for 5 numbers found.</p>`,

      [{ q: 'Where did you find a number?', a: ['clock', 'book', 'phone', 'any'] }]),

    D(4, '📝', 'Number Journal',
      'Write about numbers.',
      `<p class='big-emoji'>✍️ 📓 📝</p>

       <h3>Number Journal</h3>
       <p>Write 5 numbers you saw today and what they mean.</p>

       <h3>Example</h3>
       <ul><li>Number: 6 — Meaning: I woke up at 6 o'clock.</li><li>Number: 10 — Meaning: I have 10 fingers.</li></ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one thing you wrote about.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a number you saw today.</p>
       <p><b>Answer:</b> <b>(Any number.)</b></p>`,

      [{ heading: 'Exercise 114.1 — Write', items: ['Number: ___ Meaning: ___', 'Number: ___ Meaning: ___', 'Number: ___ Meaning: ___'] },
       { heading: 'Exercise 114.2 — Draw', items: ['Draw one thing from your journal.'] }],

      `<p>⭐ for 5 entries.</p>`,

      [{ q: 'Name a number you saw today.', a: ['any'] }]),

    D(5, '🎨', 'Number Poster',
      'Consolidate learning with a number poster.',
      `<p>Today we make a "Number" poster.</p>

       <h3>What to Draw</h3>
       <ul><li>Title: <b>"My Favourite Numbers"</b></li><li>Write your favourite numbers.</li><li>Draw something for each number.</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say why you like each number.</p>`,

      [{ heading: 'Exercise 115.1 — Draw your number poster', items: ['Favourite number 1', 'Favourite number 2', 'Favourite number 3'] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is your favourite number?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Final Review (Week 24)
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: 'Review', days: [

    D(1, '🔁', 'Review Numbers',
      'Review all numbers learned this year.',
      `<p class='big-emoji'>🔢 🔁</p>

       <h3>Review</h3>
       <ul><li>Count 1–100</li><li>Count by 2s, 5s, 10s</li><li>Even and odd numbers</li><li>Ordinal numbers</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Count by 10s: 10, 20, ___</p>
       <p><b>Answer:</b> <b>30</b>.</p>`,

      [{ heading: 'Exercise 116.1 — Say', items: ['Count 1–20.', 'Count by 2s.', 'Count by 5s.', 'Count by 10s.'] },
       { heading: 'Exercise 116.2 — Answer', items: ['Count by 10s: 10, 20, ___', 'Count by 5s: 5, 10, ___'] }],

      `<p><b>116.2:</b> 1. 30 2. 15</p>`,

      [{ q: 'Count by 10s: 10, 20, ___', a: ['30'] }, { q: 'Count by 5s: 5, 10, ___', a: ['15'] }]),

    D(2, '🔁', 'Review Add & Subtract',
      'Review addition and subtraction.',
      `<p class='big-emoji'>➕ ➖</p>

       <h3>Review</h3>
       <ul><li>Add to 30</li><li>Subtract to 30</li><li>Doubles and halves</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 15 + 10 = ?</p>
       <p><b>Answer:</b> 15 + 10 = <b>25</b>.</p>`,

      [{ heading: 'Exercise 117.1 — Add', items: ['5 + 3 = ___', '12 + 5 = ___', '15 + 10 = ___', '20 + 5 = ___'] },
       { heading: 'Exercise 117.2 — Subtract', items: ['10 − 3 = ___', '15 − 5 = ___', '20 − 10 = ___', '25 − 5 = ___'] }],

      `<p><b>117.1:</b> 1. 8 2. 17 3. 25 4. 25</p>
       <p><b>117.2:</b> 1. 7 2. 10 3. 10 4. 20</p>`,

      [{ q: '15 + 10 = ?', a: ['25'] }, { q: '20 − 5 = ?', a: ['15'] }]),

    D(3, '🔁', 'Review Shapes & Money',
      'Review shapes and money.',
      `<p class='big-emoji'>🔺 💰</p>

       <h3>Review</h3>
       <ul><li>Shapes: circle, square, triangle, rectangle, star, heart</li><li>Money: 1, 2, 5, 10, 20 cedis</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 + 5 = ? cedis</p>
       <p><b>Answer:</b> <b>10 cedis</b>.</p>`,

      [{ heading: 'Exercise 118.1 — Say', items: ['Name 6 shapes.', 'Add: 5 + 5 cedis.', 'Add: 10 + 5 cedis.'] },
       { heading: 'Exercise 118.2 — Answer', items: ['How many sides does a triangle have?', 'How many pesewas in 1 cedi?'] }],

      `<p><b>118.1:</b> 1. (any 6) 2. 10 3. 15</p>
       <p><b>118.2:</b> 1. 3 2. 100</p>`,

      [{ q: '5 + 5 cedis = ?', a: ['10', '10 cedis'] }, { q: '10 + 5 cedis = ?', a: ['15', '15 cedis'] }]),

    D(4, '🔁', 'Review Time & Fractions',
      'Review time and fractions.',
      `<p class='big-emoji'>🕐 🍕</p>

       <h3>Review</h3>
       <ul><li>Time: o'clock, half past</li><li>Fractions: halves, quarters</li></ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Half of 10 = ?</p>
       <p><b>Answer:</b> Half of 10 = <b>5</b>.</p>`,

      [{ heading: 'Exercise 119.1 — Say', items: ['What is 3:00?', 'What is 3:30?', 'Half of 4?', 'Half of 8?'] },
       { heading: 'Exercise 119.2 — Answer', items: ['What is half of 10?', 'What is a quarter of 8?'] }],

      `<p><b>119.1:</b> 1. Three o'clock 2. Half past three 3. 2 4. 4</p>
       <p><b>119.2:</b> 1. 5 2. 2</p>`,

      [{ q: 'What is half of 10?', a: ['5'] }, { q: 'What is a quarter of 8?', a: ['2'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate your math learning.',
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>

       <h3>You Did It!</h3>
       <p>You have completed Grade 2 Numeracy! Congratulations!</p>

       <h3>What to Do Today</h3>
       <ul><li>Show your posters to your family.</li><li>Count to 100 proudly.</li><li>Give yourself a big star! ⭐</li></ul>

       <h3>Show and Tell</h3>
       <p>Show your best work from the year.</p>`,

      [{ heading: 'Exercise 120.1 — Celebrate!', items: ['Show your posters', 'Count to 100', 'Give yourself a big star! ⭐'] }],

      `<p>⭐ for a wonderful year of learning!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]}

];