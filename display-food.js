function showDogFoods (dogFoods) {
  // console.log("display-food.js-2 / dogFoods = ", dogFoods);
  // console.log("display-food.js-3 / dogFoods.dog_brands[0] = ", dogFoods.dog_brands[0]);

  var dogFoodBrand = document.getElementById("brand-name");
  var brandname = dogFoods.dog_brands[0].name;
  // console.log("display-food.js-7 / brandname = ", brandname);

  dogFoodBrand.innerHTML = brandname;
  var numBrands = dogFoods.dog_brands.length;
  console.log("display-food.js-11 / numBrands = ", numBrands);

  var dogfoodTable = document.getElementById("dog-food-table");
  console.log("display-food.js-14 / dogfoodTable = ", dogfoodTable);
  for (i=0; i < numBrands; i++) {

    dogfoodTable.innerHTML += "<tr>"
      + "<td>"
      + dogFoods.dog_brands[i].name
      + "</td>"
      + "</tr>";
  }
}

food.loadDogFoods(showDogFoods);