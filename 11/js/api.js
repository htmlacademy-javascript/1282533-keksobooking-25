const getData = (pinMap, errorMessage, count) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((Response) => Response.json())
    .then((data) => pinMap(data.slice(0, count)))
    .catch(() => errorMessage());
};

const sendData = (userData, messageState, body) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((Response) => Response.json())
    .then((data) => userData(data))
    .then(() => messageState('success'))
    .catch(() => messageState('error'));
};

export {getData, sendData};
