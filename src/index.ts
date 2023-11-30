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