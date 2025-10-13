const titleScreenDiv = document.getElementById('titleScreen');
const questionsDiv = document.getElementById('questions');
const endScreenDiv = document.getElementById('endScreen');
const scoreSpan = document.getElementById('score');
const answersDiv = document.getElementById('answers');
let score = 0;
const questionSpan = document.getElementById('question');
const button = {
    1: document.getElementById("button1"),
    2: document.getElementById("button2"),
    3: document.getElementById("button3"),
    4: document.getElementById("button4"),
}
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const lastQuestionSpan = document.getElementById('lastQuestion');
let currentQuestion = 1;
let currentCorrectAnswer;
let wasLastQuestion = 'correct';

const question1 = {
    question: "Who is Vegeta's brother?",
    ans1: "Gure",
    ans2: "Tarble",
    ans3: "Paragus",
    ans4: "Turles",
    correctAns: 2
}
const question2 = {
    question: "Who voiced Goku in the Ocean dub?",
    ans1: "Peter Kelamis", 
    ans2: "Sean Schemmel", 
    ans3: "Brian Drummond ", 
    ans4: "Christopher Sabat",
    correctAns: 1
}
const question3 = {
    question: "When did the first Dragon Ball Fortnite colab release?",
    ans1: "Chapter 3 Season 4",
    ans2: "Chapter 4 Season 1",
    ans3: "Chapter 3 Season 2",
    ans4: "Chapter 3 Season 3",
    correctAns: 4
}
const question4 = {
    question: "What was the theme song used in the orignal English Dragon Ball Z dub?",
    ans1: "Rock the Dragon",
    ans2: "Cha-La Head Cha-La",
    ans3: "Gotta Find That Dragon Ball",
    ans4: "Mystical Adventure", 
    correctAns: 1
}
const question5 = {
    question: "How many times *in the main cannon timeline* has Krillin died?", 
    ans1: "1", 
    ans2: "2", 
    ans3: "3", 
    ans4: "4", 
    correctAns: 3
}
const question6 = {
    question: "What universe is Giren from?",
    ans1: "9",
    ans2: "11",
    ans3: "7",
    ans4: "2",
    correctAns: 3
}
const question7 = {
    question: "Who is the angel of universe 6",
    ans1: "Martinu",
    ans2: "Whis",
    ans3: "Shin",
    ans4: "Vados",
    correctAns: 4
}
const question8 = {
    question: "Who has not died in the *main cannon timeline*? (excluding Super Buu)",
    ans1: "Goku",
    ans2: "Krillin",
    ans3: "Gohan",
    ans4: "Picolo",
    correctAns: 3
}
const question9 = {
    question: "What movie came right after Bio Broley?",
    ans1: "Fusion Reborn",
    ans2: "Broley Second Coming",
    ans3: "Wrath of the Dragon",
    ans4: "Bojack Unbound",
    correctAns: 1
}
const question10 = {
    question: "'Dragon Ball Minus' is from what manga?",
    ans1: "Dr. Slump",
    ans2: "Jaco the Galactic Patrolman",
    ans3: "Dragon Ball Super",
    ans4: "Cowa", 
    correctAns: 2
}

function gameStart() {
    titleScreenDiv.style.display = 'none';
    endScreenDiv.style.display = 'none';
    questionsDiv.style.display = 'block';
    currentQuestion = 1;
    score = 0;
    applyQuestions(question1);
}

function applyQuestions(input) {
    scoreSpan.innerHTML = `Question #${currentQuestion}<br>Score: ${score}`;
console.log(`input=${input}`);

    if (currentQuestion == 1) {lastQuestionSpan.innerHTML = '';
    } else if (wasLastQuestion === 'incorrect') {lastQuestionSpan.textContent = 'Incorrect,';
    } else if (wasLastQuestion === 'correct' && currentQuestion != 1) {lastQuestionSpan.textContent = `Correct,`;}


    questionSpan.textContent = input.question;
    currentCorrectAnswer = input.correctAns;
    for (i = 1; i < 5; i++) {
        button[i].textContent = input[`ans${i}`];}
}

function quizButtonPressed(input) {
    if (input == currentCorrectAnswer) {
        score++;
        wasLastQuestion = 'correct';
    } else {wasLastQuestion = 'incorrect';}
    currentQuestion++;

    console.log()
    if (currentQuestion == 11) {triggerEndScreen();}
    else applyQuestions(window[`question${currentQuestion}`]);

    /*if (currentQuestion == 2) {applyQuestions(question2);}
    else if (currentQuestion == 3) {applyQuestions(question3);}
    else if (currentQuestion == 4) {applyQuestions(question4);}
    else if (currentQuestion == 5) {applyQuestions(question5);}
    else if (currentQuestion == 6) {applyQuestions(question6);}
    else if (currentQuestion == 7) {applyQuestions(question7);}
    else if (currentQuestion == 8) {applyQuestions(question8);}
    else if (currentQuestion == 9) {applyQuestions(question9);}
    else if (currentQuestion == 10) {applyQuestions(question10);}
    else if (currentQuestion == 11) {triggerEndScreen();}*/

}

function triggerEndScreen() {
    questionsDiv.style.display = 'none';
    answersDiv.style.display = 'none';
    endScreenDiv.style.display = 'block';
    document.getElementById('finalScore').textContent = `The quiz is over, your final score was ${score}`
}

function seeAnswers() {
    questionsDiv.style.display = 'none';
    endScreenDiv.style.display = 'none';
    answersDiv.style.display = 'block';
}

function triggerTitleScreen() {
    endScreenDiv.style.display = 'none';
    titleScreenDiv.style.display = 'block';
}