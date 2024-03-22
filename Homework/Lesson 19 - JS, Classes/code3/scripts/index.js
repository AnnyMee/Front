const firstObject = { 
    1 : 'One', 
    2 : 'Two', 
    3 : 'Three'
};

  const secondObject = { 
    1 : 'One', 
    2 : 'Two', 
    3 : 'Three',
};

  const thirdObject = { 
    1 : 'One', 
    2 : 'Two', 
    3 : 'Four' 
};

  const forthObject = {
    1 : 'One', 
    2 : 'Two', 
    3 : 'Three',
    4 : 'Four' 
}

function isEqual(first, second) {
    const keys1 = Object.keys(first);
    const keys2 = Object.keys(second);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isEqual(firstObject, secondObject));
  console.log(isEqual(firstObject, thirdObject));
  console.log(isEqual(firstObject, forthObject));