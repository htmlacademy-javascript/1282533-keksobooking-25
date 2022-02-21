function getRandomInteger(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}

function getRandomFloat(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    return (min + Math.random() * (max - min)).toFixed(1);
  }
}
getRandomInteger(1, 5);
getRandomFloat (1, 5);
