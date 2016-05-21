const {app, BrowserWindow} = require('electron');

let mainWindow;

global.sharedObj = {myvar: "hellofrommainjs"};

app.on('ready', function() {
  mainWindow = new BrowserWindow({
      height: 600,
      width: 800
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
