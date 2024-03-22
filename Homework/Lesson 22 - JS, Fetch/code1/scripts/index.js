const getData = (q) => {  
    return fetch(q);
}

const listData = getData('https://jsonplaceholder.typicode.com/todos');

listData.then((result) => result.json())
.then((result) => {console.log(result);
    result.forEach(element => { showList(element)
    });
})

function showList(list) {
    const containerForInfo = document.querySelector('#info');
    const listElement = document.createElement('li');
    listElement.textContent = ' title : ' + list.title + ' {userId : ' + list.userId + ' [id : ' + list.id +  ' (completed: ' + list.completed + ')]}';
    containerForInfo.append(listElement);
}