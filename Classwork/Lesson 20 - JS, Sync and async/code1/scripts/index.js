// Написать функцию, которая принимает масив чисел, и возвращает среднее арифметическое
// Использовать reduce и в принципе можно любой другой метод массива

const array = [4, 4, 4, 5];

const calcAverage = (arr) => arr.reduce((a, b) => (a+b))/arr.length;
console.log(calcAverage(array));