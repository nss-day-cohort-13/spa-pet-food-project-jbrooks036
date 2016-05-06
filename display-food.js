function showDogFoods (dogFoods) {
  // console.log("display-food.js-2 / dogFoods = ", dogFoods);
  // console.log("display-food.js-3 / dogFoods.dog_brands[0] = ", dogFoods.dog_brands[0]);

  var dogFoodBrand = document.getElementById("brand-name");
//  var brandname = dogFoods.dog_brands[0].name;
  // console.log("display-food.js-7 / brandname = ", brandname);

//  dogFoodBrand.innerHTML = brandname;
  var numBrands = dogFoods.dog_brands.length;
  console.log("display-food.js-11 / numBrands = ", numBrands);

  var dogfoodTable = document.getElementById("dog-food-table");
  console.log("display-food.js-14 / dogfoodTable = ", dogfoodTable);
  var cumTable = "";
  
  for (i=0; i < numBrands; i++) {
    var numTypes = dogFoods.dog_brands[i].types.length;
   
    for (j=0; j < numTypes; j++) {
      var numVolumes = dogFoods.dog_brands[i].types[j].volumes.length;
      console.log ("numVolumes = ", numVolumes);

      for (k=0; k < numVolumes; k++) {

        console.log("dogFoods.dog_brands[", i, "].name = ", dogFoods.dog_brands[i].name);
        console.log("types[", j, "] = ", dogFoods.dog_brands[i].types[j].type);
        console.log("volumes[", k, "] = ", dogFoods.dog_brands[i].types[j].volumes[k]);
   
        var tableRow = "<tr><td>" + dogFoods.dog_brands[i].name
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].type
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].volumes[k].name
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].volumes[k].price
          + "</td></tr>";
        console.log("tableRow = ", tableRow); 
        cumTable += tableRow;
        console.log("cumTable = ", cumTable);
      }
    }
  }

  dogfoodTable.innerHTML += cumTable;
}

food.loadDogFoods(showDogFoods);