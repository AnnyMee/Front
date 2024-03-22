//arrays
const arrName = [1,2,3,4,"a",null,undefined,NaN,[1,2]]; //обьявление массива может быть через const и это не помешает нам менять значения внутри
//массивы в js динамичны и сами создают для себя размер. так же массивы не привязаны к типу данных. в один массив можно включить разные типы данных

console.log(arrName[1]);
console.log(arrName.length);

const addLast = arrName.push("last 'hero'"); //добавляет элемент в конец

// console.log(arrName);
// console.log(addLast);

const delLast = arrName.pop(); //удаляет последний элемент

//shift/unshift

const testVar = arrName.shift(); //удаляет первый элемент

const testVar2 = arrName.unshift('a');//добавляет на первую позицию

const testVar3 = arrName.splice(2,0,"haha");//добавляет на указанную позицию. В скобках указываем позицию на первом месте, на втором месте сколько элементов ну жно удалить, на третьем месте сам элемент

arrName[1] = "1a";

console.log(delLast);
console.log(testVar);
console.log(arrName);