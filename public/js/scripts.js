$(document).ready(function(){
	(function ($) {

		 $(document).foundation();

		setInterval(function(){ 
			$(".suite-animated").toggleClass('suite-animated-milkyway');
			$(".suite-animated").toggleClass('suite-animated-andromeda'); 
		}, 5000);

		$('.showVideo').click( function() {
			var videoSRC = $(this).attr("data-video"),
			videoSRCauto = videoSRC + '?autoplay=1';
			$('#videoModal .responsive-embed iframe').attr('src', videoSRCauto);

			$(document).on(
			  'closed.zf.reveal', '[data-reveal]', function () {
			    $('#videoModal .responsive-embed iframe').attr('src', videoSRC);
			  }
			);
		});

	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){

      });
    } // End if
  });

  $(".has-tooltip").hover(
  	function() {
  		$(this).find(".tooltip").addClass('show');
  	}, function() {
  		$(this).find(".tooltip").removeClass('show');
  	}
  );

	})(jQuery);
});
