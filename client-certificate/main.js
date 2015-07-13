var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

//app.commandLine.appendSwitch('client-certificate',
                             //'X:\\workspace\\client-certificates\\ssl\\client.crt');

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
  });

  mainWindow.loadUrl('https://localhost:5000');
});
