
var ipList = [{
  host: '10.49.80.147',
  primary_leaf: 'aaa'
}, {
  host: '10.49.80.150',
  primary_leaf: 'bbb'
}, {
  host: '10.49.80.146',
  primary_leaf: 'ccc'
}, {
  host: '10.49.80.140',
  primary_leaf: 'aaa'
}]
function ipToNumber(ip) {
  var num = 0;
  if (ip == "") {
    return num;
  }
  var aNum = ip.split(".");
  if (aNum.length != 4) {
    return num;
  }
  num += parseInt(aNum[0]) << 24;
  num += parseInt(aNum[1]) << 16;
  num += parseInt(aNum[2]) << 8;
  num += parseInt(aNum[3]) << 0;
  num = num >>> 0;//这个很关键，不然可能会出现负数的情况 
  return num;
}

function numberToIp(number) {
  var ip = "";
  if (number <= 0) {
    return ip;
  }
  var ip3 = (number << 0) >>> 24;
  var ip2 = (number << 8) >>> 24;
  var ip1 = (number << 16) >>> 24;
  var ip0 = (number << 24) >>> 24

  ip += ip3 + "." + ip2 + "." + ip1 + "." + ip0;

  return ip;
}
function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }

  }
  return items;
}

// var newIp = [];
for (var i in ipList) {
  var ipHost = ipList[i]['host'];
  // ipToNumber(ipHost);
  // console.log(ipToNumber(ipHost));
  console.log(ipList[i]['host'])
  ipList[i]['host'].push(ipToNumber(ipHost))
}
quickSort(ipList['host'], 0, ipList['host'].length - 1);
// console.log(newIp);

for (var i in ipList) {
  ipList[i]['host'] = numberToIp(ipList[i]['host']);
}
// console.log(newIp);
console.log(ipList);
// let ips = ['192.168.1.11', '192.168.1.12', '192.168.1.13', '10.6.10.20']
// let ipToNum = [];
// let numToIp = [];
// ips.forEach(item => {
//   ipToNum.push(ipToNumber(item));
// })
// quickSort(ipToNum).map(item => {
//   numToIp.push(numberToIp(item));
// })
// console.log(numToIp); 
