$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    function loadPartials() {
      console.log("First Function start");

      $("#header").load("../header.html");
      $("#footer").load("../footer.html");

      console.log("First Function end");
    };

    function activeNav() {
      console.log("Second Function start");

      if ($("body").hasClass("page-illustration")) {
        $('.nav-illustration').addClass('active');
      };

      if ($("body").hasClass("page-about")) {
        $('.nav-about').addClass('active');
      };

      if ($("body").hasClass("page-contact")) {
        $('.nav-contact').addClass('active');
      };

      console.log("Second Function end");
    };

    loadPartials();

    setTimeout(activeNav, 1000);


	})(jQuery);
});