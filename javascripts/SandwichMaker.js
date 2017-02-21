// var SandwichMaker = (function() {

//   // Private variable to store the price
//   var totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//     }
//   };
// })();


var SandwichMaker = (function() {
	var totalMeat = [];
	var totalBread = [];
	var totalCheese = [];
	var totalCondiments = [];
	var totalVeggies = [];

	var breadPrices = {
	  	white: 1.5,
	  	wheat: .8
  	};
  	var meatPrices = {
	  	turkey: 1.5,
	  	bacon: .8,
	  	ham: 1,
	  	roastBeef: 1.8
  	};
  	var cheesePrices = {
	  	american: .5,
	  	swiss: .9,
	  	colbyjack: 1,
	  	pepperjack: 1
  	};
  	var condimentPrices = {
  		ketchup: .25,
  		mustard: .10,
  		mayo: .30,
  		aioli: .60
  	};
  	var veggiesPrices = {
  		lettuce: .2,
  		spinach: .7,
  		pickles: .1,
  		onions: .8
  	};

  	breadChooser.addEventListener("change", function(event){
		selectedTopping = event.target.value;
		console.log(selectedTopping)
	});

	meatChooser.addEventListener("change", function(event){
		selectedTopping = event.target.value;
		console.log(selectedTopping)
	});
	function setMeatOrder (){
		
	}
	function getMeatOrder (){

	}

  return {
   
    }
  };
})();