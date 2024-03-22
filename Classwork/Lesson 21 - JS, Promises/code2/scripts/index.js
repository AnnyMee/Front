//синхронно ждём ввода от пользователя
// const enteredName = prompt('Insert name');

//найдём элементы на странице
const inputElement = document.querySelector('#nameinput');
const getNameBtn = document.querySelector('#getnamebtn');
const cancelEnterNameBtn = document.querySelector('#goaway');

let enteredNameSring;

const getInputedName = () => {
    return new Promise(

        (callBackSuccess, callBackReject) => {

            //success
    const handleClickSubmitNameBtn = () => {
         enteredNameSring = inputElement.value;
         callBackSuccess(enteredNameSring);
    }
    getNameBtn.addEventListener('click', handleClickSubmitNameBtn);

            //reject
    const handleClickRejectNameBtn = () => {
        callBackReject('Refused to insert');
    }
    cancelEnterNameBtn.addEventListener('click', handleClickRejectNameBtn);
});
}

const resultOfinput = getInputedName();

// resultOfinput.then((argum) => {console.log(argum)},
//                    (argum) => {console.log(argum)}
//                    );

resultOfinput
.then((argum) => {console.log(argum);})     //in case of success
.catch(argument => console.log(argument))   //in case of error
.finally(() => {console.log('finish')});    //in any case



console.log(resultOfinput);


// function helloMaker (name) {
//     console.log(`Hello ${name}`);
// }