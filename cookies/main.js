const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 400, height: 360});
  mainWindow.loadURL('file://' + __dirname + '/manager.html');
});

