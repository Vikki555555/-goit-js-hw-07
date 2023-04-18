function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');

    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

controls.addEventListener('click', (e) => {
  if (e.target.dataset.create) {
    createBoxes(+controls.querySelector('input').value);
  } else if (e.target.dataset.destroy) {
    destroyBoxes();
  }
});