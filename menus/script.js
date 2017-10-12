
var remote = require('electron').remote;
var Menu = remote.Menu;
var MenuItem = remote.MenuItem;

var menu = new Menu();
menu.append(new MenuItem({ label: 'Basic Menu Item' }));

var submenu = new Menu();
submenu.append(new MenuItem({ type: 'checkbox', label: 'box1' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box2' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box3' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box4' }));

var menu1 = new Menu();
menu1.append(new MenuItem({ label: 'MenuItem1',click: function() { console.log('item 1 clicked'); } }));
menu1.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
menu1.append(new MenuItem({ label: 'Disk', submenu: submenu}));

var lastone;
function flip(item) {
  if (lastone ) {
    lastone.checked = false;
    lastone.enabled = true;
  }
  lastone = item;
  item.checked = true;
  item.enabled = false;
  // https://github.com/electron/electron/issues/528
  // info_item.label = 'I Love ' + item.label;
}

var menu2 = new Menu();
var fruits = ['Apple', 'Banana', 'Strawberry', 'Pear']
for (var i = 0; i < fruits.length; ++i)
  menu2.append(new MenuItem({ type: 'checkbox', label: fruits[i], click: flip }));

menu2.append(new MenuItem({ type: 'separator' }));
var info_item = new MenuItem({ "type" : "normal", label: 'Which Fruit Do I Love?' } );
menu2.append(info_item);


function changecolor(item) {
  document.getElementById('area-3').style.backgroundColor = item.label;
}
var menu3 = new Menu();
var colors = [ '#000000', '#FF0000', '#00FF00' , '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#FFFFFF' ];
for (var i = 0; i < colors.length; ++i)
  menu3.append(new MenuItem({ label: colors[i], click: changecolor }));

// main area
// document.getElementById('main-menu').addEventListener('contextmenu', function(ev) {
//   ev.preventDefault();
//   menu.popup(ev.x, ev.y);
//   return false;
// });

// area 1 menu
document.getElementById('area-1').addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  menu1.popup(ev.x, ev.y);
  return false;
});

// area 2 menu
document.getElementById('area-2').addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  menu2.popup(ev.x, ev.y);
  return false;
});

// area 3 menu
document.getElementById('area-3').addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  menu3.popup(ev.x, ev.y);
  return false;
});

// global menu
// need to disable this once we have the other one active
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
});
