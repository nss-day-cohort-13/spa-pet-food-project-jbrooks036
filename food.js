var food = (function () {
  var dogfoodArray = [];
  var catfoodArray = [];

  return {
  	loadDogFoods: function (callbackShowFoods) {
  	// Create an XHR object
  		var loader = new XMLHttpRequest();
  		// Then tell the XHR object exactly what to do
  		loader.open("GET", "dogfood.json");
  		// Tell the XHR object to start
  		loader.send();

      // XHR objects emit events when their operation is complete, or an error occurs
      loader.addEventListener("load", function () {
        // Set the value of the private array
        dogfoodArray = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. 
        callbackShowFoods(dogfoodArray);
      });
  	},

    loadCatFoods: function (callbackShowFoods) {
    // Create an XHR object
      var loader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      loader.open("GET", "catfood.json");
      // Tell the XHR object to start
      loader.send();

      // XHR objects emit events when their operation is complete, or an error occurs
      loader.addEventListener("load", function () {
        // Set the value of the private array
        catfoodArray = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. 
        callbackShowFoods(catfoodArray);
      });
    }   

  }
})();


