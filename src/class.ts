export class Person {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    sayProfission(message: string){
        console.log(message)
    }

    sayMyname(){
        console.log(`Meu nome é ${this.name}`)
    }
}

