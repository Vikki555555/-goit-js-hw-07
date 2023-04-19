function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

controls.addEventListener('click', (e) => {
  if (e.target.dataset.create) {
    createBoxes();
  } else if (e.target.dataset.destroy) {
    destroyBoxes();
  }
});

function createBoxes() {
  const input = controls.querySelector('input');
  const amount = +input.value;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = 30 + 10 * i + 'px';
    box.style.height = 30 + 10 * i + 'px';
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
