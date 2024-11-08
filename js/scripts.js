$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    if ($("body").hasClass("page-" + "about")) {
      $('[data-page=' + "about" + ']').addClass('active');
    };

    if ($("body").hasClass("page-" + "contact")) {
      $('[data-page=' + "contact" + ']').addClass('active');
    };

	})(jQuery);
});