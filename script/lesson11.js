'use strict'
// const person = {
//     name: 'Alex',
//     callMyName: callMyName
// }

// function callMyName(){
//     console.log(this);
// }

// person.callMyName();


// function Person(name, age){
//     this.name = name,
//     this.age = age
// }

// const c = new Person('test', 1);
// const b = new Person('jopa', 1488);


function Animal(name){
    this.name = name;
    this.eat = function(){
        console.log(`${this.name} is eating`);
    };
}

function Cat(name){
    this.name = name;
}

Animal.prototype.run = function(){
    console.log(`${this.name} is running`);
}

Cat.prototype = new Animal;

const dino = new Animal('Dinozaur');

const tisha = new Cat('Tisha');