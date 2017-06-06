/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-25 22:11:40
 * @version $Id$
 */
 //定义画布宽高和生成点的个数
 var canvas = document.getElementById("canvas");
 //var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 30;

var browser = {
versions: function () {
  var u = navigator.userAgent, app = navigator.appVersion;
             return {     //移动终端浏览器版本信息
               trident: u.indexOf('Trident') > -1, //IE内核
               presto: u.indexOf('Presto') > -1, //opera内核
               webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
               gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
               mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
               ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
               android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
               iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
               iPad: u.indexOf('iPad') > -1, //是否iPad
               webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
           };
       }(),
       language: (navigator.browserLanguage || navigator.language).toLowerCase()
   } 
   if(browser.versions.mobile) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight*0.9;
    var POINT=15;
   } 
   else {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.8;
    var POINT=25;
   }

   var WIDTH=canvas.width;
   var HEIGHT= canvas.height;
   var context = canvas.getContext('2d');
   context.strokeStyle = 'rgba(0,0,0,0.02)',
   context.strokeWidth = 1,
   context.fillStyle = 'rgba(0,0,0,0.05)';
   var circleArr = [];

//线条：开始xy坐标，结束xy坐标，线条透明度
function Line (x, y, _x, _y, o) {
  this.beginX = x,
  this.beginY = y,
  this.closeX = _x,
  this.closeY = _y,
  this.o = o;
}
//点：圆心xy坐标，半径，每帧移动xy的距离
function Circle (x, y, r, moveX, moveY) {
  this.x = x,
  this.y = y,
  this.r = r,
  this.moveX = moveX,
  this.moveY = moveY;
}
//生成max和min之间的随机数
function num (max, _min) {
  var min = arguments[1] || 0;
  return Math.floor(Math.random()*(max-min+1)+min);
}
// 绘制原点
function drawCricle (cxt, x, y, r, moveX, moveY) {
  var circle = new Circle(x, y, r, moveX, moveY)
  cxt.beginPath()
  cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
  cxt.closePath()
  cxt.fill();
  return circle;
}
//绘制线条
function drawLine (cxt, x, y, _x, _y, o) {
  var line = new Line(x, y, _x, _y, o)
  cxt.beginPath()
  cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
  cxt.moveTo(line.beginX, line.beginY)
  cxt.lineTo(line.closeX, line.closeY)
  cxt.closePath()
  cxt.stroke();
}
//初始化生成原点
function init () {
  circleArr = [];
  for (var i = 0; i < POINT; i++) {
    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
  }
  draw();
}

//每帧绘制
function draw () {
  context.clearRect(0,0,canvas.width, canvas.height);
  for (var i = 0; i < POINT; i++) {
    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
  }
  for (var i = 0; i < POINT; i++) {
    for (var j = 0; j < POINT; j++) {
      if (i + j < POINT) {
        var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
        B = Math.abs(circleArr[i+j].y - circleArr[i].y);
        var lineLength = Math.sqrt(A*A + B*B);
        var C = 1/lineLength*7-0.009;
        var lineOpacity = C > 0.03 ? 0.03 : C;
        if (lineOpacity > 0) {
          drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
        }
      }
    }
  }
}

//调用执行
window.onload = function () {
  init();
  setInterval(function () {
    for (var i = 0; i < POINT; i++) {
      var cir = circleArr[i];
      cir.x += cir.moveX;
      cir.y += cir.moveY;
      if (cir.x > WIDTH) cir.x = 0;
      else if (cir.x < 0) cir.x = WIDTH;
      if (cir.y > HEIGHT) cir.y = 0;
      else if (cir.y < 0) cir.y = HEIGHT;

    }
    draw();
  }, 16);
};
$(document).ready(function(){
  $(init)
  function init() {

  }
});


function randomNum(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    function randomColor(min,max){
        var _r = randomNum(min,max);
        var _g = randomNum(min,max);
        var _b = randomNum(min,max);
        return "rgb("+_r+","+_g+","+_b+")";
    }
    document.getElementById("mycanvas").onclick = function(e){
        e.preventDefault();
        drawPic();
    };
    function drawPic(){
        var $canvas = document.getElementById("mycanvas");
        var _str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var _picTxt = "";
        var _num = 6;
        var _width = $canvas.width;
        var _height = $canvas.height;
        var ctx = $canvas.getContext("2d");
        ctx.textBaseline = "bottom";
        ctx.fillStyle = randomColor(180,240);
        ctx.fillRect(0,0,_width,_height);
        for(var i=0; i<_num; i++){
            var x = (_width-10)/_num*i+10;
            var y = randomNum(_height/2,_height);
            var deg = randomNum(-45,45);
            var txt = _str[randomNum(0,_str.length)];
            _picTxt += txt;
            ctx.fillStyle = randomColor(10,100);
            ctx.font = randomNum(16,40)+"px SimHei";
            ctx.translate(x,y);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(txt, 0,0);
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
        }
        for(var i=0; i<_num; i++){
            ctx.strokeStyle = randomColor(90,180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0,_width), randomNum(0,_height));
            ctx.lineTo(randomNum(0,_width), randomNum(0,_height));
            ctx.stroke();
        }
        for(var i=0; i<_num*10; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,_width),randomNum(0,_height), 1, 0, 2*Math.PI);
            ctx.fill();
        }
        return _picTxt;
    }
    drawPic();
var input = document.getElementById("ver");
var name = input.value;

$(".ui-button").click(function(){
    var s1 = _picTxt.length();
    var s2 = name.length();
    if(s1 == s2) {
        var pd = 0;
        for(var i=0;i<s1;++i){
          if(_picTxt[i]!=name[i])
            pd = 1;
        }
        if(pd==0){
          
        }
        else{

        }
    }
    else{

    }
    // 事件处理代码
});