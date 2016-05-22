// initialize spell checking
const checker = require('spellchecker');

const {remote} = require('electron');
const {webFrame} = remote;

webFrame.setSpellCheckProvider("en-US", true, {
    spellCheck: function(text) {
      console.log("Spellchecker called on "+text);
      return !checker.isMisspelled(text);
    }
});

