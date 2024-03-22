const parts = ['wheel', 'engine', 'fender', 'glass']

const partsList = document.querySelector('ul');

function list (arr){
    partsList.innerHTML = '';

    const list = arr.map(part => {
        const newItem = document.createElement('li');
        newItem.textContent = part;
        return newItem;
    })
    partsList.append(...list);
}

list(parts);