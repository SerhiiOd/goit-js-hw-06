const form = document.querySelector('form.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = {};

  if (email.value != '' && password.value != '') {
    formData.email = email.value;
    formData.password = password.value;
  } else {
    return alert('Заполните пустые поля!');
  }

  console.log(formData);
  event.currentTarget.reset();
});
