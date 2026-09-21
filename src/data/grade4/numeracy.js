// src/data/grade4/numeracy.js
// Grade 4 Numeracy — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Number · Algebra · Geometry & Measurement · Data

import { D } from '../helpers.js';

export const numeracy = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — NUMBER & PLACE VALUE
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Number & Place Value", days: [

    D(1, "🔢", "Large Numbers",
      "Read and write large numbers.",
      `<p class='big-emoji'>🔢 1️⃣0️⃣0️⃣0️⃣</p>
       <p>Numbers up to <b>1,000,000</b> (one million).</p>
       <h3>Example</h3>
       <p>456,789 = four hundred and fifty-six thousand, seven hundred and eighty-nine.</p>
       <h3>Place Values</h3>
       <ul>
         <li>456,789 → 4 = hundred thousands</li>
         <li>5 = ten thousands</li>
         <li>6 = thousands</li>
         <li>7 = hundreds</li>
         <li>8 = tens</li>
         <li>9 = units</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Write 4,532 in words.</p>
       <p><b>Answer:</b> Four thousand five hundred and thirty-two.</p>`,

      [{ heading: "Exercise 1.1 — Write in words.", items: [
          "4,532", "7,008", "12,345", "456,789", "1,000,000"
        ]},
       { heading: "Exercise 1.2 — Write in figures.", items: [
          "three thousand four hundred",
          "seven thousand and eight",
          "one hundred thousand"
        ]}],

      `<p><b>1.1:</b> 1. Four thousand five hundred thirty-two. 2. Seven thousand and eight. 3. Twelve thousand three hundred forty-five. 4. Four hundred fifty-six thousand seven hundred eighty-nine. 5. One million.</p>`,

      [{ q: "Write 456,789 in words.", a: ["four hundred fifty-six thousand seven hundred eighty-nine", "any"] },
       { q: "How many zeros in 1 million?", a: ["6", "six"] }]),

    D(2, "🔢", "Comparing",
      "Compare large numbers.",
      `<p class='big-emoji'>🔢 ⚖️</p>
       <p>Use <b>&lt;</b>, <b>&gt;</b>, <b>=</b>. Look at the highest place value first.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 4,532 ___ 4,523</p>
       <p><b>Answer:</b> 4,532 <b>&gt;</b> 4,523 (compare tens: 3 &gt; 2).</p>`,

      [{ heading: "Exercise 2.1 — Fill in <, > or =.", items: [
          "4,532 ___ 4,523",
          "7,008 ___ 7,080",
          "12,345 ___ 12,345",
          "456,789 ___ 456,798",
          "100,001 ___ 99,999"
        ]}],

      `<p><b>2.1:</b> 1. &gt; 2. &lt; 3. = 4. &lt; 5. &gt;</p>`,

      [{ q: "4,532 ___ 4,523", a: [">"] },
       { q: "7,008 ___ 7,080", a: ["<"] }]),

    D(3, "🔢", "Rounding",
      "Round to nearest 10, 100, 1000.",
      `<p class='big-emoji'>🔢 🔄</p>
       <p>If the digit is <b>5 or more</b>, round <b>up</b>. Otherwise round <b>down</b>.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Round 47 to nearest 10.</p>
       <p><b>Answer:</b> <b>50</b> (7 &ge; 5, so round up).</p>`,

      [{ heading: "Exercise 3.1 — Round to nearest 10.", items: [
          "47", "83", "125", "1,246", "9,998"
        ]},
       { heading: "Exercise 3.2 — Round to nearest 100.", items: [
          "147", "283", "1,125", "2,246", "9,998"
        ]}],

      `<p><b>3.1:</b> 1. 50 2. 80 3. 130 4. 1,250 5. 10,000</p>
       <p><b>3.2:</b> 1. 100 2. 300 3. 1,100 4. 2,200 5. 10,000</p>`,

      [{ q: "Round 47 to nearest 10.", a: ["50"] },
       { q: "Round 147 to nearest 100.", a: ["100"] }]),

    D(4, "🔢", "Estimation",
      "Estimate answers.",
      `<p class='big-emoji'>🔢 🎯</p>
       <p>Round numbers first, then calculate.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Estimate 345 + 234.</p>
       <p><b>Answer:</b> 300 + 200 = <b>500</b>. Exact: 579.</p>`,

      [{ heading: "Exercise 4.1 — Estimate, then calculate exactly.", items: [
          "345 + 234", "456 + 321", "567 + 231", "678 + 220", "789 + 110"
        ]}],

      `<p>Estimates: 500, 800, 800, 900, 900<br>Exact: 579, 777, 798, 898, 899</p>`,

      [{ q: "Estimate 345 + 234.", a: ["500"] },
       { q: "Exact 345 + 234.", a: ["579"] }]),

    D(5, "🎨", "Place Value Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 🔢</p>
       <p>Show place value up to millions.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>A place value chart with 7 columns</li>
         <li>Write 456,789 and 1,000,000</li>
         <li>Label each digit's place</li>
       </ul>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "456,789", "1,000,000"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "How many zeros in 1 million?", a: ["6", "six"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — ADDITION & SUBTRACTION
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Addition & Subtraction", days: [

    D(1, "➕", "4-Digit Addition",
      "Add 4-digit numbers.",
      `<p class='big-emoji'>➕ 4️⃣</p>
       <p>Line up digits by place value.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 4,532 + 3,246 = ?</p>
       <p><b>Answer:</b> <b>7,778</b>.</p>`,

      [{ heading: "Exercise 6.1 — Add.", items: [
          "4,532 + 3,246", "7,008 + 2,992", "12,345 + 8,765", "60,070 + 39,930", "45,678 + 23,456"
        ]}],

      `<p><b>6.1:</b> 1. 7,778 2. 10,000 3. 21,110 4. 100,000 5. 69,134</p>`,

      [{ q: "4,532 + 3,246 = ?", a: ["7,778", "7778"] },
       { q: "7,008 + 2,992 = ?", a: ["10,000", "10000"] }]),

    D(2, "➖", "4-Digit Subtraction",
      "Subtract 4-digit numbers.",
      `<p class='big-emoji'>➖ 4️⃣</p>
       <p>Borrow where needed.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 7,778 − 3,246 = ?</p>
       <p><b>Answer:</b> <b>4,532</b>.</p>`,

      [{ heading: "Exercise 7.1 — Subtract.", items: [
          "7,778 − 3,246", "10,000 − 2,992", "21,110 − 8,765", "100,000 − 39,930", "69,134 − 23,456"
        ]}],

      `<p><b>7.1:</b> 1. 4,532 2. 7,008 3. 12,345 4. 60,070 5. 45,678</p>`,

      [{ q: "7,778 − 3,246 = ?", a: ["4,532", "4532"] },
       { q: "10,000 − 2,992 = ?", a: ["7,008", "7008"] }]),

    D(3, "➕", "Word Problems",
      "Solve word problems.",
      `<p class='big-emoji'>➕ 📝</p>
       <p>Read carefully. Add or subtract.</p>
       <h3>Steps</h3>
       <ol>
         <li>Read the problem twice.</li>
         <li>Underline the numbers.</li>
         <li>Write the correct equation.</li>
         <li>Calculate and write the answer with the unit.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A trader had 4,532 mangoes. She sold 3,246. How many left?</p>
       <p><b>Answer:</b> 4,532 − 3,246 = <b>1,286 mangoes</b>.</p>`,

      [{ heading: "Exercise 8.1 — Solve.", items: [
          "A trader had 4,532 mangoes. She sold 3,246. How many left?",
          "A school has 7,008 pupils. 2,992 more join. How many now?"
        ]}],

      `<p><b>8.1:</b> 1. 1,286 2. 10,000</p>`,

      [{ q: "4,532 − 3,246 = ?", a: ["1,286", "1286"] }]),

    D(4, "➕", "Estimation",
      "Estimate answers.",
      `<p class='big-emoji'>➕ 🎯</p>
       <p>Round then calculate.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Estimate 4,532 + 3,246.</p>
       <p><b>Answer:</b> 5,000 + 3,000 = <b>8,000</b>.</p>`,

      [{ heading: "Exercise 9.1 — Estimate then calculate exactly.", items: [
          "4,532 + 3,246", "7,008 + 2,992", "12,345 + 8,765"
        ]}],

      `<p>Estimates: 8,000 / 10,000 / 21,000<br>Exact: 7,778 / 10,000 / 21,110</p>`,

      [{ q: "Estimate 4,532 + 3,246.", a: ["8,000", "8000"] }]),

    D(5, "🎨", "Add/Sub Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 ➕➖</p>
       <p>Show 3 addition and 3 subtraction problems.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [] }],

      `<p>Any correct poster.</p>`,

      [{ q: "Solve 4,532 + 3,246.", a: ["7,778", "7778"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — MULTIPLICATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Multiplication", days: [

    D(1, "✖️", "Times Tables",
      "Revise all times tables.",
      `<p class='big-emoji'>✖️ 🔢</p>
       <p>Revise 2× to 12× tables.</p>
       <h3>Quick Recall</h3>
       <ul>
         <li>6 × 7 = 42</li>
         <li>8 × 9 = 72</li>
         <li>7 × 12 = 84</li>
         <li>9 × 9 = 81</li>
         <li>11 × 12 = 132</li>
       </ul>`,

      [{ heading: "Exercise 11.1 — Multiply.", items: [
          "6 × 7", "8 × 9", "7 × 12", "9 × 9", "11 × 12"
        ]}],

      `<p><b>11.1:</b> 1. 42 2. 72 3. 84 4. 81 5. 132</p>`,

      [{ q: "6 × 7 = ?", a: ["42"] },
       { q: "8 × 9 = ?", a: ["72"] }]),

    D(2, "✖️", "2-Digit × 1-Digit",
      "Multiply 2-digit by 1-digit.",
      `<p class='big-emoji'>✖️ 2️⃣1️⃣</p>
       <p>Example: 34 × 7 = 238</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 34 × 7 = ?</p>
       <p><b>Answer:</b> 4 × 7 = 28 (carry 2), 3 × 7 = 21 + 2 = 23 → <b>238</b>.</p>`,

      [{ heading: "Exercise 12.1 — Multiply.", items: [
          "34 × 7", "45 × 6", "56 × 8", "78 × 5", "89 × 4"
        ]}],

      `<p><b>12.1:</b> 1. 238 2. 270 3. 448 4. 390 5. 356</p>`,

      [{ q: "34 × 7 = ?", a: ["238"] },
       { q: "45 × 6 = ?", a: ["270"] }]),

    D(3, "✖️", "Multiply by 100",
      "Multiply by 100 and 1000.",
      `<p class='big-emoji'>✖️ 1️⃣0️⃣0️⃣</p>
       <p>When you multiply by 100, add two zeros.</p>
       <p>When you multiply by 1000, add three zeros.</p>
       <h3>Examples</h3>
       <ul>
         <li>4 × 100 = 400</li>
         <li>12 × 100 = 1,200</li>
         <li>34 × 1000 = 34,000</li>
       </ul>`,

      [{ heading: "Exercise 13.1 — Multiply.", items: [
          "4 × 100", "5 × 100", "7 × 100", "12 × 100", "34 × 1000"
        ]}],

      `<p><b>13.1:</b> 1. 400 2. 500 3. 700 4. 1,200 5. 34,000</p>`,

      [{ q: "7 × 100 = ?", a: ["700"] },
       { q: "34 × 1000 = ?", a: ["34,000", "34000"] }]),

    D(4, "✖️", "Word Problems",
      "Multiplication word problems.",
      `<p class='big-emoji'>✖️ 📝</p>
       <p>Read carefully. Find the groups and each group's size.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A trader has 34 baskets of 7 mangoes each. Total mangoes?</p>
       <p><b>Answer:</b> 34 × 7 = <b>238 mangoes</b>.</p>`,

      [{ heading: "Exercise 14.1 — Solve.", items: [
          "A trader has 34 baskets of 7 mangoes each. Total mangoes?",
          "A school has 45 classes of 6 pupils. Total pupils?",
          "A box holds 12 eggs. How many in 8 boxes?"
        ]}],

      `<p><b>14.1:</b> 1. 238 2. 270 3. 96</p>`,

      [{ q: "34 × 7 = ?", a: ["238"] }]),

    D(5, "🎨", "Multiplication Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 ✖️</p>
       <p>Show multiplication tables from 2× to 12×.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say one table from memory.</p>`,

      [{ heading: "Exercise 15.1 — Write tables.", items: [] }],

      `<p>Any correct tables.</p>`,

      [{ q: "What is 12 × 12?", a: ["144"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Place Value",
      "Review place value.",
      `<p class='big-emoji'>🔁 🔢</p>
       <p>Up to millions.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Write 456,789 in words.</p>
       <p><b>Answer:</b> Four hundred fifty-six thousand seven hundred eighty-nine.</p>`,

      [{ heading: "Exercise 16.1 — Write 456,789 in words.", items: [] }],

      `<p>Four hundred fifty-six thousand seven hundred eighty-nine.</p>`,

      [{ q: "What is the place value of 4 in 456,789?", a: ["hundred thousands"] }]),

    D(2, "🔁", "Review Add/Sub",
      "Review addition and subtraction.",
      `<p class='big-emoji'>🔁 ➕➖</p>
       <p>4-digit numbers.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 4,532 + 3,246 = ?</p>
       <p><b>Answer:</b> 7,778.</p>`,

      [{ heading: "Exercise 17.1 — Solve.", items: [
          "4,532 + 3,246", "7,778 − 3,246", "45,678 + 23,456", "69,134 − 23,456"
        ]}],

      `<p><b>17.1:</b> 1. 7,778 2. 4,532 3. 69,134 4. 45,678</p>`,

      [{ q: "4,532 + 3,246 = ?", a: ["7,778", "7778"] }]),

    D(3, "🔁", "Review Multiplication",
      "Review multiplication.",
      `<p class='big-emoji'>🔁 ✖️</p>
       <p>Times tables and 2-digit × 1-digit.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 34 × 7 = ?</p>
       <p><b>Answer:</b> 238.</p>`,

      [{ heading: "Exercise 18.1 — Solve.", items: [
          "34 × 7", "45 × 6", "56 × 8", "78 × 5"
        ]}],

      `<p><b>18.1:</b> 1. 238 2. 270 3. 448 4. 390</p>`,

      [{ q: "34 × 7 = ?", a: ["238"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Write 4,532 in words.</li>
         <li>4,532 ___ 4,523</li>
         <li>Round 147 to nearest 100.</li>
         <li>4,532 + 3,246 = ?</li>
         <li>7,778 − 3,246 = ?</li>
         <li>34 × 7 = ?</li>
         <li>45 × 6 = ?</li>
         <li>7 × 100 = ?</li>
         <li>34 × 1000 = ?</li>
         <li>Estimate 4,532 + 3,246.</li>
       </ol>`,

      [{ heading: "Exercise 19.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "456,789 rounded to nearest 1000 = ?", a: ["457,000", "457000"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Month 1 of Grade 4 Numeracy!</p>
       <h3>Show and Tell</h3>
       <p>Show your posters. Give yourself a star! ⭐</p>`,

      [{ heading: "Exercise 20.1 — Show posters.", items: [
          "Place Value Poster",
          "Add/Sub Poster",
          "Multiplication Poster"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What was your favourite topic?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — DIVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Division", days: [

    D(1, "➗", "Division Facts",
      "Learn division facts.",
      `<p class='big-emoji'>➗ 🔢</p>
       <p>Practice ÷2, ÷5, ÷10.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 20 ÷ 2 = ?</p>
       <p><b>Answer:</b> 20 ÷ 2 = <b>10</b>.</p>`,

      [{ heading: "Exercise 21.1 — Divide.", items: [
          "20 ÷ 2 = ___", "25 ÷ 5 = ___", "30 ÷ 10 = ___", "40 ÷ 2 = ___", "50 ÷ 5 = ___"
        ]}],

      `<p>10, 5, 3, 20, 10</p>`,

      [{ q: "20 ÷ 2 = ?", a: ["10"] },
       { q: "50 ÷ 5 = ?", a: ["10"] }]),

    D(2, "➗", "Long Division Intro",
      "Learn long division.",
      `<p class='big-emoji'>➗ 🧮</p>
       <p>Divide larger numbers. Example: 84 ÷ 4 = 21.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 84 ÷ 4 = ?</p>
       <p><b>Answer:</b> 8 ÷ 4 = 2, 4 ÷ 4 = 1 → <b>21</b>.</p>`,

      [{ heading: "Exercise 22.1 — Divide.", items: [
          "84 ÷ 4 = ___", "96 ÷ 6 = ___", "144 ÷ 12 = ___", "256 ÷ 8 = ___", "729 ÷ 9 = ___"
        ]}],

      `<p>21, 16, 12, 32, 81</p>`,

      [{ q: "84 ÷ 4 = ?", a: ["21"] },
       { q: "144 ÷ 12 = ?", a: ["12"] }]),

    D(3, "📝", "Word Problems",
      "Solve division word problems.",
      `<p class='big-emoji'>📝 ➗</p>
       <p>144 oranges shared among 12 children → 12 each.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 144 ÷ 12 = ?</p>
       <p><b>Answer:</b> <b>12 oranges each</b>.</p>`,

      [{ heading: "Exercise 23.1 — Solve.", items: [
          "144 ÷ 12 = ___", "256 ÷ 8 = ___", "729 ÷ 9 = ___"
        ]}],

      `<p>12, 32, 81</p>`,

      [{ q: "144 ÷ 12 = ?", a: ["12"] }]),

    D(4, "🔢", "Remainders",
      "Learn remainders.",
      `<p class='big-emoji'>🔢 ➗</p>
       <p>25 ÷ 4 = 6 remainder 1.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 25 ÷ 4 = ?</p>
       <p><b>Answer:</b> <b>6 remainder 1</b> (because 6 × 4 = 24, and 25 − 24 = 1).</p>`,

      [{ heading: "Exercise 24.1 — Divide with remainder.", items: [
          "25 ÷ 4 = ___ r ___", "37 ÷ 5 = ___ r ___", "50 ÷ 7 = ___ r ___"
        ]}],

      `<p>6 r 1; 7 r 2; 7 r 1</p>`,

      [{ q: "25 ÷ 4 = ? r ?", a: ["6 r 1"] }]),

    D(5, "🎨", "Division Poster",
      "Make a division poster.",
      `<p class='big-emoji'>🎨 ➗</p>
       <p>Show 3 division problems with remainders.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 25.1 — Draw.", items: [
          "25 ÷ 4", "37 ÷ 5", "50 ÷ 7"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "25 ÷ 4 = ?", a: ["6 r 1", "6 remainder 1"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — FRACTIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Fractions", days: [

    D(1, "½", "Equivalent Fractions",
      "Learn equivalent fractions.",
      `<p class='big-emoji'>½ 🔄</p>
       <p>1/2 = 2/4 = 4/8.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 2/4 equal to 1/2?</p>
       <p><b>Answer:</b> Yes — multiply numerator and denominator of 1/2 by 2 to get 2/4.</p>`,

      [{ heading: "Exercise 26.1 — Write 3 equivalent fractions.", items: [
          "1/2", "1/3", "2/5", "3/4", "5/6"
        ]}],

      `<p>Any correct set.</p>`,

      [{ q: "Is 2/4 equal to 1/2?", a: ["yes"] }]),

    D(2, "➕", "Adding Fractions",
      "Add fractions.",
      `<p class='big-emoji'>➕ ½</p>
       <p>1/2 + 1/3 = 3/6 + 2/6 = 5/6.</p>
       <h3>Steps</h3>
       <ol>
         <li>Find a common denominator.</li>
         <li>Convert both fractions.</li>
         <li>Add the numerators.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 1/2 + 1/3 = ?</p>
       <p><b>Answer:</b> <b>5/6</b>.</p>`,

      [{ heading: "Exercise 27.1 — Add.", items: [
          "1/2 + 1/3", "1/4 + 1/2", "1/3 + 1/6", "2/5 + 1/2", "3/4 + 1/8"
        ]}],

      `<p>5/6; 3/4; 1/2; 9/10; 7/8</p>`,

      [{ q: "1/2 + 1/3 = ?", a: ["5/6"] },
       { q: "1/4 + 1/2 = ?", a: ["3/4"] }]),

    D(3, "➖", "Subtracting Fractions",
      "Subtract fractions.",
      `<p class='big-emoji'>➖ ½</p>
       <p>3/4 − 1/2 = 1/4.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 3/4 − 1/2 = ?</p>
       <p><b>Answer:</b> <b>1/4</b>.</p>`,

      [{ heading: "Exercise 28.1 — Subtract.", items: [
          "3/4 − 1/2", "2/3 − 1/6", "5/6 − 1/3", "7/8 − 3/4", "9/10 − 2/5"
        ]}],

      `<p>1/4; 1/2; 1/2; 1/8; 1/2</p>`,

      [{ q: "3/4 − 1/2 = ?", a: ["1/4"] }]),

    D(4, "📝", "Comparing Fractions",
      "Compare fractions.",
      `<p class='big-emoji'>📝 ⚖️</p>
       <p>Find a common denominator to compare.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 1/2 &gt; 1/3?</p>
       <p><b>Answer:</b> Yes — 3/6 &gt; 2/6.</p>`,

      [{ heading: "Exercise 29.1 — Compare (use >, < or =).", items: [
          "1/2 ___ 1/3", "3/4 ___ 2/3", "5/6 ___ 4/5", "2/5 ___ 1/2", "7/8 ___ 3/4"
        ]}],

      `<p>1. &gt; 2. &gt; 3. &gt; 4. &lt; 5. &gt;</p>`,

      [{ q: "Is 1/2 > 1/3?", a: ["yes"] },
       { q: "Is 3/4 > 2/3?", a: ["yes"] }]),

    D(5, "🎨", "Fraction Poster",
      "Make a fraction poster.",
      `<p class='big-emoji'>🎨 ½</p>
       <p>Show equivalent fractions, adding, and subtracting.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each example.</p>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [] }],

      `<p>⭐🎨</p>`,

      [{ q: "Is 2/4 = 1/2?", a: ["yes"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — DECIMALS
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Decimals", days: [

    D(1, ".", "Place Value",
      "Understand decimal place value.",
      `<p class='big-emoji'>. 🔢</p>
       <p>In 3.45: 3 = units, 4 = tenths, 5 = hundredths.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the place value of 4 in 3.45?</p>
       <p><b>Answer:</b> <b>Tenths</b>.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "3.45", "7.82", "1.29", "5.06", "2.50"
        ]}],

      `<p>Any correct reading.</p>`,

      [{ q: "Place value of 4 in 3.45?", a: ["tenths"] },
       { q: "Place value of 5 in 3.45?", a: ["hundredths"] }]),

    D(2, "➕", "Adding Decimals",
      "Add decimals.",
      `<p class='big-emoji'>➕ .</p>
       <p>0.5 + 0.3 = 0.8.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 0.5 + 0.3 = ?</p>
       <p><b>Answer:</b> <b>0.8</b>.</p>`,

      [{ heading: "Exercise 32.1 — Add.", items: [
          "0.5 + 0.3", "1.2 + 0.8", "2.5 + 1.5", "3.75 + 1.25", "0.125 + 0.875"
        ]}],

      `<p>0.8; 2.0; 4.0; 5.0; 1.0</p>`,

      [{ q: "0.5 + 0.3 = ?", a: ["0.8"] },
       { q: "1.0 − 0.125 = ?", a: ["0.875"] }]),

    D(3, "➖", "Subtracting Decimals",
      "Subtract decimals.",
      `<p class='big-emoji'>➖ .</p>
       <p>1.0 − 0.125 = 0.875.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 0.5 − 0.3 = ?</p>
       <p><b>Answer:</b> <b>0.2</b>.</p>`,

      [{ heading: "Exercise 33.1 — Subtract.", items: [
          "0.5 − 0.3", "1.2 − 0.8", "2.5 − 1.5", "3.75 − 1.25", "1.0 − 0.125"
        ]}],

      `<p>0.2; 0.4; 1.0; 2.5; 0.875</p>`,

      [{ q: "0.5 − 0.3 = ?", a: ["0.2"] }]),

    D(4, "✖️", "Multiply by 10",
      "Multiply decimals by 10.",
      `<p class='big-emoji'>✖️ 🔟</p>
       <p>0.5 × 10 = 5.</p>
       <h3>Rule</h3>
       <p>Move the decimal point one place to the right.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 0.5 × 10 = ?</p>
       <p><b>Answer:</b> <b>5</b>.</p>`,

      [{ heading: "Exercise 34.1 — Multiply.", items: [
          "0.5 × 10", "1.2 × 10", "3.5 × 10", "0.25 × 10", "0.125 × 10"
        ]}],

      `<p>5; 12; 35; 2.5; 1.25</p>`,

      [{ q: "0.5 × 10 = ?", a: ["5"] },
       { q: "1.2 × 10 = ?", a: ["12"] }]),

    D(5, "🎨", "Decimal Poster",
      "Make a decimal poster.",
      `<p class='big-emoji'>🎨 .</p>
       <p>Show place value, adding, and subtracting.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each example.</p>`,

      [{ heading: "Exercise 35.1 — Draw.", items: [] }],

      `<p>⭐🎨</p>`,

      [{ q: "0.5 + 0.3 = ?", a: ["0.8"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Division",
      "Review division.",
      `<p class='big-emoji'>🔁 ➗</p>
       <p>Facts, long division, remainders.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 84 ÷ 4 = ?</p>
       <p><b>Answer:</b> 21.</p>`,

      [{ heading: "Exercise 36.1 — Solve.", items: [
          "84 ÷ 4", "144 ÷ 12", "25 ÷ 4"
        ]}],

      `<p>21; 12; 6 r 1</p>`,

      [{ q: "84 ÷ 4 = ?", a: ["21"] }]),

    D(2, "🔁", "Review Fractions",
      "Review fractions.",
      `<p class='big-emoji'>🔁 ½</p>
       <p>Equivalent, adding, subtracting, comparing.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 1/2 + 1/3 = ?</p>
       <p><b>Answer:</b> 5/6.</p>`,

      [{ heading: "Exercise 37.1 — Solve.", items: [
          "1/2 + 1/3", "3/4 − 1/2", "1/2 ___ 1/3"
        ]}],

      `<p>5/6; 1/4; ></p>`,

      [{ q: "1/2 + 1/3 = ?", a: ["5/6"] }]),

    D(3, "🔁", "Review Decimals",
      "Review decimals.",
      `<p class='big-emoji'>🔁 .</p>
       <p>Add, subtract, multiply by 10.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 0.5 + 0.3 = ?</p>
       <p><b>Answer:</b> 0.8.</p>`,

      [{ heading: "Exercise 38.1 — Solve.", items: [
          "0.5 + 0.3", "1.0 − 0.125", "0.5 × 10"
        ]}],

      `<p>0.8; 0.875; 5</p>`,

      [{ q: "0.5 + 0.3 = ?", a: ["0.8"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>84 ÷ 4 = ?</li>
         <li>144 ÷ 12 = ?</li>
         <li>25 ÷ 4 = ?</li>
         <li>1/2 + 1/3 = ?</li>
         <li>3/4 − 1/2 = ?</li>
         <li>Is 1/2 > 1/3?</li>
         <li>0.5 + 0.3 = ?</li>
         <li>1.0 − 0.125 = ?</li>
         <li>0.5 × 10 = ?</li>
         <li>Place value of 4 in 3.45?</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "25 ÷ 4 = ?", a: ["6 r 1"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Division (15)</li>
         <li>Part B — Fractions (15)</li>
         <li>Part C — Decimals (15)</li>
         <li>Part D — Word problems (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Division (15)",
          "Part B — Fractions (15)",
          "Part C — Decimals (15)",
          "Part D — Word problems (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — GEOMETRY
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Geometry", days: [

    D(1, "📐", "Angles",
      "Learn about angles.",
      `<p class='big-emoji'>📐 🔺</p>
       <h3>Types of Angles</h3>
       <ul>
         <li>Right angle — 90°</li>
         <li>Acute angle — less than 90°</li>
         <li>Obtuse angle — more than 90°</li>
         <li>Straight angle — 180°</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What type is a 90° angle?</p>
       <p><b>Answer:</b> A <b>right angle</b>.</p>`,

      [{ heading: "Exercise 40.1 — Name the angle.", items: [
          "90° → ___",
          "45° → ___",
          "120° → ___",
          "180° → ___"
        ]}],

      `<p>1. Right angle 2. Acute 3. Obtuse 4. Straight</p>`,

      [{ q: "What is a 90° angle?", a: ["right angle"] },
       { q: "What is an angle less than 90°?", a: ["acute"] }]),

    D(2, "🔺", "Triangles",
      "Learn about triangles.",
      `<p class='big-emoji'>🔺 📐</p>
       <h3>Types of Triangles</h3>
       <ul>
         <li>Equilateral — all sides equal</li>
         <li>Isosceles — 2 sides equal</li>
         <li>Scalene — all sides different</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What type of triangle has all equal sides?</p>
       <p><b>Answer:</b> <b>Equilateral</b>.</p>`,

      [{ heading: "Exercise 41.1 — Name the triangle.", items: [
          "All sides equal → ___",
          "2 sides equal → ___",
          "All sides different → ___"
        ]}],

      `<p>1. Equilateral 2. Isosceles 3. Scalene</p>`,

      [{ q: "What type has all equal sides?", a: ["equilateral"] }]),

    D(3, "⬜", "Quadrilaterals",
      "Learn about quadrilaterals.",
      `<p class='big-emoji'>⬜ 🔷</p>
       <h3>Quadrilaterals</h3>
       <ul>
         <li>Square — 4 equal sides, 4 right angles</li>
         <li>Rectangle — 2 pairs equal, 4 right angles</li>
         <li>Parallelogram — 2 pairs parallel</li>
         <li>Rhombus — 4 equal sides, no right angles</li>
         <li>Trapezium — 1 pair parallel</li>
       </ul>`,

      [{ heading: "Exercise 42.1 — Name the shape.", items: [
          "4 equal sides, 4 right angles → ___",
          "4 equal sides, no right angles → ___",
          "1 pair parallel sides → ___"
        ]}],

      `<p>1. Square 2. Rhombus 3. Trapezium</p>`,

      [{ q: "How many sides does a quadrilateral have?", a: ["4", "four"] }]),

    D(4, "🪞", "Symmetry",
      "Learn about symmetry.",
      `<p class='big-emoji'>🪞 ✨</p>
       <p>A <b>line of symmetry</b> divides a shape into 2 equal halves.</p>
       <h3>Lines of Symmetry</h3>
       <ul>
         <li>Square — 4 lines</li>
         <li>Rectangle — 2 lines</li>
         <li>Circle — many lines</li>
         <li>Equilateral triangle — 3 lines</li>
       </ul>`,

      [{ heading: "Exercise 43.1 — Say.", items: [
          "How many lines of symmetry in a square?",
          "How many in a rectangle?",
          "How many in an equilateral triangle?"
        ]}],

      `<p>1. 4 2. 2 3. 3</p>`,

      [{ q: "Lines of symmetry in a square?", a: ["4", "four"] }]),

    D(5, "🎨", "Geometry Poster",
      "Make a geometry poster.",
      `<p class='big-emoji'>🎨 📐</p>
       <p>Show angles, triangles, and quadrilaterals.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Name each shape.</p>`,

      [{ heading: "Exercise 44.1 — Draw and label.", items: [
          "3 angles", "3 triangles", "3 quadrilaterals"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a quadrilateral.", a: ["square", "rectangle", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — MEASUREMENT
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Measurement", days: [

    D(1, "📏", "Length",
      "Learn about length.",
      `<p class='big-emoji'>📏 📐</p>
       <h3>Units</h3>
       <ul>
         <li>10 mm = 1 cm</li>
         <li>100 cm = 1 m</li>
         <li>1000 m = 1 km</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 3 m = ___ cm?</p>
       <p><b>Answer:</b> 3 × 100 = <b>300 cm</b>.</p>`,

      [{ heading: "Exercise 45.1 — Convert.", items: [
          "3 m = ___ cm", "5 km = ___ m", "200 cm = ___ m", "4000 m = ___ km"
        ]}],

      `<p>1. 300 2. 5,000 3. 2 4. 4</p>`,

      [{ q: "3 m = ___ cm", a: ["300"] }]),

    D(2, "⬜", "Area",
      "Learn about area.",
      `<p class='big-emoji'>⬜ 📐</p>
       <p><b>Area of rectangle</b> = length × width.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Area of a 5 cm × 3 cm rectangle?</p>
       <p><b>Answer:</b> 5 × 3 = <b>15 cm²</b>.</p>`,

      [{ heading: "Exercise 46.1 — Find area.", items: [
          "5 × 3 = ___ cm²", "4 × 4 = ___ cm²", "6 × 2 = ___ cm²", "8 × 3 = ___ cm²"
        ]}],

      `<p>1. 15 2. 16 3. 12 4. 24</p>`,

      [{ q: "Area of 5 × 3?", a: ["15", "15 cm²"] }]),

    D(3, "🔲", "Perimeter",
      "Learn about perimeter.",
      `<p class='big-emoji'>🔲 📏</p>
       <p><b>Perimeter</b> = distance around a shape.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Perimeter of square with side 5 cm?</p>
       <p><b>Answer:</b> 5 + 5 + 5 + 5 = <b>20 cm</b>.</p>`,

      [{ heading: "Exercise 47.1 — Find perimeter.", items: [
          "Square side 5 cm = ___", "Square side 8 cm = ___",
          "Rectangle 6 × 3 = ___", "Rectangle 7 × 2 = ___"
        ]}],

      `<p>1. 20 cm 2. 32 cm 3. 18 cm 4. 18 cm</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20", "20 cm"] }]),

    D(4, "🧊", "Volume",
      "Learn about volume.",
      `<p class='big-emoji'>🧊 📦</p>
       <p><b>Volume of cube</b> = side × side × side.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Volume of cube with side 3 cm?</p>
       <p><b>Answer:</b> 3 × 3 × 3 = <b>27 cm³</b>.</p>`,

      [{ heading: "Exercise 48.1 — Find volume.", items: [
          "Cube side 2 cm = ___", "Cube side 3 cm = ___",
          "Cube side 4 cm = ___", "Cube side 5 cm = ___"
        ]}],

      `<p>1. 8 2. 27 3. 64 4. 125</p>`,

      [{ q: "Volume of cube side 3 cm?", a: ["27", "27 cm³"] }]),

    D(5, "🎨", "Measurement Poster",
      "Make a measurement poster.",
      `<p class='big-emoji'>🎨 📏</p>
       <p>Show length, area, perimeter, and volume.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each formula.</p>`,

      [{ heading: "Exercise 49.1 — Draw and label.", items: [
          "Length", "Area", "Perimeter", "Volume"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Area of 5 × 3 rectangle?", a: ["15", "15 cm²"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — TIME
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Time", days: [

    D(1, "🕐", "Telling Time",
      "Tell time accurately.",
      `<p class='big-emoji'>🕐 🕜</p>
       <h3>Telling Time</h3>
       <ul>
         <li>O'clock — minute hand on 12</li>
         <li>Half past — minute hand on 6</li>
         <li>Quarter past — minute hand on 3</li>
         <li>Quarter to — minute hand on 9</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What time is 3:30?</p>
       <p><b>Answer:</b> <b>Half past three</b>.</p>`,

      [{ heading: "Exercise 50.1 — Say the time.", items: [
          "3:00", "3:30", "3:15", "3:45", "12:00"
        ]}],

      `<p>Any correct reading.</p>`,

      [{ q: "What is 3:30?", a: ["half past three", "3:30"] },
       { q: "What is 3:15?", a: ["quarter past three", "3:15"] }]),

    D(2, "⏱️", "Time Intervals",
      "Calculate time intervals.",
      `<p class='big-emoji'>⏱️ ➕</p>
       <p>How much time has passed between two times?</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> From 3:00 to 5:00 = ?</p>
       <p><b>Answer:</b> <b>2 hours</b>.</p>`,

      [{ heading: "Exercise 51.1 — Find the interval.", items: [
          "3:00 to 5:00 = ___", "8:00 to 12:00 = ___",
          "10:30 to 11:30 = ___", "7:15 to 8:15 = ___"
        ]}],

      `<p>1. 2 h 2. 4 h 3. 1 h 4. 1 h</p>`,

      [{ q: "3:00 to 5:00 = ?", a: ["2 hours", "2"] }]),

    D(3, "🕛", "24-Hour Clock",
      "Learn 24-hour time.",
      `<p class='big-emoji'>🕛 ⏰</p>
       <h3>12-Hour vs 24-Hour</h3>
       <ul>
         <li>1:00 pm = 13:00</li>
         <li>6:00 pm = 18:00</li>
         <li>11:00 pm = 23:00</li>
         <li>12:00 am = 00:00</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 3:00 pm in 24-hour time?</p>
       <p><b>Answer:</b> <b>15:00</b>.</p>`,

      [{ heading: "Exercise 52.1 — Convert to 24-hour.", items: [
          "3:00 pm = ___", "7:00 pm = ___",
          "9:00 am = ___", "12:00 pm = ___"
        ]}],

      `<p>1. 15:00 2. 19:00 3. 09:00 4. 12:00</p>`,

      [{ q: "3:00 pm in 24-hour time?", a: ["15:00"] }]),

    D(4, "📝", "Time Problems",
      "Solve time problems.",
      `<p class='big-emoji'>📝 ⏰</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A film starts at 4:00 pm and lasts 2 hours. When does it end?</p>
       <p><b>Answer:</b> 4:00 + 2 h = <b>6:00 pm</b>.</p>`,

      [{ heading: "Exercise 53.1 — Solve.", items: [
          "Film starts at 4:00 pm and lasts 2 hours. End time?",
          "Bus leaves at 8:00 and arrives at 11:00. How long?",
          "You sleep at 9:00 pm and wake at 6:00 am. How many hours?"
        ]}],

      `<p>1. 6:00 pm 2. 3 hours 3. 9 hours</p>`,

      [{ q: "4:00 + 2 h = ?", a: ["6:00 pm", "18:00"] }]),

    D(5, "🎨", "Time Poster",
      "Make a time poster.",
      `<p class='big-emoji'>🎨 🕐</p>
       <p>Show clock faces and 24-hour time.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say the time on each clock.</p>`,

      [{ heading: "Exercise 54.1 — Draw and label.", items: [
          "3:00", "3:30", "15:00", "18:00"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 3:00 pm in 24-hour time?", a: ["15:00"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Geometry",
      "Review geometry.",
      `<p class='big-emoji'>🔁 📐</p>
       <h3>Review</h3>
       <ul>
         <li>Angles, triangles, quadrilaterals</li>
         <li>Symmetry</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a 90° angle?</p>
       <p><b>Answer:</b> A right angle.</p>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is an acute angle?",
          "What is an equilateral triangle?",
          "How many lines of symmetry in a square?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an acute angle?", a: ["less than 90", "any"] }]),

    D(2, "🔁", "Review Measurement",
      "Review measurement.",
      `<p class='big-emoji'>🔁 📏</p>
       <h3>Review</h3>
       <ul>
         <li>Length, area, perimeter, volume</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Perimeter of square side 5 cm?</p>
       <p><b>Answer:</b> 20 cm.</p>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "3 m = ___ cm",
          "Area of 5 × 3 rectangle?",
          "Perimeter of square side 5 cm?",
          "Volume of cube side 3 cm?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20", "20 cm"] }]),

    D(3, "🔁", "Review Time",
      "Review time.",
      `<p class='big-emoji'>🔁 🕐</p>
       <h3>Review</h3>
       <ul>
         <li>Telling time, 24-hour clock</li>
         <li>Time intervals</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 3:00 pm in 24-hour time?</p>
       <p><b>Answer:</b> 15:00.</p>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "What is 3:30?",
          "3:00 to 5:00 = ?",
          "3:00 pm in 24-hour time?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "3:00 to 5:00 = ?", a: ["2 hours", "2"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a right angle?</li>
         <li>What type of triangle has all equal sides?</li>
         <li>How many lines of symmetry in a square?</li>
         <li>3 m = ___ cm</li>
         <li>Area of 5 × 3 rectangle?</li>
         <li>Perimeter of square side 5 cm?</li>
         <li>Volume of cube side 3 cm?</li>
         <li>What is 3:30?</li>
         <li>3:00 to 5:00 = ?</li>
         <li>3:00 pm in 24-hour time?</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20", "20 cm"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Geometry (15)</li>
         <li>Part B — Measurement (15)</li>
         <li>Part C — Time (15)</li>
         <li>Part D — Mixed (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Geometry (15)",
          "Part B — Measurement (15)",
          "Part C — Time (15)",
          "Part D — Mixed (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — DATA & GRAPHS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Data & Graphs", days: [

    D(1, "📊", "Tally",
      "Make and read tally charts.",
      `<p class='big-emoji'>📊 ✏️</p>
       <p>A <b>tally chart</b> uses marks. Every 5th mark crosses the group.</p>
       <h3>Example</h3>
       <p>|||| = 4; |||| | = 5; |||| || = 6.</p>`,

      [{ heading: "Exercise 59.1 — Count the tally.", items: [
          "|||| = ___", "|||| | = ___", "|||| || = ___"
        ]}],

      `<p>1. 4 2. 5 3. 6</p>`,

      [{ q: "How many in |||| | ?", a: ["5"] }]),

    D(2, "🖼️", "Pictogram",
      "Read and make pictograms.",
      `<p class='big-emoji'>🖼️ 📊</p>
       <p>A <b>pictogram</b> uses pictures. Each picture stands for a number.</p>
       <h3>Example</h3>
       <p>🍎 = 2 children. 🍎🍎🍎 = 6 children.</p>`,

      [{ heading: "Exercise 60.1 — Read the pictogram.", items: [
          "🍎 = 2. 🍎🍎🍎 = ___",
          "🍎 = 2. 🍎🍎 = ___",
          "🍎 = 5. 🍎🍎 = ___"
        ]}],

      `<p>1. 6 2. 4 3. 10</p>`,

      [{ q: "If 🍎 = 2, what is 🍎🍎🍎?", a: ["6"] }]),

    D(3, "📊", "Bar Chart",
      "Make and read bar charts.",
      `<p class='big-emoji'>📊 📈</p>
       <h3>Example</h3>
       <ul>
         <li>Mango: ████ (4)</li>
         <li>Orange: ██████ (6)</li>
         <li>Banana: ███ (3)</li>
         <li>Apple: ███████ (7)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Most popular fruit?</p>
       <p><b>Answer:</b> <b>Apple</b> (7).</p>`,

      [{ heading: "Exercise 61.1 — Read the bar chart.", items: [
          "Mango 4, Orange 6, Banana 3, Apple 7",
          "Most popular?",
          "Least popular?",
          "Difference between apples and bananas?",
          "Total children?"
        ]}],

      `<p>1. Apple 2. Banana 3. 4 4. 20</p>`,

      [{ q: "Most popular fruit?", a: ["apple"] },
       { q: "Total children?", a: ["20"] }]),

    D(4, "📈", "Line Graph",
      "Learn about line graphs.",
      `<p class='big-emoji'>📈 📊</p>
       <p>A <b>line graph</b> shows changes over time.</p>
       <h3>Uses</h3>
       <ul>
         <li>Temperature each day</li>
         <li>Sales over weeks</li>
         <li>Population growth</li>
       </ul>`,

      [{ heading: "Exercise 62.1 — Say.", items: [
          "What does a line graph show?",
          "Where is a line graph useful?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What does a line graph show?", a: ["change over time", "any"] }]),

    D(5, "🎨", "Graph Poster",
      "Make a graph poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Show a tally chart, a pictogram, and a bar chart.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Ask a question about one graph.</p>`,

      [{ heading: "Exercise 63.1 — Draw and label.", items: [
          "Tally chart", "Pictogram", "Bar chart"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a bar chart?", a: ["bars showing data", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — AVERAGES
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Averages", days: [

    D(1, "📊", "Mean",
      "Find the mean.",
      `<p class='big-emoji'>📊 🔢</p>
       <p><b>Mean</b> = sum of values ÷ number of values.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Mean of 4, 6, 8?</p>
       <p><b>Answer:</b> (4 + 6 + 8) ÷ 3 = 18 ÷ 3 = <b>6</b>.</p>`,

      [{ heading: "Exercise 64.1 — Find the mean.", items: [
          "4, 6, 8", "5, 10, 15", "2, 4, 6, 8", "10, 20, 30"
        ]}],

      `<p>1. 6 2. 10 3. 5 4. 20</p>`,

      [{ q: "Mean of 4, 6, 8?", a: ["6"] }]),

    D(2, "📊", "Median",
      "Find the median.",
      `<p class='big-emoji'>📊 📏</p>
       <p><b>Median</b> is the middle number when sorted.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Median of 3, 7, 9?</p>
       <p><b>Answer:</b> The middle number is <b>7</b>.</p>`,

      [{ heading: "Exercise 65.1 — Find the median.", items: [
          "3, 7, 9", "1, 5, 8", "4, 6, 10", "2, 3, 4, 5, 6"
        ]}],

      `<p>1. 7 2. 5 3. 6 4. 4</p>`,

      [{ q: "Median of 3, 7, 9?", a: ["7"] }]),

    D(3, "📊", "Mode",
      "Find the mode.",
      `<p class='big-emoji'>📊 🔁</p>
       <p><b>Mode</b> is the number that appears most often.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Mode of 2, 3, 3, 5, 7?</p>
       <p><b>Answer:</b> <b>3</b> appears most.</p>`,

      [{ heading: "Exercise 66.1 — Find the mode.", items: [
          "2, 3, 3, 5, 7", "1, 2, 2, 2, 4", "4, 4, 5, 5, 6"
        ]}],

      `<p>1. 3 2. 2 3. 4 and 5</p>`,

      [{ q: "Mode of 2, 3, 3, 5, 7?", a: ["3"] }]),

    D(4, "📊", "Range",
      "Find the range.",
      `<p class='big-emoji'>📊 ↔️</p>
       <p><b>Range</b> = largest − smallest.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Range of 3, 7, 9?</p>
       <p><b>Answer:</b> 9 − 3 = <b>6</b>.</p>`,

      [{ heading: "Exercise 67.1 — Find the range.", items: [
          "3, 7, 9", "1, 5, 8", "10, 20, 30", "2, 4, 6, 8"
        ]}],

      `<p>1. 6 2. 7 3. 20 4. 6</p>`,

      [{ q: "Range of 3, 7, 9?", a: ["6"] }]),

    D(5, "🎨", "Average Poster",
      "Make an average poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Show mean, median, mode, and range.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each type.</p>`,

      [{ heading: "Exercise 68.1 — Draw and label.", items: [
          "Mean", "Median", "Mode", "Range"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Mean of 4, 6, 8?", a: ["6"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — MONEY
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Money", days: [

    D(1, "💰", "Cedis & Pesewas",
      "Review cedis and pesewas.",
      `<p class='big-emoji'>💰 🪙</p>
       <p>100 pesewas = 1 cedi.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How many pesewas in 2 cedis?</p>
       <p><b>Answer:</b> 2 × 100 = <b>200 pesewas</b>.</p>`,

      [{ heading: "Exercise 69.1 — Convert.", items: [
          "1 cedi = ___ pesewas",
          "2 cedis = ___ pesewas",
          "3 cedis = ___ pesewas",
          "500 pesewas = ___ cedis"
        ]}],

      `<p>1. 100 2. 200 3. 300 4. 5</p>`,

      [{ q: "100 pesewas = ?", a: ["1 cedi", "1"] }]),

    D(2, "📈", "Profit & Loss",
      "Calculate profit and loss.",
      `<p class='big-emoji'>📈 📉</p>
       <p><b>Profit</b> = Selling price − Cost price (if positive).</p>
       <p><b>Loss</b> = Cost price − Selling price (if positive).</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Buy GH₵10, sell GH₵15. Profit or loss?</p>
       <p><b>Answer:</b> <b>GH₵5 profit</b>.</p>`,

      [{ heading: "Exercise 70.1 — Profit or loss?", items: [
          "Buy GH₵10, sell GH₵15",
          "Buy GH₵20, sell GH₵25",
          "Buy GH₵20, sell GH₵15",
          "Buy GH₵30, sell GH₵40"
        ]}],

      `<p>1. GH₵5 profit 2. GH₵5 profit 3. GH₵5 loss 4. GH₵10 profit</p>`,

      [{ q: "Buy GH₵10, sell GH₵15?", a: ["profit", "GH₵5 profit"] }]),

    D(3, "💹", "Simple Interest",
      "Learn simple interest.",
      `<p class='big-emoji'>💹 📊</p>
       <p><b>Simple Interest</b> = Principal × Rate × Time.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> GH₵100 at 5% for 1 year?</p>
       <p><b>Answer:</b> 100 × 0.05 = <b>GH₵5</b>.</p>`,

      [{ heading: "Exercise 71.1 — Calculate interest.", items: [
          "GH₵100 at 5% for 1 year",
          "GH₵200 at 10% for 1 year",
          "GH₵50 at 10% for 2 years"
        ]}],

      `<p>1. GH₵5 2. GH₵20 3. GH₵10</p>`,

      [{ q: "Interest on GH₵100 at 5% for 1 year?", a: ["GH₵5", "5"] }]),

    D(4, "📊", "Budgeting",
      "Make a simple budget.",
      `<p class='big-emoji'>📊 💰</p>
       <p>A <b>budget</b> is a plan for spending money.</p>
       <h3>Example</h3>
       <ul>
         <li>Income: GH₵50</li>
         <li>Food: GH₵20</li>
         <li>Transport: GH₵10</li>
         <li>Savings: GH₵20</li>
       </ul>`,

      [{ heading: "Exercise 72.1 — Make a budget.", items: [
          "Income GH₵50. Plan your spending.",
          "Income GH₵100. Plan your spending."
        ]}],

      `<p>Any reasonable budget.</p>`,

      [{ q: "What is a budget?", a: ["plan for money", "any"] }]),

    D(5, "🎨", "Money Poster",
      "Make a money poster.",
      `<p class='big-emoji'>🎨 💰</p>
       <p>Show money calculations: profit, loss, interest, budget.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one calculation.</p>`,

      [{ heading: "Exercise 73.1 — Draw and label.", items: [
          "Profit", "Loss", "Interest", "Budget"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is profit?", a: ["selling price - cost", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Data",
      "Review data and graphs.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Tally charts, pictograms, bar charts</li>
         <li>Line graphs</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Most popular fruit if Apple is 7?</p>
       <p><b>Answer:</b> Apple.</p>`,

      [{ heading: "Exercise 74.1 — Answer.", items: [
          "What is a tally chart?",
          "What does a pictogram use?",
          "What does a line graph show?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What does a line graph show?", a: ["change over time", "any"] }]),

    D(2, "🔁", "Review Averages",
      "Review averages.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Mean, median, mode, range</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Mean of 4, 6, 8?</p>
       <p><b>Answer:</b> 6.</p>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "Mean of 4, 6, 8?",
          "Median of 3, 7, 9?",
          "Mode of 2, 3, 3, 5, 7?",
          "Range of 3, 7, 9?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Mean of 4, 6, 8?", a: ["6"] }]),

    D(3, "🔁", "Review Money",
      "Review money.",
      `<p class='big-emoji'>🔁 💰</p>
       <h3>Review</h3>
       <ul>
         <li>Cedis and pesewas</li>
         <li>Profit, loss, interest, budget</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Buy GH₵10, sell GH₵15. Profit?</p>
       <p><b>Answer:</b> GH₵5 profit.</p>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
          "100 pesewas = ___ cedi",
          "Buy GH₵10, sell GH₵15?",
          "Interest on GH₵100 at 5% for 1 year?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Buy GH₵10, sell GH₵15?", a: ["profit", "GH₵5 profit"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Most popular fruit if Apple is 7?</li>
         <li>Mean of 4, 6, 8?</li>
         <li>Median of 3, 7, 9?</li>
         <li>Mode of 2, 3, 3, 5, 7?</li>
         <li>Range of 3, 7, 9?</li>
         <li>100 pesewas = ___ cedi</li>
         <li>Buy GH₵10, sell GH₵15?</li>
         <li>Interest on GH₵100 at 5% for 1 year?</li>
         <li>What is a budget?</li>
         <li>What is a line graph?</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Mean of 4, 6, 8?", a: ["6"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Data (15)</li>
         <li>Part B — Averages (15)</li>
         <li>Part C — Money (15)</li>
         <li>Part D — Mixed (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Data (15)",
          "Part B — Averages (15)",
          "Part C — Money (15)",
          "Part D — Mixed (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — PERCENTAGES
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Percentages", days: [

    D(1, "💯", "What is %?",
      "Understand percentages.",
      `<p class='big-emoji'>💯 %</p>
       <p><b>Percent (%)</b> means "out of 100".</p>
       <h3>Common Percentages</h3>
       <ul>
         <li>100% = whole</li>
         <li>50% = half</li>
         <li>25% = quarter</li>
         <li>10% = one tenth</li>
       </ul>`,

      [{ heading: "Exercise 78.1 — Say.", items: [
          "What does 100% mean?",
          "What does 50% mean?",
          "What does 25% mean?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What does 50% mean?", a: ["half", "1/2"] }]),

    D(2, "💯", "Finding %",
      "Find percentages of numbers.",
      `<p class='big-emoji'>💯 🔢</p>
       <h3>How to Find</h3>
       <ul>
         <li>50% → ÷ 2</li>
         <li>25% → ÷ 4</li>
         <li>10% → ÷ 10</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 50% of 20?</p>
       <p><b>Answer:</b> 20 ÷ 2 = <b>10</b>.</p>`,

      [{ heading: "Exercise 79.1 — Find.", items: [
          "50% of 20 = ___",
          "25% of 20 = ___",
          "10% of 100 = ___",
          "50% of 50 = ___"
        ]}],

      `<p>1. 10 2. 5 3. 10 4. 25</p>`,

      [{ q: "50% of 20 = ?", a: ["10"] }]),

    D(3, "🏷️", "Discount",
      "Calculate discounts.",
      `<p class='big-emoji'>🏷️ 💰</p>
       <p>Discount = money taken off a price.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 10% off GH₵50?</p>
       <p><b>Answer:</b> 10% of 50 = GH₵5. New price = <b>GH₵45</b>.</p>`,

      [{ heading: "Exercise 80.1 — Calculate.", items: [
          "10% off GH₵50",
          "25% off GH₵100",
          "50% off GH₵80"
        ]}],

      `<p>1. GH₵45 2. GH₵75 3. GH₵40</p>`,

      [{ q: "10% off GH₵50?", a: ["45", "GH₵45"] }]),

    D(4, "📝", "Percentage Problems",
      "Solve percentage word problems.",
      `<p class='big-emoji'>📝 💯</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Ama scored 50% on a test of 20 questions. How many did she get right?</p>
       <p><b>Answer:</b> 50% of 20 = <b>10</b>.</p>`,

      [{ heading: "Exercise 81.1 — Solve.", items: [
          "Ama scored 50% on 20 questions. How many?",
          "Kojo scored 25% on 40 questions. How many?",
          "A dress costs GH₵100. 10% off. New price?"
        ]}],

      `<p>1. 10 2. 10 3. GH₵90</p>`,

      [{ q: "50% of 20?", a: ["10"] }]),

    D(5, "🎨", "Percentage Poster",
      "Make a percentage poster.",
      `<p class='big-emoji'>🎨 💯</p>
       <p>Show percentages with examples.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one example.</p>`,

      [{ heading: "Exercise 82.1 — Draw and label.", items: [
          "50%", "25%", "10%"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "50% of 20?", a: ["10"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — RATIO & PROPORTION
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Ratio & Proportion", days: [

    D(1, "⚖️", "What is Ratio?",
      "Understand ratios.",
      `<p class='big-emoji'>⚖️ 🔢</p>
       <p>A <b>ratio</b> compares two amounts.</p>
       <p>If there are 3 boys and 2 girls, the ratio is <b>3:2</b>.</p>`,

      [{ heading: "Exercise 83.1 — Write ratios.", items: [
          "3 boys, 2 girls → ___",
          "5 apples, 4 oranges → ___",
          "10 pencils, 5 pens → ___"
        ]}],

      `<p>1. 3:2 2. 5:4 3. 10:5</p>`,

      [{ q: "Ratio of 3 boys to 2 girls?", a: ["3:2"] }]),

    D(2, "⚖️", "Simplify Ratios",
      "Simplify ratios.",
      `<p class='big-emoji'>⚖️ ➗</p>
       <p>Divide both sides by the same number.</p>
       <p>10:5 = 2:1 (divide both by 5).</p>`,

      [{ heading: "Exercise 84.1 — Simplify.", items: [
          "10:5", "6:3", "8:4", "12:6"
        ]}],

      `<p>1. 2:1 2. 2:1 3. 2:1 4. 2:1</p>`,

      [{ q: "Simplify 10:5.", a: ["2:1"] }]),

    D(3, "⚖️", "Proportion",
      "Learn about proportion.",
      `<p class='big-emoji'>⚖️ 📊</p>
       <p><b>Proportion</b> = two ratios that are equal.</p>
       <p>1:2 = 2:4 = 3:6.</p>`,

      [{ heading: "Exercise 85.1 — Complete.", items: [
          "1:2 = 2:___",
          "1:3 = 2:___",
          "2:3 = 4:___",
          "1:4 = 3:___"
        ]}],

      `<p>1. 4 2. 6 3. 6 4. 12</p>`,

      [{ q: "Complete 1:2 = 2:___", a: ["4"] }]),

    D(4, "📝", "Word Problems",
      "Solve ratio word problems.",
      `<p class='big-emoji'>📝 ⚖️</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Share GH₵30 in ratio 2:1.</p>
       <p><b>Answer:</b> Total parts = 3. Each part = 10. So <b>20:10</b>.</p>`,

      [{ heading: "Exercise 86.1 — Solve.", items: [
          "Share GH₵30 in ratio 2:1",
          "Share 12 sweets in ratio 1:2",
          "Share 20 books in ratio 3:1"
        ]}],

      `<p>1. 20:10 2. 4:8 3. 15:5</p>`,

      [{ q: "Share GH₵30 in ratio 2:1?", a: ["20:10", "20 and 10"] }]),

    D(5, "🎨", "Ratio Poster",
      "Make a ratio poster.",
      `<p class='big-emoji'>🎨 ⚖️</p>
       <p>Show ratios, simplifying, and proportion.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one example.</p>`,

      [{ heading: "Exercise 87.1 — Draw and label.", items: [
          "Ratios", "Simplifying", "Proportion"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Simplify 10:5.", a: ["2:1"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — ALGEBRA
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Algebra", days: [

    D(1, "🔤", "Letters for Numbers",
      "Use letters for numbers.",
      `<p class='big-emoji'>🔤 🔢</p>
       <p>We use letters for unknown numbers.</p>
       <p>If x = 5, then x + 3 = 8.</p>`,

      [{ heading: "Exercise 88.1 — Evaluate.", items: [
          "If x = 5, x + 3 = ___",
          "If y = 4, y + 6 = ___",
          "If a = 10, a − 3 = ___",
          "If b = 2, b × 5 = ___"
        ]}],

      `<p>1. 8 2. 10 3. 7 4. 10</p>`,

      [{ q: "If x = 5, x + 3 = ?", a: ["8"] }]),

    D(2, "🔤", "Simple Equations",
      "Solve simple equations.",
      `<p class='big-emoji'>🔤 ✅</p>
       <p>Find the value of the letter.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> x + 3 = 8. Find x.</p>
       <p><b>Answer:</b> x = 8 − 3 = <b>5</b>.</p>`,

      [{ heading: "Exercise 89.1 — Solve for x.", items: [
          "x + 3 = 8",
          "x + 5 = 12",
          "x − 4 = 6",
          "2x = 10"
        ]}],

      `<p>1. 5 2. 7 3. 10 4. 5</p>`,

      [{ q: "If x + 3 = 8, x = ?", a: ["5"] }]),

    D(3, "📝", "Word Problems",
      "Solve algebra word problems.",
      `<p class='big-emoji'>📝 🔤</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Ama has x sweets. She buys 5 more, and now has 12. Find x.</p>
       <p><b>Answer:</b> x + 5 = 12, so x = <b>7</b>.</p>`,

      [{ heading: "Exercise 90.1 — Solve.", items: [
          "Ama has x sweets. +5 = 12. x = ?",
          "Kojo has y books. +3 = 10. y = ?",
          "Adwoa has a pens. −2 = 6. a = ?"
        ]}],

      `<p>1. 7 2. 7 3. 8</p>`,

      [{ q: "x + 5 = 12, x = ?", a: ["7"] }]),

    D(4, "📝", "Practise",
      "Practise algebra.",
      `<p class='big-emoji'>📝 🏋️</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 2x + 3 = 11. Find x.</p>
       <p><b>Answer:</b> 2x = 8, so x = <b>4</b>.</p>`,

      [{ heading: "Exercise 91.1 — Solve.", items: [
          "x + 7 = 15",
          "x − 5 = 3",
          "2x = 14",
          "3x = 12"
        ]}],

      `<p>1. 8 2. 8 3. 7 4. 4</p>`,

      [{ q: "2x = 14, x = ?", a: ["7"] }]),

    D(5, "🎨", "Algebra Poster",
      "Make an algebra poster.",
      `<p class='big-emoji'>🎨 🔤</p>
       <p>Show letters for numbers and equations.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one equation.</p>`,

      [{ heading: "Exercise 92.1 — Draw and label.", items: [
          "Letters for numbers", "Simple equations", "Word problems"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "If x = 5, x + 3 = ?", a: ["8"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Percentages",
      "Review percentages.",
      `<p class='big-emoji'>🔁 💯</p>
       <h3>Review</h3>
       <ul>
         <li>What is %?</li>
         <li>Finding %, discount</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 50% of 20?</p>
       <p><b>Answer:</b> 10.</p>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "What is 50%?",
          "50% of 20?",
          "25% of 20?",
          "10% of 100?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "50% of 20?", a: ["10"] }]),

    D(2, "🔁", "Review Ratio",
      "Review ratio.",
      `<p class='big-emoji'>🔁 ⚖️</p>
       <h3>Review</h3>
       <ul>
         <li>What is a ratio?</li>
         <li>Simplify ratios</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Simplify 10:5.</p>
       <p><b>Answer:</b> 2:1.</p>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "What is a ratio?",
          "Simplify 10:5.",
          "Complete 1:2 = 2:___"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Simplify 10:5.", a: ["2:1"] }]),

    D(3, "🔁", "Review Algebra",
      "Review algebra.",
      `<p class='big-emoji'>🔁 🔤</p>
       <h3>Review</h3>
       <ul>
         <li>Letters for numbers</li>
         <li>Simple equations</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> x + 3 = 8, x = ?</p>
       <p><b>Answer:</b> 5.</p>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "If x = 5, x + 3 = ?",
          "x + 3 = 8, x = ?",
          "2x = 10, x = ?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "x + 3 = 8, x = ?", a: ["5"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is 50%?</li>
         <li>50% of 20?</li>
         <li>25% of 20?</li>
         <li>10% off GH₵50?</li>
         <li>Simplify 10:5.</li>
         <li>Complete 1:2 = 2:___</li>
         <li>Share GH₵30 in ratio 2:1.</li>
         <li>If x = 5, x + 3 = ?</li>
         <li>x + 3 = 8, x = ?</li>
         <li>2x = 10, x = ?</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "50% of 20?", a: ["10"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Percentages (15)</li>
         <li>Part B — Ratio (15)</li>
         <li>Part C — Algebra (15)</li>
         <li>Part D — Mixed (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Percentages (15)",
          "Part B — Ratio (15)",
          "Part C — Algebra (15)",
          "Part D — Mixed (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — SPEED, DISTANCE, TIME
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Speed, Distance, Time", days: [

    D(1, "🚗", "Speed",
      "Learn about speed.",
      `<p class='big-emoji'>🚗 💨</p>
       <p><b>Speed</b> = Distance ÷ Time.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A car travels 100 km in 2 hours. Speed?</p>
       <p><b>Answer:</b> 100 ÷ 2 = <b>50 km/h</b>.</p>`,

      [{ heading: "Exercise 97.1 — Find speed.", items: [
          "100 km in 2 h = ___",
          "60 km in 3 h = ___",
          "120 km in 4 h = ___"
        ]}],

      `<p>1. 50 km/h 2. 20 km/h 3. 30 km/h</p>`,

      [{ q: "100 km in 2 h = ?", a: ["50 km/h", "50"] }]),

    D(2, "📍", "Distance",
      "Learn about distance.",
      `<p class='big-emoji'>📍 🛣️</p>
       <p><b>Distance</b> = Speed × Time.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Speed 60 km/h for 3 hours. Distance?</p>
       <p><b>Answer:</b> 60 × 3 = <b>180 km</b>.</p>`,

      [{ heading: "Exercise 98.1 — Find distance.", items: [
          "60 km/h × 3 h = ___",
          "50 km/h × 4 h = ___",
          "80 km/h × 2 h = ___"
        ]}],

      `<p>1. 180 km 2. 200 km 3. 160 km</p>`,

      [{ q: "60 km/h × 3 h = ?", a: ["180 km", "180"] }]),

    D(3, "⏱️", "Time",
      "Learn about time.",
      `<p class='big-emoji'>⏱️ ⏰</p>
       <p><b>Time</b> = Distance ÷ Speed.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 120 km at 60 km/h. Time?</p>
       <p><b>Answer:</b> 120 ÷ 60 = <b>2 hours</b>.</p>`,

      [{ heading: "Exercise 99.1 — Find time.", items: [
          "120 km at 60 km/h = ___",
          "200 km at 50 km/h = ___",
          "150 km at 30 km/h = ___"
        ]}],

      `<p>1. 2 h 2. 4 h 3. 5 h</p>`,

      [{ q: "120 km at 60 km/h = ?", a: ["2 hours", "2"] }]),

    D(4, "📝", "Word Problems",
      "Solve speed word problems.",
      `<p class='big-emoji'>📝 🚗</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A bus travels at 60 km/h for 4 hours. How far?</p>
       <p><b>Answer:</b> 60 × 4 = <b>240 km</b>.</p>`,

      [{ heading: "Exercise 100.1 — Solve.", items: [
          "Bus at 60 km/h for 4 h. Distance?",
          "Car travels 200 km in 4 h. Speed?",
          "150 km at 50 km/h. Time?"
        ]}],

      `<p>1. 240 km 2. 50 km/h 3. 3 h</p>`,

      [{ q: "60 × 4 = ?", a: ["240", "240 km"] }]),

    D(5, "🎨", "Speed Poster",
      "Make a speed poster.",
      `<p class='big-emoji'>🎨 🚗</p>
       <p>Show speed, distance, time formulas.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each formula.</p>`,

      [{ heading: "Exercise 101.1 — Draw and label.", items: [
          "Speed formula", "Distance formula", "Time formula"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Speed formula?", a: ["distance ÷ time", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — PROBLEM SOLVING
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Problem Solving", days: [

    D(1, "🧩", "Multi-Step",
      "Solve multi-step problems.",
      `<p class='big-emoji'>🧩 🔢</p>
       <p>Solve step by step.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A trader buys 20 mangoes at GH₵2 each and sells them at GH₵3 each. Profit?</p>
       <p><b>Answer:</b> Cost = 20 × 2 = 40. Sell = 20 × 3 = 60. Profit = <b>GH₵20</b>.</p>`,

      [{ heading: "Exercise 102.1 — Solve.", items: [
          "20 mangoes at GH₵2, sold at GH₵3. Profit?",
          "10 books at GH₵5, sold at GH₵8. Profit?",
          "15 pens at GH₵1, sold at GH₵2. Profit?"
        ]}],

      `<p>1. GH₵20 2. GH₵30 3. GH₵15</p>`,

      [{ q: "20 mangoes at GH₵2, sold at GH₵3. Profit?", a: ["GH₵20", "20"] }]),

    D(2, "🧩", "Logical Reasoning",
      "Use logical reasoning.",
      `<p class='big-emoji'>🧩 🧠</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> 2, 4, 6, 8, ___ . What comes next?</p>
       <p><b>Answer:</b> <b>10</b> (add 2 each time).</p>`,

      [{ heading: "Exercise 103.1 — What comes next?", items: [
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "3, 6, 9, 12, ___",
          "1, 3, 5, 7, ___"
        ]}],

      `<p>1. 10 2. 25 3. 15 4. 9</p>`,

      [{ q: "2, 4, 6, 8, ___?", a: ["10"] }]),

    D(3, "🧩", "Real-Life",
      "Solve real-life problems.",
      `<p class='big-emoji'>🧩 🌍</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Ama spends GH₵5 on food daily. How much in 1 week?</p>
       <p><b>Answer:</b> 5 × 7 = <b>GH₵35</b>.</p>`,

      [{ heading: "Exercise 104.1 — Solve.", items: [
          "GH₵5 a day for 7 days = ___",
          "GH₵10 a day for 5 days = ___",
          "GH₵2 a day for 30 days = ___"
        ]}],

      `<p>1. GH₵35 2. GH₵50 3. GH₵60</p>`,

      [{ q: "GH₵5 a day for 7 days?", a: ["GH₵35", "35"] }]),

    D(4, "🧩", "Practise",
      "Practise problem solving.",
      `<p class='big-emoji'>🧩 🏋️</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A tank holds 100 L. It fills 5 L a minute. How long to fill?</p>
       <p><b>Answer:</b> 100 ÷ 5 = <b>20 minutes</b>.</p>`,

      [{ heading: "Exercise 105.1 — Solve.", items: [
          "100 L tank, 5 L a minute. How long?",
          "200 L tank, 10 L a minute. How long?",
          "150 L tank, 15 L a minute. How long?"
        ]}],

      `<p>1. 20 min 2. 20 min 3. 10 min</p>`,

      [{ q: "100 L tank, 5 L/min?", a: ["20 minutes", "20"] }]),

    D(5, "🎨", "Problem Poster",
      "Make a problem-solving poster.",
      `<p class='big-emoji'>🎨 🧩</p>
       <p>Show problem-solving strategies.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 106.1 — Draw and label.", items: [
          "Multi-step", "Logical reasoning", "Real-life problems"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a multi-step problem?", a: ["more than one step", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Number",
      "Revise number topics.",
      `<p class='big-emoji'>🔁 🔢</p>
       <h3>Revise</h3>
       <ul>
         <li>Place value, rounding, estimation</li>
         <li>Addition, subtraction, multiplication, division</li>
       </ul>`,

      [{ heading: "Exercise 107.1 — Answer.", items: [
          "Write 456,789 in words.",
          "Round 147 to nearest 100.",
          "4,532 + 3,246 = ?",
          "34 × 7 = ?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "4,532 + 3,246 = ?", a: ["7,778", "7778"] }]),

    D(2, "🔁", "Algebra",
      "Revise algebra.",
      `<p class='big-emoji'>🔁 🔤</p>
       <h3>Revise</h3>
       <ul>
         <li>Letters for numbers</li>
         <li>Simple equations</li>
       </ul>`,

      [{ heading: "Exercise 108.1 — Answer.", items: [
          "If x = 5, x + 3 = ?",
          "x + 3 = 8, x = ?",
          "2x = 10, x = ?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "x + 3 = 8, x = ?", a: ["5"] }]),

    D(3, "🔁", "Geometry",
      "Revise geometry.",
      `<p class='big-emoji'>🔁 📐</p>
       <h3>Revise</h3>
       <ul>
         <li>Angles, triangles, quadrilaterals</li>
         <li>Area, perimeter, volume</li>
       </ul>`,

      [{ heading: "Exercise 109.1 — Answer.", items: [
          "What is a right angle?",
          "Perimeter of square side 5 cm?",
          "Area of 5 × 3 rectangle?",
          "Volume of cube side 3 cm?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20", "20 cm"] }]),

    D(4, "🔁", "Data",
      "Revise data.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Revise</h3>
       <ul>
         <li>Graphs, averages</li>
       </ul>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "Mean of 4, 6, 8?",
          "Median of 3, 7, 9?",
          "Mode of 2, 3, 3, 5, 7?",
          "Range of 3, 7, 9?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Mean of 4, 6, 8?", a: ["6"] }]),

    D(5, "🎉", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Write 456,789 in words.</li>
         <li>4,532 + 3,246 = ?</li>
         <li>34 × 7 = ?</li>
         <li>x + 3 = 8, x = ?</li>
         <li>Perimeter of square side 5 cm?</li>
         <li>Area of 5 × 3 rectangle?</li>
         <li>Volume of cube side 3 cm?</li>
         <li>Mean of 4, 6, 8?</li>
         <li>Median of 3, 7, 9?</li>
         <li>50% of 20?</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "4,532 + 3,246 = ?", a: ["7,778", "7778"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 24 — FINAL REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: "Review", days: [

    D(1, "🔁", "Final Review",
      "Review the whole year.",
      `<p class='big-emoji'>🔁 🌟</p>
       <h3>Topics This Year</h3>
       <ul>
         <li>Number & place value</li>
         <li>Addition, subtraction, multiplication, division</li>
         <li>Fractions, decimals, percentages</li>
         <li>Geometry & measurement</li>
         <li>Data & graphs, averages</li>
         <li>Money, ratio, algebra</li>
         <li>Speed, distance, time</li>
         <li>Problem solving</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite topic?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: "Exercise 112.1 — Answer.", items: [
          "Name 3 things you learned this year.",
          "What is your favourite topic?",
          "What is one new word you learned?"
        ]},
       { heading: "Exercise 112.2 — Draw.", items: [
          "Draw your favourite numeracy topic."
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: "Name a topic you liked.", a: ["any"] },
       { q: "Name a new word you learned.", a: ["any"] }]),

    D(2, "📁", "Portfolio",
      "Make a portfolio.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Make a <b>portfolio</b> of your best numeracy work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best poster</li>
         <li>Your best worked example</li>
         <li>Your best problem-solving</li>
         <li>Your best graph or chart</li>
       </ul>`,

      [{ heading: "Exercise 113.1 — Make your portfolio.", items: [
          "Choose your best work.",
          "Organise it.",
          "Write a title page."
        ]}],

      `<p>⭐ for a complete portfolio.</p>`,

      [{ q: "What is your best work?", a: ["any"] }]),

    D(3, "🎤", "Presentation",
      "Present your portfolio.",
      `<p class='big-emoji'>🎤 📁</p>
       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Speak clearly and slowly.</li>
         <li>Show each piece of work.</li>
         <li>Say 2 sentences about each.</li>
         <li>Answer questions.</li>
       </ol>`,

      [{ heading: "Exercise 114.1 — Present.", items: [
          "Stand up straight",
          "Show each piece",
          "Say 2 sentences for each",
          "Answer questions"
        ]}],

      `<p>⭐ for confident speaking.</p>`,

      [{ q: "What is your favourite work?", a: ["any"] }]),

    D(4, "🎉", "Celebration",
      "Celebrate your year of numeracy.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Grade 4 Numeracy! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>🧮 Solve one last problem.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 4 Numeracy! I can solve problems with numbers!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Solve one last problem.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 5?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a numeracy champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can add and subtract!"</li>
         <li>⭐ "I can multiply and divide!"</li>
         <li>⭐ "I can solve problems!"</li>
       </ul>
       <h3>What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>
       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself as a numeracy expert. Add 3 big stars around you.</p>`,

      [{ heading: "Exercise 116.1 — Big Star Day", items: [
          'Say "I can add and subtract!"',
          'Say "I can multiply and divide!"',
          'Say "I can solve problems!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of numeracy!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];