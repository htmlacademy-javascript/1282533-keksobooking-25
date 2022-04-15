import {LINK_TO_GET, LINK_TO_SEND} from './constants.js';

const getData = (onServerDataLoad, onMapFilterLoad, onErrorMessage) => {
  fetch(LINK_TO_GET)
    .then((Response) => Response.json())
    .then((data) => onServerDataLoad(data))
    .then(() => onMapFilterLoad())
    .catch(() => onErrorMessage());
};

const sendData = (onUserDataSubmits, onStateMessage, body) => {
  fetch(
    LINK_TO_SEND,
    {
      method: 'POST',
      body,
    })
    .then((Response) => Response.json())
    .then((data) => onUserDataSubmits(data))
    .then(() => onStateMessage('success'))
    .catch(() => onStateMessage('error'));
};

export {getData, sendData};
