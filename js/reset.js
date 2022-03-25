import {map, mainPinMarker, inputAddress} from './map.js';
import {TOKYO, APARTMENT_OPTION} from './constants.js';

const resetButton = document.querySelector('.ad-form__reset');
const slider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const apartmentType = document.querySelector('#type');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const numberRooms = document.querySelector('#room_number');
const numberGuests = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const featureCheckboxs = document.querySelectorAll('.features__checkbox');

const resetPrice = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: +APARTMENT_OPTION['flat'],
      max: 100000,
    },
    start: +APARTMENT_OPTION['flat'],
  });
  price.value = +APARTMENT_OPTION['flat'];
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  inputAddress.value = `${TOKYO.lat} ${TOKYO.lng}`;
  mainPinMarker.setLatLng({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  });
  map.setView([TOKYO.lat, TOKYO.lng], 13);
  resetPrice();
  apartmentType.value = 'flat';
  title.value = '';
  description.value = '';
  numberRooms.value = '1';
  numberGuests.value = '3';
  timeIn.value = '12:00';
  timeOut.value = '12:00';

  featureCheckboxs.forEach((currentValue) => {
    currentValue.checked = false;
  });

  document.querySelector('.leaflet-popup').remove();
});
