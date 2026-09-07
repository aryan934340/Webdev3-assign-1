// modules/logger.js
// Custom module -> reusable logger with timestamp + colored output (ANSI escape codes)

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
};

// Bonus: timestamp log
function timestamp() {
  const d = new Date();
  return d.toLocaleTimeString("en-IN", { hour12: false });
}

function log(message) {
  console.log(`${colors.cyan}[${timestamp()}] [LOG]${colors.reset} ${message}`);
}

function success(message) {
  console.log(`${colors.green}[${timestamp()}] [OK ]${colors.reset} ${message}`);
}

function warn(message) {
  console.log(`${colors.yellow}[${timestamp()}] [WARN]${colors.reset} ${message}`);
}

function error(message) {
  console.log(`${colors.red}[${timestamp()}] [ERR]${colors.reset} ${message}`);
}

function title(message) {
  console.log(`\n${colors.magenta}===== ${message} =====${colors.reset}`);
}

// Exporting multiple functions using module.exports
module.exports = { log, success, warn, error, title, colors };
