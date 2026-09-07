// server.js
// Requirement 3 : Basic HTTP Server using http Module
// Usage : node server.js   ->   visit http://localhost:3000/

const http = require("http");
const { log, success, error } = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Log every incoming request (server behaviour analysis)
  log(`${req.method} request on ${req.url}`);

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Node Server</h1><p>Smart Utility Toolkit</p>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1><p>This server is built using the http core module.</p>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Contact Page</h1><p>Email: student@college.edu</p>");
  } else if (url === "/api/info") {
    // Bonus : JSON response
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: 200,
        project: "Smart Utility Toolkit",
        routes: ["/", "/about", "/contact", "/api/info"],
      })
    );
  } else {
    // Invalid route -> 404
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(PORT, () => {
  success(`Server running at http://localhost:${PORT}/`);
  console.log("Routes -> /   /about   /contact   /api/info");
});

server.on("error", (err) => {
  error(`Server failed to start: ${err.message}`);
});
