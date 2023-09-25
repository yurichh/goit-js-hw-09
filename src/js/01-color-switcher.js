const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  setInterval(() => {
    body.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStart.addEventListener('click', changeColor);
