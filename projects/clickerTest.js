var isTimerGoing = 0;
var clickAmount = 0;
var time = 0;
var timeString;
const timerDiv = document.getElementById('timer');
const clickAmountDiv = document.getElementById('clickAmount');
const clickerStartDiv = document.getElementById('clickerStart');
const clickerDuringGameDiv = document.getElementById('clickerDuringGame');
const restartButtonButton = document.getElementById('restartButton');

function clickerStart() {
    clickerStartDiv.style.display = 'none';
    clickerDuringGame.style.display = 'block';
    time = 500;
    clickAmount = 1;
    const countdown = setInterval(function() {
        clickAmountDiv.innerHTML = clickAmount + ' Clicks';
        timeString = time.toString();
        if (time > 100) {timerDiv.innerHTML = timeString.slice(0, -2) + ' Seconds Left';}
        if (time < 100) {timerDiv.innerHTML = timeString.slice(0, -1) + ' Seconds Left';}
        if (time < 10) {timerDiv.innerHTML = `1 second left`}
        
        time--;
        //console.log(time);
    

    if (time < 0) {
        clearInterval(countdown);
        endGame();
    }})
}

function upByOne() {
        clickAmount++;
        clickAmountDiv.innerHTML = clickAmount + ' Clicks';
}
document.getElementById('clickerDuringGame').addEventListener('click', upByOne);


async function endGame() {
    clickerStartDiv.style.display = 'none';
    clickerDuringGame.style.display = 'none';
    restartButtonButton.style.opacity = '1';

    clickAmountDiv.innerHTML = clickAmount + ' Clicks';
    timerDiv.innerHTML = `0 Seconds Left`;

}

function restartGame() {
    document.getElementById('restartButton').display = 'none';
    clickerStartDiv.style.display = 'block';
    restartButtonButton.style.opacity = '0';
}