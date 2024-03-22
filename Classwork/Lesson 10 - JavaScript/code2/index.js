const sum = (a = 2, b = 2) => a+b;   //можно передать параметры уже дав значение переменным, на случай, если ничего не будет передаваться

const sumResult = sum(5);            //тут 5 станет значением для переменной а, а b останется быть 2, как и задано сразу в функции
// console.log(sumResult);

//////////////////////////////////////

const result = (a=1, b=1) => a*b;
const sumResult1 = result(4,6);
console.log(sumResult1);

const result2 = (a=1, b=1) => a**b;
const sumResult2 = result2(5);
console.log(sumResult2);

const universal = (a,b,f) => {  //передаём в качестве параметров a, b и функцию, которую записываем ниже
    return f(a,b);              //эта функция принимяет имя callback function
}

console.log(universal(3,2, (a, b) => a/b));

const callBackResult = universal(3,2, (a, b) => a/b);
console.log(callBackResult);