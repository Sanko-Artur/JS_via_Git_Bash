/*
Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
 */

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
let a = 3;

arr = arr.filter(item => (item > a));

console.log(arr);