/*
-        Напишите функцию вычисления типа аргумента и вывод типа в консоль
 */

let arg1 = undefined;
let arg2 = 0;
let arg3 = 1n;
let arg4 = true;
let arg5 = "foo";
let arg6 = Symbol();
let arg7 = {};
let arg8 = null;
let arg9 = function () {
};

function checkType(arg) {
    return typeof arg
}

let result1 = checkType(arg1);
console.log(result1);
let result2 = checkType(arg2);
console.log(result2);
let result3 = checkType(arg3);
console.log(result3);
let result4 = checkType(arg4);
console.log(result4);
let result5 = checkType(arg5);
console.log(result5);
let result6 = checkType(arg6);
console.log(result6);
let result7 = checkType(arg7);
console.log(result7);
let result8 = checkType(arg8);
console.log(result8);
let result9 = checkType(arg9);
console.log(result9);