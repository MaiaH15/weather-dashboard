    var cityName = $("#city-name").val();
    getWeather(cityName); 

    $("#city-form").submit(function(event){ 
        event.preventDefault();