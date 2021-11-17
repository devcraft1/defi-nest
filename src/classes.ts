// Classes
class UserAccount {
    name :string
    age:number
    isMale:boolean
   
    constructor(name, age, isMale){
        this.name = name;
        this.age = age;
        this.isMale =isMale 
    }
}
const createAccount : User = new UserAccount("dennis",30, true)
console.log(createAccount)