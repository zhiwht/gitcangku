$(function(){
	var arr=$(".content>li");
	var x=$("#x");
	var s=$("#s")
	console.log(arr)
	//查找名字 和身份证号
	$("#btn").click(function(){
		//遍历每个li
		arr.each(function(i){
			if(x.val()==$(this).find(".a").html()&&s.val()==$(this).find(".b").html()){
				$(this).show().siblings().hide()
			}
		})
	})
})