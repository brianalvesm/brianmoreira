$(document).ready(function(){
	(function ($) {

		$(document).foundation();

    function loadPartials() {

      $("#header").load("../header.html");
      $("#footer").load("../footer.html");

    };

    loadPartials();

    $('.pog').on("click", function() {
      $(this).toggleClass('flip');
    });

	})(jQuery);
});