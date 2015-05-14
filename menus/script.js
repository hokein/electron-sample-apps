
var remote = require('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');


var submenu = new Menu();
submenu.append(new MenuItem({ type: 'checkbox', label: 'box1' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box2' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box3' }));
submenu.append(new MenuItem({ type: 'checkbox', label: 'box4' }));

var menu1 = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1',click: function() { console.log('item 1 clicked'); } }));
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }));
menu.append(new MenuItem({ label: 'Disk', submenu: submenu}));


//var menu2 = new Menu();
//menu2.append(new MenuItem({ type: 'checkbox', label: 'Apple' }));
//menu2.append(new MenuItem({ type: 'checkbox', label: 'Banana' }));
//menu2.append(new MenuItem({ type: 'checkbox', label: 'Strawberry' }));
//menu2.append(new MenuItem({ type: 'checkbox', label: 'Pear' }));
//menu2.append(new MenuItem({ type: 'separator' }));
//var info_item = new MenuItem({ label: 'Which Fruit Do I Love?' });
//menu2.append(info_item);

//function flip() {
  //if (lastone) {
    //lastone.checked = false;
    //lastone.enabled = true;
  //}
  //lastone = this;
  //this.enabled = false;
  //info_item.label = 'I Love ' + this.label;
//}
//for (var i = 0; i < 4; ++i)
  //menu2.items[i].click = flip;


//var colors = [ '#000000', '#FF0000', '#00FF00' , '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#C0C0C0', '#FFFFFF' ];
//function changecolor() {
  //document.getElementById('area-3').style.backgroundColor = this.label;
//}

//var menu3 = new Menu();
//for (var i = 0; i < colors.length; ++i)
  //menu3.append(new MenuItem({ label: colors[i], click: changecolor }));


//document.getElementById('area-1').addEventListener('contextmenu', function(ev) { 
  //ev.preventDefault();
  //menu1.popup(ev.x, ev.y);
  //return false;
//});

//document.getElementById('area-2').addEventListener('contextmenu', function(ev) { 
  //ev.preventDefault();
  //menu2.popup(ev.x, ev.y);
  //return false;
//});

//document.getElementById('area-3').addEventListener('contextmenu', function(ev) { 
  //ev.preventDefault();
  //menu3.popup(ev.x, ev.y);
  //return false;
//});


window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);
