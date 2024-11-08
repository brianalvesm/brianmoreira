$("#header").load("../header.html"); 
$("#footer").load("../footer.html");

$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    if ($("body").hasClass("page-illustration")) {
      $('.nav-illustration').addClass('active');
    };

    if ($("body").hasClass("page-about")) {
      $('.nav-about').addClass('active');
    };

    if ($("body").hasClass("page-contact")) {
      $('.nav-contact').addClass('active');
    };

	})(jQuery);
});