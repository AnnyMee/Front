const sentence = "Today we are learning loops";

// console.log(sentence.length); //длина
// console.log(sentence[1]);     //по индексу
// console.log(sentence.toLowerCase());
// console.log(sentence.toUpperCase());

console.log(sentence.split(" "));  //по одному элементу

console.log(sentence.substring(0,7));

const tempVar = sentence.split(",");
console.log(tempVar);
console.log(...tempVar);

let newSentences = '';

for(let i = 0; i < sentence.length; i++){
    if(sentence[i] !==  ","){
        newSentences += sentence[i];
    }
}

console.log(newSentences);