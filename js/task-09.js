function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const block = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

console.log(block);

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  color.textContent = getRandomHexColor();
  body.style.background = color.textContent;
}
