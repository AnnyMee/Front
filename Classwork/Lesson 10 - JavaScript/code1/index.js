function sum(a, b){
    console.log(a+b);
    return(a)
}

const resultSum = sum(1, 5);
const resultSumA = sumA(1, 5)
console.log(resultSum);

const sum1 = function(a, b){   //function expression - в этом случае функция ведёт себя как переменная. То есть её нельзя использовать до того, как мы её объявили
    return a+b;
}

function sumA(a, b){          //function declaration
    return (a+b);
}


const sumAr = (a, b) => {    //alternative way 
    console.log("Hi");
    return (a+b);
}
console.log(sumAr(5,2));

const summa = sumAr(5, 3);
console.log(summa);

const sumAr2 = (a, b) => a+b;  //запись функции через стрелочный метод. Пишем без фигурный скобок и без return

const summa2 = sumAr2(5, 3);
console.log(summa2);

const pow = a => a;            //запись функции через стрелочный метод. Пишем без любых скобок (только если параметр один) и без return

const powRes = pow(3);
console.log(powRes);

const print = () => "Hello";

const printRes = print();
console.log(printRes);
