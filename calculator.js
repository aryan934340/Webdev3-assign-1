// calculator.js
// Requirement 1 : CLI-Based Calculator using process.argv
// Usage : node calculator.js add 10 5

const { log, success, error, warn } = require("./modules/logger");

// process.argv -> [ node path, file path, ...user arguments ]
const args = process.argv.slice(2);
const [operation, num1, num2] = args;

// Supported operations (bonus: extra operations added)
const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
  mod: (a, b) => a % b,
  pow: (a, b) => a ** b,
};

function showUsage() {
  console.log("\nUsage   : node calculator.js <operation> <num1> <num2>");
  console.log("Example : node calculator.js add 10 5");
  console.log("Ops     : " + Object.keys(operations).join(", ") + "\n");
}

log("Calculator started");
log(`Arguments received -> ${JSON.stringify(args)}`);

// ---- Validation (graceful error handling) ----
if (args.length < 3) {
  error("Missing arguments!");
  showUsage();
  process.exit(1);
}

if (!operations[operation]) {
  error(`Invalid operation "${operation}"`);
  showUsage();
  process.exit(1);
}

const a = Number(num1);
const b = Number(num2);

if (Number.isNaN(a) || Number.isNaN(b)) {
  error("Both inputs must be valid numbers.");
  process.exit(1);
}

if (operation === "div" && b === 0) {
  warn("Division by zero is not allowed.");
  process.exit(1);
}

// ---- Perform operation ----
const result = operations[operation](a, b);

console.log(`Result: ${result}`);
success(`${a} ${operation} ${b} = ${result}`);
log("Calculator finished");
