//Классная работа: отобразить в HTML аватарку пользователя ГитХаб, имя и список репозиторий с помощью асинхронных функций

const responseFromServerPromise = (q) => {
    return fetch (q);
}

const serverWorks = async (q) => {
    const serverResponse = await responseFromServerPromise(q);
    const body = await serverResponse.json();
    console.log(body);
    const repoUrl = await fetch(body.repos_url);
    const repo = await repoUrl.json()

    pushAvaToHtml(body.avatar_url);
    pushNameToHtml(body.login);
    console.log(repo);
    repo.forEach(element => pushRepoToHtml(element));
}

serverWorks('https://api.github.com/users/AnnyMee')

function pushAvaToHtml (elem) {
    const container = document.querySelector('#ava');
    const element = document.createElement('img');
    element.src = elem;
    container.append(element);
}

function pushNameToHtml (elem) {
    const container = document.querySelector('#info');
    const element = document.createElement('h1');
    element.textContent = elem;
    container.append(element);
}

function pushRepoToHtml (elem) {
    const container = document.querySelector('#info');
    const element = document.createElement('li');
    element.textContent = elem.name;
    container.append(element);
}