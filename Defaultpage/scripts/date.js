function date(){
	var d = new Date()
	var monthNumber = d.getMonth()
	var monthAdjust = d.getMonth() + 1
	var year = String(d.getFullYear())

	var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	document.getElementById('day').innerHTML = d.getDate()
	document.getElementById('dayName').innerHTML = dayNames[d.getDay()]
	document.getElementById('monthName').innerHTML = monthNames[monthNumber]
	if (d.getMonth > 9) {
		document.getElementById('month').innerHTML = monthAdjust
	}else{
		document.getElementById('month').innerHTML = "0" + monthAdjust
	}
	year = year.substring(2)
	document.getElementById('year').innerHTML = year
}
	