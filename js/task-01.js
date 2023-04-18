const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`В списку ${items.length} категорії.`);

items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const listItems = item.querySelectorAll('li');
  console.log(`Категорія: ${title}. Кількість елементів: ${listItems.length}`);
});