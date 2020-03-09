// strongly typed
var greet = (name: string) => {
    console.log(`Hello My name is ${name}`);
}

greet("wildan");

// interface as reusable object

interface IPerson {
    name: string,
    gender: boolean,
    age: number,
    sayHi(): void
}

const guy: IPerson = {
    name: "wildan",
    gender: false,
    age: 30,
    sayHi: () => { console.log("hi aku wildan") }
}

const anotherGuy: IPerson = {
    name: "",
    gender: false,
    age: 10,
    sayHi: () => { console.log('hi aku siapa') }
}

guy.sayHi();
anotherGuy.sayHi();

// using class

class Student {
    constructor(public name: string, public nim: number, public gender: boolean ) {
        this.name = name;
        this.nim = nim;
        this.gender = gender;
    }

    sayHI() {
        console.log(`Hi My name is ${this.name}`);
    }
}

let someone = new Student("wildan", 46530, false);
console.log(someone.gender);

// another use of interface

interface INameFormater {
    (firstName: string, lastName: string): string
}

var commaFormatter: INameFormater = (firstName, lastName) => {
    return `${firstName},${lastName}`;
}

var hyphenFormatter: INameFormater = (firstName, lastName) => {
    return `${firstName}-${lastName}`;
}

// exchanged student
class ExchangedStudent extends Student {
    constructor(public name: string, public nim: number, public gender: boolean, public country: string ) {
        super(name, nim, gender);
        this.country = country
    }

    sayHI() {
        console.log(`Hello My name is ${this.name} and I'm exhange student from ${this.country}`);
    }
}

let randomGuy = new ExchangedStudent("Budi", 46530, true, "Japan");
randomGuy.sayHI();
