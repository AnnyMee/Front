// Написать функцию, которая принимает на вход массив чисел и возвращает массив из тех же элементов, но в обратном порядке.

const numbers = [5, 18, 22, 77, 6, 0, 34, 50];

function rev(array){
    const newArray = array.reverse();
    return newArray;
}
console.log(rev(numbers));