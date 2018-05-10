import Person from "./person"
import student from "./student"
export default class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass === undefined) {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach No Class.";
        } else {
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach Class " + this.klass + ".";
        }
    }
}