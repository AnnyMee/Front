// Задание 6.
// Разбить строку на слова и вывести в консоль по одному слову в строке:
// "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая  кислота.""

const originalString = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";

let result = "";
for (let i = 0; i<originalString.length; i++){
    if(originalString[i] !== "," && originalString[i] !== ":" && originalString[i] !== "."){
        result += originalString[i];
    }
}
const array = result.split(" ");

for (let i = 0; i<array.length; i++){
    console.log(array[i]);
}