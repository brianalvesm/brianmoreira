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

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 2500, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    $('.has-tooltip').hover(
    	function() {
    		$(this).find('.tooltip').addClass('show');
    	}, function() {
    		$(this).find('.tooltip').removeClass('show');
    	}
    );

    $('.item figure').click(function() {
      $(this).toggleClass('figcaption');
    });

    $('.item figure').mouseleave(function() {
      $(this).removeClass('figcaption');
    });

	})(jQuery);
});
