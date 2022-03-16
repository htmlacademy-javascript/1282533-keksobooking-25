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

function validateRooms () {
  return roomsOption[numberRooms.value].includes(numberGuests.value);
}

const getRoomText = () => {
  switch (numberRooms.value) {
    case '1':
      return 'комната';
    case '2':
    case '3':
      return 'комнаты';
    case '100':
      return 'комнат';
  }
};

const getGuestText = () => {
  switch (numberGuests.value) {
    case '3':
    case '2':
    case '0':
      return 'гостей';
    case '1':
      return 'гостя';
  }
};

function getRoomsErrorMessage () {
  return `${numberRooms.value} ${getRoomText()} не для ${numberGuests.value} ${getGuestText()}`;
}

// pristine.addValidator(numberRooms, validateRooms, getRoomsErrorMessage);
pristine.addValidator(numberGuests, validateRooms, getRoomsErrorMessage);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
