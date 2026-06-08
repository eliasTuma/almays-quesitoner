const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const indexFile = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  // Single-page site: serve index.html for every request
  fs.readFile(indexFile, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(port, () => console.log('Almeis landing page running on port ' + port));
