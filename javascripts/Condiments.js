var SandwichMaker = (function(maker){

  maker.addCondiments = function(x) {
      //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
    var condimentsChosen = [];  
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true){
        condimentsChosen.push(x[i].defaultValue);
      }
    }
    return condimentsChosen;
  };

  maker.getCondimentsPrices = function(x) {
    var condimentsPrices = {
      ketchup: .25,
      mustard: .10,
      mayo: .30,
      aioli: .60
    };
    
    var condimentsChosenPrices = [];

    for (var j = 0; j < x.length; j++) {
      keyValue = x[j];
      condimentsChosenPrices.push(condimentsPrices[keyValue]);
    }
    return condimentsChosenPrices;
  };

  return maker;

})(SandwichMaker || {});