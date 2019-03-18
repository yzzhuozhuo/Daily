// get请求
var xhr = new XMLHttpRequest();

xhr.open('GET', '/api/user?id=333', true);
xhr.send();

xhr.onreadystatechange = function (e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};


// 完整的POST请求例子

var xhr = new XMLHttpRequest();

xhr.open('POST', '/api/user', true);
// POST请求需要设置此参数
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhr.send('name=33&ks=334');

xhr.onreadystatechange = function (e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};

// 封装原生Ajax请求
// 封装get请求
/**
 * Ajax的Get请求辅助方法
 * @param {String} url  请求后台的地址
 * @param {Function} callback  请求成之后，返回数据成功，并且调用此方法，这个方法接受一个参数就是后台返回的数据。
 * @return undefined
 */
function ajaxGet(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
}

// 调用
ajaxGet('/user.json', function (data) {
  console.log(data);
});

// 封装post请求
function ajaxPost(url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(data);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  }
}

// 调用
ajaxPost('/api/user', 'id=9&com=aicoder', function (data) {
  // 后台返回的数据就是 字符串类型。要转成json，必须自己手动转换。
  var user = JSON.parse(data);
  console.log(user.id);
  console.log(user.com);
});
