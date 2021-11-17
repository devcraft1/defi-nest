









//  Enum
enum music { ARTIST ="MJ", ALBUM = 3 }
let alb = music.ALBUM
let artist = music.ARTIST
console.log(alb)
console.log(artist)

// Any
// Avoid any. Use only when data type is unknown.
let avoidAny : any
avoidAny = "string"
console.log(avoidAny)

avoidAny = 2344
console.log(avoidAny)

let anyArray : any[]
anyArray = ["string", 325]
console.log(anyArray)

// Objects
const obj :{name:string;age:number; isMale:boolean}= {
    name: "Doe John",
    age: 60,
    isMale:false
}
console.log(obj.name)
console.log(obj.age)
console.log(obj.isMale)

//  Interface
interface User{
    name : string,
    age: number,
    isMale: boolean
}

const user : User = {
    name: "John Doe",
    age: 30,
    isMale:true,
}
console.log(user.name)
console.log(user.age)
console.log(user.isMale)

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
