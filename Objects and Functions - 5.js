/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let num = 115;

function prime(a) {
    if (a == 2) {
        console.log(`${a} is prime!`);
    }
    if (a < 2) {
        console.log(`${a} is not prime!`);
    }
    for (let j = 2; j < a; j++) {
        if (a % j == 0) {
            console.log(`${a} is not prime!`);
            break;
        }
        console.log(`${a} is prime!`);
    }
}

prime(num);