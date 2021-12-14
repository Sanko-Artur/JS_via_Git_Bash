/*
Преобразовать числовой массив в Boolean
 */

let arr = [1, 0, 2, 5, -1, -5, 1, -0, -1];

arr = arr.map(item => Boolean(item));

console.log(arr);