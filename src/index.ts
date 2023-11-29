import { IProduct } from "./interfaces";

const productList: IProduct[] = [];

const addProduct = (product: IProduct) =>{
    productList.push(product)
    return{
        product, message: "produto criado com sucesso"
    }
}

const getProducts = () =>{
    return productList
}

const product1 = addProduct({id: 10, name: "batata", price: 300})
const product2 = addProduct({id: 20, name: "batata doce hmm", price: 600})

console.log(product1)
console.log(product2)



console.log(getProducts())