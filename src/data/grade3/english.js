// src/data/grade3/english.js
// Grade 3 English — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Phonics & Spelling · Grammar · Reading · Writing · Literature

import { D } from '../helpers.js';

export const english = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — PHONICS & SPELLING
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Phonics & Spelling", days: [

    D(1, "🔤", "Short Vowel Sounds",
      "Recognise and spell short-vowel words.",
      `<p class='big-emoji'>🔤 🅰️ 🅴</p>
       <p>A <b>short vowel</b> is the sound a vowel makes in a simple word. The five vowels are <b>a, e, i, o, u</b>.</p>
       <ul>
         <li>Short <b>a</b> — cat, map, sand</li>
         <li>Short <b>e</b> — pen, step, bend</li>
         <li>Short <b>i</b> — sit, trip, wink</li>
         <li>Short <b>o</b> — hot, drop, song</li>
         <li>Short <b>u</b> — cup, drum, lunch</li>
       </ul>
       <p><b>Word List 1:</b> cat, map, sand, pen, step, bend, sit, trip, wink, hot, drop, song, cup, drum, lunch, plant, fresh, wish, clock, trust</p>`,

      [{ heading: "Exercise 1.1 — Circle the vowel in each word.", items: [
          "cat", "pen", "sit", "hot", "cup", "drum", "wish", "clock"
        ]},
       { heading: "Exercise 1.2 — Fill in the missing vowel.", items: [
          "c_t", "m_p", "p_n", "s_t", "h_t", "c_p", "w_sh", "cl_ck"
        ]},
       { heading: "Exercise 1.3 — Sort into 5 columns (a, e, i, o, u).", items: [
          "cat", "pen", "sit", "hot", "cup", "sand", "bend", "wink", "drop", "drum"
        ]}],

      `<p><b>1.2:</b> 1. cat 2. map 3. pen 4. sit 5. hot 6. cup 7. wish 8. clock</p>
       <p><b>1.3:</b> a — cat, sand; e — pen, bend; i — sit, wink; o — hot, drop; u — cup, drum</p>`,

      [{ q: "Which vowel is in 'cat'?", a: ["a"] },
       { q: "Which vowel is in 'cup'?", a: ["u"] },
       { q: "Which vowel is in 'drop'?", a: ["o"] }]),

    D(2, "🔤", "Long Vowel Sounds",
      "Read and spell long-vowel words.",
      `<p class='big-emoji'>🔤 🅰️🅴 🅾️🅴</p>
       <p>A <b>long vowel</b> says its name. Common patterns:</p>
       <ul>
         <li>a_e — cake, game, wave</li>
         <li>ai — rain, train, paint</li>
         <li>ee — tree, green, sleep</li>
         <li>ea — seat, read, dream</li>
         <li>i_e — bike, time, smile</li>
         <li>oa — boat, road, coat</li>
         <li>o_e — home, rope, stone</li>
         <li>u_e — tube, cube, flute</li>
       </ul>
       <p><b>Word List 2:</b> cake, game, wave, rain, train, paint, tree, green, sleep, seat, read, dream, bike, time, smile, boat, road, coat, home, rope</p>`,

      [{ heading: "Exercise 2.1 — Write each word and circle the long vowel.", items: [
          "cake", "rain", "tree", "boat", "bike", "home", "seat", "road"
        ]},
       { heading: "Exercise 2.2 — Write 3 words for each pattern.", items: [
          "a_e", "ee", "oa", "i_e"
        ]}],

      `<p>Any correct set of words.</p>`,

      [{ q: "Write a long-a word with the a_e pattern.", a: ["cake", "game", "wave"] },
       { q: "Write a long-e word with ee.", a: ["tree", "green", "sleep"] },
       { q: "Write a long-o word with oa.", a: ["boat", "road", "coat"] }]),

    D(3, "🔤", "Consonant Blends",
      "Read and spell words with blends.",
      `<p class='big-emoji'>🔤 bl cl fl</p>
       <p>A <b>blend</b> is two consonants said quickly together.</p>
       <ul>
         <li>bl — black, blue, blow</li>
         <li>cl — clap, cloud, clean</li>
         <li>fl — flag, flower, fly</li>
         <li>gl — glad, glue, glass</li>
         <li>pl — plan, plant, play</li>
         <li>sl — slip, sleep, slow</li>
         <li>st — stop, star, stone</li>
         <li>tr — tree, train, trip</li>
       </ul>
       <p><b>Word List 3:</b> black, blue, clap, cloud, flag, flower, glad, glass, plan, plant, slip, sleep, stop, star, stone, tree, train, trip, clean, blow</p>`,

      [{ heading: "Exercise 3.1 — Circle the blend in each word.", items: [
          "black", "clap", "flag", "glad", "plan", "slip", "stop", "train"
        ]},
       { heading: "Exercise 3.2 — Fill in the missing blend.", items: [
          "__ack", "__ap", "__ower", "__ad", "__an", "__eep", "__op", "__ain"
        ]}],

      `<p><b>3.2:</b> 1. black 2. clap 3. flower 4. glad 5. plan 6. sleep 7. stop 8. train</p>`,

      [{ q: "Blend in 'flag'?", a: ["fl"] },
       { q: "Blend in 'stop'?", a: ["st"] },
       { q: "Blend in 'train'?", a: ["tr"] }]),

    D(4, "🔤", "Consonant Digraphs",
      "Read and spell words with digraphs.",
      `<p class='big-emoji'>🔤 ch sh th</p>
       <p>A <b>digraph</b> is two letters that make one sound.</p>
       <ul>
         <li>ch — chair, cheese, church</li>
         <li>sh — ship, shell, brush</li>
         <li>th — think, three, thumb</li>
         <li>wh — wheel, whale, white</li>
         <li>ph — phone, graph, elephant</li>
       </ul>
       <p><b>Word List 4:</b> chair, cheese, church, ship, shell, brush, think, three, thumb, wheel, whale, white, phone, graph, elephant, shadow, shower, feather, whistle, phrase</p>`,

      [{ heading: "Exercise 4.1 — Circle the digraph in each word.", items: [
          "chair", "ship", "think", "wheel", "phone", "shadow", "shower", "feather"
        ]},
       { heading: "Exercise 4.2 — Fill in the missing digraph.", items: [
          "__air", "__ip", "__ink", "__eel", "__one", "__adow", "__ower", "__eather"
        ]}],

      `<p><b>4.2:</b> 1. chair 2. ship 3. think 4. wheel 5. phone 6. shadow 7. shower 8. feather</p>`,

      [{ q: "Digraph in 'chair'?", a: ["ch"] },
       { q: "Digraph in 'ship'?", a: ["sh"] },
       { q: "Digraph in 'think'?", a: ["th"] }]),

    D(5, "🎨", "Spelling Bee Practice",
      "Use all Week 1 words in a spelling bee.",
      `<p class='big-emoji'>🎨 🐝 🔤</p>
       <p>Today we practise for a spelling bee. Say each word, spell it, and write it.</p>
       <h3>Spelling Bee Rules</h3>
       <ol>
         <li>Listen to the word.</li>
         <li>Say the word.</li>
         <li>Spell it letter by letter.</li>
         <li>Say the word again.</li>
       </ol>`,

      [{ heading: "Exercise 5.1 — Write and spell each word from a parent's dictation.", items: [
          "cat", "cake", "clap", "chair", "flower", "ship", "train", "wheel", "phone", "clock"
        ]},
       { heading: "Exercise 5.2 — Draw and label 3 words from this week.", items: []}],

      `<p>Check spelling against the word lists from Days 1–4.</p>`,

      [{ q: "Spell 'flower'.", a: ["flower"] },
       { q: "Spell 'chair'.", a: ["chair"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — BUILDING SENTENCES
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Building Sentences", days: [

    D(1, "📝", "Subject & Predicate",
      "Identify the subject and predicate of a sentence.",
      `<p class='big-emoji'>📝 🔍</p>
       <p>Every sentence has a <b>subject</b> (who or what) and a <b>predicate</b> (what happens).</p>
       <p><i>The boy</i> (subject) <i>runs fast</i> (predicate).</p>
       <h3>More Examples</h3>
       <ul>
         <li><i>The girl</i> / <i>sings a song</i>.</li>
         <li><i>My mother</i> / <i>cooks rice</i>.</li>
         <li><i>The dog</i> / <i>barks loudly</i>.</li>
       </ul>`,

      [{ heading: "Exercise 6.1 — Underline the subject, circle the predicate.", items: [
          "The girl sings.", "My mother cooks.", "The dog barks.", "The children play.", "The sun shines."
        ]},
       { heading: "Exercise 6.2 — Write 3 sentences of your own.", items: [] }],

      `<p><b>6.1:</b> Subject: The girl / My mother / The dog / The children / The sun.</p>`,

      [{ q: "Subject of 'The girl sings.'?", a: ["the girl", "girl"] },
       { q: "Predicate of 'The dog barks.'?", a: ["barks", "the dog barks"] }]),

    D(2, "📝", "Simple Sentences",
      "Write simple sentences with capital letters and full stops.",
      `<p class='big-emoji'>📝 ✅</p>
       <p>A <b>simple sentence</b> has one idea. It starts with a <b>capital</b> letter and ends with a <b>full stop</b>.</p>
       <p><i>I like rice.</i> — capital I, full stop.</p>
       <h3>Rules</h3>
       <ul>
         <li>Start with a capital letter.</li>
         <li>End with a full stop (.).</li>
         <li>Have a subject and a predicate.</li>
       </ul>`,

      [{ heading: "Exercise 7.1 — Rewrite with correct capitals and full stops.", items: [
          "my name is ama", "i live in accra", "the boy runs fast", "we go to school", "the sky is blue"
        ]},
       { heading: "Exercise 7.2 — Write 5 simple sentences about your day.", items: [] }],

      `<p><b>7.1:</b> 1. My name is Ama. 2. I live in Accra. 3. The boy runs fast. 4. We go to school. 5. The sky is blue.</p>`,

      [{ q: "Rewrite: i like rice.", a: ["I like rice.", "I like rice"] },
       { q: "Rewrite: the boy runs.", a: ["The boy runs.", "The boy runs"] }]),

    D(3, "📝", "Question Sentences",
      "Write question sentences with question marks.",
      `<p class='big-emoji'>📝 ❓</p>
       <p>A <b>question</b> asks something. It ends with a <b>question mark (?)</b>.</p>
       <p><i>Where are you going?</i></p>
       <h3>Question Starters</h3>
       <ul>
         <li>What…</li>
         <li>Where…</li>
         <li>When…</li>
         <li>Why…</li>
         <li>How…</li>
         <li>Who…</li>
       </ul>`,

      [{ heading: "Exercise 8.1 — Rewrite as questions.", items: [
          "You are happy.", "She is at school.", "He can swim.", "They like rice.", "It is raining."
        ]},
       { heading: "Exercise 8.2 — Write 5 questions you can ask a friend.", items: [] }],

      `<p><b>8.1:</b> 1. Are you happy? 2. Is she at school? 3. Can he swim? 4. Do they like rice? 5. Is it raining?</p>`,

      [{ q: "Turn into a question: You are happy.", a: ["Are you happy?"] },
       { q: "Turn into a question: She is at school.", a: ["Is she at school?"] }]),

    D(4, "📝", "Command Sentences",
      "Write command sentences.",
      `<p class='big-emoji'>📝 👉</p>
       <p>A <b>command</b> tells someone to do something. It often starts with a verb.</p>
       <p><i>Close the door. Sit down. Open your book.</i></p>
       <h3>Examples</h3>
       <ul>
         <li>Come here.</li>
         <li>Wash your hands.</li>
         <li>Do your homework.</li>
       </ul>`,

      [{ heading: "Exercise 9.1 — Write a command for each situation.", items: [
          "Your friend is talking.", "The door is open.", "A cup is on the table.",
          "The class is noisy.", "A book is on the floor."
        ]},
       { heading: "Exercise 9.2 — Write 5 commands your parent gives you.", items: [] }],

      `<p><b>9.1:</b> Any reasonable command (e.g., Stop talking. / Close the door. / Pick up the cup. / Be quiet. / Pick up the book.)</p>`,

      [{ q: "Give one command for a noisy class.", a: ["be quiet", "stop talking", "quiet"] },
       { q: "Give one command for an open door.", a: ["close the door", "shut the door"] }]),

    D(5, "🎨", "Sentence Game",
      "Play the sentence-building game.",
      `<p class='big-emoji'>🎨 🎮 📝</p>
       <p><b>Game:</b> Parent says a word. Child makes a sentence with it.</p>
       <h3>How to Play</h3>
       <ol>
         <li>Parent says a word.</li>
         <li>Child says a sentence using the word.</li>
         <li>Child writes the sentence.</li>
         <li>Take turns with different words.</li>
       </ol>`,

      [{ heading: "Exercise 10.1 — Write 10 sentences, one for each word.", items: [
          "cat", "school", "rice", "run", "happy", "red", "sing", "door", "friend", "sun"
        ]},
       { heading: "Exercise 10.2 — Draw a picture of your favourite sentence.", items: [] }],

      `<p>Any complete sentence with correct capital and full stop.</p>`,

      [{ q: "Write a sentence with 'school'.", a: ["i go to school", "school", "any"] },
       { q: "Write a sentence with 'happy'.", a: ["i am happy", "happy", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — READING STORIES
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Reading Stories", days: [

    D(1, "📖", "Parts of a Story",
      "Identify beginning, middle, and end.",
      `<p class='big-emoji'>📖 🐦 🌟</p>
       <p>A story has three parts:</p>
       <ul>
         <li><b>Beginning</b> — we meet the characters.</li>
         <li><b>Middle</b> — a problem happens.</li>
         <li><b>End</b> — the problem is solved.</li>
       </ul>
       <p><b>Passage:</b> <i>Ama found a small bird in her garden. Its wing was hurt. She took it home and fed it. Soon the bird got better. Ama set it free.</i></p>`,

      [{ heading: "Exercise 11.1 — Answer:", items: [
          "Who is the main character?", "Where was the bird?", "What was wrong?",
          "What did Ama do?", "What happened at the end?"
        ]},
       { heading: "Exercise 11.2 — Write 3 sentences about a time you helped an animal.", items: [] }],

      `<p><b>11.1:</b> 1. Ama. 2. In her garden. 3. Its wing was hurt. 4. She took it home and fed it. 5. She set it free.</p>`,

      [{ q: "Who is the main character?", a: ["ama"] },
       { q: "What was wrong with the bird?", a: ["its wing was hurt", "hurt wing", "wing hurt"] }]),

    D(2, "📖", "Characters",
      "Describe the characters in a story.",
      `<p class='big-emoji'>📖 👦</p>
       <p><b>Characters</b> are the people or animals in a story.</p>
       <p><b>Passage:</b> <i>Kwame was a kind boy. He always helped his mother. He liked to share his food with his friends.</i></p>
       <h3>Describing Characters</h3>
       <ul>
         <li>What do they look like?</li>
         <li>How do they behave?</li>
         <li>What do they like?</li>
       </ul>`,

      [{ heading: "Exercise 12.1 — Answer:", items: [
          "Who is the character?", "How is he described?", "What does he always do?",
          "What does he share?", "Write one sentence about Kwame."
        ]},
       { heading: "Exercise 12.2 — Describe yourself in 3 sentences.", items: [] }],

      `<p><b>12.1:</b> 1. Kwame. 2. Kind. 3. Helps his mother. 4. His food. 5. Any sentence about Kwame.</p>`,

      [{ q: "How is Kwame described?", a: ["kind"] },
       { q: "What does Kwame share?", a: ["food", "his food"] }]),

    D(3, "📖", "Setting",
      "Identify where and when a story happens.",
      `<p class='big-emoji'>📖 🏙️ 🕐</p>
       <p>The <b>setting</b> is where and when a story happens.</p>
       <p><b>Passage:</b> <i>The market was busy. It was Saturday morning. Women sold tomatoes and peppers. Children ran between the stalls.</i></p>
       <h3>Setting Questions</h3>
       <ul>
         <li>Where does the story happen?</li>
         <li>When does it happen?</li>
         <li>What is the place like?</li>
       </ul>`,

      [{ heading: "Exercise 13.1 — Answer:", items: [
          "Where does the story happen?", "When does it happen?",
          "What are the women selling?", "What are the children doing?"
        ]},
       { heading: "Exercise 13.2 — Write about your school setting.", items: [] }],

      `<p><b>13.1:</b> 1. Market. 2. Saturday morning. 3. Tomatoes and peppers. 4. Running between stalls.</p>`,

      [{ q: "Where does the story happen?", a: ["market"] },
       { q: "When does it happen?", a: ["saturday morning", "saturday"] }]),

    D(4, "📖", "Retell a Story",
      "Retell a story in your own words.",
      `<p class='big-emoji'>📖 🐢 🐇</p>
       <p>To <b>retell</b>, tell the main events in order.</p>
       <p><b>Passage:</b> <i>A tortoise and a hare had a race. The hare ran fast and took a nap. The tortoise walked slowly and won.</i></p>
       <h3>How to Retell</h3>
       <ol>
         <li>Start with the beginning.</li>
         <li>Say what happened in the middle.</li>
         <li>Say how the story ended.</li>
       </ol>`,

      [{ heading: "Exercise 14.1 — Retell the story in 3 sentences.", items: [] },
       { heading: "Exercise 14.2 — What is the lesson of the story?", items: [] }],

      `<p><b>14.2:</b> Slow and steady wins the race.</p>`,

      [{ q: "Who won the race?", a: ["tortoise", "the tortoise"] },
       { q: "What is the lesson?", a: ["slow and steady wins the race", "slow but steady", "any"] }]),

    D(5, "🎨", "Draw the Story",
      "Draw your favourite story.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Draw a picture of your favourite story. Write 3 sentences about it.</p>
       <h3>Show and Tell</h3>
       <p>Show your drawing. Say what happens in the story.</p>`,

      [{ heading: "Exercise 15.1 — Draw and write.", items: [] }],

      `<p>Any drawing with 3 sentences.</p>`,

      [{ q: "What story did you draw?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — NOUNS & PRONOUNS
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Nouns & Pronouns", days: [

    D(1, "📝", "Common Nouns",
      "Learn common nouns.",
      `<p class='big-emoji'>📝 🏠</p>
       <p>A <b>common noun</b> names a general person, place, or thing.</p>
       <p>Examples: boy, girl, city, school, book, chair.</p>
       <h3>Categories</h3>
       <ul>
         <li>👤 People: boy, girl, teacher, doctor</li>
         <li>🏠 Places: school, market, city, village</li>
         <li>📚 Things: book, chair, table, tree</li>
       </ul>`,

      [{ heading: "Exercise 16.1 — Underline the common nouns.", items: [
          "The boy runs.", "The school is big.", "She has a book.", "The market is busy.", "The chair is new."
        ]},
       { heading: "Exercise 16.2 — Write 5 common nouns you can see.", items: [] }],

      `<p><b>16.1:</b> 1. boy 2. school 3. book 4. market 5. chair</p>`,

      [{ q: "Common noun in 'The boy runs.'?", a: ["boy"] },
       { q: "Common noun in 'The school is big.'?", a: ["school"] }]),

    D(2, "📝", "Proper Nouns",
      "Learn proper nouns.",
      `<p class='big-emoji'>📝 🏙️</p>
       <p>A <b>proper noun</b> names a specific person, place, or thing. It always begins with a <b>capital letter</b>.</p>
       <p>Examples: Ama, Kofi, Accra, Kumasi, Ghana, Monday, December.</p>
       <h3>Rules</h3>
       <ul>
         <li>Names of people: Ama, Kofi, Ataa</li>
         <li>Names of places: Accra, Kumasi, Ghana</li>
         <li>Days: Monday, Tuesday</li>
         <li>Months: January, December</li>
       </ul>`,

      [{ heading: "Exercise 17.1 — Rewrite with correct capitals.", items: [
          "ama lives in accra", "kofi is from kumasi", "we live in ghana",
          "today is monday", "my birthday is in december"
        ]},
       { heading: "Exercise 17.2 — Write 5 proper nouns.", items: [] }],

      `<p><b>17.1:</b> 1. Ama lives in Accra. 2. Kofi is from Kumasi. 3. We live in Ghana. 4. Today is Monday. 5. My birthday is in December.</p>`,

      [{ q: "Is 'Accra' a common or proper noun?", a: ["proper"] },
       { q: "Is 'boy' a common or proper noun?", a: ["common"] }]),

    D(3, "📝", "Pronouns",
      "Learn pronouns.",
      `<p class='big-emoji'>📝 🔄</p>
       <p>A <b>pronoun</b> replaces a noun: I, you, he, she, it, we, they.</p>
       <p><i>Ama is my friend.</i> → <i>She is my friend.</i></p>
       <h3>Pronouns List</h3>
       <ul>
         <li>I — for me</li>
         <li>You — for one person you talk to</li>
         <li>He — for a boy or man</li>
         <li>She — for a girl or woman</li>
         <li>It — for a thing</li>
         <li>We — for me and others</li>
         <li>They — for many people or things</li>
       </ul>`,

      [{ heading: "Exercise 18.1 — Replace the underlined noun with a pronoun.", items: [
          "**Ama** is my friend.", "**The boys** are playing.", "**The book** is on the table.",
          "**My mother and I** went to town.", "**Kofi** likes mangoes."
        ]},
       { heading: "Exercise 18.2 — Write 5 sentences with pronouns.", items: [] }],

      `<p><b>18.1:</b> 1. She 2. They 3. It 4. We 5. He</p>`,

      [{ q: "Pronoun for 'Ama'?", a: ["she"] },
       { q: "Pronoun for 'The boys'?", a: ["they"] }]),

    D(4, "📝", "Pronoun Practice",
      "Use pronouns correctly in sentences.",
      `<p class='big-emoji'>📝 ✅</p>
       <p>Read each sentence and choose the correct pronoun.</p>
       <h3>Tips</h3>
       <ul>
         <li>She = one girl or woman</li>
         <li>He = one boy or man</li>
         <li>They = more than one person</li>
         <li>It = one thing</li>
         <li>We = me and someone else</li>
       </ul>`,

      [{ heading: "Exercise 19.1 — Choose the correct pronoun.", items: [
          "(__/She) is my sister.", "(__/They) are playing.", "(__/It) is raining.",
          "(__/We) are going to school.", "(__/He) is my brother."
        ]},
       { heading: "Exercise 19.2 — Write a paragraph using at least 3 pronouns.", items: [] }],

      `<p><b>19.1:</b> 1. She 2. They 3. It 4. We 5. He</p>`,

      [{ q: "Fill in: ___ is my sister.", a: ["she"] },
       { q: "Fill in: ___ are playing.", a: ["they"] }]),

    D(5, "🎨", "Noun & Pronoun Poster",
      "Make a poster about nouns and pronouns.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster with 5 nouns and their pronouns.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say each noun and its pronoun.</p>`,

      [{ heading: "Exercise 20.1 — Complete the table.", items: [
          "Ama → ___", "The boys → ___", "The book → ___", "My mother and I → ___", "Kofi → ___"
        ]},
       { heading: "Exercise 20.2 — Draw a picture for each noun.", items: [] }],

      `<p><b>20.1:</b> 1. She 2. They 3. It 4. We 5. He</p>`,

      [{ q: "Pronoun for 'Ama'?", a: ["she"] },
       { q: "Pronoun for 'Kofi'?", a: ["he"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — VERBS
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Verbs", days: [

    D(1, "📝", "Action Verbs",
      "Identify action verbs.",
      `<p class='big-emoji'>📝 🏃</p>
       <p>An <b>action verb</b> shows what someone or something does: run, jump, sing, write, read.</p>
       <h3>More Action Verbs</h3>
       <ul>
         <li>🏃 run, jump, walk</li>
         <li>🎤 sing, shout, whisper</li>
         <li>✍️ write, draw, colour</li>
         <li>📖 read, look, watch</li>
         <li>🍲 cook, eat, drink</li>
       </ul>`,

      [{ heading: "Exercise 1.1 — Underline the action verb.", items: [
          "The girl sings.", "The boy runs.", "She writes a letter.", "We read books.", "They dance."
        ]},
       { heading: "Exercise 1.2 — Write 5 sentences with action verbs.", items: [] }],

      `<p><b>1.1:</b> 1. sings 2. runs 3. writes 4. read 5. dance</p>`,

      [{ q: "Verb in 'The girl sings.'?", a: ["sings"] },
       { q: "Verb in 'The boy runs.'?", a: ["runs"] }]),

    D(2, "📝", "Linking Verbs",
      "Identify linking verbs.",
      `<p class='big-emoji'>📝 🔗</p>
       <p>A <b>linking verb</b> connects the subject to a description: am, is, are, was, were.</p>
       <p><i>She is happy. They are here.</i></p>
       <h3>Linking Verbs</h3>
       <ul>
         <li>am — I am</li>
         <li>is — he/she/it is</li>
         <li>are — you/we/they are</li>
         <li>was — I/he/she/it was (past)</li>
         <li>were — you/we/they were (past)</li>
       </ul>`,

      [{ heading: "Exercise 2.1 — Underline the linking verb.", items: [
          "I am tired.", "She is my friend.", "They are playing.", "He was late.", "We were happy."
        ]},
       { heading: "Exercise 2.2 — Write 5 sentences with linking verbs.", items: [] }],

      `<p><b>2.1:</b> 1. am 2. is 3. are 4. was 5. were</p>`,

      [{ q: "Linking verb in 'I am tired.'?", a: ["am"] },
       { q: "Linking verb in 'She is my friend.'?", a: ["is"] }]),

    D(3, "📝", "Verb Tense",
      "Change verbs between present and past.",
      `<p class='big-emoji'>📝 ⏰</p>
       <p>Present: <i>She walks.</i> Past: <i>She walked.</i></p>
       <h3>Common Changes</h3>
       <ul>
         <li>walk → walked</li>
         <li>play → played</li>
         <li>write → wrote</li>
         <li>sing → sang</li>
         <li>drink → drank</li>
         <li>run → ran</li>
       </ul>`,

      [{ heading: "Exercise 3.1 — Change to simple past.", items: [
          "She walks.", "They play.", "He writes.", "We sing.", "I drink."
        ]},
       { heading: "Exercise 3.2 — Change to simple present.", items: [
          "She walked.", "They played.", "He wrote.", "We sang.", "I drank."
        ]}],

      `<p><b>3.1:</b> 1. walked 2. played 3. wrote 4. sang 5. drank</p>
       <p><b>3.2:</b> 1. walks 2. play 3. writes 4. sing 5. drink</p>`,

      [{ q: "Past of 'walks'?", a: ["walked"] },
       { q: "Present of 'played'?", a: ["play"] }]),

    D(4, "📝", "Verb Sentences",
      "Write sentences with different verbs.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Use one verb in each sentence.</p>
       <h3>Tips</h3>
       <ul>
         <li>Start with a capital letter.</li>
         <li>End with a full stop.</li>
         <li>Make sure the verb matches the subject.</li>
       </ul>`,

      [{ heading: "Exercise 4.1 — Write 5 sentences, each with a different verb.", items: [
          "run", "jump", "sing", "read", "write"
        ]}],

      `<p>Any 5 correct sentences.</p>`,

      [{ q: "Write a sentence with 'jump'.", a: ["i jump", "any"] }]),

    D(5, "🎨", "Verb Poster",
      "Make a verb poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Draw 5 action verbs with pictures.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Act out each verb.</p>`,

      [{ heading: "Exercise 5.1 — Draw and label.", items: [] }],

      `<p>Any correct poster.</p>`,

      [{ q: "Give an action verb.", a: ["run", "jump", "sing", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — ADJECTIVES
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Adjectives", days: [

    D(1, "📝", "Describing Words",
      "Identify adjectives.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>An <b>adjective</b> describes a noun: red, tall, happy, sweet, beautiful.</p>
       <h3>Types of Adjectives</h3>
       <ul>
         <li>🎨 Colour: red, blue, green</li>
         <li>📏 Size: big, small, tall, short</li>
         <li>😊 Feeling: happy, sad, excited</li>
         <li>🍬 Taste: sweet, sour, salty</li>
         <li>✨ Quality: beautiful, ugly, clean</li>
       </ul>`,

      [{ heading: "Exercise 6.1 — Underline the adjective.", items: [
          "The tall boy runs.", "I ate a sweet mango.", "She wore a beautiful dress.",
          "The old man walked slowly.", "We saw a big elephant."
        ]},
       { heading: "Exercise 6.2 — Write 5 sentences with adjectives.", items: [] }],

      `<p><b>6.1:</b> 1. tall 2. sweet 3. beautiful 4. old 5. big</p>`,

      [{ q: "Adjective in 'The tall boy runs.'?", a: ["tall"] },
       { q: "Adjective in 'I ate a sweet mango.'?", a: ["sweet"] }]),

    D(2, "🎨", "Colour Words",
      "Use colour adjectives.",
      `<p class='big-emoji'>🎨 🌈</p>
       <p>Colour adjectives describe the colour of a noun.</p>
       <h3>Common Colours</h3>
       <ul>
         <li>🔴 red</li>
         <li>🔵 blue</li>
         <li>🟢 green</li>
         <li>🟡 yellow</li>
         <li>⚫ black</li>
         <li>⚪ white</li>
         <li>🟠 orange</li>
         <li>🟣 purple</li>
       </ul>`,

      [{ heading: "Exercise 7.1 — Complete with a colour adjective.", items: [
          "The ______ apple.", "The ______ sky.", "The ______ leaf.", "The ______ sun."
        ]},
       { heading: "Exercise 7.2 — Write 5 sentences using colour adjectives.", items: [] }],

      `<p>Any correct colours.</p>`,

      [{ q: "Colour of an apple?", a: ["red", "green"] },
       { q: "Colour of the sky?", a: ["blue"] }]),

    D(3, "📏", "Size Words",
      "Use size adjectives.",
      `<p class='big-emoji'>📏 🐘 🐜</p>
       <p>Size adjectives: big, small, tall, short, long, tiny.</p>
       <h3>Opposites</h3>
       <ul>
         <li>big ↔ small</li>
         <li>tall ↔ short</li>
         <li>long ↔ short</li>
       </ul>`,

      [{ heading: "Exercise 8.1 — Complete with a size adjective.", items: [
          "The ______ elephant.", "The ______ ant.", "The ______ tree.", "The ______ pencil."
        ]},
       { heading: "Exercise 8.2 — Write 5 sentences using size adjectives.", items: [] }],

      `<p>Any correct sizes.</p>`,

      [{ q: "Opposite of big?", a: ["small"] },
       { q: "Opposite of tall?", a: ["short"] }]),

    D(4, "📝", "Adjective Sentences",
      "Write adjective sentences.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p><b>The happy boy runs.</b></p>
       <h3>Sentence Pattern</h3>
       <p>Adjective + Noun + Verb</p>
       <p>Example: The <b>red</b> car <b>moves</b>.</p>`,

      [{ heading: "Exercise 9.1 — Write 5 sentences with adjectives.", items: [] }],

      `<p>Any 5 correct sentences.</p>`,

      [{ q: "Write a sentence with 'happy'.", a: ["the happy boy runs", "any"] }]),

    D(5, "🎨", "Adjective Poster",
      "Make an adjective poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Draw and label 5 adjectives.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Say each adjective and the noun it describes.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label.", items: [
          "red", "big", "tall", "happy", "sweet"
        ]}],

      `<p>Any correct poster.</p>`,

      [{ q: "Give an adjective.", a: ["red", "tall", "happy", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — PARAGRAPH WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Paragraph Writing", days: [

    D(1, "📝", "Topic Sentence",
      "Learn about the topic sentence.",
      `<p class='big-emoji'>📝 💡</p>
       <p>A paragraph has a <b>topic sentence</b> that states the main idea.</p>
       <p><i>Water is precious in my village.</i></p>
       <h3>What a Topic Sentence Does</h3>
       <ul>
         <li>Introduces the main idea.</li>
         <li>Comes first in the paragraph.</li>
         <li>Tells the reader what the paragraph is about.</li>
       </ul>`,

      [{ heading: "Exercise 11.1 — Write a topic sentence for each topic.", items: [
          "My school", "My friend", "My favourite food", "My family", "My village"
        ]}],

      `<p>Any topic sentence.</p>`,

      [{ q: "What is a topic sentence?", a: ["main idea", "states main idea"] }]),

    D(2, "📝", "Supporting Sentences",
      "Learn about supporting sentences.",
      `<p class='big-emoji'>📝 📋</p>
       <p>Supporting sentences give more detail about the topic.</p>
       <p><i>Every morning I walk to school. I carry my books. I greet my teacher.</i></p>
       <h3>What Supporting Sentences Do</h3>
       <ul>
         <li>Give examples.</li>
         <li>Add details.</li>
         <li>Explain the topic sentence.</li>
       </ul>`,

      [{ heading: "Exercise 12.1 — Write 3 supporting sentences for: 'My school is special.'", items: [] }],

      `<p>Any 3 supporting sentences.</p>`,

      [{ q: "What do supporting sentences do?", a: ["give more detail", "support", "any"] }]),

    D(3, "📝", "Closing Sentence",
      "Learn about the closing sentence.",
      `<p class='big-emoji'>📝 🎯</p>
       <p>A closing sentence wraps up the paragraph.</p>
       <p><i>For this reason, I love my school.</i></p>
       <h3>What a Closing Sentence Does</h3>
       <ul>
         <li>Summarises the paragraph.</li>
         <li>Comes last.</li>
         <li>Ends the paragraph.</li>
       </ul>`,

      [{ heading: "Exercise 13.1 — Write a closing sentence for: 'My school is special.'", items: [] }],

      `<p>Any closing sentence.</p>`,

      [{ q: "What does a closing sentence do?", a: ["wraps up", "summarises", "any"] }]),

    D(4, "📝", "Write a Paragraph",
      "Write a whole paragraph.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Topic + Supporting + Closing.</p>
       <h3>Structure</h3>
       <ol>
         <li>Topic sentence — introduces the idea.</li>
         <li>Supporting sentences — 3–4 sentences with details.</li>
         <li>Closing sentence — wraps up.</li>
       </ol>`,

      [{ heading: "Exercise 14.1 — Write a paragraph on 'Why I Love My Family'.", items: [] }],

      `<p>Any paragraph with all 3 parts.</p>`,

      [{ q: "What 3 parts make a paragraph?", a: ["topic, supporting, closing"] }]),

    D(5, "🎨", "Paragraph Poster",
      "Make a paragraph poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Show a sample paragraph with the 3 parts labelled.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each part of the paragraph.</p>`,

      [{ heading: "Exercise 15.1 — Draw and label.", items: [] }],

      `<p>Any correct poster.</p>`,

      [{ q: "Name one part of a paragraph.", a: ["topic", "supporting", "closing", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Phonics",
      "Review Weeks 1–3.",
      `<p class='big-emoji'>🔁 🔤</p>
       <p>Vowels, blends, digraphs.</p>
       <h3>Review</h3>
       <ul>
         <li>Short and long vowels</li>
         <li>Consonant blends</li>
         <li>Consonant digraphs</li>
       </ul>`,

      [{ heading: "Exercise 16.1 — Circle the vowel team.", items: [
          "rain", "green", "boat", "snow", "moon"
        ]},
       { heading: "Exercise 16.2 — Write 3 words with each pattern.", items: [
          "ai", "ee", "oa", "oo"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Vowel team in 'rain'?", a: ["ai"] }]),

    D(2, "🔁", "Review Sentences",
      "Review Weeks 3 and 7.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Simple, question, command.</p>
       <h3>Review</h3>
       <ul>
         <li>Simple sentence: ends with a full stop.</li>
         <li>Question: ends with a question mark.</li>
         <li>Command: tells someone to do something.</li>
       </ul>`,

      [{ heading: "Exercise 17.1 — Write one of each type.", items: [
          "Simple", "Question", "Command"
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: "Give an example of a question.", a: ["any with ?"] }]),

    D(3, "🔁", "Review Nouns",
      "Review Week 4.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Common and proper nouns.</p>
       <h3>Review</h3>
       <ul>
         <li>Common nouns: general names (boy, city)</li>
         <li>Proper nouns: specific names with capitals (Ama, Accra)</li>
       </ul>`,

      [{ heading: "Exercise 18.1 — Classify.", items: [
          "Ama", "boy", "Ghana", "book", "Monday", "city"
        ]}],

      `<p>1. Proper 2. Common 3. Proper 4. Common 5. Proper 6. Common</p>`,

      [{ q: "Is 'Accra' common or proper?", a: ["proper"] }]),

    D(4, "🔁", "Review Verbs",
      "Review Week 5.",
      `<p class='big-emoji'>🔁 📝</p>
       <p>Action and linking verbs.</p>
       <h3>Review</h3>
       <ul>
         <li>Action verbs: run, sing, write</li>
         <li>Linking verbs: am, is, are, was, were</li>
       </ul>`,

      [{ heading: "Exercise 19.1 — Underline the verb.", items: [
          "She sings.", "He is happy.", "They play.", "We are tired.", "It rains."
        ]}],

      `<p>1. sings 2. is 3. play 4. are 5. rains</p>`,

      [{ q: "Verb in 'She sings.'?", a: ["sings"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Spelling (10)</li>
         <li>Part B — Grammar (10)</li>
         <li>Part C — Paragraph writing (10)</li>
         <li>Part D — Comprehension (10)</li>
       </ul>`,

      [{ heading: "Exercise 20.1 — Complete the test.", items: [
          "Part A — Spelling (10)", "Part B — Grammar (10)",
          "Part C — Paragraph writing (10)", "Part D — Comprehension (10)"
        ]},
       { heading: "Exercise 20.2 — Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40 total. 32+ = Excellent. 20–31 = Good. Below 20 = Needs revision.</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — PUNCTUATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Punctuation", days: [

    D(1, "📝", "Full Stops",
      "Use full stops correctly.",
      `<p class='big-emoji'>📝 ⏹️</p>
       <p>A <b>full stop (.)</b> ends a telling sentence.</p>
       <p><i>I like rice. She is my friend.</i></p>
       <h3>Rules</h3>
       <ul>
         <li>Use a full stop at the end of a statement.</li>
         <li>Start the next sentence with a capital letter.</li>
       </ul>`,

      [{ heading: "Exercise 21.1 — Add full stops.", items: [
          "I like rice She likes beans",
          "The boy runs fast He is happy",
          "We go to school It is fun",
          "My name is Ama I am seven",
          "The sun is hot It is bright"
        ]},
       { heading: "Exercise 21.2 — Write 5 sentences with full stops.", items: [] }],

      `<p><b>21.1:</b> 1. I like rice. She likes beans. 2. The boy runs fast. He is happy. 3. We go to school. It is fun. 4. My name is Ama. I am seven. 5. The sun is hot. It is bright.</p>`,

      [{ q: "What ends a telling sentence?", a: ["full stop", "."] }]),

    D(2, "📝", "Question Marks",
      "Use question marks correctly.",
      `<p class='big-emoji'>📝 ❓</p>
       <p>A <b>question mark (?)</b> ends a question.</p>
       <p><i>Where are you going? What is your name?</i></p>
       <h3>Question Words</h3>
       <ul>
         <li>What…</li>
         <li>Where…</li>
         <li>When…</li>
         <li>Why…</li>
         <li>How…</li>
         <li>Who…</li>
       </ul>`,

      [{ heading: "Exercise 22.1 — Add question marks.", items: [
          "What is your name",
          "Where do you live",
          "How old are you",
          "When is your birthday",
          "Why are you late"
        ]},
       { heading: "Exercise 22.2 — Write 5 questions.", items: [] }],

      `<p><b>22.1:</b> 1. What is your name? 2. Where do you live? 3. How old are you? 4. When is your birthday? 5. Why are you late?</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] }]),

    D(3, "📝", "Exclamation Marks",
      "Use exclamation marks correctly.",
      `<p class='big-emoji'>📝 ❗</p>
       <p>An <b>exclamation mark (!)</b> shows strong feeling — surprise, joy, or excitement.</p>
       <p><i>Wow! What a beautiful day! Help!</i></p>
       <h3>When to Use !</h3>
       <ul>
         <li>Surprise: Wow!</li>
         <li>Joy: I won!</li>
         <li>Fear: Help!</li>
         <li>Excitement: Let's go!</li>
       </ul>`,

      [{ heading: "Exercise 23.1 — Add exclamation marks.", items: [
          "Wow, that is amazing",
          "What a beautiful day",
          "Help, I am falling",
          "I won the race",
          "Look at that big bird"
        ]},
       { heading: "Exercise 23.2 — Write 3 exclamation sentences.", items: [] }],

      `<p><b>23.1:</b> 1. Wow, that is amazing! 2. What a beautiful day! 3. Help, I am falling! 4. I won the race! 5. Look at that big bird!</p>`,

      [{ q: "What does an exclamation mark show?", a: ["strong feeling", "excitement", "any"] }]),

    D(4, "📝", "Commas",
      "Use commas in lists.",
      `<p class='big-emoji'>📝 ,</p>
       <p>A <b>comma (,)</b> separates items in a list.</p>
       <p><i>I bought rice, beans, and fish.</i></p>
       <h3>Rules</h3>
       <ul>
         <li>Use commas to separate items in a list.</li>
         <li>Use "and" before the last item.</li>
         <li>Do not use a comma before "and" in a two-item list.</li>
       </ul>`,

      [{ heading: "Exercise 24.1 — Add commas.", items: [
          "I like mangoes oranges and bananas",
          "She bought rice beans and fish",
          "We saw lions tigers and elephants",
          "He plays football tennis and cricket",
          "My favourite colours are red blue and green"
        ]},
       { heading: "Exercise 24.2 — Write 3 sentences with lists.", items: [] }],

      `<p><b>24.1:</b> 1. I like mangoes, oranges, and bananas. 2. She bought rice, beans, and fish. 3. We saw lions, tigers, and elephants. 4. He plays football, tennis, and cricket. 5. My favourite colours are red, blue, and green.</p>`,

      [{ q: "What does a comma do in a list?", a: ["separates items", "any"] }]),

    D(5, "🎨", "Punctuation Poster",
      "Make a punctuation poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster showing the 4 punctuation marks.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Full stop (.)</li>
         <li>Question mark (?)</li>
         <li>Exclamation mark (!)</li>
         <li>Comma (,)</li>
       </ul>
       <h3>Show and Tell</h3>
       <p>Show your poster. Give an example sentence for each mark.</p>`,

      [{ heading: "Exercise 25.1 — Draw and label.", items: [
          "full stop", "question mark", "exclamation mark", "comma"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] },
       { q: "What shows excitement?", a: ["exclamation mark", "!"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — SPELLING RULES
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Spelling Rules", days: [

    D(1, "📝", "Silent Letters",
      "Learn words with silent letters.",
      `<p class='big-emoji'>📝 🤫</p>
       <p>Some letters are <b>silent</b> — we write them but don't say them.</p>
       <h3>Silent Letters</h3>
       <ul>
         <li>kn — knee, knife, know</li>
         <li>wr — write, wrong, wrist</li>
         <li>mb — lamb, comb, thumb</li>
         <li>gh — night, light, high</li>
         <li>gn — gnat, sign, design</li>
       </ul>`,

      [{ heading: "Exercise 26.1 — Circle the silent letter.", items: [
          "knee", "write", "lamb", "night", "gnat", "comb", "wrong", "light"
        ]},
       { heading: "Exercise 26.2 — Write 5 words with silent letters.", items: [] }],

      `<p>Any correct words.</p>`,

      [{ q: "Silent letter in 'knee'?", a: ["k"] },
       { q: "Silent letter in 'write'?", a: ["w"] },
       { q: "Silent letter in 'lamb'?", a: ["b"] }]),

    D(2, "📝", "Double Letters",
      "Learn words with double letters.",
      `<p class='big-emoji'>📝 🔤🔤</p>
       <p>Some words have <b>double letters</b>.</p>
       <h3>Common Double Letters</h3>
       <ul>
         <li>ll — ball, bell, full</li>
         <li>ss — class, grass, dress</li>
         <li>tt — butter, letter, kitten</li>
         <li>pp — apple, happy, puppy</li>
         <li>ff — off, puff, cliff</li>
         <li>nn — dinner, running, funny</li>
       </ul>`,

      [{ heading: "Exercise 27.1 — Fill in the double letter.", items: [
          "ba__", "be__", "cla__", "gra__", "butte__", "a__le", "ha__y", "pu__y"
        ]},
       { heading: "Exercise 27.2 — Write 5 words with double letters.", items: [] }],

      `<p><b>27.1:</b> 1. ball 2. bell 3. class 4. grass 5. butter 6. apple 7. happy 8. puppy</p>`,

      [{ q: "Double letters in 'ball'?", a: ["ll"] },
       { q: "Double letters in 'happy'?", a: ["pp"] }]),

    D(3, "📝", "Prefixes",
      "Learn about prefixes.",
      `<p class='big-emoji'>📝 🔼</p>
       <p>A <b>prefix</b> is a letter or letters added to the <b>beginning</b> of a word to change its meaning.</p>
       <h3>Common Prefixes</h3>
       <ul>
         <li>un- — unhappy, unkind, unfair</li>
         <li>re- — rewrite, replay, redo</li>
         <li>dis- — disagree, dislike, disappear</li>
         <li>pre- — preview, prepay, preschool</li>
       </ul>`,

      [{ heading: "Exercise 28.1 — Add the prefix.", items: [
          "___happy", "___write", "___agree", "___view", "___kind", "___play"
        ]},
       { heading: "Exercise 28.2 — Write 3 words with each prefix.", items: [
          "un-", "re-", "dis-"
        ]}],

      `<p><b>28.1:</b> 1. unhappy 2. rewrite 3. disagree 4. preview 5. unkind 6. replay</p>`,

      [{ q: "What does 'un-' mean?", a: ["not", "opposite", "any"] },
       { q: "What does 're-' mean?", a: ["again", "any"] }]),

    D(4, "📝", "Suffixes",
      "Learn about suffixes.",
      `<p class='big-emoji'>📝 🔽</p>
       <p>A <b>suffix</b> is a letter or letters added to the <b>end</b> of a word to change its meaning.</p>
       <h3>Common Suffixes</h3>
       <ul>
         <li>-ful — helpful, careful, beautiful</li>
         <li>-less — careless, hopeless, fearless</li>
         <li>-ly — quickly, slowly, happily</li>
         <li>-er — teacher, player, singer</li>
         <li>-ing — running, singing, playing</li>
       </ul>`,

      [{ heading: "Exercise 29.1 — Add the suffix.", items: [
          "help___", "care___", "quick___", "teach___", "run___", "hope___"
        ]},
       { heading: "Exercise 29.2 — Write 3 words with each suffix.", items: [
          "-ful", "-less", "-ly"
        ]}],

      `<p><b>29.1:</b> 1. helpful 2. careless 3. quickly 4. teacher 5. running 6. hopeless</p>`,

      [{ q: "What does '-ful' mean?", a: ["full of", "any"] },
       { q: "What does '-less' mean?", a: ["without", "any"] }]),

    D(5, "🎨", "Spelling Test",
      "Do a spelling test.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Today we do a spelling test of all Week 10 words.</p>
       <h3>Word List</h3>
       <ul>
         <li>knee, write, lamb, night</li>
         <li>ball, class, butter, apple</li>
         <li>unhappy, rewrite, disagree</li>
         <li>helpful, careless, quickly</li>
       </ul>`,

      [{ heading: "Exercise 30.1 — Spelling test.", items: [
          "knee", "write", "lamb", "night", "ball",
          "class", "butter", "apple", "unhappy", "rewrite",
          "disagree", "helpful", "careless", "quickly"
        ]}],

      `<p>Mark your own work. 12/14 or more = Excellent.</p>`,

      [{ q: "Spell 'knee'.", a: ["knee"] },
       { q: "Spell 'apple'.", a: ["apple"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — STORY WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Story Writing", days: [

    D(1, "📝", "Beginning",
      "Write the beginning of a story.",
      `<p class='big-emoji'>📝 🌅</p>
       <p>The <b>beginning</b> of a story introduces the characters and setting.</p>
       <h3>Story Openers</h3>
       <ul>
         <li>"Once upon a time…"</li>
         <li>"One day…"</li>
         <li>"Long ago…"</li>
         <li>"In a small village…"</li>
       </ul>`,

      [{ heading: "Exercise 31.1 — Write 3 story beginnings.", items: [
          "Once upon a time…",
          "One day…",
          "In a small village…"
        ]},
       { heading: "Exercise 31.2 — Choose one beginning and write 3 sentences.", items: [] }],

      `<p>Any 3 sentences that introduce characters and setting.</p>`,

      [{ q: "What does the beginning introduce?", a: ["characters", "setting", "any"] }]),

    D(2, "📝", "Middle",
      "Write the middle of a story.",
      `<p class='big-emoji'>📝 ⚡</p>
       <p>The <b>middle</b> of a story has a problem or event.</p>
       <h3>Story Problems</h3>
       <ul>
         <li>Someone is lost.</li>
         <li>Something is broken.</li>
         <li>A character needs help.</li>
         <li>There is a challenge.</li>
       </ul>`,

      [{ heading: "Exercise 32.1 — Write a middle for a story about a lost puppy.", items: [] },
       { heading: "Exercise 32.2 — Write a middle for a story about a broken toy.", items: [] }],

      `<p>Any 3 sentences that show a problem.</p>`,

      [{ q: "What happens in the middle?", a: ["a problem", "event", "any"] }]),

    D(3, "📝", "End",
      "Write the end of a story.",
      `<p class='big-emoji'>📝 🌟</p>
       <p>The <b>end</b> of a story solves the problem.</p>
       <h3>Story Endings</h3>
       <ul>
         <li>The problem is solved.</li>
         <li>Everyone is happy.</li>
         <li>A lesson is learned.</li>
       </ul>`,

      [{ heading: "Exercise 33.1 — Write an ending for a lost puppy story.", items: [] },
       { heading: "Exercise 33.2 — Write an ending for a broken toy story.", items: [] }],

      `<p>Any 2 sentences that solve the problem.</p>`,

      [{ q: "What happens at the end?", a: ["problem solved", "any"] }]),

    D(4, "📝", "Write a Story",
      "Write a complete story.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Now write a complete story with beginning, middle, and end.</p>
       <h3>Story Plan</h3>
       <ol>
         <li>Characters — Who is in the story?</li>
         <li>Setting — Where and when?</li>
         <li>Problem — What goes wrong?</li>
         <li>Solution — How is it solved?</li>
       </ol>`,

      [{ heading: "Exercise 34.1 — Write a story about 'The Lost Goat'.", items: [] }],

      `<p>Any story with 3 parts.</p>`,

      [{ q: "What 3 parts does a story have?", a: ["beginning middle end", "any"] }]),

    D(5, "🎨", "Story Poster",
      "Make a story poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Make a poster of your story with 3 pictures.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Tell your story to a friend.</p>`,

      [{ heading: "Exercise 35.1 — Draw and write.", items: [
          "Beginning", "Middle", "End"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your story about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 12 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: "Review", days: [

    D(1, "🔁", "Review Punctuation",
      "Review punctuation.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Full stop (.) — ends a statement</li>
         <li>Question mark (?) — ends a question</li>
         <li>Exclamation mark (!) — shows strong feeling</li>
         <li>Comma (,) — separates items in a list</li>
       </ul>`,

      [{ heading: "Exercise 36.1 — Add the correct punctuation.", items: [
          "What is your name",
          "I like rice",
          "Wow that is great",
          "I bought rice beans and fish",
          "Where do you live"
        ]}],

      `<p><b>36.1:</b> 1. ? 2. . 3. ! 4. , , . 5. ?</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] }]),

    D(2, "🔁", "Review Spelling",
      "Review spelling rules.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Silent letters</li>
         <li>Double letters</li>
         <li>Prefixes and suffixes</li>
       </ul>`,

      [{ heading: "Exercise 37.1 — Fill in.", items: [
          "__nee (silent k)",
          "ba__ (double l)",
          "___happy (not)",
          "help___ (full of)"
        ]}],

      `<p><b>37.1:</b> 1. knee 2. ball 3. unhappy 4. helpful</p>`,

      [{ q: "Double letters in 'class'?", a: ["ss"] }]),

    D(3, "🔁", "Review Writing",
      "Review story writing.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Beginning, middle, end</li>
         <li>Characters and setting</li>
       </ul>`,

      [{ heading: "Exercise 38.1 — Write the 3 parts of a story.", items: [
          "Beginning", "Middle", "End"
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning middle end", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What ends a question?</li>
         <li>What shows excitement?</li>
         <li>Silent letter in 'write'?</li>
         <li>Double letters in 'apple'?</li>
         <li>Add prefix to 'happy' — not happy?</li>
         <li>Add suffix to 'help' — full of help?</li>
         <li>Name the 3 parts of a story.</li>
         <li>What does a comma do?</li>
         <li>Add punctuation: What is your name</li>
         <li>Add punctuation: I like rice</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] },
       { q: "Name the 3 parts of a story.", a: ["beginning middle end", "any"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Punctuation (10)</li>
         <li>Part B — Spelling (10)</li>
         <li>Part C — Story writing (10)</li>
         <li>Part D — Reading (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Punctuation (10)", "Part B — Spelling (10)",
          "Part C — Story writing (10)", "Part D — Reading (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — POETRY
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Poetry", days: [

    D(1, "📝", "Rhymes",
      "Learn about rhyming words.",
      `<p class='big-emoji'>📝 🎵</p>
       <p>Words that <b>rhyme</b> end with the same sound.</p>
       <h3>Rhyming Pairs</h3>
       <ul>
         <li>cat — hat</li>
         <li>sun — fun</li>
         <li>tree — bee</li>
         <li>star — car</li>
         <li>moon — spoon</li>
       </ul>`,

      [{ heading: "Exercise 40.1 — Match the rhyming words.", items: [
          "cat — ___", "sun — ___", "tree — ___", "star — ___", "moon — ___"
        ]},
       { heading: "Exercise 40.2 — Write 5 rhyming pairs.", items: [] }],

      `<p><b>40.1:</b> 1. hat 2. fun 3. bee 4. car 5. spoon</p>`,

      [{ q: "What rhymes with 'cat'?", a: ["hat", "bat", "any"] },
       { q: "What rhymes with 'sun'?", a: ["fun", "run", "any"] }]),

    D(2, "📝", "Rhythm",
      "Learn about rhythm in poems.",
      `<p class='big-emoji'>📝 🥁</p>
       <p><b>Rhythm</b> is the beat of a poem. Read it aloud and clap the beat.</p>
       <h3>Example</h3>
       <p><i>Twinkle, twinkle, little star,<br>
       How I wonder what you are.</i></p>
       <p>Clap: twin-kle, twin-kle, lit-tle star.</p>`,

      [{ heading: "Exercise 41.1 — Clap the rhythm.", items: [
          "Twinkle, twinkle, little star",
          "Humpty Dumpty sat on a wall",
          "Jack and Jill went up the hill"
        ]},
       { heading: "Exercise 41.2 — Write a 2-line poem with rhythm.", items: [] }],

      `<p>Any 2-line poem with a beat.</p>`,

      [{ q: "What is rhythm?", a: ["beat", "any"] }]),

    D(3, "📝", "Stanzas",
      "Learn about stanzas in poems.",
      `<p class='big-emoji'>📝 📚</p>
       <p>A <b>stanza</b> is a group of lines in a poem — like a paragraph in a story.</p>
       <h3>Example</h3>
       <p><i>Roses are red,<br>
       Violets are blue,<br>
       Sugar is sweet,<br>
       And so are you.</i></p>
       <p>This poem has 1 stanza with 4 lines.</p>`,

      [{ heading: "Exercise 42.1 — How many lines in this stanza?", items: [
          "Roses are red, Violets are blue, Sugar is sweet, And so are you."
        ]},
       { heading: "Exercise 42.2 — Write a 4-line stanza.", items: [] }],

      `<p><b>42.1:</b> 4 lines</p>`,

      [{ q: "What is a stanza?", a: ["group of lines", "any"] }]),

    D(4, "📝", "Read a Poem",
      "Read a poem aloud.",
      `<p class='big-emoji'>📝 🎤</p>
       <h3>Poem: My Shadow</h3>
       <p><i>I have a little shadow<br>
       That goes in and out with me,<br>
       And what can be the use of him<br>
       Is more than I can see.</i></p>`,

      [{ heading: "Exercise 43.1 — Read the poem aloud.", items: [] },
       { heading: "Exercise 43.2 — Answer.", items: [
          "What is the poem about?",
          "Where does the shadow go?",
          "How many lines in the poem?"
        ]}],

      `<p><b>43.2:</b> 1. A shadow. 2. In and out with the speaker. 3. 4 lines.</p>`,

      [{ q: "What is the poem about?", a: ["shadow", "any"] }]),

    D(5, "🎨", "Write a Poem",
      "Write your own poem.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Write a 4-line poem about something you like.</p>
       <h3>Poem Starters</h3>
       <ul>
         <li>I like…</li>
         <li>I see…</li>
         <li>I feel…</li>
       </ul>`,

      [{ heading: "Exercise 44.1 — Write a 4-line poem.", items: [] },
       { heading: "Exercise 44.2 — Draw a picture for your poem.", items: [] }],

      `<p>⭐ for a complete poem.</p>`,

      [{ q: "What is your poem about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — INFORMAL LETTERS
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Informal Letters", days: [

    D(1, "📝", "Letter Parts",
      "Learn the parts of a letter.",
      `<p class='big-emoji'>📝 📧</p>
       <p>An <b>informal letter</b> has 5 parts:</p>
       <ol>
         <li>Address</li>
         <li>Date</li>
         <li>Greeting (Dear…)</li>
         <li>Body</li>
         <li>Closing (Your friend, …)</li>
       </ol>`,

      [{ heading: "Exercise 45.1 — Name the 5 parts of a letter.", items: [] },
       { heading: "Exercise 45.2 — Write the greeting and closing of a letter to your friend.", items: [] }],

      `<p>⭐</p>`,

      [{ q: "How many parts in a letter?", a: ["5", "five"] }]),

    D(2, "📝", "Address",
      "Write an address.",
      `<p class='big-emoji'>📝 🏠</p>
       <p>The <b>address</b> goes at the top of the letter.</p>
       <h3>Example</h3>
       <p>P.O. Box 123<br>
       Accra<br>
       Ghana</p>`,

      [{ heading: "Exercise 46.1 — Write your address.", items: [] },
       { heading: "Exercise 46.2 — Write the date.", items: [
          "Today's date"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Where does the address go?", a: ["top", "any"] }]),

    D(3, "📝", "Greeting",
      "Write greetings for letters.",
      `<p class='big-emoji'>📝 👋</p>
       <h3>Common Greetings</h3>
       <ul>
         <li>Dear Ama,</li>
         <li>Dear Mum,</li>
         <li>Dear Uncle Kofi,</li>
         <li>Dear Friend,</li>
       </ul>`,

      [{ heading: "Exercise 47.1 — Write a greeting for each person.", items: [
          "your friend", "your mother", "your teacher", "your uncle"
        ]}],

      `<p>⭐</p>`,

      [{ q: "How do you start a letter?", a: ["dear", "any"] }]),

    D(4, "📝", "Body",
      "Write the body of a letter.",
      `<p class='big-emoji'>📝 💬</p>
       <p>The <b>body</b> is the main part of the letter.</p>
       <h3>Example</h3>
       <p><i>How are you? I am fine. I want to tell you about my school. We have a new teacher. She is very kind.</i></p>`,

      [{ heading: "Exercise 48.1 — Write the body of a letter to your friend about your school.", items: [] }],

      `<p>Any 3–4 sentences.</p>`,

      [{ q: "What is the body?", a: ["main part", "any"] }]),

    D(5, "🎨", "Write a Letter",
      "Write a complete letter.",
      `<p class='big-emoji'>🎨 📧</p>
       <p>Write a complete letter to a friend.</p>
       <h3>Structure</h3>
       <ol>
         <li>Address</li>
         <li>Date</li>
         <li>Dear…,</li>
         <li>Body (3–4 sentences)</li>
         <li>Your friend, [Your name]</li>
       </ol>`,

      [{ heading: "Exercise 49.1 — Write a letter.", items: [] }],

      `<p>⭐ for a complete letter.</p>`,

      [{ q: "How do you end a letter?", a: ["your friend", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — COMPREHENSION
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Comprehension", days: [

    D(1, "📝", "Literal Questions",
      "Answer literal comprehension questions.",
      `<p class='big-emoji'>📝 🔍</p>
       <p><b>Literal questions</b> are answered by finding information directly in the passage.</p>
       <p><b>Passage:</b> <i>Ama went to the market with her mother. They bought tomatoes, onions, and fish. Ama carried the bag home.</i></p>`,

      [{ heading: "Exercise 50.1 — Answer.", items: [
          "Who went to the market?",
          "What did they buy?",
          "Who carried the bag home?"
        ]}],

      `<p><b>50.1:</b> 1. Ama and her mother. 2. Tomatoes, onions, and fish. 3. Ama.</p>`,

      [{ q: "Who went to the market?", a: ["ama and her mother", "ama"] }]),

    D(2, "📝", "Inference",
      "Answer inference questions.",
      `<p class='big-emoji'>📝 💭</p>
       <p><b>Inference</b> questions are answered by thinking about what the passage suggests.</p>
       <p><b>Passage:</b> <i>Kofi ran all the way home. He was breathing fast. He drank a lot of water.</i></p>`,

      [{ heading: "Exercise 51.1 — Answer.", items: [
          "How was Kofi feeling?",
          "Why did he drink water?",
          "What do you think Kofi did?"
        ]}],

      `<p><b>51.1:</b> 1. Tired / thirsty. 2. Because he was thirsty. 3. Ran a race or played football.</p>`,

      [{ q: "How was Kofi feeling?", a: ["tired", "thirsty", "any"] }]),

    D(3, "📝", "Vocabulary in Context",
      "Use context to understand new words.",
      `<p class='big-emoji'>📝 📖</p>
       <p>We can work out the meaning of a new word by reading the words around it.</p>
       <p><b>Passage:</b> <i>The huge elephant walked slowly. It was bigger than all the other animals.</i></p>
       <p><b>huge</b> = very big.</p>`,

      [{ heading: "Exercise 52.1 — What does 'huge' mean?", items: [] },
       { heading: "Exercise 52.2 — What does 'slowly' mean?", items: [] }],

      `<p><b>52.1:</b> Very big. <b>52.2:</b> Not fast.</p>`,

      [{ q: "What does 'huge' mean?", a: ["very big", "big"] }]),

    D(4, "📝", "Practice Passage",
      "Read and answer.",
      `<p class='big-emoji'>📝 📖</p>
       <p><b>Passage:</b> <i>A rabbit lived in a burrow. One day, a fox came to the burrow. The rabbit was scared. It ran quickly to a hole under a tree. The fox could not find it.</i></p>`,

      [{ heading: "Exercise 53.1 — Answer.", items: [
          "Where did the rabbit live?",
          "Who came to the burrow?",
          "How did the rabbit feel?",
          "Where did the rabbit hide?",
          "What happened to the fox?"
        ]}],

      `<p><b>53.1:</b> 1. In a burrow. 2. A fox. 3. Scared. 4. Under a tree. 5. Could not find the rabbit.</p>`,

      [{ q: "Who came to the burrow?", a: ["fox", "a fox"] }]),

    D(5, "🎨", "Answer Key",
      "Check your answers.",
      `<p class='big-emoji'>🎨 ✅</p>
       <p>Review all your answers from this week.</p>
       <h3>Tips for Comprehension</h3>
       <ul>
         <li>Read the passage twice.</li>
         <li>Underline key words.</li>
         <li>Read the questions carefully.</li>
         <li>Find the answer in the passage.</li>
       </ul>`,

      [{ heading: "Exercise 54.1 — Read a passage and answer 5 questions.", items: [] }],

      `<p>⭐ for a completed exercise.</p>`,

      [{ q: "What should you do first?", a: ["read the passage", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 16 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: "Review", days: [

    D(1, "🔁", "Review Poetry",
      "Review poetry.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Rhymes</li>
         <li>Rhythm</li>
         <li>Stanzas</li>
       </ul>`,

      [{ heading: "Exercise 55.1 — Answer.", items: [
          "What is a rhyme?",
          "What is rhythm?",
          "What is a stanza?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a stanza?", a: ["group of lines", "any"] }]),

    D(2, "🔁", "Review Letters",
      "Review informal letters.",
      `<p class='big-emoji'>🔁 📧</p>
       <h3>Review</h3>
       <ul>
         <li>Address</li>
         <li>Date</li>
         <li>Greeting</li>
         <li>Body</li>
         <li>Closing</li>
       </ul>`,

      [{ heading: "Exercise 56.1 — Name the 5 parts of a letter.", items: [] }],

      `<p>⭐</p>`,

      [{ q: "How do you close a letter?", a: ["your friend", "any"] }]),

    D(3, "🔁", "Review Comprehension",
      "Review comprehension.",
      `<p class='big-emoji'>🔁 📖</p>
       <p><b>Passage:</b> <i>Kojo liked to read. Every evening, he read a book. He read about animals, places, and people.</i></p>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "What did Kojo like?",
          "When did he read?",
          "What did he read about?"
        ]}],

      `<p><b>57.1:</b> 1. Reading. 2. Every evening. 3. Animals, places, and people.</p>`,

      [{ q: "What did Kojo like?", a: ["reading", "to read"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a rhyme?</li>
         <li>What is a stanza?</li>
         <li>Name 3 parts of a letter.</li>
         <li>What goes at the top of a letter?</li>
         <li>What is the body of a letter?</li>
         <li>How do you close a letter?</li>
         <li>What is a comprehension passage?</li>
         <li>What do we find in a comprehension passage?</li>
         <li>What is an inference?</li>
         <li>What is vocabulary?</li>
       </ol>`,

      [{ heading: "Exercise 58.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Name 3 parts of a letter.", a: ["address date greeting", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Poetry (10)</li>
         <li>Part B — Letter writing (10)</li>
         <li>Part C — Comprehension (10)</li>
         <li>Part D — Mixed (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Poetry (10)", "Part B — Letter writing (10)",
          "Part C — Comprehension (10)", "Part D — Mixed (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — DESCRIPTIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Descriptive Writing", days: [

    D(1, "📝", "Using Senses",
      "Use the 5 senses to describe.",
      `<p class='big-emoji'>📝 👁️👂👃👅✋</p>
       <p>When we describe, we use our <b>5 senses</b>:</p>
       <ul>
         <li>👁️ What we <b>see</b></li>
         <li>👂 What we <b>hear</b></li>
         <li>👃 What we <b>smell</b></li>
         <li>👅 What we <b>taste</b></li>
         <li>✋ What we <b>feel</b></li>
       </ul>`,

      [{ heading: "Exercise 59.1 — Describe an orange using 3 senses.", items: [
          "see", "taste", "smell"
        ]},
       { heading: "Exercise 59.2 — Describe rain using 3 senses.", items: [
          "see", "hear", "feel"
        ]}],

      `<p>Any correct descriptions.</p>`,

      [{ q: "How many senses do we use to describe?", a: ["5", "five"] }]),

    D(2, "📝", "Similes",
      "Learn about similes.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>A <b>simile</b> compares two things using <b>like</b> or <b>as</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>As fast as a cheetah</li>
         <li>As quiet as a mouse</li>
         <li>Bright like the sun</li>
         <li>Soft like cotton</li>
       </ul>`,

      [{ heading: "Exercise 60.1 — Complete the similes.", items: [
          "As fast as a ___",
          "As quiet as a ___",
          "As bright as the ___",
          "As soft as ___"
        ]},
       { heading: "Exercise 60.2 — Write 3 similes of your own.", items: [] }],

      `<p>Any correct similes.</p>`,

      [{ q: "What is a simile?", a: ["comparison using like or as", "any"] }]),

    D(3, "📝", "Adjectives",
      "Use adjectives in descriptions.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>Adjectives make descriptions vivid.</p>
       <h3>Example</h3>
       <p><i>The tall, green tree swayed in the gentle breeze.</i></p>`,

      [{ heading: "Exercise 61.1 — Add 3 adjectives to each sentence.", items: [
          "The tree swayed.",
          "The dog barked.",
          "The river flowed.",
          "The girl smiled."
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: "What do adjectives do?", a: ["describe", "any"] }]),

    D(4, "📝", "Describe a Place",
      "Write a description of a place.",
      `<p class='big-emoji'>📝 🏞️</p>
       <p>Describe a place using your senses, adjectives, and similes.</p>
       <h3>Example</h3>
       <p><i>The beach is a beautiful place. The sand is soft like sugar. The waves are blue and the wind is cool.</i></p>`,

      [{ heading: "Exercise 62.1 — Describe your school.", items: [] },
       { heading: "Exercise 62.2 — Describe your home.", items: [] }],

      `<p>Any 3–4 sentence description.</p>`,

      [{ q: "What 3 things should you use to describe?", a: ["senses adjectives similes", "any"] }]),

    D(5, "🎨", "Descriptive Poster",
      "Make a descriptive poster.",
      `<p class='big-emoji'>🎨 🏞️</p>
       <p>Draw a place you love and describe it.</p>
       <h3>What to Include</h3>
       <ul>
         <li>3 senses</li>
         <li>3 adjectives</li>
         <li>1 simile</li>
       </ul>`,

      [{ heading: "Exercise 63.1 — Draw and describe.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your favourite place?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — NARRATIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Narrative Writing", days: [

    D(1, "📝", "Story Structure",
      "Review story structure.",
      `<p class='big-emoji'>📝 📖</p>
       <h3>Story Structure</h3>
       <ul>
         <li>Beginning — characters and setting</li>
         <li>Middle — problem</li>
         <li>End — solution</li>
       </ul>`,

      [{ heading: "Exercise 64.1 — Plan a story with 3 parts.", items: [
          "Characters", "Setting", "Problem", "Solution"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning middle end", "any"] }]),

    D(2, "📝", "Openers",
      "Learn to write story openers.",
      `<p class='big-emoji'>📝 🌅</p>
       <h3>Story Openers</h3>
       <ul>
         <li>Once upon a time…</li>
         <li>One sunny morning…</li>
         <li>Long ago, in a village…</li>
         <li>It was a dark and stormy night…</li>
       </ul>`,

      [{ heading: "Exercise 65.1 — Write 3 story openers.", items: [] }],

      `<p>Any 3 openers.</p>`,

      [{ q: "What is a story opener?", a: ["beginning", "any"] }]),

    D(3, "📝", "Dialogue",
      "Use dialogue in stories.",
      `<p class='big-emoji'>📝 💬</p>
       <p><b>Dialogue</b> is what the characters say. It uses quotation marks.</p>
       <h3>Example</h3>
       <p><i>"Where are you going?" asked Ama.</i><br>
       <i>"To the market," replied Kofi.</i></p>`,

      [{ heading: "Exercise 66.1 — Write a dialogue between two friends.", items: [] }],

      `<p>Any 4-line dialogue.</p>`,

      [{ q: "What is dialogue?", a: ["what characters say", "any"] }]),

    D(4, "📝", "Write a Narrative",
      "Write a narrative story.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Write a complete story with characters, setting, problem, and solution.</p>
       <h3>Plan</h3>
       <ol>
         <li>Who is in the story?</li>
         <li>Where does it happen?</li>
         <li>What goes wrong?</li>
         <li>How is it solved?</li>
       </ol>`,

      [{ heading: "Exercise 67.1 — Write a story about 'A Day I Will Never Forget'.", items: [] }],

      `<p>Any story with 3 parts.</p>`,

      [{ q: "What is your story about?", a: ["any"] }]),

    D(5, "🎨", "Narrative Poster",
      "Make a narrative poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Make a poster about your story with 3 pictures.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Tell the story aloud.</p>`,

      [{ heading: "Exercise 68.1 — Draw and write.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your story about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — PERSUASIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Persuasive Writing", days: [

    D(1, "📝", "Opinion",
      "Learn to state an opinion.",
      `<p class='big-emoji'>📝 💬</p>
       <p>An <b>opinion</b> is what you think or believe.</p>
       <h3>Examples</h3>
       <ul>
         <li>I think every child should go to school.</li>
         <li>In my opinion, reading is fun.</li>
       </ul>`,

      [{ heading: "Exercise 69.1 — Write 3 opinions.", items: [
          "about school", "about food", "about reading"
        ]}],

      `<p>Any 3 opinions.</p>`,

      [{ q: "What is an opinion?", a: ["what you think", "any"] }]),

    D(2, "📝", "Reasons",
      "Give reasons for an opinion.",
      `<p class='big-emoji'>📝 🔑</p>
       <p>Give <b>reasons</b> to support your opinion. Use "because".</p>
       <h3>Example</h3>
       <p><i>I think every child should go to school because education is important. It helps us get jobs and learn new things.</i></p>`,

      [{ heading: "Exercise 70.1 — Write 2 reasons for: 'Every child should go to school.'", items: [] }],

      `<p>Any 2 reasons.</p>`,

      [{ q: "What word do we use to give reasons?", a: ["because", "any"] }]),

    D(3, "📝", "Evidence",
      "Give evidence for reasons.",
      `<p class='big-emoji'>📝 📊</p>
       <p><b>Evidence</b> is facts or examples that support your reasons.</p>
       <h3>Example</h3>
       <p><i>For example, children who go to school get better jobs when they grow up.</i></p>`,

      [{ heading: "Exercise 71.1 — Add evidence to: 'Reading is fun.'", items: [] }],

      `<p>Any evidence.</p>`,

      [{ q: "What is evidence?", a: ["facts", "examples", "any"] }]),

    D(4, "📝", "Write a Persuasive Paragraph",
      "Write a persuasive paragraph.",
      `<p class='big-emoji'>📝 ✍️</p>
       <h3>Structure</h3>
       <ol>
         <li>State your opinion.</li>
         <li>Give 2 reasons.</li>
         <li>Give evidence.</li>
         <li>Close with a strong statement.</li>
       </ol>`,

      [{ heading: "Exercise 72.1 — Write a persuasive paragraph on 'Why We Should Keep Our School Clean'.", items: [] }],

      `<p>Any persuasive paragraph.</p>`,

      [{ q: "What 3 things does a persuasive paragraph have?", a: ["opinion reasons evidence", "any"] }]),

    D(5, "🎨", "Persuasive Poster",
      "Make a persuasive poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster to persuade others about something you believe.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Persuade your friends!</p>`,

      [{ heading: "Exercise 73.1 — Draw and write.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your poster about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Descriptive",
      "Review descriptive writing.",
      `<p class='big-emoji'>🔁 🏞️</p>
       <h3>Review</h3>
       <ul>
         <li>Senses</li>
         <li>Adjectives</li>
         <li>Similes</li>
       </ul>`,

      [{ heading: "Exercise 74.1 — Describe an apple using 3 senses.", items: [] }],

      `<p>Any description.</p>`,

      [{ q: "How many senses?", a: ["5", "five"] }]),

    D(2, "🔁", "Review Narrative",
      "Review narrative writing.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Review</h3>
       <ul>
         <li>Beginning, middle, end</li>
         <li>Dialogue</li>
       </ul>`,

      [{ heading: "Exercise 75.1 — Write 3 sentences of a story with dialogue.", items: [] }],

      `<p>Any story with dialogue.</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning middle end", "any"] }]),

    D(3, "🔁", "Review Persuasive",
      "Review persuasive writing.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Opinion</li>
         <li>Reasons</li>
         <li>Evidence</li>
       </ul>`,

      [{ heading: "Exercise 76.1 — Write an opinion with 2 reasons.", items: [] }],

      `<p>Any opinion with reasons.</p>`,

      [{ q: "What is an opinion?", a: ["what you think", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>How many senses?</li>
         <li>What is a simile?</li>
         <li>What is dialogue?</li>
         <li>What are the 3 parts of a story?</li>
         <li>What is an opinion?</li>
         <li>What is evidence?</li>
         <li>What word gives a reason?</li>
         <li>Give an example of a simile.</li>
         <li>What is an adjective?</li>
         <li>Write one opinion.</li>
       </ol>`,

      [{ heading: "Exercise 77.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a simile?", a: ["comparison using like or as", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 40 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Descriptive (10)</li>
         <li>Part B — Narrative (10)</li>
         <li>Part C — Persuasive (10)</li>
         <li>Part D — Mixed (10)</li>
       </ul>`,

      [{ heading: "Complete the test.", items: [
          "Part A — Descriptive (10)", "Part B — Narrative (10)",
          "Part C — Persuasive (10)", "Part D — Mixed (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 40</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — READING DIFFERENT TEXTS
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Reading Different Texts", days: [

    D(1, "📝", "Narrative",
      "Read a narrative text.",
      `<p class='big-emoji'>📝 📖</p>
       <p>A <b>narrative</b> tells a story with characters, setting, and events.</p>
       <h3>Example</h3>
       <p><i>One day, a young girl named Ama found a magical stone in her garden. The stone glowed at night.</i></p>`,

      [{ heading: "Exercise 78.1 — Answer.", items: [
          "What type of text is this?",
          "Who is the main character?",
          "What did Ama find?"
        ]}],

      `<p><b>78.1:</b> 1. Narrative. 2. Ama. 3. A magical stone.</p>`,

      [{ q: "What is a narrative?", a: ["a story", "any"] }]),

    D(2, "📝", "Informative",
      "Read an informative text.",
      `<p class='big-emoji'>📝 📊</p>
       <p>An <b>informative</b> text gives facts about a topic.</p>
       <h3>Example</h3>
       <p><i>Elephants are the largest land animals. They live in Africa and Asia. They eat plants, leaves, and fruit.</i></p>`,

      [{ heading: "Exercise 79.1 — Answer.", items: [
          "What type of text is this?",
          "What are the largest land animals?",
          "What do elephants eat?"
        ]}],

      `<p><b>79.1:</b> 1. Informative. 2. Elephants. 3. Plants, leaves, and fruit.</p>`,

      [{ q: "What is an informative text?", a: ["facts", "any"] }]),

    D(3, "📝", "Persuasive",
      "Read a persuasive text.",
      `<p class='big-emoji'>📝 💬</p>
       <p>A <b>persuasive</b> text tries to convince you to do or believe something.</p>
       <h3>Example</h3>
       <p><i>You should always wash your hands before eating. This is because germs can make you sick. Washing hands keeps you healthy.</i></p>`,

      [{ heading: "Exercise 80.1 — Answer.", items: [
          "What type of text is this?",
          "What should you do before eating?",
          "Why?"
        ]}],

      `<p><b>80.1:</b> 1. Persuasive. 2. Wash hands. 3. Germs can make you sick.</p>`,

      [{ q: "What is a persuasive text?", a: ["tries to convince", "any"] }]),

    D(4, "📝", "Compare Texts",
      "Compare different types of texts.",
      `<p class='big-emoji'>📝 ⚖️</p>
       <p>Different texts have different purposes.</p>
       <h3>Comparison</h3>
       <ul>
         <li>Narrative — tells a story</li>
         <li>Informative — gives facts</li>
         <li>Persuasive — convinces</li>
       </ul>`,

      [{ heading: "Exercise 81.1 — Match each text to its purpose.", items: [
          "A story about a lion",
          "Facts about lions",
          "Why you should protect lions"
        ]}],

      `<p><b>81.1:</b> 1. Narrative. 2. Informative. 3. Persuasive.</p>`,

      [{ q: "Which text gives facts?", a: ["informative", "any"] }]),

    D(5, "🎨", "Text Poster",
      "Make a text-type poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster showing the 3 types of texts.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Narrative — story</li>
         <li>Informative — facts</li>
         <li>Persuasive — opinion</li>
       </ul>`,

      [{ heading: "Exercise 82.1 — Draw and label.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name 3 types of texts.", a: ["narrative informative persuasive", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — EDITING & PROOFREADING
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Editing & Proofreading", days: [

    D(1, "📝", "Check Spelling",
      "Check spelling in your work.",
      `<p class='big-emoji'>📝 ✅</p>
       <p><b>Proofreading</b> means reading your work to find mistakes.</p>
       <h3>Steps</h3>
       <ol>
         <li>Read your work slowly.</li>
         <li>Look for spelling mistakes.</li>
         <li>Correct them.</li>
       </ol>`,

      [{ heading: "Exercise 83.1 — Correct the spelling.", items: [
          "I like to reed books.",
          "The tree is very tal.",
          "My frend is happy.",
          "The dog is big and blak.",
          "We go to scool every day."
        ]}],

      `<p><b>83.1:</b> 1. read 2. tall 3. friend 4. black 5. school</p>`,

      [{ q: "Correct: frend", a: ["friend"] },
       { q: "Correct: scool", a: ["school"] }]),

    D(2, "📝", "Check Punctuation",
      "Check punctuation in your work.",
      `<p class='big-emoji'>📝 ✅</p>
       <h3>Punctuation Checklist</h3>
       <ul>
         <li>Does every sentence start with a capital?</li>
         <li>Does every sentence end with . ? or !?</li>
         <li>Are commas used in lists?</li>
       </ul>`,

      [{ heading: "Exercise 84.1 — Add correct punctuation.", items: [
          "i like rice and beans",
          "where is my book",
          "wow that is great",
          "the boy runs fast",
          "she has a red blue and green pen"
        ]}],

      `<p><b>84.1:</b> 1. I like rice and beans. 2. Where is my book? 3. Wow, that is great! 4. The boy runs fast. 5. She has a red, blue, and green pen.</p>`,

      [{ q: "Add punctuation: i like rice", a: ["I like rice."] }]),

    D(3, "📝", "Check Grammar",
      "Check grammar in your work.",
      `<p class='big-emoji'>📝 ✅</p>
       <h3>Grammar Checklist</h3>
       <ul>
         <li>Do subjects and verbs match?</li>
         <li>Are pronouns correct?</li>
         <li>Are tenses correct?</li>
       </ul>`,

      [{ heading: "Exercise 85.1 — Correct the grammar.", items: [
          "She go to school.",
          "They is happy.",
          "He run fast.",
          "I seen the bird.",
          "The boys plays football."
        ]}],

      `<p><b>85.1:</b> 1. She goes to school. 2. They are happy. 3. He runs fast. 4. I saw the bird. 5. The boys play football.</p>`,

      [{ q: "Correct: She go to school.", a: ["She goes to school."] }]),

    D(4, "📝", "Edit Your Work",
      "Edit your own writing.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Choose a piece of your own writing and edit it.</p>
       <h3>Checklist</h3>
       <ul>
         <li>Spelling</li>
         <li>Punctuation</li>
         <li>Grammar</li>
         <li>Sentence structure</li>
       </ul>`,

      [{ heading: "Exercise 86.1 — Edit a paragraph you wrote this week.", items: [] }],

      `<p>⭐ for careful editing.</p>`,

      [{ q: "What is proofreading?", a: ["checking for mistakes", "any"] }]),

    D(5, "🎨", "Editing Poster",
      "Make an editing poster.",
      `<p class='big-emoji'>🎨 ✅</p>
       <p>Make a poster with an editing checklist.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Check spelling</li>
         <li>Check punctuation</li>
         <li>Check grammar</li>
       </ul>`,

      [{ heading: "Exercise 87.1 — Draw and label.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What 3 things do you check?", a: ["spelling punctuation grammar", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 23 — REVISION
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: "Revision", days: [

    D(1, "🔁", "Spelling",
      "Revise spelling.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Revise</h3>
       <ul>
         <li>Vowels and blends</li>
         <li>Digraphs</li>
         <li>Silent letters</li>
         <li>Prefixes and suffixes</li>
       </ul>`,

      [{ heading: "Exercise 88.1 — Spell the word.", items: [
          "chair", "lamb", "happy", "careless", "unhappy"
        ]}],

      `<p>Any correct spellings.</p>`,

      [{ q: "Spell 'chair'.", a: ["chair"] },
       { q: "Spell 'happy'.", a: ["happy"] }]),

    D(2, "🔁", "Grammar",
      "Revise grammar.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Revise</h3>
       <ul>
         <li>Nouns and pronouns</li>
         <li>Verbs and tenses</li>
         <li>Adjectives</li>
       </ul>`,

      [{ heading: "Exercise 89.1 — Answer.", items: [
          "Common noun in 'The boy runs.'",
          "Pronoun for 'Ama'",
          "Action verb in 'She sings.'",
          "Linking verb in 'I am tired.'",
          "Adjective in 'The tall boy runs.'"
        ]}],

      `<p><b>89.1:</b> 1. boy 2. she 3. sings 4. am 5. tall</p>`,

      [{ q: "Pronoun for 'Ama'?", a: ["she"] }]),

    D(3, "🔁", "Reading",
      "Revise reading.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Revise</h3>
       <ul>
         <li>Comprehension</li>
         <li>Literal questions</li>
         <li>Inference</li>
       </ul>`,

      [{ heading: "Exercise 90.1 — Answer.", items: [
          "What is a literal question?",
          "What is an inference?",
          "What is a narrative?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an inference?", a: ["thinking about what the passage suggests", "any"] }]),

    D(4, "🔁", "Writing",
      "Revise writing.",
      `<p class='big-emoji'>🔁 ✍️</p>
       <h3>Revise</h3>
       <ul>
         <li>Paragraphs</li>
         <li>Stories</li>
         <li>Letters</li>
         <li>Descriptive writing</li>
       </ul>`,

      [{ heading: "Exercise 91.1 — Write a paragraph on 'My Best Friend'.", items: [] }],

      `<p>⭐ for a complete paragraph.</p>`,

      [{ q: "What are the 3 parts of a paragraph?", a: ["topic supporting closing", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Do a practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Spell 'chair'.</li>
         <li>Spell 'happy'.</li>
         <li>What is a common noun?</li>
         <li>What is a proper noun?</li>
         <li>What is a verb?</li>
         <li>What is an adjective?</li>
         <li>What are the 3 parts of a story?</li>
         <li>What are the 3 parts of a paragraph?</li>
         <li>What ends a question?</li>
         <li>What is a simile?</li>
       </ol>`,

      [{ heading: "Exercise 92.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a proper noun?", a: ["specific name", "any"] }])
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
         <li>Phonics and spelling</li>
         <li>Grammar (nouns, verbs, adjectives, pronouns)</li>
         <li>Reading stories and comprehension</li>
         <li>Punctuation</li>
         <li>Writing (paragraphs, stories, letters, poems)</li>
         <li>Descriptive, narrative, persuasive writing</li>
         <li>Editing and proofreading</li>
       </ul>`,

      [{ heading: "Exercise 93.1 — Answer.", items: [
          "Name 3 things you learned this year.",
          "What is your favourite topic?",
          "What is one new word you learned?"
        ]},
       { heading: "Exercise 93.2 — Draw.", items: [
          "Draw your favourite English topic."
        ]}],

      `<p>⭐ for effort.</p>`,

      [{ q: "Name a topic you liked.", a: ["any"] },
       { q: "Name a new word you learned.", a: ["any"] }]),

    D(2, "📁", "Portfolio",
      "Make a portfolio of your best work.",
      `<p class='big-emoji'>📁 🌟</p>
       <p>Make a <b>portfolio</b> of your best English work.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Your best story</li>
         <li>Your best poem</li>
         <li>Your best letter</li>
         <li>Your best paragraph</li>
       </ul>`,

      [{ heading: "Exercise 94.1 — Make your portfolio.", items: [
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
         <li>Speak clearly.</li>
         <li>Show each piece of work.</li>
         <li>Say 2 sentences about each.</li>
         <li>Answer questions.</li>
       </ol>`,

      [{ heading: "Exercise 95.1 — Present your portfolio.", items: [
          "Stand up straight",
          "Show each piece",
          "Say 2 sentences for each",
          "Answer questions"
        ]}],

      `<p>⭐ for confident speaking.</p>`,

      [{ q: "What is your favourite work?", a: ["any"] }]),

    D(4, "🎉", "Celebration",
      "Celebrate your year of English.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p>You have completed Grade 3 English! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>📖 Read one last story aloud.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 3 English! I can read, write, spell, and tell stories!"</p>`,

      [{ heading: "Exercise 96.1 — Celebrate!", items: [
          "Show your work.",
          "Read one last story.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 4?", a: ["any"] }]),

    D(5, "⭐", "Big Star Day",
      "Give yourself the biggest star.",
      `<p class='big-emoji'>⭐⭐⭐ 🏆 🌟</p>
       <p>Today you are an English champion! You have worked hard all year.</p>
       <h3>Say This</h3>
       <ul>
         <li>⭐ "I can read!"</li>
         <li>⭐ "I can write!"</li>
         <li>⭐ "I can spell!"</li>
       </ul>
       <h3>What to Do</h3>
       <ol>
         <li>Look through your workbook one last time.</li>
         <li>Pick your favourite lesson.</li>
         <li>Tell your family why you liked it.</li>
         <li>Give yourself 3 big stars! ⭐⭐⭐</li>
       </ol>
       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself as a reader and writer. Add 3 big stars around you.</p>`,

      [{ heading: "Exercise 97.1 — Big Star Day", items: [
          'Say "I can read!"',
          'Say "I can write!"',
          'Say "I can spell!"',
          "Give yourself 3 stars! ⭐⭐⭐"
        ]}],

      `<p>⭐⭐⭐ for an amazing year of English!</p>`,

      [{ q: "What is your favourite lesson?", a: ["any"] },
       { q: "What do you want to learn next?", a: ["any"] }])
  ]}

];