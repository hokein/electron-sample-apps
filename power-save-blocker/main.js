var app = require('app');
var Tray = require('tray');
var Menu = require('menu');
var path = require('path');
var powerSaveBlocker = require('power-save-blocker');
var BrowserWindow = require('browser-window');

var appIcon = null;
var win = null;
var disabledIconPath = path.join(__dirname, 'images', 'night-19.png');
var appSuspensionIconPath = path.join(__dirname, 'images', 'sunset-19.png');
var displaySleepIconPath = path.join(__dirname, 'images', 'day-19.png');

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(disabledIconPath);
  var blocker_id = null;
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Prevent app suspension',
      type: 'radio',
      icon: appSuspensionIconPath,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
        blocker_id = powerSaveBlocker.start('prevent-app-suspension');
      }
    },
    {
      label: 'Prevent display sleep',
      type: 'radio',
      icon: displaySleepIconPath,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
        blocker_id = powerSaveBlocker.start('prevent-display-sleep');
      }
    },
    {
      label: 'Disable',
      type: 'radio',
      icon: disabledIconPath,
      checked: true,
      click: function() {
        if (blocker_id)
          powerSaveBlocker.stop(blocker_id);
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('Keep system awake');
  appIcon.setContextMenu(contextMenu);
});
