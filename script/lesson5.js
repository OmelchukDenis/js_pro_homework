'use strict'

const arr = ['a', 4 , 'd'];

for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}

console.log('=================');

for(let i in arr){
    console.log(i, arr[i]);
}


// функция копирования с учетом вложений

// казино. от 0 до 10 пользователь угадывает число Со счетом

// спрашиваем число - вывести в алерте сколько четных чисел в его числе