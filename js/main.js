function randomInteger(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    const integerNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(integerNumber);
  }
}

function randomFloat(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    const floatNumber = min + Math.random() * (max + 1 - min);
    return floatNumber.toFixed(1);
  }
}
randomInteger(1, 5);
randomFloat (1, 5);
