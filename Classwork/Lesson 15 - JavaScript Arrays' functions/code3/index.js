// const array = [1, 2, 3, 5, 7, 11, 17, 21]

// // const newArrayMap = array.map((elem) => elem**2);

// const pow = (elem) => elem**2;

// function toPow (elem) {
//     return elem**2;
// }

// const newArrayMap = array.map(pow);  //здесь после имени функции pow не нужны скобки потому, что map сам всё подставляет, отправляя в поиск элеметов (elem)

// console.log(newArrayMap);

const array2 = [1, 2, 3, 5, 7, 11, 18, 22, 17, 21]

function toEvenOrOdd (elem) {
    return elem % 2 === 0 ? elem/2 : elem/3;
}

// const newArray2 = array2.map(toEvenOrOdd);
// console.log(newArray2);


//sort

const sortedArr = array2.sort(          //sort мутирующая функция. Нужно создать копию массива, если нужно, чтобы он остался неизменным
    (a, b) => {
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1;
        }
        else{ 
            return 0;
        }
    }
);
console.log(sortedArr);

//filter

const filteredArr = array2.filter(
    (a) => {return a>5}
);

console.log(filteredArr);

//forEach

const forEachArr = array2.forEach(
    (a) => {console.log(a)
    }
);

const newFilteredWithForEach = [];

// array2.forEach(
//     (a) => {
//         if(a>17){
//             newFilteredWithForEach.push(a);
//         }
//     }
// );

let sum=0;
array2.forEach(
    (a) => {
    sum+=a;
    }
);
console.log(sum)