	$(function(){
		var timer01 = null;
		var num = 0;
		var myTimer = function(){
			$('.main li').eq(num).fadeOut();
			
			num++;
			if(num > 8){
				num = 0;
			}
			$('.main li').eq(num).fadeIn();	
			$('.main-s li').eq(num).stop().animate({'opacity':'1'},300).siblings().stop().animate({'opacity':'0.5'},300);
		};
		$('.main-s li').hover(function(e) {
            clearInterval(timer01);
			$(this).stop().animate({'opacity':'1'},300).siblings().stop().animate({'opacity':'0.5'},300);
        },function(){
			timer01 = setInterval(myTimer,3000)	
			$(this).stop().animate({'opacity':'0.5'},300)
			$('.main-s li').eq(num).stop().animate({'opacity':'1'},300).siblings().stop().animate({'opacity':'0.5'},300);
		});
		$('.main li:first').show()
		$('.main-s li:first').stop().animate({'opacity':'1'},0).siblings().stop().animate({'opacity':'0.5'},0)
		timer01 = setInterval(myTimer,3000)	
		$('.main-s li').click(function(e) {
            
			$('.main li').eq(num).fadeOut();
			num = $(this).index();
			$('.main-s li').eq(num).stop().animate({'opacity':'1'},300).siblings().stop().animate({'opacity':'0.5'},300);
			$('.main li').eq(num).fadeIn()
        });
	})
//备用普通呼吸轮播图

	
	