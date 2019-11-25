$(document).ready(function(){
	$(window).scroll(function(evet) {
		let s=$(this).scrollTop();
		let w=$(this).outerWidth();
		let h=$('.content').outerHeight();
		let h_b=$('.parallax').outerHeight();
		let p = s/h*100;
		let p_b = s/h_b*100;
		let t = 1-1/1000*p_b;

		let z_1 = 1+(w/10000*p_b);
		$('.parallax__fog').css('transform','scale('+z_1+')');
		$('.parallax__fog').css('opacity', t);

		let z_2 = 1+(w/500000*p);
		if (z_2 >= 1.2) {
			return z_2 = 1.2;
		}
		$('.parallax__montain--1').css('transform','scale('+z_2+')');

		let hr=w/2000*p_b;
		let z_3=1+(w*0.000005*p_b);
		$('.parallax__montain--2').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');


		let hr_2=w/1500*p_b;
		let z_4=1+(w*0.00001*p_b);
		$('.parallax__montain--3').css('transform','translate3d('+hr_2+'px,0,0) scale('+z_4+')');


	});
});