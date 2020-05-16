type Time = string | number | Date

function formatTime(time: Time, format = 'YYYY-MM-DD hh:mm:ss') {
  const date = new Date(time);
  const o = {
    "M+": date.getMonth() + 1,                 //月份   
    "d+": date.getDate(),                    //日   
    "h+": date.getHours(),                   //小时   
    "m+": date.getMinutes(),                 //分   
    "s+": date.getSeconds(),                 //秒   
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      const v = o[k] + ""
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? v : `00${v}`.substr(v.length));
    }
  }
  return format;
}

function formatDate(time: Time) {
  return formatTime(time, 'YYYY-MM-DD')
}


export { formatTime, formatDate }