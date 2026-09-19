// src/data/grade3/english.js
import { D, wk } from '../helpers.js';

export const english = [
  { week:1, theme:"Phonics & Spelling", days:[
    D(1,"🔤","Short Vowel Sounds","Recognise and spell short-vowel words.",
      "<p>A <b>short vowel</b> is the sound a vowel makes in a simple word. The five vowels are <b>a, e, i, o, u</b>.</p>" +
      "<ul><li>Short <b>a</b> — cat, map, sand</li><li>Short <b>e</b> — pen, step, bend</li>" +
      "<li>Short <b>i</b> — sit, trip, wink</li><li>Short <b>o</b> — hot, drop, song</li>" +
      "<li>Short <b>u</b> — cup, drum, lunch</li></ul>" +
      "<p><b>Word List 1:</b> cat, map, sand, pen, step, bend, sit, trip, wink, hot, drop, song, cup, drum, lunch, plant, fresh, wish, clock, trust</p>",
      [{heading:"Exercise 1.1 — Circle the vowel in each word.",items:["cat","pen","sit","hot","cup","drum","wish","clock"]},
       {heading:"Exercise 1.2 — Fill in the missing vowel.",items:["c_t","m_p","p_n","s_t","h_t","c_p","w_sh","cl_ck"]},
       {heading:"Exercise 1.3 — Sort into 5 columns (a, e, i, o, u).",items:["cat","pen","sit","hot","cup","sand","bend","wink","drop","drum"]}],
      "<p><b>1.2:</b> 1. cat 2. map 3. pen 4. sit 5. hot 6. cup 7. wish 8. clock</p>" +
      "<p><b>1.3:</b> a — cat, sand; e — pen, bend; i — sit, wink; o — hot, drop; u — cup, drum</p>",
      [{q:"Which vowel is in 'cat'?",a:["a"]},{q:"Which vowel is in 'cup'?",a:["u"]},{q:"Which vowel is in 'drop'?",a:["o"]}]),
    D(2,"🔤","Long Vowel Sounds","Read and spell long-vowel words.",
      "<p>A <b>long vowel</b> says its name. Common patterns:</p>" +
      "<ul><li>a_e — cake, game, wave</li><li>ai — rain, train, paint</li>" +
      "<li>ee — tree, green, sleep</li><li>ea — seat, read, dream</li>" +
      "<li>i_e — bike, time, smile</li><li>oa — boat, road, coat</li>" +
      "<li>o_e — home, rope, stone</li><li>u_e — tube, cube, flute</li></ul>" +
      "<p><b>Word List 2:</b> cake, game, wave, rain, train, paint, tree, green, sleep, seat, read, dream, bike, time, smile, boat, road, coat, home, rope</p>",
      [{heading:"Exercise 2.1 — Write each word and circle the long vowel.",items:["cake","rain","tree","boat","bike","home","seat","road"]},
       {heading:"Exercise 2.2 — Write 3 words for each pattern.",items:["a_e","ee","oa","i_e"]}],
      "<p>Any correct set of words.</p>",
      [{q:"Write a long-a word with the a_e pattern.",a:["cake","game","wave"]},
       {q:"Write a long-e word with ee.",a:["tree","green","sleep"]},
       {q:"Write a long-o word with oa.",a:["boat","road","coat"]}]),
    D(3,"🔤","Consonant Blends","Read and spell words with blends.",
      "<p>A <b>blend</b> is two consonants said quickly together.</p>" +
      "<ul><li>bl — black, blue, blow</li><li>cl — clap, cloud, clean</li>" +
      "<li>fl — flag, flower, fly</li><li>gl — glad, glue, glass</li>" +
      "<li>pl — plan, plant, play</li><li>sl — slip, sleep, slow</li>" +
      "<li>st — stop, star, stone</li><li>tr — tree, train, trip</li></ul>" +
      "<p><b>Word List 3:</b> black, blue, clap, cloud, flag, flower, glad, glass, plan, plant, slip, sleep, stop, star, stone, tree, train, trip, clean, blow</p>",
      [{heading:"Exercise 3.1 — Circle the blend in each word.",items:["black","clap","flag","glad","plan","slip","stop","train"]},
       {heading:"Exercise 3.2 — Fill in the missing blend.",items:["__ack","__ap","__ower","__ad","__an","__eep","__op","__ain"]}],
      "<p><b>3.2:</b> 1. black 2. clap 3. flower 4. glad 5. plan 6. sleep 7. stop 8. train</p>",
      [{q:"Blend in 'flag'?",a:["fl"]},{q:"Blend in 'stop'?",a:["st"]},{q:"Blend in 'train'?",a:["tr"]}]),
    D(4,"🔤","Consonant Digraphs","Read and spell words with digraphs.",
      "<p>A <b>digraph</b> is two letters that make one sound.</p>" +
      "<ul><li>ch — chair, cheese, church</li><li>sh — ship, shell, brush</li>" +
      "<li>th — think, three, thumb</li><li>wh — wheel, whale, white</li>" +
      "<li>ph — phone, graph, elephant</li></ul>" +
      "<p><b>Word List 4:</b> chair, cheese, church, ship, shell, brush, think, three, thumb, wheel, whale, white, phone, graph, elephant, shadow, shower, feather, whistle, phrase</p>",
      [{heading:"Exercise 4.1 — Circle the digraph in each word.",items:["chair","ship","think","wheel","phone","shadow","shower","feather"]},
       {heading:"Exercise 4.2 — Fill in the missing digraph.",items:["__air","__ip","__ink","__eel","__one","__adow","__ower","__eather"]}],
      "<p><b>4.2:</b> 1. chair 2. ship 3. think 4. wheel 5. phone 6. shadow 7. shower 8. feather</p>",
      [{q:"Digraph in 'chair'?",a:["ch"]},{q:"Digraph in 'ship'?",a:["sh"]},{q:"Digraph in 'think'?",a:["th"]}]),
    D(5,"🎨","Spelling Bee Practice","Use all Week 1 words in a spelling bee.",
      "<p>Today we practise for a spelling bee. Say each word, spell it, and write it.</p>",
      [{heading:"Exercise 5.1 — Write and spell each word from a parent's dictation.",items:["cat","cake","clap","chair","flower","ship","train","wheel","phone","clock"]},
       {heading:"Exercise 5.2 — Draw and label 3 words from this week.",items:[]}],
      "<p>Check spelling against the word lists from Days 1–4.</p>",
      [{q:"Spell 'flower'.",a:["flower"]},{q:"Spell 'chair'.",a:["chair"]}])
  ]},
  { week:2, theme:"Building Sentences", days:[
    D(1,"📝","Subject & Predicate","Identify the subject and predicate of a sentence.",
      "<p>Every sentence has a <b>subject</b> (who or what) and a <b>predicate</b> (what happens).</p>" +
      "<p><i>The boy</i> (subject) <i>runs fast</i> (predicate).</p>",
      [{heading:"Exercise 6.1 — Underline the subject, circle the predicate.",items:["The girl sings.","My mother cooks.","The dog barks.","The children play.","The sun shines."]},
       {heading:"Exercise 6.2 — Write 3 sentences of your own.",items:[]}],
      "<p><b>6.1:</b> Subject: The girl / My mother / The dog / The children / The sun.</p>",
      [{q:"Subject of 'The girl sings.'?",a:["the girl","girl"]},
       {q:"Predicate of 'The dog barks.'?",a:["barks","the dog barks"]}]),
    D(2,"📝","Simple Sentences","Write simple sentences with capital letters and full stops.",
      "<p>A <b>simple sentence</b> has one idea. It starts with a <b>capital</b> letter and ends with a <b>full stop</b>.</p>" +
      "<p><i>I like rice.</i> — capital I, full stop.</p>",
      [{heading:"Exercise 7.1 — Rewrite with correct capitals and full stops.",items:["my name is ama","i live in accra","the boy runs fast","we go to school","the sky is blue"]},
       {heading:"Exercise 7.2 — Write 5 simple sentences about your day.",items:[]}],
      "<p><b>7.1:</b> 1. My name is Ama. 2. I live in Accra. 3. The boy runs fast. 4. We go to school. 5. The sky is blue.</p>",
      [{q:"Rewrite: i like rice.",a:["I like rice.","I like rice"]},
       {q:"Rewrite: the boy runs.",a:["The boy runs.","The boy runs"]}]),
    D(3,"📝","Question Sentences","Write question sentences with question marks.",
      "<p>A <b>question</b> asks something. It ends with a <b>question mark (?)</b>.</p>" +
      "<p><i>Where are you going?</i></p>",
      [{heading:"Exercise 8.1 — Rewrite as questions.",items:["You are happy.","She is at school.","He can swim.","They like rice.","It is raining."]},
       {heading:"Exercise 8.2 — Write 5 questions you can ask a friend.",items:[]}],
      "<p><b>8.1:</b> 1. Are you happy? 2. Is she at school? 3. Can he swim? 4. Do they like rice? 5. Is it raining?</p>",
      [{q:"Turn into a question: You are happy.",a:["Are you happy?"]},
       {q:"Turn into a question: She is at school.",a:["Is she at school?"]}]),
    D(4,"📝","Command Sentences","Write command sentences.",
      "<p>A <b>command</b> tells someone to do something. It often starts with a verb.</p>" +
      "<p><i>Close the door. Sit down. Open your book.</i></p>",
      [{heading:"Exercise 9.1 — Write a command for each situation.",items:["Your friend is talking.","The door is open.","A cup is on the table.","The class is noisy.","A book is on the floor."]},
       {heading:"Exercise 9.2 — Write 5 commands your parent gives you.",items:[]}],
      "<p><b>9.1:</b> Any reasonable command (e.g., Stop talking. / Close the door. / Pick up the cup. / Be quiet. / Pick up the book.)</p>",
      [{q:"Give one command for a noisy class.",a:["be quiet","stop talking","quiet"]},
       {q:"Give one command for an open door.",a:["close the door","shut the door"]}]),
    D(5,"🎨","Sentence Game","Play the sentence-building game.",
      "<p><b>Game:</b> Parent says a word. Child makes a sentence with it.</p>",
      [{heading:"Exercise 10.1 — Write 10 sentences, one for each word.",items:["cat","school","rice","run","happy","red","sing","door","friend","sun"]},
       {heading:"Exercise 10.2 — Draw a picture of your favourite sentence.",items:[]}],
      "<p>Any complete sentence with correct capital and full stop.</p>",
      [{q:"Write a sentence with 'school'.",a:["i go to school","school","any"]},
       {q:"Write a sentence with 'happy'.",a:["i am happy","happy","any"]}])
  ]},
  { week:3, theme:"Reading Stories", days:[
    D(1,"📖","Parts of a Story","Identify beginning, middle, and end.",
      "<p>A story has three parts:</p>" +
      "<ul><li><b>Beginning</b> — we meet the characters.</li>" +
      "<li><b>Middle</b> — a problem happens.</li>" +
      "<li><b>End</b> — the problem is solved.</li></ul>" +
      "<p><b>Passage:</b> <i>Ama found a small bird in her garden. Its wing was hurt. She took it home and fed it. Soon the bird got better. Ama set it free.</i></p>",
      [{heading:"Exercise 11.1 — Answer:",items:["Who is the main character?","Where was the bird?","What was wrong?","What did Ama do?","What happened at the end?"]},
       {heading:"Exercise 11.2 — Write 3 sentences about a time you helped an animal.",items:[]}],
      "<p><b>11.1:</b> 1. Ama. 2. In her garden. 3. Its wing was hurt. 4. She took it home and fed it. 5. She set it free.</p>",
      [{q:"Who is the main character?",a:["ama"]},
       {q:"What was wrong with the bird?",a:["its wing was hurt","hurt wing","wing hurt"]}]),
    D(2,"📖","Characters","Describe the characters in a story.",
      "<p><b>Characters</b> are the people or animals in a story.</p>" +
      "<p><b>Passage:</b> <i>Kwame was a kind boy. He always helped his mother. He liked to share his food with his friends.</i></p>",
      [{heading:"Exercise 12.1 — Answer:",items:["Who is the character?","How is he described?","What does he always do?","What does he share?","Write one sentence about Kwame."]},
       {heading:"Exercise 12.2 — Describe yourself in 3 sentences.",items:[]}],
      "<p><b>12.1:</b> 1. Kwame. 2. Kind. 3. Helps his mother. 4. His food. 5. Any sentence about Kwame.</p>",
      [{q:"How is Kwame described?",a:["kind"]},{q:"What does Kwame share?",a:["food","his food"]}]),
    D(3,"📖","Setting","Identify where and when a story happens.",
      "<p>The <b>setting</b> is where and when a story happens.</p>" +
      "<p><b>Passage:</b> <i>The market was busy. It was Saturday morning. Women sold tomatoes and peppers. Children ran between the stalls.</i></p>",
      [{heading:"Exercise 13.1 — Answer:",items:["Where does the story happen?","When does it happen?","What are the women selling?","What are the children doing?"]},
       {heading:"Exercise 13.2 — Write about your school setting.",items:[]}],
      "<p><b>13.1:</b> 1. Market. 2. Saturday morning. 3. Tomatoes and peppers. 4. Running between stalls.</p>",
      [{q:"Where does the story happen?",a:["market"]},{q:"When does it happen?",a:["saturday morning","saturday"]}]),
    D(4,"📖","Retell a Story","Retell a story in your own words.",
      "<p>To <b>retell</b>, tell the main events in order.</p>" +
      "<p><b>Passage:</b> <i>A tortoise and a hare had a race. The hare ran fast and took a nap. The tortoise walked slowly and won.</i></p>",
      [{heading:"Exercise 14.1 — Retell the story in 3 sentences.",items:[]},
       {heading:"Exercise 14.2 — What is the lesson of the story?",items:[]}],
      "<p><b>14.2:</b> Slow and steady wins the race.</p>",
      [{q:"Who won the race?",a:["tortoise","the tortoise"]},
       {q:"What is the lesson?",a:["slow and steady wins the race","slow but steady","any"]}]),
    D(5,"🎨","Draw the Story","Draw your favourite story.",
      "<p>Draw a picture of your favourite story. Write 3 sentences about it.</p>",
      [{heading:"Exercise 15.1 — Draw and write.",items:[]}],
      "<p>Any drawing with 3 sentences.</p>",
      [{q:"What story did you draw?",a:["any"]}])
  ]},
  { week:4, theme:"Nouns & Pronouns", days:[
    D(1,"📝","Common Nouns","Learn common nouns.",
      "<p>A <b>common noun</b> names a general person, place, or thing.</p>" +
      "<p>Examples: boy, girl, city, school, book, chair.</p>",
      [{heading:"Exercise 16.1 — Underline the common nouns.",items:["The boy runs.","The school is big.","She has a book.","The market is busy.","The chair is new."]},
       {heading:"Exercise 16.2 — Write 5 common nouns you can see.",items:[]}],
      "<p><b>16.1:</b> 1. boy 2. school 3. book 4. market 5. chair</p>",
      [{q:"Common noun in 'The boy runs.'?",a:["boy"]},
       {q:"Common noun in 'The school is big.'?",a:["school"]}]),
    D(2,"📝","Proper Nouns","Learn proper nouns.",
      "<p>A <b>proper noun</b> names a specific person, place, or thing. It always begins with a <b>capital letter</b>.</p>" +
      "<p>Examples: Ama, Kofi, Accra, Kumasi, Ghana, Monday, December.</p>",
      [{heading:"Exercise 17.1 — Rewrite with correct capitals.",items:["ama lives in accra","kofi is from kumasi","we live in ghana","today is monday","my birthday is in december"]},
       {heading:"Exercise 17.2 — Write 5 proper nouns.",items:[]}],
      "<p><b>17.1:</b> 1. Ama lives in Accra. 2. Kofi is from Kumasi. 3. We live in Ghana. 4. Today is Monday. 5. My birthday is in December.</p>",
      [{q:"Is 'Accra' a common or proper noun?",a:["proper"]},
       {q:"Is 'boy' a common or proper noun?",a:["common"]}]),
    D(3,"📝","Pronouns","Learn pronouns.",
      "<p>A <b>pronoun</b> replaces a noun: I, you, he, she, it, we, they.</p>" +
      "<p><i>Ama is my friend.</i> → <i>She is my friend.</i></p>",
      [{heading:"Exercise 18.1 — Replace the underlined noun with a pronoun.",items:["**Ama** is my friend.","**The boys** are playing.","**The book** is on the table.","**My mother and I** went to town.","**Kofi** likes mangoes."]},
       {heading:"Exercise 18.2 — Write 5 sentences with pronouns.",items:[]}],
      "<p><b>18.1:</b> 1. She 2. They 3. It 4. We 5. He</p>",
      [{q:"Pronoun for 'Ama'?",a:["she"]},{q:"Pronoun for 'The boys'?",a:["they"]}]),
    D(4,"📝","Pronoun Practice","Use pronouns correctly in sentences.",
      "<p>Read each sentence and choose the correct pronoun.</p>",
      [{heading:"Exercise 19.1 — Choose the correct pronoun.",items:["(__/She) is my sister.","(__/They) are playing.","(__/It) is raining.","(__/We) are going to school.","(__/He) is my brother."]},
       {heading:"Exercise 19.2 — Write a paragraph using at least 3 pronouns.",items:[]}],
      "<p><b>19.1:</b> 1. She 2. They 3. It 4. We 5. He</p>",
      [{q:"Fill in: ___ is my sister.",a:["she"]},
       {q:"Fill in: ___ are playing.",a:["they"]}]),
    D(5,"🎨","Noun & Pronoun Poster","Make a poster about nouns and pronouns.",
      "<p>Make a poster with 5 nouns and their pronouns.</p>",
      [{heading:"Exercise 20.1 — Complete the table.",items:["Ama → ___","The boys → ___","The book → ___","My mother and I → ___","Kofi → ___"]},
       {heading:"Exercise 20.2 — Draw a picture for each noun.",items:[]}],
      "<p><b>20.1:</b> 1. She 2. They 3. It 4. We 5. He</p>",
      [{q:"Pronoun for 'Ama'?",a:["she"]},{q:"Pronoun for 'Kofi'?",a:["he"]}])
  ]},

  // Append these weeks to src/data/grade3/english.js (after Week 4)

  { week:5, theme:"Verbs", days:[
    D(1,"📝","Action Verbs","Identify action verbs.",
      "<p>An <b>action verb</b> shows what someone or something does: run, jump, sing, write, read.</p>",
      [{heading:"Exercise 1.1 — Underline the action verb.",items:["The girl sings.","The boy runs.","She writes a letter.","We read books.","They dance."]},
       {heading:"Exercise 1.2 — Write 5 sentences with action verbs.",items:[]}],
      "<p><b>1.1:</b> 1. sings 2. runs 3. writes 4. read 5. dance</p>",
      [{q:"Verb in 'The girl sings.'?",a:["sings"]},{q:"Verb in 'The boy runs.'?",a:["runs"]}]),
    D(2,"📝","Linking Verbs","Identify linking verbs.",
      "<p>A <b>linking verb</b> connects the subject to a description: am, is, are, was, were.</p>" +
      "<p><i>She is happy. They are here.</i></p>",
      [{heading:"Exercise 2.1 — Underline the linking verb.",items:["I am tired.","She is my friend.","They are playing.","He was late.","We were happy."]},
       {heading:"Exercise 2.2 — Write 5 sentences with linking verbs.",items:[]}],
      "<p><b>2.1:</b> 1. am 2. is 3. are 4. was 5. were</p>",
      [{q:"Linking verb in 'I am tired.'?",a:["am"]},{q:"Linking verb in 'She is my friend.'?",a:["is"]}]),
    D(3,"📝","Verb Tense","Change verbs between present and past.",
      "<p>Present: <i>She walks.</i> Past: <i>She walked.</i></p>",
      [{heading:"Exercise 3.1 — Change to simple past.",items:["She walks.","They play.","He writes.","We sing.","I drink."]},
       {heading:"Exercise 3.2 — Change to simple present.",items:["She walked.","They played.","He wrote.","We sang.","I drank."]}],
      "<p><b>3.1:</b> 1. walked 2. played 3. wrote 4. sang 5. drank</p>" +
      "<p><b>3.2:</b> 1. walks 2. play 3. writes 4. sing 5. drink</p>",
      [{q:"Past of 'walks'?",a:["walked"]},{q:"Present of 'played'?",a:["play"]}]),
    D(4,"📝","Verb Sentences","Write sentences with different verbs.",
      "<p>Use one verb in each sentence.</p>",
      [{heading:"Exercise 4.1 — Write 5 sentences, each with a different verb.",items:["run","jump","sing","read","write"]}],
      "<p>Any 5 correct sentences.</p>",
      [{q:"Write a sentence with 'jump'.",a:["i jump","any"]}]),
    D(5,"🎨","Verb Poster","Make a verb poster.",
      "<p>Draw 5 action verbs with pictures.</p>",
      [{heading:"Exercise 5.1 — Draw and label.",items:[]}],
      "<p>Any correct poster.</p>",
      [{q:"Give an action verb.",a:["run","jump","sing","any"]}])
  ]},
  { week:6, theme:"Adjectives", days:[
    D(1,"📝","Describing Words","Identify adjectives.",
      "<p>An <b>adjective</b> describes a noun: red, tall, happy, sweet, beautiful.</p>",
      [{heading:"Exercise 6.1 — Underline the adjective.",items:["The tall boy runs.","I ate a sweet mango.","She wore a beautiful dress.","The old man walked slowly.","We saw a big elephant."]},
       {heading:"Exercise 6.2 — Write 5 sentences with adjectives.",items:[]}],
      "<p><b>6.1:</b> 1. tall 2. sweet 3. beautiful 4. old 5. big</p>",
      [{q:"Adjective in 'The tall boy runs.'?",a:["tall"]},
       {q:"Adjective in 'I ate a sweet mango.'?",a:["sweet"]}]),
    D(2,"🎨","Colour Words","Use colour adjectives.",
      "<p>Colour adjectives describe the colour of a noun.</p>",
      [{heading:"Exercise 7.1 — Complete with a colour adjective.",items:["The ______ apple.","The ______ sky.","The ______ leaf.","The ______ sun."]},
       {heading:"Exercise 7.2 — Write 5 sentences using colour adjectives.",items:[]}],
      "<p>Any correct colours.</p>",
      [{q:"Colour of an apple?",a:["red","green"]},{q:"Colour of the sky?",a:["blue"]}]),
    D(3,"📏","Size Words","Use size adjectives.",
      "<p>Size adjectives: big, small, tall, short, long, tiny.</p>",
      [{heading:"Exercise 8.1 — Complete with a size adjective.",items:["The ______ elephant.","The ______ ant.","The ______ tree.","The ______ pencil."]},
       {heading:"Exercise 8.2 — Write 5 sentences using size adjectives.",items:[]}],
      "<p>Any correct sizes.</p>",
      [{q:"Opposite of big?",a:["small"]},{q:"Opposite of tall?",a:["short"]}]),
    D(4,"📝","Adjective Sentences","Write adjective sentences.",
      "<p><b>The happy boy runs.</b></p>",
      [{heading:"Exercise 9.1 — Write 5 sentences with adjectives.",items:[]}],
      "<p>Any 5 correct sentences.</p>",
      [{q:"Write a sentence with 'happy'.",a:["the happy boy runs","any"]}]),
    D(5,"🎨","Adjective Poster","Make an adjective poster.",
      "<p>Draw and label 5 adjectives.</p>",
      [{heading:"Exercise 10.1 — Draw and label.",items:["red","big","tall","happy","sweet"]}],
      "<p>Any correct poster.</p>",
      [{q:"Give an adjective.",a:["red","tall","happy","any"]}])
  ]},
  { week:7, theme:"Paragraph Writing", days:[
    D(1,"📝","Topic Sentence","Learn about the topic sentence.",
      "<p>A paragraph has a <b>topic sentence</b> that states the main idea.</p>" +
      "<p><i>Water is precious in my village.</i></p>",
      [{heading:"Exercise 11.1 — Write a topic sentence for each topic.",items:["My school","My friend","My favourite food","My family","My village"]}],
      "<p>Any topic sentence.</p>",
      [{q:"What is a topic sentence?",a:["main idea","states main idea"]}]),
    D(2,"📝","Supporting Sentences","Learn about supporting sentences.",
      "<p>Supporting sentences give more detail about the topic.</p>" +
      "<p><i>Every morning I walk to school. I carry my books. I greet my teacher.</i></p>",
      [{heading:"Exercise 12.1 — Write 3 supporting sentences for: 'My school is special.'",items:[]}],
      "<p>Any 3 supporting sentences.</p>",
      [{q:"What do supporting sentences do?",a:["give more detail","support","any"]}]),
    D(3,"📝","Closing Sentence","Learn about the closing sentence.",
      "<p>A closing sentence wraps up the paragraph.</p>" +
      "<p><i>For this reason, I love my school.</i></p>",
      [{heading:"Exercise 13.1 — Write a closing sentence for: 'My school is special.'",items:[]}],
      "<p>Any closing sentence.</p>",
      [{q:"What does a closing sentence do?",a:["wraps up","summarises","any"]}]),
    D(4,"📝","Write a Paragraph","Write a whole paragraph.",
      "<p>Topic + Supporting + Closing.</p>",
      [{heading:"Exercise 14.1 — Write a paragraph on 'Why I Love My Family'.",items:[]}],
      "<p>Any paragraph with all 3 parts.</p>",
      [{q:"What 3 parts make a paragraph?",a:["topic, supporting, closing"]}]),
    D(5,"🎨","Paragraph Poster","Make a paragraph poster.",
      "<p>Show a sample paragraph with the 3 parts labelled.</p>",
      [{heading:"Exercise 15.1 — Draw and label.",items:[]}],
      "<p>Any correct poster.</p>",
      [{q:"Name one part of a paragraph.",a:["topic","supporting","closing","any"]}])
  ]},
  { week:8, theme:"Review", days:[
    D(1,"🔁","Review Phonics","Review Weeks 1–3.",
      "<p>Vowels, blends, digraphs.</p>",
      [{heading:"Exercise 16.1 — Circle the vowel team.",items:["rain","green","boat","snow","moon"]},
       {heading:"Exercise 16.2 — Write 3 words with each pattern.",items:["ai","ee","oa","oo"]}],
      "<p>Any correct answers.</p>",
      [{q:"Vowel team in 'rain'?",a:["ai"]}]),
    D(2,"🔁","Review Sentences","Review Weeks 3 and 7.",
      "<p>Simple, question, command.</p>",
      [{heading:"Exercise 17.1 — Write one of each type.",items:["Simple","Question","Command"]}],
      "<p>Any correct sentences.</p>",
      [{q:"Give an example of a question.",a:["any with ?"]}]),
    D(3,"🔁","Review Nouns","Review Week 4.",
      "<p>Common and proper nouns.</p>",
      [{heading:"Exercise 18.1 — Classify.",items:["Ama","boy","Ghana","book","Monday","city"]}],
      "<p>1. Proper 2. Common 3. Proper 4. Common 5. Proper 6. Common</p>",
      [{q:"Is 'Accra' common or proper?",a:["proper"]}]),
    D(4,"🔁","Review Verbs","Review Week 5.",
      "<p>Action and linking verbs.</p>",
      [{heading:"Exercise 19.1 — Underline the verb.",items:["She sings.","He is happy.","They play.","We are tired.","It rains."]}],
      "<p>1. sings 2. is 3. play 4. are 5. rains</p>",
      [{q:"Verb in 'She sings.'?",a:["sings"]}]),
    D(5,"🎉","Month 2 Test & Celebration","Monthly Test 2.",
      "<p><b>Monthly Test 2</b>: 40 marks.</p>",
      [{heading:"Exercise 20.1 — Complete the test.",items:["Part A — Spelling (10)","Part B — Grammar (10)","Part C — Paragraph writing (10)","Part D — Comprehension (10)"]},
       {heading:"Exercise 20.2 — Celebrate!",items:["Show your work.","Give yourself a star! ⭐"]}],
      "<p>Marking: 40 total. 32+ = Excellent. 20–31 = Good. Below 20 = Needs revision.</p>",
      [{q:"What did you enjoy most?",a:["any"]}])
  ]},
  
  wk(5,  "Verbs",             ["Action verbs","Linking verbs","Verb tense","Verb sentences","Verb poster"]),
  wk(6,  "Adjectives",        ["Describing words","Colour words","Size words","Adjective sentences","Adjective poster"]),
  wk(7,  "Paragraph Writing", ["Topic sentence","Supporting sentences","Closing sentence","Write a paragraph","Paragraph poster"]),
  wk(8,  "Review",            ["Review phonics","Review sentences","Review nouns","Review verbs","Celebration"]),
  wk(9,  "Punctuation",       ["Full stops","Question marks","Exclamation marks","Commas","Punctuation poster"]),
  wk(10, "Spelling Rules",    ["Silent letters","Double letters","Prefixes","Suffixes","Spelling test"]),
  wk(11, "Story Writing",     ["Beginning","Middle","End","Write a story","Story poster"]),
  wk(12, "Review",            ["Review punctuation","Review spelling","Review writing","Practice test","Celebration"]),
  wk(13, "Poetry",            ["Rhymes","Rhythm","Stanzas","Read a poem","Write a poem"]),
  wk(14, "Informal Letters",  ["Letter parts","Address","Greeting","Body","Write a letter"]),
  wk(15, "Comprehension",     ["Literal questions","Inference","Vocabulary in context","Practice passage","Answer key"]),
  wk(16, "Review",            ["Review poetry","Review letters","Review comprehension","Practice test","Celebration"]),
  wk(17, "Descriptive Writing",["Using senses","Similes","Adjectives","Describe a place","Descriptive poster"]),
  wk(18, "Narrative Writing", ["Story structure","Openers","Dialogue","Write a narrative","Narrative poster"]),
  wk(19, "Persuasive Writing",["Opinion","Reasons","Evidence","Write a persuasive paragraph","Persuasive poster"]),
  wk(20, "Review",            ["Review descriptive","Review narrative","Review persuasive","Practice test","Celebration"]),
  wk(21, "Reading Different Texts",["Narrative","Informative","Persuasive","Compare texts","Text poster"]),
  wk(22, "Editing & Proofreading",["Check spelling","Check punctuation","Check grammar","Edit your work","Editing poster"]),
  wk(23, "Revision",          ["Spelling","Grammar","Reading","Writing","Practice test"]),
  wk(24, "Review",            ["Final review","Portfolio","Presentation","Celebration","Big star day"])
];