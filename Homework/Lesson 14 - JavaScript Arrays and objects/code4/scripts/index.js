// Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, 
// но значения свойств - это их типы.
// Пример:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

const object = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

const object2 = {};

function fromToObject(obj){
    
    for (i in obj){

        object2[i] = typeof obj[i];

    }
    return object2;
}
console.log(fromToObject(object));