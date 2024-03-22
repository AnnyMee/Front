// Написать функцию, принимающую массив, где могут быть вложенные массивы. Вернуть нужно “плоский массив”. 
// Например: 
// На вход [1, 5, [67, 78, 34], 12, 14]
// Должна вернуть [1, 5, 67, 78, 34, 12, 14]
// Array.isArray

const array = [1, 5, [67, 78, 34], 12, 14];

function flatArray(arr){
    const newArray = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            newArray.push(...flatArray(arr[i])); 
    }else{
        newArray.push(arr[i]);
    }}
    return newArray;
}
console.log(flatArray(array));

console.log('-------------------а можмно просто:--------------------')
function toFlat(arr){
    return arr.flat();
}
console.log(toFlat(array))