/* eslint-disable no-alert */
function getRandomInteger(min = 1, max = 5) {
  if (min >= max || min < 0) {
    alert('Неверный ввод данных!');
  }
  const integerNumber = Math.floor(min + Math.random() * (max + 1 - min));
  return +integerNumber;
}

function getRandomFloat(min = 1, max = 5, digits = 1) {
  if (min >= max || min < 0) {
    alert('Неверный ввод данных!');
  }
  const floatNumber = (min + Math.random() * (max - min)).toFixed(digits);
  return +floatNumber;
}
getRandomInteger();
getRandomFloat ();
