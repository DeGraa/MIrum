const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}


$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$(".sidebar").addClass("sticky");
			$(".goTop").fadeIn();
		}
		else {
			$(".sidebar").removeClass("sticky");
			$(".goTop").fadeOut();
		}
	});


	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,	
		
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
	});

	$('.tabs-btn').click(function(){
		$(this).toggleClass("active");
	  });
});

let element = document.getElementById('phone');

let maskOptions = {
	mask: '+7(000)000-00-00',
	lazy: false
}

let mask = new IMask(element, maskOptions);




new WOW().init();
