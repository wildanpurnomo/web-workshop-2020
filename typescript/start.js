var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// strongly typed
var greet = function (name) {
    console.log("Hello My name is " + name);
};
greet("wildan");
var guy = {
    name: "wildan",
    gender: false,
    age: 30,
    sayHi: function () { console.log("hi aku wildan"); }
};
var anotherGuy = {
    name: "",
    gender: false,
    age: 10,
    sayHi: function () { console.log('hi aku siapa'); }
};
guy.sayHi();
anotherGuy.sayHi();
// using class
var Student = /** @class */ (function () {
    function Student(name, nim, gender) {
        this.name = name;
        this.nim = nim;
        this.gender = gender;
        this.name = name;
        this.nim = nim;
        this.gender = gender;
    }
    Student.prototype.sayHI = function () {
        console.log("Hi My name is " + this.name);
    };
    return Student;
}());
var someone = new Student("wildan", 46530, false);
console.log(someone.gender);
var commaFormatter = function (firstName, lastName) {
    return firstName + "," + lastName;
};
var hyphenFormatter = function (firstName, lastName) {
    return firstName + "-" + lastName;
};
// exchanged student
var ExchangedStudent = /** @class */ (function (_super) {
    __extends(ExchangedStudent, _super);
    function ExchangedStudent(name, nim, gender, country) {
        var _this = _super.call(this, name, nim, gender) || this;
        _this.name = name;
        _this.nim = nim;
        _this.gender = gender;
        _this.country = country;
        _this.country = country;
        return _this;
    }
    ExchangedStudent.prototype.sayHI = function () {
        console.log("Hello My name is " + this.name + " and I'm exhange student from " + this.country);
    };
    return ExchangedStudent;
}(Student));
var randomGuy = new ExchangedStudent("Budi", 46530, true, "Japan");
randomGuy.sayHI();
