import {disablePageForm, activatePageForm} from './toggle-form-state.js';
import {createArrayAdvertisement} from './data.js';
import {createPopupAdvertisement} from './advertisement.js';
import {TOKYO} from './constants.js';

const inputAddress = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const advertisement = createArrayAdvertisement();

disablePageForm();

const map = L.map('map-canvas')
  .on('load', activatePageForm)
  .setView([TOKYO.lat, TOKYO.lng], 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

advertisement.forEach(({author, location, offer}) => {
  const iconMarker = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker({
    lat: location.lat,
    lng: location.lng,
  },
  {
    icon: iconMarker,
  });
  marker
    .bindPopup(createPopupAdvertisement(author, offer, location))
    .addTo(map);
});

const mainIconMarker = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68,
    lng: 139.75,
  },
  {
    icon: mainIconMarker,
    draggable: true,
    autoPan: true,
    autoPanPadding: L.point(100, 100),
  },
);

mainPinMarker.addTo(map);

inputAddress.value = `${TOKYO.lat} ${TOKYO.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  inputAddress.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.68,
    lng: 139.75,
  });
  map.setView([35.681, 139.769], 12);
});
