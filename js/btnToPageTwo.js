  $('.btnToPageTwo').click(function(e) {
          
          var btnPageTwogogo = null;
          clearInterval(btnPageTwogogo);
           btnPageTwogogo = setTimeout(function(){
            
           
            //控制圆点
          $('.point li').eq(1).addClass('current').siblings().removeClass('current');
          //如果想用滚动屏幕的同时添加特殊类名 也要在滚动事件里面添加 因为只要page盒子拥有了特殊的current 它就可以实现动画效果
          $('.con .page').eq(1).addClass('current').siblings().removeClass('current');
          $('.nav-in ul li').eq(1).children('span').stop().animate({'bottom':'0','opacity':'0.8'},300);
          $('.nav-in ul li').eq(1).siblings().children('span').stop().animate({'bottom':'-80','opacity':'0.5'},300); 
          //滚动屏幕
            $('.con').css('transform','translateY(-100%)'); 
          },150);
          $('.nav').addClass('cur');  
          
           num = 1;
          
    });