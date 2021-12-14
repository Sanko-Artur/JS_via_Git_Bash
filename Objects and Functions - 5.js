/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let number = 115;

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
            break;
        }
        return true;
    }
}

let result = isPrime(number);
console.log(result);