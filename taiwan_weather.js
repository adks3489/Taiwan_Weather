var forecastDatas = [];
function Forecast36hr(location){
  this.location = location;
  this.dataArray = [];
}
function ForecastData(start, end, Wx, maxT, minT, CI, Pop){
  this.startTime = start;
  this.endTime = end;
  this.weather = Wx;
  this.maxTemperature = maxT;
  this.minTemperature = minT;
  this.comfortindex = CI;
  this.precipitation_prob = Pop;
}
function loadData(){
  $.ajax({
    url: "proxy.php?url=http://opendata.cwb.gov.tw/opendata/MFC/F-C0032-001.xml",
    type: 'GET',
    dataType: "text",
    success: function( data, textStatus, jqXHR){
      xmlDoc = jQuery.parseXML(data);
      $xml = $(xmlDoc);
      $xml.find("location").each(function(index, location){
        forecastDatas.push(new Forecast36hr($(location).find("name").text()));
        for(var i=0; i<3; ++i){
          forecastDatas[index].dataArray.push(
            new ForecastData($(location).find("Wx time").eq(i).attr("start"),
                             $(location).find("Wx time").eq(i).attr("end"),
                             $(location).find("Wx text").eq(i).text(),
                             $(location).find("MaxT value").eq(i).text(),
                             $(location).find("MinT value").eq(i).text(),
                             $(location).find("CI text").eq(i).text(),
                             $(location).find("PoP value").eq(i).text())
          );
        }
      });
    }
  });
}
