var events = require("events");
var path = require('path');
var jade = require('jade');
var util = require("util");

// Template engine
var gen_bar = jade.compile([
    '- each item, i in sequence',
    '  - if (i != sequence.length - 1)',
    '    li(data-path="#{item.path}")',
    '      a(href="#") #{item.name}',
    '      span.divider /',
    '  - else',
    '    li.active(data-path="#{item.path}")',
    '      a(href="#") #{item.name}',
].join('\n'));

var gen_one_fie = jade.compile([
    'li(data-path="#{item.path}")',
    '  a(href="#") #{item.name}',
].join('\n'));

// Our real type
function AddressBar(element) {
  events.EventEmitter.call(this);
  this.element = element;

  // Monitor click on AddressBar
  var self = this;
  element.delegate('a', 'click', function() {
    self.element.children('.active').removeClass('active');
    $(this).parent().addClass('active');

    self.emit('navigate', $(this).parent().attr('data-path'));

    return false;
  });
}

util.inherits(AddressBar, events.EventEmitter);

AddressBar.prototype.set = function(dir_path) {
  this.current_path = path.normalize(dir_path);

  // Split path into separate elements
  var sequence = this.current_path.split(path.sep);
  var result = [];

  var i = 0;
  for (; i < sequence.length; ++i) {
    result.push({
      name: sequence[i],
      path: sequence.slice(0, 1 + i).join(path.sep),
    });
  }

  // Add root for *nix
  if (sequence[0] == '' && process.platform != 'win32') {
    result[0] = {
      name: 'root',
      path: '/',
    };
  }

  this.element.html(gen_bar({ sequence: result }));
}

AddressBar.prototype.enter = function(mine) {
  // Where is current
  var how_many = this.element.children().length;
  var where = this.element.children('.active').index();
  if (where == how_many - 1) {
    // Add '/' on tail
    this.element.children().eq(-1).append('<span class="divider">/</span>');
  } else {
    this.element.children('li:gt(' + where + ')').remove();
  }

  // Add new folder
  this.element.append(gen_one_fie({ item: mine }));
  this.element.find('a:last').trigger('click');
}

exports.AddressBar = AddressBar;
