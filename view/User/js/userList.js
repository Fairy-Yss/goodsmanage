(function() { // 子iframe中注册父frame的routeruitl才能
    window.routerutil = window.parent.routerutil;
  })();
  
  function gotoPage(page) {
    routerutil.route(page);
  }
  
  var table = layui.table;
    
  table.render({
    elem: '#demoTable' ,
    //,url:'https://www.layui.com/demo/table/user/?page=1&limit=1
    cols: [[
      {type:'checkbox'}, 
      {field:'id', width:130, title: '用户ID', sort: true}, 
      {field:'usernumber', width:140, title: '用户账号'}, 
      {field:'username', width:170, title: '用户昵称', sort: true}, 
      {field:'usertype', width:140, title: '用户类型'}, 
      {field:'status', width:185, title: '用户启用状态', sort: true,toolbar: '#staDemo'}, 
      {field:'goodsnum', width:145, title: '订单数量', sort: true}, 
      {field:'operate', width:185, title: '操作', sort: true,toolbar: '#barDemo'}, 
    ]] , 
    // 两种方式为数据表格赋值 第一种就是 url 给出一个数据接口地址 第二种就是使用 data属性直接赋值
    //url: '请求接口', 
    data: [{
      "id": "10001"
      ,"usernumber": "17300000000"
      ,"username": "小红"
      ,"usertype": "普通用户"
      ,"status": ""
      ,"goodsnum": "98"
      ,"operate": ""
    }, {
        "id": "10001"
        ,"usernumber": "17300000000"
        ,"username": "小红"
        ,"usertype": "普通用户"
        ,"status": ""
        ,"goodsnum": "98"
        ,"operate": ""
    }, {
        "id": "10001"
      ,"usernumber": "17300000000"
      ,"username": "小红"
      ,"usertype": "普通用户"
      ,"status": ""
      ,"goodsnum": "98"
      ,"operate": ""
    }, {
        "id": "10001"
        ,"usernumber": "17300000000"
        ,"username": "小红"
        ,"usertype": "普通用户"
        ,"status": ""
        ,"goodsnum": "98"
        ,"operate": ""
    }, {
        "id": "10001"
        ,"usernumber": "17300000000"
        ,"username": "小红"
        ,"usertype": "普通用户"
        ,"status": ""
        ,"goodsnum": "98"
        ,"operate": ""
    }, {
        "id": "10001"
        ,"usernumber": "17300000000"
        ,"username": "小红"
        ,"usertype": "普通用户"
        ,"status": ""
        ,"goodsnum": "98"
        ,"operate": ""
    }, {
        "id": "10001"
      ,"usernumber": "17300000000"
      ,"username": "小红"
      ,"usertype": "普通用户"
      ,"status": ""
      ,"goodsnum": "98"
      ,"operate": ""
    }, {
        "id": "10001"
        ,"usernumber": "17300000000"
        ,"username": "小红"
        ,"usertype": "普通用户"
        ,"status": ""
        ,"goodsnum": "98"
        ,"operate": ""
    }] ,
    page: true
  });
  
  