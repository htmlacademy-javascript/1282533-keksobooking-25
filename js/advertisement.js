/* eslint-disable no-console */
import {createArrayAdvertisement} from './data.js';
import {getPlaceText, getRoomsText, getGuestsText} from './util.js';

console.log(createArrayAdvertisement());

const advertisement = createArrayAdvertisement();

const popup = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('.map__canvas');

// location записан на будущее
// eslint-disable-next-line no-unused-vars
advertisement.forEach(({author, offer, location}) => {
  const popupClone = popup.cloneNode(true);
  popupClone.querySelector('.popup__avatar').src = author.avatar;
  popupClone.querySelector('.popup__title').textContent = offer.title;
  popupClone.querySelector('.popup__text--address').textContent = offer.address;
  popupClone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = getPlaceText(offer.type);
  popupClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getRoomsText(offer.rooms)} для ${offer.guests} ${getGuestsText(offer.guests)}`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupClone.querySelector('.popup__description').textContent = offer.description;
  popupClone.querySelector('.popup__photo').src = offer.photos;

  const featureList = popupClone.querySelectorAll('.popup__feature');
  const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);

  featureList.forEach((featureListItem) => {
    const modifier = featureListItem.classList[1];

    if (modifiers.length === 0) {
      featureListItem.remove();
      return;
    }

    if (!modifiers.includes(modifier)) {
      featureListItem.remove();
    }
  });

  mapCanvas.append(popupClone);
});
