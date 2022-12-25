const numbers = [1, 2, , 43, 4, 6, 7]

// good
const increasedByOne = [];
numbers.forEach((num) => {
    increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne3 = numbers.map((num) => num + 1);


const x = numbers.every

console.log(increasedByOne)
console.log(increasedByOne3)

