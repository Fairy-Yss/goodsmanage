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
    {field:'id', width:80, title: 'ID', sort: true}, 
    {field:'username', width:80, title: '用户名'}, 
    {field:'sex', width:80, title: '性别', sort: true}, 
    {field:'city', width:80, title: '城市'}, 
    {field:'sign', title: '签名', minWidth: 150}, 
    {field:'experience', width:80, title: '积分', sort: true}, 
    {field:'score', width:80, title: '评分', sort: true}, 
    {field:'classify', width:80, title: '职业'}, 
    {field:'wealth', width:135, title: '财富', sort: true}, 
  ]] , 
  // 两种方式为数据表格赋值 第一种就是 url 给出一个数据接口地址 第二种就是使用 data属性直接赋值
  //url: '请求接口', 
  data: [{
    "id": "10001"
    ,"username": "杜甫"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "116"
    ,"ip": "192.168.0.8"
    ,"logins": "108"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10002"
    ,"username": "李白"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "12"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
    ,"LAY_CHECKED": true
  }, {
    "id": "10003"
    ,"username": "王勃"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "65"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10004"
    ,"username": "贤心"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "666"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10005"
    ,"username": "贤心"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "86"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10006"
    ,"username": "贤心"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "12"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10007"
    ,"username": "贤心"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "16"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }, {
    "id": "10008"
    ,"username": "贤心"
    ,"email": "xianxin@layui.com"
    ,"sex": "男"
    ,"city": "浙江杭州"
    ,"sign": "人生恰似一场修行"
    ,"experience": "106"
    ,"ip": "192.168.0.8"
    ,"logins": "106"
    ,"joinTime": "2016-10-14"
  }] ,
  page: true
});