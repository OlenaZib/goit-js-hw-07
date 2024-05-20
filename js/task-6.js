

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';
boxesEl.style.marginTop = '30px';
createBtn.addEventListener("click", () => {
  const amount = parseInt(numberInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberInput.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxesMarkup = "";
  let boxSize = 30;

  for (let i = 1; i <= amount; i++) {
    boxesMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxSize += 10;
  }

  boxesEl.innerHTML = boxesMarkup;
}

function destroyBoxes() {
  numberInput.value = "";
  boxesEl.innerHTML = "";
}
