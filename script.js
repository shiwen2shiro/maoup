$(document).ready(function(){

	var height = $(window).height();

	ajustesIniciales();

	function ajustesIniciales(){
		$("#scrollDown").css({"margin-top": height - 110 + "px"});
	}



	$(window).scroll(function(){

		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if (scrollTop < height) {
			$("#bg").css({
				"-webkit-filter" : "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});
		}


		$('#logo').css({
			'transform' : 'translate(0px, '+ scrollTop /2 +'%)'
		});

		$('#dog').css({
			'transform' : 'translate(0px, -'+ scrollTop /5 +'%)'
		});



		if (scrollTop > $('#sticky-anchor').offset().top) {
			$('#name').addClass('sticky');
		} else {
			$('#name').removeClass('sticky');
		}




		if (scrollTop > $('#container').offset().top) {
			$('#name').css({
				'color' : 'black',
				'background-color': 'rgba(255,255,255,1)',
				'box-shadow': '.3px .3px 5px #888888'
			});
		} else {
			$('#name').css({
				'color' : 'white',
				'background-color': 'rgba(255,255,255,0)',
				'box-shadow': '0px 0px 0px #888888'
			});
		}



		if (scrollTop > $('#product').offset().top - $(window).height()) {
			$('#product').css({
				"background-position": "center -" + pixels * 2 + "px"				
			});

			var opacity = ( scrollTop - $('#product').offset().top +400 )/ ( scrollTop/3 );

			$('.black_bg').css({
				'opacity' : opacity
			});

		}


		if (scrollTop >= $('#good').offset().top) {
			$('#footer').css({
				'z-index' : '0'
			});
		} else {
			$('#footer').css({
				'z-index' : '-3'
			});
		}



	});




	$(window).bind('scroll', function() {

	     if ($(window).scrollTop() > 100) {
	         $('.arrow').fadeOut("slow");
	     }
	     else {
	         $('.arrow').fadeIn();
	     }
	});

	

});













