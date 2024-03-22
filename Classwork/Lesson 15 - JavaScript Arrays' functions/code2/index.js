const arr = [1, 2, 3, 5, 7, 11, 17, 21];


const arrPlusTwo = () => {
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr[i] = arr[i] + 2;
    }
return newArr;
}


// console.log(arrPlusTwo(arr));



const newArrMap = arr.map(          //map - функция массива - принимает как аргумент функцию callback ((elem) => {return elem + 2}) 
    (elem) => {return elem + 2}     //возвращает преобразованный копию массива (arr) преобразовав его элементы по запросу callback
                                    //={return elem + 2}= в данном случае можно записать как =elem + 2=
    );

// по факту остаёмся с:
// const newArrMap = arr.map((elem) => elem + 2);

console.log(newArrMap);