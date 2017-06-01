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
 	function init(){
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
 	
 	$(".fa-star").eq(4).click(function() {
 		if($(".fa-star").eq(4).css("color")=="rgb(255, 0, 0)")
 		{
 			$(".fa-star").eq(4).css("color","#c7c7c7");
 		}
 		else
 		{
 			$(".fa-star").eq(4).css("color","#ff0000");
 		}
 	});
 	$(".fa-star").eq(3).click(function() {
 		if($(".fa-star").eq(3).css("color")=="rgb(255, 0, 0)")
 		{
 			$(".fa-star").eq(3).css("color","#c7c7c7");
 		}
 		else
 		{
 			$(".fa-star").eq(4).css("color","#ff0000");
 			$(".fa-star").eq(3).css("color","#ff0000");
 		}
 	});
 	$(".fa-star").eq(2).click(function() {
 		if($(".fa-star").eq(2).css("color")=="rgb(255, 0, 0)")
 		{
 			$(".fa-star").eq(2).css("color","#c7c7c7");
 		}
 		else
 		{
 			for(i=4;i>=2;i--)
 				$(".fa-star").eq(i).css("color","red");
 		}
 	});
 	$(".fa-star").eq(1).click(function() {
 		if($(".fa-star").eq(1).css("color")=="rgb(255, 0, 0)")
 		{
 			$(".fa-star").eq(1).css("color","#c7c7c7");
 		}
 		else
 		{
 			for(i=4;i>=1;i--)
 				$(".fa-star").eq(i).css("color","red");
 		}

 	});
 	$(".fa-star").eq(0).click(function() {
 		if($(".fa-star").eq(0).css("color")=="rgb(255, 0, 0)")
 		{
 			$(".fa-star").eq(0).css("color","#c7c7c7");
 		}
 		else
 		{
 			for(i=4;i>=0;i--)
 				$(".fa-star").eq(i).css("color","red");
 		}
 	});
 	$(".product-one").click(function() {
 		$("html,body").animate({
 			scrollTop:$(".one").offset().top
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
 };
});