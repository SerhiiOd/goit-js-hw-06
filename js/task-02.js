const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const itemListEl = document.querySelector('#ingredients');
console.log(itemListEl);

const creatList = ingredients => {
  return ingredients.map(item => {
    const itemList = document.createElement('li');
    itemList.classList.add('item');
    itemList.textContent = item;
    return itemList;
  });
};

const items = creatList(ingredients);

itemListEl.append(...items);
