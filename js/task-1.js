const liElem = document.querySelectorAll('li.item');

console.log(`Namber of categories ${liElem.length}`);

const liElItems = document.querySelectorAll('h2');
liElItems.forEach(function (liElItem) {
  const title = liElItem.textContent;
    console.log(`Categories ${title}`);
   const numberOfCategories = liElItem.nextElementSibling.querySelectorAll('li').length;
  console.log(`Elements ${numberOfCategories}`);
});

