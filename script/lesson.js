'use strict'

// function progresion(value){
//     let progress = 0;
//     for(let i=value; i > 0; i--){
//         progress += i;
//     }
//     return progress;
// }

// recursion
// function progresion(value){
//     return value == 1 ? value : value + progresion(value - 1);
// }

// const result = progresion(0)
// console.log(result)


const obj1 = {
    a: {
        a: {
            a: {
                a: 23
            }
        }
    }
}

const obj2 = {
    a: {
        a: 4
    }
}

getA(obj1);
getA(obj2);

function getA (value){
    return (typeof value == 'object') ? getA(value.a) : console.log(value);
}