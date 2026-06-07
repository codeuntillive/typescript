"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detail(me) {
    return `My name is ${me.name} and I am ${me.age} years old.`;
}
const peerson = { name: "John", age: 30 };
console.log(detail(peerson));
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    detail() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    secret() {
        return "This is a secret method.";
    }
    getSecret() {
        return this.secret();
    }
}
const person = new Person("John", 30);
console.log(person.detail());
if (person instanceof Person) {
    console.log(person.getSecret());
}
//# sourceMappingURL=fun_class.js.map