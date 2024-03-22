//синхронно ждём ввода от пользователя
// const enteredName = prompt('Insert name');

//найдём элементы на странице
const inputElement = document.querySelector('#nameinput');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterNameBtn = document.querySelector('#goaway');

const getInputedName = (helloMaker) => {
    let enteredNameSring;
    const handleClickSubmitNameBtn = () => {
         enteredNameSring = inputElement.value;
         helloMaker(enteredNameSring);
    }
    getNameBtn.addEventListener('click', handleClickSubmitNameBtn);
    // return enteredNameSring;
}

getInputedName(helloMaker);

function helloMaker (name) {
    console.log(`Hello ${name}`);
}