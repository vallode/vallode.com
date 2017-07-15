function date(){
	var d = new Date()

	document.getElementById('day').innerHTML = d.getDate()
	document.getElementById('month').innerHTML = '0' + (d.getMonth() + 1)
	document.getElementById('year').innerHTML = d.getFullYear()
}
function getQuote() {
	var quotes = [
		'"If you only read the books that everyone else is reading, you can only think what everyone else is thinking." ― Haruki Murakami',
		'"I can buy anything but I can not buy more time" ― Warren Buffet',
		'"I think the saddest people always try their hardest to make people happy. Because they know what it feels like to feel absolutely worthless and they don\'t want anyone else to feel like that." ― Robin Williams',
		'"You\'re under no obligation to be the same person you were 5 minutes ago" ― Alan Watts'
	]
	var randomNumber = Math.floor(Math.random() * quotes.length)

	document.getElementById('quote').innerHTML = quotes[randomNumber]
}
function changeT() {
	    $('.dateTemperatureC').toggleClass('hide')
	    $('.dateTemperatureF').toggleClass('hide')
}
// Search stuff //
