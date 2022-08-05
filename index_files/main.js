// JavaScript Document
$(function(){
	   //导航下拉弹出
		var _timera;		
		function navM(nav,menu){
		  $(nav).on({
			"mouseenter":function(){
			  if($(menu).is(":hidden")){
			     $(menu).stop(true).slideDown(300).siblings(".nav_sub").stop(true).slideUp(300);
				 $(".top2").css("background","rgba(1, 16, 61, 0.9)").css("position","absolute");
			     clearTimeout(_timera);
			  }
			},
			"mouseleave":function(){
				_timera = setTimeout('$(".nav_sub").slideUp(100);$(".top2").css("background","#00479d").css("position","relative")',10);
				$(menu).hover(
				   function(){clearTimeout(_timera)},
				   function(){
					   $(this).stop(true).slideUp(300);
					   $(".top2").css("background","#00479d").css("position","relative");
				   }
					);				
				}
			});
		}		   
		navM("#nav_cpfw","#nav_sub_cpfw");
		navM("#nav_hyyy","#nav_sub_hyyy");		
		navM("#nav_gywm","#nav_sub_gywm");		

		
 //滚动导航固定
 var topHeight;
 $(".top,.nav_sub").css("top",$(".top_line").height()+$(".banner_ads").height()+4);		
 if($(".top").length>0){
	topHeight=$(".top").offset().top;
	console.log(topHeight);
 }
 $(window).scroll(function(e) {
    if($(window).scrollTop()>=topHeight){
		$(".top").css("top","0").css("background","rgba(1, 16, 61, 0.9)").css("position","fixed");
		$(".nav_sub").css("top","0px").css("position","fixed");;		
	}
	else{
		console.log(topHeight);
		$(".top").css("top",topHeight).css("background","none").css("position","absolute");;
		$(".nav_sub").css("top",topHeight).css("position","absolute");;	
	}
    
 });

//首页广告	
$(".banner_ads span").click(function(e) {
      adsHidden();
});
$(".banner_ads_bg span").click(function(e) {
      adsHidden();
});
function adsHidden(){
      $(".banner_ads").hide();
	  $(".banner_ads_bg").hide();
	  $(".top,.nav_sub").css("top","42px");
	  topHeight=$(".top").offset().top;
}
setTimeout(adsHidden,40000);
$(window).resize(function(){
    $(".top,.nav_sub").css("top",$(".top_line").height()+$(".banner_ads").height()+4);
	topHeight=$(".top").offset().top;
})

//5000+客户滚动
var swiper = new Swiper('#swiper-kh', {
      autoplay:true
    });
	
//行业应用切换
$("#tgfw_tab li").hover(function(e) {
    $(this).addClass("on").siblings().removeClass("on");
	$(".qyfw_list li").eq($(this).index()).addClass("on").siblings().removeClass("on");
	$(".tgfw_con").eq($(this).index()).show().siblings().hide();
});
$(".qyfw_list li").hover(function(e) {
    $(this).addClass("on").siblings().removeClass("on");
	$(".tgfw_tab li").eq($(this).index()).addClass("on").siblings().removeClass("on");
	$(".tgfw_con").eq($(this).index()).show().siblings().hide();
});

var id;
$("#jr_tab li").hover(function(e) {
    $(this).addClass("on").siblings().removeClass("on");
	$(".tgfw_con").eq($(this).index()).show().siblings().hide();
	id="#jr_tab"+$(this).index();
	$(".jr_box1,.jr_box2").removeClass("on");
	$(id).addClass("on");
});
for(var i=0;i<3;i++){
	id="#jr_tab"+i;
	$(id).hover(function(e) {
		$(".jr_box1,.jr_box2").removeClass("on");
        $(this).addClass("on");
		$("#jr_tab li").eq($(this).attr("data-index")).addClass("on").siblings().removeClass("on");
		$(".tgfw_con").eq($(this).attr("data-index")).show().siblings().hide();
    });
}  

//海贝产品页面滑动展开
$(".hb li").mouseenter(function(e) {
  //$(".hb_item").removeClass("now");
  //$(".hb_con").stop().slideUp();
  //$(this).children(".hb_item").addClass("now");
  //$(this).children(".hb_con").slideDown();
});
$(".hb li").mouseleave(function(e) {
   //$(".hb_item").removeClass("now");
   //$(".hb_con").stop().slideUp();
});
$(".hb li").click(function(e) {
    $(".hb_item").removeClass("now");
	$(".hb_con").stop().slideUp();
	if($(this).children(".hb_con").is(":visible")){
		$(this).children(".hb_item").removeClass("now");
		$(".hb_con").stop().slideUp();
	}
    else{
		$(this).children(".hb_item").addClass("now");
		$(this).children(".hb_con").slideDown();
	}	
});

//tab切换
$(".cp_tab li").hover(function(e) {
    $(this).addClass("now").siblings().removeClass("now");
	$(this).parent().next().children(".cp_box").eq($(this).index()).show().siblings().hide();	
});

//水晶球产品切换
$(".sjq_list li").hover(function(e) {
    $(this).addClass("now").siblings().removeClass("now");

});

//新闻中心滚动轮播
var swiper_xw = new Swiper('#swiper-xw', {
      pagination: {
        el: '#swiper-xw .swiper-pagination',
		clickable :true
      },
	  autoplay: true,
	  simulateTouch : false
    });

//新闻中心滚动轮播
var swiper_about1 = new Swiper('#swiper-about1', {
      pagination: {
        el: '#swiper-about1 .swiper-pagination',
        clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
	  
});
var swiper_about2 = new Swiper('#swiper-about2', {
      pagination: {
        el: '#swiper-about2 .swiper-pagination',
        clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
	  
});
var swiper_about4 = new Swiper('#swiper-about4', {
      pagination: {
        el: '#swiper-about4 .swiper-pagination',
        clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
	 
});
var swiper_about5 = new Swiper('#swiper-about5', {
      pagination: {
        el: '#swiper-about5 .swiper-pagination',
		clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
	  
});

$(".lxwm_tab_pc li").hover(function(e) {
    $(this).addClass("now").siblings().removeClass("now");
	$(".lxwm_con_pc").css("visibility","hidden");
	$(".lxwm_con_pc").eq($(this).index()).css("visibility","visible");
	if($(this).index()==0){
		$(".lxwm_box_pc").height("300px");
	}
    else{
	    $(".lxwm_box_pc").height("562px");
	}
	
});

$(".lxwm_tab_m li").click(function(e) {
    $(this).addClass("now").siblings().removeClass("now");
	$(".lxwm_con_m").eq($(this).index()).show().siblings().hide();	
});


//加入我们
// $(".join_tab li").hover(function(e) {
//     $(this).addClass("now").siblings().removeClass("now");
// 	$(".join_con").eq($(this).index()).show().siblings().hide();
// });
$(".join_tab li:not([no_tab])").each(function(i,o){
  $(this).hover(function(e) {
      $(this).addClass("now").siblings().removeClass("now");
   $(".join_con").eq(i).show().siblings().hide();
  });
});


var swiper_join = new Swiper('#swiper-join', {
      pagination: {
        el: '#swiper-join .swiper-pagination',
		clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
});
var swiper_join1 = new Swiper('#swiper-join1', {
      pagination: {
        el: '#swiper-join1 .swiper-pagination',
		clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
});
var swiper_join2 = new Swiper('#swiper-join2', {
      pagination: {
        el: '#swiper-join2 .swiper-pagination',
		clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
});
var swiper_join3 = new Swiper('#swiper-join3', {
      pagination: {
        el: '#swiper-join3 .swiper-pagination',
		clickable :true
      },
	  autoplay: false,
	  simulateTouch : false
});

$(".zzry_tab li").hover(function(e) {
    $(this).addClass("now").siblings().removeClass("now");
	$(".zzryCON").css("visibility","hidden");
	$(".zzryCON").eq($(this).index()).css("visibility","visible");

});


//雷达案例效果
$(".ld_yycj li").hover(function(e) {
    $(this).children(".ld_box2").animate({top:0});
},function(){
	$(this).children(".ld_box2").animate({top:'330px'});
	});
	
	
//案例滚动导航浮动
$(window).scroll(function(e) {
    if($(window).scrollTop()>=$(".al_nav").height()){
		$(".al_nav").css('position','fixed').css('top','0');
	}else{
		$(".al_nav").css('position','relative');
		}
});
$(".al_nav li").click(function(e) {
   $(this).addClass("now").siblings().removeClass("now");
});

var url=window.location.hash;
$(".al_nav li").each(function(index, element) {
    if($(this).children("a").attr("href")==url){
		$(this).addClass("now").siblings().removeClass("now");
		};
});

//手机版下拉菜单
$(".m_nav_lis").click(function(e) {
	e.stopPropagation();
    $(".m_nav").slideToggle('slow');
	return false;
});
$(document).click(function(e) {	
	if(!$('.m_nav').is(e.target)&&$('.m_nav').has(event.target).length === 0){
       $('.m_nav').hide();
	}				
});
$(".m_nav_item").click(function(e) {
    $(this).next(".m_mav_box").slideToggle();
});

//移动端联系我们下拉
$(".m_lxwm_item").click(function(e) {
	$(".m_lxwm_up").removeClass(".m_lxwm_down");
	$(".m_lxwm_con").stop().slideUp();
	if($(this).parent().children(".m_lxwm_con").is(":visible")){
		$(this).children(".m_lxwm_up").removeClass(".m_lxwm_down");
	    $(this).parent().children(".m_lxwm_con").stop().slideUp();
	}else{
		$(this).children(".m_lxwm_up").addClass(".m_lxwm_down");
	    $(this).parent().children(".m_lxwm_con").slideDown();
	}
});

//移动端海云切换
$(".m_cpgn_item li").click(function(e) {
	$(".m_cpgn_item li").removeClass("now");
    $(this).addClass("now");
	$(".m_cpgn_con dd").hide();  
	$(this).parent().next(".m_cpgn_con").children("dd").eq($(this).index()).show();
});
$(".m_cpys_item").click(function(e) {
    $(".m_cpys_item").removeClass("now");	
	$(".m_cpys_con").stop().slideUp();
	if($(this).next(".m_cpys_con").is(":hidden")){	  
	   $(this).addClass("now");
	   $(this).next(".m_cpys_con").slideDown();
	}
});

//移动端回到顶部
if($('#returnTopFun').size()>0){
	$(window).scroll(function(){
		
			if($(window).scrollTop()>=$(window).height()/2){
				$('#returnTopFun').fadeIn('fast')		
			}else{
				$('#returnTopFun').fadeOut('fast')
			}
		
	});
	$('#returnTopFun').click(function(){$('body,html').animate({'scrollTop':0}) });
}

  
})