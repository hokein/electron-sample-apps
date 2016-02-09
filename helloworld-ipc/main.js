'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

var ipcMain = require('electron').ipcMain;
global.sharedObj = {myvar: null};
var myname = "hello-from-main-dot-js";
global.sharedObj = {myvar: myname};

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
});
