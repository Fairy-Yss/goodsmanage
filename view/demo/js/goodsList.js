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
    {field:'id', width:80, title: '编号', sort: true}, 
    {field:'goodspic', width:130, title: '商品图片'}, 
    {field:'goodsname', width:150, title: '商品名称', sort: true}, 
    {field:'price', width:100, title: '价格/货号'}, 
    {field:'salesum', title: '销量', width: 90}, 
    {field:'sku', width:110, title: 'SKU库存', sort: true}, 
    {field:'goodsta', width:125, title: '商品状态', sort: true}, 
    {field:'verifysta', width:120, title: '审核状态'}, 
    {field:'operate', width:185, title: '操作', sort: true,toolbar: '#barDemo'}, 
  ]] , 
  // 两种方式为数据表格赋值 第一种就是 url 给出一个数据接口地址 第二种就是使用 data属性直接赋值
  //url: '请求接口', 
  data: [{
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }, {
    "id": "10001"
    ,"goodspic": "黄帝"
    ,"goodsname": "黄帝内经"
    ,"price": "69￥"
    ,"salesum": "44"
    ,"sku": "10000"
    ,"goodsta": "已上架"
    ,"verifysta": "通过审核"
    ,"operate": ""
  }] ,
  page: true
});