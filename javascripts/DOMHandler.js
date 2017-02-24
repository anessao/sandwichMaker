var checkboxes = document.getElementById("menuItems");

checkboxes.addEventListener("change", function (e){
	
//***************************************************
//DOM LOCATION VARIABLES FOR PLACEMENT AND INFO GRABS
//***************************************************
	var totalPrice = document.getElementById("total");
	var yourSandwich = document.getElementById("sandwich");
	var toppingsString = document.getElementById("toppings");
	var toppingInputs = document.getElementsByTagName("input");
	
//***************************************************
//DOM INFO GRABS FOR CHECKBOX VARIABLES
//***************************************************
	var nodeMeatValues = document.getElementById('meats').childNodes;
	var nodeCheeseValues = document.getElementById('cheese').childNodes;
	var nodeCondimentsValues = document.getElementById('condiments').childNodes;
	var nodeVeggiesValues = document.getElementById('veggies').childNodes;
	var nodeBreadsValues = document.getElementById('breads').childNodes;

	//FUNCTION TO CALCULATE TOTAL PRICE
	var allPrices = [];
	function getTotalPrices (x) {
		if (x > 0) {
			allPrices.push(x);
		} else {
			allPrices.push(0);
		};
		return allPrices;
	}
//***************************************************
//FOR LOOP >> USES CHECKBOX STATUS TO CALCULATE WHICH
//METHODS TO USE TO GET WHICH PRICES FOR FINAL VARIABLES
//TO EXPORT TO THE DOM >> DYNAMIC USE OF JS IIFE FUNCTIONS
//***************************************************

	for (var y = 0; y < toppingInputs.length; y++) {
		if (toppingInputs[y].checked === true) {
			if (toppingInputs[y].name === "meats") {
				var meatItems = SandwichMaker.addMeat(nodeMeatValues); //GRABS VALUES OF ITEMS
				var meatPrices = SandwichMaker.getMeatPrices(meatItems); //GRABS ALL PRICES FROM RESPECTIVE JS FILE
				var finalMeat = SandwichMaker.addTopping(meatPrices); //CALCULATES THE TOTAL GROUP PRICE
				
			} if (toppingInputs[y].name === "cheese") {
				var cheeseItems = SandwichMaker.addCheese(nodeCheeseValues);
				var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);
				var finalCheese = SandwichMaker.addTopping(cheesePrices);

			} if (toppingInputs[y].name === "condiments") {
				var condimentsItems = SandwichMaker.addCondiments(nodeCondimentsValues);
				var condimentsPrices = SandwichMaker.getCondimentsPrices(condimentsItems);
				var finalCondiments = SandwichMaker.addTopping(condimentsPrices);
			
			} if (toppingInputs[y].name === "veggies") {
				var veggiesItems = SandwichMaker.addVeggies(nodeVeggiesValues);
				var veggiesPrices = SandwichMaker.getVeggiesPrices(veggiesItems);
				var finalVeggies = SandwichMaker.addTopping(veggiesPrices);
				
			} if (toppingInputs[y].name === "breads") {
				var breadsItems = SandwichMaker.addBread(nodeBreadsValues);
				var breadPrices = SandwichMaker.getBreadPrices(breadsItems);
				var finalBreads = SandwichMaker.addTopping(breadPrices);				
			}
		}
	}
	//CREATES ARRAY FOR PREPPING ITEM PRICES FOR DOM PLACEMENT
	getTotalPrices(finalMeat); 
	getTotalPrices(finalCheese);
	getTotalPrices(finalCondiments);
	getTotalPrices(finalVeggies);
	getTotalPrices(finalBreads);

	//DOM PLACEMENTS
	totalPrice.innerHTML = SandwichMaker.addTopping(allPrices);
	yourSandwich.innerHTML = '<h4>Your sandwich comes on ' + breadsItems + ' bread and the following toppings:</h4>'
	toppingsString.innerHTML = ["Meats: " + meatItems + " <br>" + "Cheese: " + cheeseItems + " <br>" + "Condiments: " + condimentsItems + " <br>" + "Veggies: "  + veggiesItems].toString().replace(/undefined/g, '').replace(/,/g, ' ');
	
});



















