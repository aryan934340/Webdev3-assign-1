# Smart Utility Toolkit — Lab Assignment 1 (Unit 1)

Course: Web Dev III (Node.js & Express Backend)
Built using **only Node.js core modules** — no npm packages, no Express, no database.

## Folder Structure

```
smart-utility-toolkit/
├── calculator.js      # CLI calculator (process.argv)
├── app.js             # Custom module reusability demo
├── server.js          # HTTP server with routes
├── fileManager.js     # File CRUD (fs module)
├── dice.js            # Random dice generator (crypto module)
├── test.txt
├── modules/
│   ├── isEven.js
│   └── logger.js
└── README.md
```

## How to Run

| # | Task | Command |
|---|------|---------|
| 1 | CLI Calculator | `node calculator.js add 10 5` |
| 2 | Custom Module | `node app.js` or `node app.js 7 12 25` |
| 3 | HTTP Server | `node server.js` → open `http://localhost:3000/` |
| 4 | File Manager | `node fileManager.js` (full CRUD demo) |
| 5 | Dice Generator | `node dice.js` or `node dice.js 10` |

### Calculator operations
`add`, `sub`, `mul`, `div`, `mod`, `pow`

```
node calculator.js mul 6 7      -> Result: 42
node calculator.js div 10 0     -> Division by zero is not allowed.
node calculator.js xyz 1 2      -> Invalid operation "xyz"
```

### Server routes

| Route | Response |
|-------|----------|
| `/` | Welcome message |
| `/about` | About page |
| `/contact` | Contact page |
| `/api/info` | JSON response (bonus) |
| anything else | 404 Error Message |

### File Manager single operations
```
node fileManager.js create test.txt
node fileManager.js read test.txt
node fileManager.js update test.txt
node fileManager.js delete test.txt
```

## Bonus Challenges Completed
- Colored terminal output using ANSI escape codes (`modules/logger.js`)
- Timestamp logs in the logger module
- Extra calculator operations — `mod`, `pow`
- Dice roll history stored in `diceHistory.txt`
- JSON response route in the HTTP server

## Viva Points
- `process.argv` — array of CLI args; index 0 = node path, 1 = file path, 2 onwards = user input.
- `module.exports` + `require()` — how custom modules are exported and reused.
- `fileManager.js` prints "End of synchronous code" **before** the file callbacks — this proves Node.js is non-blocking/asynchronous.
- `crypto.randomInt()` is cryptographically secure, unlike `Math.random()`.
- `http.createServer()` takes a callback with `(req, res)`; routing is done by checking `req.url`.
