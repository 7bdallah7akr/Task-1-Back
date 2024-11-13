const request = require("request");
 const getWeather = (longitude, latitude, callback) => {
   const url ="http://api.weatherapi.com/v1/current.json?key=52d707df91e14b1d93c140158240911&q="+longitude+","+latitude;
   
   request({ url, json: true }, (error, response) => {
     if (error) {
      callback("This site cant be reached.", undefined);
     } else if (response.body.error) {
      callback(response.body.error.message, undefined);
     } else {
      callback(undefined, {
        country : response.body.location.name,
        temperature: response.body.current.temp_c,
        condition: response.body.current.condition.text
        });
     }
   });
 }
 module.exports = {
    getWeather
 }