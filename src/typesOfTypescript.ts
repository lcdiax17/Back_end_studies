/*enum é um conjunto de valores nomeados, é semelahnte a um obj

ex:

*/

enum UserRoles{
    USER = "user",
    EDITOR = "editor",
    ADMIN = "admin",

    //agrupamento de valores do mesmo tipo
}

const userType = UserRoles.EDITOR

//notações de tipos:

// Função que recebe dois números e retorna a soma
const addNumbers = (num1: number, num2: number): number => num1 + num2;

// Uso da função com notações de tipo
const result: number = addNumbers(5, 10); // result = 15

// Tentativa de chamar a função com parâmetros de tipo errado resultará em erro
const invalidResult: number = addNumbers(5, "10"); // Erro de tipo: Argument of type '"10"' is not assignable to parameter of type 'number'


/*
quando a função não retona o valor eu posso utilizar o valor de void - EX:

*/

// Função que apenas imprime uma mensagem no console, sem retorno
const showMessage = (message: string): void => console.log(message);

// Uso da função sem esperar retorno
showMessage("Olá, TypeScript!"); // Imprime "Olá, TypeScript!"

//Union types

/*
eu posso atribuir mais de um valor para uma variável sem ferir a regra de tipagem estática

sintaxe abaixo:
*/

let Variable: number | boolean

Variable = 10;
Variable = true;
Variable = "teste"

const showNumber = (number: number | undefined = undefined) =>{
    console.log(number)
}

showNumber(10)
showNumber()
showNumber("10")