const {app, BrowserWindow, crashReporter} = require('electron');
const http = require('http');

crashReporter.start({submitURL: 'http://127.0.0.1:9999', companyName: 'sample'});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Crash-report collection server
var server = http.createServer(function(req, res) {
  // Handle the uploaded crash report from client here
  // ...
  // Response the crash report id on server to client.
  res.end(getRandomInt(1000, 9999).toString());
});

var mainWindow = null;
app.on('ready', function() {
  server.listen(9999, '127.0.0.1', function () {
    mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.toggleDevTools();
  });
});
