const allFieldset = document.querySelectorAll('fieldset');
const allSelect = document.querySelectorAll('select');
const mapFilters = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const getDisabledForm = () => {
  mapFilters.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');

  allFieldset.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });

  allSelect.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });
};

const getActiveForm = () => {
  mapFilters.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');

  allFieldset.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });

  allSelect.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });
};

getDisabledForm();
// getActiveForm();

export {getDisabledForm, getActiveForm};
