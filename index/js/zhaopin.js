$(function(){
	$(".work").click(function(){
		$(this).find(".w").toggle(500);
		$(this).find(".fa").toggleClass("on")
	})
	
	
	$("#dian li").click(function(){
		var i=$(this).index();
		console.log(i)
		$("#b").children().eq(i).show().siblings().hide();
		console.log($("#b").children().eq(i))
	})
	
	
})