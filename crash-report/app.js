const {crashReporter} = require('electron');

crashReporter.start({submitURL: 'http://127.0.0.1:9999', companyName: 'sample'});

function showCrashReporter(report) {
  return "<tr><td>" + report.date + "</td>" +
    "<td>" + report.id + "</td>";
}

window.onload = function() {
  var reporters = crashReporter.getUploadedReports();
  var table = "<table width=50% border=\"1\">\n" +
              "<tr><td><b>Uploaded Date</b></td>" +
              "<td><b>ID</b></td>" +
              "</tr>\n";

  var div = document.getElementById("crash_reporters");
  for (let reporter of reporters) {
    table += showCrashReporter(reporter);
  }
  div.innerHTML = table;
  document.getElementById('crash').onclick = function() {
    process.crash();
  }
};
