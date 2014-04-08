


Router.map(function () {

  var self = this;
  
  _.each(bulbs, function(bulb) {

    if(bulb.name === 'home') {
      self.route(bulb.name, {
        path: bulb.path || ('/' + bulb.name),
        template: bulb.camel,
        layoutTemplate: null,
        onBeforeAction: function() {
          window.scrollTo(0,0);
        },
      });
      return;
    }

    var yields = {};
    yields[bulb.camel + '_title'] = {to: 'title'};
    yields[bulb.camel + '_menu'] = {to: 'menu'};
    
    self.route(bulb.name, {
      path: bulb.path || ('/' + bulb.name),
      template: bulb.camel + '_content',
      layoutTemplate: 'layout',
      yieldTemplates: yields,
      onBeforeAction: function() {
        window.scrollTo(0,0);
        Session.set('bulb', bulb.name);
      },
      onStop: function() {Session.set('bulb', undefined);},
    });
  });

});

