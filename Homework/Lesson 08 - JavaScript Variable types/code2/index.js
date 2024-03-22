const a = 17;
const b = 5;
console.log(a > b);             //true
console.log(a <= b);            //false
console.log(a == b);            //false
console.log(a != b);            //true

console.log('a' < 'b');         //true (сравнение кода символа?)
console.log('ab' > 'a');        //true (суммируется код символа а и b и потом сравнивается с b?)


console.log('17' > 1);          //true (суммируется код символа 1 и 7 и потом сравнивается с 1(символ)?)

console.log(17 === 1);          //false
console.log(17 === 17);         //true
console.log(17 === '17');       //false
console.log(17 === true);       //false
console.log('0' === '');        //false
console.log(true === false);    //false
console.log(true === true);     //true
console.log(null === undefined);//false
console.log(false === 0);       //false

console.log(17 == '17');        //true
console.log('0' == '');         //false
console.log(0 == '');           //true
console.log(null == undefined); //true
console.log(false == 0);        //true

console.log(undefined == null); //true  (отсутствие значения и пустота)
console.log(undefined == 0);    //false (отсутствие значения не равно 0 (0 и есть значение))
console.log(null == 0);         //false (пустота - нет ничего, 0 - значение)
console.log(undefined < 0);     //false (отсутствие значения не может быть меньше 0)
console.log(undefined > 0);     //false (отсутствие значения не может быть больше 0)