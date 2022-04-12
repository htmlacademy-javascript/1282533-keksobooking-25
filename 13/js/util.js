const getPlaceText = (place) => {
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

const getRoomsText = (rooms) => {
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

const getGuestsText = (guests) => {
  let word;
  if (guests === 1) {
    word = 'гостя';
  } else {
    word = 'гостей';
  }
  return word;
};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getPlaceText, getRoomsText, getGuestsText, debounce};
