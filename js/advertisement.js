/* eslint-disable no-console */
import {getPlaceText, getRoomsText, getGuestsText} from './util.js';

const popup = document.querySelector('#card').content.querySelector('.popup');

const createPopupAdvertisement = (author, offer, location) => {
  const popupClone = popup.cloneNode(true);
  popupClone.querySelector('.popup__avatar').src = author.avatar;
  popupClone.querySelector('.popup__title').textContent = offer.title;
  popupClone.querySelector('.popup__text--address').textContent = `${location.lat.toFixed(5)} ${location.lng.toFixed(5)}`;
  popupClone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = getPlaceText(offer.type);
  popupClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getRoomsText(offer.rooms)} для ${offer.guests} ${getGuestsText(offer.guests)}`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupClone.querySelector('.popup__description').textContent = offer.description;
  popupClone.querySelector('.popup__photo').src = offer.photos;

  const featureList = popupClone.querySelectorAll('.popup__feature');
  const test = popupClone.querySelector('.popup__features');

  if (Object.keys(offer).includes('features')) {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);

    featureList.forEach((featureListItem) => {
      const modifier = featureListItem.classList[1];

      if (!modifiers.includes(modifier)) {
        featureListItem.remove();
      }
    });
  } else {
    test.remove();
  }

  return popupClone;
};

export {createPopupAdvertisement};
