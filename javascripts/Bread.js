var SandwichMaker = (function(maker){

  maker.addBread = function(x) {
      //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
    var breadChosen = [];  
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true){
        breadChosen.push(x[i].defaultValue);
      }
    }
    return breadChosen;
  };

  maker.getBreadPrices = function(x) {
    var breadPrices = {
      White: 1.5,
      Wheat: .8
    };
    
    var breadChosenPrices = [];

    for (var j = 0; j < x.length; j++) {
      keyValue = x[j];
      breadChosenPrices.push(breadPrices[keyValue]);
    }
    return breadChosenPrices;
  };

  return maker;

})(SandwichMaker || {});