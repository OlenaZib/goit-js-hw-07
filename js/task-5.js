function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const colorElem = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', function () {
  const randomColorElem = getRandomHexColor();
  document.body.style.backgroundColor = randomColorElem;
  colorElem.textContent = randomColorElem;
 
});

