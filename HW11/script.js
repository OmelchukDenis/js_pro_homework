'use strict'

function Student(name, arr){
    this.name = name;
    this.arr = arr;
}

Student.prototype.average = function(){
    let c = this.arr;
    let total = 0;
    for(let i = 0; i <= c.length-1; i++){
        total += c[i];
    }
    console.log(total / c.length);
}

const student1 = new Student('Denis', [10, 20, 300, 1, 4, 6]);
const student2 = new Student('LOH', [100, 20, 0, 1, 40, 6]);