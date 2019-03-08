/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
*/
/* 示例 :
输入: "()[]{}"
输出: true

输入: "(]"
输出: false */

// stack 栈
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  var lastCode = -1, tempCode = 0, arr = [];
  for (var i = 0, len = s.length; i < len; i++) {
    var code = s.charAt(i);
    // console.log(code)
    switch (code) {
      case '[':
        tempCode = 0;
        break;
      case '{':
        tempCode = 1;
        break;
      case '(':
        tempCode = 2;
        break;
      case ')':
        tempCode = 3;
        break;
      case '}':
        tempCode = 4;
        break;
      case ']':
        tempCode = 5;
        break;
    }
    console.log(lastCode, tempCode)
    if (lastCode + tempCode == 5) {
      arr.pop()
      if (arr.length > 0) {
        lastCode = arr[arr.length - 1]
      }
    } else {
      lastCode = tempCode;
      arr.push(tempCode);
    }
  }
  return arr.length == 0 ? true : false
};
var str = '(]'
var res = isValid(str);
console.log(res)