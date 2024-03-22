const playerHeight = 170;
const playerWeight = 80;
const playerSport = 'regbi';

const h = 'height';
[3, 4, 5, 'f', null];

const playerJohn = {
    height : 170,
    weight : 80,
    sport : 'regbi',
    'full name' : 'John Doe',
    sing : (songTheme) => {
        // return songTheme;
        console.log(songTheme);
    }
}

const concert = {
    long : 2,
    songs : ['spring', 'love', 'alkohol'],
    date : {
        dayOfWeek : 'monday',
        year : 2024,
        month : 'april',
        date : 13
    }
}

console.log(playerJohn.height);
playerJohn.sing('goal');
console.log(playerJohn['full name']);
console.log(concert['date']);

console.log(playerJohn[h]); //невозможно у playerJohn вызвать внешнюю переменную, даже если она содержит его рост

////////////////////////////////////////////////////

// Добавление ключей (свойсств)

// console.log(playerJohn);
playerJohn.speed = 90;
// console.log(playerJohn);


// for (i in playerJohn) {         
//     console.log(playerJohn[i]);
// }

const toDo = {
    0 : 'get up',
    1 : 'drink',
    2 : 'eat'
}

const toDoArr = ['get up a', 'drink a', 'eat a'];

// console.log(toDo[0]);

for(let i = 0; i < toDoArr.length; i++){
    console.log(toDoArr[i]);
}

const toDoKeys = Object.keys(playerJohn);

// console.log(toDoKeys);

for (let i = 0; i<toDoKeys.length; i++){
    console.log(playerJohn[toDoKeys[i]]);  //выводит значения через ключи
}

const toDoValues = Object.values(playerJohn);

for (let i = 0; i<toDoValues.length; i++){
    console.log(toDoValues[i]);           //выводит значения через метод values
}

const toDoEntries = Object.entries(playerJohn);

for (let i = 0; i<toDoEntries.length; i++){
    console.log(toDoEntries[i]);           //выводит массив из ключей и значений через метод entries
}


console.log('---------------------------------------');
const height = 170;
const weight = 80;
const sport = 'regbi';

const player = {            //const player = { по скольку имена ключей идентичны именам переменных, которые мы передаём в массив, можно укоротить код
    height : height,            //height,
    weight : weight,            //weight,
    sport : sport               //sport
}                          //}

player.height = 180;
player.speed = 90;      //тут мы можем просто создать новое значение speed внутри объекта player

console.log(player);