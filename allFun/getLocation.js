const request = require("request");
const getLocation = (place, callback) => {
  const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?access_token=pk.eyJ1IjoiN2JkYWxsYWg3YWtyIiwiYSI6ImNtM2Fsbm9idjAyZzAybXM2ZTRkejFhcTQifQ.JonllWWmSQRgyz0gBszTVA";
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("This site can’t be reached.", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length == 0) {
      callback("Please enter a valid location.", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
      });
    }
  });
};
module.exports = {
    getLocation
}