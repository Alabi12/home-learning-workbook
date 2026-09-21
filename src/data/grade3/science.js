// src/data/grade3/science.js
// Grade 3 Science — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Life Science · Physical Science · Earth & Space · Health · Technology

import { D } from '../helpers.js';

export const science = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — LIVING THINGS
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Living Things", days: [

    D(1, "🌱", "Characteristics",
      "List characteristics of living things.",
      `<p class='big-emoji'>🌱 🐶 🌳</p>
       <p>Living things have <b>7 characteristics</b>:</p>
       <ol>
         <li><b>Movement</b> — they move</li>
         <li><b>Respiration</b> — they breathe</li>
         <li><b>Nutrition</b> — they need food</li>
         <li><b>Growth</b> — they grow</li>
         <li><b>Excretion</b> — they remove waste</li>
         <li><b>Reproduction</b> — they make young ones</li>
         <li><b>Response to stimuli</b> — they react to changes</li>
       </ol>
       <h3>Illustration (Draw This!)</h3>
       <p>Draw one living thing and one non-living thing. Label each.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a stone living?</p>
       <p><b>Answer:</b> No — a stone does not move, grow, or need food.</p>`,

      [{ heading: "Exercise 1.1 — Tick the living things.", items: [
          "dog", "stone", "tree", "water", "boy"
        ]},
       { heading: "Exercise 1.2 — List 5 characteristics of living things.", items: []},
       { heading: "Exercise 1.3 — Draw and label.", items: [
          "Draw one living thing and one non-living thing."
        ]}],

      `<p><b>1.1:</b> 1. ✓ 2. ✗ 3. ✓ 4. ✗ 5. ✓</p>`,

      [{ q: "Is a stone living?", a: ["no", "non-living"] },
       { q: "Is a tree living?", a: ["yes", "living"] },
       { q: "Name a characteristic of living things.", a: ["movement", "growth", "any"] }]),

    D(2, "🐾", "Plants vs Animals",
      "Distinguish plants from animals.",
      `<p class='big-emoji'>🌿 🐄</p>
       <p><b>Plants</b> make their own food using sunlight (photosynthesis).</p>
       <p><b>Animals</b> eat other things (plants or other animals).</p>
       <h3>Differences</h3>
       <ul>
         <li>Plants are green; most animals are not.</li>
         <li>Plants stay in one place; most animals move around.</li>
         <li>Plants make food; animals find food.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a cow a plant or an animal?</p>
       <p><b>Answer:</b> A cow is an <b>animal</b> — it moves and eats plants.</p>`,

      [{ heading: "Exercise 2.1 — Classify as plant (P) or animal (A).", items: [
          "mango tree", "cow", "grass", "lion", "rose"
        ]},
       { heading: "Exercise 2.2 — Answer.", items: [
          "Name 3 plants.", "Name 3 animals.", "What do plants need to make food?"
        ]}],

      `<p><b>2.1:</b> 1. P 2. A 3. P 4. A 5. P</p>`,

      [{ q: "Is a cow a plant or animal?", a: ["animal"] },
       { q: "Is grass a plant or animal?", a: ["plant"] },
       { q: "What do plants need to make food?", a: ["sunlight", "water", "any"] }]),

    D(3, "🏠", "Habitat",
      "Learn about habitats.",
      `<p class='big-emoji'>🏠 🌍</p>
       <p>A <b>habitat</b> is where a living thing lives.</p>
       <h3>Common Habitats</h3>
       <ul>
         <li>🌊 <b>Water</b> — fish, frogs</li>
         <li>🌳 <b>Forest</b> — lions, monkeys</li>
         <li>🏜️ <b>Desert</b> — camels, snakes</li>
         <li>🏡 <b>Farm</b> — cows, goats</li>
         <li>🌳 <b>Trees</b> — birds, squirrels</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does a fish live?</p>
       <p><b>Answer:</b> A fish lives in <b>water</b>.</p>`,

      [{ heading: "Exercise 3.1 — Match the animal to its habitat.", items: [
          "fish → water",
          "lion → forest",
          "cow → farm",
          "bird → tree",
          "camel → desert"
        ]},
       { heading: "Exercise 3.2 — Answer.", items: [
          "Where does a fish live?",
          "Where does a lion live?",
          "Where does a camel live?"
        ]}],

      `<p>All correct matches.</p>`,

      [{ q: "Where does a fish live?", a: ["water"] },
       { q: "Where does a lion live?", a: ["forest", "savanna"] },
       { q: "Where does a camel live?", a: ["desert"] }]),

    D(4, "🍽️", "Food Chains",
      "Learn simple food chains.",
      `<p class='big-emoji'>🍽️ 🌾 🦁</p>
       <p>A <b>food chain</b> shows who eats what.</p>
       <p>Example: <b>Sun → Grass → Goat → Lion</b></p>
       <h3>Parts of a Food Chain</h3>
       <ul>
         <li>☀️ <b>Sun</b> — gives energy</li>
         <li>🌿 <b>Producer</b> — makes food (grass)</li>
         <li>🐐 <b>Consumer</b> — eats plants (goat)</li>
         <li>🦁 <b>Predator</b> — eats animals (lion)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does a food chain start?</p>
       <p><b>Answer:</b> A food chain starts with the <b>sun</b>.</p>`,

      [{ heading: "Exercise 4.1 — Complete the food chain.", items: [
          "Sun → ___ → ___ → ___",
          "Sun → ___ → ___ → ___"
        ]},
       { heading: "Exercise 4.2 — Answer.", items: [
          "Where does the food chain start?",
          "What eats grass?",
          "What eats a goat?"
        ]}],

      `<p>Any correct food chain.</p>`,

      [{ q: "Where does the food chain start?", a: ["sun"] },
       { q: "What eats grass?", a: ["goat", "cow", "any"] },
       { q: "What eats a goat?", a: ["lion", "any"] }]),

    D(5, "🎨", "Living Things Poster",
      "Make a poster.",
      `<p class='big-emoji'>🎨 🌱 🐾</p>
       <p>Make a <b>"Living Things"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Living Things"</b></li>
         <li>Draw 3 living things and 3 non-living things.</li>
         <li>Label each one.</li>
         <li>Write one sentence: "Living things grow, move, and need food."</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what makes something living.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [
          "3 living things", "3 non-living things"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Give an example of a living thing.", a: ["any"] },
       { q: "Give an example of a non-living thing.", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — HUMAN BODY
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Human Body", days: [

    D(1, "🍽️", "Digestive System",
      "Learn about digestion.",
      `<p class='big-emoji'>🍽️ 😋</p>
       <p>Food passes through the <b>digestive system</b>:</p>
       <p><b>Mouth → Oesophagus → Stomach → Small intestine → Large intestine → Anus</b></p>
       <h3>What Each Part Does</h3>
       <ul>
         <li>👄 <b>Mouth</b> — chews food</li>
         <li>🔄 <b>Oesophagus</b> — carries food to stomach</li>
         <li>🫃 <b>Stomach</b> — breaks down food</li>
         <li>🌀 <b>Small intestine</b> — absorbs nutrients</li>
         <li>🌀 <b>Large intestine</b> — absorbs water</li>
         <li>🚪 <b>Anus</b> — removes waste</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does food go after the mouth?</p>
       <p><b>Answer:</b> Food goes to the <b>oesophagus</b>.</p>`,

      [{ heading: "Exercise 6.1 — Label the digestive system.", items: [
          "mouth", "oesophagus", "stomach", "small intestine", "large intestine"
        ]},
       { heading: "Exercise 6.2 — Answer.", items: [
          "Where does food go after the mouth?",
          "Where does food go after the stomach?",
          "What does the mouth do?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "Where does food go after the mouth?", a: ["oesophagus"] },
       { q: "Where does food go after the stomach?", a: ["small intestine"] },
       { q: "What does the mouth do?", a: ["chews food", "chew"] }]),

    D(2, "❤️", "Circulatory System",
      "Learn about the heart.",
      `<p class='big-emoji'>❤️ 🩸</p>
       <p>The <b>heart</b> pumps blood around the body. Blood carries oxygen and food to all parts of the body.</p>
       <h3>Key Facts</h3>
       <ul>
         <li>The heart has <b>4 chambers</b>.</li>
         <li>Blood vessels carry blood.</li>
         <li>The heart beats about <b>70–100 times</b> per minute in children.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the heart do?</p>
       <p><b>Answer:</b> The heart <b>pumps blood</b> around the body.</p>`,

      [{ heading: "Exercise 7.1 — Answer:", items: [
          "What does the heart do?",
          "What does blood carry?",
          "How many chambers does the heart have?"
        ]},
       { heading: "Exercise 7.2 — Draw.", items: [
          "Draw a heart and label the 4 chambers."
        ]}],

      `<p>1. Pumps blood. 2. Oxygen and food. 3. Four.</p>`,

      [{ q: "What does the heart do?", a: ["pumps blood", "pump blood"] },
       { q: "What does blood carry?", a: ["oxygen", "food", "oxygen and food"] },
       { q: "How many chambers does the heart have?", a: ["4", "four"] }]),

    D(3, "🌬️", "Respiratory System",
      "Learn about breathing.",
      `<p class='big-emoji'>🌬️ 😮‍💨</p>
       <p>Air travels through the <b>respiratory system</b>:</p>
       <p><b>Nose → Trachea → Bronchi → Lungs</b></p>
       <h3>What Each Part Does</h3>
       <ul>
         <li>👃 <b>Nose</b> — filters and warms air</li>
         <li>🛤️ <b>Trachea</b> — windpipe</li>
         <li>🌿 <b>Bronchi</b> — two branches into lungs</li>
         <li>🫁 <b>Lungs</b> — take oxygen into blood</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does air go first?</p>
       <p><b>Answer:</b> Air goes in through the <b>nose</b> first.</p>`,

      [{ heading: "Exercise 8.1 — Label the respiratory system.", items: [
          "nose", "trachea", "bronchi", "lungs"
        ]},
       { heading: "Exercise 8.2 — Answer.", items: [
          "Where does air go first?",
          "Where does air end up?",
          "What do lungs do?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "Where does air go first?", a: ["nose"] },
       { q: "Where does air end up?", a: ["lungs"] },
       { q: "What do lungs do?", a: ["take oxygen", "breathe", "any"] }]),

    D(4, "🦴", "Skeletal System",
      "Learn about bones.",
      `<p class='big-emoji'>🦴 💀</p>
       <p>Bones do 3 important jobs:</p>
       <ul>
         <li><b>Support</b> — hold us up</li>
         <li><b>Protect</b> — protect organs (heart, brain)</li>
         <li><b>Movement</b> — help us move with muscles</li>
       </ul>
       <h3>Key Bones</h3>
       <ul>
         <li>💀 <b>Skull</b> — protects the brain</li>
         <li>🦴 <b>Spine</b> — supports the body</li>
         <li>🫁 <b>Ribs</b> — protect the heart and lungs</li>
         <li>🦵 <b>Femur</b> — thigh bone</li>
         <li>💪 <b>Humerus</b> — upper arm bone</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How many bones in an adult body?</p>
       <p><b>Answer:</b> An adult has <b>206 bones</b>.</p>`,

      [{ heading: "Exercise 9.1 — Name 5 bones in the body.", items: []},
       { heading: "Exercise 9.2 — Answer.", items: [
          "How many bones in an adult body?",
          "What do bones protect?",
          "What does the skull protect?"
        ]}],

      `<p>Any 5 correct bones (skull, spine, ribs, femur, humerus, etc.).</p>`,

      [{ q: "How many bones in an adult body?", a: ["206"] },
       { q: "What do bones protect?", a: ["organs", "heart", "brain", "any"] },
       { q: "What does the skull protect?", a: ["brain"] }]),

    D(5, "🎨", "Body Poster",
      "Make a body poster.",
      `<p class='big-emoji'>🎨 🧍</p>
       <p>Make a <b>"Human Body"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Human Body Systems"</b></li>
         <li>Draw a body outline.</li>
         <li>Label 5 organs or systems.</li>
         <li>Write one sentence about each.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each organ does.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [
          "heart", "lungs", "stomach", "brain", "bones"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Which system helps you breathe?", a: ["respiratory"] },
       { q: "Which system pumps blood?", a: ["circulatory"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — PLANTS
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Plants", days: [

    D(1, "🌱", "Parts of a Plant",
      "Learn plant parts.",
      `<p class='big-emoji'>🌱 🌿 🌸</p>
       <p>A plant has <b>6 main parts</b>:</p>
       <ul>
         <li>🌱 <b>Roots</b> — take in water and minerals; hold the plant</li>
         <li>🌿 <b>Stem</b> — carries water and food; supports the plant</li>
         <li>🍃 <b>Leaves</b> — make food using sunlight</li>
         <li>🌸 <b>Flowers</b> — make seeds</li>
         <li>🍎 <b>Fruit</b> — protects seeds</li>
         <li>🌰 <b>Seeds</b> — grow into new plants</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which part takes in water?</p>
       <p><b>Answer:</b> The <b>roots</b> take in water.</p>`,

      [{ heading: "Exercise 11.1 — Label the parts.", items: [
          "roots", "stem", "leaf", "flower", "fruit"
        ]},
       { heading: "Exercise 11.2 — Answer.", items: [
          "Which part takes in water?",
          "Which part makes food?",
          "Which part makes seeds?"
        ]}],

      `<p>All correctly labelled.</p>`,

      [{ q: "Which part takes in water?", a: ["roots"] },
       { q: "Which part makes food?", a: ["leaves", "leaf"] },
       { q: "Which part makes seeds?", a: ["flower", "flowers"] }]),

    D(2, "🌞", "Photosynthesis",
      "Learn how plants make food.",
      `<p class='big-emoji'>🌞 🍃 🍬</p>
       <p><b>Photosynthesis</b> is how plants make their own food.</p>
       <p><b>Sunlight + Water + Carbon dioxide → Glucose + Oxygen</b></p>
       <h3>What Plants Need</h3>
       <ul>
         <li>☀️ Sunlight</li>
         <li>💧 Water</li>
         <li>💨 Carbon dioxide (from air)</li>
       </ul>
       <h3>What Plants Make</h3>
       <ul>
         <li>🍬 Glucose (food for the plant)</li>
         <li>🌬️ Oxygen (released into air)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What gas do plants take in?</p>
       <p><b>Answer:</b> Plants take in <b>carbon dioxide</b>.</p>`,

      [{ heading: "Exercise 12.1 — Write the photosynthesis equation.", items: []},
       { heading: "Exercise 12.2 — Answer.", items: [
          "What gas do plants take in?",
          "What gas do plants release?",
          "What do plants need to make food?"
        ]}],

      `<p>Sunlight + Water + CO₂ → Glucose + Oxygen</p>`,

      [{ q: "What gas do plants take in?", a: ["carbon dioxide", "co2"] },
       { q: "What gas do plants release?", a: ["oxygen", "o2"] },
       { q: "What do plants need to make food?", a: ["sunlight", "water", "any"] }]),

    D(3, "🌸", "Reproduction",
      "Learn how plants reproduce.",
      `<p class='big-emoji'>🌸 🌰 🌱</p>
       <p>Plants reproduce by making <b>seeds</b>. Seeds grow into new plants.</p>
       <h3>Stages of Plant Growth</h3>
       <ol>
         <li>🌰 <b>Seed</b></li>
         <li>🌱 <b>Seedling</b> — small plant</li>
         <li>🌿 <b>Young plant</b></li>
         <li>🌸 <b>Flowering plant</b> — makes new seeds</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do flowers make?</p>
       <p><b>Answer:</b> Flowers make <b>seeds</b>.</p>`,

      [{ heading: "Exercise 13.1 — Order the stages.", items: [
          "seed", "seedling", "young plant", "flowering plant"
        ]},
       { heading: "Exercise 13.2 — Answer.", items: [
          "What do flowers make?",
          "What does a seed grow into?",
          "How many stages of growth?"
        ]}],

      `<p>Correct order: seed → seedling → young plant → flowering plant.</p>`,

      [{ q: "What do flowers make?", a: ["seeds"] },
       { q: "What does a seed grow into?", a: ["plant"] },
       { q: "How many stages of growth?", a: ["4", "four"] }]),

    D(4, "🌱", "Growth Experiment",
      "Plant a bean seed.",
      `<p class='big-emoji'>🌱 🧪</p>
       <p>Today we do a real experiment! Plant a bean seed and watch it grow.</p>
       <h3>Materials</h3>
       <ul>
         <li>Bean seed</li>
         <li>Small cup or pot</li>
         <li>Soil</li>
         <li>Water</li>
       </ul>
       <h3>Steps</h3>
       <ol>
         <li>Fill the cup with soil.</li>
         <li>Plant the bean seed 2 cm deep.</li>
         <li>Water it every day.</li>
         <li>Place it near sunlight.</li>
         <li>Record growth each day.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do seeds need to grow?</p>
       <p><b>Answer:</b> Seeds need <b>water, sunlight, and soil</b>.</p>`,

      [{ heading: "Exercise 14.1 — Record growth for 5 days.", items: [
          "Day 1", "Day 2", "Day 3", "Day 4", "Day 5"
        ]},
       { heading: "Exercise 14.2 — Answer.", items: [
          "What do seeds need to grow?",
          "What happened on Day 3?",
          "How tall was your plant on Day 5?"
        ]}],

      `<p>Any reasonable record.</p>`,

      [{ q: "What do seeds need to grow?", a: ["water", "sunlight", "soil", "any"] },
       { q: "How tall was your plant?", a: ["any"] }]),

    D(5, "🎨", "Plant Poster",
      "Make a plant poster.",
      `<p class='big-emoji'>🎨 🌱 🌸</p>
       <p>Make a <b>"Plants"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Parts of a Plant"</b></li>
         <li>Draw a plant with roots, stem, leaves, flower, and fruit.</li>
         <li>Label 5 parts.</li>
         <li>Write the photosynthesis equation.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each part does.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [
          "roots", "stem", "leaves", "flower", "fruit"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Which part of the plant is underground?", a: ["roots"] },
       { q: "Which part makes food?", a: ["leaves", "leaf"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Living Things",
      "Review characteristics and habitats.",
      `<p class='big-emoji'>🔁 🌱 🏠</p>
       <h3>Review</h3>
       <ul>
         <li>7 characteristics of living things</li>
         <li>Plants vs animals</li>
         <li>Habitats</li>
         <li>Food chains</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a habitat.</p>
       <p><b>Answer:</b> A <b>forest</b> is a habitat.</p>`,

      [{ heading: "Exercise 16.1 — Name 5 living things and their habitats.", items: []},
       { heading: "Exercise 16.2 — Answer.", items: [
          "Name a habitat.",
          "Name 3 characteristics of living things.",
          "Where does a fish live?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a habitat.", a: ["forest", "water", "desert", "any"] },
       { q: "Name a characteristic of living things.", a: ["movement", "growth", "any"] }]),

    D(2, "🔁", "Review Body",
      "Review body systems.",
      `<p class='big-emoji'>🔁 🧍</p>
       <h3>Review</h3>
       <ul>
         <li><b>Digestive</b> — food</li>
         <li><b>Circulatory</b> — blood</li>
         <li><b>Respiratory</b> — air</li>
         <li><b>Skeletal</b> — support</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which system carries blood?</p>
       <p><b>Answer:</b> The <b>circulatory</b> system.</p>`,

      [{ heading: "Exercise 17.1 — Match the system to its job.", items: [
          "digestive → food",
          "circulatory → blood",
          "respiratory → air",
          "skeletal → support"
        ]},
       { heading: "Exercise 17.2 — Answer.", items: [
          "Which system carries blood?",
          "Which system helps you breathe?",
          "How many bones in an adult?"
        ]}],

      `<p>All correct.</p>`,

      [{ q: "Which system carries blood?", a: ["circulatory"] },
       { q: "Which system helps you breathe?", a: ["respiratory"] }]),

    D(3, "🔁", "Review Plants",
      "Review plant parts.",
      `<p class='big-emoji'>🔁 🌱</p>
       <h3>Review</h3>
       <ul>
         <li>Roots, stem, leaves, flowers, fruits, seeds</li>
         <li>Photosynthesis</li>
         <li>Plant growth stages</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the root do?</p>
       <p><b>Answer:</b> The root <b>takes in water</b>.</p>`,

      [{ heading: "Exercise 18.1 — Answer.", items: [
          "What does the root do?",
          "What does the leaf do?",
          "What does the flower do?"
        ]},
       { heading: "Exercise 18.2 — Write the equation.", items: [
          "Photosynthesis equation"
        ]}],

      `<p>1. Takes in water. 2. Makes food. 3. Makes seeds.</p>`,

      [{ q: "What does the root do?", a: ["takes in water", "absorbs water"] },
       { q: "What does the leaf do?", a: ["makes food", "photosynthesis"] }]),

    D(4, "🔁", "Practice Test",
      "Do a practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Answer questions from Weeks 1–3.</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Is a stone living?</li>
         <li>Name 3 characteristics of living things.</li>
         <li>Where does a fish live?</li>
         <li>What does the heart do?</li>
         <li>How many bones in an adult?</li>
         <li>Which system helps you breathe?</li>
         <li>Which part of the plant takes in water?</li>
         <li>What gas do plants take in?</li>
         <li>What do flowers make?</li>
         <li>Name a habitat.</li>
       </ol>`,

      [{ heading: "Exercise 19.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "Which body system helps you breathe?", a: ["respiratory"] },
       { q: "What does the heart do?", a: ["pumps blood"] }]),

    D(5, "🎉", "Celebration",
      "Celebrate Month 1.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Month 1 of Grade 3 Science!</p>
       <h3>Show and Tell</h3>
       <p>Show your posters and drawings. Give yourself a big star! ⭐</p>`,

      [{ heading: "Exercise 20.1 — Show your posters.", items: [
          "Living Things Poster", "Body Poster", "Plant Poster"
        ]}],

      `<p>Give yourself a star! ⭐</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — MATTER
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Matter", days: [

    D(1, "🧊", "Solids",
      "Learn about solids.",
      `<p class='big-emoji'>🧊 🪨 🪵</p>
       <p><b>Solids</b> have a fixed shape and volume. They do not flow.</p>
       <h3>Examples of Solids</h3>
       <ul>
         <li>🪨 Stone</li>
         <li>🪵 Wood</li>
         <li>🧊 Ice</li>
         <li>🔨 Iron</li>
         <li>📚 Book</li>
       </ul>
       <h3>Properties of Solids</h3>
       <ul>
         <li>Fixed shape</li>
         <li>Fixed volume</li>
         <li>Cannot be poured</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a solid?</p>
       <p><b>Answer:</b> A solid has a <b>fixed shape and volume</b>.</p>`,

      [{ heading: "Exercise 21.1 — Say.", items: [
          "Name 3 solids.",
          "What is a solid?",
          "Can you pour a solid?"
        ]},
       { heading: "Exercise 21.2 — Draw.", items: [
          "Draw 3 solids you see at home."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a solid?", a: ["fixed shape", "any"] },
       { q: "Name a solid.", a: ["stone", "wood", "ice", "any"] },
       { q: "Can you pour a solid?", a: ["no"] }]),

    D(2, "💧", "Liquids",
      "Learn about liquids.",
      `<p class='big-emoji'>💧 🥛 🛢️</p>
       <p><b>Liquids</b> take the shape of their container. They flow and can be poured.</p>
       <h3>Examples of Liquids</h3>
       <ul>
         <li>💧 Water</li>
         <li>🥛 Milk</li>
         <li>🛢️ Oil</li>
         <li>🧃 Juice</li>
         <li>🍯 Honey</li>
       </ul>
       <h3>Properties of Liquids</h3>
       <ul>
         <li>No fixed shape (takes container's shape)</li>
         <li>Fixed volume</li>
         <li>Can be poured</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a liquid?</p>
       <p><b>Answer:</b> A liquid <b>takes the shape of its container</b>.</p>`,

      [{ heading: "Exercise 22.1 — Say.", items: [
          "Name 3 liquids.",
          "What is a liquid?",
          "Can you pour a liquid?"
        ]},
       { heading: "Exercise 22.2 — Draw.", items: [
          "Draw 3 liquids you see at home."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a liquid?", a: ["takes shape of container", "any"] },
       { q: "Name a liquid.", a: ["water", "milk", "oil", "any"] },
       { q: "Can you pour a liquid?", a: ["yes"] }]),

    D(3, "💨", "Gases",
      "Learn about gases.",
      `<p class='big-emoji'>💨 🌬️ 🎈</p>
       <p><b>Gases</b> fill the space around them. They have no fixed shape or volume.</p>
       <h3>Examples of Gases</h3>
       <ul>
         <li>💨 Air</li>
         <li>♨️ Steam</li>
         <li>🫁 Oxygen</li>
         <li>🎈 Helium (in balloons)</li>
         <li>🌫️ Carbon dioxide</li>
       </ul>
       <h3>Properties of Gases</h3>
       <ul>
         <li>No fixed shape</li>
         <li>No fixed volume</li>
         <li>Spread out to fill space</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a gas?</p>
       <p><b>Answer:</b> A gas <b>fills the space around it</b>.</p>`,

      [{ heading: "Exercise 23.1 — Say.", items: [
          "Name 3 gases.",
          "What is a gas?",
          "Can you see air?"
        ]},
       { heading: "Exercise 23.2 — Draw.", items: [
          "Draw 3 examples of gas."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a gas?", a: ["fills space", "any"] },
       { q: "Name a gas.", a: ["air", "steam", "oxygen", "any"] },
       { q: "Can you see air?", a: ["no"] }]),

    D(4, "🔄", "Changes of State",
      "Learn changes of state.",
      `<p class='big-emoji'>🔄 🧊 💧 ♨️</p>
       <p>Matter can <b>change state</b> when heated or cooled.</p>
       <h3>Changes of State</h3>
       <ul>
         <li>🧊 → 💧 <b>Melting</b> — solid to liquid (ice melts)</li>
         <li>💧 → ♨️ <b>Evaporation</b> — liquid to gas (water boils)</li>
         <li>♨️ → 💧 <b>Condensation</b> — gas to liquid (steam cools)</li>
         <li>💧 → 🧊 <b>Freezing</b> — liquid to solid (water freezes)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is melting?</p>
       <p><b>Answer:</b> Melting is when a <b>solid changes to a liquid</b>.</p>`,

      [{ heading: "Exercise 24.1 — Say.", items: [
          "What is melting?",
          "What is evaporation?",
          "What is condensation?",
          "What is freezing?"
        ]},
       { heading: "Exercise 24.2 — Answer.", items: [
          "Ice → Water is?",
          "Water → Steam is?",
          "Steam → Water is?",
          "Water → Ice is?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Ice → Water is?", a: ["melting"] },
       { q: "Water → Steam is?", a: ["evaporation"] },
       { q: "Steam → Water is?", a: ["condensation"] }]),

    D(5, "🎨", "Matter Poster",
      "Draw solids, liquids, gases.",
      `<p class='big-emoji'>🎨 🧊 💧 💨</p>
       <p>Make a <b>"States of Matter"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"States of Matter"</b></li>
         <li>Draw 3 solids, 3 liquids, 3 gases.</li>
         <li>Label each.</li>
         <li>Show one change of state.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one change of state.</p>`,

      [{ heading: "Exercise 25.1 — Draw.", items: [
          "3 solids", "3 liquids", "3 gases"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a solid.", a: ["stone", "any"] },
       { q: "Name a liquid.", a: ["water", "any"] },
       { q: "Name a gas.", a: ["air", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — FORCES & ENERGY
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Forces & Energy", days: [

    D(1, "👉", "Push & Pull",
      "Learn about push and pull.",
      `<p class='big-emoji'>👉 👈</p>
       <p>A <b>force</b> is a push or a pull. Forces make things move, stop, or change direction.</p>
       <h3>Push</h3>
       <p>A <b>push</b> moves things <b>away</b> from you.</p>
       <ul>
         <li>Opening a door</li>
         <li>Kicking a ball</li>
         <li>Pushing a wheelbarrow</li>
       </ul>
       <h3>Pull</h3>
       <p>A <b>pull</b> moves things <b>closer</b> to you.</p>
       <ul>
         <li>Pulling a bucket from a well</li>
         <li>Dragging a bag</li>
         <li>Pulling a door open</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is opening a door a push or a pull?</p>
       <p><b>Answer:</b> Opening a door is a <b>push</b> (or pull, depending on the door).</p>`,

      [{ heading: "Exercise 26.1 — Say.", items: [
          "Give an example of a push.",
          "Give an example of a pull.",
          "What is a force?"
        ]},
       { heading: "Exercise 26.2 — Classify.", items: [
          "kicking a ball → push or pull?",
          "pulling a bucket → push or pull?",
          "opening a door → push or pull?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Opening a door is a ___?", a: ["push", "pull"] },
       { q: "Pulling a bucket is a ___?", a: ["pull"] },
       { q: "What is a force?", a: ["push or pull", "any"] }]),

    D(2, "⬇️", "Gravity",
      "Learn about gravity.",
      `<p class='big-emoji'>⬇️ 🍎 🌍</p>
       <p><b>Gravity</b> is a force that pulls things <b>down</b> towards the Earth.</p>
       <h3>Examples of Gravity</h3>
       <ul>
         <li>🍎 An apple falls from a tree</li>
         <li>⚽ A ball thrown up comes down</li>
         <li>💧 Rain falls from clouds</li>
         <li>🍃 Leaves fall to the ground</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens when you drop a ball?</p>
       <p><b>Answer:</b> It <b>falls down</b> because of gravity.</p>`,

      [{ heading: "Exercise 27.1 — Say.", items: [
          "What happens when you drop a ball?",
          "What is gravity?",
          "Name 3 things gravity pulls down."
        ]},
       { heading: "Exercise 27.2 — Draw.", items: [
          "Draw something falling because of gravity."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does gravity do?", a: ["pulls down", "any"] },
       { q: "What is gravity?", a: ["force pulling down", "any"] },
       { q: "What falls because of gravity?", a: ["rain", "apple", "any"] }]),

    D(3, "🛞", "Friction",
      "Learn about friction.",
      `<p class='big-emoji'>🛞 🔥</p>
       <p><b>Friction</b> is a force that <b>slows down</b> moving things when they rub against each other.</p>
       <h3>Examples of Friction</h3>
       <ul>
         <li>🚗 Brakes on a car</li>
         <li>👏 Rubbing your hands together (they get warm)</li>
         <li>🛝 Sliding down a slide (slows you down)</li>
         <li>⚽ A ball rolling on grass slows down</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is friction?</p>
       <p><b>Answer:</b> Friction is a force that <b>slows down</b> moving things.</p>`,

      [{ heading: "Exercise 28.1 — Say.", items: [
          "What is friction?",
          "Give an example of friction.",
          "What happens when you rub your hands together?"
        ]},
       { heading: "Exercise 28.2 — Answer.", items: [
          "Why do car brakes work?",
          "Why does a ball slow down on grass?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does friction do?", a: ["slows things", "any"] },
       { q: "Give an example of friction.", a: ["braking", "rubbing hands", "any"] }]),

    D(4, "⚡", "Energy",
      "Learn about energy.",
      `<p class='big-emoji'>⚡ ☀️ 🔋</p>
       <p><b>Energy</b> makes things work. Without energy, nothing can move or change.</p>
       <h3>Sources of Energy</h3>
       <ul>
         <li>☀️ <b>Sun</b> — light and heat</li>
         <li>🍎 <b>Food</b> — gives us energy to move</li>
         <li>🔋 <b>Batteries</b> — power toys and torches</li>
         <li>💨 <b>Wind</b> — turns windmills</li>
         <li>💧 <b>Water</b> — powers dams</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does energy come from?</p>
       <p><b>Answer:</b> Energy comes from the <b>sun, food, and batteries</b>.</p>`,

      [{ heading: "Exercise 29.1 — Say.", items: [
          "What is energy?",
          "Where does energy come from?",
          "Name 3 sources of energy."
        ]},
       { heading: "Exercise 29.2 — Draw.", items: [
          "Draw 3 sources of energy."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What does energy do?", a: ["makes things work", "any"] },
       { q: "Where does energy come from?", a: ["sun", "food", "any"] },
       { q: "Name a source of energy.", a: ["sun", "battery", "any"] }]),

    D(5, "🎨", "Forces Poster",
      "Draw 4 forces.",
      `<p class='big-emoji'>🎨 👉 ⬇️ 🛞 ⚡</p>
       <p>Make a <b>"Forces & Energy"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Forces & Energy"</b></li>
         <li>Draw push, pull, gravity, friction.</li>
         <li>Label each force.</li>
         <li>Write one sentence about each.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one force.</p>`,

      [{ heading: "Exercise 30.1 — Draw.", items: [
          "push", "pull", "gravity", "friction"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a force.", a: ["push", "pull", "gravity", "friction", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — LIGHT & SOUND
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Light & Sound", days: [

    D(1, "☀️", "Sources of Light",
      "Identify sources of light.",
      `<p class='big-emoji'>☀️ 🔦 🕯️</p>
       <p><b>Light</b> helps us see. Some things make their own light; others reflect light.</p>
       <h3>Natural Light Sources</h3>
       <ul>
         <li>☀️ The sun</li>
         <li>⭐ Stars</li>
         <li>🌙 The moon (reflects sunlight)</li>
       </ul>
       <h3>Artificial Light Sources</h3>
       <ul>
         <li>🔦 Torch</li>
         <li>💡 Lamp</li>
         <li>🕯️ Candle</li>
         <li>📺 Screen</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a source of light.</p>
       <p><b>Answer:</b> The <b>sun</b> is a source of light.</p>`,

      [{ heading: "Exercise 31.1 — Say.", items: [
          "Name 4 sources of light.",
          "Which is a natural source?",
          "Which is an artificial source?"
        ]},
       { heading: "Exercise 31.2 — Classify.", items: [
          "sun → natural or artificial?",
          "torch → natural or artificial?",
          "candle → natural or artificial?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a source of light.", a: ["sun", "lamp", "torch", "any"] },
       { q: "Is the sun natural or artificial?", a: ["natural"] }]),

    D(2, "🪞", "Reflection",
      "Learn about reflection.",
      `<p class='big-emoji'>🪞 💧</p>
       <p><b>Reflection</b> happens when light <b>bounces off</b> a shiny surface.</p>
       <h3>Examples of Reflection</h3>
       <ul>
         <li>🪞 Mirror</li>
         <li>💧 Still water</li>
         <li>🥄 Shiny spoon</li>
         <li>📱 Phone screen</li>
         <li>🪟 Glass window</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is reflection?</p>
       <p><b>Answer:</b> Reflection is when light <b>bounces off</b> a shiny surface.</p>`,

      [{ heading: "Exercise 32.1 — Say.", items: [
          "What is reflection?",
          "Name 2 shiny things.",
          "Where do you see your reflection?"
        ]},
       { heading: "Exercise 32.2 — Draw.", items: [
          "Draw 2 things that reflect light."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is reflection?", a: ["light bouncing", "any"] },
       { q: "Name a shiny thing.", a: ["mirror", "water", "any"] }]),

    D(3, "🔔", "Sound",
      "Learn about sound.",
      `<p class='big-emoji'>🔔 🥁 🎤</p>
       <p><b>Sound</b> is produced by <b>vibration</b>. When something vibrates, it makes sound waves.</p>
       <h3>Sources of Sound</h3>
       <ul>
         <li>🔔 Bell</li>
         <li>🥁 Drum</li>
         <li>🎤 Voice</li>
         <li>🎸 Guitar</li>
         <li>📢 Loudspeaker</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is sound produced?</p>
       <p><b>Answer:</b> Sound is produced by <b>vibration</b>.</p>`,

      [{ heading: "Exercise 33.1 — Say.", items: [
          "How is sound produced?",
          "Name 3 sounds.",
          "What vibrates when you speak?"
        ]},
       { heading: "Exercise 33.2 — Draw.", items: [
          "Draw 3 sources of sound."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is sound produced?", a: ["vibration", "any"] },
       { q: "Name a sound.", a: ["bell", "drum", "voice", "any"] }]),

    D(4, "🥁", "Vibration",
      "Learn about vibration.",
      `<p class='big-emoji'>🥁 📳</p>
       <p><b>Vibration</b> is a fast back-and-forth movement. It makes sound.</p>
       <h3>Try It!</h3>
       <ol>
         <li>Hit a drum. Feel the vibration with your hand.</li>
         <li>Say "ah" and touch your throat. Feel it vibrate.</li>
         <li>Pluck a rubber band. See it vibrate.</li>
         <li>Put your hand on a speaker. Feel it vibrate.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you feel when you hit a drum?</p>
       <p><b>Answer:</b> You feel <b>vibration</b>.</p>`,

      [{ heading: "Exercise 34.1 — Try it.", items: [
          "Hit a drum. Feel the vibration.",
          "Say 'ah' and touch your throat.",
          "Pluck a rubber band.",
          "Feel a speaker vibrate."
        ]},
       { heading: "Exercise 34.2 — Answer.", items: [
          "What do you feel when you hit a drum?",
          "What vibrates when you speak?",
          "What is vibration?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What do you feel when you hit a drum?", a: ["vibration"] },
       { q: "What vibrates when you speak?", a: ["throat", "vocal cords", "any"] }]),

    D(5, "🎨", "Light & Sound Poster",
      "Draw sources of light and sound.",
      `<p class='big-emoji'>🎨 ☀️ 🔔</p>
       <p>Make a <b>"Light & Sound"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Light & Sound"</b></li>
         <li>Draw 3 light sources and 3 sound sources.</li>
         <li>Label each.</li>
         <li>Write one sentence about each.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say how light and sound travel.</p>`,

      [{ heading: "Exercise 35.1 — Draw.", items: [
          "3 light sources", "3 sound sources"
        ]}],

      `<p>⭐🎨</p>`,

      [{ q: "Name a light source.", a: ["sun", "lamp", "any"] },
       { q: "Name a sound source.", a: ["drum", "bell", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW & TEST
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Matter",
      "Review solids, liquids, gases.",
      `<p class='big-emoji'>🔁 🧊 💧 💨</p>
       <h3>Review</h3>
       <ul>
         <li>Solids — fixed shape and volume</li>
         <li>Liquids — take shape of container</li>
         <li>Gases — fill space</li>
         <li>Changes of state</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is ice a solid?</p>
       <p><b>Answer:</b> Yes, ice is a <b>solid</b>.</p>`,

      [{ heading: "Exercise 36.1 — Classify.", items: [
          "ice", "water", "steam", "stone", "air"
        ]},
       { heading: "Exercise 36.2 — Answer.", items: [
          "Is ice a solid?",
          "Is water a liquid?",
          "Is steam a gas?"
        ]}],

      `<p>1. Solid 2. Liquid 3. Gas 4. Solid 5. Gas</p>`,

      [{ q: "Is ice a solid?", a: ["yes"] },
       { q: "Is water a liquid?", a: ["yes"] },
       { q: "Is steam a gas?", a: ["yes"] }]),

    D(2, "🔁", "Review Forces",
      "Review forces.",
      `<p class='big-emoji'>🔁 👉 ⬇️ 🛞</p>
       <h3>Review</h3>
       <ul>
         <li>Push and pull</li>
         <li>Gravity</li>
         <li>Friction</li>
         <li>Energy</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which force makes a ball fall?</p>
       <p><b>Answer:</b> <b>Gravity</b>.</p>`,

      [{ heading: "Exercise 37.1 — Match.", items: [
          "ball falling → ___",
          "car braking → ___",
          "opening a door → ___"
        ]},
       { heading: "Exercise 37.2 — Answer.", items: [
          "Which force makes a ball fall?",
          "What does friction do?",
          "What is a push?"
        ]}],

      `<p>Gravity; Friction; Push</p>`,

      [{ q: "Which force makes a ball fall?", a: ["gravity"] },
       { q: "What does friction do?", a: ["slows things", "any"] }]),

    D(3, "🔁", "Review Light & Sound",
      "Review light and sound.",
      `<p class='big-emoji'>🔁 ☀️ 🔔</p>
       <h3>Review</h3>
       <ul>
         <li>Sources of light</li>
         <li>Reflection</li>
         <li>Sound and vibration</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is sound produced?</p>
       <p><b>Answer:</b> Sound is produced by <b>vibration</b>.</p>`,

      [{ heading: "Exercise 38.1 — Say.", items: [
          "Name 3 light sources.",
          "Name 3 sound sources.",
          "How is sound produced?"
        ]},
       { heading: "Exercise 38.2 — Answer.", items: [
          "What is reflection?",
          "Name a natural light source."
        ]}],

      `<p>Any 3.</p>`,

      [{ q: "How is sound produced?", a: ["vibration"] },
       { q: "What is reflection?", a: ["light bouncing", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Answer 10 questions from Weeks 5–7.</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a solid?</li>
         <li>What is a liquid?</li>
         <li>What is a gas?</li>
         <li>What is melting?</li>
         <li>What is evaporation?</li>
         <li>What is gravity?</li>
         <li>What is friction?</li>
         <li>How is sound produced?</li>
         <li>Name a source of light.</li>
         <li>Name a source of energy.</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a gas?", a: ["fills space", "any"] },
       { q: "What is gravity?", a: ["pulls down", "any"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Matter (10 marks)</li>
         <li>Part B — Forces (10 marks)</li>
         <li>Part C — Light & Sound (10 marks)</li>
         <li>Part D — Practical (10 marks)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Matter (10)",
          "Part B — Forces (10)",
          "Part C — Light & Sound (10)",
          "Part D — Practical (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — WEATHER
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Weather", days: [

    D(1, "🌤️", "Weather vs Climate",
      "Understand the difference between weather and climate.",
      `<p class='big-emoji'>🌤️ 🌦️ 🌍</p>
       <p><b>Weather</b> is what the sky and air are like <b>today</b>. It changes daily.</p>
       <p><b>Climate</b> is the usual weather of a place over <b>many years</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>🌦️ Today it is raining — this is weather.</li>
         <li>☀️ Ghana is hot and wet — this is climate.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is "It is raining today" weather or climate?</p>
       <p><b>Answer:</b> It is <b>weather</b> because it describes today.</p>`,

      [{ heading: "Exercise 40.1 — Say weather or climate.", items: [
          "It is sunny today.",
          "Ghana is hot.",
          "It is windy this morning.",
          "The desert is dry.",
          "It will rain tomorrow."
        ]},
       { heading: "Exercise 40.2 — Answer.", items: [
          "What is weather?",
          "What is climate?",
          "Which one changes daily?"
        ]}],

      `<p><b>40.1:</b> 1. Weather 2. Climate 3. Weather 4. Climate 5. Weather</p>`,

      [{ q: "What is weather?", a: ["today's conditions", "any"] },
       { q: "What is climate?", a: ["usual weather over years", "any"] },
       { q: "Which changes daily?", a: ["weather"] }]),

    D(2, "🌡️", "Elements of Weather",
      "Learn the elements of weather.",
      `<p class='big-emoji'>🌡️ 💧 💨 ☀️</p>
       <p>The <b>elements of weather</b> are:</p>
       <ul>
         <li>🌡️ <b>Temperature</b> — how hot or cold</li>
         <li>💧 <b>Rainfall</b> — how much rain</li>
         <li>💨 <b>Wind</b> — moving air</li>
         <li>☁️ <b>Cloud cover</b> — how cloudy</li>
         <li>💦 <b>Humidity</b> — water in the air</li>
         <li>🔆 <b>Sunshine</b> — bright light from the sun</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does temperature measure?</p>
       <p><b>Answer:</b> Temperature measures how <b>hot or cold</b> it is.</p>`,

      [{ heading: "Exercise 41.1 — Name the element.", items: [
          "How hot it is → ___",
          "How much rain falls → ___",
          "Moving air → ___",
          "Water in the air → ___",
          "Bright light from the sun → ___"
        ]},
       { heading: "Exercise 41.2 — Answer.", items: [
          "What does temperature measure?",
          "Name 3 elements of weather."
        ]}],

      `<p><b>41.1:</b> 1. Temperature 2. Rainfall 3. Wind 4. Humidity 5. Sunshine</p>`,

      [{ q: "What does temperature measure?", a: ["hot or cold", "any"] },
       { q: "Name an element of weather.", a: ["temperature", "rainfall", "wind", "any"] }]),

    D(3, "🌧️", "Weather Instruments",
      "Learn about weather instruments.",
      `<p class='big-emoji'>🌡️ 🌧️ 🌬️</p>
       <h3>Weather Instruments</h3>
       <ul>
         <li>🌡️ <b>Thermometer</b> — measures temperature</li>
         <li>🌧️ <b>Rain gauge</b> — measures rainfall</li>
         <li>🌬️ <b>Anemometer</b> — measures wind speed</li>
         <li>🧭 <b>Wind vane</b> — shows wind direction</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What instrument measures temperature?</p>
       <p><b>Answer:</b> A <b>thermometer</b>.</p>`,

      [{ heading: "Exercise 42.1 — Match the instrument to its use.", items: [
          "thermometer → temperature",
          "rain gauge → rainfall",
          "anemometer → wind speed",
          "wind vane → wind direction"
        ]},
       { heading: "Exercise 42.2 — Answer.", items: [
          "What measures temperature?",
          "What measures rainfall?",
          "What measures wind speed?"
        ]}],

      `<p>All correct matches.</p>`,

      [{ q: "What measures temperature?", a: ["thermometer"] },
       { q: "What measures rainfall?", a: ["rain gauge"] },
       { q: "What measures wind speed?", a: ["anemometer"] }]),

    D(4, "🌦️", "Ghana Seasons",
      "Learn about the seasons in Ghana.",
      `<p class='big-emoji'>🌦️ ☀️ 🌿</p>
       <h3>Ghana's Seasons</h3>
       <ul>
         <li>🌧️ <b>Rainy season</b> — from April to October</li>
         <li>☀️ <b>Dry season</b> — from November to March</li>
         <li>💨 <b>Harmattan</b> — dry dusty wind from December to February</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the harmattan?</p>
       <p><b>Answer:</b> The harmattan is a <b>dry, dusty wind</b> that blows in Ghana.</p>`,

      [{ heading: "Exercise 43.1 — Answer.", items: [
          "What are the two seasons in Ghana?",
          "When is the rainy season?",
          "What is the harmattan?",
          "What do you wear in the rainy season?"
        ]},
       { heading: "Exercise 43.2 — Draw.", items: [
          "Draw a rainy day and a sunny day."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What are Ghana's two seasons?", a: ["rainy and dry", "wet and dry"] },
       { q: "What is the harmattan?", a: ["dry dusty wind", "any"] }]),

    D(5, "🎨", "Weather Chart",
      "Make a weather chart.",
      `<p class='big-emoji'>🎨 🌦️ 📊</p>
       <p>Make a <b>weather chart</b> for 7 days.</p>
       <h3>How to Do It</h3>
       <ol>
         <li>Draw a table with 7 rows (one for each day).</li>
         <li>Write the day and the weather.</li>
         <li>Record the temperature if you can.</li>
         <li>Draw a small picture for each day.</li>
       </ol>
       <h3>Show and Tell</h3>
       <p>Show your chart. Say which day was the hottest.</p>`,

      [{ heading: "Exercise 44.1 — Draw a weather chart.", items: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ]}],

      `<p>⭐ for a completed chart.</p>`,

      [{ q: "Which day was the hottest?", a: ["any"] },
       { q: "Which day was the wettest?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — WATER
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Water", days: [

    D(1, "💧", "Water Cycle",
      "Learn the water cycle.",
      `<p class='big-emoji'>💧 ☀️ ☁️ 🌧️</p>
       <p>The <b>water cycle</b> is how water moves around the Earth.</p>
       <h3>Stages of the Water Cycle</h3>
       <ol>
         <li>☀️ <b>Evaporation</b> — sun heats water, it rises as vapour</li>
         <li>☁️ <b>Condensation</b> — vapour cools and forms clouds</li>
         <li>🌧️ <b>Precipitation</b> — rain falls from clouds</li>
         <li>💧 <b>Collection</b> — water collects in rivers, lakes, oceans</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens during evaporation?</p>
       <p><b>Answer:</b> The sun heats water and it <b>rises as vapour</b>.</p>`,

      [{ heading: "Exercise 45.1 — Order the stages.", items: [
          "evaporation", "condensation", "precipitation", "collection"
        ]},
       { heading: "Exercise 45.2 — Answer.", items: [
          "What happens during evaporation?",
          "What happens during condensation?",
          "What happens during precipitation?"
        ]}],

      `<p>Correct order: evaporation → condensation → precipitation → collection.</p>`,

      [{ q: "What happens during evaporation?", a: ["water rises as vapour", "any"] },
       { q: "What happens during condensation?", a: ["clouds form", "any"] },
       { q: "What happens during precipitation?", a: ["rain falls", "any"] }]),

    D(2, "💧", "Water Conservation",
      "Learn to conserve water.",
      `<p class='big-emoji'>💧 🚱 ✅</p>
       <p><b>Conservation</b> means using water wisely so we don't waste it.</p>
       <h3>Ways to Save Water</h3>
       <ul>
         <li>🚿 Take shorter showers</li>
         <li>🚰 Turn off taps when not in use</li>
         <li>💧 Fix leaking taps</li>
         <li>🌧️ Collect rainwater</li>
         <li>🧼 Use only the water you need</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 2 ways to save water.</p>
       <p><b>Answer:</b> Turn off taps and fix leaking taps.</p>`,

      [{ heading: "Exercise 46.1 — Say.", items: [
          "What is water conservation?",
          "Name 3 ways to save water.",
          "Why should we save water?"
        ]},
       { heading: "Exercise 46.2 — Draw.", items: [
          "Draw 2 ways to save water."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is water conservation?", a: ["using water wisely", "any"] },
       { q: "Name a way to save water.", a: ["turn off taps", "fix leaks", "any"] }]),

    D(3, "💧", "Water Purification",
      "Learn how water is purified.",
      `<p class='big-emoji'>💧 🧪 ✅</p>
       <p><b>Purification</b> means cleaning water so it is safe to drink.</p>
       <h3>Ways to Purify Water</h3>
       <ul>
         <li>🔥 <b>Boiling</b> — kills germs</li>
         <li>🧪 <b>Filtering</b> — removes dirt</li>
         <li>💊 <b>Chlorination</b> — adds chlorine to kill germs</li>
         <li>☀️ <b>Solar disinfection</b> — sun kills germs</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we purify water?</p>
       <p><b>Answer:</b> We purify water to <b>remove germs</b> and make it safe to drink.</p>`,

      [{ heading: "Exercise 47.1 — Say.", items: [
          "What is purification?",
          "Name 3 ways to purify water.",
          "Why do we purify water?"
        ]},
       { heading: "Exercise 47.2 — Draw.", items: [
          "Draw one way to purify water."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is purification?", a: ["cleaning water", "any"] },
       { q: "Name a way to purify water.", a: ["boiling", "filtering", "any"] }]),

    D(4, "💧", "Uses of Water",
      "Learn about uses of water.",
      `<p class='big-emoji'>💧 🍲 🧼 🚿</p>
       <h3>Uses of Water</h3>
       <ul>
         <li>🍲 Drinking and cooking</li>
         <li>🧼 Washing and bathing</li>
         <li>🚿 Cleaning</li>
         <li>🌾 Farming and watering plants</li>
         <li>🏭 Industry and factories</li>
         <li>🐟 Habitats for fish</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 uses of water.</p>
       <p><b>Answer:</b> Drinking, washing, and cooking.</p>`,

      [{ heading: "Exercise 48.1 — Say.", items: [
          "Name 5 uses of water.",
          "Why is water important for farming?",
          "Why is water important for health?"
        ]},
       { heading: "Exercise 48.2 — Draw.", items: [
          "Draw 3 uses of water."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name 3 uses of water.", a: ["drinking", "washing", "cooking", "any"] },
       { q: "Why is water important?", a: ["for life", "any"] }]),

    D(5, "🎨", "Water Poster",
      "Make a water poster.",
      `<p class='big-emoji'>🎨 💧</p>
       <p>Make a <b>"Water"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Water"</b></li>
         <li>Draw the water cycle.</li>
         <li>Draw 3 uses of water.</li>
         <li>Write 2 ways to save water.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain the water cycle.</p>`,

      [{ heading: "Exercise 49.1 — Draw.", items: [
          "Water cycle", "3 uses of water", "2 ways to save water"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a stage of the water cycle.", a: ["evaporation", "condensation", "any"] },
       { q: "Name a way to save water.", a: ["turn off taps", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — SOLAR SYSTEM
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Solar System", days: [

    D(1, "☀️", "The Sun",
      "Learn about the sun.",
      `<p class='big-emoji'>☀️ 🌟 🔥</p>
       <p>The <b>sun</b> is a star at the centre of our solar system. It gives us light and heat.</p>
       <h3>Key Facts</h3>
       <ul>
         <li>The sun is a <b>star</b>.</li>
         <li>It is very hot — about 5,500°C on the surface.</li>
         <li>It is much bigger than the Earth.</li>
         <li>It gives us light and heat energy.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the sun?</p>
       <p><b>Answer:</b> The sun is a <b>star</b> that gives us light and heat.</p>`,

      [{ heading: "Exercise 50.1 — Say.", items: [
          "What is the sun?",
          "What does the sun give us?",
          "Is the sun hot or cold?"
        ]},
       { heading: "Exercise 50.2 — Draw.", items: [
          "Draw the sun with rays."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is the sun?", a: ["a star", "star"] },
       { q: "What does the sun give us?", a: ["light and heat", "any"] }]),

    D(2, "🪐", "Planets",
      "Learn about the planets.",
      `<p class='big-emoji'>🪐 🌍 🔴</p>
       <p>There are <b>8 planets</b> in our solar system. They orbit the sun.</p>
       <h3>The Planets (in order)</h3>
       <ol>
         <li>☿ <b>Mercury</b></li>
         <li>♀ <b>Venus</b></li>
         <li>🌍 <b>Earth</b> — our home</li>
         <li>♂ <b>Mars</b></li>
         <li>♃ <b>Jupiter</b> — the largest</li>
         <li>♄ <b>Saturn</b> — has rings</li>
         <li>♅ <b>Uranus</b></li>
         <li>♆ <b>Neptune</b></li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which planet do we live on?</p>
       <p><b>Answer:</b> We live on <b>Earth</b>.</p>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "How many planets are there?",
          "Which planet do we live on?",
          "Which planet is the largest?",
          "Which planet has rings?"
        ]},
       { heading: "Exercise 51.2 — Draw.", items: [
          "Draw the sun and 4 planets."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] },
       { q: "Which planet do we live on?", a: ["earth"] },
       { q: "Which planet has rings?", a: ["saturn"] }]),

    D(3, "🌙", "The Moon",
      "Learn about the moon.",
      `<p class='big-emoji'>🌙 🌕 🌑</p>
       <p>The <b>moon</b> is Earth's natural satellite. It orbits the Earth.</p>
       <h3>Key Facts</h3>
       <ul>
         <li>The moon does not make its own light — it reflects sunlight.</li>
         <li>The moon changes shape in the sky (phases).</li>
         <li>There is no air or water on the moon.</li>
         <li>Astronauts have visited the moon.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why does the moon shine?</p>
       <p><b>Answer:</b> The moon shines because it <b>reflects sunlight</b>.</p>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What is the moon?",
          "Why does the moon shine?",
          "Does the moon make its own light?"
        ]},
       { heading: "Exercise 52.2 — Draw.", items: [
          "Draw the moon in 3 different shapes (phases)."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why does the moon shine?", a: ["reflects sunlight", "any"] },
       { q: "Does the moon make its own light?", a: ["no"] }]),

    D(4, "🌗", "Day & Night",
      "Learn why we have day and night.",
      `<p class='big-emoji'>🌗 ☀️ 🌍</p>
       <p>The Earth <b>rotates</b> (spins) on its axis. This causes day and night.</p>
       <h3>How It Works</h3>
       <ul>
         <li>☀️ When your side of Earth faces the sun, it is <b>day</b>.</li>
         <li>🌙 When your side faces away, it is <b>night</b>.</li>
         <li>One full rotation takes <b>24 hours</b>.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What causes day and night?</p>
       <p><b>Answer:</b> The Earth's <b>rotation</b> causes day and night.</p>`,

      [{ heading: "Exercise 53.1 — Say.", items: [
          "What causes day and night?",
          "How long does one rotation take?",
          "What is rotation?"
        ]},
       { heading: "Exercise 53.2 — Draw.", items: [
          "Draw the Earth, sun, and show day and night."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What causes day and night?", a: ["rotation", "earth spinning"] },
       { q: "How long does one rotation take?", a: ["24 hours", "24"] }]),

    D(5, "🎨", "Space Poster",
      "Make a space poster.",
      `<p class='big-emoji'>🎨 🪐 🌙 ☀️</p>
       <p>Make a <b>"Solar System"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Our Solar System"</b></li>
         <li>Draw the sun and 8 planets.</li>
         <li>Label each planet.</li>
         <li>Draw the moon orbiting Earth.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say the planets in order.</p>`,

      [{ heading: "Exercise 54.1 — Draw.", items: [
          "Sun", "8 planets", "Moon"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] },
       { q: "Which planet do we live on?", a: ["earth"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Weather",
      "Review weather and climate.",
      `<p class='big-emoji'>🔁 🌤️</p>
       <h3>Review</h3>
       <ul>
         <li>Weather vs climate</li>
         <li>Elements of weather</li>
         <li>Weather instruments</li>
         <li>Ghana's seasons</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What measures temperature?</p>
       <p><b>Answer:</b> A <b>thermometer</b>.</p>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is weather?",
          "What is climate?",
          "What measures temperature?",
          "What measures rainfall?",
          "What is the harmattan?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What measures temperature?", a: ["thermometer"] },
       { q: "What is the harmattan?", a: ["dry dusty wind", "any"] }]),

    D(2, "🔁", "Review Water",
      "Review water.",
      `<p class='big-emoji'>🔁 💧</p>
       <h3>Review</h3>
       <ul>
         <li>Water cycle</li>
         <li>Conservation</li>
         <li>Purification</li>
         <li>Uses of water</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a stage of the water cycle.</p>
       <p><b>Answer:</b> <b>Evaporation</b>.</p>`,

      [{ heading: "Exercise 56.1 — Answer.", items: [
          "Name 3 stages of the water cycle.",
          "Name 2 ways to save water.",
          "Name 2 ways to purify water.",
          "Name 3 uses of water."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a stage of the water cycle.", a: ["evaporation", "condensation", "any"] },
       { q: "Name a way to save water.", a: ["turn off taps", "any"] }]),

    D(3, "🔁", "Review Space",
      "Review the solar system.",
      `<p class='big-emoji'>🔁 🪐</p>
       <h3>Review</h3>
       <ul>
         <li>The sun</li>
         <li>Planets</li>
         <li>The moon</li>
         <li>Day and night</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How many planets?</p>
       <p><b>Answer:</b> <b>8</b> planets.</p>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "How many planets?",
          "Which planet do we live on?",
          "What causes day and night?",
          "Why does the moon shine?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How many planets?", a: ["8", "eight"] },
       { q: "What causes day and night?", a: ["rotation", "earth spinning"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Answer 10 questions from Weeks 9–11.</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is weather?</li>
         <li>What is climate?</li>
         <li>What measures temperature?</li>
         <li>Name 3 stages of the water cycle.</li>
         <li>Name 2 ways to save water.</li>
         <li>How many planets?</li>
         <li>Which planet do we live on?</li>
         <li>What causes day and night?</li>
         <li>Why does the moon shine?</li>
         <li>What is the harmattan?</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is weather?", a: ["today's conditions", "any"] },
       { q: "How many planets?", a: ["8", "eight"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Weather (10 marks)</li>
         <li>Part B — Water (10 marks)</li>
         <li>Part C — Solar System (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Weather (10)",
          "Part B — Water (10)",
          "Part C — Solar System (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — ECOSYSTEMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Ecosystems", days: [

    D(1, "🌳", "What is an Ecosystem?",
      "Learn what an ecosystem is.",
      `<p class='big-emoji'>🌳 🐾 💧</p>
       <p>An <b>ecosystem</b> is a community of living things and non-living things that work together.</p>
       <h3>Examples of Ecosystems</h3>
       <ul>
         <li>🌳 <b>Forest</b> — trees, animals, soil</li>
         <li>🌊 <b>Pond</b> — fish, plants, water</li>
         <li>🏜️ <b>Desert</b> — cactus, camels, sand</li>
         <li>🌾 <b>Farm</b> — crops, cows, soil</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an ecosystem?</p>
       <p><b>Answer:</b> An ecosystem is a <b>community of living and non-living things</b>.</p>`,

      [{ heading: "Exercise 59.1 — Say.", items: [
          "What is an ecosystem?",
          "Name 3 ecosystems.",
          "Name 3 living things in a forest."
        ]},
       { heading: "Exercise 59.2 — Draw.", items: [
          "Draw an ecosystem with living and non-living things."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an ecosystem?", a: ["community of living and non-living things", "any"] },
       { q: "Name an ecosystem.", a: ["forest", "pond", "any"] }]),

    D(2, "🌿", "Biotic & Abiotic",
      "Learn about biotic and abiotic factors.",
      `<p class='big-emoji'>🌿 🪨</p>
       <p><b>Biotic</b> factors are <b>living</b> things in an ecosystem.</p>
       <p><b>Abiotic</b> factors are <b>non-living</b> things in an ecosystem.</p>
       <h3>Examples</h3>
       <ul>
         <li>🌿 Biotic: plants, animals, bacteria</li>
         <li>🪨 Abiotic: sunlight, water, soil, air, rocks</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a tree biotic or abiotic?</p>
       <p><b>Answer:</b> A tree is <b>biotic</b> because it is living.</p>`,

      [{ heading: "Exercise 60.1 — Classify as biotic (B) or abiotic (A).", items: [
          "tree", "water", "dog", "soil", "grass"
        ]},
       { heading: "Exercise 60.2 — Answer.", items: [
          "What is biotic?",
          "What is abiotic?",
          "Is a stone biotic or abiotic?"
        ]}],

      `<p><b>60.1:</b> 1. B 2. A 3. B 4. A 5. B</p>`,

      [{ q: "Is a tree biotic or abiotic?", a: ["biotic"] },
       { q: "Is water biotic or abiotic?", a: ["abiotic"] }]),

    D(3, "🏠", "Habitats in Ecosystems",
      "Learn about habitats within ecosystems.",
      `<p class='big-emoji'>🏠 🌳 🌊</p>
       <p>Each ecosystem has many <b>habitats</b> — small places where living things live.</p>
       <h3>Forest Habitats</h3>
       <ul>
         <li>🌳 Treetops — birds, monkeys</li>
         <li>🌿 Ground — rabbits, insects</li>
         <li>🪵 Dead logs — beetles, fungi</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where do birds live in a forest?</p>
       <p><b>Answer:</b> Birds live in <b>treetops</b>.</p>`,

      [{ heading: "Exercise 61.1 — Say.", items: [
          "Name 3 forest habitats.",
          "Where do fish live?",
          "Where do monkeys live?"
        ]},
       { heading: "Exercise 61.2 — Draw.", items: [
          "Draw a tree with 3 animals that live in it."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Where do fish live?", a: ["water", "pond", "any"] },
       { q: "Where do monkeys live?", a: ["trees", "forest", "any"] }]),

    D(4, "🦎", "Adaptations",
      "Learn how animals adapt to their habitats.",
      `<p class='big-emoji'>🦎 🐫 🌵</p>
       <p><b>Adaptations</b> are special features that help living things survive.</p>
       <h3>Examples of Adaptations</h3>
       <ul>
         <li>🐫 Camels have humps to store fat (survive in deserts).</li>
         <li>🐟 Fish have gills to breathe in water.</li>
         <li>🌵 Cacti have thorns instead of leaves (save water).</li>
         <li>🦒 Giraffes have long necks to reach tall trees.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do camels have humps?</p>
       <p><b>Answer:</b> Camels have humps to <b>store fat</b> so they can survive without food for a long time.</p>`,

      [{ heading: "Exercise 62.1 — Say.", items: [
          "Why do camels have humps?",
          "Why do fish have gills?",
          "Why do giraffes have long necks?"
        ]},
       { heading: "Exercise 62.2 — Draw.", items: [
          "Draw a camel and label its adaptations."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why do camels have humps?", a: ["store fat", "any"] },
       { q: "Why do fish have gills?", a: ["breathe in water", "any"] }]),

    D(5, "🎨", "Ecosystem Poster",
      "Make an ecosystem poster.",
      `<p class='big-emoji'>🎨 🌳 🌊</p>
       <p>Make an <b>"Ecosystem"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Ecosystems"</b></li>
         <li>Draw one ecosystem (forest, pond, or desert).</li>
         <li>Label biotic and abiotic things.</li>
         <li>Draw 3 animals and their adaptations.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one adaptation.</p>`,

      [{ heading: "Exercise 63.1 — Draw.", items: [
          "Ecosystem with biotic and abiotic things",
          "3 animals with adaptations"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is biotic?", a: ["living", "any"] },
       { q: "What is abiotic?", a: ["non-living", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — POLLUTION
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Pollution", days: [

    D(1, "🚮", "Types of Pollution",
      "Learn the types of pollution.",
      `<p class='big-emoji'>🚮 💨 💧 🔊</p>
       <p><b>Pollution</b> is when harmful things get into the environment.</p>
       <h3>Types of Pollution</h3>
       <ul>
         <li>💨 <b>Air pollution</b> — smoke from cars and factories</li>
         <li>💧 <b>Water pollution</b> — waste in rivers and lakes</li>
         <li>🚮 <b>Land pollution</b> — litter and rubbish</li>
         <li>🔊 <b>Noise pollution</b> — loud sounds</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 types of pollution.</p>
       <p><b>Answer:</b> Air, water, and land pollution.</p>`,

      [{ heading: "Exercise 64.1 — Say.", items: [
          "What is pollution?",
          "Name 3 types of pollution.",
          "Give an example of air pollution."
        ]},
       { heading: "Exercise 64.2 — Draw.", items: [
          "Draw one type of pollution."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is pollution?", a: ["harmful things in environment", "any"] },
       { q: "Name a type of pollution.", a: ["air", "water", "land", "noise", "any"] }]),

    D(2, "🏭", "Causes of Pollution",
      "Learn the causes of pollution.",
      `<p class='big-emoji'>🏭 🚗 🗑️</p>
       <h3>Causes of Pollution</h3>
       <ul>
         <li>🏭 Factories releasing smoke</li>
         <li>🚗 Cars and vehicles burning fuel</li>
         <li>🗑️ Throwing rubbish in the wrong place</li>
         <li>🚱 Sewage entering water</li>
         <li>🔊 Loud machines and music</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What causes air pollution?</p>
       <p><b>Answer:</b> Smoke from <b>factories and vehicles</b> causes air pollution.</p>`,

      [{ heading: "Exercise 65.1 — Say.", items: [
          "Name 3 causes of pollution.",
          "What causes air pollution?",
          "What causes water pollution?"
        ]},
       { heading: "Exercise 65.2 — Answer.", items: [
          "How do cars cause pollution?",
          "How does rubbish cause pollution?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What causes air pollution?", a: ["smoke", "factories", "cars", "any"] },
       { q: "What causes water pollution?", a: ["waste", "sewage", "any"] }]),

    D(3, "😢", "Effects of Pollution",
      "Learn the effects of pollution.",
      `<p class='big-emoji'>😢 🤒 🌍</p>
       <h3>Effects of Pollution</h3>
       <ul>
         <li>🤒 Makes people sick (cough, asthma)</li>
         <li>🐟 Kills fish and animals</li>
         <li>🌱 Harms plants</li>
         <li>🌍 Changes the climate</li>
         <li>💧 Dirties water we drink</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How does pollution affect people?</p>
       <p><b>Answer:</b> Pollution can make people <b>sick</b>.</p>`,

      [{ heading: "Exercise 66.1 — Say.", items: [
          "Name 3 effects of pollution.",
          "How does pollution affect people?",
          "How does pollution affect animals?"
        ]},
       { heading: "Exercise 66.2 — Draw.", items: [
          "Draw one effect of pollution."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How does pollution affect people?", a: ["makes sick", "any"] },
       { q: "How does pollution affect fish?", a: ["kills them", "any"] }]),

    D(4, "♻️", "Recycling",
      "Learn about recycling.",
      `<p class='big-emoji'>♻️ 🗑️ ✅</p>
       <p><b>Recycling</b> means making new things from old things, instead of throwing them away.</p>
       <h3>What We Can Recycle</h3>
       <ul>
         <li>📄 Paper</li>
         <li>🥤 Plastic bottles</li>
         <li>🥫 Cans</li>
         <li>🫙 Glass</li>
         <li>🍌 Food waste (compost)</li>
       </ul>
       <h3>The 3 R's</h3>
       <ol>
         <li><b>Reduce</b> — use less</li>
         <li><b>Reuse</b> — use again</li>
         <li><b>Recycle</b> — make new things</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 things we can recycle.</p>
       <p><b>Answer:</b> Paper, plastic, and glass.</p>`,

      [{ heading: "Exercise 67.1 — Say.", items: [
          "What is recycling?",
          "Name 3 things we can recycle.",
          "What are the 3 R's?"
        ]},
       { heading: "Exercise 67.2 — Draw.", items: [
          "Draw 3 things that can be recycled."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is recycling?", a: ["making new from old", "any"] },
       { q: "Name 3 things we can recycle.", a: ["paper", "plastic", "glass", "any"] },
       { q: "What are the 3 R's?", a: ["reduce reuse recycle", "any"] }]),

    D(5, "🎨", "Environment Poster",
      "Make an environment poster.",
      `<p class='big-emoji'>🎨 🌍 ♻️</p>
       <p>Make an <b>"Environment"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Protect Our Environment"</b></li>
         <li>Draw 3 types of pollution.</li>
         <li>Draw 3 things we can recycle.</li>
         <li>Write the 3 R's.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain how to reduce pollution.</p>`,

      [{ heading: "Exercise 68.1 — Draw.", items: [
          "3 types of pollution", "3 things we can recycle", "The 3 R's"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a type of pollution.", a: ["air", "water", "land", "any"] },
       { q: "Name a way to reduce pollution.", a: ["recycle", "reduce", "reuse", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — AGRICULTURE
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Agriculture", days: [

    D(1, "🌾", "Types of Farming",
      "Learn the types of farming.",
      `<p class='big-emoji'>🌾 🐄 🐟</p>
       <h3>Types of Farming</h3>
       <ul>
         <li>🌾 <b>Crop farming</b> — growing plants (maize, cassava, cocoa)</li>
         <li>🐄 <b>Animal farming</b> — rearing animals (cows, goats, chickens)</li>
         <li>🐟 <b>Fish farming</b> — raising fish in ponds</li>
         <li>🌳 <b>Tree farming</b> — growing trees for timber or fruit</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is crop farming?</p>
       <p><b>Answer:</b> Crop farming is <b>growing plants</b> for food or sale.</p>`,

      [{ heading: "Exercise 69.1 — Say.", items: [
          "What is farming?",
          "Name 3 types of farming.",
          "Name 3 crops grown in Ghana."
        ]},
       { heading: "Exercise 69.2 — Draw.", items: [
          "Draw one type of farming."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is farming?", a: ["growing crops or rearing animals", "any"] },
       { q: "Name a type of farming.", a: ["crop", "animal", "fish", "any"] }]),

    D(2, "🌽", "Crops",
      "Learn about crops grown in Ghana.",
      `<p class='big-emoji'>🌽 🍫 🍠</p>
       <h3>Crops Grown in Ghana</h3>
       <ul>
         <li>🌽 <b>Maize</b></li>
         <li>🍠 <b>Cassava</b></li>
         <li>🍫 <b>Cocoa</b></li>
         <li>🌾 <b>Rice</b></li>
         <li>🥜 <b>Groundnuts</b></li>
         <li>🍌 <b>Plantain</b></li>
         <li>🍊 <b>Oranges</b></li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 crops grown in Ghana.</p>
       <p><b>Answer:</b> Maize, cassava, and cocoa.</p>`,

      [{ heading: "Exercise 70.1 — Say.", items: [
          "Name 5 crops grown in Ghana.",
          "Which crop is used to make chocolate?",
          "Which crop is used to make gari?"
        ]},
       { heading: "Exercise 70.2 — Draw.", items: [
          "Draw 3 crops grown in Ghana."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Which crop makes chocolate?", a: ["cocoa"] },
       { q: "Which crop makes gari?", a: ["cassava"] },
       { q: "Name a crop grown in Ghana.", a: ["maize", "cassava", "any"] }]),

    D(3, "🌱", "Soil",
      "Learn about soil.",
      `<p class='big-emoji'>🌱 🪨 💧</p>
       <h3>Types of Soil</h3>
       <ul>
         <li>🏖️ <b>Sandy soil</b> — large particles, drains quickly</li>
         <li>🌱 <b>Loamy soil</b> — best for farming, holds water and air</li>
         <li>🧱 <b>Clay soil</b> — small particles, holds water</li>
       </ul>
       <h3>Why Soil is Important</h3>
       <ul>
         <li>Plants grow in it.</li>
         <li>It holds water and nutrients.</li>
         <li>Animals live in it.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which soil is best for farming?</p>
       <p><b>Answer:</b> <b>Loamy soil</b> is best for farming.</p>`,

      [{ heading: "Exercise 71.1 — Say.", items: [
          "Name 3 types of soil.",
          "Which soil is best for farming?",
          "Why is soil important?"
        ]},
       { heading: "Exercise 71.2 — Draw.", items: [
          "Draw 3 types of soil."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Which soil is best for farming?", a: ["loamy"] },
       { q: "Name a type of soil.", a: ["sandy", "loamy", "clay", "any"] }]),

    D(4, "🔧", "Farm Tools",
      "Learn about farming tools.",
      `<p class='big-emoji'>🔧 🚜 ⛏️</p>
       <h3>Simple Farm Tools</h3>
       <ul>
         <li>⛏️ <b>Hoe</b> — for digging and weeding</li>
         <li>🔪 <b>Cutlass</b> — for cutting branches</li>
         <li>🪣 <b>Watering can</b> — for watering plants</li>
         <li>🧺 <b>Basket</b> — for carrying crops</li>
       </ul>
       <h3>Modern Farm Tools</h3>
       <ul>
         <li>🚜 <b>Tractor</b> — for ploughing large farms</li>
         <li>🚿 <b>Irrigation system</b> — for watering crops</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a hoe used for?</p>
       <p><b>Answer:</b> A hoe is used for <b>digging and weeding</b>.</p>`,

      [{ heading: "Exercise 72.1 — Say.", items: [
          "Name 3 farm tools.",
          "What is a hoe used for?",
          "What is a tractor used for?"
        ]},
       { heading: "Exercise 72.2 — Draw.", items: [
          "Draw 3 farm tools and label them."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a hoe used for?", a: ["digging and weeding", "any"] },
       { q: "What is a tractor used for?", a: ["ploughing", "any"] }]),

    D(5, "🎨", "Farming Poster",
      "Make a farming poster.",
      `<p class='big-emoji'>🎨 🌾 🐄</p>
       <p>Make a <b>"Farming in Ghana"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Farming in Ghana"</b></li>
         <li>Draw 3 crops grown in Ghana.</li>
         <li>Draw 2 farm animals.</li>
         <li>Draw 2 farm tools.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one crop and one tool.</p>`,

      [{ heading: "Exercise 73.1 — Draw.", items: [
          "3 crops", "2 farm animals", "2 farm tools"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a crop grown in Ghana.", a: ["maize", "cassava", "cocoa", "any"] },
       { q: "Name a farm tool.", a: ["hoe", "cutlass", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Ecosystems",
      "Review ecosystems.",
      `<p class='big-emoji'>🔁 🌳</p>
       <h3>Review</h3>
       <ul>
         <li>What is an ecosystem?</li>
         <li>Biotic and abiotic</li>
         <li>Habitats</li>
         <li>Adaptations</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a tree biotic or abiotic?</p>
       <p><b>Answer:</b> A tree is <b>biotic</b>.</p>`,

      [{ heading: "Exercise 74.1 — Answer.", items: [
          "What is an ecosystem?",
          "Is water biotic or abiotic?",
          "Why do camels have humps?",
          "Name 2 forest habitats."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an ecosystem?", a: ["community", "any"] },
       { q: "Is a tree biotic or abiotic?", a: ["biotic"] }]),

    D(2, "🔁", "Review Pollution",
      "Review pollution.",
      `<p class='big-emoji'>🔁 ♻️</p>
       <h3>Review</h3>
       <ul>
         <li>Types of pollution</li>
         <li>Causes</li>
         <li>Effects</li>
         <li>Recycling and the 3 R's</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name a type of pollution.</p>
       <p><b>Answer:</b> <b>Air pollution</b>.</p>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "Name 3 types of pollution.",
          "What causes air pollution?",
          "What are the 3 R's?",
          "Name 3 things we can recycle."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a type of pollution.", a: ["air", "water", "land", "any"] },
       { q: "What are the 3 R's?", a: ["reduce reuse recycle", "any"] }]),

    D(3, "🔁", "Review Agriculture",
      "Review agriculture.",
      `<p class='big-emoji'>🔁 🌾</p>
       <h3>Review</h3>
       <ul>
         <li>Types of farming</li>
         <li>Crops grown in Ghana</li>
         <li>Soil</li>
         <li>Farm tools</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which crop makes chocolate?</p>
       <p><b>Answer:</b> <b>Cocoa</b>.</p>`,

      [{ heading: "Exercise 76.1 — Answer.", items: [
          "Name 3 types of farming.",
          "Name 3 crops grown in Ghana.",
          "Which soil is best for farming?",
          "What is a hoe used for?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Which crop makes chocolate?", a: ["cocoa"] },
       { q: "Which soil is best for farming?", a: ["loamy"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>What is an ecosystem?</li>
         <li>Is a tree biotic or abiotic?</li>
         <li>Why do camels have humps?</li>
         <li>Name a type of pollution.</li>
         <li>What are the 3 R's?</li>
         <li>Name a crop grown in Ghana.</li>
         <li>Which soil is best for farming?</li>
         <li>What is a hoe used for?</li>
         <li>Name 2 farm animals.</li>
         <li>Name a farm tool.</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an ecosystem?", a: ["community", "any"] },
       { q: "What are the 3 R's?", a: ["reduce reuse recycle", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Ecosystems (10 marks)</li>
         <li>Part B — Pollution (10 marks)</li>
         <li>Part C — Agriculture (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Ecosystems (10)",
          "Part B — Pollution (10)",
          "Part C — Agriculture (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — HEALTH
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Health", days: [

    D(1, "🦠", "Diseases",
      "Learn about common diseases.",
      `<p class='big-emoji'>🦠 🤒 💊</p>
       <h3>Common Diseases</h3>
       <ul>
         <li>🦟 <b>Malaria</b> — from mosquito bites</li>
         <li>🤧 <b>Common cold</b> — from viruses</li>
         <li>🤒 <b>Cholera</b> — from dirty water</li>
         <li>🦠 <b>Typhoid</b> — from contaminated food/water</li>
         <li>😷 <b>COVID-19</b> — from a virus</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is malaria spread?</p>
       <p><b>Answer:</b> Malaria is spread by <b>mosquito bites</b>.</p>`,

      [{ heading: "Exercise 78.1 — Say.", items: [
          "What is a disease?",
          "How is malaria spread?",
          "How is cholera spread?",
          "Name 3 common diseases."
        ]},
       { heading: "Exercise 78.2 — Draw.", items: [
          "Draw a mosquito and label it."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "mosquitoes"] },
       { q: "Name a common disease.", a: ["malaria", "cold", "cholera", "any"] }]),

    D(2, "🧼", "Prevention",
      "Learn how to prevent diseases.",
      `<p class='big-emoji'>🧼 💉 🦟</p>
       <h3>Ways to Prevent Diseases</h3>
       <ul>
         <li>🧼 <b>Wash hands</b> with soap regularly</li>
         <li>💉 <b>Vaccination</b> — get immunized</li>
         <li>🦟 <b>Use mosquito nets</b> when sleeping</li>
         <li>💧 <b>Drink clean water</b></li>
         <li>🍲 <b>Eat clean food</b></li>
         <li>🧹 <b>Keep surroundings clean</b></li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How can we prevent malaria?</p>
       <p><b>Answer:</b> We can prevent malaria by <b>using mosquito nets</b> and clearing stagnant water.</p>`,

      [{ heading: "Exercise 79.1 — Say.", items: [
          "Name 3 ways to prevent diseases.",
          "How do you prevent malaria?",
          "How do you prevent cholera?"
        ]},
       { heading: "Exercise 79.2 — Draw.", items: [
          "Draw one way to prevent disease."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How to prevent malaria?", a: ["mosquito nets", "any"] },
       { q: "How to prevent cholera?", a: ["clean water", "any"] }]),

    D(3, "🩹", "First Aid",
      "Learn basic first aid.",
      `<p class='big-emoji'>🩹 🧴 ⛑️</p>
       <h3>Basic First Aid</h3>
       <ul>
         <li>🩹 <b>Small cut</b> — wash with clean water, cover with plaster</li>
         <li>🤕 <b>Bruise</b> — put cold cloth on it</li>
         <li>🔥 <b>Burn</b> — cool with running water, cover loosely</li>
         <li>👃 <b>Nosebleed</b> — pinch the nose, lean forward</li>
         <li>🐝 <b>Bee sting</b> — remove the sting, wash the area</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do for a small cut?</p>
       <p><b>Answer:</b> Wash the cut with clean water and cover it with a plaster.</p>`,

      [{ heading: "Exercise 80.1 — Say.", items: [
          "What is first aid?",
          "What do you do for a small cut?",
          "What do you do for a burn?",
          "What do you do for a nosebleed?"
        ]},
       { heading: "Exercise 80.2 — Draw.", items: [
          "Draw a first aid box with 3 things in it."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is first aid?", a: ["helping someone hurt", "any"] },
       { q: "What do you do for a small cut?", a: ["wash and cover", "any"] }]),

    D(4, "🥗", "Nutrition for Health",
      "Learn how nutrition keeps us healthy.",
      `<p class='big-emoji'>🥗 🍎 💪</p>
       <h3>Eating Well Keeps Us Healthy</h3>
       <ul>
         <li>🍎 <b>Fruits</b> — give vitamins</li>
         <li>🥬 <b>Vegetables</b> — give vitamins and minerals</li>
         <li>🍚 <b>Carbohydrates</b> — give energy</li>
         <li>🍗 <b>Proteins</b> — build the body</li>
         <li>💧 <b>Water</b> — keeps us hydrated</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why is eating fruits and vegetables good?</p>
       <p><b>Answer:</b> They give us <b>vitamins</b> that keep us healthy.</p>`,

      [{ heading: "Exercise 81.1 — Say.", items: [
          "Why are fruits and vegetables good?",
          "What do carbohydrates give us?",
          "Why do we drink water?"
        ]},
       { heading: "Exercise 81.2 — Draw.", items: [
          "Draw a healthy meal with 4 food groups."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why are fruits good?", a: ["vitamins", "any"] },
       { q: "What do carbohydrates give?", a: ["energy", "any"] }]),

    D(5, "🎨", "Health Poster",
      "Make a health poster.",
      `<p class='big-emoji'>🎨 🧼 🥗</p>
       <p>Make a <b>"Health"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Stay Healthy"</b></li>
         <li>Draw 3 ways to prevent diseases.</li>
         <li>Draw a healthy meal.</li>
         <li>Write one first aid tip.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain 3 ways to stay healthy.</p>`,

      [{ heading: "Exercise 82.1 — Draw.", items: [
          "3 ways to prevent diseases",
          "Healthy meal",
          "One first aid tip"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a way to stay healthy.", a: ["wash hands", "eat fruits", "any"] },
       { q: "Name a way to prevent malaria.", a: ["mosquito nets", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — NUTRITION
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Nutrition", days: [

    D(1, "🍎", "Food Groups",
      "Learn the food groups.",
      `<p class='big-emoji'>🍎 🍚 🍗 🥬</p>
       <h3>The 3 Main Food Groups</h3>
       <ul>
         <li>🍚 <b>Carbohydrates</b> — energy foods (rice, maize, cassava, yam)</li>
         <li>🍗 <b>Proteins</b> — body-building foods (beans, meat, fish, eggs)</li>
         <li>🥬 <b>Vitamins & Minerals</b> — protective foods (fruits, vegetables)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which food group gives energy?</p>
       <p><b>Answer:</b> <b>Carbohydrates</b> give energy.</p>`,

      [{ heading: "Exercise 83.1 — Name the food group.", items: [
          "rice → ___",
          "beans → ___",
          "orange → ___",
          "fish → ___",
          "maize → ___"
        ]},
       { heading: "Exercise 83.2 — Draw.", items: [
          "Draw 3 foods from each group."
        ]}],

      `<p><b>83.1:</b> 1. Carbohydrates 2. Proteins 3. Vitamins 4. Proteins 5. Carbohydrates</p>`,

      [{ q: "Which food group gives energy?", a: ["carbohydrates", "carbs"] },
       { q: "Which food group builds the body?", a: ["proteins", "protein"] }]),

    D(2, "🥗", "Balanced Diet",
      "Learn about a balanced diet.",
      `<p class='big-emoji'>🥗 ⚖️</p>
       <p>A <b>balanced diet</b> has the right amount of food from all groups.</p>
       <h3>What a Balanced Meal Looks Like</h3>
       <ul>
         <li>🍚 Carbohydrates (rice, yam)</li>
         <li>🍗 Proteins (fish, beans)</li>
         <li>🥬 Vegetables (kontomire, cabbage)</li>
         <li>🍊 Fruits (orange, banana)</li>
         <li>💧 Water</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why is a balanced diet important?</p>
       <p><b>Answer:</b> A balanced diet keeps us <b>healthy and strong</b>.</p>`,

      [{ heading: "Exercise 84.1 — Say.", items: [
          "What is a balanced diet?",
          "Name 4 parts of a balanced meal.",
          "Why is a balanced diet important?"
        ]},
       { heading: "Exercise 84.2 — Draw.", items: [
          "Draw a balanced meal with 4 food groups."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a balanced diet?", a: ["right amount from all groups", "any"] },
       { q: "Why is a balanced diet important?", a: ["healthy", "any"] }]),

    D(3, "😟", "Malnutrition",
      "Learn about malnutrition.",
      `<p class='big-emoji'>😟 🍽️</p>
       <p><b>Malnutrition</b> is when the body does not get enough food or the right kinds of food.</p>
       <h3>Signs of Malnutrition</h3>
       <ul>
         <li>😟 Being very thin</li>
         <li>🥱 Feeling tired all the time</li>
         <li>🤒 Getting sick often</li>
         <li>📏 Not growing well</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is malnutrition?</p>
       <p><b>Answer:</b> Malnutrition is when the body does not get <b>enough food or the right food</b>.</p>`,

      [{ heading: "Exercise 85.1 — Say.", items: [
          "What is malnutrition?",
          "Name 3 signs of malnutrition.",
          "How can we prevent malnutrition?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is malnutrition?", a: ["not enough food", "any"] },
       { q: "How to prevent malnutrition?", a: ["eat balanced diet", "any"] }]),

    D(4, "🥫", "Food Preservation",
      "Learn how to preserve food.",
      `<p class='big-emoji'>🥫 ❄️ ☀️</p>
       <p><b>Food preservation</b> means keeping food fresh for a longer time.</p>
       <h3>Ways to Preserve Food</h3>
       <ul>
         <li>☀️ <b>Drying</b> — dry in the sun (fish, pepper)</li>
         <li>❄️ <b>Refrigeration</b> — keep in fridge</li>
         <li>🧂 <b>Salting</b> — add salt (fish, meat)</li>
         <li>🥫 <b>Canning</b> — put in sealed cans</li>
         <li>🔥 <b>Smoking</b> — smoke over fire (fish)</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 ways to preserve food.</p>
       <p><b>Answer:</b> Drying, salting, and refrigeration.</p>`,

      [{ heading: "Exercise 86.1 — Say.", items: [
          "What is food preservation?",
          "Name 3 ways to preserve food.",
          "Why do we preserve food?"
        ]},
       { heading: "Exercise 86.2 — Draw.", items: [
          "Draw 3 ways to preserve food."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a way to preserve food.", a: ["drying", "salting", "any"] },
       { q: "Why do we preserve food?", a: ["keep fresh", "any"] }]),

    D(5, "🎨", "Nutrition Poster",
      "Make a nutrition poster.",
      `<p class='big-emoji'>🎨 🥗</p>
       <p>Make a <b>"Nutrition"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Eat Well, Stay Healthy"</b></li>
         <li>Draw the 3 food groups.</li>
         <li>Draw a balanced meal.</li>
         <li>Write 2 ways to preserve food.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain what a balanced meal is.</p>`,

      [{ heading: "Exercise 87.1 — Draw.", items: [
          "3 food groups",
          "Balanced meal",
          "2 ways to preserve food"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a food group.", a: ["carbohydrates", "proteins", "vitamins", "any"] },
       { q: "Name a way to preserve food.", a: ["drying", "salting", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Technology", days: [

    D(1, "💻", "What is Technology?",
      "Learn what technology is.",
      `<p class='big-emoji'>💻 📱 🚗</p>
       <p><b>Technology</b> is anything made by people to solve problems or make life easier.</p>
       <h3>Examples of Technology</h3>
       <ul>
         <li>💻 Computers</li>
         <li>📱 Phones</li>
         <li>🚗 Cars</li>
         <li>💡 Light bulbs</li>
         <li>🔌 Electricity</li>
         <li>🧼 Soap</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is technology?</p>
       <p><b>Answer:</b> Technology is <b>anything made by people</b> to help us.</p>`,

      [{ heading: "Exercise 88.1 — Say.", items: [
          "What is technology?",
          "Name 5 examples of technology.",
          "Why do we use technology?"
        ]},
       { heading: "Exercise 88.2 — Draw.", items: [
          "Draw 3 examples of technology."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is technology?", a: ["things made by people", "any"] },
       { q: "Name an example of technology.", a: ["computer", "phone", "any"] }]),

    D(2, "⚙️", "Simple Machines",
      "Learn about simple machines.",
      `<p class='big-emoji'>⚙️ 🎡 🔧</p>
       <h3>Simple Machines</h3>
       <ul>
         <li>🎡 <b>Wheel and axle</b> — cars, bicycles</li>
         <li>🔧 <b>Lever</b> — seesaw, crowbar</li>
         <li>📐 <b>Inclined plane</b> — ramp</li>
         <li>🔩 <b>Screw</b> — holds things together</li>
         <li>🪝 <b>Pulley</b> — lifts things up</li>
         <li>🔪 <b>Wedge</b> — cuts things</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a wheel and axle used for?</p>
       <p><b>Answer:</b> It helps things <b>move easily</b>.</p>`,

      [{ heading: "Exercise 89.1 — Name the simple machine.", items: [
          "bicycle → ___",
          "seesaw → ___",
          "ramp → ___",
          "axe → ___",
          "crane → ___"
        ]},
       { heading: "Exercise 89.2 — Answer.", items: [
          "What is a lever?",
          "What is a pulley?",
          "What is a wedge?"
        ]}],

      `<p><b>89.1:</b> 1. Wheel and axle 2. Lever 3. Inclined plane 4. Wedge 5. Pulley</p>`,

      [{ q: "Name a simple machine.", a: ["lever", "pulley", "wheel", "any"] },
       { q: "What is a lever?", a: ["seesaw", "any"] }]),

    D(3, "🔧", "Tools",
      "Learn about tools.",
      `<p class='big-emoji'>🔧 🔨 ✂️</p>
       <h3>Common Tools</h3>
       <ul>
         <li>🔨 <b>Hammer</b> — for hitting nails</li>
         <li>✂️ <b>Scissors</b> — for cutting paper</li>
         <li>🪛 <b>Screwdriver</b> — for turning screws</li>
         <li>🔧 <b>Wrench</b> — for turning nuts and bolts</li>
         <li>🪚 <b>Saw</b> — for cutting wood</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a hammer used for?</p>
       <p><b>Answer:</b> A hammer is used to <b>hit nails</b>.</p>`,

      [{ heading: "Exercise 90.1 — Match the tool to its use.", items: [
          "hammer → hitting nails",
          "scissors → cutting paper",
          "screwdriver → turning screws",
          "saw → cutting wood"
        ]},
       { heading: "Exercise 90.2 — Draw.", items: [
          "Draw 3 tools and label them."
        ]}],

      `<p>All correct matches.</p>`,

      [{ q: "What is a hammer used for?", a: ["hitting nails", "any"] },
       { q: "What is a saw used for?", a: ["cutting wood", "any"] }]),

    D(4, "⚠️", "Safety",
      "Learn about safety with tools and technology.",
      `<p class='big-emoji'>⚠️ 🦺 ✅</p>
       <h3>Safety Rules</h3>
       <ul>
         <li>⚠️ Always ask an adult before using tools.</li>
         <li>🦺 Wear gloves and goggles when needed.</li>
         <li>🚫 Do not play with sharp tools.</li>
         <li>💡 Do not touch electric wires.</li>
         <li>🔌 Unplug machines before cleaning.</li>
         <li>🚸 Keep fingers away from blades.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you ask an adult before using tools?</p>
       <p><b>Answer:</b> Because tools can be <b>dangerous</b> if not used correctly.</p>`,

      [{ heading: "Exercise 91.1 — Say.", items: [
          "Name 3 safety rules with tools.",
          "Why should you not touch electric wires?",
          "What should you wear when using tools?"
        ]},
       { heading: "Exercise 91.2 — Draw.", items: [
          "Draw one safety rule."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why be careful with tools?", a: ["they are dangerous", "any"] },
       { q: "What should you wear for safety?", a: ["gloves", "goggles", "any"] }]),

    D(5, "🎨", "Technology Poster",
      "Make a technology poster.",
      `<p class='big-emoji'>🎨 💻 ⚙️</p>
       <p>Make a <b>"Technology"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Technology"</b></li>
         <li>Draw 3 examples of technology.</li>
         <li>Draw 3 simple machines.</li>
         <li>Write 2 safety rules.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one simple machine.</p>`,

      [{ heading: "Exercise 92.1 — Draw.", items: [
          "3 examples of technology",
          "3 simple machines",
          "2 safety rules"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a simple machine.", a: ["lever", "pulley", "any"] },
       { q: "Name a safety rule.", a: ["ask an adult", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Health",
      "Review health.",
      `<p class='big-emoji'>🔁 🧼</p>
       <h3>Review</h3>
       <ul>
         <li>Diseases</li>
         <li>Prevention</li>
         <li>First aid</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is malaria spread?</p>
       <p><b>Answer:</b> By <b>mosquito bites</b>.</p>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "How is malaria spread?",
          "Name 3 ways to prevent diseases.",
          "What do you do for a small cut?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] },
       { q: "Name a way to prevent disease.", a: ["wash hands", "any"] }]),

    D(2, "🔁", "Review Nutrition",
      "Review nutrition.",
      `<p class='big-emoji'>🔁 🥗</p>
       <h3>Review</h3>
       <ul>
         <li>Food groups</li>
         <li>Balanced diet</li>
         <li>Malnutrition</li>
         <li>Food preservation</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Which food group builds the body?</p>
       <p><b>Answer:</b> <b>Proteins</b>.</p>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "Name 3 food groups.",
          "What is a balanced diet?",
          "Name 2 ways to preserve food."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Which food group builds the body?", a: ["proteins", "protein"] },
       { q: "Name a way to preserve food.", a: ["drying", "salting", "any"] }]),

    D(3, "🔁", "Review Technology",
      "Review technology.",
      `<p class='big-emoji'>🔁 ⚙️</p>
       <h3>Review</h3>
       <ul>
         <li>What is technology?</li>
         <li>Simple machines</li>
         <li>Tools</li>
         <li>Safety</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a lever?</p>
       <p><b>Answer:</b> A <b>seesaw</b> is a lever.</p>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "What is technology?",
          "Name 3 simple machines.",
          "Name 3 tools and their uses.",
          "Name 2 safety rules."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a simple machine.", a: ["lever", "pulley", "any"] },
       { q: "Name a safety rule.", a: ["ask an adult", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>How is malaria spread?</li>
         <li>Name a way to prevent disease.</li>
         <li>What do you do for a small cut?</li>
         <li>Name 3 food groups.</li>
         <li>What is a balanced diet?</li>
         <li>Name 2 ways to preserve food.</li>
         <li>What is technology?</li>
         <li>Name a simple machine.</li>
         <li>What is a hammer used for?</li>
         <li>Name a safety rule.</li>
       </ol>`,

      [{ heading: "Exercise 96.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] },
       { q: "What is technology?", a: ["things made by people", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Health (10 marks)</li>
         <li>Part B — Nutrition (10 marks)</li>
         <li>Part C — Technology (10 marks)</li>
         <li>Part D — Mixed Review (10 marks)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Health (10)",
          "Part B — Nutrition (10)",
          "Part C — Technology (10)",
          "Part D — Mixed Review (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — SCIENTIFIC METHOD
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Scientific Method", days: [

    D(1, "❓", "Asking Questions",
      "Learn to ask scientific questions.",
      `<p class='big-emoji'>❓ 🤔 🔍</p>
       <p>Science starts with <b>questions</b>. A good scientific question can be tested.</p>
       <h3>Examples of Scientific Questions</h3>
       <ul>
         <li>🌱 Does a plant grow faster in sunlight or shade?</li>
         <li>💧 Does sugar dissolve faster in hot or cold water?</li>
         <li>🪨 Which is heavier: a stone or a feather?</li>
         <li>🌬️ Which paper airplane flies farther?</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes a good scientific question?</p>
       <p><b>Answer:</b> A good scientific question can be <b>tested</b> with an experiment.</p>`,

      [{ heading: "Exercise 97.1 — Say.", items: [
          "What makes a good scientific question?",
          "Write 3 scientific questions.",
          "Which question can you test?"
        ]},
       { heading: "Exercise 97.2 — Answer.", items: [
          "Why do scientists ask questions?",
          "What do we do after asking a question?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What makes a good question?", a: ["can be tested", "any"] },
       { q: "Why do scientists ask questions?", a: ["to learn", "any"] }]),

    D(2, "💭", "Hypotheses",
      "Learn to make a hypothesis.",
      `<p class='big-emoji'>💭 🤔 ✅</p>
       <p>A <b>hypothesis</b> is a smart guess about what will happen in an experiment.</p>
       <h3>Examples of Hypotheses</h3>
       <ul>
         <li>🌱 "I think the plant in sunlight will grow taller."</li>
         <li>💧 "I think sugar will dissolve faster in hot water."</li>
         <li>✈️ "I think the paper airplane with bigger wings will fly farther."</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a hypothesis?</p>
       <p><b>Answer:</b> A hypothesis is a <b>smart guess</b> about what will happen.</p>`,

      [{ heading: "Exercise 98.1 — Say.", items: [
          "What is a hypothesis?",
          "Write a hypothesis for: Will a plant grow taller in sunlight or shade?",
          "Write a hypothesis for: Will sugar dissolve faster in hot or cold water?"
        ]},
       { heading: "Exercise 98.2 — Answer.", items: [
          "How do you write a hypothesis?",
          "Is a hypothesis always correct?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a hypothesis?", a: ["smart guess", "any"] },
       { q: "Is a hypothesis always correct?", a: ["no"] }]),

    D(3, "🧪", "Experiments",
      "Learn to conduct an experiment.",
      `<p class='big-emoji'>🧪 🔬 📋</p>
       <p>An <b>experiment</b> is a test to find out if a hypothesis is correct.</p>
       <h3>Steps of an Experiment</h3>
       <ol>
         <li>Ask a question.</li>
         <li>Make a hypothesis.</li>
         <li>Plan the experiment.</li>
         <li>Do the experiment.</li>
         <li>Record results.</li>
       </ol>
       <h3>Simple Experiment: Does sugar dissolve faster in hot or cold water?</h3>
       <ol>
         <li>Get 2 cups — one with hot water, one with cold.</li>
         <li>Add 1 spoon of sugar to each.</li>
         <li>Stir both for 10 seconds.</li>
         <li>Watch which dissolves first.</li>
       </ol>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is an experiment?</p>
       <p><b>Answer:</b> An experiment is a <b>test</b> to find out something.</p>`,

      [{ heading: "Exercise 99.1 — Say.", items: [
          "What is an experiment?",
          "Name the steps of an experiment.",
          "What is a fair test?"
        ]},
       { heading: "Exercise 99.2 — Do it!", items: [
          "Try the sugar experiment at home.",
          "Which dissolved first — hot or cold?",
          "Was your hypothesis correct?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is an experiment?", a: ["a test", "any"] },
       { q: "Which dissolves sugar faster?", a: ["hot water", "any"] }]),

    D(4, "📊", "Results",
      "Learn to record results.",
      `<p class='big-emoji'>📊 📋 📈</p>
       <p>After an experiment, we <b>record results</b> using tables and charts.</p>
       <h3>How to Record Results</h3>
       <ul>
         <li>📋 Use a table to write what happened.</li>
         <li>📊 Use a bar chart to show numbers.</li>
         <li>✍️ Write what you observed.</li>
       </ul>
       <h3>Example Table</h3>
       <table border="1">
         <tr><th>Water</th><th>Time to dissolve</th></tr>
         <tr><td>Hot</td><td>5 seconds</td></tr>
         <tr><td>Cold</td><td>20 seconds</td></tr>
       </table>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we record results?</p>
       <p><b>Answer:</b> To <b>remember and compare</b> what happened.</p>`,

      [{ heading: "Exercise 100.1 — Say.", items: [
          "Why do we record results?",
          "How do we record results?",
          "What did your sugar experiment show?"
        ]},
       { heading: "Exercise 100.2 — Draw.", items: [
          "Draw a table for your sugar experiment."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Why do we record results?", a: ["remember", "compare", "any"] },
       { q: "How do we show results?", a: ["table", "chart", "any"] }]),

    D(5, "🎨", "Conclusion Poster",
      "Make a scientific method poster.",
      `<p class='big-emoji'>🎨 🧪 📝</p>
       <p>Make a <b>"Scientific Method"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Scientific Method"</b></li>
         <li>List 5 steps: question, hypothesis, experiment, results, conclusion.</li>
         <li>Draw one simple experiment.</li>
         <li>Write your conclusion.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain the 5 steps.</p>`,

      [{ heading: "Exercise 101.1 — Draw.", items: [
          "5 steps of the scientific method",
          "One experiment"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a step of the scientific method.", a: ["question", "hypothesis", "any"] },
       { q: "What is a conclusion?", a: ["what you learned", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — SCIENCE & SOCIETY
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Science & Society", days: [

    D(1, "🏠", "Science in Daily Life",
      "Learn how science helps us daily.",
      `<p class='big-emoji'>🏠 🌍 🔬</p>
       <p>Science is all around us. It helps us in many ways every day.</p>
       <h3>Science at Home</h3>
       <ul>
         <li>🍲 Cooking food</li>
         <li>🧼 Washing with soap</li>
         <li>🔌 Using electricity</li>
         <li>💊 Taking medicine</li>
         <li>🚿 Boiling water to kill germs</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How does science help us at home?</p>
       <p><b>Answer:</b> Science helps us cook food, wash, and stay healthy.</p>`,

      [{ heading: "Exercise 102.1 — Say.", items: [
          "Name 3 ways science helps at home.",
          "Why do we boil water?",
          "What happens when we cook food?"
        ]},
       { heading: "Exercise 102.2 — Draw.", items: [
          "Draw 3 ways science helps you at home."
        ]}],

      `<p>⭐</p>`,

      [{ q: "Name a way science helps at home.", a: ["cooking", "washing", "any"] },
       { q: "Why do we boil water?", a: ["kill germs", "any"] }]),

    D(2, "🏥", "Science & Health",
      "Learn how science helps our health.",
      `<p class='big-emoji'>🏥 💊 🩺</p>
       <h3>Science and Health</h3>
       <ul>
         <li>💉 Vaccines protect us from diseases.</li>
         <li>💊 Medicines cure illnesses.</li>
         <li>🩺 Doctors use science to diagnose.</li>
         <li>🔬 Scientists study diseases.</li>
         <li>🧼 Hygiene keeps us healthy.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How do vaccines help?</p>
       <p><b>Answer:</b> Vaccines <b>protect us</b> from getting sick.</p>`,

      [{ heading: "Exercise 103.1 — Say.", items: [
          "How do vaccines help?",
          "How do medicines help?",
          "Why do doctors need science?"
        ]},
       { heading: "Exercise 103.2 — Draw.", items: [
          "Draw a doctor helping a patient."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do vaccines help?", a: ["protect from sickness", "any"] },
       { q: "How do doctors use science?", a: ["to heal", "any"] }]),

    D(3, "🌾", "Science & Agriculture",
      "Learn how science helps farming.",
      `<p class='big-emoji'>🌾 🚜 🌱</p>
       <h3>Science in Agriculture</h3>
       <ul>
         <li>🌱 Better seeds produce more crops.</li>
         <li>💊 Fertilizers help plants grow.</li>
         <li>💧 Irrigation waters crops.</li>
         <li>🐛 Pesticides kill pests.</li>
         <li>🚜 Machines make work faster.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How does science help farmers?</p>
       <p><b>Answer:</b> Science gives farmers <b>better seeds, fertilizers, and tools</b>.</p>`,

      [{ heading: "Exercise 104.1 — Say.", items: [
          "Name 3 ways science helps farmers.",
          "What do fertilizers do?",
          "What do pesticides do?"
        ]},
       { heading: "Exercise 104.2 — Draw.", items: [
          "Draw a farm with modern tools."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How does science help farmers?", a: ["better seeds", "any"] },
       { q: "What do fertilizers do?", a: ["help plants grow", "any"] }]),

    D(4, "🏭", "Science & Technology",
      "Learn how science and technology work together.",
      `<p class='big-emoji'>🏭 💻 🚀</p>
       <h3>Science and Technology</h3>
       <ul>
         <li>💻 Computers were invented using science.</li>
         <li>📱 Phones use scientific discoveries.</li>
         <li>🚀 Rockets take people to space.</li>
         <li>💡 Electricity powers our homes.</li>
         <li>🏭 Factories use machines and science.</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How are science and technology related?</p>
       <p><b>Answer:</b> Science discovers new things, and technology uses those discoveries to make useful tools.</p>`,

      [{ heading: "Exercise 105.1 — Say.", items: [
          "Name 3 ways science and technology work together.",
          "How do phones use science?",
          "How do rockets use science?"
        ]},
       { heading: "Exercise 105.2 — Draw.", items: [
          "Draw 3 things that use science and technology."
        ]}],

      `<p>⭐</p>`,

      [{ q: "How are science and technology related?", a: ["science discovers, technology uses", "any"] },
       { q: "How do phones use science?", a: ["electricity", "signals", "any"] }]),

    D(5, "🎨", "Society Poster",
      "Make a science and society poster.",
      `<p class='big-emoji'>🎨 🌍 🔬</p>
       <p>Make a <b>"Science & Society"</b> poster.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Science Helps Us"</b></li>
         <li>Draw science at home, school, and farm.</li>
         <li>Draw one medical advance.</li>
         <li>Draw one technological invention.</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain one way science helps society.</p>`,

      [{ heading: "Exercise 106.1 — Draw.", items: [
          "Science at home",
          "Science at school",
          "Science at farm",
          "Medical advance",
          "Technological invention"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a way science helps society.", a: ["health", "agriculture", "any"] },
       { q: "Name a technological invention.", a: ["phone", "computer", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Life Science",
      "Revise life science topics.",
      `<p class='big-emoji'>🔁 🌱 🧍</p>
       <h3>Revision Topics</h3>
       <ul>
         <li>Living things and their characteristics</li>
         <li>Human body systems</li>
         <li>Plants</li>
         <li>Ecosystems</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 characteristics of living things.</p>
       <p><b>Answer:</b> Movement, growth, and nutrition.</p>`,

      [{ heading: "Exercise 107.1 — Answer.", items: [
          "Name 3 characteristics of living things.",
          "What does the heart do?",
          "Which part of the plant makes food?",
          "What is an ecosystem?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Name a characteristic of living things.", a: ["movement", "growth", "any"] },
       { q: "What is an ecosystem?", a: ["community", "any"] }]),

    D(2, "🔁", "Physical Science",
      "Revise physical science topics.",
      `<p class='big-emoji'>🔁 🧊 👉</p>
       <h3>Revision Topics</h3>
       <ul>
         <li>Matter (solids, liquids, gases)</li>
         <li>Forces (push, pull, gravity, friction)</li>
         <li>Light and sound</li>
         <li>Energy</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a solid?</p>
       <p><b>Answer:</b> A solid has a <b>fixed shape and volume</b>.</p>`,

      [{ heading: "Exercise 108.1 — Answer.", items: [
          "What is a solid?",
          "What is a liquid?",
          "What is a gas?",
          "What does gravity do?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a solid?", a: ["fixed shape", "any"] },
       { q: "What does gravity do?", a: ["pulls down", "any"] }]),

    D(3, "🔁", "Earth & Space",
      "Revise earth and space topics.",
      `<p class='big-emoji'>🔁 🌍 ☀️</p>
       <h3>Revision Topics</h3>
       <ul>
         <li>Weather and climate</li>
         <li>Water cycle</li>
         <li>Solar system</li>
         <li>Day and night</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What causes day and night?</p>
       <p><b>Answer:</b> The <b>Earth's rotation</b>.</p>`,

      [{ heading: "Exercise 109.1 — Answer.", items: [
          "What is weather?",
          "Name 3 stages of the water cycle.",
          "How many planets?",
          "What causes day and night?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What causes day and night?", a: ["rotation", "earth spinning"] },
       { q: "How many planets?", a: ["8", "eight"] }]),

    D(4, "🔁", "Health & Technology",
      "Revise health and technology topics.",
      `<p class='big-emoji'>🔁 🧼 ⚙️</p>
       <h3>Revision Topics</h3>
       <ul>
         <li>Diseases and prevention</li>
         <li>Nutrition and food groups</li>
         <li>Technology and simple machines</li>
         <li>Scientific method</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How is malaria spread?</p>
       <p><b>Answer:</b> By <b>mosquito bites</b>.</p>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "How is malaria spread?",
          "Name 3 food groups.",
          "What is a simple machine?",
          "Name a step of the scientific method."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How is malaria spread?", a: ["mosquito bites", "any"] },
       { q: "Name a food group.", a: ["carbohydrates", "proteins", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Do a practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <p>Answer 10 questions from all topics.</p>

       <h3>Mixed Questions</h3>
       <ol>
         <li>Name 3 characteristics of living things.</li>
         <li>What does the heart do?</li>
         <li>What is a solid?</li>
         <li>What does gravity do?</li>
         <li>What causes day and night?</li>
         <li>Name a stage of the water cycle.</li>
         <li>How many planets?</li>
         <li>How is malaria spread?</li>
         <li>Name a food group.</li>
         <li>Name a simple machine.</li>
       </ol>`,

      [{ heading: "Exercise 111.1 — Answer 10 questions.", items: []}],

      `<p>Any correct answers.</p>`,

      [{ q: "What does the heart do?", a: ["pumps blood", "any"] },
       { q: "What is a solid?", a: ["fixed shape", "any"] }])
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
         <li>Living things and habitats</li>
         <li>Human body systems</li>
         <li>Plants and photosynthesis</li>
         <li>Matter and forces</li>
         <li>Light, sound, and energy</li>
         <li>Weather, water, and space</li>
         <li>Ecosystems and pollution</li>
         <li>Agriculture, health, nutrition</li>
         <li>Technology and scientific method</li>
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
      "Make a portfolio of your best work.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Make a <b>portfolio</b> of your best science work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best poster</li>
         <li>Your best drawing</li>
         <li>Your best experiment record</li>
         <li>Your best written answer</li>
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
       <p>"This is my science portfolio. On this page, I wrote about plants. On this page, I recorded my water experiment. My favourite work is the ecosystem poster."</p>`,

      [{ heading: "Exercise 114.1 — Present your portfolio.", items: [
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
       <p>You have completed Grade 3 Science! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>🔬 Do one last experiment for your family.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 3 Science! I can ask questions, do experiments, and learn about the world!"</p>`,

      [{ heading: "Exercise 115.1 — Celebrate!", items: [
          "Show your work.",
          "Do one last experiment.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 4?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are a science champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can ask scientific questions!"</li>
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
          'Say "I can ask scientific questions!"',
          'Say "I can do experiments!"',
          'Say "I can learn about the world!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of science!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];