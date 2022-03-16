const fieldsets = document.querySelectorAll('fieldset');
const selects = document.querySelectorAll('select');
const mapFiltersArea = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');

const disablePageForm = () => {
  mapFiltersArea.classList.add('map__filters--disabled');
  adForm.classList.add('ad-form--disabled');

  fieldsets.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });

  selects.forEach((currentValue) => {
    currentValue.setAttribute('disabled', 'disabled');
  });
};

const activatePageForm = () => {
  mapFiltersArea.classList.remove('map__filters--disabled');
  adForm.classList.remove('ad-form--disabled');

  fieldsets.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });

  selects.forEach((currentValue) => {
    currentValue.removeAttribute('disabled');
  });
};

disablePageForm();
activatePageForm();

export {disablePageForm, activatePageForm, adForm};
