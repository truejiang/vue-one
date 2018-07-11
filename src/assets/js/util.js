// 删除文本中的标签
export function delHtmlTag (str) {
  return str.replace(/<[^>]+>/g, '')
}

// 获取请求某个日期数据的时间格式

function formatTime (time) {
  return time < 10 ? '0' + time : time
}
export function getDate (currentDate) {
  let date, years, month
  if (!currentDate) {
    date = new Date()
    years = date.getFullYear()
    month = date.getMonth() + 1
  } else {
    [years, month] = currentDate.split('-')
    if (parseInt(month) === 1) {
      years = parseInt(years) - 1
      month = 12
    } else {
      month = parseInt(month) - 1
    }
  }
  return `${years}-${formatTime(month)}-01`
}
