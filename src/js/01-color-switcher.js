const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let intervalId = null;

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  intervalId = setInterval(changeColor, 1000);
});
btnStop.addEventListener('click', () => {
  if (intervalId === null) {
    return;
  }
  clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
