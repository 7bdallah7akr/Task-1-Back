const fun1 = require("./allFun/getLocation");
const fun2 = require("./allFun/getWeather");

fun1.getLocation(process.argv[2], (error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("longitude:", data.longitude);
    console.log("latitude:", data.latitude);
    fun2.getWeather(data.longitude, data.latitude, (error, data) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Country:", data.country);
        console.log("Temperature:", data.temperature);
        console.log("Condition:", data.condition);
      }
    });
  }
});