const counterBtn = document.querySelectorAll('#counter button');
console.log(counterBtn);
const countValue = document.querySelector('#value');
let counterValue = 0;

counterBtn.forEach((el, index) => {
  el.addEventListener('click', () => {
    if (index === 0) {
      counterValue = counterValue - 1;
    } else if (index === 1) {
      counterValue = counterValue + 1;
    }

    countValue.textContent = counterValue;
  });
});
