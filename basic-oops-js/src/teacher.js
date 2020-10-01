import {CoolPerson} from './coolperson'

export function promote(){
    console.log('promote');
}

export default class Teacher extends CoolPerson {
    constructor(name, subject='new'){
        super(name);
        this.subject = subject;
    }

    teach() {
        console.log('teach', this.name);
        console.log(this);// this class and refernce to the CoolPerson class
    }
}