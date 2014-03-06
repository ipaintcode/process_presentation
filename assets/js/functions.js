// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	var colors = [
		"#333333",
		"#E86214",
		"#25253B",
		"#E29900",
		"#1E456E",
		"#27626D",
		"#A4003E"
	], 
	lockNav = false,
	currKey = undefined;
	
	$('nav li a').each(function(index) {
		$(this).css('background', colors[index]);
	});
	
	$('.main section').each(function(index) {
		$(this).css('background', colors[index]);
	});
	
	function goToByScroll(val, speed) {
		console.log(val)
		$('body').stop().animate({
			scrollTop: val
		}, speed || 200);
	}

	$('nav li a').click(function(e) {
		e.preventDefault();
		var id = $(this).attr('href');
		var tAnchor = $(id).offset().top;
		goToByScroll(tAnchor, 1000);
	});
	
	$('nav li').hover(function() {
		var tW = $(this).find('span').width();
		$(this).find('a').stop().delay(100).animate({width: tW+80}, 200);
		$(this).find('strong').stop().delay(100).animate({opacity: .3}, 200);
		$(this).find('span').stop().delay(100).animate({left: 70}, 200);
	}, function() {
		$(this).find('a').stop().animate({width: 32}, 300);
		$(this).find('strong').stop().delay(200).animate({opacity: 1}, 300);
		$(this).find('span').stop().animate({left: -150}, 300);
	});
	
	function emulateNavItem(ele) {
		var tW = $(ele).find('span').width();
		$(ele).find('a').stop().animate({width: tW+80}, 300);
		$(ele).find('strong').stop().animate({opacity: .3}, 300);
		$(ele).find('span').stop().animate({left: 70}, 300);
		setTimeout(function(){
			completed(ele)
		}, 1000);
	}
	
	function completed(ele) {
		$(ele).find('a').stop().animate({width: 32}, 200);
		$(ele).find('strong').stop().animate({opacity: 1}, 200);
		$(ele).find('span').stop().animate({left: -150}, 200, function() {
			lockNav = false;
		});
	}
	
	function setSectionHeight() {
		if($(window).height() > 850) {
			$('.main section').each(function(index) {
				$(this).css('height', $(window).height());
			});
		} else {
			$(this).css('height', 600);
		}
	}
	
	setSectionHeight();
	
	$(window).resize(function(event) {
		setSectionHeight();	
	});
	
	$(window).load(function() {
		$('.wrapper').animate({opacity: 1}, 300);
	});
	
	$(window).keypress(function(event) {
	
		event.preventDefault();
		var id,
			tAnchor;
		console.log(parseInt(event.keyCode) !== currKey)
		console.log(parseInt(event.keyCode)+":"+currKey)
		if (!lockNav && parseInt(event.keyCode) !== currKey) {
			switch(event.keyCode) {
			case 49:
				var id = $('nav li a').eq(0).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(0));
				currKey = 49;
				break;
			case 50:
				var id = $('nav li a').eq(1).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(1));
				currKey = 50;
				break;
			case 51:
				var id = $('nav li a').eq(2).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(2));
				currKey = 51;
				break;
			case 52:
				var id = $('nav li a').eq(3).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(3));
				currKey = 52;
				break;
			case 53:
				var id = $('nav li a').eq(4).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(4));
				currKey = 53;
				break;
			case 54:
				var id = $('nav li a').eq(5).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(5));
				currKey = 54;
				break;
			case 55:
				var id = $('nav li a').eq(6).attr('href');
				var tAnchor = $(id).offset().top;
				goToByScroll(tAnchor, 1000);
				emulateNavItem($('nav li').eq(6));
				currKey = 55;
				break;
			default:
			}
			lockNav = true;
		};
	});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/