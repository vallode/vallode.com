function date(){
	var d = new Date()
	var dayNames = ['<b>S</b>unday',
	'Mo<b>n</b>day', 'Tue<b>s</b>day',
	'W<b>e</b>dnesda<b>y</b>', 
	'<b>T</b>h<b>u</b>rsday', 'Fr<b>i</b>day', 
	'S<b>a</b>turda<b>y</b>' ]
	var monthNames = ['<b>J</b>a<b>n</b>uary',
	'Fe<b>b</b>ruary', '<b>M</b>ar<b>c</b>h', 'Ap<b>r</b>il', 'Ma<b>y</b>',
	'J<b>u</b>ne', 'Ju<b>ly</b>', '<b>A</b>ugust', 'Septe<b>m</b>ber', '<b>O</b>ctobe<b>r</b>', 'Novem<b>b</b>er', 'De<b>c</b>ember']
	var monthNamesN = ['January',
	'February', 'March', 'April', 'May',
	'June', 'July', 'August', 'September', 'October', 'November', 'December']

	document.getElementById('day').innerHTML = dayNames[d.getDay()]
	document.getElementById('dayM').innerHTML = d.getDate()
	document.getElementById('ending').innerHTML = nth(d.getDate())
	document.getElementById('month').innerHTML = monthNames[d.getMonth()]
	document.getElementById('year').innerHTML = d.getFullYear()

}
function nth(d) {
  if(d>3 && d<21) return '<b>t</b>h';
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "<b>t</b>h";
    }
} 
function animate(){
	$(".link").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	  $(this).removeClass("animated")
	})

	$(".link").hover(function(){
	  $(this).addClass("animated");        
	})
}