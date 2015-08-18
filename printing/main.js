var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({x:100, y:100, width: 400, height: 380});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
