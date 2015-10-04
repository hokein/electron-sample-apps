// Modified by hokein
//
// Copyright 2014 Intel Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Author: Dongseong Hwang (dongseong.hwang@intel.com)


var desktop_sharing = false;
var local_stream = null;

var desktopCapturer = require('desktop-capturer');

desktopCapturer.on('source-thumbnail-changed', function(index) {
  var item = desktopCapturer.getSource(index);
  if (item.name == "Electron" && !desktop_sharing) {
    desktopCapturer.stopUpdating();
    onAccessApproved(item.id);
  }
});

function toggle() {
  if (!desktop_sharing) {
    desktopCapturer.startUpdating(['window', 'screen']);
  } else {
    desktop_sharing = false;

    if (local_stream)
        local_stream.stop();
    local_stream = null;

    document.querySelector('button').innerHTML = "Enable Capture";
    console.log('Desktop sharing stopped...');
  }
}

function onAccessApproved(desktop_id) {
  if (!desktop_id) {
    console.log('Desktop Capture access rejected.');
    return;
  }
  desktop_sharing = true;
  document.querySelector('button').innerHTML = "Disable Capture";
  console.log("Desktop sharing started.. desktop_id:" + desktop_id);
  navigator.webkitGetUserMedia({
    audio: false,
    video: {
      mandatory: {
        chromeMediaSource: 'desktop',
        chromeMediaSourceId: desktop_id,
        minWidth: 1280,
        maxWidth: 1280,
        minHeight: 720,
        maxHeight: 720
      }
    }
  }, gotStream, getUserMediaError);

  function gotStream(stream) {
    local_stream = stream;
    document.querySelector('video').src = URL.createObjectURL(stream);
    stream.onended = function() {
      if (desktop_sharing) {
        toggle();
      }
    };
  }

  function getUserMediaError(e) {
    console.log('getUserMediaError: ' + JSON.stringify(e, null, '---'));
  }
}

document.querySelector('button').addEventListener('click', function(e) {
  toggle();
});
