// const array = [5, 6, 8, 2, 0, 7, 5, 12, 14, 15, 21];

// function toNewArray (array) {
//     const newArray=[];
//     for(let i = 0; i<array.length; i++){
//         if(array[i]%2===0){
//             newArray.push(array[i]);
//         }else{
//             newArray.push(array[i]*2);
//         }
//     }
//     return newArray;
// }

// console.log(toNewArray(array));

const array = [5, 6, 8, 2, 0, 7, 5, 12, 14, 15, 21];


function toNewArray (array) {
const newArray = array.map(element => element%2===0 ? element : element*2);
return newArray;
}

console.log(toNewArray(array));