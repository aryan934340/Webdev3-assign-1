// app.js
// Requirement 2 : Custom Module Creation & Reusability
// Both custom modules (isEven + logger) are imported here using require()
// Usage : node app.js            -> runs with default numbers
//         node app.js 7 12 25    -> checks the numbers you pass

const { isEven, isOdd } = require("./modules/isEven");
const logger = require("./modules/logger");

logger.title("Custom Module Demo");

// Take numbers from CLI, otherwise use defaults
const input = process.argv.slice(2);
const numbers = input.length > 0 ? input : [1, 2, 7, 10, 15, 24];

logger.log(`Checking numbers -> ${numbers.join(", ")}`);

numbers.forEach((n) => {
  try {
    if (isEven(n)) {
      logger.success(`${n} is EVEN`);
    } else {
      logger.warn(`${n} is ODD`);
    }
  } catch (err) {
    logger.error(err.message);
  }
});

// Reusing the same module for another use-case -> filtering
const evens = numbers.filter((n) => !Number.isNaN(Number(n)) && isEven(n));
const odds = numbers.filter((n) => !Number.isNaN(Number(n)) && isOdd(n));

console.log("\nEven numbers :", evens.join(", "));
console.log("Odd  numbers :", odds.join(", "));

logger.log("Module reusability demo completed");
