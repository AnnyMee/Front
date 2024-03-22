// Написать функцию "hello" которая принимает строку, и колбек функцию.
// И колбек функция должна выполниться с первым аргументом (строкой), и результат ее выполнения должен вернуться из функции "hello"

//Вызываем фунукцию hello, передаём ей своё имя и стрелочную функцию, которая принимает строку-аргумент
//и возвращает строку "Привет *строка аргумент*"

//вынести строку аргумент в переменную

const hello = (str,f) => {
    return f(str);
}
console.log(hello("Anny", str=> "Hello " + str));

const str2 = str => "Hello " + str;
const result = hello("Anny", str2);
console.log(result);

const strUni = hello("Anny", (str) => {   
    // "Hello " + str
    // instead:
    return `Hello ${str}`               //шаблонная строка. писать через косые кавычки
});

//////////////////////////////////////////////////////////////////////////////////////

const a = "word"
const b = "another word"
const c = "again another word"
const d = "and again another word"

console.log("This is a " + a + ", this is an " + b + ", this is " + c + " " + d);
console.log(`This is a ${a}, this is an ${b}, this is ${c}, ${d}`);                     //шаблонная строка. труднее запутаться в плюсах

