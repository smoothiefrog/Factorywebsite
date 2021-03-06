$(init) 
function init() {  
    $(".ui-QR-code").hide();
    var MouseEvent = function(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    }
    var Mouse = function(e){
      var mouse = new MouseEvent(e);
      return {
        leftpos : mouse.x - 38,
        toppos : mouse.y - 115,
      }
    }
    $(".span-of-wechat").mousemove(function(e) {
      var p = Mouse(e);
      $(".ui-QR-code").css({top: p.toppos,left: p.leftpos});
    });
    $(".span-of-wechat").hover(
      function(e){
        $(".ui-QR-code").fadeIn(200);
      },function(){
        $(".ui-QR-code").fadeOut(200);
      }
    )
  	// 具体产品单分类栏效果
    pos = 1; 
    $(window).scroll(function(){
      var slidery=$(window).scrollTop();
      var ret = Math.max(50 - slidery, 0)
      $(".introduction-line").css({"top": ret});
    })
    // 具体产品单分类栏点击回到顶部
    var timer = null;
    $(".product-category").click(function(){
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
    // 鼠标点击滑动图片效果+自动滑动效果
    var i,box,boxpic,left,right,picleng,width,isauto,dot;
    i=0;
    box = $(".pic-flashcontainer");
    boxpic = $(".introduction-pics");
    left = $(".leftslider");
    right = $(".rightslider");
    width = boxpic.width();
    picleng = boxpic.length; //图片张数
    isauto = true;
    dot = $(".dot-container").find("a");
    dot.eq(0).addClass("cur");

    boxpic.each(function(index){
      zindex = picleng - (index +1);
      $(this).css({"z-index": zindex})
    });
     
     left.click(function(){
      if(box.is(":animated")) {return}
        i--;
      if(i<0)
        {i = picleng-1};
      picanimate();
    })
    right.click(function(){
      if(box.is(":animated")) {return}
        i++;
      picanimate();
    })
    
    function picanimate(){ //图片滑动函数
      if(i>picleng-1)
        {i=0}
      setTimeout(function(){
         boxpic.stop().animate({opacity:0,"z-index":"1"},500).eq(i).stop().animate({opacity:1,"z-index":picleng},500);
         bannerdot(i);
      },400)
    }
    function bannerdot(i) {
      if(i>picleng-1)
        {i=0}
      dot.removeClass("cur").eq(i).addClass("cur"); //圆点背景变化
    }
    dot.click(function(){
      i = $(this).index();
      bannerdot(i);
      picanimate(i);
    })
    setInterval(function(){ //动画播放
      if(isauto){
        i++;
        picanimate();
        bannerdot(i)
      }
    },3000)
    box.hover(function(){
      isauto = false;
    },function(){
      isauto = true;
    })
    left.hover(function(){
      isauto = false;
    },function(){
      isauto = true;
    })   
    right.hover(function(){
      isauto = false;
    },function(){
      isauto = true;
    })

    // 单品+推荐搭配选择框
    $(".content-singlepro-1").show();
    $(".content-combopro-1").hide();
    $(".single-1").click(function(){
       $(this).removeClass("tab");
       $(this).addClass("active");
       $(this).css({"text-decoration":"none"});
       $(".combo-1").addClass("tab");
       $(".combo-1").removeClass("active");
       $(".content-singlepro-1").show();
       $(".content-combopro-1").hide();
    })
    $(".combo-1").click(function(){
       $(this).removeClass("tab");
       $(this).addClass("active");
       $(this).css({"text-decoration":"none"});
       $(".single-1").addClass("tab");
       $(".single-1").removeClass("active");
       $(".content-singlepro-1").hide();
       $(".content-combopro-1").show();
    })

    $(".content-singlepro-2").show();
    $(".content-combopro-2").hide();
    $(".single-2").click(function(){
       $(this).removeClass("tab");
       $(this).addClass("active");
       $(this).css({"text-decoration":"none"});
       $(".combo-2").addClass("tab");
       $(".combo-2").removeClass("active");
       $(".content-singlepro-2").show();
       $(".content-combopro-2").hide();
    })
    $(".combo-2").click(function(){
       $(this).removeClass("tab");
       $(this).addClass("active");
       $(this).css({"text-decoration":"none"});
       $(".single-2").addClass("tab");
       $(".single-2").removeClass("active");
       $(".content-singlepro-2").hide();
       $(".content-combopro-2").show();
    })
    //
    $("[data-toggle='tooltip']").tooltip({html:true});
    //点击图片出现隐藏div效果
    $("#comingsoon-shadow").hide();
    $(".pro-pics-new").click(function() {
        $("#comingsoon-shadow").show();
        $("#img-change").css({"opacity":"0.2"});
    })
    $("#comingsoon-shadow").click(function(){
        $(this).hide();
        $("#img-change").css({"opacity":"1"});
    })
    // 尾部
    var flag = true,
    working = false;

    $("#btn").on("click", function() {
      if (working === true) return;
      working = true;
      var h = $("#tail").offset().top;
      if (flag) {
        $("#tail").animate({
          height: 250,
        }, "slow", function() {
          working = false;
        });
        $("body").animate({
          scrollTop: h + 200,
        }, "slow");
      }
      else {
        $("#tail").animate({
          height: 50,
        }, "slow", function() {
          working = false;
        });
        $("body").animate({
          scrollTop: h - 200,
        }, "slow");
      }
      flag = !flag;
    })
}