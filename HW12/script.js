'use strict'

function Hamburger(size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
}

Hamburger.prototype.addTopping = function(sauceType){
    this.newTopping = sauceType;
}

Hamburger.prototype.calculateCalories = function(){
    let allCalories = 0;

    for (let i in this) {
        if(typeof(this[i]) === 'object'){
            allCalories += this[i].calories
        }
    }

    return allCalories;
}
Hamburger.prototype.calculatePrice = function(){
    let allPrice = 0;

    for (let i in this) {
        if(typeof(this[i]) === 'object'){
            allPrice += this[i].price
        }
    }

    return allPrice;
}

Hamburger.SIZE_SMALL = {
    price : 50,
    calories : 20
}
Hamburger.SIZE_BIG = {
    price : 100,
    calories : 40
}

Hamburger.STUFFING_CHEESE = {
    price : 10,
    calories : 20
}
Hamburger.STUFFING_SALAD = {
    price : 20,
    calories : 5
}
Hamburger.STUFFING_POTATO = {
    price : 15,
    calories : 10
}

Hamburger.TOPPING_MAYO = {
    price : 10,
    calories : 20
}
Hamburger.TOPPING_SAUCE = {
    price : 20,
    calories : 5
}

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories:" + hamburger.calculateCalories());
// сколько стоит
console.log("Price:" + hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит?
console.log("Price with sauce:" + hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// А сколько теперь стоит?
console.log("Price with sauce:" + hamburger.calculatePrice());