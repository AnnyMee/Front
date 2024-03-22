// Написать функцию, которая примет объект вида:
// {
//    'customer-id-1': {
//       name: 'William',
//       age: 54
//    },
//    'customer-id-2': {
//       name: 'Tоm',
//       age: 17
//    }
// }
// и вернет массив обьектов вида:
// [{name: 'William', age: 54, id: 'customer-id-1’}, {name: 'Tom', age: 17, id: 'customer-id-2'}]

const customersObject = {
   'customer-id-1': {
      name: 'William',
      age: 54
   },
   'customer-id-2': {
      name: 'Tоm',
      age: 17
   }
}

function toArray (object){
    const newArray = Object.keys(object).map(element => {
        return {name : object[element].name,
                age : object[element].age,
                id : element
                };
    });
    return newArray;
}
console.log(toArray(customersObject));