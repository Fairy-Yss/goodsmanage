(function() { // 子iframe中注册父frame的routeruitl才能
  window.routerutil = window.parent.routerutil;
})();

function gotoPage(page) {
  routerutil.route(page);
}