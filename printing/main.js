const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({x:100, y:100, width: 400, height: 420, webPreferences: {nodeIntegration: true}});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('close', () => {
    for (let window of BrowserWindow.getAllWindows()) {
      if (window != mainWindow)
        window.close();
    }
  })
});
