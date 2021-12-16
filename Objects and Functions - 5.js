/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let number1 = 49;
let number2 = 115;
let number3 = 61;

function isPrime(num) {
    if (num === 2) {
        return true;
    }
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let result1 = isPrime(number1);
console.log(result1);
let result2 = isPrime(number2);
console.log(result2);
let result3 = isPrime(number3);
console.log(result3);