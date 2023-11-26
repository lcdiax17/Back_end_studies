const nameList: string[] = [];

const addName = (name: string) => {
    nameList.push(name)
}

const readNames = () =>{
    nameList.forEach((nameUser) => {
        console.log(nameUser)
    })
}

const removeNameList = (i: number) =>{
    nameList.splice(i, 1)
}
const updateNameList = (i: number, name: string) =>{
    nameList.splice(i, 1, name)
}

addName("lucas")
addName("samuel")
addName("luisa")

removeNameList(1)

updateNameList(1, "luciana")

readNames()