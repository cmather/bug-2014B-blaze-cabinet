
i18n.map('en', {
  animals: {
    turtle: 'turtle',
    butterfly: 'butterfly',
    snail: 'snail',
  },
  flower: 'flower',
  fruits: 'fruits',
  'fruits.pineapple': 'pineapple',
});

i18n.map('pl', {
  animals: {
    turtle: 'żółw',
    butterfly: 'motyl',
    snail: 'ślimak',
  },
  flower: 'kwiat',
  fruits: 'owoce',
  'fruits.pineapple': 'ananas',
});

i18n.map('fr', {
  animals: {
    turtle: 'tortue',
  },
  flower: 'fleur',
  'fruits.pineapple': 'ananas',
});


Meteor.startup(function() {
  i18n.setDefaultLanguage('en');
  i18n.setLanguage('en');
  // i18n.showMissing('[no translation for "<%= label %>" in <%= language %>]');
});

Template.justI18n_demo.events({
  'click .justI18n_demo_flag': function(e, t) {
    i18n.setLanguage($(e.target).data('language'));
  },
});

Template.justI18n_demo.current = function(x) {
  return x === i18n.getLanguage();
};

