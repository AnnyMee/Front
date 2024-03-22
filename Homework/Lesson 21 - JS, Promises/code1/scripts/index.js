const startElement = document.querySelector('.start');
const rejectElement = document.querySelector('.reject');
const resultElement = document.querySelector('.result');

const soundWin = document.querySelector('#win');
const soundLost = document.querySelector('#lost');
const soundRefused = document.querySelector('#awh');

let chance;

const getResult = () => {
    return new Promise((callBackSuccess, callBackReject) => {
        chance = Math.floor(Math.random()*100);
           
    const startBtnHandler = () => {
         if(chance >= 70){
            callBackSuccess(`Ура, мы выиграли ${chance} евро!`);
            soundWin.play();
         }
         else{
            callBackReject(`Не повезло, не подфартило`);
            soundLost.play();
         }
    }
    startElement.addEventListener('click', startBtnHandler);

    const rejectBtnHandler = () => {
        callBackReject(`Ну, до скорого!`);
        soundRefused.play();
    }
    rejectElement.addEventListener('click', rejectBtnHandler);
    });
}

const resultOfGame = getResult();
resultOfGame
.then(argument => resultElement.textContent = argument)
.catch(argument => resultElement.textContent = argument)
.finally(() => {console.log(chance)}); //проверка номера через консоль
















