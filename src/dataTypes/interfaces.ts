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