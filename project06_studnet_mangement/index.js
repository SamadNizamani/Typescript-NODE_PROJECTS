var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.student = [];
        this.teacher = [];
        this.name = name;
    }
    School.prototype.addStudent = function (stdobj) {
        this.student.push(stdobj);
    };
    School.prototype.addTeacher = function (teachobj) {
        this.student.push(teachobj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, scholl) {
        this.name = name;
        this.age = age;
        this.schollName = scholl;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var school1 = new School("Boys School Tando soomro");
var scholl2 = new School("Girls School Tando Soomro");
var std1 = new Student("Ajmal", 32, school1.name);
var std2 = new Student("Tumazir", 23, scholl2.name);
school1.addStudent(std1);
scholl2.addStudent(std2);
