/* eslint-disable no-console */
import {adForm} from './toggle-form-state.js';

const title = adForm.querySelector('#title');
title.setAttribute('data-pristine-required-message', 'Обязательное поле для заполнения');
title.setAttribute('data-pristine-minlength-message', 'От 30 до 100 символов');

const price = adForm.querySelector('#price');
price.setAttribute('data-pristine-required-message', 'Обязательное поле для заполнения');
price.setAttribute('data-pristine-max-message', 'Максимальная цена 100 000 руб.');

const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorTextParent: 'ad-form__element',
    errorTextClass: 'invalid-text'
  }
);

const numberRooms = adForm.querySelector('#room_number');
const numberGuests = adForm.querySelector('#capacity');
const roomsOption = {
  '1': '1',
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': '0'
};

function validateRoom () {
  return roomsOption[numberRooms.value].includes(numberGuests.value);
}

function getRoomsErrorMessage () {
  if (numberRooms.value === '1') {
    return `${numberRooms.value} комната только для 1 гостя`;
  }
  if (numberRooms.value === '2') {
    return `В ${numberRooms.value} комнаты не больше 2х гостей`;
  }
  if (numberRooms.value === '3') {
    return `В ${numberRooms.value} комнаты не больше 3х гостей`;
  }
  if (numberRooms.value === '100') {
    return `${numberRooms.value} комнат не для гостей`;
  }
}

pristine.addValidator(numberGuests, validateRoom, getRoomsErrorMessage);

const apartmentType = adForm.querySelector('#type');
const apartmentOption = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

function apartmentPrice () {
  price.placeholder = apartmentOption[apartmentType.value];
  price.min = apartmentOption[apartmentType.value];
  return !((price.value < +apartmentOption[apartmentType.value]));
}

function apartmentErrorText () {
  return `Минимальная цена ${apartmentOption[apartmentType.value]} руб.`;
}

pristine.addValidator(apartmentType, apartmentPrice, apartmentErrorText);

const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
