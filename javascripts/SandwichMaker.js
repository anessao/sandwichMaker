// 	var breadPrices = {
// 	  	white: 1.5,
// 	  	wheat: .8
//   	};
//   	var meatPrices = {
// 	  	turkey: 1.5,
// 	  	bacon: .8,
// 	  	ham: 1,
// 	  	roastBeef: 1.8
//   	};
//   	var cheesePrices = {
// 	  	american: .5,
// 	  	swiss: .9,
// 	  	colbyjack: 1,
// 	  	pepperjack: 1
//   	};
//   	var condimentPrices = {
//   		ketchup: .25,
//   		mustard: .10,
//   		mayo: .30,
//   		aioli: .60
//   	};
//   	var veggiesPrices = {
//   		lettuce: .2,
//   		spinach: .7,
//   		pickles: .1,
//   		onions: .8
//   	};

var SandwichMaker = (function() {

  return {
  	
  	//RETURNS THE TOTAL PRICE OF TOPPINGS TO DOMHANDLER.JS
    addTopping: function(toppingPrice) {
      var totalPrice = 0;
      totalPrice += toppingPrice.reduce((x, y) => x+y, 0);
      return totalPrice;
    }
  };
})();






























