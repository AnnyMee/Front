//loops

const arrName = [1,2,3,4,"a",null,undefined,NaN,[1,2]];

// for(let i=0; i<arrName.length; i++){
//     console.log(arrName[i]);
// }
// for(let i=arrName.length-1; i>=0;i--){
//     console.log(arrName[i]);
// }

const newArray = [];

for(let i=arrName.length-1; i>=0;i--){
    newArray.push(arrName[i]);
}

console.log(newArray);

const sArray =[1,2,3];
const [a,b,c] = sArray;  // const a=sArray[0];
                         // const b=sArray[1];
                         // const c=sArray[2];

const copysArray = sArray;
sArray[0] = "a"; //данное значение поменяется и в оригинале и в копии
//чтобы значение поменялось только в оригинале
const copysArray2 = [...sArray]; //сюда же можно ещё добавить элементы
sArray[0] = "a";
//или использовать slice()

console.log(a,b,c);
console.log(sArray); 
console.log(copysArray); 
console.log(...sArray); //это выводит результат без скобок массива