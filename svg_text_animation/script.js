// this code is used only for getting line lengths of all the letters
// we need this lengths to use them as starter values for stroke-dasharray and stroke-dashoffset

document
  .querySelectorAll('.text path')
  .forEach((char) => console.log(Math.ceil(char.getTotalLength())));
