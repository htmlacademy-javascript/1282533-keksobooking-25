/* eslint-disable no-alert */
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

const latitude = getRandomFloat(35.65, 35.7, 5);
const longitude = getRandomFloat(139.7, 139.8, 5);

const getNumberImg = (arrayLength = 10) => {
  const numbersImg = [...Array(Math.abs(arrayLength)).keys()];
  const addZero = numbersImg.map((currentValue) => {
    currentValue = (currentValue + 1).toString();
    return currentValue.padStart(2, '0');
  });
  return addZero;
};

const getRandomArray = (value) => {
  const arrayOfArbitraryLength = Array(getRandomInteger(0, value.length));
  for (let i = 0; i < arrayOfArbitraryLength.length; i++) {
    const randomNumber = getRandomInteger(0, arrayOfArbitraryLength.length);
    if (!arrayOfArbitraryLength.includes(randomNumber)) {
      arrayOfArbitraryLength[i] = randomNumber;
    }
  }
  const filteredArray = arrayOfArbitraryLength.filter((currentValue) => currentValue !== undefined);
  return filteredArray;
};

const getPlace = (place) => {
  switch (place) {
    case 'palace':
      return 'Дворец';
    case 'flat':
      return 'Квартира';
    case 'house':
      return 'Дом';
    case 'bungalow':
      return 'Бунгало';
    case 'hotel':
      return 'Отель';
    default:
      return 'Не выбран тип жилья!';
  }
};

const getRooms = (rooms) => {
  switch (rooms) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return 'комнат';
    default:
      return '';
  }
};

const getGuests = (guests) => {
  let word;
  if (guests === 1) {
    word = 'гостя';
  } else {
    word = 'гостей';
  }
  return word;
};

export{getRandomInteger, getNumberImg, getRandomArray, getPlace, getRooms, getGuests, longitude, latitude};
