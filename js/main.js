/* eslint-disable no-console */
/* eslint-disable no-alert */
const ARRAY_USERS_COUNT = 10;

const PLACE_AND_TIME = {
  apartments:
  [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  time:
  [
    '12:00',
    '13:00',
    '14:00',
  ],
};

const FACILITIES = {
  additions:
  [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ],
  interior:
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
};

const getRandomInteger = (min = 1, max = 5) => {
  if (min >= max || min < 0) {
    alert('Неверный ввод данных!');
  }
  const integerNumber = Math.floor(min + Math.random() * (max + 1 - min));
  return +integerNumber;
};

const getRandomFloat = (min = 1, max = 5, digits = 1) => {
  if (min >= max || min < 0) {
    alert('Неверный ввод данных!');
  }
  const floatNumber = (min + Math.random() * (max - min)).toFixed(digits);
  return +floatNumber;
};

const getNumberImg = (arrayLength = 10) => {
  const numbersImg = [...Array(Math.abs(arrayLength)).keys()];
  const addZero = numbersImg.map((currentValue) => {
    currentValue = (currentValue + 1).toString();
    if (currentValue !== 0 && currentValue < 10) {
      currentValue = `0${currentValue}`;
    }
    return currentValue;
  });
  return addZero;
};

const getAddressImg = () => {
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

const getRandomArray = (value) => {
  const arrayOfArbitraryLength = [...Array(getRandomInteger(0, value.length))];
  for (let i = 0; i < arrayOfArbitraryLength.length; i++) {
    const randomNumber = getRandomInteger(0, arrayOfArbitraryLength.length);
    if (!arrayOfArbitraryLength.includes(randomNumber)) {
      arrayOfArbitraryLength[i] = randomNumber;
    }
  }
  const filteredArray = arrayOfArbitraryLength.filter((currentValue) => currentValue !== undefined);
  return filteredArray;
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
    avatar: getAddressImg(),
  },
  offer: {
    title: 'Какой-то заголовок',
    address: 'Спросить на консультации',
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
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  }
});

const createArrayUsers = Array.from({length: ARRAY_USERS_COUNT}, createUser);

console.log(createArrayUsers);
