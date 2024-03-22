const responseFromServerPromise = (q) => {
    return fetch (q);
}

//work with promises
// const serverResponse = responseFromServerPromise('https://jsonplaceholder.typicode.com/todos')
// serverResponse
// .then(response => response.json())
// .then(body => console.log(body))


//function declaration
// async function serverWorks() { 
// }

//function expression/arrow function
const serverWorks = async (q) => {
    // console.log('first one');
    const serverResponse = await responseFromServerPromise(q);
    // console.log('plain log from async function');
    const body = await serverResponse.json();
    // console.log(body);
    // console.log('sync action');
    pushToConsole(body)
}

serverWorks('https://jsonplaceholder.typicode.com/todos')



//а здесь каша
//console.log(serverWorks('https://jsonplaceholder.typicode.com/todos'););

// .then(response => response.json())
// .then(body => console.log(body))
// .then((resultOfPromise) => console.log(resultOfPromise))

// console.log('one more plain log');


function pushToConsole(obj) {
    console.log(obj);
}



//обработка ошибок в асинхронных функциях

const serverWorks2 = async (q) => {
    try {
    const serverResponse = await responseFromServerPromise(q); //получаем ответ от сервера
    const body = await serverResponse.json();                   //получаем тело ответа
    pushToConsole(body)                                         //вызываем функцию с аргументом тела ответа
    } catch {

    } finally {

    }

}

serverWorks('https://jsonplaceholder.typicode.com/todos')
.catch()
.finally()




//ещё проще
const serverWorks3 = async (q) => {
    const serverResponse = await responseFromServerPromise(q); //получаем ответ от сервера
    const body = await serverResponse.json();                   //получаем тело ответа
    pushToConsole(body)                                         //вызываем функцию с аргументом тела ответа
}

serverWorks('https://jsonplaceholder.typicode.com/todos')