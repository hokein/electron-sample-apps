var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 400, height: 360});
  mainWindow.loadUrl('file://' + __dirname + '/manager.html');
});

