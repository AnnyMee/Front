console.log("Hello! How are you? I'm under the water. Please help me!");

const secondItemElem = document.querySelector('#second-item');  //querySelector() ищет первый тэг/класс/id (элемент) с именем, который мы зададим

// console.log(secondItemElem);
// console.log(document);



// console.log(secondItemElem.classList); //classList() выводит массив классов данного элемента

// console.log(secondItemElem.innerHTML); //

const secondItemElemClick = () => {
    // secondItemElem.classList.add('list-item_done');  //добавляет класс к элементу (тэгу)
    // secondItemElem.classList.add('list-item_done');  //удаляет класс элемента (тэгу)
    secondItemElem.classList.toggle('list-item_done'); //добавляет класс к элементу (тэгу) если его нет и удаляет его, если он есть
    // secondItemElem.style.backgroundColor = 'blue';
}
 
secondItemElem.addEventListener('click', secondItemElemClick)  //addEventListener() добавляет ивент пользователя (тут по клику)
                                //поведение может быть разным (к примеру scroll)