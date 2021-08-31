const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin')
    app.quit();
});

app.setPath("userData", __dirname + "/saved_recordings");

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true, contextIsolation: false}});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
