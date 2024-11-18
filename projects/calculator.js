var currentCalc = "";
const resultBoxSpan = document.getElementById("resultBox");
resultBoxSpan.innerHTML = '0';


function pressedCalcButton(input) {
try {

    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ' + ', ' - ', ' * ', ' / ',].includes(input) || input == '.' || input == '(' || input == ')') {
        if ([' + ', ' - ', ' * ', ' / ',].includes(input) && currentCalc == "") {currentCalc = 0;}
        if (input == '.' && currentCalc == "") {currentCalc = 0;}
        currentCalc = String(currentCalc) + String(input);}


    if (input == 'back') {
        if (currentCalc.slice(-1) === ' ') {currentCalc = currentCalc.slice(0, -2);}
        currentCalc = currentCalc.slice(0, -1);}


    if (input == 'clear') {   
    currentCalc = "";
    console.clear();}


    if (input == 'result') {
        currentCalc = eval(currentCalc);
        currentCalc = currentCalc + ''}


    console.log(currentCalc);
    resultBoxSpan.innerHTML = currentCalc;

    if (currentCalc == "") {
        resultBoxSpan.innerHTML = '0';}
} catch (error) {
    currentCalc = "";
    resultBoxSpan.innerHTML = 'ERROR';
}}