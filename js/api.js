const getData = (onServerDataLoad, onMapFilterLoad, onErrorMessage) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((Response) => Response.json())
    .then((data) => onServerDataLoad(data))
    .then(() => onMapFilterLoad())
    .catch(() => onErrorMessage());
};

const sendData = (onUserDataSubmits, onStateMessage, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
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
