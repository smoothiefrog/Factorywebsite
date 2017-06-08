/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 22:11:40
 * @version $Id$
 */

 $(document).ready(function(){
 	$("#img_show_two").hide();
  $("#img_show_three").hide();
 	$(init)
 	function init()
 	{

 	//$("#img_show_two").hide();
 	//$("#img_show_three").hide();
 	$("#img_three").css("border","0px");
 	$("#img_two").css("border","0px");
 	$("#img_one").css("border","2px solid #c7c7c7");
 	$("#chosen-one").css("border","1.5px solid #3a9cd7");
 	$("#color-one").css("border","1.5px solid #3a9cd7");
 	$("#chosen-one").click(function() {
 		$("#chosen-one").css("border","1.5px solid #3a9cd7");
 		$("#chosen-two").css("border","1px solid #c7c7c7");
 		$("#chosen-three").css("border","1px solid #c7c7c7");
 	});
 	$("#chosen-two").click(function() {
 		$("#chosen-two").css("border","1.5px solid #3a9cd7");
 		$("#chosen-one").css("border","1px solid #c7c7c7");
 		$("#chosen-three").css("border","1px solid #c7c7c7");
 		
 	});
 	$("#chosen-three").click(function() {
 		$("#chosen-three").css("border","1.5px solid #3a9cd7");
 		$("#chosen-two").css("border","1px solid #c7c7c7");
 		$("#chosen-one").css("border","1px solid #c7c7c7");
 		
 	});


 	$("#color-one").click(function() {
 		$("#color-one").css("border","1.5px solid #3a9cd7");
 		$("#color-two").css("border","1px solid #c7c7c7");
 		$("#color-three").css("border","1px solid #c7c7c7");

 		$("#img_show_one").show();
 		$("#img_show_two").hide();
 		$("#img_show_three").hide();
 		$("#img_three").css("border","0px");
 		$("#img_two").css("border","0px");
 		$("#img_one").css("border","2px solid #c7c7c7");
 	});
 	$("#color-two").click(function() {
 		$("#color-two").css("border","1.5px solid #3a9cd7");
 		$("#color-one").css("border","1px solid #c7c7c7");
 		$("#color-three").css("border","1px solid #c7c7c7");

 		$("#img_show_one").hide();
 		$("#img_show_two").show();
 		$("#img_show_three").hide();
 		$("#img_three").css("border","0px");
 		$("#img_two").css("border","2px solid #c7c7c7");
 		$("#img_one").css("border","0px");
 		
 	});
 	$("#color-three").click(function() {
 		$("#color-three").css("border","1.5px solid #3a9cd7");
 		$("#color-two").css("border","1px solid #c7c7c7");
 		$("#color-one").css("border","1px solid #c7c7c7");
 		
 		$("#img_show_one").hide();
 		$("#img_show_two").hide();
 		$("#img_show_three").show();
 		$("#img_three").css("border","2px solid #c7c7c7");
 		$("#img_two").css("border","0px");
 		$("#img_one").css("border","0px");
 	});
 	
 	$("#add").click(function() {
 		var num=document.getElementById("amount");
 		num.value=parseInt(num.value) + 1;
 	}) ;
 	$("#reduce").click(function() {
 		var num=document.getElementById("amount");
 		if(0==num.value)
 			num.value=0;
 		else 
 			num.value=parseInt(num.value) - 1;
 	}) ;

 	$("#img_two").click(function() {
 		$("#img_show_one").hide();
 		$("#img_show_two").show();
 		$("#img_show_three").hide();
 		$("#img_three").css("border","0px");
 		$("#img_two").css("border","2px solid #c7c7c7");
 		$("#img_one").css("border","0px");

 		$("#color-two").css("border","1.5px solid #3a9cd7");
 		$("#color-one").css("border","1px solid #c7c7c7");
 		$("#color-three").css("border","1px solid #c7c7c7");
 	}) ;
 	$("#img_one").click(function() {
 		$("#img_show_one").show();
 		$("#img_show_two").hide();
 		$("#img_show_three").hide();
 		$("#img_three").css("border","0px");
 		$("#img_two").css("border","0px");
 		$("#img_one").css("border","2px solid #c7c7c7");

 		$("#color-one").css("border","1.5px solid #3a9cd7");
 		$("#color-two").css("border","1px solid #c7c7c7");
 		$("#color-three").css("border","1px solid #c7c7c7");
 	}) ;
 	$("#img_three").click(function() {
 		$("#img_show_one").hide();
 		$("#img_show_two").hide();
 		$("#img_show_three").show();
 		$("#img_three").css("border","2px solid #c7c7c7");
 		$("#img_two").css("border","0px");
 		$("#img_one").css("border","0px");

 		$("#color-three").css("border","1.5px solid #3a9cd7");
 		$("#color-two").css("border","1px solid #c7c7c7");
 		$("#color-one").css("border","1px solid #c7c7c7");
 	}) ;
 	$(".join-cart").click(function() {
 		 alert("请先登录！");
 	});
 	$(".commont").click(function() {
 		 alert("请先登录！");
 	});
  /*
 	$(function () {
 		var ie6 = document.all;
 		var dv = $('.feature'), st;
 		dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离
 		$(window).scroll(function () {
 			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
 			if (st > parseInt(dv.attr('otop'))) {
 			if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
 				dv.css({ position: 'absolute', top: st });
 			}
 			else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', 'top': '15px' ,'width':'100%','margin-left':'-5.0%','z-index':'11','padding-left':'5.3%'});
 		} else if (dv.css('position') != 'static') dv.css({ 'position': 'static','margin':'3% 0% 1% 1%'});
 	});
 	});
 	*/

 	$(".product-one").click(function() {
 		var t=$(".one").offset();
 		$("html,body").animate({
 			scrollTop:t.top+"px"
 		},10);
 	});
 	$(".product-two").click(function() {
 		$("html,body").animate({
 			scrollTop:$(".two").offset().top
 		},10);
 	});
 	$(".product-three").click(function() {
 		$("html,body").animate({
 			scrollTop:$(".three").offset().top
 		},10);
 	});


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
});