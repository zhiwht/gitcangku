 $(function(){
    var oul = $('.nav-img ul');
    var oulHtml = oul.html();
    oul.html(oulHtml+oulHtml)
    var timeId = null;

    var ali = $('.nav-img ul li');
    var aliWidth = ali.eq(0).width();
    var aliSize = ali.size();
    var ulWidth = aliWidth*aliSize+29*aliSize;
    oul.width(ulWidth); 
    var speed = 1;

    function slider(){

      if(speed<0){
        if(oul.css('left')==-ulWidth/2+'px'){
        oul.css('left',0);
        }
        oul.css('left','+=-1px');
      }

      
      if(speed>0){

        if(oul.css('left')=='0px'){
        oul.css('left',-ulWidth/2+'px');
        }
        oul.css('left','+='+speed+'px');
      }
      
     }
    
    // setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
     timeId = setInterval(slider,30);

    $('.nav-img').mouseover(function(){
      // clearInterval()函数的作用是用来清除定时器
      clearInterval(timeId);
    });

    $('.nav-img').mouseout(function(){
      timeId = setInterval(slider,30);
    });

    $('.scroll-left').click(function(){
      speed=-1;
    });

    $('.scroll-right').click(function(){
      speed=1;
    });

  });
  $(function(){
      $('.play').click(function(){


            $("#video").trigger("load");
            $("#video").trigger("play");
            setTimeout(function() {$('.video').show();}, 1000); 
            $('.culture-masking').fadeIn();

            
          })
      $('.video-stop').click(function(){
          $('.video').hide();
          $('.culture-masking').hide();
      })
      $('.culture-masking').click(function(){
          $('.video').hide();
          $('.culture-masking').hide();
      })
       $('.play1').click(function(){


            $("#video1").trigger("load");
            $("#video1").trigger("play");
            $('.video1').show(); 
        })
        $('.video-stop1').click(function(){
            $('.video1').hide();
        })
        var b=document.getElementById("b");
        var d=document.getElementById("d");
        var video=document.getElementById("video1")
        var video=document.getElementById("video");
         d.onclick=function(){
        	video1.pause()
        }
        b.onclick=function(){
        	video.pause()
        }
//      $(".video-stop").click(function(){
//      	
//      	$("#video").pause();
//      })
  });