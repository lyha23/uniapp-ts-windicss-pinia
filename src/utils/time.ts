// @ts-ignore
import DateFormat from '@xfl/date-format/DateFormat.js'

var dateformat = new DateFormat()
export const timeTransform = (obj) => {
	let objTimestamp = dateformat.setTime(
		obj,
		'yyyy-0m-0d 0h:0f:0s'
	).timestamp
	return timestampFormat(objTimestamp / 1000)
}

const zeroize = (num) => {
	return (String(num).length == 1 ? '0' : '') + num
}

export const timestampFormat = (timestamp: number) => {
	if (!timestamp) return ''
	var curTimestamp = parseInt(String(new Date().getTime() / 1000)) //当前时间戳
	var timestampDiff = curTimestamp - timestamp // 参数时间戳与当前时间戳相差秒数
	console.log(timestampDiff)
	
	var curDate = new Date(curTimestamp * 1000) // 当前时间日期对象
	var tmDate = new Date(timestamp * 1000)  // 参数时间戳转换成的日期对象
	
	var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate()
	var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds()
	
	if (timestampDiff > 0 && timestampDiff < 60) { // 一分钟以内
		return '刚刚'
	} else if (timestampDiff > 0 && timestampDiff < 3600) { // 一小时前之内
		return Math.floor(timestampDiff / 60) + '分钟前'
	} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
		return '今天' + zeroize(H) + ':' + zeroize(i)
	} else {
		var newDate = new Date((curTimestamp - 86400) * 1000) // 参数中的时间戳加一天转换成的日期对象
		if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
			return '昨天' + zeroize(H) + ':' + zeroize(i)
		} else if (curDate.getFullYear() == Y) {
			return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i)
		} else {
			return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i)
		}
	}
}

export const auctionTimes = (timestamp) => {
	if (!timestamp) return ''
	var curTimestamp = parseInt(new Date().getTime() / 1000) //当前时间戳
	var timestampDiff = curTimestamp - timestamp // 参数时间戳与当前时间戳相差秒数
	console.log(timestampDiff)
	
	var curDate = new Date(curTimestamp * 1000) // 当前时间日期对象
	var tmDate = new Date(timestamp * 1000)  // 参数时间戳转换成的日期对象
	
	var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate()
	var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds()
	
	if (timestampDiff > 0) {
		if (timestampDiff < 60) { // 一分钟以内
			return '刚刚'
		} else if (timestampDiff < 3600) { // 一小时前之内
			return Math.floor(timestampDiff / 60) + '分钟前'
		} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
			if (H < 12) {
				return '今早' + String(H) + '点'
			} else if (H >= 12 && H < 18) {
				return '下午' + String(H - 12) + '点'
			} else if (H >= 18 && H < 24) {
				return '今晚' + String(H - 12) + '点'
			}
		} else {
			var newDate = new Date((curTimestamp - 86400) * 1000) // 参数中的时间戳加一天转换成的日期对象
			if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
				return '昨天' + String(H) + '点'
			} else if (curDate.getFullYear() == Y) {
				return String(m) + '月' + String(d) + '日 ' + String(H) + '时'
			} else {
				return Y + '年' + String(m) + '月' + String(d) + '日 ' + String(H) + '时'
			}
		}
	} else {
		timestampDiff = -timestampDiff
		if (timestampDiff < 300) { // 一分钟以内
			return '即将开始'
		} else if (timestampDiff < 3600) { // 一小时前之内
			return Math.floor(timestampDiff / 60) + '分钟后'
		} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
			if (H < 12) {
				return '今早' + String(H) + '点'
			} else if (H >= 12 && H < 18) {
				return '下午' + String(H - 12) + '点'
			} else if (H >= 18 && H < 24) {
				return '今晚' + String(H - 12) + '点'
			}
		} else {
			var newDate = new Date((curTimestamp - 86400) * 1000) // 参数中的时间戳加一天转换成的日期对象
			if (timestampDiff > 0 && newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
				return '明天' + String(H) + '点'
			} else if (timestampDiff > 0 && curDate.getFullYear() == Y) {
				return String(m) + '月' + String(d) + '日 ' + String(H) + '点'
			} else if (timestampDiff > 0) {
				return Y + '年' + String(m) + '月' + String(d) + '日 ' + String(H) + '点'
			}
		}
	}
}