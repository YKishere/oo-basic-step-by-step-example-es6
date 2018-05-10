import Person from "./person"
import Student from "./student";
export default class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass === undefined) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + " I am a Teacher. I teach " + this.klass.getDisplayName() + ".";
        }
    }
    introduceWith(studentName) {
        this.studentName = studentName;
        if (this.klass === studentName.klass) {
            return super.introduce() + " I am a Teacher. I teach " + studentName.name + ".";
        } else {
            return super.introduce() + " I am a Teacher. I don't teach " + studentName.name + ".";
        }
    }
}