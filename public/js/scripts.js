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

	})(jQuery);
});
