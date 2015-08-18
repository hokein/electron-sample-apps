var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({x:100, y:100, width: 400, height: 420});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.on('close', function() {
    var windows = BrowserWindow.getAllWindows();
    for (var i = 0; i < windows.length; ++i) {
      if (windows[i] != mainWindow)
        windows[i].close();
    }
  })
});
