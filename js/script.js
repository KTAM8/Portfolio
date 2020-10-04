'use strict';

$(function () {
	// フェードイン
	$('#section1').css({ opacity: "0.0" }).animate({ opacity: "1.0" }, 1200);
	$('#section2').css({ opacity: "0.0" }).animate({ opacity: "1.0" },1400);
	
	// メニュー項目移動処理
	$('a[href^="#"]').click(function() {
		let speed = 400; // Scrolling Speed 
		let href= $(this).attr("href");
		let target = $(href == "#" || href == "" ? 'html' : href);
		let position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
    //ハンバーガーメニュー
    $('#humburger').click(function() {
		$(this).toggleClass('active');
	 
		if ($(this).hasClass('active')) {
			$('#drawer_menu').addClass('active');
			$('#fadeLayer').css("visibility", "visible" );
		} else {
			$('#drawer_menu').removeClass('active');
			$('#fadeLayer').css("visibility", "hidden");
		}
	});

	//600px以上の幅ではドロワーメニュー解除
	$(window).on("resize", function() {
		var w = $(window).width();
		if(w > 599) {

			$('#drawer_menu').toggleClass('active');			
			$('#drawer_menu').removeClass('active');
			$('#humburger').removeClass('active');
			$('#fadeLayer').css("visibility", "hidden");
		}
	});

	//navigation-bar固定
	let header = $('.header_nav');
	let wrapperBottom;
	$(window).on('scroll',function(){
		wrapperBottom = $('.top_wrapper').height();
		if($(window).scrollTop() > wrapperBottom){
			$(header).addClass('fixed');
		}
		else{
			$(header).removeClass('fixed');
		}
	});
});
