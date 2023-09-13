"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.originalName = `${firstName} ${lastName}`;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getOriginalName() {
        return this.originalName;
    }
}
const person1 = new Person("John", "Doe");
console.log(person1.getFullName()); // "John Doe"
console.log(person1.getOriginalName()); // "John Doe"
