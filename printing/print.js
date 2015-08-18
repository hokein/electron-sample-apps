var remote = require('remote');
var shell = remote.require('shell');
var fs = require('fs');

var BrowserWindow = remote.require('browser-window');
var dialog = remote.require('dialog');

var print_win = null;
var save_pdf_path = null;

function getPDFPrintSettings() {
  var option = {
    landscape: false,
    marginsType: 0,
    printBackground: false,
    printSelectronOnly: false,
    pageSize: 'A4',
  };

  var layoutSetting = document.getElementById("layout-settings");
  option.landscape =
    layoutSetting.options[layoutSetting.selectedIndex].value == 'Landscape';
  var pageSizeSetting = document.getElementById("page-size-settings");
  option.pageSize =
    pageSizeSetting.options[pageSizeSetting.selectedIndex].text;
  var marginsSetting = document.getElementById("margin-settings");
  option.marginsType =
    parseInt(marginsSetting.options[marginsSetting.selectedIndex].value);

  option.printBackground = document.getElementById("print-background").checked;
  option.printSelectronOnly = document.getElementById(
    "print-selection").checked;
  return option;
}

function print() {
  print_win.print();
}

function savePDF() {
  dialog.showSaveDialog(print_win, {}, function(file_path) {
    print_win.printToPDF(getPDFPrintSettings(), function(err, data) {
      if (err) throw err;
      fs.writeFile(file_path, data, function(err) {
        if(err) throw err;
        save_pdf_path = file_path;
      });
    });
  });
}

function viewPDF() {
  shell.openItem(save_pdf_path);
}

document.addEventListener('DOMContentLoaded', function() {
  print_win = new BrowserWindow({});
  print_win.loadUrl('file://' + __dirname + '/print.html');
  print_win.show();

  print_win.webContents.on('did-finish-load', function() {
    document.getElementById('print_button').addEventListener('click', print);
    document.getElementById('save_pdf_button').addEventListener(
      'click', savePDF);
    document.getElementById('view_pdf_button').addEventListener(
      'click', viewPDF);
  });
});
