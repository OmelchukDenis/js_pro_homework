'use strict'

// document.addEventListener('click', ()=>{
//     console.log('clicked');
// })

// function callMe(){
//     console.log('Called!')
// }

// setTimeout(callMe,2000)

// function waitFor(miliseconds){
//     const startTime = Date.now();
//     while(true){
//         if((Date.now() - startTime) > miliseconds)
//         break;
//     }
// }

// setInterval(() => console.log(Date.now()), 1000);

// console.log('started');
// waitFor(5000);
// console.log('finish');

// const timeoutId = setTimeout(run, 1000);

// clearTimeout(timeoutId);

// function run(){
//     setTimeout(run, 1000);
//     console.log(Date.now());
//     waitFor(1500);
// }


class Animal{
    run(){
        console.log('running');
    }
}

class Cat extends Animal{
    run(){
        super.run();
        console.log('jumping');
    }
}

const kitty = new Cat;
kitty.run();