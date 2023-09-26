import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const picker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysText = document.querySelector('span[data-days]');
const hoursText = document.querySelector('span[data-hours]');
const minutesText = document.querySelector('span[data-minutes]');
const secondsText = document.querySelector('span[data-seconds]');

const selectedDate = datePicker.selectedDates[0];
const currentDate = new Date();
console.log(currentDate);

const datePicker = flatpickr(picker, options);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

if (selectedDate <= currentDate) {
  btnStart.disabled = true;
  window.alert('Please choose a date in the future');
  return;
}
// if (selectedDates < currentDate) {
//
//   alert('Please choose a date in the future');
//   return;
// } else {
//   btnStart.disabled = false;
//   btnStart.addEventListener('click', () => {
//     console.log('selected date > than current');
//   });
// }
