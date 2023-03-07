const inputValid = document.querySelector('#validation-input');
console.log(inputValid);

inputValid.addEventListener('blur', onInputValid);

function onInputValid() {
  inputValid.value.trim().length === Number(inputValid.dataset.length)
    ? inputValid.classList = 'valid'
    : inputValid.classList = 'invalid';
}
