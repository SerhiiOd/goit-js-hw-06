const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
}

// function onInputChange(event) {
//   if (event) {
//     refs.nameOutput.textContent = event.currentTarget.value;
//   } else if (change) {
//     refs.nameOutput.textContent = event;
//   }
// }

// console.log(onInputChange.trim());
