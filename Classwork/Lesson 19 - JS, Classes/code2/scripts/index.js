//classes



class Player{
    constructor(name, weight, height, resultat){
    this.height = height;
    this.weight = weight;
    this.resultat = resultat;
    this.name = name;
    }
    makeGoal() {
        console.log('GOAL!!');
    } 

}

// Player.prototype.makeGoal = function(){
//     console.log(`${this.name} making a GOAL!!`);
// }

const playerJohn = new Player('John', 88, 180, 3.5);

// const playerMike = new Player('Mike', 95, 175, 3);

// console.log(playerJohn.makeGoal===playerMike.makeGoal);


console.log(playerJohn);
playerJohn.makeGoal();

class chessPlayer extends Player {
    constructor(name, weight, height, speed){
        super(name, weight, height, null);
        this.speed = speed;
    }
    makeTurn() {
        console.log("It's my turn!");
        super.makeGoal();
    }
    makeGoal(){
        super.makeGoal();
        console.log('This was a checkmate!');
        console.log('Fallin');
    }
    static theBestPlayer(chessPlayer1, chessPlayer2){
        return chessPlayer2.speed < chessPlayer1.speed ? chessPlayer2 : chessPlayer1;
    }
}
const harry = new chessPlayer('Harry', 78, 175, 3);
const karlson = new chessPlayer('Magnus', 78, 180, 1);
// harry.makeTurn();
// harry.makeGoal();
console.log(chessPlayer.theBestPlayer(harry, karlson))

//методы объекта и класса
// [1, 2].length;
// [1, 2].forEach();
// Array.isArray();
// Object.keys(obj);

