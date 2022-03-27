// 日期格式化
import hljs from "highlight.js";

const dateFormat = (format = 'yyyy-MM-dd hh:mm:ss', date) => {
  if (!date) {
    return '';
  }
  var o = {
    "M+": date.getMonth() + 1,                 //月份
    "d+": date.getDate(),                    //日
    "h+": date.getHours(),                   //小时
    "m+": date.getMinutes(),                 //分
    "s+": date.getSeconds(),                 //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds()             //毫秒
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return format;
}

// 两个日期相差天数
const diffDays = (start, end = new Date()) => {
  // 计算两个日期之间的差值
  let totalDays, diffDate
  let myDate_1 = Date.parse(start)
  let myDate_2 = Date.parse(end)
  // 将两个日期都转换为毫秒格式，然后做差
  diffDate = Math.abs(myDate_1 - myDate_2) // 取相差毫秒数的绝对值

  totalDays = Math.floor(diffDate / (1000 * 3600 * 24)) // 向下取整
  // console.log(totalDays)

  return totalDays    // 相差的天数
}

// 代码高亮
const highlight = () => {
  // 配置 highlight.js
  hljs.configure({
    // 忽略未经转义的 HTML 字符
    ignoreUnescapedHTML: true
  })
  // 获取到内容中所有的code标签
  const codes = document.querySelectorAll('pre code')
  codes.forEach((el) => {
    // 让code进行高亮
    hljs.highlightElement(el)
  })
}

export {dateFormat, diffDays, highlight}
