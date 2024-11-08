$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    $("#header").load("../header.html"); 
    $("#footer").load("../footer.html"); 

    if ($("body").hasClass("page-about")) {
      $('.nav-about').addClass('active');
    };

    if ($("body").hasClass("page-contact")) {
      $('.nav-contact').addClass('active');
    };

	})(jQuery);
});