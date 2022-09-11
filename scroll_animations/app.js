const debounce = (func, timeout = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  }
}

const scrollFade = () => {
  const texts = document.querySelectorAll('.intro__text');
  const windowHeight = window.innerHeight;
  
  texts.forEach((text) => {
    const textPosition = text.getBoundingClientRect().top;

    if (textPosition < windowHeight / 1) {
      text.classList.toggle('intro__text--active');
    }
  });
};

window.addEventListener('scroll', debounce(scrollFade))