// Задание 5.
// Объявить массив из 5 элементов и заполнить его любыми числами. 
// Присвоить 5 переменным значения из массива с помощью деструктуризации.

let array = [5,6,7,2,6];
const [a,b,c,d,e] = array;

console.log("Array: " + array);
console.log("Variables: " + a + b + c + d + e);