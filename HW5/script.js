'use strict'

let userStr = prompt('Please write your str', 'Hello world');
let userLetter1 = isCorrect();
let userLetter2 = isCorrect();
findAndReplace();

// let chooseLetterA = prompt('Choose letter for replace', 'a');
// isCorrect(chooseLetterA);
// let chooseLetterB = prompt('Choose letter for replace', 'b');
// isCorrect(chooseLetterB);

function isCorrect(letter){
    let userLetter = null;
    do{
        userLetter = prompt('Choose letter for ' + letter, 'l');
    }
    while(
        userLetter.length > 1 ||
        !isNaN(userLetter)
    )
    return userLetter;
}
function findAndReplace(){
    let c = 0;
    c = userStr.length;
    for(let i = 0; i<=c; i++){
        String(userStr)
    }
    console.log(c);
}

console.log(userLetter1, userLetter2); 