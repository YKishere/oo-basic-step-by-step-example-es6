import Person from "./person";
import Student from "./student";

export default class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        //return this.klasses;
        if (this.klasses == null) {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        } else {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klasses[0].number + ", " + this.klasses[1].number + "."
        }
    }

}