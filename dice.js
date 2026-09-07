// dice.js
// Requirement 5 : Random Dice Generator using crypto Module
// Usage : node dice.js        -> rolls 5 times
//         node dice.js 10     -> rolls 10 times

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { log, success, error, title } = require("./modules/logger");

const HISTORY_FILE = path.join(__dirname, "diceHistory.txt");

// Secure random number between 1 and 6
function rollDice() {
  return crypto.randomInt(1, 7); // 1 inclusive, 7 exclusive
}

// Alternative approach using randomBytes (kept for viva/explanation)
function rollDiceUsingBytes() {
  const byte = crypto.randomBytes(1)[0]; // 0 - 255
  return (byte % 6) + 1;
}

title("Random Dice Generator");

const totalRolls = Number(process.argv[2]) || 5;

if (Number.isNaN(totalRolls) || totalRolls < 1) {
  error("Please enter a valid number of rolls.");
  process.exit(1);
}

log(`Rolling the dice ${totalRolls} time(s)...`);

const results = [];

for (let i = 1; i <= totalRolls; i++) {
  const value = rollDice();
  results.push(value);
  console.log(`Dice Rolled: ${value}`);
}

console.log("\nAll rolls :", results.join(", "));
console.log("Total     :", results.reduce((a, b) => a + b, 0));

// Bonus : store dice roll history in a text file
const record = `[${new Date().toLocaleString("en-IN")}] Rolls: ${results.join(", ")}\n`;

fs.appendFile(HISTORY_FILE, record, (err) => {
  if (err) return error(`Could not save history: ${err.message}`);
  success("Roll history saved to diceHistory.txt");
});
