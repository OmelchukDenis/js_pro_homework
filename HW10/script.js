'use strict'

const calculator = createCalculator(10); 

function createCalculator(result = 0){
    // let result = number;
    return {
        add: (arg) => result += arg,
        sub: (arg) => result -= arg,
        divide: (arg) => result /= arg,
        mult: (arg) => result *= arg,
        set: (arg) => result = arg
    }
} 

console.log(calculator.add(45)); // возвращает 55 
console.log(calculator.sub(45)); // возвращает 10 
console.log(calculator.divide(5)); // возвращает 2 
console.log(calculator.mult(5)); // возвращает 10
console.log(calculator.set(100)); // устанавливает базовое значение в 100 
console.log(calculator.mult(5)); // возвращает 500