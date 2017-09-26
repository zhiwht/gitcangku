$(function(){
    		//滚动条向下滚动>600px，返回顶部图片显示，否则消失
    		$(window).scroll(function(){
    			if($(window).scrollTop()>100){
    				$("#top").addClass("qw")
    			}
    			else{
    				$("#top").removeClass("qw")
    			}
    		})
    		
    		//点击返回顶部，回到顶部
    		 $("#top").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
    	})