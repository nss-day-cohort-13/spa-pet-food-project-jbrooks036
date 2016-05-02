// load json file via XHR
function executeThisCodeAfterFileIsLoaded () {
  // A bit more about what `this` is here. What is the execution context?
  console.log(this);
  console.log(this.responseText);

  // Show usage of JSON.parse() here to get a POJO
  var pojoFood = JSON.parse(this.responseText);
  console.log("pojoFood = ", pojoFood);
}

function executeThisCodeIfXHRFails () {
  console.log("ERROR:  XHR Failed.")
}

// Create an XHR object
var myRequest = new XMLHttpRequest();

// XHR objects emit events when their operation is complete, or an error occurs
myRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails);

// Then tell the XHR object exactly what to do
myRequest.open("GET", "dogfood.json");

// Tell the XHR object to start
myRequest.send();


// store JSON contents in .js variable
var dogfoodArray = JSON.parse(this.responseText);



