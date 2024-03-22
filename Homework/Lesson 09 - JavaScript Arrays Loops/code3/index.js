// Задание 3.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
// Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

const array = [];
for (let i = 0; i < 10; i++) {
array.push(Math.floor(Math.random() * 100));
}

let min = Math.min(...array);
let max = Math.max(...array);

let sum = min + max;

console.log("Array: ", array);
console.log("Min value: ", min);
console.log("Max value: ", max);
console.log("Sum of min and max values: ", sum);