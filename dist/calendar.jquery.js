/*! Calendar.js v2.8.0 | (c) Bunoon | GNU AGPLv3 License */
(function($) {
    $.fn.calendarJs = function(options) {
      var instances = [];
      this.each(function() {
        instances.push(new calendarJs(this, options));
      });
      return instances;
    };
  })(jQuery);