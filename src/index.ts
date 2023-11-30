import { Person2 } from './constructor';

class Person {
    name: string = "Lucas"
    surname: string ="Dias"

    profission(message:string){
        console.log(message)
    }
}

const person = new Person();
console.log(person.name + " " + person.surname)

person.profission("Web Developer")


const newPerson = new Person2("lucas");

newPerson.sayProfission("Full stack developer");
newPerson.sayMyname();

class Student{
    name: string = "";
    module: string = "";
    grade: number | null = null

    constructor(name: string, module: string){
        this.name = name
        this.module = module
    }

    studentApresentation(){
        console.log(`Olá pessoal meu nome é ${this.name} e estou no ${this.module}`)
    }

    setGrade(note: number){
        this.grade = note
    }

    getGrade(){
        console.log(this.grade)
    }
}

const studentNameAndModule = new Student("Osvaldo", "M4")

studentNameAndModule.studentApresentation()
studentNameAndModule.setGrade(20)
studentNameAndModule.getGrade()




