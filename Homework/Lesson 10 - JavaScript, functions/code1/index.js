// Задание 1: Even/Odd
// Создайте ф-цию, которая определяет парность числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть строку 'even' если число четное
// Функция должна вернуть строку 'odd' если число не четное

function calc (a){
    if(Math.floor(a)%2===0){
        return "Even"
    }else{
        return "Odd"
    }
} 
const result = calc(8.7);
console.log(result);