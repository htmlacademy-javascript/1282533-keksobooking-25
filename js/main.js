function randomInteger(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

function randomFloat(min, max) {
  if (min >= max || min < 0) {
    // eslint-disable-next-line no-alert
    alert('Ошибка');
  } else {
    const rand = min + Math.random() * (max + 1 - min);
    return rand.toFixed(1);
  }
}
randomInteger(1, 5);
randomFloat (1, 5);
