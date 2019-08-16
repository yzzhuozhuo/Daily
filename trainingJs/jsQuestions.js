const person = { name: 'Lydia' };

function sayHi(age) {
    console.log(`${this.name} is ${age}`)
}
// call() 和 bind()
sayHi.call(person, 21); // Lydia is 21
sayHi.bind(person, 21); // 未输出

console.log('--------------------------')

function sayHi() {
    return (() => 0)()
}
// 只有7中内置类型：null undefined boolean number string object symbol
// function 不是一种类型，函数是对象，它的类型是object
// 只有6中falsy： undefined null NaN 0 '' false 
// Function构造函数 比如 new Number 和 new Boolean 是truthy。
console.log(typeof sayHi()); // number

console.log('--------------------------')

console.log(typeof typeof 1); // string typeof总是返回一个字符串

console.log('--------------------------')

const number = [1, 2, 3];
number[10] = 11;
console.log('number :', number); // number: [1,2,3, <7 empty items>, 11]

console.log('--------------------------')

(() => {
    let x, y
    try {
        throw new Error()
    } catch (x) {
        (x = 1), (y = 2)
        // console.log(x) 1
    }
    // console.log(x) undefined
    // console.log(y) 2
})()

console.log('--------------------------')

[
    [0, 1],
    [2, 3]
].reduce((acc, cur) => {
    return acc.concat(cur) // [1,2,0,1,2,3]
}, [1, 2])

const add = () => {
    const cache = {};
    return num => {
        if (num in cache) {
            return `From cache! ${cache[num]}`
        } else {
            let result = num + 10;
            cache[num] = result;
            return `Calculated! ${result}`
        }
    }
}

const addFunction = add();
console.log(addFunction(10)); // Calculated! 20
console.log(addFunction(10)); // From cache! 20
console.log(addFunction(5 * 2)); // From cache! 20