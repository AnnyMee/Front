// Задание 1.
// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. 
// Найти максимальное и минимальное значение в массиве. Вывести в консоль.

const array = [];

for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}

let max = Math.max(...array);
let min = Math.min(...array);

console.log("Array: ", array);
console.log("Max value: ", max);
console.log("Min value: ", min);