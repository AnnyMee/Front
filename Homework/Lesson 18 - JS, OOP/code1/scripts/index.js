// Написать функцию, которая принимает на вход массив имен и возвращает массив имен, начинающихся на букву "а" (большую или маленькую).

const names = ["Alice", "Kate", "Liam", "Mia", "Anny", "Viktor", "Wendy", "Alina", "ava"];

function checkNames(array){
    const newArray = array.filter(element => {return element.toLowerCase().startsWith('a')});
    return newArray;
}
console.log(checkNames(names));