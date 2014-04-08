

(function($) {
  
  var discCss = {
    'overflow': 'hidden',
  };

  var labelCss = {
    'position': 'absolute',
    'display': 'block',
    'left': '50%',
    'width': '100%',
    'height': '50%',
    // 'background': 'rgba(0,0,0,0.125)',
  };

  var labelTopCss = {
    'top': '0px',
    'transform-origin': 'bottom left',
  };
  var labelBottomCss = {
    'bottom': '0px',
    'transform-origin': 'top left',
  };

  $.fn.topOrBottomArc = function(top, selector, options) {
    var disc = this;
    disc.css(discCss);
    var label = disc.children(selector).first();
    label.css(labelCss).css( (top) ? labelTopCss : labelBottomCss );

    var h = label.width();
    var a = 180 * 12 / (Math.PI * h)
    var aa = 2 * a;
    if(!top) {
      a = -a;
      aa = -aa;
    }

    label.lettering();
    var letters = label.find('span');
    var lettersCount = letters.get().length;
    letters.each(function(idx, letter) {
      $(letter).css({
        'position': 'absolute',
        // 'outline': '1px solid rgba(255,0,0,0.25)',
        'width': '20px',
        'left': '-10px',
        'top': '0px',
        'transform-origin': (top) ? 'bottom center' : 'top center',
        'height': (h/2) + 'px',
        'line-height': (top) ? '18px' : (h - 18) + 'px',
        'transform': 'rotate('+(idx*aa)+'deg)',
      });
    });

    var angle = (options && options.angle) || 0;
    var angle = Math.floor((-(lettersCount-1)*a) + angle);

    label.css({
      'transform': 'rotate('+ angle +'deg)',
    });
  };

  $.fn.topArc = function(selector, options) {
    this.topOrBottomArc(true, selector, options);
  };

  $.fn.bottomArc = function(selector, options) {
    this.topOrBottomArc(false, selector, options);
  };

})(jQuery);




