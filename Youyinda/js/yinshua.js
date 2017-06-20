$(function(){
	
	$("#dian").on("tap",function(){

		$(".box").css("transform","translate3d(-50%,0,0)");
	})
	$("#btn").on("tap",function(){
		$(".box").css("transform","translate3d(0,0,0)");
	})
	var s= new Swiper(".poster",{	
			   	pagination:".swiper-pagination",
			   	effect : 'cube',
			   	loop : true,
			   	pagination: '.pagination',
   autoplay: 3000,
   pagination : '.swiper-pagination',
   paginationClickable :true,
   preventClicks : false,
   noSwiping : true,
			      })
	
})