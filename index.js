// 下面的代码是一段立即执行函数，用来动态计算高度，让页面适应不同的电脑的屏幕【使用了jquery方法，jquery已经在index.html中引入了】
(function($) {
  var resizeFn = function () {
    // 获取浏览器窗口的高度
    var windowHeight = $(document).height();
    // console.log(windowHeight);
    //获取容纳系统的容器 dom
    var pageBox = $('#syspage');
    //设置pageBox的高度
    pageBox.css('height',windowHeight+'px')
  }
  window.onload = resizeFn;
  window.onresize = resizeFn;
})($);

function gotoPage(page) {
  var iframe = $('#sub_page_container');
  if(page == 'page_1') {
    iframe.attr('src','./view/demo/html/demo.html')
  }
  if(page == 'page_2') {
    iframe.attr('src','./view/demo2/html/demo.html')
  }
}