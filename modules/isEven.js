// modules/isEven.js
// Custom module -> checks whether a number is even or odd

function isEven(num) {
  const n = Number(num);
  if (Number.isNaN(n)) {
    throw new Error(`"${num}" is not a valid number`);
  }
  return n % 2 === 0;
}

function isOdd(num) {
  return !isEven(num);
}

// Exporting functions so other files can require() them
module.exports = { isEven, isOdd };
