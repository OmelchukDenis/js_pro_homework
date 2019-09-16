'use strict'

function Hamburger(size, stuffing){
    this.size = size;
    this.stuffing = stuffing;
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

Hamburger.prototype.addTopping = function(topping){
    if(this.hasOwnProperty('generalTopping')){
        this.generalTopping = {
            price: this.generalTopping.price + topping.price,
            calories: this.generalTopping.calories + topping.calories 
        }
    }
    else{
        this.generalTopping = topping;
    }
}

Hamburger.prototype.calculateCalories = function(){
    let generalCalories = this.size.calories + this.stuffing.calories;
    if(this.hasOwnProperty('generalTopping')){
        generalCalories += this.generalTopping.calories
    }
    return generalCalories;
}

Hamburger.prototype.calculatePrice = function(){
    let generalPrice = this.size.price + this.stuffing.price;
    if(this.hasOwnProperty('generalTopping')){
        generalPrice += this.generalTopping.price
    }
    return generalPrice;
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
console.log("Price with sauce:" + hamburger.calculatePrice(), hamburger.calculateCalories());
