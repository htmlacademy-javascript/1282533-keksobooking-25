import {ARRAY_USERS_COUNT, PLACE_AND_TIME, FACILITIES} from './constants.js';
import {getRandomInteger, getNumberImg, getRandomArray, longitude, latitude} from './until.js';

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

const createUser = () => ({
  author: {
    avatar: getOneOfMany(1, 10, getAvatar()),
  },
  offer: {
    title: 'Какой-то заголовок',
    address: {
      lat: latitude,
      lng: longitude,
    },
    price: getRandomInteger(1000, 10000),
    type: getOneOfMany(1, 5, PLACE_AND_TIME.apartments),
    rooms: getRandomInteger(1, 6),
    guests: getRandomInteger(1, 20),
    checkin: getOneOfMany(1, 3, PLACE_AND_TIME.time),
    checkout: getOneOfMany(1, 3, PLACE_AND_TIME.time),
    features: getArrayRandomValues(FACILITIES.additions),
    description: 'Какое-то описание',
    photos: getArrayRandomValues(FACILITIES.interior),
  },
  location: {
    lat: latitude,
    lng: longitude,
  }
});

const createArrayUsers = () => Array.from({length: ARRAY_USERS_COUNT}, createUser);

export {createArrayUsers};
