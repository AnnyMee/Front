const inputElement = document.querySelector('input');
const timerElement = document.querySelector('.output');
const buttonElement = document.querySelector('button');
const clearElement = document.querySelector('#clear');
const alertSound = document.querySelector('#alertSound');

let countInput;


const inputField = (event) => {
    countInput = event.target.value;
}


const checkIntervals = () => {

    const funkInterval = () => {
        timerElement.textContent = countInput;
        countInput -= 1;
        inputElement.value = "";        //при нажатии на кнопку Start поле становится пустым
        if(countInput <= -1) {
            clearInterval(idI);
            alertSound.play();
            timerElement.textContent = "Time's out!";
        }
    }
    const idI = setInterval(funkInterval, 1000);
}
const resetButtonHandler = () => {
    let resetResult = "";
    countInput = "";
    timerElement.textContent = resetResult;
    countInput.textContent = countInput;
}

inputElement.addEventListener('input', inputField);
buttonElement.addEventListener('click', checkIntervals);
clearElement.addEventListener('click', resetButtonHandler);