'use strict'

function Student(name, marks){
    this.name = name;
    this.marks = marks;
}

Student.prototype.averageMark = function(){
    let arrLenght = this.marks.length;
    let totalSum = 0;
    for(let i = 0; i <= arrLenght - 1; i++){
        totalSum += this.marks[i];
    }
    const averageMark = totalSum / arrLenght;
    return averageMark;
}

const students = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4])
];
