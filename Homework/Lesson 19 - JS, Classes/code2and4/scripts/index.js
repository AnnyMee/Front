const gameData = [
    {
        title : 'AC I',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/assassins-creed'
    },
    {
        title : 'AC II',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/assassins-creed-II'
    },
    {
        title : 'AC Brotherhood',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/brotherhood'
    },
    {
        title : 'AC Revelations',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/revelations'
    },
    {
        title : 'AC III',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/assassins-creed-3-remastered'
    },
    {
        title : 'AC IV Black Flag',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/iv-black-flag'
    },
    {
        title : 'AC Unity',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/unity'
    },
    {
        title : 'AC Syndicate',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/syndicate'
    },
    {
        title : 'AC Origins',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/origins'
    },
    {
        title : 'AC Odyssey',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/odyssey'
    },
    {
        title : 'AC Valhalla',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/valhalla'
    },
    {
        title : 'AC Mirage',
        link : 'https://www.ubisoft.com/en-gb/game/assassins-creed/mirage'
    }

]

const headerbuttons = document.querySelector('header');

gameData.forEach(element => {
        const button = document.createElement('button');
        button.textContent = element.title;
        const link = document.createElement('form');
        link.action = element.link;
        link.target = '_blank';
        link.append(button);
        headerbuttons.append(link)
    });

navList(array);