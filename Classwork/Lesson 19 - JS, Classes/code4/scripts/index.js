class Human {
    #firstName;         //создание приватных полей
    #lastName;
    constructor(firstName, lastName){
        this.#firstName = firstName;    //объявление приватных переменных в конструкторе
        this.#lastName = lastName;
    }
}

const john = new Human ('John', 'Depp');

john.firstName = 'Karl';

console.log(john);