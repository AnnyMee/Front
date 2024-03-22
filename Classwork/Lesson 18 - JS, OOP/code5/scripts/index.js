const names = ["Alex", "Bob", "Chris", "David", "Eva", "Frank", "Grace", "Helen", "Ian", "Jack", "Kate", "Leo", "Max", "Nora", "Oscar"];


const findNames = (array) => {
    const namesWithA = array.filter(element => {return element.includes('a') || element.includes('A')});
    return namesWithA;
 }
console.log(findNames(names))