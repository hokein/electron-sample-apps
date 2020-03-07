const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 300,
      width: 400, 
      webPreferences: {nodeIntegration: true}
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
