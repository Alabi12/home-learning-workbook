// src/data/grade4/english.js
// Grade 4 English — NaCCA Standards-Based Curriculum (complete, 24 weeks)
// Strands: Phonics & Spelling · Grammar · Reading · Writing · Literature

import { D } from '../helpers.js';

export const english = [

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 1 — ADVANCED PHONICS
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: "Advanced Phonics", days: [

    D(1, "🔤", "Vowel Teams",
      "Read and spell words with vowel teams.",
      `<p class='big-emoji'>🔤 🅰️🅸</p>
       <p>A <b>vowel team</b> is two vowels together that make one sound.</p>
       <ul>
         <li>ai — rain, train, paint</li>
         <li>ay — play, day, stay</li>
         <li>ee — tree, green, sleep</li>
         <li>ea — seat, read, dream</li>
         <li>oa — boat, road, coat</li>
         <li>ow — snow, grow, blow</li>
         <li>oo — moon, food, school</li>
         <li>ou — house, cloud, round</li>
       </ul>
       <p><b>Word List 1:</b> rain, train, play, day, green, sleep, seat, dream, boat, road, snow, grow, moon, food, house, cloud, round, paint, coat, school</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the vowel team in 'rain'?</p>
       <p><b>Answer:</b> <b>ai</b> — the two vowels together.</p>`,

      [{ heading: "Exercise 1.1 — Circle the vowel team.", items: [
          "rain", "play", "green", "boat", "snow", "moon", "house", "coat"
        ]},
       { heading: "Exercise 1.2 — Write each word under the correct team.", items: [
          "rain", "play", "green", "boat", "snow", "moon", "house", "coat"
        ]}],

      `<p>Any correct classification.</p>`,

      [{ q: "Vowel team in 'rain'?", a: ["ai"] },
       { q: "Vowel team in 'boat'?", a: ["oa"] },
       { q: "Vowel team in 'moon'?", a: ["oo"] }]),

    D(2, "🔤", "Consonant Patterns",
      "Read and spell words with consonant patterns.",
      `<p class='big-emoji'>🔤 ck ng</p>
       <p>Some consonants work together at the end of words.</p>
       <ul>
         <li>-ck — back, pick, clock</li>
         <li>-ng — sing, long, ring</li>
         <li>-nk — pink, bank, thank</li>
         <li>-sh — fish, wash, brush</li>
         <li>-ch — much, watch, lunch</li>
         <li>-tch — catch, match, watch</li>
       </ul>
       <p><b>Word List 2:</b> back, pick, clock, sing, long, ring, pink, bank, thank, fish, wash, brush, much, watch, lunch, catch, match, king, wing, dish</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the ending of 'back'?</p>
       <p><b>Answer:</b> <b>-ck</b>.</p>`,

      [{ heading: "Exercise 2.1 — Circle the consonant pattern.", items: [
          "back", "sing", "pink", "fish", "much", "catch", "clock", "brush"
        ]},
       { heading: "Exercise 2.2 — Fill in the missing pattern.", items: [
          "ba__", "si__", "pi__", "fi__", "mu__", "ca__"
        ]}],

      `<p><b>2.2:</b> 1. back 2. sing 3. pink 4. fish 5. much 6. catch</p>`,

      [{ q: "Ending of 'back'?", a: ["ck"] },
       { q: "Ending of 'sing'?", a: ["ng"] },
       { q: "Ending of 'catch'?", a: ["tch"] }]),

    D(3, "🔤", "Syllables",
      "Count syllables in words.",
      `<p class='big-emoji'>🔤 👏</p>
       <p>A <b>syllable</b> is a beat in a word.</p>
       <ul>
         <li>1 syllable — cat, dog, run</li>
         <li>2 syllables — ta-ble, gar-den</li>
         <li>3 syllables — com-pu-ter, um-brel-la</li>
       </ul>
       <h3>How to Count</h3>
       <p>Clap each beat as you say the word.</p>`,

      [{ heading: "Exercise 3.1 — Divide each word into syllables.", items: [
          "table", "computer", "elephant", "banana", "bicycle", "family", "hospital", "telephone"
        ]},
       { heading: "Exercise 3.2 — Write 5 one-, 5 two-, 5 three-syllable words.", items: [] }],

      `<p><b>3.1:</b> ta-ble; com-pu-ter; e-le-phant; ba-na-na; bi-cy-cle; fa-mi-ly; hos-pi-tal; te-le-phone</p>`,

      [{ q: "How many syllables in 'table'?", a: ["2", "two"] },
       { q: "How many syllables in 'computer'?", a: ["3", "three"] }]),

    D(4, "🔤", "Homophones",
      "Read and spell homophones.",
      `<p class='big-emoji'>🔤 🎵</p>
       <p><b>Homophones</b> sound the same but have different meanings and spellings.</p>
       <ul>
         <li>to / too / two</li>
         <li>their / there / they're</li>
         <li>your / you're</li>
         <li>its / it's</li>
         <li>hear / here</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> I want (to/too/two) go.</p>
       <p><b>Answer:</b> <b>to</b> — it shows direction or purpose.</p>`,

      [{ heading: "Exercise 4.1 — Choose the correct word.", items: [
          "I want (to/too/two) go.",
          "(Their/There/They're) going home.",
          "Is this (your/you're) book?",
          "(Its/It's) raining.",
          "I can (hear/here) you."
        ]},
       { heading: "Exercise 4.2 — Write a sentence for each homophone pair.", items: [] }],

      `<p><b>4.1:</b> 1. to 2. They're 3. your 4. It's 5. hear</p>`,

      [{ q: "I want ___ go.", a: ["to"] },
       { q: "___ raining.", a: ["it's", "It's"] }]),

    D(5, "🎨", "Spelling Bee",
      "Spelling bee practice.",
      `<p class='big-emoji'>🎨 🐝</p>
       <p>Ask your parent to dictate words from this week. Spell each one out loud.</p>
       <h3>How to Do a Spelling Bee</h3>
       <ol>
         <li>Listen to the word.</li>
         <li>Say the word.</li>
         <li>Spell it letter by letter.</li>
         <li>Say the word again.</li>
       </ol>`,

      [{ heading: "Exercise 5.1 — Write 15 words from dictation.", items: [] },
       { heading: "Exercise 5.2 — Write a sentence for 5 of the words.", items: [] }],

      `<p>Check against word lists.</p>`,

      [{ q: "Spell 'beautiful'.", a: ["beautiful"] },
       { q: "Spell 'because'.", a: ["because"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 2 — GRAMMAR REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: "Grammar Review", days: [

    D(1, "📝", "Nouns",
      "Review common and proper nouns.",
      `<p class='big-emoji'>📝 🏠</p>
       <p><b>Common nouns</b> name general things. <b>Proper nouns</b> name specific things and begin with capitals.</p>
       <h3>Examples</h3>
       <ul>
         <li>Common: boy, city, book</li>
         <li>Proper: Ama, Accra, Ghana</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Is 'Accra' common or proper?</p>
       <p><b>Answer:</b> <b>Proper</b> — it names a specific place.</p>`,

      [{ heading: "Exercise 6.1 — Classify as common (C) or proper (P).", items: [
          "boy", "Ama", "city", "Accra", "book", "Ghana", "teacher", "Monday"
        ]},
       { heading: "Exercise 6.2 — Write 5 common and 5 proper nouns.", items: [] }],

      `<p><b>6.1:</b> 1. C 2. P 3. C 4. P 5. C 6. P 7. C 8. P</p>`,

      [{ q: "Is 'Accra' common or proper?", a: ["proper"] },
       { q: "Is 'boy' common or proper?", a: ["common"] }]),

    D(2, "📝", "Pronouns",
      "Review pronouns.",
      `<p class='big-emoji'>📝 🔄</p>
       <p>Pronouns replace nouns: I, you, he, she, it, we, they.</p>
       <h3>Examples</h3>
       <ul>
         <li>Ama → She</li>
         <li>The boys → They</li>
         <li>The book → It</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the pronoun for 'Ama'?</p>
       <p><b>Answer:</b> <b>She</b>.</p>`,

      [{ heading: "Exercise 7.1 — Replace the underlined noun.", items: [
          "**Ama** runs.", "**The boys** sing.", "**The book** is here.", "**We** are friends.", "**Kofi** writes."
        ]},
       { heading: "Exercise 7.2 — Write 5 sentences with pronouns.", items: [] }],

      `<p><b>7.1:</b> 1. She 2. They 3. It 4. (already a pronoun) 5. He</p>`,

      [{ q: "Pronoun for 'Ama'?", a: ["she"] },
       { q: "Pronoun for 'The boys'?", a: ["they"] }]),

    D(3, "📝", "Verbs",
      "Identify action verbs.",
      `<p class='big-emoji'>📝 🏃</p>
       <p>A <b>verb</b> shows action or state.</p>
       <p>Action verbs: run, jump, sing, dance, write, read.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the verb in 'The girl sings.'?</p>
       <p><b>Answer:</b> <b>sings</b> — it shows the action.</p>`,

      [{ heading: "Exercise 8.1 — Underline the verb.", items: [
          "The girl sings.", "The boys run.", "She writes a letter.", "We read books.", "They dance."
        ]},
       { heading: "Exercise 8.2 — Write 5 sentences with different verbs.", items: [] }],

      `<p><b>8.1:</b> 1. sings 2. run 3. writes 4. read 5. dance</p>`,

      [{ q: "Verb in 'The girl sings.'?", a: ["sings"] },
       { q: "Verb in 'The boys run.'?", a: ["run"] }]),

    D(4, "📝", "Adjectives",
      "Identify adjectives.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>An <b>adjective</b> describes a noun.</p>
       <p>Examples: red, tall, happy, sweet, beautiful.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the adjective in 'The tall boy runs.'?</p>
       <p><b>Answer:</b> <b>tall</b> — it describes the boy.</p>`,

      [{ heading: "Exercise 9.1 — Underline the adjective.", items: [
          "The tall boy runs.", "I ate a sweet mango.", "She wore a beautiful dress.",
          "The old man walked slowly.", "We saw a big elephant."
        ]},
       { heading: "Exercise 9.2 — Write 5 sentences with adjectives.", items: [] }],

      `<p><b>9.1:</b> 1. tall 2. sweet 3. beautiful 4. old 5. big</p>`,

      [{ q: "Adjective in 'The tall boy runs.'?", a: ["tall"] },
       { q: "Adjective in 'I ate a sweet mango.'?", a: ["sweet"] }]),

    D(5, "🎨", "Grammar Poster",
      "Make a grammar poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster with examples of nouns, pronouns, verbs, and adjectives.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each category.</p>`,

      [{ heading: "Exercise 10.1 — Draw and label 4 categories.", items: [] },
       { heading: "Exercise 10.2 — Write one sentence using all four.", items: [] }],

      `<p>Example: <i>She sings a beautiful song.</i> (She – pronoun; sings – verb; beautiful – adjective; song – noun.)</p>`,

      [{ q: "Give an example of a pronoun.", a: ["i", "you", "he", "she", "it", "we", "they"] },
       { q: "Give an example of an adjective.", a: ["red", "tall", "happy", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 3 — READING COMPREHENSION
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: "Reading Comprehension", days: [

    D(1, "📖", "Literal Questions",
      "Answer literal comprehension questions.",
      `<p class='big-emoji'>📖 🔍</p>
       <p><b>Literal</b> questions can be answered directly from the text.</p>
       <p><b>Passage:</b> <i>Kojo walked to the market on Saturday morning. He bought three mangoes and two loaves of bread. He returned home before noon.</i></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Where did Kojo walk?</p>
       <p><b>Answer:</b> He walked to the <b>market</b>.</p>`,

      [{ heading: "Exercise 11.1 — Answer the questions.", items: [
          "Where did Kojo walk?",
          "When did he go?",
          "How many mangoes did he buy?",
          "How many loaves of bread?",
          "When did he return?"
        ]},
       { heading: "Exercise 11.2 — Write 3 sentences about your last trip to the market.", items: [] }],

      `<p><b>11.1:</b> 1. Market. 2. Saturday morning. 3. Three. 4. Two. 5. Before noon.</p>`,

      [{ q: "How many mangoes did Kojo buy?", a: ["3", "three"] },
       { q: "Where did Kojo walk?", a: ["market", "the market"] }]),

    D(2, "📖", "Inferential Questions",
      "Answer inferential comprehension questions.",
      `<p class='big-emoji'>📖 💭</p>
       <p><b>Inferential</b> questions ask you to read between the lines and think.</p>
       <p><b>Passage:</b> <i>When Ama opened the door, she saw her grandmother standing there. She ran to hug her.</i></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> How did Ama feel?</p>
       <p><b>Answer:</b> Ama felt <b>happy and excited</b> — she ran to hug her grandmother.</p>`,

      [{ heading: "Exercise 12.1 — Answer.", items: [
          "Who was at the door?",
          "How did Ama feel?",
          "Why do you think she ran?",
          "What does this tell us about Ama?"
        ]},
       { heading: "Exercise 12.2 — Write about a time you were happy to see someone.", items: [] }],

      `<p><b>12.1:</b> 1. Her grandmother. 2. Happy. 3. She was excited. 4. She loves her grandmother.</p>`,

      [{ q: "How did Ama feel?", a: ["happy", "excited"] },
       { q: "Why did she run?", a: ["she was happy", "excited", "to hug her"] }]),

    D(3, "📖", "Vocabulary in Context",
      "Work out the meaning of words from context.",
      `<p class='big-emoji'>📖 📚</p>
       <p>Use the sentence around a word to work out its meaning.</p>
       <p><b>Passage:</b> <i>The <u>enormous</u> elephant ate all the leaves. The tiny bird watched from a branch.</i></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What does 'enormous' mean?</p>
       <p><b>Answer:</b> <b>Very big</b> — we can tell because the elephant ate all the leaves.</p>`,

      [{ heading: "Exercise 13.1 — What do these words mean here?", items: [
          "enormous", "tiny", "watched", "branch"
        ]},
       { heading: "Exercise 13.2 — Write 3 sentences using 'enormous' and 'tiny'.", items: [] }],

      `<p><b>13.1:</b> 1. Very big. 2. Very small. 3. Looked at. 4. Part of a tree.</p>`,

      [{ q: "What does 'enormous' mean?", a: ["very big", "huge", "large"] },
       { q: "What does 'tiny' mean?", a: ["very small", "small"] }]),

    D(4, "📖", "Practice Passage",
      "Read and answer questions.",
      `<p class='big-emoji'>📖 🌧️</p>
       <p><b>Passage:</b> <i>The rain fell heavily on Nsawkaw. Ama and her mother planted maize. They worked until evening. The next morning, the sun came out. The seeds were ready to grow.</i></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What did they plant?</p>
       <p><b>Answer:</b> They planted <b>maize</b>.</p>`,

      [{ heading: "Exercise 14.1 — Answer.", items: [
          "Where did the rain fall?",
          "What did they plant?",
          "How long did they work?",
          "What happened the next morning?",
          "What will happen to the seeds?"
        ]},
       { heading: "Exercise 14.2 — Draw and describe the scene.", items: [] }],

      `<p><b>14.1:</b> 1. Nsawkaw. 2. Maize. 3. Until evening. 4. Sun came out. 5. They will grow.</p>`,

      [{ q: "What did they plant?", a: ["maize", "corn"] },
       { q: "What happened the next morning?", a: ["sun came out", "the sun came out"] }]),

    D(5, "🎨", "Comprehension Poster",
      "Make a comprehension poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Make a poster about one of the passages. Draw the scene and write 3 sentences.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Read your sentences aloud.</p>`,

      [{ heading: "Exercise 15.1 — Draw and write.", items: [] }],

      `<p>Any drawing with 3 accurate sentences.</p>`,

      [{ q: "Which passage did you choose?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 4 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: "Review", days: [

    D(1, "🔁", "Review Phonics",
      "Review vowel teams, blends, digraphs.",
      `<p class='big-emoji'>🔁 🔤</p>
       <h3>Review</h3>
       <ul>
         <li>Vowel teams: ai, ee, oa, oo</li>
         <li>Consonant patterns: ck, ng, sh, tch</li>
         <li>Syllables</li>
         <li>Homophones</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the vowel team in 'rain'?</p>
       <p><b>Answer:</b> <b>ai</b>.</p>`,

      [{ heading: "Exercise 16.1 — Circle the vowel team.", items: [
          "rain", "green", "boat", "snow", "moon", "coat", "play", "house"
        ]},
       { heading: "Exercise 16.2 — Write 3 words with each pattern.", items: [
          "ai", "ee", "oa", "oo"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Vowel team in 'rain'?", a: ["ai"] },
       { q: "Vowel team in 'moon'?", a: ["oo"] }]),

    D(2, "🔁", "Review Grammar",
      "Review nouns, pronouns, verbs, adjectives.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Nouns — name things</li>
         <li>Pronouns — replace nouns</li>
         <li>Verbs — show action</li>
         <li>Adjectives — describe nouns</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 'tall' in 'The tall boy runs.'?</p>
       <p><b>Answer:</b> An <b>adjective</b>.</p>`,

      [{ heading: "Exercise 17.1 — Identify the part of speech of each underlined word.", items: [
          "The **tall** boy **runs**.",
          "**She** writes a **letter**.",
          "My **mother** cooks **rice**.",
          "The **happy** dog **barks**."
        ]}],

      `<p>Underlined: tall–adjective; runs–verb; She–pronoun; letter–noun; mother–noun; rice–noun; happy–adjective; barks–verb.</p>`,

      [{ q: "What is 'tall'?", a: ["adjective"] },
       { q: "What is 'runs'?", a: ["verb"] }]),

    D(3, "🔁", "Review Comprehension",
      "Review reading skills.",
      `<p class='big-emoji'>🔁 📖</p>
       <p><b>Passage:</b> <i>Kwame went to school every day. He liked to read and write. His teacher said he was a good student.</i></p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What did Kwame like?</p>
       <p><b>Answer:</b> He liked <b>to read and write</b>.</p>`,

      [{ heading: "Exercise 18.1 — Answer.", items: [
          "Where did Kwame go?",
          "What did he like?",
          "What did his teacher say?",
          "Is this a story or information?",
          "Write 2 sentences about yourself."
        ]}],

      `<p><b>18.1:</b> 1. School. 2. To read and write. 3. He was a good student. 4. Information.</p>`,

      [{ q: "What did Kwame like?", a: ["to read and write", "reading and writing"] },
       { q: "What did the teacher say?", a: ["he was a good student", "good student"] }]),

    D(4, "🔁", "Review Writing",
      "Review sentence types.",
      `<p class='big-emoji'>🔁 ✍️</p>
       <p>Review simple, question, command sentences.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Rewrite: i live in accra</p>
       <p><b>Answer:</b> I live in Accra.</p>`,

      [{ heading: "Exercise 19.1 — Write one of each type:", items: [
          "Simple sentence", "Question", "Command"
        ]},
       { heading: "Exercise 19.2 — Rewrite with correct punctuation.", items: [
          "where are you going", "i live in accra", "close the door",
          "what a beautiful day", "the sky is blue"
        ]}],

      `<p><b>19.2:</b> 1. Where are you going? 2. I live in Accra. 3. Close the door. 4. What a beautiful day! 5. The sky is blue.</p>`,

      [{ q: "Rewrite: i live in accra", a: ["I live in Accra.", "I live in Accra"] },
       { q: "Rewrite: where are you going", a: ["Where are you going?"] }]),

    D(5, "🎉", "Month 1 Test & Celebration",
      "Monthly Test 1 and celebration.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 1</b> today. Do your best! ⭐</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Spelling — 10 words</li>
         <li>Grammar — 5 questions</li>
         <li>Comprehension — 5 questions</li>
         <li>Writing — 3 sentences</li>
       </ul>`,

      [{ heading: "Exercise 20.1 — Test yourself.", items: [
          "Spell 10 words from Month 1.",
          "Write 3 sentences of different types.",
          "Answer 5 comprehension questions."
        ]},
       { heading: "Exercise 20.2 — Celebrate!", items: [
          "Show your work to your family.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>Marking guide: 40 marks total. 20+ = Excellent. 10–19 = Good. Below 10 = Needs revision.</p>`,

      [{ q: "What did you learn this month?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 5 — WRITING SENTENCES
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: "Writing Sentences", days: [

    D(1, "📝", "Simple Sentences",
      "Write simple sentences.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>A <b>simple sentence</b> has one clause with a subject and verb.</p>
       <h3>Structure</h3>
       <p>Subject + Verb + (Object)</p>
       <p>Example: The girl / sings / a song.</p>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the subject of 'The girl sings.'?</p>
       <p><b>Answer:</b> <b>The girl</b>.</p>`,

      [{ heading: "Exercise 21.1 — Write 5 simple sentences.", items: [] },
       { heading: "Exercise 21.2 — Identify subject and verb.", items: [
          "The girl sings.",
          "The dog runs.",
          "My mother cooks.",
          "We read books.",
          "They play football."
        ]}],

      `<p><b>21.2:</b> 1. girl / sings 2. dog / runs 3. mother / cooks 4. We / read 5. They / play</p>`,

      [{ q: "Subject of 'The girl sings.'?", a: ["the girl", "girl"] },
       { q: "Verb of 'The dog runs.'?", a: ["runs"] }]),

    D(2, "📝", "Compound Sentences",
      "Write compound sentences with conjunctions.",
      `<p class='big-emoji'>📝 🔗</p>
       <p>Join two simple sentences with and, but, or, so.</p>
       <h3>Conjunctions</h3>
       <ul>
         <li><b>and</b> — adds information</li>
         <li><b>but</b> — shows contrast</li>
         <li><b>or</b> — gives a choice</li>
         <li><b>so</b> — shows result</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Join: I like rice. I like beans.</p>
       <p><b>Answer:</b> I like rice <b>and</b> beans.</p>`,

      [{ heading: "Exercise 22.1 — Join the sentences.", items: [
          "I like rice. I like beans.",
          "She was tired. She kept working.",
          "We can go today. We can go tomorrow.",
          "It was raining. We stayed indoors.",
          "He was late. He missed the bus."
        ]},
       { heading: "Exercise 22.2 — Write 5 compound sentences.", items: [] }],

      `<p><b>22.1:</b> 1. I like rice and beans. 2. She was tired but kept working. 3. We can go today or tomorrow. 4. It was raining, so we stayed indoors. 5. He was late, so he missed the bus.</p>`,

      [{ q: "Join: I like rice. I like beans.", a: ["I like rice and beans."] },
       { q: "Join: It was raining. We stayed indoors.", a: ["It was raining so we stayed indoors."] }]),

    D(3, "📝", "Complex Sentences",
      "Write complex sentences.",
      `<p class='big-emoji'>📝 🔀</p>
       <p>Main clause + subordinate clause with although, because, when, if.</p>
       <h3>Subordinating Conjunctions</h3>
       <ul>
         <li><b>although</b> — shows contrast</li>
         <li><b>because</b> — shows reason</li>
         <li><b>when</b> — shows time</li>
         <li><b>if</b> — shows condition</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> Combine: He studied hard. He passed.</p>
       <p><b>Answer:</b> He passed <b>because</b> he studied hard.</p>`,

      [{ heading: "Exercise 23.1 — Combine with a subordinate clause.", items: [
          "She was tired. She kept working.",
          "It was raining. We stayed indoors.",
          "He studied hard. He passed the exam.",
          "I will call you. I arrive.",
          "You work hard. You will succeed."
        ]},
       { heading: "Exercise 23.2 — Write 5 complex sentences.", items: [] }],

      `<p><b>23.1:</b> 1. Although she was tired, she kept working. 2. Since it was raining, we stayed indoors. 3. He passed the exam because he studied hard. 4. I will call you when I arrive. 5. If you work hard, you will succeed.</p>`,

      [{ q: "Combine: He studied hard. He passed.", a: ["He passed because he studied hard."] },
       { q: "Combine: I will call you. I arrive.", a: ["I will call you when I arrive."] }]),

    D(4, "📝", "Practise Punctuation",
      "Punctuate sentences correctly.",
      `<p class='big-emoji'>📝 ❗</p>
       <p>Capital, full stop, question mark, exclamation mark, commas, quotation marks.</p>
       <h3>Punctuation Marks</h3>
       <ul>
         <li><b>.</b> Full stop — ends a statement</li>
         <li><b>?</b> Question mark — ends a question</li>
         <li><b>!</b> Exclamation mark — shows feeling</li>
         <li><b>,</b> Comma — separates items</li>
         <li><b>" "</b> Quotation marks — show speech</li>
       </ul>`,

      [{ heading: "Exercise 24.1 — Punctuate.", items: [
          "where are you going",
          "i live in accra",
          "she said i am happy",
          "i bought rice beans and oil",
          "what a beautiful day"
        ]},
       { heading: "Exercise 24.2 — Write 5 sentences and punctuate them.", items: [] }],

      `<p><b>24.1:</b> 1. Where are you going? 2. I live in Accra. 3. She said, "I am happy." 4. I bought rice, beans, and oil. 5. What a beautiful day!</p>`,

      [{ q: "Punctuate: i live in accra", a: ["I live in Accra."] },
       { q: "Punctuate: what a beautiful day", a: ["What a beautiful day!"] }]),

    D(5, "🎨", "Sentence Poster",
      "Make a sentence poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Show simple, compound, and complex sentences.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each type of sentence.</p>`,

      [{ heading: "Exercise 25.1 — Write 2 examples of each.", items: [] }],

      `<p>Any correct examples.</p>`,

      [{ q: "Give an example of a compound sentence.", a: ["any with and/but/or/so"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 6 — PARAGRAPHS
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: "Paragraphs", days: [

    D(1, "📝", "Topic Sentence",
      "Learn about the topic sentence.",
      `<p class='big-emoji'>📝 💡</p>
       <p>A paragraph has a <b>topic sentence</b> that states the main idea.</p>
       <p><i>Water is precious in my village.</i></p>
       <h3>What It Does</h3>
       <ul>
         <li>Introduces the main idea.</li>
         <li>Comes first in the paragraph.</li>
       </ul>`,

      [{ heading: "Exercise 26.1 — Write a topic sentence for each topic.", items: [
          "My school", "My friend", "My favourite food"
        ]}],

      `<p>Any topic sentence.</p>`,

      [{ q: "What is a topic sentence?", a: ["main idea", "states main idea"] }]),

    D(2, "📝", "Support",
      "Learn about supporting sentences.",
      `<p class='big-emoji'>📝 📋</p>
       <p>Supporting sentences give detail.</p>
       <p><i>Every morning I walk to school. I carry my books. I greet my teacher.</i></p>
       <h3>What They Do</h3>
       <ul>
         <li>Give examples.</li>
         <li>Add details.</li>
       </ul>`,

      [{ heading: "Exercise 27.1 — Write 3 supporting sentences for: 'My school is special.'", items: [] }],

      `<p>Any 3 supporting sentences.</p>`,

      [{ q: "What do supporting sentences do?", a: ["give detail"] }]),

    D(3, "📝", "Closing",
      "Learn about the closing sentence.",
      `<p class='big-emoji'>📝 🎯</p>
       <p>A closing sentence wraps up the paragraph.</p>
       <p><i>For this reason, I love my school.</i></p>
       <h3>What It Does</h3>
       <ul>
         <li>Summarises.</li>
         <li>Comes last.</li>
       </ul>`,

      [{ heading: "Exercise 28.1 — Write a closing sentence for: 'My school is special.'", items: [] }],

      `<p>Any closing sentence.</p>`,

      [{ q: "What does a closing sentence do?", a: ["wraps up"] }]),

    D(4, "📝", "Write a Paragraph",
      "Write a whole paragraph.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Topic + Supporting + Closing.</p>
       <h3>Structure</h3>
       <ol>
         <li>Topic sentence</li>
         <li>3–4 supporting sentences</li>
         <li>Closing sentence</li>
       </ol>`,

      [{ heading: "Exercise 29.1 — Write a paragraph on 'Why I Love My Family'.", items: [] }],

      `<p>Any paragraph with all 3 parts.</p>`,

      [{ q: "What 3 parts make a paragraph?", a: ["topic, supporting, closing"] }]),

    D(5, "🎨", "Paragraph Poster",
      "Make a paragraph poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Show a sample paragraph with the 3 parts labelled.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each part.</p>`,

      [{ heading: "Exercise 30.1 — Draw and label.", items: [] }],

      `<p>Any correct poster.</p>`,

      [{ q: "Name one part of a paragraph.", a: ["topic", "supporting", "closing"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 7 — STORY WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: "Story Writing", days: [

    D(1, "📝", "Planning",
      "Plan a story.",
      `<p class='big-emoji'>📝 📋</p>
       <p>Plan the characters, setting, problem, and solution.</p>
       <h3>Story Plan</h3>
       <ul>
         <li>Characters — Who is in the story?</li>
         <li>Setting — Where and when?</li>
         <li>Problem — What goes wrong?</li>
         <li>Solution — How is it solved?</li>
       </ul>`,

      [{ heading: "Exercise 31.1 — Plan a story.", items: [
          "Characters: ___", "Setting: ___", "Problem: ___", "Solution: ___"
        ]}],

      `<p>Any plan.</p>`,

      [{ q: "What is the setting of a story?", a: ["where and when", "any"] }]),

    D(2, "📝", "Characters",
      "Describe characters.",
      `<p class='big-emoji'>📝 👤</p>
       <p>Characters are the people or animals in a story.</p>
       <h3>Describing Characters</h3>
       <ul>
         <li>What they look like</li>
         <li>How they behave</li>
         <li>What they like</li>
       </ul>`,

      [{ heading: "Exercise 32.1 — Describe 3 characters.", items: [
          "Name: ___ Looks like: ___ Acts like: ___"
        ]}],

      `<p>Any 3 correct characters.</p>`,

      [{ q: "What is a character?", a: ["person in a story", "any"] }]),

    D(3, "📝", "Problem",
      "Write about the problem.",
      `<p class='big-emoji'>📝 ⚡</p>
       <p>The problem makes the story interesting.</p>
       <h3>Story Problems</h3>
       <ul>
         <li>Someone is lost.</li>
         <li>Something is broken.</li>
         <li>A character needs help.</li>
       </ul>`,

      [{ heading: "Exercise 33.1 — Write a problem for your story.", items: [] }],

      `<p>Any reasonable problem.</p>`,

      [{ q: "What is a problem in a story?", a: ["the challenge", "any"] }]),

    D(4, "📝", "Resolution",
      "Write about the resolution.",
      `<p class='big-emoji'>📝 ✅</p>
       <p>The resolution solves the problem.</p>
       <h3>Resolutions</h3>
       <ul>
         <li>The problem is solved.</li>
         <li>Everyone is happy.</li>
         <li>A lesson is learned.</li>
       </ul>`,

      [{ heading: "Exercise 34.1 — Write a resolution.", items: [] }],

      `<p>Any reasonable resolution.</p>`,

      [{ q: "What is a resolution?", a: ["solution to the problem", "any"] }]),

    D(5, "🎨", "Story Poster",
      "Make a story poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Draw the beginning, middle, and end of your story.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Tell your story to a friend.</p>`,

      [{ heading: "Exercise 35.1 — Draw and label.", items: [] }],

      `<p>Any correct poster.</p>`,

      [{ q: "Name one part of a story.", a: ["beginning", "middle", "end", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 8 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: "Review", days: [

    D(1, "🔁", "Review Sentences",
      "Review sentence types.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Simple</li>
         <li>Compound</li>
         <li>Complex</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What type is 'I like rice and beans.'?</p>
       <p><b>Answer:</b> <b>Compound</b>.</p>`,

      [{ heading: "Exercise 36.1 — Identify the sentence type.", items: [
          "I like rice.",
          "I like rice and beans.",
          "Although it was raining, we went out."
        ]}],

      `<p>1. Simple 2. Compound 3. Complex</p>`,

      [{ q: "Type of 'I like rice and beans.'?", a: ["compound"] }]),

    D(2, "🔁", "Review Paragraphs",
      "Review paragraph structure.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Topic</li>
         <li>Supporting</li>
         <li>Closing</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What are the 3 parts of a paragraph?</p>
       <p><b>Answer:</b> Topic, supporting, and closing.</p>`,

      [{ heading: "Exercise 37.1 — Write a paragraph about your week.", items: [] }],

      `<p>Any paragraph with 3 parts.</p>`,

      [{ q: "What are the 3 parts of a paragraph?", a: ["topic, supporting, closing"] }]),

    D(3, "🔁", "Review Stories",
      "Review story structure.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Review</h3>
       <ul>
         <li>Beginning</li>
         <li>Middle</li>
         <li>End</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What happens in the middle?</p>
       <p><b>Answer:</b> The problem happens.</p>`,

      [{ heading: "Exercise 38.1 — Write a short story.", items: [] }],

      `<p>Any story with 3 parts.</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning, middle, end"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a simple sentence?</li>
         <li>What is a compound sentence?</li>
         <li>What is a complex sentence?</li>
         <li>What are the 3 parts of a paragraph?</li>
         <li>What are the 3 parts of a story?</li>
         <li>What is a character?</li>
         <li>What is a setting?</li>
         <li>What is a problem?</li>
         <li>What is a resolution?</li>
         <li>Give an example of a conjunction.</li>
       </ol>`,

      [{ heading: "Exercise 39.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a complex sentence?", a: ["main + subordinate clause", "any"] }]),

    D(5, "🎉", "Month 2 Test & Celebration",
      "Monthly Test 2.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 2</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Grammar (15)</li>
         <li>Part B — Sentence types (10)</li>
         <li>Part C — Paragraph (10)</li>
         <li>Part D — Comprehension (10)</li>
         <li>Part E — Writing (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Exercise 40.1 — Complete the test.", items: [
          "Part A — Grammar (15)",
          "Part B — Sentence types (10)",
          "Part C — Paragraph (10)",
          "Part D — Comprehension (10)",
          "Part E — Writing (5)"
        ]},
       { heading: "Exercise 40.2 — Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50 total. 40+ = Excellent. 25–39 = Good. Below 25 = Needs revision.</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 9 — PUNCTUATION & CAPITALISATION
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: "Punctuation & Capitalisation", days: [

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

      [{ heading: "Exercise 41.1 — Add full stops.", items: [
          "I like rice She likes beans",
          "The boy runs fast He is happy",
          "We go to school It is fun",
          "My name is Ama I am nine",
          "The sun is hot It is bright"
        ]},
       { heading: "Exercise 41.2 — Write 5 sentences with full stops.", items: [] }],

      `<p><b>41.1:</b> 1. I like rice. She likes beans. 2. The boy runs fast. He is happy. 3. We go to school. It is fun. 4. My name is Ama. I am nine. 5. The sun is hot. It is bright.</p>`,

      [{ q: "What ends a telling sentence?", a: ["full stop", "."] }]),

    D(2, "📝", "Commas",
      "Use commas correctly.",
      `<p class='big-emoji'>📝 ,</p>
       <p>A <b>comma (,)</b> separates items in a list and follows an introductory phrase.</p>
       <h3>Examples</h3>
       <ul>
         <li>I bought rice, beans, and fish.</li>
         <li>After school, we went home.</li>
       </ul>`,

      [{ heading: "Exercise 42.1 — Add commas.", items: [
          "I like mangoes oranges and bananas",
          "She bought rice beans and fish",
          "After the bell we went home",
          "In the morning I brush my teeth",
          "My favourite colours are red blue and green"
        ]},
       { heading: "Exercise 42.2 — Write 3 sentences with commas.", items: [] }],

      `<p><b>42.1:</b> 1. I like mangoes, oranges, and bananas. 2. She bought rice, beans, and fish. 3. After the bell, we went home. 4. In the morning, I brush my teeth. 5. My favourite colours are red, blue, and green.</p>`,

      [{ q: "What does a comma do?", a: ["separates items", "any"] }]),

    D(3, "📝", "Quotation Marks",
      "Use quotation marks.",
      `<p class='big-emoji'>📝 " "</p>
       <p><b>Quotation marks (" ")</b> show the exact words someone said.</p>
       <p><i>She said, "I am happy."</i></p>
       <h3>Rules</h3>
       <ul>
         <li>Put quotation marks around the spoken words.</li>
         <li>Use a comma before the quotation.</li>
         <li>End punctuation goes inside the quotation marks.</li>
       </ul>`,

      [{ heading: "Exercise 43.1 — Add quotation marks.", items: [
          "She said I am happy.",
          "He asked Where are you going?",
          "Mother said Come here.",
          "The teacher said Well done!",
          "Kojo said I like football."
        ]},
       { heading: "Exercise 43.2 — Write 3 sentences with quotation marks.", items: [] }],

      `<p><b>43.1:</b> 1. She said, "I am happy." 2. He asked, "Where are you going?" 3. Mother said, "Come here." 4. The teacher said, "Well done!" 5. Kojo said, "I like football."</p>`,

      [{ q: "What do quotation marks show?", a: ["spoken words", "any"] }]),

    D(4, "📝", "Apostrophes",
      "Use apostrophes.",
      `<p class='big-emoji'>📝 '</p>
       <p>An <b>apostrophe (')</b> shows possession or contraction.</p>
       <h3>Uses</h3>
       <ul>
         <li>Possession: Ama's book, the dog's tail</li>
         <li>Contraction: don't, can't, it's, I'm</li>
       </ul>`,

      [{ heading: "Exercise 44.1 — Add apostrophes.", items: [
          "Amas book is here.",
          "The dogs tail is long.",
          "I dont like rice.",
          "She cant swim.",
          "Its raining."
        ]},
       { heading: "Exercise 44.2 — Write 3 sentences with apostrophes.", items: [] }],

      `<p><b>44.1:</b> 1. Ama's book is here. 2. The dog's tail is long. 3. I don't like rice. 4. She can't swim. 5. It's raining.</p>`,

      [{ q: "What does an apostrophe show?", a: ["possession or contraction", "any"] }]),

    D(5, "🎨", "Punctuation Poster",
      "Make a punctuation poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster showing the punctuation marks.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Full stop (.)</li>
         <li>Comma (,)</li>
         <li>Quotation marks (" ")</li>
         <li>Apostrophe (')</li>
       </ul>`,

      [{ heading: "Exercise 45.1 — Draw and label.", items: [
          "Full stop", "Comma", "Quotation marks", "Apostrophe"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 10 — VOCABULARY
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: "Vocabulary", days: [

    D(1, "📝", "Synonyms",
      "Learn about synonyms.",
      `<p class='big-emoji'>📝 🔄</p>
       <p><b>Synonyms</b> are words that mean the same or almost the same.</p>
       <h3>Examples</h3>
       <ul>
         <li>happy — glad, joyful</li>
         <li>big — large, huge</li>
         <li>fast — quick, speedy</li>
         <li>said — replied, answered</li>
       </ul>`,

      [{ heading: "Exercise 46.1 — Write a synonym for each word.", items: [
          "happy", "big", "fast", "said", "small"
        ]},
       { heading: "Exercise 46.2 — Write 3 sentences using synonyms.", items: [] }],

      `<p>Any correct synonyms.</p>`,

      [{ q: "What is a synonym?", a: ["same meaning", "any"] },
       { q: "Synonym for 'big'?", a: ["large", "huge", "any"] }]),

    D(2, "📝", "Antonyms",
      "Learn about antonyms.",
      `<p class='big-emoji'>📝 ↔️</p>
       <p><b>Antonyms</b> are words that mean the opposite.</p>
       <h3>Examples</h3>
       <ul>
         <li>big — small</li>
         <li>hot — cold</li>
         <li>happy — sad</li>
         <li>fast — slow</li>
       </ul>`,

      [{ heading: "Exercise 47.1 — Write an antonym for each word.", items: [
          "big", "hot", "happy", "fast", "day"
        ]},
       { heading: "Exercise 47.2 — Write 3 sentences using antonyms.", items: [] }],

      `<p>Any correct antonyms.</p>`,

      [{ q: "What is an antonym?", a: ["opposite meaning", "any"] },
       { q: "Antonym for 'hot'?", a: ["cold"] }]),

    D(3, "📝", "Homophones",
      "Review homophones.",
      `<p class='big-emoji'>📝 🎵</p>
       <p><b>Homophones</b> sound the same but have different meanings.</p>
       <h3>Examples</h3>
       <ul>
         <li>to / too / two</li>
         <li>their / there / they're</li>
         <li>your / you're</li>
       </ul>`,

      [{ heading: "Exercise 48.1 — Choose the correct word.", items: [
          "I want (to/too/two) go.",
          "(Their/There/They're) going home.",
          "Is this (your/you're) book?",
          "(Its/It's) raining.",
          "I can (hear/here) you."
        ]}],

      `<p><b>48.1:</b> 1. to 2. They're 3. your 4. It's 5. hear</p>`,

      [{ q: "I want ___ go.", a: ["to"] },
       { q: "___ raining.", a: ["it's"] }]),

    D(4, "📝", "Word Families",
      "Learn word families.",
      `<p class='big-emoji'>📝 🌳</p>
       <p>A <b>word family</b> is a group of words that share a base word.</p>
       <h3>Examples</h3>
       <ul>
         <li>play → playing, played, player, playful</li>
         <li>help → helping, helped, helper, helpful</li>
         <li>care → caring, cared, careful, careless</li>
       </ul>`,

      [{ heading: "Exercise 49.1 — Write 4 words in each family.", items: [
          "play", "help", "care"
        ]},
       { heading: "Exercise 49.2 — Write 3 sentences using word families.", items: [] }],

      `<p>Any correct words.</p>`,

      [{ q: "What is a word family?", a: ["words from same base", "any"] }]),

    D(5, "🎨", "Vocabulary Poster",
      "Make a vocabulary poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster with synonyms, antonyms, and homophones.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>3 synonyms</li>
         <li>3 antonyms</li>
         <li>2 homophone pairs</li>
       </ul>`,

      [{ heading: "Exercise 50.1 — Draw and label.", items: [
          "3 synonyms", "3 antonyms", "2 homophone pairs"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a synonym for 'happy'.", a: ["glad", "joyful", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 11 — INFORMAL & FORMAL LETTERS
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: "Informal & Formal Letters", days: [

    D(1, "📝", "Informal Letters",
      "Learn about informal letters.",
      `<p class='big-emoji'>📝 💌</p>
       <p>An <b>informal letter</b> is written to friends or family.</p>
       <h3>Parts</h3>
       <ol>
         <li>Address</li>
         <li>Date</li>
         <li>Greeting (Dear…)</li>
         <li>Body</li>
         <li>Closing (Your friend, …)</li>
       </ol>`,

      [{ heading: "Exercise 51.1 — Say.", items: [
          "What is an informal letter?",
          "Name 5 parts of an informal letter.",
          "Who do you write informal letters to?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Who do you write informal letters to?", a: ["friends", "family", "any"] }]),

    D(2, "📝", "Formal Letters",
      "Learn about formal letters.",
      `<p class='big-emoji'>📝 📧</p>
       <p>A <b>formal letter</b> is written to someone you do not know well or to an official.</p>
       <h3>Parts</h3>
       <ol>
         <li>Your address</li>
         <li>Date</li>
         <li>Recipient's address</li>
         <li>Salutation (Dear Sir/Madam)</li>
         <li>Subject</li>
         <li>Body</li>
         <li>Closing (Yours faithfully, …)</li>
       </ol>`,

      [{ heading: "Exercise 52.1 — Say.", items: [
          "What is a formal letter?",
          "Name the parts.",
          "When do you write a formal letter?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "When do you write a formal letter?", a: ["to an official", "any"] }]),

    D(3, "📝", "Parts of a Letter",
      "Review parts of letters.",
      `<p class='big-emoji'>📝 📋</p>
       <h3>Common Parts</h3>
       <ul>
         <li>Address</li>
         <li>Date</li>
         <li>Greeting / Salutation</li>
         <li>Body</li>
         <li>Closing</li>
         <li>Signature</li>
       </ul>`,

      [{ heading: "Exercise 53.1 — Label a letter.", items: [
          "Address", "Date", "Greeting", "Body", "Closing", "Signature"
        ]}],

      `<p>⭐</p>`,

      [{ q: "Where does the address go?", a: ["top", "any"] }]),

    D(4, "📝", "Write a Letter",
      "Write a letter.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Choose to write an informal letter or a formal letter.</p>
       <h3>Choose Your Topic</h3>
       <ul>
         <li>Informal: Tell a friend about your holiday</li>
         <li>Formal: Write to your headmaster about a school event</li>
       </ul>`,

      [{ heading: "Exercise 54.1 — Write a letter.", items: [] }],

      `<p>Any letter with all parts.</p>`,

      [{ q: "What letter did you write?", a: ["any"] }]),

    D(5, "🎨", "Letter Poster",
      "Make a letter poster.",
      `<p class='big-emoji'>🎨 📧</p>
       <p>Make a poster showing parts of a letter.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Explain each part.</p>`,

      [{ heading: "Exercise 55.1 — Draw and label.", items: [
          "Parts of a letter"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "How do you close a formal letter?", a: ["yours faithfully", "any"] }])
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
         <li>Full stops, commas</li>
         <li>Quotation marks, apostrophes</li>
       </ul>`,

      [{ heading: "Exercise 56.1 — Punctuate.", items: [
          "where are you going",
          "i bought rice beans and fish",
          "she said i am happy",
          "am i late",
          "what a beautiful day"
        ]}],

      `<p><b>56.1:</b> 1. Where are you going? 2. I bought rice, beans, and fish. 3. She said, "I am happy." 4. Am I late? 5. What a beautiful day!</p>`,

      [{ q: "What ends a question?", a: ["question mark", "?"] }]),

    D(2, "🔁", "Review Vocabulary",
      "Review vocabulary.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Synonyms, antonyms</li>
         <li>Homophones, word families</li>
       </ul>`,

      [{ heading: "Exercise 57.1 — Answer.", items: [
          "Synonym for 'big'?",
          "Antonym for 'hot'?",
          "Homophone for 'to'?",
          "Word family of 'help'?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "Synonym for 'big'?", a: ["large", "huge", "any"] },
       { q: "Antonym for 'hot'?", a: ["cold"] }]),

    D(3, "🔁", "Review Letters",
      "Review letters.",
      `<p class='big-emoji'>🔁 📧</p>
       <h3>Review</h3>
       <ul>
         <li>Informal and formal letters</li>
         <li>Parts of a letter</li>
       </ul>`,

      [{ heading: "Exercise 58.1 — Answer.", items: [
          "Name 5 parts of a letter.",
          "What is an informal letter?",
          "What is a formal letter?",
          "How do you close an informal letter?",
          "How do you close a formal letter?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "How do you close a formal letter?", a: ["yours faithfully", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What ends a telling sentence?</li>
         <li>What do quotation marks show?</li>
         <li>What does an apostrophe show?</li>
         <li>Synonym for 'big'?</li>
         <li>Antonym for 'hot'?</li>
         <li>Homophone for 'to'?</li>
         <li>What is a word family?</li>
         <li>Name 3 parts of a letter.</li>
         <li>How do you close a formal letter?</li>
         <li>What is an informal letter?</li>
       </ol>`,

      [{ heading: "Exercise 59.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "Name 3 parts of a letter.", a: ["address date greeting", "any"] }]),

    D(5, "🎉", "Month 3 Test & Celebration",
      "Monthly Test 3.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 3</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Punctuation (15)</li>
         <li>Part B — Vocabulary (15)</li>
         <li>Part C — Letters (10)</li>
         <li>Part D — Writing (10)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Punctuation (15)",
          "Part B — Vocabulary (15)",
          "Part C — Letters (10)",
          "Part D — Writing (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 13 — POETRY
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: "Poetry", days: [

    D(1, "📝", "Rhyme",
      "Learn about rhyme.",
      `<p class='big-emoji'>📝 🎵</p>
       <p><b>Rhyme</b> is when words end with the same sound.</p>
       <h3>Examples</h3>
       <ul>
         <li>cat — hat</li>
         <li>sun — fun</li>
         <li>tree — bee</li>
       </ul>`,

      [{ heading: "Exercise 60.1 — Match the rhyming words.", items: [
          "cat — ___", "sun — ___", "tree — ___", "star — ___", "moon — ___"
        ]},
       { heading: "Exercise 60.2 — Write 5 rhyming pairs.", items: [] }],

      `<p><b>60.1:</b> 1. hat 2. fun 3. bee 4. car 5. spoon</p>`,

      [{ q: "What rhymes with 'cat'?", a: ["hat", "bat", "any"] }]),

    D(2, "📝", "Rhythm",
      "Learn about rhythm.",
      `<p class='big-emoji'>📝 🥁</p>
       <p><b>Rhythm</b> is the beat of a poem.</p>
       <p><i>Twinkle, twinkle, little star,<br>How I wonder what you are.</i></p>
       <h3>Clap the beat</h3>
       <p>twin-kle, twin-kle, lit-tle star</p>`,

      [{ heading: "Exercise 61.1 — Clap the rhythm.", items: [
          "Twinkle, twinkle, little star",
          "Humpty Dumpty sat on a wall",
          "Jack and Jill went up the hill"
        ]},
       { heading: "Exercise 61.2 — Write a 2-line poem with rhythm.", items: [] }],

      `<p>Any 2-line poem with a beat.</p>`,

      [{ q: "What is rhythm?", a: ["beat", "any"] }]),

    D(3, "📝", "Stanzas",
      "Learn about stanzas.",
      `<p class='big-emoji'>📝 📚</p>
       <p>A <b>stanza</b> is a group of lines in a poem.</p>
       <h3>Example</h3>
       <p><i>Roses are red,<br>Violets are blue,<br>Sugar is sweet,<br>And so are you.</i></p>
       <p>This poem has 1 stanza with 4 lines.</p>`,

      [{ heading: "Exercise 62.1 — How many lines in this stanza?", items: [
          "Roses are red, Violets are blue, Sugar is sweet, And so are you."
        ]},
       { heading: "Exercise 62.2 — Write a 4-line stanza.", items: [] }],

      `<p><b>62.1:</b> 4 lines</p>`,

      [{ q: "What is a stanza?", a: ["group of lines", "any"] }]),

    D(4, "📝", "Figurative Language",
      "Learn about figurative language.",
      `<p class='big-emoji'>📝 🎨</p>
       <p><b>Figurative language</b> uses words in creative ways.</p>
       <h3>Examples</h3>
       <ul>
         <li><b>Simile</b> — compares using like or as. "As fast as a cheetah."</li>
         <li><b>Metaphor</b> — compares directly. "The classroom was a zoo."</li>
         <li><b>Personification</b> — gives human qualities to things. "The wind whispered."</li>
       </ul>`,

      [{ heading: "Exercise 63.1 — Identify the type.", items: [
          "As quiet as a mouse → ___",
          "The sun smiled at us → ___",
          "The classroom was a zoo → ___"
        ]}],

      `<p><b>63.1:</b> 1. Simile 2. Personification 3. Metaphor</p>`,

      [{ q: "What is a simile?", a: ["comparison using like or as", "any"] }]),

    D(5, "🎨", "Poem Poster",
      "Make a poem poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Write a 4-line poem and draw a picture for it.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Read your poem aloud.</p>`,

      [{ heading: "Exercise 64.1 — Write and draw.", items: [] }],

      `<p>⭐ for a complete poem.</p>`,

      [{ q: "What is your poem about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 14 — DESCRIPTIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: "Descriptive Writing", days: [

    D(1, "📝", "5 Senses",
      "Use the 5 senses to describe.",
      `<p class='big-emoji'>📝 👁️👂👃👅✋</p>
       <h3>The 5 Senses</h3>
       <ul>
         <li>👁️ See</li>
         <li>👂 Hear</li>
         <li>👃 Smell</li>
         <li>👅 Taste</li>
         <li>✋ Feel</li>
       </ul>`,

      [{ heading: "Exercise 65.1 — Describe an orange using 3 senses.", items: [
          "see", "taste", "smell"
        ]},
       { heading: "Exercise 65.2 — Describe rain using 3 senses.", items: [
          "see", "hear", "feel"
        ]}],

      `<p>Any correct descriptions.</p>`,

      [{ q: "How many senses?", a: ["5", "five"] }]),

    D(2, "📝", "Similes",
      "Use similes in description.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>A <b>simile</b> compares using like or as.</p>
       <h3>Examples</h3>
       <ul>
         <li>As fast as a cheetah</li>
         <li>As quiet as a mouse</li>
         <li>Bright like the sun</li>
       </ul>`,

      [{ heading: "Exercise 66.1 — Complete the similes.", items: [
          "As fast as a ___",
          "As quiet as a ___",
          "As bright as the ___",
          "As soft as ___"
        ]},
       { heading: "Exercise 66.2 — Write 3 similes of your own.", items: [] }],

      `<p>Any correct similes.</p>`,

      [{ q: "What is a simile?", a: ["comparison using like or as", "any"] }]),

    D(3, "📝", "Adjectives",
      "Use adjectives in descriptions.",
      `<p class='big-emoji'>📝 🎨</p>
       <p>Adjectives make descriptions vivid.</p>
       <p><i>The tall, green tree swayed in the gentle breeze.</i></p>`,

      [{ heading: "Exercise 67.1 — Add 3 adjectives to each sentence.", items: [
          "The tree swayed.",
          "The dog barked.",
          "The river flowed.",
          "The girl smiled."
        ]}],

      `<p>Any correct sentences.</p>`,

      [{ q: "What do adjectives do?", a: ["describe", "any"] }]),

    D(4, "📝", "Describe a Person",
      "Write a description of a person.",
      `<p class='big-emoji'>📝 👤</p>
       <p>Describe a person using senses, adjectives, and similes.</p>
       <h3>Example</h3>
       <p><i>My grandmother is a kind woman. Her hair is as white as snow. She smells of flowers and her voice is soft like music.</i></p>`,

      [{ heading: "Exercise 68.1 — Describe a person you admire.", items: [] }],

      `<p>Any 4–5 sentence description.</p>`,

      [{ q: "What 3 things should you use?", a: ["senses adjectives similes", "any"] }]),

    D(5, "🎨", "Descriptive Poster",
      "Make a descriptive poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Draw a person you love and describe them.</p>
       <h3>What to Include</h3>
       <ul>
         <li>3 senses</li>
         <li>3 adjectives</li>
         <li>1 simile</li>
       </ul>`,

      [{ heading: "Exercise 69.1 — Draw and describe.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Who did you describe?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 15 — PERSUASIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: "Persuasive Writing", days: [

    D(1, "📝", "Opinion",
      "State an opinion.",
      `<p class='big-emoji'>📝 💬</p>
       <p>An <b>opinion</b> is what you think or believe.</p>
       <h3>Examples</h3>
       <ul>
         <li>I think every child should go to school.</li>
         <li>In my opinion, reading is fun.</li>
       </ul>`,

      [{ heading: "Exercise 70.1 — Write 3 opinions.", items: [
          "about school", "about food", "about reading"
        ]}],

      `<p>Any 3 opinions.</p>`,

      [{ q: "What is an opinion?", a: ["what you think", "any"] }]),

    D(2, "📝", "Reasons",
      "Give reasons for an opinion.",
      `<p class='big-emoji'>📝 🔑</p>
       <p>Give <b>reasons</b> to support your opinion. Use "because".</p>
       <h3>Example</h3>
       <p><i>I think every child should go to school because education is important.</i></p>`,

      [{ heading: "Exercise 71.1 — Write 2 reasons for: 'Every child should go to school.'", items: [] }],

      `<p>Any 2 reasons.</p>`,

      [{ q: "What word gives a reason?", a: ["because", "any"] }]),

    D(3, "📝", "Evidence",
      "Give evidence for reasons.",
      `<p class='big-emoji'>📝 📊</p>
       <p><b>Evidence</b> is facts or examples that support your reasons.</p>
       <h3>Example</h3>
       <p><i>For example, children who go to school get better jobs when they grow up.</i></p>`,

      [{ heading: "Exercise 72.1 — Add evidence to: 'Reading is fun.'", items: [] }],

      `<p>Any evidence.</p>`,

      [{ q: "What is evidence?", a: ["facts", "examples", "any"] }]),

    D(4, "📝", "Write a Persuasive Essay",
      "Write a persuasive essay.",
      `<p class='big-emoji'>📝 ✍️</p>
       <h3>Structure</h3>
       <ol>
         <li>State your opinion.</li>
         <li>Give 2 reasons.</li>
         <li>Give evidence.</li>
         <li>Close with a strong statement.</li>
       </ol>`,

      [{ heading: "Exercise 73.1 — Write a persuasive essay on 'Why We Should Keep Our School Clean'.", items: [] }],

      `<p>Any persuasive essay.</p>`,

      [{ q: "What 3 things does a persuasive essay have?", a: ["opinion reasons evidence", "any"] }]),

    D(5, "🎨", "Persuasive Poster",
      "Make a persuasive poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster to persuade others.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Persuade your friends!</p>`,

      [{ heading: "Exercise 74.1 — Draw and write.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your poster about?", a: ["any"] }])
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
         <li>Rhyme, rhythm, stanzas</li>
         <li>Figurative language</li>
       </ul>`,

      [{ heading: "Exercise 75.1 — Answer.", items: [
          "What is a rhyme?",
          "What is rhythm?",
          "What is a stanza?",
          "What is a simile?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a stanza?", a: ["group of lines", "any"] }]),

    D(2, "🔁", "Review Descriptive",
      "Review descriptive writing.",
      `<p class='big-emoji'>🔁 🏞️</p>
       <h3>Review</h3>
       <ul>
         <li>Senses, adjectives, similes</li>
       </ul>`,

      [{ heading: "Exercise 76.1 — Describe an apple using 3 senses.", items: [] }],

      `<p>Any description.</p>`,

      [{ q: "How many senses?", a: ["5", "five"] }]),

    D(3, "🔁", "Review Persuasive",
      "Review persuasive writing.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Review</h3>
       <ul>
         <li>Opinion, reasons, evidence</li>
       </ul>`,

      [{ heading: "Exercise 77.1 — Write an opinion with 2 reasons.", items: [] }],

      `<p>Any opinion with reasons.</p>`,

      [{ q: "What is an opinion?", a: ["what you think", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is a rhyme?</li>
         <li>What is a stanza?</li>
         <li>What is a simile?</li>
         <li>Name 5 senses.</li>
         <li>What do adjectives do?</li>
         <li>What is an opinion?</li>
         <li>What gives reasons?</li>
         <li>What is evidence?</li>
         <li>Write one opinion.</li>
         <li>Write one simile.</li>
       </ol>`,

      [{ heading: "Exercise 78.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a simile?", a: ["comparison using like or as", "any"] }]),

    D(5, "🎉", "Month 4 Test & Celebration",
      "Monthly Test 4.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 4</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Poetry (15)</li>
         <li>Part B — Descriptive (15)</li>
         <li>Part C — Persuasive (15)</li>
         <li>Part D — Writing (5)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Poetry (15)",
          "Part B — Descriptive (15)",
          "Part C — Persuasive (15)",
          "Part D — Writing (5)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 17 — COMPREHENSION SKILLS
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: "Comprehension Skills", days: [

    D(1, "📝", "Main Idea",
      "Find the main idea.",
      `<p class='big-emoji'>📝 💡</p>
       <p>The <b>main idea</b> is what a passage is mostly about.</p>
       <p><b>Passage:</b> <i>Elephants are the largest land animals. They live in Africa and Asia. They eat plants and leaves.</i></p>
       <p>Main idea: <b>Facts about elephants</b>.</p>`,

      [{ heading: "Exercise 79.1 — What is the main idea?", items: [
          "Elephants are the largest land animals. They live in Africa and Asia. They eat plants and leaves."
        ]}],

      `<p><b>79.1:</b> Facts about elephants.</p>`,

      [{ q: "What is the main idea?", a: ["what it's about", "any"] }]),

    D(2, "📝", "Supporting Details",
      "Find supporting details.",
      `<p class='big-emoji'>📝 📋</p>
       <p><b>Supporting details</b> give more information about the main idea.</p>
       <p><b>Passage:</b> <i>Dogs make good pets. They are loyal. They can be trained. They love to play.</i></p>
       <p>Supporting details: loyal, trained, love to play.</p>`,

      [{ heading: "Exercise 80.1 — List 3 supporting details.", items: [
          "Dogs make good pets. They are loyal. They can be trained. They love to play."
        ]}],

      `<p><b>80.1:</b> Loyal, trained, love to play.</p>`,

      [{ q: "What are supporting details?", a: ["more information", "any"] }]),

    D(3, "📝", "Inference",
      "Make inferences.",
      `<p class='big-emoji'>📝 💭</p>
       <p><b>Inference</b> is figuring out something not directly stated.</p>
       <p><b>Passage:</b> <i>Kofi ran all the way home. He was breathing fast. He drank a lot of water.</i></p>
       <p>Inference: Kofi was tired and thirsty.</p>`,

      [{ heading: "Exercise 81.1 — What can you infer?", items: [
          "Kofi ran all the way home. He was breathing fast. He drank a lot of water."
        ]}],

      `<p><b>81.1:</b> Kofi was tired and thirsty.</p>`,

      [{ q: "What is an inference?", a: ["figure out", "any"] }]),

    D(4, "📝", "Author's Purpose",
      "Find the author's purpose.",
      `<p class='big-emoji'>📝 🎯</p>
       <p>Authors write to <b>inform, entertain, or persuade</b>.</p>
       <h3>Examples</h3>
       <ul>
         <li>Story → entertain</li>
         <li>Fact book → inform</li>
         <li>Advertisement → persuade</li>
       </ul>`,

      [{ heading: "Exercise 82.1 — What is the author's purpose?", items: [
          "A story about a lion",
          "Facts about Ghana",
          "Why you should buy this soap"
        ]}],

      `<p><b>82.1:</b> 1. Entertain 2. Inform 3. Persuade</p>`,

      [{ q: "What are the 3 purposes?", a: ["inform entertain persuade", "any"] }]),

    D(5, "🎨", "Comprehension Poster",
      "Make a comprehension poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Make a poster showing the comprehension skills.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>Main idea</li>
         <li>Supporting details</li>
         <li>Inference</li>
         <li>Author's purpose</li>
       </ul>`,

      [{ heading: "Exercise 83.1 — Draw and label.", items: [
          "Main idea", "Supporting details", "Inference", "Author's purpose"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a comprehension skill.", a: ["main idea", "inference", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 18 — SUMMARY WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: "Summary Writing", days: [

    D(1, "📝", "What is a Summary?",
      "Learn about summaries.",
      `<p class='big-emoji'>📝 📄</p>
       <p>A <b>summary</b> is a short version of a longer text.</p>
       <h3>Rules for Summaries</h3>
       <ul>
         <li>Include only the main ideas.</li>
         <li>Leave out details.</li>
         <li>Use your own words.</li>
         <li>Keep it short.</li>
       </ul>`,

      [{ heading: "Exercise 84.1 — Say.", items: [
          "What is a summary?",
          "Name 3 rules.",
          "Why are summaries useful?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a summary?", a: ["short version", "any"] }]),

    D(2, "📝", "Finding Main Ideas",
      "Find main ideas for a summary.",
      `<p class='big-emoji'>📝 💡</p>
       <p><b>Passage:</b> <i>Ama went to the market. She bought tomatoes. She bought onions. She bought fish. She went home.</i></p>
       <p>Summary: <b>Ama went to the market and bought tomatoes, onions, and fish.</b></p>`,

      [{ heading: "Exercise 85.1 — Write a summary.", items: [
          "Ama went to the market. She bought tomatoes. She bought onions. She bought fish. She went home."
        ]}],

      `<p>⭐</p>`,

      [{ q: "What should you include in a summary?", a: ["main ideas", "any"] }]),

    D(3, "📝", "Writing a Summary",
      "Write a summary.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p><b>Passage:</b> <i>Kwame woke up early. He brushed his teeth. He ate breakfast. He walked to school. He arrived before the bell.</i></p>`,

      [{ heading: "Exercise 86.1 — Write a 1–2 sentence summary.", items: [] }],

      `<p>Any 1–2 sentence summary.</p>`,

      [{ q: "What is a summary?", a: ["short version", "any"] }]),

    D(4, "📝", "Practise",
      "Practise summary writing.",
      `<p class='big-emoji'>📝 🏋️</p>
       <p><b>Passage:</b> <i>The rain fell all night. The road became flooded. School was cancelled. The children stayed at home.</i></p>`,

      [{ heading: "Exercise 87.1 — Write a summary.", items: [] }],

      `<p>Any 1–2 sentence summary.</p>`,

      [{ q: "Why write a summary?", a: ["to shorten", "any"] }]),

    D(5, "🎨", "Summary Poster",
      "Make a summary poster.",
      `<p class='big-emoji'>🎨 📝</p>
       <p>Make a poster about summary writing.</p>
       <h3>What to Draw</h3>
       <ul>
         <li>What is a summary?</li>
         <li>3 rules</li>
         <li>One example</li>
       </ul>`,

      [{ heading: "Exercise 88.1 — Draw and label.", items: [
          "What is a summary",
          "3 rules",
          "One example"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "Name a rule for summaries.", a: ["main ideas only", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 19 — NARRATIVE WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: "Narrative Writing", days: [

    D(1, "📝", "Structure",
      "Review story structure.",
      `<p class='big-emoji'>📝 📖</p>
       <h3>Story Structure</h3>
       <ul>
         <li>Beginning — characters and setting</li>
         <li>Middle — problem</li>
         <li>End — solution</li>
       </ul>`,

      [{ heading: "Exercise 89.1 — Plan a story.", items: [
          "Characters", "Setting", "Problem", "Solution"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning middle end", "any"] }]),

    D(2, "📝", "Openers",
      "Write story openers.",
      `<p class='big-emoji'>📝 🌅</p>
       <h3>Story Openers</h3>
       <ul>
         <li>Once upon a time…</li>
         <li>One sunny morning…</li>
         <li>Long ago, in a village…</li>
         <li>It was a dark and stormy night…</li>
       </ul>`,

      [{ heading: "Exercise 90.1 — Write 3 story openers.", items: [] }],

      `<p>Any 3 openers.</p>`,

      [{ q: "What is a story opener?", a: ["beginning", "any"] }]),

    D(3, "📝", "Dialogue",
      "Use dialogue in stories.",
      `<p class='big-emoji'>📝 💬</p>
       <p><b>Dialogue</b> is what the characters say. It uses quotation marks.</p>
       <h3>Example</h3>
       <p><i>"Where are you going?" asked Ama.</i><br>
       <i>"To the market," replied Kofi.</i></p>`,

      [{ heading: "Exercise 91.1 — Write a dialogue between two friends.", items: [] }],

      `<p>Any 4-line dialogue.</p>`,

      [{ q: "What is dialogue?", a: ["what characters say", "any"] }]),

    D(4, "📝", "Write a Story",
      "Write a complete story.",
      `<p class='big-emoji'>📝 ✍️</p>
       <p>Write a story with characters, setting, problem, and solution.</p>
       <h3>Plan</h3>
       <ol>
         <li>Who is in the story?</li>
         <li>Where does it happen?</li>
         <li>What goes wrong?</li>
         <li>How is it solved?</li>
       </ol>`,

      [{ heading: "Exercise 92.1 — Write a story on 'A Day I Will Never Forget'.", items: [] }],

      `<p>Any story with 3 parts.</p>`,

      [{ q: "What is your story about?", a: ["any"] }]),

    D(5, "🎨", "Narrative Poster",
      "Make a narrative poster.",
      `<p class='big-emoji'>🎨 📖</p>
       <p>Make a poster about your story with 3 pictures.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Tell the story aloud.</p>`,

      [{ heading: "Exercise 93.1 — Draw and write.", items: [] }],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is your story about?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 20 — REVIEW
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: "Review", days: [

    D(1, "🔁", "Review Comprehension",
      "Review comprehension.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Review</h3>
       <ul>
         <li>Main idea</li>
         <li>Supporting details</li>
         <li>Inference</li>
         <li>Author's purpose</li>
       </ul>`,

      [{ heading: "Exercise 94.1 — Answer.", items: [
          "What is the main idea?",
          "What are supporting details?",
          "What is an inference?",
          "What are the 3 author's purposes?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an inference?", a: ["figure out", "any"] }]),

    D(2, "🔁", "Review Summary",
      "Review summaries.",
      `<p class='big-emoji'>🔁 📄</p>
       <h3>Review</h3>
       <ul>
         <li>What is a summary?</li>
         <li>Rules for summaries</li>
       </ul>`,

      [{ heading: "Exercise 95.1 — Answer.", items: [
          "What is a summary?",
          "Name 3 rules.",
          "Why are summaries useful?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a summary?", a: ["short version", "any"] }]),

    D(3, "🔁", "Review Narrative",
      "Review narrative writing.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Review</h3>
       <ul>
         <li>Structure, openers, dialogue</li>
       </ul>`,

      [{ heading: "Exercise 96.1 — Write 3 sentences of a story with dialogue.", items: [] }],

      `<p>Any story with dialogue.</p>`,

      [{ q: "What are the 3 parts of a story?", a: ["beginning middle end", "any"] }]),

    D(4, "🔁", "Practice Test",
      "Practice test.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>What is the main idea?</li>
         <li>What are supporting details?</li>
         <li>What is an inference?</li>
         <li>What are the 3 author's purposes?</li>
         <li>What is a summary?</li>
         <li>Name 3 rules for summaries.</li>
         <li>What are the 3 parts of a story?</li>
         <li>What is dialogue?</li>
         <li>What is a story opener?</li>
         <li>What is a narrative?</li>
       </ol>`,

      [{ heading: "Exercise 97.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a narrative?", a: ["a story", "any"] }]),

    D(5, "🎉", "Month 5 Test & Celebration",
      "Monthly Test 5.",
      `<p class='big-emoji'>🎉 ⭐</p>
       <p><b>Monthly Test 5</b>: 50 marks.</p>
       <h3>Test Sections</h3>
       <ul>
         <li>Part A — Comprehension (15)</li>
         <li>Part B — Summary (10)</li>
         <li>Part C — Narrative (15)</li>
         <li>Part D — Writing (10)</li>
       </ul>
       <h3>Celebrate!</h3>
       <p>Show your work. Give yourself a star! ⭐</p>`,

      [{ heading: "Complete the test", items: [
          "Part A — Comprehension (15)",
          "Part B — Summary (10)",
          "Part C — Narrative (15)",
          "Part D — Writing (10)"
        ]},
       { heading: "Celebrate!", items: [
          "Show your work.", "Give yourself a star! ⭐"
        ]}],

      `<p>Marking: 50</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 21 — REPORT WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: "Report Writing", days: [

    D(1, "📝", "What is a Report?",
      "Learn about reports.",
      `<p class='big-emoji'>📝 📊</p>
       <p>A <b>report</b> gives facts about a topic in a clear way.</p>
       <h3>Features of a Report</h3>
       <ul>
         <li>Title</li>
         <li>Introduction</li>
         <li>Facts and details</li>
         <li>Conclusion</li>
       </ul>`,

      [{ heading: "Exercise 98.1 — Say.", items: [
          "What is a report?",
          "Name the parts of a report.",
          "What is the difference between a report and a story?"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What is a report?", a: ["facts about a topic", "any"] }]),

    D(2, "📝", "Structure",
      "Learn report structure.",
      `<p class='big-emoji'>📝 📋</p>
       <h3>Report Structure</h3>
       <ol>
         <li>Title</li>
         <li>Introduction — what it's about</li>
         <li>Body — facts and details</li>
         <li>Conclusion — summary</li>
       </ol>`,

      [{ heading: "Exercise 99.1 — Plan a report.", items: [
          "Title: ___",
          "Introduction: ___",
          "Body (3 facts): ___",
          "Conclusion: ___"
        ]}],

      `<p>⭐</p>`,

      [{ q: "What goes in the introduction?", a: ["what it's about", "any"] }]),

    D(3, "📝", "Facts",
      "Learn to use facts in reports.",
      `<p class='big-emoji'>📝 📊</p>
       <p>Reports use <b>facts</b>, not opinions.</p>
       <h3>Example</h3>
       <p>Fact: "Elephants are the largest land animals."</p>
       <p>Opinion: "Elephants are the best animals."</p>`,

      [{ heading: "Exercise 100.1 — Fact or opinion?", items: [
          "Ghana is in West Africa.",
          "Ghana is the best country.",
          "The sun rises in the east.",
          "Rain is beautiful.",
          "Water boils at 100°C."
        ]}],

      `<p><b>100.1:</b> 1. Fact 2. Opinion 3. Fact 4. Opinion 5. Fact</p>`,

      [{ q: "What does a report use?", a: ["facts", "any"] }]),

    D(4, "📝", "Write a Report",
      "Write a report.",
      `<p class='big-emoji'>📝 ✍️</p>
       <h3>Choose a Topic</h3>
       <ul>
         <li>My school</li>
         <li>My town</li>
         <li>A famous person</li>
         <li>An animal</li>
       </ul>`,

      [{ heading: "Exercise 101.1 — Write a report.", items: [] }],

      `<p>Any report with title, intro, body, and conclusion.</p>`,

      [{ q: "What did you write about?", a: ["any"] }]),

    D(5, "🎨", "Report Poster",
      "Make a report poster.",
      `<p class='big-emoji'>🎨 📊</p>
       <p>Make a poster about your report.</p>
       <h3>Show and Tell</h3>
       <p>Show your poster. Read your report aloud.</p>`,

      [{ heading: "Exercise 102.1 — Draw and label.", items: [
          "Title",
          "Facts",
          "Conclusion"
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: "What is a report?", a: ["facts about a topic", "any"] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // WEEK 22 — EDITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: "Editing", days: [

    D(1, "📝", "Spelling",
      "Check spelling in your work.",
      `<p class='big-emoji'>📝 ✅</p>
       <h3>Spelling Checklist</h3>
       <ul>
         <li>Read your work slowly.</li>
         <li>Look for spelling mistakes.</li>
         <li>Use a dictionary if needed.</li>
         <li>Correct them.</li>
       </ul>`,

      [{ heading: "Exercise 103.1 — Correct the spelling.", items: [
          "I like to reed books.",
          "The tree is very tal.",
          "My frend is happy.",
          "The dog is big and blak.",
          "We go to scool every day."
        ]}],

      `<p><b>103.1:</b> 1. read 2. tall 3. friend 4. black 5. school</p>`,

      [{ q: "Correct: frend", a: ["friend"] },
       { q: "Correct: scool", a: ["school"] }]),

    D(2, "📝", "Punctuation",
      "Check punctuation.",
      `<p class='big-emoji'>📝 ✅</p>
       <h3>Punctuation Checklist</h3>
       <ul>
         <li>Does every sentence start with a capital?</li>
         <li>Does every sentence end with . ? or !?</li>
         <li>Are commas used in lists?</li>
         <li>Are quotation marks used for dialogue?</li>
       </ul>`,

      [{ heading: "Exercise 104.1 — Add punctuation.", items: [
          "i like rice and beans",
          "where is my book",
          "wow that is great",
          "the boy runs fast",
          "she has a red blue and green pen"
        ]}],

      `<p><b>104.1:</b> 1. I like rice and beans. 2. Where is my book? 3. Wow, that is great! 4. The boy runs fast. 5. She has a red, blue, and green pen.</p>`,

      [{ q: "Add punctuation: i like rice", a: ["I like rice."] }]),

    D(3, "📝", "Grammar",
      "Check grammar.",
      `<p class='big-emoji'>📝 ✅</p>
       <h3>Grammar Checklist</h3>
       <ul>
         <li>Do subjects and verbs match?</li>
         <li>Are pronouns correct?</li>
         <li>Are tenses correct?</li>
       </ul>`,

      [{ heading: "Exercise 105.1 — Correct the grammar.", items: [
          "She go to school.",
          "They is happy.",
          "He run fast.",
          "I seen the bird.",
          "The boys plays football."
        ]}],

      `<p><b>105.1:</b> 1. She goes to school. 2. They are happy. 3. He runs fast. 4. I saw the bird. 5. The boys play football.</p>`,

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

      [{ heading: "Exercise 106.1 — Edit a paragraph you wrote this week.", items: [] }],

      `<p>⭐ for careful editing.</p>`,

      [{ q: "What is editing?", a: ["checking for mistakes", "any"] }]),

    D(5, "🎨", "Editing Poster",
      "Make an editing poster.",
      `<p class='big-emoji'>🎨 ✅</p>
       <p>Make a poster with an editing checklist.</p>
       <h3>What to Include</h3>
       <ul>
         <li>Check spelling</li>
         <li>Check punctuation</li>
         <li>Check grammar</li>
         <li>Check sentence structure</li>
       </ul>`,

      [{ heading: "Exercise 107.1 — Draw and label.", items: [
          "Check spelling",
          "Check punctuation",
          "Check grammar",
          "Check sentence structure"
        ]}],

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
         <li>Vowel teams</li>
         <li>Consonant patterns</li>
         <li>Homophones</li>
       </ul>`,

      [{ heading: "Exercise 108.1 — Spell the word.", items: [
          "rain", "boat", "moon", "back", "catch"
        ]}],

      `<p>Any correct spellings.</p>`,

      [{ q: "Spell 'rain'.", a: ["rain"] },
       { q: "Spell 'catch'.", a: ["catch"] }]),

    D(2, "🔁", "Grammar",
      "Revise grammar.",
      `<p class='big-emoji'>🔁 📝</p>
       <h3>Revise</h3>
       <ul>
         <li>Nouns, pronouns, verbs, adjectives</li>
         <li>Sentence types</li>
       </ul>`,

      [{ heading: "Exercise 109.1 — Identify the part of speech.", items: [
          "The **tall** boy **runs**.",
          "**She** writes a **letter**.",
          "The **happy** dog **barks**."
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is 'tall'?", a: ["adjective"] }]),

    D(3, "🔁", "Reading",
      "Revise reading.",
      `<p class='big-emoji'>🔁 📖</p>
       <h3>Revise</h3>
       <ul>
         <li>Comprehension</li>
         <li>Main idea, inference</li>
       </ul>`,

      [{ heading: "Exercise 110.1 — Answer.", items: [
          "What is the main idea?",
          "What is an inference?",
          "What are the 3 author's purposes?"
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: "What is an inference?", a: ["figure out", "any"] }]),

    D(4, "🔁", "Writing",
      "Revise writing.",
      `<p class='big-emoji'>🔁 ✍️</p>
       <h3>Revise</h3>
       <ul>
         <li>Paragraphs</li>
         <li>Stories</li>
         <li>Letters</li>
         <li>Descriptive, persuasive, narrative</li>
       </ul>`,

      [{ heading: "Exercise 111.1 — Write a paragraph on 'My Best Friend'.", items: [] }],

      `<p>⭐ for a complete paragraph.</p>`,

      [{ q: "What are the 3 parts of a paragraph?", a: ["topic supporting closing", "any"] }]),

    D(5, "🎉", "Practice Test",
      "Do a practice test.",
      `<p class='big-emoji'>🎉 📝</p>
       <h3>Mixed Questions</h3>
       <ol>
         <li>Spell 'catch'.</li>
         <li>Spell 'boat'.</li>
         <li>What is a pronoun?</li>
         <li>What is an adjective?</li>
         <li>What is a simple sentence?</li>
         <li>What is a compound sentence?</li>
         <li>What is a complex sentence?</li>
         <li>What is the main idea?</li>
         <li>What is an inference?</li>
         <li>What is a summary?</li>
       </ol>`,

      [{ heading: "Exercise 112.1 — Answer 10 questions.", items: [] }],

      `<p>Any correct answers.</p>`,

      [{ q: "What is a pronoun?", a: ["replaces a noun", "any"] }])
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
         <li>Advanced phonics and spelling</li>
         <li>Grammar (nouns, pronouns, verbs, adjectives)</li>
         <li>Reading comprehension</li>
         <li>Sentence types (simple, compound, complex)</li>
         <li>Paragraphs and stories</li>
         <li>Punctuation and capitalisation</li>
         <li>Vocabulary</li>
         <li>Letters (informal and formal)</li>
         <li>Poetry and figurative language</li>
         <li>Descriptive, persuasive, narrative writing</li>
         <li>Comprehension skills</li>
         <li>Summary and report writing</li>
         <li>Editing</li>
       </ul>
       <h3>Worked Example</h3>
       <p><b>Question:</b> What is your favourite topic?</p>
       <p><b>Answer:</b> <b>(Any answer.)</b></p>`,

      [{ heading: "Exercise 113.1 — Answer.", items: [
          "Name 3 things you learned this year.",
          "What is your favourite topic?",
          "What is one new word you learned?"
        ]},
       { heading: "Exercise 113.2 — Draw.", items: [
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
         <li>Your best persuasive essay</li>
         <li>Your best report</li>
       </ul>`,

      [{ heading: "Exercise 114.1 — Make your portfolio.", items: [
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

      [{ heading: "Exercise 115.1 — Present your portfolio.", items: [
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
       <p>You have completed Grade 4 English! Today is your celebration day.</p>
       <h3>What to Do</h3>
       <ul>
         <li>🎉 Show all your work to your family.</li>
         <li>📖 Read one last story aloud.</li>
         <li>⭐ Give yourself a big star!</li>
       </ul>
       <h3>Say This</h3>
       <p>"I finished Grade 4 English! I can read, write, spell, and tell stories!"</p>`,

      [{ heading: "Exercise 116.1 — Celebrate!", items: [
          "Show your work.",
          "Read one last story.",
          "Give yourself a big star! ⭐"
        ]}],

      `<p>⭐ for a wonderful year!</p>`,

      [{ q: "What did you enjoy most?", a: ["any"] },
       { q: "What will you do in Grade 5?", a: ["any"] }]),

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

      [{ heading: "Exercise 117.1 — Big Star Day", items: [
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