function getWeather() {

  jQuery(document).ready(function($) {
    $.ajax({
      url: "http://api.wunderground.com/api/d86a969d7ae00345/conditions/q/SC/Spartanburg.json",
      dataType: "jsonp",
      success: function(parsed_json) 
        {
        var location = parsed_json['current_observation']['display_location']   ['full'];
        var temp_f = parsed_json['current_observation']['temp_f'];
        var weatherIcon = parsed_json['current_observation']['icon_url'];
        var windSpd = parsed_json['current_observation']['wind_mph'];
        var windDir = parsed_json['current_observation']['wind_dir'];

          document.getElementById('weatherPic').src = weatherIcon;
          
          document.getElementById('city_state').innerHTML = location;
          
          document.getElementById('temp').innerHTML = temp_f + " F";
            
          document.getElementById('wind_spd').innerHTML = windSpd + " MPH" ;
        
          document.getElementById('wind_dir').innerHTML = windDir;
            
      } //end of ajax

    });
  }); 
    
} //End of Function