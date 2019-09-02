// 下面的代码是一段立即执行函数，用来动态计算高度，让页面适应不同的电脑的屏幕【使用了jquery方法，jquery已经在index.html中引入了】
(function($) {
  var resizeFn = function (type) {
    // 获取浏览器窗口的高度
    var windowHeight = $(document).height();
    // console.log(windowHeight);
    //获取容纳系统的容器 dom
    var pageBox = $('#syspage');
    //设置pageBox的高度
    pageBox.css('height',windowHeight+'px')

    if(type=='load') {
      var hash = location.hash;
      var path = hash.substring(1);
      routerutil.route(path);
    }
  }

  window.onload = resizeFn.bind(this,'load');
  window.onresize = resizeFn.bind(this,'resize'); 
})($);

// 下面的routerutil已经注册到了全局对象 window中，所以可以直接使用了，跳转路由直接使用该方法
function gotoPage(page) {
  routerutil.route(page);
}