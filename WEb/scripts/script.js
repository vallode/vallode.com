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
	document.getElementById('tick').innerHTML = stockVar
	document.getElementById('interval').innerHTML = interval
}

function button(){
	interval = interval + 1
}