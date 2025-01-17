// Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:
// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'

const object = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

const toStr = (object) => {

    return Object.values(object).join(', ');
    
}
console.log(toStr(object));