const titleScreenDiv = document.getElementById('titleScreen');
const questionsDiv = document.getElementById('questions');
const preEndScreenDiv = document.getElementById('preEndScreen');
const preEndScreenDiv2 = document.getElementById('preEndScreen2');
const endScreenDiv = document.getElementById('endScreen');
const scoreSpan = document.getElementById('score');
const answersDiv = document.getElementById('answers');
var score = 0;
const questionSpan = document.getElementById('question');
const button1Button = document.getElementById('button1');
const button2Button = document.getElementById('button2');
const button3Button = document.getElementById('button3');
const button4Button = document.getElementById('button4');
const lastQuestionSpan = document.getElementById('lastQuestion');
const preEndScreenWTFBoxDiv = document.getElementById('preEndScreenWTFBox');
const yesButtonButton = document.getElementById('yesButton');
const timesPressedDiv = document.getElementById('timesPressed');
const snowyStrangleDiv = document.getElementById('snowyStrangle');
const snowyPooterDiv = document.getElementById('snowyPooter');
const snowyChristmasDiv = document.getElementById('snowyChristmas');
const gmodDiv = document.getElementById('gmod');
const textBoxBox = document.getElementById('textBox');
const textBoxBox2 = document.getElementById('textBox2');
const secondToLastScreenDiv = document.getElementById('secondToLastScreen')
var yesButtonButtonSize = 100;
var timesPressed = 0;
var currentQuestion = 1;
var currentCorrectAnswer;
var wasLastQuestion = 'correct';

const question1 = {
    question: "Is snowy a big dum stinky dummie lil dummithy?",
    ans1: "No",
    ans2: "Na",
    ans3: "Nien",
    ans4: "Mhm",
    correctAns: 4
}

const question2 = {
    question: "When was the first survival server created?",
    ans1: "Jan 2023", 
    ans2: "Dec 2022", 
    ans3: "Feb 2023", 
    ans4: "Jan 2022",
    correctAns: 1
}

const question3 = {
    question: "Which of these have we done in the minigames server?",
    ans1: "Block hunt", 
    ans2: "pvp", 
    ans3: "-0 only", 
    ans4: "skyblock",
    correctAns: 2
}


const question4 = {
    question: "How do you set color of text in css?",
    ans1: "text-color", 
    ans2: "font-color", 
    ans3: "color", 
    ans4: "color-font",
    correctAns: 3
}


const question5 = {
    question: "You're probably mad at that one, thinking how tf am i supposed to know that, but i taught you that a few years ago. Speaking of, what were u doing when i taught u html?",
    ans1: "Playing minecraft with me", 
    ans2: "On the macbook at night", 
    ans3: "Watching youtube", 
    ans4: "At school",
    correctAns: 2
}


const question6 = {
    question: "Which br season did you buy stw in?",
    ans1: "C3 S4", 
    ans2: "C4 S1", 
    ans3: "C4 S2", 
    ans4: "C4 S3",
    correctAns: 3
}


const question7 = {
    question: "Because i hate you :3, what is Redline Ramirez's support perk?",
    ans1: "Increases Sniper Crit Rating by 25.", 
    ans2: "Increases Sniper Fire Rate by 45%.", 
    ans3: "Increases Sniper Damage by 17% and Fire Rate by 45%.", 
    ans4: "Increases Sniper Damage by 17%.",
    correctAns: 4
}


const question8 = {
    question: "Which coordinate direction is our 0b0t base in?",
    ans1: "+ +", 
    ans2: "+ -", 
    ans3: "- -", 
    ans4: "Like I'm gonna put that in a semi public quiz, idr anyways",
    correctAns: 4
}


const question9 = {
    question: "How was evil snowy created? Ask me in vc and ill tell you which to click depending on your answer",
    ans1: "1", 
    ans2: "2", 
    ans3: "3", 
    ans4: "4",
    correctAns: 1
}


const question10 = {
    question: "What was my 6 month anniversary gift? (same as before, ask me in vc)",
    ans1: "1", 
    ans2: "2", 
    ans3: "3", 
    ans4: "4",
    correctAns: 2
}


const question11 = {
    question: "Which skin were u maining when we first played fortnite together",
    ans1: "idr", 
    ans2: "Meow skulls", 
    ans3: "Snowman dude", 
    ans4: "Default",
    correctAns: 3
}

/*
const question12 = {
    question: "What was the first (main channel long form) video I made after being with u?",
    ans1: "Yoshi Fan Games", 
    ans2: "SMW Floor is lava", 
    ans3: "No Jr. Troopa", 
    ans4: "Making Terraria look like 1.0",
    correctAns: 2
}*/

const question12 = {
    question: "What was the second (main channel long form) video I made after being with u?",
    ans1: "Yoshi Fan Games", 
    ans2: "SMW Floor is lava", 
    ans3: "No Jr. Troopa", 
    ans4: "Making Terraria look like 1.0",
    correctAns: 3
}


const question13 = {
    question: "What is my favorite album?",
    ans1: "AAR", 
    ans2: "Floating Rooms", 
    ans3: "Gangstalkers", 
    ans4: "What. (Bo Burnham)",
    correctAns: 1
}

const question14 = {
    question: "What is my fav (non aar) album? If you get this wrong you're a bad bf smh.",
    ans1: "When the World Comes Down", 
    ans2: "Floating Rooms", 
    ans3: "Gangstalkers", 
    ans4: "What. (Bo Burnham)",
    correctAns: 2
}

const question15 = {
    question: "When was the supeflat server made?",
    ans1: "June 2023", 
    ans2: "March 2023", 
    ans3: "May 2023", 
    ans4: "May 2024",
    correctAns: 3
}

const question16 = {
    question: "What did you edit hypixel fun pt2 in?",
    ans1: "Davinci Resolve", 
    ans2: "Sony Vegas", 
    ans3: "Wondershare Filmora", 
    ans4: "Clipchamp",
    correctAns: 4
}

const question17 = {
    question: "Why did we play terraria in the first place? (Ask in vc again)",
    ans1: "2", 
    ans2: "3", 
    ans3: "4", 
    ans4: "5",
    correctAns: 2
}

const question18 = {
    question: "How many people (that we know of) have been to our 0b base?",
    ans1: "1", 
    ans2: "2", 
    ans3: "3", 
    ans4: "4",
    correctAns: 4
}

const question19 = {
    question: "What was the first art of us together",
    ans1: "Maid art", 
    ans2: "Worm art", 
    ans3: "Christmas one", 
    ans4: "The one meow gif",
    correctAns: 2
}

const question20 = {
    question: "And for the final question, to bring it back, what were we playing right before u asked me out?",
    ans1: "Terraria (obv)", 
    ans2: "Minecraft", 
    ans3: "We were watching the new ninjago thing", 
    ans4: "Fortnite",
    correctAns: 4
}




function gameStart() {
    titleScreenDiv.style.display = 'none';
    endScreenDiv.style.display = 'none';
    questionsDiv.style.display = 'block';
    currentQuestion = 1;
    score = 0;
    applyQuestions(question1);
}

function applyQuestions(questionInput) {
    scoreSpan.innerHTML = `Question #${currentQuestion}<br>Score: ${score}`;

    if (currentQuestion == 1) {lastQuestionSpan.innerHTML = '';
    } else if (wasLastQuestion === 'incorrect') {lastQuestionSpan.innerHTML = 'Incorrect,';
    } else if (wasLastQuestion === 'correct' && currentQuestion != 1) {lastQuestionSpan.innerHTML = `Correct,`;}


    questionSpan.innerHTML = questionInput.question;
    button1Button.innerHTML = questionInput.ans1;
    button2Button.innerHTML = questionInput.ans2;
    button3Button.innerHTML = questionInput.ans3;
    button4Button.innerHTML = questionInput.ans4;
    currentCorrectAnswer = questionInput.correctAns;
}

function quizButtonPressed(input) {
    if (input == currentCorrectAnswer) {
        score++;
        wasLastQuestion = 'correct';
    } else if (input !== currentCorrectAnswer) {wasLastQuestion = 'incorrect';}
    currentQuestion++;

    if (currentQuestion == 2) {applyQuestions(question2);}
    else if (currentQuestion == 3) {applyQuestions(question3);}
    else if (currentQuestion == 4) {applyQuestions(question4);}
    else if (currentQuestion == 5) {applyQuestions(question5);}
    else if (currentQuestion == 6) {applyQuestions(question6);}
    else if (currentQuestion == 7) {applyQuestions(question7);}
    else if (currentQuestion == 8) {applyQuestions(question8);}
    else if (currentQuestion == 9) {applyQuestions(question9);}
    else if (currentQuestion == 10) {applyQuestions(question10);}
    else if (currentQuestion == 11) {applyQuestions(question11);}
    else if (currentQuestion == 12) {applyQuestions(question12);}
    else if (currentQuestion == 13) {applyQuestions(question13);}
    else if (currentQuestion == 14) {applyQuestions(question14);}
    else if (currentQuestion == 15) {applyQuestions(question15);}
    else if (currentQuestion == 16) {applyQuestions(question16);}
    else if (currentQuestion == 17) {applyQuestions(question17);}
    else if (currentQuestion == 18) {applyQuestions(question18);}
    else if (currentQuestion == 19) {applyQuestions(question19);}
    else if (currentQuestion == 20) {applyQuestions(question20);}
    else if (currentQuestion == 21) {triggerPreEndScreen();}

}

function triggerPreEndScreen() {
    questionsDiv.style.display = 'none';
    preEndScreenDiv.style.display = 'block';
    preEndScreenDiv2.style.display = 'inline-flex';
    snowyStrangleDiv.style.display = 'none';
    snowyPooterDiv.style.display = 'none';
    snowyChristmasDiv.style.display = 'none';
    
    timesPressed = 0;
    yesButtonButtonSize = 100;
    yesButtonButton.style.fontSize = `${yesButtonButtonSize}%`; 

    //yesButtonButton.style.transform = `scale(1);`; 

}

function pressedNo() {
    preEndScreenWTFBoxDiv.style.display = 'block';
}

function pressedYes() {
    preEndScreenWTFBoxDiv.style.display = 'none';
    yesButtonButtonSize = yesButtonButtonSize + 20;
    yesButtonButton.style.fontSize = `${yesButtonButtonSize}%`; 
    yesButtonButton.style.fontWeight= 'bold';
    timesPressed++;
    timesPressedDiv.style.display = 'block';
    timesPressedDiv.innerHTML = `Times Pressed: ${timesPressed}/250`;

    if (timesPressed == 250) {triggerSnowyStrangle();}
}



function triggerSnowyStrangle() {
    preEndScreenDiv.style.display = 'none';
    preEndScreenDiv2.style.display = 'none'
    snowyStrangleDiv.style.display = 'block';
    timesPressedDiv.style.display = 'none';
}

function triggerSnowyPooter() {
    snowyStrangleDiv.style.display = 'none';
    snowyPooterDiv.style.display = 'block';
}

function triggerSnowyChristmas() {
    snowyPooterDiv.style.display = 'none';
    snowyChristmasDiv.style.display = 'block';
}



function triggerGmod() {
    snowyChristmasDiv.style.display = 'none';
    gmodDiv.style.display = 'block';
}

function checkInput() {
    if (textBoxBox.value == 'Correct hehe') {triggerSecondToLastScreen();}
    else {textBoxBox.value = '';}
}

function triggerSecondToLastScreen() {
    gmodDiv.style.display = 'none';
    secondToLastScreenDiv.style.display = 'block';
}

function checkInput2() {
    if (textBoxBox2.value == '731') {triggerEndScreen();}
    else {textBoxBox2.value = '';}
}


function triggerEndScreen() {
    endScreenDiv.style.display = 'block';
    secondToLastScreenDiv.style.display = 'none';
    document.getElementById('finalScore').innerHTML = `The quiz is over, your final score was ${score}/20`
}

function triggerTitleScreen() {
    endScreenDiv.style.display = 'none';
    titleScreenDiv.style.display = 'block';
}