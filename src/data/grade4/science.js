// src/data/grade4/science.js
// Grade 4 Science — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Life Science · Physical Science · Earth & Space · Health · Technology

import { D } from '../helpers.js';

export const science = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — LIFE SCIENCE
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Life Science", days: [

    D(1, "🔬", "Cells",
      "Learn about cells.",
      `<p class='big-emoji'>🔬 🧫</p>
       <p>The <b>cell</b> is the smallest unit of life. All living things are made of cells.</p>
       <h3>Parts of a Cell</h3>
       <ul>
         <li>🔵 <b>Cell membrane</b> — the outer covering</li>
         <li>🟣 <b>Nucleus</b> — the control centre</li>
         <li>🟡 <b>Cytoplasm</b> — the jelly-like inside</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the control centre of the cell?</p>
       <p><b>Answer:</b> The <b>nucleus</b>.</p>`,

      [{ heading: "Exercise 1.1 — Label the parts of a cell.", items: [
          "cell membrane", "nucleus", "cytoplasm"
        ]},
       { heading: "Exercise 1.2 — Answer.", items: [
          "What is a cell?",
          "What is the control centre of the cell?",
          "Name 3 parts of a cell."
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "What is the control centre of the cell?", a: ["nucleus"] },
       { q: "What is a cell?", a: ["smallest unit of life", "any"] }]),

    D(2, "🦴", "Tissues & Organs",
      "Learn about tissues and organs.",
      `<p class='big-emoji'>🦴 🫀</p>
       <p>Living things are organised in levels:</p>
       <p><b>Cell → Tissue → Organ → System → Organism</b></p>
       <h3>Examples</h3>
       <ul>
         <li>Cell — muscle cell</li>
         <li>Tissue — muscle tissue</li>
         <li>Organ — heart</li>
         <li>System — circulatory system</li>
         <li>Organism — a human</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is smaller: cell or organ?</p>
       <p><b>Answer:</b> A <b>cell</b> is smaller than an organ.</p>`,

      [{ heading: "Exercise 2.1 — Order the levels of organisation.", items: [
          "cell", "tissue", "organ", "system", "organism"
        ]},
       { heading: "Exercise 2.2 — Answer.", items: [
          "What is smaller: cell or organ?",
          "Give an example of an organ.",
          "Give an example of a system."
        ]}],

      `<p>Correct order as listed.</p>`,

      [{ q: "What is smaller: cell or organ?", a: ["cell"] },
       { q: "Give an example of an organ.", a: ["heart", "lungs", "any"] }]),

    D(3, "🌿", "Plants",
      "Learn about plant systems.",
      `<p class='big-emoji'>🌿 🌱</p>
       <p>Plants have <b>6 main parts</b>:</p>
       <ul>
         <li>🌱 <b>Root</b> — absorbs water and minerals</li>
         <li>🌿 <b>Stem</b> — supports the plant</li>
         <li>🍃 <b>Leaf</b> — makes food (photosynthesis)</li>
         <li>🌸 <b>Flower</b> — makes seeds</li>
         <li>🍎 <b>Fruit</b> — protects seeds</li>
         <li>🌰 <b>Seed</b> — grows into a new plant</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the leaf do?</p>
       <p><b>Answer:</b> The leaf <b>makes food</b> using sunlight.</p>`,

      [{ heading: "Exercise 3.1 — Match the part to the function.", items: [
          "root → absorbs water",
          "stem → supports plant",
          "leaf → makes food"
        ]},
       { heading: "Exercise 3.2 — Answer.", items: [
          "What does the leaf do?",
          "What does the root do?",
          "What does the flower do?"
        ]}],

      `<p>All correct.</p>`,

      [{ q: "What does the leaf do?", a: ["makes food", "photosynthesis"] },
       { q: "What does the root do?", a: ["absorbs water", "any"] }]),

    D(4, "🐘", "Animals",
      "Learn about animal groups.",
      `<p class='big-emoji'>🐘 🐟 🦅</p>
       <h3>Vertebrates</h3>
       <ul>
         <li>🐟 Fish</li>
         <li>🦅 Birds</li>
         <li>🦁 Mammals</li>
         <li>🐍 Reptiles</li>
         <li>🐸 Amphibians</li>
       </ul>
       <h3>Invertebrates</h3>
       <ul>
         <li>🦋 Insects</li>
         <li>🪱 Worms</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a butterfly a vertebrate or invertebrate?</p>
       <p><b>Answer:</b> A butterfly is an <b>invertebrate</b> — it has no backbone.</p>`,

      [{ heading: "Exercise 4.1 — Classify.", items: [
          "lion", "frog", "sparrow", "butterfly", "snake"
        ]},
       { heading: "Exercise 4.2 — Answer.", items: [
          "What is a vertebrate?",
          "What is an invertebrate?",
          "Name 3 vertebrate groups."
        ]}],

      `<p>1. Mammal 2. Amphibian 3. Bird 4. Invertebrate 5. Reptile</p>`,

      [{ q: "Is a butterfly a vertebrate or invertebrate?", a: ["invertebrate"] },
       { q: "Name a vertebrate group.", a: ["fish", "birds", "mammals", "reptiles", "amphibians"] }]),

    D(5, "🎨", "Life Poster",
      "Make a life science poster.",
      `<p class='big-emoji'>🎨 🔬</p>
       <p>Draw and label 5 living things and their groups.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say the group for each living thing.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "5 living things",
          "Their groups"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Name a vertebrate group.", a: ["fish", "birds", "mammals", "reptiles", "amphibians"] },
       { q: "What is a cell?", a: ["smallest unit of life", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — HUMAN BODY
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Human Body", days: [

    D(1, "🍽️", "Digestive",
      "Digestive system.",
      `<p class='big-emoji'>🍽️ 😋</p>
       <p>Food passes through:</p>
       <p><b>Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Anus</b></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where is food absorbed?</p>
       <p><b>Answer:</b> In the <b>small intestine</b>.</p>`,

      [{ heading: "Exercise 6.1 — Order the organs.", items: [
          "mouth", "oesophagus", "stomach", "small intestine", "large intestine", "anus"
        ]},
       { heading: "Exercise 6.2 — Answer.", items: [
          "Where is food absorbed?",
          "What happens in the mouth?",
          "What happens in the stomach?"
        ]}],

      `<p>Correct order as listed.</p>`,

      [{ q: "Where is food absorbed?", a: ["small intestine"] },
       { q: "What happens in the mouth?", a: ["chewing", "any"] }]),

    D(2, "❤️", "Circulatory",
      "Circulatory system.",
      `<p class='big-emoji'>❤️ 🩸</p>
       <p>The <b>heart</b> pumps blood around the body.</p>
       <h3>Heart Chambers</h3>
       <ul>
         <li>Left atrium</li>
         <li>Right atrium</li>
         <li>Left ventricle</li>
         <li>Right ventricle</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the heart do?</p>
       <p><b>Answer:</b> The heart <b>pumps blood</b>.</p>`,

      [{ heading: "Exercise 7.1 — Label the heart.", items: [
          "left atrium", "right atrium", "left ventricle", "right ventricle"
        ]},
       { heading: "Exercise 7.2 — Answer.", items: [
          "What does the heart do?",
          "How many chambers does the heart have?",
          "What does blood carry?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "What does the heart do?", a: ["pumps blood"] },
       { q: "How many chambers does the heart have?", a: ["4", "four"] }]),

    D(3, "🌬️", "Respiratory",
      "Respiratory system.",
      `<p class='big-emoji'>🌬️ 🫁</p>
       <p>Air travels through:</p>
       <p><b>Nose → Trachea → Bronchi → Lungs</b></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does gas exchange happen?</p>
       <p><b>Answer:</b> In the <b>lungs</b>.</p>`,

      [{ heading: "Exercise 8.1 — Label the respiratory system.", items: [
          "nose", "trachea", "bronchi", "lungs"
        ]},
       { heading: "Exercise 8.2 — Answer.", items: [
          "Where does gas exchange happen?",
          "What is the trachea?",
          "Where does air go first?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "Where does gas exchange happen?", a: ["lungs"] },
       { q: "Where does air go first?", a: ["nose"] }]),

    D(4, "🧠", "Nervous",
      "Nervous system.",
      `<p class='big-emoji'>🧠 ⚡</p>
       <p>The <b>brain</b> controls the body. <b>Nerves</b> carry messages.</p>
       <h3>Key Parts</h3>
       <ul>
         <li>🧠 Brain — control centre</li>
         <li>🦴 Spinal cord — carries messages</li>
         <li>⚡ Nerves — send signals</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What controls the body?</p>
       <p><b>Answer:</b> The <b>brain</b>.</p>`,

      [{ heading: "Exercise 9.1 — Answer.", items: [
          "What controls the body?",
          "What carries messages?",
          "Name 3 parts of the nervous system."
        ]},
       { heading: "Exercise 9.2 — Draw.", items: [
          "Draw the brain and label."
        ]}],

      `<p>1. Brain. 2. Nerves.</p>`,

      [{ q: "What controls the body?", a: ["brain"] },
       { q: "What carries messages?", a: ["nerves"] }]),

    D(5, "🎨", "Body Poster",
      "Make a body poster.",
      `<p class='big-emoji'>🎨 🧍</p>
       <p>Draw a body and label 5 organs.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each organ does.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [
          "heart", "lungs", "stomach", "brain", "intestines"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Which system carries messages?", a: ["nervous"] },
       { q: "Which system pumps blood?", a: ["circulatory"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — PLANTS
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Plants", days: [

    D(1, "🌞", "Photosynthesis",
      "Learn photosynthesis.",
      `<p class='big-emoji'>🌞 🍃</p>
       <p><b>Photosynthesis</b> is how plants make food:</p>
       <p><b>Sunlight + Water + CO₂ → Glucose + Oxygen</b></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What gas do plants take in?</p>
       <p><b>Answer:</b> <b>Carbon dioxide (CO₂)</b>.</p>`,

      [{ heading: "Exercise 11.1 — Write the equation.", items: [] },
       { heading: "Exercise 11.2 — Answer.", items: [
          "What gas do plants take in?",
          "What gas do plants release?",
          "What do plants need for photosynthesis?"
        ]}],

      `<p>Sunlight + Water + CO₂ → Glucose + Oxygen</p>`,

      [{ q: "What gas do plants take in?", a: ["carbon dioxide", "co2"] },
       { q: "What gas do plants release?", a: ["oxygen", "o2"] }]),

    D(2, "🌸", "Reproduction",
      "Plant reproduction.",
      `<p class='big-emoji'>🌸 🌰</p>
       <p>Flowers make seeds. Seeds grow into new plants.</p>
       <h3>Flower Parts</h3>
       <ul>
         <li>🌸 <b>Petal</b> — attracts insects</li>
         <li>♂️ <b>Stamen</b> — male part (makes pollen)</li>
         <li>♀️ <b>Pistil</b> — female part (receives pollen)</li>
         <li>🌿 <b>Sepal</b> — protects the bud</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do flowers make?</p>
       <p><b>Answer:</b> Flowers make <b>seeds</b>.</p>`,

      [{ heading: "Exercise 12.1 — Label the flower.", items: [
          "petal", "stamen", "pistil", "sepal"
        ]},
       { heading: "Exercise 12.2 — Answer.", items: [
          "What do flowers make?",
          "What does the stamen do?",
          "What does the pistil do?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "What do flowers make?", a: ["seeds"] },
       { q: "What does the stamen do?", a: ["makes pollen", "any"] }]),

    D(3, "💧", "Transport",
      "Water transport in plants.",
      `<p class='big-emoji'>💧 🌿</p>
       <p>Water travels from <b>roots → stem → leaves</b> through tubes called <b>xylem</b>.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What carries water up the plant?</p>
       <p><b>Answer:</b> The <b>xylem</b>.</p>`,

      [{ heading: "Exercise 13.1 — Order the transport.", items: [
          "roots", "stem", "leaves"
        ]},
       { heading: "Exercise 13.2 — Answer.", items: [
          "What carries water up the plant?",
          "Where does water enter the plant?",
          "Where does water end up?"
        ]}],

      `<p>Correct order as listed.</p>`,

      [{ q: "What carries water up the plant?", a: ["xylem"] },
       { q: "Where does water enter the plant?", a: ["roots"] }]),

    D(4, "🌱", "Growth",
      "Plant growth.",
      `<p class='big-emoji'>🌱 📈</p>
       <p>Plants grow from seeds and need <b>water</b>, <b>sunlight</b>, and <b>soil</b>.</p>
       <h3>Stages of Growth</h3>
       <ol>
         <li>🌰 Seed</li>
         <li>🌱 Seedling</li>
         <li>🌿 Young plant</li>
         <li>🌸 Flowering plant</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do seeds need to grow?</p>
       <p><b>Answer:</b> Seeds need <b>water, sunlight, and soil</b>.</p>`,

      [{ heading: "Exercise 14.1 — Plant a seed and record for 5 days.", items: [
          "Day 1", "Day 2", "Day 3", "Day 4", "Day 5"
        ]},
       { heading: "Exercise 14.2 — Answer.", items: [
          "What do seeds need to grow?",
          "How many stages of growth?",
          "What is the first stage?"
        ]}],

      `<p>Any reasonable record.</p>`,

      [{ q: "What do seeds need to grow?", a: ["water", "sunlight", "soil"] },
       { q: "How many stages of growth?", a: ["4", "four"] }]),

    D(5, "🎨", "Plant Poster",
      "Plant poster.",
      `<p class='big-emoji'>🎨 🌱</p>
       <p>Draw a plant and label 6 parts.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each part.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [
          "roots", "stem", "leaf", "flower", "fruit", "seed"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Which part carries water?", a: ["xylem", "stem"] },
       { q: "Which part makes food?", a: ["leaf", "leaves"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Life Science",
      "Review cells and living things.",
      `<p class='big-emoji'>🔁 🔬</p>
       <h3>Review</h3>
       <ul>
         <li>Cells → tissues → organs → systems → organisms</li>
         <li>Vertebrates and invertebrates</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is smaller: cell or organ?</p>
       <p><b>Answer:</b> A <b>cell</b>.</p>`,

      [{ heading: "Exercise 16.1 — Order the levels.", items: [
          "cell", "tissue", "organ", "system", "organism"
        ]},
       { heading: "Exercise 16.2 — Answer.", items: [
          "What is smaller: cell or organ?",
          "What is a vertebrate?",
          "Name a group of vertebrates."
        ]}],

      `<p>Correct order.</p>`,

      [{ q: "What is smaller: cell or organ?", a: ["cell"] },
       { q: "Name a group of vertebrates.", a: ["fish", "birds", "mammals", "any"] }]),

    D(2, "🔁", "Review Body",
      "Review body systems.",
      `<p class='big-emoji'>🔁 🧍</p>
       <h3>Review</h3>
       <ul>
         <li>Digestive — food</li>
         <li>Circulatory — blood</li>
         <li>Respiratory — air</li>
         <li>Nervous — messages</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which system pumps blood?</p>
       <p><b>Answer:</b> The <b>circulatory</b> system.</p>`,

      [{ heading: "Exercise 17.1 — Match system to function.", items: [
          "digestive → food",
          "circulatory → blood",
          "respiratory → air",
          "nervous → messages"
        ]},
       { heading: "Exercise 17.2 — Answer.", items: [
          "Which system pumps blood?",
          "Which system controls breathing?",
          "What does the brain do?"
        ]}],

      `<p>All correct.</p>`,

      [{ q: "Which system pumps blood?", a: ["circulatory"] },
       { q: "What does the brain do?", a: ["controls the body", "any"] }]),

    D(3, "🔁", "Review Plants",
      "Review plant parts and processes.",
      `<p class='big-emoji'>🔁 🌿</p>
       <h3>Review</h3>
       <ul>
         <li>Photosynthesis</li>
         <li>Reproduction</li>
         <li>Transport</li>
         <li>Growth</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is photosynthesis?</p>
       <p><b>Answer:</b> How plants make food using sunlight.</p>`,

      [{ heading: "Exercise 18.1 — Answer.", items: [
          "What is photosynthesis?",
          "What do flowers make?",
          "What carries water?",
          "What do seeds need?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is photosynthesis?", a: ["how plants make food", "plants make food", "any"] },
       { q: "What carries water?", a: ["xylem", "stem"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is the control centre of the cell?</li>
         <li>Order: cell, tissue, organ, system, organism</li>
         <li>What does the heart do?</li>
         <li>Where does gas exchange happen?</li>
         <li>What controls the body?</li>
         <li>What gas do plants take in?</li>
         <li>What do flowers make?</li>
         <li>What carries water up the plant?</li>
         <li>What do seeds need to grow?</li>
         <li>Name a vertebrate group.</li>
       </ol>`,

      [{ heading: "Exercise 19.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Which body system controls breathing?", a: ["respiratory"] },
       { q: "What is the control centre of the cell?", a: ["nucleus"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Month 1 of Grade 4 Science!</p>
       <h3>Show and Tell</h3>
       <p>Show your posters. Give yourself a star! ⭐</p>`,

      [{ heading: "Exercise 20.1 — Show posters.", items: [
          "Life Poster", "Body Poster", "Plant Poster"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What was your favourite topic?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — MATTER
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Matter", days: [

    D(1, "🧊", "States",
      "Learn the three states of matter.",
      `<p class='big-emoji'>🧊 💧 💨</p>
       <h3>The Three States</h3>
       <ul>
         <li>🧊 <b>Solid</b> — fixed shape and volume</li>
         <li>💧 <b>Liquid</b> — takes shape of container</li>
         <li>💨 <b>Gas</b> — fills all the space</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is ice a solid?</p>
       <p><b>Answer:</b> Yes, ice is a <b>solid</b>.</p>`,

      [{ heading: "Exercise 21.1 — Classify.", items: [
          "ice", "water", "steam", "stone", "air"
        ]},
       { heading: "Exercise 21.2 — Answer.", items: [
          "Is ice a solid?",
          "Is water a liquid?",
          "Is steam a gas?"
        ]}],

      `<p>1. Solid 2. Liquid 3. Gas 4. Solid 5. Gas</p>`,

      [{ q: "Is ice a solid?", a: ["yes"] },
       { q: "Is steam a gas?", a: ["yes"] }]),

    D(2, "🔄", "Changes",
      "Learn changes of state.",
      `<p class='big-emoji'>🔄 🔥 ❄️</p>
       <h3>Changes of State</h3>
       <ul>
         <li>🧊 → 💧 Melting</li>
         <li>💧 → 🧊 Freezing</li>
         <li>💧 → ♨️ Evaporation</li>
         <li>♨️ → 💧 Condensation</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Ice → Water is?</p>
       <p><b>Answer:</b> <b>Melting</b>.</p>`,

      [{ heading: "Exercise 22.1 — Name the change.", items: [
          "Ice → Water", "Water → Steam", "Steam → Water", "Water → Ice"
        ]},
       { heading: "Exercise 22.2 — Answer.", items: [
          "Ice → Water is?",
          "Water → Steam is?",
          "Steam → Water is?",
          "Water → Ice is?"
        ]}],

      `<p>Melting; Evaporation; Condensation; Freezing</p>`,

      [{ q: "Ice → Water is?", a: ["melting"] },
       { q: "Water → Steam is?", a: ["evaporation"] }]),

    D(3, "🥛", "Mixtures",
      "Learn about mixtures.",
      `<p class='big-emoji'>🥛 🏖️</p>
       <p>A <b>mixture</b> is two or more substances mixed together but not joined.</p>
       <h3>Examples</h3>
       <ul>
         <li>Sand and water</li>
         <li>Salt and pepper</li>
         <li>Cereal and milk</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a mixture?</p>
       <p><b>Answer:</b> Two or more substances <b>mixed together</b>.</p>`,

      [{ heading: "Exercise 23.1 — Say.", items: [
          "What is a mixture?",
          "Give an example.",
          "Can mixtures be separated?"
        ]},
       { heading: "Exercise 23.2 — Write 3 mixtures.", items: [] }],

      `<p>⭐</p>`,

      [{ q: "What is a mixture?", a: ["two or more substances mixed", "any"] },
       { q: "Give an example of a mixture.", a: ["sand and water", "any"] }]),

    D(4, "🧪", "Solutions",
      "Learn about solutions.",
      `<p class='big-emoji'>🧪 🍬</p>
       <p>A <b>solution</b> is a mixture where one substance <b>dissolves</b> in another.</p>
       <h3>Examples</h3>
       <ul>
         <li>Sugar in water</li>
         <li>Salt in water</li>
         <li>Coffee in water</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a solution?</p>
       <p><b>Answer:</b> One substance <b>dissolved</b> in another.</p>`,

      [{ heading: "Exercise 24.1 — Say.", items: [
          "What is a solution?",
          "Give an example.",
          "Can you see the sugar in sugar water?"
        ]},
       { heading: "Exercise 24.2 — Try it.", items: [
          "Mix sugar in water.",
          "Mix salt in water.",
          "Which dissolves faster?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a solution?", a: ["one substance dissolved in another", "any"] },
       { q: "Give an example.", a: ["sugar in water", "any"] }]),

    D(5, "🎨", "Matter Poster",
      "Draw the 3 states.",
      `<p class='big-emoji'>🎨 🧊💧💨</p>
       <p>Show examples of solid, liquid, gas.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one change of state.</p>`,

      [{ heading: "Exercise 25.1 — Draw.", items: [
          "3 solids", "3 liquids", "3 gases"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a solid.", a: ["ice", "stone", "any"] },
       { q: "Name a liquid.", a: ["water", "milk", "any"] },
       { q: "Name a gas.", a: ["air", "steam", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — FORCES
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Forces", days: [

    D(1, "👉", "Types of Forces",
      "Identify types of forces.",
      `<p class='big-emoji'>👉 👈 🧲</p>
       <h3>Types of Forces</h3>
       <ul>
         <li>👉 Push — moves away</li>
         <li>👈 Pull — moves closer</li>
         <li>⬇️ Gravity — pulls down</li>
         <li>🛞 Friction — slows things</li>
         <li>🧲 Magnetism — attracts or repels</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a force.</p>
       <p><b>Answer:</b> <b>Gravity</b>.</p>`,

      [{ heading: "Exercise 26.1 — Say.", items: [
          "Name 4 forces.",
          "Which force pulls things down?",
          "Which force slows things down?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a force.", a: ["push", "pull", "gravity", "friction", "any"] },
       { q: "Which force pulls things down?", a: ["gravity"] }]),

    D(2, "⚖️", "Balanced & Unbalanced",
      "Learn balanced and unbalanced forces.",
      `<p class='big-emoji'>⚖️ ↔️</p>
       <ul>
         <li><b>Balanced</b> forces — no movement</li>
         <li><b>Unbalanced</b> forces — movement</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What causes movement?</p>
       <p><b>Answer:</b> An <b>unbalanced force</b>.</p>`,

      [{ heading: "Exercise 27.1 — Say.", items: [
          "When does an object move?",
          "What happens with balanced forces?",
          "Give an example of an unbalanced force."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What causes movement?", a: ["unbalanced force", "any"] },
       { q: "What happens with balanced forces?", a: ["no movement", "any"] }]),

    D(3, "🛞", "Friction",
      "Learn about friction.",
      `<p class='big-emoji'>🛞 🔥</p>
       <p><b>Friction</b> slows moving things down.</p>
       <h3>Examples</h3>
       <ul>
         <li>Brakes on a car</li>
         <li>Rubbing hands together</li>
         <li>A ball slowing on grass</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is friction?</p>
       <p><b>Answer:</b> A force that <b>slows things</b>.</p>`,

      [{ heading: "Exercise 28.1 — Say.", items: [
          "What is friction?",
          "Give an example.",
          "What happens when you rub your hands?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is friction?", a: ["slows things", "any"] },
       { q: "Give an example of friction.", a: ["braking", "any"] }]),

    D(4, "⬇️", "Gravity",
      "Learn about gravity.",
      `<p class='big-emoji'>⬇️ 🍎</p>
       <p><b>Gravity</b> pulls things down.</p>
       <h3>Examples</h3>
       <ul>
         <li>An apple falling from a tree</li>
         <li>A ball coming down after being thrown up</li>
         <li>Rain falling from clouds</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is gravity?</p>
       <p><b>Answer:</b> A force that <b>pulls things down</b>.</p>`,

      [{ heading: "Exercise 29.1 — Say.", items: [
          "What is gravity?",
          "Give an example.",
          "What happens when you drop something?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is gravity?", a: ["force pulling down", "any"] },
       { q: "What happens when you drop something?", a: ["it falls", "any"] }]),

    D(5, "🎨", "Forces Poster",
      "Draw 4 forces.",
      `<p class='big-emoji'>🎨 👉⬇️</p>
       <p>Show push, pull, gravity, friction.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one force.</p>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [
          "push", "pull", "gravity", "friction"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name 3 forces.", a: ["push", "pull", "gravity", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — ENERGY
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Energy", days: [

    D(1, "⚡", "Forms of Energy",
      "Learn forms of energy.",
      `<p class='big-emoji'>⚡ 💡 🔊</p>
       <h3>Forms of Energy</h3>
       <ul>
         <li>💡 Light</li>
         <li>🔥 Heat</li>
         <li>🔊 Sound</li>
         <li>🔌 Electrical</li>
         <li>🏃 Kinetic (movement)</li>
         <li>⬆️ Potential (stored)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a form of energy.</p>
       <p><b>Answer:</b> <b>Light energy</b>.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "Name 4 forms of energy.",
          "Give an example of each."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a form of energy.", a: ["light", "heat", "sound", "any"] }]),

    D(2, "🔄", "Energy Transfer",
      "Learn energy transfer.",
      `<p class='big-emoji'>🔄 ⚡</p>
       <p>Energy can change from one form to another.</p>
       <h3>Examples</h3>
       <ul>
         <li>Electrical → Light in a bulb</li>
         <li>Chemical → Kinetic in your body</li>
         <li>Sound → Electrical in a microphone</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens to energy in a bulb?</p>
       <p><b>Answer:</b> Electrical energy changes to <b>light</b>.</p>`,

      [{ heading: "Exercise 32.1 — Say.", items: [
          "What is energy transfer?",
          "Give an example.",
          "What happens in a bulb?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What happens to energy in a bulb?", a: ["electrical to light", "any"] }]),

    D(3, "🌞", "Renewable",
      "Learn renewable energy.",
      `<p class='big-emoji'>🌞 🌬️</p>
       <p><b>Renewable energy</b> comes from sources that don't run out.</p>
       <h3>Examples</h3>
       <ul>
         <li>☀️ Solar</li>
         <li>💨 Wind</li>
         <li>💧 Hydro (water)</li>
         <li>🌱 Biomass</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a renewable energy source.</p>
       <p><b>Answer:</b> <b>Solar energy</b>.</p>`,

      [{ heading: "Exercise 33.1 — Say.", items: [
          "Name 3 renewable sources.",
          "Why are they renewable?",
          "Which is the most common?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a renewable energy source.", a: ["solar", "wind", "hydro", "any"] }]),

    D(4, "🛢️", "Non-Renewable",
      "Learn non-renewable energy.",
      `<p class='big-emoji'>🛢️ ⛽</p>
       <p><b>Non-renewable energy</b> comes from sources that will run out.</p>
       <h3>Examples</h3>
       <ul>
         <li>⛏️ Coal</li>
         <li>🛢️ Oil</li>
         <li>💨 Natural gas</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a non-renewable energy source.</p>
       <p><b>Answer:</b> <b>Coal</b>.</p>`,

      [{ heading: "Exercise 34.1 — Say.", items: [
          "Name 3 non-renewable sources.",
          "Why are they non-renewable?",
          "What happens if we use them all up?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a non-renewable source.", a: ["coal", "oil", "gas", "any"] }]),

    D(5, "🎨", "Energy Poster",
      "Make an energy poster.",
      `<p class='big-emoji'>🎨 ⚡</p>
       <p>Show renewable and non-renewable sources.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each type.</p>`,

      [{ heading: "Exercise 35.1 — Draw.", items: [
          "3 renewable", "3 non-renewable"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a renewable source.", a: ["solar", "wind", "any"] },
       { q: "Name a non-renewable source.", a: ["coal", "oil", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Matter",
      "Review matter.",
      `<p class='big-emoji'>🔁 🧊</p>
       <h3>Review</h3>
       <ul>
         <li>States: solid, liquid, gas</li>
         <li>Changes of state</li>
         <li>Mixtures and solutions</li>
       </ul>`,

      [{ heading: "Exercise 36.1 — Answer.", items: [
          "Name the 3 states.",
          "Ice → Water is?",
          "What is a mixture?",
          "What is a solution?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Ice → Water is?", a: ["melting"] }]),

    D(2, "🔁", "Review Forces",
      "Review forces.",
      `<p class='big-emoji'>🔁 👉</p>
       <h3>Review</h3>
       <ul>
         <li>Push, pull, gravity, friction</li>
         <li>Balanced and unbalanced forces</li>
       </ul>`,

      [{ heading: "Exercise 37.1 — Answer.", items: [
          "Name 4 forces.",
          "What causes movement?",
          "What is friction?",
          "What is gravity?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What causes movement?", a: ["unbalanced force", "any"] }]),

    D(3, "🔁", "Review Energy",
      "Review energy.",
      `<p class='big-emoji'>🔁 ⚡</p>
       <h3>Review</h3>
       <ul>
         <li>Forms of energy</li>
         <li>Renewable and non-renewable</li>
       </ul>`,

      [{ heading: "Exercise 38.1 — Answer.", items: [
          "Name 4 forms of energy.",
          "Name 3 renewable sources.",
          "Name 3 non-renewable sources."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a renewable source.", a: ["solar", "wind", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Name the 3 states.</li>
         <li>Ice → Water is?</li>
         <li>What is a solution?</li>
         <li>Name 4 forces.</li>
         <li>What causes movement?</li>
         <li>What is friction?</li>
         <li>What is gravity?</li>
         <li>Name 4 forms of energy.</li>
         <li>Name 3 renewable sources.</li>
         <li>Name 3 non-renewable sources.</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Ice → Water is?", a: ["melting"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Matter (15)</li>
         <li>Part B — Forces (15)</li>
         <li>Part C — Energy (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Matter (15)",
          "Part B — Forces (15)",
          "Part C — Energy (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — LIGHT
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Light", days: [

    D(1, "☀️", "Sources",
      "Learn about sources of light.",
      `<p class='big-emoji'>☀️ 🔦</p>
       <h3>Natural Light Sources</h3>
       <ul>
         <li>☀️ Sun</li>
         <li>⭐ Stars</li>
       </ul>
       <h3>Artificial Light Sources</h3>
       <ul>
         <li>🔦 Torch</li>
         <li>💡 Lamp</li>
         <li>🕯️ Candle</li>
       </ul>`,

      [{ heading: "Exercise 40.1 — Say.", items: [
          "Name 3 natural light sources.",
          "Name 3 artificial light sources.",
          "Which is the biggest source of light?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a natural light source.", a: ["sun", "stars", "any"] },
       { q: "Name an artificial light source.", a: ["torch", "lamp", "any"] }]),

    D(2, "🪞", "Reflection",
      "Learn about reflection.",
      `<p class='big-emoji'>🪞 💧</p>
       <p><b>Reflection</b> is when light bounces off a shiny surface.</p>
       <h3>Examples</h3>
       <ul>
         <li>🪞 Mirror</li>
         <li>💧 Still water</li>
         <li>🥄 Shiny spoon</li>
       </ul>`,

      [{ heading: "Exercise 41.1 — Say.", items: [
          "What is reflection?",
          "Name 3 shiny surfaces.",
          "Where do you see your reflection?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is reflection?", a: ["light bouncing off", "any"] }]),

    D(3, "🌊", "Refraction",
      "Learn about refraction.",
      `<p class='big-emoji'>🌊 🥃</p>
       <p><b>Refraction</b> is when light bends as it passes from one material to another.</p>
       <h3>Example</h3>
       <p>A straw looks bent in a glass of water.</p>`,

      [{ heading: "Exercise 42.1 — Say.", items: [
          "What is refraction?",
          "Give an example.",
          "Why does a straw look bent in water?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is refraction?", a: ["light bends", "any"] }]),

    D(4, "🌑", "Shadows",
      "Learn about shadows.",
      `<p class='big-emoji'>🌑 ☀️</p>
       <p>A <b>shadow</b> is formed when an object blocks light.</p>
       <h3>Things That Affect Shadows</h3>
       <ul>
         <li>Size of the object</li>
         <li>Distance from the light</li>
         <li>Angle of the light</li>
       </ul>`,

      [{ heading: "Exercise 43.1 — Say.", items: [
          "What is a shadow?",
          "What affects a shadow's size?",
          "When is your shadow longest?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a shadow?", a: ["blocked light", "any"] }]),

    D(5, "🎨", "Light Poster",
      "Make a light poster.",
      `<p class='big-emoji'>🎨 ☀️</p>
       <p>Show sources, reflection, refraction, and shadows.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 44.1 — Draw.", items: [
          "Sources of light",
          "Reflection",
          "Refraction",
          "Shadows"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "What is reflection?", a: ["light bouncing off", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — SOUND
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Sound", days: [

    D(1, "🔔", "Production",
      "Learn how sound is produced.",
      `<p class='big-emoji'>🔔 🥁</p>
       <p><b>Sound</b> is produced by <b>vibration</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>🔔 Bell ringing</li>
         <li>🥁 Drum beating</li>
         <li>🎸 Guitar string plucking</li>
       </ul>`,

      [{ heading: "Exercise 45.1 — Say.", items: [
          "How is sound produced?",
          "Name 3 sound sources.",
          "What vibrates when you speak?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is sound produced?", a: ["vibration", "any"] }]),

    D(2, "🌊", "Travel",
      "Learn how sound travels.",
      `<p class='big-emoji'>🌊 🔊</p>
       <p>Sound travels in <b>waves</b>.</p>
       <h3>Key Facts</h3>
       <ul>
         <li>Sound travels through air, water, and solids.</li>
         <li>Sound travels faster in solids than in air.</li>
         <li>Sound cannot travel in a vacuum.</li>
       </ul>`,

      [{ heading: "Exercise 46.1 — Say.", items: [
          "How does sound travel?",
          "Does sound travel in space?",
          "Where does sound travel fastest?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Does sound travel in space?", a: ["no"] },
       { q: "Where does sound travel fastest?", a: ["solids", "any"] }]),

    D(3, "🎵", "Pitch",
      "Learn about pitch.",
      `<p class='big-emoji'>🎵 ⬆️⬇️</p>
       <p><b>Pitch</b> is how high or low a sound is.</p>
       <h3>Examples</h3>
       <ul>
         <li>High pitch — whistle, small bell</li>
         <li>Low pitch — drum, big bell</li>
       </ul>`,

      [{ heading: "Exercise 47.1 — Say.", items: [
          "What is pitch?",
          "Name a high-pitch sound.",
          "Name a low-pitch sound."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is pitch?", a: ["high or low sound", "any"] }]),

    D(4, "🔊", "Volume",
      "Learn about volume.",
      `<p class='big-emoji'>🔊 🔉</p>
       <p><b>Volume</b> is how loud or soft a sound is.</p>
       <h3>Examples</h3>
       <ul>
         <li>Loud — shout, drum</li>
         <li>Soft — whisper, rustle</li>
       </ul>`,

      [{ heading: "Exercise 48.1 — Say.", items: [
          "What is volume?",
          "Name a loud sound.",
          "Name a soft sound."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is volume?", a: ["loud or soft", "any"] }]),

    D(5, "🎨", "Sound Poster",
      "Make a sound poster.",
      `<p class='big-emoji'>🎨 🔊</p>
       <p>Show production, travel, pitch, and volume.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 49.1 — Draw.", items: [
          "Production", "Travel", "Pitch", "Volume"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "How is sound produced?", a: ["vibration", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — ELECTRICITY
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Electricity", days: [

    D(1, "🔌", "Simple Circuits",
      "Learn about simple circuits.",
      `<p class='big-emoji'>🔌 💡</p>
       <p>A <b>circuit</b> is a path for electricity to flow.</p>
       <h3>Parts of a Circuit</h3>
       <ul>
         <li>🔋 Battery — source</li>
         <li>💡 Bulb — uses electricity</li>
         <li>🔗 Wires — carry electricity</li>
         <li>🔘 Switch — controls flow</li>
       </ul>`,

      [{ heading: "Exercise 50.1 — Say.", items: [
          "What is a circuit?",
          "Name 4 parts of a circuit.",
          "What does a switch do?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a circuit?", a: ["path for electricity", "any"] }]),

    D(2, "🔩", "Conductors",
      "Learn about conductors.",
      `<p class='big-emoji'>🔩 ⚡</p>
       <p><b>Conductors</b> allow electricity to flow through them.</p>
       <h3>Examples</h3>
       <ul>
         <li>🔩 Metals (copper, iron)</li>
         <li>💧 Water</li>
         <li>✏️ Pencil lead</li>
       </ul>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "What is a conductor?",
          "Name 3 conductors.",
          "Why are metals used in wires?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a conductor?", a: ["allows electricity to flow", "any"] }]),

    D(3, "🚫", "Insulators",
      "Learn about insulators.",
      `<p class='big-emoji'>🚫 ⚡</p>
       <p><b>Insulators</b> do NOT allow electricity to flow through them.</p>
       <h3>Examples</h3>
       <ul>
         <li>🪵 Wood</li>
         <li>🩹 Rubber</li>
         <li>🧵 Plastic</li>
         <li>🧵 Cloth</li>
       </ul>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What is an insulator?",
          "Name 3 insulators.",
          "Why are wires covered in plastic?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an insulator?", a: ["does not allow electricity", "any"] }]),

    D(4, "⚠️", "Safety",
      "Learn electrical safety.",
      `<p class='big-emoji'>⚠️ ⚡</p>
       <h3>Electrical Safety Rules</h3>
       <ul>
         <li>Do not touch wires with wet hands.</li>
         <li>Do not put fingers in sockets.</li>
         <li>Do not play with electricity.</li>
         <li>Ask an adult for help.</li>
       </ul>`,

      [{ heading: "Exercise 53.1 — Say.", items: [
          "Name 3 electrical safety rules.",
          "Why should you not touch wires with wet hands?",
          "Who should help with electricity?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why be careful with electricity?", a: ["it can hurt you", "any"] }]),

    D(5, "🎨", "Electricity Poster",
      "Make an electricity poster.",
      `<p class='big-emoji'>🎨 ⚡</p>
       <p>Show circuits, conductors, insulators, safety.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 54.1 — Draw.", items: [
          "A circuit",
          "3 conductors",
          "3 insulators",
          "3 safety rules"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a conductor.", a: ["metal", "copper", "any"] },
       { q: "Name an insulator.", a: ["wood", "plastic", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Light",
      "Review light.",
      `<p class='big-emoji'>🔁 ☀️</p>
       <h3>Review</h3>
       <ul>
         <li>Sources</li>
         <li>Reflection, refraction</li>
         <li>Shadows</li>
       </ul>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "Name 3 natural light sources.",
          "What is reflection?",
          "What is refraction?",
          "What is a shadow?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is reflection?", a: ["light bouncing off", "any"] }]),

    D(2, "🔁", "Review Sound",
      "Review sound.",
      `<p class='big-emoji'>🔁 🔊</p>
       <h3>Review</h3>
       <ul>
         <li>Production, travel</li>
         <li>Pitch, volume</li>
       </ul>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "How is sound produced?",
          "Does sound travel in space?",
          "What is pitch?",
          "What is volume?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is sound produced?", a: ["vibration", "any"] }]),

    D(3, "🔁", "Review Electricity",
      "Review electricity.",
      `<p class='big-emoji'>🔁 ⚡</p>
       <h3>Review</h3>
       <ul>
         <li>Circuits, conductors, insulators</li>
         <li>Safety</li>
       </ul>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "What is a circuit?",
          "Name a conductor.",
          "Name an insulator.",
          "Name a safety rule."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a circuit?", a: ["path for electricity", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Name 3 natural light sources.</li>
         <li>What is reflection?</li>
         <li>What is refraction?</li>
         <li>How is sound produced?</li>
         <li>What is pitch?</li>
         <li>What is volume?</li>
         <li>What is a circuit?</li>
         <li>Name a conductor.</li>
         <li>Name an insulator.</li>
         <li>Name a safety rule.</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is pitch?", a: ["high or low", "any"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Light (15)</li>
         <li>Part B — Sound (15)</li>
         <li>Part C — Electricity (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Light (15)",
          "Part B — Sound (15)",
          "Part C — Electricity (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — WEATHER & CLIMATE
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Weather & Climate", days: [

    D(1, "🌤️", "Elements",
      "Learn the elements of weather.",
      `<p class='big-emoji'>🌤️ 🌡️ 💧</p>
       <h3>Elements of Weather</h3>
       <ul>
         <li>🌡️ Temperature</li>
         <li>💧 Rainfall</li>
         <li>💨 Wind</li>
         <li>☁️ Cloud cover</li>
         <li>💦 Humidity</li>
       </ul>`,

      [{ heading: "Exercise 59.1 — Say.", items: [
          "Name 5 elements of weather.",
          "What does temperature measure?",
          "What does humidity measure?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does temperature measure?", a: ["hot or cold", "any"] },
       { q: "Name an element of weather.", a: ["temperature", "rainfall", "any"] }]),

    D(2, "🌡️", "Instruments",
      "Learn weather instruments.",
      `<p class='big-emoji'>🌡️ 🌧️ 🌬️</p>
       <h3>Weather Instruments</h3>
       <ul>
         <li>🌡️ Thermometer — temperature</li>
         <li>🌧️ Rain gauge — rainfall</li>
         <li>🌬️ Anemometer — wind speed</li>
         <li>🧭 Wind vane — wind direction</li>
       </ul>`,

      [{ heading: "Exercise 60.1 — Match.", items: [
          "thermometer → ___",
          "rain gauge → ___",
          "anemometer → ___",
          "wind vane → ___"
        ]}],

      `<p>1. Temperature 2. Rainfall 3. Wind speed 4. Wind direction</p>`,

      [{ q: "What measures temperature?", a: ["thermometer"] },
       { q: "What measures rainfall?", a: ["rain gauge"] }]),

    D(3, "🌸", "Seasons",
      "Learn about seasons.",
      `<p class='big-emoji'>🌸 🌧️ ☀️</p>
       <h3>Ghana's Seasons</h3>
       <ul>
         <li>🌧️ Rainy season — April to October</li>
         <li>☀️ Dry season — November to March</li>
         <li>💨 Harmattan — December to February</li>
       </ul>`,

      [{ heading: "Exercise 61.1 — Say.", items: [
          "What are the two seasons in Ghana?",
          "When is the rainy season?",
          "What is the harmattan?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What are Ghana's two seasons?", a: ["rainy and dry", "any"] },
       { q: "What is the harmattan?", a: ["dry dusty wind", "any"] }]),

    D(4, "🌍", "Climate Change",
      "Learn about climate change.",
      `<p class='big-emoji'>🌍 ⚠️</p>
       <p><b>Climate change</b> is a long-term change in the Earth's weather patterns.</p>
       <h3>Causes</h3>
       <ul>
         <li>Pollution</li>
         <li>Burning fuels</li>
         <li>Deforestation</li>
       </ul>
       <h3>Effects</h3>
       <ul>
         <li>Rising temperatures</li>
         <li>More floods and droughts</li>
         <li>Melting ice</li>
       </ul>`,

      [{ heading: "Exercise 62.1 — Say.", items: [
          "What is climate change?",
          "What causes it?",
          "What are its effects?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What causes climate change?", a: ["pollution", "deforestation", "any"] }]),

    D(5, "🎨", "Weather Poster",
      "Make a weather poster.",
      `<p class='big-emoji'>🎨 🌤️</p>
       <p>Show elements, instruments, seasons, and climate change.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 63.1 — Draw.", items: [
          "Elements of weather",
          "3 instruments",
          "Ghana's seasons",
          "Climate change"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "What measures temperature?", a: ["thermometer"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — WATER & ENVIRONMENT
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Water & Environment", days: [

    D(1, "💧", "Water Cycle",
      "Learn the water cycle.",
      `<p class='big-emoji'>💧 ☀️ ☁️</p>
       <h3>Stages</h3>
       <ol>
         <li>☀️ Evaporation</li>
         <li>☁️ Condensation</li>
         <li>🌧️ Precipitation</li>
         <li>💧 Collection</li>
       </ol>`,

      [{ heading: "Exercise 64.1 — Order the stages.", items: [
          "evaporation", "condensation", "precipitation", "collection"
        ]},
       { heading: "Exercise 64.2 — Answer.", items: [
          "What happens during evaporation?",
          "What happens during condensation?",
          "What happens during precipitation?"
        ]}],

      `<p>Correct order.</p>`,

      [{ q: "What happens during evaporation?", a: ["water rises", "any"] }]),

    D(2, "💧", "Conservation",
      "Learn water conservation.",
      `<p class='big-emoji'>💧 ✅</p>
       <h3>Ways to Save Water</h3>
       <ul>
         <li>Take shorter showers</li>
         <li>Turn off taps</li>
         <li>Fix leaks</li>
         <li>Collect rainwater</li>
       </ul>`,

      [{ heading: "Exercise 65.1 — Say.", items: [
          "What is water conservation?",
          "Name 3 ways to save water.",
          "Why save water?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a way to save water.", a: ["turn off taps", "any"] }]),

    D(3, "🚫", "Pollution",
      "Learn about water pollution.",
      `<p class='big-emoji'>🚫 💧</p>
       <h3>Causes of Water Pollution</h3>
       <ul>
         <li>Waste in rivers</li>
         <li>Sewage</li>
         <li>Chemicals from farms</li>
         <li>Plastic litter</li>
       </ul>`,

      [{ heading: "Exercise 66.1 — Say.", items: [
          "What is water pollution?",
          "Name 3 causes.",
          "What are the effects?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What causes water pollution?", a: ["waste", "sewage", "any"] }]),

    D(4, "🧪", "Treatment",
      "Learn water treatment.",
      `<p class='big-emoji'>🧪 💧</p>
       <h3>Water Treatment Steps</h3>
       <ol>
         <li>Screening — removes large objects</li>
         <li>Settling — particles sink</li>
         <li>Filtration — removes small particles</li>
         <li>Chlorination — kills germs</li>
       </ol>`,

      [{ heading: "Exercise 67.1 — Say.", items: [
          "Name 4 steps of water treatment.",
          "Why add chlorine?",
          "What is filtration?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why add chlorine?", a: ["kill germs", "any"] }]),

    D(5, "🎨", "Environment Poster",
      "Make an environment poster.",
      `<p class='big-emoji'>🎨 🌍</p>
       <p>Show water cycle, conservation, pollution, treatment.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 68.1 — Draw.", items: [
          "Water cycle",
          "3 ways to save water",
          "3 causes of pollution",
          "Water treatment"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a stage of the water cycle.", a: ["evaporation", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — ECOSYSTEMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Ecosystems", days: [

    D(1, "🌳", "Habitats",
      "Learn about habitats.",
      `<p class='big-emoji'>🌳 🏜️ 🌊</p>
       <h3>Habitats</h3>
       <ul>
         <li>🌳 Forest</li>
         <li>🏜️ Desert</li>
         <li>🌊 Water</li>
         <li>🏔️ Mountain</li>
       </ul>`,

      [{ heading: "Exercise 69.1 — Say.", items: [
          "Name 4 habitats.",
          "Where do fish live?",
          "Where do camels live?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Where do fish live?", a: ["water", "any"] }]),

    D(2, "🍽️", "Food Webs",
      "Learn about food webs.",
      `<p class='big-emoji'>🍽️ 🕸️</p>
       <p>A <b>food web</b> shows how living things are connected by what they eat.</p>
       <h3>Example</h3>
       <p>Grass → Grasshopper → Frog → Snake → Eagle</p>`,

      [{ heading: "Exercise 70.1 — Say.", items: [
          "What is a food web?",
          "Give an example.",
          "Where does a food web start?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a food web?", a: ["how living things are connected", "any"] }]),

    D(3, "🦎", "Adaptations",
      "Learn about adaptations.",
      `<p class='big-emoji'>🦎 🐫</p>
       <h3>Examples of Adaptations</h3>
       <ul>
         <li>🐫 Camels have humps</li>
         <li>🌵 Cacti have thorns</li>
         <li>🦒 Giraffes have long necks</li>
         <li>🐟 Fish have gills</li>
       </ul>`,

      [{ heading: "Exercise 71.1 — Say.", items: [
          "What is an adaptation?",
          "Why do camels have humps?",
          "Why do fish have gills?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why do camels have humps?", a: ["store fat", "any"] }]),

    D(4, "⚖️", "Balance",
      "Learn about balance in ecosystems.",
      `<p class='big-emoji'>⚖️ 🌍</p>
       <p>Ecosystems are in <b>balance</b> when all living things have what they need.</p>
       <h3>Things That Affect Balance</h3>
       <ul>
         <li>Pollution</li>
         <li>Hunting</li>
         <li>Deforestation</li>
         <li>Climate change</li>
       </ul>`,

      [{ heading: "Exercise 72.1 — Say.", items: [
          "What is a balanced ecosystem?",
          "What affects balance?",
          "How can we protect ecosystems?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What affects ecosystem balance?", a: ["pollution", "any"] }]),

    D(5, "🎨", "Ecosystem Poster",
      "Make an ecosystem poster.",
      `<p class='big-emoji'>🎨 🌳</p>
       <p>Show habitats, food webs, adaptations, balance.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 73.1 — Draw.", items: [
          "3 habitats",
          "A food web",
          "3 adaptations",
          "Balance"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name an adaptation.", a: ["camels have humps", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Weather",
      "Review weather.",
      `<p class='big-emoji'>🔁 🌤️</p>
       <h3>Review</h3>
       <ul>
         <li>Elements, instruments</li>
         <li>Seasons, climate change</li>
       </ul>`,

      [{ heading: "Exercise 74.1 — Answer.", items: [
          "Name 3 elements of weather.",
          "What measures temperature?",
          "What is the harmattan?",
          "What causes climate change?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What measures temperature?", a: ["thermometer"] }]),

    D(2, "🔁", "Review Water",
      "Review water.",
      `<p class='big-emoji'>🔁 💧</p>
       <h3>Review</h3>
       <ul>
         <li>Water cycle</li>
         <li>Conservation, pollution, treatment</li>
       </ul>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "Name 3 stages of the water cycle.",
          "Name 3 ways to save water.",
          "What causes water pollution?",
          "Why add chlorine?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a stage of the water cycle.", a: ["evaporation", "any"] }]),

    D(3, "🔁", "Review Ecosystems",
      "Review ecosystems.",
      `<p class='big-emoji'>🔁 🌳</p>
       <h3>Review</h3>
       <ul>
         <li>Habitats, food webs</li>
         <li>Adaptations, balance</li>
       </ul>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
          "Name 3 habitats.",
          "What is a food web?",
          "Why do camels have humps?",
          "What affects ecosystem balance?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Why do camels have humps?", a: ["store fat", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Name 3 elements of weather.</li>
         <li>What measures temperature?</li>
         <li>Name 3 stages of the water cycle.</li>
         <li>Name 3 ways to save water.</li>
         <li>What causes water pollution?</li>
         <li>Name 3 habitats.</li>
         <li>What is a food web?</li>
         <li>Why do camels have humps?</li>
         <li>What is the harmattan?</li>
         <li>What causes climate change?</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is the harmattan?", a: ["dry dusty wind", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Weather (15)</li>
         <li>Part B — Water (15)</li>
         <li>Part C — Ecosystems (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Weather (15)",
          "Part B — Water (15)",
          "Part C — Ecosystems (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — SOLAR SYSTEM
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Solar System", days: [

    D(1, "☀️", "Sun",
      "Learn about the sun.",
      `<p class='big-emoji'>☀️ 🔥</p>
       <p>The <b>sun</b> is a star at the centre of our solar system.</p>
       <h3>Key Facts</h3>
       <ul>
         <li>Gives light and heat</li>
         <li>Much bigger than Earth</li>
         <li>Made of hot gases</li>
       </ul>`,

      [{ heading: "Exercise 78.1 — Say.", items: [
          "What is the sun?",
          "What does the sun give us?",
          "Is the sun bigger than Earth?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the sun?", a: ["a star", "star"] }]),

    D(2, "🪐", "Planets",
      "Learn about planets.",
      `<p class='big-emoji'>🪐 🌍</p>
       <h3>The 8 Planets (in order)</h3>
       <ol>
         <li>Mercury</li>
         <li>Venus</li>
         <li>Earth</li>
         <li>Mars</li>
         <li>Jupiter</li>
         <li>Saturn</li>
         <li>Uranus</li>
         <li>Neptune</li>
       </ol>`,

      [{ heading: "Exercise 79.1 — Say.", items: [
          "How many planets?",
          "Which planet do we live on?",
          "Which planet has rings?",
          "Which planet is the largest?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] },
       { q: "Which planet has rings?", a: ["saturn"] }]),

    D(3, "🌙", "Moon",
      "Learn about the moon.",
      `<p class='big-emoji'>🌙 🌕</p>
       <h3>Key Facts</h3>
       <ul>
         <li>Moon orbits Earth</li>
         <li>Reflects sunlight</li>
         <li>Has no air or water</li>
         <li>Changes shape in the sky (phases)</li>
       </ul>`,

      [{ heading: "Exercise 80.1 — Say.", items: [
          "What is the moon?",
          "Why does the moon shine?",
          "Does the moon have air?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why does the moon shine?", a: ["reflects sunlight", "any"] }]),

    D(4, "⭐", "Stars",
      "Learn about stars.",
      `<p class='big-emoji'>⭐ ✨</p>
       <h3>Stars</h3>
       <ul>
         <li>Huge balls of hot gas</li>
         <li>Give off light and heat</li>
         <li>The sun is our closest star</li>
         <li>There are billions of stars</li>
       </ul>`,

      [{ heading: "Exercise 81.1 — Say.", items: [
          "What is a star?",
          "Why do stars shine?",
          "What is our closest star?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a star?", a: ["ball of hot gas", "any"] }]),

    D(5, "🎨", "Space Poster",
      "Make a space poster.",
      `<p class='big-emoji'>🎨 🪐</p>
       <p>Show the sun, planets, moon, and stars.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say the planets in order.</p>`,

      [{ heading: "Exercise 82.1 — Draw.", items: [
          "Sun", "8 planets", "Moon", "Stars"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — EARTH SCIENCE
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Earth Science", days: [

    D(1, "🪨", "Rocks",
      "Learn about rocks.",
      `<p class='big-emoji'>🪨 ⛰️</p>
       <h3>3 Types of Rocks</h3>
       <ul>
         <li>🪨 <b>Igneous</b> — from cooled lava</li>
         <li>🪨 <b>Sedimentary</b> — from layers of sand and mud</li>
         <li>🪨 <b>Metamorphic</b> — changed by heat and pressure</li>
       </ul>`,

      [{ heading: "Exercise 83.1 — Say.", items: [
          "Name 3 types of rocks.",
          "How is igneous rock formed?",
          "How is sedimentary rock formed?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a type of rock.", a: ["igneous", "sedimentary", "metamorphic", "any"] }]),

    D(2, "🌱", "Soil",
      "Learn about soil.",
      `<p class='big-emoji'>🌱 🏖️</p>
       <h3>Types of Soil</h3>
       <ul>
         <li>🏖️ Sandy — large particles</li>
         <li>🌱 Loamy — best for plants</li>
         <li>🧱 Clay — small particles</li>
       </ul>`,

      [{ heading: "Exercise 84.1 — Say.", items: [
          "Name 3 types of soil.",
          "Which is best for plants?",
          "Why is soil important?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Which soil is best for plants?", a: ["loamy"] }]),

    D(3, "🦴", "Fossils",
      "Learn about fossils.",
      `<p class='big-emoji'>🦴 🐚</p>
       <p><b>Fossils</b> are the remains of living things preserved in rock.</p>
       <h3>How Fossils Form</h3>
       <ol>
         <li>An animal dies.</li>
         <li>It gets buried in mud or sand.</li>
         <li>Over many years, it turns to rock.</li>
       </ol>`,

      [{ heading: "Exercise 85.1 — Say.", items: [
          "What is a fossil?",
          "How do fossils form?",
          "What can we learn from fossils?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a fossil?", a: ["remains of living things in rock", "any"] }]),

    D(4, "🌍", "Earth's Structure",
      "Learn about Earth's layers.",
      `<p class='big-emoji'>🌍 🔥</p>
       <h3>Layers of Earth</h3>
       <ul>
         <li>🌍 <b>Crust</b> — the outer layer</li>
         <li>🪨 <b>Mantle</b> — hot rock</li>
         <li>🔥 <b>Core</b> — very hot centre</li>
       </ul>`,

      [{ heading: "Exercise 86.1 — Say.", items: [
          "Name the 3 layers of Earth.",
          "Which layer is the outer one?",
          "Which layer is the hottest?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What are Earth's 3 layers?", a: ["crust mantle core", "any"] }]),

    D(5, "🎨", "Earth Poster",
      "Make an Earth poster.",
      `<p class='big-emoji'>🎨 🌍</p>
       <p>Show rocks, soil, fossils, and Earth's layers.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 87.1 — Draw.", items: [
          "3 rock types",
          "3 soil types",
          "How fossils form",
          "Earth's layers"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a rock type.", a: ["igneous", "sedimentary", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — HEALTH
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Health", days: [

    D(1, "🦠", "Diseases",
      "Learn about diseases.",
      `<p class='big-emoji'>🦠 🤒</p>
       <h3>Common Diseases</h3>
       <ul>
         <li>🦟 Malaria — mosquito bites</li>
         <li>🤒 Cholera — dirty water</li>
         <li>🦠 Typhoid — contaminated food</li>
         <li>😷 Common cold — virus</li>
       </ul>`,

      [{ heading: "Exercise 88.1 — Say.", items: [
          "Name 3 diseases.",
          "How is malaria spread?",
          "How is cholera spread?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] }]),

    D(2, "🥗", "Nutrition",
      "Learn about nutrition.",
      `<p class='big-emoji'>🥗 🍎</p>
       <h3>Food Groups</h3>
       <ul>
         <li>🍚 Carbohydrates — energy</li>
         <li>🍗 Proteins — body building</li>
         <li>🥬 Vitamins — protection</li>
         <li>💧 Water — hydration</li>
       </ul>`,

      [{ heading: "Exercise 89.1 — Say.", items: [
          "Name the food groups.",
          "Which food group gives energy?",
          "Why is a balanced diet important?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Which food group gives energy?", a: ["carbohydrates", "carbs"] }]),

    D(3, "🏃", "Fitness",
      "Learn about fitness.",
      `<p class='big-emoji'>🏃 💪</p>
       <h3>Staying Fit</h3>
       <ul>
         <li>Exercise every day</li>
         <li>Play sports</li>
         <li>Sleep well</li>
         <li>Eat healthy food</li>
       </ul>`,

      [{ heading: "Exercise 90.1 — Say.", items: [
          "Why is exercise important?",
          "Name 3 exercises.",
          "How much sleep do children need?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why exercise?", a: ["stay healthy", "any"] }]),

    D(4, "🩹", "First Aid",
      "Learn first aid.",
      `<p class='big-emoji'>🩹 🧴</p>
       <h3>Basic First Aid</h3>
       <ul>
         <li>Small cut — wash and cover</li>
         <li>Burn — cool with water</li>
         <li>Nosebleed — pinch, lean forward</li>
         <li>Bee sting — remove sting, wash</li>
       </ul>`,

      [{ heading: "Exercise 91.1 — Say.", items: [
          "What is first aid?",
          "What do you do for a small cut?",
          "What do you do for a burn?",
          "What do you do for a nosebleed?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you do for a cut?", a: ["wash and cover", "any"] }]),

    D(5, "🎨", "Health Poster",
      "Make a health poster.",
      `<p class='big-emoji'>🎨 🥗</p>
       <p>Show diseases, nutrition, fitness, and first aid.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 92.1 — Draw.", items: [
          "3 diseases",
          "Food groups",
          "3 exercises",
          "First aid tips"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Space",
      "Review space.",
      `<p class='big-emoji'>🔁 🪐</p>
       <h3>Review</h3>
       <ul>
         <li>Sun, planets, moon, stars</li>
       </ul>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "What is the sun?",
          "How many planets?",
          "Why does the moon shine?",
          "What is a star?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] }]),

    D(2, "🔁", "Review Earth",
      "Review Earth science.",
      `<p class='big-emoji'>🔁 🌍</p>
       <h3>Review</h3>
       <ul>
         <li>Rocks, soil, fossils</li>
         <li>Earth's layers</li>
       </ul>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "Name 3 types of rocks.",
          "Name 3 types of soil.",
          "What is a fossil?",
          "Name Earth's 3 layers."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a rock type.", a: ["igneous", "sedimentary", "any"] }]),

    D(3, "🔁", "Review Health",
      "Review health.",
      `<p class='big-emoji'>🔁 🥗</p>
       <h3>Review</h3>
       <ul>
         <li>Diseases, nutrition</li>
         <li>Fitness, first aid</li>
       </ul>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "How is malaria spread?",
          "Name the food groups.",
          "Why exercise?",
          "What do you do for a cut?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is the sun?</li>
         <li>How many planets?</li>
         <li>Why does the moon shine?</li>
         <li>Name 3 rock types.</li>
         <li>Name 3 soil types.</li>
         <li>What is a fossil?</li>
         <li>Name Earth's 3 layers.</li>
         <li>How is malaria spread?</li>
         <li>Name the food groups.</li>
         <li>What do you do for a cut?</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a fossil?", a: ["remains in rock", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Space (15)</li>
         <li>Part B — Earth (15)</li>
         <li>Part C — Health (15)</li>
         <li>Part D — Practical (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Space (15)",
          "Part B — Earth (15)",
          "Part C — Health (15)",
          "Part D — Practical (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — SCIENTIFIC METHOD
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Scientific Method", days: [

    D(1, "🔍", "Observing",
      "Learn about observation.",
      `<p class='big-emoji'>🔍 👁️</p>
       <p><b>Observing</b> means using your senses to notice things.</p>
       <h3>What to Observe</h3>
       <ul>
         <li>👁️ See</li>
         <li>👂 Hear</li>
         <li>👃 Smell</li>
         <li>🖐️ Touch</li>
         <li>👅 Taste (with caution)</li>
       </ul>`,

      [{ heading: "Exercise 97.1 — Say.", items: [
          "What is observation?",
          "What senses do we use?",
          "Why is observation important in science?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is observation?", a: ["using senses", "any"] }]),

    D(2, "💭", "Hypothesising",
      "Learn about hypotheses.",
      `<p class='big-emoji'>💭 🤔</p>
       <p>A <b>hypothesis</b> is a smart guess about what will happen.</p>
       <h3>Example</h3>
       <p>"I think sugar dissolves faster in hot water than cold water."</p>`,

      [{ heading: "Exercise 98.1 — Say.", items: [
          "What is a hypothesis?",
          "Write a hypothesis for a simple experiment.",
          "Is a hypothesis always correct?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a hypothesis?", a: ["smart guess", "any"] }]),

    D(3, "🧪", "Experimenting",
      "Learn about experiments.",
      `<p class='big-emoji'>🧪 🔬</p>
       <h3>Steps of an Experiment</h3>
       <ol>
         <li>Ask a question.</li>
         <li>Make a hypothesis.</li>
         <li>Plan the experiment.</li>
         <li>Do the experiment.</li>
         <li>Record results.</li>
       </ol>`,

      [{ heading: "Exercise 99.1 — Say.", items: [
          "What is an experiment?",
          "Name the steps.",
          "Why is a fair test important?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an experiment?", a: ["a test", "any"] }]),

    D(4, "📊", "Concluding",
      "Learn about conclusions.",
      `<p class='big-emoji'>📊 ✅</p>
       <p>A <b>conclusion</b> is what you learned from your experiment.</p>
       <h3>Steps</h3>
       <ol>
         <li>Look at your results.</li>
         <li>Was your hypothesis correct?</li>
         <li>Write what you learned.</li>
       </ol>`,

      [{ heading: "Exercise 100.1 — Say.", items: [
          "What is a conclusion?",
          "Was your hypothesis correct?",
          "What did you learn?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a conclusion?", a: ["what you learned", "any"] }]),

    D(5, "🎨", "Method Poster",
      "Make a scientific method poster.",
      `<p class='big-emoji'>🎨 🧪</p>
       <p>Show all steps of the scientific method.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one step.</p>`,

      [{ heading: "Exercise 101.1 — Draw.", items: [
          "Observing",
          "Hypothesising",
          "Experimenting",
          "Concluding"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "What are the steps?", a: ["observe hypothesise experiment conclude", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Technology", days: [

    D(1, "⚙️", "Simple Machines",
      "Learn about simple machines.",
      `<p class='big-emoji'>⚙️ 🔧</p>
       <h3>Simple Machines</h3>
       <ul>
         <li>🎡 Wheel and axle</li>
         <li>🔧 Lever</li>
         <li>📐 Inclined plane</li>
         <li>🔩 Screw</li>
         <li>🪝 Pulley</li>
         <li>🔪 Wedge</li>
       </ul>`,

      [{ heading: "Exercise 102.1 — Say.", items: [
          "Name 4 simple machines.",
          "Give an example of each.",
          "How do simple machines help us?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a simple machine.", a: ["lever", "pulley", "any"] }]),

    D(2, "🔧", "Tools",
      "Learn about tools.",
      `<p class='big-emoji'>🔧 🔨</p>
       <h3>Common Tools</h3>
       <ul>
         <li>🔨 Hammer — hitting nails</li>
         <li>✂️ Scissors — cutting</li>
         <li>🪛 Screwdriver — turning screws</li>
         <li>🔧 Wrench — turning nuts</li>
         <li>🪚 Saw — cutting wood</li>
       </ul>`,

      [{ heading: "Exercise 103.1 — Say.", items: [
          "Name 3 tools and their uses.",
          "What is a hammer used for?",
          "What is a saw used for?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a hammer used for?", a: ["hitting nails", "any"] }]),

    D(3, "🧱", "Materials",
      "Learn about materials.",
      `<p class='big-emoji'>🧱 🪵</p>
       <h3>Common Materials</h3>
       <ul>
         <li>🪵 Wood — from trees</li>
         <li>🔩 Metal — from rocks</li>
         <li>🧱 Clay — from earth</li>
         <li>🧵 Cloth — from plants or animals</li>
         <li>🪟 Glass — from sand</li>
       </ul>`,

      [{ heading: "Exercise 104.1 — Say.", items: [
          "Name 3 materials.",
          "Where does wood come from?",
          "Where does glass come from?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Where does wood come from?", a: ["trees", "any"] }]),

    D(4, "🎨", "Design",
      "Learn about design.",
      `<p class='big-emoji'>🎨 📐</p>
       <h3>Design Process</h3>
       <ol>
         <li>Find a problem.</li>
         <li>Think of ideas.</li>
         <li>Draw a plan.</li>
         <li>Build it.</li>
         <li>Test it.</li>
       </ol>`,

      [{ heading: "Exercise 105.1 — Say.", items: [
          "What is design?",
          "Name the steps.",
          "What did you design?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is design?", a: ["planning to make something", "any"] }]),

    D(5, "🎨", "Technology Poster",
      "Make a technology poster.",
      `<p class='big-emoji'>🎨 ⚙️</p>
       <p>Show simple machines, tools, materials, and design.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one idea.</p>`,

      [{ heading: "Exercise 106.1 — Draw.", items: [
          "4 simple machines",
          "3 tools",
          "3 materials",
          "Design steps"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a simple machine.", a: ["lever", "pulley", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Life Science",
      "Revise life science.",
      `<p class='big-emoji'>🔁 🔬</p>
       <h3>Revise</h3>
       <ul>
         <li>Cells, tissues, organs</li>
         <li>Body systems</li>
         <li>Plants</li>
       </ul>`,

      [{ heading: "Exercise 107.1 — Answer.", items: [
          "What is a cell?",
          "What does the heart do?",
          "What is photosynthesis?",
          "What do flowers make?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a cell?", a: ["smallest unit of life", "any"] }]),

    D(2, "🔁", "Physical Science",
      "Revise physical science.",
      `<p class='big-emoji'>🔁 ⚡</p>
       <h3>Revise</h3>
       <ul>
         <li>Matter, forces, energy</li>
         <li>Light, sound, electricity</li>
       </ul>`,

      [{ heading: "Exercise 108.1 — Answer.", items: [
          "Name 3 states of matter.",
          "What causes movement?",
          "Name 4 forms of energy.",
          "How is sound produced?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name 3 states of matter.", a: ["solid liquid gas", "any"] }]),

    D(3, "🔁", "Earth & Space",
      "Revise earth and space.",
      `<p class='big-emoji'>🔁 🌍</p>
       <h3>Revise</h3>
       <ul>
         <li>Weather, water</li>
         <li>Ecosystems</li>
         <li>Space, Earth</li>
       </ul>`,

      [{ heading: "Exercise 109.1 — Answer.", items: [
          "What is the sun?",
          "How many planets?",
          "Name a stage of the water cycle.",
          "What is a food web?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] }]),

    D(4, "🔁", "Health",
      "Revise health.",
      `<p class='big-emoji'>🔁 🥗</p>
       <h3>Revise</h3>
       <ul>
         <li>Diseases, nutrition</li>
         <li>Fitness, first aid</li>
       </ul>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "How is malaria spread?",
          "Name the food groups.",
          "Why exercise?",
          "What do you do for a cut?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a cell?</li>
         <li>What does the heart do?</li>
         <li>What is photosynthesis?</li>
         <li>Name 3 states of matter.</li>
         <li>What causes movement?</li>
         <li>How is sound produced?</li>
         <li>What is the sun?</li>
         <li>How many planets?</li>
         <li>How is malaria spread?</li>
         <li>Name a simple machine.</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is the sun?", a: ["a star", "star"] }])
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
         <li>Life science (cells, plants, animals)</li>
         <li>Human body systems</li>
         <li>Matter, forces, energy</li>
         <li>Light, sound, electricity</li>
         <li>Weather, water, ecosystems</li>
         <li>Space, Earth, health</li>
         <li>Scientific method, technology</li>
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
          "Draw your favourite science topic."
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: "Name a topic you liked.", a: ["any"] },
       { q: "Name a new word you learned.", a: ["any"] }]),

    D(2, "📁", "Portfolio",
      "Make a portfolio.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Make a <b>portfolio</b> of your best science work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best poster</li>
         <li>Your best experiment record</li>
         <li>Your best drawing</li>
         <li>Your best written answer</li>
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
      "Celebrate your year of science.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Grade 4 Science! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>🔬 Do one last experiment.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 4 Science! I can observe, hypothesise, and experiment!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Do one last experiment.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 5?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a science champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can observe!"</li>
         <li>⭐ "I can do experiments!"</li>
         <li>⭐ "I can learn about the world!"</li>
       </ul>
       <h3>What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>
       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself as a scientist. Add 3 big stars around you.</p>`,

      [{ heading: "Exercise 116.1 — Big Star Day", items: [
          'Say "I can observe!"',
          'Say "I can do experiments!"',
          'Say "I can learn about the world!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of science!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];