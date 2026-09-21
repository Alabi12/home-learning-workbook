// src/data/grade4/computing.js
// Grade 4 Computing — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Digital Literacy · Word Processing · Spreadsheets · Algorithms ·
//          Coding · Debugging · Internet · Digital Citizenship · AI

import { D } from '../helpers.js';

export const computing = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — DIGITAL LITERACY
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Digital Literacy", days: [

    D(1, "💻", "Hardware",
      "Understand hardware.",
      `<p class='big-emoji'>💻 🖥️ ⌨️</p>
       <p><b>Hardware</b> = the physical parts of a computer you can <b>touch</b>.</p>
       <h3>Examples of Hardware</h3>
       <ul>
         <li>🖥️ Monitor</li>
         <li>⌨️ Keyboard</li>
         <li>🖱️ Mouse</li>
         <li>🖨️ Printer</li>
         <li>🔊 Speaker</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a keyboard hardware?</p>
       <p><b>Answer:</b> Yes, a keyboard is <b>hardware</b> — you can touch it.</p>`,

      [{ heading: "Exercise 1.1 — List 5 hardware parts.", items: [] },
       { heading: "Exercise 1.2 — Answer.", items: [
          "What is hardware?",
          "Name 3 hardware parts."
        ]}],

      `<p>Any 5 correct parts.</p>`,

      [{ q: "Name 3 hardware parts.", a: ["monitor", "keyboard", "mouse", "any"] },
       { q: "What is hardware?", a: ["physical parts", "any"] }]),

    D(2, "📀", "Software",
      "Understand software.",
      `<p class='big-emoji'>📀 💻</p>
       <p><b>Software</b> = programs installed on a computer that you <b>cannot touch</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>Windows</li>
         <li>MS Word</li>
         <li>Paint</li>
         <li>Chrome</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is Windows hardware or software?</p>
       <p><b>Answer:</b> Windows is <b>software</b>.</p>`,

      [{ heading: "Exercise 2.1 — List 5 software programs.", items: [] },
       { heading: "Exercise 2.2 — Answer.", items: [
          "What is software?",
          "Name 3 software programs."
        ]}],

      `<p>Any 5 correct programs.</p>`,

      [{ q: "Is Windows hardware or software?", a: ["software"] },
       { q: "What is software?", a: ["programs", "any"] }]),

    D(3, "🖥️", "Operating Systems",
      "Learn about OS.",
      `<p class='big-emoji'>🖥️ ⚙️</p>
       <p>An <b>operating system (OS)</b> manages hardware and software.</p>
       <h3>Common Operating Systems</h3>
       <ul>
         <li>🪟 Windows</li>
         <li>🍎 macOS</li>
         <li>🐧 Linux</li>
         <li>📱 Android</li>
         <li>📱 iOS</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does an OS do?</p>
       <p><b>Answer:</b> An OS <b>manages hardware and software</b>.</p>`,

      [{ heading: "Exercise 3.1 — Name 3 operating systems.", items: [] },
       { heading: "Exercise 3.2 — Answer.", items: [
          "What is an OS?",
          "Name an operating system."
        ]}],

      `<p>Windows, macOS, Linux.</p>`,

      [{ q: "Name one operating system.", a: ["windows", "macos", "linux", "any"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] }]),

    D(4, "📁", "File Management",
      "Learn file management.",
      `<p class='big-emoji'>📁 📄</p>
       <p><b>File management</b> means organising files into folders.</p>
       <h3>Key Terms</h3>
       <ul>
         <li><b>File</b> — a saved document or picture</li>
         <li><b>Folder</b> — holds files</li>
         <li><b>Path</b> — the location of a file</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What holds files?</p>
       <p><b>Answer:</b> A <b>folder</b> holds files.</p>`,

      [{ heading: "Exercise 4.1 — Create a folder called 'Grade 4' and save 3 files.", items: [] },
       { heading: "Exercise 4.2 — Answer.", items: [
          "What holds files?",
          "What is a file?",
          "What is a path?"
        ]}],

      `<p>Any correct folder structure.</p>`,

      [{ q: "What holds files?", a: ["folder"] },
       { q: "What is a file?", a: ["saved document", "any"] }]),

    D(5, "🎨", "Digital Literacy Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 💻</p>
       <p>Show hardware, software, and OS.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>3 hardware parts</li>
         <li>3 software programs</li>
         <li>1 OS</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each part does.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "3 hardware parts",
          "3 software programs",
          "1 OS"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "What does an OS do?", a: ["manages hardware and software", "any"] },
       { q: "Is Windows hardware or software?", a: ["software"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — WORD PROCESSING
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Word Processing", days: [

    D(1, "📝", "Creating Documents",
      "Create documents.",
      `<p class='big-emoji'>📝 📄</p>
       <p>Open a word processor. Type a document.</p>
       <h3>Common Word Processors</h3>
       <ul>
         <li>Microsoft Word</li>
         <li>Google Docs</li>
         <li>LibreOffice Writer</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a word processor.</p>
       <p><b>Answer:</b> Microsoft Word.</p>`,

      [{ heading: "Exercise 6.1 — Type a short story.", items: [
          "Title",
          "Beginning",
          "Middle",
          "End"
        ]},
       { heading: "Exercise 6.2 — Answer.", items: [
          "Name a word processor.",
          "What can you do with a word processor?"
        ]}],

      `<p>Any correct story.</p>`,

      [{ q: "Name a word processor.", a: ["ms word", "google docs", "any"] },
       { q: "What can you do?", a: ["type edit format save print", "any"] }]),

    D(2, "🎨", "Formatting",
      "Format text.",
      `<p class='big-emoji'>🎨 📝</p>
       <p><b>Formatting</b> changes how text looks.</p>
       <h3>Formatting Options</h3>
       <ul>
         <li><b>B</b> Bold</li>
         <li><i>I</i> Italic</li>
         <li><u>U</u> Underline</li>
         <li>Font — style of letters</li>
         <li>Size — how big the letters are</li>
         <li>Colour — colour of letters</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does italic do?</p>
       <p><b>Answer:</b> Italic <b>slants the text</b>.</p>`,

      [{ heading: "Exercise 7.1 — Format a document with headings and bold text.", items: [
          "Make the title bold.",
          "Make the heading bigger.",
          "Use italic for one word."
        ]},
       { heading: "Exercise 7.2 — Answer.", items: [
          "What does italic do?",
          "What does bold do?",
          "What does underline do?"
        ]}],

      `<p>Any correctly formatted document.</p>`,

      [{ q: "What does italic do?", a: ["slants text", "italic", "any"] },
       { q: "What does bold do?", a: ["makes text darker", "any"] }]),

    D(3, "📊", "Tables",
      "Add tables.",
      `<p class='big-emoji'>📊 📋</p>
       <h3>How to Insert a Table</h3>
       <ol>
         <li>Click <b>Insert</b>.</li>
         <li>Click <b>Table</b>.</li>
         <li>Choose the number of rows and columns.</li>
         <li>Click OK.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you insert a table?</p>
       <p><b>Answer:</b> Click <b>Insert → Table</b>.</p>`,

      [{ heading: "Exercise 8.1 — Create a table with 3 columns and 5 rows.", items: [
          "Column 1: Name",
          "Column 2: Age",
          "Column 3: Class",
          "5 rows of data"
        ]},
       { heading: "Exercise 8.2 — Answer.", items: [
          "How do you insert a table?",
          "What can tables be used for?"
        ]}],

      `<p>Any correct table.</p>`,

      [{ q: "How do you insert a table?", a: ["insert then table", "insert menu"] },
       { q: "What are tables used for?", a: ["organising data", "any"] }]),

    D(4, "🖨️", "Printing",
      "Print documents.",
      `<p class='big-emoji'>🖨️ 📄</p>
       <h3>How to Print</h3>
       <ol>
         <li>Click <b>File</b>.</li>
         <li>Click <b>Print</b>.</li>
         <li>Choose your printer.</li>
         <li>Choose the number of copies.</li>
         <li>Click Print.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What menu do you use to print?</p>
       <p><b>Answer:</b> The <b>File</b> menu.</p>`,

      [{ heading: "Exercise 9.1 — Print a document.", items: [] },
       { heading: "Exercise 9.2 — Answer.", items: [
          "What menu do you use to print?",
          "What is the keyboard shortcut to print?"
        ]}],

      `<p>Any correct print.</p>`,

      [{ q: "What menu do you use to print?", a: ["file"] },
       { q: "What is the shortcut to print?", a: ["ctrl+p", "ctrl p"] }]),

    D(5, "🎨", "Word Poster",
      "Make a word processing poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Show steps to create, format, and print.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each step.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [
          "Create a document",
          "Type text",
          "Format text",
          "Insert a table",
          "Print"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Name 3 formatting options.", a: ["bold", "italic", "underline", "any"] },
       { q: "How do you print?", a: ["file then print", "ctrl+p"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — SPREADSHEETS
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Spreadsheets", days: [

    D(1, "📊", "Rows & Columns",
      "Understand rows and columns.",
      `<p class='big-emoji'>📊 ➡️⬇️</p>
       <p><b>Rows</b> are horizontal (go across). <b>Columns</b> are vertical (go down).</p>
       <h3>Labels</h3>
       <ul>
         <li>Rows are numbered: 1, 2, 3…</li>
         <li>Columns are lettered: A, B, C…</li>
         <li>A <b>cell</b> is where a row and column meet.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the intersection of a row and column called?</p>
       <p><b>Answer:</b> A <b>cell</b>.</p>`,

      [{ heading: "Exercise 11.1 — Label a spreadsheet.", items: [
          "row", "column", "cell"
        ]},
       { heading: "Exercise 11.2 — Answer.", items: [
          "What is a cell?",
          "How are rows labeled?",
          "How are columns labeled?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "What is the intersection of a row and column called?", a: ["cell"] },
       { q: "How are columns labeled?", a: ["letters", "any"] }]),

    D(2, "🧮", "Formulas",
      "Learn basic formulas.",
      `<p class='big-emoji'>🧮 📊</p>
       <p>Formulas start with = Example: =A1+B1</p>
       <h3>Common Formulas</h3>
       <ul>
         <li>=A1+B1 — adds</li>
         <li>=A1-B1 — subtracts</li>
         <li>=A1*B1 — multiplies</li>
         <li>=A1/B1 — divides</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you write 'add A1 and B1'?</p>
       <p><b>Answer:</b> <b>=A1+B1</b>.</p>`,

      [{ heading: "Exercise 12.1 — Write formulas.", items: [
          "Add A1 and B1",
          "Subtract B1 from A1",
          "Multiply A1 by B1",
          "Divide A1 by B1"
        ]},
       { heading: "Exercise 12.2 — Answer.", items: [
          "What does a formula start with?",
          "What does =A1-B1 do?"
        ]}],

      `<p>1. =A1+B1 2. =A1-B1 3. =A1*B1 4. =A1/B1</p>`,

      [{ q: "How do you write 'add A1 and B1'?", a: ["=a1+b1", "=A1+B1"] },
       { q: "What does a formula start with?", a: ["=", "equals"] }]),

    D(3, "⚙️", "Functions",
      "Learn functions like SUM.",
      `<p class='big-emoji'>⚙️ 📊</p>
       <p><b>Functions</b> are ready-made formulas. =SUM(A1:A10) adds all cells in the range.</p>
       <h3>Common Functions</h3>
       <ul>
         <li>=SUM(range) — adds</li>
         <li>=AVERAGE(range) — finds the average</li>
         <li>=MAX(range) — finds the largest</li>
         <li>=MIN(range) — finds the smallest</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does SUM do?</p>
       <p><b>Answer:</b> SUM <b>adds</b> numbers.</p>`,

      [{ heading: "Exercise 13.1 — Write a SUM formula for A1 to A5.", items: [] },
       { heading: "Exercise 13.2 — Answer.", items: [
          "What does SUM do?",
          "What does AVERAGE do?",
          "What does MAX do?"
        ]}],

      `<p>=SUM(A1:A5)</p>`,

      [{ q: "What does SUM do?", a: ["adds", "sums", "add"] },
       { q: "What does AVERAGE do?", a: ["finds average", "any"] }]),

    D(4, "📈", "Charts",
      "Create charts.",
      `<p class='big-emoji'>📈 📊</p>
       <p>Use charts to show data visually.</p>
       <h3>Chart Types</h3>
       <ul>
         <li>📊 Bar chart — compares amounts</li>
         <li>🥧 Pie chart — shows parts of a whole</li>
         <li>📈 Line chart — shows change over time</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a chart?</p>
       <p><b>Answer:</b> A <b>visual display of data</b>.</p>`,

      [{ heading: "Exercise 14.1 — Create a bar chart of the values 5, 10, 15, 20.", items: [] },
       { heading: "Exercise 14.2 — Answer.", items: [
          "What is a chart?",
          "Name 3 types of charts."
        ]}],

      `<p>Any correct chart.</p>`,

      [{ q: "What is a chart?", a: ["visual display of data", "graph", "any"] },
       { q: "Name a chart type.", a: ["bar", "pie", "line", "any"] }]),

    D(5, "🎨", "Spreadsheet Poster",
      "Make a spreadsheet poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Show rows, columns, cells, and formulas.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one formula.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [
          "Rows", "Columns", "A cell", "A formula", "A chart"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "What does a formula start with?", a: ["=", "equals"] },
       { q: "What is a cell?", a: ["row and column meet", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Digital Literacy",
      "Review hardware, software, OS.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Review</h3>
       <ul>
         <li>Hardware = physical parts</li>
         <li>Software = programs</li>
         <li>OS = manages everything</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is Windows hardware or software?</p>
       <p><b>Answer:</b> <b>Software</b>.</p>`,

      [{ heading: "Exercise 16.1 — Classify.", items: [
          "monitor", "Windows", "keyboard", "Linux", "printer"
        ]},
       { heading: "Exercise 16.2 — Answer.", items: [
          "What is hardware?",
          "What is software?",
          "What does an OS do?"
        ]}],

      `<p>1. Hardware 2. Software 3. Hardware 4. Software 5. Hardware</p>`,

      [{ q: "Is Windows hardware or software?", a: ["software"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] }]),

    D(2, "🔁", "Review Word Processing",
      "Review document skills.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Creating, formatting, printing</li>
         <li>Tables</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does bold do?</p>
       <p><b>Answer:</b> Makes text darker.</p>`,

      [{ heading: "Exercise 17.1 — List 5 formatting options.", items: [] },
       { heading: "Exercise 17.2 — Answer.", items: [
          "What does bold do?",
          "How do you insert a table?",
          "How do you print?"
        ]}],

      `<p>Any 5 correct options.</p>`,

      [{ q: "What does bold do?", a: ["makes text darker", "any"] },
       { q: "How do you print?", a: ["file then print", "any"] }]),

    D(3, "🔁", "Review Spreadsheets",
      "Review spreadsheet skills.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Rows, columns, cells</li>
         <li>Formulas and functions</li>
         <li>Charts</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a formula to add A1 and B1.</p>
       <p><b>Answer:</b> =A1+B1.</p>`,

      [{ heading: "Exercise 18.1 — Write the formula for adding A1:A10.", items: [] },
       { heading: "Exercise 18.2 — Answer.", items: [
          "What is a cell?",
          "What does SUM do?",
          "Name 3 types of charts."
        ]}],

      `<p>=SUM(A1:A10)</p>`,

      [{ q: "Write a formula to add A1 and B1.", a: ["=a1+b1", "=A1+B1"] },
       { q: "What is a cell?", a: ["row and column meet", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What does an OS do?</li>
         <li>What holds files?</li>
         <li>What does italic do?</li>
         <li>How do you insert a table?</li>
         <li>What is a cell?</li>
         <li>What does a formula start with?</li>
         <li>What does SUM do?</li>
         <li>Name a type of chart.</li>
       </ol>`,

      [{ heading: "Exercise 19.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a cell?", a: ["intersection of row and column", "any"] },
       { q: "What does SUM do?", a: ["adds", "any"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Month 1 of Grade 4 Computing!</p>
       <h3>Show and Tell</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Exercise 20.1 — Show posters.", items: [
          "Digital Literacy Poster",
          "Word Poster",
          "Spreadsheet Poster"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — ALGORITHMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Algorithms", days: [

    D(1, "📋", "Definition",
      "Understand algorithms.",
      `<p class='big-emoji'>📋 🔢</p>
       <p>An <b>algorithm</b> is a set of steps to solve a problem.</p>
       <h3>Everyday Algorithms</h3>
       <ul>
         <li>Making tea</li>
         <li>Brushing teeth</li>
         <li>Tying shoes</li>
         <li>Crossing the road</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b> to solve a problem.</p>`,

      [{ heading: "Exercise 21.1 — Say.", items: [
          "What is an algorithm?",
          "Give an example.",
          "Why do algorithms need order?"
        ]},
       { heading: "Exercise 21.2 — Write an algorithm for brushing teeth.", items: [
          "1. ___", "2. ___", "3. ___", "4. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "Give an example.", a: ["making tea", "brushing teeth", "any"] }]),

    D(2, "📋", "Sequencing",
      "Order steps.",
      `<p class='big-emoji'>📋 1️⃣2️⃣3️⃣</p>
       <p>Order matters in algorithms.</p>
       <h3>Example: Making Tea</h3>
       <ol>
         <li>Boil water</li>
         <li>Add tea</li>
         <li>Pour water</li>
         <li>Stir</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is Step 1 of making tea?</p>
       <p><b>Answer:</b> <b>Boil water</b>.</p>`,

      [{ heading: "Exercise 22.1 — Order the steps to make tea.", items: [
          "Boil water", "Add tea", "Pour water", "Stir"
        ]},
       { heading: "Exercise 22.2 — Order steps for washing hands.", items: [
          "Wet hands", "Add soap", "Rinse", "Dry"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is step 1 of making tea?", a: ["boil water", "any"] },
       { q: "Why does order matter?", a: ["so it works", "any"] }]),

    D(3, "📊", "Flowcharts",
      "Draw flowcharts.",
      `<p class='big-emoji'>📊 🔷</p>
       <p>A <b>flowchart</b> shows steps using symbols.</p>
       <h3>Symbols</h3>
       <ul>
         <li>⭕ Start / End — oval</li>
         <li>▭ Process — rectangle</li>
         <li>🔶 Decision — diamond</li>
         <li>➡️ Arrow — direction</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a flowchart?</p>
       <p><b>Answer:</b> A <b>diagram of steps</b> using shapes.</p>`,

      [{ heading: "Exercise 23.1 — Draw the symbols.", items: [
          "Start", "Process", "Decision", "End"
        ]},
       { heading: "Exercise 23.2 — Answer.", items: [
          "What is a flowchart?",
          "What shape is a decision?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a flowchart?", a: ["diagram of steps", "any"] },
       { q: "What shape is a decision?", a: ["diamond"] }]),

    D(4, "🧩", "Pseudocode",
      "Write pseudocode.",
      `<p class='big-emoji'>🧩 📝</p>
       <p><b>Pseudocode</b> is plain English steps. Example: FOR i = 1 TO 5, print i.</p>
       <h3>Rules</h3>
       <ul>
         <li>Use simple English</li>
         <li>Show the steps in order</li>
         <li>No need for correct programming syntax</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Write pseudocode to print 1 to 5.</p>
       <p><b>Answer:</b> FOR i = 1 TO 5: PRINT i</p>`,

      [{ heading: "Exercise 24.1 — Write pseudocode.", items: [
          "Print 1 to 5",
          "Print 1 to 10",
          "Print 'Hello' 3 times"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is pseudocode?", a: ["plain English steps", "any"] },
       { q: "Write pseudocode to print 1 to 5.", a: ["for i = 1 to 5 print i", "any"] }]),

    D(5, "🎨", "Algorithm Poster",
      "Make an algorithm poster.",
      `<p class='big-emoji'>🎨 📋</p>
       <p>Draw a flowchart for a simple task.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Start</li>
         <li>3 steps</li>
         <li>End</li>
       </ul>`,

      [{ heading: "Exercise 25.1 — Draw.", items: [
          "Start", "3 steps", "End"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "What shape is Start?", a: ["oval", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — CODING BASICS
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Coding Basics", days: [

    D(1, "💻", "Variables",
      "Learn about variables.",
      `<p class='big-emoji'>💻 📦</p>
       <p>A <b>variable</b> stores data: name = 'Ama'.</p>
       <h3>Examples</h3>
       <ul>
         <li>name = "Ama"</li>
         <li>age = 9</li>
         <li>score = 0</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a variable?</p>
       <p><b>Answer:</b> A variable <b>stores data</b>.</p>`,

      [{ heading: "Exercise 26.1 — Say.", items: [
          "What is a variable?",
          "Give an example.",
          "Why do we use variables?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a variable?", a: ["stores data", "any"] },
       { q: "Give an example.", a: ["name = ama", "any"] }]),

    D(2, "🔁", "Loops",
      "Learn loops.",
      `<p class='big-emoji'>🔁 🔄</p>
       <p>A <b>loop</b> repeats instructions.</p>
       <h3>Example</h3>
       <p>FOR i = 1 TO 5: PRINT "Hello"</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a loop do?</p>
       <p><b>Answer:</b> A loop <b>repeats</b> instructions.</p>`,

      [{ heading: "Exercise 27.1 — Say.", items: [
          "What does a loop do?",
          "Give an example.",
          "When do we use loops?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] }]),

    D(3, "❓", "Conditions",
      "Learn conditions.",
      `<p class='big-emoji'>❓ ➡️</p>
       <p><b>if…then</b> checks a condition. <b>if…else</b> gives two options.</p>
       <h3>Examples</h3>
       <ul>
         <li>IF it rains, THEN use umbrella</li>
         <li>IF hungry, THEN eat; ELSE, play</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If it rains, then…?</p>
       <p><b>Answer:</b> Use an umbrella.</p>`,

      [{ heading: "Exercise 28.1 — Say.", items: [
          "If it rains, then…",
          "If hungry, then…",
          "If tired, then…"
        ]}],

      `<p>⭐</p>`,

      [{ q: "If it rains, then…?", a: ["use umbrella", "any"] },
       { q: "What does 'if' do?", a: ["checks a condition", "any"] }]),

    D(4, "🧩", "Simple Program",
      "Write a simple program.",
      `<p class='big-emoji'>🧩 💻</p>
       <h3>Simple Program</h3>
       <pre>
print "Hello"
print "My name is ___"
FOR i = 1 TO 5:
    print i
IF number > 3:
    print "big"
       </pre>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does print do?</p>
       <p><b>Answer:</b> Shows text.</p>`,

      [{ heading: "Exercise 29.1 — Write.", items: [
          "Print 1 to 5",
          "If number > 3, print 'big'"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does print do?", a: ["shows text", "any"] }]),

    D(5, "🎨", "Coding Poster",
      "Make a coding poster.",
      `<p class='big-emoji'>🎨 💻</p>
       <p>Show 4 coding blocks.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>variable</li>
         <li>loop</li>
         <li>condition</li>
         <li>print</li>
       </ul>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [
          "variable", "loop", "condition", "print"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name 3 coding concepts.", a: ["variable", "loop", "condition", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — DEBUGGING
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Debugging", days: [

    D(1, "🐞", "Finding Errors",
      "Learn to find errors.",
      `<p class='big-emoji'>🐞 🔍</p>
       <p>Errors are called <b>bugs</b>. Look carefully at your code.</p>
       <h3>Where to Look for Bugs</h3>
       <ul>
         <li>Spelling mistakes</li>
         <li>Missing steps</li>
         <li>Wrong order</li>
         <li>Wrong values</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a bug?</p>
       <p><b>Answer:</b> A <b>bug</b> is an error in code.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "What is a bug?",
          "How do you find one?",
          "Where do bugs come from?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a bug?", a: ["error in code", "any"] },
       { q: "Where do bugs come from?", a: ["mistakes", "any"] }]),

    D(2, "🔧", "Fixing Errors",
      "Learn to fix errors.",
      `<p class='big-emoji'>🔧 ✅</p>
       <p>Read the error message. Check your spelling. Test small parts.</p>
       <h3>How to Fix Bugs</h3>
       <ol>
         <li>Read the error message.</li>
         <li>Check your spelling.</li>
         <li>Test small parts.</li>
         <li>Fix and test again.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you fix a bug?</p>
       <p><b>Answer:</b> Read the error and <b>check your code</b>.</p>`,

      [{ heading: "Exercise 32.1 — Say.", items: [
          "How do you fix a bug?",
          "Why do we read error messages?",
          "What do we do after fixing?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you fix a bug?", a: ["read the error", "any"] },
       { q: "What after fixing?", a: ["test again", "any"] }]),

    D(3, "🧪", "Testing",
      "Learn about testing.",
      `<p class='big-emoji'>🧪 ✅</p>
       <p>Test with simple examples first, then harder ones.</p>
       <h3>Testing Steps</h3>
       <ol>
         <li>Run the program.</li>
         <li>Check the output.</li>
         <li>Try different inputs.</li>
         <li>Note any problems.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we test code?</p>
       <p><b>Answer:</b> To <b>find errors</b>.</p>`,

      [{ heading: "Exercise 33.1 — Say.", items: [
          "Why do we test?",
          "What do we test?",
          "How do we test?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why do we test code?", a: ["to find errors", "any"] }]),

    D(4, "📝", "Practise",
      "Practise debugging.",
      `<p class='big-emoji'>📝 🔍</p>
       <p>Look at these lines. Find the error.</p>
       <h3>Examples</h3>
       <ul>
         <li><code>prnt('Hello')</code> — misspelled print</li>
         <li><code>if x = 5 then…</code> — should be ==</li>
         <li><code>FOR i = 1 TO</code> — missing number</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What's wrong with 'prnt'?</p>
       <p><b>Answer:</b> It's <b>misspelled</b> — should be 'print'.</p>`,

      [{ heading: "Exercise 34.1 — Find the error.", items: [
          "prnt('Hello')",
          "if x = 5 then…",
          "FOR i = 1 TO"
        ]},
       { heading: "Exercise 34.2 — Fix and test.", items: [] }],

      `<p>1. 'print' 2. '==' 3. missing number</p>`,

      [{ q: "What's wrong with 'prnt'?", a: ["misspelled print", "any"] },
       { q: "What should 'if x = 5' be?", a: ["if x == 5", "any"] }]),

    D(5, "🎨", "Debugging Poster",
      "Make a debugging poster.",
      `<p class='big-emoji'>🎨 🐞</p>
       <p>Show 4 debugging tips.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Read the error message</li>
         <li>Check spelling</li>
         <li>Test small parts</li>
         <li>Test again after fixing</li>
       </ul>`,

      [{ heading: "Exercise 35.1 — Draw and label.", items: [
          "Read the error",
          "Check spelling",
          "Test small parts",
          "Test again"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a debugging tip.", a: ["read the error", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Algorithms",
      "Review algorithms.",
      `<p class='big-emoji'>🔁 📋</p>
       <h3>Review</h3>
       <ul>
         <li>Steps, sequencing, flowcharts, pseudocode</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b>.</p>`,

      [{ heading: "Exercise 36.1 — Answer.", items: [
          "What is an algorithm?",
          "What is a flowchart?",
          "What is pseudocode?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "What is pseudocode?", a: ["plain English steps", "any"] }]),

    D(2, "🔁", "Review Coding",
      "Review coding.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Review</h3>
       <ul>
         <li>Variables, loops, conditions</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a loop do?</p>
       <p><b>Answer:</b> Repeats.</p>`,

      [{ heading: "Exercise 37.1 — Answer.", items: [
          "What is a variable?",
          "What does a loop do?",
          "What does 'if' do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] },
       { q: "What is a variable?", a: ["stores data", "any"] }]),

    D(3, "🔁", "Review Debugging",
      "Review debugging.",
      `<p class='big-emoji'>🔁 🐞</p>
       <h3>Review</h3>
       <ul>
         <li>Finding and fixing errors</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a bug?</p>
       <p><b>Answer:</b> An error in code.</p>`,

      [{ heading: "Exercise 38.1 — Answer.", items: [
          "What is a bug?",
          "How do you fix a bug?",
          "Why do we test?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a bug?", a: ["error in code", "any"] },
       { q: "How do you fix a bug?", a: ["read the error", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is an algorithm?</li>
         <li>What is a flowchart?</li>
         <li>What is pseudocode?</li>
         <li>What is a variable?</li>
         <li>What does a loop do?</li>
         <li>What does 'if' do?</li>
         <li>What is a bug?</li>
         <li>How do you fix a bug?</li>
         <li>Why do we test?</li>
         <li>What does print do?</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is pseudocode?", a: ["plain English steps", "any"] },
       { q: "What is a bug?", a: ["error in code", "any"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Algorithms (15)</li>
         <li>Part B — Coding (15)</li>
         <li>Part C — Debugging (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Algorithms (15)",
          "Part B — Coding (15)",
          "Part C — Debugging (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — INTERNET
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Internet", days: [

    D(1, "🌐", "How It Works",
      "Learn how the internet works.",
      `<p class='big-emoji'>🌐 💻 🌍</p>
       <p>The <b>internet</b> is a network that connects computers around the world.</p>
       <h3>Key Ideas</h3>
       <ul>
         <li>Computers are connected by cables and wireless signals.</li>
         <li>Websites are stored on servers.</li>
         <li>Your computer sends a request and gets information back.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the internet?</p>
       <p><b>Answer:</b> A <b>network that connects computers</b>.</p>`,

      [{ heading: "Exercise 40.1 — Say.", items: [
          "What is the internet?",
          "How are computers connected?",
          "What is a server?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the internet?", a: ["network of computers", "any"] },
       { q: "What is a server?", a: ["stores websites", "any"] }]),

    D(2, "🌐", "Browsers",
      "Learn about browsers.",
      `<p class='big-emoji'>🌐 🔎</p>
       <p>A <b>browser</b> visits websites. Common browsers: Chrome, Firefox, Edge, Safari.</p>
       <h3>Parts of a Browser</h3>
       <ul>
         <li>Address bar — where you type the website</li>
         <li>Tabs — open multiple pages</li>
         <li>Back / Forward buttons</li>
         <li>Bookmarks — save favourite pages</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A <b>program to visit websites</b>.</p>`,

      [{ heading: "Exercise 41.1 — Say.", items: [
          "What is a browser?",
          "Name 3 browsers.",
          "What is the address bar for?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a browser?", a: ["program to visit websites", "any"] },
       { q: "Name a browser.", a: ["chrome", "firefox", "any"] }]),

    D(3, "🔍", "Search Techniques",
      "Learn better searching.",
      `<p class='big-emoji'>🔍 🎯</p>
       <h3>Search Tips</h3>
       <ul>
         <li>Use clear keywords</li>
         <li>Use quotation marks for exact phrases</li>
         <li>Use + to include words</li>
         <li>Use - to exclude words</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you search for an exact phrase?</p>
       <p><b>Answer:</b> Put it in <b>quotation marks</b>.</p>`,

      [{ heading: "Exercise 42.1 — Say.", items: [
          "Name 3 search tips.",
          "How do you search for an exact phrase?",
          "What is a keyword?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you search for an exact phrase?", a: ["quotation marks", "any"] },
       { q: "What is a keyword?", a: ["important word", "any"] }]),

    D(4, "✅", "Evaluating Sources",
      "Learn to evaluate sources.",
      `<p class='big-emoji'>✅ 📰</p>
       <h3>How to Check a Source</h3>
       <ul>
         <li>Who wrote it? (author)</li>
         <li>When was it written? (date)</li>
         <li>Is it from a trusted website? (.gov, .edu)</li>
         <li>Does it match other sources?</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a trusted website type.</p>
       <p><b>Answer:</b> .gov or .edu sites.</p>`,

      [{ heading: "Exercise 43.1 — Say.", items: [
          "How do you check a source?",
          "Name 2 trusted website types.",
          "Why evaluate sources?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a trusted website type.", a: [".gov", ".edu", "any"] }]),

    D(5, "🎨", "Internet Poster",
      "Make an internet poster.",
      `<p class='big-emoji'>🎨 🌐</p>
       <p>Make a poster about safe internet use.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>What is the internet</li>
         <li>Browsers</li>
         <li>Search tips</li>
         <li>Safe browsing rules</li>
       </ul>`,

      [{ heading: "Exercise 44.1 — Draw.", items: [
          "What is the internet",
          "Browsers",
          "Search tips",
          "Safe browsing rules"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a safe browsing rule.", a: ["use with adult", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — EMAIL
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Email", days: [

    D(1, "📧", "Creating",
      "Create an email.",
      `<p class='big-emoji'>📧 ✅</p>
       <p><b>Email</b> is a way to send messages electronically.</p>
       <h3>Email Address Format</h3>
       <p>name@domain.com</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What symbol is in email addresses?</p>
       <p><b>Answer:</b> The <b>@</b> symbol.</p>`,

      [{ heading: "Exercise 45.1 — Say.", items: [
          "What is email?",
          "What is the format of an email address?",
          "What symbol is used?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is email?", a: ["electronic mail", "any"] },
       { q: "What symbol is in email addresses?", a: ["@", "at"] }]),

    D(2, "📎", "Attachments",
      "Learn about attachments.",
      `<p class='big-emoji'>📎 📄</p>
       <p>An <b>attachment</b> is a file you send with an email.</p>
       <h3>How to Attach</h3>
       <ol>
         <li>Click the paperclip 📎 icon.</li>
         <li>Choose a file from your computer.</li>
         <li>Click Open.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an attachment?</p>
       <p><b>Answer:</b> A <b>file sent with an email</b>.</p>`,

      [{ heading: "Exercise 46.1 — Say.", items: [
          "What is an attachment?",
          "How do you attach a file?",
          "What file can you attach?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an attachment?", a: ["file sent with email", "any"] },
       { q: "How do you attach?", a: ["paperclip", "any"] }]),

    D(3, "🤝", "Netiquette",
      "Learn email manners.",
      `<p class='big-emoji'>🤝 📧</p>
       <p><b>Netiquette</b> = good manners online.</p>
       <h3>Email Netiquette</h3>
       <ul>
         <li>Use polite words</li>
         <li>Write a clear subject</li>
         <li>Do not type in ALL CAPS</li>
         <li>Check your spelling</li>
         <li>Do not send junk mail (spam)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why not write in ALL CAPS?</p>
       <p><b>Answer:</b> It looks like <b>shouting</b>.</p>`,

      [{ heading: "Exercise 47.1 — Say.", items: [
          "What is netiquette?",
          "Name 3 email manners.",
          "Why not ALL CAPS?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "Why not ALL CAPS?", a: ["shouting", "any"] }]),

    D(4, "🛡️", "Safety",
      "Learn email safety.",
      `<p class='big-emoji'>🛡️ 📧</p>
       <h3>Email Safety Rules</h3>
       <ul>
         <li>Do not open emails from strangers</li>
         <li>Do not click strange links</li>
         <li>Do not share personal info</li>
         <li>Do not share your password</li>
         <li>Tell an adult if you see something strange</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you open emails from strangers?</p>
       <p><b>Answer:</b> No — do not open them.</p>`,

      [{ heading: "Exercise 48.1 — Say.", items: [
          "Name 3 email safety rules.",
          "Should you open emails from strangers?",
          "What if you see something strange?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Should you open emails from strangers?", a: ["no"] },
       { q: "What if you see something strange?", a: ["tell an adult", "any"] }]),

    D(5, "🎨", "Email Poster",
      "Make an email poster.",
      `<p class='big-emoji'>🎨 📧</p>
       <p>Make a poster about email.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Parts of an email</li>
         <li>3 netiquette rules</li>
         <li>3 safety rules</li>
       </ul>`,

      [{ heading: "Exercise 49.1 — Draw.", items: [
          "Parts of an email",
          "3 netiquette rules",
          "3 safety rules"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a part of an email.", a: ["to", "subject", "body", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — ONLINE SAFETY
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Online Safety", days: [

    D(1, "🔑", "Passwords",
      "Learn strong passwords.",
      `<p class='big-emoji'>🔑 🛡️</p>
       <h3>Strong Password Rules</h3>
       <ul>
         <li>At least 8 characters</li>
         <li>Mix letters, numbers, and symbols</li>
         <li>Do not use your name</li>
         <li>Do not share it</li>
         <li>Change it sometimes</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes a strong password?</p>
       <p><b>Answer:</b> A mix of <b>letters, numbers, and symbols</b>, at least 8 characters long.</p>`,

      [{ heading: "Exercise 50.1 — Say.", items: [
          "What makes a strong password?",
          "Why keep passwords safe?",
          "Should you share your password?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Should you share your password?", a: ["no"] },
       { q: "What makes a password strong?", a: ["letters numbers symbols", "any"] }]),

    D(2, "🔒", "Privacy",
      "Learn about privacy.",
      `<p class='big-emoji'>🔒 🔑</p>
       <p><b>Privacy</b> means keeping personal information safe.</p>
       <h3>Keep These Private</h3>
       <ul>
         <li>🏠 Home address</li>
         <li>📞 Phone number</li>
         <li>🏫 School name</li>
         <li>🔑 Passwords</li>
         <li>📸 Photos</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your address online?</p>
       <p><b>Answer:</b> <b>No</b>.</p>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "What is privacy?",
          "Name 3 things to keep private.",
          "Should you share your address?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Should you share your address online?", a: ["no"] },
       { q: "Name something to keep private.", a: ["address", "phone", "any"] }]),

    D(3, "🚫", "Cyberbullying",
      "Learn about cyberbullying.",
      `<p class='big-emoji'>🚫 😢</p>
       <p><b>Cyberbullying</b> is being mean to someone online, again and again.</p>
       <h3>What to Do</h3>
       <ol>
         <li>Do not reply.</li>
         <li>Save the messages.</li>
         <li>Tell a trusted adult.</li>
         <li>Block the person.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if you are cyberbullied?</p>
       <p><b>Answer:</b> Tell a <b>trusted adult</b>.</p>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What is cyberbullying?",
          "Name 3 things to do.",
          "What should you not do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is cyberbullying?", a: ["being mean online", "any"] },
       { q: "What should you do?", a: ["tell an adult", "any"] }]),

    D(4, "📢", "Reporting",
      "Learn how to report online problems.",
      `<p class='big-emoji'>📢 🛡️</p>
       <h3>How to Report</h3>
       <ul>
         <li>Tell a trusted adult.</li>
         <li>Use the "Report" button on websites.</li>
         <li>Block the person.</li>
         <li>Save evidence (screenshots).</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you report a problem online?</p>
       <p><b>Answer:</b> Use the <b>Report button</b> and tell an adult.</p>`,

      [{ heading: "Exercise 53.1 — Say.", items: [
          "How do you report a problem?",
          "Who should you tell?",
          "Why save evidence?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you report a problem?", a: ["report button", "any"] },
       { q: "Who should you tell?", a: ["adult", "parent", "any"] }]),

    D(5, "🎨", "Safety Poster",
      "Make a safety poster.",
      `<p class='big-emoji'>🎨 🛡️</p>
       <p>Make a poster about online safety.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Keep passwords safe</li>
         <li>Do not share personal info</li>
         <li>Do not cyberbully</li>
         <li>Report problems</li>
       </ul>`,

      [{ heading: "Exercise 54.1 — Draw.", items: [
          "Keep passwords safe",
          "Do not share personal info",
          "Do not cyberbully",
          "Report problems"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a safety rule.", a: ["keep passwords safe", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Internet",
      "Review internet.",
      `<p class='big-emoji'>🔁 🌐</p>
       <h3>Review</h3>
       <ul>
         <li>How the internet works</li>
         <li>Browsers and search tips</li>
         <li>Evaluating sources</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to visit websites.</p>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is the internet?",
          "What is a browser?",
          "Name 3 search tips.",
          "Name a trusted website type."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is the internet?", a: ["network", "any"] },
       { q: "Name a trusted website type.", a: [".gov", ".edu", "any"] }]),

    D(2, "🔁", "Review Email",
      "Review email.",
      `<p class='big-emoji'>🔁 📧</p>
       <h3>Review</h3>
       <ul>
         <li>Creating, attaching, sending</li>
         <li>Netiquette and safety</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is netiquette?</p>
       <p><b>Answer:</b> Good manners online.</p>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "What is email?",
          "What is an attachment?",
          "What is netiquette?",
          "Name 2 safety rules."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "What is an attachment?", a: ["file sent with email", "any"] }]),

    D(3, "🔁", "Review Safety",
      "Review online safety.",
      `<p class='big-emoji'>🔁 🛡️</p>
       <h3>Review</h3>
       <ul>
         <li>Passwords</li>
         <li>Privacy</li>
         <li>Cyberbullying</li>
         <li>Reporting</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your password?</p>
       <p><b>Answer:</b> No.</p>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "What is a strong password?",
          "Should you share your password?",
          "What is cyberbullying?",
          "How do you report?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Should you share your password?", a: ["no"] },
       { q: "What is cyberbullying?", a: ["being mean online", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is the internet?</li>
         <li>What is a browser?</li>
         <li>Name 3 search tips.</li>
         <li>What is email?</li>
         <li>What is an attachment?</li>
         <li>What is netiquette?</li>
         <li>What is a strong password?</li>
         <li>What is cyberbullying?</li>
         <li>How do you report a problem?</li>
         <li>Should you share your password?</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is email?", a: ["electronic mail", "any"] },
       { q: "Should you share your password?", a: ["no"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Internet (15)</li>
         <li>Part B — Email (15)</li>
         <li>Part C — Safety (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Internet (15)",
          "Part B — Email (15)",
          "Part C — Safety (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — PRESENTATIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Presentations", days: [

    D(1, "📊", "Slides",
      "Learn about slides.",
      `<p class='big-emoji'>📊 📄</p>
       <p>A <b>presentation</b> uses <b>slides</b> to show information.</p>
       <h3>Common Programs</h3>
       <ul>
         <li>Microsoft PowerPoint</li>
         <li>Google Slides</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a slide?</p>
       <p><b>Answer:</b> One <b>page</b> of a presentation.</p>`,

      [{ heading: "Exercise 59.1 — Say.", items: [
          "What is a presentation?",
          "What is a slide?",
          "Name a presentation program."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a slide?", a: ["one page of presentation", "any"] },
       { q: "Name a presentation program.", a: ["powerpoint", "google slides", "any"] }]),

    D(2, "🎨", "Design",
      "Learn design tips.",
      `<p class='big-emoji'>🎨 ✨</p>
       <h3>Design Tips</h3>
       <ul>
         <li>Use few words per slide</li>
         <li>Use large fonts</li>
         <li>Use clear images</li>
         <li>Keep colours simple</li>
         <li>Don't overcrowd</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why use few words per slide?</p>
       <p><b>Answer:</b> So your audience can <b>read easily</b>.</p>`,

      [{ heading: "Exercise 60.1 — Say.", items: [
          "Name 3 design tips.",
          "Why use large fonts?",
          "Why keep colours simple?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a design tip.", a: ["few words", "large fonts", "any"] }]),

    D(3, "📝", "Content",
      "Learn about content.",
      `<p class='big-emoji'>📝 📊</p>
       <h3>Content Structure</h3>
       <ol>
         <li>Title slide — topic and your name</li>
         <li>Introduction slide — what it's about</li>
         <li>Body slides — main information</li>
         <li>Conclusion slide — summary</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is on the title slide?</p>
       <p><b>Answer:</b> The <b>topic and your name</b>.</p>`,

      [{ heading: "Exercise 61.1 — Say.", items: [
          "What is on the title slide?",
          "What is on the conclusion slide?",
          "Name the 4 parts of a presentation."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is on the title slide?", a: ["topic and name", "any"] }]),

    D(4, "🎤", "Presenting",
      "Learn to present.",
      `<p class='big-emoji'>🎤 📊</p>
       <h3>Presentation Tips</h3>
       <ul>
         <li>Stand up straight</li>
         <li>Speak clearly and slowly</li>
         <li>Look at your audience</li>
         <li>Use simple sentences</li>
         <li>Answer questions</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How should you speak?</p>
       <p><b>Answer:</b> <b>Clearly and slowly</b>.</p>`,

      [{ heading: "Exercise 62.1 — Say.", items: [
          "Name 3 presentation tips.",
          "How should you speak?",
          "Why look at your audience?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How should you speak?", a: ["clearly", "slowly", "any"] }]),

    D(5, "🎨", "Presentation Poster",
      "Make a presentation poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Make a poster about making presentations.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>A title slide</li>
         <li>A body slide</li>
         <li>A conclusion slide</li>
         <li>3 presentation tips</li>
       </ul>`,

      [{ heading: "Exercise 63.1 — Draw.", items: [
          "Title slide",
          "Body slide",
          "Conclusion slide",
          "3 presentation tips"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a presentation tip.", a: ["speak clearly", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — MULTIMEDIA
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Multimedia", days: [

    D(1, "📝", "Text",
      "Learn about text in multimedia.",
      `<p class='big-emoji'>📝 🔤</p>
       <p><b>Multimedia</b> uses more than one type of media together.</p>
       <h3>Text</h3>
       <p>Text is words on a screen. We can change font, size, and colour.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is text?</p>
       <p><b>Answer:</b> <b>Words</b> on a screen.</p>`,

      [{ heading: "Exercise 64.1 — Say.", items: [
          "What is multimedia?",
          "What is text?",
          "How can we change text?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is text?", a: ["words", "any"] }]),

    D(2, "🔊", "Audio",
      "Learn about audio.",
      `<p class='big-emoji'>🔊 🎵</p>
       <h3>Audio Types</h3>
       <ul>
         <li>🎵 Music</li>
         <li>🗣️ Voice recordings</li>
         <li>🔔 Sound effects</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> <b>Sound</b>.</p>`,

      [{ heading: "Exercise 65.1 — Say.", items: [
          "What is audio?",
          "Name 3 types of audio.",
          "Where can we find audio?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is audio?", a: ["sound", "any"] },
       { q: "Name a type of audio.", a: ["music", "voice", "any"] }]),

    D(3, "🖼️", "Images",
      "Learn about images.",
      `<p class='big-emoji'>🖼️ 📸</p>
       <h3>Image Types</h3>
       <ul>
         <li>📸 Photographs</li>
         <li>🎨 Drawings</li>
         <li>📊 Charts and graphs</li>
         <li>😀 Icons and emojis</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 types of images.</p>
       <p><b>Answer:</b> Photographs, drawings, and charts.</p>`,

      [{ heading: "Exercise 66.1 — Say.", items: [
          "Name 3 types of images.",
          "Where do photographs come from?",
          "What is a drawing?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a type of image.", a: ["photo", "drawing", "any"] }]),

    D(4, "🎥", "Video",
      "Learn about video.",
      `<p class='big-emoji'>🎥 📺</p>
       <h3>Video</h3>
       <p>Video is moving pictures with sound.</p>
       <h3>Video Buttons</h3>
       <ul>
         <li>▶️ Play</li>
         <li>⏸️ Pause</li>
         <li>⏹️ Stop</li>
         <li>⏪ Rewind</li>
         <li>⏩ Forward</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is video?</p>
       <p><b>Answer:</b> <b>Moving pictures with sound</b>.</p>`,

      [{ heading: "Exercise 67.1 — Say.", items: [
          "What is video?",
          "Name 3 video buttons.",
          "What can videos do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is video?", a: ["moving pictures with sound", "any"] },
       { q: "Name a video button.", a: ["play", "pause", "any"] }]),

    D(5, "🎨", "Multimedia Poster",
      "Make a multimedia poster.",
      `<p class='big-emoji'>🎨 📽️</p>
       <p>Make a poster about the types of media.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>📝 Text</li>
         <li>🔊 Audio</li>
         <li>🖼️ Image</li>
         <li>🎥 Video</li>
       </ul>`,

      [{ heading: "Exercise 68.1 — Draw.", items: [
          "Text", "Audio", "Image", "Video"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name 3 types of media.", a: ["text audio image", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — DIGITAL CITIZENSHIP
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Digital Citizenship", days: [

    D(1, "⚖️", "Rights",
      "Learn about digital rights.",
      `<p class='big-emoji'>⚖️ ✅</p>
       <h3>Digital Rights</h3>
       <ul>
         <li>The right to use the internet</li>
         <li>The right to be safe online</li>
         <li>The right to privacy</li>
         <li>The right to be respected</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a digital right.</p>
       <p><b>Answer:</b> The right to <b>be safe online</b>.</p>`,

      [{ heading: "Exercise 69.1 — Say.", items: [
          "Name 3 digital rights.",
          "Why do we have rights?",
          "What is privacy?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a digital right.", a: ["be safe", "privacy", "any"] }]),

    D(2, "📋", "Responsibilities",
      "Learn about digital responsibilities.",
      `<p class='big-emoji'>📋 ✅</p>
       <h3>Digital Responsibilities</h3>
       <ul>
         <li>Be kind to others</li>
         <li>Keep your password safe</li>
         <li>Do not cyberbully</li>
         <li>Follow the rules</li>
         <li>Respect other people's work</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a responsibility.</p>
       <p><b>Answer:</b> <b>Be kind to others</b>.</p>`,

      [{ heading: "Exercise 70.1 — Say.", items: [
          "Name 3 responsibilities.",
          "Why be responsible online?",
          "What is cyberbullying?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a responsibility.", a: ["be kind", "keep password safe", "any"] }]),

    D(3, "🤝", "Respect",
      "Learn to show respect online.",
      `<p class='big-emoji'>🤝 💬</p>
       <h3>Showing Respect</h3>
       <ul>
         <li>Use polite words</li>
         <li>Do not write in ALL CAPS</li>
         <li>Do not share embarrassing photos</li>
         <li>Respect other opinions</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you show respect online?</p>
       <p><b>Answer:</b> By using <b>polite words</b> and respecting others.</p>`,

      [{ heading: "Exercise 71.1 — Say.", items: [
          "How do you show respect online?",
          "Why not write in ALL CAPS?",
          "What should you not share?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you show respect?", a: ["polite words", "any"] }]),

    D(4, "👣", "Digital Footprint",
      "Learn about your digital footprint.",
      `<p class='big-emoji'>👣 💻</p>
       <p>Your <b>digital footprint</b> is the trail of information you leave online.</p>
       <h3>What Leaves a Footprint</h3>
       <ul>
         <li>Posts and comments</li>
         <li>Photos you share</li>
         <li>Websites you visit</li>
         <li>Messages you send</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a digital footprint?</p>
       <p><b>Answer:</b> The <b>trail of information</b> you leave online.</p>`,

      [{ heading: "Exercise 72.1 — Say.", items: [
          "What is a digital footprint?",
          "What leaves a digital footprint?",
          "Why be careful online?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a digital footprint?", a: ["trail online", "any"] }]),

    D(5, "🎨", "Citizenship Poster",
      "Make a citizenship poster.",
      `<p class='big-emoji'>🎨 🌍</p>
       <p>Make a poster about good digital citizenship.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Be kind</li>
         <li>Stay safe</li>
         <li>Respect others</li>
         <li>Think before you post</li>
       </ul>`,

      [{ heading: "Exercise 73.1 — Draw.", items: [
          "Be kind",
          "Stay safe",
          "Respect others",
          "Think before you post"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a good digital citizen trait.", a: ["kind", "safe", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Presentations",
      "Review presentations.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Slides, design, content, presenting</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a slide?</p>
       <p><b>Answer:</b> One page of a presentation.</p>`,

      [{ heading: "Exercise 74.1 — Answer.", items: [
          "What is a presentation?",
          "What is a slide?",
          "Name 3 design tips.",
          "Name 3 presentation tips."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a slide?", a: ["one page", "any"] },
       { q: "Name a design tip.", a: ["few words", "any"] }]),

    D(2, "🔁", "Review Multimedia",
      "Review multimedia.",
      `<p class='big-emoji'>🔁 🎨</p>
       <h3>Review</h3>
       <ul>
         <li>Text, audio, images, video</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> Sound.</p>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "What is multimedia?",
          "Name 3 types of media.",
          "What is audio?",
          "What is video?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is video?", a: ["moving pictures with sound", "any"] }]),

    D(3, "🔁", "Review Citizenship",
      "Review digital citizenship.",
      `<p class='big-emoji'>🔁 🌍</p>
       <h3>Review</h3>
       <ul>
         <li>Rights, responsibilities, respect</li>
         <li>Digital footprint</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a digital footprint?</p>
       <p><b>Answer:</b> Trail of information you leave online.</p>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
          "Name 2 digital rights.",
          "Name 2 responsibilities.",
          "What is a digital footprint?",
          "How do you show respect?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a digital right.", a: ["be safe", "privacy", "any"] },
       { q: "What is a digital footprint?", a: ["trail online", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a presentation?</li>
         <li>What is a slide?</li>
         <li>Name a design tip.</li>
         <li>What is multimedia?</li>
         <li>Name 3 types of media.</li>
         <li>What is audio?</li>
         <li>What is video?</li>
         <li>Name a digital right.</li>
         <li>Name a responsibility.</li>
         <li>What is a digital footprint?</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is a slide?", a: ["one page", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Presentations (15)</li>
         <li>Part B — Multimedia (15)</li>
         <li>Part C — Citizenship (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Presentations (15)",
          "Part B — Multimedia (15)",
          "Part C — Citizenship (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — DATABASES
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Databases", days: [

    D(1, "🗄️", "Records",
      "Learn about records.",
      `<p class='big-emoji'>🗄️ 📋</p>
       <p>A <b>database</b> is an organized collection of information.</p>
       <p>A <b>record</b> is one row of information about one person or thing.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a record?</p>
       <p><b>Answer:</b> <b>One row</b> of information.</p>`,

      [{ heading: "Exercise 78.1 — Say.", items: [
          "What is a database?",
          "What is a record?",
          "Give an example of a record."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a database?", a: ["organized collection of information", "any"] },
       { q: "What is a record?", a: ["one row", "any"] }]),

    D(2, "🗄️", "Fields",
      "Learn about fields.",
      `<p class='big-emoji'>🗄️ 📋</p>
       <p>A <b>field</b> is one piece of information (like name, age).</p>
       <h3>Example Table</h3>
       <table border="1">
         <tr><th>Name</th><th>Age</th><th>Class</th></tr>
         <tr><td>Ama</td><td>9</td><td>4A</td></tr>
         <tr><td>Kofi</td><td>10</td><td>4B</td></tr>
       </table>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One <b>piece of information</b>.</p>`,

      [{ heading: "Exercise 79.1 — Say.", items: [
          "What is a field?",
          "Name 3 fields in a pupil database.",
          "What is the difference between a record and a field?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] }]),

    D(3, "🗄️", "Sorting",
      "Learn about sorting.",
      `<p class='big-emoji'>🗄️ 🔢</p>
       <p><b>Sorting</b> means arranging data in order.</p>
       <h3>Sorting Types</h3>
       <ul>
         <li>Ascending — smallest to largest</li>
         <li>Descending — largest to smallest</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Sort A, C, B ascending.</p>
       <p><b>Answer:</b> A, B, C.</p>`,

      [{ heading: "Exercise 80.1 — Sort.", items: [
          "Sort A, C, B ascending",
          "Sort 5, 1, 3 ascending",
          "Sort Z, X, Y ascending",
          "Sort 10, 5, 20 ascending",
          "Sort 1, 3, 2 descending"
        ]}],

      `<p><b>80.1:</b> 1. A, B, C 2. 1, 3, 5 3. X, Y, Z 4. 5, 10, 20 5. 3, 2, 1</p>`,

      [{ q: "What is ascending order?", a: ["smallest to largest", "any"] },
       { q: "What is descending order?", a: ["largest to smallest", "any"] }]),

    D(4, "🗄️", "Searching",
      "Learn about searching.",
      `<p class='big-emoji'>🗄️ 🔎</p>
       <p><b>Searching</b> means looking for information in a database.</p>
       <h3>Search Examples</h3>
       <ul>
         <li>Find all pupils aged 9</li>
         <li>Find all books by a certain author</li>
         <li>Find all contacts starting with A</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you find a specific pupil?</p>
       <p><b>Answer:</b> <b>Search</b> for their name.</p>`,

      [{ heading: "Exercise 81.1 — Say.", items: [
          "What is searching?",
          "Give an example search.",
          "Why is searching useful?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is searching?", a: ["looking for information", "any"] }]),

    D(5, "🎨", "Database Poster",
      "Make a database poster.",
      `<p class='big-emoji'>🎨 🗄️</p>
       <p>Make a poster about databases.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>A table with fields</li>
         <li>A record example</li>
         <li>Sorting</li>
         <li>Searching</li>
       </ul>`,

      [{ heading: "Exercise 82.1 — Draw.", items: [
          "A table",
          "Fields",
          "A record",
          "Sorting",
          "Searching"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — CODING PROJECT
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Coding Project", days: [

    D(1, "📋", "Planning",
      "Plan a coding project.",
      `<p class='big-emoji'>📋 💻</p>
       <h3>Plan Your Project</h3>
       <ol>
         <li>What will your program do?</li>
         <li>Who is it for?</li>
         <li>What commands will you use?</li>
         <li>What will it look like?</li>
       </ol>
       <h3>Project Ideas</h3>
       <ul>
         <li>A quiz game</li>
         <li>A story</li>
         <li>A number guessing game</li>
         <li>A drawing app</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the first step of planning?</p>
       <p><b>Answer:</b> Decide <b>what your program will do</b>.</p>`,

      [{ heading: "Exercise 83.1 — Plan your project.", items: [
          "What will it do?",
          "Who is it for?",
          "What commands will you use?",
          "What will it look like?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the first step of planning?", a: ["decide what it does", "any"] }]),

    D(2, "🔨", "Building",
      "Build your program.",
      `<p class='big-emoji'>🔨 💻</p>
       <h3>Building Your Program</h3>
       <ol>
         <li>Open your coding app.</li>
         <li>Add your first block.</li>
         <li>Add more blocks step by step.</li>
         <li>Save as you go.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do first when building?</p>
       <p><b>Answer:</b> Add your <b>first block</b>.</p>`,

      [{ heading: "Exercise 84.1 — Build.", items: [
          "Add your first block.",
          "Add more blocks.",
          "Save your work."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do first when building?", a: ["add first block", "any"] }]),

    D(3, "🧪", "Testing",
      "Test your program.",
      `<p class='big-emoji'>🧪 ✅</p>
       <h3>Testing Your Program</h3>
       <ol>
         <li>Run your program.</li>
         <li>Watch what happens.</li>
         <li>Check if it works as planned.</li>
         <li>Note any problems.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we test?</p>
       <p><b>Answer:</b> To check if it <b>works correctly</b>.</p>`,

      [{ heading: "Exercise 85.1 — Test.", items: [
          "Run your program.",
          "Did it work?",
          "What problems did you find?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why test?", a: ["to check it works", "any"] }]),

    D(4, "🐞", "Debugging",
      "Fix errors in your program.",
      `<p class='big-emoji'>🐞 🔧</p>
       <h3>Debugging Your Program</h3>
       <ol>
         <li>Find the error.</li>
         <li>Read the error message.</li>
         <li>Fix the error.</li>
         <li>Test again.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is debugging?</p>
       <p><b>Answer:</b> <b>Fixing errors</b> in a program.</p>`,

      [{ heading: "Exercise 86.1 — Debug.", items: [
          "Find the bug.",
          "Fix it.",
          "Test again."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is debugging?", a: ["fixing errors", "any"] }]),

    D(5, "🎤", "Presenting",
      "Present your project.",
      `<p class='big-emoji'>🎤 💻</p>
       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Say what your program does.</li>
         <li>Show it running.</li>
         <li>Say what you learned.</li>
         <li>Answer questions.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you say first?</p>
       <p><b>Answer:</b> What your <b>program does</b>.</p>`,

      [{ heading: "Exercise 87.1 — Present.", items: [
          "Show your program.",
          "Say what it does.",
          "Say what you learned."
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: "What do you say first?", a: ["what program does", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — COMPUTATIONAL THINKING
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Computational Thinking", days: [

    D(1, "🧩", "Decomposition",
      "Learn about decomposition.",
      `<p class='big-emoji'>🧩 🔨</p>
       <p><b>Decomposition</b> means breaking a big problem into smaller parts.</p>
       <h3>Example</h3>
       <p>Big problem: Clean the house.</p>
       <p>Smaller parts: Clean the bedroom, kitchen, sitting room.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is decomposition?</p>
       <p><b>Answer:</b> Breaking a <b>big problem into smaller parts</b>.</p>`,

      [{ heading: "Exercise 88.1 — Decompose.", items: [
          "Plan a party",
          "Write a story",
          "Tidy your room"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is decomposition?", a: ["breaking into smaller parts", "any"] }]),

    D(2, "🔍", "Patterns",
      "Learn about pattern recognition.",
      `<p class='big-emoji'>🔍 🔢</p>
       <p><b>Pattern recognition</b> means finding things that repeat.</p>
       <h3>Examples</h3>
       <ul>
         <li>Number patterns: 2, 4, 6, 8…</li>
         <li>Shape patterns: 🔴🔵🔴🔵…</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes next: 2, 4, 6, 8…?</p>
       <p><b>Answer:</b> <b>10</b>.</p>`,

      [{ heading: "Exercise 89.1 — Find the pattern.", items: [
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "10, 20, 30, 40, ___",
          "1, 3, 5, 7, ___",
          "3, 6, 9, 12, ___"
        ]}],

      `<p><b>89.1:</b> 1. 10 2. 25 3. 50 4. 9 5. 15</p>`,

      [{ q: "What is pattern recognition?", a: ["finding repeating things", "any"] }]),

    D(3, "🎯", "Abstraction",
      "Learn about abstraction.",
      `<p class='big-emoji'>🎯 🔍</p>
       <p><b>Abstraction</b> means focusing on the important details and ignoring the rest.</p>
       <h3>Example</h3>
       <p>To describe a bus, we say: it's big, has 4 wheels. We don't mention the colour of the seats.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is abstraction?</p>
       <p><b>Answer:</b> Focusing on <b>important details</b>.</p>`,

      [{ heading: "Exercise 90.1 — Say.", items: [
          "What is abstraction?",
          "What are the important details of a chair?",
          "What can we ignore?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is abstraction?", a: ["focus on important details", "any"] }]),

    D(4, "📋", "Algorithms",
      "Learn algorithm design.",
      `<p class='big-emoji'>📋 🔢</p>
       <p><b>Algorithm design</b> is writing clear steps to solve a problem.</p>
       <h3>Steps</h3>
       <ol>
         <li>Understand the problem.</li>
         <li>Break it into smaller parts.</li>
         <li>Find patterns.</li>
         <li>Write the steps.</li>
         <li>Test the algorithm.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is algorithm design?</p>
       <p><b>Answer:</b> <b>Writing steps</b> to solve a problem.</p>`,

      [{ heading: "Exercise 91.1 — Write an algorithm.", items: [
          "Making a sandwich",
          "Washing hands",
          "Crossing the road"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is algorithm design?", a: ["writing steps to solve", "any"] }]),

    D(5, "🎨", "Thinking Poster",
      "Make a computational thinking poster.",
      `<p class='big-emoji'>🎨 🧩</p>
       <p>Make a poster about computational thinking.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Decomposition — break it down</li>
         <li>Pattern recognition — find patterns</li>
         <li>Abstraction — focus on important</li>
         <li>Algorithm — write steps</li>
       </ul>`,

      [{ heading: "Exercise 92.1 — Draw.", items: [
          "Decomposition",
          "Pattern recognition",
          "Abstraction",
          "Algorithm"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name the 4 parts of computational thinking.", a: ["decomposition pattern abstraction algorithm", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Databases",
      "Review databases.",
      `<p class='big-emoji'>🔁 🗄️</p>
       <h3>Review</h3>
       <ul>
         <li>Records, fields</li>
         <li>Sorting, searching</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One piece of information.</p>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "What is a database?",
          "What is a record?",
          "What is a field?",
          "What is sorting?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] },
       { q: "What is a field?", a: ["one piece of information", "any"] }]),

    D(2, "🔁", "Review Projects",
      "Review coding projects.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Review</h3>
       <ul>
         <li>Planning, building, testing, debugging</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is debugging?</p>
       <p><b>Answer:</b> Fixing errors.</p>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "What is the first step of planning?",
          "Why do we test?",
          "What is debugging?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is debugging?", a: ["fixing errors", "any"] }]),

    D(3, "🔁", "Review Thinking",
      "Review computational thinking.",
      `<p class='big-emoji'>🔁 🧩</p>
       <h3>Review</h3>
       <ul>
         <li>Decomposition, patterns, abstraction, algorithms</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is decomposition?</p>
       <p><b>Answer:</b> Breaking into smaller parts.</p>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "What is decomposition?",
          "What is pattern recognition?",
          "What is abstraction?",
          "What is algorithm design?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is decomposition?", a: ["breaking into smaller parts", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a database?</li>
         <li>What is a record?</li>
         <li>What is a field?</li>
         <li>What is sorting?</li>
         <li>What is the first step of planning?</li>
         <li>Why do we test?</li>
         <li>What is debugging?</li>
         <li>What is decomposition?</li>
         <li>What is pattern recognition?</li>
         <li>What is abstraction?</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] },
       { q: "What is decomposition?", a: ["breaking into smaller parts", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Databases (15)</li>
         <li>Part B — Projects (15)</li>
         <li>Part C — Thinking (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Databases (15)",
          "Part B — Projects (15)",
          "Part C — Thinking (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — ARTIFICIAL INTELLIGENCE
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Artificial Intelligence", days: [

    D(1, "🤖", "What is AI?",
      "Learn about AI.",
      `<p class='big-emoji'>🤖 💻</p>
       <p><b>Artificial Intelligence (AI)</b> is when computers do tasks that usually need human intelligence.</p>
       <h3>Examples</h3>
       <ul>
         <li>Voice assistants (Siri, Alexa)</li>
         <li>Self-driving cars</li>
         <li>Chatbots</li>
         <li>Face recognition</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is AI?</p>
       <p><b>Answer:</b> Computers doing tasks that usually need <b>human intelligence</b>.</p>`,

      [{ heading: "Exercise 97.1 — Say.", items: [
          "What is AI?",
          "Name 3 examples of AI.",
          "How does AI help us?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is AI?", a: ["computers doing human-like tasks", "any"] },
       { q: "Name an example of AI.", a: ["siri", "alexa", "any"] }]),

    D(2, "🎯", "Examples",
      "Learn more AI examples.",
      `<p class='big-emoji'>🎯 🤖</p>
       <h3>AI Around Us</h3>
       <ul>
         <li>📱 Voice assistants on phones</li>
         <li>🎬 Video recommendations (YouTube, Netflix)</li>
         <li>📸 Face filters on cameras</li>
         <li>🛒 Online shopping recommendations</li>
         <li>🚗 Self-driving cars</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What AI is in a phone?</p>
       <p><b>Answer:</b> <b>Voice assistants</b> like Siri.</p>`,

      [{ heading: "Exercise 98.1 — Say.", items: [
          "Name 3 AI examples you have seen.",
          "How does YouTube use AI?",
          "How do cameras use AI?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name an AI example.", a: ["siri", "youtube", "any"] }]),

    D(3, "💡", "Uses",
      "Learn how AI is used.",
      `<p class='big-emoji'>💡 🏥 🏫</p>
       <h3>AI Uses</h3>
       <ul>
         <li>🏥 In medicine — helping doctors</li>
         <li>🏫 In schools — learning apps</li>
         <li>🚗 In transport — self-driving cars</li>
         <li>🎮 In games — smart opponents</li>
         <li>🌾 In farming — crop monitoring</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is AI used in medicine?</p>
       <p><b>Answer:</b> AI helps doctors <b>diagnose diseases</b>.</p>`,

      [{ heading: "Exercise 99.1 — Say.", items: [
          "How is AI used in medicine?",
          "How is AI used in schools?",
          "How is AI used in transport?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is AI used in medicine?", a: ["helps doctors", "any"] }]),

    D(4, "⚖️", "Ethics",
      "Learn about AI ethics.",
      `<p class='big-emoji'>⚖️ 🤔</p>
       <h3>AI Ethics Questions</h3>
       <ul>
         <li>Should AI make decisions for us?</li>
         <li>What if AI makes a mistake?</li>
         <li>Should AI take people's jobs?</li>
         <li>Is AI always fair?</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we think about AI ethics?</p>
       <p><b>Answer:</b> Because AI can affect people's <b>lives and jobs</b>.</p>`,

      [{ heading: "Exercise 100.1 — Say.", items: [
          "Should AI make decisions for us?",
          "What if AI makes a mistake?",
          "Should AI take people's jobs?",
          "Is AI always fair?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why think about AI ethics?", a: ["affects people", "any"] }]),

    D(5, "🎨", "AI Poster",
      "Make an AI poster.",
      `<p class='big-emoji'>🎨 🤖</p>
       <p>Make a poster about AI.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>What is AI?</li>
         <li>3 examples</li>
         <li>3 uses</li>
         <li>1 ethics question</li>
       </ul>`,

      [{ heading: "Exercise 101.1 — Draw.", items: [
          "What is AI",
          "3 examples",
          "3 uses",
          "1 ethics question"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name an example of AI.", a: ["siri", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — CODING PROJECT 2
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Coding Project 2", days: [

    D(1, "📋", "Design",
      "Design a bigger coding project.",
      `<p class='big-emoji'>📋 💻</p>
       <h3>Design Steps</h3>
       <ol>
         <li>Choose a topic.</li>
         <li>Plan the features.</li>
         <li>Draw a sketch.</li>
         <li>Write pseudocode.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes first in design?</p>
       <p><b>Answer:</b> Choosing a <b>topic</b>.</p>`,

      [{ heading: "Exercise 102.1 — Design.", items: [
          "Choose a topic",
          "Plan features",
          "Draw a sketch",
          "Write pseudocode"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What comes first?", a: ["choose topic", "any"] }]),

    D(2, "🔨", "Build",
      "Build your project.",
      `<p class='big-emoji'>🔨 💻</p>
       <h3>Building Steps</h3>
       <ol>
         <li>Add blocks step by step.</li>
         <li>Save often.</li>
         <li>Test small parts.</li>
         <li>Add more features.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why save often?</p>
       <p><b>Answer:</b> So you don't <b>lose your work</b>.</p>`,

      [{ heading: "Exercise 103.1 — Build.", items: [
          "Add blocks",
          "Save often",
          "Test small parts"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why save often?", a: ["don't lose work", "any"] }]),

    D(3, "🧪", "Test",
      "Test your project.",
      `<p class='big-emoji'>🧪 ✅</p>
       <h3>Testing Steps</h3>
       <ol>
         <li>Run your program.</li>
         <li>Try different inputs.</li>
         <li>Check for errors.</li>
         <li>Note any problems.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do when testing?</p>
       <p><b>Answer:</b> Run the program and <b>check for errors</b>.</p>`,

      [{ heading: "Exercise 104.1 — Test.", items: [
          "Run the program",
          "Try different inputs",
          "Check for errors"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do when testing?", a: ["run and check", "any"] }]),

    D(4, "🎤", "Present",
      "Present your project.",
      `<p class='big-emoji'>🎤 💻</p>
       <h3>Presentation Steps</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Say what your program does.</li>
         <li>Show it running.</li>
         <li>Say what you learned.</li>
         <li>Answer questions.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you show first?</p>
       <p><b>Answer:</b> What the <b>program does</b>.</p>`,

      [{ heading: "Exercise 105.1 — Present.", items: [
          "Show your program",
          "Say what it does",
          "Say what you learned"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you show first?", a: ["what program does", "any"] }]),

    D(5, "📁", "Portfolio",
      "Add to your portfolio.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Add your project to your portfolio.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your design</li>
         <li>Your code</li>
         <li>Your testing notes</li>
         <li>Your presentation notes</li>
       </ul>`,

      [{ heading: "Exercise 106.1 — Add to portfolio.", items: [
          "Design",
          "Code",
          "Testing notes",
          "Presentation notes"
        ]}],

      `<p>⭐ for a complete portfolio.</p>`,

      [{ q: "What goes in your portfolio?", a: ["design code notes", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Digital Literacy",
      "Revise digital literacy.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Revise</h3>
       <ul>
         <li>Hardware, software, OS</li>
         <li>Files and folders</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is hardware?</p>
       <p><b>Answer:</b> Physical parts you can touch.</p>`,

      [{ heading: "Exercise 107.1 — Answer.", items: [
          "What is hardware?",
          "What is software?",
          "What does an OS do?",
          "What holds files?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is hardware?", a: ["physical parts", "any"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] }]),

    D(2, "🔁", "Algorithms",
      "Revise algorithms.",
      `<p class='big-emoji'>🔁 📋</p>
       <h3>Revise</h3>
       <ul>
         <li>Steps, sequencing, flowcharts, pseudocode</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> Set of steps.</p>`,

      [{ heading: "Exercise 108.1 — Answer.", items: [
          "What is an algorithm?",
          "What is a flowchart?",
          "What is pseudocode?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "What is pseudocode?", a: ["plain English steps", "any"] }]),

    D(3, "🔁", "Internet",
      "Revise internet.",
      `<p class='big-emoji'>🔁 🌐</p>
       <h3>Revise</h3>
       <ul>
         <li>Browsers, search tips, evaluating sources</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to visit websites.</p>`,

      [{ heading: "Exercise 109.1 — Answer.", items: [
          "What is the internet?",
          "What is a browser?",
          "Name 3 search tips.",
          "Name a trusted website type."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a browser?", a: ["visits websites", "any"] },
       { q: "Name a trusted website type.", a: [".gov", ".edu", "any"] }]),

    D(4, "🔁", "Databases",
      "Revise databases.",
      `<p class='big-emoji'>🔁 🗄️</p>
       <h3>Revise</h3>
       <ul>
         <li>Records, fields, sorting, searching</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One piece of information.</p>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "What is a database?",
          "What is a record?",
          "What is a field?",
          "What is sorting?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] },
       { q: "What is a field?", a: ["one piece of information", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What is an algorithm?</li>
         <li>What is pseudocode?</li>
         <li>What is the internet?</li>
         <li>What is a browser?</li>
         <li>What is email?</li>
         <li>What is a database?</li>
         <li>What is a field?</li>
         <li>What is AI?</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is hardware?", a: ["physical parts", "any"] },
       { q: "What is AI?", a: ["computers doing human-like tasks", "any"] }])
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
         <li>Digital literacy</li>
         <li>Word processing</li>
         <li>Spreadsheets</li>
         <li>Algorithms and coding</li>
         <li>Debugging</li>
         <li>Internet and email</li>
         <li>Online safety</li>
         <li>Presentations and multimedia</li>
         <li>Digital citizenship</li>
         <li>Databases</li>
         <li>Computational thinking</li>
         <li>Artificial intelligence</li>
         <li>Coding project</li>
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
          "Draw your favourite computing topic."
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: "Name a topic you liked.", a: ["any"] },
       { q: "Name a new word you learned.", a: ["any"] }]),

    D(2, "📁", "Portfolio",
      "Finalise your portfolio.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Finalise your <b>portfolio</b> of computing work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best poster</li>
         <li>Your best document</li>
         <li>Your best spreadsheet</li>
         <li>Your best algorithm</li>
         <li>Your best program</li>
       </ul>`,

      [{ heading: "Exercise 113.1 — Finalise portfolio.", items: [
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
      "Celebrate your year of computing.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Grade 4 Computing! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>💻 Show one program or poster.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 4 Computing! I can use a computer, write programs, and stay safe online!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Show one program or poster.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 5?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a computing champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can use a computer!"</li>
         <li>⭐ "I can write programs!"</li>
         <li>⭐ "I can think like a computer scientist!"</li>
       </ul>
       <h3>What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>
       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself as a computing expert. Add 3 big stars around you.</p>`,

      [{ heading: "Exercise 116.1 — Big Star Day", items: [
          'Say "I can use a computer!"',
          'Say "I can write programs!"',
          'Say "I can think like a computer scientist!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of computing!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];