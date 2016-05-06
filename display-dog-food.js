function showDogFoods (dogFoods) {

  var dogFoodBrand = document.getElementById("brand-name");

  var numBrands = dogFoods.dog_brands.length;

  var dogfoodTable = document.getElementById("dog-food-table");
  var cumTable = "";
  
  for (i=0; i < numBrands; i++) {
    var numTypes = dogFoods.dog_brands[i].types.length;
    
    for (j=0; j < numTypes; j++) {
      var numVolumes = dogFoods.dog_brands[i].types[j].volumes.length;

      for (k=0; k < numVolumes; k++) {

        var tableRow = "<tr><td>" + dogFoods.dog_brands[i].name
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].type
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].volumes[k].name
          + "</td><td>"
          + dogFoods.dog_brands[i].types[j].volumes[k].price
          + "</td></tr>";
        cumTable += tableRow;
      }
    }
  }

  dogfoodTable.innerHTML += cumTable;
}

food.loadDogFoods(showDogFoods);