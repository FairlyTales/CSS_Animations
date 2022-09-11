const btn = document.querySelector('.button');
const btnBorderOne = document.querySelector('.button__border--one');
const btnBorderTwo = document.querySelector('.button__border--two');

const distance = 14;
const width = btn.offsetWidth;
const height = btn.offsetHeight;

const borderMove = (event) => {
  const { offsetX: x, offsetY: y } = event;

  const xDistance = Math.round(( x / width * distance ) - ( distance / 2 ));
  const yDistance = Math.round(( y / height * distance ) - ( distance / 2 ));

  btnBorderOne.style.transform = `translate(${-xDistance}px, ${yDistance}px)`;
  btnBorderTwo.style.transform = `translate(${xDistance}px, ${-yDistance}px)`;
}

const borderReset = () => {
  btnBorderOne.style.transform = `translate(0)`;
  btnBorderTwo.style.transform = `translate(0)`;
}

btn.addEventListener('mousemove', borderMove);
btn.addEventListener('mouseleave', borderReset);