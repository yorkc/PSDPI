
function grayWinImgLoad(){
        //var winWidth =$(window).width();
        var timer07 = null;
     clearInterval(timer07);
     timer07 = setTimeout(function(){
      $('.grayPage').empty();
         $('.grayPage').load("ajaxGrayWin1210.html #grayList");


    },3000);
};

$(function(){
// function fuckyou(){
//   var openFirebug = confirm("是否需要打开页面调试器?")
// if( openFirebug == true ){
//   alert('由于你的诚实,对方并不想打开页面调试器,并准备关闭你的页面！！');
//   window.close(); //关闭当前窗口(防抽)
//      window.location="about:blank"; //将当前窗口跳转置空白页
// }else{
//   alert('Yorkchan个人设计师网站,爱好绘画,平面设计,ui设计,也是位前端菜鸟。欢迎各位一起学习交流。请尊重作者劳动成果,切勿窃取盗用。');
//   return false;
// };
//       
// }
//   function ck() {
//     console.profile();
//     console.profileEnd();
//     //我们判断一下profiles里面有没有东西，如果有，肯定有人按F12了，没错！！
//     if(console.clear) { console.clear() };
//                         if (typeof console.profiles =="object"){
//     return console.profiles.length > 0;
//                         }
// }
// function hehe(){
// if( (window.console && (console.firebug || console.table && /firebug/i.test(console.table()) )) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)){
//   fuckyou();
// }
// if(typeof console.profiles =="object"&&console.profiles.length > 0){
// fuckyou();
// }
// }
// hehe();
// window.onresize = function(){
// if((window.outerHeight-window.innerHeight)>30)
// //判断当前窗口内页高度和窗口高度，如果差值大于200，那么呵呵
//    fuckyou();
// }




console.log("         0");
console.log("         0101        01010");
console.log("   0101  010101010101010101");
console.log(" 010101010   1 0101010101010");
console.log("   010101010101010101010101");
console.log("           010101010101010    01010");
console.log("            01010   101010 1010100101");
console.log("                   0101011010101010100");
console.log("                  0101010101010 01010101");
console.log("                0101010101010   101 01010");
console.log("                010101010101010101  01010");
console.log("                 01010101010101010101010");
console.log("                  01010101010101010101");
console.log("                    01010101010101");
console.log("    01     0         101");
console.log("    010  101  01    0              10");
console.log("     010101 010101 010101 010    01010");
console.log("       010  10   01010101010    10");
console.log("       01    01010 10 1010 101010 10101");
console.log("   Design and Develop by Yorkchan!Enjoy!");
console.log("新加入功能如下：");
console.log("                1.键盘上下键翻页，鼠标按住左键拖拽，平板电脑触摸；");
console.log("                2.打开setting菜单有更多功能如更换主题，音乐播放器，qq即时聊天等等；");
console.log("                3.手机摇一摇可换主题；");
console.log("                4.首页重新设计；");
 //加载进度条；；
// function progress(){
//   var allImgArr = $("img");
// $("#progress").stop().css({ "width": 0 }, 0).fadeIn();
//             allImgArr.data("count", 0);
//             allImgArr.load(function () {
//                 allImgArr.data("count", allImgArr.data("count") + 1);
//                 var percent = allImgArr.data("count") / allImgArr.length * 100 + "%";
//                 $("#progress").stop(true, false).animate({ "width": percent }, 800);
//             });
//             var readyTimer = setInterval(function () {
//                 if (window.document.readyState == "complete") {
//                     clearInterval(readyTimer);
//                     $("#progress").stop(true, false).animate({ "width": "100%" }, 800);
//                     setTimeout(function () {
//                         $("#progress").fadeOut();
//                     }, 1200);
//                 }
//             }, 500);
// }
// progress();


function checkMobile() {
    var pda_user_agent_list = new Array("2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer", "Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990", "MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia", "Opera Mini", "Opera Mobi", "Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet", "SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link", "Windows CE", "WinWAP", "Androi", "iPhone", "iPod", "iPad", "Windows Phone", "HTC");
    var pda_app_name_list = new Array("Microsoft Pocket Internet Explorer");

    var user_agent = navigator.userAgent.toString();
    for (var i = 0; i < pda_user_agent_list.length; i++) {
        if (user_agent.indexOf(pda_user_agent_list[i]) >= 0) {
            return true;
        }
    }
    var appName = navigator.appName.toString();
    for (var i = 0; i < pda_app_name_list.length; i++) {
        if (user_agent.indexOf(pda_app_name_list[i]) >= 0) {
            return true;
        }
    }

    return false;
}


//加载进度条；

function progress2(){
var allImgArr = $("img");
$("#progress").stop().css({ 'width': '0' }, 0).show();
    allImgArr.data("count", 0);
    allImgArr.load(function () {
        allImgArr.data("count", allImgArr.data("count") + 1);
        var percent = allImgArr.data("count") / allImgArr.length * 100 + "%";
        $("#progress").stop(true, false).animate({ "width": percent }, 800);
    });
    var readyTimer = setInterval(function () {
        if (window.document.readyState == "complete") {
            clearInterval(readyTimer);
            $("#progress").stop(true, false).animate({ "width": "100%" }, 800);
            setTimeout(function () {
                $("#progress").fadeOut(300);
            }, 1000);
        }
    }, 500);
};
  //手机欢迎动画；
  // function moblieTit(){
  //   if($(window).width() <= 640 && num == 0){
  //   var s = 'Welcome to psdpi.com!';
  //   var con = $('.mobileTit');
  //   var index = 0;
  //   var length = s.length;
  //   var tId = null;
  //     con.text('');
  //      clearInterval(tId);
  //     tId=setInterval(function(){
  //       con.append(s.charAt(index));
  //       if(index++ === length){
  //       clearInterval(tId);

  //       }
  //     },100);

  // }
  // };

  //视觉差开关；
  // function parallaxIf(){
  //   if(num == 0 ){
  //     $('#home').parallax('enable');
  //   }else if(!num == 0 || $('.setting').hasClass('cur')){
  //     $('#home').parallax('disable');
  //   }
  // }
  //删除视觉差插件产生的额外body
//$('body').eq(0).remove();
// 		//圈圈随机数；
// 	var num_arr = new Array(8);
// $.each(num_arr,function(index,val) {
//     num_arr[index] = Math.ceil(Math.random()*100);
// });
//     function bgCcposition(par1,par2,par3){
//        $('.bgCcposition'+par1+'').css({'top':''+num_arr[par2]+'%','left':''+num_arr[par3]+'%'});
//     };
//     bgCcposition(1,0,1);
//     bgCcposition(2,2,3);
//     bgCcposition(3,4,5);
//     bgCcposition(4,6,7);
    function resWorklistSpanlineHeight(){

        var uiWorklistSpanheight = $('.uiWorklistSpan').parent().innerHeight();
        var webWorklistSpanheight = $('.webWorklistSpan').closest('li').innerHeight();
            //alert(uiWorklistSpanheight);
            //alert(webWorklistSpanheight);
        $('.uiWorklistSpan').css('line-height',''+uiWorklistSpanheight+'px');
        $('.webWorklistSpan').css('line-height',''+webWorklistSpanheight+'px');

    };
    $('.workCon').mouseenter(function(event) {
      resWorklistSpanlineHeight();
    });
    $('.workCon').mousewheel(function(event,delta){
      if(delta == -1 && $('.uiWork').hasClass('cur')){
        $('.toggleLong').click();
        return false;
      }else if(delta == 1 && $('.webWork').hasClass('cur')){
        $('.toggleLong').click();
        return false;
      }else{
        return;
      }

    });
    //留言板时间冒泡
    // $('.contactRight').mousewheel(function(event,delta){
    //   event.stopPropagation();

    // })

    function btnToPageTwoRes(){
        if(num == 0){
                    var btnToPageTwoTimer = null;
                    clearInterval(btnToPageTwoTimer);
                    btnToPageTwoTimer = setTimeout(function(){
                        $('.btnToPageTwo').addClass('animationRes');
                    },4000);
                }else{

                        $('.btnToPageTwo').removeClass('animationRes');

                };
    };
btnToPageTwoRes();
//第一页到第二页按钮；
   function btnToPageTwo(){
  $('.btnToPageTwo').click(function(e) {
          if(!$('.setting').hasClass('cur')){
          var btnPageTwogogo = null;
          clearInterval(btnPageTwogogo);
           btnPageTwogogo = setTimeout(function(){


            //控制圆点
          $('.point li').eq(1).addClass('current').siblings().removeClass('current');
          //如果想用滚动屏幕的同时添加特殊类名 也要在滚动事件里面添加 因为只要page盒子拥有了特殊的cur 它就可以实现动画效果
          $('.con .page').eq(1).addClass('current').siblings().removeClass('current');

          //滚动屏幕
            $('.con').css('transform','translate3D(0,-100%,0)');
          },150);
          $('.nav,.point').addClass('cur');
          num = 1;
          resCu();
          page2BtnRes();
          mobileCd();
          workListRes();
        }else{
          settingAfter();
          return false;
        }

    });
}
    //去第二页按钮动画延迟

    //按钮动画延迟
    function page2BtnRes(){
        if(num == 1){
                    var page2BtnResTimer = null;
                    clearInterval(page2BtnResTimer);
                    page2BtnResTimer = setTimeout(function(){
                        $('.toggleLong').addClass('animationRes');
                    },500);
                }else{
                    var page2BtnResTimerMove = null;
                    clearInterval(page2BtnResTimerMove);
                    page2BtnResTimerMove = setTimeout(function(){
                        $('.toggleLong').removeClass('animationRes');
                    },500);
                };
    };
    //缓动递增延迟；
    // function animationRes(className,delayValue,addValue){
    //   var resLength = $(className).length;

    //   for (var i = $(className).length - 1; i >= 0; i--) {
    //     var value = i * addValue + delayValue;
    //     $(className).eq(i).css('transition-delay',''+value+'s');

    //   };
    // };
    // animationRes('.uiWork li',0.5,0.1);
	function page4AnimationRes(){
         if(num == 3){
                    var page4AnimationResTimer = null;
                    clearInterval(page4AnimationResTimer);
                    page4AnimationResTimer = setTimeout(function(){
                        $('.contactCon li').addClass('animationRes');
                    },500);
                }else{
                        $('.contactCon li').removeClass('animationRes');

                };
    };
    function settingAnimationRes(){
         if($('.setting').hasClass('cur')){
                    var settingResTimer = null;
                    clearInterval(settingResTimer);
                    settingResTimer = setTimeout(function(){
                        $('.themeGroup li').addClass('animationRes');
                    },500);
                }else{
                        $('.themeGroup li').removeClass('animationRes');

                };
    };
    //判断手机是否手机，光碟位置
    function mobileCd(){
        var winWidth =$(window).width();
        if(winWidth <= 640 && num == 0 || $('.setting').hasClass('cur')){
            $('.cdBot').addClass('mobile');
            $('.cdBot').removeClass('small');
            //修复光碟中间层锯齿；
            //$('.cdCenOut').fadeIn(1000);
           $('.cdBar').addClass('mobile');

        }else if(num >= 0){
            $('.cdBot').addClass('small');
            //$('.cdCenOut').fadeOut(300);
            $('.cdBar').removeClass('mobile');
        }

    };
    //第三页右面内容过渡动画还原
    function aboutRightRes(){
         if(num == 2){
                    var aboutRightResTimer = null;
                    clearInterval(aboutRightResTimer);
                    aboutRightResTimer = setTimeout(function(){
                        $('.aboutRight li').addClass('animationRes');
                        $('.aboutLeft li').addClass('animationRes');
                    },500);
                }else{
                        $('.aboutRight li').removeClass('animationRes');
                    $('.aboutLeft li').removeClass('animationRes');

                };
    }
    //第二页内容过渡动画还原
    function workListRes(){
         if(num == 1){
                    var workListResTimer = null;
                    clearInterval(workListResTimer);
                    workListResTimer = setTimeout(function(){
                        $('.uiWork li').addClass('animationRes');
                    },500);
                }else{
                         $('.uiWork li').removeClass('animationRes');

                };
    }

//grayWin图片延迟加载；
// function grayWinImgLoadClick(imgdata){
//   if($('li[imgdata='+imgdata+']').length < 1 ){
//     $.ajax({
//           url: 'ajaxGrayWin1210.html',
//           type: 'Get',
//           data: 'imgData',
//           dataType: 'html',
//           success:function(data){
//             $(data).find('li[imgdata='+imgdata+']').appendTo('#grayList');
//           }
//         });
//   }

// }


        if(checkMobile()){


        }else{
          //因为移动端浏览器自带进度条；
          progress2();


     };
      //图片延迟加载
        grayWinImgLoad();
     //判断音乐运行状态；
  function musicIf(){
    if(!$('.cdBot').hasClass('played')){
      $('#bgmusic').get(0).pause();
      $('#bgmusic').removeClass('played');
      $('.cdBot,.cdBar').removeClass('played');

    }else{
      $('#bgmusic').get(0).play();
      $('#bgmusic').addClass('played');
      $('.cdBot,.cdBar').addClass('played');
    }
  } ;
  //点击方块换主题
   function themeChange (themeContent,musicName){
      $('.con,.nav,.cdBot,.cdBar').stop().addClass('blur');
      //$('.page.one').children().stop().remove();
      $('.loading').html('<i class="fa fa-spinner fa-spin" style="margin:0 10px 0 0;"></i>加载中...').stop().removeClass('unCur').addClass('cur');


      // $('.themeStyle').load(themeStyle);
      // $('.themeContent').load(themeContent,function(){
      //  ;

      // });

      $.ajax({
        url: themeContent,
        type: 'GET',
        dataType: 'html',
        success:function(data){
          $('.themeContent').html(data);
          $('#a').html('');
           var loadingTimer = null;
                clearInterval(loadingTimer);
                loadingTimer = setTimeout(function(){
                  $('.loading').text('加载完成...').delay(300).stop().removeClass('cur').addClass('unCur');
                  $('.con,.nav,.cdBot,.cdBar').stop().removeClass('blur');
              }, 2000);
               $('#bgmusic').attr('src',musicName);
               musicIf();
               $('.themeGroup li').eq(themeNum).stop().addClass('cur').siblings().stop().removeClass('cur');
        },
        error:function(){
          var loadingTimer = null;
                clearInterval(loadingTimer);
                loadingTimer = setTimeout(function(){
                  $('.loading').text('加载失败...').delay(300).stop().removeClass('cur').addClass('unCur');
                  $('.con,.nav,.cdBot,.cdBar').stop().removeClass('blur');
              }, 2000);
        }
      });

       progress2();


   }
        $('.btnMenu').click(function(event) {
            if($('.btnSettingMobile2').hasClass('cur')){
                $('.btnSettingMobile2').removeClass('cur').addClass('unCur');
            }else{
                $('.btnSettingMobile2').removeClass('unCur').addClass('cur');
            }
            $('.page.one').click(function(event) {
              if($('.btnSettingMobile2').hasClass('cur')){
                $('.btnSettingMobile2').removeClass('cur').addClass('unCur');
            }else{
                return;
            }
            });
        });




   //page one setting 之后复原
   function settingAfter(){
    //设置状态下的光碟
    //parallaxIf();
     $('.cdBot,.cdBar').removeClass('settingState');
     goAfter();
     $('.setting').removeClass('cur');
     $('.page').removeClass('settingState current preview');
      $('.point').removeClass('settingState');
      $('.page.one').addClass('current');
      bindEvent(document);
      mobileCd();
    $('.btnSettingMobile').removeClass('cur');
   }
//page one
    var timerInOut = null;
    var textInout = 0;
    var timerInOut2 = null;
    var textInout2 = 0;
  function inOut(){
   clearInterval(timerInOut);
   clearInterval(timerInOut2);
    if($(window).width() <= 640 && num == 0){
        // 翻滚特效（调试中）
      timerInOut = setInterval(function(){

          if (textInout >= $('.mobileTit u:eq(0) i').length+20) {

            textInout = 0;
          }
          if ($('.mobileTit u:eq(0) i').eq(textInout).hasClass('in')) {
            $('.mobileTit u:eq(0) i').eq(textInout).addClass('out').removeClass('in');
          }else{
            $('.mobileTit u:eq(0) i').eq(textInout).addClass('in').removeClass('out');
          };

          textInout++;


      },100);

      timerInOut2 = setInterval(function(){

          if (textInout2 >= $('.mobileTit u:eq(0) i').length+20) {

            textInout2 = 0;
          }
          if ($('.mobileTit u:eq(1) i').eq(textInout2).hasClass('in')) {
            $('.mobileTit u:eq(1) i').eq(textInout2).addClass('out').removeClass('in');
          }else{
            $('.mobileTit u:eq(1) i').eq(textInout2).addClass('in').removeClass('out');
          };

          textInout2++;


      },100);
    }else{
      clearInterval(timerInOut);
      clearInterval(timerInOut2);
    }
  }



   //滚动后需要执行
   function goAfter(){
    inOut();
    page2BtnRes();
    page4AnimationRes();
    mobileCd();
    aboutRightRes();
    workListRes();
    btnToPageTwoRes();
    //parallaxIf();
        //滚动屏幕
        var bfb = num * conHeight;//  '+bfb+'

                    $('.con').css('transform','translate3D(0,-'+bfb+'px,0)');

        //控制圆点
        $('.point li').eq(num).addClass('current').siblings().removeClass('current');
        //如果想用滚动屏幕的同时添加特殊类名 也要在滚动事件里面添加 因为只要page盒子拥有了特殊的cur 它就可以实现动画效果
        $('.con .page').eq(num).addClass('current').siblings().removeClass('current');
                //当前页的其他页添加模糊效果;
                //$('.con .page').eq(num).removeClass('blur').siblings().addClass('blur');
        resCu();
        if(num > 0){
          $('.toToptit').addClass('toToptitCur').delay(5000).fadeOut();
        }else {
          $('.toToptit').removeClass('toToptitCur');
        };
        if(num > 0){
          $('.nav').addClass('cur');
          $('.point').addClass('current');
        }else{
          $('.nav').removeClass('cur');
          $('.point').removeClass('current');
        };
   }

 if($(window).width() <= 640){
      //打字机特效；
      // var s = 'PSDPI';
      // var sCon = $('.mobileTit strong');
      // var sIndex = 0;
      // var sLength = s.length;
      // var sTId = null;
      // sCon.text('');
      //  clearInterval(sTId);
      // sTId=setInterval(function(){
      //   sCon.append(s.charAt(sIndex));
      //   if(sIndex++ === sLength){
      //   clearInterval(sTId);
      //     var b = '2015~2016';
      //     var bCon = $('.mobileTit b');
      //     var bIndex = 0;
      //     var bLength = b.length;
      //     var bTId = null;
      //     bCon.text('');
      //      clearInterval(bTId);
      //     bTId=setInterval(function(){
      //       bCon.append(b.charAt(bIndex));
      //       if(bIndex++ === bLength){
      //       clearInterval(bTId);
      //             var p1 = 'UI & WEB';
      //             var p1Con = $('.mobileTit p:eq(0)');
      //             var p1Index = 0;
      //             var p1Length = p1.length;
      //             var p1TId = null;
      //             p1Con.text('');
      //              clearInterval(p1TId);
      //             p1TId=setInterval(function(){
      //               p1Con.append(p1.charAt(p1Index));
      //               if(p1Index++ === p1Length){
      //               clearInterval(p1TId);
      //               var p2 = 'Design By Yorkchan';
      //                 var p2Con = $('.mobileTit p:eq(1)');
      //                 var p2Index = 0;
      //                 var p2Length = p2.length;
      //                 var p2TId = null;
      //                 p2Con.text('');
      //                  clearInterval(p2TId);
      //                 p2TId=setInterval(function(){
      //                   p2Con.append(p2.charAt(p2Index));
      //                   if(p2Index++ === p2Length){
      //                   clearInterval(p2TId);

      //                       }
      //                 },100);
      //               }
      //             },100);
      //           }
      //     },100);
      //   }
      // },200);

      // $('.designTit').html('Copyright&nbsp;©&nbsp;2016&nbsp;Yorkchan&nbsp;All&nbsp;Rights&nbsp;Reserved<br />粤ICP备15041735号');
  }else if($(window).width() > 640){
     //提示弹出；
  $('.prompt').addClass('cur');
  var promptTimer = null;
  clearInterval(promptTimer);
  promptTimer = setTimeout(function(){
    $('.prompt').removeClass('cur');
  },6000);
  }



		//定义页面序号
		var num = 0;
    //手机翻滚动画;
    inOut();
    //parallaxIf();
     btnToPageTwoRes();
		//页面加载完成之后 第一件事 就是把高度赋值给con盒子
		var conHeight = $(window).height();
		//alert(conHeight);  '+conHeight+'
		$('.con').css('height',''+conHeight+'px');
		//如果用户改变了窗口的大小 我们应该检测到 并且实时的把当前窗口的高度赋值给con
		$(window).resize(function(){
			conHeight = $(window).height();
			//alert(conHeight);  '+conHeight+'
			$('.con').css('height',''+conHeight+'px');
            //uiWorklistSpan修改lineheight；
            mobileCd();
            settingAfter();
            goAfter();
            resWorklistSpanlineHeight();
		});
		var timer01 = null;
        mobileCd();
		$('.page').mousewheel(function(event,delta){
			clearInterval(timer01);
			timer01 = setTimeout(function (){
				if(!$('.con').is(':animated')&& !$('.grayPage').is(':visible') && !$('.setting').hasClass('cur')){//如果con盒子还在移动 那么我们就不能让以下代码执行
//alert(delta);//经过测试 如果delta等于正1代表鼠标滚轮是向上滚动 否则-1就是是向下滚动(假如模态窗口显示就return false，否者屏幕滚动)
    				if(delta == -1 ){
    					num++;
    					if(num > 3){//判断极值
    						num = 3;//一定要根据产品经理的需求来写到底是恢复原点还是保留最大值
    					};
    				}else if(delta == 1 ){
    					num--;
    					if(num < 0){
    						num = 0;
    					};
    				}else{
              return false;
            };

             goAfter();
		  }

			},300);

		});
//第一页到第二页按钮；
	btnToPageTwo();
	//点击圆点控制滚动
	$('.point li,.navUl li,.toTop').click(function(e) {

       if(!$('.setting').hasClass('cur')){
        num = $(this).index();
        goAfter();
       }else{
        return false;
       }

    });

	function resCu(){
		$('.nav-in ul li').eq(num).children('span').stop().css({'transform':'translate3D(0,-80px,0)','opacity':'1'},300);
    $('.nav-in ul li').eq(num).siblings().children('span').stop().css({'transform':'translate3D(0,0px,0)','opacity':'0'},300);
	};
  //键盘事件；
$(document).keydown(function (event) {
    if(event.keyCode == 40 ||event.keyCode == 34){
      if(!$('.grayPage').is(':visible') && !$('.setting').hasClass('cur')){
         num ++;
          if(num > 3){//判断极值
                    num = 3;//一定要根据产品经理的需求来写到底是恢复原点还是保留最大值
                  };
          goAfter();

        }else{
          settingAfter();
          return false;
        };

    }else if(event.keyCode == 38 ||event.keyCode == 33 && !$('.grayPage').is(':visible') && !$('.setting').hasClass('cur')){
      if(!$('.grayPage').is(':visible') && !$('.setting').hasClass('cur')){
      num --;
      if(num < 0){
                num = 0;
              };
              goAfter();
      }else{
        settingAfter();
          return false;
        };
    }else if(event.keyCode == 123){
      alert('Yorkchan个人设计师网站,爱好绘画,平面设计,ui设计,也是位前端菜鸟。欢迎各位一起学习交流。请尊重作者劳动成果,切勿窃取盗用。');
    }else{
      return false;
    };


});
  //鼠标经过logo出现副logo；
 //  var timer01 = null;
 //  var logoSnum = 1;
	// $('.nav-in h1 a').hover(function(e) {
	// 	$(this).parent().parent().children('span').stop().slideDown(100);
	// 	timer01 = setInterval(function(){
	// 		$('.logoS img').eq(logoSnum).fadeOut();
	// 		logoSnum++;
	// 		if(logoSnum > 1){
	// 		logoSnum = 0;
	// 		}
	// 		$('.logoS img').eq(logoSnum).fadeIn()
	// 	},2000)
	// },function(){
	// 	$(this).parent().parent().children('span').stop().slideUp()
	// 	clearInterval(timer01);
	// 	timer01 = null;
	// });
	$('.nav-in ul li').hover(function(e) {
        //if(num < 1){return false};
		$(this).children('span').stop().css({'transform':'translate3D(0,-80px,0)','opacity':'1'},300);
    //$('.nav').stop().fadeTo(300,1);
	},function(){
        //if(num < 1){return false};
		$(this).children('span').stop().css({'transform':'translate3D(0,0px,0)','opacity':'0'},300);
    //$('.nav').stop().fadeTo(300,0.8);
		resCu();
	});
	$('.nav-in ul li').eq(num).children('span').stop().addClass('cur');
	//$(window).scroll(function(e) {
		//当窗口高度大于0的时候透明度减弱否则加强
		//if($(window).scrollTop() > 0){

			//$('.nav').stop().fadeTo(300,0.5);

		//}else{
			//$('.nav').stop().fadeTo(300,0.8);

		//}
	//});
	// function myFn(par1,par2){
	// 	$('.nav-in ul li a').eq(par1).click(function(e) {
 //        $('body,html').animate({'scrolltop':par2},200)
 //    });
	// };
	// myFn(0,0);
	// myFn(1,100);
	//导航结束
	//页面开始
  //

  $('body').addClass('ready');
	$('.con .page').eq(num).addClass('current').siblings().removeClass('current');

	//内容
		//$('.webWork').hide();
		$('.uiTit').addClass('clickTit');
		$('.toggleLong').click(function(e) {

        if($('.toggleLong').hasClass('clickBtn')){
				$('.toggleLong').removeClass('clickBtn');
				$('.uiTit').addClass('clickTit');
				$('.webTit').removeClass('clickTit');
				// $('.webWork').stop().fadeOut(300);
				// $('.uiWork').stop().fadeIn(300);
       resWorklistSpanlineHeight();
       $('.workCon').removeClass('right');
       $('.uiWork').addClass('cur').siblings().removeClass('cur');

			}else{
				$('.toggleLong').addClass('clickBtn');
				$('.uiTit').removeClass('clickTit');
				$('.webTit').addClass('clickTit');
				// $('.uiWork').stop().fadeOut(300);
				// $('.webWork').stop().fadeIn(300);
                 resWorklistSpanlineHeight();
                 $('.workCon').addClass('right');
                 $('.webWork').addClass('cur').siblings().removeClass('cur');
			}

        });
    $('.uiWorklist li').hover(function() {
         var winWidth =$(window).width();
         var grayImgNum = $(this).index;
          var lidata = $(this).attr('lidata');
        if(winWidth > 640){
            // $(this).siblings().children('img').stop().addClass('blur');
        $(this).addClass('hover');

        };
    //alert($(this).attr('liData'));
        // if (checkMobile()) {

        // }else{
        //   //hover就加载相应图片
        // grayWinImgLoadClick(lidata);
        // };
    }, function() {
         var winWidth =$(window).width();
        if(winWidth > 640){
           // $(this).siblings().children('img').stop().removeClass('blur');
        $('.uiWorklist li').removeClass('hover');
        };

    });
    $('.webWorklist li').hover(function() {
        // $(this).siblings().find('img').stop().addClass('blur');
        $(this).addClass('hover');
    }, function() {
       // $(this).siblings().children('a').children('img').stop().removeClass('blur');
        $('.webWorklist li').removeClass('hover');
    });
	$('.uiWorklist li').click(function(event) {
    if($('.uiWork').hasClass('cur')){
      unbindEvent(document);
      //防止graywin出来的时候背景层滑动;
      if (checkMobile()) {
        $('.con,.nav,.cdBot').fadeOut(300);
      };
      var uiWorkClickIndex = $(this).index();
      var lidata = $(this).attr('lidata');

    $('.grayPage').fadeIn();
        //卡逼$('.con').addClass('blur');
    $('.uiWorkbigImage[imgdata='+lidata+']').stop().fadeIn().siblings().fadeOut();
      if($('.uiWorkbigImage[imgdata='+lidata+']').children('img').height() < $(window).height()){
        $('.uiWorkbigImage[imgdata='+lidata+']').css('display','flex');
      }
    $('.grayPage').click(function(event) {
      $('.grayPage').fadeOut();
            //卡逼$('.con').removeClass('blur');
      $('.uiWorkbigImage').fadeOut();

      bindEvent(document);
      //防止graywin出来的时候背景层滑动;
      if (checkMobile()) {
        $('.con,.nav,.cdBot').fadeIn(300);
      };

    });
  }else{
    return false;
  }

	});
$('.paper li').click(function(event) {
    $(this).addClass('cur').removeClass('unCur').siblings().addClass('unCur').removeClass('cur');
    $('.page').click(function(event) {
      $('.paper li').removeClass('cur').addClass('unCur');
    });
     return false;
});
// $('.paper li a').click(function(event) {
//   window.location.href = 'image/1.jpg'
// });
	// $('.webWorklist li').click(function(event) {
	// 	var num = $(this).index();
	// 	$('.grayPage').fadeIn();
	// 	$('.webWorkbigImage').eq(num).fadeIn().siblings().fadeOut();
	// 	$('.grayPage').click(function(event) {
	// 		$('.grayPage').fadeOut();
	// 		$('.webWorkbigImage').fadeOut();
	// 	});
	// });
  //
  //
  //设置面板
$('.btnSetting,.btnSettingMobile').click(function(event) {
  //parallaxIf();
  if($('.setting').hasClass('cur')){
    //设置状态下的光碟；
    settingAfter();
    // if (checkMobile()) {


    //};
    // if($(window).width() <= 640 ){
    //    $('.cdBar').css('transition','all .25s ease-in-out 0s');
    // $('.cdBar').css({'opacity':'1','left':'50%'});
    //   };
  }else{
     if ($(window).width() <= 1380 || $(window).height() <= 768) {
      $('.con').css('transform','translate3D(500px,0,0)');
      $('.settingBoxBig.music').hide();
      $('.settingBoxBig.preview').insertAfter($('.settingBoxBig.theme'));
      if($(window).width() <= 640 ){
       $('.cdBot').addClass('small');
       $('.con').css('transform','translate3D(100%,0,0)');
       $('.con').addClass('settingState');
        $('.cdBar').removeClass('mobile');
        // $('.cdBar').css('transition','all .25s ease-in-out 0s');
        // $('.cdBar').css({'opacity':'0','left':'100%'});
      };
      $('.btnSettingMobile').addClass('cur');
    }else{
      $('.con').css('transform','translate3D(1000px,0,0)');
      $('.cdBot,.cdBar').addClass('settingState');
      $('.settingBoxBig.music').show();
       $('.settingBoxBig.preview').insertAfter($('.settingBoxBig.share'));
    };
     $('.setting').addClass('cur');
     $('.page').addClass('settingState');
     $('.page').removeClass('current preview');
      $('.point').addClass('settingState');
      $('.previewList li').removeClass('cur');
      //if (checkMobile()) {

    unbindEvent(document);

    //};
  }


 settingAnimationRes();

});

//判断setting个滚动条高
// $('.setting').scroll(function(event) {
//   if($('.setting').scrollTop() == 0){
//     alert(1);
//   }
// });

//按键预览
    $('.previewList li a').click(function(event) {
      var pageIndex = $(this).parent('li').index();
      $(this).parent('li').addClass('cur').siblings().removeClass('cur');
        var text = $(this).text()
        var index = 0;
        var length = text.length;
        var tId = null;
        var con = $('.previewBar');
         con.text('');
         clearInterval(tId);
        tId=setInterval(function(){
          con.append(text.charAt(index));
          if(index++ === length){
          clearInterval(tId);
      $('.page').eq(pageIndex).addClass('current preview').siblings().removeClass('current preview');
      }
    },200);
      });

  $('.page').click(function(event) {
    if($('.setting').hasClass('cur')){
    settingAfter();
      return false;
      }
  });

//点击方块换主题
var themeNum = 0;
  $('.themeGroup li,.themeList li').click(function(event) {
   themeNum = $(this).index();
    if(themeNum == 0){
      themeChange ('theme/themeOrange.html','sound/default/The Red Coronation.mp3');

  }else if(themeNum == 1){
      themeChange ('theme/themeZero.html','sound/zero/Before its too late.mp3');

  }else if(themeNum == 2){
      themeChange ('theme/themeFuture.html','sound/future/magnolia.mp3');
    $('#a').load('theme/canvas.html');
  }else if(themeNum == 3){
      themeChange ('theme/themePink.html','sound/pink/Peach Lady.mp3');

  }
  });

  //主题预设
//$('.themeGroup li').eq(3).click();
//摇一摇换主题
  if (window.DeviceMotionEvent){
    var speed = 25;
    //var audio = document.getElementById("shakemusic");
    //var openAudio = document.getElementById("openmusic");
    var x = t = z = lastX = lastY = lastZ = 0;
    window.addEventListener('devicemotion',
      function () {
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed) {
          //audio.play();
          setTimeout(function(){
            //audio.pause();
            //openAudio.play();
            var randomNum = parseInt(Math.random()*($('.themeGroup li').length -1));
            $('.themeGroup li').eq(randomNum).click();
          }, 500);
        };
        lastX = x;
        lastY = y;
      },false);

  };
  //随机主题；
//var randomNum = parseInt(Math.random()*($('.themeGroup li').length -1));
//$('.themeGroup li').eq(randomNum).click();


  //水波纹开关
  $('.btnWater').click(function(event) {
    if($('.btnWater').hasClass('cur')){
      $('.btnWater,.toggleWater').removeClass('cur');
      $('body').ripples('pause');
    }else{
      $('.btnWater,.toggleWater').addClass('cur');
      $('body').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      }).ripples('play');
    }
  });



       var startY = 0,        //触摸点
       endY = 0;

	     var _mouseDown = false,               //滑动事件是否开始
                        //当前页面的Index数
             //页面的高度
      $content=document.getElementById('con'),  //事件包裹的大标签
      $page=$content.getElementsByClassName('page'),                //事件切换的标签
      leng=4;                //切换标签的个数$page.length
            //touchstart事件
      function touchSatrtFunc(e) {

          $content.setAttribute('data-y',num*conHeight);
          //触摸开始时需要设置触摸点与滑动的距离为0。

                startY = 0;        //触摸点
                endY = 0;          //滑动的距离

          //因为绑定多个事件支持手机电脑、所以判断当前触发的效果而获取不同的值。
          if(e.type == 'touchstart'){
            var touch = e.targetTouches[0].pageY;
          }else{
            var touch = e.pageY||e.y;
          }
          _mouseDown = true;    //设置开启滑动事件
                var y = Number(touch); //页面触点Y坐标
          $('.con').css('transition','all 0s ease-in-out 0s');   //给父级加上class、使其在拖拽时添加content而覆盖原有的属性、
                //记录触点初始位置
                startY = y;

            }

            //touchmove事件，这个事件无法获取坐标
            function touchMoveFunc(e) {

                     e.preventDefault()  //阻止触摸时浏览器的缩放、滚动条滚动等


                    if(!$('.setting').hasClass('cur')&& !$('.grayPage').is(':visible')){
                            if(e.type == 'touchmove'){
                              var touch = e.targetTouches[0].pageY;
                            }else{
                              var touch = e.pageY||e.y;
                            }
                                  var y = Number(touch),
                              _top=$content.getAttribute('data-y');       //获取当前页面的data-y值

                                  endY = y;




                            //滑动过程中当前页面跟随滑动
                            if(_mouseDown==true){
                              //不加判断页面会报错；
                              //var fiveH = parseInt($('.five').height());
                              //限制最后可拉高度
                              var fiveH = 120;
                              if( startY - endY > 0&&-(endY-startY-_top) < 3*conHeight+fiveH){

                                //$content.style.WebkitTransform='translate3d(0,'+(endY-startY-_top)+'px,0)';
                                $content.style.transform='translate3d(0,'+(endY-startY-_top)+'px,0)';
                                if($(window).width() <= 640){
                                  $('.nav').removeClass('cur');
                                }
                              }else if(-(endY-startY-_top) >= 3*conHeight+fiveH){
                                //滑动到第5屏幕时候无法再滑动
                                //$content.style.WebkitTransform='translate3d(0,'-(3*conHeight+fiveH)+'px,0)';
                                $content.style.transform='translate3d(0,'-(3*conHeight+fiveH)+'px,0)';
                              }else if(-(endY-startY-_top) < 0 && num == 0){
                                //假如少于0不允许再向上滑动；
                                return false;
                                // $content.style.WebkitTransform='translate3d(0,'+(-startY+endY-_top)+'px,0)';
                                // $content.style.transform='translate3d(0,'+(-startY+endY-_top)+'px,0)';
                              }else{
                                 //$content.style.WebkitTransform='translate3d(0,'+(-startY+endY-_top)+'px,0)';
                                 $content.style.transform='translate3d(0,'+(-startY+endY-_top)+'px,0)';
                              }

                              //最后一页回弹缓动动画；
                              if(-(endY-startY-_top) >3*conHeight){
                              var rod = (-(endY-startY)/fiveH)*360;
                              var opc = (-(endY-startY)/fiveH)*1;
                              var p4BX = (-(endY-startY)/fiveH)*14;
                              var p4BXv2 = (-(endY-startY)/fiveH)*30;
                              if(rod >= 360){
                                rod = 360;
                              }
                              if(rod <= 0){
                                rod = 0;
                              }
                              if(opc >= 1){
                                opc = 1;
                              }
                              if(opc <= 0){
                                opc = 0;
                              }

                              $('.goPageOne').css('transition','all 0s ease-in-out 0s');
                                $('.goPageOne').css({'transform':'rotate('+rod+'deg)','opacity':opc});
                                $('.four').css('transition','all 0s ease-in-out 0s');
                                $('.four').css('box-shadow','0 '+p4BX+'px '+p4BXv2+'px 0px rgba(0,0,0,.5)');
                            }
                            //     if(-(endY-startY-_top) < conHeight/3 && $(window).width() < 640){
                            //       var cdScale = (-(endY-startY)/100)*-0.8;
                            //       var cdLeft = (-(endY-startY)/100)*50;
                            //       var cdTop = (-(endY-startY)/100)*-9;
                            //       var cdMgL = (-(endY-startY)/100)*-100;
                            //       if(cdScale <= -0.8){
                            //         cdScale = -0.8;
                            //       }else if(cdScale > 0){
                            //         cdScale = 0;
                            //       };
                            //       if(cdLeft >= 50){
                            //         cdLeft = 50;
                            //       }else if(cdLeft < 0){
                            //         cdLeft = 0;
                            //       };
                            //       if(cdTop <= -9){
                            //         cdTop = -9;
                            //       }else if(cdTop > 0){
                            //         cdTop = 0;
                            //       };
                            //       if(cdMgL <= -100){
                            //         cdMgL = -100;
                            //       }else if(cdMgL >0){
                            //         cdMgL = 0;
                            //       };


                            //       console.log(cdScale);
                            //       $('.cdBot').css('transition','all 0s ease-in-out 0s');
                            //       $('.cdBot').css({'transform':'scale('+(1+cdScale)+')','left':''+(50+cdLeft)+'%','top':''+(10+cdTop)+'%','margin-left':''+(cdMgL-95)+'px'});
                            //       // var cdBOpa = (-(endY-startY)/100)*-1;
                            //       // var cdBL = (-(endY-startY)/100)*50;
                            //       // if(cdBOpa <= -1){
                            //       //   cdBOpa = -1;
                            //       // }else if(cdBOpa >0){
                            //       //   cdBOpa = 0;
                            //       // };
                            //       // if(cdBL >= 50){
                            //       //   cdBL = 50;
                            //       // }else if(cdBL < 0){
                            //       //   cdBL = 0;
                            //       // };
                            //       // console.log(cdScale);
                            //       // $('.cdBar').css('transition','all 0s ease-in-out 0s');
                            //       // $('.cdBar').css({'opacity':''+(1+cdBOpa)+'','left':''+(50+cdBL)+'%'});
                            //     }

                            }

                    } else{
                      return false;
                    };


                    //判断滑动方向
                    // if (x - startX != 0) {
                    //     text += '<br/>左右滑动';
                    // }



                    //document.getElementById("result").innerHTML = text;


            }

            //touchend事件
             function touchEndFunc(e) {
                     //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                     _mouseDown=false;     //关闭滑动事件
                     if(checkMobile()){
                      $('.con').css('transition','all .5s ease-in-out 0s');
                      $('.four').css('transition','all 1s ease-in-out 0s');
                    } else{
                      $('.con').css('transition','all .75s ease-in-out 0s');
                      $('.four').css('transition','all 1s ease-in-out 0s');
                    };


                       var ydata = parseInt($('.con').css('top'));
                        conHeight = $('.con').height();
                       //if($('.setting').hasClass('cur')){

                          //setYData = $('.settingIn').attr('y-data');
                       //}
                     if(!$('.con').is(':animated') && !$('.setting').hasClass('cur')&& !$('.grayPage').is(':visible')){//如果con盒子还在移动 那么我们就不能让以下代码执行
              //alert(delta);//经过测试 如果delta等于正1代表鼠标滚轮是向上滚动 否则-1就是是向下滚动(假如模态窗口显示就return false，否者屏幕滚动)

                                  if( startY - endY > 100 && startY - endY != startY ){
                                  //判断是否是最后一页、如是最后一页时不再向下滑动。
                                  if(num >= leng - 1){
                                    num = 0;
                                      // if(num == 0 && $(window).width() <= 640){
                                      //   //手机cdBar需要手动控制(缓动动画才需要)；
                                      //   $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                      //   $('.cdBar').css({'opacity':'1','left':'50%'});
                                      // }

                                  }else{
                                    num++;
                                    // if( $(window).width() <= 640){
                                    // //手机cdBar需要手动控制(缓动动画才需要)；
                                    //   $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                    // $('.cdBar').css({'opacity':'0','left':'100%'});
                                    // }


                                  }

                                  $content.setAttribute('data-y',num*conHeight);
                                }else if( endY - startY > 100){
                                  //判断是否是第一页、如是第一页时不再向上滑动。
                                  if( num <= 0 ){

                                     // if(num == 0 && $(window).width() >=  640){
                                     //    $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                     //    $('.cdBar').css({'opacity':'1','left':'50%'});
                                     //  }
                                  } else {
                                    num--;
                                      // if(num == 0 && $(window).width() >=  640){
                                      //   $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                      //   $('.cdBar').css({'opacity':'1','left':'50%'});
                                      // }

                                  }

                                }else{
                                  //未切换
                                    // if(num == 0){
                                    //     $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                    //     $('.cdBar').css({'opacity':'1','left':'50%'});
                                    //   }
                                }
                                goAfter();


                                   //回弹动画复原；
                                   $('.goPageOne').css('transition','all .25s ease-in-out 0s');
                                $('.goPageOne').css('transform','rotate(0deg)');
                                $('.four').css('box-shadow','0 0px 0px 0px rgba(0,0,0,.5)');
                                //手机光碟复原；
                                // if($(window).width() <= 640){
                                //   $('.cdBot').css('transition','all .5s ease-in-out 0s');
                                // $('.cdBot').css({'transform':'scale(1)','left':'50%','top':'10%','margin-left':'-95px'});
                                // }

                                // $('.cdBar').css('transition','all .25s ease-in-out 0s');
                                //     $('.cdBar').css({'opacity':'1','left':'50%'});
                         }


            };




    //测试
    //alert($(window).height() + $(window).height()/2 );
            //绑定事件
            function bindEvent(section) {
                section.addEventListener('mousedown', touchSatrtFunc, false);  //触摸事件
                section.addEventListener('mousemove', touchMoveFunc, false);   //滑动事件
                section.addEventListener('mouseup', touchEndFunc, false);    //离开元素事件
                section.addEventListener('touchstart', touchSatrtFunc, false);   //触摸事件
                section.addEventListener('touchmove', touchMoveFunc, false);   //滑动事件
                section.addEventListener('touchend', touchEndFunc, false);     //离开元素事件
                section.addEventListener('touchcancel', touchEndFunc, false);     //离开元素事件
            };
            function unbindEvent(section) {
                section.removeEventListener('mousedown', touchSatrtFunc, false);  //触摸事件
                section.removeEventListener('mousemove', touchMoveFunc, false);   //滑动事件
                section.removeEventListener('mouseup', touchEndFunc, false);    //离开元素事件
                section.removeEventListener('touchstart', touchSatrtFunc, false);   //触摸事件
                section.removeEventListener('touchmove', touchMoveFunc, false);   //滑动事件
                section.removeEventListener('touchend', touchEndFunc, false);     //离开元素事件
                section.removeEventListener('touchcancel', touchEndFunc, false);     //离开元素事件


            };

//加入是手机或移动触摸设备添加全局绑定，否则不用；

 //if (checkMobile()) {

  bindEvent(document);

 // }else{
 //             bindEvent(section1);
 //             bindEvent(section2);
 //             bindEvent(section3);
 //             bindEvent(section4);

 // };




            //判断是否支持触摸事件
            function isTouchDevice() {
                //document.getElementById("version").innerHTML = navigator.appVersion;

                try {
                    document.createEvent("TouchEvent");
                    //alert("支持TouchEvent事件！");

                    bindEvent(); //绑定事件
                }
                catch (e) {
                    //alert("不支持TouchEvent事件！" + e.message);
                }
            }

            isTouchDevice();
            // if ( $(window).scrollTop()< $(window).height()/2) {
            //       $('html,body').stop().animate({scrollTop: '0px'}, 300);
            //     }else if( $(window).scrollTop()>= $(window).height()/2 && $(window).scrollTop() < $(window).height()){
            //       $('html,body').stop().animate({scrollTop: $(window).height()}, 300);
            //     }else if( $(window).scrollTop()>= $(window).height() + $(window).height()/2 &&  $(window).scrollTop() < $(window).height()*2){
            //       $('html,body').stop().animate({scrollTop: $(window).height()*2 + 'px'}, 300);
            //     }else if($(window).scrollTop()>= $(window).height()*2 + $(window).height()/2 && $(window).scrollTop() < $(window).height()*3){
            //       $('html,body').stop().animate({scrollTop: $(window).height()*3+ 'px'}, 300);
            //     }else if($(window).scrollTop()>= $(window).height()*3 + $(window).height()/2 && $(window).scrollTop() < $(window).height()*4){
            //       $('html,body').stop().animate({scrollTop: $(window).height()*4+ 'px'}, 300);
            //     }

            //     else if($(window).scrollTop()< $(window).height() + $(window).height()/2){
            //       $('html,body').stop().animate({scrollTop: $(window).height()}, 300);
            //     }
            //     else if($(window).scrollTop()< $(window).height() + $(window).height()/2 ){
            //       $('html,body').stop().animate({scrollTop: $(window).height()}, 300);
            //     }
            //     else if($(window).scrollTop()< $(window).height()*2 + $(window).height()/2 ){
            //       $('html,body').stop().animate({scrollTop: $(window).height()*2}, 300);
            //     }else{
            //       $('html,body').stop().animate({scrollTop: $(window).height()*3}, 300);
            //     };


//3dtouch;;
  // var element = document.getElementById('qr');
  // //var forceValueOutput = document.getElementById('forceValue');
  // //var background = document.getElementById('background');
  // var touch = null;

  // addForceTouchToElement(element);

  // function onTouchStart(e) {
  //   e.preventDefault();
  //   checkForce(e);
  // }

  // function onTouchMove(e) {
  //   e.preventDefault();
  //   checkForce(e);
  // }

  // function onTouchEnd(e) {
  //   e.preventDefault();
  //   touch = null;
  // }

  // function checkForce(e) {
  //   touch = e.touches[0];
  //   setTimeout(refreshForceValue.bind(touch), 10);
  // }

  // function checkMacForce(e) {
  //   // max value for trackpad is 3.0 compare to 1.0 on iOS
  //   renderElement(e.webkitForce/3);
  // }

  // function refreshForceValue() {
  //   var touchEvent = this;
  //   var forceValue = 0;
  //   if(touchEvent) {
  //     forceValue = touchEvent.force || 0;
  //     setTimeout(refreshForceValue.bind(touch), 10);
  //   }else{
  //     forceValue = 0;
  //   }

  //   renderElement(forceValue);
  // }

  // function renderElement(forceValue) {
  //   element.style.webkitTransform = ' scale(' + (1 + forceValue * .2) + ')';
  //   //background.style.webkitFilter = 'blur(' + forceValue * 30 + 'px)';
  //   //forceValueOutput.innerHTML = 'Force: ' + forceValue.toFixed(4);
  // }

  // function addForceTouchToElement(elem) {
  //   elem.addEventListener('touchstart', onTouchStart, false);
  //   elem.addEventListener('touchmove', onTouchMove, false);
  //   elem.addEventListener('touchend', onTouchEnd, false);
  //   elem.addEventListener('webkitmouseforcewillbegin', checkMacForce, false);
  //   elem.addEventListener('webkitmouseforcechanged', checkMacForce, false);
  // }




});
window.onload = function(){
  //减去手机浏览器的顶部，似乎没有用；
//   if(document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
// bodyTag = document.getElementsByTagName('body')[0];
// bodyTag.style.height = document.documentElement.clientWidth / screen.width * screen.height + 'px';
// }
//   setTimeout(function() {
// window.scrollTo(0, 1)
// }, 0);
  //显示器分辨率不是手机时候自动打开音乐
  // if($(window).width() <= 640){
  //   $('.cdBot,.cdBar').removeClass('played');
  //   $('#bgmusic').get(0).pause();
  //   $('#bgmusic').removeClass('played');
  // }else{
  //    $('.cdBot,.cdBar').addClass('played');
  //    $('#bgmusic').get(0).play();
  //   $('#bgmusic').addClass('played');
  // }
  $('.cdBot,.cdBar').click(function(){
    if($('#bgmusic').hasClass('played')){
      $('#bgmusic').get(0).pause();
      $('#bgmusic').removeClass('played');
      $('.cdBot,.cdBar').removeClass('played');

    }else{
      $('#bgmusic').get(0).play();
      $('#bgmusic').addClass('played');
      $('.cdBot,.cdBar').addClass('played');
    }
  }).hover(function() {
        var winWidth =$(window).width();
        if(winWidth > 640 && !$('.setting').hasClass('cur')){
            //$('.page').addClass('blur');
            $('.cdBar').addClass('cur');
        }else if(winWidth <= 1380 || $(window).height() <= 768){
            //$('.page').addClass('blur');
            if(winWidth > 640){
              $('.cdBar').addClass('cur');
            }else{
              return false;
            }

        }else {
            return false;
        }

    }, function() {
        //$('.page').removeClass('blur');
        $('.cdBar').removeClass('cur');
    });

  //图片延时加载；
  //$('.grayPage').load("ajaxGrayWin1210.html #grayList");
}