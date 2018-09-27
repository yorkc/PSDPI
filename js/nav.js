$(function(){
	var timer01 = null;
	var num = 0;
	var logoSnum = 1;
	function resCu(){
		$('.nav-in ul li').eq(num).children('span').stop().animate({'bottom':'0','opacity':'0.8'},300);
		$('.nav-in ul li').eq(num).siblings().children('span').stop().animate({'bottom':'-80','opacity':'0.5'},300);	
	}
	$('.nav-in h1 a').hover(function(e) {
		
		$(this).parent().parent().children('span').stop().slideDown();
		clearInterval(timer01);
		timer01 = setInterval(function(){
			$('.logoS img').eq(logoSnum).fadeOut();
			logoSnum++;	
			if(logoSnum > 1){
			logoSnum = 0;	
			}
			$('.logoS img').eq(logoSnum).fadeIn()
		},2000)
	},function(){
		$(this).parent().parent().children('span').stop().slideUp();
		clearInterval(timer01);
		timer01 = null;
	});
	$('.nav-in ul li').hover(function(e) {
		$(this).children('span').stop().animate({'bottom':'0','opacity':'0.8'},300);
	},function(){
		$(this).children('span').stop().animate({'bottom':'-80','opacity':'0.5'},300);
		resCu();
	});	
	
	// $('.nav').hover(function(e) {
 //        $('.nav').stop().fadeTo(300,0.8);
	// },function(){
	// 	$('.nav').stop().fadeTo(300,0.6);
 //    });
	$('.nav-in ul li').eq(num).children('span').stop().animate({'bottom':'0','opacity':'0.8'},300);
	//$(window).scroll(function(e) {
		//当窗口高度大于0的时候透明度减弱否则加强
		//if($(window).scrollTop() > 0){
			
			//$('.nav').stop().fadeTo(300,0.5);
			
		//}else{
			//$('.nav').stop().fadeTo(300,0.8);
			
		//}
	//});
	
			
})