const log = (data)=>{
    console.log(data)
}

// Strings
const str : string = "lets kick off"
log(str)
// Number
const num : number = 555
log(num)

// Boolean
let check: true
check = true
let verify: false
verify = false
log(check)
log(verify)

// Arrays
let arrStr : string[]
arrStr = ["SSS", "SWAT"]
log(arrStr)

let arrNum : number[]
arrNum = [1, 3]
log(arrNum)

// Tuples
 let role : [string, number]
 role = ["customer",1]
 log(role)

//  Enum
enum music { ARTIST ="MJ", ALBUM = 3 }
let alb = music.ALBUM
let artist = music.ARTIST
log(alb)
log(artist)

// Any
// Avoid any. Use only when data type is unknown.
let avoidAny : any
avoidAny = "string"
log(avoidAny)

avoidAny = 2344
log(avoidAny)

let anyArray : any[]
anyArray = ["string", 325]
log(anyArray)

// Objects
const obj :{name:string;age:number; isMale:boolean}= {
    name: "Doe John",
    age: 60,
    isMale:false
}
log(obj.name)
log(obj.age)
log(obj.isMale)

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
log(user.name)
log(user.age)
log(user.isMale)

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
log(createAccount)
