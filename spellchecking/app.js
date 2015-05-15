
// initialize spell checking
checker = require('spellchecker');
require('web-frame').setSpellCheckProvider("en-US", true, {
    spellCheck: function(text) {
        console.log("Spellchecker called on "+text);
        return !checker.isMisspelled(text);
    }
});

