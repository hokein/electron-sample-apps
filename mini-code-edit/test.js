
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');
var dialog = remote.require('dialog');

document.addEventListener('DOMContentLoaded', function() {
  //document.getElementById('openFile').addEventListener('change', function (e) {
    //console.log(this.value);
  //});
  dialog.showOpenDialog({ properties: [ 'openFile']},
                       function(filename) { console.log(filename); })
});
