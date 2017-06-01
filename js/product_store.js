/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 14:02:34
 * @version $Id$
 */
$(document).ready(function(){
$(init);

function init() {  
        // 向下拉保持title2浮在顶部
    $(window).scroll(function(){
        var slidery=$(window).scrollTop();
        if(slidery>50)
        {
                $(".title1").hide();
                $(".title2").css({"top":"0","position":"fixed"});

        }
        else 
        {
                $(".title1").show();
                $(".title2").css({"top":"50px","position":"fixed"});
        }
    })
    // 点击“产品商城”回到顶部
    var timer = null;
    $(".title2-left").click(function(){
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn(){
          var toTop = document.body.scrollTop || document.documentElement.scrollTop;
          if(toTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = toTop - 50;
            timer = requestAnimationFrame(fn);
          }
          else{
            cancelAnimationFrame(timer);
          } 
        });
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
}

});



