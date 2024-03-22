const inputElement = document.querySelector("#input-field");

let userInput;
const inputFieldInput = (event) => {
    userInput = event.target.value;
}
inputElement.addEventListener('input', inputFieldInput);

const createButtonElement = document.querySelector("button.btn");

const submitButtonHandler = (event) => {
    console.log(event);
    testTextElement.textContent = 'Test content';
}
createButtonElement.addEventListener("click", submitButtonHandler);

//////////////////////////////////////////////////////////////////

const testTextElement = document.querySelector('#text');
// console.log(testTextElement);

