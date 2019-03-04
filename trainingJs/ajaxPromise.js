/* 
用promise实现ajax
*/
const ajaxPromise = param => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(param.type || 'get', param.url, true);
    xhr.send(param.data || null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(Json.parse(xhr.responseText));
        } else {
          reject(Json.parse(xhr.responseText));
        }
      }
    }
  })
}

// jQuery
const ajaxPromise = param => {
  return new Promise((resolve, reject) => {
    $.ajax({
      "type": param.type || "get",
      "async": param.async || true,
      "url": param.url,
      "data": param.data || "",
      "success": res => {
        resolve(res);
      },
      "error": err => {
        reject(err)
      }
    })
  })
}

// 第一个请求
let step1 = () => {
  ajaxPromise({
    "url":''
  }).then(res => {
    console.log('第一个强求正确返回--->' + res);
    step2(res);
  }).catch(err => {
    console.log('第一个请求失败--->' + err)
  })
}

// 第二个请求
let step2 = () => {
  ajaxPromise({
    "type":'get',
    "url": '',
    "data": {"name": res}
  }).then(res => {
    console.log('第二个请求正确返回--->' + res)
  }).catch(res => {
    console.log('第二个请求失败--->' + err)
  })
}