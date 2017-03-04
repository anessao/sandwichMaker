var SandwichMaker = (function(maker){
 
  maker.addMeat = function(x) {
    
    var meatsChosen = [];
    //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES 
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true && x[i].name === "meats"){
        meatsChosen.push(x[i].defaultValue);
      }
    }
    return meatsChosen;
  };

  maker.getMeatPrices = function(x) {
    var meatPrices = {
      turkey: 1.5,
      bacon: .8,
      ham: 1,
      roastBeef: 1.8
    };
    
    var meatsChosenPrices = [];

    for (var j = 0; j < x.length; j++) {
      keyValue = x[j];
      meatsChosenPrices.push(meatPrices[keyValue]);
    }
    return meatsChosenPrices;
  };

  return maker;

})(SandwichMaker || {});


















