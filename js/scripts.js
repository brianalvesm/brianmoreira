$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    if ($("body").hasClass("page-about")) {
      $('.nav-about').addClass('active');
    };

    if ($("body").hasClass("page-contact")) {
      $('.nav-contact').addClass('active');
    };

	})(jQuery);
});