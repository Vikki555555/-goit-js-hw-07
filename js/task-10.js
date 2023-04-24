const getRandomHexColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const createBoxes = amount => {
  const boxes = document.querySelector('#boxes');
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    let box = document.createElement('div');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);

    width += 10;
    height += 10;
  }
};

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');

createBtn.addEventListener('click', () => {
  createBoxes(+input.value);
});

destroyBtn.addEventListener('click', () => {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
});


