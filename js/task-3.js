const inputElem = document.querySelector('#name-input');
const spanElem = document.querySelector('#name-output');
inputElem.addEventListener('input', event => {
    const trimmedValue = event.target.value.trim();
   spanElem.textContent = trimmedValue || 'Anonymous';
})
console.log(inputElem);