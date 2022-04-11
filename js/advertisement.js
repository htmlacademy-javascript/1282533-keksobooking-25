import {getPlaceText, getRoomsText, getGuestsText} from './util.js';

const popup = document.querySelector('#card').content.querySelector('.popup');

const createServerPopup = (author, offer, location) => {
  const popupClone = popup.cloneNode(true);
  popupClone.querySelector('.popup__avatar').src = author.avatar;
  popupClone.querySelector('.popup__title').textContent = offer.title;
  popupClone.querySelector('.popup__text--address').textContent = `${location.lat.toFixed(5)} ${location.lng.toFixed(5)}`;
  popupClone.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = getPlaceText(offer.type);
  popupClone.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${getRoomsText(offer.rooms)} для ${offer.guests} ${getGuestsText(offer.guests)}`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupClone.querySelector('.popup__description').textContent = offer.description;

  const photosContainer = popupClone.querySelector('.popup__photos');
  const photo = photosContainer.querySelector('.popup__photo');

  if (Object.keys(offer).includes('photos')) {
    if (offer.photos.length === 1) {
      photo.src = offer.photos;
    } else {
      offer.photos.forEach((value) => {
        const photoClone = photo.cloneNode(true);
        photoClone.src = value;
        photosContainer.append(photoClone);
        photosContainer.firstChild.remove();
      });
    }
  } else {
    photosContainer.remove();
  }

  const featureList = popupClone.querySelectorAll('.popup__feature');
  const featureContainer = popupClone.querySelector('.popup__features');

  if (Object.keys(offer).includes('features')) {
    const modifiers = offer.features.map((feature) => `popup__feature--${feature}`);

    featureList.forEach((featureListItem) => {
      const modifier = featureListItem.classList[1];

      if (!modifiers.includes(modifier)) {
        featureListItem.remove();
      }
    });
  } else {
    featureContainer.remove();
  }

  return popupClone;
};

const createUserPopup = (data) => {
  const popupClone = popup.cloneNode(true);
  // popupClone.querySelector('.popup__avatar').src = author.avatar;
  popupClone.querySelector('.popup__title').textContent = data.title;
  popupClone.querySelector('.popup__text--address').textContent = `${data.address}`;
  popupClone.querySelector('.popup__text--price').textContent = `${data.price} ₽/ночь`;
  popupClone.querySelector('.popup__type').textContent = getPlaceText(data.type);
  popupClone.querySelector('.popup__text--capacity').textContent = `${data.rooms} ${getRoomsText(+data.rooms)} для ${data.capacity} ${getGuestsText(+data.capacity)}`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${data.timein}, выезд до ${data.timeout}`;
  popupClone.querySelector('.popup__description').textContent = data.description;
  // popupClone.querySelector('.popup__photo').src = offer.photos;

  const featureList = popupClone.querySelectorAll('.popup__feature');
  const featureContainer = popupClone.querySelector('.popup__features');

  if (Object.keys(data).includes('feature')) {
    const modifiers = data.feature.map((feature) => `popup__feature--${feature}`);

    featureList.forEach((featureListItem) => {
      const modifier = featureListItem.classList[1];

      if (!modifiers.includes(modifier)) {
        featureListItem.remove();
      }
    });
  } else {
    featureContainer.remove();
  }

  return popupClone;
};

export {createServerPopup, createUserPopup};
