'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

console.log(process.versions)

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
