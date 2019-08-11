'use strict'

function concatenate(str1, str2){
    return String(str1) + String(str2);
}

let result = concatenate(45, 55);
result = concatenate ('Result is ', result);

console.error('result', result);