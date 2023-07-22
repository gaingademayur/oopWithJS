class father{
    birthDate(){
        return '10/09/1969'
    }
    surname(){
        return 'Gaingade'
    }
}
class son extends father{
    birthDate(){
        return '30/04/1999'
    }
}

sonObj = new son()
console.log(sonObj.birthDate()) //runtime polymorphism
console.log(sonObj.surname()) //compile time polymorphism