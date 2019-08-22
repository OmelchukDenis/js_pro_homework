'use strict'

const MIN = 0;
const MAX = 10;

let generalScore = 0;

runGame();

function runGame(){
    let userNumber = chooseNumber();
    let randomNumber = getRandomNumber(MIN, MAX);
    generalScore = getCompresionResult(userNumber, randomNumber);
    checkContinueGame(generalScore);
}

function chooseNumber() {
    let checkedNumber;
    do {
        checkedNumber = prompt('Please write number from ' + MIN + ' to ' + MAX, '5');
    }
    while (
        isNaN(checkedNumber) ||
        checkedNumber == null ||
        checkedNumber == ' ' ||
        checkedNumber > MAX ||
        checkedNumber < MIN
    )
    return checkedNumber;
}

function getRandomNumber(min, max){
    return Math.round(min + Math.random() * (max - min));
}

function getCompresionResult(userNumber, randomNumber){
    if(userNumber == randomNumber){
        alert('Congratulation, you are right, it is number ' + userNumber);
        generalScore += 10;
    }
    return generalScore;
}

function checkContinueGame(generalScore){
    confirm('So your general score: ' + generalScore + '.\nAre you want continue?') ? runGame() : alert('If you want play again, reload page. Bye.');
}