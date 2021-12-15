/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let number1 = 49;
let number2 = 115;
let number3 = 61;

function isPrime(num) {

    let isTrue = true;
    let isFalse = false;

    if (num === 2) {
        console.log(isTrue);
    }
    if (num < 2) {
        console.log(isFalse);
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(isFalse);
            break;
        }
        console.log(isTrue);
    }
}

console.log(number1);
isPrime(number1);
console.log(number2);
isPrime(number2);
console.log(number3);
isPrime(number3);