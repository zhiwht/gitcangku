$(function(){
	var id = location.search;
		id =id.substr(4,id.length)
	var index = 0;
	var str="";
	var abstr="";
	$.ajax({
		type:"get",
		url:"js/data.json",
		dataType:"json",
		success:function(data){
			var arr = data.list;
			for(var i=0;i<data.list.length;i++){
				if(data.list[i].id == id){
					index = i;
					break;
				}
			}
		$(".main-details>img").attr("src",data.list[index].imgurl);
		$(".guanjz").html("关键字:"+data.list[index].txt);
		$(".titleinfo").html("<b>产品名:"+data.list[index].title+"</b>")	
			for(var i=0;i<4;i++){
				abstr += "<li><img src='"+data.list[i].imgurl+"' alt='"+data.list[i].title+"'/></li>";
				$(".aboutList").html(abstr)
				
			}

		}
	});

})
