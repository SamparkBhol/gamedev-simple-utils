// src/index.js
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = {
  randomNumber
};
