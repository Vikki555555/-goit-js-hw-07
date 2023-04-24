
const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
const formData = {};
  for (let i = 0; i < form.elements.length; i += 1) {
    const input = form.elements[i];
    if (input.name) {
      formData[input.name] = input.value;
    }
  }

  if (Object.values(formData).some(value => value === '')) {
    alert('All fields must be filled!');
  } else {
    console.log(formData);
    form.reset();
  }
});
