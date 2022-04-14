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
const adFormCheckboxs = document.querySelectorAll('.features__checkbox');
const previewAvatar = document.querySelector('.ad-form-header__preview').children[0];
const previewRoomPhoto = document.querySelector('.ad-form__photo');
const mapFiltersArea = document.querySelector('.map__filters');
const mapFilterCheckboxs = mapFiltersArea.querySelectorAll('[type="checkbox"]');
const mapFilterSelects = mapFiltersArea.querySelectorAll('select');

const  getResetPriceSlider = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: +APARTMENT_OPTION['flat'],
      max: 100000,
    },
    start: +APARTMENT_OPTION['flat'],
  });
  price.value = +APARTMENT_OPTION['flat'];
};

const getResetMap = () => {
  mainPinMarker.setLatLng({
    lat: TOKYO.lat,
    lng: TOKYO.lng,
  });
  map.setView([TOKYO.lat, TOKYO.lng], 13);

  const leafletPopup = document.querySelector('.leaflet-popup');
  if (leafletPopup) {
    leafletPopup.remove();
  }
};

const getResetMapFilter = () => {
  mapFilterSelects.forEach((element) => {
    element.value = 'any';
  });

  mapFilterCheckboxs.forEach((element) => {
    element.checked = false;
  });
};

const getResetFormAd = () => {
  inputAddress.value = `${TOKYO.lat} ${TOKYO.lng}`;
  apartmentType.value = 'flat';
  title.value = '';
  description.value = '';
  numberRooms.value = '1';
  numberGuests.value = '1';
  timeIn.value = '12:00';
  timeOut.value = '12:00';
  previewAvatar.src = 'img/muffin-grey.svg';
  previewRoomPhoto.style.background = '#e4e4de';
  adFormCheckboxs.forEach((element) => {
    element.checked = false;
  });
};

const onResetButtonClick = () => {
  getResetPriceSlider();
  getResetMap();
  getResetFormAd();
  getResetMapFilter();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  onResetButtonClick();
});

export {onResetButtonClick};
