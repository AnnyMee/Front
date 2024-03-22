const divElement1 = document.querySelector('#img');
const imgSize = document.querySelector('#text');


const addImageToPage = (imgSrc) => {

    //в случае если не выдаёт результата
    // const handleOnImgLoad = () => {
    //     const imgWidth = imgElement.width;
    //     console.log(imgWidth);
    //     return imgWidth;
    // }

    const imgElement = document.createElement('img');
    imgElement.src = 'https://media.istockphoto.com/id/486869012/photo/goat-looks-at-us.jpg?s=612x612&w=0&k=20&c=yeu3XUkLR2-mO2zwDGNaVL5o0DITA-deNXSKNaCX6bA=';
    divElement1.append(imgElement);
    const imgWidth = imgElement.width;
    imgSize.append(imgWidth)
    // imgElement.addEventListener('load', handleOnImgLoad);
    // return imgWidth
}

addImageToPage();

const addimageSizes = (w) => {
    imgSize.append(w);
}
// addimageSizes();