const humanJohn = {
    name : 'John',
    hello() {
        console.log(`My name is ${this.name}`);
    }
}

// humanJohn.hello();  //вызов, результат: My name is undefined

const testVar = humanJohn.hello;  //не вызов а присвоение в переменную

// testVar();          //результат: My name is undefined, функция потерялась при простом вызове по скольку нет контекста

// const testVar = humanJohn.hello.bind({name : 'Karl'});
testVar.call({name : "Karl"});

//практическое применение

const nodeList = document.querySelector('a');
//[].map.call(nodeList, callFunction, param2, param3);
//[].map.apply(nodeList, callFunction, param2, param3);

[...nodeList].map();
