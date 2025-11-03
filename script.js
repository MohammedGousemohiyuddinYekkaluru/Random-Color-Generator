const hexBtn = document.querySelector('.hex-btn');
const hexContainer = document.querySelector('.hex-color-container');
const hexValue = document.querySelector('.hex-color-value');
const hexCopyBtn = document.querySelector('.hex-copy');

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbContainer = document.querySelector('.rgb-color-container');
const rgbCopyBtn = document.querySelector('.rgb-copy');
const rgbValue = document.querySelector('.rgb-color-value');

//Create Random HEX color

hexBtn.addEventListener('click', () => {
    let characterSet = '0123456789ABCDEF';
    let hexColorOutput = '#';

    for(let i = 0; i < 6; i++){
        let code = Math.floor(Math.random() * characterSet.length);
        hexColorOutput += characterSet[code];
    };

    hexContainer.style.backgroundColor = `${hexColorOutput}`;
    hexValue.textContent = `${hexColorOutput}`;
});

hexCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(hexValue.textContent);
    alert('Copied the HEX color value: ' + hexValue.textContent);
})

//Create RGB color

rgbBtn.addEventListener('click', () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    rgbContainer.style.backgroundColor = `rgb(${extractRedValue}, ${
    extractGreenValue}, ${extractBlueValue})`;
    rgbValue.textContent =  `rgb(${extractRedValue}, ${
    extractGreenValue}, ${extractBlueValue})`;
})

rgbCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(rgbValue.textContent);
    alert('Copied the RGB color value: ' + rgbValue.textContent);
})