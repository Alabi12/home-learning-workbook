// src/data/grade3/computing.js
// Grade 3 Computing — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Digital Literacy · Algorithms & Programming · Internet & Communication ·
//          Productivity Software · Digital Citizenship · Computational Thinking

import { D } from '../helpers.js';

export const computing = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — DIGITAL LITERACY
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Digital Literacy", days: [

    D(1, "💻", "What is a Computer?",
      "Understand what a computer is.",
      `<p class='big-emoji'>💻 🖥️ 📱</p>
       <p>A <b>computer</b> is an electronic machine that takes <b>input</b>, <b>processes</b> it, gives <b>output</b>, and <b>stores</b> information.</p>
       <h3>The 4 Jobs of a Computer</h3>
       <ol>
         <li><b>Input</b> — takes in information (typing, clicking)</li>
         <li><b>Process</b> — works on the information</li>
         <li><b>Output</b> — shows results (screen, printer)</li>
         <li><b>Storage</b> — keeps information for later</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a computer do with information?</p>
       <p><b>Answer:</b> It <b>processes</b> it and gives output.</p>`,

      [{ heading: "Exercise 1.1 — Fill in the blanks.", items: [
          "A computer takes ___.", "It ___ the information.",
          "It gives ___.", "It ___ information."
        ]},
       { heading: "Exercise 1.2 — Answer.", items: [
          "What is a computer?",
          "Name 2 things a computer can do."
        ]}],

      `<p>1. input 2. processes 3. output 4. stores</p>`,

      [{ q: "What does a computer take?", a: ["input"] },
       { q: "What does it give?", a: ["output"] },
       { q: "What does a computer do with information?", a: ["processes", "any"] }]),

    D(2, "🖥️", "Hardware",
      "Understand hardware.",
      `<p class='big-emoji'>🖥️ ⌨️ 🖱️</p>
       <p><b>Hardware</b> = the <b>physical parts</b> of a computer that you can <b>touch</b>.</p>
       <h3>Examples of Hardware</h3>
       <ul>
         <li>🖥️ Monitor</li>
         <li>⌨️ Keyboard</li>
         <li>🖱️ Mouse</li>
         <li>🖨️ Printer</li>
         <li>🔊 Speaker</li>
         <li>🖥️ CPU (the tower)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a monitor hardware?</p>
       <p><b>Answer:</b> Yes, a monitor is <b>hardware</b> because you can touch it.</p>`,

      [{ heading: "Exercise 2.1 — List 5 hardware parts.", items: [
          "monitor", "keyboard", "mouse", "CPU", "printer"
        ]},
       { heading: "Exercise 2.2 — Answer.", items: [
          "What is hardware?",
          "Name 3 hardware parts."
        ]}],

      `<p>All correct.</p>`,

      [{ q: "Is a monitor hardware?", a: ["yes"] },
       { q: "Is a keyboard hardware?", a: ["yes"] },
       { q: "What is hardware?", a: ["physical parts you can touch", "any"] }]),

    D(3, "📀", "Software",
      "Understand software.",
      `<p class='big-emoji'>📀 💻 📱</p>
       <p><b>Software</b> = <b>programs</b> that tell the computer what to do. You <b>cannot touch</b> software.</p>
       <h3>Examples of Software</h3>
       <ul>
         <li>🪟 Windows (operating system)</li>
         <li>📝 MS Word (word processing)</li>
         <li>🎨 Paint (drawing)</li>
         <li>🌐 Chrome (browser)</li>
         <li>📓 Notepad (text)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is Windows hardware or software?</p>
       <p><b>Answer:</b> Windows is <b>software</b> because you cannot touch it.</p>`,

      [{ heading: "Exercise 3.1 — List 5 software programs.", items: [
          "Windows", "MS Word", "Paint", "Chrome", "Notepad"
        ]},
       { heading: "Exercise 3.2 — Answer.", items: [
          "What is software?",
          "Name 3 software programs."
        ]}],

      `<p>All correct.</p>`,

      [{ q: "Is Windows software?", a: ["yes"] },
       { q: "Is MS Word software?", a: ["yes"] },
       { q: "What is software?", a: ["programs", "any"] }]),

    D(4, "⌨️", "Input & Output",
      "Classify devices.",
      `<p class='big-emoji'>⌨️ 🖥️ 🔊</p>
       <p><b>Input devices</b> put information <b>into</b> the computer.</p>
       <p><b>Output devices</b> give information <b>out of</b> the computer.</p>
       <h3>Examples</h3>
       <ul>
         <li>⌨️ Input: keyboard, mouse, microphone</li>
         <li>🖥️ Output: monitor, printer, speaker</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a keyboard input or output?</p>
       <p><b>Answer:</b> A keyboard is <b>input</b> — you type into the computer.</p>`,

      [{ heading: "Exercise 4.1 — Classify.", items: [
          "keyboard", "monitor", "mouse", "printer", "speaker"
        ]},
       { heading: "Exercise 4.2 — Answer.", items: [
          "Name 3 input devices.",
          "Name 3 output devices."
        ]}],

      `<p>1. Input 2. Output 3. Input 4. Output 5. Output</p>`,

      [{ q: "Is a keyboard input or output?", a: ["input"] },
       { q: "Is a printer input or output?", a: ["output"] },
       { q: "Name an input device.", a: ["keyboard", "mouse", "any"] }]),

    D(5, "🎨", "Computer Poster",
      "Make a computer poster.",
      `<p class='big-emoji'>🎨 💻</p>
       <p>Draw and label 5 computer parts.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Monitor</li>
         <li>Keyboard</li>
         <li>Mouse</li>
         <li>CPU</li>
         <li>Printer</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each part does.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "Monitor", "Keyboard", "Mouse", "CPU", "Printer"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "What is the brain of the computer?", a: ["cpu"] },
       { q: "Name a computer part.", a: ["monitor", "keyboard", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — USING COMPUTERS
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Using Computers", days: [

    D(1, "🔌", "Turning On",
      "Learn to turn on a computer.",
      `<p class='big-emoji'>🔌 🔘 💡</p>
       <h3>Steps to Turn On a Computer</h3>
       <ol>
         <li>Check the power cable is plugged in.</li>
         <li>Press the <b>power button</b>.</li>
         <li>Wait for the computer to load.</li>
         <li>The <b>desktop</b> appears on the screen.</li>
       </ol>
       <h3>Safety Rules</h3>
       <ul>
         <li>Do not pull the power cable.</li>
         <li>Do not put water near the computer.</li>
         <li>Wash your hands before using it.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you press to turn on?</p>
       <p><b>Answer:</b> Press the <b>power button</b>.</p>`,

      [{ heading: "Exercise 6.1 — Write the steps to start a computer.", items: [] },
       { heading: "Exercise 6.2 — Answer.", items: [
          "What do you press to turn on?",
          "What appears on the screen?",
          "Name one safety rule."
        ]}],

      `<p>Any correct steps.</p>`,

      [{ q: "What do you press to turn on?", a: ["power button"] },
       { q: "What appears on screen?", a: ["desktop", "any"] }]),

    D(2, "🖥️", "Desktop",
      "Learn about the desktop.",
      `<p class='big-emoji'>🖥️ 📁 🖼️</p>
       <h3>Parts of the Desktop</h3>
       <ul>
         <li>📁 <b>Icons</b> — small pictures that open programs</li>
         <li>📊 <b>Taskbar</b> — strip at the bottom</li>
         <li>🟢 <b>Start button</b> — bottom-left corner</li>
         <li>🖼️ <b>Wallpaper</b> — background picture</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What are the small pictures called?</p>
       <p><b>Answer:</b> They are called <b>icons</b>.</p>`,

      [{ heading: "Exercise 7.1 — Label the desktop.", items: [
          "icons", "taskbar", "start button", "wallpaper"
        ]},
       { heading: "Exercise 7.2 — Answer.", items: [
          "What are small pictures called?",
          "Where is the Start button?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "What are small pictures on the desktop called?", a: ["icons"] },
       { q: "Where is the Start button?", a: ["bottom left", "corner", "any"] }]),

    D(3, "📁", "Files & Folders",
      "Learn about files and folders.",
      `<p class='big-emoji'>📁 📄 📎</p>
       <p>A <b>folder</b> holds files. A <b>file</b> is a document or picture.</p>
       <h3>How to Create a Folder</h3>
       <ol>
         <li>Right-click on the desktop.</li>
         <li>Choose New → Folder.</li>
         <li>Type a name.</li>
         <li>Press Enter.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What holds files?</p>
       <p><b>Answer:</b> A <b>folder</b> holds files.</p>`,

      [{ heading: "Exercise 8.1 — Create a folder called 'Grade 3' and save a file inside.", items: [] },
       { heading: "Exercise 8.2 — Answer.", items: [
          "What holds files?",
          "What is a document called?"
        ]}],

      `<p>Any correct folder structure.</p>`,

      [{ q: "What holds files?", a: ["folder"] },
       { q: "What is a document called?", a: ["file"] }]),

    D(4, "⌨️", "Keyboard & Mouse",
      "Learn keyboard and mouse skills.",
      `<p class='big-emoji'>⌨️ 🖱️</p>
       <h3>Keyboard</h3>
       <ul>
         <li>Letter keys — A to Z</li>
         <li>Number keys — 0 to 9</li>
         <li>Space bar — makes a space</li>
         <li>Enter — new line</li>
       </ul>
       <h3>Mouse</h3>
       <ul>
         <li>Left button — click and select</li>
         <li>Right button — opens a menu</li>
         <li>Scroll wheel — scroll up/down</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you type on?</p>
       <p><b>Answer:</b> You type on the <b>keyboard</b>.</p>`,

      [{ heading: "Exercise 9.1 — Type your name 5 times.", items: [] },
       { heading: "Exercise 9.2 — Answer.", items: [
          "What do you type on?",
          "What do you use to click?",
          "What does the space bar do?"
        ]}],

      `<p>Any correct typing.</p>`,

      [{ q: "What do you type on?", a: ["keyboard"] },
       { q: "What do you use to click?", a: ["mouse"] },
       { q: "What does the space bar do?", a: ["makes a space", "space"] }]),

    D(5, "🎨", "Draw Computer",
      "Draw and label.",
      `<p class='big-emoji'>🎨 💻</p>
       <p>Draw a computer system and label 5 parts.</p>
       <h3>Show and Tell</h3>
       <p>Show your drawing. Say each part's name.</p>`,

      [{ heading: "Exercise 10.1 — Draw.", items: [
          "Monitor", "Keyboard", "Mouse", "CPU", "Printer"
        ]}],

      `<p>Any correct drawing.</p>`,

      [{ q: "Name 3 computer parts.", a: ["monitor", "keyboard", "mouse", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — WORD PROCESSING
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Word Processing", days: [

    D(1, "📝", "What is Word Processing?",
      "Understand word processing.",
      `<p class='big-emoji'>📝 📄</p>
       <p>A <b>word processor</b> lets you <b>type</b>, <b>edit</b>, <b>format</b>, <b>save</b>, and <b>print</b> text.</p>
       <h3>Common Word Processors</h3>
       <ul>
         <li>Microsoft Word</li>
         <li>Google Docs</li>
         <li>Notepad</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name one word processor.</p>
       <p><b>Answer:</b> Microsoft Word.</p>`,

      [{ heading: "Exercise 11.1 — List 5 things you can do with a word processor.", items: [] },
       { heading: "Exercise 11.2 — Answer.", items: [
          "What is a word processor?",
          "Name a word processor."
        ]}],

      `<p>1. Type 2. Edit 3. Format 4. Save 5. Print</p>`,

      [{ q: "Name one word processor.", a: ["ms word", "word", "google docs", "any"] },
       { q: "What does a word processor do?", a: ["type and edit text", "any"] }]),

    D(2, "⌨️", "Typing",
      "Learn to type.",
      `<p class='big-emoji'>⌨️ ✍️</p>
       <p>Use the keyboard to type words and sentences.</p>
       <h3>Typing Tips</h3>
       <ul>
         <li>Keep fingers on the home row.</li>
         <li>Type slowly and carefully.</li>
         <li>Use the space bar between words.</li>
         <li>Use Shift for capital letters.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you type on?</p>
       <p><b>Answer:</b> You type on the <b>keyboard</b>.</p>`,

      [{ heading: "Exercise 12.1 — Type a short paragraph about yourself.", items: [
          "My name is ___.",
          "I am ___ years old.",
          "I live in ___.",
          "I like ___."
        ]},
       { heading: "Exercise 12.2 — Answer.", items: [
          "What do you type on?",
          "What key makes a space?"
        ]}],

      `<p>Any correct paragraph.</p>`,

      [{ q: "What do you type on?", a: ["keyboard"] },
       { q: "What key makes a space?", a: ["space bar", "space"] }]),

    D(3, "🎨", "Formatting",
      "Learn to format text.",
      `<p class='big-emoji'>🎨 📝</p>
       <p><b>Formatting</b> changes how text looks.</p>
       <h3>Formatting Options</h3>
       <ul>
         <li>🔤 <b>Font</b> — style of letters (Arial, Times)</li>
         <li>📏 <b>Size</b> — how big the letters are</li>
         <li>🎨 <b>Colour</b> — colour of letters</li>
         <li><b>B</b> <b>Bold</b> — makes text thicker</li>
         <li><i>I</i> <b>Italic</b> — slanted text</li>
         <li><u>U</u> <b>Underline</b> — line under text</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does bold do?</p>
       <p><b>Answer:</b> Bold makes text <b>thicker and darker</b>.</p>`,

      [{ heading: "Exercise 13.1 — Type a paragraph and format the title.", items: [
          "Make the title bold.",
          "Make the title bigger.",
          "Change the title colour."
        ]},
       { heading: "Exercise 13.2 — Answer.", items: [
          "What does bold do?",
          "What does italic do?",
          "What does underline do?"
        ]}],

      `<p>Any correctly formatted paragraph.</p>`,

      [{ q: "What does bold do?", a: ["makes text darker", "thicker", "bold"] },
       { q: "What does italic do?", a: ["slanted text", "any"] }]),

    D(4, "💾", "Saving",
      "Learn to save.",
      `<p class='big-emoji'>💾 📁</p>
       <h3>Steps to Save</h3>
       <ol>
         <li>Click <b>File</b>.</li>
         <li>Click <b>Save</b> or <b>Save As</b>.</li>
         <li>Type a name for the file.</li>
         <li>Choose where to save it.</li>
         <li>Click Save.</li>
       </ol>
       <h3>Shortcut</h3>
       <p>Press <b>Ctrl + S</b> to save quickly.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What menu do you use to save?</p>
       <p><b>Answer:</b> The <b>File</b> menu.</p>`,

      [{ heading: "Exercise 14.1 — Save your document.", items: [
          "Click File → Save As.",
          "Type a name.",
          "Click Save."
        ]},
       { heading: "Exercise 14.2 — Answer.", items: [
          "What menu do you use to save?",
          "What is the keyboard shortcut to save?"
        ]}],

      `<p>Any correctly saved document.</p>`,

      [{ q: "What menu do you use to save?", a: ["file"] },
       { q: "What is the shortcut to save?", a: ["ctrl+s", "ctrl s"] }]),

    D(5, "🎨", "Word Processing Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Show the steps to create and save a document.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each step.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [
          "Open word processor",
          "Type text",
          "Format text",
          "Save file",
          "Print file"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Name 3 formatting options.", a: ["bold", "italic", "underline", "any"] },
       { q: "How do you save?", a: ["file then save", "ctrl+s"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Digital Literacy",
      "Review computer basics.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Review</h3>
       <ul>
         <li>Input, process, output, storage</li>
         <li>Hardware vs software</li>
         <li>Input vs output devices</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the brain of the computer?</p>
       <p><b>Answer:</b> The <b>CPU</b>.</p>`,

      [{ heading: "Exercise 16.1 — Classify.", items: [
          "keyboard", "monitor", "CPU", "flash drive", "printer"
        ]},
       { heading: "Exercise 16.2 — Answer.", items: [
          "What is hardware?",
          "What is software?",
          "What is the brain of the computer?"
        ]}],

      `<p>1. Input 2. Output 3. Process 4. Storage 5. Output</p>`,

      [{ q: "What is the brain of the computer?", a: ["cpu"] },
       { q: "Is a monitor input or output?", a: ["output"] }]),

    D(2, "🔁", "Review Using",
      "Review computer use.",
      `<p class='big-emoji'>🔁 🖥️</p>
       <h3>Review</h3>
       <ul>
         <li>Turning on, desktop, files, typing</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What are small pictures called?</p>
       <p><b>Answer:</b> <b>Icons</b>.</p>`,

      [{ heading: "Exercise 17.1 — Write steps to open a program.", items: [] },
       { heading: "Exercise 17.2 — Answer.", items: [
          "What are small pictures called?",
          "Where is the Start button?"
        ]}],

      `<p>Any correct steps.</p>`,

      [{ q: "What are small pictures called?", a: ["icons"] },
       { q: "What holds files?", a: ["folder"] }]),

    D(3, "🔁", "Review Word",
      "Review word processing.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Typing, formatting, saving, printing</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you save a document?</p>
       <p><b>Answer:</b> File → Save, or Ctrl + S.</p>`,

      [{ heading: "Exercise 18.1 — Type and save a document.", items: [] },
       { heading: "Exercise 18.2 — Answer.", items: [
          "Name a word processor.",
          "Name 3 formatting options.",
          "How do you save?"
        ]}],

      `<p>Any correct document.</p>`,

      [{ q: "How do you save a document?", a: ["file then save", "ctrl+s"] },
       { q: "What does bold do?", a: ["makes text thicker", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Do a practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a computer?</li>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>Name an input device.</li>
         <li>Name an output device.</li>
         <li>What do you press to turn on?</li>
         <li>What are small pictures called?</li>
         <li>What holds files?</li>
         <li>Name a word processor.</li>
         <li>How do you save?</li>
       </ol>`,

      [{ heading: "Exercise 19.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Is a mouse input or output?", a: ["input"] },
       { q: "What is software?", a: ["programs", "any"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Month 1 of Grade 3 Computing!</p>
       <h3>Show and Tell</h3>
       <p>Show your posters. Give yourself a star! ⭐</p>`,

      [{ heading: "Exercise 20.1 — Show your posters.", items: [
          "Computer Poster", "Draw Computer", "Word Processing Poster"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — ALGORITHMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Algorithms", days: [

    D(1, "📋", "What is an Algorithm?",
      "Understand algorithms.",
      `<p class='big-emoji'>📋 🔢</p>
       <p>An <b>algorithm</b> is a <b>set of steps</b> to solve a problem or complete a task.</p>
       <h3>Everyday Algorithms</h3>
       <ul>
         <li>Brushing teeth</li>
         <li>Making tea</li>
         <li>Tying shoes</li>
         <li>Washing hands</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> An algorithm is a <b>set of steps</b> to complete a task.</p>`,

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
      "Order steps correctly.",
      `<p class='big-emoji'>📋 1️⃣2️⃣3️⃣</p>
       <p><b>Sequencing</b> means putting steps in the correct <b>order</b>.</p>
       <p>Order matters! Brush teeth: 1) paste 2) brush 3) rinse.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is Step 1 of brushing teeth?</p>
       <p><b>Answer:</b> <b>Put toothpaste on the brush</b>.</p>`,

      [{ heading: "Exercise 22.1 — Order the steps.", items: [
          "Put paste", "Brush", "Rinse"
        ]},
       { heading: "Exercise 22.2 — Order the steps for making tea.", items: [
          "Boil water", "Put tea in cup", "Pour water", "Add milk"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is step 1 of brushing teeth?", a: ["put paste", "paste"] },
       { q: "Why does order matter?", a: ["so it works", "any"] }]),

    D(3, "📊", "Flowcharts",
      "Learn about flowcharts.",
      `<p class='big-emoji'>📊 🔷</p>
       <p>A <b>flowchart</b> is a diagram that shows steps with symbols.</p>
       <h3>Flowchart Symbols</h3>
       <ul>
         <li>⭕ <b>Start / End</b> — oval shape</li>
         <li>▭ <b>Process</b> — rectangle</li>
         <li>🔶 <b>Decision</b> — diamond shape</li>
         <li>➡️ <b>Arrow</b> — shows direction</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a flowchart?</p>
       <p><b>Answer:</b> A flowchart is a <b>diagram of steps</b> using shapes and arrows.</p>`,

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

    D(4, "🧩", "Simple Algorithms",
      "Write algorithms.",
      `<p class='big-emoji'>🧩 📝</p>
       <p>Write an algorithm for your morning routine.</p>
       <h3>Example</h3>
       <ol>
         <li>Wake up</li>
         <li>Brush teeth</li>
         <li>Bathe</li>
         <li>Eat breakfast</li>
         <li>Go to school</li>
       </ol>`,

      [{ heading: "Exercise 24.1 — Write your morning algorithm.", items: [
          "1. ___", "2. ___", "3. ___", "4. ___", "5. ___"
        ]},
       { heading: "Exercise 24.2 — Write an algorithm for washing hands.", items: [] }],

      `<p>Any correct algorithm.</p>`,

      [{ q: "What is step 1 of your morning?", a: ["any"] }]),

    D(5, "🎨", "Algorithm Poster",
      "Make an algorithm poster.",
      `<p class='big-emoji'>🎨 📋</p>
       <p>Draw your algorithm as a flowchart.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Start (oval)</li>
         <li>Steps (rectangles)</li>
         <li>Arrows connecting them</li>
         <li>End (oval)</li>
       </ul>`,

      [{ heading: "Exercise 25.1 — Draw a flowchart.", items: [
          "Start", "Steps", "End"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "What shape is Start?", a: ["oval", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — CODING BASICS
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Coding Basics", days: [

    D(1, "💻", "What is Coding?",
      "Learn about coding.",
      `<p class='big-emoji'>💻 🔤</p>
       <p><b>Coding</b> = writing instructions for a computer.</p>
       <h3>Coding Apps for Kids</h3>
       <ul>
         <li>Scratch</li>
         <li>Blockly</li>
         <li>Code.org</li>
         <li>Lightbot</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is coding?</p>
       <p><b>Answer:</b> Coding is <b>writing instructions for a computer</b>.</p>`,

      [{ heading: "Exercise 26.1 — Say.", items: [
          "What is coding?",
          "Name a coding app.",
          "Why do computers need instructions?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is coding?", a: ["writing instructions for a computer", "any"] },
       { q: "Name a coding app.", a: ["scratch", "blockly", "any"] }]),

    D(2, "⌨️", "Basic Commands",
      "Learn basic commands.",
      `<p class='big-emoji'>⌨️ 🔤</p>
       <h3>Basic Commands</h3>
       <ul>
         <li><b>print</b> — shows text</li>
         <li><b>move</b> — moves the character</li>
         <li><b>turn</b> — turns the character</li>
         <li><b>wait</b> — pauses</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does 'print' do?</p>
       <p><b>Answer:</b> <b>print</b> shows text on the screen.</p>`,

      [{ heading: "Exercise 27.1 — Say.", items: [
          "What does 'print' do?",
          "What does 'move' do?",
          "What does 'turn' do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does 'print' do?", a: ["shows text", "any"] },
       { q: "What does 'move' do?", a: ["moves", "any"] }]),

    D(3, "🔁", "Loops",
      "Learn about loops.",
      `<p class='big-emoji'>🔁 🔄</p>
       <p>A <b>loop</b> repeats instructions: 'repeat 5 times: jump'.</p>
       <h3>Example</h3>
       <p><b>repeat 5 times:</b> say "hello"</p>
       <p>This says "hello" 5 times instead of writing it 5 times.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a loop do?</p>
       <p><b>Answer:</b> A loop <b>repeats</b> instructions.</p>`,

      [{ heading: "Exercise 28.1 — Try it.", items: [
          "Repeat 5 times: say 'hi'.",
          "Repeat 3 times: jump.",
          "Repeat 10 times: clap."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] },
       { q: "What is a loop?", a: ["repeated instructions", "any"] }]),

    D(4, "🧩", "Simple Program",
      "Write a simple program.",
      `<p class='big-emoji'>🧩 💻</p>
       <h3>Simple Program</h3>
       <pre>
print "Hello"
print "My name is ___"
repeat 3 times:
    print "I love coding!"
       </pre>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does print do?</p>
       <p><b>Answer:</b> <b>print</b> shows text on the screen.</p>`,

      [{ heading: "Exercise 29.1 — Write a program.", items: [
          "print 'Hello'",
          "print 'My name is ___'"
        ]},
       { heading: "Exercise 29.2 — Add a loop.", items: [
          "Repeat 3 times: print 'Hi'"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does print do?", a: ["shows text", "any"] }]),

    D(5, "🎨", "Coding Poster",
      "Make a coding poster.",
      `<p class='big-emoji'>🎨 💻</p>
       <p>Draw 4 coding blocks.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>print block</li>
         <li>move block</li>
         <li>turn block</li>
         <li>loop block</li>
       </ul>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [
          "print", "move", "turn", "loop"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name 3 commands.", a: ["print", "move", "turn", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — CONDITIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Conditions", days: [

    D(1, "❓", "If…then",
      "Learn if…then.",
      `<p class='big-emoji'>❓ ➡️</p>
       <p><b>If…then</b> means: if a condition is true, do something.</p>
       <p>If it rains, then use umbrella.</p>
       <h3>Examples</h3>
       <ul>
         <li>If you're tired, then rest.</li>
         <li>If you're hungry, then eat.</li>
         <li>If it's cold, then wear a jacket.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If it rains, then…?</p>
       <p><b>Answer:</b> …use an umbrella.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "If you're tired, then…",
          "If you're hungry, then…",
          "If it rains, then…"
        ]}],

      `<p>⭐</p>`,

      [{ q: "If it rains, then…", a: ["use umbrella", "any"] },
       { q: "If hungry, then…", a: ["eat", "any"] }]),

    D(2, "❓", "If…else",
      "Learn if…else.",
      `<p class='big-emoji'>❓ ↔️</p>
       <p><b>If…else</b> means: if condition is true, do A; else do B.</p>
       <p>If hungry, eat; else, play.</p>
       <h3>Examples</h3>
       <ul>
         <li>If it rains, stay inside; else, go outside.</li>
         <li>If tired, sleep; else, read.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If hungry, then…?</p>
       <p><b>Answer:</b> …eat. Else, play.</p>`,

      [{ heading: "Exercise 32.1 — Say.", items: [
          "If hungry, eat; else, play.",
          "If tired, sleep; else, read.",
          "If raining, stay inside; else, go outside."
        ]}],

      `<p>⭐</p>`,

      [{ q: "If hungry, then…?", a: ["eat", "any"] },
       { q: "If not hungry, then…?", a: ["play", "any"] }]),

    D(3, "➡️", "Comparisons",
      "Learn comparisons.",
      `<p class='big-emoji'>➡️ ⚖️</p>
       <h3>Comparison Symbols</h3>
       <ul>
         <li><b>=</b> equal to</li>
         <li><b>&lt;</b> less than</li>
         <li><b>&gt;</b> greater than</li>
         <li><b>≤</b> less than or equal to</li>
         <li><b>≥</b> greater than or equal to</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 5 &gt; 3?</p>
       <p><b>Answer:</b> Yes, 5 is <b>greater than</b> 3.</p>`,

      [{ heading: "Exercise 33.1 — Say.", items: [
          "Is 5 > 3?", "Is 2 < 4?", "Is 3 = 3?", "Is 7 > 10?", "Is 1 < 5?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Is 5 > 3?", a: ["yes"] },
       { q: "Is 2 < 4?", a: ["yes"] },
       { q: "Is 7 > 10?", a: ["no"] }]),

    D(4, "🧠", "Logic",
      "Learn AND, OR, NOT.",
      `<p class='big-emoji'>🧠 🔗</p>
       <h3>Logic Operators</h3>
       <ul>
         <li><b>AND</b> — both must be true</li>
         <li><b>OR</b> — at least one true</li>
         <li><b>NOT</b> — opposite</li>
       </ul>
       <h3>Examples</h3>
       <ul>
         <li>If hot AND sunny, go to beach.</li>
         <li>If tired OR sick, rest.</li>
         <li>If NOT raining, go outside.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If hot AND sunny, then…?</p>
       <p><b>Answer:</b> …go to the beach.</p>`,

      [{ heading: "Exercise 34.1 — Say.", items: [
          "If hot AND sunny, go to beach.",
          "If tired OR sick, rest.",
          "If NOT raining, go outside."
        ]}],

      `<p>⭐</p>`,

      [{ q: "If hot AND sunny, then…?", a: ["go to beach", "any"] },
       { q: "What does AND mean?", a: ["both must be true", "any"] },
       { q: "What does OR mean?", a: ["at least one true", "any"] }]),

    D(5, "🎨", "Conditions Poster",
      "Make a conditions poster.",
      `<p class='big-emoji'>🎨 ❓</p>
       <p>Draw if-then examples.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>If it rains → umbrella</li>
         <li>If hungry → eat</li>
         <li>If tired → sleep</li>
       </ul>`,

      [{ heading: "Exercise 35.1 — Draw.", items: [
          "If it rains → umbrella",
          "If hungry → eat"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Give an if-then example.", a: ["any"] }])
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
         <li>Set of steps to solve problems</li>
         <li>Sequencing</li>
         <li>Flowcharts</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b>.</p>`,

      [{ heading: "Exercise 36.1 — Say.", items: [
          "What is an algorithm?",
          "Give an example.",
          "What is a flowchart?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "What is a flowchart?", a: ["diagram of steps", "any"] }]),

    D(2, "🔁", "Review Coding",
      "Review coding.",
      `<p class='big-emoji'>🔁 💻</p>
       <h3>Review</h3>
       <ul>
         <li>print, move, turn, loops</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does print do?</p>
       <p><b>Answer:</b> Shows text.</p>`,

      [{ heading: "Exercise 37.1 — Say.", items: [
          "What does print do?",
          "What does a loop do?",
          "What does move do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] },
       { q: "What does print do?", a: ["shows text", "any"] }]),

    D(3, "🔁", "Review Conditions",
      "Review conditions.",
      `<p class='big-emoji'>🔁 ❓</p>
       <h3>Review</h3>
       <ul>
         <li>if…then, if…else, AND, OR, NOT</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If tired, then…?</p>
       <p><b>Answer:</b> Rest.</p>`,

      [{ heading: "Exercise 38.1 — Say.", items: [
          "If tired, then…",
          "If hungry, then…",
          "If it rains, then…"
        ]}],

      `<p>⭐</p>`,

      [{ q: "If tired, then…?", a: ["rest", "sleep", "any"] },
       { q: "What does OR mean?", a: ["at least one true", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is an algorithm?</li>
         <li>What is a flowchart?</li>
         <li>What does print do?</li>
         <li>What does a loop do?</li>
         <li>If tired, then…?</li>
         <li>If hungry, then…?</li>
         <li>What does AND mean?</li>
         <li>What does OR mean?</li>
         <li>Is 5 > 3?</li>
         <li>What is coding?</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What does 'if' do?", a: ["checks a condition", "any"] },
       { q: "What is coding?", a: ["writing instructions", "any"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Algorithms (10)</li>
         <li>Part B — Coding (10)</li>
         <li>Part C — Conditions (10)</li>
         <li>Part D — Practical (10)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Algorithms (10)",
          "Part B — Coding (10)",
          "Part C — Conditions (10)",
          "Part D — Practical (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — INTERNET
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Internet", days: [

    D(1, "🌐", "What is the Internet?",
      "Learn about the internet.",
      `<p class='big-emoji'>🌐 💻 🌍</p>
       <p>The <b>internet</b> is a big network that connects computers around the world.</p>
       <h3>What We Can Do Online</h3>
       <ul>
         <li>📧 Send emails</li>
         <li>🔍 Search for information</li>
         <li>🎥 Watch videos</li>
         <li>💬 Chat with friends</li>
         <li>📚 Learn new things</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the internet?</p>
       <p><b>Answer:</b> A <b>network that connects computers</b> around the world.</p>`,

      [{ heading: "Exercise 40.1 — Say.", items: [
          "What is the internet?",
          "Name 3 things you can do online.",
          "Who should be nearby when you use the internet?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the internet?", a: ["network of computers", "any"] },
       { q: "Who should be nearby?", a: ["adult", "parent", "any"] }]),

    D(2, "🌐", "Browsers",
      "Learn about web browsers.",
      `<p class='big-emoji'>🌐 🔎</p>
       <p>A <b>browser</b> is a program that lets you visit websites.</p>
       <h3>Common Browsers</h3>
       <ul>
         <li>Google Chrome</li>
         <li>Mozilla Firefox</li>
         <li>Microsoft Edge</li>
         <li>Safari</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to <b>visit websites</b>.</p>`,

      [{ heading: "Exercise 41.1 — Say.", items: [
          "What is a browser?",
          "Name 3 browsers.",
          "What do we use browsers for?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a browser?", a: ["program to visit websites", "any"] },
       { q: "Name a browser.", a: ["chrome", "firefox", "any"] }]),

    D(3, "🔎", "Search Engines",
      "Learn about search engines.",
      `<p class='big-emoji'>🔎 🌐</p>
       <p>A <b>search engine</b> helps you find information online.</p>
       <h3>Common Search Engines</h3>
       <ul>
         <li>Google</li>
         <li>Bing</li>
         <li>Yahoo</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a search engine for?</p>
       <p><b>Answer:</b> To <b>find information</b> online.</p>`,

      [{ heading: "Exercise 42.1 — Say.", items: [
          "What is a search engine?",
          "Name one search engine.",
          "How do you search?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a search engine?", a: ["finds information", "any"] },
       { q: "Name a search engine.", a: ["google", "bing", "any"] }]),

    D(4, "🌐", "Websites",
      "Learn about websites.",
      `<p class='big-emoji'>🌐 📄</p>
       <p>A <b>website</b> is a group of pages on the internet.</p>
       <h3>Safe Websites</h3>
       <ul>
         <li>✅ Websites approved by parents or teachers</li>
         <li>✅ Websites with a padlock 🔒 in the address bar</li>
       </ul>
       <h3>Unsafe Websites</h3>
       <ul>
         <li>🚫 Websites asking for money or personal info</li>
         <li>🚫 Websites with bad words or violence</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a padlock mean?</p>
       <p><b>Answer:</b> A <b>safe connection</b>.</p>`,

      [{ heading: "Exercise 43.1 — Say.", items: [
          "What is a website?",
          "Name a safe website.",
          "What does a padlock mean?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a website?", a: ["pages on the internet", "any"] },
       { q: "What does a padlock mean?", a: ["safe connection", "safe", "any"] }]),

    D(5, "🎨", "Internet Poster",
      "Make an internet poster.",
      `<p class='big-emoji'>🎨 🌐</p>
       <p>Make a poster about safe internet use.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Use with an adult</li>
         <li>Only safe websites</li>
         <li>Do not share personal info</li>
         <li>Be kind online</li>
       </ul>`,

      [{ heading: "Exercise 44.1 — Draw.", items: [
          "Use with an adult",
          "Only safe websites",
          "Do not share personal info",
          "Be kind online"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a safe internet rule.", a: ["use with adult", "safe sites", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — EMAIL
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Email", days: [

    D(1, "📧", "What is Email?",
      "Learn about email.",
      `<p class='big-emoji'>📧 💬</p>
       <p><b>Email</b> is a way to send messages electronically over the internet.</p>
       <h3>Parts of an Email</h3>
       <ul>
         <li>📤 <b>To</b> — who you send to</li>
         <li>📝 <b>Subject</b> — what it's about</li>
         <li>✍️ <b>Body</b> — the message</li>
         <li>📎 <b>Attachment</b> — a file you send</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is email?</p>
       <p><b>Answer:</b> A way to send <b>messages electronically</b>.</p>`,

      [{ heading: "Exercise 45.1 — Say.", items: [
          "What is email?",
          "Name the parts of an email.",
          "What is an attachment?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is email?", a: ["electronic mail", "messages over internet", "any"] },
       { q: "What is a subject line?", a: ["what the email is about", "any"] }]),

    D(2, "📧", "Creating Email",
      "Learn to create an email account.",
      `<p class='big-emoji'>📧 ✅</p>
       <h3>Email Address Format</h3>
       <p>name@domain.com</p>
       <p>Example: ama@example.com</p>
       <h3>Rules</h3>
       <ul>
         <li>Use a simple name.</li>
         <li>Keep your password safe.</li>
         <li>Do not share your password with friends.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the @ symbol called?</p>
       <p><b>Answer:</b> The <b>at</b> symbol.</p>`,

      [{ heading: "Exercise 46.1 — Say.", items: [
          "What is the format of an email address?",
          "What symbol is used in email addresses?",
          "Should you share your password?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What symbol is in email addresses?", a: ["@", "at"] },
       { q: "Should you share your password?", a: ["no"] }]),

    D(3, "📤", "Sending",
      "Learn to send an email.",
      `<p class='big-emoji'>📤 📧</p>
       <h3>Steps to Send an Email</h3>
       <ol>
         <li>Click "Compose" or "New".</li>
         <li>Type the recipient's email address.</li>
         <li>Write a subject.</li>
         <li>Write your message.</li>
         <li>Click Send.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you click to send?</p>
       <p><b>Answer:</b> The <b>Send</b> button.</p>`,

      [{ heading: "Exercise 47.1 — Write steps.", items: [
          "Step 1: ___", "Step 2: ___", "Step 3: ___",
          "Step 4: ___", "Step 5: ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you click to send?", a: ["send"] },
       { q: "What goes in the subject line?", a: ["what it's about", "any"] }]),

    D(4, "🤝", "Netiquette",
      "Learn email manners.",
      `<p class='big-emoji'>🤝 📧</p>
       <p><b>Netiquette</b> = good manners online.</p>
       <h3>Email Netiquette</h3>
       <ul>
         <li>Use polite words</li>
         <li>Write a clear subject</li>
         <li>Do not type in ALL CAPS (it looks like shouting)</li>
         <li>Check your spelling</li>
         <li>Do not send junk mail (spam)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you not type in ALL CAPS?</p>
       <p><b>Answer:</b> It looks like you are <b>shouting</b>.</p>`,

      [{ heading: "Exercise 48.1 — Say.", items: [
          "What is netiquette?",
          "Name 3 email manners.",
          "Why should you not write in ALL CAPS?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "Why not ALL CAPS?", a: ["shouting", "any"] }]),

    D(5, "🎨", "Email Poster",
      "Make an email poster.",
      `<p class='big-emoji'>🎨 📧</p>
       <p>Make a poster about email.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Parts of an email</li>
         <li>3 netiquette rules</li>
         <li>One example email</li>
       </ul>`,

      [{ heading: "Exercise 49.1 — Draw.", items: [
          "Parts of an email",
          "3 netiquette rules",
          "One example"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a part of an email.", a: ["to", "subject", "body", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — ONLINE SAFETY
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Online Safety", days: [

    D(1, "🚫", "Cyberbullying",
      "Learn about cyberbullying.",
      `<p class='big-emoji'>🚫 😢</p>
       <p><b>Cyberbullying</b> is being mean to someone <b>online</b>, again and again.</p>
       <h3>Examples of Cyberbullying</h3>
       <ul>
         <li>Sending mean messages</li>
         <li>Posting embarrassing photos</li>
         <li>Leaving someone out of a group chat</li>
         <li>Spreading rumours online</li>
       </ul>
       <h3>What to Do</h3>
       <ol>
         <li>Do not reply.</li>
         <li>Save the messages.</li>
         <li>Tell a trusted adult.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if you are cyberbullied?</p>
       <p><b>Answer:</b> Tell a <b>trusted adult</b>.</p>`,

      [{ heading: "Exercise 50.1 — Say.", items: [
          "What is cyberbullying?",
          "Name 3 examples.",
          "What should you do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is cyberbullying?", a: ["being mean online", "any"] },
       { q: "What should you do?", a: ["tell an adult", "any"] }]),

    D(2, "🔒", "Privacy",
      "Learn about online privacy.",
      `<p class='big-emoji'>🔒 🔑</p>
       <p><b>Privacy</b> means keeping your personal information safe online.</p>
       <h3>Personal Information to Keep Private</h3>
       <ul>
         <li>🏠 Your home address</li>
         <li>📞 Your phone number</li>
         <li>🏫 Your school name</li>
         <li>🔑 Your passwords</li>
         <li>📸 Your photos</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your address online?</p>
       <p><b>Answer:</b> <b>No</b> — never share your address online.</p>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "What is privacy?",
          "Name 3 things to keep private.",
          "Should you share your address?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Should you share your address online?", a: ["no"] },
       { q: "Name something to keep private.", a: ["address", "phone", "password", "any"] }]),

    D(3, "🔑", "Passwords",
      "Learn about strong passwords.",
      `<p class='big-emoji'>🔑 🛡️</p>
       <p>A <b>strong password</b> protects your account.</p>
       <h3>Rules for Strong Passwords</h3>
       <ul>
         <li>Use at least 8 characters</li>
         <li>Mix letters, numbers, and symbols</li>
         <li>Do not use your name</li>
         <li>Do not share it with friends</li>
         <li>Change it sometimes</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes a strong password?</p>
       <p><b>Answer:</b> A mix of <b>letters, numbers, and symbols</b>, at least 8 characters long.</p>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What makes a strong password?",
          "Why keep passwords safe?",
          "Should you share your password?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Should you share your password?", a: ["no"] },
       { q: "What makes a password strong?", a: ["letters numbers symbols", "any"] }]),

    D(4, "🛡️", "Safe Browsing",
      "Learn safe browsing.",
      `<p class='big-emoji'>🛡️ 🌐</p>
       <h3>Safe Browsing Rules</h3>
       <ul>
         <li>Only visit safe websites</li>
         <li>Look for the padlock 🔒</li>
         <li>Do not click strange links</li>
         <li>Ask an adult before downloading</li>
         <li>Do not talk to strangers</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if a stranger messages you?</p>
       <p><b>Answer:</b> Do not reply, and <b>tell an adult</b>.</p>`,

      [{ heading: "Exercise 53.1 — Say.", items: [
          "Name 3 safe browsing rules.",
          "What does a padlock mean?",
          "What do you do if a stranger messages you?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does a padlock mean?", a: ["safe connection", "any"] },
       { q: "What if a stranger messages?", a: ["tell an adult", "any"] }]),

    D(5, "🎨", "Safety Poster",
      "Make a safety poster.",
      `<p class='big-emoji'>🎨 🛡️</p>
       <p>Make an online safety poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Keep passwords safe</li>
         <li>Do not share personal info</li>
         <li>Do not talk to strangers</li>
         <li>Tell an adult</li>
       </ul>`,

      [{ heading: "Exercise 54.1 — Draw.", items: [
          "Keep passwords safe",
          "Do not share personal info",
          "Do not talk to strangers",
          "Tell an adult"
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
         <li>What is the internet?</li>
         <li>Browsers and search engines</li>
         <li>Websites</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to <b>visit websites</b>.</p>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is the internet?",
          "Name a browser.",
          "What does a search engine do?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is the internet?", a: ["network", "any"] },
       { q: "What does a search engine do?", a: ["finds information", "any"] }]),

    D(2, "🔁", "Review Email",
      "Review email.",
      `<p class='big-emoji'>🔁 📧</p>
       <h3>Review</h3>
       <ul>
         <li>Parts of an email</li>
         <li>Sending</li>
         <li>Netiquette</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is netiquette?</p>
       <p><b>Answer:</b> <b>Good manners online</b>.</p>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "Name the parts of an email.",
          "What is netiquette?",
          "Why not write in ALL CAPS?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "What is a subject?", a: ["what the email is about", "any"] }]),

    D(3, "🔁", "Review Safety",
      "Review online safety.",
      `<p class='big-emoji'>🔁 🛡️</p>
       <h3>Review</h3>
       <ul>
         <li>Cyberbullying</li>
         <li>Privacy</li>
         <li>Passwords</li>
         <li>Safe browsing</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your password?</p>
       <p><b>Answer:</b> <b>No.</b></p>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "What is cyberbullying?",
          "Should you share your password?",
          "What does a padlock mean?",
          "What if a stranger messages you?"
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
         <li>What is a search engine?</li>
         <li>Name 3 safe websites.</li>
         <li>What is email?</li>
         <li>Name the parts of an email.</li>
         <li>What is netiquette?</li>
         <li>What is cyberbullying?</li>
         <li>Should you share your password?</li>
         <li>What if a stranger messages you?</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is email?", a: ["electronic mail", "any"] },
       { q: "Should you share your password?", a: ["no"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Internet (10)</li>
         <li>Part B — Email (10)</li>
         <li>Part C — Safety (10)</li>
         <li>Part D — Mixed (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Internet (10)",
          "Part B — Email (10)",
          "Part C — Safety (10)",
          "Part D — Mixed (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — SPREADSHEETS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Spreadsheets", days: [

    D(1, "📊", "What is a Spreadsheet?",
      "Learn about spreadsheets.",
      `<p class='big-emoji'>📊 📋</p>
       <p>A <b>spreadsheet</b> is a program that organizes data in rows and columns.</p>
       <h3>Examples</h3>
       <ul>
         <li>Microsoft Excel</li>
         <li>Google Sheets</li>
       </ul>
       <h3>Uses</h3>
       <ul>
         <li>Making lists</li>
         <li>Counting things</li>
         <li>Simple calculations</li>
         <li>Making charts</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a spreadsheet?</p>
       <p><b>Answer:</b> A program that organizes <b>data in rows and columns</b>.</p>`,

      [{ heading: "Exercise 59.1 — Say.", items: [
          "What is a spreadsheet?",
          "Name a spreadsheet program.",
          "What are spreadsheets used for?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a spreadsheet?", a: ["organizes data in rows and columns", "any"] },
       { q: "Name a spreadsheet program.", a: ["excel", "google sheets", "any"] }]),

    D(2, "📊", "Rows & Columns",
      "Learn about rows and columns.",
      `<p class='big-emoji'>📊 ➡️⬇️</p>
       <h3>Rows and Columns</h3>
       <ul>
         <li><b>Rows</b> — go across (left to right) — numbered 1, 2, 3…</li>
         <li><b>Columns</b> — go down — lettered A, B, C…</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How are columns labeled?</p>
       <p><b>Answer:</b> With <b>letters</b> (A, B, C…).</p>`,

      [{ heading: "Exercise 60.1 — Say.", items: [
          "What are rows?",
          "What are columns?",
          "How are rows labeled?",
          "How are columns labeled?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How are rows labeled?", a: ["numbers", "1,2,3", "any"] },
       { q: "How are columns labeled?", a: ["letters", "abc", "any"] }]),

    D(3, "📊", "Cells",
      "Learn about cells.",
      `<p class='big-emoji'>📊 🔲</p>
       <p>A <b>cell</b> is where a row and column meet.</p>
       <p>Example: <b>A1</b> means Column A, Row 1.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What cell is at Column B, Row 3?</p>
       <p><b>Answer:</b> <b>B3</b>.</p>`,

      [{ heading: "Exercise 61.1 — Say the cell.", items: [
          "Column A, Row 1 → ___",
          "Column B, Row 3 → ___",
          "Column C, Row 5 → ___",
          "Column D, Row 2 → ___",
          "Column E, Row 10 → ___"
        ]}],

      `<p><b>61.1:</b> 1. A1 2. B3 3. C5 4. D2 5. E10</p>`,

      [{ q: "What is a cell?", a: ["row and column meet", "any"] },
       { q: "What cell is Column B, Row 3?", a: ["b3"] }]),

    D(4, "📊", "Simple Formulas",
      "Learn simple formulas.",
      `<p class='big-emoji'>📊 🧮</p>
       <p>A <b>formula</b> does a calculation in a cell.</p>
       <p>Every formula starts with =</p>
       <h3>Examples</h3>
       <ul>
         <li>=A1+A2 — adds two cells</li>
         <li>=A1-A2 — subtracts</li>
         <li>=A1*A2 — multiplies</li>
         <li>=SUM(A1:A10) — adds a range</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does =A1+A2 do?</p>
       <p><b>Answer:</b> It <b>adds</b> the numbers in cells A1 and A2.</p>`,

      [{ heading: "Exercise 62.1 — Write the formula.", items: [
          "Add A1 and A2 → ___",
          "Subtract A2 from A1 → ___",
          "Multiply A1 and A2 → ___",
          "Sum A1 to A10 → ___",
          "Divide A1 by A2 → ___"
        ]}],

      `<p><b>62.1:</b> 1. =A1+A2 2. =A1-A2 3. =A1*A2 4. =SUM(A1:A10) 5. =A1/A2</p>`,

      [{ q: "What does =A1+A2 do?", a: ["adds", "any"] },
       { q: "What does =A1-A2 do?", a: ["subtracts", "any"] }]),

    D(5, "🎨", "Spreadsheet Poster",
      "Make a spreadsheet poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Make a poster about spreadsheets.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>A table with rows and columns</li>
         <li>Label a cell (A1)</li>
         <li>Show a simple formula</li>
       </ul>`,

      [{ heading: "Exercise 63.1 — Draw.", items: [
          "Rows", "Columns", "A cell", "A formula"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a cell?", a: ["row and column meet", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — CALCULATIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Calculations", days: [

    D(1, "➕", "Adding",
      "Add numbers in spreadsheets.",
      `<p class='big-emoji'>➕ 🧮</p>
       <h3>Adding in Spreadsheets</h3>
       <ul>
         <li>=A1+A2 — adds two cells</li>
         <li>=SUM(A1:A5) — adds a range</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If A1=5 and A2=3, what is =A1+A2?</p>
       <p><b>Answer:</b> <b>8</b>.</p>`,

      [{ heading: "Exercise 64.1 — Calculate.", items: [
          "A1=5, A2=3, =A1+A2 = ___",
          "A1=10, A2=20, =A1+A2 = ___",
          "A1=7, A2=8, =A1+A2 = ___",
          "A1=15, A2=25, =A1+A2 = ___",
          "A1=100, A2=200, =A1+A2 = ___"
        ]}],

      `<p><b>64.1:</b> 1. 8 2. 30 3. 15 4. 40 5. 300</p>`,

      [{ q: "A1=5, A2=3, =A1+A2?", a: ["8"] },
       { q: "A1=10, A2=20, =A1+A2?", a: ["30"] }]),

    D(2, "➖", "Subtracting",
      "Subtract numbers in spreadsheets.",
      `<p class='big-emoji'>➖ 🧮</p>
       <h3>Subtracting</h3>
       <p>=A1-A2 subtracts A2 from A1.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If A1=10 and A2=4, what is =A1-A2?</p>
       <p><b>Answer:</b> <b>6</b>.</p>`,

      [{ heading: "Exercise 65.1 — Calculate.", items: [
          "A1=10, A2=4, =A1-A2 = ___",
          "A1=20, A2=8, =A1-A2 = ___",
          "A1=50, A2=15, =A1-A2 = ___",
          "A1=100, A2=45, =A1-A2 = ___",
          "A1=75, A2=25, =A1-A2 = ___"
        ]}],

      `<p><b>65.1:</b> 1. 6 2. 12 3. 35 4. 55 5. 50</p>`,

      [{ q: "A1=10, A2=4, =A1-A2?", a: ["6"] },
       { q: "A1=20, A2=8, =A1-A2?", a: ["12"] }]),

    D(3, "✖️", "Multiplying",
      "Multiply numbers in spreadsheets.",
      `<p class='big-emoji'>✖️ 🧮</p>
       <h3>Multiplying</h3>
       <p>=A1*A2 multiplies A1 by A2.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If A1=5 and A2=6, what is =A1*A2?</p>
       <p><b>Answer:</b> <b>30</b>.</p>`,

      [{ heading: "Exercise 66.1 — Calculate.", items: [
          "A1=5, A2=6, =A1*A2 = ___",
          "A1=4, A2=7, =A1*A2 = ___",
          "A1=8, A2=9, =A1*A2 = ___",
          "A1=10, A2=10, =A1*A2 = ___",
          "A1=3, A2=12, =A1*A2 = ___"
        ]}],

      `<p><b>66.1:</b> 1. 30 2. 28 3. 72 4. 100 5. 36</p>`,

      [{ q: "A1=5, A2=6, =A1*A2?", a: ["30"] },
       { q: "A1=10, A2=10, =A1*A2?", a: ["100"] }]),

    D(4, "➗", "Dividing",
      "Divide numbers in spreadsheets.",
      `<p class='big-emoji'>➗ 🧮</p>
       <h3>Dividing</h3>
       <p>=A1/A2 divides A1 by A2.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> If A1=20 and A2=4, what is =A1/A2?</p>
       <p><b>Answer:</b> <b>5</b>.</p>`,

      [{ heading: "Exercise 67.1 — Calculate.", items: [
          "A1=20, A2=4, =A1/A2 = ___",
          "A1=30, A2=5, =A1/A2 = ___",
          "A1=100, A2=10, =A1/A2 = ___",
          "A1=50, A2=25, =A1/A2 = ___",
          "A1=64, A2=8, =A1/A2 = ___"
        ]}],

      `<p><b>67.1:</b> 1. 5 2. 6 3. 10 4. 2 5. 8</p>`,

      [{ q: "A1=20, A2=4, =A1/A2?", a: ["5"] },
       { q: "A1=100, A2=10, =A1/A2?", a: ["10"] }]),

    D(5, "🎨", "Calculation Poster",
      "Make a calculation poster.",
      `<p class='big-emoji'>🎨 🧮</p>
       <p>Make a poster showing 4 calculation formulas.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>=A1+A2 (add)</li>
         <li>=A1-A2 (subtract)</li>
         <li>=A1*A2 (multiply)</li>
         <li>=A1/A2 (divide)</li>
       </ul>`,

      [{ heading: "Exercise 68.1 — Draw.", items: [
          "Add formula",
          "Subtract formula",
          "Multiply formula",
          "Divide formula"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What symbol means multiply?", a: ["*"] },
       { q: "What symbol means divide?", a: ["/"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — PRESENTATIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Presentations", days: [

    D(1, "📊", "What is a Presentation?",
      "Learn about presentations.",
      `<p class='big-emoji'>📊 🖼️</p>
       <p>A <b>presentation</b> is a way to show information using <b>slides</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>Microsoft PowerPoint</li>
         <li>Google Slides</li>
       </ul>
       <h3>Uses</h3>
       <ul>
         <li>Showing information to a group</li>
         <li>Telling a story</li>
         <li>Teaching others</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a presentation?</p>
       <p><b>Answer:</b> A way to <b>show information</b> using slides.</p>`,

      [{ heading: "Exercise 69.1 — Say.", items: [
          "What is a presentation?",
          "Name a presentation program.",
          "What are presentations used for?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a presentation?", a: ["showing information with slides", "any"] },
       { q: "Name a presentation program.", a: ["powerpoint", "google slides", "any"] }]),

    D(2, "📊", "Slides",
      "Learn about slides.",
      `<p class='big-emoji'>📊 📄</p>
       <p>A <b>slide</b> is one page of a presentation.</p>
       <h3>Adding a Slide</h3>
       <ol>
         <li>Click "New Slide".</li>
         <li>Choose a layout.</li>
         <li>Add your content.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a slide?</p>
       <p><b>Answer:</b> One <b>page</b> of a presentation.</p>`,

      [{ heading: "Exercise 70.1 — Say.", items: [
          "What is a slide?",
          "How do you add a slide?",
          "What is on the first slide?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a slide?", a: ["one page of presentation", "any"] },
       { q: "What is on the first slide?", a: ["title", "any"] }]),

    D(3, "📊", "Adding Text & Images",
      "Learn to add text and images.",
      `<p class='big-emoji'>📊 📝 🖼️</p>
       <h3>Adding Text</h3>
       <ol>
         <li>Click on a text box.</li>
         <li>Type your text.</li>
       </ol>
       <h3>Adding Images</h3>
       <ol>
         <li>Click Insert → Picture.</li>
         <li>Choose an image from your computer.</li>
         <li>Click Insert.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you add an image?</p>
       <p><b>Answer:</b> Click <b>Insert → Picture</b>.</p>`,

      [{ heading: "Exercise 71.1 — Say.", items: [
          "How do you add text?",
          "How do you add an image?",
          "What makes a good slide?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you add an image?", a: ["insert picture", "any"] },
       { q: "What makes a good slide?", a: ["few words", "clear", "any"] }]),

    D(4, "🎤", "Presenting",
      "Learn to present your slides.",
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
       <p><b>Question:</b> How should you speak when presenting?</p>
       <p><b>Answer:</b> <b>Clearly and slowly</b>.</p>`,

      [{ heading: "Exercise 72.1 — Say.", items: [
          "Name 3 presentation tips.",
          "How should you speak?",
          "Why should you use simple sentences?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How should you speak?", a: ["clearly", "slowly", "any"] },
       { q: "Name a presentation tip.", a: ["stand up straight", "any"] }]),

    D(5, "🎨", "Presentation Poster",
      "Make a presentation poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Make a poster about making presentations.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>A slide with a title</li>
         <li>A slide with text</li>
         <li>A slide with an image</li>
         <li>Presentation tips</li>
       </ul>`,

      [{ heading: "Exercise 73.1 — Draw.", items: [
          "A slide with a title",
          "A slide with text",
          "A slide with an image",
          "3 presentation tips"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a presentation tip.", a: ["speak clearly", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Spreadsheets",
      "Review spreadsheets.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Rows, columns, cells</li>
         <li>Formulas</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a cell?</p>
       <p><b>Answer:</b> Where a <b>row and column meet</b>.</p>`,

      [{ heading: "Exercise 74.1 — Answer.", items: [
          "What is a spreadsheet?",
          "What are rows?",
          "What are columns?",
          "What is a cell?",
          "What cell is Column C, Row 5?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a cell?", a: ["row and column meet", "any"] },
       { q: "What cell is C5?", a: ["c5"] }]),

    D(2, "🔁", "Review Calculations",
      "Review calculations.",
      `<p class='big-emoji'>🔁 🧮</p>
       <h3>Review</h3>
       <ul>
         <li>=A1+A2</li>
         <li>=A1-A2</li>
         <li>=A1*A2</li>
         <li>=A1/A2</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A1=5, A2=3, =A1+A2?</p>
       <p><b>Answer:</b> 8.</p>`,

      [{ heading: "Exercise 75.1 — Calculate.", items: [
          "A1=5, A2=3, =A1+A2 = ___",
          "A1=10, A2=4, =A1-A2 = ___",
          "A1=5, A2=6, =A1*A2 = ___",
          "A1=20, A2=4, =A1/A2 = ___"
        ]}],

      `<p><b>75.1:</b> 1. 8 2. 6 3. 30 4. 5</p>`,

      [{ q: "A1=5, A2=3, =A1+A2?", a: ["8"] }]),

    D(3, "🔁", "Review Presentations",
      "Review presentations.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Review</h3>
       <ul>
         <li>Slides</li>
         <li>Adding text and images</li>
         <li>Presenting</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you add an image?</p>
       <p><b>Answer:</b> Insert → Picture.</p>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
          "What is a presentation?",
          "What is a slide?",
          "How do you add an image?",
          "Name a presentation tip."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How do you add an image?", a: ["insert picture", "any"] },
       { q: "What is a slide?", a: ["one page", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a spreadsheet?</li>
         <li>What are rows?</li>
         <li>What are columns?</li>
         <li>What is a cell?</li>
         <li>A1=5, A2=3, =A1+A2?</li>
         <li>A1=10, A2=4, =A1-A2?</li>
         <li>A1=5, A2=6, =A1*A2?</li>
         <li>A1=20, A2=4, =A1/A2?</li>
         <li>What is a presentation?</li>
         <li>How do you add an image?</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a spreadsheet?", a: ["data in rows and columns", "any"] },
       { q: "A1=5, A2=3, =A1+A2?", a: ["8"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Spreadsheets (10)</li>
         <li>Part B — Calculations (10)</li>
         <li>Part C — Presentations (10)</li>
         <li>Part D — Mixed (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Spreadsheets (10)",
          "Part B — Calculations (10)",
          "Part C — Presentations (10)",
          "Part D — Mixed (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — MULTIMEDIA
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Multimedia", days: [

    D(1, "🎨", "What is Multimedia?",
      "Learn about multimedia.",
      `<p class='big-emoji'>🎨 📽️ 🔊</p>
       <p><b>Multimedia</b> uses more than one type of media together.</p>
       <h3>Types of Media</h3>
       <ul>
         <li>📝 Text</li>
         <li>🖼️ Images</li>
         <li>🔊 Audio</li>
         <li>🎥 Video</li>
         <li>✨ Animation</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is multimedia?</p>
       <p><b>Answer:</b> Using <b>more than one type of media</b> together.</p>`,

      [{ heading: "Exercise 78.1 — Say.", items: [
          "What is multimedia?",
          "Name 3 types of media.",
          "Give an example of multimedia."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is multimedia?", a: ["using more than one type of media", "any"] },
       { q: "Name a type of media.", a: ["text", "image", "audio", "video", "any"] }]),

    D(2, "📝", "Text & Audio",
      "Learn about text and audio.",
      `<p class='big-emoji'>📝 🔊</p>
       <h3>Text</h3>
       <p>Text is the words on a screen. We can change font, size, and colour.</p>
       <h3>Audio</h3>
       <p>Audio is sound. It can be music, voice, or sound effects.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> <b>Sound</b> — music, voice, or effects.</p>`,

      [{ heading: "Exercise 79.1 — Say.", items: [
          "What is text?",
          "What is audio?",
          "How do we change text?",
          "Name 3 types of audio."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is audio?", a: ["sound", "any"] },
       { q: "Name a type of audio.", a: ["music", "voice", "any"] }]),

    D(3, "🖼️", "Images",
      "Learn about images.",
      `<p class='big-emoji'>🖼️ 📸</p>
       <h3>Images</h3>
       <ul>
         <li>📸 Photographs — pictures from a camera</li>
         <li>🎨 Drawings — pictures made by hand or computer</li>
         <li>📊 Charts and graphs</li>
         <li>😀 Icons and emojis</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 types of images.</p>
       <p><b>Answer:</b> Photographs, drawings, and charts.</p>`,

      [{ heading: "Exercise 80.1 — Say.", items: [
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
       <p>Video is moving pictures with sound. Videos can teach, entertain, or tell stories.</p>
       <h3>Parts of a Video</h3>
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

      [{ heading: "Exercise 81.1 — Say.", items: [
          "What is video?",
          "Name 3 video buttons.",
          "What can videos do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is video?", a: ["moving pictures with sound", "any"] },
       { q: "Name a video button.", a: ["play", "pause", "stop", "any"] }]),

    D(5, "🎨", "Multimedia Poster",
      "Make a multimedia poster.",
      `<p class='big-emoji'>🎨 📽️</p>
       <p>Make a poster about the 5 types of media.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>📝 Text</li>
         <li>🖼️ Image</li>
         <li>🔊 Audio</li>
         <li>🎥 Video</li>
         <li>✨ Animation</li>
       </ul>`,

      [{ heading: "Exercise 82.1 — Draw.", items: [
          "Text", "Image", "Audio", "Video", "Animation"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name 3 types of media.", a: ["text image audio", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — DIGITAL CITIZENSHIP
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Digital Citizenship", days: [

    D(1, "🌍", "What is Digital Citizenship?",
      "Learn about digital citizenship.",
      `<p class='big-emoji'>🌍 💻</p>
       <p>A <b>digital citizen</b> is someone who uses technology <b>safely, responsibly, and kindly</b>.</p>
       <h3>A Good Digital Citizen...</h3>
       <ul>
         <li>Is kind online</li>
         <li>Keeps information safe</li>
         <li>Respects others</li>
         <li>Follows rules</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a digital citizen?</p>
       <p><b>Answer:</b> Someone who uses technology <b>safely and responsibly</b>.</p>`,

      [{ heading: "Exercise 83.1 — Say.", items: [
          "What is a digital citizen?",
          "Name 3 things a good digital citizen does.",
          "Why be a good digital citizen?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a digital citizen?", a: ["uses technology safely", "any"] },
       { q: "Name a good digital citizen trait.", a: ["kind", "safe", "any"] }]),

    D(2, "⚖️", "Rights & Responsibilities",
      "Learn about rights and responsibilities.",
      `<p class='big-emoji'>⚖️ ✅</p>
       <h3>Rights</h3>
       <ul>
         <li>The right to use the internet</li>
         <li>The right to be safe online</li>
         <li>The right to privacy</li>
       </ul>
       <h3>Responsibilities</h3>
       <ul>
         <li>Be kind to others</li>
         <li>Keep your password safe</li>
         <li>Follow the rules</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a right.</p>
       <p><b>Answer:</b> The right to <b>be safe online</b>.</p>`,

      [{ heading: "Exercise 84.1 — Say.", items: [
          "Name 2 rights online.",
          "Name 2 responsibilities online.",
          "Why do we have both?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a right online.", a: ["be safe", "privacy", "any"] },
       { q: "Name a responsibility.", a: ["be kind", "keep password safe", "any"] }]),

    D(3, "🤝", "Respect Online",
      "Learn to show respect online.",
      `<p class='big-emoji'>🤝 💬</p>
       <h3>Showing Respect Online</h3>
       <ul>
         <li>Use polite words</li>
         <li>Do not write in ALL CAPS</li>
         <li>Do not share embarrassing photos</li>
         <li>Respect other people's opinions</li>
         <li>Do not cyberbully</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you show respect online?</p>
       <p><b>Answer:</b> By using <b>polite words</b> and respecting others.</p>`,

      [{ heading: "Exercise 85.1 — Say.", items: [
          "How do you show respect online?",
          "Why should you not write in ALL CAPS?",
          "What is cyberbullying?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you show respect?", a: ["polite words", "any"] },
       { q: "Why not ALL CAPS?", a: ["looks like shouting", "any"] }]),

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

      [{ heading: "Exercise 86.1 — Say.", items: [
          "What is a digital footprint?",
          "What leaves a digital footprint?",
          "Why should you be careful online?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a digital footprint?", a: ["trail online", "any"] },
       { q: "What leaves a footprint?", a: ["posts", "photos", "any"] }]),

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

      [{ heading: "Exercise 87.1 — Draw.", items: [
          "Be kind",
          "Stay safe",
          "Respect others",
          "Think before you post"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a good digital citizen trait.", a: ["kind", "safe", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — DATABASES
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Databases", days: [

    D(1, "🗄️", "What is a Database?",
      "Learn about databases.",
      `<p class='big-emoji'>🗄️ 📋</p>
       <p>A <b>database</b> is an organized collection of information that can be easily searched and sorted.</p>
       <h3>Examples</h3>
       <ul>
         <li>📞 A phone contact list</li>
         <li>📚 A library catalogue</li>
         <li>🏫 A school pupil register</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a database?</p>
       <p><b>Answer:</b> An <b>organized collection</b> of information.</p>`,

      [{ heading: "Exercise 88.1 — Say.", items: [
          "What is a database?",
          "Name 3 examples.",
          "Why are databases useful?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a database?", a: ["organized collection of information", "any"] },
       { q: "Name a database example.", a: ["phone list", "library", "any"] }]),

    D(2, "🗄️", "Records & Fields",
      "Learn about records and fields.",
      `<p class='big-emoji'>🗄️ 📋</p>
       <h3>Records and Fields</h3>
       <ul>
         <li><b>Record</b> — one row of information about one person or thing</li>
         <li><b>Field</b> — one piece of information (like name, age)</li>
       </ul>
       <h3>Example Table</h3>
       <table border="1">
         <tr><th>Name</th><th>Age</th><th>Class</th></tr>
         <tr><td>Ama</td><td>8</td><td>3A</td></tr>
         <tr><td>Kofi</td><td>9</td><td>3B</td></tr>
       </table>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One <b>piece of information</b> (like Name or Age).</p>`,

      [{ heading: "Exercise 89.1 — Say.", items: [
          "What is a record?",
          "What is a field?",
          "Name 3 fields in a pupil database."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] },
       { q: "What is a record?", a: ["one row", "any"] }]),

    D(3, "🗄️", "Sorting",
      "Learn about sorting data.",
      `<p class='big-emoji'>🗄️ 🔢</p>
       <p><b>Sorting</b> means arranging data in order.</p>
       <h3>Sorting Types</h3>
       <ul>
         <li>Ascending — smallest to largest (A, B, C or 1, 2, 3)</li>
         <li>Descending — largest to smallest (C, B, A or 3, 2, 1)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Sort A, C, B in ascending order.</p>
       <p><b>Answer:</b> A, B, C.</p>`,

      [{ heading: "Exercise 90.1 — Sort.", items: [
          "Sort A, C, B ascending",
          "Sort 5, 1, 3 ascending",
          "Sort Z, X, Y ascending",
          "Sort 10, 5, 20 ascending",
          "Sort 1, 3, 2 descending"
        ]}],

      `<p><b>90.1:</b> 1. A, B, C 2. 1, 3, 5 3. X, Y, Z 4. 5, 10, 20 5. 3, 2, 1</p>`,

      [{ q: "What is ascending order?", a: ["smallest to largest", "any"] },
       { q: "What is descending order?", a: ["largest to smallest", "any"] }]),

    D(4, "🗄️", "Searching",
      "Learn about searching data.",
      `<p class='big-emoji'>🗄️ 🔎</p>
       <p><b>Searching</b> means looking for information in a database.</p>
       <h3>Search Examples</h3>
       <ul>
         <li>Find all pupils aged 8</li>
         <li>Find all books by a certain author</li>
         <li>Find all contacts starting with A</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you find a specific pupil in a database?</p>
       <p><b>Answer:</b> <b>Search</b> for their name.</p>`,

      [{ heading: "Exercise 91.1 — Say.", items: [
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

      [{ heading: "Exercise 92.1 — Draw.", items: [
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
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Multimedia",
      "Review multimedia.",
      `<p class='big-emoji'>🔁 🎨</p>
       <h3>Review</h3>
       <ul>
         <li>Text, images, audio, video, animation</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> Sound.</p>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "What is multimedia?",
          "Name 3 types of media.",
          "What is audio?",
          "What is video?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is audio?", a: ["sound", "any"] }]),

    D(2, "🔁", "Review Citizenship",
      "Review digital citizenship.",
      `<p class='big-emoji'>🔁 🌍</p>
       <h3>Review</h3>
       <ul>
         <li>Rights and responsibilities</li>
         <li>Respect online</li>
         <li>Digital footprint</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a digital footprint?</p>
       <p><b>Answer:</b> Trail of information you leave online.</p>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "What is a digital citizen?",
          "Name 2 rights online.",
          "Name 2 responsibilities.",
          "What is a digital footprint?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a digital citizen?", a: ["uses technology safely", "any"] },
       { q: "What is a digital footprint?", a: ["trail online", "any"] }]),

    D(3, "🔁", "Review Databases",
      "Review databases.",
      `<p class='big-emoji'>🔁 🗄️</p>
       <h3>Review</h3>
       <ul>
         <li>Records and fields</li>
         <li>Sorting and searching</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One piece of information.</p>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "What is a database?",
          "What is a record?",
          "What is a field?",
          "What is sorting?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] },
       { q: "What is sorting?", a: ["arranging in order", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is multimedia?</li>
         <li>Name 3 types of media.</li>
         <li>What is audio?</li>
         <li>What is video?</li>
         <li>What is a digital citizen?</li>
         <li>Name a right online.</li>
         <li>What is a digital footprint?</li>
         <li>What is a database?</li>
         <li>What is a field?</li>
         <li>What is sorting?</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is a database?", a: ["organized collection", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Multimedia (10)</li>
         <li>Part B — Citizenship (10)</li>
         <li>Part C — Databases (10)</li>
         <li>Part D — Mixed (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Multimedia (10)",
          "Part B — Citizenship (10)",
          "Part C — Databases (10)",
          "Part D — Mixed (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — COMPUTATIONAL THINKING
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Computational Thinking", days: [

    D(1, "🧩", "Decomposition",
      "Learn about decomposition.",
      `<p class='big-emoji'>🧩 🔨</p>
       <p><b>Decomposition</b> means breaking a big problem into smaller parts.</p>
       <h3>Example</h3>
       <p>Big problem: Clean the house.</p>
       <p>Smaller parts:</p>
       <ol>
         <li>Clean the bedroom</li>
         <li>Clean the kitchen</li>
         <li>Clean the sitting room</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is decomposition?</p>
       <p><b>Answer:</b> Breaking a <b>big problem into smaller parts</b>.</p>`,

      [{ heading: "Exercise 97.1 — Decompose.", items: [
          "How would you break down 'Plan a party'?",
          "How would you break down 'Write a story'?",
          "How would you break down 'Tidy your room'?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is decomposition?", a: ["breaking into smaller parts", "any"] },
       { q: "Why is decomposition useful?", a: ["easier to solve", "any"] }]),

    D(2, "🔍", "Pattern Recognition",
      "Learn about pattern recognition.",
      `<p class='big-emoji'>🔍 🔢</p>
       <p><b>Pattern recognition</b> means finding things that repeat.</p>
       <h3>Examples</h3>
       <ul>
         <li>Number patterns: 2, 4, 6, 8…</li>
         <li>Shape patterns: 🔴🔵🔴🔵…</li>
         <li>Daily patterns: morning, afternoon, evening</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes next: 2, 4, 6, 8…?</p>
       <p><b>Answer:</b> <b>10</b> (add 2 each time).</p>`,

      [{ heading: "Exercise 98.1 — Find the pattern.", items: [
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "10, 20, 30, 40, ___",
          "1, 3, 5, 7, ___",
          "3, 6, 9, 12, ___"
        ]}],

      `<p><b>98.1:</b> 1. 10 2. 25 3. 50 4. 9 5. 15</p>`,

      [{ q: "What is pattern recognition?", a: ["finding repeating things", "any"] },
       { q: "What comes next: 2, 4, 6, ___?", a: ["8"] }]),

    D(3, "🎯", "Abstraction",
      "Learn about abstraction.",
      `<p class='big-emoji'>🎯 🔍</p>
       <p><b>Abstraction</b> means focusing on the <b>important details</b> and ignoring the rest.</p>
       <h3>Example</h3>
       <p>If we want to describe a bus to a friend, we say: it's big, yellow, has 4 wheels. We don't mention the colour of the seats unless important.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is abstraction?</p>
       <p><b>Answer:</b> Focusing on <b>important details</b> and ignoring the rest.</p>`,

      [{ heading: "Exercise 99.1 — Say.", items: [
          "What is abstraction?",
          "What are the important details of a chair?",
          "What details can we ignore?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is abstraction?", a: ["focus on important details", "any"] }]),

    D(4, "📋", "Algorithm Design",
      "Learn to design algorithms.",
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
       <p><b>Question:</b> Write an algorithm for making a sandwich.</p>
       <p><b>Answer:</b> 1. Get bread. 2. Add butter. 3. Add filling. 4. Close sandwich. 5. Cut in half.</p>`,

      [{ heading: "Exercise 100.1 — Write an algorithm.", items: [
          "Making a sandwich",
          "Washing hands",
          "Crossing the road"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is algorithm design?", a: ["writing steps to solve", "any"] },
       { q: "What is Step 1 of making a sandwich?", a: ["get bread", "any"] }]),

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

      [{ heading: "Exercise 101.1 — Draw.", items: [
          "Decomposition",
          "Pattern recognition",
          "Abstraction",
          "Algorithm"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name the 4 parts of computational thinking.", a: ["decomposition pattern abstraction algorithm", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — CODING PROJECT
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Coding Project", days: [

    D(1, "📋", "Planning",
      "Plan a coding project.",
      `<p class='big-emoji'>📋 💻</p>
       <h3>Plan Your Project</h3>
       <ol>
         <li>What will your program do?</li>
         <li>Who is it for?</li>
         <li>What will it look like?</li>
         <li>What commands will you use?</li>
       </ol>
       <h3>Project Ideas</h3>
       <ul>
         <li>A quiz game</li>
         <li>A story</li>
         <li>A drawing app</li>
         <li>A number guessing game</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the first step of planning?</p>
       <p><b>Answer:</b> Decide <b>what your program will do</b>.</p>`,

      [{ heading: "Exercise 102.1 — Plan your project.", items: [
          "What will it do?",
          "Who is it for?",
          "What will it look like?",
          "What commands will you use?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the first step of planning?", a: ["decide what it does", "any"] }]),

    D(2, "✍️", "Writing",
      "Write your program.",
      `<p class='big-emoji'>✍️ 💻</p>
       <h3>Writing Your Program</h3>
       <ol>
         <li>Open your coding app.</li>
         <li>Add your first block or command.</li>
         <li>Add more commands step by step.</li>
         <li>Test as you go.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do first when writing?</p>
       <p><b>Answer:</b> Add your <b>first command or block</b>.</p>`,

      [{ heading: "Exercise 103.1 — Write.", items: [
          "Add your first block.",
          "Add more blocks.",
          "Save your work."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do first when writing?", a: ["add first block", "any"] }]),

    D(3, "🧪", "Testing",
      "Test your program.",
      `<p class='big-emoji'>🧪 ✅</p>
       <h3>Testing Your Program</h3>
       <ol>
         <li>Run your program.</li>
         <li>Watch what happens.</li>
         <li>Check if it works the way you planned.</li>
         <li>Note any problems.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we test?</p>
       <p><b>Answer:</b> To check if it <b>works correctly</b>.</p>`,

      [{ heading: "Exercise 104.1 — Test.", items: [
          "Run your program.",
          "Did it work?",
          "What problems did you find?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why test?", a: ["to check it works", "any"] }]),

    D(4, "🐛", "Debugging",
      "Fix errors in your program.",
      `<p class='big-emoji'>🐛 🔧</p>
       <p><b>Debugging</b> means fixing errors in a program.</p>
       <h3>Common Bugs</h3>
       <ul>
         <li>Wrong block used</li>
         <li>Missing step</li>
         <li>Wrong order</li>
         <li>Typos in text</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is debugging?</p>
       <p><b>Answer:</b> <b>Fixing errors</b> in a program.</p>`,

      [{ heading: "Exercise 105.1 — Debug.", items: [
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
       <p><b>Question:</b> What do you say first when presenting?</p>
       <p><b>Answer:</b> What your <b>program does</b>.</p>`,

      [{ heading: "Exercise 106.1 — Present.", items: [
          "Show your program.",
          "Say what it does.",
          "Say what you learned."
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: "What do you say first?", a: ["what program does", "any"] }])
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
         <li>What is a computer?</li>
         <li>Hardware vs software</li>
         <li>Input, process, output, storage</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is hardware?</p>
       <p><b>Answer:</b> Physical parts you can touch.</p>`,

      [{ heading: "Exercise 107.1 — Answer.", items: [
          "What is a computer?",
          "What is hardware?",
          "What is software?",
          "Name an input device.",
          "Name an output device."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is hardware?", a: ["physical parts", "any"] },
       { q: "Name an input device.", a: ["keyboard", "mouse", "any"] }]),

    D(2, "🔁", "Algorithms",
      "Revise algorithms.",
      `<p class='big-emoji'>🔁 📋</p>
       <h3>Revise</h3>
       <ul>
         <li>What is an algorithm?</li>
         <li>Sequencing</li>
         <li>Flowcharts</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> Set of steps.</p>`,

      [{ heading: "Exercise 108.1 — Answer.", items: [
          "What is an algorithm?",
          "What is sequencing?",
          "What is a flowchart?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] }]),

    D(3, "🔁", "Internet",
      "Revise internet.",
      `<p class='big-emoji'>🔁 🌐</p>
       <h3>Revise</h3>
       <ul>
         <li>What is the internet?</li>
         <li>Browsers and search engines</li>
         <li>Online safety</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your password?</p>
       <p><b>Answer:</b> No.</p>`,

      [{ heading: "Exercise 109.1 — Answer.", items: [
          "What is the internet?",
          "Name a browser.",
          "Should you share your password?",
          "What is cyberbullying?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Should you share your password?", a: ["no"] },
       { q: "What is a browser?", a: ["visits websites", "any"] }]),

    D(4, "🔁", "Spreadsheets",
      "Revise spreadsheets.",
      `<p class='big-emoji'>🔁 📊</p>
       <h3>Revise</h3>
       <ul>
         <li>Rows, columns, cells</li>
         <li>Simple formulas</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> A1=5, A2=3, =A1+A2?</p>
       <p><b>Answer:</b> 8.</p>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "What is a spreadsheet?",
          "What is a cell?",
          "A1=5, A2=3, =A1+A2 = ___",
          "A1=10, A2=4, =A1-A2 = ___"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a cell?", a: ["row and column meet", "any"] },
       { q: "A1=5, A2=3, =A1+A2?", a: ["8"] }]),

    D(5, "🎉", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What is an algorithm?</li>
         <li>What is a flowchart?</li>
         <li>What is the internet?</li>
         <li>What is a browser?</li>
         <li>Should you share your password?</li>
         <li>What is a spreadsheet?</li>
         <li>What is a cell?</li>
         <li>A1=5, A2=3, =A1+A2?</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is hardware?", a: ["physical parts", "any"] },
       { q: "What is a cell?", a: ["row and column meet", "any"] }])
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
         <li>Using computers</li>
         <li>Word processing</li>
         <li>Algorithms and coding</li>
         <li>Internet and email</li>
         <li>Online safety</li>
         <li>Spreadsheets</li>
         <li>Presentations</li>
         <li>Multimedia</li>
         <li>Digital citizenship</li>
         <li>Databases</li>
         <li>Computational thinking</li>
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
      "Make a portfolio.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Make a <b>portfolio</b> of your best computing work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best poster</li>
         <li>Your best algorithm</li>
         <li>Your best program or flowchart</li>
         <li>Your best spreadsheet</li>
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

      [{ heading: "Exercise 114.1 — Present your portfolio.", items: [
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
       <p>You have completed Grade 3 Computing! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>💻 Show one program or poster.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 3 Computing! I can use a computer, write algorithms, and stay safe online!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Show one program or poster.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 4?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a computing champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can use a computer!"</li>
         <li>⭐ "I can write algorithms!"</li>
         <li>⭐ "I stay safe online!"</li>
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
          'Say "I can write algorithms!"',
          'Say "I stay safe online!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of computing!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];