import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const picker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysText = document.querySelector('span[data-days]');
const hoursText = document.querySelector('span[data-hours]');
const minutesText = document.querySelector('span[data-minutes]');
const secondsText = document.querySelector('span[data-seconds]');
let id = null;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (getTimeLeft(selectedDates[0]).ms <= 0) {
      btnStart.disabled = true;
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
    console.log(selectedDates[0]);
  },
};
const datePicker = flatpickr(picker, options);

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
}
function addLeadingZero(value) {
  return pad(value, 2);
}

function getTimeLeft(endDate) {
  let selectedDate = datePicker.selectedDates[0];
  let currentDate = new Date();
  let timeLeftMs = selectedDate - currentDate;
  return {
    ...convertMs(timeLeftMs),
    ms: timeLeftMs,
  };
}

function updateTime() {
  let selectedDate = datePicker.selectedDates[0];
  let leftTime = getTimeLeft(selectedDate);
  if (leftTime.ms <= 0) {
    Notiflix.Notify.success('Timer end');
    clearInterval(id);
    btnStart.disabled = false;
    datePicker._input.disabled = false;
    return;
  } else {
    daysText.textContent = addLeadingZero(leftTime.days);
    hoursText.textContent = addLeadingZero(leftTime.hours);
    minutesText.textContent = addLeadingZero(leftTime.minutes);
    secondsText.textContent = addLeadingZero(leftTime.seconds);
  }
}

btnStart.addEventListener('click', () => {
  id = setInterval(updateTime, 1000);
  datePicker._input.disabled = true;
  btnStart.disabled = true;
});

// function clearTime() {
//   daysText.textContent = addLeadingZero(0);
//   hoursText.textContent = addLeadingZero(0);
//   minutesText.textContent = addLeadingZero(0);
//   secondsText.textContent = addLeadingZero(0);
// }

// function resetTimer() {
//   clearInterval(id);
//   clearTime();
//   btnStart.disabled = false;
// }
