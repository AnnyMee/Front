//результат промиса = данные с которыми промис обещает вызвать функцию resolve

//создаём функцию которая нам вернет промис с результатом запроса по адресу "q"
const getGitHubData = (q) => {  //вытягивает инфу из интернета и возвращает промис
    return fetch(q);
}

//https://api.github.com = api- интерфэйс для общения между двумя машинами (клиент-сервер)

const gitHubDataAnny = getGitHubData('https://api.github.com/users/AnnyMee');

// console.log(gitHubDataAnny);

gitHubDataAnny.then((response) => response.json())  //вернёт промис, с резуьтатом вызова его функции-аргумента
.then((result) => {console.log(result);  // и из промиса вернёт результат в консоль
    showAvatar(result.avatar_url);
    showName(result.login);
    // showRepos(result.repos_url);
    return result.repos_url})  
.then((repos) => {
    console.log(repos);
    const gitHubReposAnny = getGitHubData(repos);
    gitHubReposAnny.then((response) => response.json())
    .then((result) => console.log(result));
});


//.then((data) => {console.log(typeof data)})


function showAvatar(avatarUrl) {
    const containerForAvatar = document.querySelector('#ava');
    const avatarElement = document.createElement('img');
    avatarElement.src = avatarUrl;
    containerForAvatar.append(avatarElement);
}
// showAvatar("https://avatars.githubusercontent.com/u/151825850?v=4"); вместо того, чтобы выводить результат таким образом, поднимаемся выше, к строке 14

function showName(name){
    const containerForInfo = document.querySelector('#info');
    const nameElement = document.createElement('h1');
    nameElement.textContent = name;
    containerForInfo.append(nameElement);
}
// showName('Anny')  вместо того, чтобы выводить результат таким образом, поднимаемся выше, к строке 14

function showRepos(reposUrl){
    const containerForInfo = document.querySelector('#info');
    const reposElement = document.createElement('a');
    reposElement.href = reposUrl;
    containerForInfo.append(reposElement);

}


// const player = {
//     weight : 80,
//     height : 180
// }

// console.log(player);

// const jsonPlayer = JSON.stringify(player);

// console.log(jsonPlayer);