/**
 * Created by Ether on 2017/7/6.
 */

$(window).bind('scroll', function (event) {

    // 窗口的高度+看不见的顶部的高度=屏幕低部距离最顶部的高度
    var thisButtomTop = parseInt($(window).height()) + parseInt($(window).scrollTop())
    var thisTop = parseInt($(window).scrollTop()); // 屏幕顶部距离最顶部的高度
    var PictureTop = parseInt($('#gameContainer').offset().top)
    if (PictureTop >= thisTop && PictureTop <= thisButtomTop) {

          $('#gameContainer').attr('src', $('#gameContainer').attr('haoroomslazyload'))


          var time1,time2,time3,time4,time5,time6,time7,time8,time9,time10,time11,time12,time13,time14
          var lin = document.getElementById('line')
          var line = lin.getContext('2d')
          lin.width = 800
          lin.height = 600

          function Anim (opt) { // 初始化值
              this.opt = opt
          }
          // node 表示画布节点
          // staX 表示开始x坐标
          // staY 表示开始y坐标
          // len表示终点坐标，
          // timing表示运行的间隔时间，
          // num表示坐标增长的大小
          // direc表示判断绘制线条的方向，false表示X轴，ture表示Y轴
          // lw表示线宽的大小
          // color 表示绘制线条颜色
          Anim.prototype.draw = function (Time) { // 绘制直线的线条
              var opt = this.opt; // 设置对象的属性
              var adx = opt.staX
              var ady = opt.staY
              var that = {
                  x: opt.staX,
                  y: opt.staY
              }
              Time = setInterval(function () {
                  opt.direc // 判断绘制方向
                      ?
                      opt.len > ady ? ady += opt.num : ady -= opt.num :
                      opt.len > adx ? adx += opt.num : adx -= opt.num
                  if (adx == opt.len || ady == opt.len) { // 停止循环
                      clearInterval(Time)
                  }
                  opt.Node.beginPath(); // 开始绘制线条
                  opt.Node.moveTo(that.x, that.y)
                  opt.Node.lineTo(adx, ady)
                  opt.Node.lineWidth = opt.lw || 1
                  opt.Node.strokeStyle = opt.color
                  opt.Node.stroke()
              }, opt.timing)
          }
          Anim.prototype.txt = function (opc, font, text, x, y) { // 绘制文字
              line.beginPath()
              line.fillStyle = 'rgba(255,255,255,' + opc + ')'
              line.font = font + 'px bold 黑体 '
              line.fillText(text, x, y)
          }
          Anim.prototype.img = function (opc, src, x, y, w, h) { // 绘制图片
              var img = new Image()
              img.src = src
              line.fillStyle = 'rgba(255,255,255,' + opc + ')'
              line.drawImage(img, x, y, w, h)
          }

          var line1 = new Anim({ // 实例
              Node: line,
              color: 'skyblue',
              staX: 300,
              staY: 305,
              len: 270,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4

          })

          var line2 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 270,
              staY: 305,
              len: 240,
              timing: 20,
              num: 2,
              direc: true,
              lw: 4
          })
          var line3 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 250,
              staY: 240,
              len: 200,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          var line4 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 250,
              staY: 400,
              len: 380,
              timing: 20,
              num: 2,
              direc: true,
              lw: 4
          })

          var line5 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 250,
              staY: 380,
              len: 200,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          var line6 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 510,
              staY: 260,
              len: 535,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          var line7 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 535,
              staY: 260,
              len: 180,
              timing: 20,
              num: 2,
              direc: true,
              lw: 4
          })

          var line8 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 535,
              staY: 180,
              len: 570,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          var line9 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 500,
              staY: 350,
              len: 560,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          var line10 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 560,
              staY: 350,
              len: 320,
              timing: 20,
              num: 2,
              direc: true,
              lw: 4
          })

          var line11 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 560,
              staY: 320,
              len: 630,
              timing: 20,
              num: 2,
              direc: false,
              lw:4
          })

          var line12 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 500,
              staY: 400,
              len: 570,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })
          var line13 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 570,
              staY: 400,
              len: 420,
              timing: 20,
              num: 2,
              direc: true,
              lw:4
          })

          var line14 = new Anim({
              Node: line,
              color: 'skyblue',
              staX: 570,
              staY: 420,
              len: 650,
              timing: 20,
              num: 2,
              direc: false,
              lw: 4
          })

          // var img=new Image()
          // img.src="../img/8.png"
          // line.drawImage(img,60,250,142.5,32.5)
          // var img2 = new Image()
          // img2.src="../img/10.png"
          // line.drawImage(img2,60,395,119,19.5)
          //
          // var img3 = new Image()
          // img3.src="../img/2.png"
          // line.drawImage(img3,580,195,144.5,20)
          //
          // var img4 = new Image()
          // img4.src="../img/4.png"
          // line.drawImage(img4,640,335,142.5,20)
          //
          // var img5 = new Image()
          // img5.src="../img/6.png"
          // line.drawImage(img5,660,435,142.5,32)

          line1.draw(time1); // 执行绘制
          line4.draw(time4)
          line6.draw(time6)
          line9.draw(time9)
          line12.draw(time12)

          setTime(time2,line2, 10, 1100); // 定时器
          setTime(time7,line7, 10, 1200)
          setTime(time10,line10, 10, 1400)
          setTime(time13,line13, 10, 1400)

          var test = new Anim(); // 绘制文字实例
          setText(time3,line3, 100, 2600, '情感陪伴', 14, 118, 243, test, 'http://or5y02dsh.bkt.clouddn.com/images/front/imgRbt/8.png', 20, 255, 180, 50)
          var test2 = new Anim()
          setText(time5,line5, 100, 1000, '信息查询', 14, 118, 385, test2, 'http://or5y02dsh.bkt.clouddn.com/images/front/imgRbt/10.png', 20, 395, 180, 30)
          var test3 = new Anim()
          setText(time8,line8, 10, 2300, '头脑容量', 14, 580, 185, test3, 'http://or5y02dsh.bkt.clouddn.com/images/front/imgRbt/2.png', 580, 195, 180, 30)
          var test4 = new Anim()
          setText(time11,line11, 100, 1800, '3D立体交互', 14, 640, 325, test4, 'http://or5y02dsh.bkt.clouddn.com/images/front/imgRbt/4.png', 640, 335, 180, 30)
          var test5 = new Anim()
          setText(time14,line14, 100, 2300, '成长能力', 14, 660, 425, test5, 'http://or5y02dsh.bkt.clouddn.com/images/front/imgRbt/6.png', 660, 435, 180, 50)

          //

          // 文本图片函数
          function setText (time,line, set, out, text, font, x, y, test, src, x1, y1, w, h) {
              setTimeout(function () {
                  var num = 0
                  var times = setInterval(function () {
                      num++
                      var t = num / 30
                      if (t === 0.3) {
                          clearInterval(times)
                      }
                      line.draw(time)
                      test.txt(t, font, text, x, y)
                      test.img(t, src, x1, y1, w, h)
                      console.log(num, t, times)
                  }, set)
              }, out)
          }

          // 绘制事件函数
          function setTime (time,line, set, out) {
              setTimeout(function () {
                  var num = 0
                  var linetime = setInterval(function () {
                      num++
                      var t = num / 30
                      if (t === 0.3) {
                          clearInterval(linetime)
                      }
                      line.draw(time)
                  }, set)
              }, out)
          }
        $(window).unbind('scroll')
      }

})