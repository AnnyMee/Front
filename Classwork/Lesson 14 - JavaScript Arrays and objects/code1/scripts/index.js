// 1. Получает число и возвращает это число умноженное на 2. Функція называется double.
// 2. Получает число и возвращает квадрат числа. Называется PowMe
// 3. Получает число, если четное умножает на 2 и возвращает результат. Если не четное возвращает квадрат.

function double (number) {
    return number*2;
}
function powMe (number) {
    return number**2;
}
const triple = (number) => number*3;

function evenOrOdd (number, double2) {
    if(number%2===0){
        return double(number);
    }
    return powMe(number);
}

let result = evenOrOdd(8, triple);
console.log(result);  //result -> 16 (будет использована функция со строки 15, проигнорировав второй аргумент (double2) из функции evenOrOdd)
