// src/data/grade3/numeracy.js
// Grade 3 Numeracy — NaCCA Standards-Based Curriculum (expanded)
// Strands: Number · Algebra · Geometry & Measurement · Data

import { D, wk } from '../helpers.js';

export const numeracy = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — PLACE VALUE
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Place Value", days: [

    D(1, "🔢", "Units & Tens",
      "Understand place value for units and tens.",
      `<p class='big-emoji'>🔢 1️⃣ 🔟</p>
       <p>Every digit has a <b>place value</b>. In <b>24</b>: the <b>2</b> is in the <b>tens</b> place, and the <b>4</b> is in the <b>units</b> place.</p>
       <p>So 24 = 20 + 4.</p>

       <h3>More Examples</h3>
       <ul>
         <li>35 → 3 tens, 5 units → 30 + 5</li>
         <li>48 → 4 tens, 8 units → 40 + 8</li>
         <li>57 → 5 tens, 7 units → 50 + 7</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 bundles of 10 sticks and 4 single sticks. Label "24 = 20 + 4".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the place value of 6 in 69?</p>
       <p><b>Answer:</b> The 6 is in the <b>tens</b> place. So 69 = 60 + 9.</p>`,

      [{ heading: "Exercise 1.1 — Write the place value of each digit.", items: [
          "24", "35", "48", "57", "69"
        ]},
       { heading: "Exercise 1.2 — Write in expanded form.", items: [
          "24", "35", "48", "57", "69"
        ]},
       { heading: "Exercise 1.3 — Draw and label.", items: [
          "Draw bundles of ten and single sticks for 46."
        ]}],

      `<p><b>1.1:</b> 1. 2 = tens, 4 = units 2. 3 = tens, 5 = units 3. 4 = tens, 8 = units 4. 5 = tens, 7 = units 5. 6 = tens, 9 = units</p>
       <p><b>1.2:</b> 20+4; 30+5; 40+8; 50+7; 60+9</p>`,

      [{ q: "Place value of 2 in 24?", a: ["tens", "ten"] },
       { q: "Place value of 4 in 24?", a: ["units", "ones"] },
       { q: "24 in expanded form?", a: ["20+4", "20 + 4"] }]),

    D(2, "🔢", "Hundreds",
      "Understand hundreds.",
      `<p class='big-emoji'>💯 🔢</p>
       <p>In <b>345</b>: the <b>3</b> is in the <b>hundreds</b> place, the <b>4</b> is in the <b>tens</b> place, and the <b>5</b> is in the <b>units</b> place.</p>
       <p>So 345 = 300 + 40 + 5.</p>

       <h3>More Examples</h3>
       <ul>
         <li>678 → 6 hundreds, 7 tens, 8 units → 600 + 70 + 8</li>
         <li>912 → 9 hundreds, 1 ten, 2 units → 900 + 10 + 2</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 flats (100), 4 rods (10), and 5 dots (1). Label "345".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the place value of 7 in 678?</p>
       <p><b>Answer:</b> The 7 is in the <b>tens</b> place. 678 = 600 + 70 + 8.</p>`,

      [{ heading: "Exercise 2.1 — Write the place value of each digit.", items: [
          "345", "678", "912", "234", "567"
        ]},
       { heading: "Exercise 2.2 — Write in expanded form.", items: [
          "345", "678", "912"
        ]},
       { heading: "Exercise 2.3 — Write in words.", items: [
          "345", "678"
        ]}],

      `<p><b>2.1:</b> 1. 3=hundreds, 4=tens, 5=units 2. 6=hundreds, 7=tens, 8=units 3. 9=hundreds, 1=tens, 2=units 4. 2=hundreds, 3=tens, 4=units 5. 5=hundreds, 6=tens, 7=units</p>
       <p><b>2.2:</b> 300+40+5; 600+70+8; 900+10+2</p>
       <p><b>2.3:</b> 1. Three hundred and forty-five 2. Six hundred and seventy-eight</p>`,

      [{ q: "Place value of 3 in 345?", a: ["hundreds", "hundred"] },
       { q: "Expanded form of 345?", a: ["300+40+5", "300 + 40 + 5"] },
       { q: "Place value of 8 in 678?", a: ["units", "ones"] }]),

    D(3, "🔢", "Thousands",
      "Understand thousands.",
      `<p class='big-emoji'>🔢 1️⃣0️⃣0️⃣0️⃣</p>
       <p>In <b>4,532</b>: the <b>4</b> is in the <b>thousands</b> place, the <b>5</b> is in the <b>hundreds</b> place, the <b>3</b> is in the <b>tens</b> place, and the <b>2</b> is in the <b>units</b> place.</p>
       <p>So 4,532 = 4,000 + 500 + 30 + 2.</p>

       <h3>More Examples</h3>
       <ul>
         <li>7,008 → 7 thousands, 0 hundreds, 0 tens, 8 units</li>
         <li>1,204 → 1 thousand, 2 hundreds, 0 tens, 4 units</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a place-value chart with columns: Thousands, Hundreds, Tens, Units. Write 4,532 in it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the value of 5 in 4,532?</p>
       <p><b>Answer:</b> The 5 is in the <b>hundreds</b> place, so its value is <b>500</b>.</p>`,

      [{ heading: "Exercise 3.1 — Write the place value of each digit.", items: [
          "4,532", "7,008", "1,204", "9,321", "5,678"
        ]},
       { heading: "Exercise 3.2 — Write in words.", items: [
          "4,532", "7,008", "1,204"
        ]},
       { heading: "Exercise 3.3 — Write in expanded form.", items: [
          "4,532", "7,008"
        ]}],

      `<p><b>3.1:</b> 1. 4=thousands, 5=hundreds, 3=tens, 2=units 2. 7=thousands, 0=hundreds, 0=tens, 8=units 3. 1=thousands, 2=hundreds, 0=tens, 4=units 4. 9=thousands, 3=hundreds, 2=tens, 1=unit 5. 5=thousands, 6=hundreds, 7=tens, 8=units</p>
       <p><b>3.2:</b> 1. Four thousand five hundred and thirty-two 2. Seven thousand and eight 3. One thousand two hundred and four</p>
       <p><b>3.3:</b> 4,000+500+30+2; 7,000+0+0+8</p>`,

      [{ q: "Place value of 4 in 4,532?", a: ["thousands", "thousand"] },
       { q: "Place value of 5 in 4,532?", a: ["hundreds", "hundred"] },
       { q: "Value of 3 in 4,532?", a: ["30", "thirty"] }]),

    D(4, "🔢", "Comparing Numbers",
      "Compare and order numbers.",
      `<p class='big-emoji'>⚖️ 🔢</p>
       <p>We use these symbols to compare numbers:</p>
       <ul>
         <li><b>&lt;</b> means <b>less than</b></li>
         <li><b>&gt;</b> means <b>greater than</b></li>
         <li><b>=</b> means <b>equal to</b></li>
       </ul>

       <h3>How to Compare</h3>
       <ol>
         <li>Compare the thousands first.</li>
         <li>If equal, compare the hundreds.</li>
         <li>If equal, compare the tens.</li>
         <li>If equal, compare the units.</li>
       </ol>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which is bigger: 4,532 or 4,523?</p>
       <p><b>Answer:</b> Compare: thousands equal (4), hundreds equal (5), tens: 3 &gt; 2. So <b>4,532 &gt; 4,523</b>.</p>`,

      [{ heading: "Exercise 4.1 — Fill in <, > or =.", items: [
          "4,532 ___ 4,523",
          "7,008 ___ 7,080",
          "12,345 ___ 12,345",
          "60,070 ___ 60,007",
          "100,001 ___ 99,999"
        ]},
       { heading: "Exercise 4.2 — Arrange in ascending order.", items: [
          "4,532; 4,523; 4,325; 4,235"
        ]},
       { heading: "Exercise 4.3 — Arrange in descending order.", items: [
          "1,204; 1,240; 1,024; 1,420"
        ]}],

      `<p><b>4.1:</b> 1. &gt; 2. &lt; 3. = 4. &gt; 5. &gt;</p>
       <p><b>4.2:</b> 4,235; 4,325; 4,523; 4,532</p>
       <p><b>4.3:</b> 1,420; 1,240; 1,204; 1,024</p>`,

      [{ q: "4,532 ___ 4,523", a: [">"] },
       { q: "7,008 ___ 7,080", a: ["<"] },
       { q: "12,345 ___ 12,345", a: ["="] }]),

    D(5, "🎨", "Place Value Poster",
      "Make a place-value poster.",
      `<p class='big-emoji'>🎨 🔢</p>
       <p>Today we make a <b>"Place Value"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Place Value"</b></li>
         <li>A chart with columns: Thousands | Hundreds | Tens | Units</li>
         <li>Write 3 numbers in the chart: 4,532 · 7,008 · 1,204</li>
         <li>Write the expanded form under each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the place value of each digit in one number.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "4,532", "7,008", "1,204"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Give a number with 5 in the thousands place.", a: ["any 5xxx", "5000-5999"] },
       { q: "Which is bigger: 7,008 or 7,080?", a: ["7,080", "7080"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — ADDITION
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Addition", days: [

    D(1, "➕", "Adding 2-Digit Numbers",
      "Add 2-digit numbers.",
      `<p class='big-emoji'>➕ 2️⃣</p>
       <p>Line up the <b>tens</b> and <b>units</b>. Add the units first, then the tens.</p>

       <h3>Worked Example</h3>
       <p><b>34 + 25 = ?</b></p>
       <ul>
         <li>Units: 4 + 5 = 9</li>
         <li>Tens: 3 + 2 = 5</li>
         <li>Answer: <b>59</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw tens and units for 34 + 25 = 59.</p>

       <h3>More Examples</h3>
       <ul>
         <li>42 + 37 = 79</li>
         <li>56 + 23 = 79</li>
         <li>48 + 31 = 79</li>
       </ul>`,

      [{ heading: "Exercise 6.1 — Add.", items: [
          "34 + 25", "42 + 37", "56 + 23", "48 + 31", "25 + 43"
        ]},
       { heading: "Exercise 6.2 — Word problems.", items: [
          "Ama had 34 mangoes. She bought 25 more. How many now?",
          "Kojo had 48 books. He got 31 more. How many now?",
          "Adwoa has 56 beads. She buys 23 more. How many now?"
        ]},
       { heading: "Exercise 6.3 — Add.", items: [
          "64 + 15", "72 + 18", "35 + 45"
        ]}],

      `<p><b>6.1:</b> 1. 59 2. 79 3. 79 4. 79 5. 68</p>
       <p><b>6.2:</b> 1. 59 mangoes 2. 79 books 3. 79 beads</p>
       <p><b>6.3:</b> 1. 79 2. 90 3. 80</p>`,

      [{ q: "34 + 25 = ?", a: ["59"] },
       { q: "42 + 37 = ?", a: ["79"] },
       { q: "56 + 23 = ?", a: ["79"] }]),

    D(2, "➕", "Adding 3-Digit Numbers",
      "Add 3-digit numbers.",
      `<p class='big-emoji'>➕ 3️⃣</p>
       <p>Line up <b>hundreds</b>, <b>tens</b>, and <b>units</b>.</p>

       <h3>Worked Example</h3>
       <p><b>345 + 234 = ?</b></p>
       <ul>
         <li>Units: 5 + 4 = 9</li>
         <li>Tens: 4 + 3 = 7</li>
         <li>Hundreds: 3 + 2 = 5</li>
         <li>Answer: <b>579</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a place-value chart and add 345 + 234 step by step.</p>

       <h3>More Examples</h3>
       <ul>
         <li>456 + 321 = 777</li>
         <li>567 + 231 = 798</li>
       </ul>`,

      [{ heading: "Exercise 7.1 — Add.", items: [
          "345 + 234", "456 + 321", "567 + 231", "678 + 220", "789 + 110"
        ]},
       { heading: "Exercise 7.2 — Word problems.", items: [
          "A shop sold 345 bags of rice in January and 234 in February. How many in total?",
          "A school has 456 boys and 321 girls. How many pupils?",
          "A farmer harvested 567 yams and 231 cassava. Total crops?"
        ]},
       { heading: "Exercise 7.3 — Add.", items: [
          "234 + 156", "345 + 267", "456 + 178"
        ]}],

      `<p><b>7.1:</b> 1. 579 2. 777 3. 798 4. 898 5. 899</p>
       <p><b>7.2:</b> 1. 579 bags 2. 777 pupils 3. 798 crops</p>
       <p><b>7.3:</b> 1. 390 2. 612 3. 634</p>`,

      [{ q: "345 + 234 = ?", a: ["579"] },
       { q: "456 + 321 = ?", a: ["777"] },
       { q: "567 + 231 = ?", a: ["798"] }]),

    D(3, "➕", "Word Problems",
      "Solve addition word problems.",
      `<p class='big-emoji'>➕ 📝</p>
       <p>Read carefully. Find the numbers. Add them.</p>

       <h3>Steps</h3>
       <ol>
         <li>Read the problem twice.</li>
         <li>Underline the numbers.</li>
         <li>Write the addition sentence.</li>
         <li>Add and write the answer with the unit.</li>
       </ol>

       <h3>Worked Example</h3>
       <p><b>Question:</b> A farmer has 234 goats and 156 sheep. How many animals?</p>
       <p><b>Answer:</b> 234 + 156 = <b>390 animals</b>.</p>`,

      [{ heading: "Exercise 8.1 — Solve.", items: [
          "A farmer has 234 goats and 156 sheep. How many animals?",
          "A market woman sold 345 tomatoes in the morning and 267 in the afternoon. Total?",
          "A school has 456 pupils. 234 more join. How many now?",
          "A library has 321 books. 178 more arrive. How many now?",
          "A bus travels 234 km on Monday and 189 km on Tuesday. Total?"
        ]},
       { heading: "Exercise 8.2 — Solve.", items: [
          "A trader has 125 oranges and 235 mangoes. Total fruits?",
          "A class has 45 boys and 38 girls. Total pupils?"
        ]}],

      `<p><b>8.1:</b> 1. 390 2. 612 3. 690 4. 499 5. 423</p>
       <p><b>8.2:</b> 1. 360 fruits 2. 83 pupils</p>`,

      [{ q: "234 + 156 = ?", a: ["390"] },
       { q: "345 + 267 = ?", a: ["612"] },
       { q: "456 + 234 = ?", a: ["690"] }]),

    D(4, "➕", "Estimation",
      "Estimate sums before adding.",
      `<p class='big-emoji'>➕ 🎯</p>
       <p>We <b>estimate</b> to check if our answer is reasonable.</p>

       <h3>How to Estimate</h3>
       <ol>
         <li>Round each number to the nearest hundred.</li>
         <li>Add the rounded numbers.</li>
         <li>Use the estimate to check your exact answer.</li>
       </ol>

       <h3>Worked Example</h3>
       <p><b>345 + 234 ≈ ?</b></p>
       <ul>
         <li>345 ≈ 300</li>
         <li>234 ≈ 200</li>
         <li>Estimate: 300 + 200 = <b>500</b></li>
         <li>Exact: 345 + 234 = <b>579</b> (close to 500 ✓)</li>
       </ul>`,

      [{ heading: "Exercise 9.1 — Estimate, then add exactly.", items: [
          "345 + 234", "456 + 321", "567 + 231", "678 + 220", "789 + 110"
        ]},
       { heading: "Exercise 9.2 — Estimate, then add exactly.", items: [
          "234 + 156", "345 + 267", "456 + 178"
        ]}],

      `<p><b>9.1 Estimates:</b> 1. 500 2. 800 3. 800 4. 900 5. 900</p>
       <p><b>9.1 Exact:</b> 1. 579 2. 777 3. 798 4. 898 5. 899</p>
       <p><b>9.2 Estimates:</b> 1. 400 2. 600 3. 600</p>
       <p><b>9.2 Exact:</b> 1. 390 2. 612 3. 634</p>`,

      [{ q: "Estimate 345 + 234.", a: ["500"] },
       { q: "Exact 345 + 234.", a: ["579"] }]),

    D(5, "🎨", "Addition Poster",
      "Make an addition poster.",
      `<p class='big-emoji'>🎨 ➕</p>
       <p>Make an <b>"Addition"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Addition"</b></li>
         <li>Show 3 addition problems with their steps.</li>
         <li>Use a place-value chart for one of them.</li>
         <li>Write one word problem.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem step by step.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [
          "345 + 234", "456 + 321", "A word problem of your choice"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Show the steps to solve 345 + 234.", a: ["any"] },
       { q: "What is 456 + 321?", a: ["777"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — SUBTRACTION
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Subtraction", days: [

    D(1, "➖", "Subtracting 2-Digit",
      "Subtract 2-digit numbers.",
      `<p class='big-emoji'>➖ 2️⃣</p>
       <p>Line up tens and units. Subtract units first, then tens.</p>

       <h3>Worked Example</h3>
       <p><b>58 − 34 = ?</b></p>
       <ul>
         <li>Units: 8 − 4 = 4</li>
         <li>Tens: 5 − 3 = 2</li>
         <li>Answer: <b>24</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 tens and 8 units. Cross out 3 tens and 4 units. What is left? 24.</p>

       <h3>More Examples</h3>
       <ul>
         <li>79 − 25 = 54</li>
         <li>86 − 42 = 44</li>
       </ul>`,

      [{ heading: "Exercise 11.1 — Subtract.", items: [
          "58 − 34", "79 − 25", "86 − 42", "95 − 23", "67 − 45"
        ]},
       { heading: "Exercise 11.2 — Word problems.", items: [
          "Ama had 58 oranges. She gave away 34. How many left?",
          "Kojo had 79 pencils. He lost 25. How many left?"
        ]},
       { heading: "Exercise 11.3 — Subtract.", items: [
          "88 − 46", "97 − 53", "75 − 28"
        ]}],

      `<p><b>11.1:</b> 1. 24 2. 54 3. 44 4. 72 5. 22</p>
       <p><b>11.2:</b> 1. 24 oranges 2. 54 pencils</p>
       <p><b>11.3:</b> 1. 42 2. 44 3. 47</p>`,

      [{ q: "58 − 34 = ?", a: ["24"] },
       { q: "79 − 25 = ?", a: ["54"] },
       { q: "86 − 42 = ?", a: ["44"] }]),

    D(2, "➖", "Subtracting 3-Digit",
      "Subtract 3-digit numbers.",
      `<p class='big-emoji'>➖ 3️⃣</p>
       <p>Line up hundreds, tens, and units. Subtract units first.</p>

       <h3>Worked Example</h3>
       <p><b>579 − 234 = ?</b></p>
       <ul>
         <li>Units: 9 − 4 = 5</li>
         <li>Tens: 7 − 3 = 4</li>
         <li>Hundreds: 5 − 2 = 3</li>
         <li>Answer: <b>345</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a place-value chart for 579 − 234.</p>

       <h3>More Examples</h3>
       <ul>
         <li>777 − 321 = 456</li>
         <li>798 − 231 = 567</li>
       </ul>`,

      [{ heading: "Exercise 12.1 — Subtract.", items: [
          "579 − 234", "777 − 321", "798 − 231", "898 − 220", "899 − 110"
        ]},
       { heading: "Exercise 12.2 — Word problems.", items: [
          "A shop had 579 bags of rice. It sold 234. How many left?",
          "A school had 777 pupils. 321 left. How many now?"
        ]},
       { heading: "Exercise 12.3 — Subtract.", items: [
          "654 − 321", "789 − 456", "500 − 234"
        ]}],

      `<p><b>12.1:</b> 1. 345 2. 456 3. 567 4. 678 5. 789</p>
       <p><b>12.2:</b> 1. 345 bags 2. 456 pupils</p>
       <p><b>12.3:</b> 1. 333 2. 333 3. 266</p>`,

      [{ q: "579 − 234 = ?", a: ["345"] },
       { q: "777 − 321 = ?", a: ["456"] },
       { q: "798 − 231 = ?", a: ["567"] }]),

    D(3, "➖", "Word Problems",
      "Solve subtraction word problems.",
      `<p class='big-emoji'>➖ 📝</p>
       <p>Read carefully. Find the numbers. Subtract them.</p>

       <h3>Steps</h3>
       <ol>
         <li>Read the problem twice.</li>
         <li>Underline the numbers.</li>
         <li>Write the subtraction sentence.</li>
         <li>Subtract and write the answer with the unit.</li>
       </ol>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Ama had 579 mangoes. She sold 234. How many left?</p>
       <p><b>Answer:</b> 579 − 234 = <b>345 mangoes</b>.</p>`,

      [{ heading: "Exercise 13.1 — Solve.", items: [
          "Ama had 579 mangoes. She sold 234. How many left?",
          "A shop had 777 bags of rice. It sold 321. How many left?",
          "A school had 898 pupils. 220 left. How many now?",
          "A library had 899 books. 110 were lost. How many left?",
          "A farmer had 500 cows. He sold 234. How many left?"
        ]},
       { heading: "Exercise 13.2 — Solve.", items: [
          "A trader had 654 oranges. She sold 321. How many left?",
          "A class had 83 pupils. 38 left. How many now?"
        ]}],

      `<p><b>13.1:</b> 1. 345 2. 456 3. 678 4. 789 5. 266</p>
       <p><b>13.2:</b> 1. 333 oranges 2. 45 pupils</p>`,

      [{ q: "579 − 234 = ?", a: ["345"] },
       { q: "777 − 321 = ?", a: ["456"] },
       { q: "500 − 234 = ?", a: ["266"] }]),

    D(4, "➖", "Checking Answers",
      "Check subtraction by adding.",
      `<p class='big-emoji'>➖ ✅</p>
       <p>We can <b>check</b> subtraction by adding the answer to the number we subtracted.</p>

       <h3>Worked Example</h3>
       <p>If 579 − 234 = 345, then 345 + 234 should equal 579.</p>
       <ul>
         <li>345 + 234 = 579 ✓</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the check for 579 − 234 = 345.</p>

       <h3>More Examples</h3>
       <ul>
         <li>777 − 321 = 456 → 456 + 321 = 777 ✓</li>
         <li>898 − 220 = 678 → 678 + 220 = 898 ✓</li>
       </ul>`,

      [{ heading: "Exercise 14.1 — Subtract, then check by adding.", items: [
          "579 − 234", "777 − 321", "898 − 220", "500 − 234", "456 − 178"
        ]},
       { heading: "Exercise 14.2 — Subtract, then check.", items: [
          "654 − 321", "789 − 456", "600 − 245"
        ]}],

      `<p><b>14.1:</b> 1. 345 (345+234=579 ✓) 2. 456 (456+321=777 ✓) 3. 678 (678+220=898 ✓) 4. 266 (266+234=500 ✓) 5. 278 (278+178=456 ✓)</p>
       <p><b>14.2:</b> 1. 333 (333+321=654 ✓) 2. 333 (333+456=789 ✓) 3. 355 (355+245=600 ✓)</p>`,

      [{ q: "If 579 − 234 = 345, what is 345 + 234?", a: ["579"] },
       { q: "If 500 − 234 = 266, what is 266 + 234?", a: ["500"] }]),

    D(5, "🎨", "Subtraction Poster",
      "Make a subtraction poster.",
      `<p class='big-emoji'>🎨 ➖</p>
       <p>Make a <b>"Subtraction"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Subtraction"</b></li>
         <li>Show 3 subtraction problems with their checks.</li>
         <li>Write one word problem.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem and its check.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [
          "579 − 234 = 345", "777 − 321 = 456", "A word problem of your choice"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Show the check for 579 − 234 = 345.", a: ["345 + 234 = 579"] },
       { q: "What is 777 − 321?", a: ["456"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — MULTIPLICATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Multiplication", days: [

    D(1, "✖️", "Groups Of",
      "Understand multiplication as groups.",
      `<p class='big-emoji'>✖️ 👥</p>
       <p>Multiplication is <b>repeated addition</b>.</p>
       <p><b>3 groups of 4</b> means 4 + 4 + 4 = 12. We write this as <b>3 × 4 = 12</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 circles with 4 dots in each. Write "3 × 4 = 12".</p>

       <h3>More Examples</h3>
       <ul>
         <li>2 groups of 5 = 2 × 5 = 10</li>
         <li>4 groups of 3 = 4 × 3 = 12</li>
         <li>5 groups of 2 = 5 × 2 = 10</li>
       </ul>`,

      [{ heading: "Exercise 16.1 — Write as multiplication.", items: [
          "2 groups of 5", "3 groups of 4", "4 groups of 3", "5 groups of 2", "2 groups of 10"
        ]},
       { heading: "Exercise 16.2 — Write as repeated addition.", items: [
          "3 × 4", "2 × 5", "4 × 3", "5 × 2", "2 × 10"
        ]},
       { heading: "Exercise 16.3 — Draw and solve.", items: [
          "Draw 4 groups of 3. How many in total?"
        ]}],

      `<p><b>16.1:</b> 1. 2×5=10 2. 3×4=12 3. 4×3=12 4. 5×2=10 5. 2×10=20</p>
       <p><b>16.2:</b> 1. 4+4+4=12 2. 5+5=10 3. 3+3+3+3=12 4. 2+2+2+2+2=10 5. 10+10=20</p>
       <p><b>16.3:</b> 12</p>`,

      [{ q: "3 groups of 4 = ?", a: ["12"] },
       { q: "2 groups of 10 = ?", a: ["20"] },
       { q: "Write 4 × 3 as repeated addition.", a: ["3+3+3+3", "3 + 3 + 3 + 3"] }]),

    D(2, "✖️", "Times Tables 2, 5, 10",
      "Learn 2×, 5×, 10× tables.",
      `<p class='big-emoji'>✖️ 2️⃣ 5️⃣ 🔟</p>

       <h3>The 2× Table</h3>
       <p>2×1=2, 2×2=4, 2×3=6, 2×4=8, 2×5=10, 2×6=12, 2×7=14, 2×8=16, 2×9=18, 2×10=20</p>

       <h3>The 5× Table</h3>
       <p>5×1=5, 5×2=10, 5×3=15, 5×4=20, 5×5=25, 5×6=30, 5×7=35, 5×8=40, 5×9=45, 5×10=50</p>

       <h3>The 10× Table</h3>
       <p>10×1=10, 10×2=20, 10×3=30, 10×4=40, 10×5=50, 10×6=60, 10×7=70, 10×8=80, 10×9=90, 10×10=100</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the 2× table as a grid of dots.</p>`,

      [{ heading: "Exercise 17.1 — Multiply.", items: [
          "2 × 3", "2 × 7", "5 × 4", "5 × 8", "10 × 6"
        ]},
       { heading: "Exercise 17.2 — Multiply.", items: [
          "2 × 9", "5 × 7", "10 × 4", "2 × 6", "5 × 9"
        ]},
       { heading: "Exercise 17.3 — Fill in the missing number.", items: [
          "2 × ___ = 14", "5 × ___ = 35", "10 × ___ = 80"
        ]}],

      `<p><b>17.1:</b> 1. 6 2. 14 3. 20 4. 40 5. 60</p>
       <p><b>17.2:</b> 1. 18 2. 35 3. 40 4. 12 5. 45</p>
       <p><b>17.3:</b> 1. 7 2. 7 3. 8</p>`,

      [{ q: "2 × 7 = ?", a: ["14"] },
       { q: "5 × 8 = ?", a: ["40"] },
       { q: "10 × 6 = ?", a: ["60"] }]),

    D(3, "✖️", "Word Problems",
      "Solve multiplication word problems.",
      `<p class='big-emoji'>✖️ 📝</p>
       <p>Read carefully. Find the <b>groups</b> and the <b>size of each group</b>.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> A trader has 5 baskets with 10 mangoes each. How many mangoes?</p>
       <p><b>Answer:</b> 5 × 10 = <b>50 mangoes</b>.</p>

       <h3>Steps</h3>
       <ol>
         <li>Find how many groups.</li>
         <li>Find how many in each group.</li>
         <li>Multiply.</li>
         <li>Write the answer with the unit.</li>
       </ol>`,

      [{ heading: "Exercise 18.1 — Solve.", items: [
          "A trader has 5 baskets with 10 mangoes each. How many mangoes?",
          "A school has 6 classes with 10 pupils each. How many pupils?",
          "A shop has 4 shelves with 5 books each. How many books?",
          "A farmer has 3 pens with 8 goats each. How many goats?",
          "A box holds 10 eggs. How many eggs in 7 boxes?"
        ]},
       { heading: "Exercise 18.2 — Solve.", items: [
          "There are 5 bags with 5 oranges each. How many oranges?",
          "A class has 4 rows with 6 desks each. How many desks?"
        ]}],

      `<p><b>18.1:</b> 1. 50 2. 60 3. 20 4. 24 5. 70</p>
       <p><b>18.2:</b> 1. 25 oranges 2. 24 desks</p>`,

      [{ q: "5 baskets × 10 mangoes = ?", a: ["50"] },
       { q: "7 boxes × 10 eggs = ?", a: ["70"] },
       { q: "4 shelves × 5 books = ?", a: ["20"] }]),

    D(4, "✖️", "Multiply by 10",
      "Multiplying by 10.",
      `<p class='big-emoji'>✖️ 🔟</p>
       <p>When you multiply by 10, <b>add a zero</b> to the number.</p>

       <h3>Examples</h3>
       <ul>
         <li>4 × 10 = 40</li>
         <li>7 × 10 = 70</li>
         <li>12 × 10 = 120</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 × 10 as 3 groups of 10 dots. Write "3 × 10 = 30".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 9 × 10 = ?</p>
       <p><b>Answer:</b> 9 × 10 = <b>90</b> (add a zero to 9).</p>`,

      [{ heading: "Exercise 19.1 — Multiply.", items: [
          "3 × 10", "5 × 10", "7 × 10", "9 × 10", "12 × 10"
        ]},
       { heading: "Exercise 19.2 — Multiply.", items: [
          "6 × 10", "8 × 10", "11 × 10", "15 × 10", "20 × 10"
        ]},
       { heading: "Exercise 19.3 — Fill in the missing number.", items: [
          "___ × 10 = 40", "___ × 10 = 90", "___ × 10 = 130"
        ]}],

      `<p><b>19.1:</b> 1. 30 2. 50 3. 70 4. 90 5. 120</p>
       <p><b>19.2:</b> 1. 60 2. 80 3. 110 4. 150 5. 200</p>
       <p><b>19.3:</b> 1. 4 2. 9 3. 13</p>`,

      [{ q: "7 × 10 = ?", a: ["70"] },
       { q: "12 × 10 = ?", a: ["120"] },
       { q: "15 × 10 = ?", a: ["150"] }]),

    D(5, "🎨", "Multiplication Poster",
      "Make a multiplication poster.",
      `<p class='big-emoji'>🎨 ✖️</p>
       <p>Make a <b>"Multiplication"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Multiplication"</b></li>
         <li>Show the 2×, 5×, and 10× tables.</li>
         <li>Draw one example as groups of dots.</li>
         <li>Write one word problem.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say one table from memory.</p>`,

      [{ heading: "Exercise 20.1 — Write all tables.", items: [
          "2× table", "5× table", "10× table"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 6 × 10?", a: ["60"] },
       { q: "What is 5 × 7?", a: ["35"] },
       { q: "What is 2 × 9?", a: ["18"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — DIVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Division", days: [

    D(1, "➗", "Sharing",
      "Share objects equally.",
      `<p class='big-emoji'>➗ 🍬</p>
       <p><b>Division</b> means sharing equally.</p>
       <p><b>12 ÷ 3 = 4</b>. Share 12 sweets among 3 children → each child gets <b>4</b> sweets.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 12 sweets shared among 3 children. Each child gets 4.</p>

       <h3>More Examples</h3>
       <ul>
         <li>10 ÷ 2 = 5</li>
         <li>15 ÷ 5 = 3</li>
         <li>8 ÷ 4 = 2</li>
       </ul>`,

      [{ heading: "Exercise 21.1 — Share.", items: [
          "12 ÷ 3 = ___", "10 ÷ 2 = ___", "15 ÷ 5 = ___", "8 ÷ 4 = ___", "20 ÷ 4 = ___"
        ]},
       { heading: "Exercise 21.2 — Word problems.", items: [
          "Share 12 sweets among 3 children. How many each?",
          "Share 15 mangoes among 5 children. How many each?"
        ]},
       { heading: "Exercise 21.3 — Share.", items: [
          "18 ÷ 2 = ___", "16 ÷ 4 = ___", "25 ÷ 5 = ___"
        ]}],

      `<p><b>21.1:</b> 1. 4 2. 5 3. 3 4. 2 5. 5</p>
       <p><b>21.2:</b> 1. 4 sweets 2. 3 mangoes</p>
       <p><b>21.3:</b> 1. 9 2. 4 3. 5</p>`,

      [{ q: "12 ÷ 3 = ?", a: ["4"] },
       { q: "10 ÷ 2 = ?", a: ["5"] },
       { q: "15 ÷ 5 = ?", a: ["3"] }]),

    D(2, "➗", "Grouping",
      "Group objects equally.",
      `<p class='big-emoji'>➗ 👥</p>
       <p><b>Grouping</b> means making equal groups.</p>
       <p><b>12 ÷ 4 = 3</b>. Group 12 items into groups of 4 → <b>3 groups</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 12 dots grouped into groups of 4. How many groups? 3.</p>

       <h3>More Examples</h3>
       <ul>
         <li>18 ÷ 6 = 3</li>
         <li>20 ÷ 5 = 4</li>
         <li>24 ÷ 8 = 3</li>
       </ul>`,

      [{ heading: "Exercise 22.1 — Group.", items: [
          "12 ÷ 4 = ___", "18 ÷ 6 = ___", "20 ÷ 5 = ___", "24 ÷ 8 = ___", "30 ÷ 10 = ___"
        ]},
       { heading: "Exercise 22.2 — Word problems.", items: [
          "Group 18 oranges into bags of 6. How many bags?",
          "Group 24 pencils into packs of 8. How many packs?"
        ]},
       { heading: "Exercise 22.3 — Group.", items: [
          "16 ÷ 2 = ___", "28 ÷ 7 = ___", "36 ÷ 6 = ___"
        ]}],

      `<p><b>22.1:</b> 1. 3 2. 3 3. 4 4. 3 5. 3</p>
       <p><b>22.2:</b> 1. 3 bags 2. 3 packs</p>
       <p><b>22.3:</b> 1. 8 2. 4 3. 6</p>`,

      [{ q: "12 ÷ 4 = ?", a: ["3"] },
       { q: "20 ÷ 5 = ?", a: ["4"] },
       { q: "24 ÷ 8 = ?", a: ["3"] }]),

    D(3, "➗", "Division Facts",
      "Learn division facts.",
      `<p class='big-emoji'>➗ 🧠</p>
       <p>Division is the <b>opposite</b> of multiplication.</p>
       <p>If 2 × 4 = 8, then 8 ÷ 2 = 4.</p>

       <h3>Fact Families</h3>
       <ul>
         <li>2 × 4 = 8 → 8 ÷ 2 = 4, 8 ÷ 4 = 2</li>
         <li>5 × 3 = 15 → 15 ÷ 5 = 3, 15 ÷ 3 = 5</li>
         <li>10 × 4 = 40 → 40 ÷ 10 = 4, 40 ÷ 4 = 10</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a fact family triangle for 2, 4, 8.</p>`,

      [{ heading: "Exercise 23.1 — Divide.", items: [
          "8 ÷ 2 = ___", "12 ÷ 2 = ___", "15 ÷ 3 = ___", "20 ÷ 4 = ___", "25 ÷ 5 = ___"
        ]},
       { heading: "Exercise 23.2 — Divide.", items: [
          "10 ÷ 5 = ___", "18 ÷ 3 = ___", "24 ÷ 4 = ___", "30 ÷ 5 = ___", "40 ÷ 10 = ___"
        ]},
       { heading: "Exercise 23.3 — Write the fact family.", items: [
          "3 × 5 = 15", "4 × 6 = 24"
        ]}],

      `<p><b>23.1:</b> 1. 4 2. 6 3. 5 4. 5 5. 5</p>
       <p><b>23.2:</b> 1. 2 2. 6 3. 6 4. 6 5. 4</p>
       <p><b>23.3:</b> 1. 15 ÷ 3 = 5, 15 ÷ 5 = 3 2. 24 ÷ 4 = 6, 24 ÷ 6 = 4</p>`,

      [{ q: "8 ÷ 2 = ?", a: ["4"] },
       { q: "15 ÷ 3 = ?", a: ["5"] },
       { q: "If 4 × 6 = 24, what is 24 ÷ 4?", a: ["6"] }]),

    D(4, "➗", "Word Problems",
      "Solve division word problems.",
      `<p class='big-emoji'>➗ 📝</p>
       <p>Read carefully. Decide whether to <b>share</b> or <b>group</b>.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Share 15 mangoes among 3 children. How many each?</p>
       <p><b>Answer:</b> 15 ÷ 3 = <b>5 mangoes each</b>.</p>

       <h3>Steps</h3>
       <ol>
         <li>Read the problem twice.</li>
         <li>Find the total.</li>
         <li>Find how many groups or how many in each group.</li>
         <li>Divide and write the answer with the unit.</li>
       </ol>`,

      [{ heading: "Exercise 24.1 — Solve.", items: [
          "15 ÷ 3 = ___",
          "20 books, 4 shelves. Each shelf has ___ books.",
          "24 sweets, 6 bags. Each bag has ___ sweets.",
          "18 pupils, 3 rows. Each row has ___ pupils.",
          "30 eggs, 5 boxes. Each box has ___ eggs."
        ]},
       { heading: "Exercise 24.2 — Solve.", items: [
          "Share 28 oranges among 7 children. How many each?",
          "Group 36 pencils into packs of 6. How many packs?"
        ]}],

      `<p><b>24.1:</b> 1. 5 2. 5 3. 4 4. 6 5. 6</p>
       <p><b>24.2:</b> 1. 4 oranges 2. 6 packs</p>`,

      [{ q: "15 ÷ 3 = ?", a: ["5"] },
       { q: "20 ÷ 4 = ?", a: ["5"] },
       { q: "24 ÷ 6 = ?", a: ["4"] }]),

    D(5, "🎨", "Division Poster",
      "Make a division poster.",
      `<p class='big-emoji'>🎨 ➗</p>
       <p>Make a <b>"Division"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Division"</b></li>
         <li>Show 3 division problems with pictures.</li>
         <li>Write one word problem.</li>
         <li>Show one fact family.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 25.1 — Draw.", items: [
          "12 ÷ 3", "15 ÷ 5", "20 ÷ 4"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 12 ÷ 3?", a: ["4"] },
       { q: "What is 20 ÷ 4?", a: ["5"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — FRACTIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Fractions", days: [

    D(1, "½", "Halves",
      "Understand halves.",
      `<p class='big-emoji'>½ 🍕</p>
       <p>When we cut something into <b>2 equal parts</b>, each part is a <b>half</b>.</p>
       <p>We write a half as <b>1/2</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>Half of 6 = 3</li>
         <li>Half of 10 = 5</li>
         <li>Half of 8 = 4</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a circle. Cut it into 2 equal parts. Colour one half.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is half of 12?</p>
       <p><b>Answer:</b> 12 ÷ 2 = <b>6</b>.</p>`,

      [{ heading: "Exercise 26.1 — Say and colour.", items: [
          "Cut a piece of paper into 2 equal parts.",
          "Colour one half.",
          "Say 'one half'."
        ]},
       { heading: "Exercise 26.2 — Find half.", items: [
          "Half of 6 = ___", "Half of 10 = ___", "Half of 8 = ___", "Half of 14 = ___", "Half of 20 = ___"
        ]},
       { heading: "Exercise 26.3 — Draw.", items: [
          "Draw 3 shapes and colour half of each."
        ]}],

      `<p><b>26.2:</b> 1. 3 2. 5 3. 4 4. 7 5. 10</p>`,

      [{ q: "How many halves make a whole?", a: ["2", "two"] },
       { q: "Is half of 6 = 3?", a: ["yes"] },
       { q: "What is half of 10?", a: ["5"] }]),

    D(2, "🍰", "Quarters",
      "Understand quarters.",
      `<p class='big-emoji'>🍰 ¼</p>
       <p>When we cut something into <b>4 equal parts</b>, each part is a <b>quarter</b>.</p>
       <p>We write a quarter as <b>1/4</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>A quarter of 8 = 2</li>
         <li>A quarter of 12 = 3</li>
         <li>A quarter of 20 = 5</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a square. Cut it into 4 equal parts. Colour one quarter.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a quarter of 16?</p>
       <p><b>Answer:</b> 16 ÷ 4 = <b>4</b>.</p>`,

      [{ heading: "Exercise 27.1 — Say and colour.", items: [
          "Cut into 4 equal parts.",
          "Colour one quarter.",
          "Say 'one quarter'."
        ]},
       { heading: "Exercise 27.2 — Find a quarter.", items: [
          "Quarter of 4 = ___", "Quarter of 8 = ___", "Quarter of 12 = ___", "Quarter of 16 = ___", "Quarter of 20 = ___"
        ]},
       { heading: "Exercise 27.3 — Draw.", items: [
          "Draw 3 shapes and colour one quarter of each."
        ]}],

      `<p><b>27.2:</b> 1. 1 2. 2 3. 3 4. 4 5. 5</p>`,

      [{ q: "How many quarters make a whole?", a: ["4", "four"] },
       { q: "Is a quarter of 8 = 2?", a: ["yes"] },
       { q: "What is a quarter of 12?", a: ["3"] }]),

    D(3, "⅓", "Thirds",
      "Understand thirds.",
      `<p class='big-emoji'>⅓ 🍫</p>
       <p>When we cut something into <b>3 equal parts</b>, each part is a <b>third</b>.</p>
       <p>We write a third as <b>1/3</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>A third of 9 = 3</li>
         <li>A third of 12 = 4</li>
         <li>A third of 15 = 5</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a rectangle. Cut it into 3 equal parts. Colour one third.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a third of 18?</p>
       <p><b>Answer:</b> 18 ÷ 3 = <b>6</b>.</p>`,

      [{ heading: "Exercise 28.1 — Say and colour.", items: [
          "Cut into 3 equal parts.",
          "Colour one third.",
          "Say 'one third'."
        ]},
       { heading: "Exercise 28.2 — Find a third.", items: [
          "Third of 3 = ___", "Third of 6 = ___", "Third of 9 = ___", "Third of 12 = ___", "Third of 15 = ___"
        ]},
       { heading: "Exercise 28.3 — Draw.", items: [
          "Draw 3 shapes and colour one third of each."
        ]}],

      `<p><b>28.2:</b> 1. 1 2. 2 3. 3 4. 4 5. 5</p>`,

      [{ q: "How many thirds make a whole?", a: ["3", "three"] },
       { q: "Is a third of 9 = 3?", a: ["yes"] },
       { q: "What is a third of 12?", a: ["4"] }]),

    D(4, "📝", "Compare Fractions",
      "Compare simple fractions.",
      `<p class='big-emoji'>📝 ⚖️</p>
       <p>When the <b>numerator</b> (top number) is 1, the <b>bigger the denominator</b> (bottom number), the <b>smaller</b> the fraction.</p>

       <h3>Examples</h3>
       <ul>
         <li>1/2 is <b>bigger</b> than 1/4</li>
         <li>1/4 is <b>smaller</b> than 1/3</li>
         <li>1/8 is <b>smaller</b> than 1/4</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 circles. Cut one into halves and one into quarters. Colour one part of each. Which is bigger? 1/2.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which is bigger: 1/3 or 1/6?</p>
       <p><b>Answer:</b> <b>1/3</b> is bigger because the whole is cut into fewer parts.</p>`,

      [{ heading: "Exercise 29.1 — Compare using <, > or =.", items: [
          "1/2 ___ 1/4", "1/3 ___ 1/6", "1/4 ___ 1/2", "1/8 ___ 1/4", "1/3 ___ 1/2"
        ]},
       { heading: "Exercise 29.2 — Compare using <, > or =.", items: [
          "1/5 ___ 1/10", "1/2 ___ 1/3", "1/6 ___ 1/4", "1/10 ___ 1/8", "1/4 ___ 1/4"
        ]},
       { heading: "Exercise 29.3 — Order from smallest to largest.", items: [
          "1/2, 1/8, 1/4", "1/3, 1/2, 1/6"
        ]}],

      `<p><b>29.1:</b> 1. &gt; 2. &gt; 3. &lt; 4. &lt; 5. &lt;</p>
       <p><b>29.2:</b> 1. &gt; 2. &gt; 3. &lt; 4. &lt; 5. =</p>
       <p><b>29.3:</b> 1. 1/8, 1/4, 1/2 2. 1/6, 1/3, 1/2</p>`,

      [{ q: "Which is bigger: 1/2 or 1/4?", a: ["1/2"] },
       { q: "Which is smaller: 1/8 or 1/4?", a: ["1/8"] },
       { q: "Which is bigger: 1/3 or 1/6?", a: ["1/3"] }]),

    D(5, "🎨", "Fraction Poster",
      "Make a fraction poster.",
      `<p class='big-emoji'>🎨 ½ ¼ ⅓</p>
       <p>Make a <b>"Fractions"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Fractions"</b></li>
         <li>Show halves, quarters, and thirds with pictures.</li>
         <li>Write the fraction under each picture.</li>
         <li>Write one comparison (e.g., 1/2 > 1/4).</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each fraction.</p>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [
          "1/2", "1/4", "1/3"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 1/2 of 10?", a: ["5"] },
       { q: "What is 1/4 of 8?", a: ["2"] },
       { q: "What is 1/3 of 9?", a: ["3"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — MONEY
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Money", days: [

    D(1, "💰", "Cedis & Pesewas",
      "Understand cedis and pesewas.",
      `<p class='big-emoji'>💰 🪙</p>
       <p>In Ghana, we use <b>cedis (GH₵)</b> and <b>pesewas (Gp)</b>.</p>
       <p><b>100 pesewas = 1 cedi</b>.</p>

       <h3>Coins and Notes</h3>
       <ul>
         <li>Coins: 1p, 5p, 10p, 20p, 50p, GH₵1, GH₵2</li>
         <li>Notes: GH₵1, GH₵2, GH₵5, GH₵10, GH₵20, GH₵50, GH₵100, GH₵200</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the coins and notes you know. Label each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many pesewas in 2 cedis?</p>
       <p><b>Answer:</b> 2 × 100 = <b>200 pesewas</b>.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "How many pesewas in 1 cedi?",
          "How many pesewas in 2 cedis?",
          "Name coins you know.",
          "Name notes you know."
        ]},
       { heading: "Exercise 31.2 — Convert.", items: [
          "1 cedi = ___ pesewas",
          "2 cedis = ___ pesewas",
          "3 cedis = ___ pesewas",
          "50 pesewas = ___ cedi",
          "100 pesewas = ___ cedi"
        ]}],

      `<p><b>31.2:</b> 1. 100 2. 200 3. 300 4. 0.5 (half) 5. 1</p>`,

      [{ q: "100 pesewas = ___ cedi.", a: ["1", "one"] },
       { q: "50 pesewas = ___ cedi.", a: ["0.5", "half"] },
       { q: "How many pesewas in 3 cedis?", a: ["300"] }]),

    D(2, "💰", "Adding Money",
      "Add money.",
      `<p class='big-emoji'>💰 ➕</p>
       <p>Add the cedis and pesewas separately, then combine.</p>

       <h3>Worked Example</h3>
       <p><b>GH₵5 + GH₵10 = GH₵15</b></p>
       <p><b>GH₵20 + GH₵15 = GH₵35</b></p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw coins and notes that add up to GH₵15.</p>

       <h3>More Examples</h3>
       <ul>
         <li>GH₵30 + GH₵25 = GH₵55</li>
         <li>GH₵10 + GH₵10 + GH₵5 = GH₵25</li>
       </ul>`,

      [{ heading: "Exercise 32.1 — Add.", items: [
          "5 + 10 = ___", "20 + 15 = ___", "30 + 25 = ___", "10 + 10 + 5 = ___", "50 + 20 = ___"
        ]},
       { heading: "Exercise 32.2 — Word problems.", items: [
          "Ama has GH₵20. Her mother gives her GH₵15. How much now?",
          "Kojo has GH₵50. He earns GH₵25. How much now?"
        ]},
       { heading: "Exercise 32.3 — Add.", items: [
          "45 + 30 = ___", "60 + 25 = ___", "100 + 50 = ___"
        ]}],

      `<p><b>32.1:</b> 1. 15 2. 35 3. 55 4. 25 5. 70</p>
       <p><b>32.2:</b> 1. GH₵35 2. GH₵75</p>
       <p><b>32.3:</b> 1. 75 2. 85 3. 150</p>`,

      [{ q: "5 + 10 = ?", a: ["15"] },
       { q: "50 + 20 = ?", a: ["70"] },
       { q: "30 + 25 = ?", a: ["55"] }]),

    D(3, "💰", "Change",
      "Calculate change.",
      `<p class='big-emoji'>💰 🔄</p>
       <p><b>Change</b> is the money you get back when you pay more than the price.</p>
       <p><b>Change = Money paid − Price</b></p>

       <h3>Worked Example</h3>
       <p>Pay GH₵20 for a GH₵15 item → Change = 20 − 15 = <b>GH₵5</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a shop item costing GH₵15 and a GH₵20 note. Show the change.</p>

       <h3>More Examples</h3>
       <ul>
         <li>GH₵50 − GH₵30 = GH₵20</li>
         <li>GH₵100 − GH₵60 = GH₵40</li>
       </ul>`,

      [{ heading: "Exercise 33.1 — Calculate change.", items: [
          "20 − 15 = ___", "50 − 30 = ___", "100 − 60 = ___", "30 − 25 = ___", "40 − 20 = ___"
        ]},
       { heading: "Exercise 33.2 — Word problems.", items: [
          "You pay GH₵50 for a GH₵35 item. What is your change?",
          "You pay GH₵100 for a GH₵75 item. What is your change?"
        ]},
       { heading: "Exercise 33.3 — Calculate.", items: [
          "80 − 45 = ___", "200 − 150 = ___", "500 − 250 = ___"
        ]}],

      `<p><b>33.1:</b> 1. 5 2. 20 3. 40 4. 5 5. 20</p>
       <p><b>33.2:</b> 1. GH₵15 2. GH₵25</p>
       <p><b>33.3:</b> 1. 35 2. 50 3. 250</p>`,

      [{ q: "20 − 15 = ?", a: ["5"] },
       { q: "100 − 60 = ?", a: ["40"] },
       { q: "50 − 35 = ?", a: ["15"] }]),

    D(4, "📝", "Shopping Problems",
      "Solve shopping problems.",
      `<p class='big-emoji'>📝 🛒</p>
       <p>When you buy more than one item, <b>multiply</b>.</p>

       <h3>Worked Example</h3>
       <p>You buy 3 items at GH₵5 each → 3 × 5 = <b>GH₵15</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 items costing GH₵5 each. Write the total.</p>

       <h3>More Examples</h3>
       <ul>
         <li>4 items at GH₵10 each = GH₵40</li>
         <li>2 items at GH₵25 each = GH₵50</li>
       </ul>`,

      [{ heading: "Exercise 34.1 — Solve.", items: [
          "3 × 5 = ___", "4 items at 10 each = ___", "2 items at 25 each = ___",
          "5 items at 6 each = ___", "6 items at 10 each = ___"
        ]},
       { heading: "Exercise 34.2 — Word problems.", items: [
          "You buy 4 pencils at GH₵3 each. How much in total?",
          "You buy 5 exercise books at GH₵8 each. How much in total?"
        ]}],

      `<p><b>34.1:</b> 1. 15 2. 40 3. 50 4. 30 5. 60</p>
       <p><b>34.2:</b> 1. GH₵12 2. GH₵40</p>`,

      [{ q: "3 × 5 = ?", a: ["15"] },
       { q: "4 × 10 = ?", a: ["40"] },
       { q: "5 × 6 = ?", a: ["30"] }]),

    D(5, "🎨", "Money Poster",
      "Make a money poster.",
      `<p class='big-emoji'>🎨 💰</p>
       <p>Make a <b>"Money"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Money"</b></li>
         <li>Draw coins and notes.</li>
         <li>Write the value of each.</li>
         <li>Show one addition and one subtraction problem.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the value of each coin and note.</p>`,

      [{ heading: "Exercise 35.1 — Draw.", items: [
          "1 cedi", "2 cedis", "5 cedis", "10 cedis", "20 cedis"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "How many pesewas in 1 cedi?", a: ["100"] },
       { q: "What is the change from GH₵20 for a GH₵15 item?", a: ["5", "GH₵5"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW & TEST
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Place Value & Addition",
      "Review place value and addition.",
      `<p class='big-emoji'>🔁 🔢 ➕</p>

       <h3>Review</h3>
       <ul>
         <li>Place value: units, tens, hundreds, thousands</li>
         <li>Expanded form</li>
         <li>Addition with and without carrying</li>
         <li>Estimation</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a place-value chart for 4,532.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 345 + 234?</p>
       <p><b>Answer:</b> 345 + 234 = <b>579</b>.</p>`,

      [{ heading: "Exercise 36.1 — Review.", items: [
          "Write the place value of 5 in 4,532.",
          "Write 4,532 in expanded form.",
          "345 + 234 = ___",
          "456 + 321 = ___",
          "567 + 231 = ___"
        ]},
       { heading: "Exercise 36.2 — Review.", items: [
          "4,532 ___ 4,523",
          "7,008 ___ 7,080",
          "Estimate 345 + 234."
        ]}],

      `<p><b>36.1:</b> 1. hundreds 2. 4,000+500+30+2 3. 579 4. 777 5. 798</p>
       <p><b>36.2:</b> 1. &gt; 2. &lt; 3. 500</p>`,

      [{ q: "What is 345 + 234?", a: ["579"] },
       { q: "Place value of 5 in 4,532?", a: ["hundreds", "hundred"] }]),

    D(2, "🔁", "Review Subtraction & Multiplication",
      "Review subtraction and multiplication.",
      `<p class='big-emoji'>🔁 ➖ ✖️</p>

       <h3>Review</h3>
       <ul>
         <li>Subtraction with and without borrowing</li>
         <li>Checking subtraction by adding</li>
         <li>Multiplication as groups</li>
         <li>2×, 5×, 10× tables</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 groups of 5 dots. Write "4 × 5 = 20".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 579 − 234?</p>
       <p><b>Answer:</b> 579 − 234 = <b>345</b>. Check: 345 + 234 = 579 ✓</p>`,

      [{ heading: "Exercise 37.1 — Review.", items: [
          "579 − 234 = ___",
          "777 − 321 = ___",
          "Check: 345 + 234 = ___",
          "4 × 5 = ___",
          "5 × 8 = ___"
        ]},
       { heading: "Exercise 37.2 — Review.", items: [
          "10 × 6 = ___",
          "2 × 9 = ___",
          "A trader has 5 baskets with 10 mangoes each. Total?"
        ]}],

      `<p><b>37.1:</b> 1. 345 2. 456 3. 579 4. 20 5. 40</p>
       <p><b>37.2:</b> 1. 60 2. 18 3. 50 mangoes</p>`,

      [{ q: "579 − 234 = ?", a: ["345"] },
       { q: "4 × 5 = ?", a: ["20"] },
       { q: "10 × 6 = ?", a: ["60"] }]),

    D(3, "🔁", "Review Division & Fractions",
      "Review division and fractions.",
      `<p class='big-emoji'>🔁 ➗ ½</p>

       <h3>Review</h3>
       <ul>
         <li>Sharing and grouping</li>
         <li>Division facts</li>
         <li>Halves, quarters, thirds</li>
         <li>Comparing fractions</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a circle cut into quarters. Colour one quarter.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 12 ÷ 3?</p>
       <p><b>Answer:</b> 12 ÷ 3 = <b>4</b>.</p>`,

      [{ heading: "Exercise 38.1 — Review.", items: [
          "12 ÷ 3 = ___",
          "15 ÷ 5 = ___",
          "20 ÷ 4 = ___",
          "Half of 10 = ___",
          "Quarter of 8 = ___"
        ]},
       { heading: "Exercise 38.2 — Review.", items: [
          "Third of 9 = ___",
          "1/2 ___ 1/4",
          "1/3 ___ 1/6"
        ]}],

      `<p><b>38.1:</b> 1. 4 2. 3 3. 5 4. 5 5. 2</p>
       <p><b>38.2:</b> 1. 3 2. &gt; 3. &gt;</p>`,

      [{ q: "12 ÷ 3 = ?", a: ["4"] },
       { q: "Half of 10?", a: ["5"] },
       { q: "Which is bigger: 1/2 or 1/4?", a: ["1/2"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Today we practise for the monthly test.</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>Write the place value of 7 in 7,008.</li>
         <li>345 + 234 = ___</li>
         <li>579 − 234 = ___</li>
         <li>5 × 8 = ___</li>
         <li>12 ÷ 3 = ___</li>
         <li>Half of 20 = ___</li>
         <li>1/4 of 12 = ___</li>
         <li>GH₵20 + GH₵15 = ___</li>
         <li>Change from GH₵50 for a GH₵35 item = ___</li>
         <li>3 × 10 = ___</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. thousands 2. 579 3. 345 4. 40 5. 4 6. 10 7. 3 8. GH₵35 9. GH₵15 10. 30</p>`,

      [{ q: "345 + 234 = ?", a: ["579"] },
       { q: "12 ÷ 3 = ?", a: ["4"] },
       { q: "3 × 10 = ?", a: ["30"] }]),

    D(5, "🎉", "Month 1 Test & Celebration",
      "Monthly Test 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 1</b>: 40 marks.</p>

       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Place Value (10 marks)</li>
         <li>Part B — Addition & Subtraction (10 marks)</li>
         <li>Part C — Multiplication & Division (10 marks)</li>
         <li>Part D — Fractions & Money (10 marks)</li>
       </ul>

       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Place Value (10)",
          "Part B — Addition & Subtraction (10)",
          "Part C — Multiplication & Division (10)",
          "Part D — Fractions & Money (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — MEASUREMENT
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Measurement", days: [

    D(1, "📏", "Length",
      "Measure length.",
      `<p class='big-emoji'>📏 📐</p>
       <p><b>Length</b> tells us how long or short something is.</p>
       <p>We measure length in:</p>
       <ul>
         <li><b>Millimetres (mm)</b> — very small</li>
         <li><b>Centimetres (cm)</b> — small</li>
         <li><b>Metres (m)</b> — medium</li>
         <li><b>Kilometres (km)</b> — long distances</li>
       </ul>
       <p><b>100 cm = 1 m</b> · <b>1000 m = 1 km</b></p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a ruler. Measure a pencil and a book.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many centimetres in 2 metres?</p>
       <p><b>Answer:</b> 2 × 100 = <b>200 cm</b>.</p>`,

      [{ heading: "Exercise 40.1 — Measure.", items: [
          "Measure your pencil in cm.",
          "Measure your book in cm.",
          "Measure your desk in cm.",
          "Measure your height in cm.",
          "Measure the door in m."
        ]},
       { heading: "Exercise 40.2 — Convert.", items: [
          "1 m = ___ cm", "2 m = ___ cm", "3 m = ___ cm", "200 cm = ___ m", "500 cm = ___ m"
        ]}],

      `<p><b>40.2:</b> 1. 100 2. 200 3. 300 4. 2 5. 5</p>`,

      [{ q: "How many cm in 1 m?", a: ["100"] },
       { q: "How many m in 1 km?", a: ["1000"] },
       { q: "2 m = ___ cm", a: ["200"] }]),

    D(2, "⚖️", "Weight",
      "Measure weight.",
      `<p class='big-emoji'>⚖️ 🏋️</p>
       <p><b>Weight</b> tells us how heavy or light something is.</p>
       <p>We measure weight in:</p>
       <ul>
         <li><b>Grams (g)</b> — small</li>
         <li><b>Kilograms (kg)</b> — large</li>
       </ul>
       <p><b>1000 g = 1 kg</b></p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a balance scale. Show which is heavier: a stone or a feather.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many grams in 2 kilograms?</p>
       <p><b>Answer:</b> 2 × 1000 = <b>2000 g</b>.</p>`,

      [{ heading: "Exercise 41.1 — Say.", items: [
          "Which is heavier: a book or a pencil?",
          "Which is lighter: a stone or a feather?",
          "How many grams in 1 kg?",
          "How many grams in 3 kg?"
        ]},
       { heading: "Exercise 41.2 — Convert.", items: [
          "1 kg = ___ g", "2 kg = ___ g", "4 kg = ___ g", "1000 g = ___ kg", "3000 g = ___ kg"
        ]}],

      `<p><b>41.2:</b> 1. 1000 2. 2000 3. 4000 4. 1 5. 3</p>`,

      [{ q: "How many g in 1 kg?", a: ["1000"] },
       { q: "2 kg = ___ g", a: ["2000"] },
       { q: "Which is heavier: a stone or a feather?", a: ["stone"] }]),

    D(3, "🥤", "Capacity",
      "Measure capacity.",
      `<p class='big-emoji'>🥤 🧴</p>
       <p><b>Capacity</b> tells us how much a container can hold.</p>
       <p>We measure capacity in:</p>
       <ul>
         <li><b>Millilitres (ml)</b> — small</li>
         <li><b>Litres (L)</b> — large</li>
       </ul>
       <p><b>1000 ml = 1 L</b></p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bottle, a cup, and a bucket. Label which holds the most.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many millilitres in 2 litres?</p>
       <p><b>Answer:</b> 2 × 1000 = <b>2000 ml</b>.</p>`,

      [{ heading: "Exercise 42.1 — Say.", items: [
          "Which holds more: a cup or a bucket?",
          "Which holds less: a spoon or a bottle?",
          "How many ml in 1 L?",
          "How many ml in 3 L?"
        ]},
       { heading: "Exercise 42.2 — Convert.", items: [
          "1 L = ___ ml", "2 L = ___ ml", "5 L = ___ ml", "1000 ml = ___ L", "2000 ml = ___ L"
        ]}],

      `<p><b>42.2:</b> 1. 1000 2. 2000 3. 5000 4. 1 5. 2</p>`,

      [{ q: "How many ml in 1 L?", a: ["1000"] },
       { q: "2 L = ___ ml", a: ["2000"] },
       { q: "Which holds more: a cup or a bucket?", a: ["bucket"] }]),

    D(4, "⏰", "Time",
      "Tell time.",
      `<p class='big-emoji'>⏰ 🕐</p>
       <p>We measure time in:</p>
       <ul>
         <li><b>Seconds (s)</b></li>
         <li><b>Minutes (min)</b></li>
         <li><b>Hours (h)</b></li>
         <li><b>Days, weeks, months, years</b></li>
       </ul>
       <p><b>60 seconds = 1 minute</b> · <b>60 minutes = 1 hour</b> · <b>24 hours = 1 day</b></p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing 3 o'clock.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many minutes in 2 hours?</p>
       <p><b>Answer:</b> 2 × 60 = <b>120 minutes</b>.</p>`,

      [{ heading: "Exercise 43.1 — Convert.", items: [
          "1 min = ___ s", "2 min = ___ s", "1 h = ___ min", "2 h = ___ min", "1 day = ___ h"
        ]},
       { heading: "Exercise 43.2 — Say.", items: [
          "How many days in a week?",
          "How many months in a year?",
          "How many days in a year?"
        ]}],

      `<p><b>43.1:</b> 1. 60 2. 120 3. 60 4. 120 5. 24</p>
       <p><b>43.2:</b> 1. 7 2. 12 3. 365</p>`,

      [{ q: "How many minutes in 1 hour?", a: ["60"] },
       { q: "How many seconds in 1 minute?", a: ["60"] },
       { q: "How many days in a week?", a: ["7"] }]),

    D(5, "🎨", "Measurement Poster",
      "Make a measurement poster.",
      `<p class='big-emoji'>🎨 📏 ⚖️ 🥤 ⏰</p>
       <p>Make a <b>"Measurement"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Measurement"</b></li>
         <li>Draw one example for length, weight, capacity, and time.</li>
         <li>Write the unit under each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the unit for each type of measurement.</p>`,

      [{ heading: "Exercise 44.1 — Draw.", items: [
          "Length — cm, m, km",
          "Weight — g, kg",
          "Capacity — ml, L",
          "Time — s, min, h"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What unit measures length?", a: ["cm", "m", "km", "any"] },
       { q: "What unit measures weight?", a: ["g", "kg", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — TIME
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Time", days: [

    D(1, "🕐", "O'clock",
      "Tell time to the hour.",
      `<p class='big-emoji'>🕐 🕐</p>
       <p>When the <b>minute hand</b> (long hand) points to <b>12</b>, the time is <b>o'clock</b>.</p>
       <p>The <b>hour hand</b> (short hand) points to the hour.</p>

       <h3>Examples</h3>
       <ul>
         <li>3:00 — three o'clock</li>
         <li>7:00 — seven o'clock</li>
         <li>12:00 — twelve o'clock</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing 3:00. Label the hour hand and minute hand.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What time is it when the hour hand is on 5 and the minute hand is on 12?</p>
       <p><b>Answer:</b> <b>5 o'clock</b>.</p>`,

      [{ heading: "Exercise 45.1 — Say the time.", items: [
          "Draw a clock showing 2:00.",
          "Draw a clock showing 6:00.",
          "Draw a clock showing 9:00.",
          "Draw a clock showing 11:00.",
          "Draw a clock showing 12:00."
        ]},
       { heading: "Exercise 45.2 — Write the time.", items: [
          "Hour hand on 4, minute hand on 12 → ___",
          "Hour hand on 8, minute hand on 12 → ___",
          "Hour hand on 1, minute hand on 12 → ___"
        ]}],

      `<p><b>45.2:</b> 1. 4:00 2. 8:00 3. 1:00</p>`,

      [{ q: "What time is 4:00?", a: ["four o'clock", "4:00"] },
       { q: "What time is 7:00?", a: ["seven o'clock", "7:00"] }]),

    D(2, "🕜", "Half Past",
      "Tell time to the half hour.",
      `<p class='big-emoji'>🕜 🕜</p>
       <p>When the <b>minute hand</b> points to <b>6</b>, it is <b>half past</b> the hour.</p>

       <h3>Examples</h3>
       <ul>
         <li>3:30 — half past three</li>
         <li>7:30 — half past seven</li>
         <li>12:30 — half past twelve</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing 3:30. Label the hands.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What time is it when the hour hand is between 5 and 6 and the minute hand is on 6?</p>
       <p><b>Answer:</b> <b>Half past five (5:30)</b>.</p>`,

      [{ heading: "Exercise 46.1 — Say the time.", items: [
          "Draw a clock showing 2:30.",
          "Draw a clock showing 6:30.",
          "Draw a clock showing 9:30.",
          "Draw a clock showing 11:30.",
          "Draw a clock showing 12:30."
        ]},
       { heading: "Exercise 46.2 — Write the time.", items: [
          "Half past 4 → ___",
          "Half past 8 → ___",
          "Half past 1 → ___"
        ]}],

      `<p><b>46.2:</b> 1. 4:30 2. 8:30 3. 1:30</p>`,

      [{ q: "What time is half past 3?", a: ["3:30"] },
       { q: "What time is half past 7?", a: ["7:30"] }]),

    D(3, "🕓", "Quarter Past",
      "Tell time to the quarter hour.",
      `<p class='big-emoji'>🕓 🕓</p>
       <p>When the <b>minute hand</b> points to <b>3</b>, it is <b>quarter past</b> the hour.</p>
       <p>When the <b>minute hand</b> points to <b>9</b>, it is <b>quarter to</b> the hour.</p>

       <h3>Examples</h3>
       <ul>
         <li>3:15 — quarter past three</li>
         <li>7:45 — quarter to eight</li>
         <li>12:15 — quarter past twelve</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing 3:15 and another showing 7:45.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What time is it when the minute hand is on 3 and the hour hand is past 5?</p>
       <p><b>Answer:</b> <b>Quarter past five (5:15)</b>.</p>`,

      [{ heading: "Exercise 47.1 — Say the time.", items: [
          "Draw a clock showing 2:15.",
          "Draw a clock showing 6:15.",
          "Draw a clock showing 9:45.",
          "Draw a clock showing 11:15.",
          "Draw a clock showing 12:45."
        ]},
       { heading: "Exercise 47.2 — Write the time.", items: [
          "Quarter past 4 → ___",
          "Quarter to 8 → ___",
          "Quarter past 1 → ___"
        ]}],

      `<p><b>47.2:</b> 1. 4:15 2. 7:45 3. 1:15</p>`,

      [{ q: "What time is quarter past 3?", a: ["3:15"] },
       { q: "What time is quarter to 8?", a: ["7:45"] }]),

    D(4, "📝", "Time Problems",
      "Solve time problems.",
      `<p class='big-emoji'>📝 ⏰</p>
       <p>We can add and subtract time.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> It is 3:00. What time will it be in 2 hours?</p>
       <p><b>Answer:</b> 3:00 + 2 hours = <b>5:00</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>7:00 + 1 hour = 8:00</li>
         <li>9:00 − 2 hours = 7:00</li>
       </ul>`,

      [{ heading: "Exercise 48.1 — Solve.", items: [
          "It is 3:00. What time in 2 hours?",
          "It is 7:00. What time in 1 hour?",
          "It is 9:00. What time 2 hours ago?",
          "It is 5:30. What time in 30 minutes?",
          "It is 8:00. What time in 3 hours?"
        ]},
       { heading: "Exercise 48.2 — Solve.", items: [
          "School starts at 8:00 and ends at 2:00. How many hours?",
          "You sleep at 8:00 pm and wake at 6:00 am. How many hours?"
        ]}],

      `<p><b>48.1:</b> 1. 5:00 2. 8:00 3. 7:00 4. 6:00 5. 11:00</p>
       <p><b>48.2:</b> 1. 6 hours 2. 10 hours</p>`,

      [{ q: "3:00 + 2 hours = ?", a: ["5:00"] },
       { q: "9:00 − 2 hours = ?", a: ["7:00"] },
       { q: "5:30 + 30 minutes = ?", a: ["6:00"] }]),

    D(5, "🎨", "Clock Poster",
      "Make a clock poster.",
      `<p class='big-emoji'>🎨 🕐</p>
       <p>Make a <b>"Time"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Time"</b></li>
         <li>Draw 4 clocks showing: o'clock, half past, quarter past, quarter to.</li>
         <li>Write the time under each clock.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the time on each clock.</p>`,

      [{ heading: "Exercise 49.1 — Draw.", items: [
          "O'clock",
          "Half past",
          "Quarter past",
          "Quarter to"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is half past 3?", a: ["3:30"] },
       { q: "What is quarter past 5?", a: ["5:15"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — SHAPES
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Shapes", days: [

    D(1, "⬜", "2D Shapes",
      "Identify 2D shapes.",
      `<p class='big-emoji'>⬜ ⚪ 🔺</p>
       <p><b>2D shapes</b> are flat shapes. They have length and width but no thickness.</p>

       <h3>Common 2D Shapes</h3>
       <ul>
         <li>⬜ <b>Square</b> — 4 equal sides</li>
         <li>▭ <b>Rectangle</b> — 4 sides (2 long, 2 short)</li>
         <li>🔺 <b>Triangle</b> — 3 sides</li>
         <li>⚪ <b>Circle</b> — round, no sides</li>
         <li>⭐ <b>Star</b> — 5 points</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one of each 2D shape. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many sides does a triangle have?</p>
       <p><b>Answer:</b> A triangle has <b>3 sides</b>.</p>`,

      [{ heading: "Exercise 50.1 — Name the shape.", items: [
          "A shape with 3 sides → ___",
          "A shape with 4 equal sides → ___",
          "A round shape → ___",
          "A shape with 5 points → ___",
          "A shape with 4 sides, 2 long and 2 short → ___"
        ]},
       { heading: "Exercise 50.2 — Draw.", items: [
          "Draw a square, triangle, circle, rectangle, and star."
        ]}],

      `<p><b>50.1:</b> 1. Triangle 2. Square 3. Circle 4. Star 5. Rectangle</p>`,

      [{ q: "How many sides does a triangle have?", a: ["3", "three"] },
       { q: "How many sides does a square have?", a: ["4", "four"] },
       { q: "What shape is round?", a: ["circle"] }]),

    D(2, "🧊", "3D Shapes",
      "Identify 3D shapes.",
      `<p class='big-emoji'>🧊 📦 ⚽</p>
       <p><b>3D shapes</b> are solid shapes. They have length, width, and height.</p>

       <h3>Common 3D Shapes</h3>
       <ul>
         <li>📦 <b>Cube</b> — 6 square faces</li>
         <li>📦 <b>Cuboid</b> — 6 rectangular faces</li>
         <li>⚽ <b>Sphere</b> — round like a ball</li>
         <li>🥫 <b>Cylinder</b> — like a tin</li>
         <li>🔺 <b>Cone</b> — like an ice-cream cone</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one of each 3D shape. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What shape is a ball?</p>
       <p><b>Answer:</b> A <b>sphere</b>.</p>`,

      [{ heading: "Exercise 51.1 — Name the shape.", items: [
          "A ball → ___",
          "A tin of milk → ___",
          "An ice-cream cone → ___",
          "A dice → ___",
          "A matchbox → ___"
        ]},
       { heading: "Exercise 51.2 — Draw.", items: [
          "Draw a cube, sphere, cylinder, and cone."
        ]}],

      `<p><b>51.1:</b> 1. Sphere 2. Cylinder 3. Cone 4. Cube 5. Cuboid</p>`,

      [{ q: "What shape is a ball?", a: ["sphere"] },
       { q: "What shape is a tin?", a: ["cylinder"] },
       { q: "What shape is a dice?", a: ["cube"] }]),

    D(3, "🪞", "Symmetry",
      "Identify lines of symmetry.",
      `<p class='big-emoji'>🪞 ✨</p>
       <p>A <b>line of symmetry</b> is a line that divides a shape into 2 equal halves that match.</p>

       <h3>Examples</h3>
       <ul>
         <li>A square has 4 lines of symmetry</li>
         <li>A rectangle has 2 lines of symmetry</li>
         <li>A circle has many lines of symmetry</li>
         <li>An equilateral triangle has 3 lines of symmetry</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a square and show its 4 lines of symmetry.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many lines of symmetry does a square have?</p>
       <p><b>Answer:</b> A square has <b>4 lines of symmetry</b>.</p>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "How many lines of symmetry in a square?",
          "How many lines of symmetry in a rectangle?",
          "How many lines of symmetry in a circle?",
          "How many lines of symmetry in an equilateral triangle?"
        ]},
       { heading: "Exercise 52.2 — Draw.", items: [
          "Draw a square and show its lines of symmetry.",
          "Draw a rectangle and show its lines of symmetry."
        ]}],

      `<p><b>52.1:</b> 1. 4 2. 2 3. Many 4. 3</p>`,

      [{ q: "How many lines of symmetry in a square?", a: ["4", "four"] },
       { q: "How many lines of symmetry in a rectangle?", a: ["2", "two"] }]),

    D(4, "🔷", "Patterns",
      "Continue patterns.",
      `<p class='big-emoji'>🔷 🔶 🔷</p>
       <p>A <b>pattern</b> is a repeated design or sequence.</p>

       <h3>Examples</h3>
       <ul>
         <li>🔴 🔵 🔴 🔵 🔴 ___ (next: 🔵)</li>
         <li>⭐ ⬜ ⭐ ⬜ ⭐ ___ (next: ⬜)</li>
         <li>1, 2, 3, 4, 5, ___ (next: 6)</li>
         <li>2, 4, 6, 8, ___ (next: 10)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a pattern using 2 shapes. Repeat it 4 times.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes next: 5, 10, 15, 20, ___?</p>
       <p><b>Answer:</b> <b>25</b> (add 5 each time).</p>`,

      [{ heading: "Exercise 53.1 — What comes next?", items: [
          "1, 2, 3, 4, ___",
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "10, 20, 30, 40, ___",
          "3, 6, 9, 12, ___"
        ]},
       { heading: "Exercise 53.2 — Draw the pattern.", items: [
          "🔴 🔵 🔴 🔵 ___",
          "⭐ ⬜ ⭐ ⬜ ___",
          "🔺 🟢 🔺 🟢 ___"
        ]}],

      `<p><b>53.1:</b> 1. 5 2. 10 3. 25 4. 50 5. 15</p>
       <p><b>53.2:</b> 1. 🔴 2. ⭐ 3. 🔺</p>`,

      [{ q: "What comes next: 2, 4, 6, 8, ___?", a: ["10"] },
       { q: "What comes next: 5, 10, 15, ___?", a: ["20"] }]),

    D(5, "🎨", "Shape Poster",
      "Make a shape poster.",
      `<p class='big-emoji'>🎨 ⬜ ⚪ 🔺</p>
       <p>Make a <b>"Shapes"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Shapes"</b></li>
         <li>Draw 5 2D shapes and 5 3D shapes.</li>
         <li>Label each shape.</li>
         <li>Show one line of symmetry.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Name each shape.</p>`,

      [{ heading: "Exercise 54.1 — Draw.", items: [
          "2D shapes: square, rectangle, triangle, circle, star",
          "3D shapes: cube, cuboid, sphere, cylinder, cone"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a 2D shape.", a: ["square", "circle", "triangle", "any"] },
       { q: "Name a 3D shape.", a: ["cube", "sphere", "cylinder", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW & TEST
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Measurement",
      "Review measurement.",
      `<p class='big-emoji'>🔁 📏</p>

       <h3>Review</h3>
       <ul>
         <li>Length: mm, cm, m, km</li>
         <li>Weight: g, kg</li>
         <li>Capacity: ml, L</li>
         <li>Time: s, min, h</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many cm in 3 m?</p>
       <p><b>Answer:</b> 3 × 100 = <b>300 cm</b>.</p>`,

      [{ heading: "Exercise 55.1 — Review.", items: [
          "1 m = ___ cm",
          "2 kg = ___ g",
          "1 L = ___ ml",
          "1 h = ___ min",
          "1 min = ___ s"
        ]},
       { heading: "Exercise 55.2 — Review.", items: [
          "Which is longer: 1 m or 50 cm?",
          "Which is heavier: 1 kg or 500 g?",
          "Which holds more: 1 L or 500 ml?"
        ]}],

      `<p><b>55.1:</b> 1. 100 2. 2000 3. 1000 4. 60 5. 60</p>
       <p><b>55.2:</b> 1. 1 m 2. 1 kg 3. 1 L</p>`,

      [{ q: "1 m = ___ cm", a: ["100"] },
       { q: "1 kg = ___ g", a: ["1000"] },
       { q: "1 L = ___ ml", a: ["1000"] }]),

    D(2, "🔁", "Review Time & Shapes",
      "Review time and shapes.",
      `<p class='big-emoji'>🔁 🕐 ⬜</p>

       <h3>Review</h3>
       <ul>
         <li>O'clock, half past, quarter past, quarter to</li>
         <li>2D and 3D shapes</li>
         <li>Symmetry</li>
         <li>Patterns</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What time is half past 4?</p>
       <p><b>Answer:</b> <b>4:30</b>.</p>`,

      [{ heading: "Exercise 56.1 — Review.", items: [
          "What time is 5:00?",
          "What time is half past 3?",
          "What time is quarter past 6?",
          "How many sides does a triangle have?",
          "What shape is a ball?"
        ]},
       { heading: "Exercise 56.2 — Review.", items: [
          "How many lines of symmetry in a square?",
          "What comes next: 2, 4, 6, 8, ___?",
          "What comes next: 10, 20, 30, ___?"
        ]}],

      `<p><b>56.1:</b> 1. Five o'clock 2. 3:30 3. 6:15 4. 3 5. Sphere</p>
       <p><b>56.2:</b> 1. 4 2. 10 3. 40</p>`,

      [{ q: "What is half past 3?", a: ["3:30"] },
       { q: "What shape is a ball?", a: ["sphere"] },
       { q: "What comes next: 2, 4, 6, ___?", a: ["8"] }]),

    D(3, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Today we practise for the monthly test.</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>1 m = ___ cm</li>
         <li>2 kg = ___ g</li>
         <li>1 L = ___ ml</li>
         <li>What time is half past 3?</li>
         <li>What time is quarter past 5?</li>
         <li>How many sides does a square have?</li>
         <li>What shape is a tin?</li>
         <li>How many lines of symmetry in a rectangle?</li>
         <li>What comes next: 5, 10, 15, ___?</li>
         <li>3:00 + 2 hours = ___</li>
       </ol>`,

      [{ heading: "Exercise 57.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. 100 2. 2000 3. 1000 4. 3:30 5. 5:15 6. 4 7. Cylinder 8. 2 9. 20 10. 5:00</p>`,

      [{ q: "1 m = ___ cm", a: ["100"] },
       { q: "What is half past 3?", a: ["3:30"] },
       { q: "What comes next: 5, 10, 15, ___?", a: ["20"] }]),

    D(4, "🔁", "Practice Test 2",
      "More practice.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>345 + 234 = ___</li>
         <li>579 − 234 = ___</li>
         <li>5 × 8 = ___</li>
         <li>12 ÷ 3 = ___</li>
         <li>Half of 20 = ___</li>
         <li>1/4 of 12 = ___</li>
         <li>GH₵20 + GH₵15 = ___</li>
         <li>Change from GH₵50 for GH₵35 item = ___</li>
         <li>3 × 10 = ___</li>
         <li>1 kg = ___ g</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. 579 2. 345 3. 40 4. 4 5. 10 6. 3 7. GH₵35 8. GH₵15 9. 30 10. 1000</p>`,

      [{ q: "345 + 234 = ?", a: ["579"] },
       { q: "12 ÷ 3 = ?", a: ["4"] },
       { q: "1 kg = ___ g", a: ["1000"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 40 marks.</p>

       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Measurement (10 marks)</li>
         <li>Part B — Time (10 marks)</li>
         <li>Part C — Shapes (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>

       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Measurement (10)",
          "Part B — Time (10)",
          "Part C — Shapes (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — DATA & GRAPHS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Data & Graphs", days: [

    D(1, "📊", "Tally Chart",
      "Make a tally chart.",
      `<p class='big-emoji'>📊 ✏️</p>
       <p>A <b>tally chart</b> uses marks to count things. Every 5th mark crosses the group.</p>

       <h3>Example</h3>
       <p>Favourite fruits in a class:</p>
       <ul>
         <li>Mango: |||| (4)</li>
         <li>Orange: |||| | (6)</li>
         <li>Banana: ||| (3)</li>
         <li>Apple: |||| || (7)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a tally chart for 5 things you like.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many tally marks for 5?</p>
       <p><b>Answer:</b> |||| (4 marks and 1 cross = 5).</p>`,

      [{ heading: "Exercise 59.1 — Count the tally.", items: [
          "|||| = ___",
          "|||| | = ___",
          "|||| || = ___",
          "|||| ||| = ___",
          "|||| |||| = ___"
        ]},
       { heading: "Exercise 59.2 — Make a tally chart.", items: [
          "Ask 5 friends their favourite colour. Make a tally chart."
        ]}],

      `<p><b>59.1:</b> 1. 4 2. 6 3. 7 4. 8 5. 9</p>`,

      [{ q: "How many in |||| | ?", a: ["6"] },
       { q: "How many in |||| ?", a: ["4", "5"] }]),

    D(2, "🖼️", "Pictogram",
      "Read a pictogram.",
      `<p class='big-emoji'>🖼️ 📊</p>
       <p>A <b>pictogram</b> uses pictures to show data. Each picture stands for a number.</p>

       <h3>Example</h3>
       <p>Favourite fruits (1 🍎 = 2 children):</p>
       <ul>
         <li>Mango: 🍎🍎🍎 = 6</li>
         <li>Orange: 🍎🍎 = 4</li>
         <li>Banana: 🍎🍎🍎🍎 = 8</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a pictogram for your tally chart.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> If 1 🍎 = 2, how many for 🍎🍎🍎?</p>
       <p><b>Answer:</b> 3 × 2 = <b>6</b>.</p>`,

      [{ heading: "Exercise 60.1 — Read the pictogram.", items: [
          "🍎 = 2. 🍎🍎🍎 = ___",
          "🍎 = 2. 🍎🍎 = ___",
          "🍎 = 2. 🍎🍎🍎🍎 = ___",
          "🍎 = 5. 🍎🍎 = ___",
          "🍎 = 5. 🍎🍎🍎 = ___"
        ]},
       { heading: "Exercise 60.2 — Draw.", items: [
          "Draw a pictogram for 3 fruits using 🍎 = 2."
        ]}],

      `<p><b>60.1:</b> 1. 6 2. 4 3. 8 4. 10 5. 15</p>`,

      [{ q: "If 🍎 = 2, what is 🍎🍎🍎?", a: ["6"] },
       { q: "If 🍎 = 5, what is 🍎🍎?", a: ["10"] }]),

    D(3, "📊", "Bar Chart",
      "Read a bar chart.",
      `<p class='big-emoji'>📊 📈</p>
       <p>A <b>bar chart</b> uses bars to show data. Taller bars mean more.</p>

       <h3>Example</h3>
       <p>Favourite fruits:</p>
       <ul>
         <li>Mango: ████ (4)</li>
         <li>Orange: ██████ (6)</li>
         <li>Banana: ███ (3)</li>
         <li>Apple: ███████ (7)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bar chart for your tally chart.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which fruit is the most popular?</p>
       <p><b>Answer:</b> Apple (7) is the most popular.</p>`,

      [{ heading: "Exercise 61.1 — Read the bar chart.", items: [
          "Mango: 4, Orange: 6, Banana: 3, Apple: 7",
          "Which fruit is the most popular?",
          "Which fruit is the least popular?",
          "How many more apples than bananas?",
          "How many children in total?"
        ]},
       { heading: "Exercise 61.2 — Draw.", items: [
          "Draw a bar chart for your tally chart."
        ]}],

      `<p><b>61.1:</b> 1. Apple 2. Banana 3. 7 − 3 = 4 4. 4+6+3+7 = 20</p>`,

      [{ q: "Which fruit is most popular?", a: ["apple"] },
       { q: "How many more apples than bananas?", a: ["4"] },
       { q: "Total number of children?", a: ["20"] }]),

    D(4, "❓", "Questions",
      "Answer questions from graphs.",
      `<p class='big-emoji'>❓ 📊</p>
       <p>We can ask and answer questions from charts and graphs.</p>

       <h3>Example</h3>
       <p>Using the bar chart: Mango 4, Orange 6, Banana 3, Apple 7</p>
       <ul>
         <li>Most popular? Apple</li>
         <li>Least popular? Banana</li>
         <li>Total children? 4+6+3+7 = 20</li>
         <li>Difference between orange and mango? 6 − 4 = 2</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many more oranges than mangoes?</p>
       <p><b>Answer:</b> 6 − 4 = <b>2</b>.</p>`,

      [{ heading: "Exercise 62.1 — Answer.", items: [
          "Most popular fruit?",
          "Least popular fruit?",
          "Total number of children?",
          "Difference between apples and bananas?",
          "Difference between oranges and mangoes?"
        ]},
       { heading: "Exercise 62.2 — Answer.", items: [
          "If 2 more children liked banana, what would the new total be?",
          "If 1 child changed from orange to mango, what would the new counts be?"
        ]}],

      `<p><b>62.1:</b> 1. Apple 2. Banana 3. 20 4. 4 5. 2</p>`,

      [{ q: "Most popular fruit?", a: ["apple"] },
       { q: "Total number of children?", a: ["20"] }]),

    D(5, "🎨", "Graph Poster",
      "Make a graph poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Make a <b>"Data & Graphs"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Data & Graphs"</b></li>
         <li>Draw a tally chart.</li>
         <li>Draw a pictogram.</li>
         <li>Draw a bar chart.</li>
         <li>Write one question and answer.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Ask a question about your graph.</p>`,

      [{ heading: "Exercise 63.1 — Draw.", items: [
          "Tally chart",
          "Pictogram",
          "Bar chart"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a tally chart?", a: ["counting with marks", "any"] },
       { q: "What is a bar chart?", a: ["bars showing data", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — TIMES TABLES
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Times Tables", days: [

    D(1, "✖️", "Table of 3",
      "Learn the 3× table.",
      `<p class='big-emoji'>✖️ 3️⃣</p>
       <p><b>3×1=3, 3×2=6, 3×3=9, 3×4=12, 3×5=15, 3×6=18, 3×7=21, 3×8=24, 3×9=27, 3×10=30</b></p>

       <h3>Pattern</h3>
       <p>Each answer is 3 more than the one before.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 groups of 4 dots. Write "3 × 4 = 12".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 3 × 7 = ?</p>
       <p><b>Answer:</b> 3 × 7 = <b>21</b>.</p>`,

      [{ heading: "Exercise 64.1 — Multiply.", items: [
          "3 × 1", "3 × 2", "3 × 3", "3 × 4", "3 × 5"
        ]},
       { heading: "Exercise 64.2 — Multiply.", items: [
          "3 × 6", "3 × 7", "3 × 8", "3 × 9", "3 × 10"
        ]},
       { heading: "Exercise 64.3 — Fill in the missing number.", items: [
          "3 × ___ = 15", "3 × ___ = 21", "3 × ___ = 27"
        ]}],

      `<p><b>64.1:</b> 1. 3 2. 6 3. 9 4. 12 5. 15</p>
       <p><b>64.2:</b> 1. 18 2. 21 3. 24 4. 27 5. 30</p>
       <p><b>64.3:</b> 1. 5 2. 7 3. 9</p>`,

      [{ q: "3 × 7 = ?", a: ["21"] },
       { q: "3 × 9 = ?", a: ["27"] },
       { q: "3 × 4 = ?", a: ["12"] }]),

    D(2, "✖️", "Table of 4",
      "Learn the 4× table.",
      `<p class='big-emoji'>✖️ 4️⃣</p>
       <p><b>4×1=4, 4×2=8, 4×3=12, 4×4=16, 4×5=20, 4×6=24, 4×7=28, 4×8=32, 4×9=36, 4×10=40</b></p>

       <h3>Pattern</h3>
       <p>Each answer is 4 more than the one before.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 groups of 5 dots. Write "4 × 5 = 20".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 4 × 8 = ?</p>
       <p><b>Answer:</b> 4 × 8 = <b>32</b>.</p>`,

      [{ heading: "Exercise 65.1 — Multiply.", items: [
          "4 × 1", "4 × 2", "4 × 3", "4 × 4", "4 × 5"
        ]},
       { heading: "Exercise 65.2 — Multiply.", items: [
          "4 × 6", "4 × 7", "4 × 8", "4 × 9", "4 × 10"
        ]},
       { heading: "Exercise 65.3 — Fill in the missing number.", items: [
          "4 × ___ = 20", "4 × ___ = 28", "4 × ___ = 36"
        ]}],

      `<p><b>65.1:</b> 1. 4 2. 8 3. 12 4. 16 5. 20</p>
       <p><b>65.2:</b> 1. 24 2. 28 3. 32 4. 36 5. 40</p>
       <p><b>65.3:</b> 1. 5 2. 7 3. 9</p>`,

      [{ q: "4 × 8 = ?", a: ["32"] },
       { q: "4 × 6 = ?", a: ["24"] },
       { q: "4 × 9 = ?", a: ["36"] }]),

    D(3, "✖️", "Table of 6",
      "Learn the 6× table.",
      `<p class='big-emoji'>✖️ 6️⃣</p>
       <p><b>6×1=6, 6×2=12, 6×3=18, 6×4=24, 6×5=30, 6×6=36, 6×7=42, 6×8=48, 6×9=54, 6×10=60</b></p>

       <h3>Pattern</h3>
       <p>Each answer is 6 more than the one before.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 6 groups of 4 dots. Write "6 × 4 = 24".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 6 × 7 = ?</p>
       <p><b>Answer:</b> 6 × 7 = <b>42</b>.</p>`,

      [{ heading: "Exercise 66.1 — Multiply.", items: [
          "6 × 1", "6 × 2", "6 × 3", "6 × 4", "6 × 5"
        ]},
       { heading: "Exercise 66.2 — Multiply.", items: [
          "6 × 6", "6 × 7", "6 × 8", "6 × 9", "6 × 10"
        ]},
       { heading: "Exercise 66.3 — Fill in the missing number.", items: [
          "6 × ___ = 30", "6 × ___ = 42", "6 × ___ = 54"
        ]}],

      `<p><b>66.1:</b> 1. 6 2. 12 3. 18 4. 24 5. 30</p>
       <p><b>66.2:</b> 1. 36 2. 42 3. 48 4. 54 5. 60</p>
       <p><b>66.3:</b> 1. 5 2. 7 3. 9</p>`,

      [{ q: "6 × 7 = ?", a: ["42"] },
       { q: "6 × 8 = ?", a: ["48"] },
       { q: "6 × 9 = ?", a: ["54"] }]),

    D(4, "✖️", "Practice",
      "Practise all tables.",
      `<p class='big-emoji'>✖️ 🏋️</p>
       <p>Today we practise the 2×, 3×, 4×, 5×, 6×, and 10× tables.</p>

       <h3>Quick Recall</h3>
       <ul>
         <li>2×7 = 14</li>
         <li>3×8 = 24</li>
         <li>4×6 = 24</li>
         <li>5×9 = 45</li>
         <li>6×7 = 42</li>
         <li>10×8 = 80</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 5 × 9 = ?</p>
       <p><b>Answer:</b> 5 × 9 = <b>45</b>.</p>`,

      [{ heading: "Exercise 67.1 — Multiply.", items: [
          "2 × 7", "3 × 8", "4 × 6", "5 × 9", "6 × 7"
        ]},
       { heading: "Exercise 67.2 — Multiply.", items: [
          "10 × 8", "2 × 9", "3 × 7", "4 × 8", "5 × 6"
        ]},
       { heading: "Exercise 67.3 — Mixed.", items: [
          "6 × 6", "3 × 9", "4 × 7", "5 × 8", "2 × 6"
        ]}],

      `<p><b>67.1:</b> 1. 14 2. 24 3. 24 4. 45 5. 42</p>
       <p><b>67.2:</b> 1. 80 2. 18 3. 21 4. 32 5. 30</p>
       <p><b>67.3:</b> 1. 36 2. 27 3. 28 4. 40 5. 12</p>`,

      [{ q: "5 × 9 = ?", a: ["45"] },
       { q: "6 × 7 = ?", a: ["42"] },
       { q: "4 × 8 = ?", a: ["32"] }]),

    D(5, "🎨", "Times Table Poster",
      "Make a times table poster.",
      `<p class='big-emoji'>🎨 ✖️</p>
       <p>Make a <b>"Times Tables"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Times Tables"</b></li>
         <li>Write the 2×, 3×, 4×, 5×, 6×, and 10× tables.</li>
         <li>Draw one example as groups of dots.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say one table from memory.</p>`,

      [{ heading: "Exercise 68.1 — Write all tables.", items: [
          "2× table", "3× table", "4× table", "5× table", "6× table", "10× table"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 6 × 7?", a: ["42"] },
       { q: "What is 4 × 9?", a: ["36"] },
       { q: "What is 3 × 8?", a: ["24"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — DIVISION PRACTICE
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Division Practice", days: [

    D(1, "➗", "÷2",
      "Divide by 2.",
      `<p class='big-emoji'>➗ 2️⃣</p>
       <p>Dividing by 2 is the same as finding <b>half</b>.</p>
       <p><b>8 ÷ 2 = 4</b> (half of 8 is 4).</p>

       <h3>Division Facts for 2</h3>
       <ul>
         <li>2 ÷ 2 = 1</li>
         <li>4 ÷ 2 = 2</li>
         <li>6 ÷ 2 = 3</li>
         <li>8 ÷ 2 = 4</li>
         <li>10 ÷ 2 = 5</li>
         <li>12 ÷ 2 = 6</li>
         <li>14 ÷ 2 = 7</li>
         <li>16 ÷ 2 = 8</li>
         <li>18 ÷ 2 = 9</li>
         <li>20 ÷ 2 = 10</li>
       </ul>`,

      [{ heading: "Exercise 69.1 — Divide.", items: [
          "4 ÷ 2", "6 ÷ 2", "8 ÷ 2", "10 ÷ 2", "12 ÷ 2"
        ]},
       { heading: "Exercise 69.2 — Divide.", items: [
          "14 ÷ 2", "16 ÷ 2", "18 ÷ 2", "20 ÷ 2", "24 ÷ 2"
        ]},
       { heading: "Exercise 69.3 — Word problems.", items: [
          "Share 12 sweets between 2 children. How many each?",
          "Share 18 oranges between 2 baskets. How many each?"
        ]}],

      `<p><b>69.1:</b> 1. 2 2. 3 3. 4 4. 5 5. 6</p>
       <p><b>69.2:</b> 1. 7 2. 8 3. 9 4. 10 5. 12</p>
       <p><b>69.3:</b> 1. 6 sweets 2. 9 oranges</p>`,

      [{ q: "8 ÷ 2 = ?", a: ["4"] },
       { q: "14 ÷ 2 = ?", a: ["7"] },
       { q: "20 ÷ 2 = ?", a: ["10"] }]),

    D(2, "➗", "÷5",
      "Divide by 5.",
      `<p class='big-emoji'>➗ 5️⃣</p>
       <p>Use the 5× table to help.</p>

       <h3>Division Facts for 5</h3>
       <ul>
         <li>5 ÷ 5 = 1</li>
         <li>10 ÷ 5 = 2</li>
         <li>15 ÷ 5 = 3</li>
         <li>20 ÷ 5 = 4</li>
         <li>25 ÷ 5 = 5</li>
         <li>30 ÷ 5 = 6</li>
         <li>35 ÷ 5 = 7</li>
         <li>40 ÷ 5 = 8</li>
         <li>45 ÷ 5 = 9</li>
         <li>50 ÷ 5 = 10</li>
       </ul>`,

      [{ heading: "Exercise 70.1 — Divide.", items: [
          "10 ÷ 5", "15 ÷ 5", "20 ÷ 5", "25 ÷ 5", "30 ÷ 5"
        ]},
       { heading: "Exercise 70.2 — Divide.", items: [
          "35 ÷ 5", "40 ÷ 5", "45 ÷ 5", "50 ÷ 5", "55 ÷ 5"
        ]},
       { heading: "Exercise 70.3 — Word problems.", items: [
          "Share 20 mangoes among 5 children. How many each?",
          "Group 30 pencils into packs of 5. How many packs?"
        ]}],

      `<p><b>70.1:</b> 1. 2 2. 3 3. 4 4. 5 5. 6</p>
       <p><b>70.2:</b> 1. 7 2. 8 3. 9 4. 10 5. 11</p>
       <p><b>70.3:</b> 1. 4 mangoes 2. 6 packs</p>`,

      [{ q: "20 ÷ 5 = ?", a: ["4"] },
       { q: "35 ÷ 5 = ?", a: ["7"] },
       { q: "45 ÷ 5 = ?", a: ["9"] }]),

    D(3, "➗", "÷10",
      "Divide by 10.",
      `<p class='big-emoji'>➗ 🔟</p>
       <p>When you divide by 10, remove the zero.</p>
       <p><b>40 ÷ 10 = 4</b>.</p>

       <h3>Division Facts for 10</h3>
       <ul>
         <li>10 ÷ 10 = 1</li>
         <li>20 ÷ 10 = 2</li>
         <li>30 ÷ 10 = 3</li>
         <li>40 ÷ 10 = 4</li>
         <li>50 ÷ 10 = 5</li>
         <li>60 ÷ 10 = 6</li>
         <li>70 ÷ 10 = 7</li>
         <li>80 ÷ 10 = 8</li>
         <li>90 ÷ 10 = 9</li>
         <li>100 ÷ 10 = 10</li>
       </ul>`,

      [{ heading: "Exercise 71.1 — Divide.", items: [
          "10 ÷ 10", "20 ÷ 10", "30 ÷ 10", "40 ÷ 10", "50 ÷ 10"
        ]},
       { heading: "Exercise 71.2 — Divide.", items: [
          "60 ÷ 10", "70 ÷ 10", "80 ÷ 10", "90 ÷ 10", "100 ÷ 10"
        ]},
       { heading: "Exercise 71.3 — Word problems.", items: [
          "Share 30 eggs among 10 boxes. How many each?",
          "Group 50 books into shelves of 10. How many shelves?"
        ]}],

      `<p><b>71.1:</b> 1. 1 2. 2 3. 3 4. 4 5. 5</p>
       <p><b>71.2:</b> 1. 6 2. 7 3. 8 4. 9 5. 10</p>
       <p><b>71.3:</b> 1. 3 eggs 2. 5 shelves</p>`,

      [{ q: "40 ÷ 10 = ?", a: ["4"] },
       { q: "80 ÷ 10 = ?", a: ["8"] },
       { q: "100 ÷ 10 = ?", a: ["10"] }]),

    D(4, "📝", "Word Problems",
      "Solve division word problems.",
      `<p class='big-emoji'>📝 ➗</p>
       <p>Read carefully. Decide whether to <b>share</b> or <b>group</b>.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Share 24 sweets among 6 children. How many each?</p>
       <p><b>Answer:</b> 24 ÷ 6 = <b>4 sweets each</b>.</p>`,

      [{ heading: "Exercise 72.1 — Solve.", items: [
          "Share 12 sweets among 3 children. How many each?",
          "Share 20 mangoes among 5 children. How many each?",
          "Group 18 oranges into bags of 6. How many bags?",
          "Group 30 pencils into packs of 10. How many packs?",
          "Share 24 eggs among 4 boxes. How many each?"
        ]},
       { heading: "Exercise 72.2 — Solve.", items: [
          "Share 35 books among 5 shelves. How many each?",
          "Group 40 pupils into rows of 10. How many rows?"
        ]}],

      `<p><b>72.1:</b> 1. 4 2. 4 3. 3 4. 3 5. 6</p>
       <p><b>72.2:</b> 1. 7 books 2. 4 rows</p>`,

      [{ q: "12 ÷ 3 = ?", a: ["4"] },
       { q: "18 ÷ 6 = ?", a: ["3"] },
       { q: "24 ÷ 4 = ?", a: ["6"] }]),

    D(5, "🎨", "Division Practice Poster",
      "Make a division poster.",
      `<p class='big-emoji'>🎨 ➗</p>
       <p>Make a <b>"Division"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Division"</b></li>
         <li>Show the ÷2, ÷5, and ÷10 facts.</li>
         <li>Draw one example with pictures.</li>
         <li>Write one word problem.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 73.1 — Draw.", items: [
          "÷2 facts", "÷5 facts", "÷10 facts"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 20 ÷ 5?", a: ["4"] },
       { q: "What is 50 ÷ 10?", a: ["5"] },
       { q: "What is 12 ÷ 2?", a: ["6"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW & TEST
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Data",
      "Review data and graphs.",
      `<p class='big-emoji'>🔁 📊</p>

       <h3>Review</h3>
       <ul>
         <li>Tally charts</li>
         <li>Pictograms</li>
         <li>Bar charts</li>
         <li>Answering questions from graphs</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Mango 4, Orange 6, Banana 3, Apple 7. How many children in total?</p>
       <p><b>Answer:</b> 4 + 6 + 3 + 7 = <b>20 children</b>.</p>`,

      [{ heading: "Exercise 74.1 — Review.", items: [
          "|||| ||| = ___",
          "🍎 = 2. 🍎🍎🍎 = ___",
          "Mango 4, Orange 6, Banana 3, Apple 7. Most popular?",
          "Total children?",
          "Difference between apples and bananas?"
        ]},
       { heading: "Exercise 74.2 — Review.", items: [
          "Draw a tally chart for 5 colours.",
          "Draw a bar chart for your tally."
        ]}],

      `<p><b>74.1:</b> 1. 8 2. 6 3. Apple 4. 20 5. 4</p>`,

      [{ q: "Most popular fruit?", a: ["apple"] },
       { q: "Total children?", a: ["20"] }]),

    D(2, "🔁", "Review Times Tables",
      "Review times tables.",
      `<p class='big-emoji'>🔁 ✖️</p>

       <h3>Review</h3>
       <ul>
         <li>2×, 3×, 4×, 5×, 6×, 10× tables</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 6 × 8 = ?</p>
       <p><b>Answer:</b> 6 × 8 = <b>48</b>.</p>`,

      [{ heading: "Exercise 75.1 — Multiply.", items: [
          "2 × 7", "3 × 8", "4 × 6", "5 × 9", "6 × 7"
        ]},
       { heading: "Exercise 75.2 — Multiply.", items: [
          "10 × 8", "3 × 9", "4 × 7", "5 × 8", "6 × 6"
        ]}],

      `<p><b>75.1:</b> 1. 14 2. 24 3. 24 4. 45 5. 42</p>
       <p><b>75.2:</b> 1. 80 2. 27 3. 28 4. 40 5. 36</p>`,

      [{ q: "6 × 8 = ?", a: ["48"] },
       { q: "4 × 7 = ?", a: ["28"] },
       { q: "3 × 9 = ?", a: ["27"] }]),

    D(3, "🔁", "Review Division",
      "Review division.",
      `<p class='big-emoji'>🔁 ➗</p>

       <h3>Review</h3>
       <ul>
         <li>÷2, ÷5, ÷10</li>
         <li>Sharing and grouping</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 36 ÷ 6 = ?</p>
       <p><b>Answer:</b> 36 ÷ 6 = <b>6</b>.</p>`,

      [{ heading: "Exercise 76.1 — Divide.", items: [
          "12 ÷ 2", "20 ÷ 5", "40 ÷ 10", "18 ÷ 2", "35 ÷ 5"
        ]},
       { heading: "Exercise 76.2 — Divide.", items: [
          "50 ÷ 10", "24 ÷ 2", "45 ÷ 5", "80 ÷ 10", "36 ÷ 6"
        ]}],

      `<p><b>76.1:</b> 1. 6 2. 4 3. 4 4. 9 5. 7</p>
       <p><b>76.2:</b> 1. 5 2. 12 3. 9 4. 8 5. 6</p>`,

      [{ q: "36 ÷ 6 = ?", a: ["6"] },
       { q: "45 ÷ 5 = ?", a: ["9"] },
       { q: "80 ÷ 10 = ?", a: ["8"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>|||| ||| = ___</li>
         <li>🍎 = 2. 🍎🍎🍎 = ___</li>
         <li>6 × 8 = ___</li>
         <li>4 × 7 = ___</li>
         <li>3 × 9 = ___</li>
         <li>36 ÷ 6 = ___</li>
         <li>45 ÷ 5 = ___</li>
         <li>80 ÷ 10 = ___</li>
         <li>Mango 4, Orange 6. Difference? ___</li>
         <li>Total of 4 + 6 + 3 + 7 = ___</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. 8 2. 6 3. 48 4. 28 5. 27 6. 6 7. 9 8. 8 9. 2 10. 20</p>`,

      [{ q: "6 × 8 = ?", a: ["48"] },
       { q: "36 ÷ 6 = ?", a: ["6"] },
       { q: "Total 4+6+3+7 = ?", a: ["20"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 40 marks.</p>

       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Data & Graphs (10 marks)</li>
         <li>Part B — Times Tables (10 marks)</li>
         <li>Part C — Division (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>

       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Data & Graphs (10)",
          "Part B — Times Tables (10)",
          "Part C — Division (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — DECIMALS
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Decimals", days: [

    D(1, "🔢", "Tenths",
      "Understand tenths.",
      `<p class='big-emoji'>🔢 .1</p>
       <p>When we divide a whole into <b>10 equal parts</b>, each part is <b>one tenth</b>.</p>
       <p>We write one tenth as <b>0.1</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>1/10 = 0.1</li>
         <li>3/10 = 0.3</li>
         <li>7/10 = 0.7</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a strip divided into 10 equal parts. Colour 3 parts. Write "0.3".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 5/10 as a decimal?</p>
       <p><b>Answer:</b> 5/10 = <b>0.5</b>.</p>`,

      [{ heading: "Exercise 78.1 — Write as a decimal.", items: [
          "1/10", "2/10", "3/10", "5/10", "7/10"
        ]},
       { heading: "Exercise 78.2 — Write as a fraction.", items: [
          "0.1", "0.4", "0.6", "0.8", "0.9"
        ]},
       { heading: "Exercise 78.3 — Compare.", items: [
          "0.3 ___ 0.5", "0.7 ___ 0.2", "0.6 ___ 0.6"
        ]}],

      `<p><b>78.1:</b> 1. 0.1 2. 0.2 3. 0.3 4. 0.5 5. 0.7</p>
       <p><b>78.2:</b> 1. 1/10 2. 4/10 3. 6/10 4. 8/10 5. 9/10</p>
       <p><b>78.3:</b> 1. &lt; 2. &gt; 3. =</p>`,

      [{ q: "What is 5/10 as a decimal?", a: ["0.5"] },
       { q: "What is 0.7 as a fraction?", a: ["7/10"] },
       { q: "Which is bigger: 0.3 or 0.5?", a: ["0.5"] }]),

    D(2, "🔢", "Hundredths",
      "Understand hundredths.",
      `<p class='big-emoji'>🔢 .01</p>
       <p>When we divide a whole into <b>100 equal parts</b>, each part is <b>one hundredth</b>.</p>
       <p>We write one hundredth as <b>0.01</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>1/100 = 0.01</li>
         <li>25/100 = 0.25</li>
         <li>50/100 = 0.50 = 0.5</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 10×10 grid. Colour 25 squares. Write "0.25".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 75/100 as a decimal?</p>
       <p><b>Answer:</b> 75/100 = <b>0.75</b>.</p>`,

      [{ heading: "Exercise 79.1 — Write as a decimal.", items: [
          "1/100", "10/100", "25/100", "50/100", "75/100"
        ]},
       { heading: "Exercise 79.2 — Write as a fraction.", items: [
          "0.01", "0.10", "0.30", "0.60", "0.90"
        ]},
       { heading: "Exercise 79.3 — Compare.", items: [
          "0.25 ___ 0.50", "0.75 ___ 0.25", "0.50 ___ 0.5"
        ]}],

      `<p><b>79.1:</b> 1. 0.01 2. 0.10 3. 0.25 4. 0.50 5. 0.75</p>
       <p><b>79.2:</b> 1. 1/100 2. 10/100 3. 30/100 4. 60/100 5. 90/100</p>
       <p><b>79.3:</b> 1. &lt; 2. &gt; 3. =</p>`,

      [{ q: "What is 25/100 as a decimal?", a: ["0.25"] },
       { q: "What is 0.75 as a fraction?", a: ["75/100"] },
       { q: "Which is bigger: 0.25 or 0.50?", a: ["0.50"] }]),

    D(3, "➕", "Add Decimals",
      "Add decimals.",
      `<p class='big-emoji'>➕ .</p>
       <p>Line up the decimal points and add.</p>

       <h3>Worked Example</h3>
       <p><b>0.3 + 0.4 = ?</b></p>
       <ul>
         <li>3 tenths + 4 tenths = 7 tenths</li>
         <li>Answer: <b>0.7</b></li>
       </ul>

       <h3>More Examples</h3>
       <ul>
         <li>0.25 + 0.30 = 0.55</li>
         <li>0.10 + 0.20 = 0.30</li>
       </ul>`,

      [{ heading: "Exercise 80.1 — Add.", items: [
          "0.3 + 0.4", "0.5 + 0.2", "0.6 + 0.3", "0.1 + 0.7", "0.4 + 0.4"
        ]},
       { heading: "Exercise 80.2 — Add.", items: [
          "0.25 + 0.30", "0.10 + 0.20", "0.50 + 0.25", "0.15 + 0.15", "0.40 + 0.40"
        ]},
       { heading: "Exercise 80.3 — Word problems.", items: [
          "Ama has 0.5 kg of rice. She buys 0.3 kg more. Total?",
          "Kojo has 0.25 L of water. He adds 0.25 L. Total?"
        ]}],

      `<p><b>80.1:</b> 1. 0.7 2. 0.7 3. 0.9 4. 0.8 5. 0.8</p>
       <p><b>80.2:</b> 1. 0.55 2. 0.30 3. 0.75 4. 0.30 5. 0.80</p>
       <p><b>80.3:</b> 1. 0.8 kg 2. 0.50 L</p>`,

      [{ q: "0.3 + 0.4 = ?", a: ["0.7"] },
       { q: "0.25 + 0.30 = ?", a: ["0.55"] },
       { q: "0.5 + 0.2 = ?", a: ["0.7"] }]),

    D(4, "➖", "Subtract Decimals",
      "Subtract decimals.",
      `<p class='big-emoji'>➖ .</p>
       <p>Line up the decimal points and subtract.</p>

       <h3>Worked Example</h3>
       <p><b>0.7 − 0.3 = ?</b></p>
       <ul>
         <li>7 tenths − 3 tenths = 4 tenths</li>
         <li>Answer: <b>0.4</b></li>
       </ul>

       <h3>More Examples</h3>
       <ul>
         <li>0.50 − 0.25 = 0.25</li>
         <li>0.90 − 0.40 = 0.50</li>
       </ul>`,

      [{ heading: "Exercise 81.1 — Subtract.", items: [
          "0.7 − 0.3", "0.9 − 0.5", "0.8 − 0.2", "0.6 − 0.4", "0.5 − 0.1"
        ]},
       { heading: "Exercise 81.2 — Subtract.", items: [
          "0.50 − 0.25", "0.75 − 0.50", "0.90 − 0.40", "0.60 − 0.30", "0.80 − 0.20"
        ]},
       { heading: "Exercise 81.3 — Word problems.", items: [
          "Ama had 0.8 kg of sugar. She used 0.3 kg. How much left?",
          "Kojo had 0.75 L of juice. He drank 0.25 L. How much left?"
        ]}],

      `<p><b>81.1:</b> 1. 0.4 2. 0.4 3. 0.6 4. 0.2 5. 0.4</p>
       <p><b>81.2:</b> 1. 0.25 2. 0.25 3. 0.50 4. 0.30 5. 0.60</p>
       <p><b>81.3:</b> 1. 0.5 kg 2. 0.50 L</p>`,

      [{ q: "0.7 − 0.3 = ?", a: ["0.4"] },
       { q: "0.50 − 0.25 = ?", a: ["0.25"] },
       { q: "0.9 − 0.5 = ?", a: ["0.4"] }]),

    D(5, "🎨", "Decimal Poster",
      "Make a decimal poster.",
      `<p class='big-emoji'>🎨 🔢</p>
       <p>Make a <b>"Decimals"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Decimals"</b></li>
         <li>Draw tenths and hundredths grids.</li>
         <li>Write the decimal and fraction for each.</li>
         <li>Show one addition and one subtraction.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the decimal for each picture.</p>`,

      [{ heading: "Exercise 82.1 — Draw.", items: [
          "Tenths grid — 0.3",
          "Hundredths grid — 0.25",
          "Addition — 0.3 + 0.4",
          "Subtraction — 0.7 − 0.3"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 0.25 as a fraction?", a: ["25/100"] },
       { q: "0.3 + 0.4 = ?", a: ["0.7"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — PERCENTAGES
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Percentages", days: [

    D(1, "💯", "What is %?",
      "Understand percentages.",
      `<p class='big-emoji'>💯 %</p>
       <p><b>Percent (%)</b> means <b>out of 100</b>.</p>
       <p>50% means 50 out of 100. It is the same as 1/2.</p>

       <h3>Examples</h3>
       <ul>
         <li>100% = the whole</li>
         <li>50% = half</li>
         <li>25% = a quarter</li>
         <li>10% = one tenth</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a 10×10 grid. Colour 50 squares. Write "50%".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does 25% mean?</p>
       <p><b>Answer:</b> 25% means <b>25 out of 100</b>, which is the same as 1/4.</p>`,

      [{ heading: "Exercise 83.1 — Say.", items: [
          "What does 100% mean?",
          "What does 50% mean?",
          "What does 25% mean?",
          "What does 10% mean?"
        ]},
       { heading: "Exercise 83.2 — Match.", items: [
          "50% → ___ (1/2, 1/4, 1/10)",
          "25% → ___ (1/2, 1/4, 1/10)",
          "10% → ___ (1/2, 1/4, 1/10)"
        ]}],

      `<p><b>83.1:</b> 1. Whole 2. Half 3. Quarter 4. One tenth</p>
       <p><b>83.2:</b> 1. 1/2 2. 1/4 3. 1/10</p>`,

      [{ q: "What does 50% mean?", a: ["half", "1/2"] },
       { q: "What does 25% mean?", a: ["quarter", "1/4"] },
       { q: "What does 10% mean?", a: ["one tenth", "1/10"] }]),

    D(2, "💯", "50%",
      "Find 50% of a number.",
      `<p class='big-emoji'>💯 5️⃣0️⃣</p>
       <p>50% means <b>half</b>. To find 50% of a number, <b>divide by 2</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>50% of 10 = 10 ÷ 2 = 5</li>
         <li>50% of 20 = 20 ÷ 2 = 10</li>
         <li>50% of 50 = 50 ÷ 2 = 25</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 objects. Colour 50% of them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 50% of 30?</p>
       <p><b>Answer:</b> 30 ÷ 2 = <b>15</b>.</p>`,

      [{ heading: "Exercise 84.1 — Find 50%.", items: [
          "50% of 10", "50% of 20", "50% of 40", "50% of 60", "50% of 100"
        ]},
       { heading: "Exercise 84.2 — Find 50%.", items: [
          "50% of 8", "50% of 12", "50% of 16", "50% of 18", "50% of 50"
        ]}],

      `<p><b>84.1:</b> 1. 5 2. 10 3. 20 4. 30 5. 50</p>
       <p><b>84.2:</b> 1. 4 2. 6 3. 8 4. 9 5. 25</p>`,

      [{ q: "50% of 20 = ?", a: ["10"] },
       { q: "50% of 50 = ?", a: ["25"] },
       { q: "50% of 100 = ?", a: ["50"] }]),

    D(3, "💯", "25%",
      "Find 25% of a number.",
      `<p class='big-emoji'>💯 2️⃣5️⃣</p>
       <p>25% means <b>a quarter</b>. To find 25% of a number, <b>divide by 4</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>25% of 8 = 8 ÷ 4 = 2</li>
         <li>25% of 12 = 12 ÷ 4 = 3</li>
         <li>25% of 20 = 20 ÷ 4 = 5</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 12 objects. Colour 25% of them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 25% of 40?</p>
       <p><b>Answer:</b> 40 ÷ 4 = <b>10</b>.</p>`,

      [{ heading: "Exercise 85.1 — Find 25%.", items: [
          "25% of 8", "25% of 12", "25% of 16", "25% of 20", "25% of 40"
        ]},
       { heading: "Exercise 85.2 — Find 25%.", items: [
          "25% of 4", "25% of 24", "25% of 28", "25% of 32", "25% of 100"
        ]}],

      `<p><b>85.1:</b> 1. 2 2. 3 3. 4 4. 5 5. 10</p>
       <p><b>85.2:</b> 1. 1 2. 6 3. 7 4. 8 5. 25</p>`,

      [{ q: "25% of 8 = ?", a: ["2"] },
       { q: "25% of 20 = ?", a: ["5"] },
       { q: "25% of 100 = ?", a: ["25"] }]),

    D(4, "💯", "10%",
      "Find 10% of a number.",
      `<p class='big-emoji'>💯 1️⃣0️⃣</p>
       <p>10% means <b>one tenth</b>. To find 10% of a number, <b>divide by 10</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>10% of 20 = 20 ÷ 10 = 2</li>
         <li>10% of 50 = 50 ÷ 10 = 5</li>
         <li>10% of 100 = 100 ÷ 10 = 10</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 10 objects. Colour 10% of them (1 object).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 10% of 80?</p>
       <p><b>Answer:</b> 80 ÷ 10 = <b>8</b>.</p>`,

      [{ heading: "Exercise 86.1 — Find 10%.", items: [
          "10% of 10", "10% of 20", "10% of 30", "10% of 40", "10% of 50"
        ]},
       { heading: "Exercise 86.2 — Find 10%.", items: [
          "10% of 60", "10% of 70", "10% of 80", "10% of 90", "10% of 100"
        ]}],

      `<p><b>86.1:</b> 1. 1 2. 2 3. 3 4. 4 5. 5</p>
       <p><b>86.2:</b> 1. 6 2. 7 3. 8 4. 9 5. 10</p>`,

      [{ q: "10% of 20 = ?", a: ["2"] },
       { q: "10% of 50 = ?", a: ["5"] },
       { q: "10% of 100 = ?", a: ["10"] }]),

    D(5, "🎨", "Percentage Poster",
      "Make a percentage poster.",
      `<p class='big-emoji'>🎨 💯</p>
       <p>Make a <b>"Percentages"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Percentages"</b></li>
         <li>Draw a 10×10 grid and colour 50%.</li>
         <li>Draw a grid and colour 25%.</li>
         <li>Draw a grid and colour 10%.</li>
         <li>Write the fraction for each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each percentage.</p>`,

      [{ heading: "Exercise 87.1 — Draw.", items: [
          "50%", "25%", "10%"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is 50% of 20?", a: ["10"] },
       { q: "What is 25% of 20?", a: ["5"] },
       { q: "What is 10% of 20?", a: ["2"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — MONEY PROBLEMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Money Problems", days: [

    D(1, "🛒", "Shopping",
      "Solve shopping problems.",
      `<p class='big-emoji'>🛒 💰</p>
       <p>When you buy more than one item, <b>multiply</b>. When you buy different items, <b>add</b>.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> You buy 3 pens at GH₵2 each and 1 book at GH₵5. Total?</p>
       <p><b>Answer:</b> (3 × 2) + 5 = 6 + 5 = <b>GH₵11</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>2 items at GH₵10 each = GH₵20</li>
         <li>GH₵20 + GH₵15 = GH₵35</li>
       </ul>`,

      [{ heading: "Exercise 88.1 — Solve.", items: [
          "3 pens at GH₵2 each = ___",
          "2 books at GH₵5 each = ___",
          "4 pencils at GH₵3 each = ___",
          "3 pens at GH₵2 + 1 book at GH₵5 = ___",
          "2 books at GH₵5 + 4 pencils at GH₵3 = ___"
        ]},
       { heading: "Exercise 88.2 — Word problems.", items: [
          "You buy 5 exercise books at GH₵8 each. How much in total?",
          "You buy 3 pens at GH₵2 and 2 books at GH₵5. Total?"
        ]}],

      `<p><b>88.1:</b> 1. GH₵6 2. GH₵10 3. GH₵12 4. GH₵11 5. GH₵22</p>
       <p><b>88.2:</b> 1. GH₵40 2. GH₵16</p>`,

      [{ q: "3 pens at GH₵2 each = ?", a: ["6", "GH₵6"] },
       { q: "2 books at GH₵5 each = ?", a: ["10", "GH₵10"] },
       { q: "3 pens at GH₵2 + 1 book at GH₵5 = ?", a: ["11", "GH₵11"] }]),

    D(2, "📈", "Profit & Loss",
      "Understand profit and loss.",
      `<p class='big-emoji'>📈 📉</p>
       <p><b>Profit</b> = Selling price − Cost price (when you sell for more).</p>
       <p><b>Loss</b> = Cost price − Selling price (when you sell for less).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> You buy for GH₵10 and sell for GH₵15. Profit or loss?</p>
       <p><b>Answer:</b> 15 − 10 = <b>GH₵5 profit</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>Buy GH₵20, sell GH₵25 → GH₵5 profit</li>
         <li>Buy GH₵20, sell GH₵15 → GH₵5 loss</li>
       </ul>`,

      [{ heading: "Exercise 89.1 — Profit or loss?", items: [
          "Buy GH₵10, sell GH₵15 → ___",
          "Buy GH₵20, sell GH₵25 → ___",
          "Buy GH₵20, sell GH₵15 → ___",
          "Buy GH₵30, sell GH₵40 → ___",
          "Buy GH₵50, sell GH₵45 → ___"
        ]},
       { heading: "Exercise 89.2 — Calculate.", items: [
          "Buy GH₵15, sell GH₵20. Profit?",
          "Buy GH₵25, sell GH₵20. Loss?"
        ]}],

      `<p><b>89.1:</b> 1. GH₵5 profit 2. GH₵5 profit 3. GH₵5 loss 4. GH₵10 profit 5. GH₵5 loss</p>
       <p><b>89.2:</b> 1. GH₵5 profit 2. GH₵5 loss</p>`,

      [{ q: "Buy GH₵10, sell GH₵15. Profit or loss?", a: ["profit", "5", "GH₵5 profit"] },
       { q: "Buy GH₵20, sell GH₵15. Profit or loss?", a: ["loss", "5", "GH₵5 loss"] }]),

    D(3, "🏦", "Saving",
      "Understand saving.",
      `<p class='big-emoji'>🏦 💰</p>
       <p><b>Saving</b> means keeping money to use later.</p>

       <h3>Why Save?</h3>
       <ul>
         <li>To buy something you want.</li>
         <li>For emergencies.</li>
         <li>To help others.</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> You save GH₵2 every day. How much in 5 days?</p>
       <p><b>Answer:</b> 5 × 2 = <b>GH₵10</b>.</p>`,

      [{ heading: "Exercise 90.1 — Solve.", items: [
          "Save GH₵2 a day for 5 days = ___",
          "Save GH₵5 a day for 4 days = ___",
          "Save GH₵10 a week for 3 weeks = ___",
          "Save GH₵1 a day for 10 days = ___",
          "Save GH₵5 a day for 10 days = ___"
        ]},
       { heading: "Exercise 90.2 — Word problems.", items: [
          "Ama saves GH₵3 every day. How much in 7 days?",
          "Kojo saves GH₵10 every week. How much in 5 weeks?"
        ]}],

      `<p><b>90.1:</b> 1. GH₵10 2. GH₵20 3. GH₵30 4. GH₵10 5. GH₵50</p>
       <p><b>90.2:</b> 1. GH₵21 2. GH₵50</p>`,

      [{ q: "Save GH₵2 a day for 5 days = ?", a: ["10", "GH₵10"] },
       { q: "Save GH₵5 a day for 4 days = ?", a: ["20", "GH₵20"] }]),

    D(4, "📊", "Budgeting",
      "Make a simple budget.",
      `<p class='big-emoji'>📊 💰</p>
       <p>A <b>budget</b> is a plan for how to spend your money.</p>

       <h3>Example Budget</h3>
       <ul>
         <li>Income: GH₵50</li>
         <li>Food: GH₵20</li>
         <li>Transport: GH₵10</li>
         <li>Savings: GH₵15</li>
         <li>Other: GH₵5</li>
       </ul>
       <p>Total spent: 20 + 10 + 15 + 5 = GH₵50 ✓</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> If you have GH₵100 and spend GH₵40, how much is left?</p>
       <p><b>Answer:</b> 100 − 40 = <b>GH₵60</b>.</p>`,

      [{ heading: "Exercise 91.1 — Solve.", items: [
          "You have GH₵100. Spend GH₵40. Left?",
          "You have GH₵200. Spend GH₵150. Left?",
          "You have GH₵50. Spend GH₵20. Left?",
          "You have GH₵80. Spend GH₵30. Left?",
          "You have GH₵100. Spend GH₵60. Left?"
        ]},
       { heading: "Exercise 91.2 — Make a budget.", items: [
          "Income GH₵50. Plan how to spend it."
        ]}],

      `<p><b>91.1:</b> 1. GH₵60 2. GH₵50 3. GH₵30 4. GH₵50 5. GH₵40</p>`,

      [{ q: "GH₵100 − GH₵40 = ?", a: ["60", "GH₵60"] },
       { q: "GH₵50 − GH₵20 = ?", a: ["30", "GH₵30"] }]),

    D(5, "🎨", "Money Poster",
      "Make a money poster.",
      `<p class='big-emoji'>🎨 💰</p>
       <p>Make a <b>"Money Problems"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Money Problems"</b></li>
         <li>Draw a shopping problem.</li>
         <li>Draw a profit/loss problem.</li>
         <li>Draw a saving problem.</li>
         <li>Draw a budget.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one problem.</p>`,

      [{ heading: "Exercise 92.1 — Draw.", items: [
          "Shopping: 3 pens at GH₵2 each",
          "Profit: Buy GH₵10, sell GH₵15",
          "Saving: GH₵2 a day for 5 days",
          "Budget: GH₵50 income"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Buy GH₵10, sell GH₵15. Profit?", a: ["5", "GH₵5"] },
       { q: "GH₵100 − GH₵40 = ?", a: ["60", "GH₵60"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW & TEST
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Decimals",
      "Review decimals.",
      `<p class='big-emoji'>🔁 🔢</p>

       <h3>Review</h3>
       <ul>
         <li>Tenths and hundredths</li>
         <li>Adding and subtracting decimals</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 0.3 + 0.4 = ?</p>
       <p><b>Answer:</b> 0.3 + 0.4 = <b>0.7</b>.</p>`,

      [{ heading: "Exercise 93.1 — Review.", items: [
          "0.5 as a fraction = ___",
          "0.25 as a fraction = ___",
          "0.3 + 0.4 = ___",
          "0.7 − 0.3 = ___",
          "0.50 − 0.25 = ___"
        ]},
       { heading: "Exercise 93.2 — Review.", items: [
          "Which is bigger: 0.5 or 0.3?",
          "Which is smaller: 0.25 or 0.50?",
          "0.25 + 0.25 = ___"
        ]}],

      `<p><b>93.1:</b> 1. 5/10 2. 25/100 3. 0.7 4. 0.4 5. 0.25</p>
       <p><b>93.2:</b> 1. 0.5 2. 0.25 3. 0.50</p>`,

      [{ q: "0.3 + 0.4 = ?", a: ["0.7"] },
       { q: "0.5 as a fraction = ?", a: ["5/10", "1/2"] }]),

    D(2, "🔁", "Review Percentages",
      "Review percentages.",
      `<p class='big-emoji'>🔁 💯</p>

       <h3>Review</h3>
       <ul>
         <li>50%, 25%, 10%</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> 50% of 40 = ?</p>
       <p><b>Answer:</b> 40 ÷ 2 = <b>20</b>.</p>`,

      [{ heading: "Exercise 94.1 — Review.", items: [
          "50% of 20 = ___",
          "25% of 20 = ___",
          "10% of 20 = ___",
          "50% of 100 = ___",
          "25% of 100 = ___"
        ]},
       { heading: "Exercise 94.2 — Review.", items: [
          "10% of 100 = ___",
          "50% of 50 = ___",
          "25% of 40 = ___"
        ]}],

      `<p><b>94.1:</b> 1. 10 2. 5 3. 2 4. 50 5. 25</p>
       <p><b>94.2:</b> 1. 10 2. 25 3. 10</p>`,

      [{ q: "50% of 20 = ?", a: ["10"] },
       { q: "25% of 20 = ?", a: ["5"] },
       { q: "10% of 100 = ?", a: ["10"] }]),

    D(3, "🔁", "Review Money",
      "Review money problems.",
      `<p class='big-emoji'>🔁 💰</p>

       <h3>Review</h3>
       <ul>
         <li>Shopping, profit/loss, saving, budgeting</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Buy GH₵10, sell GH₵15. Profit?</p>
       <p><b>Answer:</b> <b>GH₵5 profit</b>.</p>`,

      [{ heading: "Exercise 95.1 — Review.", items: [
          "3 pens at GH₵2 each = ___",
          "Buy GH₵10, sell GH₵15. Profit? ___",
          "Save GH₵2 a day for 5 days = ___",
          "GH₵100 − GH₵40 = ___",
          "GH₵50 + GH₵25 = ___"
        ]},
       { heading: "Exercise 95.2 — Review.", items: [
          "Buy GH₵20, sell GH₵25. Profit? ___",
          "Buy GH₵30, sell GH₵25. Loss? ___"
        ]}],

      `<p><b>95.1:</b> 1. GH₵6 2. GH₵5 3. GH₵10 4. GH₵60 5. GH₵75</p>
       <p><b>95.2:</b> 1. GH₵5 2. GH₵5</p>`,

      [{ q: "3 pens at GH₵2 each = ?", a: ["6", "GH₵6"] },
       { q: "Buy GH₵10, sell GH₵15. Profit?", a: ["5", "GH₵5"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>0.3 + 0.4 = ___</li>
         <li>0.7 − 0.3 = ___</li>
         <li>0.5 as a fraction = ___</li>
         <li>50% of 20 = ___</li>
         <li>25% of 20 = ___</li>
         <li>10% of 100 = ___</li>
         <li>3 pens at GH₵2 each = ___</li>
         <li>Buy GH₵10, sell GH₵15. Profit? ___</li>
         <li>GH₵100 − GH₵40 = ___</li>
         <li>Save GH₵2 a day for 5 days = ___</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. 0.7 2. 0.4 3. 5/10 4. 10 5. 5 6. 10 7. GH₵6 8. GH₵5 9. GH₵60 10. GH₵10</p>`,

      [{ q: "0.3 + 0.4 = ?", a: ["0.7"] },
       { q: "50% of 20 = ?", a: ["10"] },
       { q: "3 pens at GH₵2 each = ?", a: ["6", "GH₵6"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 40 marks.</p>

       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Decimals (10 marks)</li>
         <li>Part B — Percentages (10 marks)</li>
         <li>Part C — Money Problems (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>

       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Decimals (10)",
          "Part B — Percentages (10)",
          "Part C — Money Problems (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — GEOMETRY
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Geometry", days: [

    D(1, "📐", "Angles",
      "Identify angles.",
      `<p class='big-emoji'>📐 🔺</p>
       <p>An <b>angle</b> is the space between two lines that meet at a point.</p>

       <h3>Types of Angles</h3>
       <ul>
         <li><b>Right angle</b> — 90° (like the corner of a book)</li>
         <li><b>Acute angle</b> — less than 90° (small)</li>
         <li><b>Obtuse angle</b> — more than 90° (wide)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a right angle, an acute angle, and an obtuse angle. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What type of angle is the corner of a square?</p>
       <p><b>Answer:</b> A <b>right angle</b> (90°).</p>`,

      [{ heading: "Exercise 97.1 — Name the angle.", items: [
          "Corner of a book → ___",
          "A small angle → ___",
          "A wide angle → ___",
          "Corner of a door → ___",
          "Angle less than 90° → ___"
        ]},
       { heading: "Exercise 97.2 — Draw.", items: [
          "Draw a right angle.",
          "Draw an acute angle.",
          "Draw an obtuse angle."
        ]}],

      `<p><b>97.1:</b> 1. Right angle 2. Acute 3. Obtuse 4. Right angle 5. Acute</p>`,

      [{ q: "What type of angle is 90°?", a: ["right angle", "right"] },
       { q: "What type of angle is less than 90°?", a: ["acute"] },
       { q: "What type of angle is more than 90°?", a: ["obtuse"] }]),

    D(2, "🔺", "Triangles",
      "Identify types of triangles.",
      `<p class='big-emoji'>🔺 🔺</p>
       <p>A <b>triangle</b> has 3 sides and 3 angles.</p>

       <h3>Types of Triangles</h3>
       <ul>
         <li><b>Equilateral</b> — all 3 sides equal</li>
         <li><b>Isosceles</b> — 2 sides equal</li>
         <li><b>Scalene</b> — all sides different</li>
         <li><b>Right-angled</b> — has a right angle</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one of each type of triangle. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What type of triangle has all sides equal?</p>
       <p><b>Answer:</b> An <b>equilateral triangle</b>.</p>`,

      [{ heading: "Exercise 98.1 — Name the triangle.", items: [
          "All sides equal → ___",
          "2 sides equal → ___",
          "All sides different → ___",
          "Has a right angle → ___",
          "Has 3 sides → ___"
        ]},
       { heading: "Exercise 98.2 — Draw.", items: [
          "Draw an equilateral triangle.",
          "Draw an isosceles triangle.",
          "Draw a right-angled triangle."
        ]}],

      `<p><b>98.1:</b> 1. Equilateral 2. Isosceles 3. Scalene 4. Right-angled 5. Triangle</p>`,

      [{ q: "What type of triangle has all sides equal?", a: ["equilateral"] },
       { q: "What type of triangle has 2 sides equal?", a: ["isosceles"] }]),

    D(3, "⬜", "Quadrilaterals",
      "Identify quadrilaterals.",
      `<p class='big-emoji'>⬜ ▭</p>
       <p>A <b>quadrilateral</b> is a shape with 4 sides.</p>

       <h3>Types of Quadrilaterals</h3>
       <ul>
         <li><b>Square</b> — 4 equal sides, 4 right angles</li>
         <li><b>Rectangle</b> — 2 pairs of equal sides, 4 right angles</li>
         <li><b>Parallelogram</b> — 2 pairs of parallel sides</li>
         <li><b>Trapezium</b> — 1 pair of parallel sides</li>
         <li><b>Rhombus</b> — 4 equal sides, no right angles</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one of each quadrilateral. Label each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a quadrilateral?</p>
       <p><b>Answer:</b> A shape with <b>4 sides</b>.</p>`,

      [{ heading: "Exercise 99.1 — Name the shape.", items: [
          "4 equal sides, 4 right angles → ___",
          "2 pairs of equal sides, 4 right angles → ___",
          "4 equal sides, no right angles → ___",
          "1 pair of parallel sides → ___",
          "2 pairs of parallel sides → ___"
        ]},
       { heading: "Exercise 99.2 — Draw.", items: [
          "Draw a square, rectangle, and rhombus."
        ]}],

      `<p><b>99.1:</b> 1. Square 2. Rectangle 3. Rhombus 4. Trapezium 5. Parallelogram</p>`,

      [{ q: "How many sides does a quadrilateral have?", a: ["4", "four"] },
       { q: "What shape has 4 equal sides and 4 right angles?", a: ["square"] }]),

    D(4, "📏", "Perimeter",
      "Calculate perimeter.",
      `<p class='big-emoji'>📏 🔲</p>
       <p><b>Perimeter</b> is the distance around a shape. We add all the sides.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the perimeter of a square with side 5 cm?</p>
       <p><b>Answer:</b> 5 + 5 + 5 + 5 = <b>20 cm</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>Rectangle 6 cm × 3 cm: 6 + 3 + 6 + 3 = 18 cm</li>
         <li>Triangle 4 cm, 5 cm, 6 cm: 4 + 5 + 6 = 15 cm</li>
       </ul>`,

      [{ heading: "Exercise 100.1 — Find the perimeter.", items: [
          "Square side 4 cm → ___",
          "Square side 7 cm → ___",
          "Rectangle 5 cm × 3 cm → ___",
          "Rectangle 8 cm × 2 cm → ___",
          "Triangle 3 cm, 4 cm, 5 cm → ___"
        ]},
       { heading: "Exercise 100.2 — Find the perimeter.", items: [
          "Square side 10 cm → ___",
          "Rectangle 6 cm × 4 cm → ___",
          "Triangle 5 cm, 5 cm, 5 cm → ___"
        ]}],

      `<p><b>100.1:</b> 1. 16 cm 2. 28 cm 3. 16 cm 4. 20 cm 5. 12 cm</p>
       <p><b>100.2:</b> 1. 40 cm 2. 20 cm 3. 15 cm</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20 cm", "20"] },
       { q: "Perimeter of rectangle 6 cm × 3 cm?", a: ["18 cm", "18"] }]),

    D(5, "🎨", "Geometry Poster",
      "Make a geometry poster.",
      `<p class='big-emoji'>🎨 📐 🔺 ⬜</p>
       <p>Make a <b>"Geometry"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Geometry"</b></li>
         <li>Draw the 3 types of angles.</li>
         <li>Draw 3 types of triangles.</li>
         <li>Draw 3 quadrilaterals.</li>
         <li>Show one perimeter calculation.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Name each shape and angle.</p>`,

      [{ heading: "Exercise 101.1 — Draw.", items: [
          "Right angle, acute angle, obtuse angle",
          "Equilateral, isosceles, scalene triangles",
          "Square, rectangle, rhombus",
          "Perimeter of a square"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a right angle?", a: ["90°", "90 degrees"] },
       { q: "Perimeter of square side 4 cm?", a: ["16 cm", "16"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — MEASUREMENT (AREA & VOLUME)
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Measurement", days: [

    D(1, "📏", "Length",
      "Review and apply length.",
      `<p class='big-emoji'>📏 📐</p>
       <p>We measure length in mm, cm, m, and km.</p>
       <p><b>10 mm = 1 cm</b> · <b>100 cm = 1 m</b> · <b>1000 m = 1 km</b></p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many mm in 3 cm?</p>
       <p><b>Answer:</b> 3 × 10 = <b>30 mm</b>.</p>`,

      [{ heading: "Exercise 102.1 — Convert.", items: [
          "1 cm = ___ mm", "3 cm = ___ mm", "5 cm = ___ mm", "1 m = ___ cm", "2 m = ___ cm"
        ]},
       { heading: "Exercise 102.2 — Convert.", items: [
          "100 cm = ___ m", "300 cm = ___ m", "1000 m = ___ km", "2000 m = ___ km", "500 cm = ___ m"
        ]}],

      `<p><b>102.1:</b> 1. 10 2. 30 3. 50 4. 100 5. 200</p>
       <p><b>102.2:</b> 1. 1 2. 3 3. 1 4. 2 5. 5</p>`,

      [{ q: "How many mm in 1 cm?", a: ["10"] },
       { q: "How many cm in 1 m?", a: ["100"] },
       { q: "How many m in 1 km?", a: ["1000"] }]),

    D(2, "⬜", "Area",
      "Calculate area.",
      `<p class='big-emoji'>⬜ 📐</p>
       <p><b>Area</b> is the space inside a shape. We measure it in square units (cm², m²).</p>
       <p><b>Area of rectangle = length × width</b></p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the area of a rectangle 5 cm × 3 cm?</p>
       <p><b>Answer:</b> 5 × 3 = <b>15 cm²</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>Square side 4 cm: 4 × 4 = 16 cm²</li>
         <li>Rectangle 6 cm × 2 cm: 6 × 2 = 12 cm²</li>
       </ul>`,

      [{ heading: "Exercise 103.1 — Find the area.", items: [
          "Square side 3 cm → ___",
          "Square side 5 cm → ___",
          "Rectangle 4 cm × 3 cm → ___",
          "Rectangle 6 cm × 2 cm → ___",
          "Rectangle 8 cm × 3 cm → ___"
        ]},
       { heading: "Exercise 103.2 — Find the area.", items: [
          "Square side 10 cm → ___",
          "Rectangle 7 cm × 4 cm → ___",
          "Rectangle 9 cm × 2 cm → ___"
        ]}],

      `<p><b>103.1:</b> 1. 9 cm² 2. 25 cm² 3. 12 cm² 4. 12 cm² 5. 24 cm²</p>
       <p><b>103.2:</b> 1. 100 cm² 2. 28 cm² 3. 18 cm²</p>`,

      [{ q: "Area of square side 4 cm?", a: ["16 cm²", "16"] },
       { q: "Area of rectangle 5 cm × 3 cm?", a: ["15 cm²", "15"] }]),

    D(3, "🧊", "Volume",
      "Calculate volume.",
      `<p class='big-emoji'>🧊 📦</p>
       <p><b>Volume</b> is the space inside a 3D shape. We measure it in cubic units (cm³, m³).</p>
       <p><b>Volume of cube = side × side × side</b></p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the volume of a cube with side 3 cm?</p>
       <p><b>Answer:</b> 3 × 3 × 3 = <b>27 cm³</b>.</p>

       <h3>More Examples</h3>
       <ul>
         <li>Cube side 2 cm: 2 × 2 × 2 = 8 cm³</li>
         <li>Cube side 4 cm: 4 × 4 × 4 = 64 cm³</li>
       </ul>`,

      [{ heading: "Exercise 104.1 — Find the volume.", items: [
          "Cube side 2 cm → ___",
          "Cube side 3 cm → ___",
          "Cube side 4 cm → ___",
          "Cube side 5 cm → ___",
          "Cube side 6 cm → ___"
        ]},
       { heading: "Exercise 104.2 — Find the volume.", items: [
          "Cube side 7 cm → ___",
          "Cube side 8 cm → ___",
          "Cube side 10 cm → ___"
        ]}],

      `<p><b>104.1:</b> 1. 8 cm³ 2. 27 cm³ 3. 64 cm³ 4. 125 cm³ 5. 216 cm³</p>
       <p><b>104.2:</b> 1. 343 cm³ 2. 512 cm³ 3. 1000 cm³</p>`,

      [{ q: "Volume of cube side 3 cm?", a: ["27 cm³", "27"] },
       { q: "Volume of cube side 2 cm?", a: ["8 cm³", "8"] }]),

    D(4, "🥤", "Capacity",
      "Review capacity.",
      `<p class='big-emoji'>🥤 🧴</p>
       <p><b>Capacity</b> is how much a container holds. We measure it in ml and L.</p>
       <p><b>1000 ml = 1 L</b></p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many ml in 3 L?</p>
       <p><b>Answer:</b> 3 × 1000 = <b>3000 ml</b>.</p>`,

      [{ heading: "Exercise 105.1 — Convert.", items: [
          "1 L = ___ ml", "2 L = ___ ml", "3 L = ___ ml", "1000 ml = ___ L", "2000 ml = ___ L"
        ]},
       { heading: "Exercise 105.2 — Convert.", items: [
          "5000 ml = ___ L", "4000 ml = ___ L", "500 ml = ___ L", "1500 ml = ___ L", "2500 ml = ___ L"
        ]}],

      `<p><b>105.1:</b> 1. 1000 2. 2000 3. 3000 4. 1 5. 2</p>
       <p><b>105.2:</b> 1. 5 2. 4 3. 0.5 4. 1.5 5. 2.5</p>`,

      [{ q: "How many ml in 1 L?", a: ["1000"] },
       { q: "How many ml in 2 L?", a: ["2000"] },
       { q: "2000 ml = ___ L", a: ["2"] }]),

    D(5, "🎨", "Measurement Poster",
      "Make a measurement poster.",
      `<p class='big-emoji'>🎨 📏 ⬜ 🧊 🥤</p>
       <p>Make a <b>"Measurement"</b> poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Measurement"</b></li>
         <li>Length: cm, m, km</li>
         <li>Area: rectangle 5 cm × 3 cm</li>
         <li>Volume: cube side 3 cm</li>
         <li>Capacity: 1 L = 1000 ml</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one calculation.</p>`,

      [{ heading: "Exercise 106.1 — Draw.", items: [
          "Length conversion",
          "Area of a rectangle",
          "Volume of a cube",
          "Capacity conversion"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Area of rectangle 5 cm × 3 cm?", a: ["15 cm²", "15"] },
       { q: "Volume of cube side 3 cm?", a: ["27 cm³", "27"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Number",
      "Revise number topics.",
      `<p class='big-emoji'>🔁 🔢</p>

       <h3>Revision Topics</h3>
       <ul>
         <li>Place value</li>
         <li>Addition and subtraction</li>
         <li>Multiplication and division</li>
         <li>Fractions, decimals, percentages</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 345 + 234?</p>
       <p><b>Answer:</b> 345 + 234 = <b>579</b>.</p>`,

      [{ heading: "Exercise 107.1 — Revise.", items: [
          "Place value of 5 in 4,532",
          "345 + 234 = ___",
          "579 − 234 = ___",
          "6 × 8 = ___",
          "36 ÷ 6 = ___"
        ]},
       { heading: "Exercise 107.2 — Revise.", items: [
          "Half of 20 = ___",
          "1/4 of 12 = ___",
          "0.3 + 0.4 = ___",
          "50% of 20 = ___",
          "3 pens at GH₵2 each = ___"
        ]}],

      `<p><b>107.1:</b> 1. hundreds 2. 579 3. 345 4. 48 5. 6</p>
       <p><b>107.2:</b> 1. 10 2. 3 3. 0.7 4. 10 5. GH₵6</p>`,

      [{ q: "345 + 234 = ?", a: ["579"] },
       { q: "6 × 8 = ?", a: ["48"] },
       { q: "50% of 20 = ?", a: ["10"] }]),

    D(2, "🔁", "Algebra",
      "Revise patterns and sequences.",
      `<p class='big-emoji'>🔁 🔷</p>

       <h3>Revision Topics</h3>
       <ul>
         <li>Patterns</li>
         <li>Sequences</li>
         <li>Missing numbers</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes next: 5, 10, 15, ___?</p>
       <p><b>Answer:</b> <b>20</b> (add 5 each time).</p>`,

      [{ heading: "Exercise 108.1 — Revise.", items: [
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "10, 20, 30, 40, ___",
          "3, 6, 9, 12, ___",
          "1, 3, 5, 7, ___"
        ]},
       { heading: "Exercise 108.2 — Revise.", items: [
          "___ × 10 = 40",
          "___ × 10 = 90",
          "3 × ___ = 15",
          "4 × ___ = 20",
          "6 × ___ = 30"
        ]}],

      `<p><b>108.1:</b> 1. 10 2. 25 3. 50 4. 15 5. 9</p>
       <p><b>108.2:</b> 1. 4 2. 9 3. 5 4. 5 5. 5</p>`,

      [{ q: "What comes next: 2, 4, 6, 8, ___?", a: ["10"] },
       { q: "___ × 10 = 40", a: ["4"] }]),

    D(3, "🔁", "Geometry",
      "Revise geometry.",
      `<p class='big-emoji'>🔁 📐</p>

       <h3>Revision Topics</h3>
       <ul>
         <li>2D and 3D shapes</li>
         <li>Angles</li>
         <li>Perimeter and area</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the perimeter of a square with side 5 cm?</p>
       <p><b>Answer:</b> 5 + 5 + 5 + 5 = <b>20 cm</b>.</p>`,

      [{ heading: "Exercise 109.1 — Revise.", items: [
          "How many sides does a triangle have?",
          "What shape is a ball?",
          "What type of angle is 90°?",
          "Perimeter of square side 5 cm = ___",
          "Area of square side 4 cm = ___"
        ]},
       { heading: "Exercise 109.2 — Revise.", items: [
          "Perimeter of rectangle 6 cm × 3 cm = ___",
          "Area of rectangle 5 cm × 3 cm = ___",
          "How many lines of symmetry in a square?",
          "What comes next: 5, 10, 15, ___?"
        ]}],

      `<p><b>109.1:</b> 1. 3 2. Sphere 3. Right angle 4. 20 cm 5. 16 cm²</p>
       <p><b>109.2:</b> 1. 18 cm 2. 15 cm² 3. 4 4. 20</p>`,

      [{ q: "Perimeter of square side 5 cm?", a: ["20 cm", "20"] },
       { q: "Area of square side 4 cm?", a: ["16 cm²", "16"] }]),

    D(4, "🔁", "Data",
      "Revise data and graphs.",
      `<p class='big-emoji'>🔁 📊</p>

       <h3>Revision Topics</h3>
       <ul>
         <li>Tally charts</li>
         <li>Pictograms</li>
         <li>Bar charts</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Mango 4, Orange 6, Banana 3, Apple 7. Total?</p>
       <p><b>Answer:</b> 4 + 6 + 3 + 7 = <b>20</b>.</p>`,

      [{ heading: "Exercise 110.1 — Revise.", items: [
          "|||| ||| = ___",
          "🍎 = 2. 🍎🍎🍎 = ___",
          "Mango 4, Orange 6, Banana 3, Apple 7. Most popular?",
          "Total children?",
          "Difference between apples and bananas?"
        ]},
       { heading: "Exercise 110.2 — Revise.", items: [
          "Draw a tally chart for 5 colours.",
          "Draw a bar chart for your tally."
        ]}],

      `<p><b>110.1:</b> 1. 8 2. 6 3. Apple 4. 20 5. 4</p>`,

      [{ q: "Most popular fruit?", a: ["apple"] },
       { q: "Total children?", a: ["20"] }]),

    D(5, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>345 + 234 = ___</li>
         <li>6 × 8 = ___</li>
         <li>36 ÷ 6 = ___</li>
         <li>50% of 20 = ___</li>
         <li>0.3 + 0.4 = ___</li>
         <li>Perimeter of square side 5 cm = ___</li>
         <li>Area of rectangle 5 cm × 3 cm = ___</li>
         <li>Volume of cube side 3 cm = ___</li>
         <li>What comes next: 5, 10, 15, ___?</li>
         <li>Mango 4, Orange 6. Total = ___</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer all 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p><b>Answers:</b> 1. 579 2. 48 3. 6 4. 10 5. 0.7 6. 20 cm 7. 15 cm² 8. 27 cm³ 9. 20 10. 10</p>`,

      [{ q: "345 + 234 = ?", a: ["579"] },
       { q: "Area of rectangle 5 cm × 3 cm?", a: ["15 cm²", "15"] },
       { q: "What comes next: 5, 10, 15, ___?", a: ["20"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 24 — FINAL REVIEW & CELEBRATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: "Review", days: [

    D(1, "🔁", "Final Review",
      "Review the whole year.",
      `<p class='big-emoji'>🔁 🌟</p>

       <h3>Topics This Year</h3>
       <ul>
         <li>Place value</li>
         <li>Addition, subtraction, multiplication, division</li>
         <li>Fractions, decimals, percentages</li>
         <li>Money</li>
         <li>Measurement (length, weight, capacity, time)</li>
         <li>Shapes and geometry</li>
         <li>Data and graphs</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 6 × 7?</p>
       <p><b>Answer:</b> 6 × 7 = <b>42</b>.</p>`,

      [{ heading: "Exercise 112.1 — Review.", items: [
          "Write the place value of 5 in 4,532.",
          "345 + 234 = ___",
          "579 − 234 = ___",
          "6 × 7 = ___",
          "42 ÷ 6 = ___"
        ]},
       { heading: "Exercise 112.2 — Review.", items: [
          "1/2 of 20 = ___",
          "0.3 + 0.4 = ___",
          "50% of 20 = ___",
          "Perimeter of square side 5 cm = ___",
          "Area of rectangle 5 cm × 3 cm = ___"
        ]}],

      `<p><b>112.1:</b> 1. hundreds 2. 579 3. 345 4. 42 5. 7</p>
       <p><b>112.2:</b> 1. 10 2. 0.7 3. 10 4. 20 cm 5. 15 cm²</p>`,

      [{ q: "6 × 7 = ?", a: ["42"] },
       { q: "50% of 20 = ?", a: ["10"] },
       { q: "Area of rectangle 5 cm × 3 cm?", a: ["15 cm²", "15"] }]),

    D(2, "📁", "Portfolio",
      "Make a portfolio of your best work.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Today you will make a <b>portfolio</b> of your best work from this year.</p>

       <h3>What to Include</h3>
       <ul>
         <li>Your best addition and subtraction work.</li>
         <li>Your best multiplication and division work.</li>
         <li>Your best fractions work.</li>
         <li>Your best money problem.</li>
         <li>Your best measurement work.</li>
         <li>Your best shape poster.</li>
         <li>Your best graph.</li>
       </ul>

       <h3>How to Organise</h3>
       <ol>
         <li>Choose your best work.</li>
         <li>Put it in order.</li>
         <li>Write a title page.</li>
         <li>Add your name and date.</li>
       </ol>`,

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
       </ol>

       <h3>Example Presentation</h3>
       <p>"This is my numeracy portfolio. On this page, I solved addition problems. On this page, I worked with fractions. My favourite work is the shape poster because I like drawing."</p>`,

      [{ heading: "Exercise 114.1 — Present your portfolio.", items: [
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
       <p>You have completed Grade 3 Numeracy! Today is your celebration day.</p>

       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>🧮 Solve one last problem for your family.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>

       <h3>Say This</h3>
       <p>"I finished Grade 3 Numeracy! I can add, subtract, multiply, divide, and solve problems!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Solve one last problem.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 4?", a: ["any"] }]),

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