// src/data/grade2/computing.js
// Grade 2 Computing — NaCCA Standards-Based Curriculum (expanded)
// Strands: Introduction to Computing · Productivity Software · Communication Networks · Computational Thinking

import { D, wk } from '../helpers.js';

export const computing = [

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: INTRODUCTION TO COMPUTING
  // SUB-STRAND: COMPONENTS OF A COMPUTER
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: 'What is a Computer?', days: [

    D(1, '💻', 'A Computer',
      'Know what a computer is and where it is used.',
      `<p class='big-emoji'>💻 🖥️ 📱 ⌚</p>
       <p>A <b>computer</b> is an electronic machine that helps us work, learn, and play. It can store information, calculate, and show pictures, sounds, and videos.</p>

       <h3>Where We See Computers</h3>
       <ul>
         <li>🏫 At school — for learning and typing.</li>
         <li>🏦 At the bank — for counting money.</li>
         <li>🏥 At the hospital — for keeping patient records.</li>
         <li>🏪 At the market — for measuring and billing.</li>
         <li>🏠 At home — phones, tablets, and TVs.</li>
         <li>✈️ At the airport — for booking tickets.</li>
       </ul>

       <h3>What a Computer Can Do</h3>
       <ul>
         <li>Type words, numbers, and pictures.</li>
         <li>Store information (like a big notebook).</li>
         <li>Show videos and play music.</li>
         <li>Send messages (email, chat).</li>
         <li>Play games.</li>
       </ul>

       <h3>What a Computer Cannot Do</h3>
       <ul>
         <li>Think on its own — a person must tell it what to do.</li>
         <li>Feel emotions.</li>
         <li>Do anything without electricity (or a battery).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 places where you have seen a computer: school, bank, hospital, home.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a phone a computer?</p>
       <p><b>Answer:</b> Yes! A phone is a small computer that can call, type, take photos, and play games.</p>`,

      [{ heading: 'Exercise 1.1 — Say and list', items: [
          'What is a computer?',
          'Name 3 places where computers are used.',
          'Name 3 things a computer can do.'
        ]},
       { heading: 'Exercise 1.2 — Circle the computers', items: [
          'phone', 'stone', 'laptop', 'chair', 'tablet', 'book', 'TV'
        ]},
       { heading: 'Exercise 1.3 — Draw and label', items: [
          'Draw a place you have seen a computer.'
        ]}],

      `<p><b>1.2:</b> Circle phone, laptop, tablet, TV.</p>`,

      [{ q: 'Is a phone a computer?', a: ['yes'] },
       { q: 'Is a book a computer?', a: ['no'] },
       { q: 'Name a place where computers are used.', a: ['school', 'bank', 'hospital', 'home', 'any'] }]),

    D(2, '🖥️', 'Parts of a Computer',
      'Identify the main parts of a computer.',
      `<p class='big-emoji'>🖥️ ⌨️ 🖱️ 🖨️ 🔊</p>

       <h3>Main Parts</h3>
       <ul>
         <li>🖥️ <b>Monitor</b> — the screen. We look at it to see pictures, videos, and words.</li>
         <li>⌨️ <b>Keyboard</b> — has letters and numbers. We use it to type.</li>
         <li>🖱️ <b>Mouse</b> — a small device we move with our hand to point and click.</li>
         <li>🖨️ <b>Printer</b> — prints what we type onto paper.</li>
         <li>🔊 <b>Speaker</b> — plays sound.</li>
         <li>🎤 <b>Microphone</b> — records sound (our voice).</li>
         <li>🖥️ <b>CPU</b> — the brain of the computer (the box).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a computer system with a monitor, keyboard, mouse, and CPU. Label each part.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which part do you type on?</p>
       <p><b>Answer:</b> You type on the <b>keyboard</b>.</p>`,

      [{ heading: 'Exercise 2.1 — Say and point', items: [
          'Point to the monitor.',
          'Point to the keyboard.',
          'Point to the mouse.',
          'Point to the CPU.'
        ]},
       { heading: 'Exercise 2.2 — Match the part to its use', items: [
          'Monitor → look at pictures',
          'Keyboard → type letters',
          'Mouse → click and point',
          'Printer → print on paper',
          'Speaker → hear sound'
        ]},
       { heading: 'Exercise 2.3 — Draw and label', items: [
          'Draw a computer and label 5 parts.'
        ]}],

      `<p><b>2.2:</b> Monitor → look at pictures; Keyboard → type letters; Mouse → click and point; Printer → print on paper; Speaker → hear sound.</p>`,

      [{ q: 'What do you look at?', a: ['monitor', 'screen'] },
       { q: 'What do you type on?', a: ['keyboard'] },
       { q: 'What do you click with?', a: ['mouse'] },
       { q: 'What prints on paper?', a: ['printer'] }]),

    D(3, '🖱️', 'Keyboard & Mouse',
      'Use the keyboard and mouse to interact with a computer.',
      `<p class='big-emoji'>⌨️ 🖱️ 🖐️</p>

       <h3>The Keyboard</h3>
       <p>The keyboard has many keys:</p>
       <ul>
         <li><b>Letter keys</b>: A to Z</li>
         <li><b>Number keys</b>: 0 to 9</li>
         <li><b>Space bar</b>: the long key at the bottom — used to put a space between words.</li>
         <li><b>Enter key</b>: starts a new line.</li>
         <li><b>Shift key</b>: used with letters to make capital letters.</li>
         <li><b>Backspace</b>: deletes what you typed.</li>
       </ul>

       <h3>The Mouse</h3>
       <ul>
         <li><b>Left button</b>: used to click and select.</li>
         <li><b>Right button</b>: opens a menu.</li>
         <li><b>Scroll wheel</b>: scrolls up and down.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard. Colour the letter keys blue and the number keys red. Colour the space bar green.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which key makes a space between words?</p>
       <p><b>Answer:</b> The <b>space bar</b>.</p>`,

      [{ heading: 'Exercise 3.1 — Say and find', items: [
          'Find the letter A.',
          'Find the number 1.',
          'Find the space bar.',
          'Find the Enter key.'
        ]},
       { heading: 'Exercise 3.2 — Answer', items: [
          'What do you use to type?',
          'What do you use to click?',
          'What does the space bar do?',
          'What does the Enter key do?'
        ]},
       { heading: 'Exercise 3.3 — Draw', items: [
          'Draw a keyboard with 5 keys labelled.'
        ]}],

      `<p><b>3.2:</b> 1. Keyboard 2. Mouse 3. Makes a space 4. Starts a new line</p>`,

      [{ q: 'What do you use to type?', a: ['keyboard'] },
       { q: 'What do you use to click?', a: ['mouse'] },
       { q: 'What does the space bar do?', a: ['makes a space', 'space'] },
       { q: 'What does the Enter key do?', a: ['new line', 'starts a new line'] }]),

    D(4, '🖨️', 'Printer & Speaker',
      'Know the functions of output devices.',
      `<p class='big-emoji'>🖨️ 🔊 🎧 📄</p>

       <h3>Output Devices</h3>
       <p>Output devices give us information <b>from</b> the computer.</p>
       <ul>
         <li>🖨️ <b>Printer</b> — prints on paper.</li>
         <li>🔊 <b>Speaker</b> — plays sound (music, videos).</li>
         <li>🎧 <b>Headphones</b> — plays sound for one person.</li>
         <li>🖥️ <b>Monitor</b> — shows the picture.</li>
         <li>📽️ <b>Projector</b> — shows the picture on a big wall.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a printer printing a page and a speaker playing music.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a printer do?</p>
       <p><b>Answer:</b> A printer <b>prints on paper</b> what you have typed.</p>`,

      [{ heading: 'Exercise 4.1 — Answer', items: [
          'What does a printer do?',
          'What does a speaker do?',
          'Name 3 output devices.'
        ]},
       { heading: 'Exercise 4.2 — Sort', items: [
          'Sort into Input / Output: keyboard, monitor, mouse, printer, speaker, microphone.'
        ]},
       { heading: 'Exercise 4.3 — Draw', items: [
          'Draw 3 output devices.'
        ]}],

      `<p><b>4.2:</b> Input: keyboard, mouse, microphone. Output: monitor, printer, speaker.</p>`,

      [{ q: 'What does a printer do?', a: ['prints', 'print on paper'] },
       { q: 'What does a speaker do?', a: ['plays sound', 'sound'] },
       { q: 'Name an output device.', a: ['printer', 'monitor', 'speaker', 'any'] }]),

    D(5, '🎨', 'Computer Poster',
      'Consolidate learning about computer parts.',
      `<p>Today we make a "Computer Parts" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Parts of a Computer"</b></li>
         <li>Draw a monitor, keyboard, mouse, CPU, and printer.</li>
         <li>Write the name under each part.</li>
         <li>Write one sentence: "A computer helps us work and learn."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the name of each part and what it does.</p>`,

      [{ heading: 'Exercise 5.1 — Draw your poster', items: [
          'Monitor',
          'Keyboard',
          'Mouse',
          'CPU',
          'Printer'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 5 parts of a computer.', a: ['monitor', 'keyboard', 'mouse', 'cpu', 'printer', 'any'] },
       { q: 'Which part is the brain of the computer?', a: ['cpu'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: INTRODUCTION TO COMPUTING — Using a Computer
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: 'Using a Computer', days: [

    D(1, '🔌', 'Turning On',
      'Switch a computer on and off safely.',
      `<p class='big-emoji'>🔌 🔘 💡</p>
       <p>Before using a computer, we must learn how to switch it on. This is easy, but we must be careful.</p>

       <h3>Steps to Turn On a Computer</h3>
       <ol>
         <li>Check that the power cable is plugged in.</li>
         <li>Press the <b>power button</b> (usually a small circle on the CPU or laptop).</li>
         <li>Wait a few seconds for the computer to load.</li>
         <li>The screen will show the <b>desktop</b> — the main screen.</li>
       </ol>

       <h3>Steps to Turn Off a Computer</h3>
       <ol>
         <li>Save any work you have done.</li>
         <li>Click the <b>Start</b> button.</li>
         <li>Click <b>Shut down</b>.</li>
         <li>Wait for the screen to go off.</li>
       </ol>

       <h3>Safety Rules</h3>
       <ul>
         <li>Do not pull the power cable.</li>
         <li>Do not put water near the computer.</li>
         <li>Do not press many keys at the same time.</li>
         <li>Always wash your hands before using a computer.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the power button on a computer. Circle it in red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you press to turn on a computer?</p>
       <p><b>Answer:</b> You press the <b>power button</b>.</p>`,

      [{ heading: 'Exercise 6.1 — Write the steps to start a computer.', items: [
          'Step 1: ___',
          'Step 2: ___',
          'Step 3: ___',
          'Step 4: ___'
        ]},
       { heading: 'Exercise 6.2 — Write the steps to shut down a computer.', items: [
          'Step 1: ___',
          'Step 2: ___',
          'Step 3: ___'
        ]},
       { heading: 'Exercise 6.3 — Answer', items: [
          'What do you press to turn on?',
          'What should you do before turning off?',
          'Name one safety rule.'
        ]}],

      `<p><b>6.1:</b> 1. Check power 2. Press power button 3. Wait 4. Desktop appears</p>
       <p><b>6.3:</b> 1. Power button 2. Save your work 3. Wash hands; don\'t pull the cable.</p>`,

      [{ q: 'What do you press to turn on?', a: ['power button', 'power'] },
       { q: 'What should you do before turning off?', a: ['save your work', 'save'] },
       { q: 'Name one safety rule.', a: ['no water', 'wash hands', 'any'] }]),

    D(2, '🖥️', 'Desktop',
      'Identify the parts of the desktop.',
      `<p class='big-emoji'>🖥️ 📁 🖼️ 🔘</p>

       <h3>What is the Desktop?</h3>
       <p>The <b>desktop</b> is the main screen you see after the computer has loaded. It has:</p>
       <ul>
         <li><b>Icons</b> — small pictures that open programs when you double-click them.</li>
         <li><b>Taskbar</b> — the strip at the bottom of the screen.</li>
         <li><b>Start button</b> — at the bottom-left corner; opens the start menu.</li>
         <li><b>Wallpaper</b> — the background picture.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a rectangle for the screen. Inside, draw 3 icons, a taskbar at the bottom, and a Start button in the corner.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you click to see all your programs?</p>
       <p><b>Answer:</b> You click the <b>Start button</b>.</p>`,

      [{ heading: 'Exercise 7.1 — Label the desktop', items: [
          'Icons',
          'Taskbar',
          'Start button',
          'Wallpaper'
        ]},
       { heading: 'Exercise 7.2 — Answer', items: [
          'What are the small pictures called?',
          'Where is the Start button?',
          'What is the background picture called?'
        ]},
       { heading: 'Exercise 7.3 — Draw', items: [
          'Draw your own desktop with 3 icons and a taskbar.'
        ]}],

      `<p><b>7.2:</b> 1. Icons 2. Bottom-left 3. Wallpaper</p>`,

      [{ q: 'What are the small pictures called?', a: ['icons'] },
       { q: 'Where is the Start button?', a: ['bottom left', 'bottom-left', 'corner'] },
       { q: 'What is the background picture called?', a: ['wallpaper'] }]),

    D(3, '📁', 'Files & Folders',
      'Understand that a folder holds files.',
      `<p class='big-emoji'>📁 📄 📎</p>

       <h3>What is a File?</h3>
       <p>A <b>file</b> is a document, a picture, a song, or a video saved on a computer.</p>

       <h3>What is a Folder?</h3>
       <p>A <b>folder</b> is like a container that holds files. It helps us organise our work. Example: a "Grade 2" folder can hold all your school files.</p>

       <h3>How to Create a Folder</h3>
       <ol>
         <li>Right-click on the desktop.</li>
         <li>Choose <b>New</b> → <b>Folder</b>.</li>
         <li>Type a name (e.g., "My Homework").</li>
         <li>Press Enter.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a folder with 3 files inside. Label the folder "Grade 2".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What holds files?</p>
       <p><b>Answer:</b> A <b>folder</b> holds files.</p>`,

      [{ heading: 'Exercise 8.1 — Answer', items: [
          'What is a file?',
          'What is a folder?',
          'What holds files?',
          'What is a document called?'
        ]},
       { heading: 'Exercise 8.2 — Create a folder', items: [
          'Create a folder called "Grade 2".',
          'Save a file inside it.'
        ]},
       { heading: 'Exercise 8.3 — Draw', items: [
          'Draw a folder and 3 files inside it.'
        ]}],

      `<p><b>8.1:</b> 1. A saved document 2. A container that holds files 3. A folder 4. A file</p>`,

      [{ q: 'What holds files?', a: ['folder'] },
       { q: 'What is a document called?', a: ['file'] },
       { q: 'What do we save on a computer?', a: ['file', 'document', 'any'] }]),

    D(4, '⌨️', 'Typing',
      'Type letters, numbers, and simple words.',
      `<p class='big-emoji'>⌨️ ✍️ 🔤</p>

       <h3>Typing on the Keyboard</h3>
       <p>Place your fingers on the keyboard. Use the <b>index finger</b> to type. Type slowly and carefully.</p>

       <h3>What to Type First</h3>
       <ol>
         <li>Your name — for example: <b>Ama</b>.</li>
         <li>The letters A B C.</li>
         <li>The numbers 1 2 3.</li>
         <li>The words: cat, dog, sun, hat.</li>
       </ol>

       <h3>Special Keys</h3>
       <ul>
         <li><b>Space bar</b> — makes a space.</li>
         <li><b>Shift + letter</b> — makes a capital letter.</li>
         <li><b>Backspace</b> — deletes a mistake.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the keyboard and circle the space bar in green. Circle the Backspace key in red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you type the letter A?</p>
       <p><b>Answer:</b> Press the <b>A key</b> on the keyboard.</p>`,

      [{ heading: 'Exercise 9.1 — Type', items: [
          'Type your name.',
          'Type A B C.',
          'Type 1 2 3.',
          'Type cat, dog, sun, hat.'
        ]},
       { heading: 'Exercise 9.2 — Answer', items: [
          'What do you type on?',
          'Which key makes a space?',
          'Which key deletes a mistake?'
        ]},
       { heading: 'Exercise 9.3 — Practice', items: [
          'Practice typing for 5 minutes.'
        ]}],

      `<p><b>9.2:</b> 1. Keyboard 2. Space bar 3. Backspace</p>`,

      [{ q: 'What do you type on?', a: ['keyboard'] },
       { q: 'Which key makes a space?', a: ['space bar', 'spacebar'] },
       { q: 'Type the letter A.', a: ['a', 'A'] }]),

    D(5, '🎨', 'Draw Your Computer',
      'Consolidate learning by drawing a full computer system.',
      `<p>Today you will draw a complete computer system.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>A monitor (with a screen showing something you like).</li>
         <li>A keyboard (with some keys visible).</li>
         <li>A mouse (with its two buttons).</li>
         <li>A CPU (the tower).</li>
         <li>A printer or a speaker.</li>
         <li>Label each part.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your drawing. Say the name of each part.</p>`,

      [{ heading: 'Exercise 10.1 — Draw your computer', items: [
          'Monitor',
          'Keyboard',
          'Mouse',
          'CPU',
          'Printer or Speaker'
        ]}],

      `<p>⭐ for a complete drawing.</p>`,

      [{ q: 'Name the parts you drew.', a: ['monitor', 'keyboard', 'mouse', 'cpu', 'printer', 'any'] },
       { q: 'Which part shows pictures?', a: ['monitor', 'screen'] }])
  ]},

    // ═══════════════════════════════════════════════════════════════════
  // STRAND: PRODUCTIVITY SOFTWARE — Drawing (continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: 'Fun with Drawing', days: [

    D(1, '🎨', 'Paint',
      'Use a drawing program to draw a picture.',
      `<p class='big-emoji'>🎨 🖌️ 🖼️</p>
       <p><b>Paint</b> is a program on the computer that lets us draw and colour. We use a mouse or touchscreen to draw.</p>

       <h3>Tools in Paint</h3>
       <ul>
         <li>🖌️ <b>Brush</b> — for free drawing.</li>
         <li>✏️ <b>Pencil</b> — for thin lines.</li>
         <li>🧽 <b>Eraser</b> — for rubbing out mistakes.</li>
         <li>🎨 <b>Colours</b> — for filling in shapes.</li>
       </ul>

       <h3>How to Open Paint</h3>
       <ol>
         <li>Click the <b>Start</b> button.</li>
         <li>Type "Paint" in the search bar.</li>
         <li>Click on the Paint icon.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the Paint window with the toolbar at the top and a blank canvas in the middle.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is Paint used for?</p>
       <p><b>Answer:</b> Paint is used to <b>draw and colour pictures</b> on the computer.</p>`,

      [{ heading: 'Exercise 21.1 — Open Paint', items: [
          'Open the Paint program on a computer.',
          'Find the Brush, Pencil, and Eraser tools.',
          'Pick 3 different colours.'
        ]},
       { heading: 'Exercise 21.2 — Draw', items: [
          'Draw a sun.',
          'Draw a house.',
          'Draw a tree.'
        ]},
       { heading: 'Exercise 21.3 — Answer', items: [
          'What is Paint used for?',
          'Name 3 tools in Paint.',
          'What do we use to rub out mistakes?'
        ]}],

      `<p><b>21.3:</b> 1. Drawing 2. Brush, pencil, eraser 3. Eraser</p>`,

      [{ q: 'What is Paint used for?', a: ['drawing', 'colouring', 'any'] },
       { q: 'What do we rub out with?', a: ['eraser'] },
       { q: 'Name a tool in Paint.', a: ['brush', 'pencil', 'eraser', 'any'] }]),

    D(2, '🖌️', 'Shapes',
      'Draw shapes in Paint.',
      `<p class='big-emoji'>⬛ ⚪ 🔺 ▬</p>
       <p>Paint has shape tools. We can draw perfect shapes without using our hands free.</p>

       <h3>Shapes in Paint</h3>
       <ul>
         <li>⬛ <b>Rectangle</b> — 4 sides (like a door).</li>
         <li>⚪ <b>Ellipse (circle)</b> — round (like a ball).</li>
         <li>🔺 <b>Triangle</b> — 3 sides.</li>
         <li>▬ <b>Line</b> — a straight line.</li>
         <li>⭐ <b>Star</b> — 5 points.</li>
       </ul>

       <h3>How to Draw a Shape</h3>
       <ol>
         <li>Click the Shapes button.</li>
         <li>Pick a shape (e.g., rectangle).</li>
         <li>Move the mouse to the canvas.</li>
         <li>Click and drag to make the shape.</li>
         <li>Release the mouse.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>In Paint, draw one of each shape: a circle, a square, a triangle, a rectangle, a star. Colour each with a different colour.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you draw a circle in Paint?</p>
       <p><b>Answer:</b> Choose the <b>Ellipse</b> tool, then click and drag on the canvas.</p>`,

      [{ heading: 'Exercise 22.1 — Draw shapes', items: [
          'Draw a circle.',
          'Draw a square.',
          'Draw a triangle.',
          'Draw a rectangle.',
          'Draw a star.'
        ]},
       { heading: 'Exercise 22.2 — Colour them', items: [
          'Use different colours for each shape.'
        ]},
       { heading: 'Exercise 22.3 — Answer', items: [
          'What shape has 3 sides?',
          'What shape is round?',
          'What shape has 5 points?'
        ]}],

      `<p><b>22.3:</b> 1. Triangle 2. Circle 3. Star</p>`,

      [{ q: 'How many sides does a triangle have?', a: ['3', 'three'] },
       { q: 'What shape is a ball?', a: ['circle'] },
       { q: 'What shape has 5 points?', a: ['star'] }]),

    D(3, '🌈', 'Colours',
      'Use colours in Paint.',
      `<p class='big-emoji'>🔴 🟠 🟡 🟢 🔵 🟣</p>

       <h3>The Colour Palette</h3>
       <p>At the top of the Paint window, there is a <b>colour palette</b>. It shows many colours. Click a colour to select it.</p>

       <h3>Two Kinds of Colour</h3>
       <ul>
         <li><b>Colour 1</b> — the main colour (used when drawing).</li>
         <li><b>Colour 2</b> — the second colour (used with the right mouse button).</li>
       </ul>

       <h3>How to Colour a Shape</h3>
       <ol>
         <li>Draw a shape.</li>
         <li>Click the <b>Fill</b> tool (paint bucket).</li>
         <li>Pick a colour.</li>
         <li>Click inside the shape to fill it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>In Paint, draw a rainbow with 6 colours: red, orange, yellow, green, blue, purple.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you fill a shape with colour?</p>
       <p><b>Answer:</b> Use the <b>Fill tool</b> (paint bucket) and click inside the shape.</p>`,

      [{ heading: 'Exercise 23.1 — Draw a rainbow', items: [
          'Red',
          'Orange',
          'Yellow',
          'Green',
          'Blue',
          'Purple'
        ]},
       { heading: 'Exercise 23.2 — Colour a picture', items: [
          'Draw a house and colour it with 3 colours.'
        ]},
       { heading: 'Exercise 23.3 — Answer', items: [
          'Where is the colour palette?',
          'What tool fills colour inside a shape?'
        ]}],

      `<p><b>23.3:</b> 1. Top of the window 2. Fill tool</p>`,

      [{ q: 'What tool fills colour?', a: ['fill', 'paint bucket', 'bucket'] },
       { q: 'Name 3 colours.', a: ['red', 'blue', 'yellow', 'any'] }]),

    D(4, '📁', 'Save Drawing',
      'Save a drawing on the computer.',
      `<p class='big-emoji'>💾 📁 🖼️</p>
       <p>After drawing, we must <b>save</b> our picture so it is not lost when the computer is switched off.</p>

       <h3>How to Save</h3>
       <ol>
         <li>Click <b>File</b> at the top-left.</li>
         <li>Click <b>Save As</b>.</li>
         <li>Type a name for the file (e.g., "My Picture").</li>
         <li>Choose where to save it (e.g., Desktop).</li>
         <li>Click <b>Save</b>.</li>
       </ol>

       <h3>Where Do Files Go?</h3>
       <ul>
         <li>📁 <b>Desktop</b> — the main screen.</li>
         <li>📁 <b>Documents</b> — for word and school files.</li>
         <li>📁 <b>Pictures</b> — for images and drawings.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a folder with a picture inside it. Label the folder "My Pictures".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we save our drawings?</p>
       <p><b>Answer:</b> So we do not lose them when we switch off the computer.</p>`,

      [{ heading: 'Exercise 24.1 — Save your work', items: [
          'Save your drawing with your name.',
          'Ask your parent to help find the file.'
        ]},
       { heading: 'Exercise 24.2 — Answer', items: [
          'What menu do you use to save?',
          'Why do we save?'
        ]}],

      `<p><b>24.2:</b> 1. File 2. So we don\'t lose our work</p>`,

      [{ q: 'What menu do you use to save?', a: ['file'] },
       { q: 'Why do we save?', a: ['to keep it', 'so we don\'t lose it', 'any'] }]),

    D(5, '🖼️', 'Show Drawing',
      'Show a drawing to a family member.',
      `<p class='big-emoji'>👨‍👩‍👧 🖼️ 🎤</p>
       <p>Today you will show your drawing to your family. Speaking about your work helps you learn.</p>

       <h3>What to Say</h3>
       <ul>
         <li>"This is my drawing."</li>
         <li>"I used Paint to make it."</li>
         <li>"I drew a ____."</li>
         <li>"My favourite part is ____."</li>
       </ul>

       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Speak clearly.</li>
         <li>Show the drawing to everyone.</li>
         <li>Answer questions about it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself showing your drawing to your family.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you draw?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 25.1 — Show and Tell', items: [
          'Show your drawing.',
          'Say what you drew.',
          'Say what program you used.'
        ]}],

      `<p>⭐ for confident speaking.</p>`,

      [{ q: 'What program did you use?', a: ['paint'] },
       { q: 'What did you draw?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: PRODUCTIVITY SOFTWARE — Typing (continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: 'More Typing', days: [

    D(1, '⌨️', 'Letters',
      'Type letters from A to Z.',
      `<p class='big-emoji'>⌨️ 🔤 🅰️</p>
       <p>The keyboard has all 26 letters. Let's practise typing them.</p>

       <h3>The Letter Keys</h3>
       <p>Letters are arranged like this on most keyboards:</p>
       <p><b>Q W E R T Y U I O P</b><br>
          <b>A S D F G H J K L</b><br>
          <b>Z X C V B N M</b></p>

       <h3>How to Type</h3>
       <ol>
         <li>Put your fingers on the home row (A S D F J K L ;).</li>
         <li>Press one letter at a time.</li>
         <li>Do not look at the keyboard — try to remember.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard with the letters A–M on the top row and N–Z on the second row.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you type the letter A?</p>
       <p><b>Answer:</b> Press the <b>A key</b> on the keyboard.</p>`,

      [{ heading: 'Exercise 26.1 — Type letters', items: [
          'Type A B C D E.',
          'Type F G H I J.',
          'Type K L M N O.',
          'Type P Q R S T.',
          'Type U V W X Y Z.'
        ]},
       { heading: 'Exercise 26.2 — Type the alphabet', items: [
          'Type the whole alphabet from A to Z.'
        ]},
       { heading: 'Exercise 26.3 — Answer', items: [
          'How many letters are on the keyboard?',
          'Where do your fingers rest?'
        ]}],

      `<p><b>26.3:</b> 1. 26 2. Home row</p>`,

      [{ q: 'How many letters on the keyboard?', a: ['26', 'twenty-six'] },
       { q: 'What is the home row?', a: ['asdf jkl', 'asdfjkl', 'any'] }]),

    D(2, '🔢', 'Numbers',
      'Type numbers from 0 to 9.',
      `<p class='big-emoji'>🔢 0️⃣ 1️⃣ 2️⃣</p>
       <p>The keyboard has number keys along the top row.</p>

       <h3>The Number Keys</h3>
       <p><b>1 2 3 4 5 6 7 8 9 0</b></p>

       <h3>How to Type Numbers</h3>
       <ol>
         <li>Find the numbers along the top row.</li>
         <li>Press one number at a time.</li>
         <li>Use your right hand for numbers 1–5 and left hand for 6–0 (or any way that is comfortable).</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard and circle the number keys at the top in red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where are the number keys?</p>
       <p><b>Answer:</b> Along the <b>top row</b> of the keyboard.</p>`,

      [{ heading: 'Exercise 27.1 — Type numbers', items: [
          'Type 1 2 3 4 5.',
          'Type 6 7 8 9 0.',
          'Type your age (e.g., 7).',
          'Type your house number.',
          'Type your phone number (if you know it).'
        ]},
       { heading: 'Exercise 27.2 — Answer', items: [
          'Where are the number keys?',
          'How many number keys are there?'
        ]}],

      `<p><b>27.2:</b> 1. Top row 2. 10</p>`,

      [{ q: 'Where are the number keys?', a: ['top row', 'top'] },
       { q: 'How many number keys?', a: ['10', 'ten'] }]),

    D(3, '✍️', 'Words',
      'Type three-letter words.',
      `<p class='big-emoji'>✍️ 📝 🐱</p>
       <p>Now let's type some simple words we know.</p>

       <h3>Words to Type</h3>
       <ul>
         <li>cat</li>
         <li>dog</li>
         <li>sun</li>
         <li>hat</li>
         <li>bat</li>
         <li>rat</li>
       </ul>

       <h3>How to Type a Word</h3>
       <ol>
         <li>Type the first letter.</li>
         <li>Type the second letter.</li>
         <li>Type the third letter.</li>
         <li>Press the space bar to leave a space before the next word.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard. Write the word "cat" beside it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you type "cat"?</p>
       <p><b>Answer:</b> Press the <b>C</b> key, then the <b>A</b> key, then the <b>T</b> key.</p>`,

      [{ heading: 'Exercise 28.1 — Type the words', items: [
          'Type: cat',
          'Type: dog',
          'Type: sun',
          'Type: hat',
          'Type: bat',
          'Type: rat'
        ]},
       { heading: 'Exercise 28.2 — Practise', items: [
          'Type each word 3 times.'
        ]},
       { heading: 'Exercise 28.3 — Answer', items: [
          'What do you press between words?'
        ]}],

      `<p><b>28.3:</b> Space bar</p>`,

      [{ q: 'What do you press between words?', a: ['space bar', 'space'] },
       { q: 'Type the word "cat".', a: ['cat'] }]),

    D(4, '📝', 'Short Sentences',
      'Type short sentences.',
      `<p class='big-emoji'>📝 ✍️ ✨</p>

       <h3>Sentences to Type</h3>
       <ul>
         <li>I am happy.</li>
         <li>I love my family.</li>
         <li>The sun is hot.</li>
         <li>I can read.</li>
       </ul>

       <h3>How to Type a Sentence</h3>
       <ol>
         <li>Start with a <b>capital letter</b>.</li>
         <li>Type the words.</li>
         <li>Put a <b>space</b> between each word.</li>
         <li>End with a <b>full stop</b>.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a screen showing the sentence "I am happy."</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you type "I am happy."?</p>
       <p><b>Answer:</b> Press Shift + I for capital I, space, a, m, space, h, a, p, p, y, then full stop.</p>`,

      [{ heading: 'Exercise 29.1 — Type the sentences', items: [
          'I am happy.',
          'I love my family.',
          'The sun is hot.',
          'I can read.',
          'My name is ____.'
        ]},
       { heading: 'Exercise 29.2 — Check', items: [
          'Check your capital letters and full stops.'
        ]}],

      `<p>⭐ for correct typing.</p>`,

      [{ q: 'What do we start a sentence with?', a: ['capital letter', 'capital'] },
       { q: 'What do we end with?', a: ['full stop', '.'] }]),

    D(5, '🎨', 'Typing Poster',
      'Make a typing poster showing what you can type.',
      `<p class='big-emoji'>🎨 ⌨️ 📝</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"I Can Type!"</b></li>
         <li>Draw a keyboard.</li>
         <li>Write 5 words you can type.</li>
         <li>Write 1 sentence you can type.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster to your family. Type a word on the computer to show them.</p>`,

      [{ heading: 'Exercise 30.1 — Draw your typing poster', items: [
          'Keyboard',
          '5 words',
          '1 sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 words you can type.', a: ['cat', 'dog', 'sun', 'any'] },
       { q: 'Type a sentence.', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: MULTIMEDIA — Music & Videos
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: 'Music & Videos', days: [

    D(1, '🎵', 'Songs',
      'Listen to songs on a computer or phone.',
      `<p class='big-emoji'>🎵 🎤 🎧</p>
       <p>Computers and phones can play music. We can listen to our favourite songs.</p>

       <h3>Where to Find Songs</h3>
       <ul>
         <li>📱 On a phone (music app).</li>
         <li>💻 On a computer (music player).</li>
         <li>📻 On a radio.</li>
         <li>📺 On a TV.</li>
       </ul>

       <h3>How to Play a Song</h3>
       <ol>
         <li>Open the music app.</li>
         <li>Choose a song.</li>
         <li>Press the Play button ▶️.</li>
         <li>Press Pause ⏸️ to stop.</li>
         <li>Press Stop ⏹️ to end.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a phone with a music player screen. Draw the Play, Pause, and Stop buttons.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What button do you press to play music?</p>
       <p><b>Answer:</b> The <b>Play</b> button ▶️.</p>`,

      [{ heading: 'Exercise 31.1 — Listen', items: [
          'Ask your parent to play a song.',
          'Listen carefully to the words.',
          'Sing along.'
        ]},
       { heading: 'Exercise 31.2 — Answer', items: [
          'What app plays music?',
          'What is your favourite song?'
        ]}],

      `<p><b>31.2:</b> 1. Music app 2. Any</p>`,

      [{ q: 'What button plays music?', a: ['play', '▶️'] },
       { q: 'What is your favourite song?', a: ['any'] }]),

    D(2, '🎬', 'Videos',
      'Watch safe videos with an adult.',
      `<p class='big-emoji'>🎬 📺 👨‍👩‍👧</p>

       <h3>Watching Videos Safely</h3>
       <ul>
         <li>Always watch with an <b>adult</b>.</li>
         <li>Only watch videos that are good for children.</li>
         <li>Do not watch scary or violent videos.</li>
         <li>Watch for short times only.</li>
       </ul>

       <h3>Video Buttons</h3>
       <ul>
         <li>▶️ Play</li>
         <li>⏸️ Pause</li>
         <li>⏹️ Stop</li>
         <li>⏪ Rewind (go back)</li>
         <li>⏩ Forward (go forward)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a screen with the video buttons at the bottom.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who should you watch videos with?</p>
       <p><b>Answer:</b> An <b>adult</b>.</p>`,

      [{ heading: 'Exercise 32.1 — Watch', items: [
          'Watch a short, safe video with an adult.',
          'Say what you learned.'
        ]},
       { heading: 'Exercise 32.2 — Answer', items: [
          'Who should you watch with?',
          'Name 3 video buttons.'
        ]}],

      `<p><b>32.2:</b> 1. An adult 2. Play, pause, stop</p>`,

      [{ q: 'Who should you watch with?', a: ['adult', 'parent', 'any'] },
       { q: 'Name a video button.', a: ['play', 'pause', 'stop', 'any'] }]),

    D(3, '🔊', 'Volume',
      'Learn about controlling volume.',
      `<p class='big-emoji'>🔊 🔉 🔈</p>
       <p><b>Volume</b> means how loud or soft the sound is. We can change the volume on a computer, phone, or TV.</p>

       <h3>Volume Buttons</h3>
       <ul>
         <li>🔊 <b>Volume up</b> — makes the sound louder.</li>
         <li>🔉 <b>Volume down</b> — makes the sound softer.</li>
         <li>🔇 <b>Mute</b> — turns off the sound completely.</li>
       </ul>

       <h3>Why Keep Volume Low?</h3>
       <ul>
         <li>Loud sound can hurt your ears.</li>
         <li>It can disturb other people.</li>
         <li>It can damage the speakers.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 volume icons: 🔊 🔉 🔇</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does "mute" do?</p>
       <p><b>Answer:</b> It <b>turns off the sound</b> completely.</p>`,

      [{ heading: 'Exercise 33.1 — Answer', items: [
          'What is volume?',
          'What does "volume up" do?',
          'What does "mute" do?',
          'Why keep volume low?'
        ]},
       { heading: 'Exercise 33.2 — Draw', items: [
          'Draw the 3 volume icons.'
        ]}],

      `<p><b>33.1:</b> 1. Loudness of sound 2. Louder 3. Turns off sound 4. Protect ears</p>`,

      [{ q: 'What is volume?', a: ['loudness', 'sound level', 'any'] },
       { q: 'What does "mute" do?', a: ['turns off sound', 'silent', 'any'] }]),

    D(4, '🎤', 'Speaking',
      'Speak into a microphone.',
      `<p class='big-emoji'>🎤 🗣️ 📢</p>
       <p>A <b>microphone</b> is a device that records or makes our voice louder.</p>

       <h3>Where We Use Microphones</h3>
       <ul>
         <li>📱 Phones (for calling).</li>
         <li>🎤 Singing performances.</li>
         <li>🎙️ Radio stations.</li>
         <li>🏫 Classrooms and events.</li>
         <li>🎮 Video games (for talking to friends).</li>
       </ul>

       <h3>How to Speak into a Microphone</h3>
       <ol>
         <li>Hold the microphone 5 cm away from your mouth.</li>
         <li>Speak clearly and slowly.</li>
         <li>Do not shout.</li>
         <li>Do not tap or blow into the microphone.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a microphone. Draw a person speaking into it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do with a microphone?</p>
       <p><b>Answer:</b> We <b>speak or sing</b> into it.</p>`,

      [{ heading: 'Exercise 34.1 — Say', items: [
          'Say "Hello!" into a microphone (or pretend).',
          'Say your name.',
          'Say your school name.'
        ]},
       { heading: 'Exercise 34.2 — Answer', items: [
          'What is a microphone for?',
          'Where do we use microphones?'
        ]}],

      `<p><b>34.2:</b> 1. To record or amplify voice 2. Phone, stage, radio</p>`,

      [{ q: 'What is a microphone for?', a: ['recording', 'speaking', 'any'] },
       { q: 'Where do we use microphones?', a: ['phone', 'stage', 'any'] }]),

    D(5, '🎨', 'Music Poster',
      'Consolidate learning about music and sound.',
      `<p>Make a "Music & Sound" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Music & Sound"</b></li>
         <li>Draw a speaker, headphone, and microphone.</li>
         <li>Draw the Play, Pause, and Stop buttons.</li>
         <li>Write one sentence: <i>"I can listen to music safely."</i></li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say one thing you learned about sound.</p>`,

      [{ heading: 'Exercise 35.1 — Draw your music poster', items: [
          'Speaker',
          'Headphone',
          'Microphone',
          'Play/Pause/Stop buttons'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 things that make sound.', a: ['speaker', 'headphone', 'microphone', 'any'] },
       { q: 'What does mute do?', a: ['turns off sound', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: COMPUTATIONAL THINKING — Following Instructions
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: 'Following Instructions', days: [

    D(1, '1️⃣', 'Step 1',
      'Understand what a step is.',
      `<p class='big-emoji'>1️⃣ 📋 ✨</p>
       <p>Instructions are made of <b>steps</b>. A step is one small action. We follow steps in order.</p>

       <h3>What is a Step?</h3>
       <ul>
         <li>A step is one thing to do.</li>
         <li>Steps are numbered: Step 1, Step 2, Step 3…</li>
         <li>We do them one at a time, in order.</li>
       </ul>

       <h3>Example: Brushing Teeth</h3>
       <ol>
         <li>Put toothpaste on the brush.</li>
         <li>Brush your teeth.</li>
         <li>Rinse your mouth.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 boxes labelled "Step 1", "Step 2", "Step 3" showing brushing teeth.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is Step 1 of brushing teeth?</p>
       <p><b>Answer:</b> Put <b>toothpaste</b> on the brush.</p>`,

      [{ heading: 'Exercise 36.1 — Say', items: [
          'What is a step?',
          'What is Step 1 of brushing teeth?',
          'What is Step 3 of brushing teeth?'
        ]},
       { heading: 'Exercise 36.2 — Draw', items: [
          'Draw the 3 steps of brushing teeth.'
        ]}],

      `<p><b>36.1:</b> 1. One action 2. Put toothpaste 3. Rinse</p>`,

      [{ q: 'What is a step?', a: ['one action', 'one thing to do', 'any'] },
       { q: 'What is Step 1 of brushing teeth?', a: ['toothpaste', 'put toothpaste'] }]),

    D(2, '2️⃣', 'Step 2',
      'Understand that Step 2 comes after Step 1.',
      `<p class='big-emoji'>2️⃣ 📋 ✨</p>
       <p>After Step 1, we do Step 2. Steps must be in the right <b>order</b>.</p>

       <h3>Why Order Matters</h3>
       <p>If you brush your teeth before putting toothpaste on the brush, it does not work well!</p>

       <h3>Examples</h3>
       <ul>
         <li><b>Making tea:</b></li>
       </ul>
       <ol>
         <li>Boil water.</li>
         <li>Put tea in a cup.</li>
         <li>Pour hot water into the cup.</li>
         <li>Add milk and sugar.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 boxes showing the steps of making tea.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is Step 2 of making tea?</p>
       <p><b>Answer:</b> Put <b>tea</b> in a cup.</p>`,

      [{ heading: 'Exercise 37.1 — Say', items: [
          'What is Step 2 of making tea?',
          'What is Step 3?',
          'Why must steps be in order?'
        ]},
       { heading: 'Exercise 37.2 — Draw', items: [
          'Draw the 4 steps of making tea.'
        ]}],

      `<p><b>37.1:</b> 1. Put tea in cup 2. Pour water 3. So it works</p>`,

      [{ q: 'What is Step 2 of making tea?', a: ['put tea', 'put tea in cup'] },
       { q: 'Why order matters?', a: ['so it works', 'any'] }]),

    D(3, '3️⃣', 'Order',
      'Put steps in the correct order.',
      `<p class='big-emoji'>📋 🔢 ✅</p>
       <p>When steps are jumbled up, we must put them in the right order.</p>

       <h3>Example: Washing Hands</h3>
       <p>Jumbled: Rinse, Wet, Soap, Dry.</p>
       <p>Correct order:</p>
       <ol>
         <li>Wet</li>
         <li>Soap</li>
         <li>Rinse</li>
         <li>Dry</li>
       </ol>

       <h3>How to Order Steps</h3>
       <ol>
         <li>Read all the steps.</li>
         <li>Think about what happens first.</li>
         <li>Put them in order.</li>
         <li>Read them again to check.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the 4 steps of washing hands in the correct order.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes first — Soap or Wet?</p>
       <p><b>Answer:</b> <b>Wet</b> comes first.</p>`,

      [{ heading: 'Exercise 38.1 — Order', items: [
          'Put in order: Brush, Paste, Rinse (for teeth).',
          'Put in order: Pour, Boil, Drink (for tea).',
          'Put in order: Eat, Cook, Buy (for food).'
        ]},
       { heading: 'Exercise 38.2 — Answer', items: [
          'Why must we follow steps in order?'
        ]}],

      `<p><b>38.1:</b> 1. Paste, brush, rinse 2. Boil, pour, drink 3. Buy, cook, eat</p>`,

      [{ q: 'What comes first: soap or wet?', a: ['wet'] },
       { q: 'What comes first: boil or pour?', a: ['boil'] }]),

    D(4, '📝', 'Write Instructions',
      'Write your own instructions.',
      `<p class='big-emoji'>✍️ 📋 ✏️</p>

       <h3>Choose a Task</h3>
       <ul>
         <li>Washing hands</li>
         <li>Brushing teeth</li>
         <li>Making a sandwich</li>
         <li>Tying your shoes</li>
         <li>Opening a book</li>
       </ul>

       <h3>How to Write Instructions</h3>
       <ol>
         <li>Write Step 1.</li>
         <li>Write Step 2.</li>
         <li>Write Step 3.</li>
         <li>Use numbers to show order.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture of the task you chose.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write 3 steps for washing hands.</p>
       <p><b>Answer:</b> 1. Wet hands. 2. Add soap. 3. Rinse and dry.</p>`,

      [{ heading: 'Exercise 39.1 — Write instructions', items: [
          'Choose a task.',
          'Write 4 steps in order.',
          'Draw one picture.'
        ]}],

      `<p>⭐ for clear, ordered steps.</p>`,

      [{ q: 'What was your task?', a: ['any'] },
       { q: 'What was Step 1?', a: ['any'] }]),

    D(5, '🎨', 'Steps Poster',
      'Make a "Steps" poster.',
      `<p>Make a poster showing the steps of a task you know.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"How to ____"</b></li>
         <li>Draw 4 pictures showing the steps in order.</li>
         <li>Write the step number next to each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each step in order.</p>`,

      [{ heading: 'Exercise 40.1 — Draw your steps poster', items: [
          'Step 1',
          'Step 2',
          'Step 3',
          'Step 4'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What task did you draw?', a: ['any'] },
       { q: 'How many steps?', a: ['4', 'four', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: MULTIMEDIA — Photos
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: 'Fun with Photos', days: [

    D(1, '📸', 'Taking Photos',
      'Learn how to take a photo safely.',
      `<p class='big-emoji'>📸 🖼️ ✨</p>
       <p>A <b>camera</b> is a device that takes photos. Many phones have cameras too.</p>

       <h3>Where We Find Cameras</h3>
       <ul>
         <li>📱 On phones</li>
         <li>📷 On tablets</li>
         <li>🎥 On computers (webcam)</li>
         <li>📸 On standalone cameras</li>
       </ul>

       <h3>How to Take a Photo</h3>
       <ol>
         <li>Hold the camera steady.</li>
         <li>Point it at what you want to photograph.</li>
         <li>Press the <b>shutter button</b>.</li>
         <li>Check the photo in the gallery.</li>
       </ol>

       <h3>Good Photography Rules</h3>
       <ul>
         <li>Ask permission before photographing people.</li>
         <li>Hold the camera steady for a clear photo.</li>
         <li>Make sure there is enough light.</li>
         <li>Smile!</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a camera with a lens. Draw a person taking a photo.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you press to take a photo?</p>
       <p><b>Answer:</b> The <b>shutter button</b>.</p>`,

      [{ heading: 'Exercise 41.1 — Take a photo', items: [
          'Ask your parent to help you take a photo.',
          'Take a photo of your favourite toy or plant.',
          'Show the photo to your family.'
        ]},
       { heading: 'Exercise 41.2 — Answer', items: [
          'What do you press to take a photo?',
          'Who should you ask before photographing people?'
        ]}],

      `<p><b>41.2:</b> 1. Shutter button 2. Permission</p>`,

      [{ q: 'What do you press to take a photo?', a: ['shutter button', 'shutter'] },
       { q: 'Ask permission before photographing ___.', a: ['people', 'any'] }]),

    D(2, '🖼️', 'Viewing Photos',
      'View photos in the gallery.',
      `<p class='big-emoji'>🖼️ 👀 📸</p>

       <h3>What is the Gallery?</h3>
       <p>The <b>gallery</b> is where photos are stored on a phone, tablet, or computer. We can open the gallery to see all our photos.</p>

       <h3>How to View Photos</h3>
       <ol>
         <li>Open the Gallery app.</li>
         <li>Look at the small pictures (thumbnails).</li>
         <li>Tap a photo to make it bigger.</li>
         <li>Swipe left or right to see the next photo.</li>
       </ol>

       <h3>What You Can Do with Photos</h3>
       <ul>
         <li>Look at them.</li>
         <li>Send them to family.</li>
         <li>Print them.</li>
         <li>Delete them.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a gallery screen with 6 small photos in a grid.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where are photos stored?</p>
       <p><b>Answer:</b> In the <b>gallery</b>.</p>`,

      [{ heading: 'Exercise 42.1 — View photos', items: [
          'Open the gallery on a phone or tablet (with help).',
          'Look at 5 photos.',
          'Say what each photo shows.'
        ]},
       { heading: 'Exercise 42.2 — Answer', items: [
          'What is the gallery?',
          'How do you make a photo bigger?'
        ]}],

      `<p><b>42.2:</b> 1. Photo storage 2. Tap it</p>`,

      [{ q: 'What is the gallery?', a: ['photo storage', 'where photos are', 'any'] },
       { q: 'How do you view photos?', a: ['open gallery', 'tap', 'any'] }]),

    D(3, '🗑️', 'Deleting Photos',
      'Learn how to delete a photo.',
      `<p class='big-emoji'>🗑️ ❌ 📸</p>

       <h3>What Does "Delete" Mean?</h3>
       <p><b>Delete</b> means to remove. When we delete a photo, it is taken out of the gallery.</p>

       <h3>How to Delete</h3>
       <ol>
         <li>Open the gallery.</li>
         <li>Tap the photo you want to delete.</li>
         <li>Look for the <b>trash can</b> 🗑️ icon.</li>
         <li>Tap Delete.</li>
         <li>Confirm.</li>
       </ol>

       <h3>Be Careful!</h3>
       <ul>
         <li>Once deleted, some photos cannot be brought back.</li>
         <li>Ask a parent before deleting.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a trash can with a red X. Write "Ask before deleting".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does "delete" mean?</p>
       <p><b>Answer:</b> It means to <b>remove</b> something.</p>`,

      [{ heading: 'Exercise 43.1 — Say', items: [
          'What does "delete" mean?',
          'Who should you ask before deleting?',
          'What icon do we use to delete?'
        ]},
       { heading: 'Exercise 43.2 — Draw', items: [
          'Draw a trash can icon.'
        ]}],

      `<p><b>43.1:</b> 1. Remove 2. A parent 3. Trash can</p>`,

      [{ q: 'What does delete mean?', a: ['remove', 'take away', 'any'] },
       { q: 'Who should you ask?', a: ['parent', 'adult', 'any'] }]),

    D(4, '📝', 'Photo Sentences',
      'Write sentences about photos.',
      `<p class='big-emoji'>✍️ 📸 📝</p>

       <h3>Examples</h3>
       <ul>
         <li>I took a photo of my <b>dog</b>.</li>
         <li>My photo shows a <b>tree</b>.</li>
         <li>I like my photo of the <b>sunset</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one of your photos as a picture.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a sentence about a photo.</p>
       <p><b>Answer:</b> I took a photo of my <b>dog</b>.</p>`,

      [{ heading: 'Exercise 44.1 — Write 2 sentences', items: [
          'I took a photo of ______.',
          'My photo shows ______.'
        ]},
       { heading: 'Exercise 44.2 — Draw', items: [
          'Draw one of your photos.'
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: 'Write a sentence about a photo.', a: ['any'] }]),

    D(5, '🎨', 'Photo Poster',
      'Make a photo poster.',
      `<p>Make a "My Photos" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Photo Album"</b></li>
         <li>Draw 4 things you would like to photograph.</li>
         <li>Write the name under each drawing.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say why you would photograph each thing.</p>`,

      [{ heading: 'Exercise 45.1 — Draw your photo poster', items: [
          'My family',
          'My pet',
          'My favourite tree',
          'My school'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What would you photograph?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DIGITAL CITIZENSHIP — Being Kind Online
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: 'Being Kind Online', days: [

    D(1, '😊', 'Kind Words',
      'Learn to use kind words online.',
      `<p class='big-emoji'>😊 💬 💗</p>
       <p>Online, we talk to people through messages and comments. We must use <b>kind words</b>, just like in real life.</p>

       <h3>Kind Words</h3>
       <ul>
         <li>"Well done!"</li>
         <li>"That is great!"</li>
         <li>"Thank you."</li>
         <li>"You are kind."</li>
         <li>"Nice work!"</li>
       </ul>

       <h3>Unkind Words</h3>
       <ul>
         <li>"You are stupid."</li>
         <li>"You are ugly."</li>
         <li>"Nobody likes you."</li>
         <li>"Go away."</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 speech bubbles. In one, write a kind message. In the other, write an unkind message with a red X.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you say mean things online?</p>
       <p><b>Answer:</b> No — always use <b>kind words</b>.</p>`,

      [{ heading: 'Exercise 46.1 — Say', items: [
          'What is a kind word?',
          'What is an unkind word?',
          'Should you say mean things?'
        ]},
       { heading: 'Exercise 46.2 — Draw', items: [
          'Draw a poster with 3 kind words.'
        ]}],

      `<p><b>46.1:</b> 1. "Well done" 2. "You are stupid" 3. No</p>`,

      [{ q: 'Should you say mean things online?', a: ['no'] },
       { q: 'Give one kind word.', a: ['well done', 'thank you', 'any'] }]),

    D(2, '🙋', 'Helping Others',
      'Help others online and in real life.',
      `<p class='big-emoji'>🙋 🤝 💗</p>
       <p>When we see someone who is sad or needs help, we can help them.</p>

       <h3>Ways to Help Online</h3>
       <ul>
         <li>Send a kind message.</li>
         <li>Say "It\'s okay."</li>
         <li>Tell an adult if someone is being hurt.</li>
         <li>Share good, helpful things.</li>
       </ul>

       <h3>Ways to Help in Real Life</h3>
       <ul>
         <li>Help with chores.</li>
         <li>Share with friends.</li>
         <li>Say kind things.</li>
         <li>Be a good friend.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw someone helping a friend who is sad.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do if a friend is sad online?</p>
       <p><b>Answer:</b> Send a <b>kind message</b> and help them.</p>`,

      [{ heading: 'Exercise 47.1 — Say', items: [
          'How can you help a friend?',
          'When did someone help you?',
          'Who should you tell if someone is hurt?'
        ]},
       { heading: 'Exercise 47.2 — Draw', items: [
          'Draw yourself helping a friend.'
        ]}],

      `<p><b>47.1:</b> 1. Kind message 2. Any 3. An adult</p>`,

      [{ q: 'How do you help a sad friend?', a: ['kind message', 'help them', 'any'] },
       { q: 'Who should you tell?', a: ['adult', 'parent', 'any'] }]),

    D(3, '🚫', 'Bullying',
      'Know what bullying is and what to do about it.',
      `<p class='big-emoji'>🚫 😢 💔</p>
       <p><b>Bullying</b> is when someone is mean to another person again and again. It happens in real life and online (called <b>cyberbullying</b>).</p>

       <h3>Examples of Bullying</h3>
       <ul>
         <li>Calling someone names.</li>
         <li>Laughing at someone.</li>
         <li>Pushing or hitting.</li>
         <li>Leaving someone out on purpose.</li>
         <li>Sending mean messages online.</li>
       </ul>

       <h3>What to Do If You Are Bullied</h3>
       <ol>
         <li>Stay calm and do not fight back.</li>
         <li>Walk away.</li>
         <li>Tell a <b>trusted adult</b> (parent, teacher).</li>
         <li>Save the messages (for online bullying).</li>
         <li>Do not believe what the bully says — you are valuable.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a poster: "Say NO to bullying!"</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if you are bullied?</p>
       <p><b>Answer:</b> Tell a <b>trusted adult</b>.</p>`,

      [{ heading: 'Exercise 48.1 — Answer', items: [
          'What is bullying?',
          'Name 3 examples of bullying.',
          'What should you do if you are bullied?',
          'Who is a trusted adult?'
        ]},
       { heading: 'Exercise 48.2 — Draw', items: [
          'Draw a "Say NO to bullying" poster.'
        ]}],

      `<p><b>48.1:</b> 1. Being mean again and again 2. Name-calling, laughing at, hitting 3. Tell a trusted adult 4. Parent, teacher</p>`,

      [{ q: 'What is bullying?', a: ['being mean again and again', 'any'] },
       { q: 'What should you do?', a: ['tell an adult', 'walk away', 'any'] }]),

    D(4, '❤️', 'Kindness Pledge',
      'Write a kindness pledge.',
      `<p class='big-emoji'>❤️ ✍️ 🎉</p>
       <p>A <b>pledge</b> is a promise. Today you will write a kindness pledge and sign it.</p>

       <h3>Example Pledge</h3>
       <p><i>"I will be kind online and offline.<br>
       I will use kind words.<br>
       I will help others.<br>
       I will not bully anyone.<br>
       I will tell an adult if I see bullying."</i></p>
       <p>Signed: _______________</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Write your pledge on a clean page. Draw a heart at the top. Sign your name at the bottom.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a pledge?</p>
       <p><b>Answer:</b> A <b>promise</b>.</p>`,

      [{ heading: 'Exercise 49.1 — Write your pledge', items: [
          'Write 4 promises.',
          'Draw a heart.',
          'Sign your name.'
        ]},
       { heading: 'Exercise 49.2 — Say', items: [
          'Read your pledge aloud to your parent.'
        ]}],

      `<p>⭐ for a signed pledge.</p>`,

      [{ q: 'What is a pledge?', a: ['a promise', 'promise'] },
       { q: 'What will you promise?', a: ['any'] }]),

    D(5, '🎨', 'Kindness Poster',
      'Make a kindness poster.',
      `<p>Make a "Kindness" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Be Kind!"</b></li>
         <li>Draw 4 acts of kindness.</li>
         <li>Write a sentence under each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each act of kindness.</p>`,

      [{ heading: 'Exercise 50.1 — Draw your kindness poster', items: [
          'Sharing',
          'Helping',
          'Saying kind words',
          'Being a friend'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 acts of kindness.', a: ['sharing', 'helping', 'kind words', 'any'] },
       { q: 'Why be kind?', a: ['it makes people happy', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Month 5 Wrap-up
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: 'Review', days: [

    D(1, '🔁', 'Review Parts',
      'Review the parts of a computer.',
      `<p class='big-emoji'>💻 🖥️ 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Monitor, keyboard, mouse, CPU</li>
         <li>Printer, speaker, microphone, camera</li>
         <li>Hardware and software</li>
         <li>Input, process, output, storage</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a computer system with parts labelled.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you look at?</p>
       <p><b>Answer:</b> The <b>monitor</b>.</p>`,

      [{ heading: 'Exercise 51.1 — Say', items: [
          'Name 5 parts of a computer.',
          'Name 3 input devices.',
          'Name 3 output devices.'
        ]},
       { heading: 'Exercise 51.2 — Draw', items: [
          'Draw a computer and label 5 parts.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 3 computer parts.', a: ['monitor', 'keyboard', 'mouse', 'any'] },
       { q: 'What is the brain of the computer?', a: ['cpu'] }]),

    D(2, '🔁', 'Review Using',
      'Review using a computer.',
      `<p class='big-emoji'>🔌 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Turning on/off.</li>
         <li>Using the desktop.</li>
         <li>Saving and printing.</li>
         <li>Typing.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the desktop with icons, taskbar, and Start button.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What button turns on the computer?</p>
       <p><b>Answer:</b> The <b>power button</b>.</p>`,

      [{ heading: 'Exercise 52.1 — Say', items: [
          'What do you press to turn on?',
          'What is on the desktop?',
          'How do you save a file?'
        ]},
       { heading: 'Exercise 52.2 — Draw', items: [
          'Draw the desktop.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'What button turns on?', a: ['power button', 'power'] },
       { q: 'How do you save?', a: ['file then save', 'file menu', 'any'] }]),

    D(3, '🔁', 'Review Safety',
      'Review online safety.',
      `<p class='big-emoji'>🔒 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Keep passwords safe.</li>
         <li>Don\'t talk to strangers online.</li>
         <li>Ask before sharing photos.</li>
         <li>Take screen breaks.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 online safety rules.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your password?</p>
       <p><b>Answer:</b> No.</p>`,

      [{ heading: 'Exercise 53.1 — Say', items: [
          'Name 4 safety rules.',
          'Who can know your password?',
          'Should you meet online friends?'
        ]},
       { heading: 'Exercise 53.2 — Draw', items: [
          'Draw a safety poster.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Should you share your password?', a: ['no'] },
       { q: 'Should you talk to strangers?', a: ['no'] }]),

    D(4, '🔁', 'Review Typing & Drawing',
      'Review typing and drawing.',
      `<p class='big-emoji'>⌨️ 🎨 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Typing letters, numbers, words.</li>
         <li>Drawing and colouring in Paint.</li>
         <li>Saving files.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a drawing you made in Paint (or would like to make).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What program do we use to draw?</p>
       <p><b>Answer:</b> <b>Paint</b>.</p>`,

      [{ heading: 'Exercise 54.1 — Type', items: [
          'Type your name.',
          'Type 5 words.',
          'Type 1 sentence.'
        ]},
       { heading: 'Exercise 54.2 — Draw', items: [
          'Draw a picture in Paint.'
        ]}],

      `<p>Any correct work.</p>`,

      [{ q: 'What program do we draw in?', a: ['paint'] },
       { q: 'Type a word.', a: ['any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate Month 5.',
      `<p class='big-emoji'>🎉 ⭐</p>

       <h3>Well Done!</h3>
       <p>You have completed Month 5 of Grade 2 Computing.</p>

       <h3>Show and Tell</h3>
       <p>Show your posters and drawings. Give yourself a big star! ⭐</p>`,

      [{ heading: 'Exercise 55.1 — Celebrate!', items: [
          'Show your posters.',
          'Type or draw something for your family.',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful month!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: INTRODUCTION TO COMPUTING — More Parts
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: 'More Parts', days: [

    D(1, '🖨️', 'Printer',
      'Know what a printer does.',
      `<p class='big-emoji'>🖨️ 📄 ✨</p>
       <p>A <b>printer</b> is an output device. It prints what we see on the screen onto paper.</p>

       <h3>Types of Printers</h3>
       <ul>
         <li>🖨️ <b>Inkjet</b> — uses ink. Good for home use.</li>
         <li>🖨️ <b>Laser</b> — uses toner powder. Fast and used in offices.</li>
         <li>🖨️ <b>3D printer</b> — makes 3D objects.</li>
       </ul>

       <h3>What We Need</h3>
       <ul>
         <li>Paper</li>
         <li>Ink or toner</li>
         <li>Power supply</li>
         <li>Connection to the computer</li>
       </ul>

       <h3>How to Print</h3>
       <ol>
         <li>Open the document.</li>
         <li>Click File → Print.</li>
         <li>Choose the number of copies.</li>
         <li>Click Print/OK.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a printer printing a page. Write "Printing…" above it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a printer do?</p>
       <p><b>Answer:</b> A printer <b>prints</b> onto paper.</p>`,

      [{ heading: 'Exercise 56.1 — Answer', items: [
          'What does a printer do?',
          'Name 2 types of printers.',
          'What do we need to print?'
        ]},
       { heading: 'Exercise 56.2 — Draw', items: [
          'Draw a printer.'
        ]}],

      `<p><b>56.1:</b> 1. Prints 2. Inkjet, laser 3. Paper, ink</p>`,

      [{ q: 'What does a printer do?', a: ['prints', 'print on paper'] },
       { q: 'What do we need to print?', a: ['paper', 'ink', 'any'] }]),

    D(2, '🔊', 'Speaker',
      'Know what a speaker does.',
      `<p class='big-emoji'>🔊 🎵 🎧</p>
       <p>A <b>speaker</b> is an output device. It plays sound — music, voices, and other sounds.</p>

       <h3>Types of Speakers</h3>
       <ul>
         <li>🔊 <b>Computer speakers</b> — small speakers connected to a computer.</li>
         <li>🎧 <b>Headphones</b> — for one person to listen.</li>
         <li>📻 <b>Bluetooth speaker</b> — wireless.</li>
         <li>🔊 <b>Built-in speakers</b> — inside laptops and phones.</li>
       </ul>

       <h3>How to Use a Speaker</h3>
       <ol>
         <li>Turn on the speaker (if it has a switch).</li>
         <li>Connect it to the computer.</li>
         <li>Play a song.</li>
         <li>Adjust the volume.</li>
       </ol>

       <h3>Keeping Volume Safe</h3>
       <ul>
         <li>Keep the volume at a comfortable level.</li>
         <li>Do not use headphones too loud.</li>
         <li>Take breaks from listening.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a speaker with music notes coming out of it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a speaker do?</p>
       <p><b>Answer:</b> A speaker <b>plays sound</b>.</p>`,

      [{ heading: 'Exercise 57.1 — Answer', items: [
          'What does a speaker do?',
          'Name 2 types of speakers.',
          'Why keep volume low?'
        ]},
       { heading: 'Exercise 57.2 — Draw', items: [
          'Draw a speaker with music notes.'
        ]}],

      `<p><b>57.1:</b> 1. Plays sound 2. Headphones, Bluetooth 3. Protect ears</p>`,

      [{ q: 'What does a speaker do?', a: ['plays sound', 'sound'] },
       { q: 'Why keep volume low?', a: ['protect ears', 'any'] }]),

    D(3, '🎤', 'Microphone',
      'Know what a microphone does.',
      `<p class='big-emoji'>🎤 🗣️ 📢</p>
       <p>A <b>microphone</b> is an input device. It records sound — especially our voice.</p>

       <h3>Types of Microphones</h3>
       <ul>
         <li>🎤 <b>Handheld</b> — held in the hand (like at concerts).</li>
         <li>🎧 <b>Headset</b> — attached to headphones.</li>
         <li>📱 <b>Built-in</b> — inside phones and laptops.</li>
         <li>🎙️ <b>Studio</b> — large, used in radio stations.</li>
       </ul>

       <h3>Where We Use Microphones</h3>
       <ul>
         <li>📞 Phone calls</li>
         <li>🎵 Recording songs</li>
         <li>🎮 Video games (talking to friends)</li>
         <li>🎤 Events and performances</li>
       </ul>

       <h3>How to Use a Microphone</h3>
       <ol>
         <li>Speak 5 cm from the microphone.</li>
         <li>Speak clearly.</li>
         <li>Do not shout.</li>
         <li>Do not tap or blow into it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a microphone with sound waves going into it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a microphone do?</p>
       <p><b>Answer:</b> A microphone <b>records sound</b>, especially voices.</p>`,

      [{ heading: 'Exercise 58.1 — Answer', items: [
          'What does a microphone do?',
          'Name 2 types of microphones.',
          'Where do we use microphones?'
        ]},
       { heading: 'Exercise 58.2 — Draw', items: [
          'Draw a microphone.'
        ]}],

      `<p><b>58.1:</b> 1. Records sound 2. Handheld, headset 3. Phones, games</p>`,

      [{ q: 'What does a microphone do?', a: ['records sound', 'records voice', 'any'] },
       { q: 'Where do we use microphones?', a: ['phone', 'stage', 'any'] }]),

    D(4, '📷', 'Camera',
      'Know what a camera does.',
      `<p class='big-emoji'>📷 🖼️ 🎥</p>
       <p>A <b>camera</b> is an input device. It takes photos and videos.</p>

       <h3>Types of Cameras</h3>
       <ul>
         <li>📱 <b>Phone camera</b> — inside phones.</li>
         <li>📷 <b>Digital camera</b> — separate camera.</li>
         <li>🎥 <b>Video camera</b> — records videos.</li>
         <li>🖥️ <b>Webcam</b> — attached to a computer.</li>
       </ul>

       <h3>Where We Use Cameras</h3>
       <ul>
         <li>📸 Taking photos of family and friends.</li>
         <li>🎥 Making videos.</li>
         <li>📹 Video calls (Zoom, WhatsApp).</li>
         <li>🏫 School projects.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a camera. Draw a photo being taken.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a camera do?</p>
       <p><b>Answer:</b> A camera <b>takes photos and videos</b>.</p>`,

      [{ heading: 'Exercise 59.1 — Answer', items: [
          'What does a camera do?',
          'Name 2 types of cameras.',
          'Where do we use cameras?'
        ]},
       { heading: 'Exercise 59.2 — Draw', items: [
          'Draw a camera.'
        ]}],

      `<p><b>59.1:</b> 1. Takes photos 2. Phone, digital 3. Family, video calls</p>`,

      [{ q: 'What does a camera do?', a: ['takes photos', 'photos', 'any'] },
       { q: 'Where do we use cameras?', a: ['phone', 'any'] }]),

    D(5, '🎨', 'Parts Poster',
      'Consolidate learning about computer parts.',
      `<p>Make a "Computer Parts" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Computer Parts"</b></li>
         <li>Draw 6 parts: printer, speaker, microphone, camera, monitor, keyboard.</li>
         <li>Label each part.</li>
         <li>Mark each as "Input" or "Output".</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each part does.</p>`,

      [{ heading: 'Exercise 60.1 — Draw your parts poster', items: [
          'Printer — Output',
          'Speaker — Output',
          'Microphone — Input',
          'Camera — Input',
          'Monitor — Output',
          'Keyboard — Input'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 output devices.', a: ['printer', 'speaker', 'monitor', 'any'] },
       { q: 'Name 3 input devices.', a: ['keyboard', 'mouse', 'microphone', 'camera', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: USING THE COMPUTER — Mouse
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: 'Using the Mouse', days: [

    D(1, '🖱️', 'Click',
      'Learn to click with the mouse.',
      `<p class='big-emoji'>🖱️ 👆 ✨</p>
       <p>The <b>mouse</b> is an input device. It moves the pointer on the screen. We use it to <b>click</b> on things.</p>

       <h3>The Parts of a Mouse</h3>
       <ul>
         <li>◀️ <b>Left button</b> — for clicking.</li>
         <li>▶️ <b>Right button</b> — for opening menus.</li>
         <li>🛞 <b>Scroll wheel</b> — for moving up and down.</li>
       </ul>

       <h3>How to Click</h3>
       <ol>
         <li>Move the pointer over the item.</li>
         <li>Press the <b>left button</b> once.</li>
         <li>Release the button.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a mouse. Label the left button, right button, and scroll wheel.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which button clicks?</p>
       <p><b>Answer:</b> The <b>left button</b>.</p>`,

      [{ heading: 'Exercise 61.1 — Practise clicking', items: [
          'Open a drawing app.',
          'Click on the pencil tool.',
          'Click on 3 different colours.'
        ]},
       { heading: 'Exercise 61.2 — Answer', items: [
          'What do you use to click?',
          'What is the wheel for?'
        ]}],

      `<p><b>61.2:</b> 1. Left button 2. Scrolling</p>`,

      [{ q: 'Which button do you click?', a: ['left', 'left button'] },
       { q: 'What is the wheel for?', a: ['scrolling', 'moving up and down', 'any'] }]),

    D(2, '🖱️', 'Double-Click',
      'Learn to double-click with the mouse.',
      `<p class='big-emoji'>🖱️ 👆👆 ✨</p>

       <h3>What is Double-Click?</h3>
       <p><b>Double-click</b> means to press the left button <b>twice quickly</b>. We use it to open files and programs.</p>

       <h3>How to Double-Click</h3>
       <ol>
         <li>Move the pointer over the icon.</li>
         <li>Press the left button <b>twice</b> — quickly, without moving the mouse.</li>
         <li>The file or program opens.</li>
       </ol>

       <h3>Click vs Double-Click</h3>
       <ul>
         <li><b>Click</b> — for selecting or clicking a button.</li>
         <li><b>Double-click</b> — for opening files and folders.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a mouse and 2 clicks (👆👆) above it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you open a file?</p>
       <p><b>Answer:</b> <b>Double-click</b> the file icon.</p>`,

      [{ heading: 'Exercise 62.1 — Practise double-clicking', items: [
          'Find an icon on the desktop.',
          'Double-click it to open.',
          'Close the program.'
        ]},
       { heading: 'Exercise 62.2 — Answer', items: [
          'What does double-click mean?',
          'What does double-click open?'
        ]}],

      `<p><b>62.2:</b> 1. Click twice quickly 2. Files</p>`,

      [{ q: 'What does double-click mean?', a: ['click twice quickly', 'two clicks', 'any'] },
       { q: 'What does double-click open?', a: ['files', 'programs', 'any'] }]),

    D(3, '🖱️', 'Drag',
      'Learn to drag with the mouse.',
      `<p class='big-emoji'>🖱️ ✋ ➡️</p>

       <h3>What is Drag?</h3>
       <p><b>Drag</b> means to hold the left button down, move the mouse, then release. It moves things on the screen.</p>

       <h3>How to Drag</h3>
       <ol>
         <li>Move the pointer over the item.</li>
         <li>Press and <b>hold</b> the left button.</li>
         <li>Move the mouse to where you want the item.</li>
         <li><b>Release</b> the button.</li>
       </ol>

       <h3>What You Can Drag</h3>
       <ul>
         <li>Icons on the desktop.</li>
         <li>Files into folders.</li>
         <li>Pictures in Paint.</li>
         <li>Sliders and scroll bars.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a hand holding a mouse, with an arrow showing movement.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is "drag"?</p>
       <p><b>Answer:</b> Holding the button down, moving the mouse, and releasing.</p>`,

      [{ heading: 'Exercise 63.1 — Practise dragging', items: [
          'Drag an icon across the desktop.',
          'Drag a shape in Paint.',
          'Drag a slider in a music app.'
        ]},
       { heading: 'Exercise 63.2 — Answer', items: [
          'What is drag?',
          'What can you drag?'
        ]}],

      `<p><b>63.2:</b> 1. Hold, move, release 2. Icons, files</p>`,

      [{ q: 'What is drag?', a: ['hold move release', 'holding and moving', 'any'] },
       { q: 'What can you drag?', a: ['icons', 'files', 'any'] }]),

    D(4, '🎯', 'Practice',
      'Practise all mouse skills.',
      `<p class='big-emoji'>🎯 🖱️ ✅</p>

       <h3>Today's Practice</h3>
       <ul>
         <li>🖱️ <b>Click</b> on a button.</li>
         <li>🖱️ <b>Double-click</b> an icon.</li>
         <li>🖱️ <b>Drag</b> an item.</li>
         <li>🖱️ <b>Right-click</b> to see a menu.</li>
       </ul>

       <h3>Try This Activity</h3>
       <ol>
         <li>Open Paint.</li>
         <li>Click the pencil tool.</li>
         <li>Drag to draw a line.</li>
         <li>Click on a colour.</li>
         <li>Double-click to select.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a mouse with all the skills labelled around it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What skill opens a file?</p>
       <p><b>Answer:</b> Double-click.</p>`,

      [{ heading: 'Exercise 64.1 — Practise', items: [
          'Click 5 times.',
          'Double-click 3 times.',
          'Drag 3 times.',
          'Right-click once.'
        ]}],

      `<p>⭐ for practising all skills.</p>`,

      [{ q: 'What skill opens a file?', a: ['double-click', 'double click'] },
       { q: 'What skill moves items?', a: ['drag'] }]),

    D(5, '🎨', 'Mouse Poster',
      'Make a mouse poster.',
      `<p>Make a "Mouse Skills" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Mouse Skills"</b></li>
         <li>Draw a mouse.</li>
         <li>Draw 4 actions: click, double-click, drag, right-click.</li>
         <li>Label each action.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Show each action on a real mouse (or pretend).</p>`,

      [{ heading: 'Exercise 65.1 — Draw your mouse poster', items: [
          'Click',
          'Double-click',
          'Drag',
          'Right-click'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 mouse skills.', a: ['click', 'double-click', 'drag', 'any'] },
       { q: 'What does double-click do?', a: ['opens files', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: USING THE COMPUTER — Keyboard
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: 'Using the Keyboard', days: [

    D(1, '⌨️', 'Letters',
      'Find and use the letter keys.',
      `<p class='big-emoji'>⌨️ 🔤 🅰️</p>

       <h3>The Letter Keys</h3>
       <p>Letters are arranged on the keyboard. Let's find them.</p>
       <p><b>Q W E R T Y U I O P</b> — top row<br>
          <b>A S D F G H J K L</b> — middle row<br>
          <b>Z X C V B N M</b> — bottom row</p>

       <h3>How to Find Letters</h3>
       <ol>
         <li>Look at the keyboard.</li>
         <li>Find the row.</li>
         <li>Find the letter.</li>
         <li>Press it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the keyboard letters in 3 rows.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where is the letter A?</p>
       <p><b>Answer:</b> On the <b>middle row</b>.</p>`,

      [{ heading: 'Exercise 66.1 — Find letters', items: [
          'Find the letter A.',
          'Find the letter M.',
          'Find the letter Z.',
          'Find your first letter.',
          'Find your last letter.'
        ]}],

      `<p>⭐ for finding all letters.</p>`,

      [{ q: 'Which row has A?', a: ['middle', 'middle row'] },
       { q: 'Which row has Q?', a: ['top', 'top row'] }]),

    D(2, '🔢', 'Numbers',
      'Find and use the number keys.',
      `<p class='big-emoji'>🔢 0️⃣ 1️⃣ 2️⃣</p>

       <h3>The Number Keys</h3>
       <p><b>1 2 3 4 5 6 7 8 9 0</b> — along the top row.</p>

       <h3>How to Type Numbers</h3>
       <ol>
         <li>Look at the top row.</li>
         <li>Find the number.</li>
         <li>Press it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the number keys in one row, 0 to 9.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many number keys are there?</p>
       <p><b>Answer:</b> <b>10</b> (0 to 9).</p>`,

      [{ heading: 'Exercise 67.1 — Find numbers', items: [
          'Find number 1.',
          'Find number 5.',
          'Find number 0.',
          'Type your age.',
          'Type your house number.'
        ]}],

      `<p>⭐ for finding all numbers.</p>`,

      [{ q: 'How many number keys?', a: ['10', 'ten'] },
       { q: 'Where are they?', a: ['top row', 'top'] }]),

    D(3, '␣', 'Space Bar',
      'Use the space bar.',
      `<p class='big-emoji'>␣ ⌨️ ✨</p>

       <h3>What is the Space Bar?</h3>
       <p>The <b>space bar</b> is the long key at the bottom of the keyboard. It makes a <b>space</b> between words.</p>

       <h3>When to Press It</h3>
       <ul>
         <li>Between words.</li>
         <li>After a full stop.</li>
         <li>After a comma.</li>
       </ul>

       <h3>Example</h3>
       <p>To type "I am happy":</p>
       <p>I [space] am [space] happy</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard. Circle the space bar in blue. Write "Space bar" next to it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the space bar do?</p>
       <p><b>Answer:</b> It makes a <b>space</b> between words.</p>`,

      [{ heading: 'Exercise 68.1 — Type with spaces', items: [
          'Type: I am happy',
          'Type: My name is ___',
          'Type: I like rice'
        ]},
       { heading: 'Exercise 68.2 — Answer', items: [
          'What does the space bar do?',
          'Where is the space bar?'
        ]}],

      `<p><b>68.2:</b> 1. Makes a space 2. Bottom of keyboard</p>`,

      [{ q: 'What does the space bar do?', a: ['space', 'makes a space'] },
       { q: 'Where is it?', a: ['bottom', 'bottom of keyboard'] }]),

    D(4, '⏎', 'Enter Key',
      'Use the enter key.',
      `<p class='big-emoji'>⏎ ⌨️ ✅</p>

       <h3>What is the Enter Key?</h3>
       <p>The <b>Enter key</b> is on the right side of the keyboard. It starts a <b>new line</b>. It also means "OK" or "Go".</p>

       <h3>When to Press It</h3>
       <ul>
         <li>To start a new line.</li>
         <li>To finish a command.</li>
         <li>To send a message.</li>
       </ul>

       <h3>Example</h3>
       <p>Type "Hello", press Enter, then type "World".</p>
       <p>Result:<br>Hello<br>World</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard. Circle the Enter key in green. Write "Enter" next to it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the Enter key do?</p>
       <p><b>Answer:</b> It starts a <b>new line</b>.</p>`,

      [{ heading: 'Exercise 69.1 — Type with Enter', items: [
          'Type: Hello, press Enter, type: World.',
          'Type: Line 1, Enter, Line 2, Enter, Line 3.'
        ]},
       { heading: 'Exercise 69.2 — Answer', items: [
          'What does Enter do?',
          'Where is the Enter key?'
        ]}],

      `<p><b>69.2:</b> 1. New line 2. Right side</p>`,

      [{ q: 'What does Enter do?', a: ['new line', 'starts a new line', 'any'] },
       { q: 'Where is the Enter key?', a: ['right', 'right side'] }]),

    D(5, '🎨', 'Keyboard Poster',
      'Make a keyboard poster.',
      `<p>Make a "Keyboard" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"The Keyboard"</b></li>
         <li>Draw a keyboard with 3 rows of letters.</li>
         <li>Circle the space bar in blue.</li>
         <li>Circle the Enter key in green.</li>
         <li>Label the number row.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the name of each part.</p>`,

      [{ heading: 'Exercise 70.1 — Draw your keyboard poster', items: [
          'Letters',
          'Numbers',
          'Space bar',
          'Enter key'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What are the 3 rows of letters?', a: ['qwerty', 'any'] },
       { q: 'What is the long key at the bottom?', a: ['space bar', 'space'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: PRODUCTIVITY — Drawing & Colours (continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: 'Drawing & Colours', days: [

    D(1, '🎨', 'Basic Drawing',
      'Draw basic shapes and pictures in Paint.',
      `<p class='big-emoji'>🎨 🖌️ ⚪</p>

       <h3>Tools in Paint</h3>
       <ul>
         <li>✏️ <b>Pencil</b> — for drawing free lines.</li>
         <li>🖌️ <b>Brush</b> — for thicker lines.</li>
         <li>🎨 <b>Fill</b> — for filling with colour.</li>
         <li>🧽 <b>Eraser</b> — for rubbing out.</li>
       </ul>

       <h3>How to Draw a Circle</h3>
       <ol>
         <li>Click the Ellipse tool.</li>
         <li>Click on the canvas.</li>
         <li>Drag to make it round.</li>
         <li>Release.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>In Paint, draw a circle, a square, and a triangle.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What tool makes lines?</p>
       <p><b>Answer:</b> The <b>Pencil</b> or <b>Brush</b>.</p>`,

      [{ heading: 'Exercise 71.1 — Draw shapes', items: [
          'Circle',
          'Square',
          'Triangle',
          'Rectangle',
          'Star'
        ]},
       { heading: 'Exercise 71.2 — Answer', items: [
          'What tool makes lines?',
          'What tool fills colour?'
        ]}],

      `<p><b>71.2:</b> 1. Pencil/brush 2. Fill</p>`,

      [{ q: 'What tool draws lines?', a: ['pencil', 'brush', 'any'] },
       { q: 'What tool fills colour?', a: ['fill', 'paint bucket'] }]),

    D(2, '🌈', 'Colours',
      'Use different colours.',
      `<p class='big-emoji'>🌈 🎨 ✨</p>

       <h3>Colours in Paint</h3>
       <ul>
         <li>🔴 Red</li>
         <li>🟠 Orange</li>
         <li>🟡 Yellow</li>
         <li>🟢 Green</li>
         <li>🔵 Blue</li>
         <li>🟣 Purple</li>
       </ul>

       <h3>How to Change Colour</h3>
       <ol>
         <li>Click on a colour in the palette.</li>
         <li>Draw or fill with that colour.</li>
         <li>Click another colour to change.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>In Paint, draw 6 circles and colour each a different colour.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where do you find colours?</p>
       <p><b>Answer:</b> In the <b>colour palette</b>.</p>`,

      [{ heading: 'Exercise 72.1 — Colour', items: [
          'Draw a red circle.',
          'Draw a blue square.',
          'Draw a yellow triangle.',
          'Draw a green rectangle.',
          'Draw a purple star.'
        ]}],

      `<p>⭐ for using all colours.</p>`,

      [{ q: 'Where are the colours?', a: ['palette', 'colour palette', 'any'] },
       { q: 'Name 3 colours.', a: ['red', 'blue', 'yellow', 'any'] }]),

    D(3, '🖌️', 'Brushes',
      'Use different brushes and sizes.',
      `<p class='big-emoji'>🖌️ ✏️ ⚪</p>

       <h3>Types of Brushes</h3>
       <ul>
         <li>✏️ <b>Pencil</b> — thin line.</li>
         <li>🖌️ <b>Brush</b> — thick line.</li>
         <li>🖍️ <b>Marker</b> — medium line.</li>
         <li>🪣 <b>Spray</b> — dotted effect.</li>
       </ul>

       <h3>Changing Brush Size</h3>
       <ol>
         <li>Click the Brush tool.</li>
         <li>Click Size on the toolbar.</li>
         <li>Choose a thin or thick line.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 lines: thin, medium, and thick.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which tool makes a thin line?</p>
       <p><b>Answer:</b> The <b>Pencil</b>.</p>`,

      [{ heading: 'Exercise 73.1 — Draw with brushes', items: [
          'Draw a thin line.',
          'Draw a thick line.',
          'Draw a dotted line.',
          'Draw a squiggly line.'
        ]}],

      `<p>⭐ for using different brushes.</p>`,

      [{ q: 'Which makes a thin line?', a: ['pencil'] },
       { q: 'Which makes a thick line?', a: ['brush'] }]),

    D(4, '💾', 'Save Drawing',
      'Save your drawing.',
      `<p class='big-emoji'>💾 📁 🎨</p>

       <h3>How to Save</h3>
       <ol>
         <li>Click <b>File</b>.</li>
         <li>Click <b>Save As</b>.</li>
         <li>Type a name (e.g., "My Drawing").</li>
         <li>Choose where to save.</li>
         <li>Click Save.</li>
       </ol>

       <h3>File Names</h3>
       <ul>
         <li>Use your own name or something clear.</li>
         <li>Do not use bad words.</li>
         <li>Keep names short.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the Save As window.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why save your work?</p>
       <p><b>Answer:</b> So you do not lose it.</p>`,

      [{ heading: 'Exercise 74.1 — Save your drawing', items: [
          'Save your drawing with a name.',
          'Find it in your files.'
        ]},
       { heading: 'Exercise 74.2 — Answer', items: [
          'How do you save?',
          'Why save?'
        ]}],

      `<p><b>74.2:</b> 1. File → Save As 2. So we don\'t lose it</p>`,

      [{ q: 'How do you save?', a: ['file then save as', 'file menu', 'any'] },
       { q: 'Why save?', a: ['so we don\'t lose it', 'any'] }]),

    D(5, '🖼️', 'Show Drawing',
      'Show your drawing to your family.',
      `<p class='big-emoji'>🎤 🖼️ 👨‍👩‍👧</p>

       <h3>What to Say</h3>
       <ul>
         <li>"This is my drawing."</li>
         <li>"I used Paint."</li>
         <li>"I drew a ____."</li>
         <li>"My favourite part is ____."</li>
       </ul>

       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Speak clearly.</li>
         <li>Show your drawing.</li>
         <li>Answer questions.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself showing your drawing to your family.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you draw?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 75.1 — Show and Tell', items: [
          'Show your drawing.',
          'Say what you drew.',
          'Say what you used.'
        ]}],

      `<p>⭐ for confidence in speaking.</p>`,

      [{ q: 'What program did you use?', a: ['paint'] },
       { q: 'What did you draw?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: COMMUNICATION NETWORKS — Internet (Simple)
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: 'Using the Internet', days: [

    D(1, '🌐', 'What is the Internet?',
      'Know what the internet is.',
      `<p class='big-emoji'>🌐 💻 🌍</p>
       <p>The <b>internet</b> is a big network that connects computers around the world. It lets us share information and talk to people far away.</p>

       <h3>What We Can Do on the Internet</h3>
       <ul>
         <li>📧 Send emails.</li>
         <li>🔍 Search for information.</li>
         <li>🎥 Watch videos.</li>
         <li>💬 Chat with friends and family.</li>
         <li>📸 Share photos.</li>
         <li>📚 Learn new things.</li>
       </ul>

       <h3>How to Use the Internet Safely</h3>
       <ul>
         <li>Always use it with an adult nearby.</li>
         <li>Only visit safe websites.</li>
         <li>Do not share personal information.</li>
         <li>Be kind to others online.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a globe with computers around it, all connected by lines.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the internet?</p>
       <p><b>Answer:</b> The internet is a <b>network that connects computers</b> around the world.</p>`,

      [{ heading: 'Exercise 76.1 — Answer', items: [
          'What is the internet?',
          'Name 3 things we can do on the internet.',
          'Who should be nearby when you use the internet?'
        ]},
       { heading: 'Exercise 76.2 — Draw', items: [
          'Draw the internet with computers connected.'
        ]}],

      `<p><b>76.1:</b> 1. Global network 2. Emails, videos, chat 3. An adult</p>`,

      [{ q: 'What is the internet?', a: ['network', 'connects computers', 'any'] },
       { q: 'Who should be nearby?', a: ['adult', 'parent', 'any'] }]),

    D(2, '🔍', 'Searching',
      'Learn to search for information safely.',
      `<p class='big-emoji'>🔍 🔎 ✅</p>

       <h3>What is a Search Engine?</h3>
       <p>A <b>search engine</b> is a website that helps us find information. Examples: Google, Bing.</p>

       <h3>How to Search Safely</h3>
       <ol>
         <li>Open the search engine.</li>
         <li>Type what you want to know.</li>
         <li>Press Enter.</li>
         <li>Look at the results.</li>
         <li>Ask a parent before clicking.</li>
       </ol>

       <h3>Safe Search Rules</h3>
       <ul>
         <li>Only search for good, helpful things.</li>
         <li>Do not search for bad words.</li>
         <li>Ask a parent if you see something strange.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a search box with a magnifying glass beside it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a search engine for?</p>
       <p><b>Answer:</b> To <b>find information</b> on the internet.</p>`,

      [{ heading: 'Exercise 77.1 — Search', items: [
          'Ask your parent to help you search for "animals of Ghana".',
          'Look at 3 results.',
          'Say what you learned.'
        ]},
       { heading: 'Exercise 77.2 — Answer', items: [
          'What is a search engine?',
          'Name one search engine.'
        ]}],

      `<p><b>77.2:</b> 1. A website for finding information 2. Google</p>`,

      [{ q: 'What is a search engine?', a: ['google', 'bing', 'website to search', 'any'] },
       { q: 'What do we search for?', a: ['information', 'any'] }]),

    D(3, '🎥', 'Videos',
      'Watch safe videos with an adult.',
      `<p class='big-emoji'>🎥 📺 👨‍👩‍👧</p>

       <h3>Safe Video Rules</h3>
       <ul>
         <li>Always watch with an adult.</li>
         <li>Only watch videos approved by a parent.</li>
         <li>Do not watch scary or violent videos.</li>
         <li>Watch for short times only.</li>
         <li>Take breaks.</li>
       </ul>

       <h3>Good Videos to Watch</h3>
       <ul>
         <li>📚 Learning videos (alphabet, numbers).</li>
         <li>🎵 Songs for children.</li>
         <li>🐘 Nature and animals.</li>
         <li>🌍 Travel and culture.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a screen with a play button ▶️.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who should you watch videos with?</p>
       <p><b>Answer:</b> An <b>adult</b>.</p>`,

      [{ heading: 'Exercise 78.1 — Watch', items: [
          'Watch one short, safe video with your parent.',
          'Say what you learned.'
        ]},
       { heading: 'Exercise 78.2 — Answer', items: [
          'Who should you watch with?',
          'Should you watch scary videos?'
        ]}],

      `<p><b>78.2:</b> 1. An adult 2. No</p>`,

      [{ q: 'Who should you watch with?', a: ['adult', 'parent', 'any'] },
       { q: 'Should you watch scary videos?', a: ['no'] }]),

    D(4, '🚫', 'Safe Sites',
      'Know which websites are safe.',
      `<p class='big-emoji'>🚫 ✅ 🔒</p>

       <h3>Safe Websites</h3>
       <ul>
         <li>✅ Educational websites (for children).</li>
         <li>✅ Websites approved by your parents or teachers.</li>
         <li>✅ Websites with a padlock 🔒 in the address bar (safe connection).</li>
       </ul>

       <h3>Unsafe Websites</h3>
       <ul>
         <li>🚫 Websites asking for money or personal information.</li>
         <li>🚫 Websites with bad words or violence.</li>
         <li>🚫 Websites you do not recognise.</li>
       </ul>

       <h3>What to Do If You See Something Strange</h3>
       <ol>
         <li>Stop looking at it.</li>
         <li>Close the screen.</li>
         <li>Tell an adult immediately.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a safe website with a green tick ✅ and an unsafe website with a red X ❌.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if you see something strange online?</p>
       <p><b>Answer:</b> Close the screen and tell an <b>adult</b>.</p>`,

      [{ heading: 'Exercise 79.1 — Answer', items: [
          'Name a safe website.',
          'What does a padlock in the address bar mean?',
          'What should you do if you see something strange?'
        ]},
       { heading: 'Exercise 79.2 — Draw', items: [
          'Draw a safe website poster.'
        ]}],

      `<p><b>79.1:</b> 1. Educational site 2. Safe connection 3. Tell an adult</p>`,

      [{ q: 'What does a padlock mean?', a: ['safe', 'safe connection', 'any'] },
       { q: 'What if you see something strange?', a: ['tell an adult', 'close it', 'any'] }]),

    D(5, '🎨', 'Internet Poster',
      'Make an internet safety poster.',
      `<p>Make an "Internet Safety" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Safe Internet"</b></li>
         <li>Draw 4 safety rules.</li>
         <li>Write each rule under the picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each rule.</p>`,

      [{ heading: 'Exercise 80.1 — Draw your internet safety poster', items: [
          'Use with an adult',
          'Only safe websites',
          'Do not share personal info',
          'Be kind online'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 internet safety rules.', a: ['adult', 'safe sites', 'kind', 'any'] },
       { q: 'Who should you use the internet with?', a: ['adult', 'parent', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DIGITAL CITIZENSHIP — Helping at Home
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: 'Helping at Home', days: [

    D(1, '📞', 'Making Calls',
      'Learn to make safe phone calls.',
      `<p class='big-emoji'>📞 🗣️ ✅</p>

       <h3>Making a Phone Call</h3>
       <ol>
         <li>Ask a parent first.</li>
         <li>Dial the number.</li>
         <li>Wait for someone to answer.</li>
         <li>Say "Hello, this is ____."</li>
         <li>Say why you are calling.</li>
         <li>Say "Thank you, goodbye" at the end.</li>
       </ol>

       <h3>Calling Rules</h3>
       <ul>
         <li>Only call people you know.</li>
         <li>Do not call strangers.</li>
         <li>Do not call emergency numbers for fun (192, 191, 193, 112).</li>
         <li>Keep calls short.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a phone. Write the number 192 (Fire Service).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who should you ask before making a call?</p>
       <p><b>Answer:</b> A <b>parent</b>.</p>`,

      [{ heading: 'Exercise 81.1 — Answer', items: [
          'Who should you ask first?',
          'What is the fire service number?',
          'Should you call emergency numbers for fun?'
        ]},
       { heading: 'Exercise 81.2 — Practise', items: [
          'Practise saying "Hello, this is ____."'
        ]}],

      `<p><b>81.1:</b> 1. A parent 2. 192 3. No</p>`,

      [{ q: 'Who to ask before calling?', a: ['parent', 'adult', 'any'] },
       { q: 'Fire service number?', a: ['192'] }]),

    D(2, '📸', 'Family Photos',
      'Take and share family photos safely.',
      `<p class='big-emoji'>📸 👨‍👩‍👧 ✅</p>

       <h3>Taking Family Photos</h3>
       <ul>
         <li>Ask permission before taking photos.</li>
         <li>Smile!</li>
         <li>Hold the camera steady.</li>
         <li>Make sure everyone is in the photo.</li>
       </ul>

       <h3>Sharing Family Photos Safely</h3>
       <ul>
         <li>Only share with family and close friends.</li>
         <li>Ask a parent before posting online.</li>
         <li>Do not share with strangers.</li>
         <li>Do not include your address in photos.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a family photo with 3 people smiling.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you post family photos without asking?</p>
       <p><b>Answer:</b> No — always ask a <b>parent</b> first.</p>`,

      [{ heading: 'Exercise 82.1 — Answer', items: [
          'What do you do before taking photos?',
          'Who can you share photos with?',
          'Should you post photos without asking?'
        ]},
       { heading: 'Exercise 82.2 — Draw', items: [
          'Draw your family.'
        ]}],

      `<p><b>82.1:</b> 1. Ask permission 2. Family/friends 3. No</p>`,

      [{ q: 'Before taking photos?', a: ['ask permission', 'any'] },
       { q: 'Who to share with?', a: ['family', 'friends', 'any'] }]),

    D(3, '🔊', 'Playing Music',
      'Play music safely at home.',
      `<p class='big-emoji'>🔊 🎵 ✅</p>

       <h3>Playing Music</h3>
       <ul>
         <li>Ask a parent before playing music.</li>
         <li>Keep the volume low.</li>
         <li>Do not disturb others.</li>
         <li>Take breaks.</li>
       </ul>

       <h3>Music Apps</h3>
       <ul>
         <li>🎵 YouTube</li>
         <li>🎵 Spotify (with a parent account)</li>
         <li>🎵 Music app on a phone</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a speaker with volume buttons 🔊 🔉 🔇.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you keep the volume high or low?</p>
       <p><b>Answer:</b> <b>Low</b> — to protect your ears and not disturb others.</p>`,

      [{ heading: 'Exercise 83.1 — Answer', items: [
          'Who should you ask before playing music?',
          'Should volume be high or low?',
          'Name a music app.'
        ]},
       { heading: 'Exercise 83.2 — Draw', items: [
          'Draw volume buttons.'
        ]}],

      `<p><b>83.1:</b> 1. A parent 2. Low 3. YouTube</p>`,

      [{ q: 'Who to ask?', a: ['parent', 'adult', 'any'] },
       { q: 'Volume should be?', a: ['low', 'not high'] }]),

    D(4, '⏰', 'Setting Alarms',
      'Set alarms for important times.',
      `<p class='big-emoji'>⏰ 🌅 ⏱️</p>

       <h3>Why We Set Alarms</h3>
       <ul>
         <li>To wake up in the morning.</li>
         <li>To remember to do something.</li>
         <li>To take a break from screens.</li>
       </ul>

       <h3>How to Set an Alarm</h3>
       <ol>
         <li>Open the Clock app.</li>
         <li>Click "Set Alarm".</li>
         <li>Choose the time.</li>
         <li>Click Save.</li>
       </ol>

       <h3>Good Times to Set Alarms</h3>
       <ul>
         <li>🌅 6:00 a.m. — wake up.</li>
         <li>📚 4:00 p.m. — homework time.</li>
         <li>🛏️ 8:30 p.m. — bedtime.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a digital clock showing 6:00 a.m. with an alarm bell 🔔.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What time should you set an alarm to wake up?</p>
       <p><b>Answer:</b> <b>(Any reasonable time, e.g., 6:00 a.m.)</b></p>`,

      [{ heading: 'Exercise 84.1 — Set an alarm', items: [
          'Set an alarm for 6:00 a.m.',
          'Set another for homework time.',
          'Set one for bedtime.'
        ]},
       { heading: 'Exercise 84.2 — Answer', items: [
          'Why do we set alarms?',
          'What time do you wake up?'
        ]}],

      `<p><b>84.2:</b> 1. To remember times 2. Any</p>`,

      [{ q: 'Why set alarms?', a: ['to remember', 'to wake up', 'any'] },
       { q: 'What time do you wake up?', a: ['any'] }]),

    D(5, '🎨', 'Helper Poster',
      'Make a "Tech Helper" poster.',
      `<p>Make a "Tech at Home" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Tech Helps at Home"</b></li>
         <li>Draw 5 ways technology helps at home: calling, photos, music, alarm, calculator.</li>
         <li>Write the name under each drawing.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say how each one helps.</p>`,

      [{ heading: 'Exercise 85.1 — Draw your tech-at-home poster', items: [
          'Calling',
          'Photos',
          'Music',
          'Alarm',
          'Calculator'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 tech helpers at home.', a: ['phone', 'camera', 'alarm', 'any'] },
       { q: 'How does tech help?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: MULTIMEDIA — Digital Art
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: 'Digital Art', days: [

    D(1, '🖼️', 'Making Cards',
      'Make a card on the computer.',
      `<p class='big-emoji'>🖼️ 🎂 💝</p>

       <h3>Cards We Can Make</h3>
       <ul>
         <li>🎂 Birthday cards</li>
         <li>🎉 Celebration cards</li>
         <li>💝 Thank-you cards</li>
         <li>🎄 Christmas cards</li>
       </ul>

       <h3>How to Make a Card in Paint</h3>
       <ol>
         <li>Open Paint.</li>
         <li>Draw a rectangle for the card.</li>
         <li>Add a picture (cake, flower, heart).</li>
         <li>Write "Happy Birthday" or "Thank You".</li>
         <li>Save it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a birthday card with a cake and balloons.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What can you make in Paint?</p>
       <p><b>Answer:</b> Cards, pictures, and posters.</p>`,

      [{ heading: 'Exercise 86.1 — Make a card', items: [
          'Draw a birthday card.',
          'Write "Happy Birthday".',
          'Save it.'
        ]},
       { heading: 'Exercise 86.2 — Answer', items: [
          'What is a card?',
          'When do we give cards?'
        ]}],

      `<p><b>86.2:</b> 1. A greeting picture 2. Birthdays, celebrations</p>`,

      [{ q: 'When do we give cards?', a: ['birthday', 'any'] },
       { q: 'What program for cards?', a: ['paint'] }]),

    D(2, '🎂', 'Making Posters',
      'Make a poster on the computer.',
      `<p class='big-emoji'>🎂 📋 🎨</p>

       <h3>What is a Poster?</h3>
       <p>A poster is a big picture with a message. We can make posters in Paint or a word processor.</p>

       <h3>How to Make a Poster</h3>
       <ol>
         <li>Choose a title.</li>
         <li>Draw a big picture.</li>
         <li>Write the message.</li>
         <li>Colour it beautifully.</li>
         <li>Save and print.</li>
       </ol>

       <h3>Ideas for Posters</h3>
       <ul>
         <li>🌳 Save the trees</li>
         <li>💧 Save water</li>
         <li>🧼 Wash your hands</li>
         <li>📚 Read every day</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a poster with the message "Save Water".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a poster?</p>
       <p><b>Answer:</b> A <b>picture with a message</b>.</p>`,

      [{ heading: 'Exercise 87.1 — Make a poster', items: [
          'Choose a topic.',
          'Draw a picture.',
          'Write a message.'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is a poster?', a: ['picture with a message', 'any'] },
       { q: 'Name a poster topic.', a: ['save water', 'save trees', 'any'] }]),

    D(3, '🌈', 'Rainbow Art',
      'Draw a rainbow with 6 colours.',
      `<p class='big-emoji'>🌈 🔴 🟡 🔵</p>

       <h3>Colours of the Rainbow</h3>
       <p>Red, orange, yellow, green, blue, purple.</p>

       <h3>How to Draw a Rainbow</h3>
       <ol>
         <li>Draw 6 curved lines, one inside the other.</li>
         <li>Colour each line a different colour.</li>
         <li>Draw clouds at the bottom.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>In Paint, draw a rainbow with 6 colours.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many colours in a rainbow?</p>
       <p><b>Answer:</b> <b>6</b> main colours.</p>`,

      [{ heading: 'Exercise 88.1 — Draw a rainbow', items: [
          'Red',
          'Orange',
          'Yellow',
          'Green',
          'Blue',
          'Purple'
        ]},
       { heading: 'Exercise 88.2 — Draw clouds', items: [
          'Draw 2 clouds at the bottom.'
        ]}],

      `<p>⭐ for a colourful rainbow.</p>`,

      [{ q: 'How many colours in a rainbow?', a: ['6', 'six'] },
       { q: 'What is the first colour?', a: ['red'] }]),

    D(4, '💾', 'Saving Art',
      'Save your digital art.',
      `<p class='big-emoji'>💾 📁 🖼️</p>

       <h3>Why Save Art?</h3>
       <p>So you can look at it later, show your family, or print it.</p>

       <h3>How to Save</h3>
       <ol>
         <li>Click File → Save As.</li>
         <li>Type a name (e.g., "My Rainbow").</li>
         <li>Choose where to save it.</li>
         <li>Click Save.</li>
       </ol>

       <h3>Keep Your Art Organised</h3>
       <ul>
         <li>📁 Create a folder called "My Art".</li>
         <li>Save all your art inside.</li>
         <li>Use clear names.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a folder with 3 pictures inside. Label it "My Art".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why create a folder?</p>
       <p><b>Answer:</b> To keep your work organised.</p>`,

      [{ heading: 'Exercise 89.1 — Save and organise', items: [
          'Create a folder called "My Art".',
          'Save 3 drawings in it.'
        ]}],

      `<p>⭐ for saving 3 files.</p>`,

      [{ q: 'Why create a folder?', a: ['organise', 'keep tidy', 'any'] },
       { q: 'What folder did you make?', a: ['my art', 'any'] }]),

    D(5, '🎨', 'Art Show',
      'Show your art to your family.',
      `<p class='big-emoji'>🎨 🎤 👨‍👩‍👧</p>

       <h3>What to Say</h3>
       <ul>
         <li>"This is my art show."</li>
         <li>"I made these pictures in Paint."</li>
         <li>"My favourite is ____."</li>
         <li>"I used ____ colours."</li>
       </ul>

       <h3>How to Present</h3>
       <ol>
         <li>Show each picture.</li>
         <li>Say its name.</li>
         <li>Explain how you made it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself showing your art.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite art?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 90.1 — Art Show', items: [
          'Show your 3 best drawings.',
          'Say what you used.',
          'Say which is your favourite.'
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: 'What did you draw?', a: ['any'] },
       { q: 'What colours did you use?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: LEARNING WITH TECH
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: 'Learning with Tech', days: [

    D(1, '📚', 'Reading Apps',
      'Use reading apps to read stories.',
      `<p class='big-emoji'>📚 📱 ✨</p>

       <h3>Reading Apps</h3>
       <p>There are apps that help us read stories on a phone or tablet.</p>
       <ul>
         <li>📚 Story apps for children</li>
         <li>📖 eBooks</li>
         <li>🎧 Audio books (stories you listen to)</li>
       </ul>

       <h3>How to Use a Reading App</h3>
       <ol>
         <li>Ask a parent to help open the app.</li>
         <li>Choose a story.</li>
         <li>Read or listen.</li>
         <li>Say what you learned.</li>
       </ol>

       <h3>Good Reading Habits</h3>
       <ul>
         <li>Read every day.</li>
         <li>Read aloud sometimes.</li>
         <li>Take breaks.</li>
         <li>Keep the volume at a comfortable level.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a tablet showing a storybook.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What can a reading app do?</p>
       <p><b>Answer:</b> It helps us <b>read or listen to stories</b>.</p>`,

      [{ heading: 'Exercise 91.1 — Read', items: [
          'Read a story from a reading app.',
          'Say what happened in the story.'
        ]},
       { heading: 'Exercise 91.2 — Answer', items: [
          'What is a reading app?',
          'What did you read?'
        ]}],

      `<p><b>91.2:</b> 1. App for reading 2. Any</p>`,

      [{ q: 'What is a reading app?', a: ['app for reading', 'any'] },
       { q: 'What did you read?', a: ['any'] }]),

    D(2, '🔢', 'Math Games',
      'Play maths games to learn.',
      `<p class='big-emoji'>🔢 🎮 ✅</p>

       <h3>Maths Games</h3>
       <p>There are apps and games that help us practise maths. They make learning fun.</p>

       <h3>What We Can Practise</h3>
       <ul>
         <li>➕ Addition</li>
         <li>➖ Subtraction</li>
         <li>✖️ Multiplication</li>
         <li>🔢 Counting</li>
         <li>🔷 Shapes</li>
       </ul>

       <h3>How to Play Safely</h3>
       <ul>
         <li>Ask a parent first.</li>
         <li>Play for a short time only.</li>
         <li>Do not buy anything without permission.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a phone with a maths game showing "2 + 3 = ?".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What can maths games help you practise?</p>
       <p><b>Answer:</b> Addition, subtraction, and more.</p>`,

      [{ heading: 'Exercise 92.1 — Play', items: [
          'Play a maths game with your parent.',
          'Say what you practised.'
        ]},
       { heading: 'Exercise 92.2 — Answer', items: [
          'What did you practise?',
          'Should you play for a long or short time?'
        ]}],

      `<p><b>92.2:</b> 1. Any 2. Short</p>`,

      [{ q: 'What can you practise?', a: ['addition', 'maths', 'any'] },
       { q: 'Play for how long?', a: ['short', 'a short time', 'any'] }]),

    D(3, '🌍', 'Learning about the World',
      'Learn about the world with technology.',
      `<p class='big-emoji'>🌍 📺 🌐</p>

       <h3>Exploring the World</h3>
       <ul>
         <li>🗺️ Google Maps (see places).</li>
         <li>📺 Documentaries (learn about animals, countries).</li>
         <li>🌐 Websites (learn about different cultures).</li>
         <li>🎥 Videos (watch and learn).</li>
       </ul>

       <h3>What You Can Learn</h3>
       <ul>
         <li>🦁 Animals of the world</li>
         <li>🏙️ Cities and countries</li>
         <li>🌋 Volcanoes and mountains</li>
         <li>🌊 Oceans and rivers</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a world map with 3 countries labelled.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What can we use to see different places?</p>
       <p><b>Answer:</b> <b>Google Maps</b>.</p>`,

      [{ heading: 'Exercise 93.1 — Explore', items: [
          'Look at Google Maps with your parent.',
          'Find Ghana.',
          'Name 3 countries you see.'
        ]},
       { heading: 'Exercise 93.2 — Answer', items: [
          'What is Google Maps?',
          'Name 2 things you can learn about.'
        ]}],

      `<p><b>93.2:</b> 1. Map app 2. Animals, countries</p>`,

      [{ q: 'What is Google Maps?', a: ['map', 'map app', 'any'] },
       { q: 'Name something you can learn.', a: ['animals', 'countries', 'any'] }]),

    D(4, '🎵', 'Learning Songs',
      'Learn with songs.',
      `<p class='big-emoji'>🎵 🔤 🎶</p>

       <h3>Songs Help Us Learn</h3>
       <ul>
         <li>🔤 Alphabet song</li>
         <li>🔢 Number song</li>
         <li>📅 Days of the week song</li>
         <li>🌦️ Weather song</li>
         <li>🧼 Handwashing song</li>
       </ul>

       <h3>Why Songs Help</h3>
       <ul>
         <li>Songs are fun.</li>
         <li>They help us remember.</li>
         <li>They make learning easy.</li>
         <li>We can sing them anywhere.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a music note and the words "ABC Song".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a learning song.</p>
       <p><b>Answer:</b> The alphabet song.</p>`,

      [{ heading: 'Exercise 94.1 — Sing', items: [
          'Sing the alphabet song.',
          'Sing a number song.',
          'Sing a handwashing song.'
        ]},
       { heading: 'Exercise 94.2 — Answer', items: [
          'Name 3 learning songs.',
          'Why do songs help us learn?'
        ]}],

      `<p><b>94.2:</b> 1. ABC, numbers, days 2. Fun and memorable</p>`,

      [{ q: 'Name a learning song.', a: ['alphabet', 'abc', 'any'] },
       { q: 'Why songs help?', a: ['fun', 'memorable', 'any'] }]),

    D(5, '🎨', 'Learning Poster',
      'Make a "Learning with Tech" poster.',
      `<p>Make a "Learning with Tech" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"I Learn with Tech!"</b></li>
         <li>Draw 4 ways tech helps you learn: reading, maths, exploring, songs.</li>
         <li>Write a sentence under each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each way.</p>`,

      [{ heading: 'Exercise 95.1 — Draw your learning poster', items: [
          'Reading apps',
          'Maths games',
          'Exploring the world',
          'Learning songs'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 ways tech helps you learn.', a: ['reading', 'maths', 'songs', 'any'] },
       { q: 'What did you learn today?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DIGITAL CITIZENSHIP — Good Digital Citizen
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: 'Good Digital Citizen', days: [

    D(1, '👍', 'Being Kind',
      'Be kind online.',
      `<p class='big-emoji'>👍 💬 💗</p>

       <h3>A Good Digital Citizen...</h3>
       <ul>
         <li>Is <b>kind</b> online.</li>
         <li>Uses <b>polite words</b>.</li>
         <li>Shares <b>good things</b>.</li>
         <li>Helps others.</li>
         <li>Does not bully.</li>
       </ul>

       <h3>Kind Things to Say</h3>
       <ul>
         <li>"Well done!"</li>
         <li>"Thank you."</li>
         <li>"Nice picture!"</li>
         <li>"You are kind."</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 speech bubbles with kind messages.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a good digital citizen do?</p>
       <p><b>Answer:</b> They are <b>kind</b> and helpful online.</p>`,

      [{ heading: 'Exercise 96.1 — Answer', items: [
          'What is a good digital citizen?',
          'Name 3 kind things to say.',
          'Should you bully online?'
        ]},
       { heading: 'Exercise 96.2 — Draw', items: [
          'Draw 3 kind messages.'
        ]}],

      `<p><b>96.1:</b> 1. Kind online 2. "Well done", "Thank you" 3. No</p>`,

      [{ q: 'Should you bully online?', a: ['no'] },
       { q: 'Give one kind message.', a: ['well done', 'thank you', 'any'] }]),

    D(2, '🔒', 'Keeping Safe',
      'Keep safe online.',
      `<p class='big-emoji'>🔒 🔑 🛡️</p>

       <h3>Safe Online Rules</h3>
       <ul>
         <li>🔒 Keep your password safe.</li>
         <li>🚫 Do not share personal information (address, phone, school).</li>
         <li>🚫 Do not talk to strangers.</li>
         <li>🚫 Do not meet online friends alone.</li>
         <li>📸 Ask before sharing photos.</li>
       </ul>

       <h3>What to Do If Something Feels Wrong</h3>
       <ol>
         <li>Stop.</li>
         <li>Close the screen.</li>
         <li>Tell a trusted adult.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a padlock with a key. Write "Keep safe online".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do if something feels wrong online?</p>
       <p><b>Answer:</b> Tell a <b>trusted adult</b>.</p>`,

      [{ heading: 'Exercise 97.1 — Answer', items: [
          'Name 3 safe online rules.',
          'What should you not share?',
          'Who should you tell if something feels wrong?'
        ]},
       { heading: 'Exercise 97.2 — Draw', items: [
          'Draw a padlock.'
        ]}],

      `<p><b>97.1:</b> 1. Safe password, no strangers, no personal info 2. Address 3. Trusted adult</p>`,

      [{ q: 'What should you not share?', a: ['address', 'personal info', 'any'] },
       { q: 'Who should you tell?', a: ['adult', 'parent', 'any'] }]),

    D(3, '⏰', 'Screen Time',
      'Keep screen time balanced.',
      `<p class='big-emoji'>⏰ 📱 🌳</p>

       <h3>What is Screen Time?</h3>
       <p><b>Screen time</b> is how long we spend looking at phones, tablets, computers, or TVs.</p>

       <h3>Healthy Screen Time</h3>
       <ul>
         <li>⏰ 1–2 hours a day.</li>
         <li>🏃 Play outside every day.</li>
         <li>📚 Read books.</li>
         <li>👨‍👩‍👧 Spend time with family.</li>
         <li>🛌 No screens before bed.</li>
       </ul>

       <h3>Signs of Too Much Screen Time</h3>
       <ul>
         <li>Eyes hurt.</li>
         <li>Headache.</li>
         <li>Sleeping badly.</li>
         <li>Not playing outside.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing "1 hour". Write "Screen time: 1 hour".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How much screen time is healthy for children?</p>
       <p><b>Answer:</b> About <b>1–2 hours a day</b>.</p>`,

      [{ heading: 'Exercise 98.1 — Answer', items: [
          'What is screen time?',
          'How much is healthy?',
          'Name 3 things to do instead of screens.'
        ]},
       { heading: 'Exercise 98.2 — Draw', items: [
          'Draw 3 activities you can do without screens.'
        ]}],

      `<p><b>98.1:</b> 1. Time on screens 2. 1–2 hours 3. Play outside, read, help at home</p>`,

      [{ q: 'What is screen time?', a: ['time on screens', 'any'] },
       { q: 'What else can you do?', a: ['play outside', 'read', 'any'] }]),

    D(4, '🙏', 'Saying Thank You',
      'Learn to say thank you online.',
      `<p class='big-emoji'>🙏 💗 💬</p>

       <h3>When to Say Thank You</h3>
       <ul>
         <li>When someone helps you.</li>
         <li>When someone shares something nice.</li>
         <li>When someone sends you a gift.</li>
         <li>When someone says something kind.</li>
       </ul>

       <h3>How to Say Thank You</h3>
       <ul>
         <li>"Thank you!"</li>
         <li>"Thanks so much."</li>
         <li>"I appreciate it."</li>
         <li>🙏 emoji</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a thank-you message on a screen.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> When should you say thank you?</p>
       <p><b>Answer:</b> Whenever someone helps you or is kind to you.</p>`,

      [{ heading: 'Exercise 99.1 — Say', items: [
          'Say thank you 3 times.',
          'Write a thank-you message.'
        ]},
       { heading: 'Exercise 99.2 — Draw', items: [
          'Draw a thank-you message.'
        ]}],

      `<p>⭐ for polite behaviour.</p>`,

      [{ q: 'When do we say thank you?', a: ['when helped', 'any'] },
       { q: 'What is a polite word?', a: ['please', 'thank you', 'sorry', 'any'] }]),

    D(5, '🎨', 'Citizen Poster',
      'Make a "Good Digital Citizen" poster.',
      `<p>Make a "Good Digital Citizen" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Good Digital Citizen"</b></li>
         <li>Draw 4 things a good citizen does: be kind, stay safe, take screen breaks, say thank you.</li>
         <li>Write each under the picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say what a good citizen does.</p>`,

      [{ heading: 'Exercise 100.1 — Draw your citizen poster', items: [
          'Be kind',
          'Stay safe',
          'Take screen breaks',
          'Say thank you'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 things a good citizen does.', a: ['kind', 'safe', 'any'] },
       { q: 'What does a good citizen not do?', a: ['bully', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: MULTIMEDIA — Fun with Stories
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: 'Fun with Stories', days: [

    D(1, '📖', 'Reading Online',
      'Read stories on a computer or tablet.',
      `<p class='big-emoji'>📖 💻 ✨</p>

       <h3>Where to Read Stories Online</h3>
       <ul>
         <li>📚 Story apps for children.</li>
         <li>🌐 Educational websites.</li>
         <li>📱 Kindle or eBook apps.</li>
       </ul>

       <h3>How to Read Online</h3>
       <ol>
         <li>Ask a parent to help you open the app or website.</li>
         <li>Choose a story.</li>
         <li>Read carefully.</li>
         <li>Say what the story was about.</li>
       </ol>

       <h3>Benefits of Reading Online</h3>
       <ul>
         <li>Many stories to choose from.</li>
         <li>You can change the size of the letters.</li>
         <li>Some apps read aloud to you.</li>
         <li>You can read anywhere.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a tablet showing a storybook.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where can you read stories online?</p>
       <p><b>Answer:</b> On <b>story apps</b>, educational websites, or eBooks.</p>`,

      [{ heading: 'Exercise 101.1 — Read online', items: [
          'Read a story on a tablet or phone.',
          'Tell your parent what happened.'
        ]},
       { heading: 'Exercise 101.2 — Answer', items: [
          'Name 2 places to read online.',
          'What story did you read?'
        ]}],

      `<p><b>101.2:</b> 1. Story apps, websites 2. Any</p>`,

      [{ q: 'Name one place to read online.', a: ['story app', 'website', 'any'] },
       { q: 'What did you read?', a: ['any'] }]),

    D(2, '✍️', 'Writing a Story',
      'Type a short story on the computer.',
      `<p class='big-emoji'>✍️ 📝 📖</p>

       <h3>What is a Story?</h3>
       <p>A story has a <b>beginning</b>, a <b>middle</b>, and an <b>end</b>.</p>

       <h3>How to Type a Story</h3>
       <ol>
         <li>Open a word processor (like MS Word).</li>
         <li>Write a title.</li>
         <li>Write your story — at least 3 sentences.</li>
         <li>Check spelling.</li>
         <li>Save your story.</li>
       </ol>

       <h3>Story Starters</h3>
       <ul>
         <li>"Once upon a time…"</li>
         <li>"One day, a boy found…"</li>
         <li>"Long ago, in a village…"</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a screen showing the beginning of your story.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you start a story?</p>
       <p><b>Answer:</b> With "Once upon a time…" or "One day…".</p>`,

      [{ heading: 'Exercise 102.1 — Type a story', items: [
          'Open a word processor.',
          'Type a title.',
          'Type 3 sentences.'
        ]},
       { heading: 'Exercise 102.2 — Answer', items: [
          'What is the beginning of your story?',
          'What is the end?'
        ]}],

      `<p>⭐ for a complete story.</p>`,

      [{ q: 'How do we start a story?', a: ['once upon a time', 'one day', 'any'] },
       { q: 'What is your story about?', a: ['any'] }]),

    D(3, '🎨', 'Drawing a Story',
      'Draw a picture to go with your story.',
      `<p class='big-emoji'>🎨 📖 🖼️</p>

       <h3>Draw a Scene</h3>
       <p>Choose your favourite part of your story and draw it.</p>

       <h3>How to Draw a Scene</h3>
       <ol>
         <li>Open Paint.</li>
         <li>Draw the main character.</li>
         <li>Draw the setting (where it happens).</li>
         <li>Add colour.</li>
         <li>Save it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the main scene from your story.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a scene?</p>
       <p><b>Answer:</b> A picture showing a part of the story.</p>`,

      [{ heading: 'Exercise 103.1 — Draw a scene', items: [
          'Open Paint.',
          'Draw a scene from your story.',
          'Save it.'
        ]},
       { heading: 'Exercise 103.2 — Answer', items: [
          'What is a scene?',
          'What did you draw?'
        ]}],

      `<p>⭐ for a colourful scene.</p>`,

      [{ q: 'What is a scene?', a: ['a picture from the story', 'any'] },
       { q: 'What did you draw?', a: ['any'] }]),

    D(4, '📁', 'Saving Your Story',
      'Save your story and drawing.',
      `<p class='big-emoji'>💾 📁 📖</p>

       <h3>Save Your Story</h3>
       <ol>
         <li>Click File → Save As.</li>
         <li>Give your story a name (e.g., "My Story").</li>
         <li>Choose where to save it (e.g., Documents).</li>
         <li>Click Save.</li>
       </ol>

       <h3>Save Your Drawing Too</h3>
       <ol>
         <li>Save it in the same folder.</li>
         <li>Use a matching name (e.g., "My Story Picture").</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a folder called "My Stories" with 2 files inside.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why save your story?</p>
       <p><b>Answer:</b> So you can read it again later.</p>`,

      [{ heading: 'Exercise 104.1 — Save both files', items: [
          'Save your story.',
          'Save your drawing.',
          'Put them in the same folder.'
        ]},
       { heading: 'Exercise 104.2 — Answer', items: [
          'Why save your story?',
          'Where did you save it?'
        ]}],

      `<p>⭐ for saving both files.</p>`,

      [{ q: 'Why save?', a: ['so we can read it later', 'any'] },
       { q: 'Where did you save?', a: ['documents', 'any'] }]),

    D(5, '🎨', 'Story Poster',
      'Make a poster about your story.',
      `<p>Make a "My Story" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Story"</b></li>
         <li>Draw the main scene.</li>
         <li>Write 3 sentences from your story.</li>
         <li>Sign your name.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Read your story aloud to your family.</p>`,

      [{ heading: 'Exercise 105.1 — Draw your story poster', items: [
          'Title',
          'Drawing',
          'Story sentences',
          'Signature'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is your story about?', a: ['any'] },
       { q: 'What is the main scene?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Month 6 Wrap-up
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: 'Review & Practice', days: [

    D(1, '🔁', 'Review Parts',
      'Review computer parts.',
      `<p class='big-emoji'>💻 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Monitor, keyboard, mouse, CPU</li>
         <li>Printer, speaker, microphone, camera</li>
         <li>Input and output devices</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 computer parts and label them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an input device?</p>
       <p><b>Answer:</b> A device we use to put information <b>into</b> the computer.</p>`,

      [{ heading: 'Exercise 106.1 — Say', items: [
          'Name 5 parts of a computer.',
          'Name 3 input devices.',
          'Name 3 output devices.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 3 input devices.', a: ['keyboard', 'mouse', 'microphone', 'any'] },
       { q: 'Name 3 output devices.', a: ['monitor', 'printer', 'speaker', 'any'] }]),

    D(2, '🔁', 'Review Using',
      'Review using a computer.',
      `<p class='big-emoji'>🖱️ ⌨️ 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Click, double-click, drag</li>
         <li>Typing letters, numbers, words</li>
         <li>Space bar, Enter key</li>
         <li>Saving files</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a keyboard with the space bar circled in blue and the Enter key circled in green.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the space bar do?</p>
       <p><b>Answer:</b> It makes a space between words.</p>`,

      [{ heading: 'Exercise 107.1 — Type', items: [
          'Type your name.',
          'Type 5 letters.',
          'Type a sentence.',
          'Save it.'
        ]}],

      `<p>⭐ for correct typing.</p>`,

      [{ q: 'What does the space bar do?', a: ['makes a space', 'space'] },
       { q: 'What does Enter do?', a: ['new line', 'any'] }]),

    D(3, '🔁', 'Review Safety',
      'Review online safety.',
      `<p class='big-emoji'>🔒 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Keep passwords safe.</li>
         <li>No strangers online.</li>
         <li>Ask before sharing photos.</li>
         <li>Take screen breaks.</li>
         <li>Tell an adult if something feels wrong.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 safety rules.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Should you share your password with strangers?</p>
       <p><b>Answer:</b> No — never.</p>`,

      [{ heading: 'Exercise 108.1 — Say', items: [
          'Name 5 safety rules.',
          'Who should know your password?',
          'Who should you tell if something is wrong?'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Who can know your password?', a: ['parents', 'no one', 'any'] },
       { q: 'Who to tell if something is wrong?', a: ['adult', 'parent', 'any'] }]),

    D(4, '🔁', 'Review Drawing & Stories',
      'Review drawing and writing stories.',
      `<p class='big-emoji'>🎨 📖 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Drawing in Paint.</li>
         <li>Colours, shapes, brushes.</li>
         <li>Typing a story.</li>
         <li>Saving files.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one picture and write 2 sentences about it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What can you make in Paint?</p>
       <p><b>Answer:</b> Pictures, cards, posters.</p>`,

      [{ heading: 'Exercise 109.1 — Do', items: [
          'Draw a picture in Paint.',
          'Type 3 sentences about it.',
          'Save both files.'
        ]},
       { heading: 'Exercise 109.2 — Answer', items: [
          'What did you draw?',
          'What is your story about?'
        ]}],

      `<p>⭐ for completed work.</p>`,

      [{ q: 'What did you draw?', a: ['any'] },
       { q: 'What is your story about?', a: ['any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate your learning.',
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>

       <h3>Well Done!</h3>
       <p>You have almost finished Grade 2 Computing. Next week is the final review.</p>

       <h3>Show and Tell</h3>
       <p>Show all your work to your family. Give yourself a big star! ⭐</p>`,

      [{ heading: 'Exercise 110.1 — Celebrate!', items: [
          'Show your posters.',
          'Show your drawings.',
          'Show your typed work.',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful month!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: FINAL FUN — Celebration of Learning
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: 'Final Fun', days: [

    D(1, '🔁', 'Review Everything',
      'Review the whole year of computing.',
      `<p class='big-emoji'>💻 🔁 🌟</p>

       <h3>Topics This Year</h3>
       <ul>
         <li>What is a computer?</li>
         <li>Parts of a computer</li>
         <li>Using a computer</li>
         <li>Word processing</li>
         <li>Drawing in Paint</li>
         <li>Typing</li>
         <li>Online safety</li>
         <li>Being kind online</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one thing from your favourite topic.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite computing topic?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 111.1 — Say', items: [
          'Name 3 things you learned.',
          'What is your favourite topic?',
          'What is one new word you learned?'
        ]},
       { heading: 'Exercise 111.2 — Draw', items: [
          'Draw your favourite computing topic.'
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: 'Name a topic you liked.', a: ['any'] },
       { q: 'Name a new word you learned.', a: ['any'] }]),

    D(2, '📖', 'Make a Tech Book',
      'Make a tech book with your best work.',
      `<p class='big-emoji'>📖 💻 ✍️</p>

       <h3>What to Do</h3>
       <ol>
         <li>Take 4 sheets of paper.</li>
         <li>Fold them in half and staple the fold.</li>
         <li>Write a title: <b>"My Computing Book — Grade 2"</b> and your name.</li>
         <li>On each page, write about one topic.</li>
         <li>Add drawings or copies of your computer work.</li>
       </ol>

       <h3>Suggested Pages</h3>
       <ul>
         <li>Page 1: Parts of a computer</li>
         <li>Page 2: Using a computer</li>
         <li>Page 3: Drawing in Paint</li>
         <li>Page 4: Typing</li>
         <li>Page 5: Online safety</li>
         <li>Page 6: Being kind online</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the cover of your tech book.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you put on page 1?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 112.1 — Make your tech book', items: [
          'Cover with title and name',
          'Page 1: Parts of a computer',
          'Page 2: Using a computer',
          'Page 3: Drawing in Paint',
          'Page 4: Typing',
          'Page 5: Online safety',
          'Page 6: Being kind online'
        ]},
       { heading: 'Exercise 112.2 — Read aloud', items: [
          'Read your book to your parent.'
        ]}],

      `<p>⭐ for a completed book.</p>`,

      [{ q: 'What is the title of your book?', a: ['any'] }]),

    D(3, '🎤', 'Show and Tell',
      'Present your tech book to your family.',
      `<p class='big-emoji'>🎤 📖 👨‍👩‍👧</p>

       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Speak clearly and slowly.</li>
         <li>Show each page.</li>
         <li>Say 2 sentences about each page.</li>
         <li>Answer questions.</li>
       </ol>

       <h3>Example Presentation</h3>
       <p>"This is my computing book. On this page, I wrote about computer parts. A computer has a monitor, keyboard, and mouse. On this page, I wrote about online safety. I never share my password."</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself presenting your tech book.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What will you say first?</p>
       <p><b>Answer:</b> <b>"This is my computing book."</b></p>`,

      [{ heading: 'Exercise 113.1 — Present your book', items: [
          'Stand up straight',
          'Show each page',
          'Say 2 sentences for each',
          'Answer questions'
        ]}],

      `<p>⭐ for confident speaking.</p>`,

      [{ q: 'How did you feel presenting?', a: ['any'] }]),

    D(4, '🎉', 'Party Day!',
      'Celebrate your year of computing.',
      `<p class='big-emoji'>🎉 ⭐ 🎊</p>

       <h3>Congratulations!</h3>
       <p>You have completed Grade 2 Computing! Today is your celebration day.</p>

       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>💻 Type a message for your family.</li>
         <li>🎨 Draw something special.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>

       <h3>Say This</h3>
       <p>"I finished Grade 2 Computing! I can use a computer safely!"</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a party scene with you, your family, and your computer work.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you enjoy most this year?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 114.1 — Celebrate!', items: [
          'Show your work.',
          'Type a message.',
          'Draw something.',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] },
       { q: 'What will you do in Grade 3?', a: ['any'] }]),

    D(5, '⭐', 'Big Star Day',
      'Give yourself the biggest star.',
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a computing champion! You have worked hard all year.</p>

       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can use a computer!"</li>
         <li>⭐ "I stay safe online!"</li>
         <li>⭐ "I will keep learning!"</li>
       </ul>

       <h3>What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself as a computer expert. Add 3 big stars around you.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite computing lesson?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 115.1 — Big Star Day', items: [
          'Say "I can use a computer!"',
          'Say "I stay safe online!"',
          'Say "I will keep learning!"',
          'Give yourself 3 stars! ⭐⭐⭐'
        ]}],

      `<p>⭐⭐⭐ for an amazing year of computing!</p>`,

      [{ q: 'What is your favourite lesson?', a: ['any'] },
       { q: 'What do you want to learn next?', a: ['any'] }])
  ]},
];