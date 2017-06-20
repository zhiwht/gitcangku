$(function(){
	var s= new Swiper(".container",{	
			   	pagination:".swiper-pagination"
			      })
	
	var mySwiper = new Swiper('.swiper-container',{
slidesPerView : 'auto',
loopedSlides :6,
})
	$("#nav li").eq(0).addClass("on");
	var   w=$(".banner").outerWidth(true)/4;
	$("#nav li").on("tap",function(){
//		var a=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find("span").hide();
		$(this).find("i").show();
		$(this).siblings().find("span").show();
		$(this).siblings().find("i").hide();
		$("#banner").stop().animate({"left":-n*w},300);
		
	})
	
	$(".c").on("tap",function(){
		$(this).hide();
		$(".t").css("height","auto")
	})
	$(".c1").on("tap",function(){
		$(this).hide();
		$(".t1").css("height","auto")
	})
//	$(".container")[0].addEventListener("touchstart",function(ev){
//					ev.preventDefault();
//				})
	var n=0;
	var size=$("#banner>li").size();
	$(".banner").on("swipeLeft",function(){
		n++;
		console.log(n)
		if(n>=size){
			n=size-1;
		}
		$("#nav li").eq(n).addClass("on").siblings().removeClass("on");
//		$("#nav li span").eq(n).hide();
//		$("#nav li i").eq(n).show();
//		$("#nav li i").siblings().hide();
//		$("#nav li span").siblings().show();
		$(".banner").stop().animate({"left":-n*w},300);
	})
	$("#banner").on("swipeRight",function(){
		n--;
		if(n<=0){
			n=0;
		}
		$("#nav li").eq(n).addClass("on").siblings().removeClass("on");
//		$("#nav li span").eq(n).hide().siblings().show();
//		$("#nav li i").eq(n).show().siblings().hide();
		$("#banner").stop().animate({"left":-n*w},300);
	})
})