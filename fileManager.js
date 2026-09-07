// fileManager.js
// Requirement 4 : File Manager using fs Module (Create, Read, Update, Delete)
// Usage : node fileManager.js                 -> runs the full CRUD demo
//         node fileManager.js read test.txt   -> single operation mode

const fs = require("fs");
const path = require("path");
const { log, success, error, title } = require("./modules/logger");

const FILE = path.join(__dirname, "test.txt");

// ---------- Individual operations ----------

function createFile(file, data, callback) {
  console.log("Creating File...");
  fs.writeFile(file, data, (err) => {
    if (err) return error(`Create failed: ${err.message}`);
    console.log("File Created");
    if (callback) callback();
  });
}

function readFile(file, callback) {
  console.log("Reading File");
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      // Graceful handling of missing file
      if (err.code === "ENOENT") return error(`File not found: ${file}`);
      return error(`Read failed: ${err.message}`);
    }
    console.log(data);
    if (callback) callback();
  });
}

function updateFile(file, data, callback) {
  fs.appendFile(file, data, (err) => {
    if (err) return error(`Update failed: ${err.message}`);
    console.log("File Updated");
    if (callback) callback();
  });
}

function deleteFile(file, callback) {
  fs.unlink(file, (err) => {
    if (err) {
      if (err.code === "ENOENT") return error(`Cannot delete, file missing: ${file}`);
      return error(`Delete failed: ${err.message}`);
    }
    console.log("File Deleted");
    if (callback) callback();
  });
}

// ---------- CLI mode ----------

const [action, fileArg] = process.argv.slice(2);
const target = fileArg ? path.join(__dirname, fileArg) : FILE;

if (action) {
  switch (action) {
    case "create":
      createFile(target, "Hello Node.js\n");
      break;
    case "read":
      readFile(target);
      break;
    case "update":
      updateFile(target, "Learning FS Module\n");
      break;
    case "delete":
      deleteFile(target);
      break;
    default:
      error(`Unknown action "${action}". Use: create | read | update | delete`);
  }
} else {
  // ---------- Full CRUD demo (async execution order visible) ----------
  title("File Manager Demo");
  log("Synchronous code runs first, callbacks run later (async behaviour)");

  createFile(FILE, "Hello Node.js\n", () => {
    readFile(FILE, () => {
      updateFile(FILE, "Learning FS Module\n", () => {
        readFile(FILE, () => {
          deleteFile(FILE, () => {
            success("All file operations completed");
          });
        });
      });
    });
  });

  log("End of synchronous code (this prints before file callbacks)");
}

module.exports = { createFile, readFile, updateFile, deleteFile };
