
bulbs = [{ 
    name: 'home',
    path: '/',
    x: -50,
    y: 55,
    s: 100,
    a: -45,
    icon: 'home',
    fs: 36,
  }, {
    name: 'just-i18n',
    x: 190,
    y: -20,
    s: 80,
  }, 
];


var camel = function(string, first, join) {
  var array = string.split('-');
  for (var i = first; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }
  return array.join(join);
};

_.each(bulbs, function(bulb) {
  bulb.camel = camel(bulb.name, 1, '');
  bulb.human = camel(bulb.name, 0, ' ');
  bulb.lh = bulb.s - 36;
});



