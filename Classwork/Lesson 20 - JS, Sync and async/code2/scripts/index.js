const ourButton = document.querySelector('button');


ourButton.addEventListener('click', () => {console.log('Жмяк!')});

let sum = 0;
const takeTime = () => {
    console.log('Начинаю каунтить...');
    const startTime = Date.now();
    for(let i = 0; i < 100000000000; i++) {
    sum+=i;
    }
    const endTime = Date.now();
    console.log('Закаунтила ' + ((endTime-startTime)/1000) + ' секунд');
}
// takeTime();

//setTimeout

printHelloToConsole = () => {
    console.log('Здрасти');
}

const checkTimeouts = () => {
    console.log('1');
    setTimeout(() => {console.log('2')}, 0);
    console.log('3');
    setTimeout(() => {console.log('4')}, 2000);
    console.log('5');
    setTimeout(printHelloToConsole, 5000);

}
// checkTimeouts();

//setInterval

// const checkIntervals = () => {
//     const funkInterval = () => {console.log('Привет, я интервал!')}
//     setInterval(funkInterval(), 2000);
// }
// checkIntervals();

const checkIntervals = () => {
    let count = 5;
    const funkInterval = () => {
        console.log(count);
        count -= 1;
        if(count<=0) {
            clearInterval(idI)
        }
    }
    const idI = setInterval(funkInterval, 1000);
    setTimeout(() => {clearInterval(idI)}, 5000);
}
checkIntervals();


//html:
// input: 15 minutes -> button