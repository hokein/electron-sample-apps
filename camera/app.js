navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    document.getElementById('camera').srcObject = stream;
  }).catch(function() {
    alert('could not connect stream');
  });
