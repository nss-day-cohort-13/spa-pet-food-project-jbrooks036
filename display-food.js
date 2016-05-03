function showDogFoods (dogFoods) {
  console.log("display-food.js-2 / dogFoods = ", dogFoods);
  console.log("display-food.js-3 / dogFoods.dog_brands[0] = ", dogFoods.dog_brands[0]);

  var dogFoodBrand = document.getElementById("brand-name");
  var brandname = dogFoods.dog_brands[0].name;
  console.log("display-food.js-7 / brandname = ", brandname);

  dogFoodBrand.innerHTML = brandname;

}

food.loadDogFoods(showDogFoods);