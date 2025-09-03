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

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });


    $('.owl-carousel').owlCarousel({
      items:1,
      center:true,
      loop:true,
      autoplay:true,
      autoplayTimeout:9999,
      margin:10,
      dots:true,
      nav:false
    });

	})(jQuery);
});