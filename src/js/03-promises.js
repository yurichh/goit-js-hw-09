import Notiflix from 'notiflix';

const btnSubmit = document.querySelector('button');
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const delay = parseInt(form.querySelector('[name=delay]').value);
  const step = parseInt(form.querySelector('[name=step]').value);
  const amount = parseInt(form.querySelector('[name=amount]').value);
  if (delay < 0 || step < 0 || amount < 0) {
    Notiflix.Notify.warning('Please choose a valid value');
    return;
  }
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  btnSubmit.disabled = true;
  const id = setTimeout(() => {
    btnSubmit.disabled = false;
    Notiflix.Notify.info('Promise generator is available again');
  }, (amount - 1) * step + delay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
