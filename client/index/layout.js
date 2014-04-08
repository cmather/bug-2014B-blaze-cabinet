Template.layout.bulbs = function() {
  return bulbs;
};

Template.layout.bulbActive = function() {
  return this.name === Session.get('bulb');
};

Template.layout.rendered = function() {
  $('.layoutHeaderBubble').each(function(idx, bubble) {
    $(bubble).bottomArc('.layoutHeaderBubbleLabel', {
      angle: $(bubble).data('a'),
    });
  });

  $('.layoutMenu').affix({
    offset: {top: 200},
  });

  // $('.layoutMenuCircle').bottomArc('.layoutMenuCircleLabel');
};




Template.layout.events({
  'click .layoutMenuItem, tap .layoutMenuItem': function(e, t) {
    var href = $(e.target).data('href');
    if(href) location.hash = '#' + href;
  },
});






