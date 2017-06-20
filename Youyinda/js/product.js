$(function(){
//	var i=0;
//	setInterval(function(){
//		var len = $(".banner img").length;
//		$(".banner img").eq(i).fadeIn().siblings().fadeOut();
//		if(i>=len-1){
//			i=0;
//		}else{
//			i++;
//		}
//
//	},4000)
	
	var str="";
	$.ajax({
		type:"get",
		url:"js/data.json",
		dataType:"json",
		success:function(data){
			var arr = data.list;
			for(var i=0;i<data.list.length;i++){
				str+="<li><img src='"+data.list[i].imgurl+"'/><h6>"+data.list[i].title+"</h6><a href='productInfo.html?id="+data.list[i].id+"'></a></li>"
			}
			$(".main-body").css("height","1300px")
			$(".product-content").html("<ul>"+str+"</ul>")
			
		}
	});
	
	
	
})
