// src/data/grade5/computing.js
// Grade 5 Computing — NaCCA Standards-Based Curriculum (enriched, 24 weeks)
// Strands: Digital Literacy · Word Processing · Spreadsheets · Algorithms ·
//          Programming · Debugging · Internet · AI & Ethics

import { D } from '../helpers.js';

export const computing = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — DIGITAL LITERACY
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Digital Literacy", days: [

    D(1, "💻", "Hardware",
      "Understand hardware and identify its components.",
      `<p class='big-emoji'>💻 🖥️ ⌨️ 🖱️ 🖨️</p>
       <p><b>Hardware</b> = the physical parts of a computer you can <b>touch</b>.</p>

       <h3>🖼️ Illustration (Draw This!)</h3>
       <pre>
   ┌──────────────────┐
   │     🖥️  MONITOR  │
   │                  │
   └──────────────────┘
   ┌──────────────┐    ┌──────┐
   │ ⌨️  KEYBOARD  │    │ 🖱️   │
   └──────────────┘    └──────┘
   ┌──────┐
   │ 🖨️   │  PRINTER
   └──────┘
       </pre>
       <p>Draw a computer set like this and label each part. Colour the monitor blue, the keyboard grey, and the mouse yellow.</p>

       <h3>🧠 Types of Hardware</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Example</th><th>Job</th></tr>
         <tr><td>Input</td><td>Keyboard, mouse</td><td>Put info IN</td></tr>
         <tr><td>Output</td><td>Monitor, printer</td><td>Show info OUT</td></tr>
         <tr><td>Processing</td><td>CPU</td><td>Thinks</td></tr>
         <tr><td>Storage</td><td>Flash drive, HDD</td><td>Saves info</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Is a monitor hardware?</p>
       <p><b>Answer:</b> Yes, a monitor is <b>hardware</b> because you can touch it. It is also an <b>output device</b> because it shows information.</p>

       <h3>💡 Fun Fact</h3>
       <p>The word "hardware" comes from the idea of things that are hard (physical). Software is "soft" because it's invisible!</p>`,

      [{ heading: "Exercise 1.1 — List 5 hardware parts you can see in a computer lab.", items: [
          "1. ___________", "2. ___________", "3. ___________", "4. ___________", "5. ___________"
        ]},
       { heading: "Exercise 1.2 — Classify each as Input, Output, Processing, or Storage.", items: [
          "Keyboard", "Monitor", "CPU", "Flash drive", "Printer", "Microphone", "Speaker"
        ]},
       { heading: "Exercise 1.3 — Draw and label.", items: [
          "Draw a computer set with monitor, keyboard, mouse, and CPU."
        ]}],

      `<p><b>1.2:</b> Keyboard — Input; Monitor — Output; CPU — Processing; Flash drive — Storage; Printer — Output; Microphone — Input; Speaker — Output</p>`,

      [{ q: "What is hardware?", a: ["physical parts of a computer", "any"] },
       { q: "Is a keyboard hardware?", a: ["yes"] },
       { q: "Name 3 hardware parts.", a: ["monitor", "keyboard", "mouse", "any"] },
       { q: "Is a printer input or output?", a: ["output"] }]),

    D(2, "📀", "Software",
      "Understand software and its types.",
      `<p class='big-emoji'>📀 💻 🎮</p>
       <p><b>Software</b> = programs installed on a computer that you <b>cannot touch</b>.</p>

       <h3>🖼️ Illustration — Software on a Desktop</h3>
       <pre>
   ┌──────────────────────────────────┐
   │  🪟 Windows    📝 Word    🎨 Paint │
   │  🌐 Chrome    📊 Excel   🎵 Music │
   │                                  │
   │         (Desktop icons)          │
   └──────────────────────────────────┘
       </pre>
       <p>Draw this desktop and label each icon. These are all software programs!</p>

       <h3>🧠 Types of Software</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>What It Does</th><th>Example</th></tr>
         <tr><td>Operating System</td><td>Manages everything</td><td>Windows, macOS</td></tr>
         <tr><td>Application</td><td>Does a specific job</td><td>Word, Excel</td></tr>
         <tr><td>Utility</td><td>Helps the computer</td><td>Antivirus</td></tr>
         <tr><td>Game</td><td>For fun</td><td>Minecraft</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Is Windows hardware or software?</p>
       <p><b>Answer:</b> Windows is <b>software</b> — you can see it on the screen but not touch it.</p>

       <h3>💡 Fun Fact</h3>
       <p>Your phone has over 100 software programs running at the same time!</p>`,

      [{ heading: "Exercise 2.1 — List 5 software programs you know.", items: [
          "1. ___________", "2. ___________", "3. ___________", "4. ___________", "5. ___________"
        ]},
       { heading: "Exercise 2.2 — Hardware or Software?", items: [
          "Windows", "Mouse", "Chrome", "Keyboard", "Paint", "Monitor"
        ]},
       { heading: "Exercise 2.3 — Draw your dream app.", items: [
          "Draw an app you would like to create."
        ]}],

      `<p><b>2.2:</b> Windows — Software; Mouse — Hardware; Chrome — Software; Keyboard — Hardware; Paint — Software; Monitor — Hardware</p>`,

      [{ q: "Is Windows hardware or software?", a: ["software"] },
       { q: "What is software?", a: ["programs", "any"] },
       { q: "Name 3 software programs.", a: ["windows", "word", "chrome", "any"] }]),

    D(3, "🖥️", "Operating Systems",
      "Learn about operating systems and their jobs.",
      `<p class='big-emoji'>🖥️ ⚙️ 🍎 🐧</p>
       <p>An <b>operating system (OS)</b> manages hardware and software.</p>

       <h3>🖼️ Illustration — OS as a Manager</h3>
       <pre>
        ┌───────────────────────────────┐
        │       🌐 APPLICATIONS         │
        │  Word | Excel | Chrome | Paint│
        └───────────────┬───────────────┘
                        │
        ┌───────────────▼───────────────┐
        │       ⚙️  OPERATING SYSTEM    │
        │    🪟 Windows / 🍎 macOS       │
        └───────────────┬───────────────┘
                        │
        ┌───────────────▼───────────────┐
        │         💻 HARDWARE           │
        │  Monitor | CPU | Keyboard     │
        └───────────────────────────────┘
       </pre>
       <p>The OS is the <b>middle layer</b>. It lets programs talk to the hardware!</p>

       <h3>🧠 Common Operating Systems</h3>
       <table border="1" cellpadding="6">
         <tr><th>OS</th><th>Used On</th><th>Made By</th></tr>
         <tr><td>🪟 Windows</td><td>PCs and laptops</td><td>Microsoft</td></tr>
         <tr><td>🍎 macOS</td><td>Apple computers</td><td>Apple</td></tr>
         <tr><td>🐧 Linux</td><td>Servers, free computers</td><td>Open source</td></tr>
         <tr><td>📱 Android</td><td>Phones and tablets</td><td>Google</td></tr>
         <tr><td>📱 iOS</td><td>iPhones and iPads</td><td>Apple</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does an OS do?</p>
       <p><b>Answer:</b> An OS <b>manages hardware and software</b>, lets programs run, and helps you use the computer.</p>

       <h3>💡 Fun Fact</h3>
       <p>Windows 11 has over 50 million lines of code — that's like a book with 2 million pages!</p>`,

      [{ heading: "Exercise 3.1 — Name 3 operating systems and the devices they run on.", items: [
          "OS: ___________ Device: ___________",
          "OS: ___________ Device: ___________",
          "OS: ___________ Device: ___________"
        ]},
       { heading: "Exercise 3.2 — Answer.", items: [
          "What does an OS do?",
          "What OS runs on iPhones?",
          "What OS runs on most computers?",
          "Is Android free?"
        ]},
       { heading: "Exercise 3.3 — Draw the OS layers.", items: [
          "Draw three layers: Applications, OS, Hardware."
        ]}],

      `<p>Windows, macOS, Linux, Android, iOS.</p>`,

      [{ q: "Name one operating system.", a: ["windows", "macos", "linux", "any"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] },
       { q: "What OS runs on iPhones?", a: ["ios"] }]),

    D(4, "🌐", "Networks",
      "Learn about networks and how they connect computers.",
      `<p class='big-emoji'>🌐 🔗 📡</p>
       <p>A <b>network</b> connects computers so they can share data.</p>

       <h3>🖼️ Illustration — Network Types</h3>
       <pre>
   LAN (Local Area Network)
   ┌───┐  ┌───┐  ┌───┐
   │🖥️ │──│🖥️ │──│🖥️ │   (Same building)
   └───┘  └───┘  └───┘

   WAN (Wide Area Network)
   ┌────────┐          ┌────────┐
   │ Accra  │──────────│ Kumasi │  (Different cities)
   └────────┘          └────────┘

   Wi-Fi (Wireless)
       📡 ~~~~~~~~~ 🖥️
       (Router)     (Laptop)
       </pre>
       <p>Draw these three network types. Which one is used at your school?</p>

       <h3>🧠 Network Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Full Name</th><th>Size</th><th>Example</th></tr>
         <tr><td>LAN</td><td>Local Area Network</td><td>Small</td><td>School computer lab</td></tr>
         <tr><td>WAN</td><td>Wide Area Network</td><td>Large</td><td>The Internet</td></tr>
         <tr><td>Wi-Fi</td><td>Wireless Fidelity</td><td>Any</td><td>Home router</td></tr>
         <tr><td>PAN</td><td>Personal Area Network</td><td>Tiny</td><td>Bluetooth headphones</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does a network do?</p>
       <p><b>Answer:</b> A network <b>connects computers</b> so they can share files, printers, and the internet.</p>

       <h3>💡 Fun Fact</h3>
       <p>The internet is the biggest WAN in the world — it connects over 5 billion devices!</p>`,

      [{ heading: "Exercise 4.1 — List 3 types of networks and give an example.", items: [
          "Type 1: ___________ Example: ___________",
          "Type 2: ___________ Example: ___________",
          "Type 3: ___________ Example: ___________"
        ]},
       { heading: "Exercise 4.2 — Answer.", items: [
          "What is a network?",
          "What does LAN stand for?",
          "What does WAN stand for?",
          "What network connects Bluetooth headphones?"
        ]},
       { heading: "Exercise 4.3 — Draw your school network.", items: [
          "Draw 3 computers connected in a LAN."
        ]}],

      `<p>LAN, WAN, Wi-Fi, PAN.</p>`,

      [{ q: "What does a network do?", a: ["connects computers", "share data", "any"] },
       { q: "What does LAN stand for?", a: ["local area network"] },
       { q: "What is the biggest WAN?", a: ["internet", "the internet"] }]),

    D(5, "🎨", "Digital Literacy Poster",
      "Create a poster showing everything you learned this week.",
      `<p class='big-emoji'>🎨 💻 🌐</p>
       <p>Make a <b>"All About Computers"</b> poster that shows everything you have learned this week.</p>

       <h3>🖼️ Poster Layout Idea</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │        💻 ALL ABOUT COMPUTERS 💻      │
   ├──────────────────────────────────────┤
   │  🔧 HARDWARE      │  💿 SOFTWARE      │
   │  • Monitor        │  • Windows        │
   │  • Keyboard       │  • Word           │
   │  • Mouse          │  • Chrome         │
   ├──────────────────────────────────────┤
   │  ⚙️ OS             │  🌐 NETWORKS      │
   │  • Windows        │  • LAN            │
   │  • Android        │  • WAN            │
   │  • iOS            │  • Wi-Fi          │
   ├──────────────────────────────────────┤
   │  💡 My favourite part: ____________   │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Hardware, Software, OS, Networks</li>
         <li>At least 2 examples in each section</li>
         <li>Colourful drawings</li>
         <li>Your name at the bottom</li>
       </ul>

       <h3>🗣️ Show and Tell</h3>
       <p>Present your poster to your family. Explain:</p>
       <ul>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What does the OS do?</li>
         <li>What is a network?</li>
       </ul>`,

      [{ heading: "Exercise 5.1 — Draw and label your poster.", items: [
          "Hardware section (2+ examples)",
          "Software section (2+ examples)",
          "OS section (2+ examples)",
          "Network section (2+ examples)"
        ]},
       { heading: "Exercise 5.2 — Write your reflections.", items: [
          "The most interesting thing I learned is ___.",
          "I still have a question about ___.",
          "I want to learn more about ___."
        ]}],

      `<p>⭐ for a complete, colourful poster with all 4 sections.</p>`,

      [{ q: "What does an OS do?", a: ["manages hardware and software", "any"] },
       { q: "What does a network do?", a: ["connects computers", "any"] },
       { q: "Is Windows hardware or software?", a: ["software"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — WORD PROCESSING
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Word Processing", days: [

    D(1, "📝", "Documents",
      "Create documents with a word processor.",
      `<p class='big-emoji'>📝 📄 ✍️</p>
       <p>A <b>word processor</b> is software that lets you type, edit, format, save, and print text.</p>

       <h3>🖼️ Illustration — Word Processor Window</h3>
       <pre>
   ┌────────────────────────────────────────┐
   │  File  Edit  View  Insert  Format      │ ← Menu Bar
   ├────────────────────────────────────────┤
   │  B   I   U   🎨  Aa   ≡   🖼️   📊    │ ← Toolbar
   ├────────────────────────────────────────┤
   │                                        │
   │   My First Story                       │
       │                                        │
       │   Once upon a time, there was a        │
       │   young girl named Ama...              │
       │                                        │
       └────────────────────────────────────────┘
       </pre>
       <p>Draw this window. Label: Menu Bar, Toolbar, and Writing Area.</p>

       <h3>🧠 Common Word Processors</h3>
       <table border="1" cellpadding="6">
         <tr><th>Name</th><th>Type</th><th>Cost</th></tr>
         <tr><td>Microsoft Word</td><td>Installed</td><td>Paid</td></tr>
         <tr><td>Google Docs</td><td>Online</td><td>Free</td></tr>
         <tr><td>LibreOffice Writer</td><td>Installed</td><td>Free</td></tr>
         <tr><td>Notepad</td><td>Installed</td><td>Free (basic)</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Name a free word processor.</p>
       <p><b>Answer:</b> Google Docs or LibreOffice Writer.</p>

       <h3>💡 Fun Fact</h3>
       <p>The first word processor was invented in 1964 — before personal computers existed!</p>`,

      [{ heading: "Exercise 6.1 — Type a two-paragraph story.", items: [
          "Title: My Favourite Day",
          "Paragraph 1: Describe the morning.",
          "Paragraph 2: Describe the afternoon."
        ]},
       { heading: "Exercise 6.2 — Answer.", items: [
          "What is a word processor?",
          "Name 3 word processors.",
          "What can you do with a word processor?"
        ]},
       { heading: "Exercise 6.3 — Open a word processor.", items: [
          "Open Word or Google Docs.",
          "Type your name.",
          "Save the file as 'MyName_Test'."
        ]}],

      `<p>Any correct story. Check spelling, capitals, and full stops.</p>`,

      [{ q: "Name a word processor.", a: ["ms word", "google docs", "any"] },
       { q: "What can you do with a word processor?", a: ["type edit format save print", "any"] },
       { q: "Which word processor is free online?", a: ["google docs"] }]),

    D(2, "🎨", "Formatting",
      "Format text to make documents look professional.",
      `<p class='big-emoji'>🎨 🅱️ 🅸 🅄</p>
       <p><b>Formatting</b> changes how text looks. It makes documents easier to read.</p>

       <h3>🖼️ Illustration — Formatting Options</h3>
       <pre>
       B  = Bold       →   Hello (thicker)
       I  = Italic     →   Hello (slanted)
       U  = Underline  →   Hello (underlined)

       Font: Arial     →   Hello
       Font: Times     →   Hello
       Size 12         →   Hello
       Size 20         →   Hello
       Colour: Red     →   Hello (in red)
       Colour: Blue    →   Hello (in blue)
       </pre>

       <h3>🧠 When to Use Each</h3>
       <table border="1" cellpadding="6">
         <tr><th>Format</th><th>When to Use</th><th>Example</th></tr>
         <tr><td>Bold</td><td>Important words</td><td><b>Safety Rules</b></td></tr>
         <tr><td>Italic</td><td>Titles, foreign words</td><td><i>The Tortoise and the Hare</i></td></tr>
         <tr><td>Underline</td><td>Headings, links</td><td><u>Chapter 1</u></td></tr>
         <tr><td>Colour</td><td>Headings, warnings</td><td><span style="color:red">Warning!</span></td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does italic do?</p>
       <p><b>Answer:</b> Italic <b>slants the text</b>. We use it for titles and emphasis.</p>

       <h3>💡 Keyboard Shortcuts</h3>
       <ul>
         <li><b>Ctrl + B</b> = Bold</li>
         <li><b>Ctrl + I</b> = Italic</li>
         <li><b>Ctrl + U</b> = Underline</li>
       </ul>`,

      [{ heading: "Exercise 7.1 — Type and format a document.", items: [
          "Type: 'My Favourite Food' — make the title bold.",
          "Type 3 sentences. Make 1 word italic.",
          "Make 1 word underlined.",
          "Change the colour of the title."
        ]},
       { heading: "Exercise 7.2 — Answer.", items: [
          "What does italic do?",
          "What does bold do?",
          "What does underline do?",
          "What is the shortcut for bold?"
        ]},
       { heading: "Exercise 7.3 — Practise.", items: [
          "Type the alphabet A–Z.",
          "Make every 5th letter bold."
        ]}],

      `<p>Check that the correct formatting is applied.</p>`,

      [{ q: "What does italic do?", a: ["slants text", "italic", "any"] },
       { q: "What does bold do?", a: ["makes text darker", "any"] },
       { q: "What is the shortcut for bold?", a: ["ctrl+b", "ctrl b"] }]),

    D(3, "📊", "Tables",
      "Add tables to organise information.",
      `<p class='big-emoji'>📊 📋 🗂️</p>
       <p><b>Tables</b> organise information into rows and columns. They make data easy to read.</p>

       <h3>🖼️ Illustration — A Simple Table</h3>
       <pre>
   ┌─────────┬──────┬───────┬───────┐
   │  Name   │ Age  │ Class │ Score │
   ├─────────┼──────┼───────┼───────┤
   │  Ama    │  10  │  5A   │  85   │
   │  Kofi   │  11  │  5B   │  90   │
   │  Adwoa  │  10  │  5A   │  78   │
   │  Yaw    │  11  │  5B   │  92   │
   │  Akua   │  10  │  5A   │  88   │
   │  Kojo   │  11  │  5B   │  80   │
   └─────────┴──────┴───────┴───────┘
        </pre>
       <p>This table has <b>4 columns</b> and <b>6 rows</b> of data (plus 1 header row).</p>

       <h3>🧠 When to Use Tables</h3>
       <ul>
         <li>Class lists</li>
         <li>Marks and scores</li>
         <li>Timetables</li>
         <li>Price lists</li>
         <li>Comparisons</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you insert a table?</p>
       <p><b>Answer:</b> Click <b>Insert → Table</b>, then choose the number of rows and columns.</p>

       <h3>💡 Tip</h3>
       <p>Use the Tab key to move between cells. Use Shift+Tab to go back.</p>`,

      [{ heading: "Exercise 8.1 — Create a table with 4 columns and 6 rows.", items: [
          "Column 1: Name",
          "Column 2: Age",
          "Column 3: Class",
          "Column 4: Score",
          "Fill in 6 rows of data."
        ]},
       { heading: "Exercise 8.2 — Answer.", items: [
          "How do you insert a table?",
          "What are tables used for?",
          "How do you move to the next cell?"
        ]},
       { heading: "Exercise 8.3 — Make a class table.", items: [
          "Create a table of 5 friends with their favourite foods."
        ]}],

      `<p>Any correct table with proper rows and columns.</p>`,

      [{ q: "How do you insert a table?", a: ["insert then table", "insert menu"] },
       { q: "What are tables used for?", a: ["organising data", "any"] }]),

    D(4, "🖨️", "Printing",
      "Print documents correctly.",
      `<p class='big-emoji'>🖨️ 📄 ✅</p>
       <p><b>Printing</b> puts your document onto paper using a printer.</p>

       <h3>🖼️ Illustration — Printing Process</h3>
       <pre>
       💻 Computer
          │
          │  (sends file)
          ▼
       🖨️ Printer
          │
          │  (prints on paper)
          ▼
       📄 Paper Output
       </pre>

       <h3>🧠 How to Print</h3>
       <ol>
         <li>Click <b>File</b>.</li>
         <li>Click <b>Print</b>.</li>
         <li>Choose your printer from the list.</li>
         <li>Choose the number of copies.</li>
         <li>Choose the pages (All / Current / Range).</li>
         <li>Click Print.</li>
       </ol>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What menu do you use to print?</p>
       <p><b>Answer:</b> The <b>File</b> menu — or press <b>Ctrl + P</b>.</p>

       <h3>💡 Before Printing — Checklist</h3>
       <ul>
         <li>✅ Spell check done?</li>
         <li>✅ Correct formatting?</li>
         <li>✅ Paper in the printer?</li>
         <li>✅ Enough ink?</li>
         <li>✅ Do you really need to print? (Save paper!)</li>
       </ul>`,

      [{ heading: "Exercise 9.1 — Print a document.", items: [
          "Open your story document.",
          "Click File → Print.",
          "Choose the number of copies.",
          "Click Print."
        ]},
       { heading: "Exercise 9.2 — Answer.", items: [
          "What menu do you use to print?",
          "What is the keyboard shortcut to print?",
          "Name one thing to check before printing."
        ]},
       { heading: "Exercise 9.3 — Save paper.", items: [
          "Write 3 ways to save paper at school."
        ]}],

      `<p>Any correct print. Check the file was printed correctly.</p>`,

      [{ q: "What menu do you use to print?", a: ["file"] },
       { q: "What is the shortcut to print?", a: ["ctrl+p", "ctrl p"] },
       { q: "Name a way to save paper.", a: ["print both sides", "any"] }]),

    D(5, "🎨", "Word Poster",
      "Make a word processing poster.",
      `<p class='big-emoji'>🎨 📝 ✅</p>
       <p>Make a <b>"Word Processing"</b> poster that shows everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │     📝 WORD PROCESSING 📝            │
   ├──────────────────────────────────────┤
   │  1. CREATE      2. FORMAT            │
   │     • Open         • Bold            │
   │     • Type         • Italic          │
   │     • Save         • Underline       │
   ├──────────────────────────────────────┤
   │  3. TABLE       4. PRINT             │
   │     • Insert       • File→Print      │
   │     • Rows         • Choose copies   │
   │     • Columns      • Click Print     │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Create, Format, Table, Print</li>
         <li>At least 2 details in each section</li>
         <li>Colourful drawings</li>
         <li>Your name</li>
       </ul>`,

      [{ heading: "Exercise 10.1 — Draw and label your poster.", items: [
          "Create section",
          "Format section",
          "Table section",
          "Print section"
        ]},
       { heading: "Exercise 10.2 — Answer.", items: [
          "Name 3 formatting options.",
          "How do you print?",
          "How do you insert a table?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name 3 formatting options.", a: ["bold", "italic", "underline", "any"] },
       { q: "How do you print?", a: ["file then print", "ctrl+p"] },
       { q: "How do you insert a table?", a: ["insert then table"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — SPREADSHEETS
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Spreadsheets", days: [

    D(1, "📊", "Structure",
      "Understand rows, columns, and cells.",
      `<p class='big-emoji'>📊 📋 🔲</p>
       <p>A <b>spreadsheet</b> organises data in rows and columns.</p>

       <h3>🖼️ Illustration — Spreadsheet Grid</h3>
       <pre>
        A        B        C        D
     ┌───────┬────────┬────────┬────────┐
   1 │ Name  │ Age    │ Class  │ Score  │
     ├───────┼────────┼────────┼────────┤
   2 │ Ama   │ 10     │ 5A     │ 85     │
     ├───────┼────────┼────────┼────────┤
   3 │ Kofi  │ 11     │ 5B     │ 90     │
     ├───────┼────────┼────────┼────────┤
   4 │ Adwoa │ 10     │ 5A     │ 78     │
     └───────┴────────┴────────┴────────┘
        ↑                              ↑
     Columns (A, B, C, D)          Rows (1, 2, 3, 4)
       </pre>

       <h3>🧠 Key Terms</h3>
       <table border="1" cellpadding="6">
         <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
         <tr><td>Row</td><td>Horizontal line</td><td>Row 1, Row 2</td></tr>
         <tr><td>Column</td><td>Vertical line</td><td>Column A, Column B</td></tr>
         <tr><td>Cell</td><td>Box where row + column meet</td><td>A1, B3, C5</td></tr>
         <tr><td>Cell address</td><td>Name of a cell</td><td>B2 (Column B, Row 2)</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What cell is at Column C, Row 3?</p>
       <p><b>Answer:</b> <b>C3</b> — Column C, Row 3.</p>

       <h3>💡 Fun Fact</h3>
       <p>A single Excel spreadsheet can have over 17 billion cells!</p>`,

      [{ heading: "Exercise 11.1 — Label a spreadsheet.", items: [
          "Draw a grid with 3 columns and 4 rows.",
          "Label the columns A, B, C.",
          "Label the rows 1, 2, 3, 4.",
          "Colour one cell and write its address."
        ]},
       { heading: "Exercise 11.2 — Answer.", items: [
          "What is a cell?",
          "How are rows labeled?",
          "How are columns labeled?",
          "What cell is at Column B, Row 3?"
        ]},
       { heading: "Exercise 11.3 — Write cell addresses.", items: [
          "Column A, Row 1 = ___",
          "Column D, Row 5 = ___",
          "Column C, Row 10 = ___"
        ]}],

      `<p><b>11.3:</b> 1. A1 2. D5 3. C10</p>`,

      [{ q: "What is the intersection of a row and column called?", a: ["cell"] },
       { q: "How are columns labeled?", a: ["letters", "any"] },
       { q: "What cell is at Column B, Row 3?", a: ["b3"] }]),

    D(2, "🧮", "Formulas",
      "Learn basic spreadsheet formulas.",
      `<p class='big-emoji'>🧮 📊 ✖️</p>
       <p><b>Formulas</b> do calculations in a spreadsheet. Every formula starts with <b>=</b>.</p>

       <h3>🖼️ Illustration — How a Formula Works</h3>
       <pre>
   A      B       C
   ┌──────┬──────┬─────────────┐
  1│  5   │  3   │ =A1+B1 → 8  │
   └──────┴──────┴─────────────┘

   A      B       C
   ┌──────┬──────┬─────────────┐
  1│ 10   │  4   │ =A1-B1 → 6  │
   └──────┴──────┴─────────────┘

   A      B       C
   ┌──────┬──────┬─────────────┐
  1│  5   │  6   │ =A1*B1 → 30 │
   └──────┴──────┴─────────────┘
       </pre>

       <h3>🧠 Common Formulas</h3>
       <table border="1" cellpadding="6">
         <tr><th>Formula</th><th>What it Does</th><th>Example</th></tr>
         <tr><td>=A1+B1</td><td>Adds</td><td>=5+3 gives 8</td></tr>
         <tr><td>=A1-B1</td><td>Subtracts</td><td>=10-4 gives 6</td></tr>
         <tr><td>=A1*B1</td><td>Multiplies</td><td>=5*6 gives 30</td></tr>
         <tr><td>=A1/B1</td><td>Divides</td><td>=20/4 gives 5</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you write 'add A1 and B1'?</p>
       <p><b>Answer:</b> <b>=A1+B1</b></p>

       <h3>💡 Remember</h3>
       <p>Always start with <b>=</b>. Without it, the computer thinks it's just text!</p>`,

      [{ heading: "Exercise 12.1 — Write formulas.", items: [
          "Add A1 and B1 → ___________",
          "Subtract B1 from A1 → ___________",
          "Multiply A1 by B1 → ___________",
          "Divide A1 by B1 → ___________"
        ]},
       { heading: "Exercise 12.2 — Answer.", items: [
          "What does a formula start with?",
          "What does =A1-B1 do?",
          "If A1=10 and B1=5, what is =A1+B1?"
        ]},
       { heading: "Exercise 12.3 — Calculate.", items: [
          "A1=20, B1=4, =A1/B1 = ___",
          "A1=7, B1=3, =A1*B1 = ___"
        ]}],

      `<p><b>12.1:</b> 1. =A1+B1 2. =A1-B1 3. =A1*B1 4. =A1/B1</p>
       <p><b>12.3:</b> 1. 5 2. 21</p>`,

      [{ q: "How do you write 'add A1 and B1'?", a: ["=a1+b1", "=A1+B1"] },
       { q: "What does a formula start with?", a: ["=", "equals"] },
       { q: "If A1=10 and B1=5, what is =A1+B1?", a: ["15"] }]),

    D(3, "⚙️", "Functions",
      "Learn spreadsheet functions like SUM.",
      `<p class='big-emoji'>⚙️ 📊 ➕</p>
       <p><b>Functions</b> are ready-made formulas. They save time!</p>

       <h3>🖼️ Illustration — SUM Function</h3>
       <pre>
   A
   ┌──────┐
  1│  5   │
   ├──────┤
  2│  10  │
   ├──────┤
  3│  15  │
   ├──────┤
  4│  20  │
   ├──────┤
  5│  25  │
   └──────┘
       │
       │  =SUM(A1:A5)
       ▼
      75
       </pre>

       <h3>🧠 Common Functions</h3>
       <table border="1" cellpadding="6">
         <tr><th>Function</th><th>What it Does</th><th>Example</th></tr>
         <tr><td>=SUM(A1:A5)</td><td>Adds a range</td><td>Adds A1 to A5</td></tr>
         <tr><td>=AVERAGE(A1:A5)</td><td>Finds the average</td><td>Mean of A1 to A5</td></tr>
         <tr><td>=MAX(A1:A5)</td><td>Finds the largest</td><td>Biggest number</td></tr>
         <tr><td>=MIN(A1:A5)</td><td>Finds the smallest</td><td>Smallest number</td></tr>
         <tr><td>=COUNT(A1:A5)</td><td>Counts the numbers</td><td>How many numbers</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does =SUM(A1:A5) do?</p>
       <p><b>Answer:</b> It <b>adds all numbers</b> from A1 to A5.</p>

       <h3>💡 Pro Tip</h3>
       <p>The colon (:) means "from… to". So A1:A5 means "all cells from A1 to A5".</p>`,

      [{ heading: "Exercise 13.1 — Write the formula.", items: [
          "Add A1 to A5 → ___________",
          "Average of B1 to B10 → ___________",
          "Largest in C1 to C20 → ___________",
          "Smallest in D1 to D8 → ___________"
        ]},
       { heading: "Exercise 13.2 — Answer.", items: [
          "What does SUM do?",
          "What does AVERAGE do?",
          "What does MAX do?",
          "What does the colon (:) mean in a formula?"
        ]},
       { heading: "Exercise 13.3 — Calculate.", items: [
          "A1=5, A2=10, A3=15. What is =SUM(A1:A3)?",
          "B1=10, B2=20, B3=30. What is =AVERAGE(B1:B3)?"
        ]}],

      `<p><b>13.1:</b> 1. =SUM(A1:A5) 2. =AVERAGE(B1:B10) 3. =MAX(C1:C20) 4. =MIN(D1:D8)</p>
       <p><b>13.3:</b> 1. 30 2. 20</p>`,

      [{ q: "What does SUM do?", a: ["adds", "sums", "add"] },
       { q: "What does AVERAGE do?", a: ["finds average", "any"] },
       { q: "What does the colon mean?", a: ["from to", "range", "any"] }]),

    D(4, "📈", "Charts",
      "Create charts to show data visually.",
      `<p class='big-emoji'>📈 📊 🥧</p>
       <p><b>Charts</b> show data visually. They help us understand numbers quickly.</p>

       <h3>🖼️ Illustration — Chart Types</h3>
       <pre>
   BAR CHART            PIE CHART           LINE CHART
   ┌────────────┐      ┌─────────┐        ┌────────────┐
   │ █          │      │   ○     │        │      ╱     │
   │ █  █       │      │ ○   ○   │        │    ╱       │
   │ █  █  █    │      │  ○ ○    │        │  ╱         │
   │ █  █  █  █ │      │   ○     │        │╱           │
   └────────────┘      └─────────┘        └────────────┘
   Compare             Parts of            Change over
   amounts             a whole             time
       </pre>

       <h3>🧠 When to Use Each Chart</h3>
       <table border="1" cellpadding="6">
         <tr><th>Chart</th><th>Best For</th><th>Example</th></tr>
         <tr><td>📊 Bar</td><td>Comparing amounts</td><td>Class scores</td></tr>
         <tr><td>🥧 Pie</td><td>Parts of a whole</td><td>Time spent on activities</td></tr>
         <tr><td>📈 Line</td><td>Change over time</td><td>Temperature over a week</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a chart?</p>
       <p><b>Answer:</b> A <b>visual display of data</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>The first pie chart was drawn in 1801 by William Playfair!</p>`,

      [{ heading: "Exercise 14.1 — Create a bar chart of the values 5, 10, 15, 20.", items: [
          "Enter the values in cells A1:A4.",
          "Select the cells.",
          "Click Insert → Chart.",
          "Choose Bar Chart."
        ]},
       { heading: "Exercise 14.2 — Answer.", items: [
          "What is a chart?",
          "Name 3 types of charts.",
          "When do you use a pie chart?",
          "When do you use a line chart?"
        ]},
       { heading: "Exercise 14.3 — Draw.", items: [
          "Draw a bar chart showing favourite fruits of 5 friends."
        ]}],

      `<p>Any correct chart.</p>`,

      [{ q: "What is a chart?", a: ["visual display of data", "graph", "any"] },
       { q: "Name a chart type.", a: ["bar", "pie", "line", "any"] },
       { q: "When do you use a pie chart?", a: ["parts of a whole", "any"] }]),

    D(5, "🎨", "Spreadsheet Poster",
      "Make a spreadsheet poster.",
      `<p class='big-emoji'>🎨 📊 📈</p>
       <p>Make a <b>"Spreadsheets"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │       📊 SPREADSHEETS 📊              │
   ├──────────────────────────────────────┤
   │  1. STRUCTURE      2. FORMULAS       │
   │  ┌───┬───┬───┐     =A1+B1            │
   │  │ A │ B │ C │     =A1-B1            │
   │  ├───┼───┼───┤     =A1*B1            │
   │  │ 1 │ 2 │ 3 │     =A1/B1            │
   │  └───┴───┴───┘                       │
   ├──────────────────────────────────────┤
   │  3. FUNCTIONS      4. CHARTS         │
   │  =SUM(A1:A5)       📊 Bar            │
   │  =AVERAGE()        🥧 Pie            │
   │  =MAX()            📈 Line           │
   │  =MIN()                              │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Structure, Formulas, Functions, Charts</li>
         <li>At least 2 examples in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 15.1 — Draw and label your poster.", items: [
          "Structure (rows, columns, cells)",
          "Formulas (at least 2)",
          "Functions (at least 2)",
          "Charts (at least 2 types)"
        ]},
       { heading: "Exercise 15.2 — Answer.", items: [
          "What does a formula start with?",
          "What is a cell?",
          "What does SUM do?",
          "Name a chart type."
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "What does a formula start with?", a: ["=", "equals"] },
       { q: "What is a cell?", a: ["row and column meet", "any"] },
       { q: "What does SUM do?", a: ["adds", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Digital Literacy",
      "Review hardware, software, OS, networks.",
      `<p class='big-emoji'>🔁 💻 🌐</p>

       <h3>🖼️ Summary Mind Map</h3>
       <pre>
                        ┌─────────────┐
                        │  COMPUTING  │
                        └──────┬──────┘
                ┌──────────────┼──────────────┐
                │              │              │
           ┌────▼───┐     ┌───▼────┐    ┌────▼────┐
           │HARDWARE│     │SOFTWARE│    │NETWORKS │
           └────┬───┘     └───┬────┘    └────┬────┘
             Monitor       Windows        LAN
             Keyboard      Word           WAN
             Mouse         Chrome         Wi-Fi
             CPU           Paint          PAN
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Is Windows hardware or software?</p>
       <p><b>Answer:</b> <b>Software</b>.</p>`,

      [{ heading: "Exercise 16.1 — Classify.", items: [
          "monitor", "Windows", "keyboard", "Linux", "printer", "Chrome", "mouse", "iOS"
        ]},
       { heading: "Exercise 16.2 — Answer.", items: [
          "What is hardware?",
          "What is software?",
          "What does an OS do?",
          "What does a network do?",
          "What does LAN stand for?"
        ]}],

      `<p><b>16.1:</b> 1. H 2. S 3. H 4. S 5. H 6. S 7. H 8. S</p>`,

      [{ q: "Is Windows hardware or software?", a: ["software"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] },
       { q: "What does LAN stand for?", a: ["local area network"] }]),

    D(2, "🔁", "Review Word Processing",
      "Review document creation and formatting.",
      `<p class='big-emoji'>🔁 📝 🎨</p>

       <h3>🖼️ Formatting Summary</h3>
       <pre>
   B  Bold       →  Important words
   I  Italic     →  Titles, emphasis
   U  Underline  →  Headings
   Aa Font       →  Arial, Times, etc.
   🎨 Colour     →  Red, blue, etc.
   📊 Table      →  Rows + Columns
   🖨️ Print      →  File → Print
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does bold do?</p>
       <p><b>Answer:</b> Makes text <b>darker and thicker</b>.</p>`,

      [{ heading: "Exercise 17.1 — List 5 formatting options.", items: [
          "1. ___________", "2. ___________", "3. ___________", "4. ___________", "5. ___________"
        ]},
       { heading: "Exercise 17.2 — Answer.", items: [
          "What does bold do?",
          "What does italic do?",
          "How do you insert a table?",
          "How do you print?"
        ]}],

      `<p>Any 5 correct options.</p>`,

      [{ q: "What does bold do?", a: ["makes text darker", "any"] },
       { q: "How do you print?", a: ["file then print", "any"] }]),

    D(3, "🔁", "Review Spreadsheets",
      "Review spreadsheet skills.",
      `<p class='big-emoji'>🔁 📊 🧮</p>

       <h3>🖼️ Formula Summary</h3>
       <pre>
   =A1+B1           Add
   =A1-B1           Subtract
   =A1*B1           Multiply
   =A1/B1           Divide
   =SUM(A1:A5)      Add range
   =AVERAGE(A1:A5)  Average
   =MAX(A1:A5)      Largest
   =MIN(A1:A5)      Smallest
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does =SUM(A1:A5) do?</p>
       <p><b>Answer:</b> Adds all numbers from A1 to A5.</p>`,

      [{ heading: "Exercise 18.1 — Write the formula for adding A1:A10.", items: [] },
       { heading: "Exercise 18.2 — Answer.", items: [
          "What is a cell?",
          "What does SUM do?",
          "What does AVERAGE do?",
          "Name 3 types of charts.",
          "What does the colon (:) mean?"
        ]}],

      `<p>=SUM(A1:A10)</p>`,

      [{ q: "Write a formula to add A1 and B1.", a: ["=a1+b1", "=A1+B1"] },
       { q: "What is a cell?", a: ["row and column meet", "any"] },
       { q: "What does the colon mean?", a: ["from to", "range", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test on Month 1.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What does an OS do?</li>
         <li>What does a network do?</li>
         <li>What does italic do?</li>
         <li>How do you insert a table?</li>
         <li>What is a cell?</li>
         <li>What does a formula start with?</li>
         <li>What does SUM do?</li>
         <li>Name a type of chart.</li>
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>8–10 correct = ⭐⭐⭐ Excellent</li>
         <li>5–7 correct = ⭐⭐ Good</li>
         <li>0–4 correct = ⭐ Needs revision</li>
       </ul>`,

      [{ heading: "Exercise 19.1 — Answer 10 questions.", items: [
          "Write your answers in your exercise book."
        ]}],

      `<p>Any correct answers. Discuss mistakes with a parent or teacher.</p>`,

      [{ q: "What is a cell?", a: ["intersection of row and column", "any"] },
       { q: "What does SUM do?", a: ["adds", "any"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>
       <p>You have completed Month 1 of Grade 5 Computing!</p>

       <h3>🎊 What to Do</h3>
       <ul>
         <li>🎨 Show your 3 posters to your family.</li>
         <li>📝 Demonstrate one skill (typing, formatting, or a formula).</li>
         <li>⭐ Give yourself a big star!</li>
         <li>🎯 Set a goal for next month.</li>
       </ul>

       <h3>💭 Reflection</h3>
       <ul>
         <li>What did you enjoy most this month?</li>
         <li>What was the hardest thing?</li>
         <li>What do you want to get better at?</li>
       </ul>`,

      [{ heading: "Exercise 20.1 — Show posters.", items: [
          "Digital Literacy Poster",
          "Word Poster",
          "Spreadsheet Poster"
        ]},
       { heading: "Exercise 20.2 — Reflect.", items: [
          "My favourite topic: ___",
          "My hardest topic: ___",
          "My goal for next month: ___"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What do you want to get better at?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — ALGORITHMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Algorithms", days: [

    D(1, "📋", "Definition",
      "Understand what an algorithm is.",
      `<p class='big-emoji'>📋 🔢 🧠</p>
       <p>An <b>algorithm</b> is a precise sequence of steps to solve a problem.</p>

       <h3>🖼️ Illustration — Everyday Algorithms</h3>
       <pre>
   🍵 MAKING TEA            🦷 BRUSHING TEETH
   ┌─────────────────┐      ┌─────────────────┐
   │ 1. Boil water   │      │ 1. Get brush    │
   │ 2. Add tea bag  │      │ 2. Add paste    │
   │ 3. Pour water   │      │ 3. Brush 2 min  │
   │ 4. Add milk     │      │ 4. Rinse        │
   │ 5. Stir         │      │ 5. Dry          │
   └─────────────────┘      └─────────────────┘

   👟 TYING SHOES
   ┌─────────────────┐
   │ 1. Cross laces  │
   │ 2. Loop one     │
   │ 3. Loop other   │
   │ 4. Pull through │
   │ 5. Tighten      │
   └─────────────────┘
       </pre>

       <h3>🧠 Key Rules of Algorithms</h3>
       <table border="1" cellpadding="6">
         <tr><th>Rule</th><th>Meaning</th></tr>
         <tr><td>Clear</td><td>Each step must be easy to understand</td></tr>
         <tr><td>Ordered</td><td>Steps must be in the right order</td></tr>
         <tr><td>Finite</td><td>Must have a start and an end</td></tr>
         <tr><td>Effective</td><td>Must solve the problem</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b> to solve a problem, in the right order.</p>

       <h3>💡 Fun Fact</h3>
       <p>The word "algorithm" comes from the name of a Persian mathematician, Al-Khwarizmi (about 800 AD)!</p>`,

      [{ heading: "Exercise 21.1 — Say.", items: [
          "What is an algorithm?",
          "Give an example of an algorithm.",
          "Why do algorithms need order?",
          "Name 3 rules of algorithms."
        ]},
       { heading: "Exercise 21.2 — Write an algorithm for brushing teeth.", items: [
          "1. ___________", "2. ___________", "3. ___________", "4. ___________", "5. ___________"
        ]},
       { heading: "Exercise 21.3 — Write an algorithm for making a sandwich.", items: [
          "1. ___________", "2. ___________", "3. ___________", "4. ___________"
        ]}],

      `<p>Any correct.</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "Give an example.", a: ["making tea", "brushing teeth", "any"] },
       { q: "Why order matters?", a: ["so it works", "any"] }]),

    D(2, "📋", "Sequencing",
      "Order steps correctly in an algorithm.",
      `<p class='big-emoji'>📋 1️⃣2️⃣3️⃣</p>
       <p><b>Sequencing</b> means putting steps in the correct order.</p>

       <h3>🖼️ Illustration — Wrong vs Right Order</h3>
       <pre>
   ❌ WRONG ORDER              ✅ RIGHT ORDER
   ┌─────────────────┐         ┌─────────────────┐
   │ 1. Add milk     │         │ 1. Boil water   │
   │ 2. Boil water   │         │ 2. Add tea bag  │
   │ 3. Add tea bag  │         │ 3. Pour water   │
   │ 4. Pour water   │         │ 4. Add milk     │
   └─────────────────┘         └─────────────────┘
   Result: Cold tea!            Result: Delicious tea!
       </pre>

       <h3>🧠 Why Order Matters</h3>
       <ul>
         <li>Wrong order = wrong result</li>
         <li>Steps must follow a logical sequence</li>
         <li>Some steps depend on earlier steps</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is step 1 of making tea?</p>
       <p><b>Answer:</b> <b>Boil water</b> — because you need hot water first.</p>`,

      [{ heading: "Exercise 22.1 — Order the steps to make a sandwich.", items: [
          "Get bread", "Add filling", "Close sandwich", "Cut"
        ]},
       { heading: "Exercise 22.2 — Order the steps for washing hands.", items: [
          "Wet hands", "Add soap", "Rinse", "Dry"
        ]},
       { heading: "Exercise 22.3 — Fix this wrong order.", items: [
          "Wrong: Brush, Rinse, Add toothpaste",
          "Write the correct order:"
        ]}],

      `<p><b>22.1:</b> 1. Get bread 2. Add filling 3. Close sandwich 4. Cut</p>
       <p><b>22.2:</b> 1. Wet hands 2. Add soap 3. Rinse 4. Dry</p>
       <p><b>22.3:</b> 1. Add toothpaste 2. Brush 3. Rinse</p>`,

      [{ q: "What is step 1 of making a sandwich?", a: ["get bread", "any"] },
       { q: "Why does order matter?", a: ["so it works", "any"] },
       { q: "What happens with wrong order?", a: ["wrong result", "any"] }]),

    D(3, "📊", "Flowcharts",
      "Draw flowcharts to show algorithms visually.",
      `<p class='big-emoji'>📊 🔷 ➡️</p>
       <p>A <b>flowchart</b> is a diagram that shows steps using shapes and arrows.</p>

       <h3>🖼️ Illustration — Flowchart Symbols</h3>
       <pre>
   ╔═══════════════════╗
   ║ SHAPE    MEANING  ║
   ╠═══════════════════╣
   ║   ___             ║
   ║  (   )  = START   ║
   ║   ---    or END   ║
   ╠═══════════════════╣
   ║  ┌─────┐          ║
   ║  │     │ = PROCESS║
   ║  └─────┘          ║
   ╠═══════════════════╣
   ║    /\             ║
   ║   /  \  = DECISION║
   ║   \  /            ║
   ║    \/             ║
   ╠═══════════════════╣
   ║   ─────▶ = FLOW   ║
   ╚═══════════════════╝
       </pre>

       <h3>🖼️ Example Flowchart — Is It Raining?</h3>
       <pre>
       ( START )
           │
           ▼
       ┌─────────┐
       │ Look out│
       │ window  │
       └────┬────┘
            │
            ▼
         < Raining? >
        /           \
       YES          NO
        │            │
        ▼            ▼
   ┌─────────┐  ┌─────────┐
   │ Take    │  │ Go      │
   │ umbrella│  │ outside │
   └────┬────┘  └────┬────┘
        │            │
        └─────┬──────┘
              ▼
        ( END )
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What shape is a decision in a flowchart?</p>
       <p><b>Answer:</b> A <b>diamond</b> (♦️).</p>`,

      [{ heading: "Exercise 23.1 — Draw the symbols.", items: [
          "Draw: Start (oval)",
          "Draw: Process (rectangle)",
          "Draw: Decision (diamond)",
          "Draw: Arrow (→)"
        ]},
       { heading: "Exercise 23.2 — Draw a flowchart.", items: [
          "Draw a flowchart: 'If hungry, eat; if not, play.'"
        ]},
       { heading: "Exercise 23.3 — Answer.", items: [
          "What is a flowchart?",
          "What shape is a decision?",
          "What shape is Start?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What shape is a decision?", a: ["diamond", "any"] },
       { q: "What is a flowchart?", a: ["diagram of steps", "any"] },
       { q: "What shape is Start?", a: ["oval", "any"] }]),

    D(4, "🧩", "Pseudocode",
      "Write pseudocode for algorithms.",
      `<p class='big-emoji'>🧩 📝 💻</p>
       <p><b>Pseudocode</b> is like code but in plain English. It helps plan before writing real code.</p>

       <h3>🖼️ Illustration — Pseudocode Examples</h3>
       <pre>
   EXAMPLE 1: Print 1 to 10
   ┌───────────────────────────┐
   │ FOR i = 1 TO 10           │
   │     PRINT i               │
   │ END FOR                   │
   └───────────────────────────┘

   EXAMPLE 2: Add 2 numbers
   ┌───────────────────────────┐
   │ READ a                    │
   │ READ b                    │
   │ sum = a + b               │
   │ PRINT sum                 │
   └───────────────────────────┘

   EXAMPLE 3: Even or Odd
   ┌───────────────────────────┐
   │ READ number               │
   │ IF number MOD 2 = 0 THEN  │
   │     PRINT "Even"          │
   │ ELSE                      │
   │     PRINT "Odd"           │
   │ END IF                    │
   └───────────────────────────┘
       </pre>

       <h3>🧠 Pseudocode Keywords</h3>
       <table border="1" cellpadding="6">
         <tr><th>Keyword</th><th>Meaning</th></tr>
         <tr><td>READ</td><td>Get input from user</td></tr>
         <tr><td>PRINT</td><td>Show output</td></tr>
         <tr><td>IF…THEN…ELSE</td><td>Make a decision</td></tr>
         <tr><td>FOR…TO…</td><td>Repeat a set number of times</td></tr>
         <tr><td>WHILE…DO</td><td>Repeat while condition is true</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Write pseudocode to add 2 numbers.</p>
       <p><b>Answer:</b></p>
       <pre>
   READ a
   READ b
   sum = a + b
   PRINT sum
       </pre>

       <h3>💡 Why Pseudocode?</h3>
       <ul>
         <li>Plan before coding</li>
         <li>Focus on logic, not syntax</li>
         <li>Easy to share with others</li>
       </ul>`,

      [{ heading: "Exercise 24.1 — Write pseudocode to add 2 numbers.", items: [] },
       { heading: "Exercise 24.2 — Write pseudocode to print 1 to 10.", items: [] },
       { heading: "Exercise 24.3 — Write pseudocode to find the largest of two numbers.", items: [] }],

      `<p><b>24.1:</b> READ a, READ b, sum = a+b, PRINT sum</p>
       <p><b>24.2:</b> FOR i = 1 TO 10: PRINT i</p>
       <p><b>24.3:</b> READ a, READ b, IF a &gt; b THEN PRINT a ELSE PRINT b</p>`,

      [{ q: "What is pseudocode?", a: ["plain English steps", "any"] },
       { q: "What keyword gets input?", a: ["read"] },
       { q: "What keyword shows output?", a: ["print"] }]),

    D(5, "🎨", "Algorithm Poster",
      "Make an algorithm poster.",
      `<p class='big-emoji'>🎨 📋 📊</p>
       <p>Make an <b>"Algorithms"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │         📋 ALGORITHMS 📋              │
   ├──────────────────────────────────────┤
   │  1. DEFINITION     2. SEQUENCING     │
   │  "A set of steps   Step 1 → Step 2  │
   │   to solve a        → Step 3        │
   │   problem"                           │
   ├──────────────────────────────────────┤
   │  3. FLOWCHART      4. PSEUDOCODE     │
   │   ( START )         READ a           │
   │      │              READ b           │
   │      ▼              sum = a+b        │
   │  ┌──────┐           PRINT sum        │
   │  │ Step │                            │
   │  └──────┘                            │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Definition, Sequencing, Flowchart, Pseudocode</li>
         <li>At least 1 example in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 25.1 — Draw and label your poster.", items: [
          "Definition of algorithm",
          "Sequencing example",
          "Flowchart example",
          "Pseudocode example"
        ]},
       { heading: "Exercise 25.2 — Answer.", items: [
          "What is an algorithm?",
          "What shape is Start?",
          "What is pseudocode?",
          "Name 3 keywords in pseudocode."
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "What shape is Start?", a: ["oval", "any"] },
       { q: "What is pseudocode?", a: ["plain English steps", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — PROGRAMMING
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Programming", days: [

    D(1, "💻", "Variables",
      "Learn about variables and data types.",
      `<p class='big-emoji'>💻 📦 🏷️</p>
       <p>A <b>variable</b> is like a labelled box that stores data.</p>

       <h3>🖼️ Illustration — Variables as Boxes</h3>
       <pre>
   ┌────────────┐  ┌────────────┐  ┌────────────┐
   │ name       │  │ age        │  │ isHappy    │
   │  "Ama"     │  │   10       │  │  true      │
   └────────────┘  └────────────┘  └────────────┘
   (Text)           (Number)        (Boolean)
       </pre>

       <h3>🧠 Data Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Example</th><th>Used For</th></tr>
         <tr><td>Text (String)</td><td>"Ama", "Accra"</td><td>Names, words</td></tr>
         <tr><td>Number (Integer)</td><td>10, 25, -3</td><td>Counting</td></tr>
         <tr><td>Decimal (Float)</td><td>3.14, 0.5</td><td>Measurements</td></tr>
         <tr><td>Boolean</td><td>true, false</td><td>Yes/No, On/Off</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a variable?</p>
       <p><b>Answer:</b> A variable is a <b>named box</b> that stores data. Example: <code>name = "Ama"</code></p>

       <h3>💡 Fun Fact</h3>
       <p>The word "variable" means "can change". A variable's value can be updated!</p>`,

      [{ heading: "Exercise 26.1 — Say.", items: [
          "What is a variable?",
          "Name 3 data types.",
          "Give an example of each."
        ]},
       { heading: "Exercise 26.2 — Write variables.", items: [
          "Store your name in a variable: ___",
          "Store your age in a variable: ___",
          "Store if you are happy: ___",
          "Store your favourite number: ___"
        ]},
       { heading: "Exercise 26.3 — Match the type.", items: [
          '"Kofi" → ___',
          "15 → ___",
          "true → ___",
          "3.5 → ___"
        ]}],

      `<p><b>26.3:</b> 1. Text 2. Number 3. Boolean 4. Decimal</p>`,

      [{ q: "What is a variable?", a: ["stores data", "any"] },
       { q: "Name a data type.", a: ["number", "text", "boolean", "any"] },
       { q: "What type is 'true'?", a: ["boolean"] }]),

    D(2, "🔁", "Loops",
      "Learn about loops in programming.",
      `<p class='big-emoji'>🔁 🔄 ♻️</p>
       <p><b>Loops</b> repeat instructions, saving time and code.</p>

       <h3>🖼️ Illustration — Loop Types</h3>
       <pre>
   FOR LOOP              WHILE LOOP           DO-WHILE LOOP
   ┌──────────────┐      ┌──────────────┐     ┌──────────────┐
   │ FOR i=1 TO 5 │      │ WHILE x < 5  │     │ DO           │
   │   PRINT i    │      │   x = x + 1  │     │   PRINT x    │
   │ END FOR      │      │ END WHILE    │     │   x = x + 1  │
   └──────────────┘      └──────────────┘     │ WHILE x < 5  │
   Runs 5 times          Runs until x ≥ 5     └──────────────┘
         </pre>

       <h3>🖼️ For Loop Example — Print 1 to 5</h3>
       <pre>
   FOR i = 1 TO 5:
       PRINT i

   OUTPUT:
   1
   2
   3
   4
   5
       </pre>

       <h3>🧠 When to Use Each Loop</h3>
       <table border="1" cellpadding="6">
         <tr><th>Loop</th><th>Use When</th><th>Example</th></tr>
         <tr><td>FOR</td><td>You know how many times</td><td>Print 1 to 10</td></tr>
         <tr><td>WHILE</td><td>You don't know how many times</td><td>Keep asking until correct</td></tr>
         <tr><td>DO-WHILE</td><td>Runs at least once</td><td>Show menu, then check</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does a loop do?</p>
       <p><b>Answer:</b> A loop <b>repeats</b> instructions.</p>

       <h3>💡 Fun Fact</h3>
       <p>Without loops, printing 1 to 100 would need 100 lines of code. With a loop, only 3!</p>`,

      [{ heading: "Exercise 27.1 — Say.", items: [
          "What does a FOR loop do?",
          "What does a WHILE loop do?",
          "When do you use a FOR loop?",
          "When do you use a WHILE loop?"
        ]},
       { heading: "Exercise 27.2 — Trace the loop.", items: [
          "FOR i = 1 TO 3: PRINT i",
          "What does it print? ___",
          "FOR i = 1 TO 5: PRINT i*i",
          "What does it print? ___"
        ]},
       { heading: "Exercise 27.3 — Write a loop.", items: [
          "Write a loop to print 1 to 10.",
          "Write a loop to print 'Hello' 5 times."
        ]}],

      `<p><b>27.2:</b> 1. 1, 2, 3. 2. 1, 4, 9, 16, 25.</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] },
       { q: "When do you use a FOR loop?", a: ["when you know how many times", "any"] }]),

    D(3, "❓", "Conditions",
      "Learn about if-then and if-else conditions.",
      `<p class='big-emoji'>❓ ➡️ 🔀</p>
       <p><b>Conditions</b> let programs make decisions.</p>

       <h3>🖼️ Illustration — If-Then vs If-Else</h3>
       <pre>
   IF-THEN                        IF-ELSE
   ┌──────────────────────┐       ┌──────────────────────┐
   │ IF raining THEN      │       │ IF raining THEN      │
   │     take umbrella    │       │     take umbrella    │
   │ END IF               │       │ ELSE                 │
   └──────────────────────┘       │     wear sunglasses  │
   If NOT raining,                │ END IF               │
   nothing happens                └──────────────────────┘
                                   Always does something!
       </pre>

       <h3>🖼️ Comparison Operators</h3>
       <table border="1" cellpadding="6">
         <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
         <tr><td>=</td><td>Equal to</td><td>x = 5</td></tr>
         <tr><td>&lt;</td><td>Less than</td><td>x &lt; 5</td></tr>
         <tr><td>&gt;</td><td>Greater than</td><td>x &gt; 5</td></tr>
         <tr><td>&lt;=</td><td>Less or equal</td><td>x &lt;= 5</td></tr>
         <tr><td>&gt;=</td><td>Greater or equal</td><td>x &gt;= 5</td></tr>
         <tr><td>!=</td><td>Not equal</td><td>x != 5</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does if…then do?</p>
       <p><b>Answer:</b> If the condition is <b>true</b>, it does something. If false, nothing happens.</p>

       <h3>💡 Example in Real Life</h3>
       <ul>
         <li>IF hungry THEN eat</li>
         <li>IF tired THEN sleep ELSE study</li>
         <li>IF score &gt;= 50 THEN pass ELSE fail</li>
       </ul>`,

      [{ heading: "Exercise 28.1 — Say.", items: [
          "What does if…then do?",
          "What does if…else do?",
          "Give an example of each."
        ]},
       { heading: "Exercise 28.2 — Write conditions.", items: [
          "IF raining THEN ___",
          "IF hungry THEN ___ ELSE ___",
          "IF score >= 50 THEN ___ ELSE ___"
        ]},
       { heading: "Exercise 28.3 — Trace.", items: [
          "x = 5; IF x > 3 THEN PRINT 'big'",
          "What does it print? ___",
          "x = 2; IF x > 3 THEN PRINT 'big' ELSE PRINT 'small'",
          "What does it print? ___"
        ]}],

      `<p><b>28.3:</b> 1. big 2. small</p>`,

      [{ q: "What does if…then do?", a: ["checks a condition", "any"] },
       { q: "What does if…else do?", a: ["gives two options", "any"] }]),

    D(4, "🧩", "Simple Program",
      "Write a simple program using variables, loops, and conditions.",
      `<p class='big-emoji'>🧩 💻 🎯</p>
       <p>Now we combine everything: variables, loops, and conditions!</p>

       <h3>🖼️ Example Program — Print 1 to 10</h3>
       <pre>
   FOR i = 1 TO 10:
       PRINT i

   OUTPUT:
   1 2 3 4 5 6 7 8 9 10
       </pre>

       <h3>🖼️ Example Program — Check if Big or Small</h3>
       <pre>
   READ number
   IF number > 5 THEN
       PRINT "big"
   ELSE
       PRINT "small"
   END IF

   INPUT: 7     OUTPUT: big
   INPUT: 3     OUTPUT: small
       </pre>

       <h3>🖼️ Example Program — Add 2 Numbers</h3>
       <pre>
   READ a
   READ b
   sum = a + b
   PRINT sum

   INPUT: 5, 3    OUTPUT: 8
       </pre>

       <h3>🖼️ Example Program — Even Numbers 1 to 10</h3>
       <pre>
   FOR i = 1 TO 10:
       IF i MOD 2 = 0 THEN
           PRINT i
       END IF

   OUTPUT: 2 4 6 8 10
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does 'print' do?</p>
       <p><b>Answer:</b> Shows text on the screen.</p>

       <h3>💡 Try This!</h3>
       <p>Write a program that asks for your age and prints "You are ___ years old".</p>`,

      [{ heading: "Exercise 29.1 — Write programs.", items: [
          "Program 1: Print 1 to 10",
          "Program 2: If number > 5, print 'big' else print 'small'",
          "Program 3: Add 2 numbers"
        ]},
       { heading: "Exercise 29.2 — Extend.", items: [
          "Program 4: Print even numbers 1 to 20",
          "Program 5: Ask for age, print 'You are ___ years old'"
        ]},
       { heading: "Exercise 29.3 — Trace.", items: [
          "FOR i = 1 TO 5: PRINT i*i",
          "What does it print? ___"
        ]}],

      `<p>Any correct program.</p>`,

      [{ q: "What does 'print' do?", a: ["shows text", "any"] },
       { q: "How do you check if a number is even?", a: ["i mod 2 = 0", "any"] }]),

    D(5, "🎨", "Programming Poster",
      "Make a programming poster.",
      `<p class='big-emoji'>🎨 💻 📋</p>
       <p>Make a <b>"Programming"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │        💻 PROGRAMMING 💻              │
   ├──────────────────────────────────────┤
   │  1. VARIABLES      2. DATA TYPES     │
   │  📦 name = "Ama"   • Text            │
   │  📦 age = 10       • Number          │
   │  📦 happy = true   • Boolean         │
   ├──────────────────────────────────────┤
   │  3. LOOPS          4. CONDITIONS     │
   │  FOR i = 1 TO 5    IF x > 5 THEN     │
   │     PRINT i         PRINT "big"      │
   │  END FOR           ELSE              │
   │                     PRINT "small"    │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Variables, Data Types, Loops, Conditions</li>
         <li>At least 2 examples in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 30.1 — Draw and label your poster.", items: [
          "Variables (2+ examples)",
          "Data types (3 types)",
          "Loops (FOR and WHILE)",
          "Conditions (IF-THEN and IF-ELSE)"
        ]},
       { heading: "Exercise 30.2 — Answer.", items: [
          "What is a variable?",
          "Name 3 data types.",
          "What does a loop do?",
          "What does if…then do?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name 3 coding concepts.", a: ["variable", "loop", "condition", "any"] },
       { q: "What is a variable?", a: ["stores data", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — DEBUGGING
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Debugging", days: [

    D(1, "🐞", "Errors",
      "Learn about types of errors in code.",
      `<p class='big-emoji'>🐞 ⚠️ 🚫</p>
       <p>Errors in code are called <b>bugs</b>. There are 3 main types.</p>

       <h3>🖼️ Illustration — Types of Errors</h3>
       <pre>
   SYNTAX ERROR                LOGIC ERROR
   (Typos)                     (Wrong result)
   ┌──────────────────┐        ┌──────────────────┐
   │ prnt("Hello")    │        │ total = 5 - 3    │
   │ ^ should be      │        │ (want 8, wrote   │
   │   'print'        │        │  minus instead   │
   └──────────────────┘        │  of plus)        │
                               └──────────────────┘

   RUNTIME ERROR
   (Crashes while running)
   ┌──────────────────┐
   │ x = 10 / 0       │
   │ ^ Cannot divide  │
   │   by zero!       │
   └──────────────────┘
       </pre>

       <h3>🧠 Comparison Table</h3>
       <table border="1" cellpadding="6">
         <tr><th>Error</th><th>Cause</th><th>When</th></tr>
         <tr><td>Syntax</td><td>Typos, wrong code</td><td>Before running</td></tr>
         <tr><td>Logic</td><td>Wrong thinking</td><td>After running (wrong output)</td></tr>
         <tr><td>Runtime</td><td>Bad data at runtime</td><td>While running</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a syntax error?</p>
       <p><b>Answer:</b> A <b>typo</b> or wrong code that stops the program from running.</p>

       <h3>💡 Fun Fact</h3>
       <p>The word "bug" comes from 1947, when a moth was found inside a computer!</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "Name 3 types of errors.",
          "What is a syntax error?",
          "What is a logic error?",
          "What is a runtime error?"
        ]},
       { heading: "Exercise 31.2 — Identify the error type.", items: [
          'prnt("Hello") → ___',
          "total = 5 - 3 (meant +) → ___",
          "x = 10 / 0 → ___",
          'if x = 5 then… (should be ==) → ___'
        ]},
       { heading: "Exercise 31.3 — Fix the syntax.", items: [
          'prnt("Hi") → ___',
          'pint("Hi") → ___',
          'printf("Hi") → ___'
        ]}],

      `<p><b>31.2:</b> 1. Syntax 2. Logic 3. Runtime 4. Syntax</p>
       <p><b>31.3:</b> All should be <code>print</code>.</p>`,

      [{ q: "What is a syntax error?", a: ["typo", "any"] },
       { q: "Name 3 types of errors.", a: ["syntax logic runtime", "any"] },
       { q: "What is a logic error?", a: ["wrong result", "any"] }]),

    D(2, "🔧", "Testing",
      "Test your code systematically.",
      `<p class='big-emoji'>🔧 🧪 ✅</p>
       <p><b>Testing</b> means running your program with different inputs to check it works.</p>

       <h3>🖼️ Illustration — Testing Process</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │  TEST 1: Normal input                   │
   │  Input: 5, 3    Output: 8 ✅           │
   ├─────────────────────────────────────────┤
   │  TEST 2: Edge case                      │
   │  Input: 0, 0    Output: 0 ✅           │
   ├─────────────────────────────────────────┤
   │  TEST 3: Big numbers                    │
   │  Input: 999, 1  Output: 1000 ✅        │
   ├─────────────────────────────────────────┤
   │  TEST 4: Negative                       │
   │  Input: -5, 3   Output: -2 ✅          │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Testing Steps</h3>
       <ol>
         <li>Run the program.</li>
         <li>Check the output.</li>
         <li>Try small numbers.</li>
         <li>Try big numbers.</li>
         <li>Try edge cases (0, negative, empty).</li>
         <li>Note any problems.</li>
       </ol>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Why test code?</p>
       <p><b>Answer:</b> To <b>find errors</b> and make sure the program works in all situations.</p>

       <h3>💡 Test Types</h3>
       <ul>
         <li><b>Normal test</b> — typical inputs</li>
         <li><b>Edge test</b> — the boundaries (0, 1, max)</li>
         <li><b>Error test</b> — bad inputs (letters instead of numbers)</li>
       </ul>`,

      [{ heading: "Exercise 32.1 — Say.", items: [
          "Why test?",
          "How to test?",
          "What are the 3 types of tests?"
        ]},
       { heading: "Exercise 32.2 — Design tests.", items: [
          "Program: add two numbers.",
          "Test 1 (normal): ___ + ___ = ___",
          "Test 2 (zero): ___ + ___ = ___",
          "Test 3 (big): ___ + ___ = ___",
          "Test 4 (negative): ___ + ___ = ___"
        ]},
       { heading: "Exercise 32.3 — Test a program.", items: [
          "Write a simple program.",
          "Test with 4 different inputs.",
          "Record the results."
        ]}],

      `<p>Any correct.</p>`,

      [{ q: "Why test code?", a: ["to find errors", "any"] },
       { q: "Name a test type.", a: ["normal", "edge", "error", "any"] }]),

    D(3, "🧪", "Fixing",
      "Fix errors in code.",
      `<p class='big-emoji'>🧪 ✅ 🔧</p>
       <p><b>Debugging</b> is the process of finding and fixing errors.</p>

       <h3>🖼️ Illustration — Debugging Steps</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │  1. 🔍 READ the error message           │
   │       (What does it say?)               │
   ├─────────────────────────────────────────┤
   │  2. 🧐 CHECK spelling and syntax        │
   │       (Look for typos)                  │
   ├─────────────────────────────────────────┤
   │  3. 🧪 TEST small parts separately      │
   │       (Break it down)                   │
   ├─────────────────────────────────────────┤
   │  4. 🔧 FIX one thing at a time          │
   │       (Change 1 line, then test)        │
   ├─────────────────────────────────────────┤
   │  5. ✅ TEST again                       │
   │       (Did the fix work?)               │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🖼️ Example — Before and After</h3>
       <pre>
   ❌ BEFORE:               ✅ AFTER:
   prnt("Hello")            print("Hello")
   if x = 5 then            if x == 5 then
   FOR i = 1 TO             FOR i = 1 TO 10
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you fix a bug?</p>
       <p><b>Answer:</b> Read the error message, <b>check your code</b>, fix one thing, and test again.</p>

       <h3>💡 Common Bugs</h3>
       <ul>
         <li>Misspelled keywords (prnt instead of print)</li>
         <li>Missing brackets ( ) or quotes " "</li>
         <li>= instead of ==</li>
         <li>Missing colon at end of IF or FOR</li>
         <li>Off-by-one error (1 TO 10 vs 1 TO 9)</li>
       </ul>`,

      [{ heading: "Exercise 33.1 — Say.", items: [
          "How do you fix a bug?",
          "Why read error messages?",
          "What do you do after fixing?"
        ]},
       { heading: "Exercise 33.2 — Fix the bugs.", items: [
          'prnt("Hello") → ___',
          "if x = 5 then… → ___",
          "FOR i = 1 TO → ___",
          'print "Hello" (missing brackets) → ___'
        ]},
       { heading: "Exercise 33.3 — Find 3 bugs.", items: [
          "Write 3 lines of code.",
          "Each line has 1 bug.",
          "Fix each bug."
        ]}],

      `<p><b>33.2:</b> 1. print 2. == 3. add number 4. print("Hello")</p>`,

      [{ q: "How do you fix a bug?", a: ["read the error", "any"] },
       { q: "What's wrong with 'prnt'?", a: ["misspelled print", "any"] },
       { q: "What should 'if x = 5' be?", a: ["if x == 5", "any"] }]),

    D(4, "📝", "Practise",
      "Practise debugging.",
      `<p class='big-emoji'>📝 🐞 🔍</p>
       <p>Let's practise finding and fixing bugs!</p>

       <h3>🖼️ Practise Problems</h3>
       <table border="1" cellpadding="6">
         <tr><th>#</th><th>Buggy Code</th><th>Problem</th><th>Fix</th></tr>
         <tr><td>1</td><td><code>prnt("Hello")</code></td><td>Spelling</td><td><code>print</code></td></tr>
         <tr><td>2</td><td><code>if x = 5 then</code></td><td>Wrong operator</td><td><code>==</code></td></tr>
         <tr><td>3</td><td><code>FOR i = 1 TO</code></td><td>Missing number</td><td>add <code>10</code></td></tr>
         <tr><td>4</td><td><code>print "Hi"</code></td><td>Missing brackets</td><td><code>print("Hi")</code></td></tr>
         <tr><td>5</td><td><code>x = 5 + </code></td><td>Missing number</td><td>add <code>3</code></td></tr>
         <tr><td>6</td><td><code>IF x > 5 THEN</code> (no END)</td><td>Missing END IF</td><td>add <code>END IF</code></td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What's wrong with <code>if x = 5 then</code>?</p>
       <p><b>Answer:</b> Uses <b>=</b> instead of <b>==</b>. In programming, <b>=</b> means "assign" and <b>==</b> means "is equal to".</p>

       <h3>💡 Debugging Tips</h3>
       <ul>
         <li>Read the error message slowly.</li>
         <li>Look at the line the error mentions.</li>
         <li>Check spelling of keywords.</li>
         <li>Test one change at a time.</li>
         <li>If stuck, explain the problem to someone else.</li>
       </ul>`,

      [{ heading: "Exercise 34.1 — Find the error.", items: [
          'prnt("Hello")',
          "if x = 5 then…",
          "FOR i = 1 TO",
          'print "Hi"',
          "x = 5 +",
          "IF x > 5 THEN (no END)"
        ]},
       { heading: "Exercise 34.2 — Fix the errors.", items: [
          "Fix each of the 6 errors above."
        ]},
       { heading: "Exercise 34.3 — Write buggy code.", items: [
          "Write 3 lines of code with 3 different bugs.",
          "Swap with a friend and fix each other's bugs."
        ]}],

      `<p><b>34.1:</b> 1. print 2. == 3. missing number 4. missing brackets 5. missing number 6. missing END IF</p>`,

      [{ q: "What's wrong with 'prnt'?", a: ["misspelled print", "any"] },
       { q: "What's wrong with 'if x = 5'?", a: ["uses = instead of ==", "any"] }]),

    D(5, "🎨", "Debugging Poster",
      "Make a debugging poster.",
      `<p class='big-emoji'>🎨 🐞 🔧</p>
       <p>Make a <b>"Debugging"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │         🐞 DEBUGGING 🐞               │
   ├──────────────────────────────────────┤
   │  1. ERROR TYPES    2. TESTING        │
   │  • Syntax           • Normal         │
   │  • Logic            • Edge           │
   │  • Runtime          • Error          │
   ├──────────────────────────────────────┤
   │  3. FIXING TIPS    4. COMMON BUGS    │
   │  1. Read error     • prnt → print    │
   │  2. Check spelling • = → ==          │
   │  3. Test parts     • Missing ( )     │
   │  4. Fix + test     • Missing :       │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Error Types, Testing, Fixing Tips, Common Bugs</li>
         <li>At least 3 items in each section</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 35.1 — Draw and label your poster.", items: [
          "Error types (3)",
          "Testing types (3)",
          "Fixing tips (4)",
          "Common bugs (4)"
        ]},
       { heading: "Exercise 35.2 — Answer.", items: [
          "Name 3 types of errors.",
          "Why test code?",
          "How do you fix a bug?",
          "Name 2 common bugs."
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name a debugging tip.", a: ["read the error", "any"] },
       { q: "Name 3 types of errors.", a: ["syntax logic runtime", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Algorithms",
      "Review algorithms, sequencing, flowcharts, pseudocode.",
      `<p class='big-emoji'>🔁 📋 📊</p>

       <h3>🖼️ Mind Map</h3>
       <pre>
                    ┌─────────────┐
                    │ ALGORITHMS  │
                    └──────┬──────┘
             ┌─────────────┼─────────────┐
             │             │             │
        ┌────▼────┐   ┌────▼────┐   ┌────▼────┐
        │SEQUENCE │   │FLOWCHART│   │PSEUDO   │
        │Steps in │   │Shapes + │   │CODE     │
        │order    │   │arrows   │   │English  │
        └─────────┘   └─────────┘   └─────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b> to solve a problem.</p>`,

      [{ heading: "Exercise 36.1 — Answer.", items: [
          "What is an algorithm?",
          "What is a flowchart?",
          "What is pseudocode?",
          "What shape is a decision?",
          "Name 3 pseudocode keywords."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "What is pseudocode?", a: ["plain English steps", "any"] },
       { q: "What shape is a decision?", a: ["diamond"] }]),

    D(2, "🔁", "Review Programming",
      "Review variables, loops, conditions.",
      `<p class='big-emoji'>🔁 💻 🔁</p>

       <h3>🖼️ Concept Summary</h3>
       <table border="1" cellpadding="6">
         <tr><th>Concept</th><th>Purpose</th><th>Example</th></tr>
         <tr><td>Variable</td><td>Store data</td><td>name = "Ama"</td></tr>
         <tr><td>Loop</td><td>Repeat</td><td>FOR i = 1 TO 5</td></tr>
         <tr><td>Condition</td><td>Decide</td><td>IF x > 5 THEN</td></tr>
         <tr><td>Print</td><td>Output</td><td>PRINT "Hi"</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What does a loop do?</p>
       <p><b>Answer:</b> A loop <b>repeats</b> instructions.</p>`,

      [{ heading: "Exercise 37.1 — Answer.", items: [
          "What is a variable?",
          "What does a loop do?",
          "What does if…then do?",
          "What does print do?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What does a loop do?", a: ["repeats", "any"] },
       { q: "What is a variable?", a: ["stores data", "any"] }]),

    D(3, "🔁", "Review Debugging",
      "Review error types and fixing.",
      `<p class='big-emoji'>🔁 🐞 🔧</p>

       <h3>🖼️ Debugging Summary</h3>
       <pre>
       3 ERROR TYPES          4 DEBUGGING TIPS
       ┌─────────────┐        ┌─────────────┐
       │ Syntax      │        │ 1. Read     │
       │ Logic       │        │ 2. Check    │
       │ Runtime     │        │ 3. Test     │
       └─────────────┘        │ 4. Fix      │
                              └─────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a bug?</p>
       <p><b>Answer:</b> An <b>error in code</b>.</p>`,

      [{ heading: "Exercise 38.1 — Answer.", items: [
          "Name 3 types of errors.",
          "Why test code?",
          "What is a bug?",
          "How do you fix a bug?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a bug?", a: ["error in code", "any"] },
       { q: "Name 3 types of errors.", a: ["syntax logic runtime", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test on Month 2.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is an algorithm?</li>
         <li>What is a flowchart?</li>
         <li>What is pseudocode?</li>
         <li>What is a variable?</li>
         <li>Name 3 data types.</li>
         <li>What does a loop do?</li>
         <li>What does 'if' do?</li>
         <li>Name 3 types of errors.</li>
         <li>How do you fix a bug?</li>
         <li>What does print do?</li>
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>8–10 correct = ⭐⭐⭐ Excellent</li>
         <li>5–7 correct = ⭐⭐ Good</li>
         <li>0–4 correct = ⭐ Needs revision</li>
       </ul>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is pseudocode?", a: ["plain English steps", "any"] },
       { q: "Name a data type.", a: ["number", "text", "boolean", "any"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>
       <p><b>Monthly Test 2</b>: 60 marks.</p>

       <h3>📋 Test Sections</h3>
       <ul>
         <li>Part A — Algorithms (15 marks)</li>
         <li>Part B — Programming (15 marks)</li>
         <li>Part C — Debugging (15 marks)</li>
         <li>Part D — Practical (15 marks)</li>
       </ul>

       <h3>🎊 After the Test</h3>
       <ul>
         <li>Show your work.</li>
         <li>Give yourself a star! ⭐</li>
         <li>Set a goal for Month 3.</li>
       </ul>`,

      [{ heading: "Exercise 40.1 — Complete the test.", items: [
          "Part A — Algorithms (15)",
          "Part B — Programming (15)",
          "Part C — Debugging (15)",
          "Part D — Practical (15)"
        ]},
       { heading: "Exercise 40.2 — Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 60 total. 48+ = Excellent. 30–47 = Good. Below 30 = Needs revision.</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What was hardest?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — INTERNET
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Internet", days: [

    D(1, "🌐", "How It Works",
      "Learn how the internet works.",
      `<p class='big-emoji'>🌐 💻 🌍</p>
       <p>The <b>internet</b> is a global network that connects computers around the world.</p>

       <h3>🖼️ Illustration — How the Internet Works</h3>
       <pre>
   🏠 YOUR HOME                 🌍 THE WORLD
   ┌────────────┐              ┌───────────────┐
   │  💻 Your   │              │  🖥️ Server    │
   │  Computer  │              │  (website)    │
   └─────┬──────┘              └───────┬───────┘
         │                             │
         │  Request →                  │
         ▼                             ▼
   ┌──────────────────────────────────────┐
   │       🌐 THE INTERNET 🌐              │
   │  (cables, satellites, servers)       │
   └──────────────────────────────────────┘
         │                             │
         ▲                             ▲
         │  ← Response                 │
         │                             │
   When you type a website, your computer sends a request.
   The server sends back the information. This happens in
   less than a second!
       </pre>

       <h3>🧠 Key Terms</h3>
       <table border="1" cellpadding="6">
         <tr><th>Term</th><th>Meaning</th></tr>
         <tr><td>Internet</td><td>Global network of computers</td></tr>
         <tr><td>Server</td><td>Computer that stores websites</td></tr>
         <tr><td>Client</td><td>Your computer (the one requesting)</td></tr>
         <tr><td>URL</td><td>Web address (like www.google.com)</td></tr>
         <tr><td>Wi-Fi</td><td>Wireless internet connection</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is the internet?</p>
       <p><b>Answer:</b> A <b>global network of computers</b> connected around the world.</p>

       <h3>💡 Fun Fact</h3>
       <p>99% of the internet travels through underwater cables across the oceans!</p>`,

      [{ heading: "Exercise 40.1 — Say.", items: [
          "What is the internet?",
          "What is a server?",
          "What is a client?",
          "What is a URL?",
          "What is Wi-Fi?"
        ]},
       { heading: "Exercise 40.2 — Trace a request.", items: [
          "Type a website name → ___",
          "Your computer sends a ___ →",
          "The server sends back ___ →",
          "Your browser shows ___"
        ]},
       { heading: "Exercise 40.3 — Draw.", items: [
          "Draw the flow: Your Computer → Internet → Server → Back to you."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the internet?", a: ["global network", "network of computers", "any"] },
       { q: "What is a server?", a: ["stores websites", "any"] },
       { q: "What is a URL?", a: ["web address", "any"] }]),

    D(2, "🌐", "Browsers",
      "Learn about web browsers.",
      `<p class='big-emoji'>🌐 🔎 🔍</p>
       <p>A <b>browser</b> is software that visits websites.</p>

       <h3>🖼️ Illustration — Browser Window</h3>
       <pre>
   ┌─────────────────────────────────────────────┐
   │  ◀ ▶ ↻   [https://www.google.com      ]  │ ← Address Bar
   ├─────────────────────────────────────────────┤
   │  Tab 1  │  Tab 2  │  Tab 3  │  +          │ ← Tabs
   ├─────────────────────────────────────────────┤
   │                                             │
   │         [Google logo here]                  │
   │                                             │
   │     ┌───────────────────────┐              │
   │     │  🔍 Search...         │              │
   │     └───────────────────────┘              │
   │                                             │
   └─────────────────────────────────────────────┘
       </pre>

       <h3>🧠 Popular Browsers</h3>
       <table border="1" cellpadding="6">
         <tr><th>Browser</th><th>Made By</th><th>Logo</th></tr>
         <tr><td>Chrome</td><td>Google</td><td>🌐 (red/yellow/green)</td></tr>
         <tr><td>Firefox</td><td>Mozilla</td><td>🦊 (orange fox)</td></tr>
         <tr><td>Edge</td><td>Microsoft</td><td>🔵 (blue wave)</td></tr>
         <tr><td>Safari</td><td>Apple</td><td>🧭 (compass)</td></tr>
       </table>

       <h3>🧠 Browser Parts</h3>
       <ul>
         <li><b>Address bar</b> — type website names</li>
         <li><b>Tabs</b> — open multiple pages at once</li>
         <li><b>Back / Forward</b> — go between pages</li>
         <li><b>Refresh</b> — reload the page</li>
         <li><b>Bookmarks</b> — save favourite pages</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A <b>program to visit websites</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>Google Chrome is the most-used browser in the world — over 3 billion people use it!</p>`,

      [{ heading: "Exercise 41.1 — Say.", items: [
          "What is a browser?",
          "Name 3 browsers.",
          "What is the address bar for?",
          "What are tabs for?"
        ]},
       { heading: "Exercise 41.2 — Practise.", items: [
          "Open a browser.",
          "Type a website address.",
          "Open 3 tabs.",
          "Bookmark one page."
        ]},
       { heading: "Exercise 41.3 — Answer.", items: [
          "Which browser do you use?",
          "What is your favourite website?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a browser?", a: ["program to visit websites", "any"] },
       { q: "Name a browser.", a: ["chrome", "firefox", "any"] },
       { q: "What is the address bar for?", a: ["typing website", "any"] }]),

    D(3, "🔍", "Search",
      "Learn how to search effectively.",
      `<p class='big-emoji'>🔍 🎯 💡</p>
       <p>A <b>search engine</b> helps you find information online. Google is the most famous.</p>

       <h3>🖼️ Illustration — Search Results Page</h3>
       <pre>
   ┌─────────────────────────────────────────────┐
   │  [Google]   [ search box  ]  🔍             │
   ├─────────────────────────────────────────────┤
   │  About 1,234,567 results (0.45 seconds)     │
   ├─────────────────────────────────────────────┤
   │  📘 Wikipedia — Article Title              │
   │    www.wikipedia.org › article              │
   │    Learn about... first 2 lines of info...  │
   ├─────────────────────────────────────────────┤
   │  📗 Another Result — Another Title         │
   │    www.example.com › page                   │
   │    Description of the page...               │
   ├─────────────────────────────────────────────┤
   │  📙 Third Result...                         │
   └─────────────────────────────────────────────┘
       </pre>

       <h3>🧠 Search Tips</h3>
       <table border="1" cellpadding="6">
         <tr><th>Tip</th><th>Example</th><th>Why</th></tr>
         <tr><td>Use clear keywords</td><td>"Ghana capital city"</td><td>Focuses the search</td></tr>
         <tr><td>Use quotes for exact</td><td>"to be or not to be"</td><td>Finds exact phrase</td></tr>
         <tr><td>Use + to include</td><td>apple +fruit</td><td>Ensures word included</td></tr>
         <tr><td>Use - to exclude</td><td>jaguar -car</td><td>Removes car results</td></tr>
         <tr><td>Use site:</td><td>site:gov.gh</td><td>Only Ghana gov sites</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you search for an exact phrase?</p>
       <p><b>Answer:</b> Put it in <b>quotation marks</b>. Example: <code>"United States of America"</code></p>

       <h3>💡 Fun Fact</h3>
       <p>Google processes about 8.5 billion searches every day!</p>`,

      [{ heading: "Exercise 42.1 — Say.", items: [
          "Name 3 search tips.",
          "How do you search for an exact phrase?",
          "What is a keyword?",
          "What is a search engine?"
        ]},
       { heading: "Exercise 42.2 — Practise searches.", items: [
          "Search for 'Ghana'.",
          "Search for 'the capital of Ghana'.",
          'Search for "United States of America".',
          "Search for 'jaguar -car'."
        ]},
       { heading: "Exercise 42.3 — Answer.", items: [
          "What is your favourite search engine?",
          "What did you search for this week?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you search for an exact phrase?", a: ["quotation marks", "any"] },
       { q: "What is a keyword?", a: ["important word", "any"] },
       { q: "Name a search engine.", a: ["google", "bing", "any"] }]),

    D(4, "✅", "Evaluation",
      "Learn to evaluate online sources.",
      `<p class='big-emoji'>✅ 📰 🔍</p>
       <p>Not everything on the internet is true! We must check if a source is reliable.</p>

       <h3>🖼️ Illustration — Trustworthy vs Not</h3>
       <pre>
   ✅ TRUSTWORTHY                 ❌ NOT TRUSTWORTHY
   ┌───────────────────┐          ┌───────────────────┐
   │ • .gov or .edu    │          │ • Selling things  │
   │ • Author's name   │          │ • No author       │
   │ • Date shown      │          │ • No date         │
   │ • Links to other  │          │ • Too many ads    │
   │   good sources    │          │ • ALL CAPS        │
   │ • Facts you can   │          │ • Claims with no  │
   │   verify          │          │   evidence        │
   └───────────────────┘          └───────────────────┘
       </pre>

       <h3>🧠 Checklist — Is This Source Good?</h3>
       <table border="1" cellpadding="6">
         <tr><th>Question</th><th>Why</th></tr>
         <tr><td>Who wrote it?</td><td>Is the author an expert?</td></tr>
         <tr><td>When was it written?</td><td>Is it recent?</td></tr>
         <tr><td>Why was it written?</td><td>To inform? To sell? To persuade?</td></tr>
         <tr><td>Can I verify it?</td><td>Do 2+ other sources say the same?</td></tr>
       </table>

       <h3>🖼️ Domain Name Types</h3>
       <ul>
         <li><b>.gov</b> — Government (very reliable)</li>
         <li><b>.edu</b> — Education (reliable)</li>
         <li><b>.org</b> — Organisation (usually reliable)</li>
         <li><b>.com</b> — Commercial (check carefully)</li>
         <li><b>.net</b> — Network (check carefully)</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Which is more reliable: <code>health.gov.gh</code> or <code>buypills4cheap.com</code>?</p>
       <p><b>Answer:</b> <b>health.gov.gh</b> — because .gov means it is an official government website.</p>

       <h3>💡 Fun Fact</h3>
       <p>Fake news spreads 6 times faster than real news on social media!</p>`,

      [{ heading: "Exercise 43.1 — Say.", items: [
          "How do you check a source?",
          "Name 2 trusted website types.",
          "What is .gov?",
          "What is .edu?"
        ]},
       { heading: "Exercise 43.2 — Check these sites.", items: [
          "health.gov.gh → ___",
          "buypills4cheap.com → ___",
          "university.edu → ___",
          "freemoney4u.net → ___"
        ]},
       { heading: "Exercise 43.3 — Practise.", items: [
          "Find 2 websites about your favourite topic.",
          "Check if each is reliable.",
          "Write why or why not."
        ]}],

      `<p><b>43.2:</b> 1. Reliable 2. Not reliable 3. Reliable 4. Not reliable</p>`,

      [{ q: "Name a trusted website type.", a: [".gov", ".edu", "any"] },
       { q: "How do you check a source?", a: ["check author", "any"] }]),

    D(5, "🎨", "Internet Poster",
      "Make an internet poster.",
      `<p class='big-emoji'>🎨 🌐 ✅</p>
       <p>Make an <b>"Internet"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │           🌐 INTERNET 🌐              │
   ├──────────────────────────────────────┤
   │  1. HOW IT WORKS    2. BROWSERS      │
   │  Client              • Chrome        │
   │    ↓ Request         • Firefox       │
   │  Internet            • Edge          │
   │    ↓ Response        • Safari        │
   │  Server                              │
   ├──────────────────────────────────────┤
   │  3. SEARCH TIPS     4. EVALUATE      │
   │  • Keywords          ✅ .gov         │
   │  • "quotes"          ✅ .edu         │
   │  • +include          ❌ No author    │
   │  • -exclude          ❌ No date      │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: How It Works, Browsers, Search Tips, Evaluate</li>
         <li>At least 3 items in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 44.1 — Draw and label.", items: [
          "How the internet works (diagram)",
          "3 browsers",
          "4 search tips",
          "Trustworthy vs not"
        ]},
       { heading: "Exercise 44.2 — Answer.", items: [
          "What is the internet?",
          "What is a browser?",
          "Name a trusted website type.",
          "How do you search for an exact phrase?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name a safe browsing rule.", a: ["use with adult", "any"] },
       { q: "Name a trusted website type.", a: [".gov", ".edu", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — EMAIL & COMMUNICATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Email", days: [

    D(1, "📧", "Email",
      "Learn about email and its parts.",
      `<p class='big-emoji'>📧 💬 ✉️</p>
       <p><b>Email</b> is a way to send messages electronically over the internet.</p>

       <h3>🖼️ Illustration — An Email</h3>
       <pre>
   ┌─────────────────────────────────────────────┐
   │  To:      kofi@example.com                  │
   │  Cc:      ama@example.com                   │
   │  Subject: My Holiday                         │
   ├─────────────────────────────────────────────┤
   │                                             │
   │  Dear Kofi,                                 │
   │                                             │
   │  How are you? I had a wonderful holiday.    │
   │  I visited my grandmother in Kumasi.        │
   │                                             │
   │  Your friend,                                │
   │  Adwoa                                       │
   │                                             │
   │  📎 attachment: photo.jpg                    │
   └─────────────────────────────────────────────┘
       </pre>

       <h3>🧠 Parts of an Email</h3>
       <table border="1" cellpadding="6">
         <tr><th>Part</th><th>Purpose</th></tr>
         <tr><td>To</td><td>Who you send to</td></tr>
         <tr><td>Cc</td><td>Carbon copy (others can see)</td></tr>
         <tr><td>Bcc</td><td>Blind carbon copy (hidden)</td></tr>
         <tr><td>Subject</td><td>What the email is about</td></tr>
         <tr><td>Body</td><td>The message itself</td></tr>
         <tr><td>Attachment</td><td>File sent with the email</td></tr>
       </table>

       <h3>🧠 Email Address Format</h3>
       <p><code>name@domain.com</code></p>
       <ul>
         <li><b>name</b> — the username (like ama, kofi)</li>
         <li><b>@</b> — "at" symbol</li>
         <li><b>domain</b> — the provider (gmail, yahoo)</li>
         <li><b>.com</b> — the type of site</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is email?</p>
       <p><b>Answer:</b> A way to send <b>messages electronically</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>The first email was sent in 1971 by Ray Tomlinson. He chose the @ symbol!</p>`,

      [{ heading: "Exercise 45.1 — Say.", items: [
          "What is email?",
          "Name the parts of an email.",
          "What is an attachment?",
          "What is Cc?",
          "What is Bcc?"
        ]},
       { heading: "Exercise 45.2 — Break down email addresses.", items: [
          "ama@gmail.com → name: ___, domain: ___",
          "kofi@yahoo.com → name: ___, domain: ___",
          "teacher@school.edu → name: ___, domain: ___"
        ]},
       { heading: "Exercise 45.3 — Write an email.", items: [
          "To: ___",
          "Subject: ___",
          "Dear ___, body: ___",
          "Closing: ___"
        ]}],

      `<p><b>45.2:</b> 1. ama/gmail 2. kofi/yahoo 3. teacher/school.edu</p>`,

      [{ q: "What is email?", a: ["electronic mail", "any"] },
       { q: "What is a subject line?", a: ["what the email is about", "any"] },
       { q: "What symbol is in email addresses?", a: ["@", "at"] }]),

    D(2, "💬", "Chat",
      "Learn about online chat.",
      `<p class='big-emoji'>💬 📱 💭</p>
       <p><b>Chat</b> is talking to people online in real time.</p>

       <h3>🖼️ Illustration — Chat Screen</h3>
       <pre>
   ┌─────────────────────────────────┐
   │  Ama 💬                          │
   ├─────────────────────────────────┤
   │                   Hi! 👋         │
   │                                 │
   │  Hello! How are you?            │
   │                                 │
   │                   I'm fine! 😊  │
   │                                 │
   │  Great! Let's meet at 4.        │
   │                                 │
   │                   OK! See you!  │
   └─────────────────────────────────┘
   [ Type your message... ] [Send]
       </pre>

       <h3>🧠 Chat Apps</h3>
       <table border="1" cellpadding="6">
         <tr><th>App</th><th>Used For</th><th>Features</th></tr>
         <tr><td>WhatsApp</td><td>Messages, calls</td><td>Voice, video, groups</td></tr>
         <tr><td>Messenger</td><td>Facebook chat</td><td>Stickers, video</td></tr>
         <tr><td>Telegram</td><td>Messages</td><td>Channels, bots</td></tr>
         <tr><td>Zoom</td><td>Video meetings</td><td>Screen sharing</td></tr>
       </table>

       <h3>🧠 Chat Rules</h3>
       <ul>
         <li>Be polite — just like in person</li>
         <li>Do not share personal info</li>
         <li>Do not talk to strangers</li>
         <li>Do not send mean messages</li>
         <li>Use emojis thoughtfully 🙂</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is chat?</p>
       <p><b>Answer:</b> Talking to people <b>online in real time</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>WhatsApp has over 2 billion users and delivers 100 billion messages per day!</p>`,

      [{ heading: "Exercise 46.1 — Say.", items: [
          "What is chat?",
          "Name 3 chat apps.",
          "What are 3 chat rules?"
        ]},
       { heading: "Exercise 46.2 — Write a chat.", items: [
          "You: ___",
          "Friend: ___",
          "You: ___",
          "Friend: ___"
        ]},
       { heading: "Exercise 46.3 — Answer.", items: [
          "Which chat app do you use?",
          "Who do you chat with most?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is chat?", a: ["talking online", "any"] },
       { q: "Name a chat app.", a: ["whatsapp", "messenger", "any"] },
       { q: "Name a chat rule.", a: ["be polite", "any"] }]),

    D(3, "🤝", "Netiquette",
      "Learn email and chat etiquette.",
      `<p class='big-emoji'>🤝 📧 💬</p>
       <p><b>Netiquette</b> = good manners online.</p>

       <h3>🖼️ Illustration — Good vs Bad Netiquette</h3>
       <pre>
   ✅ GOOD                            ❌ BAD
   ┌─────────────────────────┐        ┌──────────────────────┐
   │ Dear Ama,                │        │ HEY!! WHERE R U??   │
   │                          │        │                     │
   │ How are you? I hope      │        │ reply NOW!!!        │
   │ you are well.            │        │                     │
   │                          │        │ R U THERE?????      │
   │ Your friend,             │        │                     │
   │ Kofi                     │        │ k                    │
   └─────────────────────────┘        └──────────────────────┘
   Polite, clear, complete            Rude, ALL CAPS, unclear
       </pre>

       <h3>🧠 Netiquette Rules</h3>
       <table border="1" cellpadding="6">
         <tr><th>Rule</th><th>Why</th></tr>
         <tr><td>Use polite words</td><td>Shows respect</td></tr>
         <tr><td>Write clear subjects</td><td>Helps the reader</td></tr>
         <tr><td>Do NOT write in ALL CAPS</td><td>Looks like shouting</td></tr>
         <tr><td>Check your spelling</td><td>Shows care</td></tr>
         <tr><td>Do not send spam</td><td>Wastes time</td></tr>
         <tr><td>Reply in good time</td><td>Shows courtesy</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is netiquette?</p>
       <p><b>Answer:</b> <b>Good manners online</b>.</p>

       <h3>💡 Why It Matters</h3>
       <p>People can't see your face or hear your voice online. Words are all they see — so be extra careful with what you write!</p>`,

      [{ heading: "Exercise 47.1 — Say.", items: [
          "What is netiquette?",
          "Name 3 netiquette rules.",
          "Why not write in ALL CAPS?",
          "Why check spelling?"
        ]},
       { heading: "Exercise 47.2 — Fix the rude email.", items: [
          "Rude: HEY REPLY NOW!!!",
          "Polite: ___"
        ]},
       { heading: "Exercise 47.3 — Rewrite.", items: [
          "Rewrite these politely:",
          '"GIVE ME UR HOMEWORK" → ___',
          '"where r u??" → ___'
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "Why not ALL CAPS?", a: ["shouting", "any"] },
       { q: "Name a netiquette rule.", a: ["polite words", "any"] }]),

    D(4, "🛡️", "Safety",
      "Learn online communication safety.",
      `<p class='big-emoji'>🛡️ 📧 🚫</p>
       <p>Online communication is useful but can also be dangerous if we are not careful.</p>

       <h3>🖼️ Illustration — Safe vs Unsafe</h3>
       <pre>
   ✅ SAFE                              ❌ UNSAFE
   ┌─────────────────────┐              ┌─────────────────────┐
   │ • Messages from     │              │ • Opening emails    │
   │   people you know   │              │   from strangers    │
   │ • Replying politely │              │ • Clicking strange  │
   │ • Asking an adult   │              │   links             │
   │   if unsure         │              │ • Sharing address,  │
   │                     │              │   phone, school     │
   │                     │              │ • Sharing passwords │
   └─────────────────────┘              └─────────────────────┘
       </pre>

       <h3>🧠 Safety Rules</h3>
       <table border="1" cellpadding="6">
         <tr><th>Rule</th><th>Why</th></tr>
         <tr><td>Do not open messages from strangers</td><td>They could be dangerous</td></tr>
         <tr><td>Do not click strange links</td><td>Could be a scam or virus</td></tr>
         <tr><td>Do not share personal info</td><td>Keeps you safe</td></tr>
         <tr><td>Do not share your password</td><td>Protects your accounts</td></tr>
         <tr><td>Tell an adult if something feels wrong</td><td>They can help</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What should you do if something feels wrong online?</p>
       <p><b>Answer:</b> Tell a <b>trusted adult</b> immediately.</p>

       <h3>💡 Warning Signs</h3>
       <ul>
         <li>Someone asking for personal info</li>
         <li>Someone asking to meet in person</li>
         <li>Messages that make you feel scared or sad</li>
         <li>Links that look strange</li>
         <li>Free offers that seem too good</li>
       </ul>`,

      [{ heading: "Exercise 48.1 — Say.", items: [
          "Name 3 online communication safety rules.",
          "Should you open messages from strangers?",
          "What if something feels wrong?",
          "Should you share your password?"
        ]},
       { heading: "Exercise 48.2 — Safe or unsafe?", items: [
          "Replying to a friend → ___",
          "Opening email from stranger → ___",
          "Sharing your address → ___",
          "Telling an adult → ___"
        ]},
       { heading: "Exercise 48.3 — Write a safety poster.", items: [
          "Title: Stay Safe Online",
          "3 rules:"
        ]}],

      `<p><b>48.2:</b> 1. Safe 2. Unsafe 3. Unsafe 4. Safe</p>`,

      [{ q: "Should you open messages from strangers?", a: ["no"] },
       { q: "What if something feels wrong?", a: ["tell an adult", "any"] },
       { q: "Should you share your password?", a: ["no"] }]),

    D(5, "🎨", "Communication Poster",
      "Make a communication poster.",
      `<p class='big-emoji'>🎨 📧 💬</p>
       <p>Make a <b>"Online Communication"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │      📧 ONLINE COMMUNICATION 📧       │
   ├──────────────────────────────────────┤
   │  1. EMAIL           2. CHAT          │
   │  To: ___            • WhatsApp       │
   │  Subject: ___       • Messenger      │
   │  Body: ___          • Telegram       │
   │  Attachment: ___                     │
   ├──────────────────────────────────────┤
   │  3. NETIQUETTE      4. SAFETY        │
   │  ✅ Polite           ✅ Ask adult     │
   │  ✅ Clear subject    ✅ Trusted       │
   │  ❌ ALL CAPS         ❌ No strangers  │
   │  ❌ Spam             ❌ No info share │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Email, Chat, Netiquette, Safety</li>
         <li>At least 3 items in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 49.1 — Draw and label.", items: [
          "Parts of an email",
          "Chat apps",
          "Netiquette rules",
          "Safety rules"
        ]},
       { heading: "Exercise 49.2 — Answer.", items: [
          "What is email?",
          "Name a part of an email.",
          "What is netiquette?",
          "Name a safety rule."
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name a part of an email.", a: ["to", "subject", "body", "any"] },
       { q: "What is netiquette?", a: ["good manners online", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — ONLINE SAFETY
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Online Safety", days: [

    D(1, "🔑", "Passwords",
      "Learn strong passwords.",
      `<p class='big-emoji'>🔑 🛡️ 🔒</p>
       <p>A <b>password</b> protects your accounts. A weak password is easy to guess.</p>

       <h3>🖼️ Illustration — Strong vs Weak</h3>
       <pre>
   ❌ WEAK                    ✅ STRONG
   ┌─────────────────┐        ┌─────────────────┐
   │ 123456          │        │ MyDog#2024!     │
   │ password        │        │ BlueSky@99      │
   │ ama2024         │        │ K7p!mXq2        │
   │ qwerty          │        │ Sun$et+Rain3    │
   └─────────────────┘        └─────────────────┘
   Easy to guess!             Hard to guess!
       </pre>

       <h3>🧠 Rules for Strong Passwords</h3>
       <table border="1" cellpadding="6">
         <tr><th>Rule</th><th>Example</th></tr>
         <tr><td>At least 8 characters</td><td>BlueSky@99 (10 chars)</td></tr>
         <tr><td>Mix letters, numbers, symbols</td><td>MyDog#2024</td></tr>
         <tr><td>Do not use your name</td><td>❌ ama123</td></tr>
         <tr><td>Do not share it</td><td>Even with friends!</td></tr>
         <tr><td>Change it sometimes</td><td>Every 6 months</td></tr>
         <tr><td>Use different passwords</td><td>One for email, one for games</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What makes a strong password?</p>
       <p><b>Answer:</b> A mix of <b>letters, numbers, and symbols</b>, at least 8 characters long, and not containing your name.</p>

       <h3>💡 Fun Fact</h3>
       <p>A computer can guess "123456" in less than 1 second. But it would take 200 years to crack "K7p!mXq2"!</p>`,

      [{ heading: "Exercise 50.1 — Say.", items: [
          "What makes a strong password?",
          "Why keep passwords safe?",
          "Should you share your password?",
          "How often should you change it?"
        ]},
       { heading: "Exercise 50.2 — Strong or weak?", items: [
          "123456 → ___",
          "BlueSky@99 → ___",
          "ama2024 → ___",
          "K7p!mXq2 → ___"
        ]},
       { heading: "Exercise 50.3 — Create strong passwords.", items: [
          "Password 1: ___",
          "Password 2: ___",
          "Password 3: ___"
        ]}],

      `<p><b>50.2:</b> 1. Weak 2. Strong 3. Weak 4. Strong</p>`,

      [{ q: "Should you share your password?", a: ["no"] },
       { q: "What makes a password strong?", a: ["letters numbers symbols", "any"] },
       { q: "How long should a password be?", a: ["8", "8 characters", "any"] }]),

    D(2, "🔒", "Privacy",
      "Learn about online privacy.",
      `<p class='big-emoji'>🔒 🔑 🛡️</p>
       <p><b>Privacy</b> means keeping your personal information safe online.</p>

       <h3>🖼️ Illustration — Keep These Private!</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         🔒 KEEP PRIVATE 🔒               │
   ├─────────────────────────────────────────┤
   │  🏠 Home address                        │
   │  📞 Phone number                        │
   │  🏫 School name                          │
   │  📧 Email password                      │
   │  📸 Photos of you or family             │
   │  💳 Bank information                    │
   │  🎂 Full birth date                     │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 What to Keep Private</h3>
       <table border="1" cellpadding="6">
         <tr><th>Keep Private</th><th>Why</th></tr>
         <tr><td>Home address</td><td>Keeps you safe</td></tr>
         <tr><td>Phone number</td><td>Prevents unwanted calls</td></tr>
         <tr><td>School name</td><td>Prevents stalking</td></tr>
         <tr><td>Passwords</td><td>Protects accounts</td></tr>
         <tr><td>Personal photos</td><td>Protects reputation</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Should you share your address online?</p>
       <p><b>Answer:</b> <b>No</b> — never share your address online.</p>

       <h3>💡 Safe Alternatives</h3>
       <ul>
         <li>Instead of address → say "in Accra"</li>
         <li>Instead of birth date → say "I'm 10"</li>
         <li>Instead of school name → say "my school"</li>
       </ul>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "What is privacy?",
          "Name 3 things to keep private.",
          "Should you share your address?",
          "Should you share your password?"
        ]},
       { heading: "Exercise 51.2 — Safe or unsafe to share?", items: [
          "Your favourite food → ___",
          "Your home address → ___",
          "Your full birth date → ___",
          "Your favourite colour → ___"
        ]},
       { heading: "Exercise 51.3 — Safe alternatives.", items: [
          "Instead of your address, say: ___",
          "Instead of your school name, say: ___"
        ]}],

      `<p><b>51.2:</b> 1. Safe 2. Unsafe 3. Unsafe 4. Safe</p>`,

      [{ q: "Should you share your address online?", a: ["no"] },
       { q: "Name something to keep private.", a: ["address", "phone", "any"] },
       { q: "What is privacy?", a: ["keeping info safe", "any"] }]),

    D(3, "🚫", "Cyberbullying",
      "Learn about cyberbullying and how to respond.",
      `<p class='big-emoji'>🚫 😢 🛑</p>
       <p><b>Cyberbullying</b> is being mean to someone online, again and again.</p>

       <h3>🖼️ Illustration — Examples of Cyberbullying</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         🚫 CYBERBULLYING EXAMPLES 🚫     │
   ├─────────────────────────────────────────┤
   │  📧 Sending mean messages               │
   │  📸 Sharing embarrassing photos         │
   │  💬 Leaving someone out of group chats  │
   │  😡 Spreading rumours                   │
   │  🚫 Posting hurtful comments            │
   │  👥 Ganging up on someone               │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 What to Do If You Are Cyberbullied</h3>
       <table border="1" cellpadding="6">
         <tr><th>Step</th><th>Action</th><th>Why</th></tr>
         <tr><td>1</td><td>Do NOT reply</td><td>Don't give them power</td></tr>
         <tr><td>2</td><td>Save the messages</td><td>Evidence</td></tr>
         <tr><td>3</td><td>Tell a trusted adult</td><td>They can help</td></tr>
         <tr><td>4</td><td>Block the person</td><td>Stops the bullying</td></tr>
         <tr><td>5</td><td>Report to the platform</td><td>Uses official tools</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What should you do if you are cyberbullied?</p>
       <p><b>Answer:</b> Do NOT reply. <b>Save the messages</b>, <b>tell a trusted adult</b>, and <b>block the person</b>.</p>

       <h3>💡 Remember</h3>
       <ul>
         <li>It is NEVER your fault.</li>
         <li>You are NOT alone — many people care about you.</li>
         <li>Always tell an adult, no matter how small it seems.</li>
       </ul>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What is cyberbullying?",
          "Name 3 examples.",
          "Name 3 things to do if it happens.",
          "What should you not do?"
        ]},
       { heading: "Exercise 52.2 — Order the steps.", items: [
          "Tell an adult, Block, Save messages, Do not reply"
        ]},
       { heading: "Exercise 52.3 — Answer.", items: [
          "Who should you tell?",
          "Why save messages?"
        ]}],

      `<p><b>52.2:</b> 1. Do not reply 2. Save messages 3. Tell an adult 4. Block</p>`,

      [{ q: "What is cyberbullying?", a: ["being mean online", "any"] },
       { q: "What should you do?", a: ["tell an adult", "any"] },
       { q: "Should you reply?", a: ["no"] }]),

    D(4, "📢", "Reporting",
      "Learn how to report online problems.",
      `<p class='big-emoji'>📢 🛡️ 🚨</p>
       <p>If you see something wrong online, <b>report</b> it. You can help yourself and others.</p>

       <h3>🖼️ Illustration — Reporting Process</h3>
       <pre>
   ┌───────────────────────────────────────────┐
   │  1. 🚨 SEE a problem                      │
   │        (mean message, bad photo)          │
   ├───────────────────────────────────────────┤
   │  2. 📸 TAKE a screenshot                  │
   │        (Save the evidence)                │
   ├───────────────────────────────────────────┤
   │  3. 📢 CLICK the "Report" button          │
   │        (Every platform has one)           │
   ├───────────────────────────────────────────┤
   │  4. 👨‍👩‍👧 TELL an adult                     │
   │        (Parent, teacher)                  │
   ├───────────────────────────────────────────┤
   │  5. 🚫 BLOCK the person                   │
   │        (Stop further messages)            │
   └───────────────────────────────────────────┘
       </pre>

       <h3>🧠 Where to Report</h3>
       <table border="1" cellpadding="6">
         <tr><th>Platform</th><th>Report Button</th><th>Response Time</th></tr>
         <tr><td>WhatsApp</td><td>Chat → Report</td><td>Fast</td></tr>
         <tr><td>YouTube</td><td>Video → ⋮ → Report</td><td>Hours</td></tr>
         <tr><td>Facebook</td><td>Post → ⋮ → Report</td><td>Fast</td></tr>
         <tr><td>Instagram</td><td>Post → ⋮ → Report</td><td>Hours</td></tr>
         <tr><td>School</td><td>Tell a teacher</td><td>Immediate</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you report a problem online?</p>
       <p><b>Answer:</b> Take a screenshot, click the <b>Report</b> button, and <b>tell an adult</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>If you report cyberbullying on most platforms, the bully's account can be suspended or banned!</p>`,

      [{ heading: "Exercise 53.1 — Say.", items: [
          "How do you report a problem?",
          "Who should you tell?",
          "Why save evidence?",
          "Why is reporting important?"
        ]},
       { heading: "Exercise 53.2 — Find report buttons.", items: [
          "Open an app.",
          "Find the ⋮ menu on a post.",
          "Look for the Report option.",
          "Write where you found it: ___"
        ]},
       { heading: "Exercise 53.3 — Scenario.", items: [
          "Your friend is being cyberbullied.",
          "What do you do? Write 3 steps:",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you report a problem?", a: ["report button", "any"] },
       { q: "Who should you tell?", a: ["adult", "parent", "any"] },
       { q: "Why save evidence?", a: ["proof", "any"] }]),

    D(5, "🎨", "Safety Poster",
      "Make a safety poster.",
      `<p class='big-emoji'>🎨 🛡️ 🔒</p>
       <p>Make a <b>"Online Safety"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │         🛡️ ONLINE SAFETY 🛡️           │
   ├──────────────────────────────────────┤
   │  1. PASSWORDS       2. PRIVACY       │
   │  ✅ 8+ characters    🔒 Address       │
   │  ✅ Mix L/N/S        🔒 Phone         │
   │  ❌ Your name        🔒 School        │
   │  ❌ Sharing          🔒 Password      │
   ├──────────────────────────────────────┤
   │  3. CYBERBULLYING   4. REPORTING     │
   │  1. Don't reply     📢 Report button │
   │  2. Save            👨‍👩‍👧 Tell adult     │
   │  3. Tell adult      🚫 Block         │
   │  4. Block                            │
   ├──────────────────────────────────────┤
   │  ⭐ My safety pledge: __________      │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Passwords, Privacy, Cyberbullying, Reporting</li>
         <li>At least 3 rules in each</li>
         <li>Colourful drawings</li>
         <li>Include a safety pledge</li>
       </ul>`,

      [{ heading: "Exercise 54.1 — Draw and label.", items: [
          "Password rules (3+)",
          "Privacy rules (3+)",
          "Cyberbullying steps (4)",
          "Reporting steps (3+)"
        ]},
       { heading: "Exercise 54.2 — Write a pledge.", items: [
          "I promise to: ___",
          "I promise to: ___",
          "I promise to: ___"
        ]}],

      `<p>⭐ for a complete, colourful poster with a pledge.</p>`,

      [{ q: "Name a safety rule.", a: ["keep passwords safe", "any"] },
       { q: "What should you do if cyberbullied?", a: ["tell an adult", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Internet",
      "Review internet, browsers, search, evaluation.",
      `<p class='big-emoji'>🔁 🌐 🔍</p>

       <h3>🖼️ Mind Map</h3>
       <pre>
                    ┌─────────────┐
                    │  INTERNET   │
                    └──────┬──────┘
             ┌─────────────┼─────────────┐
             │             │             │
        ┌────▼────┐   ┌────▼────┐   ┌────▼────┐
        │HOW IT   │   │BROWSERS │   │SEARCH + │
        │WORKS    │   │Chrome   │   │EVALUATE │
        │Client ↔ │   │Firefox  │   │Keywords │
        │Server   │   │Edge     │   │.gov .edu│
        └─────────┘   └─────────┘   └─────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to visit websites.</p>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is the internet?",
          "What is a browser?",
          "Name 3 search tips.",
          "Name a trusted website type.",
          "How do you search for an exact phrase?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is the internet?", a: ["network", "any"] },
       { q: "Name a trusted website type.", a: [".gov", ".edu", "any"] }]),

    D(2, "🔁", "Review Email",
      "Review email, chat, netiquette, safety.",
      `<p class='big-emoji'>🔁 📧 💬</p>

       <h3>🖼️ Summary</h3>
       <table border="1" cellpadding="6">
         <tr><th>Topic</th><th>Key Points</th></tr>
         <tr><td>Email</td><td>To, Subject, Body, Attachment</td></tr>
         <tr><td>Chat</td><td>WhatsApp, Messenger, real time</td></tr>
         <tr><td>Netiquette</td><td>Polite, clear, no ALL CAPS</td></tr>
         <tr><td>Safety</td><td>No strangers, tell adult</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is netiquette?</p>
       <p><b>Answer:</b> Good manners online.</p>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "What is email?",
          "Name the parts of an email.",
          "What is netiquette?",
          "Name 2 safety rules."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is netiquette?", a: ["good manners online", "any"] },
       { q: "Name a part of an email.", a: ["to", "subject", "any"] }]),

    D(3, "🔁", "Review Safety",
      "Review passwords, privacy, cyberbullying, reporting.",
      `<p class='big-emoji'>🔁 🛡️ 🔒</p>

       <h3>🖼️ Safety Summary</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         🛡️ STAY SAFE 🛡️                 │
   ├─────────────────────────────────────────┤
   │  🔑 Strong passwords (8+, mix)          │
   │  🔒 Keep personal info private          │
   │  🚫 Don't cyberbully                    │
   │  📢 Report problems                     │
   │  👨‍👩‍👧 Tell a trusted adult                 │
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
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
      "Practice test on Month 3.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is the internet?</li>
         <li>What is a browser?</li>
         <li>Name 3 search tips.</li>
         <li>What is email?</li>
         <li>What is netiquette?</li>
         <li>What is a strong password?</li>
         <li>Should you share your password?</li>
         <li>What is cyberbullying?</li>
         <li>How do you report a problem?</li>
         <li>Name a safety rule.</li>
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>8–10 correct = ⭐⭐⭐</li>
         <li>5–7 correct = ⭐⭐</li>
         <li>0–4 correct = ⭐</li>
       </ul>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is email?", a: ["electronic mail", "any"] },
       { q: "Should you share your password?", a: ["no"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>
       <p><b>Monthly Test 3</b>: 60 marks.</p>

       <h3>📋 Test Sections</h3>
       <ul>
         <li>Part A — Internet (15 marks)</li>
         <li>Part B — Email (15 marks)</li>
         <li>Part C — Safety (15 marks)</li>
         <li>Part D — Practical (15 marks)</li>
       </ul>

       <h3>🎊 After the Test</h3>
       <ul>
         <li>Show your work.</li>
         <li>Give yourself a star! ⭐</li>
         <li>Set a goal for Month 4.</li>
       </ul>`,

      [{ heading: "Exercise 59.1 — Complete the test.", items: [
          "Part A — Internet (15)",
          "Part B — Email (15)",
          "Part C — Safety (15)",
          "Part D — Practical (15)"
        ]},
       { heading: "Exercise 59.2 — Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 60</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — PRESENTATIONS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Presentations", days: [

    D(1, "🎨", "Design",
      "Learn presentation design principles.",
      `<p class='big-emoji'>🎨 ✨ 🎯</p>
       <p>Good design makes your presentation <b>easy to read and remember</b>.</p>

       <h3>🖼️ Illustration — Good vs Bad Design</h3>
       <pre>
   ✅ GOOD SLIDE                  ❌ BAD SLIDE
   ┌─────────────────────┐        ┌─────────────────────┐
   │                     │        │                     │
   │   My Holiday        │        │  MY HOLIDAY         │
   │                     │        │  I went to Kumasi   │
   │   🏖️  A short trip   │        │  and I saw my       │
   │                     │        │  grandmother and    │
   │                     │        │  we ate fufu and    │
   │                     │        │  went to the market │
   │                     │        │  and saw many       │
   └─────────────────────┘        │  things and...      │
   Few words, clear image          └─────────────────────┘
                                   Too many words!
       </pre>

       <h3>🧠 Design Rules</h3>
       <table border="1" cellpadding="6">
         <tr><th>Rule</th><th>Why</th></tr>
         <tr><td>Few words per slide</td><td>Easy to read</td></tr>
         <tr><td>Big fonts (24pt+)</td><td>Visible from the back</td></tr>
         <tr><td>Clear images</td><td>Help understanding</td></tr>
         <tr><td>Simple colours</td><td>Not distracting</td></tr>
         <tr><td>Consistent layout</td><td>Looks professional</td></tr>
         <tr><td>One idea per slide</td><td>Focused message</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Why use few words per slide?</p>
       <p><b>Answer:</b> So your audience can <b>read easily</b> and focus on you.</p>

       <h3>💡 Fun Fact</h3>
       <p>The best presentations have about 6 words per slide!</p>`,

      [{ heading: "Exercise 60.1 — Say.", items: [
          "Name 3 design tips.",
          "Why use large fonts?",
          "Why keep colours simple?",
          "How many words per slide?"
        ]},
       { heading: "Exercise 60.2 — Redesign a bad slide.", items: [
          "Bad: 30 words on one slide.",
          "Good: reduce to 6 words + image."
        ]},
       { heading: "Exercise 60.3 — Draw.", items: [
          "Draw a good title slide.",
          "Draw a good body slide."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a design tip.", a: ["few words", "large fonts", "any"] },
       { q: "How many words per slide?", a: ["6", "few", "any"] }]),

    D(2, "📊", "Slides",
      "Learn about slides.",
      `<p class='big-emoji'>📊 📄 ➕</p>
       <p>A <b>slide</b> is one page of a presentation.</p>

       <h3>🖼️ Illustration — Presentation Structure</h3>
       <pre>
   ┌───────────────────────────┐
   │   1. TITLE SLIDE          │
   │   Topic + Your Name       │
   ├───────────────────────────┤
   │   2. INTRODUCTION SLIDE   │
   │   What is it about?       │
   ├───────────────────────────┤
   │   3. BODY SLIDES          │
   │   Main information        │
   │   (usually 3-5 slides)    │
   ├───────────────────────────┤
   │   4. CONCLUSION SLIDE     │
   │   Summary                  │
   └───────────────────────────┘
       </pre>

       <h3>🧠 Common Presentation Programs</h3>
       <table border="1" cellpadding="6">
         <tr><th>Program</th><th>Made By</th><th>Online?</th></tr>
         <tr><td>PowerPoint</td><td>Microsoft</td><td>No (installed)</td></tr>
         <tr><td>Google Slides</td><td>Google</td><td>Yes (free)</td></tr>
         <tr><td>Keynote</td><td>Apple</td><td>No</td></tr>
         <tr><td>Canva</td><td>Canva</td><td>Yes</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a slide?</p>
       <p><b>Answer:</b> One <b>page</b> of a presentation.</p>

       <h3>💡 Fun Fact</h3>
       <p>The first PowerPoint was created in 1987 — over 35 years ago!</p>`,

      [{ heading: "Exercise 61.1 — Say.", items: [
          "What is a slide?",
          "Name a presentation program.",
          "How do you add a slide?",
          "How many slides in a short presentation?"
        ]},
       { heading: "Exercise 61.2 — Plan a presentation.", items: [
          "Topic: ___",
          "Slide 1 (Title): ___",
          "Slide 2 (Intro): ___",
          "Slide 3 (Body): ___",
          "Slide 4 (Conclusion): ___"
        ]},
       { heading: "Exercise 61.3 — Practise.", items: [
          "Open PowerPoint or Google Slides.",
          "Create 4 slides.",
          "Add a title and 2 sentences on each."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a slide?", a: ["one page of presentation", "any"] },
       { q: "Name a presentation program.", a: ["powerpoint", "google slides", "any"] }]),

    D(3, "📝", "Content",
      "Learn about presentation content.",
      `<p class='big-emoji'>📝 📊 📋</p>
       <p>Good content tells a <b>clear story</b> from start to finish.</p>

       <h3>🖼️ Illustration — Content Structure</h3>
       <pre>
   TITLE SLIDE
   ┌─────────────────────────────────┐
   │  My Favourite Animal            │
   │  By Ama                         │
   └─────────────────────────────────┘

   INTRODUCTION SLIDE
   ┌─────────────────────────────────┐
   │  I love dogs.                   │
   │  They are loyal and friendly.   │
   └─────────────────────────────────┘

   BODY SLIDES (3)
   ┌─────────────────────────────────┐
   │  Why I Love Dogs                │
   │  • They are loyal               │
   └─────────────────────────────────┘
   ┌─────────────────────────────────┐
   │  Types of Dogs                  │
   │  • Big dogs                     │
   │  • Small dogs                   │
   └─────────────────────────────────┘
   ┌─────────────────────────────────┐
   │  How to Care for Dogs           │
   │  • Feed them                    │
   │  • Walk them                    │
   └─────────────────────────────────┘

   CONCLUSION SLIDE
   ┌─────────────────────────────────┐
   │  Dogs are wonderful pets!       │
   │  Thank you for listening!       │
   └─────────────────────────────────┘
       </pre>

       <h3>🧠 Content Tips</h3>
       <ul>
         <li>Use <b>bullet points</b>, not paragraphs</li>
         <li>One idea per slide</li>
         <li>Add images to every slide</li>
         <li>Use bold for key words</li>
         <li>Keep the same style throughout</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What goes on the title slide?</p>
       <p><b>Answer:</b> The <b>topic and your name</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>Studies show people remember 65% more when they see both words and pictures together!</p>`,

      [{ heading: "Exercise 62.1 — Say.", items: [
          "What is on the title slide?",
          "What is on the conclusion slide?",
          "Name the 4 parts of a presentation.",
          "What are content tips?"
        ]},
       { heading: "Exercise 62.2 — Write content.", items: [
          "Topic: ___",
          "Intro: ___",
          "Body 1: ___",
          "Body 2: ___",
          "Body 3: ___",
          "Conclusion: ___"
        ]},
       { heading: "Exercise 62.3 — Practise.", items: [
          "Create a 5-slide presentation.",
          "Use bullet points.",
          "Add one image per slide."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is on the title slide?", a: ["topic and name", "any"] },
       { q: "Name the 4 parts.", a: ["title intro body conclusion", "any"] }]),

    D(4, "🎤", "Presenting",
      "Learn to present your slides.",
      `<p class='big-emoji'>🎤 📊 🗣️</p>
       <p>Good <b>presenting skills</b> make your message powerful.</p>

       <h3>🖼️ Illustration — Body Language</h3>
       <pre>
   ✅ GOOD PRESENTER                 ❌ NERVOUS PRESENTER
   ┌───────────────────┐             ┌───────────────────┐
   │                   │             │                   │
   │  🙂 Stands up     │             │  😰 Slouches      │
   │     straight      │             │                   │
   │                   │             │  😶 Looks down    │
   │  🗣️ Speaks        │             │                   │
   │     clearly       │             │  🗣️ Mumbles       │
   │                   │             │                   │
   │  👀 Looks at      │             │  😬 No eye        │
   │     audience      │             │     contact       │
   └───────────────────┘             └───────────────────┘
       </pre>

       <h3>🧠 Presenting Tips</h3>
       <table border="1" cellpadding="6">
         <tr><th>Tip</th><th>Why</th></tr>
         <tr><td>Stand up straight</td><td>Shows confidence</td></tr>
         <tr><td>Speak clearly and slowly</td><td>Everyone can hear</td></tr>
         <tr><td>Look at your audience</td><td>Connects with them</td></tr>
         <tr><td>Use simple sentences</td><td>Easy to understand</td></tr>
         <tr><td>Pause between slides</td><td>Lets ideas sink in</td></tr>
         <tr><td>Answer questions politely</td><td>Shows you know your topic</td></tr>
         <tr><td>Practise, practise, practise</td><td>Reduces nervousness</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How should you speak when presenting?</p>
       <p><b>Answer:</b> <b>Clearly and slowly</b> so everyone can understand.</p>

       <h3>💡 Fun Fact</h3>
       <p>The fear of public speaking is called "glossophobia". It's one of the most common fears!</p>`,

      [{ heading: "Exercise 63.1 — Say.", items: [
          "Name 3 presentation tips.",
          "How should you speak?",
          "Why look at your audience?",
          "Why practise?"
        ]},
       { heading: "Exercise 63.2 — Practise.", items: [
          "Practise your 5-slide presentation in front of a mirror.",
          "Time yourself — aim for 3 minutes.",
          "Present to a family member."
        ]},
       { heading: "Exercise 63.3 — Reflect.", items: [
          "What went well? ___",
          "What to improve? ___",
          "What felt hard? ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How should you speak?", a: ["clearly", "slowly", "any"] },
       { q: "Name a presentation tip.", a: ["stand up straight", "any"] }]),

    D(5, "🎨", "Presentation Poster",
      "Make a presentation poster.",
      `<p class='big-emoji'>🎨 📊 ✨</p>
       <p>Make a <b>"Presentations"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │        📊 PRESENTATIONS 📊            │
   ├──────────────────────────────────────┤
   │  1. DESIGN          2. SLIDES        │
   │  ✅ Few words        Slide 1: Title  │
   │  ✅ Big font         Slide 2: Intro  │
   │  ✅ Clear images     Slide 3-4: Body │
   │  ✅ Simple colours   Slide 5: End    │
   ├──────────────────────────────────────┤
   │  3. CONTENT         4. PRESENTING    │
   │  • Bullet points    • Stand up       │
   │  • One idea/slide   • Speak clearly  │
   │  • Bold key words   • Eye contact    │
   │  • Images           • Practise       │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Design, Slides, Content, Presenting</li>
         <li>At least 3 items in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 64.1 — Draw and label.", items: [
          "Design tips (3+)",
          "Slide structure (4 parts)",
          "Content tips (3+)",
          "Presenting tips (3+)"
        ]},
       { heading: "Exercise 64.2 — Answer.", items: [
          "Name a design tip.",
          "What is a slide?",
          "Name the 4 parts of a presentation.",
          "How should you speak?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name a presentation tip.", a: ["speak clearly", "any"] },
       { q: "Name the 4 parts.", a: ["title intro body conclusion", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — MULTIMEDIA
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Multimedia", days: [

    D(1, "📝", "Text",
      "Learn about text in multimedia.",
      `<p class='big-emoji'>📝 🔤 ✍️</p>
       <p><b>Multimedia</b> uses more than one type of media together.</p>

       <h3>🖼️ Illustration — The 4 Media Types</h3>
       <pre>
   ┌─────────────────────────────────────────────┐
   │         🌐 MULTIMEDIA 🌐                     │
   ├─────────────────────────────────────────────┤
   │  📝 TEXT        🔊 AUDIO                    │
   │  (words)         (sound)                    │
   ├─────────────────────────────────────────────┤
   │  🖼️ IMAGE       🎥 VIDEO                    │
   │  (pictures)      (moving pictures)          │
   └─────────────────────────────────────────────┘
       </pre>

       <h3>🖼️ Text Examples</h3>
       <ul>
         <li>Words in a book</li>
         <li>Headlines on a news site</li>
         <li>Captions under photos</li>
         <li>Text in a video game</li>
         <li>Emojis 😊 (yes, emojis are text!)</li>
       </ul>

       <h3>🧠 Text Properties</h3>
       <table border="1" cellpadding="6">
         <tr><th>Property</th><th>Example</th></tr>
         <tr><td>Font</td><td>Arial, Times</td></tr>
         <tr><td>Size</td><td>12pt, 24pt</td></tr>
         <tr><td>Colour</td><td>Red, blue</td></tr>
         <tr><td>Style</td><td>Bold, italic</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is text?</p>
       <p><b>Answer:</b> <b>Words</b> on a screen.</p>

       <h3>💡 Fun Fact</h3>
       <p>The average person reads about 200 words per minute. But you can hear up to 400 words per minute!</p>`,

      [{ heading: "Exercise 65.1 — Say.", items: [
          "What is multimedia?",
          "What is text?",
          "How can we change text?",
          "Name 4 text properties."
        ]},
       { heading: "Exercise 65.2 — List text types.", items: [
          "3 places you see text:",
          "1. ___", "2. ___", "3. ___"
        ]},
       { heading: "Exercise 65.3 — Draw.", items: [
          "Draw 4 examples of text you see in a day."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is text?", a: ["words", "any"] }]),

    D(2, "🔊", "Audio",
      "Learn about audio in multimedia.",
      `<p class='big-emoji'>🔊 🎵 🎤</p>
       <p><b>Audio</b> is sound. It makes multimedia come alive!</p>

       <h3>🖼️ Illustration — Types of Audio</h3>
       <pre>
   🎵 MUSIC                🗣️ VOICE
   ┌──────────────┐        ┌──────────────┐
   │ ♪♪♪          │        │ "Hello!"     │
   │ Songs,       │        │ Recorded     │
   │ Instruments  │        │ speech       │
   └──────────────┘        └──────────────┘

   🔔 SOUND EFFECTS       🌊 AMBIENT
   ┌──────────────┐        ┌──────────────┐
   │ Ding! Boom!  │        │ ~~~~         │
   │ Short sounds │        │ Background   │
   │              │        │ sounds       │
   └──────────────┘        └──────────────┘
       </pre>

       <h3>🧠 Where We Hear Audio</h3>
       <table border="1" cellpadding="6">
         <tr><th>Where</th><th>Example</th></tr>
         <tr><td>Videos</td><td>Music, voices</td></tr>
         <tr><td>Games</td><td>Sound effects</td></tr>
         <tr><td>Apps</td><td>Notifications</td></tr>
         <tr><td>Websites</td><td>Background music</td></tr>
         <tr><td>Podcasts</td><td>Talking, interviews</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> <b>Sound</b> — including music, voice, and sound effects.</p>

       <h3>💡 Fun Fact</h3>
       <p>Sound travels at about 343 metres per second in air. That's why you see lightning before you hear thunder!</p>`,

      [{ heading: "Exercise 66.1 — Say.", items: [
          "What is audio?",
          "Name 3 types of audio.",
          "Where can we find audio?",
          "Name an audio device."
        ]},
       { heading: "Exercise 66.2 — List audio examples.", items: [
          "3 sounds you heard today:",
          "1. ___", "2. ___", "3. ___"
        ]},
       { heading: "Exercise 66.3 — Draw.", items: [
          "Draw 4 things that make sound."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is audio?", a: ["sound", "any"] },
       { q: "Name a type of audio.", a: ["music", "voice", "any"] }]),

    D(3, "🖼️", "Images",
      "Learn about images in multimedia.",
      `<p class='big-emoji'>🖼️ 📸 🎨</p>
       <p><b>Images</b> are pictures. They help us understand things quickly.</p>

       <h3>🖼️ Illustration — Types of Images</h3>
       <pre>
   📸 PHOTOGRAPH          🎨 DRAWING
   ┌──────────────┐        ┌──────────────┐
   │   [photo]    │        │   [drawing]  │
   │ Real picture │        │ Hand-drawn   │
   │ from camera  │        │ or on screen │
   └──────────────┘        └──────────────┘

   📊 CHART               😀 ICON
   ┌──────────────┐        ┌──────────────┐
   │  ██ ██ ██    │        │   😀 🔍 ⚙️   │
   │  Data shown  │        │  Small       │
   │  visually    │        │  pictures    │
   └──────────────┘        └──────────────┘
       </pre>

       <h3>🧠 Image File Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Best For</th><th>Notes</th></tr>
         <tr><td>JPG</td><td>Photos</td><td>Small file</td></tr>
         <tr><td>PNG</td><td>Images with transparency</td><td>Bigger file</td></tr>
         <tr><td>GIF</td><td>Simple animations</td><td>Small file</td></tr>
         <tr><td>SVG</td><td>Icons and logos</td><td>Scales cleanly</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Name 3 types of images.</p>
       <p><b>Answer:</b> Photographs, drawings, and charts.</p>

       <h3>💡 Fun Fact</h3>
       <p>Your phone camera takes images made of millions of tiny dots called "pixels".</p>`,

      [{ heading: "Exercise 67.1 — Say.", items: [
          "Name 3 types of images.",
          "Where do photographs come from?",
          "What is a drawing?",
          "Name 2 image file types."
        ]},
       { heading: "Exercise 67.2 — Practise.", items: [
          "Open a picture on your computer or phone.",
          "Check its file type (.jpg, .png, etc.).",
          "Write: ___"
        ]},
       { heading: "Exercise 67.3 — Draw.", items: [
          "Draw one of each: photograph, drawing, icon."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a type of image.", a: ["photo", "drawing", "any"] },
       { q: "What file type is best for photos?", a: ["jpg", "jpeg"] }]),

    D(4, "🎥", "Video",
      "Learn about video in multimedia.",
      `<p class='big-emoji'>🎥 📺 ▶️</p>
       <p><b>Video</b> is moving pictures with sound.</p>

       <h3>🖼️ Illustration — Video Player</h3>
       <pre>
   ┌─────────────────────────────────────┐
   │                                     │
   │         [VIDEO PLAYING]             │
   │                                     │
   └─────────────────────────────────────┘
   ▶️  ━━━━━━━━━━━━━━━━━━ 03:45 / 05:30
   ⏪  ⏯️  ⏩  🔊  ⛶  ⋮
       </pre>

       <h3>🧠 Video Buttons</h3>
       <table border="1" cellpadding="6">
         <tr><th>Button</th><th>Symbol</th><th>Action</th></tr>
         <tr><td>Play</td><td>▶️</td><td>Start playing</td></tr>
         <tr><td>Pause</td><td>⏸️</td><td>Stop temporarily</td></tr>
         <tr><td>Stop</td><td>⏹️</td><td>Stop and rewind</td></tr>
         <tr><td>Rewind</td><td>⏪</td><td>Go back</td></tr>
         <tr><td>Forward</td><td>⏩</td><td>Go forward</td></tr>
         <tr><td>Volume</td><td>🔊</td><td>Control sound</td></tr>
         <tr><td>Fullscreen</td><td>⛶</td><td>Fill the screen</td></tr>
       </table>

       <h3>🧠 Video File Types</h3>
       <ul>
         <li><b>MP4</b> — most common, works everywhere</li>
         <li><b>AVI</b> — older format</li>
         <li><b>MOV</b> — Apple format</li>
         <li><b>MKV</b> — high quality</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is video?</p>
       <p><b>Answer:</b> <b>Moving pictures with sound</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>YouTube uploads 500 hours of video every minute — that's 720,000 hours per day!</p>`,

      [{ heading: "Exercise 68.1 — Say.", items: [
          "What is video?",
          "Name 3 video buttons.",
          "What can videos do?",
          "Name a video file type."
        ]},
       { heading: "Exercise 68.2 — Practise.", items: [
          "Open a video on a device.",
          "Press Play, Pause, Rewind, Forward.",
          "Change the volume.",
          "Go fullscreen."
        ]},
       { heading: "Exercise 68.3 — Draw.", items: [
          "Draw a video player with all buttons."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is video?", a: ["moving pictures with sound", "any"] },
       { q: "Name a video button.", a: ["play", "pause", "any"] },
       { q: "Name a video file type.", a: ["mp4", "avi", "any"] }]),

    D(5, "🎨", "Multimedia Poster",
      "Make a multimedia poster.",
      `<p class='big-emoji'>🎨 📽️ 📝🔊🖼️🎥</p>
       <p>Make a <b>"Multimedia"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │         📽️ MULTIMEDIA 📽️             │
   ├──────────────────────────────────────┤
   │  📝 TEXT            🔊 AUDIO         │
   │  • Fonts             • Music         │
   │  • Sizes             • Voice         │
   │  • Colours           • Effects       │
   ├──────────────────────────────────────┤
   │  🖼️ IMAGE          🎥 VIDEO         │
   │  • Photos            • Play          │
   │  • Drawings          • Pause         │
   │  • Icons             • MP4           │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Text, Audio, Image, Video</li>
         <li>At least 3 examples in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 69.1 — Draw and label.", items: [
          "Text examples (3+)",
          "Audio types (3+)",
          "Image types (3+)",
          "Video buttons (4+)"
        ]},
       { heading: "Exercise 69.2 — Answer.", items: [
          "What is multimedia?",
          "Name 3 types of media.",
          "What is audio?",
          "What is video?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name 3 types of media.", a: ["text audio image", "any"] },
       { q: "What is multimedia?", a: ["more than one type of media", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — DIGITAL CITIZENSHIP
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Digital Citizenship", days: [

    D(1, "⚖️", "Rights",
      "Learn about digital rights.",
      `<p class='big-emoji'>⚖️ ✅ 🌍</p>
       <p>Just like in real life, you have <b>rights</b> online.</p>

       <h3>🖼️ Illustration — Your Digital Rights</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         ⚖️ YOUR DIGITAL RIGHTS ⚖️         │
   ├─────────────────────────────────────────┤
   │  🌐 Right to USE the internet            │
   │  🔒 Right to PRIVACY                     │
   │  🛡️ Right to be SAFE                     │
   │  🤝 Right to be RESPECTED                │
   │  🗣️ Right to EXPRESS yourself            │
   │  📚 Right to LEARN                       │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 What Each Right Means</h3>
       <table border="1" cellpadding="6">
         <tr><th>Right</th><th>Meaning</th></tr>
         <tr><td>Use</td><td>You can use the internet to learn and play</td></tr>
         <tr><td>Privacy</td><td>Your personal info stays private</td></tr>
         <tr><td>Safety</td><td>You should be safe from harm online</td></tr>
         <tr><td>Respect</td><td>Others should treat you kindly</td></tr>
         <tr><td>Expression</td><td>You can share your ideas</td></tr>
         <tr><td>Learning</td><td>You can learn anything online</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Name a digital right.</p>
       <p><b>Answer:</b> The right to <b>be safe online</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>In 2016, the United Nations declared internet access a basic human right!</p>`,

      [{ heading: "Exercise 70.1 — Say.", items: [
          "Name 3 digital rights.",
          "Why do we have rights?",
          "What is privacy?",
          "What is the right to be safe?"
        ]},
       { heading: "Exercise 70.2 — Match.", items: [
          "Privacy → ___",
          "Safety → ___",
          "Respect → ___",
          "Learning → ___"
        ]},
       { heading: "Exercise 70.3 — Draw.", items: [
          "Draw a poster with 4 digital rights."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a digital right.", a: ["be safe", "privacy", "any"] },
       { q: "Why do we have rights?", a: ["to protect us", "any"] }]),

    D(2, "📋", "Responsibilities",
      "Learn about digital responsibilities.",
      `<p class='big-emoji'>📋 ✅ 🤝</p>
       <p>With rights come <b>responsibilities</b>. These are the things we should do.</p>

       <h3>🖼️ Illustration — Rights & Responsibilities</h3>
       <pre>
   ┌────────────────┬────────────────────────┐
   │    RIGHT       │    RESPONSIBILITY      │
   ├────────────────┼────────────────────────┤
   │ Use internet   │ Use it wisely          │
   │ Be safe        │ Keep yourself safe     │
   │ Privacy        │ Respect others' privacy│
   │ Express self   │ Be kind and truthful   │
   │ Learn          │ Study and share        │
   └────────────────┴────────────────────────┘
       </pre>

       <h3>🧠 Digital Responsibilities</h3>
       <ul>
         <li>Be kind to others online</li>
         <li>Keep your passwords safe</li>
         <li>Do not cyberbully</li>
         <li>Follow the rules</li>
         <li>Respect other people's work (don't copy)</li>
         <li>Give credit when you use others' ideas</li>
         <li>Report bad behaviour</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Name a responsibility.</p>
       <p><b>Answer:</b> <b>Be kind to others</b> online.</p>

       <h3>💡 Fun Fact</h3>
       <p>Every time you post online, you are also responsible for how it affects others.</p>`,

      [{ heading: "Exercise 71.1 — Say.", items: [
          "Name 3 responsibilities.",
          "Why be responsible online?",
          "What is cyberbullying?",
          "Why respect others' work?"
        ]},
       { heading: "Exercise 71.2 — Match rights to responsibilities.", items: [
          "Right to use → ___",
          "Right to safety → ___",
          "Right to respect → ___"
        ]},
       { heading: "Exercise 71.3 — List your responsibilities.", items: [
          "3 things you will do online:",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a responsibility.", a: ["be kind", "keep password safe", "any"] },
       { q: "Why be responsible online?", a: ["so others are safe", "any"] }]),

    D(3, "🤝", "Respect",
      "Learn to show respect online.",
      `<p class='big-emoji'>🤝 💬 💗</p>
       <p><b>Respect</b> means treating others the way you want to be treated.</p>

       <h3>🖼️ Illustration — Respect vs Disrespect</h3>
       <pre>
   ✅ RESPECTFUL                     ❌ DISRESPECTFUL
   ┌─────────────────────┐          ┌─────────────────────┐
   │ "Great idea!"       │          │ "That's stupid!"    │
   │ "Thank you!"        │          │ "Whatever..."       │
   │ "I disagree, but    │          │ "You're wrong!"     │
   │  I understand."     │          │                     │
   │ Listening           │          │ Interrupting        │
   └─────────────────────┘          └─────────────────────┘
       </pre>

       <h3>🧠 Ways to Show Respect</h3>
       <table border="1" cellpadding="6">
         <tr><th>Do</th><th>Don't</th></tr>
         <tr><td>Use polite words</td><td>Use rude words</td></tr>
         <tr><td>Listen to others</td><td>Interrupt</td></tr>
         <tr><td>Disagree kindly</td><td>Attack people</td></tr>
         <tr><td>Share credit</td><td>Steal ideas</td></tr>
         <tr><td>Use normal case</td><td>WRITE IN ALL CAPS</td></tr>
         <tr><td>Ask permission</td><td>Share without asking</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you show respect online?</p>
       <p><b>Answer:</b> By using <b>polite words</b> and treating others kindly.</p>

       <h3>💡 Fun Fact</h3>
       <p>Studies show that kind behaviour spreads — when you're kind, others are more likely to be kind too!</p>`,

      [{ heading: "Exercise 72.1 — Say.", items: [
          "How do you show respect online?",
          "Why not write in ALL CAPS?",
          "What should you not share?",
          "How do you disagree politely?"
        ]},
       { heading: "Exercise 72.2 — Rewrite respectfully.", items: [
          '"That\'s stupid!" → ___',
          '"WRONG!" → ___',
          '"Whatever." → ___'
        ]},
       { heading: "Exercise 72.3 — Draw.", items: [
          "Draw 3 respectful online interactions."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you show respect?", a: ["polite words", "any"] },
       { q: "Why not ALL CAPS?", a: ["looks like shouting", "any"] }]),

    D(4, "👣", "Digital Footprint",
      "Learn about your digital footprint.",
      `<p class='big-emoji'>👣 💻 📸</p>
       <p>Your <b>digital footprint</b> is the trail of information you leave online.</p>

       <h3>🖼️ Illustration — Your Digital Footprint</h3>
       <pre>
   What you do online leaves a trail...

   📸 Posts ─────► 👣
   💬 Comments ───► 👣
   🔍 Searches ───► 👣
   ❤️ Likes ──────► 👣
   📧 Emails ─────► 👣
   🎮 Games ──────► 👣

   Even deleted posts may be saved somewhere!
       </pre>

       <h3>🧠 Two Types of Footprint</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>What</th><th>Example</th></tr>
         <tr><td>Active</td><td>Things you CHOOSE to share</td><td>Posts, comments, photos</td></tr>
         <tr><td>Passive</td><td>Data collected without you noticing</td><td>Location, browsing history</td></tr>
       </table>

       <h3>🧠 Your Footprint Affects</h3>
       <ul>
         <li>Future schools</li>
         <li>Future jobs</li>
         <li>Friendships</li>
         <li>Your reputation</li>
         <li>Your safety</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a digital footprint?</p>
       <p><b>Answer:</b> The <b>trail of information</b> you leave online.</p>

       <h3>💡 Fun Fact</h3>
       <p>Colleges and employers often check your social media before accepting you!</p>`,

      [{ heading: "Exercise 73.1 — Say.", items: [
          "What is a digital footprint?",
          "What leaves a digital footprint?",
          "Why be careful online?",
          "What is the difference between active and passive?"
        ]},
       { heading: "Exercise 73.2 — Trace your footprint.", items: [
          "What did you do online today?",
          "1. ___", "2. ___", "3. ___"
        ]},
       { heading: "Exercise 73.3 — Think before posting.", items: [
          "Ask yourself: Would I want my parents to see this?",
          "Would I want my teacher to see this?",
          "Would I want this in 5 years?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a digital footprint?", a: ["trail online", "any"] },
       { q: "What leaves a footprint?", a: ["posts", "photos", "any"] }]),

    D(5, "🎨", "Citizenship Poster",
      "Make a citizenship poster.",
      `<p class='big-emoji'>🎨 🌍 🤝</p>
       <p>Make a <b>"Good Digital Citizen"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │      🌍 GOOD DIGITAL CITIZEN 🌍       │
   ├──────────────────────────────────────┤
   │  1. RIGHTS          2. RESPONSIBILITIES│
   │  • Use internet     • Be kind         │
   │  • Privacy          • Keep safe       │
   │  • Be safe          • Respect others  │
   │  • Learn            • Report problems │
   ├──────────────────────────────────────┤
   │  3. RESPECT         4. FOOTPRINT      │
   │  ✅ Polite words    👣 Posts          │
   │  ✅ Listen          👣 Comments       │
   │  ❌ ALL CAPS        👣 Photos         │
   │  ❌ Rudeness        👣 Searches       │
   ├──────────────────────────────────────┤
   │  ⭐ My pledge: ___________            │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Rights, Responsibilities, Respect, Footprint</li>
         <li>At least 3 items in each</li>
         <li>Include a personal pledge</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 74.1 — Draw and label.", items: [
          "Rights (3+)",
          "Responsibilities (3+)",
          "Respect rules (4)",
          "Footprint examples (3+)"
        ]},
       { heading: "Exercise 74.2 — Write a pledge.", items: [
          "I will be a good digital citizen by:",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p>⭐ for a complete, colourful poster with a pledge.</p>`,

      [{ q: "Name a good digital citizen trait.", a: ["kind", "safe", "any"] },
       { q: "What is a digital footprint?", a: ["trail online", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Presentations",
      "Review presentations.",
      `<p class='big-emoji'>🔁 📊</p>

       <h3>🖼️ Summary</h3>
       <pre>
   PRESENTATION STRUCTURE       DESIGN TIPS
   ┌───────────────────────┐    ┌────────────────┐
   │ 1. Title              │    │ Few words      │
   │ 2. Introduction       │    │ Big fonts      │
   │ 3. Body (3-5 slides)  │    │ Clear images   │
   │ 4. Conclusion         │    │ Simple colours │
   └───────────────────────┘    └────────────────┘

   PRESENTING TIPS
   ┌──────────────────────────────────────────┐
   │ Stand up • Speak clearly • Eye contact   │
   │ Use simple sentences • Practise          │
   └──────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a slide?</p>
       <p><b>Answer:</b> One page of a presentation.</p>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "What is a presentation?",
          "What is a slide?",
          "Name 3 design tips.",
          "Name 3 presentation tips.",
          "How many words per slide?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a slide?", a: ["one page", "any"] },
       { q: "Name a design tip.", a: ["few words", "any"] }]),

    D(2, "🔁", "Review Multimedia",
      "Review multimedia.",
      `<p class='big-emoji'>🔁 🎨 📽️</p>

       <h3>🖼️ 4 Media Types</h3>
       <pre>
   📝 TEXT      🔊 AUDIO      🖼️ IMAGE     🎥 VIDEO
   ┌─────┐      ┌─────┐       ┌─────┐      ┌─────┐
   │Words│      │Sound│       │Pix  │      │Movie│
   └─────┘      └─────┘       └─────┘      └─────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is audio?</p>
       <p><b>Answer:</b> Sound.</p>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
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
      `<p class='big-emoji'>🔁 🌍 🤝</p>

       <h3>🖼️ Summary</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │      🌍 DIGITAL CITIZENSHIP 🌍           │
   ├─────────────────────────────────────────┤
   │  ⚖️ RIGHTS:      Safe, privacy, respect │
   │  📋 RESPONSE:    Be kind, keep safe     │
   │  🤝 RESPECT:     Polite words, listen   │
   │  👣 FOOTPRINT:   Posts, comments, photos│
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a digital footprint?</p>
       <p><b>Answer:</b> Trail of information you leave online.</p>`,

      [{ heading: "Exercise 77.1 — Answer.", items: [
          "Name 2 digital rights.",
          "Name 2 responsibilities.",
          "What is a digital footprint?",
          "How do you show respect?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a digital right.", a: ["be safe", "privacy", "any"] },
       { q: "What is a digital footprint?", a: ["trail online", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test on Month 4.",
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
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>8–10 correct = ⭐⭐⭐</li>
         <li>5–7 correct = ⭐⭐</li>
         <li>0–4 correct = ⭐</li>
       </ul>`,

      [{ heading: "Exercise 78.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is multimedia?", a: ["more than one type of media", "any"] },
       { q: "What is a slide?", a: ["one page", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>
       <p><b>Monthly Test 4</b>: 60 marks.</p>

       <h3>📋 Test Sections</h3>
       <ul>
         <li>Part A — Presentations (15 marks)</li>
         <li>Part B — Multimedia (15 marks)</li>
         <li>Part C — Citizenship (15 marks)</li>
         <li>Part D — Practical (15 marks)</li>
       </ul>

       <h3>🎊 After the Test</h3>
       <ul>
         <li>Show your work.</li>
         <li>Give yourself a star! ⭐</li>
         <li>Set a goal for Month 5.</li>
       </ul>`,

      [{ heading: "Exercise 79.1 — Complete the test.", items: [
          "Part A — Presentations (15)",
          "Part B — Multimedia (15)",
          "Part C — Citizenship (15)",
          "Part D — Practical (15)"
        ]},
       { heading: "Exercise 79.2 — Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 60</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — DATABASES
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Databases", days: [

    D(1, "🗄️", "Records",
      "Learn about records in databases.",
      `<p class='big-emoji'>🗄️ 📋 📊</p>
       <p>A <b>database</b> is an organized collection of information.</p>
       <p>A <b>record</b> is one row of information about one person or thing.</p>

       <h3>🖼️ Illustration — Records in a Database</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         👥 PUPIL DATABASE 👥             │
   ├───────────┬──────┬───────┬──────────────┤
   │ Name      │ Age  │ Class │ Score        │
   ├───────────┼──────┼───────┼──────────────┤
   │ Ama       │ 10   │ 5A    │ 85   ← RECORD│
   │ Kofi      │ 11   │ 5B    │ 90   ← RECORD│
   │ Adwoa     │ 10   │ 5A    │ 78   ← RECORD│
   │ Yaw       │ 11   │ 5B    │ 92   ← RECORD│
   └───────────┴──────┴───────┴──────────────┘
   Each ROW = one record (about one pupil)
       </pre>

       <h3>🧠 Database Examples</h3>
       <table border="1" cellpadding="6">
         <tr><th>Database</th><th>Records are…</th></tr>
         <tr><td>Phone contacts</td><td>Each contact</td></tr>
         <tr><td>Library</td><td>Each book</td></tr>
         <tr><td>School pupils</td><td>Each pupil</td></tr>
         <tr><td>Hospital</td><td>Each patient</td></tr>
         <tr><td>Bank</td><td>Each customer</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a record?</p>
       <p><b>Answer:</b> <b>One row</b> of information about one person or thing.</p>

       <h3>💡 Fun Fact</h3>
       <p>The world's largest database is Google's — it stores over 100 million gigabytes of data!</p>`,

      [{ heading: "Exercise 80.1 — Say.", items: [
          "What is a database?",
          "What is a record?",
          "Give an example of a record.",
          "Name 3 databases you use."
        ]},
       { heading: "Exercise 80.2 — Create records.", items: [
          "Create a record for yourself:",
          "Name: ___, Age: ___, Class: ___, Score: ___"
        ]},
       { heading: "Exercise 80.3 — Draw.", items: [
          "Draw a table with 4 records."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a database?", a: ["organized collection of information", "any"] },
       { q: "What is a record?", a: ["one row", "any"] }]),

    D(2, "🗄️", "Fields",
      "Learn about fields in databases.",
      `<p class='big-emoji'>🗄️ 📋 🔲</p>
       <p>A <b>field</b> is one piece of information (like name, age). It is one column.</p>

       <h3>🖼️ Illustration — Fields in a Database</h3>
       <pre>
   ┌───────────┬──────┬───────┬──────────┐
   │  FIELD 1  │ F2   │  F3   │  FIELD 4 │
   │  Name     │ Age  │ Class │ Score    │
   ├───────────┼──────┼───────┼──────────┤
   │  Ama      │ 10   │ 5A    │ 85       │
   │  Kofi     │ 11   │ 5B    │ 90       │
   └───────────┴──────┴───────┴──────────┘
       ↑
       Each COLUMN = one field
       </pre>

       <h3>🧠 Field vs Record</h3>
       <table border="1" cellpadding="6">
         <tr><th>Term</th><th>Direction</th><th>Example</th></tr>
         <tr><td>Field</td><td>Column (vertical)</td><td>Name, Age, Class</td></tr>
         <tr><td>Record</td><td>Row (horizontal)</td><td>Ama, 10, 5A, 85</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One <b>piece of information</b>, like a column in a table.</p>

       <h3>💡 Memory Tip</h3>
       <p><b>F</b>ield = <b>F</b>ull column (vertical). <b>R</b>ecord = <b>R</b>ow (horizontal).</p>`,

      [{ heading: "Exercise 81.1 — Say.", items: [
          "What is a field?",
          "Name 3 fields in a pupil database.",
          "What is the difference between a record and a field?"
        ]},
       { heading: "Exercise 81.2 — Identify fields.", items: [
          "In a book database, what are the fields?",
          "1. ___", "2. ___", "3. ___"
        ]},
       { heading: "Exercise 81.3 — Draw.", items: [
          "Draw a table with 3 fields and 4 records."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] },
       { q: "Is a field a row or column?", a: ["column"] }]),

    D(3, "🗄️", "Sort",
      "Learn about sorting data.",
      `<p class='big-emoji'>🗄️ 🔢 ⬆️⬇️</p>
       <p><b>Sorting</b> means arranging data in order.</p>

       <h3>🖼️ Illustration — Sorting</h3>
       <pre>
   UNSORTED              ASCENDING (A→Z)       DESCENDING (Z→A)
   ┌────────┐            ┌────────┐            ┌────────┐
   │ Ama    │            │ Adwoa  │            │ Yaw    │
   │ Yaw    │            │ Ama    │            │ Kofi   │
   │ Adwoa  │            │ Kofi   │            │ Ama    │
   │ Kofi   │            │ Yaw    │            │ Adwoa  │
   └────────┘            └────────┘            └────────┘

   NUMBERS: Sort 15, 3, 22, 8
   Ascending: 3, 8, 15, 22
   Descending: 22, 15, 8, 3
       </pre>

       <h3>🧠 Sorting Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Order</th><th>Example</th></tr>
         <tr><td>Ascending</td><td>Smallest → Largest</td><td>1, 2, 3, 4</td></tr>
         <tr><td>Ascending</td><td>A → Z</td><td>Ama, Kofi, Yaw</td></tr>
         <tr><td>Descending</td><td>Largest → Smallest</td><td>4, 3, 2, 1</td></tr>
         <tr><td>Descending</td><td>Z → A</td><td>Yaw, Kofi, Ama</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Sort A, C, B ascending.</p>
       <p><b>Answer:</b> A, B, C.</p>

       <h3>💡 Fun Fact</h3>
       <p>Sorting is one of the most important operations in computing. Many algorithms have been invented just to sort faster!</p>`,

      [{ heading: "Exercise 82.1 — Sort.", items: [
          "Sort A, C, B ascending: ___",
          "Sort 5, 1, 3 ascending: ___",
          "Sort Z, X, Y ascending: ___",
          "Sort 10, 5, 20 ascending: ___",
          "Sort 1, 3, 2 descending: ___"
        ]},
       { heading: "Exercise 82.2 — Sort records.", items: [
          "Sort by name ascending:",
          "Kofi, Ama, Yaw, Adwoa → ___"
        ]},
       { heading: "Exercise 82.3 — Sort by score.", items: [
          "Scores: 85, 90, 78, 92",
          "Ascending: ___",
          "Descending: ___"
        ]}],

      `<p><b>82.1:</b> 1. A, B, C 2. 1, 3, 5 3. X, Y, Z 4. 5, 10, 20 5. 3, 2, 1</p>
       <p><b>82.2:</b> Adwoa, Ama, Kofi, Yaw</p>
       <p><b>82.3:</b> 78, 85, 90, 92 / 92, 90, 85, 78</p>`,

      [{ q: "What is ascending order?", a: ["smallest to largest", "any"] },
       { q: "What is descending order?", a: ["largest to smallest", "any"] }]),

    D(4, "🗄️", "Search",
      "Learn about searching databases.",
      `<p class='big-emoji'>🗄️ 🔎 🎯</p>
       <p><b>Searching</b> means looking for information in a database.</p>

       <h3>🖼️ Illustration — Search Examples</h3>
       <pre>
   DATABASE:
   ┌────────┬──────┬───────┬───────┐
   │ Name   │ Age  │ Class │ Score │
   ├────────┼──────┼───────┼───────┤
   │ Ama    │ 10   │ 5A    │ 85    │
   │ Kofi   │ 11   │ 5B    │ 90    │
   │ Adwoa  │ 10   │ 5A    │ 78    │
   │ Yaw    │ 11   │ 5B    │ 92    │
   └────────┴──────┴───────┴───────┘

   SEARCH: Class = 5A
   RESULT: Ama (85), Adwoa (78)

   SEARCH: Age = 11
   RESULT: Kofi (90), Yaw (92)

   SEARCH: Score > 85
   RESULT: Kofi (90), Yaw (92)
       </pre>

       <h3>🧠 Search Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Example</th><th>Result</th></tr>
         <tr><td>Exact match</td><td>Name = "Ama"</td><td>Ama</td></tr>
         <tr><td>Condition</td><td>Score > 85</td><td>Kofi, Yaw</td></tr>
         <tr><td>Contains</td><td>Name starts with "A"</td><td>Ama, Adwoa</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How do you find a specific pupil?</p>
       <p><b>Answer:</b> <b>Search</b> for their name.</p>

       <h3>💡 Fun Fact</h3>
       <p>Google processes 8.5 billion searches every single day!</p>`,

      [{ heading: "Exercise 83.1 — Say.", items: [
          "What is searching?",
          "Give an example search.",
          "Why is searching useful?"
        ]},
       { heading: "Exercise 83.2 — Search this database.", items: [
          "Find all pupils aged 10.",
          "Find all pupils in Class 5B.",
          "Find all pupils with Score > 85."
        ]},
       { heading: "Exercise 83.3 — Design a search.", items: [
          "What field would you search by?",
          "What condition would you use?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is searching?", a: ["looking for information", "any"] },
       { q: "How do you find a specific pupil?", a: ["search name", "any"] }]),

    D(5, "🎨", "Database Poster",
      "Make a database poster.",
      `<p class='big-emoji'>🎨 🗄️ 📊</p>
       <p>Make a <b>"Databases"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │         🗄️ DATABASES 🗄️               │
   ├──────────────────────────────────────┤
   │  1. RECORDS         2. FIELDS        │
   │  ┌──────────┐       ┌──────────┐    │
   │  │ Name  Ama│       │ Name     │    │
   │  │ Age   10 │       │ Age      │    │
   │  │ Class 5A │       │ Class    │    │
   │  └──────────┘       └──────────┘    │
   │  One row = 1 record  One col = 1 field│
   ├──────────────────────────────────────┤
   │  3. SORT            4. SEARCH        │
   │  A→Z (ascending)     Find age = 10   │
   │  Z→A (descending)    Find score > 85 │
   │  1→10                Find class = 5A │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Records, Fields, Sort, Search</li>
         <li>Example table in first 2 sections</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 84.1 — Draw and label.", items: [
          "Record example (table)",
          "Field example (label columns)",
          "Sort examples",
          "Search examples"
        ]},
       { heading: "Exercise 84.2 — Answer.", items: [
          "What is a record?",
          "What is a field?",
          "What is sorting?",
          "What is searching?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] },
       { q: "What is a field?", a: ["one piece of information", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — CODING PROJECT
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Coding Project", days: [

    D(1, "📋", "Plan",
      "Plan a coding project.",
      `<p class='big-emoji'>📋 💻 🎯</p>
       <p>Before you code, you must <b>plan</b> what you will make.</p>

       <h3>🖼️ Illustration — Planning Process</h3>
       <pre>
   STEP 1: IDEA              STEP 2: GOAL
   ┌─────────────────┐       ┌─────────────────┐
   │ A quiz game     │       │ Test 5 questions│
   │ about animals   │       │ on animals      │
   └─────────────────┘       └─────────────────┘

   STEP 3: WHO               STEP 4: FEATURES
   ┌─────────────────┐       ┌─────────────────┐
   │ Class 5 pupils  │       │ • Ask 5 Qs      │
   │ aged 10-11      │       │ • Show score    │
   │                 │       │ • Say "well done"│
   └─────────────────┘       └─────────────────┘

   STEP 5: SKETCH
   ┌─────────────────────────────────────┐
   │   🐘 QUIZ GAME 🐘                   │
   │                                     │
   │   Score: 0                          │
   │                                     │
   │   What is the biggest land animal?  │
   │   [Elephant] [Tiger] [Lion]         │
   └─────────────────────────────────────┘
       </pre>

       <h3>🧠 Planning Questions</h3>
       <table border="1" cellpadding="6">
         <tr><th>Question</th><th>Example Answer</th></tr>
         <tr><td>What will it do?</td><td>A quiz about animals</td></tr>
         <tr><td>Who is it for?</td><td>Class 5 pupils</td></tr>
         <tr><td>What features?</td><td>Questions, score, feedback</td></tr>
         <tr><td>What will it look like?</td><td>Simple, colourful, big text</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is the first step of planning?</p>
       <p><b>Answer:</b> Decide <b>what your program will do</b>.</p>

       <h3>💡 Good Project Ideas</h3>
       <ul>
         <li>❓ Quiz game</li>
         <li>📖 Digital story</li>
         <li>🎮 Number guessing game</li>
         <li>🔢 Maths practice</li>
         <li>🌍 Capital cities quiz</li>
       </ul>`,

      [{ heading: "Exercise 85.1 — Plan your project.", items: [
          "What will it do? ___",
          "Who is it for? ___",
          "What features? ___",
          "What will it look like? ___"
        ]},
       { heading: "Exercise 85.2 — Sketch your design.", items: [
          "Draw what the screen will look like."
        ]},
       { heading: "Exercise 85.3 — Write a pseudocode plan.", items: [
          "1. ___", "2. ___", "3. ___", "4. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the first step of planning?", a: ["decide what it does", "any"] },
       { q: "Name a good project idea.", a: ["quiz", "game", "any"] }]),

    D(2, "🔨", "Build",
      "Build your program.",
      `<p class='big-emoji'>🔨 💻 🧱</p>
       <p>Now you build your program step by step.</p>

       <h3>🖼️ Illustration — Building Process</h3>
       <pre>
   STEP 1: SKELETON
   ┌─────────────────────────────┐
   │   🐘 QUIZ GAME 🐘           │
   │                             │
   │   [empty screen]            │
   └─────────────────────────────┘

   STEP 2: ADD ONE FEATURE
   ┌─────────────────────────────┐
   │   🐘 QUIZ GAME 🐘           │
   │                             │
   │   Score: 0                  │
   └─────────────────────────────┘

   STEP 3: ADD QUESTIONS
   ┌─────────────────────────────┐
   │   🐘 QUIZ GAME 🐘           │
   │   Score: 0                  │
   │   What is the biggest       │
   │   land animal?              │
   └─────────────────────────────┘

   STEP 4: ADD ANSWERS
   ┌─────────────────────────────┐
   │   [Elephant][Tiger][Lion]   │
   └─────────────────────────────┘
       </pre>

       <h3>🧠 Building Rules</h3>
       <ul>
         <li>Build <b>one feature at a time</b></li>
         <li>Test after each addition</li>
         <li>Save your work often (Ctrl + S)</li>
         <li>Keep it simple at first</li>
         <li>Add extras only after the basic version works</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Why save often?</p>
       <p><b>Answer:</b> So you don't <b>lose your work</b> if the computer crashes.</p>

       <h3>💡 Pro Tip</h3>
       <p>Build a working version first, then add fancy features. A simple working program is better than a fancy broken one!</p>`,

      [{ heading: "Exercise 86.1 — Build step by step.", items: [
          "Open your coding app.",
          "Add your first block or line.",
          "Test it.",
          "Add the next feature.",
          "Test again.",
          "Save."
        ]},
       { heading: "Exercise 86.2 — Track progress.", items: [
          "Feature 1: ___ ✅",
          "Feature 2: ___ ✅",
          "Feature 3: ___ ✅",
          "Feature 4: ___ ✅"
        ]},
       { heading: "Exercise 86.3 — Reflect.", items: [
          "What was easy? ___",
          "What was hard? ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why save often?", a: ["don't lose work", "any"] },
       { q: "How do you build?", a: ["one feature at a time", "any"] }]),

    D(3, "🧪", "Test",
      "Test your project thoroughly.",
      `<p class='big-emoji'>🧪 ✅ 🔍</p>
       <p>Testing makes sure your program works in all situations.</p>

       <h3>🖼️ Illustration — Test Cases</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │       🧪 TEST CASE TABLE 🧪              │
   ├──────┬─────────────┬──────────┬─────────┤
   │ #    │ Input       │ Expected │ Actual  │
   ├──────┼─────────────┼──────────┼─────────┤
   │ 1    │ Elephant    │ Correct! │ Correct!│
   │ 2    │ Tiger       │ Wrong!   │ Wrong!  │
   │ 3    │ (no answer) │ Prompt   │ Prompt  │
   │ 4    │ 5 answers   │ Show score│ Show score│
   └──────┴─────────────┴──────────┴─────────┘
       </pre>

       <h3>🧠 Testing Steps</h3>
       <ol>
         <li>Run your program.</li>
         <li>Try <b>normal</b> inputs.</li>
         <li>Try <b>edge</b> inputs (empty, very large).</li>
         <li>Try <b>wrong</b> inputs (what if user makes a mistake?).</li>
         <li>Check the output.</li>
         <li>Note any problems.</li>
       </ol>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What do you do when testing?</p>
       <p><b>Answer:</b> Run the program and <b>check for errors</b> with different inputs.</p>

       <h3>💡 Test Types</h3>
       <ul>
         <li><b>Normal test</b> — typical input</li>
         <li><b>Edge test</b> — the limits (0, blank, max)</li>
         <li><b>Error test</b> — wrong inputs</li>
       </ul>`,

      [{ heading: "Exercise 87.1 — Test your program.", items: [
          "Run your program.",
          "Test 4 different inputs.",
          "Record what happens each time."
        ]},
       { heading: "Exercise 87.2 — Test table.", items: [
          "Test 1: Input ___, Expected ___, Actual ___",
          "Test 2: Input ___, Expected ___, Actual ___",
          "Test 3: Input ___, Expected ___, Actual ___",
          "Test 4: Input ___, Expected ___, Actual ___"
        ]},
       { heading: "Exercise 87.3 — Fix bugs.", items: [
          "What bugs did you find?",
          "How did you fix them?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do when testing?", a: ["run and check", "any"] },
       { q: "Name a test type.", a: ["normal", "edge", "error", "any"] }]),

    D(4, "🎤", "Present",
      "Present your project.",
      `<p class='big-emoji'>🎤 💻 ✨</p>
       <p>Presenting shows what you made and what you learned.</p>

       <h3>🖼️ Illustration — Presentation Structure</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │  1. INTRODUCE                           │
   │     "This is my quiz game."             │
   ├─────────────────────────────────────────┤
   │  2. EXPLAIN                             │
   │     "It asks 5 questions about animals. │
   │      You get a point for each correct   │
   │      answer."                           │
   ├─────────────────────────────────────────┤
   │  3. DEMONSTRATE                         │
   │     (Show it running)                   │
   ├─────────────────────────────────────────┤
   │  4. SHARE                               │
   │     "The hardest part was making the    │
   │      score count work."                 │
   ├─────────────────────────────────────────┤
   │  5. ANSWER QUESTIONS                    │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Presentation Tips</h3>
       <ul>
         <li>Stand up straight</li>
         <li>Speak clearly and slowly</li>
         <li>Show the program working</li>
         <li>Say what was hard and what you learned</li>
         <li>Answer questions politely</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What do you show first?</p>
       <p><b>Answer:</b> What the <b>program does</b>.</p>

       <h3>💡 Practise</h3>
       <p>Practise your presentation in front of a mirror or family member before presenting to the class.</p>`,

      [{ heading: "Exercise 88.1 — Present.", items: [
          "Introduce your program.",
          "Explain what it does.",
          "Demonstrate it working.",
          "Say what you learned.",
          "Answer questions."
        ]},
       { heading: "Exercise 88.2 — Prepare your talk.", items: [
          "Opening: ___",
          "What it does: ___",
          "What was hard: ___",
          "What I learned: ___"
        ]},
       { heading: "Exercise 88.3 — Practise.", items: [
          "Practise with a family member.",
          "Time yourself — aim for 2 minutes.",
          "Ask for feedback."
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: "What do you show first?", a: ["what program does", "any"] },
       { q: "What do you say at the end?", a: ["what you learned", "any"] }]),

    D(5, "📁", "Project",
      "Finalise and add to portfolio.",
      `<p class='big-emoji'>📁 🌟 🏆</p>
       <p>Add your project to your portfolio so you can see your progress over time.</p>

       <h3>🖼️ Illustration — Your Portfolio</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │         📁 MY PORTFOLIO 📁               │
   ├─────────────────────────────────────────┤
   │  📋 Project Plan                        │
   │     (What I wanted to build)            │
   ├─────────────────────────────────────────┤
   │  💻 Code                                │
   │     (Screenshot or printout)            │
   ├─────────────────────────────────────────┤
   │  🧪 Test Results                        │
   │     (What I tested, what I found)       │
   ├─────────────────────────────────────────┤
   │  🎤 Presentation Notes                  │
   │     (What I said to the class)          │
   ├─────────────────────────────────────────┤
   │  💭 Reflection                          │
   │     • What I learned: ___               │
   │     • What was hard: ___                │
   │     • What I want to improve: ___       │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 What to Include</h3>
       <table border="1" cellpadding="6">
         <tr><th>Item</th><th>Why</th></tr>
         <tr><td>Your plan</td><td>Shows your thinking</td></tr>
         <tr><td>Your code</td><td>Shows your work</td></tr>
         <tr><td>Test results</td><td>Shows you tested it</td></tr>
         <tr><td>Presentation notes</td><td>Shows you shared it</td></tr>
         <tr><td>Reflection</td><td>Shows what you learned</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What goes in your portfolio?</p>
       <p><b>Answer:</b> <b>Plan, code, test results, presentation notes, and reflection</b>.</p>

       <h3>💡 Reflection Questions</h3>
       <ul>
         <li>What did I learn?</li>
         <li>What was easy?</li>
         <li>What was hard?</li>
         <li>What would I do differently?</li>
         <li>What will I build next?</li>
       </ul>`,

      [{ heading: "Exercise 89.1 — Add to portfolio.", items: [
          "Project plan",
          "Code (screenshot)",
          "Test results",
          "Presentation notes"
        ]},
       { heading: "Exercise 89.2 — Write a reflection.", items: [
          "What I learned: ___",
          "What was easy: ___",
          "What was hard: ___",
          "What I would change: ___",
          "What I will build next: ___"
        ]}],

      `<p>⭐ for a complete portfolio.</p>`,

      [{ q: "What goes in your portfolio?", a: ["design code notes", "any"] },
       { q: "Why reflect?", a: ["to learn from experience", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — COMPUTATIONAL THINKING
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Computational Thinking", days: [

    D(1, "🧩", "Decomposition",
      "Learn about decomposition.",
      `<p class='big-emoji'>🧩 🔨 🎯</p>
       <p><b>Decomposition</b> means breaking a big problem into smaller parts.</p>

       <h3>🖼️ Illustration — Decomposition</h3>
       <pre>
   BIG PROBLEM: Plan a birthday party

   ┌─────────────────────────────────────────┐
   │           🎂 PLAN A PARTY 🎂             │
   └────────────────┬────────────────────────┘
       ┌────────────┼────────────┬────────────┐
       │            │            │            │
   ┌───▼───┐    ┌───▼───┐    ┌───▼───┐    ┌───▼───┐
   │Guest  │    │Food   │    │Decor- │    │Music  │
   │list   │    │       │    │ations │    │       │
   │• Who  │    │• Cake │    │• Ball-│    │• Songs│
   │• Invite│   │• Drinks│   │  oons │    │• Speak│
   │       │    │• Snacks│   │• Table│    │  er   │
   └───────┘    └───────┘    └───────┘    └───────┘
       </pre>

       <h3>🧠 Why Decompose?</h3>
       <table border="1" cellpadding="6">
         <tr><th>Big problem</th><th>Smaller parts</th><th>Why easier</th></tr>
         <tr><td>Clean the house</td><td>Bedroom, kitchen, sitting room</td><td>One room at a time</td></tr>
         <tr><td>Write a story</td><td>Characters, setting, plot</td><td>Build piece by piece</td></tr>
         <tr><td>Bake a cake</td><td>Ingredients, mix, bake, decorate</td><td>Clear steps</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is decomposition?</p>
       <p><b>Answer:</b> Breaking a <b>big problem into smaller parts</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>NASA used decomposition to send people to the moon — they broke the problem into thousands of smaller ones!</p>`,

      [{ heading: "Exercise 90.1 — Decompose.", items: [
          "How would you break down 'Plan a party'?",
          "1. ___", "2. ___", "3. ___", "4. ___"
        ]},
       { heading: "Exercise 90.2 — Decompose more.", items: [
          "How would you break down 'Write a story'?",
          "How would you break down 'Build a house'?",
          "How would you break down 'Learn to swim'?"
        ]},
       { heading: "Exercise 90.3 — Draw.", items: [
          "Draw a mind map for 'Plan a school event'."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is decomposition?", a: ["breaking into smaller parts", "any"] },
       { q: "Why decompose?", a: ["easier to solve", "any"] }]),

    D(2, "🔍", "Patterns",
      "Learn about pattern recognition.",
      `<p class='big-emoji'>🔍 🔢 🎨</p>
       <p><b>Pattern recognition</b> means finding things that repeat.</p>

       <h3>🖼️ Illustration — Pattern Types</h3>
       <pre>
   NUMBER PATTERNS           SHAPE PATTERNS
   ┌──────────────────┐      ┌──────────────────┐
   │ 2, 4, 6, 8, 10   │      │ 🔴🔵🔴🔵🔴🔵   │
   │ 5, 10, 15, 20    │      │ ⭐⬜⭐⬜⭐⬜    │
   │ 1, 3, 5, 7, 9    │      │ 🔺🟢🔺🟢🔺🟢   │
   │ (add 2)          │      │ (repeating pairs)│
   └──────────────────┘      └──────────────────┘

   TIME PATTERNS            DAILY PATTERNS
   ┌──────────────────┐      ┌──────────────────┐
   │ 7:00 wake up     │      │ Morning → Lunch  │
   │ 8:00 school      │      │ → Afternoon      │
   │ 3:00 home        │      │ → Evening → Night│
   │ (same each day)  │      │ (every day)      │
   └──────────────────┘      └──────────────────┘
       </pre>

       <h3>🧠 Why Patterns Help</h3>
       <ul>
         <li>Predict what comes next</li>
         <li>Solve faster (you don't have to figure it out each time)</li>
         <li>Understand how things work</li>
         <li>Create algorithms</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What comes next: 2, 4, 6, 8…?</p>
       <p><b>Answer:</b> <b>10</b> — the pattern is "add 2".</p>

       <h3>💡 Fun Fact</h3>
       <p>Patterns appear everywhere in nature: spirals in shells, honeycombs, and even the way leaves grow!</p>`,

      [{ heading: "Exercise 91.1 — Find the pattern.", items: [
          "2, 4, 6, 8, ___",
          "5, 10, 15, 20, ___",
          "10, 20, 30, 40, ___",
          "1, 3, 5, 7, ___",
          "3, 6, 9, 12, ___"
        ]},
       { heading: "Exercise 91.2 — Draw the pattern.", items: [
          "🔴🔵🔴🔵🔴 ___",
          "⭐⬜⭐⬜⭐ ___",
          "🔺🟢🔺🟢🔺 ___"
        ]},
       { heading: "Exercise 91.3 — Find patterns in nature.", items: [
          "Find 3 patterns in nature.",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p><b>91.1:</b> 1. 10 2. 25 3. 50 4. 9 5. 15</p>
       <p><b>91.2:</b> 1. 🔵 2. ⭐ 3. 🟢</p>`,

      [{ q: "What is pattern recognition?", a: ["finding repeating things", "any"] },
       { q: "What comes next: 2, 4, 6, ___?", a: ["8"] }]),

    D(3, "🎯", "Abstraction",
      "Learn about abstraction.",
      `<p class='big-emoji'>🎯 🔍 ✂️</p>
       <p><b>Abstraction</b> means focusing on the <b>important details</b> and ignoring the rest.</p>

       <h3>🖼️ Illustration — Abstraction</h3>
       <pre>
   DESCRIBING A BUS:

   ❌ TOO MUCH DETAIL              ✅ ABSTRACTED
   ┌───────────────────────┐      ┌───────────────────┐
   │ The bus is big,       │      │ A bus is:         │
   │ yellow, with red      │      │ • Big             │
   │ seats, 48 windows,    │      │ • Has 4 wheels    │
   │ 12 lights, sunroof,   │      │ • Carries people  │
   │ bumper stickers...    │      └───────────────────┘
   └───────────────────────┘      (The important parts!)
   (Too many details!)

   DESCRIBING A CHAIR:
   ┌───────────────────────────────────────┐
   │ Important: Has a seat, back, 4 legs   │
   │ Ignore: Colour, material, brand       │
   └───────────────────────────────────────┘
       </pre>

       <h3>🧠 Why Abstract?</h3>
       <ul>
         <li>Makes it easier to understand</li>
         <li>Focuses on what matters</li>
         <li>Helps communicate ideas clearly</li>
         <li>Lets us solve problems faster</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is abstraction?</p>
       <p><b>Answer:</b> Focusing on <b>important details</b> and ignoring unimportant ones.</p>

       <h3>💡 Real-Life Example</h3>
       <p>A map is an abstraction of a real place. It shows roads and landmarks, but not every tree or house!</p>`,

      [{ heading: "Exercise 92.1 — Say.", items: [
          "What is abstraction?",
          "What are the important details of a chair?",
          "What can we ignore?",
          "Give an example of abstraction."
        ]},
       { heading: "Exercise 92.2 — Abstract these.", items: [
          "Describe a car (3 important things): ___",
          "Describe a book (3 important things): ___",
          "Describe a house (3 important things): ___"
        ]},
       { heading: "Exercise 92.3 — Draw.", items: [
          "Draw an abstract map of your neighborhood."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is abstraction?", a: ["focus on important details", "any"] },
       { q: "Give an example.", a: ["map", "any"] }]),

    D(4, "📋", "Algorithms",
      "Learn algorithm design.",
      `<p class='big-emoji'>📋 🔢 🎯</p>
       <p><b>Algorithm design</b> is writing clear steps to solve a problem.</p>

       <h3>🖼️ Illustration — Algorithm Design Steps</h3>
       <pre>
   STEP 1: UNDERSTAND           STEP 2: DECOMPOSE
   ┌─────────────────┐          ┌─────────────────┐
   │ What is the     │          │ Break into      │
   │ problem?        │          │ smaller parts   │
   └─────────────────┘          └─────────────────┘

   STEP 3: FIND PATTERNS        STEP 4: WRITE STEPS
   ┌─────────────────┐          ┌─────────────────┐
   │ Do any parts    │          │ 1. ___          │
   │ repeat?         │          │ 2. ___          │
   └─────────────────┘          │ 3. ___          │
                                └─────────────────┘
   STEP 5: TEST
   ┌─────────────────┐
   │ Does it work?   │
   │ Try it!         │
   └─────────────────┘
       </pre>

       <h3>🖼️ Example — Algorithm for Making a Sandwich</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │  ALGORITHM: Make a Sandwich             │
   ├─────────────────────────────────────────┤
   │  1. Get 2 slices of bread               │
   │  2. Add butter                          │
   │  3. Add filling                         │
   │  4. Close sandwich                      │
   │  5. Cut in half                         │
   │  6. Serve                               │
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is algorithm design?</p>
       <p><b>Answer:</b> <b>Writing steps</b> to solve a problem clearly.</p>

       <h3>💡 From Simple to Complex</h3>
       <p>Simple algorithms: make tea. Complex algorithms: drive a car, play chess, land a rocket!</p>`,

      [{ heading: "Exercise 93.1 — Design algorithms.", items: [
          "Making a sandwich",
          "Washing hands",
          "Crossing the road"
        ]},
       { heading: "Exercise 93.2 — Test your algorithm.", items: [
          "Read your algorithm.",
          "Does it work?",
          "What would you change?"
        ]},
       { heading: "Exercise 93.3 — Challenge.", items: [
          "Design an algorithm to sort 5 numbers.",
          "Write the steps:",
          "1. ___", "2. ___", "3. ___", "4. ___", "5. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is algorithm design?", a: ["writing steps to solve", "any"] },
       { q: "Name the 5 steps.", a: ["understand decompose patterns write test", "any"] }]),

    D(5, "🎨", "Thinking Poster",
      "Make a computational thinking poster.",
      `<p class='big-emoji'>🎨 🧩 🔍 🎯 📋</p>
       <p>Make a <b>"Computational Thinking"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │     🧩 COMPUTATIONAL THINKING 🧩      │
   ├──────────────────────────────────────┤
   │  1. DECOMPOSITION   2. PATTERNS      │
   │  Break big → small   Find repeats    │
   │  ┌─────┐            2,4,6,8,...      │
   │  │ Big │             🔴🔵🔴🔵        │
   │  ├──┬──┤                            │
   │  │S1│S2│                            │
   │  └──┴──┘                            │
   ├──────────────────────────────────────┤
   │  3. ABSTRACTION     4. ALGORITHMS    │
   │  Focus on           1. First step    │
   │  important          2. Next step     │
   │  Ignore rest        3. Test          │
   │                     ✓ Done           │
   ├──────────────────────────────────────┤
   │  ⭐ My favourite: ___________         │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: Decomposition, Patterns, Abstraction, Algorithms</li>
         <li>At least 1 example in each</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 94.1 — Draw and label.", items: [
          "Decomposition example",
          "Pattern example",
          "Abstraction example",
          "Algorithm example"
        ]},
       { heading: "Exercise 94.2 — Answer.", items: [
          "What is decomposition?",
          "What is pattern recognition?",
          "What is abstraction?",
          "What is algorithm design?"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name the 4 parts of computational thinking.", a: ["decomposition pattern abstraction algorithm", "any"] },
       { q: "What is decomposition?", a: ["breaking into smaller parts", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Databases",
      "Review databases.",
      `<p class='big-emoji'>🔁 🗄️ 📊</p>

       <h3>🖼️ Summary</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │          🗄️ DATABASES 🗄️                 │
   ├─────────────────────────────────────────┤
   │  RECORD:  One ROW (horizontal)          │
   │  FIELD:   One COLUMN (vertical)         │
   │  SORT:    Arrange in order              │
   │  SEARCH:  Find specific records         │
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a field?</p>
       <p><b>Answer:</b> One piece of information (a column).</p>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "What is a database?",
          "What is a record?",
          "What is a field?",
          "What is sorting?",
          "What is searching?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] },
       { q: "What is a field?", a: ["one piece of information", "any"] }]),

    D(2, "🔁", "Review Projects",
      "Review coding projects.",
      `<p class='big-emoji'>🔁 💻 📋</p>

       <h3>🖼️ Project Steps</h3>
       <pre>
   PLAN → BUILD → TEST → PRESENT → PORTFOLIO
   ┌───┐  ┌───┐   ┌───┐  ┌─────┐  ┌────┐
   │📋 │→ │🔨 │→  │🧪 │→ │🎤   │→ │📁  │
   └───┘  └───┘   └───┘  └─────┘  └────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is the first step?</p>
       <p><b>Answer:</b> Plan — decide what your program will do.</p>`,

      [{ heading: "Exercise 96.1 — Answer.", items: [
          "What is the first step?",
          "Why test?",
          "Why save often?",
          "What goes in your portfolio?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Why save often?", a: ["don't lose work", "any"] },
       { q: "What is the first step?", a: ["plan", "any"] }]),

    D(3, "🔁", "Review Thinking",
      "Review computational thinking.",
      `<p class='big-emoji'>🔁 🧩</p>

       <h3>🖼️ The 4 Parts</h3>
       <pre>
   ┌──────────────┬──────────────┐
   │ DECOMPOSE    │ FIND PATTERNS│
   │ Break it down│ Look for     │
   │              │ repeats      │
   ├──────────────┼──────────────┤
   │ ABSTRACT     │ ALGORITHM    │
   │ Focus on     │ Write steps  │
   │ important    │              │
   └──────────────┴──────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is decomposition?</p>
       <p><b>Answer:</b> Breaking into smaller parts.</p>`,

      [{ heading: "Exercise 97.1 — Answer.", items: [
          "What is decomposition?",
          "What is pattern recognition?",
          "What is abstraction?",
          "What is algorithm design?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is decomposition?", a: ["breaking into smaller parts", "any"] },
       { q: "What is abstraction?", a: ["focus on important", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test on Month 5.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a database?</li>
         <li>What is a record?</li>
         <li>What is a field?</li>
         <li>What is sorting?</li>
         <li>What is the first step of planning?</li>
         <li>Why test?</li>
         <li>What is decomposition?</li>
         <li>What is pattern recognition?</li>
         <li>What is abstraction?</li>
         <li>What is algorithm design?</li>
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>8–10 = ⭐⭐⭐ Excellent</li>
         <li>5–7 = ⭐⭐ Good</li>
         <li>0–4 = ⭐ Needs revision</li>
       </ul>`,

      [{ heading: "Exercise 98.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a field?", a: ["one piece of information", "any"] },
       { q: "What is decomposition?", a: ["breaking into smaller parts", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>
       <p><b>Monthly Test 5</b>: 60 marks.</p>

       <h3>📋 Test Sections</h3>
       <ul>
         <li>Part A — Databases (15 marks)</li>
         <li>Part B — Projects (15 marks)</li>
         <li>Part C — Thinking (15 marks)</li>
         <li>Part D — Practical (15 marks)</li>
       </ul>

       <h3>🎊 After the Test</h3>
       <ul>
         <li>Show your work.</li>
         <li>Give yourself a star! ⭐</li>
         <li>Set a goal for Month 6.</li>
       </ul>`,

      [{ heading: "Exercise 99.1 — Complete the test.", items: [
          "Part A — Databases (15)",
          "Part B — Projects (15)",
          "Part C — Thinking (15)",
          "Part D — Practical (15)"
        ]},
       { heading: "Exercise 99.2 — Celebrate!", items: [
          "Show your work.",
          "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 60</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — AI & ETHICS
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "AI & Ethics", days: [

    D(1, "🤖", "What is AI?",
      "Learn about artificial intelligence.",
      `<p class='big-emoji'>🤖 💻 🧠</p>
       <p><b>Artificial Intelligence (AI)</b> is when computers do tasks that usually need human intelligence.</p>

       <h3>🖼️ Illustration — AI vs Traditional Programs</h3>
       <pre>
   TRADITIONAL PROGRAM              AI PROGRAM
   ┌─────────────────────┐          ┌─────────────────────┐
   │ Follows fixed rules │          │ Learns from data    │
   │                     │          │                     │
   │ "IF x = 1 THEN…"    │          │ "I've seen 1000s    │
   │                     │          │  of cats, so I       │
   │ Only does what it's │          │  can recognise a    │
   │ told!               │          │  cat!"              │
   └─────────────────────┘          └─────────────────────┘
       </pre>

       <h3>🧠 What AI Can Do</h3>
       <table border="1" cellpadding="6">
         <tr><th>Task</th><th>AI Example</th><th>Human Equivalent</th></tr>
         <tr><td>See</td><td>Face recognition</td><td>Eyes</td></tr>
         <tr><td>Hear</td><td>Voice assistants</td><td>Ears</td></tr>
         <tr><td>Speak</td><td>Siri, Alexa</td><td>Mouth</td></tr>
         <tr><td>Decide</td><td>Self-driving cars</td><td>Brain</td></tr>
         <tr><td>Learn</td><td>YouTube recommendations</td><td>Experience</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is AI?</p>
       <p><b>Answer:</b> Computers doing tasks that usually need <b>human intelligence</b>.</p>

       <h3>💡 Fun Fact</h3>
       <p>The term "Artificial Intelligence" was invented in 1956 — almost 70 years ago!</p>`,

      [{ heading: "Exercise 100.1 — Say.", items: [
          "What is AI?",
          "Name 3 examples of AI.",
          "How does AI help us?",
          "What is the difference between AI and traditional programs?"
        ]},
       { heading: "Exercise 100.2 — Spot the AI.", items: [
          "YouTube recommendations → ___",
          "Calculator → ___",
          "Siri → ___",
          "Alarm clock → ___"
        ]},
       { heading: "Exercise 100.3 — List AI you use.", items: [
          "3 AI features you use:",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p><b>100.2:</b> 1. AI 2. Not AI 3. AI 4. Not AI</p>`,

      [{ q: "What is AI?", a: ["computers doing human-like tasks", "any"] },
       { q: "Name an example of AI.", a: ["siri", "alexa", "any"] },
       { q: "Is a calculator AI?", a: ["no"] }]),

    D(2, "🎯", "Examples",
      "Learn more AI examples in daily life.",
      `<p class='big-emoji'>🎯 🤖 📱</p>
       <p>AI is all around us — often we don't even notice it!</p>

       <h3>🖼️ Illustration — AI in Your Day</h3>
       <pre>
   ☀️ MORNING
   ┌────────────────────────────────────────┐
   │ 📱 Phone unlocks with your face        │
   │ 🗣️ You ask Siri the weather            │
   │ 🎵 Spotify recommends a song           │
   ├────────────────────────────────────────┤
   🏫 AT SCHOOL
   │ 🌐 Google search sorts results for you │
   │ 📸 Google Photos groups your pictures  │
   ├────────────────────────────────────────┤
   🎮 AFTERNOON
   │ 🎮 Game enemies get smarter            │
   │ 📺 YouTube recommends videos           │
   ├────────────────────────────────────────┤
   🌙 EVENING
   │ 📱 Gmail filters spam                  │
   │ 🗺️ Google Maps finds the fastest route │
   │ 📺 Netflix suggests a movie            │
   └────────────────────────────────────────┘
       </pre>

       <h3>🧠 Types of AI</h3>
       <table border="1" cellpadding="6">
         <tr><th>Type</th><th>Example</th><th>What It Does</th></tr>
         <tr><td>Voice</td><td>Siri, Alexa</td><td>Understands speech</td></tr>
         <tr><td>Vision</td><td>Face unlock</td><td>Recognises images</td></tr>
         <tr><td>Recommendation</td><td>Netflix, YouTube</td><td>Suggests content</td></tr>
         <tr><td>Translation</td><td>Google Translate</td><td>Translates languages</td></tr>
         <tr><td>Driving</td><td>Tesla</td><td>Self-driving cars</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What AI is in a phone?</p>
       <p><b>Answer:</b> <b>Voice assistants</b> like Siri, plus face unlock and photo sorting.</p>

       <h3>💡 Fun Fact</h3>
       <p>AI recommends 70% of what people watch on YouTube!</p>`,

      [{ heading: "Exercise 101.1 — Say.", items: [
          "Name 3 AI examples you have seen.",
          "How does YouTube use AI?",
          "How do cameras use AI?",
          "Name 3 types of AI."
        ]},
       { heading: "Exercise 101.2 — Match the AI.", items: [
          "Siri → ___",
          "Google Translate → ___",
          "Netflix → ___",
          "Google Maps → ___"
        ]},
       { heading: "Exercise 101.3 — Draw.", items: [
          "Draw 4 AI features you use."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name an AI example.", a: ["siri", "youtube", "any"] },
       { q: "How does YouTube use AI?", a: ["recommends videos", "any"] }]),

    D(3, "💡", "Uses",
      "Learn how AI is used in different fields.",
      `<p class='big-emoji'>💡 🏥 🏫 🌾</p>
       <p>AI is changing the world in medicine, education, farming, and more!</p>

       <h3>🖼️ Illustration — AI in Different Fields</h3>
       <pre>
   🏥 MEDICINE              🏫 EDUCATION
   ┌─────────────────┐      ┌─────────────────┐
   │ • Diagnose       │      │ • Personalised  │
   │   diseases       │      │   lessons       │
   │ • Read X-rays    │      │ • Auto-grading  │
   │ • Find new drugs │      │ • Translation   │
   └─────────────────┘      └─────────────────┘

   🌾 AGRICULTURE           🚗 TRANSPORT
   ┌─────────────────┐      ┌─────────────────┐
   │ • Monitor crops  │      │ • Self-driving  │
   │ • Predict weather│      │ • Traffic flow  │
   │ • Detect pests   │      │ • Route planning│
   └─────────────────┘      └─────────────────┘

   🎮 ENTERTAINMENT         🎨 CREATIVITY
   ┌─────────────────┐      ┌─────────────────┐
   │ • Game AI        │      │ • AI art        │
   │ • Smart NPCs     │      │ • Music writing │
   │ • Suggest games  │      │ • Writing help  │
   └─────────────────┘      └─────────────────┘
       </pre>

       <h3>🧠 AI Helping People</h3>
       <table border="1" cellpadding="6">
         <tr><th>Field</th><th>How AI Helps</th></tr>
         <tr><td>Medicine</td><td>Doctors can find diseases earlier</td></tr>
         <tr><td>Education</td><td>Students learn at their own pace</td></tr>
         <tr><td>Farming</td><td>Farmers know when to water crops</td></tr>
         <tr><td>Transport</td><td>Cars can drive themselves safely</td></tr>
         <tr><td>Environment</td><td>Track climate change</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> How is AI used in medicine?</p>
       <p><b>Answer:</b> AI helps doctors <b>diagnose diseases</b> and read X-rays faster.</p>

       <h3>💡 Fun Fact</h3>
       <p>AI can detect some cancers better than human doctors can!</p>`,

      [{ heading: "Exercise 102.1 — Say.", items: [
          "How is AI used in medicine?",
          "How is AI used in schools?",
          "How is AI used in transport?",
          "How is AI used in farming?"
        ]},
       { heading: "Exercise 102.2 — Match AI to field.", items: [
          "Self-driving cars → ___",
          "Crop monitoring → ___",
          "Personalised lessons → ___",
          "Reading X-rays → ___"
        ]},
       { heading: "Exercise 102.3 — Imagine.", items: [
          "How could AI help your school?",
          "Write 3 ideas:",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is AI used in medicine?", a: ["helps doctors", "any"] },
       { q: "How is AI used in schools?", a: ["personalised lessons", "any"] }]),

    D(4, "⚖️", "Ethics",
      "Learn about AI ethics.",
      `<p class='big-emoji'>⚖️ 🤔 ⚠️</p>
       <p>AI is powerful — we must think about the <b>right and wrong</b> ways to use it.</p>

       <h3>🖼️ Illustration — AI Ethics Questions</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │       ⚖️ AI ETHICS QUESTIONS ⚖️         │
   ├─────────────────────────────────────────┤
   │  🤔 Should AI make decisions for us?    │
   │     (What if it makes a wrong choice?)  │
   ├─────────────────────────────────────────┤
   │  🧑‍💼 Should AI take people's jobs?      │
   │     (What happens to those workers?)    │
   ├─────────────────────────────────────────┤
   │  ⚖️ Is AI always fair?                   │
   │     (Does it treat everyone equally?)   │
   ├─────────────────────────────────────────┤
   │  🔒 Who sees our data?                   │
   │     (AI learns from what we share!)     │
   ├─────────────────────────────────────────┤
   │  🎭 Can AI be creative?                  │
   │     (Who owns AI-made art?)             │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Big Questions</h3>
       <table border="1" cellpadding="6">
         <tr><th>Question</th><th>Think About</th></tr>
         <tr><td>Should AI make decisions?</td><td>What if AI has bias?</td></tr>
         <tr><td>Should AI take jobs?</td><td>What happens to workers?</td></tr>
         <tr><td>Is AI always fair?</td><td>Does it treat everyone equally?</td></tr>
         <tr><td>Who owns AI art?</td><td>The programmer? The AI? Nobody?</td></tr>
         <tr><td>Is AI safe?</td><td>What if it makes mistakes?</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Why should we think about AI ethics?</p>
       <p><b>Answer:</b> Because AI can affect people's <b>lives, jobs, and safety</b>.</p>

       <h3>💡 Real Examples</h3>
       <ul>
         <li>AI hiring tools that unfairly rejected women</li>
         <li>Self-driving car accidents</li>
         <li>AI-generated fake news and deepfakes</li>
         <li>AI facial recognition used for surveillance</li>
       </ul>

       <h3>💭 Your Turn</h3>
       <p>What do YOU think? Discuss with your family:</p>
       <ul>
         <li>Should robots have rights?</li>
         <li>Would you trust a self-driving car?</li>
         <li>Should AI help make laws?</li>
       </ul>`,

      [{ heading: "Exercise 103.1 — Say.", items: [
          "Should AI make decisions for us?",
          "What if AI makes a mistake?",
          "Should AI take people's jobs?",
          "Is AI always fair?",
          "Who owns AI-created art?"
        ]},
       { heading: "Exercise 103.2 — Discuss.", items: [
          "Ask your family: Would you trust a self-driving car?",
          "Write their answers: ___"
        ]},
       { heading: "Exercise 103.3 — Think.", items: [
          "What should AI never do?",
          "1. ___", "2. ___", "3. ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why think about AI ethics?", a: ["affects people", "any"] },
       { q: "What is a big AI question?", a: ["should AI take jobs", "any"] }]),

    D(5, "🎨", "AI Poster",
      "Make an AI poster.",
      `<p class='big-emoji'>🎨 🤖 ⚖️</p>
       <p>Make an <b>"AI & Ethics"</b> poster showing everything you learned this week.</p>

       <h3>🖼️ Poster Layout</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │       🤖 AI & ETHICS 🤖               │
   ├──────────────────────────────────────┤
   │  1. WHAT IS AI?     2. EXAMPLES      │
   │  Computers doing    • Siri            │
   │  human-like tasks   • Netflix         │
   │                     • Face unlock     │
   ├──────────────────────────────────────┤
   │  3. USES            4. ETHICS        │
   │  🏥 Medicine         ⚖️ Fair?        │
   │  🏫 Education        🤔 Decisions?    │
   │  🌾 Farming          💼 Jobs?         │
   │  🚗 Transport        🔒 Data?         │
   ├──────────────────────────────────────┤
   │  ⭐ My view: ___________              │
   └──────────────────────────────────────┘
       </pre>

       <h3>📋 Poster Requirements</h3>
       <ul>
         <li>Title at the top</li>
         <li>4 sections: What is AI?, Examples, Uses, Ethics</li>
         <li>At least 3 items in each</li>
         <li>Include your opinion on AI ethics</li>
         <li>Colourful drawings</li>
       </ul>`,

      [{ heading: "Exercise 104.1 — Draw and label.", items: [
          "What is AI",
          "3+ examples",
          "3+ uses",
          "2+ ethics questions"
        ]},
       { heading: "Exercise 104.2 — Write your view.", items: [
          "I think AI is: ___",
          "AI should: ___",
          "AI should never: ___"
        ]}],

      `<p>⭐ for a complete, colourful poster.</p>`,

      [{ q: "Name an example of AI.", a: ["siri", "any"] },
       { q: "Why think about AI ethics?", a: ["affects people", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — CODING PROJECT 2
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Coding Project 2", days: [

    D(1, "📋", "Design",
      "Design a bigger coding project.",
      `<p class='big-emoji'>📋 💻 🎨</p>
       <p>Now you will design a <b>bigger</b>, more complex project.</p>

       <h3>🖼️ Illustration — Project Planning Worksheet</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │      📋 PROJECT PLANNING 📋              │
   ├─────────────────────────────────────────┤
   │  PROJECT NAME: ___                       │
   │                                          │
   │  PURPOSE:                                │
   │  What does it do? ___                    │
   │                                          │
   │  USERS:                                  │
   │  Who uses it? ___                        │
   │                                          │
   │  FEATURES:                               │
   │  1. ___                                  │
   │  2. ___                                  │
   │  3. ___                                  │
   │                                          │
   │  SKETCH:                                 │
   │  ┌─────────────────┐                    │
   │  │                 │                    │
   │  │  [Draw screen]  │                    │
   │  │                 │                    │
   │  └─────────────────┘                    │
   │                                          │
   │  PSEUDOCODE:                             │
   │  1. ___                                  │
   │  2. ___                                  │
   │  3. ___                                  │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Design Steps</h3>
       <ol>
         <li><b>Choose a topic</b> — what will your program be about?</li>
         <li><b>Plan features</b> — what will it do?</li>
         <li><b>Draw a sketch</b> — what will it look like?</li>
         <li><b>Write pseudocode</b> — what are the steps?</li>
       </ol>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What comes first in design?</p>
       <p><b>Answer:</b> Choosing a <b>topic</b> — what your program will be about.</p>

       <h3>💡 Project Ideas for Grade 5</h3>
       <ul>
         <li>🎯 A longer quiz (10+ questions)</li>
         <li>📖 An interactive story with choices</li>
         <li>🎮 A two-player game</li>
         <li>🔢 A maths practice app</li>
         <li>🌍 A geography quiz</li>
         <li>🧠 A memory card game</li>
       </ul>`,

      [{ heading: "Exercise 105.1 — Design your project.", items: [
          "Topic: ___",
          "Purpose: ___",
          "Who it's for: ___",
          "Features (3+): ___",
          "Sketch (draw): ___",
          "Pseudocode (5+ steps): ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What comes first?", a: ["choose topic", "any"] },
       { q: "What is a feature?", a: ["what program does", "any"] }]),

    D(2, "🔨", "Build",
      "Build your program step by step.",
      `<p class='big-emoji'>🔨 💻 🧱</p>
       <p>Build your program <b>one piece at a time</b>. Test as you go.</p>

       <h3>🖼️ Illustration — Build Order</h3>
       <pre>
   STEP 1: BASIC SCREEN
   ┌─────────────────────────────┐
   │  [Title on screen]          │
   └─────────────────────────────┘

   STEP 2: ADD FUNCTION 1
   ┌─────────────────────────────┐
   │  [Title]                    │
   │  [Function 1 working]       │
   └─────────────────────────────┘

   STEP 3: ADD FUNCTION 2
   ┌─────────────────────────────┐
   │  [Title]                    │
   │  [Function 1]               │
   │  [Function 2]               │
   └─────────────────────────────┘

   STEP 4: ADD FUNCTION 3
   ┌─────────────────────────────┐
   │  [Complete working program] │
   └─────────────────────────────┘

   TEST AT EACH STEP ✓
       </pre>

       <h3>🧠 Building Tips</h3>
       <table border="1" cellpadding="6">
         <tr><th>Tip</th><th>Why</th></tr>
         <tr><td>Start with the simplest version</td><td>Working base first</td></tr>
         <tr><td>Add one feature at a time</td><td>Easier to find bugs</td></tr>
         <tr><td>Save after each feature</td><td>Don't lose progress</td></tr>
         <tr><td>Test after every change</td><td>Catch bugs early</td></tr>
         <tr><td>Comment your code</td><td>Remember what you did</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> Why save often?</p>
       <p><b>Answer:</b> So you don't <b>lose your work</b> if the power goes out or the app crashes.</p>

       <h3>💡 Common Building Mistakes</h3>
       <ul>
         <li>Trying to build everything at once</li>
         <li>Not testing until the end</li>
         <li>Not saving regularly</li>
         <li>Making it too complex too soon</li>
       </ul>`,

      [{ heading: "Exercise 106.1 — Build step by step.", items: [
          "Feature 1: ___ ✅",
          "Feature 2: ___ ✅",
          "Feature 3: ___ ✅",
          "Feature 4: ___ ✅",
          "Feature 5: ___ ✅"
        ]},
       { heading: "Exercise 106.2 — Track your progress.", items: [
          "Date started: ___",
          "Date finished: ___",
          "Total features: ___",
          "Total bugs fixed: ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why save often?", a: ["don't lose work", "any"] },
       { q: "How do you build?", a: ["one feature at a time", "any"] }]),

    D(3, "🧪", "Test",
      "Test your project thoroughly.",
      `<p class='big-emoji'>🧪 ✅ 🔍</p>
       <p>Thorough testing catches all the bugs before your users do!</p>

       <h3>🖼️ Illustration — Complete Test Plan</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │       🧪 TEST PLAN 🧪                    │
   ├─────────────────────────────────────────┤
   │  TEST 1: Normal use                     │
   │  Input: Normal input                    │
   │  Expected: Correct output                │
   │  Result: ___ ✅ / ❌                     │
   ├─────────────────────────────────────────┤
   │  TEST 2: Edge case                      │
   │  Input: 0, empty, very big              │
   │  Expected: Handles gracefully            │
   │  Result: ___ ✅ / ❌                     │
   ├─────────────────────────────────────────┤
   │  TEST 3: Wrong input                    │
   │  Input: Letters instead of numbers      │
   │  Expected: No crash                     │
   │  Result: ___ ✅ / ❌                     │
   ├─────────────────────────────────────────┤
   │  TEST 4: All features together          │
   │  Input: Complete walkthrough            │
   │  Expected: All work together             │
   │  Result: ___ ✅ / ❌                     │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Test Types</h3>
       <table border="1" cellpadding="6">
         <tr><th>Test</th><th>What</th><th>Example</th></tr>
         <tr><td>Unit</td><td>One piece</td><td>Does the button work?</td></tr>
         <tr><td>Integration</td><td>Pieces together</td><td>Do buttons + score work?</td></tr>
         <tr><td>User test</td><td>Real user tries it</td><td>Ask a friend</td></tr>
         <tr><td>Edge test</td><td>Boundaries</td><td>Empty input, max value</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What do you do when testing?</p>
       <p><b>Answer:</b> Run the program and <b>check for errors</b> with different inputs.</p>

       <h3>💡 Bugs You Might Find</h3>
       <ul>
         <li>Score doesn't count correctly</li>
         <li>Wrong answer marked as correct</li>
         <li>Program crashes on empty input</li>
         <li>Game doesn't end</li>
         <li>Feature doesn't work with others</li>
       </ul>`,

      [{ heading: "Exercise 107.1 — Test plan.", items: [
          "Test 1 (Normal): Input ___, Expected ___, Actual ___",
          "Test 2 (Edge): Input ___, Expected ___, Actual ___",
          "Test 3 (Error): Input ___, Expected ___, Actual ___",
          "Test 4 (Full): Input ___, Expected ___, Actual ___"
        ]},
       { heading: "Exercise 107.2 — Fix bugs.", items: [
          "Bug 1: ___ → Fixed: ___",
          "Bug 2: ___ → Fixed: ___",
          "Bug 3: ___ → Fixed: ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do when testing?", a: ["run and check", "any"] },
       { q: "Name a test type.", a: ["unit", "integration", "edge", "any"] }]),

    D(4, "🎤", "Present",
      "Present your project confidently.",
      `<p class='big-emoji'>🎤 💻 ✨</p>
       <p>A good presentation shows what your program does AND what you learned.</p>

       <h3>🖼️ Illustration — Presentation Script</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │       🎤 MY PRESENTATION 🎤              │
   ├─────────────────────────────────────────┤
   │  OPENING:                                │
   │  "Hello! My name is ___. My project      │
   │   is called ___."                        │
   ├─────────────────────────────────────────┤
   │  WHAT IT DOES:                           │
   │  "This program ___."                     │
   ├─────────────────────────────────────────┤
   │  DEMONSTRATION:                          │
   │  "Watch — I'll show you how it works."   │
   │  (Show it running)                       │
   ├─────────────────────────────────────────┤
   │  WHAT I LEARNED:                         │
   │  "I learned ___ while making this."      │
   ├─────────────────────────────────────────┤
   │  CHALLENGES:                             │
   │  "The hardest part was ___."             │
   ├─────────────────────────────────────────┤
   │  CLOSING:                                │
   │  "Thank you for listening! Questions?"   │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Presentation Tips</h3>
       <ul>
         <li><b>Practise first</b> — in front of a mirror or family</li>
         <li><b>Speak clearly</b> — not too fast, not too slow</li>
         <li><b>Make eye contact</b> — with your audience</li>
         <li><b>Show, don't just tell</b> — demonstrate it working</li>
         <li><b>Be honest</b> — say what was hard and what you learned</li>
         <li><b>Answer questions politely</b> — don't be afraid to say "I don't know"</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What do you show first?</p>
       <p><b>Answer:</b> What the <b>program does</b> — then demonstrate it working.</p>

       <h3>💡 Practice Makes Perfect</h3>
       <p>The more you practise, the more confident you'll feel. Even professional presenters rehearse many times!</p>`,

      [{ heading: "Exercise 108.1 — Prepare your presentation.", items: [
          "Opening line: ___",
          "What it does: ___",
          "What I learned: ___",
          "What was hard: ___",
          "Closing line: ___"
        ]},
       { heading: "Exercise 108.2 — Practise.", items: [
          "Practise with a family member.",
          "Time yourself — aim for 3 minutes.",
          "Get feedback: ___"
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: "What do you show first?", a: ["what program does", "any"] },
       { q: "Name a presentation tip.", a: ["speak clearly", "any"] }]),

    D(5, "📁", "Portfolio",
      "Add your project to your portfolio.",
      `<p class='big-emoji'>📁 🌟 🏆</p>
       <p>Your portfolio shows your <b>growth as a programmer</b> over the whole year.</p>

       <h3>🖼️ Illustration — Full Year Portfolio</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │      📁 MY COMPUTING PORTFOLIO 📁       │
   ├─────────────────────────────────────────┤
   │  📋 PROJECT 1 (Week 18)                  │
   │     • Plan, code, tests, presentation   │
   ├─────────────────────────────────────────┤
   │  📋 PROJECT 2 (Week 22)                  │
   │     • Bigger project with more features │
   ├─────────────────────────────────────────┤
   │  🎨 POSTERS                              │
   │     • Digital Literacy, Word, Spreadsheet│
   │     • Safety, Citizenship, AI, etc.      │
   ├─────────────────────────────────────────┤
   │  💭 REFLECTIONS                          │
   │     • What I learned                     │
   │     • What was easy / hard               │
   │     • My growth                          │
   ├─────────────────────────────────────────┤
   │  ⭐ ACHIEVEMENTS                         │
   │     • Certificates                       │
   │     • Stars earned                       │
   │     • Best work                          │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Reflection Questions</h3>
       <table border="1" cellpadding="6">
         <tr><th>Question</th><th>Answer</th></tr>
         <tr><td>What was my biggest achievement?</td><td>___</td></tr>
         <tr><td>What was the hardest thing?</td><td>___</td></tr>
         <tr><td>What am I most proud of?</td><td>___</td></tr>
         <tr><td>What will I learn next?</td><td>___</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What goes in your portfolio?</p>
       <p><b>Answer:</b> Your best work: <b>plans, code, tests, presentations, and reflections</b>.</p>

       <h3>💡 Why Reflect?</h3>
       <ul>
         <li>Helps you see how much you've learned</li>
         <li>Identifies what you want to improve</li>
         <li>Reminds you of your achievements</li>
         <li>Prepares you for next year</li>
       </ul>`,

      [{ heading: "Exercise 109.1 — Finalise your portfolio.", items: [
          "Project 1",
          "Project 2",
          "All posters",
          "Reflections",
          "Achievements"
        ]},
       { heading: "Exercise 109.2 — Reflect.", items: [
          "My biggest achievement: ___",
          "The hardest thing: ___",
          "I am most proud of: ___",
          "I want to learn: ___"
        ]}],

      `<p>⭐ for a complete portfolio.</p>`,

      [{ q: "What goes in your portfolio?", a: ["best work", "any"] },
       { q: "Why reflect?", a: ["to see growth", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Literacy",
      "Revise digital literacy.",
      `<p class='big-emoji'>🔁 💻 🌐</p>

       <h3>🖼️ Quick Reference Card</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │      💻 COMPUTING QUICK GUIDE 💻         │
   ├─────────────────────────────────────────┤
   │  HARDWARE                                │
   │  Physical parts you can touch            │
   │  Monitor, keyboard, mouse, CPU           │
   ├─────────────────────────────────────────┤
   │  SOFTWARE                                │
   │  Programs you cannot touch               │
   │  Windows, Word, Chrome, Paint            │
   ├─────────────────────────────────────────┤
   │  OS (Operating System)                   │
   │  Manages hardware and software           │
   │  Windows, macOS, Linux, Android, iOS     │
   ├─────────────────────────────────────────┤
   │  NETWORKS                                │
   │  Connect computers to share data         │
   │  LAN, WAN, Wi-Fi, PAN                    │
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is hardware?</p>
       <p><b>Answer:</b> The <b>physical parts</b> of a computer you can touch.</p>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "What is hardware?",
          "What is software?",
          "What does an OS do?",
          "What does a network do?",
          "Name 3 operating systems."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is hardware?", a: ["physical parts", "any"] },
       { q: "What does an OS do?", a: ["manages hardware and software", "any"] }]),

    D(2, "🔁", "Algorithms",
      "Revise algorithms and programming.",
      `<p class='big-emoji'>🔁 📋 💻</p>

       <h3>🖼️ Algorithms & Programming</h3>
       <pre>
   ALGORITHM                  PROGRAMMING
   ┌──────────────────┐       ┌──────────────────┐
   │ • Set of steps   │       │ • Variables      │
   │ • Flowchart      │       │ • Data types     │
   │ • Pseudocode     │       │ • Loops          │
   │ • Sequencing     │       │ • Conditions     │
   └──────────────────┘       └──────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is an algorithm?</p>
       <p><b>Answer:</b> A <b>set of steps</b> to solve a problem.</p>`,

      [{ heading: "Exercise 111.1 — Answer.", items: [
          "What is an algorithm?",
          "What is a flowchart?",
          "What is pseudocode?",
          "What is a variable?",
          "Name 3 data types.",
          "What does a loop do?",
          "What does if…then do?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an algorithm?", a: ["set of steps", "any"] },
       { q: "What does a loop do?", a: ["repeats", "any"] }]),

    D(3, "🔁", "Internet",
      "Revise internet and safety.",
      `<p class='big-emoji'>🔁 🌐 🛡️</p>

       <h3>🖼️ Internet & Safety</h3>
       <pre>
   INTERNET                   SAFETY
   ┌──────────────────┐       ┌──────────────────┐
   │ • Global network │       │ • Strong passwords│
   │ • Browser        │       │ • Privacy        │
   │ • Search engine  │       │ • No cyberbullying│
   │ • Evaluate       │       │ • Report problems│
   │   (.gov, .edu)   │       │ • Tell an adult  │
   └──────────────────┘       └──────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a browser?</p>
       <p><b>Answer:</b> A program to visit websites.</p>`,

      [{ heading: "Exercise 112.1 — Answer.", items: [
          "What is the internet?",
          "What is a browser?",
          "Name a trusted website type.",
          "What makes a password strong?",
          "What is cyberbullying?",
          "What should you do if cyberbullied?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a browser?", a: ["visits websites", "any"] },
       { q: "What makes a password strong?", a: ["letters numbers symbols", "any"] }]),

    D(4, "🔁", "Databases",
      "Revise databases.",
      `<p class='big-emoji'>🔁 🗄️ 📊</p>

       <h3>🖼️ Database Summary</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │          🗄️ DATABASES 🗄️                 │
   ├─────────────────────────────────────────┤
   │  RECORD:  One ROW (horizontal)          │
   │  FIELD:   One COLUMN (vertical)         │
   │  SORT:    A→Z or Z→A                    │
   │  SEARCH:  Find specific records         │
   └─────────────────────────────────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is a record?</p>
       <p><b>Answer:</b> One row of information.</p>`,

      [{ heading: "Exercise 113.1 — Answer.", items: [
          "What is a database?",
          "What is a record?",
          "What is a field?",
          "What is sorting?",
          "What is searching?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a record?", a: ["one row", "any"] },
       { q: "What is a field?", a: ["one piece of information", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Full practice test.",
      `<p class='big-emoji'>🎉 📝 ✅</p>

       <h3>Mixed Questions (20 total)</h3>
       <ol>
         <li>What is hardware?</li>
         <li>What is software?</li>
         <li>What does an OS do?</li>
         <li>What is a network?</li>
         <li>Name a formatting option.</li>
         <li>What is a cell?</li>
         <li>What is a formula?</li>
         <li>What is an algorithm?</li>
         <li>What is pseudocode?</li>
         <li>What is a variable?</li>
         <li>What does a loop do?</li>
         <li>What is a bug?</li>
         <li>What is a browser?</li>
         <li>What is email?</li>
         <li>What is a strong password?</li>
         <li>What is a record?</li>
         <li>What is a field?</li>
         <li>What is AI?</li>
         <li>What is decomposition?</li>
         <li>What is a digital footprint?</li>
       </ol>

       <h3>💯 Marking Guide</h3>
       <ul>
         <li>16–20 correct = ⭐⭐⭐ Excellent</li>
         <li>10–15 correct = ⭐⭐ Good</li>
         <li>0–9 correct = ⭐ Needs revision</li>
       </ul>`,

      [{ heading: "Exercise 114.1 — Answer 20 questions.", items: [] }],

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
      `<p class='big-emoji'>🔁 🌟 🏆</p>

       <h3>🖼️ Year Overview Mind Map</h3>
       <pre>
                        ┌──────────────────┐
                        │   💻 GRADE 5     │
                        │    COMPUTING     │
                        └────────┬─────────┘
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
        │  LITERACY    │ │ PROGRAMMING│ │ INTERNET &  │
        │  Hardware    │ │ Algorithms │ │ SAFETY      │
        │  Software    │ │ Variables  │ │ Browsers    │
        │  OS          │ │ Loops      │ │ Email       │
        │  Networks    │ │ Conditions │ │ Cyber safety│
        └──────────────┘ │ Debugging  │ └─────────────┘
                         └────────────┘
                ┌───────────────┼───────────────┐
                │               │               │
        ┌───────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
        │ PRODUCTIVITY │ │ CITIZENSHIP│ │ ADVANCED    │
        │ Word         │ │ Rights     │ │ Databases   │
        │ Spreadsheets │ │ Responsib. │ │ AI & Ethics │
        │ Presentations│ │ Respect    │ │ Computational│
        │ Multimedia   │ │ Footprint  │ │ Thinking    │
        └──────────────┘ └────────────┘ └─────────────┘
       </pre>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is your favourite topic?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: "Exercise 115.1 — Answer.", items: [
          "Name 3 things you learned this year.",
          "What is your favourite topic?",
          "What is one new word you learned?",
          "What was the hardest thing?",
          "What are you most proud of?"
        ]},
       { heading: "Exercise 115.2 — Draw.", items: [
          "Draw your favourite computing topic from the year."
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: "Name a topic you liked.", a: ["any"] },
       { q: "Name a new word you learned.", a: ["any"] }]),

    D(2, "📁", "Portfolio",
      "Finalise your portfolio.",
      `<p class='big-emoji'>📁 🌟 📚</p>
       <p>Now let's put everything together in your <b>complete year portfolio</b>.</p>

       <h3>🖼️ Complete Portfolio Structure</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │   📁 GRADE 5 COMPUTING PORTFOLIO 📁      │
   ├─────────────────────────────────────────┤
   │  📄 TITLE PAGE                           │
   │     Name, Class, Year                    │
   ├─────────────────────────────────────────┤
   │  📑 SECTION 1: LITERACY                  │
   │     Digital Literacy Poster              │
   │     Word Poster                          │
   │     Spreadsheet Poster                   │
   ├─────────────────────────────────────────┤
   │  📑 SECTION 2: PROGRAMMING               │
   │     Algorithms Poster                    │
   │     Programming Poster                   │
   │     Debugging Poster                     │
   ├─────────────────────────────────────────┤
   │  📑 SECTION 3: INTERNET & SAFETY         │
   │     Internet Poster                      │
   │     Communication Poster                 │
   │     Safety Poster                        │
   ├─────────────────────────────────────────┤
   │  📑 SECTION 4: CITIZENSHIP               │
   │     Presentation Poster                  │
   │     Multimedia Poster                    │
   │     Citizenship Poster                   │
   ├─────────────────────────────────────────┤
   │  📑 SECTION 5: ADVANCED                  │
   │     Databases Poster                     │
   │     Thinking Poster                      │
   │     AI Poster                            │
   │     Project 1 + Project 2                │
   ├─────────────────────────────────────────┤
   │  💭 REFLECTION                           │
   │     • My best work: ___                  │
   │     • What I learned: ___                │
   │     • What I want to learn next: ___     │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 What to Include</h3>
       <table border="1" cellpadding="6">
         <tr><th>Section</th><th>Items</th></tr>
         <tr><td>Posters</td><td>All 15+ weekly posters</td></tr>
         <tr><td>Projects</td><td>Project 1 and Project 2</td></tr>
         <tr><td>Reflections</td><td>Weekly reflections</td></tr>
         <tr><td>Achievements</td><td>Stars, certificates</td></tr>
         <tr><td>Best Work</td><td>Highlight 3 favourite pieces</td></tr>
       </table>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is your best work?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: "Exercise 116.1 — Finalise portfolio.", items: [
          "Title page",
          "Section 1: Literacy (3 posters)",
          "Section 2: Programming (3 posters)",
          "Section 3: Internet & Safety (3 posters)",
          "Section 4: Citizenship (3 posters)",
          "Section 5: Advanced (3 posters + 2 projects)",
          "Reflection page"
        ]},
       { heading: "Exercise 116.2 — Choose your best 3.", items: [
          "Best 1: ___",
          "Best 2: ___",
          "Best 3: ___",
          "Why: ___"
        ]}],

      `<p>⭐ for a complete portfolio.</p>`,

      [{ q: "What is your best work?", a: ["any"] },
       { q: "Why include reflections?", a: ["show growth", "any"] }]),

    D(3, "🎤", "Presentation",
      "Present your portfolio.",
      `<p class='big-emoji'>🎤 📁 🏆</p>
       <p>Show everything you've learned this year in one confident presentation.</p>

       <h3>🖼️ Presentation Structure</h3>
       <pre>
   ┌─────────────────────────────────────────┐
   │      🎤 FINAL PRESENTATION 🎤            │
   ├─────────────────────────────────────────┤
   │  OPENING (30 sec)                        │
   │  "Welcome! My name is ___. I've been     │
   │   learning computing for a year."        │
   ├─────────────────────────────────────────┤
   │  WHAT I LEARNED (1 min)                  │
   │  "This year I learned:                   │
   │    • Hardware and software               │
   │    • How to code                         │
   │    • Online safety"                      │
   ├─────────────────────────────────────────┤
   │  SHOW WORK (2 min)                       │
   │  "Here are my best pieces..."            │
   │  (Show portfolio sections)               │
   ├─────────────────────────────────────────┤
   │  PROJECTS (1 min)                        │
   │  "My favourite project was ___."         │
   ├─────────────────────────────────────────┤
   │  REFLECTION (30 sec)                     │
   │  "The hardest thing was ___. I'm         │
   │   most proud of ___."                    │
   ├─────────────────────────────────────────┤
   │  CLOSING (15 sec)                        │
   │  "Thank you! Any questions?"             │
   └─────────────────────────────────────────┘
       </pre>

       <h3>🧠 Presentation Tips</h3>
       <ul>
         <li>Practise 3–4 times before the real thing</li>
         <li>Speak slowly and clearly</li>
         <li>Make eye contact</li>
         <li>Show your favourite pieces</li>
         <li>Be proud of your work!</li>
         <li>Answer questions honestly</li>
       </ul>

       <h3>✍️ Worked Example</h3>
       <p><b>Question:</b> What is your favourite work?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: "Exercise 117.1 — Prepare your presentation.", items: [
          "Opening: ___",
          "3 things I learned: ___",
          "Best work: ___",
          "Favourite project: ___",
          "Hardest thing: ___",
          "Proudest moment: ___",
          "Closing: ___"
        ]},
       { heading: "Exercise 117.2 — Practise.", items: [
          "Present to family.",
          "Time yourself — aim for 5 minutes.",
          "Get feedback: ___"
        ]}],

      `<p>⭐ for confident presentation.</p>`,

      [{ q: "What is your favourite work?", a: ["any"] },
       { q: "Name a presentation tip.", a: ["speak clearly", "any"] }]),

    D(4, "🎉", "Celebration",
      "Celebrate your year of computing.",
      `<p class='big-emoji'>🎉 ⭐ 🏆 🌟</p>
       <p>You have completed Grade 5 Computing! Today is your celebration day.</p>

       <h3>🎊 What to Do</h3>
       <ul>
         <li>🎨 Display all your posters and projects.</li>
         <li>💻 Show one program or project.</li>
         <li>📁 Show your portfolio to your family.</li>
         <li>🎤 Give your presentation.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>

       <h3>🗣️ Say This</h3>
       <p><i>"I finished Grade 5 Computing! I can use a computer, write programs, stay safe online, and think like a computer scientist!"</i></p>

       <h3>💭 Year Reflection</h3>
       <table border="1" cellpadding="6">
         <tr><th>Question</th><th>Answer</th></tr>
         <tr><td>Favourite moment?</td><td>___</td></tr>
         <tr><td>Hardest challenge?</td><td>___</td></tr>
         <tr><td>Biggest achievement?</td><td>___</td></tr>
         <tr><td>What I want to learn next?</td><td>___</td></tr>
         <tr><td>Advice for next year's student?</td><td>___</td></tr>
       </table>

       <h3>💡 Looking Ahead</h3>
       <p>Next year you will learn even more — more advanced programming, more complex algorithms, and maybe even build your own app!</p>`,

      [{ heading: "Exercise 118.1 — Celebrate!", items: [
          "Show your work.",
          "Show one program.",
          "Show your portfolio.",
          "Give your presentation.",
          "Give yourself a big star! ⭐"
        ]},
       { heading: "Exercise 118.2 — Year reflection.", items: [
          "Favourite moment: ___",
          "Hardest thing: ___",
          "Biggest achievement: ___",
          "What next: ___",
          "Advice for next year: ___"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 6?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟 🎊</p>
       <p>Today you are a <b>computing champion</b>! You have worked hard all year.</p>

       <h3>🗣️ Say This</h3>
       <ul>
         <li>⭐ "I can use a computer!"</li>
         <li>⭐ "I can write programs!"</li>
         <li>⭐ "I can think like a computer scientist!"</li>
         <li>⭐ "I can stay safe online!"</li>
         <li>⭐ "I can keep learning!"</li>
       </ul>

       <h3>📋 What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson from the whole year.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>

       <h3>🖼️ Illustration (Draw This!)</h3>
       <pre>
   ┌──────────────────────────────────────┐
   │                                      │
   │         ⭐   🧑‍💻   ⭐                  │
   │                                      │
   │       (You as a computer             │
   │        scientist!)                    │
   │                                      │
   │         ⭐                            │
   │                                      │
   │   "I am a Computing Champion!"        │
   │                                      │
   └──────────────────────────────────────┘
       </pre>
       <p>Draw yourself as a computing expert. Add 3 big stars around you!</p>

       <h3>💭 Final Reflection</h3>
       <ul>
         <li>How have you grown as a learner this year?</li>
         <li>What are you most proud of?</li>
         <li>What will you remember most?</li>
         <li>What advice would you give to next year's Grade 5?</li>
       </ul>

       <h3>🎊 Congratulations!</h3>
       <p><b>You did it!</b> You completed Grade 5 Computing. Keep learning, keep exploring, and keep being curious!</p>`,

      [{ heading: "Exercise 119.1 — Big Star Day", items: [
          'Say "I can use a computer!"',
          'Say "I can write programs!"',
          'Say "I can think like a computer scientist!"',
          'Say "I can stay safe online!"',
          'Say "I can keep learning!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]},
       { heading: "Exercise 119.2 — Final reflection.", items: [
          "I have grown by: ___",
          "I am proud of: ___",
          "I will remember: ___",
          "My advice to next year: ___"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of computing!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] },
       { q: "How many stars did you earn?", a: ["3", "three"] }])
  ]}

];