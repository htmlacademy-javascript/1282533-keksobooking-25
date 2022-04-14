import {onResetButtonClick} from './reset.js';
import {unblockSubmitButton} from './util.js';


const body = document.querySelector('body');


const getStateMessage = (state) => {
  const stateTemplate = document.querySelector(`#${state}`).content.querySelector(`.${state}`);
  const stateContainer = stateTemplate.cloneNode(true);

  const onClickCloseStateContainer = () => {
    stateContainer.remove();

    if (`${state}` === 'success') {
      onResetButtonClick();
    }

    unblockSubmitButton();
  };

  stateContainer.addEventListener('click', onClickCloseStateContainer);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      onClickCloseStateContainer();
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

export{getStateMessage, getDataLoadingErrorMessage};
