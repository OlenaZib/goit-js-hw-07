function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
 const controls = document.querySelector(".controls");
const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';
boxesEl.style.marginTop = '30px';

numberInput.addEventListener("input", toggleValue);
createBtn.addEventListener("click", () => {
    createBoxes(parseInt(inputValue));
});

destroyBtn.addEventListener("click", destroyBoxes);
let inputValue = 0;

function toggleValue(event) {
    inputValue = event.currentTarget.value;
    console.log(inputValue);
}

function createBoxes(amount) {
    boxesEl.innerHTML = "";

    let boxSize = 30;
    for (let i = 1; i <= amount; i++) {
        const newDiv = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
        boxesEl.insertAdjacentHTML("beforeend", newDiv);
        boxSize += 10;
    }
}


function destroyBoxes() {
    numberInput.value = "";
    boxesEl.innerHTML = "";
}