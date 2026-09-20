// src/data/grade2/english.js
// Grade 2 English — NaCCA Standards-Based Curriculum (expanded)
// Strands: Oral Language · Reading · Grammar Usage · Writing

import { D, wk } from '../helpers.js';

export const english = [

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: READING
  // SUB-STRAND: PHONICS / PHONEMIC AWARENESS
  // ═══════════════════════════════════════════════════════════════════

  { week: 1, theme: 'Sounds & Letters', days: [

    D(1, '🔤', 'The Letter A',
      'Recognise and produce the short sound of the letter A and identify words beginning with A.',
      `<p class='big-emoji'>🍎 🐜 🎩</p>
       <p>Today we learn the letter <b>A</b>. It is the first letter of the alphabet. It has a big form (A) and a small form (a).</p>

       <h3>Two Sounds of A</h3>
       <ul>
         <li><b>Short a</b> — sounds like "ah" — as in <i>apple, ant, arm</i>.</li>
         <li><b>Long a</b> — sounds like "ay" — as in <i>cake, rain, day</i>. (We will learn this later.)</li>
       </ul>
       <p>Today we focus on the <b>short a</b> sound: "ah, ah, apple".</p>

       <h3>Words Starting with A</h3>
       <ul>
         <li>🍎 <b>apple</b></li>
         <li>🐜 <b>ant</b></li>
         <li>💪 <b>arm</b></li>
         <li>🐊 <b>alligator</b></li>
         <li>🪓 <b>axe</b></li>
         <li>🅰️ <b>apron</b></li>
       </ul>

       <h3>How to Write A</h3>
       <p>Big A: start at the top, slant down-left, slant down-right, then draw a line across.<br>Small a: start at the top, curve around, then draw a straight line down.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big apple. Write the letter <b>A</b> and <b>a</b> on either side. Colour the apple red or green.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What letter starts the word "apple"?</p>
       <p><b>Answer:</b> The letter <b>A</b>.</p>`,

      [{ heading: 'Exercise 1.1 — Trace and write', items: [
          'Write A five times.',
          'Write a five times.',
          'Write the word: apple.'
        ]},
       { heading: 'Exercise 1.2 — Circle words that start with A', items: [
          'apple', 'ball', 'ant', 'cat', 'arm', 'dog', 'axe'
        ]},
       { heading: 'Exercise 1.3 — Say the sound', items: [
          'Say the short a sound three times: ah – ah – ah.',
          'Say these words aloud: apple, ant, arm, axe.'
        ]}],

      `<p><b>1.2:</b> Circle apple, ant, arm, axe.</p>`,

      [{ q: 'What letter starts the word "apple"?', a: ['a'] },
       { q: 'A is for ___ (a fruit)', a: ['apple'] },
       { q: 'A is for ___ (a small insect)', a: ['ant'] },
       { q: 'What sound does short A make?', a: ['ah'] }]),

    D(2, '🔤', 'The Letter B',
      'Recognise and produce the sound of the letter B and identify words beginning with B.',
      `<p class='big-emoji'>🐻 🎈 🍌</p>
       <p>Today we learn the letter <b>B</b>. The letter B makes the sound "buh".</p>

       <h3>Words Starting with B</h3>
       <ul>
         <li>🐻 <b>bear</b></li>
         <li>⚽ <b>ball</b></li>
         <li>🍌 <b>banana</b></li>
         <li>📕 <b>book</b></li>
         <li>🛏️ <b>bed</b></li>
         <li>🦋 <b>butterfly</b></li>
         <li>🧺 <b>basket</b></li>
       </ul>

       <h3>How to Write B</h3>
       <p>Big B: draw a straight line down, then two curved bumps on the right.<br>Small b: draw a straight line down, then one curved bump.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big ball and a banana. Write B and b next to them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What letter starts "bear"?</p>
       <p><b>Answer:</b> The letter <b>B</b>.</p>`,

      [{ heading: 'Exercise 2.1 — Trace and write', items: [
          'Write B five times.',
          'Write b five times.',
          'Write the word: ball.'
        ]},
       { heading: 'Exercise 2.2 — Fill in the missing letter', items: [
          '__all', '__ear', '__anana', '__ook', '__ed'
        ]},
       { heading: 'Exercise 2.3 — Draw and label', items: [
          'Draw a ball and write "ball" under it.',
          'Draw a banana and write "banana" under it.'
        ]}],

      `<p><b>2.2:</b> ball, bear, banana, book, bed</p>`,

      [{ q: 'What letter starts "bear"?', a: ['b'] },
       { q: 'B is for ___ (a fruit)', a: ['banana'] },
       { q: 'B is for ___ (a toy you kick)', a: ['ball'] },
       { q: 'What sound does B make?', a: ['buh'] }]),

    D(3, '🔤', 'The Letter C',
      'Recognise and produce the sound of the letter C and identify words beginning with C.',
      `<p class='big-emoji'>🐱 🐄 🎂</p>
       <p>Today we learn the letter <b>C</b>. The letter C makes the sound "kuh".</p>

       <h3>Words Starting with C</h3>
       <ul>
         <li>🐱 <b>cat</b></li>
         <li>🐄 <b>cow</b></li>
         <li>🎂 <b>cake</b></li>
         <li>🥕 <b>carrot</b></li>
         <li>🪑 <b>chair</b></li>
         <li>📞 <b>call</b></li>
         <li>🍫 <b>chocolate</b></li>
       </ul>

       <h3>How to Write C</h3>
       <p>Start at the top right, curve around to the left, then curve back to the bottom right. It looks like a half-moon.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a cat, a cow, and a cake. Write their names under each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What letter starts "cow"?</p>
       <p><b>Answer:</b> The letter <b>C</b>.</p>`,

      [{ heading: 'Exercise 3.1 — Trace and write', items: [
          'Write C five times.',
          'Write c five times.',
          'Write the word: cat.'
        ]},
       { heading: 'Exercise 3.2 — Circle words starting with C', items: [
          'cat', 'dog', 'cow', 'book', 'cake', 'ball', 'carrot'
        ]},
       { heading: 'Exercise 3.3 — Draw and label', items: [
          'Draw a cat and write "cat" under it.'
        ]}],

      `<p><b>3.2:</b> Circle cat, cow, cake, carrot.</p>`,

      [{ q: 'What letter starts "cat"?', a: ['c'] },
       { q: 'C is for ___ (a farm animal)', a: ['cow'] },
       { q: 'C is for ___ (you eat it at a birthday)', a: ['cake'] },
       { q: 'What sound does C make?', a: ['kuh'] }]),

    D(4, '🎵', 'The Alphabet Song',
      'Sing the alphabet from A to Z and recognise all 26 letters.',
      `<p class='big-emoji'>🎵 🔤 🎤</p>
       <p>The English alphabet has <b>26 letters</b>. Let's sing them in order.</p>

       <h3>The Alphabet Song</h3>
       <p>A – B – C – D – E – F – G<br>
          H – I – J – K – L – M – N – O – P<br>
          Q – R – S<br>
          T – U – V<br>
          W – X – Y and Z<br>
          Now I know my ABC — next time won't you sing with me!</p>

       <h3>Vowels and Consonants</h3>
       <ul>
         <li><b>Vowels (5):</b> a, e, i, o, u</li>
         <li><b>Consonants (21):</b> all the other letters</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big rectangle. Write A–Z inside in order. Colour the 5 vowels (a, e, i, o, u) in red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What letter comes after M?</p>
       <p><b>Answer:</b> <b>N</b>.</p>`,

      [{ heading: 'Exercise 4.1 — Say the alphabet', items: [
          'Sing the alphabet song from A to Z.',
          'Point to each letter as you sing.'
        ]},
       { heading: 'Exercise 4.2 — Answer these questions', items: [
          'What letter comes after A?',
          'What letter comes after K?',
          'What letter comes before Z?',
          'What letter comes before M?',
          'How many letters are in the alphabet?'
        ]},
       { heading: 'Exercise 4.3 — Write the alphabet', items: [
          'Write A to M in your book.',
          'Write N to Z in your book.'
        ]}],

      `<p><b>4.2:</b> 1. B 2. L 3. Y 4. L 5. 26</p>`,

      [{ q: 'What letter comes after A?', a: ['b'] },
       { q: 'What letter comes before Z?', a: ['y'] },
       { q: 'How many letters are in the alphabet?', a: ['26', 'twenty-six'] },
       { q: 'Name the 5 vowels.', a: ['a e i o u', 'a,e,i,o,u', 'aeiou'] }]),

    D(5, '🎨', 'Fun with Letters',
      'Consolidate learning of letters A, B, and C by drawing and labelling.',
      `<p>Today you will make a small poster with A, B, and C.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"A, B, C"</b></li>
         <li>Top row: A is for apple 🍎</li>
         <li>Middle row: B is for ball ⚽</li>
         <li>Bottom row: C is for cat 🐱</li>
         <li>Colour each drawing.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster to your parent. Say each letter and the word it stands for.</p>`,

      [{ heading: 'Exercise 5.1 — Draw your A–B–C poster', items: [
          'A is for apple',
          'B is for ball',
          'C is for cat'
        ]}],

      `<p>⭐ for a neat, colourful poster.</p>`,

      [{ q: 'What is A for?', a: ['apple'] },
       { q: 'What is B for?', a: ['ball', 'bear', 'banana', 'any'] },
       { q: 'What is C for?', a: ['cat', 'cow', 'cake', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: READING / PHONICS — Word Families
  // ═══════════════════════════════════════════════════════════════════

  { week: 2, theme: 'Three-Letter Words', days: [

    D(1, '🐱', 'Word Family: -at',
      'Read and spell words in the -at family.',
      `<p class='big-emoji'>🐱 🎩 🦇 🐀</p>
       <p>Words in the <b>-at</b> family all end with the same letters: <b>a</b> and <b>t</b>.</p>

       <h3>The -at Family</h3>
       <ul>
         <li>🐱 <b>cat</b> — a small pet animal.</li>
         <li>🎩 <b>hat</b> — you wear it on your head.</li>
         <li>🦇 <b>bat</b> — an animal that flies at night; also used in a game.</li>
         <li>🐀 <b>rat</b> — a small animal, like a big mouse.</li>
         <li>🟫 <b>mat</b> — a flat thing you put on the floor.</li>
         <li>💺 <b>sat</b> — past tense of "sit".</li>
       </ul>

       <h3>How to Build Them</h3>
       <p>c + at = cat<br>h + at = hat<br>b + at = bat<br>r + at = rat<br>m + at = mat<br>s + at = sat</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a cat sitting on a mat. Write "cat" and "mat" below.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which -at word is an animal that says "meow"?</p>
       <p><b>Answer:</b> <b>cat</b>.</p>`,

      [{ heading: 'Exercise 6.1 — Read aloud', items: ['cat', 'hat', 'bat', 'rat', 'mat', 'sat'] },
       { heading: 'Exercise 6.2 — Fill in the missing letter', items: ['__at (cat)', '__at (hat)', '__at (bat)', '__at (rat)'] },
       { heading: 'Exercise 6.3 — Match', items: [
          'cat → 🐱',
          'hat → 🎩',
          'rat → 🐀',
          'bat → 🦇'
        ]}],

      `<p><b>6.2:</b> c, h, b, r</p>
       <p><b>6.3:</b> cat → 🐱; hat → 🎩; rat → 🐀; bat → 🦇</p>`,

      [{ q: 'Which -at word says meow?', a: ['cat'] },
       { q: 'Which -at word goes on your head?', a: ['hat'] },
       { q: 'Which -at word is an animal that flies at night?', a: ['bat'] },
       { q: 'Which -at word is a floor covering?', a: ['mat'] }]),

    D(2, '🐖', 'Word Family: -ig',
      'Read and spell words in the -ig family.',
      `<p class='big-emoji'>🐖 🕳️ 🪵 🧄</p>
       <p>Words in the <b>-ig</b> family all end with <b>i</b> and <b>g</b>.</p>

       <h3>The -ig Family</h3>
       <ul>
         <li>🐖 <b>pig</b> — a pink farm animal.</li>
         <li>🐘 <b>big</b> — opposite of small.</li>
         <li>⛏️ <b>dig</b> — to make a hole in the ground.</li>
         <li>💇 <b>wig</b> — hair you wear on your head.</li>
         <li>🍈 <b>fig</b> — a sweet fruit.</li>
         <li>🪵 <b>rig</b> — to set up something (like a tent).</li>
       </ul>

       <h3>How to Build Them</h3>
       <p>p + ig = pig<br>b + ig = big<br>d + ig = dig<br>w + ig = wig<br>f + ig = fig<br>r + ig = rig</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a pig and a big tree. Write "pig" and "big" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which -ig word is the opposite of "small"?</p>
       <p><b>Answer:</b> <b>big</b>.</p>`,

      [{ heading: 'Exercise 7.1 — Read aloud', items: ['pig', 'big', 'dig', 'wig', 'fig', 'rig'] },
       { heading: 'Exercise 7.2 — Fill in the missing letter', items: ['__ig (pig)', '__ig (big)', '__ig (dig)', '__ig (wig)'] },
       { heading: 'Exercise 7.3 — Circle the correct word', items: [
          'A pink farm animal: pig / big',
          'Opposite of small: pig / big',
          'Something you wear on your head: wig / fig'
        ]}],

      `<p><b>7.2:</b> p, b, d, w</p>
       <p><b>7.3:</b> pig; big; wig</p>`,

      [{ q: 'Which -ig word is pink and on a farm?', a: ['pig'] },
       { q: 'Which -ig word is the opposite of small?', a: ['big'] },
       { q: 'Which -ig word means to make a hole?', a: ['dig'] }]),

    D(3, '☀️', 'Word Family: -un',
      'Read and spell words in the -un family.',
      `<p class='big-emoji'>☀️ 🏃 🍞 🔫</p>
       <p>Words in the <b>-un</b> family all end with <b>u</b> and <b>n</b>.</p>

       <h3>The -un Family</h3>
       <ul>
         <li>☀️ <b>sun</b> — the bright star in the sky.</li>
         <li>🏃 <b>run</b> — to move quickly.</li>
         <li>🎉 <b>fun</b> — something enjoyable.</li>
         <li>🍞 <b>bun</b> — a small round bread.</li>
         <li>🔫 <b>gun</b> — a weapon (we should never play with guns).</li>
         <li>🙏 <b>nun</b> — a religious woman.</li>
       </ul>

       <h3>How to Build Them</h3>
       <p>s + un = sun<br>r + un = run<br>f + un = fun<br>b + un = bun<br>g + un = gun<br>n + un = nun</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bright sun and a child running. Write "sun" and "run" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which -un word is in the sky?</p>
       <p><b>Answer:</b> <b>sun</b>.</p>`,

      [{ heading: 'Exercise 8.1 — Read aloud', items: ['sun', 'run', 'fun', 'bun', 'gun', 'nun'] },
       { heading: 'Exercise 8.2 — Fill in the missing letter', items: ['__un (sun)', '__un (run)', '__un (fun)', '__un (bun)'] },
       { heading: 'Exercise 8.3 — Match the word to its meaning', items: [
          'sun → bright star in the sky',
          'run → move quickly',
          'fun → something enjoyable',
          'bun → small round bread'
        ]}],

      `<p><b>8.2:</b> s, r, f, b</p>
       <p><b>8.3:</b> sun → bright star; run → move quickly; fun → enjoyable; bun → small bread</p>`,

      [{ q: 'Which -un word is in the sky?', a: ['sun'] },
       { q: 'Which -un word means to move fast?', a: ['run'] },
       { q: 'Which -un word means something enjoyable?', a: ['fun'] }]),

    D(4, '🐶', 'Word Family: -og',
      'Read and spell words in the -og family.',
      `<p class='big-emoji'>🐶 🪵 🌫️ 🐸</p>
       <p>Words in the <b>-og</b> family all end with <b>o</b> and <b>g</b>.</p>

       <h3>The -og Family</h3>
       <ul>
         <li>🐶 <b>dog</b> — a pet animal.</li>
         <li>🪵 <b>log</b> — a piece of wood from a tree.</li>
         <li>🌫️ <b>fog</b> — thick mist in the air.</li>
         <li>🐗 <b>hog</b> — a wild pig.</li>
         <li>🏃 <b>jog</b> — to run slowly.</li>
         <li>🌳 <b>bog</b> — a wet, muddy ground.</li>
       </ul>

       <h3>How to Build Them</h3>
       <p>d + og = dog<br>l + og = log<br>f + og = fog<br>h + og = hog<br>j + og = jog<br>b + og = bog</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a dog next to a log. Write "dog" and "log" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which -og word is a common pet?</p>
       <p><b>Answer:</b> <b>dog</b>.</p>`,

      [{ heading: 'Exercise 9.1 — Read aloud', items: ['dog', 'log', 'fog', 'hog', 'jog', 'bog'] },
       { heading: 'Exercise 9.2 — Fill in the missing letter', items: ['__og (dog)', '__og (log)', '__og (fog)', '__og (hog)'] },
       { heading: 'Exercise 9.3 — Circle the correct word', items: [
          'A pet: dog / log',
          'Something in the sky on a misty day: fog / jog',
          'To run slowly: jog / hog'
        ]}],

      `<p><b>9.2:</b> d, l, f, h</p>
       <p><b>9.3:</b> dog; fog; jog</p>`,

      [{ q: 'Which -og word is a pet?', a: ['dog'] },
       { q: 'Which -og word means to run slowly?', a: ['jog'] },
       { q: 'Which -og word is a misty cloud near the ground?', a: ['fog'] }]),

    D(5, '🎨', 'Make a Word Book',
      'Consolidate the four word families (-at, -ig, -un, -og) by making a small book.',
      `<p>Today we will make a small <b>Word Book</b>.</p>

       <h3>How to Make the Book</h3>
       <ol>
         <li>Take 2 sheets of paper.</li>
         <li>Fold them in half.</li>
         <li>Staple the fold.</li>
         <li>You now have a small book!</li>
       </ol>

       <h3>What to Write on Each Page</h3>
       <ul>
         <li>Page 1 (Cover): "My Word Book" + your name.</li>
         <li>Page 2: cat, hat, bat, rat (-at family).</li>
         <li>Page 3: pig, big, dig, wig (-ig family).</li>
         <li>Page 4: sun, run, fun, bun (-un family).</li>
         <li>Page 5: dog, log, fog, jog (-og family).</li>
       </ul>

       <h3>Draw and Label</h3>
       <p>Next to each word, draw a small picture.</p>

       <h3>Show and Tell</h3>
       <p>Read your book aloud to your parent.</p>`,

      [{ heading: 'Exercise 10.1 — Make your word book', items: [
          'Cover with title',
          'Page for -at words',
          'Page for -ig words',
          'Page for -un words',
          'Page for -og words'
        ]},
       { heading: 'Exercise 10.2 — Read aloud', items: [
          'Read each word to your parent.'
        ]}],

      `<p>⭐ for a complete book.</p>`,

      [{ q: 'Which word ends with -ig?', a: ['pig', 'big', 'dig', 'wig'] },
       { q: 'Which word ends with -un?', a: ['sun', 'run', 'fun', 'bun'] },
       { q: 'Which word ends with -og?', a: ['dog', 'log', 'fog', 'jog'] },
       { q: 'Which word ends with -at?', a: ['cat', 'hat', 'bat', 'rat'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR USAGE / WRITING
  // ═══════════════════════════════════════════════════════════════════

  { week: 3, theme: 'First Sentences', days: [

    D(1, '📝', 'I am…',
      'Write simple sentences using the pattern "I am…".',
      `<p class='big-emoji'>🙋 🧒 ✨</p>
       <p>Today we write our very first sentences. A <b>sentence</b> tells a complete idea. It starts with a <b>capital letter</b> and ends with a <b>full stop</b>.</p>

       <h3>The "I am" Pattern</h3>
       <p>We use <b>I am</b> to talk about ourselves.</p>
       <ul>
         <li><b>I am</b> a boy.</li>
         <li><b>I am</b> a girl.</li>
         <li><b>I am</b> happy.</li>
         <li><b>I am</b> six years old.</li>
         <li><b>I am</b> from Ghana.</li>
         <li><b>I am</b> in Class 2.</li>
       </ul>

       <h3>Note</h3>
       <p>When "I" means me, we always write it with a <b>capital letter</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself. Write "I am ___" under your picture.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ happy."</p>
       <p><b>Answer:</b> I <b>am</b> happy.</p>`,

      [{ heading: 'Exercise 11.1 — Write 3 sentences', items: [
          'I am ______.',
          'I am ______.',
          'I am ______.'
        ]},
       { heading: 'Exercise 11.2 — Fill in the blank', items: [
          'I ___ happy.',
          'I ___ a girl.',
          'I ___ six.',
          'I ___ from Ghana.'
        ]},
       { heading: 'Exercise 11.3 — Match the sentence to the picture', items: [
          'I am happy. → 😊',
          'I am sad. → 😢',
          'I am tired. → 😴'
        ]}],

      `<p><b>11.2:</b> 1. am 2. am 3. am 4. am</p>`,

      [{ q: 'Complete: I ___ happy.', a: ['am'] },
       { q: 'Complete: I am a ___.', a: ['boy', 'girl'] },
       { q: 'When is "I" written with a capital letter?', a: ['always', 'when it means me'] }]),

    D(2, '📝', 'This is…',
      'Write simple sentences using the pattern "This is…".',
      `<p class='big-emoji'>📖 ✏️ 🎒</p>
       <p>Today we use <b>This is…</b> to point to one thing.</p>

       <h3>The "This is" Pattern</h3>
       <ul>
         <li><b>This is</b> my book.</li>
         <li><b>This is</b> my pen.</li>
         <li><b>This is</b> my bag.</li>
         <li><b>This is</b> my friend.</li>
         <li><b>This is</b> my school.</li>
         <li><b>This is</b> my house.</li>
       </ul>

       <h3>Note</h3>
       <p>We use <b>this</b> for one thing close to us. For many things, we say <b>these are</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your school bag. Write "This is my bag." under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "This ___ my book."</p>
       <p><b>Answer:</b> This <b>is</b> my book.</p>`,

      [{ heading: 'Exercise 12.1 — Write 3 sentences', items: [
          'This is my ______.',
          'This is my ______.',
          'This is my ______.'
        ]},
       { heading: 'Exercise 12.2 — Fill in the blank', items: [
          'This ___ my book.',
          'This ___ my pen.',
          'This ___ my bag.'
        ]},
       { heading: 'Exercise 12.3 — Point and say', items: [
          'Point to 3 things in your room and say: "This is a ___."'
        ]}],

      `<p><b>12.2:</b> 1. is 2. is 3. is</p>`,

      [{ q: 'Complete: This ___ my book.', a: ['is'] },
       { q: 'What is in your bag?', a: ['any'] }]),

    D(3, '📝', 'I can…',
      'Write simple sentences using the pattern "I can…".',
      `<p class='big-emoji'>🏃 🎤 📖</p>
       <p>Today we use <b>I can…</b> to talk about what we are able to do.</p>

       <h3>The "I can" Pattern</h3>
       <ul>
         <li><b>I can</b> run.</li>
         <li><b>I can</b> jump.</li>
         <li><b>I can</b> sing.</li>
         <li><b>I can</b> read.</li>
         <li><b>I can</b> write.</li>
         <li><b>I can</b> swim.</li>
         <li><b>I can</b> count.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself doing something you can do (running, singing, etc.). Write "I can ___." under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ sing."</p>
       <p><b>Answer:</b> I <b>can</b> sing.</p>`,

      [{ heading: 'Exercise 13.1 — Write 3 sentences', items: [
          'I can ______.',
          'I can ______.',
          'I can ______.'
        ]},
       { heading: 'Exercise 13.2 — Fill in the blank', items: [
          'I ___ sing.',
          'I ___ read.',
          'I ___ jump.',
          'I ___ write.'
        ]},
       { heading: 'Exercise 13.3 — Act it out', items: [
          'Say "I can ___" and do the action for your parent.'
        ]}],

      `<p><b>13.2:</b> 1. can 2. can 3. can 4. can</p>`,

      [{ q: 'Complete: I ___ sing.', a: ['can'] },
       { q: 'What can you do?', a: ['any'] }]),

    D(4, '📝', 'I like…',
      'Write simple sentences using the pattern "I like…".',
      `<p class='big-emoji'>🍚 🥭 👨‍👩‍👧</p>
       <p>Today we use <b>I like…</b> to talk about things that make us happy.</p>

       <h3>The "I like" Pattern</h3>
       <ul>
         <li><b>I like</b> rice.</li>
         <li><b>I like</b> mango.</li>
         <li><b>I like</b> my mum.</li>
         <li><b>I like</b> my school.</li>
         <li><b>I like</b> to play.</li>
         <li><b>I like</b> my friends.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your favourite food. Write "I like ___." under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ rice."</p>
       <p><b>Answer:</b> I <b>like</b> rice.</p>`,

      [{ heading: 'Exercise 14.1 — Write 3 sentences', items: [
          'I like ______.',
          'I like ______.',
          'I like ______.'
        ]},
       { heading: 'Exercise 14.2 — Fill in the blank', items: [
          'I ___ rice.',
          'I ___ mango.',
          'I ___ my mum.'
        ]},
       { heading: 'Exercise 14.3 — Draw and write', items: [
          'Draw your favourite food and write "I like ___."'
        ]}],

      `<p><b>14.2:</b> 1. like 2. like 3. like</p>`,

      [{ q: 'Complete: I ___ rice.', a: ['like'] },
       { q: 'What is your favourite food?', a: ['any'] }]),

    D(5, '🎨', 'My Sentence Poster',
      'Consolidate learning by creating a poster with all four sentence patterns.',
      `<p>Today we put all four sentence patterns together on a beautiful poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"All About Me"</b></li>
         <li>Line 1: I am ______.</li>
         <li>Line 2: This is ______.</li>
         <li>Line 3: I can ______.</li>
         <li>Line 4: I like ______.</li>
         <li>Line 5: I love ______.</li>
         <li>Draw a small picture next to each sentence.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Read your poster aloud to your family.</p>`,

      [{ heading: 'Exercise 15.1 — Draw your poster', items: [
          'I am ___',
          'This is ___',
          'I can ___',
          'I like ___',
          'I love ___'
        ]},
       { heading: 'Exercise 15.2 — Read aloud', items: [
          'Read each sentence to your parent.'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Complete: I ___ happy.', a: ['am'] },
       { q: 'Complete: This ___ my book.', a: ['is'] },
       { q: 'Complete: I ___ sing.', a: ['can'] },
       { q: 'Complete: I ___ rice.', a: ['like'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR USAGE
  // SUB-STRAND: NOUNS
  // ═══════════════════════════════════════════════════════════════════

  { week: 4, theme: 'Naming Words (Nouns)', days: [

    D(1, '👦', 'Naming People',
      'Identify and use nouns that name people.',
      `<p class='big-emoji'>👩 👨 👧 👦 👶 👩‍🏫</p>
       <p>A <b>noun</b> is a word that names a person, place, thing, or animal. Today we focus on <b>nouns that name people</b>.</p>

       <h3>Nouns for People</h3>
       <ul>
         <li>👩 <b>mother</b> (mum)</li>
         <li>👨 <b>father</b> (dad)</li>
         <li>👧 <b>sister</b></li>
         <li>👦 <b>brother</b></li>
         <li>👶 <b>baby</b></li>
         <li>👩‍🏫 <b>teacher</b></li>
         <li>👨‍⚕️ <b>doctor</b></li>
         <li>👮 <b>police officer</b></li>
         <li>👨‍🌾 <b>farmer</b></li>
         <li>🧑‍🏫 <b>friend</b></li>
       </ul>

       <h3>Special Names of People</h3>
       <p>People also have names: <b>Ama</b>, <b>Kofi</b>, <b>Yaw</b>, <b>Akosua</b>. These are also nouns. When we write them, we always start with a <b>capital letter</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 people from your family and write their names under each one.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who is your mother's mother?</p>
       <p><b>Answer:</b> My <b>grandmother</b>.</p>`,

      [{ heading: 'Exercise 16.1 — Write each word 3 times', items: [
          'mother', 'father', 'sister', 'brother', 'teacher'
        ]},
       { heading: 'Exercise 16.2 — Fill in the blank', items: [
          'My ___ teaches me at school.',
          'My ___ takes care of me at home.',
          'My ___ is my father\'s son.',
          'My ___ is my mother\'s daughter.'
        ]},
       { heading: 'Exercise 16.3 — Draw your family', items: [
          'Draw your family and label each person.'
        ]}],

      `<p><b>16.2:</b> 1. teacher 2. mother 3. brother 4. sister</p>`,

      [{ q: 'Who teaches you at school?', a: ['teacher'] },
       { q: 'Who is your mother\'s daughter?', a: ['sister'] },
       { q: 'Who is your father\'s son?', a: ['brother'] },
       { q: 'Name 3 people in your family.', a: ['mother', 'father', 'sister', 'brother', 'any'] }]),

    D(2, '🏠', 'Naming Places',
      'Identify and use nouns that name places.',
      `<p class='big-emoji'>🏠 🏫 🏪 ⛪ 🏥 🌾</p>
       <p>Today we focus on <b>nouns that name places</b>.</p>

       <h3>Nouns for Places</h3>
       <ul>
         <li>🏠 <b>home</b> — where we live.</li>
         <li>🏫 <b>school</b> — where we learn.</li>
         <li>🏪 <b>market</b> — where we buy and sell.</li>
         <li>⛪ <b>church</b> / 🕌 <b>mosque</b> — where we worship.</li>
         <li>🏥 <b>hospital</b> — where sick people are treated.</li>
         <li>🌾 <b>farm</b> — where crops are grown.</li>
         <li>🏞️ <b>village</b> — a small community.</li>
         <li>🏙️ <b>city</b> — a large town.</li>
       </ul>

       <h3>Special Names of Places</h3>
       <p>Some places have special names: <b>Accra</b>, <b>Kumasi</b>, <b>Tamale</b>, <b>Ghana</b>. These are also nouns. Always start them with a <b>capital letter</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your school. Write "My school" under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where do sick people go?</p>
       <p><b>Answer:</b> Sick people go to the <b>hospital</b>.</p>`,

      [{ heading: 'Exercise 17.1 — Write each word 3 times', items: [
          'home', 'school', 'market', 'church', 'hospital', 'farm'
        ]},
       { heading: 'Exercise 17.2 — Fill in the blank', items: [
          'I learn at ______.',
          'We buy food at the ______.',
          'Sick people go to the ______.',
          'Farmers work on a ______.'
        ]},
       { heading: 'Exercise 17.3 — Draw a place you like', items: [
          'Draw your favourite place and write its name.'
        ]}],

      `<p><b>17.2:</b> 1. school 2. market 3. hospital 4. farm</p>`,

      [{ q: 'Where do you learn?', a: ['school'] },
       { q: 'Where do you buy food?', a: ['market'] },
       { q: 'Where do farmers work?', a: ['farm'] },
       { q: 'Name 3 places in your village.', a: ['school', 'market', 'church', 'hospital', 'any'] }]),

    D(3, '🐕', 'Naming Animals',
      'Identify and use nouns that name animals.',
      `<p class='big-emoji'>🐕 🐈 🐐 🐄 🐓 🐦</p>
       <p>Today we focus on <b>nouns that name animals</b>.</p>

       <h3>Nouns for Animals</h3>
       <ul>
         <li>🐕 <b>dog</b></li>
         <li>🐈 <b>cat</b></li>
         <li>🐐 <b>goat</b></li>
         <li>🐄 <b>cow</b></li>
         <li>🐓 <b>hen</b></li>
         <li>🐦 <b>bird</b></li>
         <li>🐟 <b>fish</b></li>
         <li>🐘 <b>elephant</b></li>
         <li>🦁 <b>lion</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 animals. Write their names under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which animal says "moo"?</p>
       <p><b>Answer:</b> A <b>cow</b>.</p>`,

      [{ heading: 'Exercise 18.1 — Write each word 3 times', items: [
          'dog', 'cat', 'goat', 'cow', 'hen', 'bird'
        ]},
       { heading: 'Exercise 18.2 — Match the animal to its sound', items: [
          'dog → woof',
          'cow → moo',
          'hen → cluck',
          'cat → meow'
        ]},
       { heading: 'Exercise 18.3 — Draw your favourite animal', items: [
          'Draw your favourite animal and write its name.'
        ]}],

      `<p><b>18.2:</b> dog → woof; cow → moo; hen → cluck; cat → meow</p>`,

      [{ q: 'Which animal says "moo"?', a: ['cow'] },
       { q: 'Which animal says "woof"?', a: ['dog'] },
       { q: 'Which animal says "meow"?', a: ['cat'] },
       { q: 'Name 3 animals.', a: ['dog', 'cat', 'cow', 'goat', 'any'] }]),

    D(4, '📚', 'Naming Things',
      'Identify and use nouns that name things.',
      `<p class='big-emoji'>📕 🖊️ 🎒 🥤 🥄 🪑</p>
       <p>Today we focus on <b>nouns that name things</b>. Things can be seen and touched.</p>

       <h3>Nouns for Things</h3>
       <ul>
         <li>📕 <b>book</b></li>
         <li>🖊️ <b>pen</b></li>
         <li>✏️ <b>pencil</b></li>
         <li>🎒 <b>bag</b></li>
         <li>🥤 <b>cup</b></li>
         <li>🥄 <b>spoon</b></li>
         <li>🪑 <b>chair</b></li>
         <li>🛏️ <b>bed</b></li>
         <li>⌚ <b>watch</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 things in your classroom. Write their names under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you write with?</p>
       <p><b>Answer:</b> I write with a <b>pen</b> or a <b>pencil</b>.</p>`,

      [{ heading: 'Exercise 19.1 — Write each word 3 times', items: [
          'book', 'pen', 'bag', 'cup', 'spoon', 'chair'
        ]},
       { heading: 'Exercise 19.2 — Fill in the blank', items: [
          'I write with a ______.',
          'I drink from a ______.',
          'I eat with a ______.',
          'I sit on a ______.'
        ]},
       { heading: 'Exercise 19.3 — Draw three things and label them', items: [
          'Draw 3 things you use every day. Write their names.'
        ]}],

      `<p><b>19.2:</b> 1. pen (or pencil) 2. cup 3. spoon 4. chair</p>`,

      [{ q: 'What do you write with?', a: ['pen', 'pencil'] },
       { q: 'What do you drink from?', a: ['cup'] },
       { q: 'What do you sit on?', a: ['chair'] },
       { q: 'Name 3 things in your classroom.', a: ['book', 'pen', 'chair', 'any'] }]),

    D(5, '🎨', 'Naming Words Poster',
      'Consolidate learning by creating a poster with nouns from all four groups.',
      `<p>Today we make a "Naming Words" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Naming Words"</b></li>
         <li>Section 1: 2 people (e.g. mother, teacher).</li>
         <li>Section 2: 2 places (e.g. school, market).</li>
         <li>Section 3: 2 animals (e.g. dog, cow).</li>
         <li>Section 4: 2 things (e.g. book, cup).</li>
         <li>Write the name under each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster to your parent. Say each word and what it names.</p>`,

      [{ heading: 'Exercise 20.1 — Draw your poster', items: [
          '2 people',
          '2 places',
          '2 animals',
          '2 things'
        ]},
       { heading: 'Exercise 20.2 — Read aloud', items: [
          'Read each word aloud to your parent.'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name a person.', a: ['mother', 'father', 'teacher', 'any'] },
       { q: 'Name a place.', a: ['school', 'market', 'any'] },
       { q: 'Name an animal.', a: ['dog', 'cat', 'cow', 'any'] },
       { q: 'Name a thing.', a: ['book', 'cup', 'chair', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR USAGE — Verbs
  // ═══════════════════════════════════════════════════════════════════

  { week: 5, theme: 'Action Words (Verbs)', days: [

    D(1, '🏃', 'Run & Jump',
      'Identify and use action verbs that describe movement.',
      `<p class='big-emoji'>🏃 🤸 🚶 🧍</p>
       <p>A <b>verb</b> is a word that shows action. Today we focus on verbs of <b>movement</b>.</p>

       <h3>Movement Verbs</h3>
       <ul>
         <li>🏃 <b>run</b> — move very fast on foot.</li>
         <li>🤸 <b>jump</b> — push off the ground into the air.</li>
         <li>🚶 <b>walk</b> — move slowly on foot.</li>
         <li>🧍 <b>stand</b> — be on your feet.</li>
         <li>🪑 <b>sit</b> — rest on a chair or the floor.</li>
         <li>⚽ <b>play</b> — do something for fun.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 pictures: a child running, a child jumping, and a child walking. Write the verb under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do with your legs to move fast?</p>
       <p><b>Answer:</b> I <b>run</b>.</p>`,

      [{ heading: 'Exercise 21.1 — Say and do', items: [
          'Run on the spot.',
          'Jump 5 times.',
          'Walk slowly around the room.',
          'Sit down.',
          'Stand up.',
          'Play with a ball.'
        ]},
       { heading: 'Exercise 21.2 — Fill in the blank', items: [
          'I ___ to school.',
          'I ___ with my friends.',
          'I ___ on the chair.',
          'I ___ very fast.'
        ]},
       { heading: 'Exercise 21.3 — Draw and label', items: [
          'Draw yourself running. Write "I run." under it.'
        ]}],

      `<p><b>21.2:</b> 1. walk (or run) 2. play 3. sit 4. run</p>`,

      [{ q: 'What do you do with your legs to move fast?', a: ['run'] },
       { q: 'What do you do with a ball?', a: ['play'] },
       { q: 'What do you do on a chair?', a: ['sit'] },
       { q: 'Name 3 movement verbs.', a: ['run', 'jump', 'walk', 'any'] }]),

    D(2, '🍽️', 'Eat & Drink',
      'Identify and use action verbs related to daily activities.',
      `<p class='big-emoji'>🍽️ 🥤 👨‍🍳 🛏️</p>
       <p>Today we learn verbs we use every day.</p>

       <h3>Daily Activity Verbs</h3>
       <ul>
         <li>🍽️ <b>eat</b> — put food in your mouth.</li>
         <li>🥤 <b>drink</b> — swallow a liquid.</li>
         <li>👨‍🍳 <b>cook</b> — prepare food with heat.</li>
         <li>🧼 <b>wash</b> — clean with water.</li>
         <li>🛏️ <b>sleep</b> — rest with your eyes closed.</li>
         <li>🌅 <b>wake</b> — open your eyes after sleeping.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pictures: eating, drinking, sleeping, waking up. Write the verb under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do with food?</p>
       <p><b>Answer:</b> I <b>eat</b> it.</p>`,

      [{ heading: 'Exercise 22.1 — Say and act', items: [
          'Pretend to eat rice.',
          'Pretend to drink water.',
          'Pretend to cook food.',
          'Pretend to wash your hands.',
          'Pretend to sleep.',
          'Pretend to wake up.'
        ]},
       { heading: 'Exercise 22.2 — Fill in the blank', items: [
          'I ___ rice every day.',
          'I ___ water when I am thirsty.',
          'I ___ at night.',
          'I ___ my hands before eating.'
        ]},
       { heading: 'Exercise 22.3 — Draw and label', items: [
          'Draw yourself eating. Write "I eat." under it.'
        ]}],

      `<p><b>22.2:</b> 1. eat 2. drink 3. sleep 4. wash</p>`,

      [{ q: 'What do you do with food?', a: ['eat'] },
       { q: 'What do you do at night?', a: ['sleep'] },
       { q: 'What do you do with water?', a: ['drink'] }]),

    D(3, '🗣️', 'Talk & Sing',
      'Identify and use action verbs related to communication and learning.',
      `<p class='big-emoji'>🗣️ 🎤 📖 ✍️</p>
       <p>Today we learn verbs about talking, learning, and creating.</p>

       <h3>Communication & Learning Verbs</h3>
       <ul>
         <li>🗣️ <b>talk</b> — speak to someone.</li>
         <li>🎤 <b>sing</b> — make music with your voice.</li>
         <li>📖 <b>read</b> — look at words and understand them.</li>
         <li>✍️ <b>write</b> — make letters with a pen or pencil.</li>
         <li>🎨 <b>draw</b> — make a picture.</li>
         <li>👂 <b>listen</b> — pay attention to a sound.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pictures: talking, singing, reading, writing. Write the verb under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do with a book?</p>
       <p><b>Answer:</b> I <b>read</b> it.</p>`,

      [{ heading: 'Exercise 23.1 — Say and do', items: [
          'Talk to your parent.',
          'Sing a short song.',
          'Read a sentence from your book.',
          'Write your name.',
          'Draw a small picture.',
          'Listen carefully to a sound.'
        ]},
       { heading: 'Exercise 23.2 — Fill in the blank', items: [
          'I ___ a book.',
          'I ___ a letter.',
          'I ___ a song.',
          'I ___ to my friend.'
        ]},
       { heading: 'Exercise 23.3 — Draw and label', items: [
          'Draw yourself reading. Write "I read." under it.'
        ]}],

      `<p><b>23.2:</b> 1. read 2. write 3. sing 4. talk</p>`,

      [{ q: 'What do you do with a book?', a: ['read'] },
       { q: 'What do you do with a pencil?', a: ['write', 'draw'] },
       { q: 'What do you do with your voice?', a: ['sing', 'talk'] }]),

    D(4, '🧹', 'Help at Home',
      'Identify and use action verbs for helping at home.',
      `<p class='big-emoji'>🧹 🧼 📦 🚪</p>
       <p>Today we learn verbs for helping at home. Helping is good!</p>

       <h3>Helping Verbs</h3>
       <ul>
         <li>🧹 <b>sweep</b> — clean the floor with a broom.</li>
         <li>🧼 <b>clean</b> — remove dirt.</li>
         <li>🤝 <b>help</b> — do something for someone.</li>
         <li>📦 <b>carry</b> — take something from one place to another.</li>
         <li>🚪 <b>open</b> — move something so it is not closed.</li>
         <li>🚪 <b>close</b> — shut something.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 ways you help at home. Write the verb under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you do with a broom?</p>
       <p><b>Answer:</b> I <b>sweep</b> the floor.</p>`,

      [{ heading: 'Exercise 24.1 — Do it', items: [
          'Sweep the floor.',
          'Clean the table.',
          'Help your mother.',
          'Carry your bag.',
          'Open the door.',
          'Close the door.'
        ]},
       { heading: 'Exercise 24.2 — Fill in the blank', items: [
          'I ___ the floor.',
          'I ___ my mother.',
          'I ___ the door.',
          'I ___ my bag.'
        ]},
       { heading: 'Exercise 24.3 — Draw and label', items: [
          'Draw yourself helping at home. Write "I help." under it.'
        ]}],

      `<p><b>24.2:</b> 1. sweep 2. help 3. open (or close) 4. carry</p>`,

      [{ q: 'What do you do with a broom?', a: ['sweep'] },
       { q: 'What do you do with a door?', a: ['open', 'close'] },
       { q: 'Name 3 ways to help at home.', a: ['sweep', 'clean', 'help', 'any'] }]),

    D(5, '🎨', 'Action Words Poster',
      'Consolidate learning about verbs.',
      `<p>Today we make an "Action Words" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Action Words"</b></li>
         <li>Draw 6 pictures showing actions: run, jump, eat, sleep, read, sweep.</li>
         <li>Write the verb under each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each verb and act it out.</p>`,

      [{ heading: 'Exercise 25.1 — Draw your action poster', items: [
          'run', 'jump', 'eat', 'sleep', 'read', 'sweep'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Give an action word.', a: ['run', 'jump', 'eat', 'any'] },
       { q: 'What does "sweep" mean?', a: ['clean the floor', 'any'] },
       { q: 'What does "read" mean?', a: ['look at words', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: READING / ORAL LANGUAGE — Colours & Shapes
  // ═══════════════════════════════════════════════════════════════════

  { week: 6, theme: 'Colours & Shapes', days: [

    D(1, '🌈', 'Colours',
      'Identify and name the basic colours.',
      `<p class='big-emoji'>🔴 🟠 🟡 🟢 🔵 🟣</p>
       <p>Colours are all around us. Let's learn their names in English.</p>

       <h3>Basic Colours</h3>
       <ul>
         <li>🔴 <b>red</b> — like a ripe tomato.</li>
         <li>🟠 <b>orange</b> — like an orange fruit.</li>
         <li>🟡 <b>yellow</b> — like a banana.</li>
         <li>🟢 <b>green</b> — like grass.</li>
         <li>🔵 <b>blue</b> — like the sky.</li>
         <li>🟣 <b>purple</b> — like some flowers.</li>
         <li>⚫ <b>black</b> — like charcoal.</li>
         <li>⚪ <b>white</b> — like milk.</li>
         <li>🟤 <b>brown</b> — like soil.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 6 circles in a row. Colour them: red, orange, yellow, green, blue, purple.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What colour is a banana?</p>
       <p><b>Answer:</b> A banana is <b>yellow</b>.</p>`,

      [{ heading: 'Exercise 26.1 — Say and find', items: [
          'Find something red in your home.',
          'Find something blue.',
          'Find something yellow.',
          'Find something green.',
          'Find something orange.',
          'Find something purple.'
        ]},
       { heading: 'Exercise 26.2 — Fill in the blank', items: [
          'A tomato is ______.',
          'The sky is ______.',
          'Grass is ______.',
          'Milk is ______.'
        ]},
       { heading: 'Exercise 26.3 — Draw and label', items: [
          'Draw 3 fruits and colour them correctly.'
        ]}],

      `<p><b>26.2:</b> 1. red 2. blue 3. green 4. white</p>`,

      [{ q: 'What colour is a banana?', a: ['yellow'] },
       { q: 'What colour is grass?', a: ['green'] },
       { q: 'What colour is the sky?', a: ['blue'] },
       { q: 'Name 3 colours.', a: ['red', 'blue', 'yellow', 'any'] }]),

    D(2, '⬛', 'Shapes',
      'Identify and name basic shapes.',
      `<p class='big-emoji'>⚪ ⬛ 🔺 ▬ ⭐ ❤️</p>
       <p>Shapes are all around us. Let's learn their names.</p>

       <h3>Basic Shapes</h3>
       <ul>
         <li>⚪ <b>circle</b> — round, like a ball or the sun.</li>
         <li>⬛ <b>square</b> — 4 equal sides.</li>
         <li>🔺 <b>triangle</b> — 3 sides.</li>
         <li>▬ <b>rectangle</b> — 4 sides, but 2 are longer.</li>
         <li>⭐ <b>star</b> — 5 points.</li>
         <li>❤️ <b>heart</b> — the shape of love.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 6 shapes in a row: circle, square, triangle, rectangle, star, heart.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many sides does a triangle have?</p>
       <p><b>Answer:</b> A triangle has <b>3 sides</b>.</p>`,

      [{ heading: 'Exercise 27.1 — Say and find', items: [
          'Find a circle in your home.',
          'Find a square.',
          'Find a triangle.',
          'Find a rectangle.',
          'Find a star.',
          'Find a heart.'
        ]},
       { heading: 'Exercise 27.2 — Answer', items: [
          'How many sides does a triangle have?',
          'How many sides does a square have?',
          'What shape is a ball?',
          'What shape is a book?'
        ]},
       { heading: 'Exercise 27.3 — Draw and label', items: [
          'Draw a house using a square and a triangle.'
        ]}],

      `<p><b>27.2:</b> 1. 3 2. 4 3. circle 4. rectangle</p>`,

      [{ q: 'How many sides does a triangle have?', a: ['3', 'three'] },
       { q: 'How many sides does a square have?', a: ['4', 'four'] },
       { q: 'What shape is a ball?', a: ['circle'] },
       { q: 'What shape has 5 points?', a: ['star'] }]),

    D(3, '🎨', 'Colour Mixing',
      'Learn how primary colours mix to make secondary colours.',
      `<p class='big-emoji'>🔴+🟡=🟠 🔵+🟡=🟢 🔴+🔵=🟣</p>
       <p>When we mix two colours, we can make a new colour.</p>

       <h3>Colour Mixing</h3>
       <ul>
         <li>🔴 Red + 🟡 Yellow = 🟠 <b>Orange</b></li>
         <li>🔵 Blue + 🟡 Yellow = 🟢 <b>Green</b></li>
         <li>🔴 Red + 🔵 Blue = 🟣 <b>Purple</b></li>
       </ul>

       <h3>Try It!</h3>
       <p>If you have crayons or paints, try mixing these colours. If you don't, imagine them!</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 pairs of circles. Show the two colours that mix together, then draw the new colour they make.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What colour do you get when you mix red and yellow?</p>
       <p><b>Answer:</b> You get <b>orange</b>.</p>`,

      [{ heading: 'Exercise 28.1 — Answer', items: [
          'Red + Yellow = ?',
          'Blue + Yellow = ?',
          'Red + Blue = ?'
        ]},
       { heading: 'Exercise 28.2 — Draw', items: [
          'Draw the colour-mixing chart.'
        ]}],

      `<p><b>28.1:</b> 1. Orange 2. Green 3. Purple</p>`,

      [{ q: 'Red + Yellow = ?', a: ['orange'] },
       { q: 'Blue + Yellow = ?', a: ['green'] },
       { q: 'Red + Blue = ?', a: ['purple'] }]),

    D(4, '🖍️', 'Colour Sentences',
      'Write sentences using colour words.',
      `<p class='big-emoji'>✍️ 🎨 📝</p>
       <p>Today we write sentences about colours.</p>

       <h3>Sentence Patterns</h3>
       <ul>
         <li>The apple is <b>red</b>.</li>
         <li>The sky is <b>blue</b>.</li>
         <li>The leaf is <b>green</b>.</li>
         <li>The sun is <b>yellow</b>.</li>
         <li>The soil is <b>brown</b>.</li>
         <li>The milk is <b>white</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 things and colour them. Write one sentence under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The apple is ___."</p>
       <p><b>Answer:</b> The apple is <b>red</b>.</p>`,

      [{ heading: 'Exercise 29.1 — Write 3 sentences', items: [
          'The ______ is ______.',
          'The ______ is ______.',
          'The ______ is ______.'
        ]},
       { heading: 'Exercise 29.2 — Fill in the blank', items: [
          'The apple is ______.',
          'The sky is ______.',
          'Grass is ______.',
          'Milk is ______.'
        ]},
       { heading: 'Exercise 29.3 — Draw and label', items: [
          'Draw a red apple, a yellow banana, and a green leaf.'
        ]}],

      `<p><b>29.2:</b> 1. red 2. blue 3. green 4. white</p>`,

      [{ q: 'Complete: The apple is ___.', a: ['red'] },
       { q: 'Complete: The sky is ___.', a: ['blue'] },
       { q: 'Complete: The leaf is ___.', a: ['green'] }]),

    D(5, '🌈', 'Rainbow Poster',
      'Consolidate learning about colours and shapes.',
      `<p>Today we draw a rainbow and learn the colours in it.</p>

       <h3>Colours of the Rainbow</h3>
       <p>Red, Orange, Yellow, Green, Blue, Indigo, Violet. (We can remember: <b>ROY G BIV</b>.)</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Draw a big rainbow with 6 arcs.</li>
         <li>Colour each arc: red (outside), orange, yellow, green, blue, purple (inside).</li>
         <li>Draw clouds at the bottom of the rainbow.</li>
         <li>Write the colours below each arc.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your rainbow to your family and name each colour.</p>`,

      [{ heading: 'Exercise 30.1 — Draw your rainbow', items: [
          'Red',
          'Orange',
          'Yellow',
          'Green',
          'Blue',
          'Purple'
        ]}],

      `<p>⭐ for a colourful rainbow.</p>`,

      [{ q: 'Name the colours of the rainbow.', a: ['red orange yellow green blue purple', 'any'] },
       { q: 'What is the first colour of the rainbow?', a: ['red'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Numbers in English
  // ═══════════════════════════════════════════════════════════════════

  { week: 7, theme: 'Numbers in English', days: [

    D(1, '1️⃣', 'Numbers 1–5',
      'Read, write, and spell numbers from 1 to 5.',
      `<p class='big-emoji'>1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣</p>
       <p>Let's learn numbers in words.</p>

       <h3>Numbers and Their Words</h3>
       <ul>
         <li>1 = <b>one</b></li>
         <li>2 = <b>two</b></li>
         <li>3 = <b>three</b></li>
         <li>4 = <b>four</b></li>
         <li>5 = <b>five</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes. In box 1, draw one apple; box 2, two balls; box 3, three stars; box 4, four flowers; box 5, five hearts.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you write 3 in words?</p>
       <p><b>Answer:</b> <b>three</b>.</p>`,

      [{ heading: 'Exercise 31.1 — Say and write', items: ['one', 'two', 'three', 'four', 'five'] },
       { heading: 'Exercise 31.2 — Write in words', items: ['1 → ___', '2 → ___', '3 → ___', '4 → ___', '5 → ___'] },
       { heading: 'Exercise 31.3 — Count and write', items: [
          'Count: 🍎🍎🍎 → (three)',
          'Count: ⭐⭐ → (two)',
          'Count: 🐟🐟🐟🐟 → (four)'
        ]}],

      `<p><b>31.2:</b> 1. one 2. two 3. three 4. four 5. five</p>`,

      [{ q: 'How do you write 3 in words?', a: ['three'] },
       { q: 'How do you write 5 in words?', a: ['five'] },
       { q: 'How do you write 1 in words?', a: ['one'] }]),

    D(2, '6️⃣', 'Numbers 6–10',
      'Read, write, and spell numbers from 6 to 10.',
      `<p class='big-emoji'>6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟</p>

       <h3>Numbers and Their Words</h3>
       <ul>
         <li>6 = <b>six</b></li>
         <li>7 = <b>seven</b></li>
         <li>8 = <b>eight</b></li>
         <li>9 = <b>nine</b></li>
         <li>10 = <b>ten</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 boxes with 6, 7, 8, 9, and 10 items. Write the number and word below.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you write 7 in words?</p>
       <p><b>Answer:</b> <b>seven</b>.</p>`,

      [{ heading: 'Exercise 32.1 — Say and write', items: ['six', 'seven', 'eight', 'nine', 'ten'] },
       { heading: 'Exercise 32.2 — Write in words', items: ['6 → ___', '7 → ___', '8 → ___', '9 → ___', '10 → ___'] },
       { heading: 'Exercise 32.3 — Count and write', items: [
          'Count: 🐟🐟🐟🐟🐟🐟 → (six)',
          'Count: 🌟🌟🌟🌟🌟🌟🌟 → (seven)',
          'Count: 🍎🍎🍎🍎🍎🍎🍎🍎 → (eight)'
        ]}],

      `<p><b>32.2:</b> 1. six 2. seven 3. eight 4. nine 5. ten</p>`,

      [{ q: 'How do you write 7 in words?', a: ['seven'] },
       { q: 'How do you write 10 in words?', a: ['ten'] },
       { q: 'How do you write 6 in words?', a: ['six'] }]),

    D(3, '🔢', 'Counting Things',
      'Count objects and write the number and the word.',
      `<p class='big-emoji'>🔢 🖐️ ✋</p>

       <h3>Counting Practice</h3>
       <p>We count things all the time. Let's count!</p>

       <h3>How Many?</h3>
       <ul>
         <li>🖐️ Fingers on one hand = <b>five</b></li>
         <li>✋🖐️ Fingers on two hands = <b>ten</b></li>
         <li>🦶 Toes on one foot = <b>five</b></li>
         <li>🦶🦶 Toes on two feet = <b>ten</b></li>
         <li>👀 Eyes = <b>two</b></li>
         <li>👂 Ears = <b>two</b></li>
         <li>👃 Nose = <b>one</b></li>
         <li>👄 Mouth = <b>one</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your two hands with all fingers spread out. Write "ten" under them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many fingers do you have in total?</p>
       <p><b>Answer:</b> <b>Ten</b> fingers.</p>`,

      [{ heading: 'Exercise 33.1 — Count and write', items: [
          'Count 5 stones: ___',
          'Count 8 spoons: ___',
          'Count 10 fingers: ___',
          'Count 3 chairs: ___'
        ]},
       { heading: 'Exercise 33.2 — Answer', items: [
          'How many fingers do you have?',
          'How many eyes do you have?',
          'How many toes do you have?'
        ]},
       { heading: 'Exercise 33.3 — Draw', items: [
          'Draw 4 balls and write "four" under them.'
        ]}],

      `<p><b>33.1:</b> 1. five 2. eight 3. ten 4. three</p>
       <p><b>33.2:</b> 1. ten 2. two 3. ten</p>`,

      [{ q: 'How many fingers do you have?', a: ['10', 'ten'] },
       { q: 'How many eyes do you have?', a: ['2', 'two'] },
       { q: 'How many toes do you have?', a: ['10', 'ten'] }]),

    D(4, '📝', 'Number Sentences',
      'Write sentences using number words.',
      `<p class='big-emoji'>✍️ 📝 🔢</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I have <b>two</b> eyes.</li>
         <li>I have <b>ten</b> toes.</li>
         <li>I have <b>five</b> fingers on one hand.</li>
         <li>My class has <b>thirty</b> pupils. (We will learn bigger numbers later.)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your face. Write "I have two eyes." under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I have ___ eyes."</p>
       <p><b>Answer:</b> I have <b>two</b> eyes.</p>`,

      [{ heading: 'Exercise 34.1 — Write 3 sentences', items: [
          'I have ______.',
          'I have ______.',
          'I have ______.'
        ]},
       { heading: 'Exercise 34.2 — Fill in the blank', items: [
          'I have ___ eyes.',
          'I have ___ toes.',
          'I have ___ fingers.',
          'I have ___ nose.'
        ]},
       { heading: 'Exercise 34.3 — Draw', items: [
          'Draw yourself. Write "I have ___ eyes and ___ ears."'
        ]}],

      `<p><b>34.2:</b> 1. two 2. ten 3. ten 4. one</p>`,

      [{ q: 'Complete: I have ___ eyes.', a: ['two', '2'] },
       { q: 'Complete: I have ___ toes.', a: ['ten', '10'] },
       { q: 'Complete: I have ___ nose.', a: ['one', '1'] }]),

    D(5, '🎨', 'Number Poster',
      'Consolidate learning about numbers 1–10.',
      `<p>Today we make a number poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Numbers 1–10"</b></li>
         <li>Draw 10 boxes in 2 rows of 5.</li>
         <li>In each box, write the number and draw that many items.</li>
         <li>Write the word under each number.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each number in English.</p>`,

      [{ heading: 'Exercise 35.1 — Draw your number poster', items: [
          '1 – one',
          '2 – two',
          '3 – three',
          '4 – four',
          '5 – five',
          '6 – six',
          '7 – seven',
          '8 – eight',
          '9 – nine',
          '10 – ten'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'How do you write 8 in words?', a: ['eight'] },
       { q: 'How do you write 9 in words?', a: ['nine'] },
       { q: 'How do you write 4 in words?', a: ['four'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: READING — Story Time
  // ═══════════════════════════════════════════════════════════════════

  { week: 8, theme: 'Story Time', days: [

    D(1, '📖', 'The Little Red Hen',
      'Listen to and retell a simple story.',
      `<p class='big-emoji'>🐔 🌾 🍞</p>
       <p>Today we will read a famous story.</p>

       <h3>The Little Red Hen</h3>
       <p>Once upon a time, a little red hen found some grains of wheat.</p>
       <p>"Who will help me plant this wheat?" she asked.</p>
       <p>"Not I," said the cat.</p>
       <p>"Not I," said the dog.</p>
       <p>"Not I," said the duck.</p>
       <p>"Then I will plant it myself," said the little red hen. And she did.</p>
       <p>When the wheat grew, she asked again: "Who will help me cut the wheat?"</p>
       <p>"Not I," said the cat, the dog, and the duck.</p>
       <p>"Then I will cut it myself," said the hen. And she did.</p>
       <p>She made flour. She baked bread. And each time she asked, the animals said "Not I."</p>
       <p>When the bread was ready, she asked: "Who will help me eat this bread?"</p>
       <p>"I will!" said the cat. "I will!" said the dog. "I will!" said the duck.</p>
       <p>"No," said the little red hen. "I will eat it myself." And she did.</p>

       <h3>Moral of the Story</h3>
       <p>If you do not help with the work, you should not share the reward.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the little red hen with a loaf of bread. Colour the hen red.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who helped the little red hen?</p>
       <p><b>Answer:</b> <b>Nobody</b> helped her. She did all the work herself.</p>`,

      [{ heading: 'Exercise 36.1 — Answer', items: [
          'Who found the wheat?',
          'Who did not help?',
          'Who ate the bread?',
          'What is the lesson of the story?'
        ]},
       { heading: 'Exercise 36.2 — Retell the story', items: [
          'Tell the story in your own words to your parent.'
        ]}],

      `<p><b>36.1:</b> 1. The little red hen. 2. The cat, dog, and duck. 3. The hen. 4. If you don\'t help with work, you shouldn\'t share the reward.</p>`,

      [{ q: 'Who found the wheat?', a: ['the little red hen', 'hen'] },
       { q: 'Who ate the bread?', a: ['the hen', 'hen'] },
       { q: 'Who did not help?', a: ['cat', 'dog', 'duck', 'any'] }]),

    D(2, '📖', 'The Tortoise and the Hare',
      'Listen to and retell a story that teaches a lesson.',
      `<p class='big-emoji'>🐢 🐇 🏁</p>

       <h3>The Tortoise and the Hare</h3>
       <p>Once upon a time, a hare laughed at a tortoise for being so slow.</p>
       <p>"I may be slow," said the tortoise, "but I can beat you in a race."</p>
       <p>The hare laughed. "You? Beat me? Ha!"</p>
       <p>They agreed to have a race. The fox blew a whistle, and the race began.</p>
       <p>The hare ran very fast and quickly got far ahead. Then he thought, "The tortoise is so slow. I have plenty of time. I will take a nap under this tree."</p>
       <p>The hare fell asleep. The tortoise kept walking — slowly, slowly, slowly. He passed the sleeping hare.</p>
       <p>When the hare woke up, he saw the tortoise near the finish line. He ran as fast as he could, but it was too late. The tortoise won the race!</p>

       <h3>Moral of the Story</h3>
       <p>Slow and steady wins the race. Never be too proud.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the tortoise at the finish line holding a flag. Draw the hare running behind, looking surprised.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Why did the tortoise win the race?</p>
       <p><b>Answer:</b> Because he kept going <b>slowly and steadily</b> without stopping.</p>`,

      [{ heading: 'Exercise 37.1 — Answer', items: [
          'Who was fast?',
          'Who was slow?',
          'Who won the race?',
          'What did the hare do during the race?',
          'What is the lesson of the story?'
        ]},
       { heading: 'Exercise 37.2 — Retell the story', items: [
          'Retell the story in your own words.'
        ]}],

      `<p><b>37.1:</b> 1. The hare. 2. The tortoise. 3. The tortoise. 4. He took a nap. 5. Slow and steady wins the race.</p>`,

      [{ q: 'Who won the race?', a: ['the tortoise', 'tortoise'] },
       { q: 'Who took a nap?', a: ['the hare', 'hare'] },
       { q: 'What is the lesson?', a: ['slow and steady wins the race', 'any'] }]),

    D(3, '📖', 'The Boy Who Cried Wolf',
      'Listen to and retell a story that teaches about honesty.',
      `<p class='big-emoji'>🐺 👦 🐑</p>

       <h3>The Boy Who Cried Wolf</h3>
       <p>Once, there was a young shepherd boy who watched his sheep on a hill near the village.</p>
       <p>One day, he felt bored. He shouted, "Wolf! Wolf! A wolf is coming!"</p>
       <p>The villagers ran up the hill to help him. When they arrived, they saw no wolf. The boy laughed. "I was only joking!"</p>
       <p>The villagers were angry, but they went back to their work.</p>
       <p>The next day, the boy did it again. "Wolf! Wolf!" he shouted.</p>
       <p>Once again, the villagers ran up the hill. Once again, there was no wolf. They were very angry.</p>
       <p>The third day, a real wolf came. "Wolf! Wolf!" the boy cried.</p>
       <p>But this time, nobody believed him. Nobody came. The wolf ate the sheep.</p>

       <h3>Moral of the Story</h3>
       <p>If you tell lies, people will not believe you when you tell the truth.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw the boy shouting "Wolf! Wolf!" and the villagers below looking up at him.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did the boy shout?</p>
       <p><b>Answer:</b> He shouted "Wolf! Wolf!"</p>`,

      [{ heading: 'Exercise 38.1 — Answer', items: [
          'What did the boy do on the first day?',
          'Was there a real wolf the first time?',
          'Was there a real wolf the third time?',
          'What happened to the sheep?',
          'What is the lesson of the story?'
        ]},
       { heading: 'Exercise 38.2 — Retell the story', items: [
          'Tell the story in your own words.'
        ]}],

      `<p><b>38.1:</b> 1. He shouted "Wolf! Wolf!" 2. No. 3. Yes. 4. The wolf ate them. 5. Do not tell lies.</p>`,

      [{ q: 'What did the boy shout?', a: ['wolf', 'wolf! wolf!'] },
       { q: 'Did people believe him at the end?', a: ['no'] },
       { q: 'What is the lesson?', a: ['do not tell lies', 'any'] }]),

    D(4, '📖', 'Goldilocks and the Three Bears',
      'Listen to and retell a simple story.',
      `<p class='big-emoji'>👧 🐻 🥣 🛏️</p>

       <h3>Goldilocks and the Three Bears</h3>
       <p>Once upon a time, there were three bears: a Papa Bear, a Mama Bear, and a Baby Bear. They lived in a small cottage in the forest.</p>
       <p>One morning, they went for a walk while their porridge cooled.</p>
       <p>A little girl named Goldilocks was walking in the forest. She saw the cottage and went inside.</p>
       <p>She saw three bowls of porridge. The Papa Bear's porridge was too hot. The Mama Bear's porridge was too cold. The Baby Bear's porridge was just right. She ate it all up!</p>
       <p>Then she saw three chairs. The Papa Bear's chair was too big. The Mama Bear's chair was also too big. The Baby Bear's chair was just right, but she broke it!</p>
       <p>She went upstairs and saw three beds. The Papa Bear's bed was too hard. The Mama Bear's bed was too soft. The Baby Bear's bed was just right. She fell asleep.</p>
       <p>When the bears came home, they saw their porridge was eaten, their chairs moved, and the Baby Bear's chair broken. Then they found Goldilocks asleep in Baby Bear's bed.</p>
       <p>Goldilocks woke up, saw the bears, and ran away. She never came back.</p>

       <h3>Moral of the Story</h3>
       <p>Do not enter other people's homes without permission.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw Goldilocks sleeping in Baby Bear's bed. Draw the three bears looking at her in surprise.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Whose porridge did Goldilocks eat?</p>
       <p><b>Answer:</b> She ate <b>Baby Bear's porridge</b>.</p>`,

      [{ heading: 'Exercise 39.1 — Answer', items: [
          'How many bears are there in the story?',
          'Whose porridge did Goldilocks eat?',
          'Whose chair did she break?',
          'Whose bed did she sleep in?',
          'What did she do when the bears came home?'
        ]},
       { heading: 'Exercise 39.2 — Retell the story', items: [
          'Retell the story to your parent.'
        ]}],

      `<p><b>39.1:</b> 1. Three. 2. Baby Bear\'s. 3. Baby Bear\'s. 4. Baby Bear\'s. 5. She ran away.</p>`,

      [{ q: 'How many bears are in the story?', a: ['3', 'three'] },
       { q: 'Whose porridge did Goldilocks eat?', a: ['baby bear', 'baby bear\'s'] },
       { q: 'Whose bed did she sleep in?', a: ['baby bear', 'baby bear\'s'] }]),

    D(5, '🎨', 'Draw Your Favourite Story',
      'Consolidate learning about stories.',
      `<p>Today you will draw your favourite story from this week.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Choose one story: The Little Red Hen, The Tortoise and the Hare, The Boy Who Cried Wolf, or Goldilocks.</li>
         <li>Draw the main characters.</li>
         <li>Write the story's title at the top.</li>
         <li>Write the moral of the story at the bottom.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your drawing and tell the story to your family.</p>`,

      [{ heading: 'Exercise 40.1 — Draw your favourite story', items: [
          'Title of the story',
          'Main character',
          'One scene',
          'Moral of the story'
        ]}],

      `<p>⭐ for a complete drawing.</p>`,

      [{ q: 'Which story did you draw?', a: ['any'] },
       { q: 'What is the moral of your story?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR USAGE — Opposites
  // ═══════════════════════════════════════════════════════════════════

  { week: 9, theme: 'Opposites', days: [

    D(1, '↔️', 'Big & Small',
      'Identify and use opposite pairs of words.',
      `<p class='big-emoji'>🐘 🐜 📏</p>
       <p>An <b>opposite</b> is a word that means the other extreme. Today we learn "big" and "small".</p>

       <h3>Opposite Pairs</h3>
       <ul>
         <li>🐘 <b>big</b> ↔ 🐜 <b>small</b></li>
         <li>📏 <b>tall</b> ↔ 📐 <b>short</b></li>
         <li>➖ <b>long</b> ↔ ➖ <b>short</b></li>
       </ul>

       <h3>Example Sentences</h3>
       <ul>
         <li>The elephant is <b>big</b>.</li>
         <li>The ant is <b>small</b>.</li>
         <li>The tree is <b>tall</b>.</li>
         <li>The pencil is <b>short</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big elephant on the left and a small ant on the right. Write "big" and "small" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the opposite of "big"?</p>
       <p><b>Answer:</b> The opposite of "big" is <b>"small"</b>.</p>`,

      [{ heading: 'Exercise 41.1 — Match the opposites', items: [
          'big ↔ ___',
          'tall ↔ ___',
          'long ↔ ___'
        ]},
       { heading: 'Exercise 41.2 — Complete the sentences', items: [
          'The elephant is ______.',
          'The ant is ______.',
          'The tree is ______.',
          'The pencil is ______.'
        ]},
       { heading: 'Exercise 41.3 — Draw and label', items: [
          'Draw a big tree and a small tree.'
        ]}],

      `<p><b>41.1:</b> 1. small 2. short 3. short</p>
       <p><b>41.2:</b> 1. big 2. small 3. tall 4. short</p>`,

      [{ q: 'Opposite of "big"?', a: ['small'] },
       { q: 'Opposite of "tall"?', a: ['short'] },
       { q: 'Opposite of "long"?', a: ['short'] }]),

    D(2, '↔️', 'Hot & Cold',
      'Identify and use opposite pairs of words.',
      `<p class='big-emoji'>🔥 🧊 ☀️ 🌙 ⬆️ ⬇️</p>

       <h3>Opposite Pairs</h3>
       <ul>
         <li>🔥 <b>hot</b> ↔ 🧊 <b>cold</b></li>
         <li>☀️ <b>day</b> ↔ 🌙 <b>night</b></li>
         <li>⬆️ <b>up</b> ↔ ⬇️ <b>down</b></li>
       </ul>

       <h3>Example Sentences</h3>
       <ul>
         <li>The sun is <b>hot</b>.</li>
         <li>Ice is <b>cold</b>.</li>
         <li>It is <b>day</b>.</li>
         <li>It is <b>night</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a sun (hot) and a snowflake (cold). Draw a day scene and a night scene.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the opposite of "hot"?</p>
       <p><b>Answer:</b> The opposite of "hot" is <b>"cold"</b>.</p>`,

      [{ heading: 'Exercise 42.1 — Match the opposites', items: [
          'hot ↔ ___',
          'day ↔ ___',
          'up ↔ ___'
        ]},
       { heading: 'Exercise 42.2 — Complete the sentences', items: [
          'The sun is ______.',
          'Ice is ______.',
          'It is ______ now. (day or night?)',
          'I go ______ the stairs. (up or down?)'
        ]},
       { heading: 'Exercise 42.3 — Draw', items: [
          'Draw a hot sun and a cold ice cream.'
        ]}],

      `<p><b>42.1:</b> 1. cold 2. night 3. down</p>
       <p><b>42.2:</b> 1. hot 2. cold 3. (day or night) 4. up (or down)</p>`,

      [{ q: 'Opposite of "hot"?', a: ['cold'] },
       { q: 'Opposite of "day"?', a: ['night'] },
       { q: 'Opposite of "up"?', a: ['down'] }]),

    D(3, '↔️', 'Happy & Sad',
      'Identify and use opposite pairs of words.',
      `<p class='big-emoji'>😀 😢 🏃 🐢 🚪</p>

       <h3>Opposite Pairs</h3>
       <ul>
         <li>😀 <b>happy</b> ↔ 😢 <b>sad</b></li>
         <li>🏃 <b>fast</b> ↔ 🐢 <b>slow</b></li>
         <li>🚪 <b>open</b> ↔ 🔒 <b>close</b></li>
       </ul>

       <h3>Example Sentences</h3>
       <ul>
         <li>I am <b>happy</b> today.</li>
         <li>She is <b>sad</b>.</li>
         <li>The car is <b>fast</b>.</li>
         <li>The snail is <b>slow</b>.</li>
         <li>The door is <b>open</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a happy face and a sad face. Write "happy" and "sad" under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the opposite of "happy"?</p>
       <p><b>Answer:</b> The opposite of "happy" is <b>"sad"</b>.</p>`,

      [{ heading: 'Exercise 43.1 — Match the opposites', items: [
          'happy ↔ ___',
          'fast ↔ ___',
          'open ↔ ___'
        ]},
       { heading: 'Exercise 43.2 — Complete the sentences', items: [
          'I am ______ today.',
          'The car is ______.',
          'The door is ______.'
        ]},
       { heading: 'Exercise 43.3 — Draw', items: [
          'Draw a happy face and a sad face.'
        ]}],

      `<p><b>43.1:</b> 1. sad 2. slow 3. close</p>
       <p><b>43.2:</b> 1. happy (or sad) 2. fast 3. open (or close)</p>`,

      [{ q: 'Opposite of "happy"?', a: ['sad'] },
       { q: 'Opposite of "fast"?', a: ['slow'] },
       { q: 'Opposite of "open"?', a: ['close'] }]),

    D(4, '📝', 'Opposite Sentences',
      'Write sentences using opposite words.',
      `<p class='big-emoji'>✍️ ↔️ 📝</p>

       <h3>Examples</h3>
       <ul>
         <li>The elephant is <b>big</b>. The mouse is <b>small</b>.</li>
         <li>The sun is <b>hot</b>. Ice is <b>cold</b>.</li>
         <li>I am <b>happy</b>. She is <b>sad</b>.</li>
         <li>The car is <b>fast</b>. The snail is <b>slow</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw two pictures that show an opposite pair. Write a sentence under each.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Write a sentence using "big" and "small".</p>
       <p><b>Answer:</b> The elephant is big. The mouse is small.</p>`,

      [{ heading: 'Exercise 44.1 — Write 3 sentences', items: [
          'The ______ is ______.',
          'The ______ is ______.',
          'The ______ is ______.'
        ]},
       { heading: 'Exercise 44.2 — Fill in the blanks', items: [
          'The sun is ______.',
          'Ice is ______.',
          'The car is ______.',
          'The snail is ______.'
        ]},
       { heading: 'Exercise 44.3 — Draw', items: [
          'Draw two opposite things.'
        ]}],

      `<p><b>44.2:</b> 1. hot 2. cold 3. fast 4. slow</p>`,

      [{ q: 'Complete: The sun is ___.', a: ['hot'] },
       { q: 'Complete: Ice is ___.', a: ['cold'] },
       { q: 'Complete: The car is ___.', a: ['fast'] }]),

    D(5, '🎨', 'Opposite Poster',
      'Consolidate learning about opposites.',
      `<p>Today we make an "Opposites" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Opposites"</b></li>
         <li>Draw 3 opposite pairs: big/small, hot/cold, happy/sad.</li>
         <li>Write the word under each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each word and its opposite.</p>`,

      [{ heading: 'Exercise 45.1 — Draw your poster', items: [
          'big / small',
          'hot / cold',
          'happy / sad'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Give an opposite pair.', a: ['big/small', 'hot/cold', 'happy/sad', 'any'] },
       { q: 'Opposite of "big"?', a: ['small'] }])
  ]},

  
  // ═══════════════════════════════════════════════════════════════════
  // STRAND: READING — Rhyming Words
  // ═══════════════════════════════════════════════════════════════════

  { week: 10, theme: 'Rhyming Words', days: [

    D(1, '🎵', '-at Rhymes',
      'Identify and produce words that rhyme with -at.',
      `<p class='big-emoji'>🐱 🎩 🦇 🐀</p>
       <p><b>Rhyming words</b> are words that end with the same sound. Cat, hat, bat, rat, mat — they all end with the "-at" sound.</p>

       <h3>Rhyming Pairs with -at</h3>
       <ul>
         <li>cat – hat</li>
         <li>bat – rat</li>
         <li>mat – sat</li>
         <li>fat – pat</li>
       </ul>

       <h3>Rhyme Time Fun</h3>
       <p>"The <b>cat</b> wore a <b>hat</b> and sat on the <b>mat</b>."</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a cat wearing a hat, sitting on a mat. Write "cat, hat, mat" under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What rhymes with "cat"?</p>
       <p><b>Answer:</b> <b>hat, bat, rat, mat, sat</b>.</p>`,

      [{ heading: 'Exercise 41.1 — Say 3 rhymes for each word', items: [
          'cat → ___, ___, ___',
          'hat → ___, ___, ___',
          'bat → ___, ___, ___'
        ]},
       { heading: 'Exercise 41.2 — Match the rhymes', items: [
          'cat ↔ ___',
          'mat ↔ ___',
          'bat ↔ ___'
        ]},
       { heading: 'Exercise 41.3 — Complete the rhyme sentence', items: [
          'The ___ sat on the ___.'
        ]}],

      `<p><b>41.2:</b> cat – hat; mat – sat; bat – rat</p>`,

      [{ q: 'Rhyme with "cat"?', a: ['hat', 'bat', 'rat', 'mat', 'sat'] },
       { q: 'Rhyme with "bat"?', a: ['cat', 'hat', 'rat', 'mat'] },
       { q: 'Rhyme with "mat"?', a: ['cat', 'hat', 'bat', 'rat', 'sat'] }]),

    D(2, '🎵', '-an Rhymes',
      'Identify and produce words that rhyme with -an.',
      `<p class='big-emoji'>👨 🥫 🌬️ 🥘</p>
       <p>Words that end with "-an" rhyme with each other.</p>

       <h3>Rhyming Words with -an</h3>
       <ul>
         <li>man – can</li>
         <li>fan – pan</li>
         <li>ran – van</li>
         <li>tan – ban</li>
       </ul>

       <h3>Rhyme Time Fun</h3>
       <p>"The <b>man</b> <b>ran</b> with a <b>fan</b> and a <b>pan</b>."</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a man running with a fan in one hand and a pan in the other.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What rhymes with "man"?</p>
       <p><b>Answer:</b> <b>can, fan, pan, ran, van</b>.</p>`,

      [{ heading: 'Exercise 42.1 — Say 3 rhymes for each word', items: [
          'man → ___, ___, ___',
          'fan → ___, ___, ___',
          'pan → ___, ___, ___'
        ]},
       { heading: 'Exercise 42.2 — Match the rhymes', items: [
          'man ↔ ___',
          'fan ↔ ___',
          'pan ↔ ___'
        ]},
       { heading: 'Exercise 42.3 — Complete the rhyme sentence', items: [
          'The ___ ran with a ___.'
        ]}],

      `<p><b>42.2:</b> man – can; fan – pan; pan – ran</p>`,

      [{ q: 'Rhyme with "man"?', a: ['can', 'fan', 'pan', 'ran', 'van'] },
       { q: 'Rhyme with "fan"?', a: ['man', 'can', 'pan', 'ran'] },
       { q: 'Rhyme with "pan"?', a: ['man', 'can', 'fan', 'ran'] }]),

    D(3, '🎵', '-op Rhymes',
      'Identify and produce words that rhyme with -op.',
      `<p class='big-emoji'>🐰 🧹 🥤 🛑</p>
       <p>Words that end with "-op" rhyme with each other.</p>

       <h3>Rhyming Words with -op</h3>
       <ul>
         <li>hop – top</li>
         <li>mop – pop</li>
         <li>cop – stop</li>
         <li>shop – drop</li>
       </ul>

       <h3>Rhyme Time Fun</h3>
       <p>"The <b>cop</b> said <b>stop</b> at the <b>shop</b>."</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a rabbit hopping on top of a shop.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What rhymes with "hop"?</p>
       <p><b>Answer:</b> <b>top, mop, pop, cop, stop</b>.</p>`,

      [{ heading: 'Exercise 43.1 — Say 3 rhymes for each word', items: [
          'hop → ___, ___, ___',
          'top → ___, ___, ___',
          'mop → ___, ___, ___'
        ]},
       { heading: 'Exercise 43.2 — Match the rhymes', items: [
          'hop ↔ ___',
          'top ↔ ___',
          'mop ↔ ___'
        ]},
       { heading: 'Exercise 43.3 — Complete the rhyme sentence', items: [
          'The ___ said ___ at the ___.'
        ]}],

      `<p><b>43.2:</b> hop – top; top – mop; mop – pop</p>`,

      [{ q: 'Rhyme with "hop"?', a: ['top', 'mop', 'pop', 'cop', 'stop'] },
       { q: 'Rhyme with "top"?', a: ['hop', 'mop', 'pop', 'cop'] },
       { q: 'Rhyme with "mop"?', a: ['hop', 'top', 'pop', 'cop'] }]),

    D(4, '📝', 'Rhyme Sentences',
      'Write simple sentences using rhyming words.',
      `<p class='big-emoji'>✍️ 🎵 📝</p>

       <h3>Example Rhyme Sentences</h3>
       <ul>
         <li>The <b>cat</b> sat on the <b>mat</b>.</li>
         <li>The <b>man</b> ran with a <b>fan</b>.</li>
         <li>The <b>cop</b> said <b>stop</b>.</li>
         <li>My <b>hat</b> fell on the <b>bat</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a picture of one of the sentences. Write the sentence below.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The cat sat on the ___."</p>
       <p><b>Answer:</b> "The cat sat on the <b>mat</b>."</p>`,

      [{ heading: 'Exercise 44.1 — Write 3 rhyme sentences', items: [
          'The ___ ___ the ___.',
          'The ___ ___ the ___.',
          'The ___ ___ the ___.'
        ]},
       { heading: 'Exercise 44.2 — Fill in the rhyme', items: [
          'The cat sat on the ___.',
          'The man ran with a ___.',
          'The cop said ___.'
        ]},
       { heading: 'Exercise 44.3 — Draw and write', items: [
          'Draw a rhyme sentence and write it below.'
        ]}],

      `<p><b>44.2:</b> 1. mat 2. fan 3. stop</p>`,

      [{ q: 'Complete: The cat sat on the ___.', a: ['mat'] },
       { q: 'Complete: The man ran with a ___.', a: ['fan'] },
       { q: 'Complete: The cop said ___.', a: ['stop'] }]),

    D(5, '🎨', 'Rhyme Poster',
      'Consolidate learning about rhyming words.',
      `<p>Today we make a "Rhyme Poster".</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Rhyme Time!"</b></li>
         <li>Draw 3 rhyme pairs: cat & hat, man & fan, hop & top.</li>
         <li>Write the words under each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each pair of rhyming words.</p>`,

      [{ heading: 'Exercise 45.1 — Draw your rhyme poster', items: [
          'cat & hat',
          'man & fan',
          'hop & top'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Give a rhyme pair.', a: ['cat/hat', 'man/fan', 'hop/top', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / WRITING — My Family
  // ═══════════════════════════════════════════════════════════════════

  { week: 11, theme: 'My Family', days: [

    D(1, '👨‍👩‍👧', 'My Family',
      'Name and describe members of the family.',
      `<p class='big-emoji'>👩 👨 👧 👦 👶 👵 👴</p>
       <p>A <b>family</b> is a group of people who are related to each other. Families love and help each other.</p>

       <h3>Members of a Family</h3>
       <ul>
         <li>👩 <b>mother</b> — my mum</li>
         <li>👨 <b>father</b> — my dad</li>
         <li>👧 <b>sister</b> — my mum\'s or dad\'s daughter</li>
         <li>👦 <b>brother</b> — my mum\'s or dad\'s son</li>
         <li>👶 <b>baby</b> — a very young child</li>
         <li>👵 <b>grandmother</b> — my parent\'s mother</li>
         <li>👴 <b>grandfather</b> — my parent\'s father</li>
         <li>👨‍👩‍👧 <b>cousins, aunties, uncles</b> — other family members</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your family. Draw each person and write their name under them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who is your mother\'s mother?</p>
       <p><b>Answer:</b> My <b>grandmother</b>.</p>`,

      [{ heading: 'Exercise 46.1 — Say and list', items: [
          'Who is in your family?',
          'What is your mother\'s name?',
          'What is your father\'s name?',
          'How many brothers do you have?',
          'How many sisters do you have?'
        ]},
       { heading: 'Exercise 46.2 — Answer', items: [
          'Who is your mum\'s mum?',
          'Who is your dad\'s dad?',
          'Who is your mum\'s son?'
        ]},
       { heading: 'Exercise 46.3 — Draw your family', items: [
          'Draw each family member and write their name.'
        ]}],

      `<p><b>46.2:</b> 1. Grandmother 2. Grandfather 3. Brother</p>`,

      [{ q: 'Who is your mum\'s mum?', a: ['grandmother'] },
       { q: 'Who is your dad\'s dad?', a: ['grandfather'] },
       { q: 'What do you call your mum\'s son?', a: ['brother'] }]),

    D(2, '💗', 'I love my…',
      'Write sentences expressing love for family members.',
      `<p class='big-emoji'>💗 ✍️ 👩 👨</p>

       <h3>Sentences about Love</h3>
       <ul>
         <li>I love my <b>mother</b>.</li>
         <li>I love my <b>father</b>.</li>
         <li>I love my <b>sister</b>.</li>
         <li>I love my <b>brother</b>.</li>
         <li>I love my <b>family</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big heart. Inside, write the names of the people you love.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ my mother."</p>
       <p><b>Answer:</b> I <b>love</b> my mother.</p>`,

      [{ heading: 'Exercise 47.1 — Write 3 sentences', items: [
          'I love my ______.',
          'I love my ______.',
          'I love my ______.'
        ]},
       { heading: 'Exercise 47.2 — Fill in the blank', items: [
          'I ___ my mother.',
          'I ___ my father.',
          'I ___ my sister.'
        ]},
       { heading: 'Exercise 47.3 — Draw and label', items: [
          'Draw a heart and write "I love my family."'
        ]}],

      `<p><b>47.2:</b> 1. love 2. love 3. love</p>`,

      [{ q: 'Complete: I ___ my mother.', a: ['love'] },
       { q: 'Complete: I love my ___.', a: ['mother', 'father', 'sister', 'brother', 'family', 'any'] }]),

    D(3, '🏠', 'My family has…',
      'Write sentences describing what your family has.',
      `<p class='big-emoji'>🏠 👨‍👩‍👧 🔢</p>

       <h3>Sentences about Family</h3>
       <ul>
         <li>My family has <b>5 people</b>.</li>
         <li>My family has a <b>dog</b>.</li>
         <li>My family has a <b>big house</b>.</li>
         <li>My family has a <b>car</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your house. Write the number of people in your family.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "My family ___ 4 people."</p>
       <p><b>Answer:</b> My family <b>has</b> 4 people.</p>`,

      [{ heading: 'Exercise 48.1 — Write 2 sentences', items: [
          'My family has ______ people.',
          'My family has ______.'
        ]},
       { heading: 'Exercise 48.2 — Fill in the blank', items: [
          'My family ___ 4 people.',
          'My family ___ a dog.'
        ]},
       { heading: 'Exercise 48.3 — Count', items: [
          'How many people are in your family?'
        ]}],

      `<p><b>48.2:</b> 1. has 2. has</p>`,

      [{ q: 'Complete: My family ___ 4 people.', a: ['has'] },
       { q: 'How many people in your family?', a: ['any'] }]),

    D(4, '🎨', 'Draw Your Family',
      'Draw and label your family members.',
      `<p>Today you will draw your family on a poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Draw every member of your family.</li>
         <li>Write each person\'s name below them.</li>
         <li>Add a title: <b>"My Family"</b>.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and introduce each family member.</p>`,

      [{ heading: 'Exercise 49.1 — Draw your family', items: [
          'Draw each person',
          'Write their name',
          'Add a title'
        ]}],

      `<p>⭐ for a complete drawing.</p>`,

      [{ q: 'Who did you draw?', a: ['mother', 'father', 'sister', 'brother', 'any'] }]),

    D(5, '🎤', 'Talk About Family',
      'Speak about your family to an audience.',
      `<p>Today you will give a short talk about your family.</p>

       <h3>What to Say</h3>
       <ul>
         <li>Say: "This is my family."</li>
         <li>Say: "This is my mother. Her name is ___."</li>
         <li>Say: "This is my father. His name is ___."</li>
         <li>Say: "I love my family."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and speak about each family member.</p>`,

      [{ heading: 'Exercise 50.1 — Speak', items: [
          'Introduce each family member.',
          'Say one thing you love about your family.'
        ]}],

      `<p>⭐ for clear, confident speaking.</p>`,

      [{ q: 'Say one sentence about your family.', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / WRITING — My School
  // ═══════════════════════════════════════════════════════════════════

  { week: 12, theme: 'My School', days: [

    D(1, '🏫', 'My School',
      'Name and describe things found at school.',
      `<p class='big-emoji'>🏫 👩‍🏫 📚 🎒</p>

       <h3>Things at School</h3>
       <ul>
         <li>🏫 <b>classroom</b></li>
         <li>👩‍🏫 <b>teacher</b></li>
         <li>📚 <b>book</b></li>
         <li>✏️ <b>pencil</b></li>
         <li>🎒 <b>bag</b></li>
         <li>🪑 <b>chair</b></li>
         <li>📏 <b>ruler</b></li>
         <li>👦 <b>friend</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your school. Include a classroom, a teacher, and your friends.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who teaches you at school?</p>
       <p><b>Answer:</b> My <b>teacher</b>.</p>`,

      [{ heading: 'Exercise 51.1 — Answer', items: [
          'What is the name of your school?',
          'Who is your teacher?',
          'What do you carry to school?',
          'Who is your best friend?'
        ]},
       { heading: 'Exercise 51.2 — List school things', items: [
          'Write 5 things you see at school.'
        ]},
       { heading: 'Exercise 51.3 — Draw', items: [
          'Draw your school.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Who teaches you?', a: ['teacher'] },
       { q: 'What do you write with?', a: ['pencil', 'pen'] },
       { q: 'What do you carry to school?', a: ['bag', 'school bag'] }]),

    D(2, '📝', 'At school I…',
      'Write sentences describing what you do at school.',
      `<p class='big-emoji'>✍️ 📖 🏃</p>

       <h3>Sentences about School</h3>
       <ul>
         <li>At school I <b>learn</b>.</li>
         <li>At school I <b>play</b>.</li>
         <li>At school I <b>read</b>.</li>
         <li>At school I <b>write</b>.</li>
         <li>At school I <b>sing</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 things you do at school.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "At school I ___."</p>
       <p><b>Answer:</b> At school I <b>learn</b>.</p>`,

      [{ heading: 'Exercise 52.1 — Write 3 sentences', items: [
          'At school I ______.',
          'At school I ______.',
          'At school I ______.'
        ]},
       { heading: 'Exercise 52.2 — Fill in the blank', items: [
          'At school I ___.',
          'At school I ___.',
          'At school I ___.'
        ]},
       { heading: 'Exercise 52.3 — Draw', items: [
          'Draw your favourite thing to do at school.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: At school I ___.', a: ['any'] },
       { q: 'What do you do at school?', a: ['any'] }]),

    D(3, '👫', 'My friend is…',
      'Write sentences about a friend.',
      `<p class='big-emoji'>👫 ✍️ 😊</p>

       <h3>Sentences about a Friend</h3>
       <ul>
         <li>My friend is <b>Ama</b>.</li>
         <li>My friend is <b>kind</b>.</li>
         <li>My friend is <b>funny</b>.</li>
         <li>My friend is <b>in Class 2</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself with your friend.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "My friend ___ Ama."</p>
       <p><b>Answer:</b> My friend <b>is</b> Ama.</p>`,

      [{ heading: 'Exercise 53.1 — Write 2 sentences', items: [
          'My friend is ______.',
          'My friend is ______.'
        ]},
       { heading: 'Exercise 53.2 — Fill in the blank', items: [
          'My friend ___ Ama.',
          'My friend is ______.'
        ]},
       { heading: 'Exercise 53.3 — Draw', items: [
          'Draw yourself with your friend.'
        ]}],

      `<p><b>53.2:</b> 1. is</p>`,

      [{ q: 'Complete: My friend ___ Ama.', a: ['is'] },
       { q: 'Who is your friend?', a: ['any'] }]),

    D(4, '🎨', 'Draw Your School',
      'Draw and label things at school.',
      `<p>Today you will draw a poster about your school.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My School"</b></li>
         <li>Draw your classroom.</li>
         <li>Draw your teacher and 2 friends.</li>
         <li>Label 5 things: classroom, teacher, book, bag, friend.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster and say what is at your school.</p>`,

      [{ heading: 'Exercise 54.1 — Draw your school', items: [
          'Classroom',
          'Teacher',
          'Book',
          'Bag',
          'Friend'
        ]}],

      `<p>⭐ for a complete drawing.</p>`,

      [{ q: 'What did you draw?', a: ['classroom', 'teacher', 'book', 'bag', 'friend', 'any'] }]),

    D(5, '🎤', 'Show and Tell',
      'Present your school drawing to an audience.',
      `<p>Today you will speak about your school drawing.</p>

       <h3>What to Say</h3>
       <ul>
         <li>"This is my school."</li>
         <li>"This is my classroom."</li>
         <li>"This is my teacher. Her/His name is ___."</li>
         <li>"This is my friend. His/Her name is ___."</li>
         <li>"I love my school."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Speak clearly and point to each thing as you say it.</p>`,

      [{ heading: 'Exercise 55.1 — Speak', items: [
          'Introduce your school.',
          'Introduce your teacher.',
          'Introduce your friend.'
        ]}],

      `<p>⭐ for clear, confident speaking.</p>`,

      [{ q: 'Say 3 sentences about your school.', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE — Days & Months
  // ═══════════════════════════════════════════════════════════════════

  { week: 13, theme: 'Days & Months', days: [

    D(1, '📅', 'Days of the Week',
      'Name the seven days of the week in order.',
      `<p class='big-emoji'>📅 🗓️ 🗓️</p>

       <h3>The Seven Days</h3>
       <ol>
         <li><b>Monday</b></li>
         <li><b>Tuesday</b></li>
         <li><b>Wednesday</b></li>
         <li><b>Thursday</b></li>
         <li><b>Friday</b></li>
         <li><b>Saturday</b></li>
         <li><b>Sunday</b></li>
       </ol>

       <h3>Fun Fact</h3>
       <p>There are <b>7 days</b> in a week. Saturday and Sunday are called the <b>weekend</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 7 boxes in a row. Write each day of the week in a box.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What day comes after Monday?</p>
       <p><b>Answer:</b> <b>Tuesday</b>.</p>`,

      [{ heading: 'Exercise 56.1 — Say and write', items: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ]},
       { heading: 'Exercise 56.2 — Answer', items: [
          'What day comes after Monday?',
          'What day comes after Wednesday?',
          'What day comes before Sunday?',
          'How many days are in a week?'
        ]},
       { heading: 'Exercise 56.3 — Write the days in order', items: [
          'Monday, Tuesday, ___, ___, ___, ___, ___'
        ]}],

      `<p><b>56.2:</b> 1. Tuesday 2. Thursday 3. Saturday 4. Seven</p>`,

      [{ q: 'What day comes after Monday?', a: ['tuesday'] },
       { q: 'What is the last day of the week?', a: ['sunday'] },
       { q: 'How many days in a week?', a: ['7', 'seven'] }]),

    D(2, '📅', 'Months of the Year',
      'Name the twelve months of the year.',
      `<p class='big-emoji'>🗓️ 1️⃣2️⃣</p>

       <h3>The Twelve Months</h3>
       <ol>
         <li><b>January</b></li>
         <li><b>February</b></li>
         <li><b>March</b></li>
         <li><b>April</b></li>
         <li><b>May</b></li>
         <li><b>June</b></li>
         <li><b>July</b></li>
         <li><b>August</b></li>
         <li><b>September</b></li>
         <li><b>October</b></li>
         <li><b>November</b></li>
         <li><b>December</b></li>
       </ol>

       <h3>Note</h3>
       <p>Months always start with a <b>capital letter</b>.</p>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a big calendar. Write the 12 months in order.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the first month of the year?</p>
       <p><b>Answer:</b> <b>January</b>.</p>`,

      [{ heading: 'Exercise 57.1 — Say and write', items: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ]},
       { heading: 'Exercise 57.2 — Answer', items: [
          'What is the first month?',
          'What month comes after June?',
          'How many months are in a year?',
          'What month is your birthday?'
        ]},
       { heading: 'Exercise 57.3 — Write the months', items: [
          'Write the first 6 months.'
        ]}],

      `<p><b>57.2:</b> 1. January 2. July 3. Twelve 4. (any)</p>`,

      [{ q: 'What is the first month?', a: ['january'] },
       { q: 'What month comes after June?', a: ['july'] },
       { q: 'How many months in a year?', a: ['12', 'twelve'] }]),

    D(3, '📅', 'Yesterday, Today, Tomorrow',
      'Use time words to talk about the past and future.',
      `<p class='big-emoji'>⏪ ⏺️ ⏩</p>

       <h3>Time Words</h3>
       <ul>
         <li><b>yesterday</b> — the day before today</li>
         <li><b>today</b> — this day</li>
         <li><b>tomorrow</b> — the day after today</li>
       </ul>

       <h3>Example Sentences</h3>
       <ul>
         <li><b>Yesterday</b> I went to school.</li>
         <li><b>Today</b> I am at home.</li>
         <li><b>Tomorrow</b> I will go to the market.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 boxes: Yesterday, Today, Tomorrow. In each box, draw what you did or will do.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the day after today?</p>
       <p><b>Answer:</b> <b>Tomorrow</b>.</p>`,

      [{ heading: 'Exercise 58.1 — Answer', items: [
          'What did you do yesterday?',
          'What are you doing today?',
          'What will you do tomorrow?',
          'What is the day after today?',
          'What is the day before today?'
        ]},
       { heading: 'Exercise 58.2 — Fill in the blank', items: [
          '___ I went to school.',
          '___ I am at home.',
          '___ I will go to the market.'
        ]},
       { heading: 'Exercise 58.3 — Draw', items: [
          'Draw what you will do tomorrow.'
        ]}],

      `<p><b>58.1:</b> 1. (any) 2. (any) 3. (any) 4. Tomorrow 5. Yesterday</p>`,

      [{ q: 'What is the day after today?', a: ['tomorrow'] },
       { q: 'What is the day before today?', a: ['yesterday'] },
       { q: 'What day is today?', a: ['any'] }]),

    D(4, '📝', 'Day Sentences',
      'Write sentences using time words.',
      `<p class='big-emoji'>✍️ 📅 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li><b>Today</b> is Monday.</li>
         <li><b>Tomorrow</b> is Tuesday.</li>
         <li><b>Yesterday</b> was Sunday.</li>
         <li>My birthday is in <b>June</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw today\'s date on a calendar.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "Today is ___."</p>
       <p><b>Answer:</b> Today is <b>(any day of the week)</b>.</p>`,

      [{ heading: 'Exercise 59.1 — Write 3 sentences', items: [
          'Today is ______.',
          'Tomorrow is ______.',
          'Yesterday was ______.'
        ]},
       { heading: 'Exercise 59.2 — Fill in the blank', items: [
          'Today is ___.',
          'Tomorrow is ___.',
          'My birthday is in ___.'
        ]},
       { heading: 'Exercise 59.3 — Draw', items: [
          'Draw a calendar for this month.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: Today is ___.', a: ['any'] },
       { q: 'Complete: Tomorrow is ___.', a: ['any'] }]),

    D(5, '🎨', 'Days Poster',
      'Consolidate learning about days and months.',
      `<p>Today we make a "Days and Months" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Days & Months"</b></li>
         <li>Top half: the 7 days of the week.</li>
         <li>Bottom half: the 12 months of the year.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the days and the months aloud.</p>`,

      [{ heading: 'Exercise 60.1 — Draw your poster', items: [
          'Days of the week',
          'Months of the year'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name a day of the week.', a: ['monday', 'tuesday', 'any'] },
       { q: 'Name a month.', a: ['january', 'february', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Weather
  // ═══════════════════════════════════════════════════════════════════

  { week: 14, theme: 'Weather', days: [

    D(1, '☀️', 'Sunny & Rainy',
      'Identify and describe different types of weather.',
      `<p class='big-emoji'>☀️ 🌧️ 💨 ⛅</p>

       <h3>Types of Weather</h3>
       <ul>
         <li>☀️ <b>sunny</b> — the sun is shining</li>
         <li>🌧️ <b>rainy</b> — it is raining</li>
         <li>💨 <b>windy</b> — the wind is blowing</li>
         <li>⛅ <b>cloudy</b> — many clouds in the sky</li>
         <li>⛈️ <b>stormy</b> — heavy rain and thunder</li>
         <li>❄️ <b>cold</b> — not hot</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 weather types: sunny, rainy, windy, cloudy.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the weather like today?</p>
       <p><b>Answer:</b> Today the weather is <b>(any)</b>.</p>`,

      [{ heading: 'Exercise 61.1 — Say the weather', items: [
          'Look outside. What is the weather?',
          'What was the weather yesterday?',
          'What weather do you like?'
        ]},
       { heading: 'Exercise 61.2 — Match', items: [
          'sunny → ☀️',
          'rainy → 🌧️',
          'windy → 💨',
          'cloudy → ⛅'
        ]},
       { heading: 'Exercise 61.3 — Draw', items: [
          'Draw the weather outside today.'
        ]}],

      `<p><b>61.2:</b> sunny → ☀️; rainy → 🌧️; windy → 💨; cloudy → ⛅</p>`,

      [{ q: 'What is the weather today?', a: ['sunny', 'rainy', 'cloudy', 'windy', 'any'] },
       { q: 'What weather makes you wet?', a: ['rainy', 'rain'] },
       { q: 'What weather makes you hot?', a: ['sunny', 'sun'] }]),

    D(2, '🌧️', 'Rainy Day',
      'Describe what to do on a rainy day.',
      `<p class='big-emoji'>🌧️ ☔ 🥾 🌂</p>

       <h3>On a Rainy Day</h3>
       <ul>
         <li>Use an <b>umbrella</b>.</li>
         <li>Wear a <b>raincoat</b>.</li>
         <li>Wear <b>boots</b> on your feet.</li>
         <li>Stay indoors if there is thunder.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a person walking in the rain with an umbrella.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you use in the rain?</p>
       <p><b>Answer:</b> I use an <b>umbrella</b>.</p>`,

      [{ heading: 'Exercise 62.1 — Answer', items: [
          'What do you use in the rain?',
          'What do you wear on your feet in the rain?',
          'What do you wear to keep dry?'
        ]},
       { heading: 'Exercise 62.2 — Fill in the blank', items: [
          'I use an ___ in the rain.',
          'I wear ___ on my feet.',
          'I wear a ___ to keep dry.'
        ]},
       { heading: 'Exercise 62.3 — Draw', items: [
          'Draw yourself in the rain.'
        ]}],

      `<p><b>62.1:</b> 1. Umbrella 2. Boots 3. Raincoat</p>`,

      [{ q: 'What do you use in the rain?', a: ['umbrella'] },
       { q: 'What do you wear on your feet?', a: ['boots', 'shoes'] },
       { q: 'What do you wear to keep dry?', a: ['raincoat'] }]),

    D(3, '☀️', 'Sunny Day',
      'Describe what to do on a sunny day.',
      `<p class='big-emoji'>☀️ 🕶️ 🧴 💧</p>

       <h3>On a Sunny Day</h3>
       <ul>
         <li>Wear a <b>hat</b> or <b>cap</b>.</li>
         <li>Wear <b>light clothes</b>.</li>
         <li>Drink plenty of <b>water</b>.</li>
         <li>Play outside.</li>
         <li>Stay in the <b>shade</b> if it is too hot.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself on a sunny day. Include a hat, shorts, and a water bottle.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you wear on a sunny day?</p>
       <p><b>Answer:</b> I wear <b>light clothes</b> and a <b>hat</b>.</p>`,

      [{ heading: 'Exercise 63.1 — Answer', items: [
          'What do you wear on a sunny day?',
          'What do you drink on a sunny day?',
          'Where can you stay to keep cool?'
        ]},
       { heading: 'Exercise 63.2 — Fill in the blank', items: [
          'I wear a ___ on a sunny day.',
          'I drink ___ on a sunny day.',
          'I stay in the ___ to keep cool.'
        ]},
       { heading: 'Exercise 63.3 — Draw', items: [
          'Draw yourself on a sunny day.'
        ]}],

      `<p><b>63.1:</b> 1. Light clothes and a hat 2. Water 3. In the shade</p>`,

      [{ q: 'What do you wear in the sun?', a: ['hat', 'cap', 'light clothes', 'any'] },
       { q: 'What do you drink?', a: ['water'] }]),

    D(4, '📝', 'Weather Sentences',
      'Write sentences about weather.',
      `<p class='big-emoji'>✍️ 🌦️ 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>Today is <b>sunny</b>.</li>
         <li>Yesterday was <b>rainy</b>.</li>
         <li>It is <b>windy</b> today.</li>
         <li>The sky is <b>cloudy</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw today\'s weather and write a sentence below it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "Today is ___."</p>
       <p><b>Answer:</b> Today is <b>(any weather)</b>.</p>`,

      [{ heading: 'Exercise 64.1 — Write 3 sentences', items: [
          'Today is ______.',
          'Yesterday was ______.',
          'Tomorrow will be ______.'
        ]},
       { heading: 'Exercise 64.2 — Fill in the blank', items: [
          'Today is ___.',
          'Yesterday was ___.',
          'The sky is ___.'
        ]},
       { heading: 'Exercise 64.3 — Draw', items: [
          'Draw today\'s weather.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: Today is ___.', a: ['any'] },
       { q: 'Complete: Yesterday was ___.', a: ['any'] }]),

    D(5, '🎨', 'Weather Chart',
      'Consolidate learning about weather.',
      `<p>Today we make a weather chart for the week.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Draw 7 boxes (one for each day).</li>
         <li>In each box, draw the weather for that day.</li>
         <li>Write the weather word under each drawing.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your chart. Say what the weather was each day.</p>`,

      [{ heading: 'Exercise 65.1 — Draw your weather chart', items: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ]}],

      `<p>⭐ for a complete chart.</p>`,

      [{ q: 'Name 3 weather types.', a: ['sunny', 'rainy', 'windy', 'cloudy', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR / ORAL LANGUAGE — My Body
  // ═══════════════════════════════════════════════════════════════════

  { week: 15, theme: 'My Body', days: [

    D(1, '👀', 'My Head',
      'Name the parts of the head and their functions.',
      `<p class='big-emoji'>👀 👂 👃 👄</p>

       <h3>Parts of the Head</h3>
       <ul>
         <li>👀 <b>eyes</b> — for seeing</li>
         <li>👂 <b>ears</b> — for hearing</li>
         <li>👃 <b>nose</b> — for smelling</li>
         <li>👄 <b>mouth</b> — for eating and talking</li>
         <li>💇 <b>hair</b> — on top of the head</li>
         <li>🧠 <b>brain</b> — inside the head; controls the body</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a face. Label: eyes, ears, nose, mouth, hair.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you see with?</p>
       <p><b>Answer:</b> I see with my <b>eyes</b>.</p>`,

      [{ heading: 'Exercise 66.1 — Answer', items: [
          'What do you see with?',
          'What do you hear with?',
          'What do you smell with?',
          'What do you eat with?'
        ]},
       { heading: 'Exercise 66.2 — Fill in the blank', items: [
          'I see with my ___.',
          'I hear with my ___.',
          'I smell with my ___.',
          'I eat with my ___.'
        ]},
       { heading: 'Exercise 66.3 — Draw and label', items: [
          'Draw a face and label 5 parts.'
        ]}],

      `<p><b>66.2:</b> 1. eyes 2. ears 3. nose 4. mouth</p>`,

      [{ q: 'What do you see with?', a: ['eyes', 'eye'] },
       { q: 'What do you hear with?', a: ['ears', 'ear'] },
       { q: 'What do you smell with?', a: ['nose'] }]),

    D(2, '🦵', 'My Body',
      'Name other parts of the body and their functions.',
      `<p class='big-emoji'>💪 🖐️ 🦵 🦶</p>

       <h3>Other Body Parts</h3>
       <ul>
         <li>💪 <b>arms</b> — for reaching and lifting</li>
         <li>🖐️ <b>hands</b> — for holding and touching</li>
         <li>👆 <b>fingers</b> — for picking small things</li>
         <li>🦵 <b>legs</b> — for walking and running</li>
         <li>🦶 <b>feet</b> — for standing and walking</li>
         <li>🦶 <b>toes</b> — for balance</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a full body. Label 8 parts.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How many fingers on one hand?</p>
       <p><b>Answer:</b> <b>Five</b> fingers.</p>`,

      [{ heading: 'Exercise 67.1 — Answer', items: [
          'How many fingers on one hand?',
          'How many toes on one foot?',
          'What do you walk with?',
          'What do you hold things with?'
        ]},
       { heading: 'Exercise 67.2 — Fill in the blank', items: [
          'I have ___ fingers.',
          'I have ___ toes.',
          'I walk with my ___.'
        ]},
       { heading: 'Exercise 67.3 — Draw and label', items: [
          'Draw yourself and label 6 body parts.'
        ]}],

      `<p><b>67.1:</b> 1. Five 2. Five 3. Legs 4. Hands</p>`,

      [{ q: 'How many fingers on one hand?', a: ['5', 'five'] },
       { q: 'How many toes on one foot?', a: ['5', 'five'] },
       { q: 'What do you walk with?', a: ['legs', 'leg'] }]),

    D(3, '🧼', 'Keeping Clean',
      'Describe good personal hygiene practices.',
      `<p class='big-emoji'>🧼 🦷 🚿 ✂️</p>

       <h3>Keeping Clean</h3>
       <ul>
         <li>🧼 Wash your <b>hands</b> before eating.</li>
         <li>🦷 Brush your <b>teeth</b> twice a day.</li>
         <li>🚿 <b>Bath</b> every day.</li>
         <li>💇 Wash your <b>hair</b> often.</li>
         <li>✂️ Cut your <b>nails</b> short.</li>
         <li>👕 Wear <b>clean clothes</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pictures showing cleanliness: washing hands, brushing teeth, bathing, cutting nails.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you use to clean your teeth?</p>
       <p><b>Answer:</b> I use a <b>toothbrush</b> and <b>toothpaste</b>.</p>`,

      [{ heading: 'Exercise 68.1 — Answer', items: [
          'What do you use to clean your teeth?',
          'How often should you wash your hands?',
          'How many times a day should you brush your teeth?'
        ]},
       { heading: 'Exercise 68.2 — Say and do', items: [
          'Wash your hands.',
          'Brush your teeth.',
          'Bath every day.',
          'Cut your nails.'
        ]},
       { heading: 'Exercise 68.3 — Draw', items: [
          'Draw 4 things you use to keep clean.'
        ]}],

      `<p><b>68.1:</b> 1. Toothbrush and toothpaste 2. Often (before meals and after toilet) 3. Twice a day</p>`,

      [{ q: 'What do you use to clean your teeth?', a: ['toothbrush', 'toothpaste'] },
       { q: 'What do you use to wash your hands?', a: ['soap', 'water'] },
       { q: 'How often should you brush your teeth?', a: ['twice a day', '2 times a day', 'morning and night'] }]),

    D(4, '📝', 'Body Sentences',
      'Write sentences about the body.',
      `<p class='big-emoji'>✍️ 🧍 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I have <b>two eyes</b>.</li>
         <li>I have <b>ten fingers</b>.</li>
         <li>I see with my <b>eyes</b>.</li>
         <li>I hear with my <b>ears</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself. Write "I have ___ eyes." under it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I have ___ eyes."</p>
       <p><b>Answer:</b> I have <b>two</b> eyes.</p>`,

      [{ heading: 'Exercise 69.1 — Write 3 sentences', items: [
          'I have ______.',
          'I have ______.',
          'I have ______.'
        ]},
       { heading: 'Exercise 69.2 — Fill in the blank', items: [
          'I have ___ eyes.',
          'I have ___ fingers.',
          'I have ___ nose.'
        ]},
       { heading: 'Exercise 69.3 — Draw', items: [
          'Draw yourself and write "I have ___ eyes and ___ ears."'
        ]}],

      `<p><b>69.2:</b> 1. two 2. ten 3. one</p>`,

      [{ q: 'Complete: I have ___ eyes.', a: ['two', '2'] },
       { q: 'Complete: I have ___ fingers.', a: ['ten', '10'] },
       { q: 'Complete: I have ___ nose.', a: ['one', '1'] }]),

    D(5, '🎨', 'Body Poster',
      'Consolidate learning about the body.',
      `<p>Today we make a "My Body" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Body"</b></li>
         <li>Draw a big body with all parts labelled.</li>
         <li>Draw 4 pictures of cleanliness.</li>
         <li>Write one sentence: "I keep my body clean and healthy."</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the name of each body part.</p>`,

      [{ heading: 'Exercise 70.1 — Draw your body poster', items: [
          'Body drawing',
          'Labels',
          '4 cleanliness pictures',
          'One sentence'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 5 body parts.', a: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'any'] },
       { q: 'Name 3 ways to keep clean.', a: ['wash', 'brush', 'bath', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Food
  // ═══════════════════════════════════════════════════════════════════

  { week: 16, theme: 'Food', days: [

    D(1, '🍚', 'Food We Eat',
      'Name common foods and describe what we eat.',
      `<p class='big-emoji'>🍚 🫘 🍞 🍠 🍗 🐟</p>

       <h3>Common Foods</h3>
       <ul>
         <li>🍚 <b>rice</b></li>
         <li>🫘 <b>beans</b></li>
         <li>🍞 <b>bread</b></li>
         <li>🍠 <b>yam</b></li>
         <li>🍌 <b>plantain</b></li>
         <li>🐟 <b>fish</b></li>
         <li>🍗 <b>chicken</b></li>
         <li>🌽 <b>maize</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 foods you ate today.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What did you eat today?</p>
       <p><b>Answer:</b> I ate <b>(any food)</b>.</p>`,

      [{ heading: 'Exercise 71.1 — Say', items: [
          'What did you eat today?',
          'What is your favourite food?',
          'What food does your mum cook?'
        ]},
       { heading: 'Exercise 71.2 — Fill in the blank', items: [
          'I like ___.',
          'I eat ___ every day.',
          'My mum cooks ___.'
        ]},
       { heading: 'Exercise 71.3 — Draw', items: [
          'Draw your favourite food.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'What food is white and cooked in water?', a: ['rice'] },
       { q: 'What food comes from a fish?', a: ['fish'] },
       { q: 'What food is made into bread?', a: ['flour', 'wheat'] }]),

    D(2, '🍎', 'Fruits',
      'Name common fruits.',
      `<p class='big-emoji'>🍎 🍌 🥭 🍊 🍍 🍈</p>

       <h3>Common Fruits</h3>
       <ul>
         <li>🍎 <b>apple</b></li>
         <li>🍌 <b>banana</b></li>
         <li>🥭 <b>mango</b></li>
         <li>🍊 <b>orange</b></li>
         <li>🍍 <b>pineapple</b></li>
         <li>🍈 <b>pawpaw</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 fruits and colour them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which fruit is yellow and long?</p>
       <p><b>Answer:</b> A <b>banana</b>.</p>`,

      [{ heading: 'Exercise 72.1 — Answer', items: [
          'Which fruit is yellow?',
          'Which fruit is orange?',
          'Which fruit is green?',
          'Which fruit do you like best?'
        ]},
       { heading: 'Exercise 72.2 — Fill in the blank', items: [
          'I like to eat ___.',
          'A ___ is yellow.',
          'An ___ is orange.'
        ]},
       { heading: 'Exercise 72.3 — Draw', items: [
          'Draw 3 fruits and colour them.'
        ]}],

      `<p><b>72.1:</b> 1. Banana 2. Orange 3. Apple/pawpaw 4. (any)</p>`,

      [{ q: 'What fruit is yellow and long?', a: ['banana'] },
       { q: 'What fruit is orange and round?', a: ['orange'] },
       { q: 'Name 3 fruits.', a: ['apple', 'banana', 'mango', 'any'] }]),

    D(3, '🥤', 'Drinks',
      'Name common drinks.',
      `<p class='big-emoji'>🥤 🥛 ☕ 🧃 🍫</p>

       <h3>Common Drinks</h3>
       <ul>
         <li>💧 <b>water</b></li>
         <li>🥛 <b>milk</b></li>
         <li>☕ <b>tea</b></li>
         <li>🧃 <b>juice</b></li>
         <li>🍫 <b>cocoa</b></li>
         <li>🥤 <b>soft drink</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 drinks you like.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the best drink for your body?</p>
       <p><b>Answer:</b> <b>Water</b> is the best drink.</p>`,

      [{ heading: 'Exercise 73.1 — Answer', items: [
          'What do you drink in the morning?',
          'What is the best drink for your body?',
          'What drink comes from a cow?'
        ]},
       { heading: 'Exercise 73.2 — Fill in the blank', items: [
          'I drink ___ every day.',
          '___ comes from a cow.',
          'The best drink for my body is ___.'
        ]},
       { heading: 'Exercise 73.3 — Draw', items: [
          'Draw 3 drinks.'
        ]}],

      `<p><b>73.1:</b> 1. Tea/cocoa/milk 2. Water 3. Milk</p>`,

      [{ q: 'What is the best drink?', a: ['water'] },
       { q: 'What drink comes from a cow?', a: ['milk'] },
       { q: 'Name 3 drinks.', a: ['water', 'milk', 'tea', 'any'] }]),

    D(4, '📝', 'Food Sentences',
      'Write sentences about food.',
      `<p class='big-emoji'>✍️ 🍽️ 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I like <b>rice</b>.</li>
         <li>I eat <b>bread</b> in the morning.</li>
         <li>I drink <b>water</b> every day.</li>
         <li>My favourite food is <b>rice and stew</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your favourite meal. Write a sentence about it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ rice."</p>
       <p><b>Answer:</b> I <b>like</b> rice.</p>`,

      [{ heading: 'Exercise 74.1 — Write 3 sentences', items: [
          'I like ______.',
          'I eat ______.',
          'I drink ______.'
        ]},
       { heading: 'Exercise 74.2 — Fill in the blank', items: [
          'I ___ rice.',
          'I eat ___ in the morning.',
          'I drink ___ every day.'
        ]},
       { heading: 'Exercise 74.3 — Draw', items: [
          'Draw your favourite meal.'
        ]}],

      `<p><b>74.2:</b> 1. like 2. bread 3. water</p>`,

      [{ q: 'Complete: I ___ rice.', a: ['like', 'eat'] },
       { q: 'Complete: I drink ___.', a: ['water', 'milk', 'any'] }]),

    D(5, '🎨', 'Food Poster',
      'Consolidate learning about food.',
      `<p>Today we make a "Food" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Food I Eat"</b></li>
         <li>Draw 6 foods.</li>
         <li>Label each food.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the name of each food.</p>`,

      [{ heading: 'Exercise 75.1 — Draw your food poster', items: [
          'Rice',
          'Beans',
          'Bread',
          'Yam',
          'Mango',
          'Fish'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 foods.', a: ['rice', 'beans', 'bread', 'any'] },
       { q: 'Name 3 fruits.', a: ['apple', 'banana', 'mango', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Animals (continued)
  // ═══════════════════════════════════════════════════════════════════

  { week: 17, theme: 'Animals', days: [

    D(1, '🐕', 'Pets',
      'Name common pets and how to care for them.',
      `<p class='big-emoji'>🐕 🐈 🐦 🐟 🐰</p>

       <h3>Common Pets</h3>
       <ul>
         <li>🐕 <b>dog</b> — says "woof"</li>
         <li>🐈 <b>cat</b> — says "meow"</li>
         <li>🐦 <b>bird</b> — sings</li>
         <li>🐟 <b>fish</b> — lives in water</li>
         <li>🐰 <b>rabbit</b> — is soft and friendly</li>
       </ul>

       <h3>How to Care for a Pet</h3>
       <ul>
         <li>Give it food and water.</li>
         <li>Give it a clean place to sleep.</li>
         <li>Play with it gently.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 pets and write their names.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which pet says "meow"?</p>
       <p><b>Answer:</b> A <b>cat</b>.</p>`,

      [{ heading: 'Exercise 76.1 — Answer', items: [
          'Which pet says "woof"?',
          'Which pet says "meow"?',
          'Which pet lives in water?'
        ]},
       { heading: 'Exercise 76.2 — Fill in the blank', items: [
          'A ___ says woof.',
          'A ___ says meow.',
          'A ___ lives in water.'
        ]},
       { heading: 'Exercise 76.3 — Draw', items: [
          'Draw your favourite pet.'
        ]}],

      `<p><b>76.1:</b> 1. Dog 2. Cat 3. Fish</p>`,

      [{ q: 'Which pet says "meow"?', a: ['cat'] },
       { q: 'Which pet lives in water?', a: ['fish'] },
       { q: 'Name 3 pets.', a: ['dog', 'cat', 'bird', 'any'] }]),

    D(2, '🐄', 'Farm Animals',
      'Name common farm animals and their products.',
      `<p class='big-emoji'>🐄 🐐 🐔 🐑 🐖</p>

       <h3>Common Farm Animals</h3>
       <ul>
         <li>🐄 <b>cow</b> — gives milk and meat</li>
         <li>🐐 <b>goat</b> — gives milk and meat</li>
         <li>🐔 <b>hen</b> — gives eggs and meat</li>
         <li>🐑 <b>sheep</b> — gives wool and meat</li>
         <li>🐖 <b>pig</b> — gives meat</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 farm animals.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which animal gives us milk?</p>
       <p><b>Answer:</b> A <b>cow</b> (or a goat).</p>`,

      [{ heading: 'Exercise 77.1 — Answer', items: [
          'Which animal gives us milk?',
          'Which animal gives us eggs?',
          'Which animal gives us wool?'
        ]},
       { heading: 'Exercise 77.2 — Fill in the blank', items: [
          'A ___ gives milk.',
          'A ___ gives eggs.',
          'A ___ gives wool.'
        ]},
       { heading: 'Exercise 77.3 — Draw', items: [
          'Draw 3 farm animals.'
        ]}],

      `<p><b>77.1:</b> 1. Cow 2. Hen 3. Sheep</p>`,

      [{ q: 'Which animal gives us milk?', a: ['cow', 'goat'] },
       { q: 'Which animal gives us eggs?', a: ['hen', 'chicken'] },
       { q: 'Which animal gives wool?', a: ['sheep'] }]),

    D(3, '🦁', 'Wild Animals',
      'Name common wild animals.',
      `<p class='big-emoji'>🦁 🐘 🐒 🦒 🐍</p>

       <h3>Common Wild Animals</h3>
       <ul>
         <li>🦁 <b>lion</b> — king of the jungle</li>
         <li>🐘 <b>elephant</b> — has a long trunk</li>
         <li>🐒 <b>monkey</b> — swings on trees</li>
         <li>🦒 <b>giraffe</b> — has a long neck</li>
         <li>🐍 <b>snake</b> — long and legless</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 wild animals in a forest scene.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which wild animal is the king of the jungle?</p>
       <p><b>Answer:</b> A <b>lion</b>.</p>`,

      [{ heading: 'Exercise 78.1 — Answer', items: [
          'Which animal is the king of the jungle?',
          'Which animal has a long neck?',
          'Which animal has a trunk?'
        ]},
       { heading: 'Exercise 78.2 — Fill in the blank', items: [
          'A ___ is the king of the jungle.',
          'A ___ has a long neck.',
          'An ___ has a long trunk.'
        ]},
       { heading: 'Exercise 78.3 — Draw', items: [
          'Draw your favourite wild animal.'
        ]}],

      `<p><b>78.1:</b> 1. Lion 2. Giraffe 3. Elephant</p>`,

      [{ q: 'Which animal has a long neck?', a: ['giraffe'] },
       { q: 'Which animal is the king of the jungle?', a: ['lion'] },
       { q: 'Which animal has a trunk?', a: ['elephant'] }]),

    D(4, '📝', 'Animal Sentences',
      'Write sentences about animals.',
      `<p class='big-emoji'>✍️ 🐾 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>The <b>dog</b> is my pet.</li>
         <li>The <b>cow</b> gives milk.</li>
         <li>The <b>lion</b> lives in the jungle.</li>
         <li>The <b>fish</b> lives in water.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw an animal and write a sentence about it.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The ___ gives milk."</p>
       <p><b>Answer:</b> The <b>cow</b> gives milk.</p>`,

      [{ heading: 'Exercise 79.1 — Write 3 sentences', items: [
          'The ______ is my pet.',
          'The ______ gives milk.',
          'The ______ lives in the jungle.'
        ]},
       { heading: 'Exercise 79.2 — Fill in the blank', items: [
          'The ___ gives milk.',
          'The ___ is my pet.',
          'The ___ lives in the jungle.'
        ]},
       { heading: 'Exercise 79.3 — Draw', items: [
          'Draw an animal and write a sentence.'
        ]}],

      `<p><b>79.2:</b> 1. cow (or goat) 2. dog (or cat) 3. lion</p>`,

      [{ q: 'Complete: The ___ gives milk.', a: ['cow', 'goat'] },
       { q: 'Complete: The ___ is my pet.', a: ['dog', 'cat', 'any'] }]),

    D(5, '🎨', 'Animal Poster',
      'Consolidate learning about animals.',
      `<p>Today we make an "Animal" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Animals"</b></li>
         <li>Draw 6 animals: 2 pets, 2 farm animals, 2 wild animals.</li>
         <li>Write each animal\'s name.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each animal\'s name.</p>`,

      [{ heading: 'Exercise 80.1 — Draw your animal poster', items: [
          '2 pets',
          '2 farm animals',
          '2 wild animals'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 animals.', a: ['dog', 'cat', 'cow', 'lion', 'any'] },
       { q: 'Which animal gives milk?', a: ['cow', 'goat'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Community Helpers
  // ═══════════════════════════════════════════════════════════════════

  { week: 18, theme: 'Community Helpers', days: [

    D(1, '👩‍⚕️', 'People Who Help Us',
      'Name people in the community who help us.',
      `<p class='big-emoji'>👩‍⚕️ 👨‍🏫 👮 👨‍🌾 🧑‍🚒</p>

       <h3>Community Helpers</h3>
       <ul>
         <li>👩‍⚕️ <b>doctor</b> — treats sick people</li>
         <li>👩‍⚕️ <b>nurse</b> — helps the doctor</li>
         <li>👨‍🏫 <b>teacher</b> — teaches children</li>
         <li>👨‍🌾 <b>farmer</b> — grows food</li>
         <li>👮 <b>police officer</b> — keeps us safe</li>
         <li>🧑‍🚒 <b>firefighter</b> — puts out fires</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 community helpers.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who helps sick people?</p>
       <p><b>Answer:</b> A <b>doctor</b> (or a nurse).</p>`,

      [{ heading: 'Exercise 81.1 — Answer', items: [
          'Who helps sick people?',
          'Who teaches children?',
          'Who keeps us safe?',
          'Who grows food?'
        ]},
       { heading: 'Exercise 81.2 — Fill in the blank', items: [
          'A ___ treats sick people.',
          'A ___ teaches children.',
          'A ___ grows food.',
          'A ___ keeps us safe.'
        ]},
       { heading: 'Exercise 81.3 — Draw', items: [
          'Draw 3 community helpers.'
        ]}],

      `<p><b>81.1:</b> 1. Doctor 2. Teacher 3. Police officer 4. Farmer</p>`,

      [{ q: 'Who helps sick people?', a: ['doctor', 'nurse'] },
       { q: 'Who teaches children?', a: ['teacher'] },
       { q: 'Who keeps us safe?', a: ['police', 'police officer'] }]),

    D(2, '👮', 'Police & Firefighter',
      'Know about the police and firefighters.',
      `<p class='big-emoji'>👮 🧑‍🚒 🚒 🚓</p>

       <h3>Police Officer</h3>
       <ul>
         <li>Keeps people safe.</li>
         <li>Stops criminals.</li>
         <li>Directs traffic.</li>
         <li>Helps in emergencies.</li>
       </ul>

       <h3>Firefighter</h3>
       <ul>
         <li>Puts out fires.</li>
         <li>Rescues people from burning buildings.</li>
         <li>Educates people about fire safety.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a police officer and a firefighter.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Who puts out fires?</p>
       <p><b>Answer:</b> A <b>firefighter</b>.</p>`,

      [{ heading: 'Exercise 82.1 — Answer', items: [
          'Who keeps us safe?',
          'Who puts out fires?',
          'What does a police officer do?',
          'What does a firefighter do?'
        ]},
       { heading: 'Exercise 82.2 — Fill in the blank', items: [
          'A ___ keeps us safe.',
          'A ___ puts out fires.'
        ]},
       { heading: 'Exercise 82.3 — Draw', items: [
          'Draw a fire engine.'
        ]}],

      `<p><b>82.1:</b> 1. Police officer 2. Firefighter 3. Keeps people safe, stops criminals 4. Puts out fires, rescues people</p>`,

      [{ q: 'Who puts out fires?', a: ['firefighter', 'fireman'] },
       { q: 'Who keeps us safe?', a: ['police', 'police officer'] }]),

    D(3, '🌾', 'Farmer',
      'Know about farmers and their work.',
      `<p class='big-emoji'>👨‍🌾 🌾 🍚 🥕</p>

       <h3>Farmers</h3>
       <ul>
         <li>Grow crops like rice, maize, cassava.</li>
         <li>Rear animals like cows, goats, and hens.</li>
         <li>Give us food to eat.</li>
         <li>Work hard every day.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a farmer working on a farm.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What does a farmer do?</p>
       <p><b>Answer:</b> A farmer <b>grows crops and rears animals</b>.</p>`,

      [{ heading: 'Exercise 83.1 — Answer', items: [
          'What does a farmer do?',
          'What crops do farmers grow?',
          'What animals do farmers rear?'
        ]},
       { heading: 'Exercise 83.2 — Fill in the blank', items: [
          'A farmer grows ___.',
          'A farmer rears ___.'
        ]},
       { heading: 'Exercise 83.3 — Draw', items: [
          'Draw a farm with crops and animals.'
        ]}],

      `<p><b>83.1:</b> 1. Grows crops and rears animals 2. Rice, maize, cassava 3. Cows, goats, hens</p>`,

      [{ q: 'What does a farmer do?', a: ['grows crops', 'rears animals', 'any'] },
       { q: 'What crops do farmers grow?', a: ['rice', 'maize', 'cassava', 'any'] }]),

    D(4, '📝', 'Helper Sentences',
      'Write sentences about community helpers.',
      `<p class='big-emoji'>✍️ 👩‍⚕️ 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>The <b>doctor</b> helps sick people.</li>
         <li>The <b>teacher</b> teaches children.</li>
         <li>The <b>farmer</b> grows food.</li>
         <li>The <b>police officer</b> keeps us safe.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a helper and write a sentence about them.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The ___ helps sick people."</p>
       <p><b>Answer:</b> The <b>doctor</b> helps sick people.</p>`,

      [{ heading: 'Exercise 84.1 — Write 3 sentences', items: [
          'The ______ helps ______.',
          'The ______ helps ______.',
          'The ______ helps ______.'
        ]},
       { heading: 'Exercise 84.2 — Fill in the blank', items: [
          'The ___ helps sick people.',
          'The ___ teaches children.',
          'The ___ grows food.'
        ]},
       { heading: 'Exercise 84.3 — Draw', items: [
          'Draw a helper and write a sentence.'
        ]}],

      `<p><b>84.2:</b> 1. doctor 2. teacher 3. farmer</p>`,

      [{ q: 'Complete: The ___ helps sick people.', a: ['doctor', 'nurse'] },
       { q: 'Complete: The ___ teaches children.', a: ['teacher'] }]),

    D(5, '🎨', 'Helper Poster',
      'Consolidate learning about community helpers.',
      `<p>Today we make a "Community Helpers" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Community Helpers"</b></li>
         <li>Draw 6 community helpers.</li>
         <li>Write what each one does.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say what each helper does.</p>`,

      [{ heading: 'Exercise 85.1 — Draw your helper poster', items: [
          'Doctor',
          'Teacher',
          'Farmer',
          'Police officer',
          'Firefighter',
          'Nurse'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 community helpers.', a: ['doctor', 'teacher', 'farmer', 'any'] },
       { q: 'Who helps sick people?', a: ['doctor', 'nurse'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Transport
  // ═══════════════════════════════════════════════════════════════════

  { week: 19, theme: 'Transport', days: [

    D(1, '🚗', 'Land Transport',
      'Name types of land transport.',
      `<p class='big-emoji'>🚗 🚌 🚲 🏍️ 🚛 🚂</p>

       <h3>Land Transport</h3>
       <ul>
         <li>🚗 <b>car</b> — 4 wheels</li>
         <li>🚌 <b>bus</b> — carries many people</li>
         <li>🚲 <b>bicycle</b> — 2 wheels</li>
         <li>🏍️ <b>motorcycle</b> — 2 wheels; moves faster</li>
         <li>🚛 <b>lorry</b> — carries goods</li>
         <li>🚂 <b>train</b> — runs on rails</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 types of land transport.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which one has 2 wheels?</p>
       <p><b>Answer:</b> A <b>bicycle</b> (or a motorcycle).</p>`,

      [{ heading: 'Exercise 86.1 — Answer', items: [
          'Which one has 2 wheels?',
          'Which one carries many people?',
          'Which one runs on rails?'
        ]},
       { heading: 'Exercise 86.2 — Fill in the blank', items: [
          'A ___ has 2 wheels.',
          'A ___ carries many people.',
          'A ___ runs on rails.'
        ]},
       { heading: 'Exercise 86.3 — Draw', items: [
          'Draw 3 types of land transport.'
        ]}],

      `<p><b>86.1:</b> 1. Bicycle 2. Bus 3. Train</p>`,

      [{ q: 'Which one has 2 wheels?', a: ['bicycle', 'motorcycle'] },
       { q: 'Which one carries many people?', a: ['bus', 'lorry', 'train'] },
       { q: 'Which one runs on rails?', a: ['train'] }]),

    D(2, '✈️', 'Air Transport',
      'Name types of air transport.',
      `<p class='big-emoji'>✈️ 🚁 🚀 🎈</p>

       <h3>Air Transport</h3>
       <ul>
         <li>✈️ <b>aeroplane</b> — flies high</li>
         <li>🚁 <b>helicopter</b> — can hover</li>
         <li>🚀 <b>rocket</b> — goes to space</li>
         <li>🎈 <b>hot air balloon</b> — floats in the sky</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 types of air transport.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which one goes to space?</p>
       <p><b>Answer:</b> A <b>rocket</b>.</p>`,

      [{ heading: 'Exercise 87.1 — Answer', items: [
          'Which one flies high?',
          'Which one goes to space?',
          'Which one can hover?'
        ]},
       { heading: 'Exercise 87.2 — Fill in the blank', items: [
          'An ___ flies high.',
          'A ___ goes to space.',
          'A ___ can hover.'
        ]},
       { heading: 'Exercise 87.3 — Draw', items: [
          'Draw an aeroplane.'
        ]}],

      `<p><b>87.1:</b> 1. Aeroplane 2. Rocket 3. Helicopter</p>`,

      [{ q: 'Which one goes to space?', a: ['rocket'] },
       { q: 'Which one flies high?', a: ['aeroplane', 'helicopter', 'any'] },
       { q: 'Which one can hover?', a: ['helicopter'] }]),

    D(3, '🚢', 'Water Transport',
      'Name types of water transport.',
      `<p class='big-emoji'>🚢 🛶 ⛵ 🚤</p>

       <h3>Water Transport</h3>
       <ul>
         <li>🚢 <b>ship</b> — carries many people and goods</li>
         <li>🛶 <b>canoe</b> — small boat</li>
         <li>⛵ <b>boat</b> — sails on water</li>
         <li>🚤 <b>speedboat</b> — moves fast</li>
         <li>🚢 <b>ferry</b> — carries people across water</li>
         <li>⚓ <b>submarine</b> — goes under water</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a ship on water.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Which one goes under water?</p>
       <p><b>Answer:</b> A <b>submarine</b>.</p>`,

      [{ heading: 'Exercise 88.1 — Answer', items: [
          'Which one goes under water?',
          'Which one is small?',
          'Which one carries many people?'
        ]},
       { heading: 'Exercise 88.2 — Fill in the blank', items: [
          'A ___ goes under water.',
          'A ___ is small.',
          'A ___ carries many people.'
        ]},
       { heading: 'Exercise 88.3 — Draw', items: [
          'Draw 3 types of water transport.'
        ]}],

      `<p><b>88.1:</b> 1. Submarine 2. Canoe 3. Ship</p>`,

      [{ q: 'Which one goes under water?', a: ['submarine'] },
       { q: 'Which one is small?', a: ['canoe', 'boat'] },
       { q: 'Which one carries many people?', a: ['ship', 'ferry'] }]),

    D(4, '📝', 'Transport Sentences',
      'Write sentences about transport.',
      `<p class='big-emoji'>✍️ 🚗 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I go to school by <b>car</b>.</li>
         <li>The <b>bus</b> is big.</li>
         <li>The <b>aeroplane</b> flies high.</li>
         <li>The <b>ship</b> sails on water.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your favourite transport and write a sentence.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I go to school by ___."</p>
       <p><b>Answer:</b> I go to school by <b>car</b> (or bus).</p>`,

      [{ heading: 'Exercise 89.1 — Write 3 sentences', items: [
          'I go to school by ______.',
          'The ______ is fast.',
          'The ______ is slow.'
        ]},
       { heading: 'Exercise 89.2 — Fill in the blank', items: [
          'I go to school by ___.',
          'The ___ is fast.',
          'The ___ is slow.'
        ]},
       { heading: 'Exercise 89.3 — Draw', items: [
          'Draw your favourite transport.'
        ]}],

      `<p><b>89.2:</b> 1. (any) 2. (any fast) 3. (any slow)</p>`,

      [{ q: 'Complete: I go to school by ___.', a: ['any'] },
       { q: 'Complete: The ___ is fast.', a: ['any'] }]),

    D(5, '🎨', 'Transport Poster',
      'Consolidate learning about transport.',
      `<p>Today we make a "Transport" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Transport"</b></li>
         <li>Draw 2 land, 2 air, 2 water transport.</li>
         <li>Label each.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each type of transport.</p>`,

      [{ heading: 'Exercise 90.1 — Draw your transport poster', items: [
          'Car, bus',
          'Aeroplane, helicopter',
          'Ship, canoe'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 types of transport.', a: ['car', 'bus', 'aeroplane', 'ship', 'any'] },
       { q: 'Which one flies?', a: ['aeroplane', 'helicopter'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / READING — Our Home
  // ═══════════════════════════════════════════════════════════════════

  { week: 20, theme: 'Our Home', days: [

    D(1, '🏠', 'Rooms in a Home',
      'Name the rooms in a home.',
      `<p class='big-emoji'>🏠 🛏️ 🍳 🚿 🚽</p>

       <h3>Rooms in a Home</h3>
       <ul>
         <li>🛋️ <b>sitting room</b> — where we relax</li>
         <li>🛏️ <b>bedroom</b> — where we sleep</li>
         <li>🍳 <b>kitchen</b> — where we cook</li>
         <li>🚿 <b>bathroom</b> — where we bathe</li>
         <li>🚽 <b>toilet</b> — where we ease ourselves</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your house with 3 rooms labelled.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Where do you sleep?</p>
       <p><b>Answer:</b> In the <b>bedroom</b>.</p>`,

      [{ heading: 'Exercise 91.1 — Answer', items: [
          'Where do you sleep?',
          'Where do you cook?',
          'Where do you bathe?'
        ]},
       { heading: 'Exercise 91.2 — Fill in the blank', items: [
          'I sleep in the ___.',
          'I cook in the ___.',
          'I bathe in the ___.'
        ]},
       { heading: 'Exercise 91.3 — Draw', items: [
          'Draw your bedroom.'
        ]}],

      `<p><b>91.1:</b> 1. Bedroom 2. Kitchen 3. Bathroom</p>`,

      [{ q: 'Where do you sleep?', a: ['bedroom'] },
       { q: 'Where do you cook?', a: ['kitchen'] },
       { q: 'Where do you bathe?', a: ['bathroom'] }]),

    D(2, '🪑', 'Things in a Home',
      'Name common household items.',
      `<p class='big-emoji'>🪑 🛏️ 🚪 🪞 ⏰</p>

       <h3>Things in a Home</h3>
       <ul>
         <li>🪑 <b>chair</b> — for sitting</li>
         <li>🛏️ <b>bed</b> — for sleeping</li>
         <li>🚪 <b>door</b> — entrance to a room</li>
         <li>🪟 <b>window</b> — lets in light and air</li>
         <li>🪞 <b>mirror</b> — for looking at yourself</li>
         <li>⏰ <b>clock</b> — tells time</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 things in your home.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you sit on?</p>
       <p><b>Answer:</b> A <b>chair</b>.</p>`,

      [{ heading: 'Exercise 92.1 — Answer', items: [
          'What do you sit on?',
          'What do you sleep on?',
          'What tells the time?'
        ]},
       { heading: 'Exercise 92.2 — Fill in the blank', items: [
          'I sit on a ___.',
          'I sleep on a ___.',
          'The ___ tells the time.'
        ]},
       { heading: 'Exercise 92.3 — Draw', items: [
          'Draw 3 things in your sitting room.'
        ]}],

      `<p><b>92.1:</b> 1. Chair 2. Bed 3. Clock</p>`,

      [{ q: 'What do you sit on?', a: ['chair'] },
       { q: 'What tells the time?', a: ['clock', 'watch'] },
       { q: 'What do you sleep on?', a: ['bed'] }]),

    D(3, '🧹', 'Keeping Home Clean',
      'Describe how to keep a home clean.',
      `<p class='big-emoji'>🧹 🧼 🗑️ 🧺</p>

       <h3>Keeping Home Clean</h3>
       <ul>
         <li>🧹 <b>Sweep</b> the floor.</li>
         <li>🧼 <b>Wash</b> the dishes.</li>
         <li>🧺 <b>Wash</b> clothes.</li>
         <li>🗑️ <b>Throw</b> rubbish in the bin.</li>
         <li>🪟 <b>Open</b> windows for fresh air.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw yourself sweeping your home.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you use to sweep?</p>
       <p><b>Answer:</b> A <b>broom</b>.</p>`,

      [{ heading: 'Exercise 93.1 — Answer', items: [
          'What do you use to sweep?',
          'Where do you throw rubbish?',
          'Why should we keep our home clean?'
        ]},
       { heading: 'Exercise 93.2 — Fill in the blank', items: [
          'I sweep with a ___.',
          'I throw rubbish in the ___.',
          'I wash dishes with ___ and water.'
        ]},
       { heading: 'Exercise 93.3 — Draw', items: [
          'Draw 3 things you use to clean your home.'
        ]}],

      `<p><b>93.1:</b> 1. Broom 2. Bin 3. To be healthy</p>`,

      [{ q: 'What do you sweep with?', a: ['broom'] },
       { q: 'Where does rubbish go?', a: ['bin', 'trash', 'garbage'] },
       { q: 'Why keep home clean?', a: ['to stay healthy', 'any'] }]),

    D(4, '📝', 'Home Sentences',
      'Write sentences about your home.',
      `<p class='big-emoji'>✍️ 🏠 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>My home is <b>clean</b>.</li>
         <li>I sleep in my <b>bedroom</b>.</li>
         <li>I eat in the <b>kitchen</b>.</li>
         <li>I sit in the <b>sitting room</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw your home and write a sentence.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I sleep in my ___."</p>
       <p><b>Answer:</b> I sleep in my <b>bedroom</b>.</p>`,

      [{ heading: 'Exercise 94.1 — Write 3 sentences', items: [
          'My home is ______.',
          'I sleep in my ______.',
          'I eat in the ______.'
        ]},
       { heading: 'Exercise 94.2 — Fill in the blank', items: [
          'I sleep in my ___.',
          'I eat in the ___.',
          'I sit in the ___.'
        ]},
       { heading: 'Exercise 94.3 — Draw', items: [
          'Draw your home.'
        ]}],

      `<p><b>94.2:</b> 1. bedroom 2. kitchen 3. sitting room</p>`,

      [{ q: 'Complete: I sleep in my ___.', a: ['bedroom'] },
       { q: 'Complete: I eat in the ___.', a: ['kitchen', 'dining room'] },
       { q: 'Complete: I sit in the ___.', a: ['sitting room', 'living room'] }]),

    D(5, '🎨', 'Home Poster',
      'Consolidate learning about the home.',
      `<p>Today we make a "My Home" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Home"</b></li>
         <li>Draw your home with rooms labelled.</li>
         <li>Label 6 things in your home.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each room and thing.</p>`,

      [{ heading: 'Exercise 95.1 — Draw your home poster', items: [
          'Bedroom',
          'Kitchen',
          'Chair',
          'Table',
          'Bed',
          'Clock'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 rooms in a home.', a: ['bedroom', 'kitchen', 'bathroom', 'sitting room', 'any'] },
       { q: 'Name 3 things in a home.', a: ['chair', 'table', 'bed', 'any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE — Feelings
  // ═══════════════════════════════════════════════════════════════════

  { week: 21, theme: 'Feelings', days: [

    D(1, '😀', 'Happy & Sad',
      'Name and describe basic feelings.',
      `<p class='big-emoji'>😀 😢 😡 😴 😨 🤩</p>

       <h3>Common Feelings</h3>
       <ul>
         <li>😀 <b>happy</b> — feeling good</li>
         <li>😢 <b>sad</b> — feeling bad</li>
         <li>😡 <b>angry</b> — feeling cross</li>
         <li>😴 <b>tired</b> — feeling sleepy</li>
         <li>😨 <b>scared</b> — feeling afraid</li>
         <li>🤩 <b>excited</b> — feeling thrilled</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 6 faces showing different feelings.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you feel when you get a gift?</p>
       <p><b>Answer:</b> I feel <b>happy</b> (or excited).</p>`,

      [{ heading: 'Exercise 96.1 — Answer', items: [
          'When do you feel happy?',
          'When do you feel sad?',
          'When do you feel tired?'
        ]},
       { heading: 'Exercise 96.2 — Fill in the blank', items: [
          'I feel ___ when I get a gift.',
          'I feel ___ when I am sleepy.',
          'I feel ___ when I lose something.'
        ]},
       { heading: 'Exercise 96.3 — Draw', items: [
          'Draw 3 faces showing 3 different feelings.'
        ]}],

      `<p><b>96.1:</b> 1. When I get a gift 2. When I lose something 3. When I am sleepy</p>`,

      [{ q: 'How do you feel when you get a gift?', a: ['happy', 'excited'] },
       { q: 'How do you feel when you are sleepy?', a: ['tired', 'sleepy'] },
       { q: 'How do you feel when you lose something?', a: ['sad'] }]),

    D(2, '😡', 'Angry & Calm',
      'Describe more complex feelings.',
      `<p class='big-emoji'>😡 😌 😟 😲 😊 🙈</p>

       <h3>More Feelings</h3>
       <ul>
         <li>😡 <b>angry</b> — cross</li>
         <li>😌 <b>calm</b> — peaceful</li>
         <li>😟 <b>worried</b> — troubled</li>
         <li>😲 <b>surprised</b> — amazed</li>
         <li>😊 <b>proud</b> — pleased with yourself</li>
         <li>🙈 <b>shy</b> — nervous with others</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 3 more faces: angry, calm, surprised.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> How do you feel when you do well?</p>
       <p><b>Answer:</b> I feel <b>proud</b>.</p>`,

      [{ heading: 'Exercise 97.1 — Answer', items: [
          'When do you feel angry?',
          'How do you calm down?',
          'How do you feel when you do well?'
        ]},
       { heading: 'Exercise 97.2 — Fill in the blank', items: [
          'I feel ___ when I do well.',
          'I feel ___ when I meet someone new.',
          'I feel ___ when I am cross.'
        ]},
       { heading: 'Exercise 97.3 — Draw', items: [
          'Draw yourself when you are calm.'
        ]}],

      `<p><b>97.1:</b> 1. When someone hurts me 2. Take a deep breath 3. Proud</p>`,

      [{ q: 'How do you feel when you do well?', a: ['proud', 'happy'] },
       { q: 'How do you feel when you meet someone new?', a: ['shy', 'nervous'] },
       { q: 'How do you calm down?', a: ['deep breath', 'count', 'any'] }]),

    D(3, '😊', 'Kindness',
      'Describe what kindness is and how to show it.',
      `<p class='big-emoji'>😊 🤝 ❤️ 🙏</p>

       <h3>Being Kind</h3>
       <ul>
         <li>Sharing what you have.</li>
         <li>Helping someone in need.</li>
         <li>Saying "please" and "thank you".</li>
         <li>Saying "sorry" when you hurt someone.</li>
         <li>Being polite to everyone.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw someone helping another person.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What do you say when someone helps you?</p>
       <p><b>Answer:</b> I say <b>"Thank you"</b>.</p>`,

      [{ heading: 'Exercise 98.1 — Answer', items: [
          'How can you be kind?',
          'When did someone help you?',
          'What do you say when someone helps you?',
          'What do you say when you hurt someone?'
        ]},
       { heading: 'Exercise 98.2 — Fill in the blank', items: [
          'When someone helps me, I say ___.',
          'When I hurt someone, I say ___.',
          'When I want something, I say ___.'
        ]},
       { heading: 'Exercise 98.3 — Draw', items: [
          'Draw a kind act.'
        ]}],

      `<p><b>98.1:</b> 1. Share, help, use kind words 2. (any) 3. Thank you 4. Sorry</p>`,

      [{ q: 'What do you say when someone helps you?', a: ['thank you', 'thanks'] },
       { q: 'What do you say when you hurt someone?', a: ['sorry'] },
       { q: 'How can you be kind?', a: ['share', 'help', 'any'] }]),

    D(4, '📝', 'Feelings Sentences',
      'Write sentences about feelings.',
      `<p class='big-emoji'>✍️ 💭 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I am <b>happy</b> today.</li>
         <li>I feel <b>excited</b> about my birthday.</li>
         <li>I feel <b>sad</b> when it rains.</li>
         <li>I feel <b>proud</b> when I do well.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw how you feel today.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I am ___ today."</p>
       <p><b>Answer:</b> I am <b>happy</b> today.</p>`,

      [{ heading: 'Exercise 99.1 — Write 3 sentences', items: [
          'I am ______ today.',
          'I feel ______ when ______.',
          'I feel ______ when ______.'
        ]},
       { heading: 'Exercise 99.2 — Fill in the blank', items: [
          'I am ___ today.',
          'I feel ___ when ___.',
          'I feel ___ when ___.'
        ]},
       { heading: 'Exercise 99.3 — Draw', items: [
          'Draw how you feel today.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: I am ___ today.', a: ['happy', 'sad', 'tired', 'any'] },
       { q: 'Complete: I feel ___ when ___.', a: ['any'] }]),

    D(5, '🎨', 'Feelings Poster',
      'Consolidate learning about feelings.',
      `<p>Today we make a "Feelings" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"My Feelings"</b></li>
         <li>Draw 6 faces showing different feelings.</li>
         <li>Label each face with the feeling word.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each feeling and when you feel it.</p>`,

      [{ heading: 'Exercise 100.1 — Draw your feelings poster', items: [
          'happy',
          'sad',
          'angry',
          'tired',
          'scared',
          'excited'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 feelings.', a: ['happy', 'sad', 'angry', 'any'] },
       { q: 'When do you feel happy?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: GRAMMAR USAGE — Prepositions
  // ═══════════════════════════════════════════════════════════════════

  { week: 22, theme: 'Prepositions', days: [

    D(1, '📍', 'In, On, Under',
      'Use prepositions to describe position.',
      `<p class='big-emoji'>📦 🐱 🪑</p>

       <h3>Position Words</h3>
       <ul>
         <li><b>in</b> — inside something. <i>The cat is <b>in</b> the box.</i></li>
         <li><b>on</b> — resting on top. <i>The book is <b>on</b> the table.</i></li>
         <li><b>under</b> — below something. <i>The dog is <b>under</b> the chair.</i></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a cat in a box, a book on a table, and a dog under a chair.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The cat is ___ the mat."</p>
       <p><b>Answer:</b> The cat is <b>on</b> the mat.</p>`,

      [{ heading: 'Exercise 101.1 — Complete the sentences', items: [
          'The cat is ___ the mat.',
          'The ball is ___ the box.',
          'The dog is ___ the chair.'
        ]},
       { heading: 'Exercise 101.2 — Say where things are', items: [
          'Where is your book?',
          'Where is your bag?',
          'Where is your shoe?'
        ]},
       { heading: 'Exercise 101.3 — Draw and label', items: [
          'Draw a cat on a mat, a ball in a box, a dog under a chair.'
        ]}],

      `<p><b>101.1:</b> 1. on 2. in 3. under</p>`,

      [{ q: 'The cat is ___ the mat.', a: ['on'] },
       { q: 'The ball is ___ the box.', a: ['in'] },
       { q: 'The dog is ___ the chair.', a: ['under'] }]),

    D(2, '📍', 'Behind, Beside, Between',
      'Use more prepositions to describe position.',
      `<p class='big-emoji'>🚪 🌳 🌲</p>

       <h3>More Position Words</h3>
       <ul>
         <li><b>behind</b> — at the back. <i>The bag is <b>behind</b> the door.</i></li>
         <li><b>beside</b> — next to. <i>She sits <b>beside</b> me.</i></li>
         <li><b>between</b> — in the middle of two things. <i>The ball is <b>between</b> the two chairs.</i></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a tree behind a house, a girl beside a friend, and a ball between two chairs.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The ball is ___ the two chairs."</p>
       <p><b>Answer:</b> The ball is <b>between</b> the two chairs.</p>`,

      [{ heading: 'Exercise 102.1 — Complete the sentences', items: [
          'The tree is ___ the house.',
          'She sits ___ me.',
          'The ball is ___ the two chairs.'
        ]},
       { heading: 'Exercise 102.2 — Say where things are', items: [
          'Where is your friend sitting?',
          'Where is your bag?'
        ]},
       { heading: 'Exercise 102.3 — Draw', items: [
          'Draw a ball between two chairs.'
        ]}],

      `<p><b>102.1:</b> 1. behind 2. beside 3. between</p>`,

      [{ q: 'The tree is ___ the house.', a: ['behind'] },
       { q: 'She sits ___ me.', a: ['beside', 'next to'] },
       { q: 'The ball is ___ the two chairs.', a: ['between'] }]),

    D(3, '📍', 'Over & Through',
      'Use prepositions of movement.',
      `<p class='big-emoji'>🌳 🚂 🛣️</p>

       <h3>Movement Words</h3>
       <ul>
         <li><b>over</b> — above. <i>The bird flies <b>over</b> the tree.</i></li>
         <li><b>through</b> — going inside and out. <i>The train goes <b>through</b> the tunnel.</i></li>
         <li><b>across</b> — from one side to the other. <i>We walked <b>across</b> the road.</i></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a bird flying over a tree, a train going through a tunnel, and a person walking across a road.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The bird flies ___ the tree."</p>
       <p><b>Answer:</b> The bird flies <b>over</b> the tree.</p>`,

      [{ heading: 'Exercise 103.1 — Complete the sentences', items: [
          'The bird flies ___ the tree.',
          'The train goes ___ the tunnel.',
          'We walked ___ the road.'
        ]},
       { heading: 'Exercise 103.2 — Say where you move', items: [
          'How do you cross a road?',
          'How does a plane move in the sky?'
        ]},
       { heading: 'Exercise 103.3 — Draw', items: [
          'Draw a plane flying over a mountain.'
        ]}],

      `<p><b>103.1:</b> 1. over 2. through 3. across</p>`,

      [{ q: 'The bird flies ___ the tree.', a: ['over'] },
       { q: 'The train goes ___ the tunnel.', a: ['through'] },
       { q: 'We walked ___ the road.', a: ['across'] }]),

    D(4, '📝', 'Position Sentences',
      'Write sentences using prepositions.',
      `<p class='big-emoji'>✍️ 📍 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>The book is <b>on</b> the table.</li>
         <li>The ball is <b>under</b> the bed.</li>
         <li>She sits <b>beside</b> her friend.</li>
         <li>The bird flies <b>over</b> the tree.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 2 prepositions and write sentences.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "The book is ___ the table."</p>
       <p><b>Answer:</b> The book is <b>on</b> the table.</p>`,

      [{ heading: 'Exercise 104.1 — Write 3 sentences', items: [
          'The ______ is on the ______.',
          'The ______ is under the ______.',
          'The ______ is in the ______.'
        ]},
       { heading: 'Exercise 104.2 — Fill in the blank', items: [
          'The book is ___ the table.',
          'The ball is ___ the bed.',
          'The bird flies ___ the tree.'
        ]},
       { heading: 'Exercise 104.3 — Draw', items: [
          'Draw a picture showing "in", "on", and "under".'
        ]}],

      `<p><b>104.2:</b> 1. on 2. under 3. over</p>`,

      [{ q: 'Complete: The book is ___ the table.', a: ['on'] },
       { q: 'Complete: The ball is ___ the bed.', a: ['under'] },
       { q: 'Complete: The bird flies ___ the tree.', a: ['over'] }]),

    D(5, '🎨', 'Position Poster',
      'Consolidate learning about prepositions.',
      `<p>Today we make a "Positions" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Where?"</b></li>
         <li>Draw 6 pictures showing: in, on, under, behind, beside, between.</li>
         <li>Write the preposition under each picture.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say each preposition and where the object is.</p>`,

      [{ heading: 'Exercise 105.1 — Draw your position poster', items: [
          'in',
          'on',
          'under',
          'behind',
          'beside',
          'between'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'Name 3 prepositions.', a: ['in', 'on', 'under', 'any'] },
       { q: 'Where is the cat if it is in a box?', a: ['in the box', 'inside'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: ORAL LANGUAGE / GRAMMAR — Telling Time
  // ═══════════════════════════════════════════════════════════════════

  { week: 23, theme: 'Telling Time', days: [

    D(1, '🕐', "O'clock",
      'Read and say the time on the hour.',
      `<p class='big-emoji'>🕐 🕒 🕕 🕘 🕛</p>
       <p>When the <b>long hand</b> is on 12, it is <b>o\'clock</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>1:00 = <b>one o'clock</b></li>
         <li>3:00 = <b>three o'clock</b></li>
         <li>6:00 = <b>six o'clock</b></li>
         <li>9:00 = <b>nine o'clock</b></li>
         <li>12:00 = <b>twelve o'clock</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 5 clocks showing 1:00, 3:00, 6:00, 9:00, 12:00.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 3:00?</p>
       <p><b>Answer:</b> <b>Three o'clock</b>.</p>`,

      [{ heading: 'Exercise 106.1 — Say and write', items: [
          '1:00 = ___', '3:00 = ___', '6:00 = ___', '9:00 = ___', '12:00 = ___'
        ]},
       { heading: 'Exercise 106.2 — Answer', items: [
          'What time do you wake up?',
          'What time do you go to school?',
          'What time do you eat lunch?'
        ]},
       { heading: 'Exercise 106.3 — Draw', items: [
          'Draw a clock showing 3:00.'
        ]}],

      `<p><b>106.1:</b> 1. one o\'clock 2. three o\'clock 3. six o\'clock 4. nine o\'clock 5. twelve o\'clock</p>`,

      [{ q: 'What is 3:00?', a: ['three o\'clock', '3 o\'clock'] },
       { q: 'What is 6:00?', a: ['six o\'clock', '6 o\'clock'] },
       { q: 'What time do you wake up?', a: ['any'] }]),

    D(2, '🕜', 'Half Past',
      'Read and say the time at half past the hour.',
      `<p class='big-emoji'>🕜 🕞 🕢</p>
       <p>When the <b>long hand</b> is on 6, it is <b>half past</b>.</p>

       <h3>Examples</h3>
       <ul>
         <li>1:30 = <b>half past one</b></li>
         <li>3:30 = <b>half past three</b></li>
         <li>5:30 = <b>half past five</b></li>
         <li>7:30 = <b>half past seven</b></li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 clocks showing half past 1, 3, 5, and 7.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is 3:30?</p>
       <p><b>Answer:</b> <b>Half past three</b>.</p>`,

      [{ heading: 'Exercise 107.1 — Say and write', items: [
          '1:30 = ___', '3:30 = ___', '5:30 = ___', '7:30 = ___'
        ]},
       { heading: 'Exercise 107.2 — Answer', items: [
          'What is half past 3?',
          'What is half past 6?'
        ]},
       { heading: 'Exercise 107.3 — Draw', items: [
          'Draw a clock showing half past 4.'
        ]}],

      `<p><b>107.1:</b> 1. half past one 2. half past three 3. half past five 4. half past seven</p>`,

      [{ q: 'What is 3:30?', a: ['half past three', '3:30'] },
       { q: 'What is 5:30?', a: ['half past five', '5:30'] }]),

    D(3, '⏰', 'Morning & Evening',
      'Understand the different times of the day.',
      `<p class='big-emoji'>🌅 ☀️ 🌆 🌙</p>

       <h3>Times of the Day</h3>
       <ul>
         <li><b>Morning</b> — 6 a.m. to 12 p.m. (sun rises)</li>
         <li><b>Afternoon</b> — 12 p.m. to 6 p.m. (sun is high)</li>
         <li><b>Evening</b> — 6 p.m. to 9 p.m. (sun sets)</li>
         <li><b>Night</b> — 9 p.m. to 6 a.m. (moon and stars)</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw 4 pictures showing morning, afternoon, evening, and night.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> When do you wake up?</p>
       <p><b>Answer:</b> In the <b>morning</b>.</p>`,

      [{ heading: 'Exercise 108.1 — Answer', items: [
          'What do you do in the morning?',
          'What do you do in the evening?',
          'When do you sleep?'
        ]},
       { heading: 'Exercise 108.2 — Fill in the blank', items: [
          'I wake up in the ___.',
          'I sleep at ___.',
          'I eat lunch in the ___.'
        ]},
       { heading: 'Exercise 108.3 — Draw', items: [
          'Draw what the sky looks like at night.'
        ]}],

      `<p><b>108.1:</b> 1. Wake up, go to school 2. Eat supper, read 3. At night</p>`,

      [{ q: 'When do you wake up?', a: ['morning'] },
       { q: 'When do you sleep?', a: ['night', 'evening'] }]),

    D(4, '📝', 'Time Sentences',
      'Write sentences using time words.',
      `<p class='big-emoji'>✍️ ⏰ 📝</p>

       <h3>Example Sentences</h3>
       <ul>
         <li>I wake up at <b>six o\'clock</b>.</li>
         <li>I eat lunch at <b>half past twelve</b>.</li>
         <li>I sleep at <b>nine o\'clock</b>.</li>
       </ul>

       <h3>Illustration (Draw This!)</h3>
       <p>Draw a clock showing the time you wake up.</p>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I wake up at ___."</p>
       <p><b>Answer:</b> I wake up at <b>six o\'clock</b>.</p>`,

      [{ heading: 'Exercise 109.1 — Write 3 sentences', items: [
          'I wake up at ______.',
          'I eat lunch at ______.',
          'I sleep at ______.'
        ]},
       { heading: 'Exercise 109.2 — Fill in the blank', items: [
          'I wake up at ___.',
          'I sleep at ___.'
        ]},
       { heading: 'Exercise 109.3 — Draw', items: [
          'Draw a clock showing the time you eat lunch.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Complete: I wake up at ___.', a: ['any'] },
       { q: 'Complete: I sleep at ___.', a: ['any'] }]),

    D(5, '🎨', 'Clock Poster',
      'Consolidate learning about time.',
      `<p>Today we make a "Clock" poster.</p>

       <h3>What to Draw</h3>
       <ul>
         <li>Title: <b>"Telling Time"</b></li>
         <li>Draw 5 clocks showing: 3:00, 6:00, 9:00, 12:00, and 4:30.</li>
         <li>Write the time under each clock.</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your poster. Say the time on each clock.</p>`,

      [{ heading: 'Exercise 110.1 — Draw your clock poster', items: [
          '3:00',
          '6:00',
          '9:00',
          '12:00',
          '4:30'
        ]}],

      `<p>⭐ for a complete poster.</p>`,

      [{ q: 'What is 3:00?', a: ['three o\'clock'] },
       { q: 'What is 4:30?', a: ['half past four'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // STRAND: REVIEW & CELEBRATION — Week 24
  // ═══════════════════════════════════════════════════════════════════

  { week: 24, theme: 'Review & Celebration', days: [

    D(1, '🔁', 'Review Letters & Words',
      'Review the letters of the alphabet and word families.',
      `<p class='big-emoji'>🔤 📚 🎉</p>

       <h3>Review</h3>
       <ul>
         <li>Sing the alphabet song.</li>
         <li>Review A–Z.</li>
         <li>Review word families: -at, -ig, -un, -og.</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What letter comes after M?</p>
       <p><b>Answer:</b> <b>N</b>.</p>`,

      [{ heading: 'Exercise 111.1 — Say', items: [
          'Sing A–Z.',
          'Say 3 words from the -at family.',
          'Say 3 words from the -ig family.'
        ]},
       { heading: 'Exercise 111.2 — Answer', items: [
          'What letter comes after M?',
          'What letter comes before D?',
          'Which word ends in -un?'
        ]},
       { heading: 'Exercise 111.3 — Write', items: [
          'Write A–Z.',
          'Write 5 words you have learned.'
        ]}],

      `<p><b>111.2:</b> 1. N 2. C 3. sun, run, fun</p>`,

      [{ q: 'What letter comes after M?', a: ['n'] },
       { q: 'What letter comes before D?', a: ['c'] },
       { q: 'Which word ends in -un?', a: ['sun', 'run', 'fun', 'bun'] }]),

    D(2, '🔁', 'Review Sentences & Grammar',
      'Review sentence patterns and grammar.',
      `<p class='big-emoji'>📝 🔁 📝</p>

       <h3>Review</h3>
       <ul>
         <li>Sentence patterns: I am, This is, I can, I like.</li>
         <li>Nouns: people, places, animals, things.</li>
         <li>Verbs: action words.</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Complete: "I ___ happy."</p>
       <p><b>Answer:</b> I <b>am</b> happy.</p>`,

      [{ heading: 'Exercise 112.1 — Write 4 sentences', items: [
          'I am ______.',
          'This is ______.',
          'I can ______.',
          'I like ______.'
        ]},
       { heading: 'Exercise 112.2 — Identify the noun', items: [
          'The boy runs. → ___',
          'I live in Accra. → ___',
          'The dog barks. → ___'
        ]},
       { heading: 'Exercise 112.3 — Fill in the blank', items: [
          'I ___ happy.',
          'This ___ my book.',
          'I ___ sing.'
        ]}],

      `<p><b>112.2:</b> 1. boy 2. Accra 3. dog</p>
       <p><b>112.3:</b> 1. am 2. is 3. can</p>`,

      [{ q: 'Complete: I ___ happy.', a: ['am'] },
       { q: 'Complete: This ___ my book.', a: ['is'] },
       { q: 'Complete: I ___ sing.', a: ['can'] }]),

    D(3, '🔁', 'Review Stories & Reading',
      'Review stories and reading skills.',
      `<p class='big-emoji'>📖 🔁 📖</p>

       <h3>Review Stories</h3>
       <ul>
         <li>The Little Red Hen</li>
         <li>The Tortoise and the Hare</li>
         <li>The Boy Who Cried Wolf</li>
         <li>Goldilocks and the Three Bears</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> What is the lesson of "The Boy Who Cried Wolf"?</p>
       <p><b>Answer:</b> Do not tell lies.</p>`,

      [{ heading: 'Exercise 113.1 — Answer', items: [
          'Which story has a tortoise and a hare?',
          'What did the boy shout?',
          'Whose bed did Goldilocks sleep in?',
          'What is the lesson of "The Little Red Hen"?'
        ]},
       { heading: 'Exercise 113.2 — Retell a story', items: [
          'Tell your favourite story to your parent.'
        ]},
       { heading: 'Exercise 113.3 — Draw', items: [
          'Draw your favourite story character.'
        ]}],

      `<p><b>113.1:</b> 1. The Tortoise and the Hare 2. Wolf! Wolf! 3. Baby Bear\'s 4. If you don\'t help with work, don\'t share the reward.</p>`,

      [{ q: 'Who won the race in the tortoise story?', a: ['tortoise'] },
       { q: 'What did the boy shout?', a: ['wolf'] }]),

    D(4, '🔁', 'Review Topics',
      'Review the topics covered this year.',
      `<p class='big-emoji'>🔁 📚 🎉</p>

       <h3>Topics Covered This Year</h3>
       <ul>
         <li>Family and School</li>
         <li>Colours, Shapes, Numbers</li>
         <li>Food, Animals, Community Helpers</li>
         <li>Transport, Home, Feelings</li>
         <li>Prepositions, Time</li>
       </ul>

       <h3>Worked Example</h3>
       <p><b>Question:</b> Name 3 family members.</p>
       <p><b>Answer:</b> Mother, father, sister.</p>`,

      [{ heading: 'Exercise 114.1 — Say', items: [
          'Name 3 family members.',
          'Name 3 animals.',
          'Name 3 foods.',
          'Name 3 feelings.'
        ]},
       { heading: 'Exercise 114.2 — Answer', items: [
          'What is your favourite topic?',
          'Which new word did you learn?'
        ]},
       { heading: 'Exercise 114.3 — Draw', items: [
          'Draw your favourite topic.'
        ]}],

      `<p>Any correct answers.</p>`,

      [{ q: 'Name 3 family members.', a: ['mother', 'father', 'sister', 'brother', 'any'] },
       { q: 'Name 3 colours.', a: ['red', 'blue', 'yellow', 'green', 'any'] }]),

    D(5, '🎉', 'Celebration Day!',
      'Celebrate the year\'s learning.',
      `<p class='big-emoji'>🎉 ⭐ 🏆 🎊</p>

       <h3>You Did It!</h3>
       <p>Congratulations! You have completed Grade 2 English!</p>

       <h3>What to Do Today</h3>
       <ul>
         <li>Show your posters to your family.</li>
         <li>Read your favourite story aloud.</li>
         <li>Sing the alphabet song.</li>
         <li>Give yourself a big star! ⭐</li>
       </ul>

       <h3>Show and Tell</h3>
       <p>Show your best work to your family.</p>`,

      [{ heading: 'Exercise 115.1 — Celebrate!', items: [
          'Show your posters',
          'Read a story aloud',
          'Sing the alphabet song',
          'Give yourself a big star! ⭐'
        ]}],

      `<p>⭐ for a wonderful year of learning!</p>`,

      [{ q: 'What did you enjoy most?', a: ['any'] },
       { q: 'What is your favourite story?', a: ['any'] }])
  ]},

  // ═══════════════════════════════════════════════════════════════════
  // REMAINING WEEKS 10–24
  // ═══════════════════════════════════════════════════════════════════

  wk(10, 'Rhyming Words',     ['-at Rhymes', '-an Rhymes', '-op Rhymes', 'Rhyme Sentences', 'Rhyme Poster']),
  wk(11, 'My Family',         ['My Family', 'I love my…', 'My family has…', 'Draw Your Family', 'Talk About Family']),
  wk(12, 'My School',         ['My School', 'At school I…', 'My friend is…', 'Draw Your School', 'Show and Tell']),
  wk(13, 'Days & Months',     ['Days of the Week', 'Months', 'Yesterday/Today/Tomorrow', 'Day Sentences', 'Days Poster']),
  wk(14, 'Weather',           ['Sunny & Rainy', 'Rainy Day', 'Sunny Day', 'Weather Sentences', 'Weather Chart']),
  wk(15, 'My Body',           ['My Head', 'My Body', 'Keeping Clean', 'Body Sentences', 'Body Poster']),
  wk(16, 'Food',              ['Food We Eat', 'Fruits', 'Drinks', 'Food Sentences', 'Food Poster']),
  wk(17, 'Animals',           ['Pets', 'Farm Animals', 'Wild Animals', 'Animal Sentences', 'Animal Poster']),
  wk(18, 'Community Helpers', ['People Who Help Us', 'Police & Firefighter', 'Farmer', 'Helper Sentences', 'Helper Poster']),
  wk(19, 'Transport',         ['Land', 'Air', 'Water', 'Transport Sentences', 'Transport Poster']),
  wk(20, 'Our Home',          ['Rooms', 'Things', 'Keeping Clean', 'Home Sentences', 'Home Poster']),
  wk(21, 'Feelings',          ['Happy & Sad', 'Angry & Calm', 'Kindness', 'Feelings Sentences', 'Feelings Poster']),
  wk(22, 'Prepositions',      ['In/On/Under', 'Behind/Beside/Between', 'Over/Through', 'Position Sentences', 'Position Poster']),
  wk(23, 'Telling Time',      ["O'clock", 'Half Past', 'Morning & Evening', 'Time Sentences', 'Clock Poster']),
  wk(24, 'Review',            ['Review Letters', 'Review Words', 'Review Sentences', 'Review Topics', 'Celebration Day'])
];