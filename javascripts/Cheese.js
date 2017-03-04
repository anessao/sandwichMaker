var SandwichMaker = (function(maker){

  maker.addCheese = function(x) {
    //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
    var cheeseChosen = [];  
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true && x[i].name === "cheese"){
        cheeseChosen.push(x[i].defaultValue);
      }
    }
    return cheeseChosen;
  };

  maker.getCheesePrices = function(x) {
    var cheesePrices = {
      american: .5,
      swiss: .9,
      colbyjack: 1,
      pepperjack: 1
    };
    
    var cheeseChosenPrices = [];

    for (var j = 0; j < x.length; j++) {
      keyValue = x[j];
      cheeseChosenPrices.push(cheesePrices[keyValue]);
    }
    return cheeseChosenPrices;
  };

  return maker;

})(SandwichMaker || {});