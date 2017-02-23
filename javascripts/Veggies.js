var SandwichMaker = (function(maker){

  maker.addVeggies = function(x) {
      //LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
    var veggiesChosen = [];  
    for (var i = 0; i < x.length; i++){
      if (x[i].checked === true){
        veggiesChosen.push(x[i].defaultValue);
      }
    }
    return veggiesChosen;
  };

  maker.getVeggiesPrices = function(x) {
    var veggiesPrices = {
      lettuce: .2,
      spinach: .7,
      pickles: .1,
      onions: .8
    };
    
    var veggiesChosenPrices = [];

    for (var j = 0; j < x.length; j++) {
      keyValue = x[j];
      veggiesChosenPrices.push(veggiesPrices[keyValue]);
    }
    return veggiesChosenPrices;
  };

  return maker;

})(SandwichMaker || {});