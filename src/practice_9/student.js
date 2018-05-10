import Person from "./person"
import Class from "./class"
export default class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }
    introduce() {
        if (this.klass.leader === undefined) {
            return super.introduce() + " I am a Student. I am at " + this.klass.getDisplayName() + ".";
        } else {
            return super.introduce() + " I am a Student. I am Leader of " + this.klass.getDisplayName() + ".";
        }
    }
}