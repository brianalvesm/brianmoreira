$(document).ready(function(){
	(function ($) {

		setInterval(function(){ 
			$(".suite-animated").toggleClass('suite-animated-milkyway');
			$(".suite-animated").toggleClass('suite-animated-andromeda'); 
		}, 5000);

	})(jQuery);
});
