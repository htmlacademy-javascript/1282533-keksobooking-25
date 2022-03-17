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
    return `${numberRooms.value} комнаты не больше 2х гостей`;
  }
  if (numberRooms.value === '3') {
    return `${numberRooms.value} комнаты не больше 3х гостей`;
  }
  if (numberRooms.value === '100') {
    return `${numberRooms.value} комнат не для гостей`;
  }
}

pristine.addValidator(numberGuests, validateRoom, getRoomsErrorMessage);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
