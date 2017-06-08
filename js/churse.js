/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 22:11:40
 * @version $Id$
 */

 $(document).ready(function(){
 	$("#QS-27-51-B-show").hide();
  $("#QS-27-51-C-show").hide();
  $(init)
  function init()
  {
    $("#galvanized").click(function() {
     $(".chosen").css("border","1px solid #c7c7c7");
     $(this).css("border","1.5px solid #3a9cd7");
    });
    $("#steel").click(function() {

      $(".chosen").css("border","1px solid #c7c7c7");
      $(this).css("border","1.5px solid #3a9cd7");
    });
    $("#alloy").click(function() {
     $(".chosen").css("border","1px solid #c7c7c7");
     $(this).css("border","1.5px solid #3a9cd7");

    });


    $("#QS-27-51-A").click(function() {
      $(".type").css("border","1px solid #c7c7c7");
      $(this).css("border","1.5px solid #3a9cd7");

      $(".img").hide();
      $("#QS-27-51-A-show").show();

      $(".img-QS-27-51").css("border","0px");
      $("#img-QS-27-51-A").css("border","2px solid #c7c7c7");
    });
    $("#QS-27-51-B").click(function() {
     $(".type").css("border","1px solid #c7c7c7");
     $(this).css("border","1.5px solid #3a9cd7");

     $(".img").hide();
     $("#QS-27-51-B-show").show();
     $(".img-QS-27-51").css("border","0px");
     $("#img-QS-27-51-B").css("border","2px solid #c7c7c7");

    });
    $("#QS-27-51-C").click(function() {
     $(".type").css("border","1px solid #c7c7c7");
     $(this).css("border","1.5px solid #3a9cd7");

     $(".img").hide();
     $("#QS-27-51-C-show").show();
     $(".img-QS-27-51").css("border","0px");
     $("#img-QS-27-51-C").css("border","2px solid #c7c7c7");
    });

    $("#add").click(function() {
     var num=document.getElementById("amount");
     num.value=parseInt(num.value) + 1;
    });
    $("#reduce").click(function() {
     var num=document.getElementById("amount");
     if(0==num.value)
      num.value=0;
     else 
      num.value=parseInt(num.value) - 1;
    });

    $("#img-QS-27-51-B").click(function() {
      $(".img").hide();
      $("#QS-27-51-B-show").show();
      $(".img-QS-27-51").css("border","0px");
      $(this).css("border","2px solid #c7c7c7");

      $(".type").css("border","1px solid #c7c7c7");
      $("#QS-27-51-B").css("border","1.5px solid #3a9cd7");
    });
    $("#img-QS-27-51-A").click(function() {
     $(".img").hide();
     $("#QS-27-51-A-show").show();
     $(".img-QS-27-51").css("border","0px");
     $(this).css("border","2px solid #c7c7c7");

     $(".type").css("border","1px solid #c7c7c7");
     $("#QS-27-51-A").css("border","1.5px solid #3a9cd7");
    });
    $("#img-QS-27-51-C").click(function() {
     $(".img").hide();
     $("#QS-27-51-C-show").show();
     $(".img-QS-27-51").css("border","0px");
     $(this).css("border","2px solid #c7c7c7");

     $(".type").css("border","1px solid #c7c7c7");
     $("#QS-27-51-C").css("border","1.5px solid #3a9cd7");
    });
    $(".join-cart").click(function() {
      alert("请先登录！");
    });
    $(".commont").click(function() {
      alert("请先登录！");
    });

    $(function () {
      //var ie6 = document.all;
      var dv = $('.feature'), st;
    dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
    $(window).scroll(function () {
      st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
      if (st > parseInt(dv.attr('otop'))) {
       if (dv.css('position') != 'fixed')
        dv.css({ 'position': 'fixed', 'top': '15px' ,'width':'100%','margin-left':'-5.0%','z-index':'11','padding-left':'5.3%'});} 
      else if (dv.css('position') != 'static')
        dv.css({ 'position': 'static','margin':'3% 0% 1% 1%'});
      });
    });

    $("#manufactor-click").click(function (){  
      $("html,body").animate({  
        scrollTop: $("#img-manufactor").offset().top-60 
      }, 200); 
    }); 
    $("#evaluation-click").click(function (){  
      $("html,body").animate({  
        scrollTop: $("#evaluation").offset().top-80  
      }, 200); 
    }); 
    $("#commont").click(function (){  
      $("html,body").animate({  
        scrollTop: $("#evaluation").offset().top-180  
      }, 200); 
    }); 
    $("#service-click").click(function (){  
      $("html,body").animate({  
        scrollTop: $("#service").offset().top-100  
      }, 200); 
    }); 
    

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