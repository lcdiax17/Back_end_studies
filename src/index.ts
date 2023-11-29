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