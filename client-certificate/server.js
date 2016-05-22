const https = require('https');
const fs = require('fs');

const options = {
  key:  fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt'),
  ca:   fs.readFileSync('ssl/rootCA.crt'),
  requestCert:        true,
  rejectUnauthorized: false
};

https.createServer(options, function (req, res) {
  console.log('Receive a request.');
  if (req.client.authorized) {
    res.writeHead(200);
    res.end('approved\n');
  } else {
    res.writeHead(401);
    res.end('denied\n');
  }
}).listen(5000);
