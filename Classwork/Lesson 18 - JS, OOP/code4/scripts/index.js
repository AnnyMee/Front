// прототипное наследование

const human = {
    height : 180,
    weight : 80,
    sing() {
        console.log('I am')
    }
}

const player = {
    resultat : 2.5,
    __proto__ : human
}

// for(let property in player){
//     console.log(property);
// }

// console.log(player.hasOwnProperty('resultat'));

for(let property in player){
    player.hasOwnProperty(property) ? console.log('player ' + property) : console.log('proto human ' + property);
    }

    