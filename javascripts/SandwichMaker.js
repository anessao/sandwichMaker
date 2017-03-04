

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






























