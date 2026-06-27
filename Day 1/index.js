// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" || req.url === "/home") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>hello from home</h1>");
//   } else if (req.url === "/api") {
//     fs.readFile("./test2.json", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Failed" }));
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(data);
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
