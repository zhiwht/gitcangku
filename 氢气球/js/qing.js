$(function(){
	var mySwiper = new Swiper('.swiper-container',{
slidesPerView : 'auto',
loopedSlides :6,
})
	
	//查看全文
	$(".c").on("tap",function(){
		$(this).hide();
		$(".t").css("height","auto")
	})
	$(".c1").on("tap",function(){
		$(this).hide();
		$(".t1").css("height","auto")
	})
	
	
	$("#nav li").eq(0).addClass("on");
		var w=$(window).width();
	$("#nav li").on("tap",function(){
		var a=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find("span").hide();
		$(this).find("i").show();
		$(this).siblings().find("span").show();
		$(this).siblings().find("i").hide();
		$("#banner").stop().animate({"left":-a*w},300);
		
	})
})