// Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. 
// Первый элемент каждого внутреннего массива ключ, второй - значение. 
// Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]

const arrayOfArray = [
      [ 'height', 170 ],
      [ 'weight', 80 ],
      [ 'sport', 'regbi' ],
      [ 'full name', 'John Doe' ],
      [ 'sing', 'love' ],
      [ 'speed', 90 ]
    ]

let object = {};

arrayOfArray.forEach(
    (element) => {
        object[element[0]] = element[1];
    }
);
console.log(object);

// function toObject (arr) {
    
//     for (let i = 0; i<arr.length; i++){

//         object[arr[i][0]] = arr[i][1];

//     }
//     return object;
// }
// console.log(toObject(arrayOfArray));