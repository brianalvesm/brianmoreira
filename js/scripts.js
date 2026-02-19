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

    $(function () {
      var images = ['tower-dragon-1.png', 'tower-dragon-2.png', 'bears-bakery-1.png', 'bears-bakery-2.png', 'fantasy-autumn-1.png', 'fantasy-autumn-2.png', 'pirate-ship-1.png', 'pirate-ship-2.png', 'future-me-1.png', 'future-me-2.png', 'future-me-3.png', 'oddi.png', 'snowman.png'];
      $('.contact-profiles').css({
        'background-image': 'url(../images/profiles/' + images[Math.floor(Math.random() * images.length)] + ')'
      });
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