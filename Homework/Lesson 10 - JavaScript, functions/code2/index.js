// Задание 2: Стрелочная ф-ция возводящая число в квадрат
// Создайте ф-цию, которая возвращает квадрат числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть квадрат этого числа

const calcPow = a => Math.floor(a)**2;
console.log(calcPow(2.2));