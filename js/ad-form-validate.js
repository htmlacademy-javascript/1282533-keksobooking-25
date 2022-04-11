import {APARTMENT_OPTION} from './constants.js';
import {showUserAd} from './map.js';
import {getStateMessage} from './data.js';
import {sendData} from './api.js';

const adForm = document.querySelector('.ad-form');

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

function apartmentPrice () {
  price.placeholder = APARTMENT_OPTION[apartmentType.value];
  price.min = APARTMENT_OPTION[apartmentType.value];
  return !((price.value < +APARTMENT_OPTION[apartmentType.value]));
}

function apartmentErrorText () {
  return `Минимальная цена ${APARTMENT_OPTION[apartmentType.value]} руб.`;
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
    sendData(
      showUserAd,
      getStateMessage,
      new FormData(evt.target)
    );
  }
});
