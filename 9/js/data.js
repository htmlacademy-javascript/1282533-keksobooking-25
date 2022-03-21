import {ARRAY_USERS_COUNT, PLACE_AND_TIME, FACILITIES} from './constants.js';
import {getRandomInteger, getRandomFloat, getNumberImg, getRandomArray} from './util.js';

const getAvatar = () => {
  const addressImg = getNumberImg().map((currentValue) => {
    currentValue = `img/avatars/user${currentValue}.png`;
    return currentValue;
  });
  return addressImg;
};

const getOneOfMany = (min, max, value) => {
  const array = value;
  return array[getRandomInteger(min, max) - 1];
};

const getArrayRandomValues = (value) => {
  const randomArray = getRandomArray(value);
  const arrayRandomValues = [];
  for (let i = 0; i < randomArray.length; i++) {
    arrayRandomValues.push(value[randomArray[i]]);
  }
  const filteredArray = arrayRandomValues.filter((currentValue) => currentValue !== undefined);
  return filteredArray;
};

const createAdvertisement = () => ({
  author: {
    avatar: getOneOfMany(1, 10, getAvatar()),
  },
  offer: {
    title: 'Какой-то заголовок',
    address: '',
    price: getRandomInteger(1000, 10000),
    type: getOneOfMany(1, 5, PLACE_AND_TIME.apartments),
    rooms: getRandomInteger(1, 10),
    guests: getRandomInteger(1, 20),
    checkin: getOneOfMany(1, 3, PLACE_AND_TIME.time),
    checkout: getOneOfMany(1, 3, PLACE_AND_TIME.time),
    features: getArrayRandomValues(FACILITIES.additions),
    description: 'Какое-то описание',
    photos: getOneOfMany(1, 3, FACILITIES.interior),
  },
  location: {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  }
});

const createArrayAdvertisement = () => Array.from({length: ARRAY_USERS_COUNT}, createAdvertisement);

export {createArrayAdvertisement};
