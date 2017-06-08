/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 14:02:34
 * @version $Id$
 */
 $(document).ready(function(){

  $(init);

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
        $(".weixin-bg").mousemove(function(e) {
          var p = Mouse(e);
          $(".ui-QR-code").css({top: p.toppos,left: p.leftpos});
        });
        $(".weixin-bg").hover(
          function(e){
            $(".ui-QR-code").fadeIn(200);
          },function(){
            $(".ui-QR-code").fadeOut(200);
          }
        )


        // 向下拉保持fixed_title浮在顶部
        $(window).scroll(function(){
          var slidery=$(window).scrollTop();
          if(slidery>50)
          {
            $(".title1").hide();
            $(".fixed_title").css({"top":"0","position":"fixed"});

          }
          else 
          {
            $(".title1").show();
            $(".fixed_title").css({"top":"50px","position":"fixed"});
          }
        })
    // 点击“产品商城”回到顶部
    var timer = null;
    $(".fixed_title-left").click(function(){
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
    })
// 产品尾部小箭头
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
});