var parallax  = 3;
$(document).ready(function () {
	$(document).scroll(function () {

		s = $(document).scrollTop();
		/* Efecto parallax */
		$(document).scroll(function () {
			s = $(document).scrollTop();
			$(".imgBack").css("top", Math.round(s/parallax)  + "px");
			var newheight =  parseInt($("textoFront").css("height").replace("px","")) - Math.round(s/3);	
			$(".imgBack").css("height", newheight + "px" );
		});

	});
});