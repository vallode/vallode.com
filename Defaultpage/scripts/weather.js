function getCookie(name) {
  	match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
	if (match) { 
		cookiesExist = true
		return match[2]
	}else{
		cookiesExist = false
	}
}
function validate(){
	getCookie('latitude')
	if (cookiesExist === true) {
		return false
	}else{
		return true
	}
}
function weather(){
	if (validate()) {  
		navigator.geolocation.getCurrentPosition(function(position) {
		    loadWeather(position.coords.latitude+','+position.coords.longitude)
		    document.cookie="latitude="+position.coords.latitude
		    document.cookie="longitude="+position.coords.longitude
  		})
  	}else{
		loadWeather(getCookie('latitude')+','+getCookie('longitude'))
  	}
}
function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'C',
    success: function(weather) {
      html = weather.temp+'&deg;'+weather.units.temp
      
      $(".dateWeatherC").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  })
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = weather.temp+'&deg;'+weather.units.temp
      
      $(".dateWeatherF").toggleClass('hide')
      $(".dateWeatherF").html(html)
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>')
    }
  })
}
function changeC() {
	$('.dateWeatherC').toggleClass('hide')
	$('.dateWeatherF').toggleClass('hide')
}