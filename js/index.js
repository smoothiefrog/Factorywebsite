var flag = true,
	working = false,
	index = 0,
	animating = false,
	resized = false;
$(document).ready(function() {
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
	function Init() {
		if (wid == $(window).width()) return;
		wid = $(window).width();
		var width = $(".ui-items").width();
		var posleft = 0;
		$(".ui-item").each(function() {
			$(this).css("left", posleft);
			posleft += width;
		});
		index = 0;
	}
	$.fn.extend({
		do: function(dis) {
			var newleft = $(this).offset().left + dis - $(this).parent().offset().left;
			$(this).animate({
				left: newleft,
			}, "slow", function() {
				animating = false;
				if (resized) {
					resized = false;
					Init();
				}
			});
		}
	})
	$(".ui-slide-left").on("click", function() {
		if (animating) return;
		animating = true;
		var dis = $(".ui-item:first").width();
		if (index == 0) dis = -dis * 2;
		$(".ui-item").each(function() {
			$(this).do(dis);
		});
		index = (index - 1 + 3) % 3;
	});
	$(".ui-slide-right").on("click", function() {
		if (animating) return;
		animating = true;
		var dis = $(".ui-item:first").width();
		if (index == 2) dis = dis * 2;
		else dis = dis * (-1);
		$(".ui-item").each(function() {
			$(this).do(dis);
		});
		index = (index + 1) % 3;
	});
	function animate() {
		if (animating) return;
		console.log(index);
		var dis = $(".ui-item:first").width();
		if (index == 2) dis = dis * 2;
		else dis = dis * (-1);
		animating = true;
		$(".ui-item").each(function() {
			$(this).do(dis);
		});
		index = (index + 1) % 3;
		if (index == 0) Init();
	}
	var wid = $(window).width();
	$(window).resize(function() {
		if (animating) {
			resized = true;
		}
		else {
			Init();
		}
	});
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
	$(".fn-background-green").mousemove(function(e) {
		var p = Mouse(e);
		$(".ui-QR-code").css({top: p.toppos,left: p.leftpos});
	});
	$(".fn-background-green").hover(
		function(e){
			$(".ui-QR-code").fadeIn(200);
		},function(){
			$(".ui-QR-code").fadeOut(200);
		}
	)
	setInterval(animate, 5000);
})
