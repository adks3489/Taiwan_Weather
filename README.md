Taiwan_Weather
==============
36小時天氣預報

===
<script src="taiwan_weather.js"></script>
<script>
  loadData();
  //using forecastDatas
</script>
===

Array: forecastDatas{
  location
  Array: dataArray{
    startTime           //Start Time
    endTime             //End Time
    weather             //Weather
    maxTemperature      //Maximum Tmperature
    minTemperature      //Minimum Temperature
    comfortindex        //Comfort Index
    precipitation_prob  //Population of Precipitation
  }
}
