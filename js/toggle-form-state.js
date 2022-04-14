const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const adFormSelects = adForm.querySelectorAll('select');

const mapFiltersArea = document.querySelector('.map__filters');
const mapFilterFieldset = mapFiltersArea.querySelector('fieldset');
const mapFilterSelects = mapFiltersArea.querySelectorAll('select');

const slider = adForm.querySelector('.ad-form__slider');

const disableMapFilterForm = () => {
  mapFiltersArea.classList.add('map__filters--disabled');
  mapFilterFieldset.setAttribute('disabled', true);

  mapFilterSelects.forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

disableMapFilterForm();

const activateMapFilterForm = () => {
  mapFiltersArea.classList.remove('map__filters--disabled');
  mapFilterFieldset.removeAttribute('disabled');

  mapFilterSelects.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');
  slider.setAttribute('disabled', true);

  adFormFieldsets.forEach((element) => {
    element.setAttribute('disabled', true);
  });

  adFormSelects.forEach((element) => {
    element.setAttribute('disabled', true);
  });
};

const activateAdForm = () => {
  adForm.classList.remove('ad-form--disabled');
  slider.removeAttribute('disabled');

  adFormFieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });

  adFormSelects.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export {disableAdForm, activateAdForm, activateMapFilterForm};
