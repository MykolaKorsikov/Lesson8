//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

//GIT:
// pwd
// cd WebStorm/
//git status
//git add HomeWork_Lesson8.js
//git commit -m "Class HW" HomeWork_Lesson8.js
//git status



'use strict';


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName () {
        return this.firstName + ' ' + this.lastName;
    }
    set fullName (fullName){
        var nameParts = fullName.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}

let mykola  = new Person('Mykola', 'Korsikov', 38);
console.log(mykola);

class Student extends Person {
    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
    }
}

let alex = new Student('Alex', 'Kotov',45)
console.log(alex)


