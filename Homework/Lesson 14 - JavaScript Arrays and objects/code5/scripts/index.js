// 4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, 
// который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.
// Пример:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }

const object = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };

const object2 = {};

function fromToObject(obj){
    
    for (i in obj){

        object2[i] = {
            value : obj[i], 
            type : typeof obj[i]
        };

    }
    return object2;
}
console.log(fromToObject(object));