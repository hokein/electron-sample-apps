var path = require('path');
var options = [
  {
    title: "Basic Notification",
    body: "Short message part"
  },
  {
    title: "Content-Image Notification",
    body: "Short message plus a custom content image",
    icon: path.join(__dirname, 'icon.png')
  }
]

function doNotify(evt) {
  if (evt.srcElement.id == "basic") {
    new Notification(options[0].title, options[0]);
  }
  else if (evt.srcElement.id == "image") {
    new Notification(options[1].title, options[1]);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
  document.getElementById("image").addEventListener("click", doNotify);
})
