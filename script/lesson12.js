'use strict'

// function Animal(name, speed){
//     this.name = name;
//     this.speed = speed;
// }
// Animal.MAX = '100%';
// Animal.MIN = '100%';

// Animal.prototype.run = function(){
//     console.log(`${this.name} is loh ${this.speed} speed`)
// }

// const dino = new Animal('dino', Animal.MIN);
// const raptor = new Animal('raptor', Animal.MAX);

// function Cat(name, speed){
//     this.name = name;
//     this.speed = speed;
// }
// Cat.MAX = 'Hight';

// Cat.prototype = new Animal();

// const barsik = new Cat('Barsik', Cat.MAX);


function ClickableElement(elem){
    elem.classList.add(ClickableElement.BASE_CLASS);
    elem.addEventListener('click', this.onElemClick);
}

ClickableElement.BASE_CLASS = 'clickable-element';
ClickableElement.CLICKED_CLASS = 'clickable-element-clicked';

ClickableElement.prototype.onElemClick = function(){
    this.classList.toggle(ClickableElement.CLICKED_CLASS);
}

const myElem = new ClickableElement(
    document.getElementById('myId')
)