/*
Реализовать цикл, который выводит в консоль простые числа
 */

loop:
    for (let i = 2; i < 150; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue loop;
        }
        console.log(i);
    }