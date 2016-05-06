function showCatFoods (catFoods) {

  var catFoodBrand = document.getElementById("brand-name");

  var numBrands = catFoods.cat_brands.length;

  var catfoodTable = document.getElementById("cat-food-table");

  var cumTable = "";
  
  for (i=0; i < numBrands; i++) {

    var numBreeds = catFoods.cat_brands[i].breeds.length;
    var breedList = "";
    for (b=0; b < numBreeds; b++) {
      breedList += catFoods.cat_brands[i].breeds[b] + ((b == numBreeds - 1) ? "" : ", ");
    }

    var numTypes = catFoods.cat_brands[i].types.length;   
    for (j=0; j < numTypes; j++) {
      var numVolumes = catFoods.cat_brands[i].types[j].volumes.length;

      for (k=0; k < numVolumes; k++) {

        var tableRow = "<tr><td>" + catFoods.cat_brands[i].name
          + "</td><td>"
          + breedList
          + "</td><td>"
          + catFoods.cat_brands[i].types[j].type
          + "</td><td>"
          + catFoods.cat_brands[i].types[j].volumes[k].name
          + "</td><td>"
          + catFoods.cat_brands[i].types[j].volumes[k].price
          + "</td></tr>";
        cumTable += tableRow;
      }
    }
  }

  catfoodTable.innerHTML += cumTable;
}

food.loadCatFoods(showCatFoods);