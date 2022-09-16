/* App JS */

const burgers = document.querySelectorAll('.burger');
const activeClass = 'burger--active';
const nonActiveClass = 'burger--nonActive';

burgers.forEach((burger) => {
  burger.addEventListener('click', () => {
    if (burger.classList.contains(activeClass)) {
      burger.classList.remove(activeClass);
      burger.classList.add(nonActiveClass);
    } else {
      burger.classList.add(activeClass);
      burger.classList.remove(nonActiveClass);
    }
  });
});
