var stockVar = 0
var interval = 1;

function mainLoop(){
	update()
	draw()
	requestAnimationFrame(mainLoop)
}

function update(){
	stockVar = stockVar + interval
}

function draw(){
	if (stockVar <= 100){
		document.getElementById('buyInterval').innerHTML = 'Not enough money'
	}else {
		document.getElementById('buyInterval').innerHTML = 'Buy 1 interval'
	}
	if (stockVar <= 1000){
		document.getElementById('buyInterval10').innerHTML = 'Not enough money'
	}else {
		document.getElementById('buyInterval10').innerHTML = 'Buy 10 intervals'
	}
	document.getElementById('tick').innerHTML = stockVar
	document.getElementById('interval').innerHTML = interval
}
function button(){
	if (stockVar <= 100){
		return
	}else {
		stockVar = stockVar - 100
		interval = interval + 1
	}
}
function button2(){
	if (stockVar <= 1000){
		return
	}else {
		stockVar = stockVar - 1000
		interval = interval + 10
	}
}