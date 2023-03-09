function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

const createBtn = controls.children[1];
const destroyBtn = controls.lastElementChild;

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = Number(controls.firstElementChild.value);
  if (amount > 0 && amount <= 100) {
    let value = 20;

    for (let i = 1; i <= amount; i += 1) {
      value += 10;
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = value + 'px';
      box.style.height = value + 'px';
      boxes.append(box);
    }
  } else {
    alert('WRONG!!!! Value must be min=1 max=100');
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
