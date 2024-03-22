// Задание 2.
// Объвить массив из 10 любых, заполнить. 
// Вырезать первый элемент и добавить его в конец массива.

const originalArray = ["a", 8, 4, 4, "i", 1, "ddd", 2, null, "nya"];

let firstElement = originalArray.shift();

originalArray.push(firstElement);

console.log("Changed array: ", originalArray);