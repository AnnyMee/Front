// types of variables:
// Number (2**53)
// BigInt (long)
// String
// Boolean
// Symbol (sort of hash)
// undefined (простое объявление переменной)
// null

// как объявить переменную:
// var
// let
// const
// (ex: let a; or const b=3;)

// let a=3;
// a=4;
// console.log(a)    // sout
// const b=3;
// // b=4;              // error
// console.log(b)

let a=4;
a="world"; 
// тип переменных можно менять в одной и той же переменной

let aa=5;
let str="555";
let bool = true;  // or false
let u = undefined;
let n = null;
let sy = Symbol ('inter'); // используется для задания уникальных ключей в объектах
let bi = 1257n;

//////////////////////////
let newa;

if(true){
    // let newa;
    // let newa=9; -> result: 9 undefined
     let newa=9;
    console.log(newa);
};
console.log(newa);
/////////////////////////

console.log(typeof str);  //result string (type of variable)

let typeOfVar=typeof bool;
console.log(typeOfVar);
//in case we ask for the null type - the console will show "object"

////////////////////////

// console(typeof aa);
// let aaStr=String(aa);
// let aaStr = aa + "5";  //result 55
// let aaStr1 = aa +5;    // result 10

// console.log(typeof aaStr);
// console(aaStr);

//в число
let strNum = Number(str);  //or 10 + +str or 10 - -str
let strNum1 = Number("h15");
let strNum2 = Number (true); //result 1. false will result in 0
console.log(strNum + " = " + typeof strNum);
console.log(typeof strNum1);  //result NaN (not a number)
console.log(strNum2);


//в boolean
// let newBool = Boolean ("null");

// let newBool = Boolean(-1); //or 0 for false

//to false
//0, undefined, null, "", NaN

let newBool = Boolean(null);  //result false, same if undefined
console.log(newBool);

if(null){
    console.log('true');
}else{
    console.log('false');
}

//математические операторы
//+ - / * % ** (Math)

//логические оператор
// if else, ternar

//операторы сравнения
//> < >= <= == ===(строгое равно) != !==(строгое не равно) 

//=== == в чем разница
console.log (9==="9");  //result false
//строгое сравнение сравнивает тип переменной и значение переменной
//не строгое сравнение сравнивает только значение переменной. при сравнении цифры 9 и строки 9, результат будет true

//для сравнения происходит преобразование. шкала приоритетов: string > number > boolean
console.log(true=="true"); //result false потому, что true сначала преобразуется в 1 и потом преобразует 1 в "1", а дальше происходит сравнение между строками
