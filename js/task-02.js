const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const itemListEl = document.querySelector('#ingredients');
console.log(itemListEl);

const itemEl1 = document.createElement('li');
itemEl1.classList.add('item');
itemEl1.textContent = 'Potatoes';
// console.log(itemEl1);

const itemEl2 = document.createElement('li');
itemEl2.classList.add('item');
itemEl2.textContent = 'Mushrooms';
// console.log(itemEl2);

const itemEl3 = document.createElement('li');
itemEl3.classList.add('item');
itemEl3.textContent = 'Garlic';
// console.log(itemEl3);

const itemEl4 = document.createElement('li');
itemEl4.classList.add('item');
itemEl4.textContent = 'Tomatos';
// console.log(itemEl4);

const itemEl5 = document.createElement('li');
itemEl5.classList.add('item');
itemEl5.textContent = 'Herbs';
// console.log(itemEl5);

const itemEl6 = document.createElement('li');
itemEl6.classList.add('item');
itemEl6.textContent = 'Condiments';
// console.log(itemEl6);

itemListEl.append(itemEl1, itemEl2, itemEl3, itemEl4, itemEl5, itemEl6);
