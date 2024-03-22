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

// console.log(player.sing());

//getters & setters

const playerJohn = {
    name : "John",
    surname : "Doe",
    get fullName(){
        return `${this.name} ${this.surname}`
    },
    set fullName(value){
        const [firstName, lasName] = value.split(' ');
        this.name = firstName;
        this.surname = lasName;
    }
}

playerJohn.fullName = 'Johny Depp';

//установка прототипа

Object.setPrototypeOf(player, human)
console.log(player);

