const inputControl = document.querySelector('#font-size-control');
const sizeText = document.querySelector('#text');

console.log(inputControl);
console.log(sizeText);

inputControl.oninput = changeFontSize;

function changeFontSize() {
  sizeText.style.fontSize = this.value + 'px';
}
console.log(changeFontSize);
