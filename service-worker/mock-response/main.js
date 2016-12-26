const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 300,
      width: 400
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
