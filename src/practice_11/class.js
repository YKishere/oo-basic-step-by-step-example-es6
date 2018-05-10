export default class Class {
    constructor(number) {
        this.number = number;
    }
    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(student) {
        if (this.number === student.klass.number) {
            this.leader = student;      // 为class添加leader属性
            return true;
        } else {
            console.log('It is not one of us.');
        }
    }

    appendMember(student) {
        if (this !== student.klass) {
            student.klass = this;
        }
    }

    registerAssignLeaderListener(student, teacher) {
        //console.log()
        if (student.klass.leader !== null) {
            console.log("I am " + teacher.name + ". I know " + student.name + " become Leader of Class " + this.number + ".");
        }
    }

    registerJoinListener(student, teacher) {
        if (teacher.klasses.find(x => x == student.klass)) {
            console.log("I am " + teacher.name + ". I know " + student.name + " has joined Class " + this.number + ".");
        }
    }
}