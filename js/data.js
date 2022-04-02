import {onResetButtonClick} from './reset.js';

const body = document.querySelector('body');

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

const getStateMessage = (state) => {
  const stateTemplate = document.querySelector(`#${state}`).content.querySelector(`.${state}`);

  const stateContainer = stateTemplate.cloneNode(true);
  const stateButton = stateContainer.querySelector(`.${state}__button`);

  stateButton.addEventListener('click', () => {
    stateContainer.remove();

    if (`${state}` === 'success') {
      onResetButtonClick();
    }
  });

  return body.append(stateContainer);
};

const getDataLoadingErrorMessage = () => {
  const errorLoadDataTemplate = document.querySelector('#error-load-data').content.querySelector('.error-load-data');

  const errorLoadDataContainer = errorLoadDataTemplate.cloneNode(true);
  const continueButton = errorLoadDataContainer.querySelector('.error-load-data__button--continue-job');
  const reloadButton = errorLoadDataContainer.querySelector('.error-load-data__button--reload');

  continueButton.addEventListener('click', () => {
    errorLoadDataContainer.remove();
  });

  reloadButton.addEventListener('click', () => {
    location.reload();
  });

  return body.append(errorLoadDataContainer);
};

export{getPlaceText, getRoomsText, getGuestsText, getStateMessage, getDataLoadingErrorMessage};
