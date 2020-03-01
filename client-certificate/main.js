const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

//app.commandLine.appendSwitch('client-certificate',
                             //'path/to/client-certificates/ssl/client.crt');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    webPreferences: {
      nodeIntegration: true}
  });

  mainWindow.loadURL('https://localhost:5000');
});
