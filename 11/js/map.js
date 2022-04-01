import {disablePageForm, activatePageForm} from './toggle-form-state.js';
import {createServerPopupAdvertisement, createUserPopupAdvertisement} from './advertisement.js';
import {TOKYO} from './constants.js';

const inputAddress = document.querySelector('#address');

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

const serverAdvertisementPinMap = (array) => {
  array.forEach(({author, location, offer}) => {
    const iconMarker = L.icon({
      iconUrl: './img/pin.svg',
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
      .bindPopup(createServerPopupAdvertisement(author, offer, location))
      .addTo(map);
  });
};

const userAdvertisementPinMap = (data) => {
  const a = data.address.split(' ');
  const iconMarker = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker({
    lat: a[0],
    lng: a[1],
  },
  {
    icon: iconMarker,
  });
  marker
    .bindPopup(createUserPopupAdvertisement(data))
    .addTo(map);
};

const mainIconMarker = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO.lat,
    lng: TOKYO.lng,
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

export {map, mainPinMarker, inputAddress, serverAdvertisementPinMap, userAdvertisementPinMap};
