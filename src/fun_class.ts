type me = { name: string; age: number };
function detail(me: me): string {
    return `My name is ${me.name} and I am ${me.age} years old.`;
}
const peerson: me = { name: "John", age: 30 };
console.log(detail(peerson));

class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public detail(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    private secret(): string {
        return "This is a secret method.";
    }
    public getSecret(): string {
        return this.secret();
    }

}

const person = new Person("John", 30);
console.log(person.detail());
if (person instanceof Person) {
    console.log(person.getSecret());
}