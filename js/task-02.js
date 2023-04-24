const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const array=[]
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredients[i];
 array.push(item)
}
list.append(...array);