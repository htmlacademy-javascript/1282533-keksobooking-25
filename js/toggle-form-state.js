const fieldset = document.querySelectorAll('fieldset');
const select = document.querySelectorAll('select');
const mapFilters = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const getDisabledForm = () => {
  mapFilters.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');

  fieldset.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });

  select.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });
};

const getActiveForm = () => {
  mapFilters.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');

  fieldset.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });

  select.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });
};

getDisabledForm();
// getActiveForm();

export {getDisabledForm, getActiveForm};
