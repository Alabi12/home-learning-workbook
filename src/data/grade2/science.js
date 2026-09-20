// src/data/grade2/science.js
// Grade 2 Science — NaCCA Standards-Based Curriculum (expanded)

import { D, wk } from '../helpers.js';

export const science = [

  // ═══════════════════════════════════════════════════════════════════
  // STRAND 1: DIVERSITY OF MATTER
  // SUB-STRAND: LIVING AND NON-LIVING THINGS
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: 'Living & Non-Living Things', days: [

    D(1, '🌱', 'Living Things',
      'Recognise and describe the characteristics of living things.',
      `<p class='big-emoji'>🌱 🐶 👦 🌳</p>
       <p>Living things are things that are <b>alive</b>. They grow, eat, breathe, move, and have young ones.</p>

       <h3>Characteristics of Living Things</h3>
       <p>All living things:</p>
       <ol>
         <li><b>Grow</b> — a baby becomes a child; a seed becomes a tree.</li>
         <li><b>Move</b> — a dog runs; a plant turns towards the sun.</li>
         <li><b>Breathe</b> — people and animals breathe air.</li>
         <li><b>Eat (feed)</b> — a goat eats grass; a baby drinks milk.</li>
         <li><b>Have young ones</b> — a hen lays eggs; a mother has a baby.</li>
         <li><b>Die</b> — all living things die one day.</li>
       </ol>

       <h3>Examples of Living Things</h3>
       <p>👦 People, 🐕 dogs, 🐄 cows, 🐐 goats, 🐈 cats, 🌳 mango trees, 🌱 maize plants, 🐟 fish, 🐦 birds, 🐝 bees.</p>

       <h3>Non-Living Things</h3>
       <p>Non-living things do not grow, move, eat, or breathe. Examples: 🪨 stones, 🪑 chairs, 📕 books, 💧 water, 🌬️ air.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big circle. On the left, draw 3 living things (a boy, a mango tree, a hen). On the right, draw 3 non-living things (a stone, a chair, a book). Write "Living" and "Non-Living" above each side.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a pawpaw tree living or non-living?</p>
       <p><b>Answer:</b> A pawpaw tree is <b>living</b> because it grows, needs water, and produces fruit (young ones).</p>`,

      [{ heading: 'Exercise 1.1 — Say which is living or non-living', items: [
          'A mango tree → (Living)',
          'A stone → (Non-living)',
          'A dog → (Living)',
          'A cup → (Non-living)',
          'A fish → (Living)'
        ]},
       { heading: 'Exercise 1.2 — List and draw', items: [
          'Write 5 living things you can see in your home.',
          'Write 5 non-living things you can see in your home.',
          'Draw one living and one non-living thing.'
        ]},
       { heading: 'Exercise 1.3 — Fill in the blanks', items: [
          'Living things ______ and ______.',
          'A ______ is a living thing.',
          'A ______ is a non-living thing.'
        ]}],

      `<p><b>1.1:</b> Living; Non-living; Living; Non-living; Living</p>
       <p><b>1.3:</b> grow, move; dog (or any living thing); stone (or any non-living thing)</p>`,

      [{ q: 'Is a tree living?', a: ['yes', 'living'] },
       { q: 'Is a stone living?', a: ['no', 'non-living'] },
       { q: 'Name one thing all living things do.', a: ['grow', 'move', 'breathe', 'eat', 'any'] },
       { q: 'Is a chair living?', a: ['no', 'non-living'] }]),

    D(2, '🐾', 'Animals',
      'Know that animals are living things that move, feed, and have young ones.',
      `<p class='big-emoji'>🐕 🐈 🐄 🐐 🐐</p>
       <p><b>Animals</b> are living things. They can move from place to place. They eat food. They have young ones.</p>

       <h3>Groups of Animals</h3>
       <ul>
         <li><b>Domestic animals</b> (live with us at home): 🐕 dog, 🐈 cat, 🐐 goat, 🐄 cow, 🐔 hen, 🐑 sheep, 🐖 pig.</li>
         <li><b>Wild animals</b> (live in the forest): 🦁 lion, 🐘 elephant, 🐒 monkey, 🐍 snake, 🦒 giraffe, 🦓 zebra.</li>
         <li><b>Water animals</b>: 🐟 fish, 🐠 tilapia, 🦐 shrimp.</li>
         <li><b>Flying animals</b>: 🐦 birds, 🦋 butterflies, 🐝 bees.</li>
       </ul>

       <h3>How Animals Help Us</h3>
       <ul>
         <li>🐄 Cows give us milk and meat.</li>
         <li>🐔 Hens give us eggs and meat.</li>
         <li>🐕 Dogs guard our homes.</li>
         <li>🐈 Cats catch rats and mice.</li>
         <li>🐝 Bees make honey.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 boxes. In box 1, draw a pet (dog or cat). In box 2, draw a farm animal (goat or cow). In box 3, draw a wild animal (lion or elephant). In box 4, draw a water animal (fish). Label each box.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does a lion live?</p>
       <p><b>Answer:</b> A lion lives in the <b>forest</b> or <b>savanna</b>. It is a wild animal.</p>`,

      [{ heading: 'Exercise 2.1 — Name the animal', items: [
          'A animal that gives us milk → (Cow)',
          'An animal that gives us eggs → (Hen)',
          'An animal that makes honey → (Bee)',
          'An animal that guards our home → (Dog)',
          'A wild animal with a long neck → (Giraffe)'
        ]},
       { heading: 'Exercise 2.2 — Sort the animals', items: [
          'Sort into Domestic and Wild: cow, lion, goat, elephant, hen, monkey, dog, snake.'
        ]},
       { heading: 'Exercise 2.3 — Draw and label', items: [
          'Draw one domestic animal and write its name.',
          'Draw one wild animal and write its name.'
        ]}],

      `<p><b>2.1:</b> Cow; Hen; Bee; Dog; Giraffe</p>
       <p><b>2.2:</b> Domestic: cow, goat, hen, dog. Wild: lion, elephant, monkey, snake.</p>`,

      [{ q: 'Name a farm animal.', a: ['cow', 'goat', 'hen', 'sheep', 'pig', 'any'] },
       { q: 'Name a wild animal.', a: ['lion', 'elephant', 'monkey', 'snake', 'giraffe', 'any'] },
       { q: 'Which animal gives us milk?', a: ['cow', 'goat'] },
       { q: 'Which animal gives us eggs?', a: ['hen', 'chicken'] }]),

    D(3, '🌳', 'Plants',
      'Know that plants are living things that need water, sunlight, and soil to grow.',
      `<p class='big-emoji'>🌱 🌿 🌳 🌸</p>
       <p><b>Plants</b> are living things. They grow from seeds. They need water, sunlight, and soil to grow well.</p>

       <h3>Parts of a Plant</h3>
       <ul>
         <li><b>Roots</b> — hold the plant in the soil and take in water.</li>
         <li><b>Stem</b> — carries water and food up the plant.</li>
         <li><b>Leaves</b> — make food using sunlight.</li>
         <li><b>Flowers</b> — produce seeds.</li>
         <li><b>Fruit</b> — protects the seeds.</li>
         <li><b>Seeds</b> — grow into new plants.</li>
       </ul>

       <h3>What Plants Need</h3>
       <ul>
         <li>💧 <b>Water</b> — to live and grow.</li>
         <li>☀️ <b>Sunlight</b> — to make food.</li>
         <li>🌱 <b>Soil</b> — to hold the plant and give nutrients.</li>
         <li>🌬️ <b>Air</b> — to breathe.</li>
       </ul>

       <h3>Examples of Plants in Ghana</h3>
       <p>🌽 Maize, 🌾 cassava, 🍚 rice, 🥥 coconut, 🥭 mango tree, 🍌 plantain, 🫘 cocoa, 🍅 tomato.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a plant with all 6 parts labelled: root, stem, leaf, flower, fruit, seed. Colour it green.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What will happen to a plant if you put it in a dark room for one week?</p>
       <p><b>Answer:</b> The plant will <b>wilt and die</b> because it cannot make food without sunlight.</p>`,

      [{ heading: 'Exercise 3.1 — Answer these questions', items: [
          'What do plants need to grow?',
          'Which part of the plant takes in water?',
          'Which part makes food for the plant?',
          'Which part holds the plant in the soil?',
          'Which part produces seeds?'
        ]},
       { heading: 'Exercise 3.2 — Match', items: [
          'Root → (takes in water)',
          'Leaf → (makes food)',
          'Flower → (produces seeds)',
          'Stem → (carries water)'
        ]},
       { heading: 'Exercise 3.3 — Draw and label', items: [
          'Draw a plant and label its 4 main parts.'
        ]}],

      `<p><b>3.1:</b> 1. Water, sunlight, soil, air. 2. Root. 3. Leaf. 4. Root. 5. Flower.</p>
       <p><b>3.2:</b> Root → takes in water; Leaf → makes food; Flower → produces seeds; Stem → carries water.</p>`,

      [{ q: 'What do plants need to grow?', a: ['water', 'sunlight', 'soil', 'any'] },
       { q: 'Which part takes in water?', a: ['root', 'roots'] },
       { q: 'Which part makes food?', a: ['leaf', 'leaves'] },
       { q: 'Which part produces seeds?', a: ['flower', 'flowers'] }]),

    D(4, '👦', 'My Body',
      'Identify the external parts of the human body and their uses.',
      `<p class='big-emoji'>👦 👧 🦵 ✋</p>
       <p>Our body has many parts. Each part has a special work (function).</p>

       <h3>External Body Parts and Their Uses</h3>
       <ul>
         <li><b>Head</b> — holds the brain; helps us think.</li>
         <li><b>Eyes</b> — help us see.</li>
         <li><b>Ears</b> — help us hear.</li>
         <li><b>Nose</b> — helps us smell and breathe.</li>
         <li><b>Mouth</b> — helps us eat, drink, and talk.</li>
         <li><b>Hands</b> — help us hold things.</li>
         <li><b>Legs</b> — help us walk and run.</li>
         <li><b>Feet</b> — help us stand and walk.</li>
       </ul>

       <h3>Clean and Healthy Body</h3>
       <ul>
         <li>🚿 Bath every day.</li>
         <li>🦷 Brush your teeth twice a day.</li>
         <li>🧼 Wash your hands before eating.</li>
         <li>👕 Wear clean clothes.</li>
         <li>✂️ Cut your nails short.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a boy or girl. Label: head, eyes, ears, nose, mouth, hands, legs, feet. Use arrows.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you wash your hands before eating?</p>
       <p><b>Answer:</b> To remove <b>germs</b> (tiny living things that make us sick).</p>`,

      [{ heading: 'Exercise 4.1 — Match the body part to its use', items: [
          'Eyes → (see)',
          'Ears → (hear)',
          'Nose → (smell)',
          'Mouth → (eat and talk)',
          'Legs → (walk and run)'
        ]},
       { heading: 'Exercise 4.2 — Answer', items: [
          'How many eyes do you have?',
          'How many legs do you have?',
          'Which body part helps you to smell?',
          'Which body part helps you to hear?'
        ]},
       { heading: 'Exercise 4.3 — Draw and label', items: [
          'Draw yourself and label 6 body parts.'
        ]}],

      `<p><b>4.1:</b> Eyes → see; Ears → hear; Nose → smell; Mouth → eat and talk; Legs → walk and run.</p>
       <p><b>4.2:</b> 1. Two. 2. Two. 3. Nose. 4. Ears.</p>`,

      [{ q: 'How many eyes do you have?', a: ['2', 'two'] },
       { q: 'Which part helps you see?', a: ['eye', 'eyes'] },
       { q: 'Which part helps you hear?', a: ['ear', 'ears'] },
       { q: 'Which part helps you smell?', a: ['nose'] }]),

    D(5, '🎨', 'Living Things Poster',
      'Consolidate learning by drawing and labelling living and non-living things.',
      `<p>Today you will make a poster. A poster shows what you have learned in pictures and words.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Living and Non-Living Things"</b></li>
         <li>Left side: 3 living things (a person, a plant, an animal).</li>
         <li>Right side: 3 non-living things (a stone, a book, a chair).</li>
         <li>Below each picture: write the name.</li>
         <li>Bottom: one sentence — <i>"Living things grow, move, and eat. Non-living things do not."</i></li>
       </ul>

       <h3>Colours to Use</h3>
       <p>Green for plants, brown for soil, blue for water, red for flowers.</p>

       <h3>Show and Tell</h3>
       <p>When finished, show your poster to your parent. Say the name of each thing and whether it is living or non-living.</p>`,

      [{ heading: 'Exercise 5.1 — Draw your poster', items: [
          'Title',
          '3 living things with names',
          '3 non-living things with names',
          'One sentence at the bottom'
        ]},
       { heading: 'Exercise 5.2 — Read aloud to a parent', items: [
          'Say each item aloud. Say "living" or "non-living" after each.'
        ]}],

      `<p>Parent should praise effort. Award ⭐ for a complete, colourful poster.</p>`,

      [{ q: 'Give one example of a living thing.', a: ['boy', 'girl', 'dog', 'cat', 'tree', 'any'] },
       { q: 'Give one example of a non-living thing.', a: ['stone', 'book', 'chair', 'cup', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // SUB-STRAND: THE HUMAN BODY SYSTEMS
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: 'My Body Systems', days: [

    D(1, '👀', 'My Head',
      'Identify and describe the parts of the head and their functions.',
      `<p class='big-emoji'>👀 👂 👃 👄</p>
       <p>The <b>head</b> is the top part of the body. It holds very important parts: the brain, eyes, ears, nose, and mouth.</p>

       <h3>Parts of the Head</h3>
       <ul>
         <li><b>Brain</b> — inside the head; controls the whole body; helps us think.</li>
         <li><b>Eyes</b> — two round organs that see.</li>
         <li><b>Ears</b> — two organs that hear.</li>
         <li><b>Nose</b> — smells and helps us breathe.</li>
         <li><b>Mouth</b> — for eating, drinking, and talking.</li>
         <li><b>Hair</b> — protects the head.</li>
       </ul>

       <h3>Care of the Head</h3>
       <ul>
         <li>Wash your face every morning.</li>
         <li>Comb your hair.</li>
         <li>Do not hit anyone on the head.</li>
         <li>Wear a helmet when riding a bicycle.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big face. Label: eye, ear, nose, mouth, hair. Colour the eyes brown or black.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which part of the head helps us to smell?</p>
       <p><b>Answer:</b> The <b>nose</b>.</p>`,

      [{ heading: 'Exercise 6.1 — Say the use of each part', items: [
          'Eyes → (see)',
          'Ears → (hear)',
          'Nose → (smell)',
          'Mouth → (eat and talk)',
          'Brain → (think and control)'
        ]},
       { heading: 'Exercise 6.2 — Fill in the blanks', items: [
          'I see with my ______.',
          'I hear with my ______.',
          'I smell with my ______.',
          'I eat with my ______.',
          'I think with my ______.'
        ]},
       { heading: 'Exercise 6.3 — Draw and label', items: [
          'Draw a face and label 5 parts.'
        ]}],

      `<p><b>6.2:</b> eyes; ears; nose; mouth; brain</p>`,

      [{ q: 'What do you see with?', a: ['eyes', 'eye'] },
       { q: 'What do you hear with?', a: ['ears', 'ear'] },
       { q: 'What do you smell with?', a: ['nose'] },
       { q: 'What do you eat with?', a: ['mouth'] }]),

    D(2, '🦵', 'My Body',
      'Identify the main parts of the body and their uses.',
      `<p class='big-emoji'>🦵 ✋ 🦶</p>
       <p>The body has many parts. Each part helps us to do different things.</p>

       <h3>Main Parts of the Body</h3>
       <ul>
         <li><b>Neck</b> — connects the head to the body.</li>
         <li><b>Shoulders</b> — help us lift things.</li>
         <li><b>Arms</b> — reach and hold.</li>
         <li><b>Hands</b> — hold, write, clap.</li>
         <li><b>Fingers</b> — pick small things.</li>
         <li><b>Chest</b> — holds the heart and lungs.</li>
         <li><b>Stomach</b> — digests food.</li>
         <li><b>Legs</b> — walk, run, jump.</li>
         <li><b>Feet</b> — stand and walk.</li>
         <li><b>Toes</b> — help balance.</li>
       </ul>

       <h3>Functions of the Body</h3>
       <ul>
         <li>We walk with our legs.</li>
         <li>We hold things with our hands.</li>
         <li>We think with our brain.</li>
         <li>We breathe with our lungs.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a full human figure. Label 8 parts: head, neck, shoulders, arms, hands, chest, legs, feet.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many fingers do you have on one hand?</p>
       <p><b>Answer:</b> <b>Five</b> fingers on each hand. Ten altogether.</p>`,

      [{ heading: 'Exercise 7.1 — Answer', items: [
          'How many fingers on one hand?',
          'How many toes on one foot?',
          'What do we walk with?',
          'What do we hold things with?',
          'Where is the stomach?'
        ]},
       { heading: 'Exercise 7.2 — Match', items: [
          'Legs → (walk)',
          'Hands → (hold)',
          'Eyes → (see)',
          'Ears → (hear)',
          'Lungs → (breathe)'
        ]},
       { heading: 'Exercise 7.3 — Draw and label', items: [
          'Draw yourself and label 6 body parts.'
        ]}],

      `<p><b>7.1:</b> 1. Five. 2. Five. 3. Legs. 4. Hands. 5. In the middle of the body.</p>
       <p><b>7.2:</b> Legs → walk; Hands → hold; Eyes → see; Ears → hear; Lungs → breathe.</p>`,

      [{ q: 'How many fingers on one hand?', a: ['5', 'five'] },
       { q: 'How many toes on one foot?', a: ['5', 'five'] },
       { q: 'What do you walk with?', a: ['legs', 'leg'] },
       { q: 'What do you hold with?', a: ['hands', 'hand'] }]),

    D(3, '🧼', 'Keeping Clean',
      'Demonstrate personal hygiene practices.',
      `<p class='big-emoji'>🧼 🦷 🚿</p>
       <p><b>Hygiene</b> means keeping our body clean. It helps us stay healthy. It also keeps us looking and smelling nice.</p>

       <h3>Ways to Keep Clean</h3>
       <ol>
         <li><b>Wash your hands</b> with soap before eating and after using the toilet.</li>
         <li><b>Brush your teeth</b> in the morning and before bed.</li>
         <li><b>Bath every day</b> with soap and water.</li>
         <li><b>Wash your hair</b> once or twice a week.</li>
         <li><b>Cut your nails</b> short every week.</li>
         <li><b>Wear clean clothes</b> every day.</li>
       </ol>

       <h3>Things We Use for Cleanliness</h3>
       <p>Soap, toothbrush, toothpaste, sponge, comb, towel, water, nail cutter.</p>

       <h3>Why Hygiene Matters</h3>
       <p>If we do not keep clean, <b>germs</b> (very tiny living things) grow on our body. They make us sick with diarrhoea, worms, and skin diseases.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pictures: (1) Washing hands with soap. (2) Brushing teeth. (3) Bathing. (4) Cutting nails. Write the caption below each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you brush your teeth twice a day?</p>
       <p><b>Answer:</b> To keep the teeth <b>strong and healthy</b> and to prevent tooth decay (holes in the teeth).</p>`,

      [{ heading: 'Exercise 8.1 — List hygiene habits', items: [
          'Write 5 things you do every day to keep clean.'
        ]},
       { heading: 'Exercise 8.2 — Answer', items: [
          'What do you use to wash your hands?',
          'How many times a day should you brush your teeth?',
          'What do you use to cut your nails?',
          'Why should you wear clean clothes?'
        ]},
       { heading: 'Exercise 8.3 — Draw the 4 cleanliness steps', items: [
          'Wash hands',
          'Brush teeth',
          'Bath',
          'Cut nails'
        ]}],

      `<p><b>8.2:</b> 1. Soap and water. 2. Twice a day (morning and night). 3. Nail cutter. 4. To keep clean and healthy.</p>`,

      [{ q: 'What do you use to wash your hands?', a: ['soap', 'soap and water'] },
       { q: 'How often should you brush your teeth?', a: ['twice a day', '2 times a day', 'morning and night'] },
       { q: 'What do you use to cut your nails?', a: ['nail cutter', 'nail clipper'] },
       { q: 'Why should we keep clean?', a: ['to stay healthy', 'to avoid germs', 'any'] }]),

    D(4, '🍎', 'Eating Well',
      'Know that eating good food helps us grow and stay healthy.',
      `<p class='big-emoji'>🍎 🥕 🥛 🍚</p>
       <p>Our body needs good food to grow, to work, and to fight sickness. This is called a <b>balanced diet</b>.</p>

       <h3>Food Groups</h3>
       <ul>
         <li><b>Energy foods</b> (carbohydrates): 🍚 rice, 🍞 bread, 🍠 yam, 🌽 maize, 🍌 plantain.</li>
         <li><b>Body-building foods</b> (proteins): 🫘 beans, 🥚 eggs, 🐟 fish, 🍗 chicken, 🥜 groundnuts.</li>
         <li><b>Protective foods</b> (vitamins): 🍊 oranges, 🥭 mangoes, 🍅 tomatoes, 🥬 vegetables.</li>
         <li><b>Milk and water</b>: for strong bones and clean blood.</li>
       </ul>

       <h3>Healthy Eating Habits</h3>
       <ul>
         <li>Eat 3 meals a day.</li>
         <li>Wash your hands before eating.</li>
         <li>Eat fruits and vegetables every day.</li>
         <li>Drink clean water — at least 4 to 6 cups.</li>
         <li>Do not eat too many sweets.</li>
       </ul>

       <h3>Unhealthy Foods</h3>
       <p>🍬 Sweets, 🥤 sugary drinks, 🍟 fried food — these should be eaten <b>only sometimes</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a plate. Divide it into 3 parts. In part 1 draw rice (energy). In part 2 draw beans (protein). In part 3 draw vegetables (vitamins). Label each part.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which food helps us grow strong?</p>
       <p><b>Answer:</b> <b>Beans, eggs, and fish</b> — they are proteins that build the body.</p>`,

      [{ heading: 'Exercise 9.1 — Sort foods', items: [
          'Sort into Energy / Body-building / Protective: rice, beans, oranges, yam, eggs, tomatoes, maize, fish, mangoes.'
        ]},
       { heading: 'Exercise 9.2 — Answer', items: [
          'What food gives us energy?',
          'What food helps us grow?',
          'Why is water good for us?',
          'Name one unhealthy food.'
        ]},
       { heading: 'Exercise 9.3 — Draw a balanced plate', items: [
          'Draw a plate with rice, beans, and vegetables.'
        ]}],

      `<p><b>9.1:</b> Energy: rice, yam, maize. Body-building: beans, eggs, fish. Protective: oranges, tomatoes, mangoes.</p>
       <p><b>9.2:</b> 1. Rice, yam, maize. 2. Beans, eggs, fish. 3. It keeps the body clean inside. 4. Sweets or fizzy drinks.</p>`,

      [{ q: 'Which food gives energy?', a: ['rice', 'yam', 'maize', 'bread', 'any'] },
       { q: 'Which food helps us grow?', a: ['beans', 'eggs', 'fish', 'chicken', 'any'] },
       { q: 'Which food protects us from sickness?', a: ['oranges', 'mangoes', 'vegetables', 'tomatoes', 'any'] },
       { q: 'How many meals should we eat a day?', a: ['3', 'three'] }]),

    D(5, '🎨', 'Body Poster',
      'Consolidate learning about the body and health.',
      `<p>Make a poster about the human body and how to keep it healthy.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Body"</b></li>
         <li>Left side: a big drawing of a person with labelled body parts.</li>
         <li>Right side: 4 pictures showing healthy habits (washing, brushing, eating fruit, drinking water).</li>
         <li>Bottom: write one sentence — <i>"I keep my body clean and healthy."</i></li>
       </ul>

       <h3>Colours</h3>
       <p>Any colours you like. Keep it neat.</p>

       <h3>Show and Tell</h3>
       <p>Show your poster to a family member. Point to each part and say its name.</p>`,

      [{ heading: 'Exercise 10.1 — Draw your poster', items: [
          'Title',
          'Body drawing with labels',
          '4 healthy habits',
          'One sentence'
        ]}],

      `<p>Parent should praise effort and correct pronunciation.</p>`,

      [{ q: 'Name 3 healthy habits.', a: ['washing', 'brushing', 'bathing', 'eating fruit', 'drinking water', 'any'] },
       { q: 'Name 3 body parts.', a: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // SUB-STRAND: ANIMALS (Diversity of Matter continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: 'Animals Around Us', days: [

    D(1, '🐕', 'Pets',
      'Know common pet animals and how to care for them.',
      `<p class='big-emoji'>🐕 🐈 🐦 🐟 🐰</p>
       <p><b>Pets</b> are animals we keep in our homes for company, love, and help. They become part of our family.</p>

       <h3>Common Pets</h3>
       <ul>
         <li>🐕 <b>Dog</b> — guards our home, plays with us.</li>
         <li>🐈 <b>Cat</b> — catches rats and mice.</li>
         <li>🐦 <b>Bird</b> — sings beautifully.</li>
         <li>🐟 <b>Fish</b> — swims in a bowl or pond.</li>
         <li>🐰 <b>Rabbit</b> — soft, quiet, and friendly.</li>
         <li>🐹 <b>Hamster</b> — small and lively.</li>
       </ul>

       <h3>How to Care for a Pet</h3>
       <ul>
         <li>Give it food every day.</li>
         <li>Give it clean water.</li>
         <li>Give it a clean, dry place to sleep.</li>
         <li>Take it to the vet when it is sick.</li>
         <li>Play with it and be gentle.</li>
         <li>Never hurt or abandon it.</li>
       </ul>

       <h3>Animal Sounds (Fun to Learn)</h3>
       <p>Dog says "woof!" · Cat says "meow!" · Bird says "tweet!" · Fish says nothing but blows bubbles.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 pets (dog, cat, bird) in a row. Write the name of each below the picture. Colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which pet catches rats?</p>
       <p><b>Answer:</b> A <b>cat</b> catches rats and mice.</p>`,

      [{ heading: 'Exercise 11.1 — Answer', items: [
          'Which pet says "woof"?',
          'Which pet says "meow"?',
          'Which pet lives in water?',
          'What do you give a pet every day?',
          'Which pet catches rats?'
        ]},
       { heading: 'Exercise 11.2 — Draw and label', items: [
          'Draw your favourite pet and write its name.'
        ]},
       { heading: 'Exercise 11.3 — Complete the sentences', items: [
          'A ______ guards our home.',
          'A ______ catches rats.',
          'A ______ lives in water.'
        ]}],

      `<p><b>11.1:</b> 1. Dog. 2. Cat. 3. Fish. 4. Food and water. 5. Cat.</p>
       <p><b>11.3:</b> dog; cat; fish</p>`,

      [{ q: 'Which pet says "woof"?', a: ['dog'] },
       { q: 'Which pet says "meow"?', a: ['cat'] },
       { q: 'Which pet lives in water?', a: ['fish'] },
       { q: 'Name one pet.', a: ['dog', 'cat', 'bird', 'fish', 'rabbit', 'any'] }]),

    D(2, '🐄', 'Farm Animals',
      'Know common farm animals and their products.',
      `<p class='big-emoji'>🐄 🐐 🐔 🐑 🐖</p>
       <p><b>Farm animals</b> are animals that are reared by people on a farm. Farmers take care of them.</p>

       <h3>Farm Animals and Their Products</h3>
       <ul>
         <li>🐄 <b>Cow</b> — milk, meat, and leather.</li>
         <li>🐐 <b>Goat</b> — milk and meat.</li>
         <li>🐔 <b>Hen</b> — eggs and meat.</li>
         <li>🐑 <b>Sheep</b> — wool and meat.</li>
         <li>🐖 <b>Pig</b> — meat.</li>
         <li>🐴 <b>Horse</b> — carries loads and people.</li>
         <li>🦆 <b>Duck</b> — eggs and meat.</li>
       </ul>

       <h3>Where Farm Animals Live</h3>
       <p>Cows live in kraals or pens. Hens live in coops. Goats live in pens. Pigs live in stys.</p>

       <h3>Sound of Farm Animals</h3>
       <p>Cow says "moo". Goat says "maa". Hen says "cluck". Sheep says "baa". Pig says "oink".</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 farm animals (cow, goat, hen, sheep) in a row. Write their products next to each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which animal gives us wool?</p>
       <p><b>Answer:</b> A <b>sheep</b> gives us wool. Wool is used to make warm clothes.</p>`,

      [{ heading: 'Exercise 12.1 — Match the animal to its product', items: [
          'Cow → (milk, meat)',
          'Hen → (eggs, meat)',
          'Sheep → (wool, meat)',
          'Goat → (milk, meat)'
        ]},
       { heading: 'Exercise 12.2 — Answer', items: [
          'Which animal gives us milk?',
          'Which animal gives us eggs?',
          'Which animal gives us wool?',
          'Which animal says "moo"?',
          'Where does a hen live?'
        ]},
       { heading: 'Exercise 12.3 — Draw and label', items: [
          'Draw 3 farm animals and write their products.'
        ]}],

      `<p><b>12.1:</b> Cow → milk, meat; Hen → eggs, meat; Sheep → wool, meat; Goat → milk, meat.</p>
       <p><b>12.2:</b> 1. Cow (or goat). 2. Hen. 3. Sheep. 4. Cow. 5. In a coop.</p>`,

      [{ q: 'Which animal gives us milk?', a: ['cow', 'goat'] },
       { q: 'Which animal gives us eggs?', a: ['hen', 'chicken', 'duck'] },
       { q: 'Which animal gives us wool?', a: ['sheep'] },
       { q: 'Which animal says "moo"?', a: ['cow'] }]),

    D(3, '🦁', 'Wild Animals',
      'Know common wild animals and where they live.',
      `<p class='big-emoji'>🦁 🐘 🐒 🦒 🦓</p>
       <p><b>Wild animals</b> live in the forest, the savanna, or in water. They find their own food and shelter.</p>

       <h3>Common Wild Animals in Ghana</h3>
       <ul>
         <li>🦁 <b>Lion</b> — king of the jungle; lives in savanna.</li>
         <li>🐘 <b>Elephant</b> — big animal with a long trunk; lives in the forest.</li>
         <li>🐒 <b>Monkey</b> — swings on trees; lives in the forest.</li>
         <li>🦒 <b>Giraffe</b> — has a very long neck.</li>
         <li>🦓 <b>Zebra</b> — has black and white stripes.</li>
         <li>🐍 <b>Snake</b> — long and legless; some are dangerous.</li>
         <li>🐊 <b>Crocodile</b> — lives in rivers.</li>
       </ul>

       <h3>What Wild Animals Eat</h3>
       <ul>
         <li><b>Carnivores</b> — eat meat (lion, tiger, snake).</li>
         <li><b>Herbivores</b> — eat plants (elephant, giraffe, zebra).</li>
         <li><b>Omnivores</b> — eat both (monkey).</li>
       </ul>

       <h3>Animal Homes</h3>
       <ul>
         <li>Birds — nest</li>
         <li>Fish — water</li>
         <li>Lion — cave or den</li>
         <li>Bee — hive</li>
         <li>Ant — anthill</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a forest scene with a lion, an elephant, and a monkey. Colour the trees green and the sky blue.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which wild animal has black and white stripes?</p>
       <p><b>Answer:</b> A <b>zebra</b>.</p>`,

      [{ heading: 'Exercise 13.1 — Answer', items: [
          'Where do wild animals live?',
          'Which wild animal is the king of the jungle?',
          'Which animal has a long neck?',
          'Which animal has black and white stripes?',
          'Which animal lives in water?'
        ]},
       { heading: 'Exercise 13.2 — Match the animal to its home', items: [
          'Bird → (nest)',
          'Fish → (water)',
          'Bee → (hive)',
          'Ant → (anthill)'
        ]},
       { heading: 'Exercise 13.3 — Draw and label', items: [
          'Draw 3 wild animals and label them.'
        ]}],

      `<p><b>13.1:</b> 1. Forest or savanna. 2. Lion. 3. Giraffe. 4. Zebra. 5. Crocodile (or fish).</p>
       <p><b>13.2:</b> Bird → nest; Fish → water; Bee → hive; Ant → anthill.</p>`,

      [{ q: 'Where do wild animals live?', a: ['forest', 'savanna', 'jungle', 'any'] },
       { q: 'Which animal has a long neck?', a: ['giraffe'] },
       { q: 'Which animal is the king of the jungle?', a: ['lion'] },
       { q: 'Which animal has black and white stripes?', a: ['zebra'] }]),

    D(4, '🦋', 'Insects',
      'Know common insects and their characteristics.',
      `<p class='big-emoji'>🦋 🐝 🐜 🦟 🐞</p>
       <p><b>Insects</b> are small animals with six legs. Most have wings and antennae (feelers).</p>

       <h3>Common Insects</h3>
       <ul>
         <li>🦋 <b>Butterfly</b> — has colourful wings; drinks nectar.</li>
         <li>🐝 <b>Bee</b> — makes honey; lives in hives.</li>
         <li>🐜 <b>Ant</b> — lives in groups; carries food.</li>
         <li>🦟 <b>Mosquito</b> — bites; can cause malaria.</li>
         <li>🐞 <b>Ladybug</b> — red with black spots.</li>
         <li>🦗 <b>Grasshopper</b> — jumps high.</li>
         <li>🪰 <b>Housefly</b> — carries dirt and germs.</li>
       </ul>

       <h3>Good Insects</h3>
       <ul>
         <li>🐝 Bees make honey.</li>
         <li>🦋 Butterflies help flowers.</li>
       </ul>

       <h3>Harmful Insects</h3>
       <ul>
         <li>🦟 Mosquitoes — cause malaria. Sleep under a net.</li>
         <li>🪰 Houseflies — carry germs. Cover food.</li>
       </ul>

       <h3>Protect Yourself from Harmful Insects</h3>
       <ul>
         <li>Sleep under a treated mosquito net.</li>
         <li>Always cover food.</li>
         <li>Keep the house clean.</li>
         <li>Do not play in dirty water.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 insects. Next to each, write "Good" or "Harmful". Colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do we protect ourselves from mosquitoes?</p>
       <p><b>Answer:</b> We sleep under a <b>treated mosquito net</b> and keep the compound clean (no stagnant water).</p>`,

      [{ heading: 'Exercise 14.1 — Answer', items: [
          'Which insect makes honey?',
          'Which insect causes malaria?',
          'How many legs does an insect have?',
          'Which insect has colourful wings?',
          'Which insect lives in a group?'
        ]},
       { heading: 'Exercise 14.2 — Sort good and harmful insects', items: [
          'Sort: bee, mosquito, butterfly, housefly, ant, grasshopper.'
        ]},
       { heading: 'Exercise 14.3 — Draw and label', items: [
          'Draw a bee and a mosquito. Write "Good" under the bee and "Harmful" under the mosquito.'
        ]}],

      `<p><b>14.1:</b> 1. Bee. 2. Mosquito. 3. Six. 4. Butterfly. 5. Ant (or bee).</p>
       <p><b>14.2:</b> Good: bee, butterfly, ant. Harmful: mosquito, housefly. (Grasshopper — neither.)</p>`,

      [{ q: 'Which insect makes honey?', a: ['bee'] },
       { q: 'Which insect causes malaria?', a: ['mosquito'] },
       { q: 'How many legs does an insect have?', a: ['6', 'six'] },
       { q: 'Which insect has colourful wings?', a: ['butterfly'] }]),

    D(5, '🎨', 'Animal Poster',
      'Consolidate learning about animals by creating a poster.',
      `<p>Make an "Animal Book" showing all the animal groups you have learned.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Page 1 (Cover): Title "My Animal Book" + your name.</li>
         <li>Page 2: Pets — dog, cat, bird.</li>
         <li>Page 3: Farm animals — cow, goat, hen.</li>
         <li>Page 4: Wild animals — lion, elephant, monkey.</li>
         <li>Page 5: Insects — butterfly, bee, ant.</li>
       </ul>

       <h3>How to Make It</h3>
       <p>Fold 3 sheets of paper in half. Staple them together. On each page, draw one group and write 2 sentences.</p>

       <h3>Show and Tell</h3>
       <p>Read your book aloud to your family. Show each page and say the animal names.</p>`,

      [{ heading: 'Exercise 15.1 — Make your animal book', items: [
          'Cover with title and name',
          'Page for pets',
          'Page for farm animals',
          'Page for wild animals',
          'Page for insects'
        ]}],

      `<p>Parent should praise each page. Award ⭐ for a completed book.</p>`,

      [{ q: 'What animal group is a dog in?', a: ['pet', 'pets'] },
       { q: 'What animal group is a lion in?', a: ['wild', 'wild animal'] },
       { q: 'What animal group is a bee in?', a: ['insect', 'insects'] },
       { q: 'What animal group is a cow in?', a: ['farm', 'farm animal'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // SUB-STRAND: PLANTS (Diversity of Matter continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: 'Plants Around Us', days: [

    D(1, '🌱', 'Seeds',
      'Know that seeds grow into new plants.',
      `<p class='big-emoji'>🌱 🫘 🌽 🥥</p>
       <p>A <b>seed</b> is a small part of a plant that can grow into a new plant. Seeds come from the flower of the parent plant.</p>

       <h3>Examples of Seeds</h3>
       <ul>
         <li>🫘 Bean seed</li>
         <li>🌽 Maize (corn) seed</li>
         <li>🥥 Coconut seed</li>
         <li>🍚 Rice grain</li>
         <li>🥜 Groundnut seed</li>
         <li>🌻 Sunflower seed</li>
       </ul>

       <h3>What a Seed Needs to Grow</h3>
       <ol>
         <li>💧 <b>Water</b></li>
         <li>☀️ <b>Sunlight</b></li>
         <li>🌱 <b>Soil</b></li>
         <li>🌬️ <b>Air</b></li>
       </ol>

       <h3>Stages of Growth</h3>
       <p>Seed → sprout → seedling → young plant → flowering plant → fruit with seeds.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes in a row. In each box, draw one stage of a bean plant growing: (1) seed, (2) sprout, (3) small plant, (4) big plant, (5) plant with flowers.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What will happen to a seed if you do not water it?</p>
       <p><b>Answer:</b> It will <b>not grow</b> and it will dry up.</p>`,

      [{ heading: 'Exercise 16.1 — Answer', items: [
          'Where do seeds come from?',
          'What does a seed need to grow?',
          'Name 3 seeds.',
          'What does a seed grow into?'
        ]},
       { heading: 'Exercise 16.2 — Order the stages', items: [
          'Put in order: seedling, seed, flowering plant, sprout.'
        ]},
       { heading: 'Exercise 16.3 — Draw', items: [
          'Draw a seed and a young plant.'
        ]}],

      `<p><b>16.1:</b> 1. From the flower. 2. Water, sunlight, soil, air. 3. Bean, maize, coconut. 4. A new plant.</p>
       <p><b>16.2:</b> seed → sprout → seedling → flowering plant</p>`,

      [{ q: 'What do seeds need to grow?', a: ['water', 'sunlight', 'soil', 'air', 'any'] },
       { q: 'What does a seed become?', a: ['plant', 'a plant'] },
       { q: 'Name a seed.', a: ['bean', 'maize', 'coconut', 'groundnut', 'any'] }]),

    D(2, '🌳', 'Trees',
      'Know that trees are useful to people and animals.',
      `<p class='big-emoji'>🌳 🥭 🥥 🌴</p>
       <p><b>Trees</b> are big plants with a woody stem (trunk). They live for many years. Trees give us many useful things.</p>

       <h3>Uses of Trees</h3>
       <ul>
         <li>🍎 <b>Fruit</b> — mango, orange, coconut, pawpaw.</li>
         <li>🪵 <b>Wood</b> — for building houses, making furniture, making charcoal.</li>
         <li>🌳 <b>Shade</b> — for resting under on a hot day.</li>
         <li>💨 <b>Clean air</b> — trees take in carbon dioxide and give out oxygen.</li>
         <li>🌧️ <b>Rainfall</b> — trees help bring rain.</li>
         <li>🏠 <b>Homes</b> — birds, monkeys, and insects live in trees.</li>
         <li>💊 <b>Medicine</b> — from the bark and leaves of some trees.</li>
       </ul>

       <h3>Common Trees in Ghana</h3>
       <p>🥭 Mango tree, 🥥 coconut tree, 🍊 orange tree, 🌴 palm tree, 🌳 odum tree, 🍫 cocoa tree.</p>

       <h3>Why We Should Not Cut Trees Carelessly</h3>
       <ul>
         <li>Cutting too many trees leads to <b>desertification</b> (land turning into desert).</li>
         <li>It also causes <b>soil erosion</b> (soil being washed away by rain).</li>
         <li>It reduces rainfall.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big tree. Around it, draw 4 things we get from trees: fruit, wood, shade, and a bird's nest.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we need trees?</p>
       <p><b>Answer:</b> We need trees for <b>fruit, wood, shade, and clean air</b>. Trees also bring rain.</p>`,

      [{ heading: 'Exercise 17.1 — List uses of trees', items: [
          'Write 5 things we get from trees.'
        ]},
       { heading: 'Exercise 17.2 — Answer', items: [
          'Which tree gives us coconut?',
          'What do trees give us to breathe?',
          'Where do birds live?',
          'Why should we not cut trees carelessly?'
        ]},
       { heading: 'Exercise 17.3 — Draw and label', items: [
          'Draw a tree and label its parts.'
        ]}],

      `<p><b>17.1:</b> Fruit, wood, shade, clean air, homes for animals. (Any 5.)</p>
       <p><b>17.2:</b> 1. Coconut tree. 2. Oxygen (clean air). 3. In trees. 4. Because it causes desertification and reduces rainfall.</p>`,

      [{ q: 'Name 3 things we get from trees.', a: ['fruit', 'wood', 'shade', 'any'] },
       { q: 'Which gas do trees give us?', a: ['oxygen', 'clean air'] },
       { q: 'Which tree gives us coconut?', a: ['coconut tree', 'coconut'] }]),

    D(3, '🌸', 'Flowers',
      'Know that flowers produce seeds and fruits.',
      `<p class='big-emoji'>🌸 🌺 🌻 🌼</p>
       <p><b>Flowers</b> are the colourful parts of plants. They are not just beautiful — they make <b>seeds</b> and <b>fruits</b>.</p>

       <h3>Parts of a Flower</h3>
       <ul>
         <li><b>Petals</b> — colourful leaves that attract insects.</li>
         <li><b>Stamens</b> — the male part; produce pollen.</li>
         <li><b>Pistil</b> — the female part; receives pollen.</li>
         <li><b>Sepals</b> — small green leaves that protect the flower bud.</li>
       </ul>

       <h3>Why Flowers are Important</h3>
       <ul>
         <li>They make seeds.</li>
         <li>They make fruits.</li>
         <li>They attract bees and butterflies (which help pollination).</li>
         <li>They beautify our homes and gardens.</li>
         <li>Some flowers are used for medicine (hibiscus).</li>
       </ul>

       <h3>Common Flowers in Ghana</h3>
       <p>🌺 Hibiscus (sobolo), 🌻 sunflower, 🌼 marigold, 🌸 frangipani, 💜 bougainvillea.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big flower. Label: petal, stamen, pistil, sepal. Colour the petals red or yellow.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do flowers make?</p>
       <p><b>Answer:</b> Flowers make <b>seeds</b> and <b>fruits</b>.</p>`,

      [{ heading: 'Exercise 18.1 — Answer', items: [
          'What do flowers make?',
          'Which part of the flower is colourful?',
          'Name 3 flowers you know.',
          'Which insect helps flowers?'
        ]},
       { heading: 'Exercise 18.2 — Draw and label', items: [
          'Draw a flower and label its parts.'
        ]}],

      `<p><b>18.1:</b> 1. Seeds and fruits. 2. Petals. 3. Hibiscus, sunflower, marigold. 4. Bee (or butterfly).</p>`,

      [{ q: 'What do flowers make?', a: ['seeds', 'fruits', 'seed and fruit'] },
       { q: 'Which part is colourful?', a: ['petal', 'petals'] },
       { q: 'Name a flower.', a: ['hibiscus', 'sunflower', 'marigold', 'rose', 'any'] }]),

    D(4, '💧', 'Watering Plants',
      'Demonstrate how to water and care for plants.',
      `<p class='big-emoji'>💧 🚿 🌱</p>
       <p>Plants need water to grow. If a plant does not get water, it will wither and die. Watering is one of the most important jobs of a gardener or farmer.</p>

       <h3>How to Water Plants</h3>
       <ol>
         <li>Use a watering can or a small bucket.</li>
         <li>Water the soil around the plant (not the leaves).</li>
         <li>Water in the morning or evening (not at noon — the water will evaporate).</li>
         <li>Do not pour too much water — the roots can rot.</li>
         <li>Check the soil — if dry, water; if wet, wait.</li>
       </ol>

       <h3>What Happens to a Plant Without Water?</h3>
       <ul>
         <li>Day 1–2: Leaves droop.</li>
         <li>Day 3–4: Leaves turn yellow.</li>
         <li>Day 5–7: Leaves dry and the plant dies.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 cups with plants: (1) A plant with plenty of water — healthy and green. (2) A plant with little water — drooping. (3) A plant with no water — dry and brown.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you water plants in the morning or evening?</p>
       <p><b>Answer:</b> Because at noon the sun is very hot, and the water will <b>evaporate</b> before the plant can use it.</p>`,

      [{ heading: 'Exercise 19.1 — Answer', items: [
          'What will happen if you don\'t water a plant?',
          'When is the best time to water plants?',
          'What do you use to water plants?',
          'What happens to a plant after 5 days without water?'
        ]},
       { heading: 'Exercise 19.2 — Activity', items: [
          'Get a bean seed and a cup of soil.',
          'Plant the seed and water it every morning.',
          'Draw what you see each day for 5 days.'
        ]}],

      `<p><b>19.1:</b> 1. It will die. 2. Morning or evening. 3. A watering can or a small bucket. 4. It dies.</p>`,

      [{ q: 'How often should you water plants?', a: ['every day', 'daily', 'morning and evening'] },
       { q: 'When is the best time?', a: ['morning', 'evening', 'morning or evening'] },
       { q: 'What happens if you don\'t water a plant?', a: ['it dies', 'it wilts', 'it dries up'] }]),

    D(5, '🎨', 'Plant Poster',
      'Consolidate learning about plants.',
      `<p>Make a "Plant Poster" showing everything you have learned about plants.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"All About Plants"</b></li>
         <li>Top: a big plant with all parts labelled — root, stem, leaf, flower, fruit, seed.</li>
         <li>Middle: a seed growing into a plant (3 stages).</li>
         <li>Bottom: write "Plants need: water, sunlight, soil, air."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster to your family. Explain each part.</p>`,

      [{ heading: 'Exercise 20.1 — Draw your poster', items: [
          'Title',
          'Labelled plant',
          'Stages of growth',
          'What plants need'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What are the parts of a plant?', a: ['root', 'stem', 'leaf', 'flower', 'fruit', 'seed', 'any'] },
       { q: 'What do plants need to grow?', a: ['water', 'sunlight', 'soil', 'air', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND 2: CYCLES
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: 'Weather', days: [

    D(1, '☀️', 'Sunny',
      'Know the characteristics of a sunny day and how it affects us.',
      `<p class='big-emoji'>☀️ 🌞 🕶️</p>
       <p>A <b>sunny day</b> is a day when the sun shines brightly in the sky. There are few or no clouds. The sun gives us light and heat.</p>

       <h3>Characteristics of a Sunny Day</h3>
       <ul>
         <li>The sky is blue and clear.</li>
         <li>The sun is very bright.</li>
         <li>It is hot.</li>
         <li>There are few clouds, or none at all.</li>
       </ul>

       <h3>What We Do on a Sunny Day</h3>
       <ul>
         <li>Wear light clothes (shorts, t-shirts).</li>
         <li>Wear a hat or a cap to protect the head.</li>
         <li>Drink plenty of water.</li>
         <li>Play outside.</li>
         <li>Dry our clothes outside.</li>
       </ul>

       <h3>Uses of Sunlight</h3>
       <ul>
         <li>Plants use sunlight to make food.</li>
         <li>We dry food and clothes in the sun.</li>
         <li>Sunlight gives us vitamin D (good for bones).</li>
         <li>Solar panels use sunlight to make electricity.</li>
       </ul>

       <h3>Warning!</h3>
       <p>Do not look directly at the sun — it can damage your eyes. Stay in the shade if it is too hot.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a sunny day. Draw the sun in the corner, a boy wearing a hat and shorts, and a tree with a shadow beneath it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you wear on a sunny day?</p>
       <p><b>Answer:</b> I wear <b>light clothes</b> and a <b>hat</b>, and I drink plenty of <b>water</b>.</p>`,

      [{ heading: 'Exercise 21.1 — Answer', items: [
          'What does the sun give us?',
          'What do we wear on a sunny day?',
          'What should we drink on a sunny day?',
          'Name 2 things we do on a sunny day.'
        ]},
       { heading: 'Exercise 21.2 — Draw', items: [
          'Draw a sunny day and colour it.'
        ]}],

      `<p><b>21.1:</b> 1. Light and heat. 2. Light clothes and a hat. 3. Water. 4. Play outside; dry clothes.</p>`,

      [{ q: 'What does the sun give us?', a: ['light', 'heat', 'light and heat'] },
       { q: 'What do you wear in the sun?', a: ['hat', 'cap', 'light clothes', 'any'] },
       { q: 'What do you drink in the sun?', a: ['water'] }]),

    D(2, '🌧️', 'Rainy',
      'Know the characteristics of a rainy day and how it affects us.',
      `<p class='big-emoji'>🌧️ ☔ 🌂</p>
       <p>A <b>rainy day</b> is a day when water falls from the clouds. This is called <b>rain</b>. Rain is very important for plants and animals.</p>

       <h3>Characteristics of a Rainy Day</h3>
       <ul>
         <li>The sky is dark and cloudy.</li>
         <li>Rain falls from the clouds.</li>
         <li>It is cool (not hot).</li>
         <li>Sometimes thunder and lightning happen.</li>
       </ul>

       <h3>What We Do on a Rainy Day</h3>
       <ul>
         <li>Use an umbrella.</li>
         <li>Wear a raincoat.</li>
         <li>Wear boots to keep feet dry.</li>
         <li>Stay indoors if there is thunder.</li>
       </ul>

       <h3>Why Rain is Important</h3>
       <ul>
         <li>Plants need rain to grow.</li>
         <li>Animals drink rainwater.</li>
         <li>Rain fills our rivers and wells.</li>
         <li>Rain makes the air cool and fresh.</li>
       </ul>

       <h3>Warning!</h3>
       <p>Do not play in the rain when there is <b>thunder and lightning</b>. Lightning can kill. Do not walk in floodwater.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a rainy day. Draw dark clouds, rain falling, a person holding an umbrella, and a puddle on the ground.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does rain come from?</p>
       <p><b>Answer:</b> Rain comes from <b>clouds</b>.</p>`,

      [{ heading: 'Exercise 22.1 — Answer', items: [
          'Where does rain come from?',
          'What do you use when it is raining?',
          'What do you wear on your feet in the rain?',
          'Why is rain important?'
        ]},
       { heading: 'Exercise 22.2 — Draw', items: [
          'Draw a rainy day with an umbrella.'
        ]}],

      `<p><b>22.1:</b> 1. Clouds. 2. An umbrella. 3. Boots. 4. Plants need it; it fills rivers.</p>`,

      [{ q: 'What do you use in the rain?', a: ['umbrella'] },
       { q: 'Where does rain come from?', a: ['clouds'] },
       { q: 'What do you wear on your feet?', a: ['boots', 'shoes'] },
       { q: 'Why is rain important?', a: ['plants need it', 'fills rivers', 'any'] }]),

    D(3, '💨', 'Windy',
      'Know that wind is moving air and its effects.',
      `<p class='big-emoji'>💨 🪁 🍃</p>
       <p><b>Wind</b> is air that is moving. When air moves, we call it wind. We cannot see wind, but we can feel it and see what it does.</p>

       <h3>What Wind Can Do</h3>
       <ul>
         <li>🍃 Blow leaves and dust.</li>
         <li>🪁 Fly kites.</li>
         <li>🌾 Bend tall grasses and trees.</li>
         <li>⛵ Push sailboats on the sea.</li>
         <li>🏠 Blow off roofs (if very strong).</li>
       </ul>

       <h3>Good and Bad Effects of Wind</h3>
       <ul>
         <li><b>Good:</b> Wind helps dry clothes; it helps winnow rice and beans; windmills make electricity.</li>
         <li><b>Bad:</b> Strong wind can blow roofs off houses and destroy farms (storm).</li>
       </ul>

       <h3>What to Do on a Windy Day</h3>
       <ul>
         <li>Fly a kite (fun!).</li>
         <li>Wear a jacket.</li>
         <li>Hold your hat so it does not blow off.</li>
         <li>Close windows and doors if it is very windy.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a windy day. Draw a tree bending sideways, leaves flying, and a child flying a kite.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is wind?</p>
       <p><b>Answer:</b> Wind is <b>moving air</b>.</p>`,

      [{ heading: 'Exercise 23.1 — Answer', items: [
          'What is wind?',
          'Name 3 things wind can do.',
          'What can you fly on a windy day?',
          'Why do farmers like wind?'
        ]},
       { heading: 'Exercise 23.2 — Draw', items: [
          'Draw a tree bending in the wind.'
        ]}],

      `<p><b>23.1:</b> 1. Moving air. 2. Blow leaves; fly kites; dry clothes. 3. A kite. 4. It helps winnow rice and beans.</p>`,

      [{ q: 'What is wind?', a: ['moving air'] },
       { q: 'What can you fly on a windy day?', a: ['kite'] },
       { q: 'What moves in the wind?', a: ['leaves', 'trees', 'dust', 'any'] }]),

    D(4, '⛅', 'Cloudy',
      'Know the characteristics of a cloudy day.',
      `<p class='big-emoji'>☁️ ⛅ 🌥️</p>
       <p>A <b>cloudy day</b> is a day when there are many clouds in the sky. The sun is hidden behind the clouds. It may or may not rain.</p>

       <h3>Characteristics of a Cloudy Day</h3>
       <ul>
         <li>The sky is grey or white.</li>
         <li>The sun is hidden.</li>
         <li>It is not too hot and not too cold.</li>
         <li>It may rain.</li>
       </ul>

       <h3>Types of Clouds</h3>
       <ul>
         <li>☁️ <b>White fluffy clouds</b> — fine weather.</li>
         <li>🌫️ <b>Grey clouds</b> — it might rain.</li>
         <li>⛈️ <b>Dark clouds</b> — heavy rain or storm coming.</li>
       </ul>

       <h3>What We Do on a Cloudy Day</h3>
       <ul>
         <li>Go outside and play.</li>
         <li>Carry an umbrella just in case it rains.</li>
         <li>Watch the shapes of clouds (fun!).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a cloudy day. Draw white clouds and grey clouds in the sky. Draw a boy or girl looking up at the sky.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What colour is a cloudy sky?</p>
       <p><b>Answer:</b> A cloudy sky is <b>grey</b> or <b>white</b>.</p>`,

      [{ heading: 'Exercise 24.1 — Answer', items: [
          'What colour is a cloudy sky?',
          'What might happen on a cloudy day?',
          'Name the type of cloud that brings rain.',
          'Should you carry an umbrella on a cloudy day?'
        ]},
       { heading: 'Exercise 24.2 — Draw', items: [
          'Draw a cloudy sky with 3 different clouds.'
        ]}],

      `<p><b>24.1:</b> 1. Grey or white. 2. It might rain. 3. Dark or grey clouds. 4. Yes.</p>`,

      [{ q: 'What colour is a cloudy sky?', a: ['grey', 'gray', 'white'] },
       { q: 'What might happen on a cloudy day?', a: ['rain', 'it might rain'] },
       { q: 'Which cloud brings rain?', a: ['dark cloud', 'grey cloud', 'any'] }]),

    D(5, '🎨', 'Weather Poster',
      'Consolidate learning about weather.',
      `<p>Make a weather poster or a weather chart for the week.</p>

       <h3>Option A — Weather Poster</h3>
       <ul>
         <li>Divide the paper into 4 quarters.</li>
         <li>In each quarter, draw one type of weather: sunny, rainy, windy, cloudy.</li>
         <li>Write the name under each drawing.</li>
       </ul>

       <h3>Option B — Weather Chart</h3>
       <ul>
         <li>Make a table with 7 rows (one for each day of the week).</li>
         <li>Each day, draw the weather in the box.</li>
         <li>At the end of the week, count how many sunny, rainy, windy, and cloudy days.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster or chart to your family and explain the weather for each day.</p>`,

      [{ heading: 'Exercise 25.1 — Draw your weather poster', items: [
          'Sunny',
          'Rainy',
          'Windy',
          'Cloudy'
        ]},
       { heading: 'Exercise 25.2 — Or make a weekly chart', items: [
          'Monday: ___',
          'Tuesday: ___',
          'Wednesday: ___',
          'Thursday: ___',
          'Friday: ___',
          'Saturday: ___',
          'Sunday: ___'
        ]}],

      `<p>⭐ for effort and completeness.</p>`,

      [{ q: 'Name 4 types of weather.', a: ['sunny', 'rainy', 'windy', 'cloudy'] },
       { q: 'Which weather makes you wet?', a: ['rainy', 'rain'] },
       { q: 'Which weather makes you hot?', a: ['sunny', 'sun'] }])
  ]},

  { week: 6, theme: 'Water', days: [

    D(1, '💧', 'Water Around Us',
      'Identify sources and uses of water.',
      `<p class='big-emoji'>💧 🌊 🚰 🌧️</p>
       <p><b>Water</b> is one of the most important things on Earth. All living things need water to live.</p>

       <h3>Sources of Water</h3>
       <ul>
         <li>🌧️ <b>Rain</b> — water falls from the sky.</li>
         <li>🌊 <b>Rivers</b> — large streams of water that flow to the sea.</li>
         <li>🏞️ <b>Lakes</b> — large bodies of water surrounded by land.</li>
         <li>🚰 <b>Taps</b> — water from pipes in our homes.</li>
         <li>🌊 <b>Sea</b> — salty water.</li>
         <li>⛲ <b>Wells</b> — deep holes that give water from the ground.</li>
         <li>💦 <b>Streams</b> — small rivers.</li>
       </ul>

       <h3>Uses of Water</h3>
       <ul>
         <li>🍽️ Drinking and cooking</li>
         <li>🛁 Bathing and washing</li>
         <li>👕 Washing clothes</li>
         <li>🌱 Watering plants</li>
         <li>🐄 Giving to animals</li>
         <li>🚿 Cleaning the house</li>
         <li>⚓ Transport (boats and ships)</li>
         <li>⚡ Electricity (hydro power)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 boxes showing 4 uses of water: drinking, bathing, cooking, watering plants.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 sources of water.</p>
       <p><b>Answer:</b> Rain, rivers, and wells.</p>`,

      [{ heading: 'Exercise 26.1 — Answer', items: [
          'Name 3 sources of water.',
          'Name 4 uses of water.',
          'Why is water important?'
        ]},
       { heading: 'Exercise 26.2 — Draw and label', items: [
          'Draw 3 sources of water.'
        ]}],

      `<p><b>26.1:</b> 1. Rain, rivers, wells (any 3). 2. Drinking, cooking, bathing, watering. 3. All living things need it.</p>`,

      [{ q: 'Where do we get water?', a: ['river', 'rain', 'tap', 'well', 'lake', 'any'] },
       { q: 'What do we use water for?', a: ['drinking', 'cooking', 'bathing', 'any'] },
       { q: 'Name 3 sources of water.', a: ['rain', 'river', 'well', 'any'] }]),

    D(2, '🥤', 'Drinking Water',
      'Know the qualities of good drinking water and how to make water clean.',
      `<p class='big-emoji'>🥤 💧 ✅</p>
       <p>Not all water is safe to drink. <b>Good drinking water</b> is clean, has no colour, no smell, and no germs.</p>

       <h3>Qualities of Good Drinking Water</h3>
       <ul>
         <li>No colour.</li>
         <li>No smell.</li>
         <li>No particles (dirt).</li>
         <li>No germs.</li>
         <li>Cool and fresh.</li>
       </ul>

       <h3>How to Make Water Clean (Purification)</h3>
       <ol>
         <li><b>Boiling</b> — heat water until it bubbles for 5 minutes. Kills germs.</li>
         <li><b>Filtering</b> — pass water through a clean cloth or filter to remove dirt.</li>
         <li><b>Chlorination</b> — add a small amount of chlorine (from the shop) to kill germs.</li>
         <li><b>Solar disinfection</b> — put water in a clear bottle in the sun for one day.</li>
       </ol>

       <h3>What Happens if We Drink Dirty Water?</h3>
       <p>We can get:</p>
       <ul>
         <li>🤢 Diarrhoea</li>
         <li>🤮 Vomiting</li>
         <li>🦠 Cholera</li>
         <li>🪱 Worms</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 glasses: one with clean water (clear, blue) and one with dirty water (brown, murky). Write "Good" under the clean one and "Bad" under the dirty one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do we make water safe to drink?</p>
       <p><b>Answer:</b> We <b>boil</b> the water, or <b>filter</b> it, or add <b>chlorine</b>.</p>`,

      [{ heading: 'Exercise 27.1 — Answer', items: [
          'What colour is good drinking water?',
          'What should we do to water before drinking it?',
          'Name 3 diseases we can get from dirty water.',
          'What is chlorination?'
        ]},
       { heading: 'Exercise 27.2 — Draw', items: [
          'Draw a pot of boiling water and a glass of clean water.'
        ]}],

      `<p><b>27.1:</b> 1. No colour (colourless). 2. Boil it. 3. Diarrhoea, cholera, worms. 4. Adding chlorine to kill germs.</p>`,

      [{ q: 'What happens if you drink dirty water?', a: ['you get sick', 'diarrhoea', 'sick'] },
       { q: 'How do we make water clean?', a: ['boil', 'filter', 'chlorine', 'any'] },
       { q: 'What colour is good drinking water?', a: ['no colour', 'colourless', 'clear'] }]),

    D(3, '🚰', 'Saving Water',
      'Know that water is precious and we must not waste it.',
      `<p class='big-emoji'>🚰 💧 🌍</p>
       <p>Water is a precious resource. But not everyone has enough. Many villages in Ghana walk long distances to fetch water. We must not waste it.</p>

       <h3>Why Water is Precious</h3>
       <ul>
         <li>Only a small amount of water on Earth is <b>fresh</b> (not salty).</li>
         <li>In the dry season, water becomes scarce.</li>
         <li>Fetching water takes time and energy.</li>
         <li>Plants, animals, and people all need it.</li>
       </ul>

       <h3>How to Save Water</h3>
       <ol>
         <li>Turn off the tap when not in use.</li>
         <li>Fix leaking taps.</li>
         <li>Use a bucket to bathe instead of a shower.</li>
         <li>Reuse water for watering plants.</li>
         <li>Report burst pipes.</li>
         <li>Collect rainwater for later use.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 pictures: (1) A child leaving the tap running — cross it out with red. (2) A child closing the tap — put a green tick.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we save water?</p>
       <p><b>Answer:</b> Because clean water is <b>limited</b> and many people do not have enough.</p>`,

      [{ heading: 'Exercise 28.1 — Answer', items: [
          'Why should we save water?',
          'Name 3 ways to save water.',
          'What should you do if you see a leaking tap?',
          'What can we do with rainwater?'
        ]},
       { heading: 'Exercise 28.2 — Draw', items: [
          'Draw a poster that says "Save Water!"'
        ]}],

      `<p><b>28.1:</b> 1. Because clean water is limited. 2. Turn off tap; fix leaks; use a bucket. 3. Report it. 4. Collect and use it for plants or cleaning.</p>`,

      [{ q: 'What should you do with the tap?', a: ['turn it off', 'close it'] },
       { q: 'Why save water?', a: ['it is precious', 'not enough', 'limited', 'any'] },
       { q: 'Name one way to save water.', a: ['turn off tap', 'fix leaks', 'any'] }]),

    D(4, '🌊', 'Water Cycle',
      'Know that water moves in a cycle.',
      `<p class='big-emoji'>🌊 ☀️ ☁️ 🌧️</p>
       <p>Water is always moving. It goes up into the sky, forms clouds, falls as rain, and comes back to rivers and seas. This is called the <b>water cycle</b>.</p>

       <h3>Stages of the Water Cycle</h3>
       <ol>
         <li><b>Evaporation</b> — The sun heats water in rivers and seas. Water turns into vapour (gas) and goes up into the sky. ☀️ → 💧 → 🌬️</li>
         <li><b>Condensation</b> — High up, the air is cold. The vapour turns back into tiny drops and forms clouds. 🌬️ → ☁️</li>
         <li><b>Precipitation</b> — When the clouds are heavy, the drops fall as rain. ☁️ → 🌧️</li>
         <li><b>Collection</b> — The rain falls into rivers, lakes, and seas — and the cycle begins again. 🌧️ → 🌊</li>
       </ol>

       <h3>Why the Water Cycle Matters</h3>
       <ul>
         <li>It gives us fresh water to drink.</li>
         <li>It waters our crops.</li>
         <li>It keeps rivers and lakes full.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the water cycle as a big circle:
       (1) A sun shining on a river. (2) Arrows going up — evaporation.
       (3) Clouds in the sky — condensation.
       (4) Rain falling — precipitation.
       (5) Water flowing back to the river — collection.
       Add arrows to show the cycle.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is evaporation?</p>
       <p><b>Answer:</b> <b>Evaporation</b> is when water turns into vapour (gas) because of heat from the sun.</p>`,

      [{ heading: 'Exercise 29.1 — Answer', items: [
          'What is evaporation?',
          'What is condensation?',
          'What is precipitation?',
          'Why is the water cycle important?'
        ]},
       { heading: 'Exercise 29.2 — Draw the water cycle', items: [
          'Draw and label: sun, river, cloud, rain.'
        ]}],

      `<p><b>29.1:</b> 1. Water turning into vapour. 2. Vapour turning into clouds. 3. Rain falling from clouds. 4. It gives us fresh water.</p>`,

      [{ q: 'Where does rain come from?', a: ['clouds'] },
       { q: 'Where does water go after rain?', a: ['rivers', 'ground', 'seas', 'any'] },
       { q: 'What is evaporation?', a: ['water turning into vapour', 'water turns to vapour', 'any'] }]),

    D(5, '🎨', 'Water Poster',
      'Consolidate learning about water.',
      `<p>Make a "Water" poster or a "Save Water" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Water is Life"</b> or <b>"Save Water!"</b></li>
         <li>Top: draw 3 sources of water (rain, river, well).</li>
         <li>Middle: draw 3 uses of water (drinking, cooking, watering plants).</li>
         <li>Bottom: draw the water cycle (sun, cloud, rain, river).</li>
         <li>Write one sentence: <i>"Water is precious — do not waste it."</i></li>
       </ul>

       <h3>Colours</h3>
       <p>Blue for water, yellow for the sun, green for plants, brown for soil.</p>

       <h3>Show and Tell</h3>
       <p>Show your poster to your family. Tell them 3 ways to save water.</p>`,

      [{ heading: 'Exercise 30.1 — Draw your water poster', items: [
          'Title',
          '3 sources',
          '3 uses',
          'Water cycle',
          'One sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 uses of water.', a: ['drinking', 'cooking', 'bathing', 'watering', 'any'] },
       { q: 'Name 3 sources of water.', a: ['rain', 'river', 'well', 'lake', 'any'] },
       { q: 'Why should we save water?', a: ['it is precious', 'limited', 'any'] }])
  ]},

  { week: 7, theme: 'Air', days: [

    D(1, '💨', 'Air Around Us',
      'Know that air is present everywhere around us.',
      `<p class='big-emoji'>💨 🌬️ 🎈</p>
       <p><b>Air</b> is all around us. We cannot see it, but we can feel it and we can see what it does. All living things need air to live.</p>

       <h3>How We Know Air Exists</h3>
       <ul>
         <li>We feel air when the wind blows.</li>
         <li>We can blow up a balloon — the balloon fills with air.</li>
         <li>We can feel air when we wave a fan.</li>
         <li>Air bubbles come out of water when we blow into it with a straw.</li>
       </ul>

       <h3>What Uses Air?</h3>
       <ul>
         <li>👦 People (we breathe air)</li>
         <li>🐕 Animals (they breathe air)</li>
         <li>🌱 Plants (they use air to make food)</li>
         <li>🔥 Fire (needs air to burn)</li>
         <li>🪁 Kites (they need air to fly)</li>
         <li>⛵ Sailboats (air pushes the sails)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 things that use air: a person breathing, a bird, a kite, and a balloon. Write "Air" next to each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Can you see air?</p>
       <p><b>Answer:</b> No, I cannot see air, but I can <b>feel</b> it when the wind blows or when I wave a fan.</p>`,

      [{ heading: 'Exercise 31.1 — Answer', items: [
          'Can you see air?',
          'Can you feel air?',
          'Name 3 things that need air.',
          'What fills a balloon?'
        ]},
       { heading: 'Exercise 31.2 — Draw', items: [
          'Draw a balloon filled with air.'
        ]}],

      `<p><b>31.1:</b> 1. No. 2. Yes. 3. People, animals, plants (any 3). 4. Air.</p>`,

      [{ q: 'Can you see air?', a: ['no'] },
       { q: 'Can you feel air?', a: ['yes'] },
       { q: 'Name 3 things that need air.', a: ['people', 'animals', 'plants', 'any'] }]),

    D(2, '🌬️', 'Breathing',
      'Know that living things need air to breathe.',
      `<p class='big-emoji'>🌬️ 👃 👄</p>
       <p><b>Breathing</b> means taking air into the body and letting it out again. We need to breathe to live. If we do not breathe for a few minutes, we die.</p>

       <h3>How We Breathe</h3>
       <ol>
         <li>We <b>breathe in</b> air through the <b>nose</b> or the <b>mouth</b>.</li>
         <li>The air goes down a tube to the <b>lungs</b>.</li>
         <li>We <b>breathe out</b> the used air.</li>
       </ol>

       <h3>Breathing In and Breathing Out</h3>
       <ul>
         <li>We breathe <b>in oxygen</b> — good for the body.</li>
         <li>We breathe <b>out carbon dioxide</b> — bad for the body.</li>
         <li>Plants do the opposite: they take in carbon dioxide and give out oxygen.</li>
       </ul>

       <h3>How Many Times Do We Breathe?</h3>
       <p>A child breathes about 20 times every minute. That is 1,200 times every hour! Breathing happens without us thinking about it.</p>

       <h3>Keeping Our Lungs Healthy</h3>
       <ul>
         <li>Do not smoke (or stay near smoke).</li>
         <li>Do not breathe in dust.</li>
         <li>Exercise to make the lungs strong.</li>
         <li>Cover your nose and mouth when you cough.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a boy or girl. Draw arrows showing air going in through the nose and into the lungs. Colour the lungs red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do we breathe in?</p>
       <p><b>Answer:</b> We breathe in <b>oxygen</b> (clean air).</p>`,

      [{ heading: 'Exercise 32.1 — Answer', items: [
          'What do we breathe in?',
          'What do we breathe out?',
          'Which part of the body holds air?',
          'How many times a minute do we breathe?'
        ]},
       { heading: 'Exercise 32.2 — Draw and label', items: [
          'Draw the nose, windpipe, and lungs.'
        ]}],

      `<p><b>32.1:</b> 1. Oxygen. 2. Carbon dioxide. 3. The lungs. 4. About 20 times.</p>`,

      [{ q: 'What do we breathe in?', a: ['air', 'oxygen'] },
       { q: 'What do we breathe out?', a: ['air', 'carbon dioxide'] },
       { q: 'Which part holds air?', a: ['lungs', 'lung'] }]),

    D(3, '🪁', 'Wind',
      'Know that wind is moving air and its uses.',
      `<p class='big-emoji'>🪁 💨 🍃</p>
       <p><b>Wind</b> is moving air. When air moves, we call it wind. Wind is useful in many ways.</p>

       <h3>Uses of Wind</h3>
       <ul>
         <li>🪁 Flying kites.</li>
         <li>🌾 Winnowing rice and beans — the wind blows away the husks.</li>
         <li>⛵ Sailing boats.</li>
         <li>💡 Windmills — make electricity.</li>
         <li>👕 Drying clothes.</li>
         <li>🌬️ Cooling us on a hot day.</li>
       </ul>

       <h3>Strong Winds Can Be Dangerous</h3>
       <ul>
         <li>🌪️ They can blow off roofs of houses.</li>
         <li>🌾 They can destroy farms.</li>
         <li>⛵ They can capsize boats.</li>
         <li>🌳 They can uproot trees.</li>
       </ul>

       <h3>Fun Fact!</h3>
       <p>Wind can be measured with an instrument called an <b>anemometer</b>. Wind direction is shown by a <b>weather vane</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a child flying a kite in a windy day. Show the wind blowing the kite high. Draw a tree bending.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 uses of wind.</p>
       <p><b>Answer:</b> Flying kites, sailing boats, and drying clothes.</p>`,

      [{ heading: 'Exercise 33.1 — Answer', items: [
          'What is wind?',
          'Name 3 uses of wind.',
          'Name 2 dangers of strong wind.',
          'What instrument measures wind?'
        ]},
       { heading: 'Exercise 33.2 — Draw', items: [
          'Draw a windmill and a kite.'
        ]}],

      `<p><b>33.1:</b> 1. Moving air. 2. Fly kites; dry clothes; winnow rice. 3. Blow off roofs; destroy farms. 4. Anemometer.</p>`,

      [{ q: 'What is wind?', a: ['moving air'] },
       { q: 'What can wind do?', a: ['fly kites', 'blow leaves', 'dry clothes', 'any'] },
       { q: 'What is a bad effect of wind?', a: ['blow off roofs', 'destroy farms', 'any'] }]),

    D(4, '🌬️', 'Clean Air',
      'Know the importance of clean air and how to keep air clean.',
      `<p class='big-emoji'>🌬️ 🌳 🏭</p>
       <p><b>Clean air</b> is air that has no smoke, no dust, and no bad smell. Clean air is <b>good</b> for us. Dirty air is <b>bad</b> for us.</p>

       <h3>What Makes Air Dirty?</h3>
       <ul>
         <li>🚗 Smoke from cars and lorries.</li>
         <li>🏭 Smoke from factories.</li>
         <li>🔥 Smoke from burning rubbish.</li>
         <li>🌫️ Dust from roads and building sites.</li>
         <li>🚬 Cigarette smoke.</li>
       </ul>

       <h3>Why Dirty Air is Bad</h3>
       <ul>
         <li>It causes coughing.</li>
         <li>It causes asthma (breathing problems).</li>
         <li>It makes the eyes and nose hurt.</li>
         <li>It can cause lung diseases.</li>
       </ul>

       <h3>How to Keep Air Clean</h3>
       <ul>
         <li>🌳 Plant more trees (they clean the air).</li>
         <li>🚭 Do not burn rubbish.</li>
         <li>🚗 Do not smoke near others.</li>
         <li>🌬️ Keep windows open so fresh air comes in.</li>
         <li>🌿 Keep plants in the house.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 pictures: (1) A clean village with green trees, blue sky, and fresh air. (2) A dirty city with factories, smoke, and dark air. Write "Clean" and "Dirty" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes air dirty?</p>
       <p><b>Answer:</b> Smoke from cars, factories, rubbish fires, and cigarettes make air dirty.</p>`,

      [{ heading: 'Exercise 34.1 — Answer', items: [
          'What makes air dirty?',
          'What are 2 effects of dirty air?',
          'Name 3 ways to keep air clean.',
          'Where is the air cleanest?'
        ]},
       { heading: 'Exercise 34.2 — Draw', items: [
          'Draw a tree and write "Trees clean the air".'
        ]}],

      `<p><b>34.1:</b> 1. Smoke, dust. 2. Coughing, asthma. 3. Plant trees, do not burn rubbish, keep windows open. 4. In the forest or garden.</p>`,

      [{ q: 'What makes air dirty?', a: ['smoke', 'dust', 'any'] },
       { q: 'Where is air cleanest?', a: ['forest', 'garden', 'any'] },
       { q: 'How do trees help the air?', a: ['they clean it', 'they give oxygen', 'any'] }]),

    D(5, '🎨', 'Air Poster',
      'Consolidate learning about air.',
      `<p>Make an "Air" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Air is Everywhere"</b></li>
         <li>Draw a big sky with clouds and wind blowing.</li>
         <li>Draw 4 things that use air: a kite, a balloon, a bird, a windmill.</li>
         <li>Write one sentence: <i>"We need clean air to live."</i></li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and name 3 things that use air.</p>`,

      [{ heading: 'Exercise 35.1 — Draw your air poster', items: [
          'Title',
          'Sky with clouds and wind',
          '4 things that use air',
          'One sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 things that use air.', a: ['kite', 'balloon', 'bird', 'windmill', 'any'] },
       { q: 'What do we breathe in?', a: ['air', 'oxygen'] }])
  ]},

  { week: 8, theme: 'Light & Dark', days: [

    D(1, '☀️', 'Light',
      'Know the sources of light.',
      `<p class='big-emoji'>☀️ 🔥 💡 🕯️</p>
       <p><b>Light</b> is what helps us see. Without light, we cannot see anything. Light comes from different sources.</p>

       <h3>Sources of Light</h3>
       <ul>
         <li>☀️ <b>Sun</b> — the biggest source of light (natural).</li>
         <li>🔥 <b>Fire</b> — from burning wood (natural or man-made).</li>
         <li>🕯️ <b>Candle</b> — a small light.</li>
         <li>💡 <b>Electric bulb</b> — light from electricity.</li>
         <li>🔦 <b>Torch</b> — battery-powered light.</li>
         <li>⚡ <b>Lightning</b> — light during a storm (natural).</li>
         <li>✨ <b>Fireflies</b> — small insects that glow at night (natural).</li>
       </ul>

       <h3>Natural vs Man-Made Light</h3>
       <ul>
         <li><b>Natural light</b>: sun, lightning, fireflies, fire.</li>
         <li><b>Man-made light</b>: candles, torches, bulbs, lamps.</li>
       </ul>

       <h3>Uses of Light</h3>
       <ul>
         <li>To see things.</li>
         <li>To read and write.</li>
         <li>To cook (fire).</li>
         <li>To light up rooms at night.</li>
         <li>Plants use sunlight to make food.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the sun in the top-left corner, a candle in the middle, and a torch on the right. Write the name under each source of light.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 sources of light.</p>
       <p><b>Answer:</b> The sun, a candle, and a torch.</p>`,

      [{ heading: 'Exercise 36.1 — Answer', items: [
          'What is the biggest source of light?',
          'Name 3 sources of light.',
          'Give an example of natural light.',
          'Give an example of man-made light.'
        ]},
       { heading: 'Exercise 36.2 — Sort', items: [
          'Sort into Natural / Man-Made: sun, torch, candle, lightning, firefly, lamp.'
        ]}],

      `<p><b>36.1:</b> 1. The sun. 2. Sun, candle, torch. 3. Sun. 4. Torch.</p>
       <p><b>36.2:</b> Natural: sun, lightning, firefly. Man-Made: torch, candle, lamp.</p>`,

      [{ q: 'What gives us light in the day?', a: ['sun'] },
       { q: 'Name a source of light at night.', a: ['lamp', 'candle', 'torch', 'any'] },
       { q: 'Is the sun natural or man-made light?', a: ['natural'] }]),

    D(2, '🌑', 'Dark',
      'Know that darkness is the absence of light.',
      `<p class='big-emoji'>🌑 🌃 🌌</p>
       <p><b>Darkness</b> is when there is no light. It happens at night or in a room with no lights. In darkness, we cannot see anything.</p>

       <h3>When Do We Have Darkness?</h3>
       <ul>
         <li>🌃 At night.</li>
         <li>🕳️ In a cave.</li>
         <li>🚪 In a closed room with no light.</li>
         <li>🌑 During a power cut (blackout).</li>
       </ul>

       <h3>What Do We Use in the Dark?</h3>
       <ul>
         <li>🔦 A torch.</li>
         <li>🕯️ A candle.</li>
         <li>💡 A lamp or bulb.</li>
         <li>📱 A phone light.</li>
       </ul>

       <h3>Things We Cannot Do in the Dark</h3>
       <ul>
         <li>Read or write.</li>
         <li>See where we are going.</li>
         <li>Do school work.</li>
       </ul>

       <h3>Why We Need Light at Night</h3>
       <p>At night, the sun is gone. Without man-made light, we could not see anything. That is why we use lamps, candles, and torches.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a dark room with a candle burning in the middle. Show the light around the candle and shadows on the walls.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is darkness?</p>
       <p><b>Answer:</b> Darkness is when there is <b>no light</b>.</p>`,

      [{ heading: 'Exercise 37.1 — Answer', items: [
          'When is it dark?',
          'What do you use in the dark?',
          'Name 3 things you cannot do in the dark.',
          'What is darkness?'
        ]},
       { heading: 'Exercise 37.2 — Draw', items: [
          'Draw a dark room with a lit candle.'
        ]}],

      `<p><b>37.1:</b> 1. At night. 2. A torch or a candle. 3. Read, write, see. 4. Absence of light.</p>`,

      [{ q: 'When is it dark?', a: ['night', 'at night'] },
       { q: 'What do you use in the dark?', a: ['torch', 'candle', 'lamp', 'any'] },
       { q: 'What is darkness?', a: ['no light', 'absence of light', 'any'] }]),

    D(3, '🌗', 'Shadows',
      'Know that shadows are formed when light is blocked by an object.',
      `<p class='big-emoji'>🌗 🚶 ☀️</p>
       <p>A <b>shadow</b> is a dark shape made when an object blocks light. When you stand in the sun, you can see your shadow on the ground.</p>

       <h3>How Shadows Form</h3>
       <p>Light travels in straight lines. When light hits an object, it cannot pass through. Behind the object is a dark area — that is the shadow.</p>

       <h3>What Makes a Shadow?</h3>
       <ul>
         <li>A <b>light source</b> (like the sun or a torch).</li>
         <li>An <b>object</b> that blocks the light (like your hand).</li>
         <li>A <b>surface</b> where the shadow appears (like the ground or a wall).</li>
       </ul>

       <h3>Uses of Shadows</h3>
       <ul>
         <li>Shade — hiding from the hot sun under a tree.</li>
         <li>Shadow puppets — a fun game.</li>
         <li>Storytelling — some cultures tell stories with shadows.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a child standing in the sun. Draw the child's shadow on the ground (dark shape). Draw the sun in the top corner. Add arrows from the sun to the child.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes a shadow?</p>
       <p><b>Answer:</b> A shadow is made when an <b>object blocks light</b>.</p>`,

      [{ heading: 'Exercise 38.1 — Answer', items: [
          'What makes a shadow?',
          'When do you see your shadow?',
          'Name 2 uses of shadows.',
          'Where is the light source when you see your shadow?'
        ]},
       { heading: 'Exercise 38.2 — Draw and label', items: [
          'Draw a shadow puppet using your hand.'
        ]}],

      `<p><b>38.1:</b> 1. Object blocking light. 2. In the sun. 3. Shade, shadow puppets. 4. Behind the object.</p>`,

      [{ q: 'What makes a shadow?', a: ['object blocking light', 'light blocked', 'any'] },
       { q: 'When do you see your shadow?', a: ['in the sun', 'sunny day'] },
       { q: 'Name one use of shadows.', a: ['shade', 'shadow puppets', 'any'] }]),

    D(4, '🌞', 'Day & Night',
      'Know that day and night happen because the Earth turns.',
      `<p class='big-emoji'>🌞 🌙 ⭐</p>
       <p>Every day, the sun rises in the morning and sets in the evening. Then it is dark — this is night. Day and night repeat again and again.</p>

       <h3>What is Day?</h3>
       <ul>
         <li>Day is when the sun is up.</li>
         <li>It is bright and warm.</li>
         <li>We do most of our work in the day.</li>
       </ul>

       <h3>What is Night?</h3>
       <ul>
         <li>Night is when the sun is gone.</li>
         <li>It is dark.</li>
         <li>The moon and stars come out.</li>
         <li>We sleep at night.</li>
       </ul>

       <h3>Why Day and Night Happen</h3>
       <p>The Earth is like a big ball. It turns slowly (spins). When your side of the Earth is facing the sun, it is day. When your side is facing away from the sun, it is night.</p>

       <h3>Things We Do in the Day</h3>
       <ul>
         <li>Wake up.</li>
         <li>Go to school.</li>
         <li>Work on the farm.</li>
         <li>Play outside.</li>
       </ul>

       <h3>Things We Do at Night</h3>
       <ul>
         <li>Eat supper.</li>
         <li>Read a book.</li>
         <li>Sleep.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Divide the page into two halves. On the left, draw a day scene (sun, blue sky, children playing). On the right, draw a night scene (moon, stars, dark sky, someone sleeping). Write "Day" and "Night" as the titles.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you see in the sky at night?</p>
       <p><b>Answer:</b> At night I see the <b>moon</b> and <b>stars</b>.</p>`,

      [{ heading: 'Exercise 39.1 — Answer', items: [
          'What do you see in the sky at night?',
          'What do you see in the sky in the day?',
          'Name 3 things you do in the day.',
          'Name 2 things you do at night.'
        ]},
       { heading: 'Exercise 39.2 — Draw and label', items: [
          'Draw a day scene and a night scene.'
        ]}],

      `<p><b>39.1:</b> 1. Moon and stars. 2. Sun. 3. Wake up, go to school, play. 4. Read, sleep.</p>`,

      [{ q: 'What do you see in the sky at night?', a: ['moon', 'stars', 'moon and stars'] },
       { q: 'What do you see in the sky in the day?', a: ['sun'] },
       { q: 'Why do we have day and night?', a: ['earth turns', 'earth rotates', 'any'] }]),

    D(5, '🎨', 'Light & Dark Poster',
      'Consolidate learning about light and dark.',
      `<p>Make a poster showing light and dark.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Divide the paper into 4 quarters.</li>
         <li>Quarter 1: <b>Sources of light</b> — sun, candle, torch.</li>
         <li>Quarter 2: <b>Darkness</b> — a dark room with a small lamp.</li>
         <li>Quarter 3: <b>Shadows</b> — a child with a shadow.</li>
         <li>Quarter 4: <b>Day and night</b> — day on top, night at bottom.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and say 3 sources of light and 2 things about shadows.</p>`,

      [{ heading: 'Exercise 40.1 — Draw your poster', items: [
          'Sources of light',
          'Darkness',
          'Shadows',
          'Day and night'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 sources of light.', a: ['sun', 'candle', 'torch', 'lamp', 'any'] },
       { q: 'What makes a shadow?', a: ['object blocking light', 'any'] },
       { q: 'What do you see at night?', a: ['moon', 'stars', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // SUB-STRAND: SOUND (Energy)
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: 'Sound', days: [

    D(1, '🔔', 'Sounds Around Us',
      'Recognise that sound comes from vibrating objects.',
      `<p class='big-emoji'>🔔 🐦 📢 🥁</p>
       <p><b>Sound</b> is what we hear with our ears. Sound is made when an object <b>vibrates</b> — that means it moves very fast back and forth.</p>

       <h3>Sounds Around Us</h3>
       <ul>
         <li>🔔 The ringing of a bell.</li>
         <li>🐦 The singing of birds.</li>
         <li>🥁 The beating of a drum.</li>
         <li>🚗 The honking of cars.</li>
         <li>🗣️ People talking.</li>
         <li>🎺 A trumpet playing.</li>
         <li>💦 Water dripping from a tap.</li>
       </ul>

       <h3>Loud and Soft Sounds</h3>
       <ul>
         <li><b>Loud</b>: a drum, a car horn, thunder, a bell.</li>
         <li><b>Soft</b>: a whisper, a bird singing, a cat purring.</li>
       </ul>

       <h3>High and Low Sounds</h3>
       <ul>
         <li><b>High</b>: a whistle, a bird, a baby crying.</li>
         <li><b>Low</b>: a drum, a lion's roar, a big bell.</li>
       </ul>

       <h3>How Sound is Made</h3>
       <p>When you hit a drum, the top of the drum shakes quickly. This shakes the air around it. The shaking air reaches your ear, and you hear the sound.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 boxes with sounds: a bell ringing, a drum being beaten, a bird singing, a car honking. Write the name under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 loud sounds and 3 soft sounds.</p>
       <p><b>Answer:</b> Loud: drum, car horn, thunder. Soft: whisper, bird singing, cat purring.</p>`,

      [{ heading: 'Exercise 41.1 — Answer', items: [
          'What do we hear with?',
          'Name 5 sounds you hear at home.',
          'Name 3 loud sounds.',
          'Name 3 soft sounds.'
        ]},
       { heading: 'Exercise 41.2 — Sort into Loud / Soft', items: [
          'Sort: drum, whisper, car horn, bird, thunder, cat purring.'
        ]}],

      `<p><b>41.1:</b> 1. Ears. 2. TV, radio, talking, drum, clapping. 3. Drum, car horn, thunder. 4. Whisper, bird, cat purring.</p>
       <p><b>41.2:</b> Loud: drum, car horn, thunder. Soft: whisper, bird, cat purring.</p>`,

      [{ q: 'What do we hear with?', a: ['ears', 'ear'] },
       { q: 'Name a loud sound.', a: ['drum', 'car horn', 'thunder', 'any'] },
       { q: 'Name a soft sound.', a: ['whisper', 'bird', 'any'] },
       { q: 'How is sound made?', a: ['vibration', 'by vibrating', 'any'] }]),

    D(2, '👂', 'Hearing',
      'Know that we hear with our ears.',
      `<p class='big-emoji'>👂 🎵 🔇</p>
       <p>We hear with our <b>ears</b>. Ears are very important. They help us understand what is happening around us.</p>

       <h3>Parts of the Ear (Simple)</h3>
       <ul>
         <li><b>Outer ear</b> — the part we can see; catches sound.</li>
         <li><b>Ear canal</b> — carries sound inside.</li>
         <li><b>Ear drum</b> — vibrates when sound hits it.</li>
         <li><b>Inner ear</b> — sends the message to the brain.</li>
       </ul>

       <h3>Care of the Ears</h3>
       <ul>
         <li>Do not put sharp objects in your ears.</li>
         <li>Do not put water inside your ears.</li>
         <li>Clean the outside only with a soft cloth.</li>
         <li>Do not listen to very loud music.</li>
         <li>If your ear hurts, tell an adult.</li>
       </ul>

       <h3>People Who Cannot Hear</h3>
       <p>Some people cannot hear — they are <b>deaf</b>. They use <b>sign language</b> (hand signs) to talk to others. Be kind to them.</p>

       <h3>Fun Activity: Listening Game</h3>
       <p>Close your eyes. Ask a parent to make 5 sounds (clap, tap, cough, whistle, sing). Can you name each sound?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw an ear. Label the outer ear. Draw arrows showing sound going into the ear.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens if we put sharp objects in our ears?</p>
       <p><b>Answer:</b> We can <b>damage the ear drum</b> and lose our hearing. Never put sharp objects in the ear.</p>`,

      [{ heading: 'Exercise 42.1 — Answer', items: [
          'What do we hear with?',
          'Name 3 ways to care for the ears.',
          'What should you not put in your ear?',
          'What do deaf people use to talk?'
        ]},
       { heading: 'Exercise 42.2 — Activity', items: [
          'Play the listening game with your parent.'
        ]}],

      `<p><b>42.1:</b> 1. Ears. 2. Do not put sharp things in the ear; do not put water inside; do not listen to loud music. 3. Sharp objects. 4. Sign language.</p>`,

      [{ q: 'What do we hear with?', a: ['ears', 'ear'] },
       { q: 'What should you not put in your ear?', a: ['sharp objects', 'sharp things', 'any'] },
       { q: 'How do we care for our ears?', a: ['clean the outside', 'do not put sharp things', 'any'] }]),

    D(3, '🥁', 'Making Sounds',
      'Demonstrate that sound comes from vibrating objects.',
      `<p class='big-emoji'>🥁 🎺 👏</p>
       <p>You can make sound with your body or with objects. Every sound comes from something that is vibrating (shaking quickly).</p>

       <h3>Make Sounds with Your Body</h3>
       <ul>
         <li>👏 <b>Clapping</b> — hit your two hands together.</li>
         <li>👣 <b>Stomping</b> — hit your feet on the ground.</li>
         <li>🗣️ <b>Singing</b> — use your voice.</li>
         <li>👉 <b>Snapping</b> — snap your fingers.</li>
         <li>👄 <b>Whistling</b> — blow air through your lips.</li>
       </ul>

       <h3>Make Sounds with Objects</h3>
       <ul>
         <li>🥁 <b>Drum</b> — hit it with your hand or a stick.</li>
         <li>🎺 <b>Trumpet</b> — blow into it.</li>
         <li>🔔 <b>Bell</b> — shake it.</li>
         <li>🎸 <b>Guitar</b> — pluck the strings.</li>
         <li>🥄 <b>Spoon and tin</b> — tap the spoon on a tin.</li>
         <li>🍾 <b>Bottle</b> — blow across the top.</li>
       </ul>

       <h3>Vibration</h3>
       <p>Every sound is made by <b>vibration</b>. When you hit a drum, the drum's surface shakes fast. You cannot always see it, but you can feel it if you touch the drum after hitting it.</p>

       <h3>Fun Activity: Feel the Vibration</h3>
       <ol>
         <li>Hit a drum.</li>
         <li>Quickly touch the top of the drum.</li>
         <li>Can you feel the shaking? That is vibration!</li>
         <li>Try the same with a bell — ring it and touch it.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 things you can use to make sound: a drum, a bell, a whistle, a bottle. Write the name under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes sound?</p>
       <p><b>Answer:</b> Sound is made by <b>vibration</b>.</p>`,

      [{ heading: 'Exercise 43.1 — Answer', items: [
          'Name 3 ways to make sound with your body.',
          'Name 3 objects that make sound.',
          'What makes sound?',
          'Why does a drum make sound when you hit it?'
        ]},
       { heading: 'Exercise 43.2 — Activity', items: [
          'Make 5 different sounds. Ask a parent to guess each.'
        ]}],

      `<p><b>43.1:</b> 1. Clap, stomp, sing. 2. Drum, bell, trumpet. 3. Vibration. 4. Because the top vibrates.</p>`,

      [{ q: 'How do you make a clap?', a: ['clap hands', 'hands'] },
       { q: 'What makes sound?', a: ['vibration', 'vibrating'] },
       { q: 'Name 3 objects that make sound.', a: ['drum', 'bell', 'trumpet', 'any'] }]),

    D(4, '🎵', 'Music',
      'Know that music is a special kind of sound.',
      `<p class='big-emoji'>🎵 🎶 🎸 🎺</p>
       <p><b>Music</b> is a beautiful sound. It makes us happy. We sing, drum, and dance to music.</p>

       <h3>Musical Instruments</h3>
       <ul>
         <li><b>Drumming</b>: 🥁 drum, 🪘 djembe, 🎯 talking drum.</li>
         <li><b>Blowing</b>: 🎺 trumpet, 🎷 saxophone, 🎺 flute, 🎺 whistle.</li>
         <li><b>Shaking</b>: 🪇 shakers, 🎯 maracas, 🔔 bells.</li>
         <li><b>String</b>: 🎸 guitar, 🎻 violin, 🪕 banjo.</li>
       </ul>

       <h3>Uses of Music</h3>
       <ul>
         <li>🎉 Festivals and celebrations.</li>
         <li>⛪ Church services.</li>
         <li>🎈 Birthday parties.</li>
         <li>💃 Dancing.</li>
         <li>😊 Making us happy.</li>
         <li>🤗 Bringing people together.</li>
       </ul>

       <h3>Traditional Ghanaian Music</h3>
       <p>Ghana has many traditional music and dances: <b>kpanlogo</b>, <b>adowa</b>, <b>agbadza</b>, <b>borborbor</b>, <b>azonto</b>. They use drums, rattles, and songs in local languages.</p>

       <h3>Sing a Song!</h3>
       <p>Sing your favourite song for your family. Clap the beat as you sing.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 musical instruments: a drum, a guitar, and a bell. Colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 musical instruments.</p>
       <p><b>Answer:</b> Drum, guitar, and bell.</p>`,

      [{ heading: 'Exercise 44.1 — Answer', items: [
          'Name 3 musical instruments.',
          'What do we do with music?',
          'Name 2 traditional Ghanaian dances.',
          'What is your favourite song?'
        ]},
       { heading: 'Exercise 44.2 — Activity', items: [
          'Sing your favourite song to your family.'
        ]}],

      `<p><b>44.1:</b> 1. Drum, guitar, bell. 2. We sing, dance, and enjoy. 3. Kpanlogo, adowa. 4. Any.</p>`,

      [{ q: 'Name a musical instrument.', a: ['drum', 'guitar', 'flute', 'piano', 'any'] },
       { q: 'What do you do with music?', a: ['sing', 'dance', 'listen', 'any'] },
       { q: 'Name a traditional Ghanaian dance.', a: ['kpanlogo', 'adowa', 'agbadza', 'any'] }]),

    D(5, '🎨', 'Sound Poster',
      'Consolidate learning about sound.',
      `<p>Make a "Sound" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Sounds Around Me"</b></li>
         <li>Draw 5 things that make sounds around your home: a bell, a TV, a drum, a car, a bird.</li>
         <li>Label each with a name.</li>
         <li>Add one loud sound and one soft sound — mark with L and S.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and make the sound of each item with your voice or hands.</p>`,

      [{ heading: 'Exercise 45.1 — Draw your sound poster', items: [
          'Title',
          '5 things that make sound',
          'Label each',
          'Mark L for loud, S for soft'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 things that make sound.', a: ['bell', 'drum', 'car', 'bird', 'any'] },
       { q: 'Name a loud sound.', a: ['drum', 'car', 'thunder', 'any'] },
       { q: 'Name a soft sound.', a: ['whisper', 'bird', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND 4: FORCES AND ENERGY
  // SUB-STRAND: MAGNETISM
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: 'Magnets', days: [

    D(1, '🧲', 'What is a Magnet?',
      'Recognise magnets as objects that attract certain materials.',
      `<p class='big-emoji'>🧲 📎 🔩</p>
       <p>A <b>magnet</b> is a special object that pulls (attracts) some metals. It is usually black or silver. It has two ends called <b>poles</b>: the north pole and the south pole.</p>

       <h3>What Magnets Can Do</h3>
       <ul>
         <li>They <b>attract</b> (pull) iron, steel, and nickel.</li>
         <li>They <b>repel</b> (push away) other magnets with the same pole.</li>
         <li>They can pull objects through paper, water, or thin walls.</li>
       </ul>

       <h3>What Magnets Attract</h3>
       <ul>
         <li>🔩 Iron nails</li>
         <li>📎 Paper clips</li>
         <li>🔑 Some keys (if made of iron)</li>
         <li>🥄 Some spoons (if made of iron)</li>
         <li>🔧 Screws and bolts</li>
       </ul>

       <h3>What Magnets Do Not Attract</h3>
       <ul>
         <li>📄 Paper</li>
         <li>🧵 Cloth</li>
         <li>🪵 Wood</li>
         <li>🥤 Plastic</li>
         <li>🥛 Glass</li>
         <li>🪨 Stones</li>
       </ul>

       <h3>Uses of Magnets</h3>
       <ul>
         <li>🚪 On the doors of fridges to keep them closed.</li>
         <li>🔧 In workshops to pick up iron nails.</li>
         <li>🎧 In speakers and headphones.</li>
         <li>📱 In phones and computers.</li>
         <li>🎒 On the clasps of bags.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a magnet (a rectangle with N on one side and S on the other). Draw 3 things it attracts (nails, paper clips, keys) and 3 things it does not attract (paper, wood, plastic). Circle each group.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why is a magnet useful in a workshop?</p>
       <p><b>Answer:</b> Because it can pick up <b>iron nails and screws</b> that have fallen on the floor.</p>`,

      [{ heading: 'Exercise 46.1 — Answer', items: [
          'What does a magnet do?',
          'Name 3 things a magnet attracts.',
          'Name 3 things a magnet does NOT attract.',
          'Name 2 uses of magnets.'
        ]},
       { heading: 'Exercise 46.2 — Draw and label', items: [
          'Draw a magnet with its two poles.'
        ]}],

      `<p><b>46.1:</b> 1. Attracts metal. 2. Nails, paper clips, screws. 3. Paper, wood, plastic. 4. Fridge doors, workshops.</p>`,

      [{ q: 'What does a magnet pull?', a: ['metal', 'iron', 'steel'] },
       { q: 'How many poles does a magnet have?', a: ['2', 'two'] },
       { q: 'Name 2 uses of magnets.', a: ['fridge door', 'workshop', 'speaker', 'any'] }]),

    D(2, '🧲', 'Magnetic Things',
      'Classify materials as magnetic or non-magnetic.',
      `<p class='big-emoji'>📎 🪵 📄 🥤 🔩</p>
       <p>Not all things are attracted by a magnet. Things that are attracted are called <b>magnetic</b>. Things that are not attracted are called <b>non-magnetic</b>.</p>

       <h3>Magnetic Materials</h3>
       <p>Only <b>iron</b>, <b>steel</b>, <b>nickel</b>, and <b>cobalt</b> are magnetic.</p>
       <ul>
         <li>🔩 Iron nails</li>
         <li>📎 Paper clips</li>
         <li>🔪 Steel knives</li>
         <li>🔧 Some screws</li>
         <li>🚗 Some car parts</li>
       </ul>

       <h3>Non-Magnetic Materials</h3>
       <ul>
         <li>📄 Paper</li>
         <li>🧵 Cloth</li>
         <li>🪵 Wood</li>
         <li>🥤 Plastic</li>
         <li>🥛 Glass</li>
         <li>🪨 Stones</li>
         <li>🍎 Fruits</li>
         <li>💧 Water</li>
       </ul>

       <h3>How to Test</h3>
       <ol>
         <li>Hold a magnet.</li>
         <li>Bring it close to the object.</li>
         <li>If the object sticks, it is magnetic.</li>
         <li>If it does not stick, it is non-magnetic.</li>
       </ol>

       <h3>Fun Activity</h3>
       <p>Walk around your home with a magnet. Test 10 objects. Write the names of the magnetic ones and the non-magnetic ones.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 columns. Column 1: "Magnetic" — draw 3 things (nail, paper clip, spoon). Column 2: "Non-Magnetic" — draw 3 things (paper, wood, plastic cup).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a stone magnetic?</p>
       <p><b>Answer:</b> No, a stone is <b>non-magnetic</b> because it is not made of iron, steel, nickel, or cobalt.</p>`,

      [{ heading: 'Exercise 47.1 — Sort into Magnetic / Non-Magnetic', items: [
          'Sort: nail, paper, paper clip, cloth, spoon, cup, iron rod, stone.'
        ]},
       { heading: 'Exercise 47.2 — Answer', items: [
          'What is a magnetic object?',
          'What is a non-magnetic object?',
          'Name 3 magnetic things.',
          'Name 3 non-magnetic things.'
        ]}],

      `<p><b>47.1:</b> Magnetic: nail, paper clip, spoon, iron rod. Non-magnetic: paper, cloth, cup, stone.</p>
       <p><b>47.2:</b> 1. Something a magnet attracts. 2. Something a magnet does not attract. 3. Nail, paper clip, spoon. 4. Paper, cloth, cup.</p>`,

      [{ q: 'Is a nail magnetic?', a: ['yes'] },
       { q: 'Is paper magnetic?', a: ['no'] },
       { q: 'Which metals are magnetic?', a: ['iron', 'steel', 'nickel', 'cobalt', 'any'] }]),

    D(3, '🧲', 'Magnet Fun',
      'Explore how magnets work through play.',
      `<p class='big-emoji'>🧲 🎣 🐟</p>
       <p>Magnets are fun to play with. Here are some activities you can do at home.</p>

       <h3>Activity 1: Fishing Game</h3>
       <ul>
         <li>Cut fish shapes from paper.</li>
         <li>Attach a paper clip to each fish.</li>
         <li>Tie a magnet to a string on a stick (like a fishing rod).</li>
         <li>Try to "catch" the fish with the magnet.</li>
       </ul>

       <h3>Activity 2: Magnet Race</h3>
       <ul>
         <li>Place a paper clip on a table.</li>
         <li>Hold a magnet under the table.</li>
         <li>Move the magnet — the clip moves too!</li>
       </ul>

       <h3>Activity 3: Magnet Through Water</h3>
       <ul>
         <li>Drop a paper clip into a glass of water.</li>
         <li>Move a magnet along the outside of the glass.</li>
         <li>Can you pull the clip out without touching the water?</li>
       </ul>

       <h3>What You Will Learn</h3>
       <ul>
         <li>Magnets can work through paper, water, and thin tables.</li>
         <li>Magnets are stronger on some sides (poles) than others.</li>
         <li>Two magnets can push each other away if you turn them the right way.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a fishing game — a stick with a string, a magnet at the end, and a fish with a paper clip being caught.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Can a magnet pull a paper clip through water?</p>
       <p><b>Answer:</b> Yes! A magnet can pull a paper clip through water or thin glass because magnetic force passes through those materials.</p>`,

      [{ heading: 'Exercise 48.1 — Try 3 activities', items: [
          'Fishing game with paper clips.',
          'Magnet race under a table.',
          'Magnet through water.'
        ]},
       { heading: 'Exercise 48.2 — Answer', items: [
          'Can magnets work through water?',
          'Can magnets work through paper?',
          'What do you feel when you try to push two poles together?'
        ]}],

      `<p><b>48.2:</b> 1. Yes. 2. Yes. 3. You feel a push (repulsion).</p>`,

      [{ q: 'Can magnets work through water?', a: ['yes'] },
       { q: 'Can magnets work through paper?', a: ['yes'] },
       { q: 'What do two same poles do?', a: ['push', 'repel', 'push apart'] }]),

    D(4, '📝', 'Magnet Sentences',
      'Use key vocabulary about magnets in sentences.',
      `<p class='big-emoji'>✍️ 🧲 📝</p>
       <p>Let's use the new words we have learned about magnets.</p>

       <h3>Key Words</h3>
       <ul>
         <li><b>Magnet</b> — an object that attracts iron.</li>
         <li><b>Attract</b> — to pull towards.</li>
         <li><b>Repel</b> — to push away.</li>
         <li><b>Pole</b> — the end of a magnet (N or S).</li>
         <li><b>Magnetic</b> — something a magnet pulls.</li>
         <li><b>Non-magnetic</b> — something a magnet does not pull.</li>
         <li><b>Iron</b> — a metal that magnets attract.</li>
         <li><b>Steel</b> — a metal made from iron; also magnetic.</li>
       </ul>

       <h3>Example Sentences</h3>
       <ul>
         <li>A magnet <b>attracts</b> iron nails.</li>
         <li>A magnet has two <b>poles</b>.</li>
         <li>Paper is <b>non-magnetic</b>.</li>
         <li>Two magnets can <b>repel</b> each other.</li>
       </ul>

       <h3>Your Turn</h3>
       <p>Write 5 sentences using the key words. Use your own ideas.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a magnet with the word "attract" written on one side and "repel" written on the other side.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Use the word "magnet" in a sentence.</p>
       <p><b>Answer:</b> A magnet attracts iron nails.</p>`,

      [{ heading: 'Exercise 49.1 — Write 5 sentences', items: [
          'A magnet ______.',
          'A magnet has ______.',
          'Iron is ______.',
          'Paper is ______.',
          'Two poles can ______.'
        ]},
       { heading: 'Exercise 49.2 — Fill in the blanks', items: [
          'A magnet attracts ______.',
          'A magnet has ______ poles.',
          'Paper is ______.',
          'Iron is ______.'
        ]}],

      `<p><b>49.1:</b> Any correct sentences. Examples: A magnet attracts iron. A magnet has two poles. Iron is magnetic. Paper is non-magnetic. Two poles can repel.</p>
       <p><b>49.2:</b> 1. iron 2. two 3. non-magnetic 4. magnetic</p>`,

      [{ q: 'Use "attract" in a sentence.', a: ['magnet attracts iron', 'magnet attracts nails', 'any'] },
       { q: 'Use "repel" in a sentence.', a: ['magnets repel', 'same poles repel', 'any'] },
       { q: 'Use "poles" in a sentence.', a: ['magnet has two poles', 'any'] }]),

    D(5, '🎨', 'Magnet Poster',
      'Consolidate learning about magnets.',
      `<p>Make a "Magnets" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"All About Magnets"</b></li>
         <li>Top: a big magnet with N and S poles labelled.</li>
         <li>Middle-left: 3 things magnets attract (nails, paper clips, iron rod).</li>
         <li>Middle-right: 3 things magnets do NOT attract (paper, wood, plastic).</li>
         <li>Bottom: write "Magnets attract iron and steel."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say what a magnet does and name 3 magnetic and 3 non-magnetic things.</p>`,

      [{ heading: 'Exercise 50.1 — Draw your magnet poster', items: [
          'Title',
          'Magnet with poles',
          '3 magnetic things',
          '3 non-magnetic things',
          'One sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What does a magnet attract?', a: ['iron', 'steel', 'metal'] },
       { q: 'Name 3 magnetic things.', a: ['nail', 'paper clip', 'spoon', 'any'] },
       { q: 'Name 3 non-magnetic things.', a: ['paper', 'wood', 'plastic', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND 5: HUMANS AND THE ENVIRONMENT
  // SUB-STRAND: PLANTS & GROWTH (continued from Week 4)
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: 'Plants & Growth', days: [

    D(1, '🌱', 'Planting a Seed',
      'Demonstrate understanding of the life cycle of plants.',
      `<p class='big-emoji'>🌱 🫘 🌰</p>
       <p>Today we plant a real seed! We will watch it grow over the coming weeks.</p>

       <h3>What You Need</h3>
       <ul>
         <li>🫘 A bean seed (or maize seed).</li>
         <li>🥤 A small cup or a tin can.</li>
         <li>🌱 Soil (from the garden or a bag of soil).</li>
         <li>💧 Water.</li>
       </ul>

       <h3>Steps to Plant a Seed</h3>
       <ol>
         <li>Fill the cup with soil up to the top.</li>
         <li>Make a small hole in the soil with your finger (1 cm deep).</li>
         <li>Place the seed into the hole.</li>
         <li>Cover the seed with soil.</li>
         <li>Water the soil gently.</li>
         <li>Put the cup in a place with sunlight.</li>
       </ol>

       <h3>What to Do Every Day</h3>
       <ul>
         <li>Water the seed every morning.</li>
         <li>Look at it and see if it has changed.</li>
         <li>Write down what you see each day.</li>
       </ul>

       <h3>What Will Happen</h3>
       <ul>
         <li>Day 1–2: The seed is still hidden.</li>
         <li>Day 3–4: A small shoot (sprout) appears.</li>
         <li>Day 5–7: A small green plant with leaves grows.</li>
         <li>Day 10–14: The plant is bigger with more leaves.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the 6 steps of planting a seed (as listed above) in 6 boxes.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we put the seed in soil?</p>
       <p><b>Answer:</b> Soil holds the seed, gives it nutrients, and keeps it in place while the roots grow.</p>`,

      [{ heading: 'Exercise 51.1 — Activity', items: [
          'Plant a bean seed today.',
          'Water it every day.',
          'Draw what you see each day for 7 days.'
        ]},
       { heading: 'Exercise 51.2 — Answer', items: [
          'What do you put the seed in?',
          'What do you give the seed?',
          'Where should you put the cup?',
          'What will happen to the seed after a few days?'
        ]}],

      `<p><b>51.2:</b> 1. Soil. 2. Water. 3. In sunlight. 4. It will grow into a small plant.</p>`,

      [{ q: 'What do you put the seed in?', a: ['soil', 'ground'] },
       { q: 'What do you give the seed?', a: ['water', 'sunlight', 'soil', 'any'] },
       { q: 'Where should you place the cup?', a: ['sunlight', 'sun', 'sunny place'] }]),

    D(2, '🌱', 'Watching It Grow',
      'Observe and record changes in a growing plant.',
      `<p class='big-emoji'>📝 🌱 📅</p>
       <p>Today we will observe the plant from yesterday. If you have not planted a seed yet, plant one now.</p>

       <h3>How to Record</h3>
       <p>Every day, draw or write what your plant looks like.</p>

       <h3>Use a Table Like This</h3>
       <table style="width:100%; border-collapse:collapse; margin-bottom:16px;">
         <tr><th style="border:1px solid #ddd; padding:8px;">Day</th><th style="border:1px solid #ddd; padding:8px;">What I See</th><th style="border:1px solid #ddd; padding:8px;">Height</th></tr>
         <tr><td style="border:1px solid #ddd; padding:8px;">Day 1</td><td style="border:1px solid #ddd; padding:8px;">Seeds still in soil</td><td style="border:1px solid #ddd; padding:8px;">0 cm</td></tr>
         <tr><td style="border:1px solid #ddd; padding:8px;">Day 3</td><td style="border:1px solid #ddd; padding:8px;">Small green shoot appears</td><td style="border:1px solid #ddd; padding:8px;">1 cm</td></tr>
         <tr><td style="border:1px solid #ddd; padding:8px;">Day 5</td><td style="border:1px solid #ddd; padding:8px;">Two small leaves</td><td style="border:1px solid #ddd; padding:8px;">3 cm</td></tr>
         <tr><td style="border:1px solid #ddd; padding:8px;">Day 7</td><td style="border:1px solid #ddd; padding:8px;">Bigger plant</td><td style="border:1px solid #ddd; padding:8px;">5 cm</td></tr>
       </table>

       <h3>Things to Notice</h3>
       <ul>
         <li>🌱 The plant grows taller each day.</li>
         <li>🌿 New leaves appear.</li>
         <li>💧 If the plant does not get water, it wilts.</li>
         <li>☀️ If the plant does not get sunlight, it turns yellow.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your plant on Day 1, Day 3, Day 5, and Day 7. Show how it changes.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens to a plant on Day 3?</p>
       <p><b>Answer:</b> On Day 3, a small green shoot (sprout) appears above the soil.</p>`,

      [{ heading: 'Exercise 52.1 — Observe your plant', items: [
          'Day 1: ___',
          'Day 3: ___',
          'Day 5: ___',
          'Day 7: ___'
        ]},
       { heading: 'Exercise 52.2 — Answer', items: [
          'What appears on Day 3?',
          'What happens if the plant does not get water?',
          'What happens if the plant does not get sunlight?'
        ]}],

      `<p><b>52.2:</b> 1. A small shoot. 2. It wilts and dies. 3. It turns yellow and stops growing.</p>`,

      [{ q: 'What appears on Day 3?', a: ['shoot', 'sprout', 'small plant'] },
       { q: 'What happens if the plant does not get water?', a: ['it wilts', 'it dies', 'any'] },
       { q: 'What happens if the plant does not get sunlight?', a: ['it turns yellow', 'it dies', 'any'] }]),

    D(3, '🌿', 'Leaves',
      'Know that leaves make food for the plant.',
      `<p class='big-emoji'>🌿 ☀️ 🍃</p>
       <p><b>Leaves</b> are the green parts of a plant. They are very important — they make food for the whole plant.</p>

       <h3>What Leaves Do</h3>
       <p>Leaves use <b>sunlight</b>, <b>water</b>, and <b>air</b> to make food. This process is called <b>photosynthesis</b>. The food is a kind of sugar, and the plant uses it to grow.</p>

       <h3>Parts of a Leaf</h3>
       <ul>
         <li><b>Blade</b> — the wide, flat part.</li>
         <li><b>Veins</b> — the lines that carry water and food.</li>
         <li><b>Stalk</b> — the thin part that connects the leaf to the stem.</li>
       </ul>

       <h3>Different Shapes of Leaves</h3>
       <ul>
         <li>🍃 Long and thin (grass, maize).</li>
         <li>🍂 Wide and round (cocoyam, pawpaw).</li>
         <li>🌿 Hand-shaped (cassava, cocoa).</li>
         <li>🍁 Star-shaped (papaya).</li>
       </ul>

       <h3>Uses of Leaves</h3>
       <ul>
         <li>They make food for the plant.</li>
         <li>Some leaves are eaten (spinach, kontomire).</li>
         <li>Some leaves are used for medicine.</li>
         <li>Some leaves are used for wrapping food (banana leaves).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 different leaf shapes: long, round, hand-shaped, star-shaped. Label each type.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do leaves need to make food?</p>
       <p><b>Answer:</b> Leaves need <b>sunlight</b>, <b>water</b>, and <b>air</b> to make food.</p>`,

      [{ heading: 'Exercise 53.1 — Answer', items: [
          'What is the main job of a leaf?',
          'What does a leaf need to make food?',
          'Name 3 leaf shapes.',
          'Name one leaf we eat.'
        ]},
       { heading: 'Exercise 53.2 — Draw and label', items: [
          'Draw 3 different leaves and label their parts.'
        ]}],

      `<p><b>53.1:</b> 1. Makes food for the plant. 2. Sunlight, water, air. 3. Long, round, hand-shaped. 4. Spinach or kontomire.</p>`,

      [{ q: 'What do leaves make?', a: ['food'] },
       { q: 'What do leaves need?', a: ['sunlight', 'water', 'air', 'any'] },
       { q: 'Name a leaf we eat.', a: ['spinach', 'kontomire', 'any'] }]),

    D(4, '🌳', 'Trees Give Us...',
      'Identify the uses of trees to humans and animals.',
      `<p class='big-emoji'>🌳 🍎 🪵 🏠</p>
       <p>Trees are the biggest plants. They give us many things. Trees are very important to humans, animals, and the environment.</p>

       <h3>What Trees Give Us</h3>
       <ul>
         <li>🍎 <b>Fruits</b> — mango, orange, coconut, pawpaw, guava.</li>
         <li>🪵 <b>Wood</b> — for building houses, furniture, and making charcoal.</li>
         <li>🌳 <b>Shade</b> — for resting when it is hot.</li>
         <li>💨 <b>Oxygen</b> — clean air for us to breathe.</li>
         <li>🌧️ <b>Rain</b> — trees help bring rain.</li>
         <li>🏠 <b>Homes</b> — for birds, monkeys, insects, and other animals.</li>
         <li>💊 <b>Medicine</b> — from the bark and leaves.</li>
         <li>🧵 <b>Fibres</b> — for making ropes and baskets (from palm trees).</li>
       </ul>

       <h3>Why We Should Plant More Trees</h3>
       <ul>
         <li>To replace trees that have been cut.</li>
         <li>To keep the air clean.</li>
         <li>To bring more rain.</li>
         <li>To prevent soil erosion.</li>
         <li>To give shade and fruit for the future.</li>
       </ul>

       <h3>Dangers of Cutting Trees Carelessly</h3>
       <ul>
         <li><b>Desertification</b> — the land becomes like a desert.</li>
         <li><b>Soil erosion</b> — soil is washed away by rain.</li>
         <li><b>Less rainfall</b> — fewer trees mean less rain.</li>
         <li><b>Loss of animals</b> — animals lose their homes.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big tree. Around it, draw 6 arrows pointing to: fruit, wood, shade, a bird's nest, a person breathing, and rain clouds.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we plant more trees?</p>
       <p><b>Answer:</b> To replace cut trees, keep the air clean, bring rain, and prevent soil erosion.</p>`,

      [{ heading: 'Exercise 54.1 — List 6 things we get from trees', items: [
          '1. ___', '2. ___', '3. ___', '4. ___', '5. ___', '6. ___'
        ]},
       { heading: 'Exercise 54.2 — Answer', items: [
          'Why should we plant more trees?',
          'What happens if we cut down too many trees?',
          'Which animals live in trees?'
        ]}],

      `<p><b>54.1:</b> Fruit, wood, shade, oxygen, homes for animals, medicine.</p>
       <p><b>54.2:</b> 1. To keep the air clean and bring rain. 2. Desertification, soil erosion, less rainfall. 3. Birds, monkeys, insects.</p>`,

      [{ q: 'Name 3 things trees give us.', a: ['fruit', 'wood', 'shade', 'oxygen', 'any'] },
       { q: 'Why plant trees?', a: ['for shade', 'for fruit', 'for air', 'any'] },
       { q: 'What happens if we cut too many trees?', a: ['desertification', 'soil erosion', 'any'] }]),

    D(5, '🎨', 'Plant Growth Poster',
      'Consolidate learning about plant growth.',
      `<p>Make a "Plant Growth" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"How Plants Grow"</b></li>
         <li>Draw 4 stages of growth in a row: seed → sprout → seedling → plant with flowers.</li>
         <li>Below each stage, write what it looks like.</li>
         <li>At the bottom, write: "Plants need water, sunlight, soil, and air."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and say what a plant needs to grow.</p>`,

      [{ heading: 'Exercise 55.1 — Draw your poster', items: [
          'Title',
          '4 stages of growth',
          'Labels under each stage',
          'One sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What do plants need to grow?', a: ['water', 'sunlight', 'soil', 'air', 'any'] },
       { q: 'What does a seed become?', a: ['sprout', 'plant', 'seedling', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Month 3 Wrap-up
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: 'Review', days: [

    D(1, '🔁', 'Review Living & Non-Living',
      'Review the characteristics of living and non-living things.',
      `<p class='big-emoji'>🌱 🪨 🔁</p>
       <p>Let's remember what we learned in Weeks 1–3.</p>

       <h3>Living Things</h3>
       <ul>
         <li>They <b>grow</b>, <b>move</b>, <b>breathe</b>, and <b>eat</b>.</li>
         <li>They <b>have young ones</b>.</li>
         <li>They die one day.</li>
       </ul>

       <h3>Non-Living Things</h3>
       <ul>
         <li>They do not grow, move, breathe, or eat.</li>
         <li>Examples: 🪨 stones, 📕 books, 🪑 chairs.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 columns: "Living" with 3 examples, "Non-Living" with 3 examples.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Is a goat living or non-living?</p>
       <p><b>Answer:</b> A goat is <b>living</b> — it grows, eats, moves, and has young ones.</p>`,

      [{ heading: 'Exercise 56.1 — Say', items: [
          'Is a dog living or non-living?',
          'Is a stone living or non-living?',
          'Is a tree living or non-living?'
        ]},
       { heading: 'Exercise 56.2 — Write', items: [
          'List 5 living things.',
          'List 5 non-living things.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Is a dog living?', a: ['yes', 'living'] },
       { q: 'Is a stone living?', a: ['no', 'non-living'] },
       { q: 'Name 3 living things.', a: ['dog', 'cat', 'tree', 'any'] }]),

    D(2, '🔁', 'Review Body & Health',
      'Review the human body and health.',
      `<p class='big-emoji'>👦 🧼 🔁</p>

       <h3>Body Parts</h3>
       <ul>
         <li>Head, eyes, ears, nose, mouth, hands, legs, feet.</li>
       </ul>

       <h3>Healthy Habits</h3>
       <ul>
         <li>Wash hands before eating.</li>
         <li>Brush teeth twice a day.</li>
         <li>Bathe every day.</li>
         <li>Eat a balanced diet.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a body with 6 parts labelled. Draw 3 healthy habits next to it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do we see with?</p>
       <p><b>Answer:</b> We see with our <b>eyes</b>.</p>`,

      [{ heading: 'Exercise 57.1 — Say', items: [
          'What do we see with?',
          'What do we hear with?',
          'What do we smell with?',
          'What do we eat with?'
        ]},
       { heading: 'Exercise 57.2 — Answer', items: [
          'Name 3 healthy habits.',
          'How often should you brush your teeth?'
        ]}],

      `<p><b>57.1:</b> 1. Eyes 2. Ears 3. Nose 4. Mouth</p>`,

      [{ q: 'What do you see with?', a: ['eyes'] },
       { q: 'What do you hear with?', a: ['ears'] },
       { q: 'What do you smell with?', a: ['nose'] }]),

    D(3, '🔁', 'Review Weather',
      'Review the four main weather types.',
      `<p class='big-emoji'>☀️ 🌧️ 💨 ⛅ 🔁</p>

       <h3>Weather Types</h3>
       <ul>
         <li>☀️ <b>Sunny</b> — the sun is bright and it is hot.</li>
         <li>🌧️ <b>Rainy</b> — it rains from the clouds.</li>
         <li>💨 <b>Windy</b> — the air is moving.</li>
         <li>⛅ <b>Cloudy</b> — many clouds in the sky.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 weather types in 4 boxes.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which weather makes you wet?</p>
       <p><b>Answer:</b> <b>Rainy</b> weather.</p>`,

      [{ heading: 'Exercise 58.1 — Say', items: [
          'What is the weather today?',
          'What do you use in the rain?',
          'What do you wear in the sun?'
        ]},
       { heading: 'Exercise 58.2 — Answer', items: [
          'Name 4 types of weather.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 2 types of weather.', a: ['sunny', 'rainy', 'windy', 'cloudy', 'any'] },
       { q: 'What do you use in the rain?', a: ['umbrella'] }]),

    D(4, '🔁', 'Review Plants & Water',
      'Review plants and water.',
      `<p class='big-emoji'>🌱 💧 🔁</p>

       <h3>Plants</h3>
       <ul>
         <li>Plants need: water, sunlight, soil, air.</li>
         <li>Parts: root, stem, leaf, flower, fruit, seed.</li>
       </ul>

       <h3>Water</h3>
       <ul>
         <li>Sources: rain, rivers, lakes, wells, taps.</li>
         <li>Uses: drinking, cooking, bathing, watering plants.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a plant with parts labelled. Draw 3 sources of water.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do plants need to grow?</p>
       <p><b>Answer:</b> Plants need <b>water, sunlight, soil, and air</b>.</p>`,

      [{ heading: 'Exercise 59.1 — Say', items: [
          'What do plants need?',
          'Name 3 sources of water.',
          'Name 3 uses of water.'
        ]},
       { heading: 'Exercise 59.2 — Draw', items: [
          'Draw a plant with parts labelled.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'What do plants need?', a: ['water', 'sunlight', 'soil', 'air', 'any'] },
       { q: 'Name a source of water.', a: ['rain', 'river', 'well', 'any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate learning from Month 3.',
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>

       <h3>Well Done!</h3>
       <p>You have completed Month 3 of Grade 2 Science.</p>

       <h3>What to Do Today</h3>
       <ul>
         <li>Show your posters to your family.</li>
         <li>Explain what you learned about plants, water, weather, and living things.</li>
         <li>Give yourself a big star! ⭐</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your best work from the month.</p>`,

      [{ heading: 'Exercise 60.1 — Celebrate!', items: [
          'Show your posters',
          'Explain what you learned',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful month of learning!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: HUMANS AND THE ENVIRONMENT — Healthy Habits
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: 'Healthy Habits', days: [

    D(1, '🧼', 'Washing Hands',
      'Demonstrate correct hand washing.',
      `<p class='big-emoji'>🧼 🤲 💧</p>
       <p>Washing hands is one of the best ways to stay healthy. Germs are very tiny living things that make us sick. They live on our hands.</p>

       <h3>When to Wash Your Hands</h3>
       <ul>
         <li>Before eating.</li>
         <li>After using the toilet.</li>
         <li>After playing outside.</li>
         <li>After coughing or sneezing.</li>
         <li>After touching animals.</li>
       </ul>

       <h3>How to Wash Your Hands (5 Steps)</h3>
       <ol>
         <li><b>Wet</b> your hands with clean water.</li>
         <li>Add <b>soap</b>.</li>
         <li><b>Rub</b> your hands together for 20 seconds — between fingers, under nails, and the backs of hands.</li>
         <li><b>Rinse</b> with clean water.</li>
         <li><b>Dry</b> with a clean towel or air-dry.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes showing the 5 steps of handwashing. Label each step.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we wash our hands before eating?</p>
       <p><b>Answer:</b> To remove <b>germs</b> so they do not enter our body with the food.</p>`,

      [{ heading: 'Exercise 61.1 — Answer', items: [
          'What do we use to wash hands?',
          'How long should we rub our hands?',
          'When should we wash hands?'
        ]},
       { heading: 'Exercise 61.2 — Say and do', items: [
          'Show the 5 steps of handwashing.',
          'Wash your hands properly now.'
        ]}],

      `<p><b>61.1:</b> 1. Soap and water. 2. 20 seconds. 3. Before eating, after toilet, etc.</p>`,

      [{ q: 'What do we use to wash hands?', a: ['soap', 'soap and water'] },
       { q: 'How long to rub?', a: ['20 seconds', 'twenty seconds'] }]),

    D(2, '🦷', 'Brushing Teeth',
      'Demonstrate correct tooth brushing.',
      `<p class='big-emoji'>🦷 🪥 ✨</p>
       <p>Teeth help us chew food and smile. We must keep them clean.</p>

       <h3>Why Brush Your Teeth?</h3>
       <ul>
         <li>To remove food particles.</li>
         <li>To prevent tooth decay (holes).</li>
         <li>To keep fresh breath.</li>
         <li>To have a bright smile.</li>
       </ul>

       <h3>How to Brush (Steps)</h3>
       <ol>
         <li>Put a small amount of <b>toothpaste</b> on your brush.</li>
         <li>Brush the <b>top</b> teeth (up and down).</li>
         <li>Brush the <b>bottom</b> teeth (up and down).</li>
         <li>Brush the <b>inside</b> surfaces.</li>
         <li>Brush your <b>tongue</b>.</li>
         <li><b>Rinse</b> with water.</li>
       </ol>

       <h3>When to Brush</h3>
       <ul>
         <li>Every <b>morning</b>.</li>
         <li>Every <b>night before bed</b>.</li>
         <li>After eating sweet food (if possible).</li>
       </ul>

       <h3>Things to Avoid</h3>
       <ul>
         <li>Too many sweets.</li>
         <li>Too much sugar.</li>
         <li>Not brushing at all.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a toothbrush and toothpaste. Draw a happy, healthy tooth next to them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many times a day should you brush?</p>
       <p><b>Answer:</b> <b>Twice a day</b> — morning and night.</p>`,

      [{ heading: 'Exercise 62.1 — Answer', items: [
          'Why do we brush our teeth?',
          'How many times a day should we brush?',
          'What do we use to brush?',
          'What food should we avoid?'
        ]},
       { heading: 'Exercise 62.2 — Draw', items: [
          'Draw a happy tooth and a sad tooth.'
        ]}],

      `<p><b>62.1:</b> 1. To remove food and prevent decay. 2. Twice. 3. Toothbrush and toothpaste. 4. Sweets.</p>`,

      [{ q: 'How many times brush?', a: ['twice', '2', 'twice a day'] },
       { q: 'What do we use?', a: ['toothbrush', 'toothpaste'] }]),

    D(3, '🛁', 'Bathing',
      'Know why and how we bathe.',
      `<p class='big-emoji'>🛁 🚿 🧴</p>
       <p>Bathing keeps our body clean. It removes dirt, sweat, and germs. It also makes us feel fresh.</p>

       <h3>Why We Bathe</h3>
       <ul>
         <li>Remove dirt and sweat.</li>
         <li>Prevent body odour (bad smell).</li>
         <li>Prevent skin diseases.</li>
         <li>Feel fresh and happy.</li>
       </ul>

       <h3>How Often?</h3>
       <ul>
         <li>At least <b>once every day</b>.</li>
         <li>Twice on hot days.</li>
         <li>Always after playing sports or working hard.</li>
       </ul>

       <h3>Things We Use</h3>
       <ul>
         <li>🧼 Soap</li>
         <li>🧽 Sponge or washcloth</li>
         <li>💧 Clean water</li>
         <li>🧴 Lotion or oil</li>
         <li>👕 Clean clothes</li>
       </ul>

       <h3>Other Cleanliness Habits</h3>
       <ul>
         <li>Cut your nails short.</li>
         <li>Wash your hair often.</li>
         <li>Wear clean clothes.</li>
         <li>Keep your shoes clean.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself bathing. Include a sponge, soap, and water.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How often should we bathe?</p>
       <p><b>Answer:</b> At least <b>once every day</b>.</p>`,

      [{ heading: 'Exercise 63.1 — Answer', items: [
          'Why do we bathe?',
          'How often should we bathe?',
          'What do we use to bathe?',
          'Name 2 other cleanliness habits.'
        ]},
       { heading: 'Exercise 63.2 — Draw', items: [
          'Draw 3 things you use when bathing.'
        ]}],

      `<p><b>63.1:</b> 1. To stay clean and healthy. 2. Daily. 3. Soap, sponge, water. 4. Cut nails, wash hair.</p>`,

      [{ q: 'How often should you bathe?', a: ['every day', 'daily'] },
       { q: 'What do we use?', a: ['soap', 'water'] }]),

    D(4, '🍎', 'Eating Healthy',
      'Know the importance of healthy eating.',
      `<p class='big-emoji'>🍎 🥕 🥛 🍚</p>
       <p>Eating good food helps us grow, work, and fight sickness. We need a <b>balanced diet</b>.</p>

       <h3>Food Groups</h3>
       <ul>
         <li><b>Energy foods</b> — rice, bread, yam, maize.</li>
         <li><b>Body-building foods</b> — beans, eggs, fish, chicken.</li>
         <li><b>Protective foods</b> — oranges, mangoes, vegetables.</li>
         <li><b>Water</b> — at least 4–6 cups a day.</li>
       </ul>

       <h3>Healthy Eating Habits</h3>
       <ul>
         <li>Eat 3 meals a day.</li>
         <li>Eat fruits and vegetables.</li>
         <li>Drink plenty of water.</li>
         <li>Wash hands before eating.</li>
         <li>Do not eat too many sweets.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a plate with 3 sections: rice (energy), beans (body-building), vegetables (protective).</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we eat fruits and vegetables?</p>
       <p><b>Answer:</b> They contain <b>vitamins</b> that protect us from sickness.</p>`,

      [{ heading: 'Exercise 64.1 — Answer', items: [
          'What food gives us energy?',
          'What food helps us grow?',
          'What food protects us?',
          'How many meals a day?'
        ]},
       { heading: 'Exercise 64.2 — Draw', items: [
          'Draw a balanced meal.'
        ]}],

      `<p><b>64.1:</b> 1. Rice, yam, bread. 2. Beans, eggs, fish. 3. Fruits and vegetables. 4. 3.</p>`,

      [{ q: 'Which food gives energy?', a: ['rice', 'yam', 'maize', 'any'] },
       { q: 'How many meals a day?', a: ['3', 'three'] }]),

    D(5, '🎨', 'Healthy Poster',
      'Consolidate learning about healthy habits.',
      `<p>Make a "Healthy Habits" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Healthy Me!"</b></li>
         <li>Draw 4 healthy habits: washing hands, brushing teeth, bathing, eating fruits.</li>
         <li>Write a sentence under each.</li>
         <li>Bottom: "I keep my body clean and healthy."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say why each habit is important.</p>`,

      [{ heading: 'Exercise 65.1 — Draw your healthy poster', items: [
          'Washing hands',
          'Brushing teeth',
          'Bathing',
          'Eating fruits'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 healthy habits.', a: ['washing', 'brushing', 'bathing', 'any'] },
       { q: 'Why are healthy habits important?', a: ['to stay healthy', 'to avoid sickness', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: HUMANS AND THE ENVIRONMENT — Safety
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: 'Safety', days: [

    D(1, '🔥', 'Fire Safety',
      'Know fire safety rules.',
      `<p class='big-emoji'>🔥 🚫 🚒</p>
       <p>Fire is very dangerous. It can burn us, our home, and our things. We must be careful.</p>

       <h3>Never Do These!</h3>
       <ul>
         <li>🚫 Never play with matches or lighters.</li>
         <li>🚫 Never play near fire or cooking fire.</li>
         <li>🚫 Never touch electrical wires.</li>
         <li>🚫 Never leave a candle burning.</li>
       </ul>

       <h3>If You See Fire</h3>
       <ol>
         <li>Do NOT try to put it out alone.</li>
         <li>Shout for help: "Fire! Fire!"</li>
         <li>Tell an adult immediately.</li>
         <li>Call the fire service (192).</li>
         <li>Get out of the house quickly.</li>
         <li>Stay low if there is smoke.</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a fire and a red circle with a slash (🚫) over a match. Write "Do not play with fire".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if you see fire?</p>
       <p><b>Answer:</b> Shout for help and tell an <b>adult</b>. Never try to put it out alone.</p>`,

      [{ heading: 'Exercise 66.1 — Answer', items: [
          'What should you not play with?',
          'Who should you tell if you see fire?',
          'What is the fire service number?'
        ]},
       { heading: 'Exercise 66.2 — Draw', items: [
          'Draw a fire and the number 192.'
        ]}],

      `<p><b>66.1:</b> 1. Matches, lighters. 2. An adult. 3. 192.</p>`,

      [{ q: 'What should you never play with?', a: ['fire', 'matches', 'any'] },
       { q: 'Who should you tell?', a: ['an adult', 'adult'] }]),

    D(2, '🚦', 'Road Safety',
      'Know the rules for crossing a road safely.',
      `<p class='big-emoji'>🚦 🚸 🚗</p>
       <p>Roads are dangerous. Cars move fast. We must be careful when we walk near or cross roads.</p>

       <h3>How to Cross a Road Safely</h3>
       <ol>
         <li><b>Stop</b> at the edge of the road.</li>
         <li><b>Look</b> left and right and left again.</li>
         <li><b>Listen</b> for cars.</li>
         <li><b>Wait</b> until the road is clear.</li>
         <li><b>Walk</b> — never run.</li>
         <li><b>Hold</b> an adult's hand.</li>
       </ol>

       <h3>Safe Places to Cross</h3>
       <ul>
         <li>Zebra crossing (white stripes).</li>
         <li>Where a traffic warden is helping.</li>
         <li>At traffic lights when the light is red for cars.</li>
       </ul>

       <h3>Never Do These!</h3>
       <ul>
         <li>🚫 Do not play on the road.</li>
         <li>🚫 Do not run across the road.</li>
         <li>🚫 Do not cross between parked cars.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a zebra crossing. Draw a child holding an adult's hand crossing the road.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do before crossing a road?</p>
       <p><b>Answer:</b> Look both ways (left, right, left) and <b>listen</b>.</p>`,

      [{ heading: 'Exercise 67.1 — Answer', items: [
          'What do you do before crossing the road?',
          'Who should you hold?',
          'Name 2 safe places to cross.'
        ]},
       { heading: 'Exercise 67.2 — Draw', items: [
          'Draw a zebra crossing and label it.'
        ]}],

      `<p><b>67.1:</b> 1. Look both ways. 2. An adult. 3. Zebra crossing, traffic lights.</p>`,

      [{ q: 'What do you do before crossing?', a: ['look both ways'] },
       { q: 'Who do you hold?', a: ['an adult', 'adult', 'parent'] }]),

    D(3, '💧', 'Water Safety',
      'Know the rules for water safety.',
      `<p class='big-emoji'>💧 🌊 🚫</p>
       <p>Water can be fun — for drinking, swimming, and playing. But water can also be dangerous. Rivers and wells are deep. We can drown.</p>

       <h3>Rules for Water Safety</h3>
       <ul>
         <li>Never go near deep water alone.</li>
         <li>Never swim in a river or lake without an adult.</li>
         <li>Never play near wells or ponds.</li>
         <li>Always go to the water with an adult.</li>
         <li>Wear a life jacket on a boat.</li>
         <li>Do not run near swimming pools.</li>
       </ul>

       <h3>If Someone Is in Trouble in Water</h3>
       <ol>
         <li><b>Do not</b> jump in to save them.</li>
         <li>Shout for help loudly.</li>
         <li>Call an adult immediately.</li>
         <li>Throw something that floats (like a rope or a bottle).</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a river with a red circle-slash symbol. Write "Do not go alone."</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should you not swim in a river alone?</p>
       <p><b>Answer:</b> Because rivers are <b>deep</b> and can be dangerous. You might drown.</p>`,

      [{ heading: 'Exercise 68.1 — Answer', items: [
          'Where should you not play alone?',
          'Who should be with you near water?',
          'What should you do if someone is in trouble?'
        ]},
       { heading: 'Exercise 68.2 — Draw', items: [
          'Draw a warning sign next to a river.'
        ]}],

      `<p><b>68.1:</b> 1. Deep water. 2. An adult. 3. Shout for help.</p>`,

      [{ q: 'Where should you not play alone?', a: ['deep water', 'river', 'well'] },
       { q: 'Who should be with you?', a: ['an adult', 'adult'] }]),

    D(4, '👤', 'Stranger Safety',
      'Know the rules for dealing with strangers.',
      `<p class='big-emoji'>👤 🚫 ⚠️</p>
       <p>A <b>stranger</b> is someone you do not know. Most strangers are good people. But some are dangerous. We must be careful.</p>

       <h3>Rules for Stranger Safety</h3>
       <ul>
         <li>🚫 Never go anywhere with a stranger.</li>
         <li>🚫 Never take gifts, sweets, or money from a stranger.</li>
         <li>🚫 Never get into a stranger's car.</li>
         <li>🚫 Never tell a stranger your name, address, or school.</li>
         <li>🚫 Never open the door to a stranger when you are alone.</li>
       </ul>

       <h3>What to Do if a Stranger Talks to You</h3>
       <ol>
         <li>Say "No!" loudly.</li>
         <li>Walk away quickly.</li>
         <li>Run to a safe place (a shop, a police station, a trusted adult).</li>
         <li>Tell a trusted adult immediately.</li>
       </ol>

       <h3>Trusted Adults</h3>
       <ul>
         <li>Parents</li>
         <li>Teachers</li>
         <li>Police officers</li>
         <li>Grandparents</li>
         <li>Family friends you know well</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a stranger offering sweets to a child. Cross out the picture with a red X. Write "Say NO!".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What should you do if a stranger offers you sweets?</p>
       <p><b>Answer:</b> Say <b>"No!"</b> and walk away to a trusted adult.</p>`,

      [{ heading: 'Exercise 69.1 — Answer', items: [
          'What is a stranger?',
          'Should you take gifts from strangers?',
          'Who should you tell if a stranger talks to you?',
          'Name 3 trusted adults.'
        ]},
       { heading: 'Exercise 69.2 — Draw', items: [
          'Draw a "Say NO!" poster.'
        ]}],

      `<p><b>69.1:</b> 1. Someone you don\'t know. 2. No. 3. A trusted adult. 4. Parents, teachers, police.</p>`,

      [{ q: 'Should you take gifts from strangers?', a: ['no'] },
       { q: 'Who should you tell?', a: ['an adult', 'parent', 'trusted adult'] }]),

    D(5, '🎨', 'Safety Poster',
      'Consolidate learning about safety.',
      `<p>Make a "Safety" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Stay Safe!"</b></li>
         <li>Divide the paper into 4 sections.</li>
         <li>Section 1: Fire safety — no matches.</li>
         <li>Section 2: Road safety — look both ways.</li>
         <li>Section 3: Water safety — never alone.</li>
         <li>Section 4: Stranger safety — say NO!</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain the safety rule for each section.</p>`,

      [{ heading: 'Exercise 70.1 — Draw your safety poster', items: [
          'Fire safety',
          'Road safety',
          'Water safety',
          'Stranger safety'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 safety rules.', a: ['fire', 'road', 'water', 'stranger', 'any'] },
       { q: 'What should you do before crossing a road?', a: ['look both ways'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: CYCLES — Seasons
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: 'Seasons', days: [

    D(1, '🌧️', 'Rainy Season',
      'Know the characteristics of the rainy season.',
      `<p class='big-emoji'>🌧️ ☔ 🌱</p>
       <p>In Ghana, there are two main seasons: the <b>rainy season</b> and the <b>dry season</b>. Today we learn about the rainy season.</p>

       <h3>When is the Rainy Season?</h3>
       <p>It usually lasts from <b>April to October</b> in most parts of Ghana.</p>

       <h3>What Happens in the Rainy Season?</h3>
       <ul>
         <li>🌧️ Heavy rain falls.</li>
         <li>💧 Rivers and streams fill up.</li>
         <li>🌱 Plants grow well.</li>
         <li>🌾 Farmers plant their crops.</li>
         <li>🌡️ The weather is cool.</li>
         <li>🐸 Frogs and insects are many.</li>
       </ul>

       <h3>How We Dress</h3>
       <ul>
         <li>Wear a raincoat.</li>
         <li>Wear boots.</li>
         <li>Carry an umbrella.</li>
       </ul>

       <h3>Dangers of the Rainy Season</h3>
       <ul>
         <li>Flooding.</li>
         <li>Mosquitoes breed in stagnant water.</li>
         <li>Roads become muddy.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a rainy season scene: heavy rain, a river full of water, and a farmer planting.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do farmers like the rainy season?</p>
       <p><b>Answer:</b> Because <b>crops need rain</b> to grow.</p>`,

      [{ heading: 'Exercise 71.1 — Answer', items: [
          'When is the rainy season?',
          'What happens in the rainy season?',
          'What do we wear?',
          'Why do farmers like it?'
        ]},
       { heading: 'Exercise 71.2 — Draw', items: [
          'Draw a rainy scene with a farmer.'
        ]}],

      `<p><b>71.1:</b> 1. April to October. 2. Heavy rain. 3. Raincoat, boots. 4. Crops need rain.</p>`,

      [{ q: 'When is the rainy season?', a: ['april to october', 'april', 'any'] },
       { q: 'Why do farmers like rain?', a: ['crops need it', 'plants need it', 'any'] }]),

    D(2, '☀️', 'Dry Season',
      'Know the characteristics of the dry season.',
      `<p class='big-emoji'>☀️ 🌵 🔥</p>
       <p>The <b>dry season</b> is the time when there is little or no rain in Ghana. It usually lasts from <b>November to March</b>.</p>

       <h3>What Happens in the Dry Season?</h3>
       <ul>
         <li>☀️ Very hot weather.</li>
         <li>🌾 The land becomes dry.</li>
         <li>💧 Rivers and streams dry up.</li>
         <li>🌵 Plants wilt and die.</li>
         <li>🍂 Leaves turn brown and fall.</li>
         <li>💨 Dusty air from the harmattan.</li>
       </ul>

       <h3>How We Live in the Dry Season</h3>
       <ul>
         <li>Drink more water.</li>
         <li>Wear light clothes.</li>
         <li>Stay in the shade.</li>
         <li>Use lotion for dry skin.</li>
       </ul>

       <h3>Dangers of the Dry Season</h3>
       <ul>
         <li>Water shortage.</li>
         <li>Bush fires.</li>
         <li>Crops fail.</li>
         <li>Animals look for water.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a dry season scene: hot sun, dry land, a dry river, and a wilting plant.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do we drink more water in the dry season?</p>
       <p><b>Answer:</b> Because the weather is very <b>hot</b> and we lose water through sweat.</p>`,

      [{ heading: 'Exercise 72.1 — Answer', items: [
          'When is the dry season?',
          'What happens to the land?',
          'What should we drink?',
          'Name 2 dangers of the dry season.'
        ]},
       { heading: 'Exercise 72.2 — Draw', items: [
          'Draw a dry season scene.'
        ]}],

      `<p><b>72.1:</b> 1. Nov–Mar. 2. Dries up. 3. More water. 4. Bush fires, water shortage.</p>`,

      [{ q: 'When is the dry season?', a: ['november to march', 'november', 'any'] },
       { q: 'What should we drink?', a: ['water'] }]),

    D(3, '💨', 'Harmattan',
      'Know what harmattan is and how it affects us.',
      `<p class='big-emoji'>💨 🏜️ 🧴</p>
       <p>The <b>harmattan</b> is a dry, dusty wind that blows from the Sahara Desert across West Africa. It arrives during the dry season, usually from <b>December to February</b>.</p>

       <h3>What Happens During Harmattan?</h3>
       <ul>
         <li>💨 Dusty air.</li>
         <li>🌫️ A fine haze in the morning.</li>
         <li>❄️ Cool nights and mornings.</li>
         <li>☀️ Hot afternoons.</li>
         <li>🌵 Dry skin and lips.</li>
         <li>🩸 Nosebleeds can happen.</li>
       </ul>

       <h3>How to Protect Yourself</h3>
       <ul>
         <li>🧴 Use lotion for dry skin.</li>
         <li>💄 Use lip balm for dry lips.</li>
         <li>😷 Cover your mouth and nose if it is dusty.</li>
         <li>💧 Drink plenty of water.</li>
         <li>🚪 Close windows if it is too dusty.</li>
       </ul>

       <h3>Good Things About Harmattan</h3>
       <ul>
         <li>Clothes dry quickly.</li>
         <li>It is cool at night.</li>
         <li>Dusty winds can blow away mosquitoes for a while.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a harmattan morning: a hazy sky, dusty air, a child wearing lotion, and dry leaves on a tree.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does the harmattan wind come from?</p>
       <p><b>Answer:</b> It comes from the <b>Sahara Desert</b>.</p>`,

      [{ heading: 'Exercise 73.1 — Answer', items: [
          'What is harmattan?',
          'When does harmattan come?',
          'What happens to our skin?',
          'How do we protect ourselves?'
        ]},
       { heading: 'Exercise 73.2 — Draw', items: [
          'Draw a harmattan morning.'
        ]}],

      `<p><b>73.1:</b> 1. Dry windy season. 2. Dec–Feb. 3. It dries. 4. Lotion, lip balm, water.</p>`,

      [{ q: 'What is harmattan?', a: ['dry wind', 'dusty wind', 'wind'] },
       { q: 'When does it come?', a: ['december to february', 'any'] }]),

    D(4, '🌦️', 'Changing Seasons',
      'Know that seasons change and affect our lives.',
      `<p class='big-emoji'>🌦️ 🔄 🌍</p>
       <p>Ghana has two main seasons that change through the year. Each season affects how we live, dress, farm, and eat.</p>

       <h3>The Two Seasons</h3>
       <ul>
         <li><b>Rainy season</b> — April to October.</li>
         <li><b>Dry season</b> — November to March.</li>
       </ul>

       <h3>How Seasons Affect Us</h3>
       <ul>
         <li><b>Farming:</b> Farmers plant during the rains.</li>
         <li><b>Clothes:</b> Light clothes in the dry, raincoats in the wet.</li>
         <li><b>Water:</b> More water in the rains; less in the dry.</li>
         <li><b>Food:</b> Fresh crops in the rainy season; stored food in the dry.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Divide the page in two. On the left, draw the rainy season. On the right, draw the dry season.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> When do farmers plant their crops?</p>
       <p><b>Answer:</b> During the <b>rainy season</b>, when there is plenty of water.</p>`,

      [{ heading: 'Exercise 74.1 — Answer', items: [
          'Name 2 seasons in Ghana.',
          'When is the rainy season?',
          'When is the dry season?',
          'What do farmers do in the rainy season?'
        ]},
       { heading: 'Exercise 74.2 — Draw', items: [
          'Draw both seasons side by side.'
        ]}],

      `<p><b>74.1:</b> 1. Rainy, dry. 2. April–Oct. 3. Nov–Mar. 4. Plant crops.</p>`,

      [{ q: 'Name a season in Ghana.', a: ['rainy', 'dry', 'harmattan', 'any'] },
       { q: 'When do farmers plant?', a: ['rainy season', 'during the rains', 'any'] }]),

    D(5, '🎨', 'Season Poster',
      'Consolidate learning about seasons.',
      `<p>Make a "Seasons" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Seasons in Ghana"</b></li>
         <li>Left side: Rainy season — rain, green plants, a farmer.</li>
         <li>Right side: Dry season — hot sun, dry land, dusty air.</li>
         <li>Bottom: Write the months for each season.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Describe what happens in each season.</p>`,

      [{ heading: 'Exercise 75.1 — Draw your season poster', items: [
          'Rainy season',
          'Dry season',
          'Months for each'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Which season do you like?', a: ['any'] },
       { q: 'When is the rainy season?', a: ['april to october', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Month 4 Wrap-up
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: 'Review', days: [

    D(1, '🔁', 'Review Weather & Seasons',
      'Review weather and seasons.',
      `<p class='big-emoji'>🌦️ 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Weather: sunny, rainy, windy, cloudy.</li>
         <li>Seasons: rainy season, dry season, harmattan.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 weather types and 2 seasons.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the harmattan?</p>
       <p><b>Answer:</b> A dry dusty wind from the Sahara.</p>`,

      [{ heading: 'Exercise 76.1 — Say', items: [
          'Name 4 weather types.',
          'Name 2 seasons.',
          'What is harmattan?'
        ]},
       { heading: 'Exercise 76.2 — Answer', items: [
          'What do we wear in the rain?',
          'What do we wear in the sun?'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name a season.', a: ['rainy', 'dry', 'any'] },
       { q: 'What is harmattan?', a: ['dry wind', 'dusty wind', 'any'] }]),

    D(2, '🔁', 'Review Safety',
      'Review safety rules.',
      `<p class='big-emoji'>🚦 🔥 💧 👤</p>

       <h3>Review</h3>
       <ul>
         <li>🔥 Fire safety: don\'t play with matches.</li>
         <li>🚦 Road safety: look both ways.</li>
         <li>💧 Water safety: never alone.</li>
         <li>👤 Stranger safety: say NO!</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one safety rule for each category.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do before crossing a road?</p>
       <p><b>Answer:</b> Look both ways and listen.</p>`,

      [{ heading: 'Exercise 77.1 — Say', items: [
          'What should you never play with?',
          'What do you do before crossing?',
          'Who should be with you near water?',
          'What do you say to a stranger?'
        ]},
       { heading: 'Exercise 77.2 — Draw', items: [
          'Draw a safety poster.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'What should you never play with?', a: ['matches', 'fire'] },
       { q: 'What do you do before crossing?', a: ['look both ways'] }]),

    D(3, '🔁', 'Review Health',
      'Review health and hygiene.',
      `<p class='big-emoji'>🧼 🔁 🍎</p>

       <h3>Review</h3>
       <ul>
         <li>Wash hands before eating.</li>
         <li>Brush teeth twice a day.</li>
         <li>Bathe every day.</li>
         <li>Eat a balanced diet.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 healthy habits.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many times should you brush your teeth?</p>
       <p><b>Answer:</b> Twice a day.</p>`,

      [{ heading: 'Exercise 78.1 — Say', items: [
          'Name 4 healthy habits.',
          'How often should you brush?',
          'What do you use to wash your hands?'
        ]},
       { heading: 'Exercise 78.2 — Draw', items: [
          'Draw a healthy habits poster.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 3 healthy habits.', a: ['washing', 'brushing', 'bathing', 'any'] },
       { q: 'How often brush teeth?', a: ['twice', '2 times'] }]),

    D(4, '🔁', 'Review Plants & Animals',
      'Review plants and animals.',
      `<p class='big-emoji'>🌱 🐕 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Plants need: water, sunlight, soil, air.</li>
         <li>Animals: pets, farm, wild, insects.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 plants and 3 animals.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do plants need to grow?</p>
       <p><b>Answer:</b> Water, sunlight, soil, air.</p>`,

      [{ heading: 'Exercise 79.1 — Say', items: [
          'What do plants need?',
          'Name 3 animals.',
          'Name 3 insects.'
        ]},
       { heading: 'Exercise 79.2 — Draw', items: [
          'Draw a plant with parts labelled.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'What do plants need?', a: ['water', 'sunlight', 'soil', 'air', 'any'] },
       { q: 'Name a wild animal.', a: ['lion', 'elephant', 'any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate learning from Month 4.',
      `<p class='big-emoji'>🎉 ⭐</p>

       <h3>Well Done!</h3>
       <p>You have completed Month 4 of Grade 2 Science.</p>

       <h3>Show and Tell</h3>
       <p>Show your posters. Give yourself a big star! ⭐</p>`,

      [{ heading: 'Exercise 80.1 — Celebrate!', items: [
          'Show your posters',
          'Explain what you learned',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful month of learning!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DIVERSITY OF MATTER — Animals & Homes
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: 'Animals & Homes', days: [

    D(1, '🏠', 'Where Do Animals Live?',
      'Know the different homes of animals.',
      `<p class='big-emoji'>🏠 🕳️ 🌳 🕸️</p>
       <p>Every animal has a home. The home protects it from danger and weather, and keeps its young ones safe.</p>

       <h3>Animal Homes</h3>
       <ul>
         <li>🐦 <b>Bird</b> — nest (in trees).</li>
         <li>🐝 <b>Bee</b> — hive.</li>
         <li>🐜 <b>Ant</b> — anthill.</li>
         <li>🐟 <b>Fish</b> — water (river, sea, pond).</li>
         <li>🐰 <b>Rabbit</b> — burrow (a hole in the ground).</li>
         <li>🐕 <b>Dog</b> — kennel.</li>
         <li>🐄 <b>Cow</b> — kraal or pen.</li>
         <li>🐔 <b>Hen</b> — coop.</li>
         <li>🕷️ <b>Spider</b> — web.</li>
         <li>🐍 <b>Snake</b> — hole or under rocks.</li>
         <li>🦁 <b>Lion</b> — cave or den.</li>
         <li>🐒 <b>Monkey</b> — trees.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 animals and their homes: bird/nest, bee/hive, fish/water, dog/kennel.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where does a bee live?</p>
       <p><b>Answer:</b> A bee lives in a <b>hive</b>.</p>`,

      [{ heading: 'Exercise 81.1 — Match', items: [
          'Bird → nest',
          'Bee → hive',
          'Ant → anthill',
          'Fish → water',
          'Dog → kennel'
        ]},
       { heading: 'Exercise 81.2 — Answer', items: [
          'Where does a bird live?',
          'Where does a fish live?',
          'Where does a dog live?'
        ]},
       { heading: 'Exercise 81.3 — Draw', items: [
          'Draw 3 animals and their homes.'
        ]}],

      `<p><b>81.2:</b> 1. Nest 2. Water 3. Kennel</p>`,

      [{ q: 'Where does a bird live?', a: ['nest'] },
       { q: 'Where does a bee live?', a: ['hive'] },
       { q: 'Where does a fish live?', a: ['water'] }]),

    D(2, '🕳️', 'More Homes',
      'Learn more animal homes.',
      `<p class='big-emoji'>🕳️ 🕸️ 🏔️</p>

       <h3>More Animal Homes</h3>
       <ul>
         <li>🕷️ <b>Spider</b> — web (a sticky net).</li>
         <li>🐻 <b>Bear</b> — cave.</li>
         <li>🦇 <b>Bat</b> — cave or hollow tree.</li>
         <li>🐜 <b>Termite</b> — mound.</li>
         <li>🐢 <b>Tortoise</b> — shell and burrow.</li>
         <li>🐸 <b>Frog</b> — near water or pond.</li>
         <li>🦅 <b>Eagle</b> — high on a cliff or tall tree.</li>
       </ul>

       <h3>Why Animals Need Homes</h3>
       <ul>
         <li>Protection from enemies.</li>
         <li>Protection from weather.</li>
         <li>Safe place for young ones.</li>
         <li>Place to store food.</li>
         <li>Place to rest and sleep.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a spider web with a spider on it. Draw a cave with a bear inside.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why do animals need homes?</p>
       <p><b>Answer:</b> For <b>protection</b>, to raise young ones, and to rest.</p>`,

      [{ heading: 'Exercise 82.1 — Answer', items: [
          'Where does a spider live?',
          'Where does a bear live?',
          'Why do animals need homes?'
        ]},
       { heading: 'Exercise 82.2 — Draw', items: [
          'Draw a spider web.'
        ]}],

      `<p><b>82.1:</b> 1. Web. 2. Cave. 3. Protection, young ones.</p>`,

      [{ q: 'Where does a spider live?', a: ['web'] },
       { q: 'Why do animals need homes?', a: ['protection', 'safety', 'any'] }]),

    D(3, '🍽️', 'What Do Animals Eat?',
      'Know what different animals eat.',
      `<p class='big-emoji'>🌿 🥩 🍎</p>
       <p>Animals eat different kinds of food. We group them by what they eat.</p>

       <h3>Animal Groups by Food</h3>
       <ul>
         <li>🌿 <b>Herbivores</b> — eat plants (cow, goat, sheep, rabbit, grasshopper, elephant).</li>
         <li>🥩 <b>Carnivores</b> — eat meat (lion, tiger, snake, eagle, cat).</li>
         <li>🍎 <b>Omnivores</b> — eat both plants and meat (monkey, hen, pig, dog).</li>
       </ul>

       <h3>Examples</h3>
       <ul>
         <li>🐄 Cow eats grass (herbivore).</li>
         <li>🦁 Lion eats meat (carnivore).</li>
         <li>🐕 Dog eats meat and rice (omnivore).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 columns: Herbivores, Carnivores, Omnivores. Draw one animal in each column.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a lion eat?</p>
       <p><b>Answer:</b> A lion eats <b>meat</b>. It is a carnivore.</p>`,

      [{ heading: 'Exercise 83.1 — Sort', items: [
          'Sort: cow, lion, monkey, goat, snake, dog, elephant, cat.'
        ]},
       { heading: 'Exercise 83.2 — Answer', items: [
          'What does a goat eat?',
          'What does a lion eat?',
          'Name one omnivore.'
        ]}],

      `<p><b>83.1:</b> Herbivores: cow, goat, elephant. Carnivores: lion, snake, cat. Omnivores: monkey, dog.</p>`,

      [{ q: 'What does a goat eat?', a: ['plants', 'grass', 'any'] },
       { q: 'What does a lion eat?', a: ['meat', 'animals'] },
       { q: 'Name an omnivore.', a: ['monkey', 'dog', 'pig', 'any'] }]),

    D(4, '🐣', 'Animal Babies',
      'Know the names of baby animals.',
      `<p class='big-emoji'>🐣 🐶 🐱 🐄</p>

       <h3>Baby Animal Names</h3>
       <ul>
         <li>🐕 Dog → <b>puppy</b></li>
         <li>🐈 Cat → <b>kitten</b></li>
         <li>🐄 Cow → <b>calf</b></li>
         <li>🐐 Goat → <b>kid</b></li>
         <li>🐔 Hen → <b>chick</b></li>
         <li>🐑 Sheep → <b>lamb</b></li>
         <li>🐖 Pig → <b>piglet</b></li>
         <li>🐴 Horse → <b>foal</b></li>
         <li>🐰 Rabbit → <b>bunny</b></li>
         <li>🦆 Duck → <b>duckling</b></li>
       </ul>

       <h3>How Animals Have Young Ones</h3>
       <ul>
         <li>Some animals <b>lay eggs</b> (hen, bird, snake, fish).</li>
         <li>Some animals <b>give birth</b> to live young (dog, cat, cow, goat).</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pairs: dog/puppy, cat/kitten, cow/calf, hen/chick.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a baby dog called?</p>
       <p><b>Answer:</b> A baby dog is a <b>puppy</b>.</p>`,

      [{ heading: 'Exercise 84.1 — Answer', items: [
          'Baby dog?',
          'Baby cat?',
          'Baby cow?',
          'Baby hen?',
          'Baby goat?'
        ]},
       { heading: 'Exercise 84.2 — Draw', items: [
          'Draw a cat and her kitten.'
        ]}],

      `<p><b>84.1:</b> 1. Puppy 2. Kitten 3. Calf 4. Chick 5. Kid</p>`,

      [{ q: 'Baby dog?', a: ['puppy'] },
       { q: 'Baby cat?', a: ['kitten'] },
       { q: 'Baby cow?', a: ['calf'] }]),

    D(5, '🎨', 'Homes Poster',
      'Consolidate learning about animals and their homes.',
      `<p>Make an "Animal Homes" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Animal Homes"</b></li>
         <li>Draw 5 animals and their homes.</li>
         <li>Write the name of the home under each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say where each animal lives.</p>`,

      [{ heading: 'Exercise 85.1 — Draw your homes poster', items: [
          'Bird/nest',
          'Bee/hive',
          'Fish/water',
          'Rabbit/burrow',
          'Dog/kennel'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Where does a rabbit live?', a: ['burrow'] },
       { q: 'Where does a bird live?', a: ['nest'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: DIVERSITY OF MATTER — Insects
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: 'Insects', days: [

    D(1, '🐜', 'Ants',
      'Know about ants and how they live.',
      `<p class='big-emoji'>🐜 🍬 🏘️</p>
       <p><b>Ants</b> are small insects. They live in large groups. They are very hardworking.</p>

       <h3>Facts About Ants</h3>
       <ul>
         <li>🐜 They live in <b>anthills</b> or under the ground.</li>
         <li>👑 They have a <b>queen</b> who lays eggs.</li>
         <li>🍬 They love sweet food.</li>
         <li>💪 They can carry things heavier than themselves.</li>
         <li>🐛 They have 6 legs and 2 antennae.</li>
         <li>🤝 They work together.</li>
       </ul>

       <h3>Life of an Ant</h3>
       <ol>
         <li>Egg</li>
         <li>Larva</li>
         <li>Pupa</li>
         <li>Adult ant</li>
       </ol>

       <h3>Good Things About Ants</h3>
       <ul>
         <li>They clean the environment — they eat dead insects.</li>
         <li>They help the soil by moving it.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw an anthill and 5 ants. Draw one ant carrying a piece of food.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where do ants live?</p>
       <p><b>Answer:</b> Ants live in <b>anthills</b>.</p>`,

      [{ heading: 'Exercise 86.1 — Answer', items: [
          'Where do ants live?',
          'How many legs does an ant have?',
          'What do ants love to eat?',
          'What do ants carry?'
        ]},
       { heading: 'Exercise 86.2 — Draw', items: [
          'Draw an anthill with ants.'
        ]}],

      `<p><b>86.1:</b> 1. Anthill 2. Six 3. Sweet food 4. Food</p>`,

      [{ q: 'Where do ants live?', a: ['anthill'] },
       { q: 'How many legs does an ant have?', a: ['6', 'six'] }]),

    D(2, '🐝', 'Bees',
      'Know about bees and how they make honey.',
      `<p class='big-emoji'>🐝 🍯 🌺</p>
       <p><b>Bees</b> are small insects with wings. They make <b>honey</b>, which is sweet and good for us.</p>

       <h3>Facts About Bees</h3>
       <ul>
         <li>🐝 They live in <b>hives</b>.</li>
         <li>👑 They have a <b>queen bee</b>.</li>
         <li>🍯 They make <b>honey</b> from flower nectar.</li>
         <li>🌺 They help flowers make seeds.</li>
         <li>💛 Bees are yellow and black.</li>
         <li>⚡ They have a stinger — they can sting if angry.</li>
       </ul>

       <h3>How Bees Make Honey</h3>
       <ol>
         <li>Bees visit flowers.</li>
         <li>They collect nectar (sweet juice).</li>
         <li>They carry the nectar to the hive.</li>
         <li>They turn the nectar into honey.</li>
         <li>They store honey in the hive.</li>
       </ol>

       <h3>Why Bees Are Important</h3>
       <ul>
         <li>They give us honey.</li>
         <li>They help flowers and crops produce seeds.</li>
         <li>They help farmers get more fruits.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a hive with bees flying to flowers. Draw a honey jar labelled "Honey".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do bees make?</p>
       <p><b>Answer:</b> Bees make <b>honey</b>.</p>`,

      [{ heading: 'Exercise 87.1 — Answer', items: [
          'Where do bees live?',
          'What do bees make?',
          'What colour are bees?',
          'Why are bees important?'
        ]},
       { heading: 'Exercise 87.2 — Draw', items: [
          'Draw a bee on a flower.'
        ]}],

      `<p><b>87.1:</b> 1. Hive 2. Honey 3. Yellow and black 4. Honey, pollination</p>`,

      [{ q: 'What do bees make?', a: ['honey'] },
       { q: 'Where do bees live?', a: ['hive'] }]),

    D(3, '🦋', 'Butterflies',
      'Know the life cycle of a butterfly.',
      `<p class='big-emoji'>🦋 🐛 🥚</p>
       <p><b>Butterflies</b> are beautiful insects with colourful wings. They go through a big change called <b>metamorphosis</b>.</p>

       <h3>The Life Cycle of a Butterfly</h3>
       <ol>
         <li>🥚 <b>Egg</b> — the female butterfly lays eggs on a leaf.</li>
         <li>🐛 <b>Caterpillar</b> — hatches from the egg and eats leaves.</li>
         <li>🟤 <b>Chrysalis (pupa)</b> — the caterpillar wraps itself in a hard shell.</li>
         <li>🦋 <b>Butterfly</b> — after weeks, the butterfly comes out.</li>
       </ol>

       <h3>Facts About Butterflies</h3>
       <ul>
         <li>They have colourful wings.</li>
         <li>They drink nectar from flowers.</li>
         <li>They help flowers make seeds.</li>
         <li>They cannot bite or sting.</li>
         <li>They have 6 legs and 2 antennae.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the 4 stages of the butterfly life cycle in 4 boxes: egg, caterpillar, chrysalis, butterfly.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What comes out of a butterfly egg?</p>
       <p><b>Answer:</b> A <b>caterpillar</b> comes out of the egg.</p>`,

      [{ heading: 'Exercise 88.1 — Answer', items: [
          'Where do butterflies lay eggs?',
          'What comes out of the egg?',
          'What does a caterpillar become?',
          'What does a butterfly drink?'
        ]},
       { heading: 'Exercise 88.2 — Draw', items: [
          'Draw the butterfly life cycle.'
        ]}],

      `<p><b>88.1:</b> 1. On leaves. 2. Caterpillar. 3. Chrysalis then butterfly. 4. Nectar.</p>`,

      [{ q: 'What comes out of a butterfly egg?', a: ['caterpillar'] },
       { q: 'What does a caterpillar become?', a: ['chrysalis', 'butterfly'] },
       { q: 'What does a butterfly drink?', a: ['nectar'] }]),

    D(4, '🦟', 'Mosquitoes',
      'Know the dangers of mosquitoes and how to protect ourselves.',
      `<p class='big-emoji'>🦟 🦠 🌙</p>
       <p><b>Mosquitoes</b> are small flying insects. They bite us and drink our blood. Their bites can make us sick.</p>

       <h3>Facts About Mosquitoes</h3>
       <ul>
         <li>🦟 They bite at night and in the evening.</li>
         <li>🦠 Their bite can cause <b>malaria</b>.</li>
         <li>💧 They breed in stagnant (still) water.</li>
         <li>🔊 They buzz near your ears.</li>
         <li>🦟 Only female mosquitoes bite.</li>
       </ul>

       <h3>How to Protect Yourself</h3>
       <ul>
         <li>🌙 Sleep under a <b>treated mosquito net</b>.</li>
         <li>💧 Do not allow water to collect in old tyres, tins, or buckets.</li>
         <li>🕯️ Use mosquito coils or sprays.</li>
         <li>👕 Wear long sleeves in the evening.</li>
         <li>🏥 If you get malaria, go to the hospital.</li>
       </ul>

       <h3>Symptoms of Malaria</h3>
       <ul>
         <li>Fever</li>
         <li>Headache</li>
         <li>Body pains</li>
         <li>Vomiting</li>
         <li>Feeling cold</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a mosquito net with a child sleeping under it. Draw a mosquito outside the net.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How can we protect ourselves from mosquitoes?</p>
       <p><b>Answer:</b> By sleeping under a <b>treated mosquito net</b> and keeping our environment clean.</p>`,

      [{ heading: 'Exercise 89.1 — Answer', items: [
          'What disease do mosquitoes cause?',
          'When do mosquitoes bite?',
          'Where do mosquitoes breed?',
          'How can we protect ourselves?'
        ]},
       { heading: 'Exercise 89.2 — Draw', items: [
          'Draw a mosquito net.'
        ]}],

      `<p><b>89.1:</b> 1. Malaria 2. Night/evening 3. Stagnant water 4. Net, keep clean</p>`,

      [{ q: 'What disease do mosquitoes cause?', a: ['malaria'] },
       { q: 'When do mosquitoes bite?', a: ['night', 'evening', 'at night'] },
       { q: 'How do we protect ourselves?', a: ['net', 'mosquito net', 'any'] }]),

    D(5, '🎨', 'Insect Poster',
      'Consolidate learning about insects.',
      `<p>Make an "Insect" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Insects Around Us"</b></li>
         <li>Draw 4 insects: ant, bee, butterfly, mosquito.</li>
         <li>Write the name under each.</li>
         <li>Mark each one as "Good" or "Harmful".</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say one fact about each insect.</p>`,

      [{ heading: 'Exercise 90.1 — Draw your insect poster', items: [
          'Ant — Good',
          'Bee — Good',
          'Butterfly — Good',
          'Mosquito — Harmful'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 insects.', a: ['ant', 'bee', 'butterfly', 'any'] },
       { q: 'Which insect is harmful?', a: ['mosquito'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: HUMANS AND THE ENVIRONMENT — Our Environment
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: 'Our Environment', days: [

    D(1, '🌳', 'Trees & Plants',
      'Know the importance of trees and plants.',
      `<p class='big-emoji'>🌳 🌱 🌍</p>

       <h3>Why Trees and Plants Matter</h3>
       <ul>
         <li>🌳 They give us <b>oxygen</b> to breathe.</li>
         <li>🌳 They take in <b>carbon dioxide</b> (bad air).</li>
         <li>🌳 They give us <b>shade</b>.</li>
         <li>🌳 They give us <b>fruit</b>.</li>
         <li>🌳 They give us <b>wood</b>.</li>
         <li>🌳 They help bring <b>rain</b>.</li>
         <li>🌳 They give <b>homes</b> to animals.</li>
         <li>🌳 They <b>hold the soil</b> to prevent erosion.</li>
       </ul>

       <h3>Why We Must Protect Them</h3>
       <ul>
         <li>🚫 Do not cut trees carelessly.</li>
         <li>🌱 Plant new trees.</li>
         <li>💧 Water young plants.</li>
         <li>🔥 Prevent bush fires.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a forest. Add 3 things we get from trees: fruit, shade, oxygen.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we plant more trees?</p>
       <p><b>Answer:</b> To give us oxygen, bring rain, and prevent soil erosion.</p>`,

      [{ heading: 'Exercise 91.1 — Answer', items: [
          'What gas do trees give us?',
          'Name 4 things trees give us.',
          'Why should we plant more trees?'
        ]},
       { heading: 'Exercise 91.2 — Draw', items: [
          'Draw a tree and what it gives us.'
        ]}],

      `<p><b>91.1:</b> 1. Oxygen 2. Fruit, wood, shade, oxygen 3. For air, rain, protection</p>`,

      [{ q: 'What gas do trees give us?', a: ['oxygen'] },
       { q: 'Name 3 things from trees.', a: ['fruit', 'wood', 'shade', 'any'] }]),

    D(2, '💧', 'Water & Rivers',
      'Know the importance of water and rivers.',
      `<p class='big-emoji'>💧 🌊 🐟</p>

       <h3>Why Water and Rivers Matter</h3>
       <ul>
         <li>💧 We drink water.</li>
         <li>🐟 Fish live in rivers — we eat fish.</li>
         <li>🌱 Water helps plants grow.</li>
         <li>⚓ Rivers are used for transport.</li>
         <li>⚡ Dams make electricity.</li>
       </ul>

       <h3>Why We Must Protect Rivers</h3>
       <ul>
         <li>🚫 Do not throw rubbish into rivers.</li>
         <li>🚫 Do not wash clothes or bathe in drinking-water streams.</li>
         <li>🚫 Do not use chemicals that kill fish.</li>
         <li>🌱 Plant trees along riverbanks.</li>
       </ul>

       <h3>Effects of Polluted Rivers</h3>
       <ul>
         <li>Fish die.</li>
         <li>Water becomes unsafe to drink.</li>
         <li>People get sick with cholera and diarrhoea.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clean river with fish and a dirty river with rubbish. Circle the clean one in green and the dirty one in red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we not throw rubbish into rivers?</p>
       <p><b>Answer:</b> Rubbish <b>pollutes</b> the water and kills the fish.</p>`,

      [{ heading: 'Exercise 92.1 — Answer', items: [
          'Why is water important?',
          'What lives in rivers?',
          'What happens if rivers are polluted?'
        ]},
       { heading: 'Exercise 92.2 — Draw', items: [
          'Draw a clean river with fish.'
        ]}],

      `<p><b>92.1:</b> 1. We drink it. 2. Fish. 3. Fish die, water unsafe.</p>`,

      [{ q: 'What lives in rivers?', a: ['fish'] },
       { q: 'Why not pollute rivers?', a: ['kills fish', 'unsafe water', 'any'] }]),

    D(3, '🗑️', 'Keeping Clean',
      'Know how to keep the environment clean.',
      `<p class='big-emoji'>🗑️ 🧹 ♻️</p>
       <p>A clean environment is a healthy environment. We must all help keep our surroundings clean.</p>

       <h3>How to Keep Our Environment Clean</h3>
       <ul>
         <li>🗑️ Put rubbish in the bin.</li>
         <li>🧹 Sweep your compound.</li>
         <li>🚫 Do not litter (throw rubbish on the ground).</li>
         <li>🌱 Plant flowers and trees.</li>
         <li>🏫 Keep classrooms and school clean.</li>
         <li>🏠 Keep your home clean.</li>
       </ul>

       <h3>Why Keeping Clean Matters</h3>
       <ul>
         <li>It prevents disease.</li>
         <li>It keeps away flies, rats, and mosquitoes.</li>
         <li>It makes us feel proud.</li>
         <li>It makes our country beautiful.</li>
       </ul>

       <h3>Types of Rubbish</h3>
       <ul>
         <li><b>Recyclable</b> — plastic bottles, tins, paper, glass.</li>
         <li><b>Food waste</b> — peels, leftovers.</li>
         <li><b>Other</b> — old batteries, broken items.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 pictures: (1) A clean environment with trees and bins. (2) A dirty environment with litter. Put a green tick on the clean one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we keep our environment clean?</p>
       <p><b>Answer:</b> To prevent disease and stay healthy.</p>`,

      [{ heading: 'Exercise 93.1 — Answer', items: [
          'Where should rubbish go?',
          'What should you not do?',
          'Name 3 ways to keep clean.',
          'Why keep the environment clean?'
        ]},
       { heading: 'Exercise 93.2 — Draw', items: [
          'Draw a clean environment with a bin.'
        ]}],

      `<p><b>93.1:</b> 1. Bin 2. Litter 3. Sweep, use bin, plant 4. To stay healthy</p>`,

      [{ q: 'Where should rubbish go?', a: ['bin', 'trash', 'garbage'] },
       { q: 'Why keep clean?', a: ['to prevent disease', 'to stay healthy', 'any'] }]),

    D(4, '🌱', 'Planting Trees',
      'Know how to plant and care for trees.',
      `<p class='big-emoji'>🌱 🌳 🌍</p>
       <p>Planting trees is one of the best ways to help our environment. Trees give us oxygen, shade, fruit, and homes for animals.</p>

       <h3>How to Plant a Tree</h3>
       <ol>
         <li>Choose a good spot with sunlight.</li>
         <li>Dig a hole bigger than the roots.</li>
         <li>Place the small tree in the hole.</li>
         <li>Fill the hole with soil.</li>
         <li>Water the tree well.</li>
         <li>Put a small fence around it if needed.</li>
       </ol>

       <h3>How to Care for a Tree</h3>
       <ul>
         <li>💧 Water it regularly.</li>
         <li>🌿 Remove weeds around it.</li>
         <li>🚫 Do not let animals eat it.</li>
         <li>✂️ Trim it when necessary.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 stages: a small seedling, a young tree, and a big tree with fruit.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why should we plant trees?</p>
       <p><b>Answer:</b> To replace cut trees, give us oxygen, fruit, and shade.</p>`,

      [{ heading: 'Exercise 94.1 — Answer', items: [
          'What do you need to plant a tree?',
          'How do you care for a tree?',
          'Why plant trees?'
        ]},
       { heading: 'Exercise 94.2 — Activity', items: [
          'Plant a tree or a seed today.',
          'Water it daily.'
        ]}],

      `<p><b>94.1:</b> 1. Hole, soil, water 2. Water, weed 3. For air, fruit, shade</p>`,

      [{ q: 'Why plant trees?', a: ['for shade', 'for fruit', 'for air', 'any'] },
       { q: 'What do trees need?', a: ['water', 'sunlight', 'soil', 'any'] }]),

    D(5, '🎨', 'Environment Poster',
      'Consolidate learning about the environment.',
      `<p>Make an "Environment" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Save Our Environment"</b></li>
         <li>Draw trees, a clean river, a bin, and flowers.</li>
         <li>Write 3 ways to keep the environment clean.</li>
         <li>Bottom: <i>"We must protect our environment."</i></li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say 3 ways to protect the environment.</p>`,

      [{ heading: 'Exercise 95.1 — Draw your environment poster', items: [
          'Trees',
          'Clean river',
          'Bin',
          'Flowers'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 ways to protect the environment.', a: ['plant trees', 'don\'t litter', 'keep clean', 'any'] },
       { q: 'Why protect the environment?', a: ['for health', 'for animals', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: FORCES AND ENERGY — Simple Machines
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: 'Simple Machines', days: [

    D(1, '⚙️', 'Wheels',
      'Know that wheels help things move.',
      `<p class='big-emoji'>⚙️ 🚗 🛒</p>
       <p>A <b>wheel</b> is a simple machine. It is a round object that turns. Wheels help things move easily.</p>

       <h3>Things with Wheels</h3>
       <ul>
         <li>🚗 Car</li>
         <li>🚌 Bus</li>
         <li>🚲 Bicycle</li>
         <li>🛒 Cart</li>
         <li>🎠 Wheelbarrow</li>
         <li>🛴 Scooter</li>
         <li>🚂 Train</li>
       </ul>

       <h3>How Wheels Help Us</h3>
       <ul>
         <li>They make it easier to move heavy loads.</li>
         <li>They help vehicles travel faster.</li>
         <li>They reduce friction (rubbing).</li>
         <li>They make work easier.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 things with wheels: a car, a bicycle, and a wheelbarrow.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a wheel do?</p>
       <p><b>Answer:</b> A wheel <b>helps things move</b>.</p>`,

      [{ heading: 'Exercise 96.1 — Answer', items: [
          'What is a wheel?',
          'Name 3 things with wheels.',
          'How do wheels help us?'
        ]},
       { heading: 'Exercise 96.2 — Draw', items: [
          'Draw a car with wheels.'
        ]}],

      `<p><b>96.1:</b> 1. A round object that turns 2. Car, bicycle, cart 3. Move things</p>`,

      [{ q: 'Name something with wheels.', a: ['car', 'bicycle', 'any'] },
       { q: 'What does a wheel do?', a: ['helps things move', 'move', 'roll'] }]),

    D(2, '🪜', 'Ramps',
      'Know that ramps help us move things up.',
      `<p class='big-emoji'>🪜 ⬆️ 📦</p>
       <p>A <b>ramp</b> is a flat surface that is higher at one end and lower at the other. It helps us push things up.</p>

       <h3>Where We See Ramps</h3>
       <ul>
         <li>🏥 Hospital entrances (for wheelchairs).</li>
         <li>🏬 Shops and hotels.</li>
         <li>🚚 Loading bays for lorries.</li>
         <li>🏫 Some school buildings.</li>
         <li>🛞 Car garages.</li>
       </ul>

       <h3>How Ramps Help Us</h3>
       <ul>
         <li>They make it easier to push heavy things up.</li>
         <li>They help people in wheelchairs.</li>
         <li>They help load goods into lorries.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a ramp with a box being pushed up by a person. Draw arrows showing the direction.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a ramp used for?</p>
       <p><b>Answer:</b> A ramp is used to <b>push things up</b> easily.</p>`,

      [{ heading: 'Exercise 97.1 — Answer', items: [
          'What is a ramp?',
          'Where do we see ramps?',
          'How do ramps help?'
        ]},
       { heading: 'Exercise 97.2 — Draw', items: [
          'Draw a ramp with a wheelchair.'
        ]}],

      `<p><b>97.1:</b> 1. A slope 2. Hospital, shop 3. Push things up</p>`,

      [{ q: 'What is a ramp?', a: ['slope'] },
       { q: 'What does a ramp help with?', a: ['pushing things up', 'moving'] }]),

    D(3, '🔧', 'Tools',
      'Know common tools and their uses.',
      `<p class='big-emoji'>🔧 🔨 🪛 ✂️</p>
       <p><b>Tools</b> are things we use to make work easier. Every tool has a special use.</p>

       <h3>Common Tools and Their Uses</h3>
       <ul>
         <li>🔨 <b>Hammer</b> — to hit nails.</li>
         <li>🪛 <b>Screwdriver</b> — to turn screws.</li>
         <li>🪚 <b>Saw</b> — to cut wood.</li>
         <li>🔧 <b>Spanner</b> — to turn nuts and bolts.</li>
         <li>✂️ <b>Scissors</b> — to cut paper or cloth.</li>
         <li>🔪 <b>Knife</b> — to cut food.</li>
         <li>🪣 <b>Bucket</b> — to carry water.</li>
         <li>🧹 <b>Broom</b> — to sweep the floor.</li>
       </ul>

       <h3>Safety When Using Tools</h3>
       <ul>
         <li>Always ask an adult before using tools.</li>
         <li>Use the right tool for the right job.</li>
         <li>Keep tools sharp and clean.</li>
         <li>Put tools away after use.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 tools: hammer, screwdriver, saw, scissors. Write what each one does.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is a hammer used for?</p>
       <p><b>Answer:</b> A hammer is used to <b>hit nails</b>.</p>`,

      [{ heading: 'Exercise 98.1 — Match', items: [
          'Hammer → hit nails',
          'Saw → cut wood',
          'Scissors → cut paper',
          'Screwdriver → turn screws'
        ]},
       { heading: 'Exercise 98.2 — Answer', items: [
          'What does a hammer do?',
          'What does a saw do?',
          'What do we use a broom for?'
        ]}],

      `<p><b>98.2:</b> 1. Hit nails 2. Cut wood 3. Sweep</p>`,

      [{ q: 'What does a hammer do?', a: ['hit nails', 'hammer'] },
       { q: 'What does a saw do?', a: ['cut wood', 'saw'] }]),

    D(4, '📝', 'Machine Sentences',
      'Write sentences about simple machines.',
      `<p class='big-emoji'>✍️ ⚙️ 📝</p>

       <h3>Examples</h3>
       <ul>
         <li>A wheel helps a car <b>move</b>.</li>
         <li>A ramp helps us <b>push things up</b>.</li>
         <li>A hammer helps us <b>hit nails</b>.</li>
         <li>A broom helps us <b>sweep</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture for 2 of the sentences.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a sentence about a wheel.</p>
       <p><b>Answer:</b> A wheel helps a car move.</p>`,

      [{ heading: 'Exercise 99.1 — Write 3 sentences', items: [
          'A wheel ______.',
          'A ramp ______.',
          'A hammer ______.'
        ]},
       { heading: 'Exercise 99.2 — Draw', items: [
          'Draw one machine and write a sentence.'
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: 'Write a sentence about a wheel.', a: ['a wheel helps things move', 'any'] },
       { q: 'Write a sentence about a hammer.', a: ['hammer hits nails', 'any'] }]),

    D(5, '🎨', 'Machine Poster',
      'Consolidate learning about simple machines.',
      `<p>Make a "Simple Machines" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Simple Machines"</b></li>
         <li>Draw a wheel, a ramp, and 3 tools.</li>
         <li>Write what each one does.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say how each machine helps us.</p>`,

      [{ heading: 'Exercise 100.1 — Draw your machine poster', items: [
          'Wheel',
          'Ramp',
          'Hammer',
          'Saw',
          'Broom'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 simple machines.', a: ['wheel', 'ramp', 'hammer', 'any'] },
       { q: 'How does a wheel help?', a: ['moves things', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: SCIENCE FUN
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: 'Science Fun', days: [

    D(1, '🧪', 'Mixing Colours',
      'Learn what happens when we mix colours.',
      `<p class='big-emoji'>🔴 🟡 🔵</p>

       <h3>Primary Colours</h3>
       <p>Red, yellow, and blue are <b>primary colours</b>. They cannot be made by mixing other colours.</p>

       <h3>Mixing Primary Colours</h3>
       <ul>
         <li>🔴 Red + 🟡 Yellow = 🟠 <b>Orange</b></li>
         <li>🔵 Blue + 🟡 Yellow = 🟢 <b>Green</b></li>
         <li>🔴 Red + 🔵 Blue = 🟣 <b>Purple</b></li>
       </ul>

       <h3>What to Try</h3>
       <p>Ask your parent for crayons, paints, or coloured water. Mix red and yellow — what do you get?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 pairs of circles. Show the two colours that mix, and the new colour they make.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What colour do you get when you mix red and yellow?</p>
       <p><b>Answer:</b> You get <b>orange</b>.</p>`,

      [{ heading: 'Exercise 101.1 — Answer', items: [
          'Red + Yellow = ?',
          'Blue + Yellow = ?',
          'Red + Blue = ?',
          'Name 3 primary colours.'
        ]},
       { heading: 'Exercise 101.2 — Draw', items: [
          'Draw the colour-mixing chart.'
        ]}],

      `<p><b>101.1:</b> 1. Orange 2. Green 3. Purple 4. Red, yellow, blue</p>`,

      [{ q: 'Red + Yellow = ?', a: ['orange'] },
       { q: 'Blue + Yellow = ?', a: ['green'] },
       { q: 'Red + Blue = ?', a: ['purple'] }]),

    D(2, '💧', 'Floating & Sinking',
      'Know that some things float and some sink.',
      `<p class='big-emoji'>💧 🪨 🍃 🛁</p>
       <p>When we put things in water, some <b>float</b> on top and some <b>sink</b> to the bottom.</p>

       <h3>Things That Float</h3>
       <ul>
         <li>🍃 Leaf</li>
         <li>🪵 Piece of wood</li>
         <li>🛁 Plastic bottle with a cap</li>
         <li>📌 Cork</li>
         <li>🏀 Ball</li>
       </ul>

       <h3>Things That Sink</h3>
       <ul>
         <li>🪨 Stone</li>
         <li>🔩 Iron nail</li>
         <li>🥄 Metal spoon</li>
         <li>🪙 Coin</li>
         <li>⚽ Heavy ball</li>
       </ul>

       <h3>What to Try</h3>
       <p>Fill a bowl with water. Test 5 things. Which float? Which sink?</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bowl of water. Draw 3 things floating and 3 things sinking.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Does a stone float or sink?</p>
       <p><b>Answer:</b> A stone <b>sinks</b>.</p>`,

      [{ heading: 'Exercise 102.1 — Answer', items: [
          'Does a leaf float or sink?',
          'Does a coin float or sink?',
          'Does a wooden spoon float or sink?',
          'Name 3 things that float.'
        ]},
       { heading: 'Exercise 102.2 — Activity', items: [
          'Test 5 things in water.'
        ]}],

      `<p><b>102.1:</b> 1. Float 2. Sink 3. Float 4. Leaf, wood, cork</p>`,

      [{ q: 'Does a stone float or sink?', a: ['sink'] },
       { q: 'Does a leaf float or sink?', a: ['float'] }]),

    D(3, '🎈', 'Blowing Balloons',
      'Know that air fills a balloon.',
      `<p class='big-emoji'>🎈 💨</p>

       <h3>What Happens?</h3>
       <p>When we blow into a balloon, <b>air</b> fills it. The balloon gets bigger. When we let it go, the air rushes out and the balloon flies.</p>

       <h3>Facts About Balloons</h3>
       <ul>
         <li>🎈 Balloons are made of rubber.</li>
         <li>💨 Air fills them.</li>
         <li>🎈 A balloon can pop if there is too much air.</li>
         <li>🎈 Balloons are used for parties.</li>
       </ul>

       <h3>What to Try</h3>
       <ol>
         <li>Blow up a balloon.</li>
         <li>Let the air out slowly.</li>
         <li>What sound does it make?</li>
       </ol>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw an inflated balloon and a deflated balloon. Label "Air in" and "Air out".</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What fills a balloon?</p>
       <p><b>Answer:</b> <b>Air</b> fills a balloon.</p>`,

      [{ heading: 'Exercise 103.1 — Answer', items: [
          'What fills a balloon?',
          'What happens when you blow into a balloon?',
          'What happens when you let it go?'
        ]},
       { heading: 'Exercise 103.2 — Draw', items: [
          'Draw a balloon filled with air.'
        ]}],

      `<p><b>103.1:</b> 1. Air 2. It gets bigger 3. It flies</p>`,

      [{ q: 'What fills a balloon?', a: ['air'] },
       { q: 'What happens when you let it go?', a: ['it flies', 'it moves'] }]),

    D(4, '🌞', 'Shadow Fun',
      'Learn how to make and change shadows.',
      `<p class='big-emoji'>🌞 🌗 ✋</p>
       <p>A shadow is a dark shape made when an object <b>blocks light</b>. We can make shadows using our hands and a light source (like the sun or a torch).</p>

       <h3>How Shadows Change</h3>
       <ul>
         <li>Move closer to the light → shadow gets <b>bigger</b>.</li>
         <li>Move away from the light → shadow gets <b>smaller</b>.</li>
         <li>Move your hand → shadow moves too.</li>
       </ul>

       <h3>Shadow Puppets</h3>
       <p>Use your hands to make shapes on a wall:</p>
       <ul>
         <li>🐕 A dog</li>
         <li>🐦 A bird</li>
         <li>🐰 A rabbit</li>
         <li>🦋 A butterfly</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a torch and a hand casting a shadow on a wall.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What makes a shadow?</p>
       <p><b>Answer:</b> An <b>object blocking light</b> makes a shadow.</p>`,

      [{ heading: 'Exercise 104.1 — Answer', items: [
          'What makes a shadow?',
          'What happens when you move closer to the light?',
          'Name 2 shadow shapes.'
        ]},
       { heading: 'Exercise 104.2 — Activity', items: [
          'Make 3 shadow shapes with your hands.'
        ]}],

      `<p><b>104.1:</b> 1. Object blocking light 2. Shadow gets bigger 3. Dog, bird</p>`,

      [{ q: 'What makes a shadow?', a: ['object blocking light', 'any'] },
       { q: 'What happens when you move closer?', a: ['shadow gets bigger', 'bigger'] }]),

    D(5, '🎨', 'Fun Poster',
      'Consolidate learning from science fun.',
      `<p>Make a "Science Fun" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Science is Fun!"</b></li>
         <li>Draw 4 experiments: mixing colours, floating/sinking, a balloon, a shadow.</li>
         <li>Label each one.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Explain what happens in each experiment.</p>`,

      [{ heading: 'Exercise 105.1 — Draw your fun poster', items: [
          'Mixing colours',
          'Floating & sinking',
          'Balloon',
          'Shadow'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 experiments.', a: ['mixing colours', 'floating', 'balloon', 'shadow', 'any'] },
       { q: 'What makes a shadow?', a: ['object blocking light', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: EARTH & SPACE — Our World
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: 'Our World', days: [

    D(1, '🌍', 'The Earth',
      'Know that we live on the planet Earth.',
      `<p class='big-emoji'>🌍 🌎 🌏</p>
       <p>We live on a planet called <b>Earth</b>. It is a big ball of rock, water, and air.</p>

       <h3>Facts About Earth</h3>
       <ul>
         <li>🌍 Earth is shaped like a <b>sphere</b> (a ball).</li>
         <li>💧 About 70% of Earth is <b>water</b>.</li>
         <li>🌳 About 30% of Earth is <b>land</b>.</li>
         <li>🕰️ Earth spins slowly — that is why we have day and night.</li>
         <li>☀️ Earth goes around the Sun in one year.</li>
       </ul>

       <h3>What We Find on Earth</h3>
       <ul>
         <li>🌳 Plants and trees</li>
         <li>🐕 Animals</li>
         <li>👦 People</li>
         <li>🌊 Oceans, rivers, lakes</li>
         <li>🏔️ Mountains, hills, valleys</li>
         <li>🏜️ Deserts and forests</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw Earth as a big circle with blue water and green land.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What shape is the Earth?</p>
       <p><b>Answer:</b> The Earth is shaped like a <b>sphere</b> (a ball).</p>`,

      [{ heading: 'Exercise 106.1 — Answer', items: [
          'What planet do we live on?',
          'What shape is Earth?',
          'How much of Earth is water?',
          'What do we find on Earth?'
        ]},
       { heading: 'Exercise 106.2 — Draw', items: [
          'Draw Earth with blue water and green land.'
        ]}],

      `<p><b>106.1:</b> 1. Earth 2. Sphere 3. 70% 4. Plants, animals, people, water, land</p>`,

      [{ q: 'What planet do we live on?', a: ['earth'] },
       { q: 'What shape is Earth?', a: ['sphere', 'round', 'ball'] }]),

    D(2, '☀️', 'The Sun',
      'Know that the Sun is a star that gives us light and heat.',
      `<p class='big-emoji'>☀️ ⭐ 🔥</p>
       <p>The <b>Sun</b> is a big star. It is very far from Earth, but it is still very bright. The Sun gives us <b>light</b> and <b>heat</b>.</p>

       <h3>Facts About the Sun</h3>
       <ul>
         <li>☀️ The Sun is a <b>star</b>.</li>
         <li>🔥 It is extremely hot.</li>
         <li>☀️ It is much bigger than Earth.</li>
         <li>💡 It gives us light and heat.</li>
         <li>🌱 Plants use sunlight to make food.</li>
         <li>🌞 It rises in the morning and sets in the evening.</li>
       </ul>

       <h3>Why We Need the Sun</h3>
       <ul>
         <li>Plants need sunlight to grow.</li>
         <li>We need its warmth.</li>
         <li>We use sunlight to dry clothes and food.</li>
         <li>Solar panels make electricity.</li>
       </ul>

       <h3>Careful!</h3>
       <p>Never look directly at the Sun. It can hurt your eyes.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the Sun with rays going out. Draw a plant growing under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does the Sun give us?</p>
       <p><b>Answer:</b> The Sun gives us <b>light</b> and <b>heat</b>.</p>`,

      [{ heading: 'Exercise 107.1 — Answer', items: [
          'What is the Sun?',
          'What does the Sun give us?',
          'What do plants use sunlight for?'
        ]},
       { heading: 'Exercise 107.2 — Draw', items: [
          'Draw the Sun with rays.'
        ]}],

      `<p><b>107.1:</b> 1. A star 2. Light and heat 3. To make food</p>`,

      [{ q: 'What is the Sun?', a: ['a star', 'star'] },
       { q: 'What does the Sun give us?', a: ['light', 'heat', 'light and heat'] }]),

    D(3, '🌙', 'The Moon',
      'Know that the Moon is Earth\'s natural satellite.',
      `<p class='big-emoji'>🌙 ⭐ 🌕</p>
       <p>The <b>Moon</b> is a big ball of rock. It moves around the Earth. It shines at night because it reflects (bounces back) the Sun\'s light.</p>

       <h3>Facts About the Moon</h3>
       <ul>
         <li>🌙 It is smaller than the Earth.</li>
         <li>🌙 It has <b>no light of its own</b>.</li>
         <li>🌙 It takes about <b>28 days</b> to go around the Earth.</li>
         <li>🌙 It has holes (called craters) on its surface.</li>
         <li>🌙 There is no air or water on the Moon.</li>
       </ul>

       <h3>Phases of the Moon</h3>
       <ul>
         <li>🌕 <b>Full moon</b> — bright and round.</li>
         <li>🌓 <b>Half moon</b> — half lit, half dark.</li>
         <li>🌑 <b>New moon</b> — dark, cannot be seen.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the Moon with craters. Draw stars around it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why does the Moon shine?</p>
       <p><b>Answer:</b> Because it reflects the <b>Sun\'s light</b>.</p>`,

      [{ heading: 'Exercise 108.1 — Answer', items: [
          'What is the Moon?',
          'Does the Moon have its own light?',
          'How long does the Moon take to go around the Earth?',
          'What is a full moon?'
        ]},
       { heading: 'Exercise 108.2 — Draw', items: [
          'Draw the Moon at night.'
        ]}],

      `<p><b>108.1:</b> 1. Earth\'s satellite 2. No 3. 28 days 4. Bright round moon</p>`,

      [{ q: 'Does the Moon have its own light?', a: ['no'] },
       { q: 'How long to go around Earth?', a: ['28 days', 'twenty-eight days'] }]),

    D(4, '⭐', 'Stars',
      'Know that stars are big balls of burning gas.',
      `<p class='big-emoji'>⭐ 🌟 ✨</p>
       <p><b>Stars</b> are huge balls of burning gas that shine. We see them as tiny dots of light in the night sky because they are very far away.</p>

       <h3>Facts About Stars</h3>
       <ul>
         <li>⭐ Stars produce their own light.</li>
         <li>☀️ The Sun is the closest star to Earth.</li>
         <li>🌌 There are billions of stars in the sky.</li>
         <li>🌃 We can only see them at night.</li>
         <li>⚡ Stars are extremely hot.</li>
       </ul>

       <h3>Groups of Stars</h3>
       <p>Some stars form shapes called <b>constellations</b>. One famous one looks like a big spoon — the Big Dipper.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a night sky with stars and the Moon. Add a hill at the bottom.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> When can we see stars?</p>
       <p><b>Answer:</b> At <b>night</b>, when the sky is dark and clear.</p>`,

      [{ heading: 'Exercise 109.1 — Answer', items: [
          'What are stars?',
          'When can we see stars?',
          'Which star is closest to Earth?',
          'Why do stars look small?'
        ]},
       { heading: 'Exercise 109.2 — Activity', items: [
          'Look at the night sky with your parent. Count how many stars you can see.'
        ]}],

      `<p><b>109.1:</b> 1. Balls of burning gas 2. Night 3. The Sun 4. They are far away</p>`,

      [{ q: 'When do we see stars?', a: ['night', 'at night'] },
       { q: 'Which star is closest to Earth?', a: ['sun', 'the sun'] }]),

    D(5, '🎨', 'Space Poster',
      'Consolidate learning about space.',
      `<p>Make a "Space" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Our World in Space"</b></li>
         <li>Draw the Sun, the Earth, the Moon, and stars.</li>
         <li>Label each one.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say one fact about each thing.</p>`,

      [{ heading: 'Exercise 110.1 — Draw your space poster', items: [
          'Sun',
          'Earth',
          'Moon',
          'Stars'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 things in space.', a: ['sun', 'earth', 'moon', 'stars', 'any'] },
       { q: 'What does the Sun give us?', a: ['light', 'heat', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW — Month 6 Wrap-up
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: 'Review', days: [

    D(1, '🔁', 'Review Animals & Plants',
      'Review animals and plants.',
      `<p class='big-emoji'>🐕 🌱 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Animals: pets, farm, wild, insects.</li>
         <li>Plants: parts, needs, growth.</li>
         <li>Animal homes and babies.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 animals and 3 plants.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do plants need to grow?</p>
       <p><b>Answer:</b> Water, sunlight, soil, air.</p>`,

      [{ heading: 'Exercise 111.1 — Say', items: [
          'Name 3 animals.',
          'Name 3 plants.',
          'What do plants need?',
          'Name 3 animal homes.'
        ]},
       { heading: 'Exercise 111.2 — Draw', items: [
          'Draw a plant and an animal.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name a farm animal.', a: ['cow', 'goat', 'hen', 'any'] },
       { q: 'What do plants need?', a: ['water', 'sunlight', 'soil', 'air', 'any'] }]),

    D(2, '🔁', 'Review Weather & Water',
      'Review weather and water.',
      `<p class='big-emoji'>🌦️ 💧 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Weather: sunny, rainy, windy, cloudy.</li>
         <li>Water: sources, uses, saving.</li>
         <li>Water cycle: evaporation, condensation, precipitation, collection.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the water cycle.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is evaporation?</p>
       <p><b>Answer:</b> Water turning into vapour due to heat.</p>`,

      [{ heading: 'Exercise 112.1 — Say', items: [
          'Name 4 weather types.',
          'Name 3 sources of water.',
          'What is the water cycle?'
        ]},
       { heading: 'Exercise 112.2 — Draw', items: [
          'Draw the water cycle.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name a weather type.', a: ['sunny', 'rainy', 'windy', 'cloudy', 'any'] },
       { q: 'Name a source of water.', a: ['rain', 'river', 'well', 'any'] }]),

    D(3, '🔁', 'Review Body & Health',
      'Review body parts and health.',
      `<p class='big-emoji'>👦 🧼 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Body parts and their uses.</li>
         <li>Healthy habits: washing hands, brushing teeth, bathing.</li>
         <li>Eating a balanced diet.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a person with parts labelled. Draw 3 healthy habits.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many teeth do we brush?</p>
       <p><b>Answer:</b> All of them — twice a day.</p>`,

      [{ heading: 'Exercise 113.1 — Say', items: [
          'Name 5 body parts.',
          'Name 4 healthy habits.',
          'How often do you brush?'
        ]},
       { heading: 'Exercise 113.2 — Draw', items: [
          'Draw 3 healthy habits.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 3 body parts.', a: ['head', 'eyes', 'hands', 'any'] },
       { q: 'Name 2 healthy habits.', a: ['washing', 'brushing', 'bathing', 'any'] }]),

    D(4, '🔁', 'Review Machines & Space',
      'Review simple machines and space.',
      `<p class='big-emoji'>⚙️ 🌍 🔁</p>

       <h3>Review</h3>
       <ul>
         <li>Simple machines: wheel, ramp, tools.</li>
         <li>Space: Sun, Earth, Moon, stars.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a wheel and the Moon.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a wheel do?</p>
       <p><b>Answer:</b> It helps things move.</p>`,

      [{ heading: 'Exercise 114.1 — Say', items: [
          'Name 3 simple machines.',
          'Name 4 things in space.',
          'What does the Sun give us?'
        ]},
       { heading: 'Exercise 114.2 — Draw', items: [
          'Draw the Sun, Moon, and stars.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name a simple machine.', a: ['wheel', 'ramp', 'any'] },
       { q: 'Name 3 things in space.', a: ['sun', 'earth', 'moon', 'stars', 'any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate end of Grade 2 Science.',
      `<p class='big-emoji'>🎉 ⭐ 🏆</p>

       <h3>Congratulations!</h3>
       <p>You have almost finished Grade 2 Science. Next week is the final review.</p>

       <h3>Show and Tell</h3>
       <p>Show your best posters to your family.</p>`,

      [{ heading: 'Exercise 115.1 — Celebrate!', items: [
          'Show your posters',
          'Explain your favourite topic',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a great year!</p>`,

      [{ q: 'What was your favourite topic?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: FINAL REVIEW & CELEBRATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: 'Final Fun', days: [

    D(1, '🔁', 'Review Everything',
      'Review the whole year of science.',
      `<p class='big-emoji'>🔁 📚 🌟</p>

       <h3>Topics This Year</h3>
       <ul>
         <li>Living and non-living things</li>
         <li>My body and health</li>
         <li>Animals and plants</li>
         <li>Weather, water, and air</li>
         <li>Light, dark, and sound</li>
         <li>Magnets</li>
         <li>Simple machines</li>
         <li>Space (Sun, Moon, stars)</li>
         <li>Environment and safety</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw one thing from your favourite topic.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name one thing you learned this year.</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 116.1 — Say', items: [
          'Name 3 things you learned.',
          'Name your favourite topic.',
          'Name one new word you learned.'
        ]},
       { heading: 'Exercise 116.2 — Draw', items: [
          'Draw your favourite topic.'
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: 'Name a topic you liked.', a: ['any'] },
       { q: 'Name one thing you learned.', a: ['any'] }]),

    D(2, '📖', 'Make a Science Book',
      'Make a science book with your best work.',
      `<p class='big-emoji'>📖 🎨 ✍️</p>
       <p>Today we make a small science book. This will show your parents what you learned this year.</p>

       <h3>What to Do</h3>
       <ol>
         <li>Take 4 sheets of paper.</li>
         <li>Fold them in half and staple the fold.</li>
         <li>Write a title: <b>"My Science Book — Grade 2"</b> and your name.</li>
         <li>On each page, draw one thing you learned.</li>
         <li>Write 2 sentences below each drawing.</li>
       </ol>

       <h3>Suggested Pages</h3>
       <ul>
         <li>Page 1: Living things</li>
         <li>Page 2: My body</li>
         <li>Page 3: Plants and animals</li>
         <li>Page 4: Weather and water</li>
         <li>Page 5: Light and sound</li>
         <li>Page 6: Magnets and machines</li>
         <li>Page 7: Space</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Start with the cover of your book.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you draw on Page 1?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 117.1 — Make your science book', items: [
          'Cover with title and name',
          'Page 1: Living things',
          'Page 2: My body',
          'Page 3: Plants and animals',
          'Page 4: Weather and water',
          'Page 5: Light and sound',
          'Page 6: Magnets and machines',
          'Page 7: Space'
        ]},
       { heading: 'Exercise 117.2 — Read aloud', items: [
          'Read your book to your parent.'
        ]}],

      `<p>⭐ for a completed book.</p>`,

      [{ q: 'What is the title of your book?', a: ['any'] },
       { q: 'What did you put on the cover?', a: ['any'] }]),

    D(3, '🎤', 'Show and Tell',
      'Present your science book to your family.',
      `<p class='big-emoji'>🎤 📖 👨‍👩‍👧</p>
       <p>Today you will present your science book to your family.</p>

       <h3>How to Present</h3>
       <ol>
         <li>Stand up straight.</li>
         <li>Speak clearly and slowly.</li>
         <li>Show each page.</li>
         <li>Say 2 sentences about each page.</li>
         <li>Answer questions from your family.</li>
       </ol>

       <h3>Example Presentation</h3>
       <p>"This is my science book. On this page, I learned about living things. Living things grow, move, and eat. On this page, I learned about my body. I have two eyes, two ears, and one nose."</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself presenting to your family.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What will you say first?</p>
       <p><b>Answer:</b> <b>"This is my science book."</b></p>`,

      [{ heading: 'Exercise 118.1 — Present your book', items: [
          'Stand up straight',
          'Show each page',
          'Say 2 sentences for each',
          'Answer questions'
        ]}],

      `<p>⭐ for confident speaking.</p>`,

      [{ q: 'How did you feel presenting?', a: ['any'] }]),

    D(4, '🎉', 'Party Day!',
      'Celebrate your year of science learning.',
      `<p class='big-emoji'>🎉 ⭐ 🎊</p>
       <p>You have completed Grade 2 Science! Today is your celebration day.</p>

       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your posters to your family.</li>
         <li>🍎 Eat a healthy snack.</li>
         <li>🎵 Sing a song you learned.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>

       <h3>Say This</h3>
       <p>"I finished Grade 2 Science! I learned so much!"</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a party scene with you, your family, and your posters.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you enjoy most this year?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 119.1 — Celebrate!', items: [
          'Show your posters',
          'Eat a healthy snack',
          'Sing a song',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] },
       { q: 'What will you do in Grade 3?', a: ['any'] }]),

    D(5, '⭐', 'Big Star Day',
      'Give yourself the biggest star.',
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today, you are a science champion! You have worked hard all year.</p>

       <h3>Say This</h3>
       <ul>
         <li>⭐ "I am a scientist!"</li>
         <li>⭐ "I love science!"</li>
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
       <p>Draw yourself as a scientist. Add 3 big stars around you.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite science lesson?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: 'Exercise 120.1 — Big Star Day', items: [
          'Say "I am a scientist!"',
          'Say "I love science!"',
          'Say "I will keep learning!"',
          'Give yourself 3 stars! ⭐⭐⭐'
        ]}],

      `<p>⭐⭐⭐ for an amazing year of science!</p>`,

      [{ q: 'What is your favourite lesson?', a: ['any'] },
       { q: 'What do you want to learn next?', a: ['any'] }])
  ]}

];