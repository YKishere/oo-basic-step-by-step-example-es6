import Person from "./person";
import Student from "./student";

export default class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass === undefined) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + " I am a Teacher. I teach " + this.klass.getDisplayName() + ".";
        }
    }
}