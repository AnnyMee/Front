// Написать функцию, которая принимает на вход массив чисел и возвращает их сумму. 
// Если получится использовать метод reduce - будет здорово. Завтра его рассмотрим.

const numbers = [5, 18, 22, 77, 6, 0, 34, 50];

function sumNumbers(array){
    const summ = array.reduce((a, b) => a+b);
    return summ;
}
console.log(sumNumbers(numbers));