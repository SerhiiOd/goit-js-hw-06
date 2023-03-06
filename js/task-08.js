const form = document.querySelector('form.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const fields = document.querySelectorAll('input');
  const values = {};

  fields.forEach(field => {
    const { name, value } = field;
    values[name] = value;
  });
  console.log(values);
  
  for (let elem of form.elements) {
    if (elem.tagName !== 'BUTTON') {
      if (elem.value == '') {
        alert('Заполните пустые поля!');
      }
    }
  }

  form.reset();
});
