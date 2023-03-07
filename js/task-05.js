const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange() {
  if (refs.nameInput.value != '') {
    refs.nameOutput.textContent = refs.nameInput.value.trim();
  } else {
    refs.nameOutput.textContent = 'Anonymous';
  }
  // refs.nameOutput.textContent = event.currentTarget.value;
}
