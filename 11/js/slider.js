import {APARTMENT_OPTION} from './constants.js';

const slider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const apartmentType = document.querySelector('#type');

noUiSlider.create(slider, {
  range: {
    min: 1000,
    max: 100000,
  },
  step: 100,
  start: 0,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

slider.noUiSlider.on('update', () => {
  price.value = slider.noUiSlider.get();
});

apartmentType.addEventListener('change', (evt) => {
  slider.noUiSlider.updateOptions({
    range: {
      min: +APARTMENT_OPTION[evt.target.value],
      max: 100000,
    },
    start: +APARTMENT_OPTION[evt.target.value],
  });
  price.value = +APARTMENT_OPTION[evt.target.value];
});
