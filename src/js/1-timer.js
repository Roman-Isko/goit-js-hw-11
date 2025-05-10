import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  dateInput: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let selectedTime = null;
let timerId = null;

flatpickr(refs.dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const pickedDate = selectedDates[0];

    if (pickedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a future date!',
        position: 'topRight',
      });
      refs.startBtn.disabled = true;
    } else {
      selectedTime = pickedDate.getTime();
      refs.startBtn.disabled = false;
    }
  },
});

refs.startBtn.addEventListener('click', () => {
  if (!selectedTime) return;

  refs.startBtn.disabled = true;
  refs.dateInput.disabled = true;

  timerId = setInterval(() => {
    const now = Date.now();
    const delta = selectedTime - now;

    if (delta <= 0) {
      clearInterval(timerId);
      updateClock(0);
      iziToast.success({
        title: 'Done',
        message: 'Countdown finished!',
        position: 'topRight',
      });
      return;
    }

    updateClock(delta);
  }, 1000);
});

function updateClock(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor((ms % hour) / min),
    seconds: Math.floor((ms % min) / sec),
  };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
