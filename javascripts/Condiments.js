var SandwichMaker = (function(maker){

  maker.addCondiments = function(x) {
      //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
    var condimentsChosen = [];  
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true && x[i].name === "condiments"){
        condimentsChosen.push(x[i].defaultValue);
      }
    }
    return condimentsChosen;
  };

  maker.getCondimentsPrices = function(x) {
    var condimentsPrices = {
      ketchup: 1.25,
      mustard: 1.10,
      mayo: 1.30,
      aioli: 1.60
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
