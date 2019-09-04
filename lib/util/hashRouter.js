/**
 * 封装一个工具类来实现路由 原理是利用 hashchange事件来实现
 */
 (function($) {
    // 事件处理函数
    var hashchangeFn = function() {
      // 获取当前的hash值
      var hash = location.hash;
      var path = hash.substring(1);
      // 获取在全局定义的routers信息【路由信息】
      var routers = window.routers || [];
      // 获取当前路由信息
      if(Array.isArray(routers)){
        if(routers.length){
          // 标示是否匹配路由
          var ismatch = false;
          routers.forEach(function(item,index) {
            if(item.path == path) {
              ismatch = true;
              // 匹配成功，设置视图内容
              $('#sub_page_container').attr('src',item.templateurl);
            }
          });
          if(!ismatch) {
            console.error(`未匹配到路由${path},请检查是否配置该路由！`);
          }
        } else {
          console.error('当前还未配置路由，请先配置路由');
        }
      } else {
        console.error("请配置路由信息，且将路由放到window环境下例如,路由配置应该为对象数组！类似：window.routers = [{path:'index',templateurl:'xxx.html'}]");
      }
      // console.log(location.hash);
      // console.log(path);
    }
    // 注册 监听hash值的变化事件处理函数
    window.addEventListener('hashchange',hashchangeFn);
    // 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件【主要是针对刷新时候，让页面回到路由对应的页面】
    window.addEventListener('DOMContentLoaded',hashchangeFn);
 })($);

 (function() {
  //  在全局执行环境注册一个routeutil路由工具，里面提供跳转路由的方法
   window.routerutil = {
    // 封装当前路由的对象 包括路由的路径 path 以及路由的参数 params
    routecfg:{},
    // 定义路由方法，传入路由地址
    route: function (path_obj) {
      if(typeof path_obj == 'undefined') {
        console.error("您忘记了路由的地址，请传入路由的地址 类似： routerutil.route('demo/home') 或者 routerutil.route({path:'demo/home', params: {id:'xxx',name:'ddd'}})");
        return;
      }
      if(typeof path_obj == 'string') {
        location.hash = path_obj;
        this.routecfg.path = path_obj;
        this.routecfg.params = path_obj.params || {}
        return ;
      }
      if(typeof path_obj == 'object') {
        location.hash = path_obj.path;
        this.routecfg.path = path_obj.path;
        this.routecfg.params = path_obj.params || {};
        return;
      }
    }
   }
 })();