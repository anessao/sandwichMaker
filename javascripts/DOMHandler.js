//***************************************************
//DOM LOCATION VARIABLES FOR PLACEMENT AND INFO GRABS
//***************************************************

var meatChooser = document.getElementById("meats");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var breadChooser = document.getElementById("breads");
var addPrices = document.getElementById('menuItems');

var totalPrice = document.getElementById("total");

//STRING BUILDER VARIABLES
var breadSandwich = document.getElementById("breadSandwich");
var meatSandwich = document.getElementById("meatSandwich");
var cheeseSandwich = document.getElementById("cheeseSandwich");
var veggiesSandwich = document.getElementById("veggiesSandwich");
var condimentsSandwich = document.getElementById("condimentsSandwich");

//***************************************************
//EVENT LISTENER THAT FIRES OFF ALL SUBSEQUENT FUNCTIONS
//***************************************************

meatChooser.addEventListener("change", function(e){
	//YOUR SANDWICH STRING
	var yourSandwich = ["Meats chosen: "];

	//GET OBJECT OF CHECKLIST FROM BROWSER TO PASS THROUGH ALL FUNCTIONS
	var nodeValuesMeats = document.getElementById('meats').childNodes;
	
	//GET MEAT ITEM LIST
	var meatItems = SandwichMaker.addMeat(nodeValuesMeats);
	
	//GET MEAT PRICE LIST
	var meatPrices = SandwichMaker.getMeatPrices(meatItems);

	//SET INNERHTML OF EACH ITEMS
	totalPrice.innerHTML = meatPrices;

	//CREATE INNERHTML STRING:
	yourSandwich.push(meatItems);
	meatSandwich.innerHTML = yourSandwich.toString();
	
});

cheeseChooser.addEventListener("change", function(e){
	var yourSandwich = ["Cheese chosen: "];
	var nodeValuesCheese = document.getElementById('cheese').childNodes;

	var cheeseItems = SandwichMaker.addCheese(nodeValuesCheese);
	var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);

	//CREATE INNERHTML STRING:
	yourSandwich.push(cheeseItems);
	cheeseSandwich.innerHTML = yourSandwich;

	console.log(cheeseItems);
	console.log(cheesePrices);
	console.log(SandwichMaker.addTopping(cheesePrices));

});

condimentsChooser.addEventListener("change", function(e){
	var yourSandwich = ["Condiments chosen: "];
	var nodeValuesCondiments = document.getElementById('condiments').childNodes;

	var condimentsItems = SandwichMaker.addCondiments(nodeValuesCondiments);
	var condimentsPrices = SandwichMaker.getCondimentsPrices(condimentsItems);

	console.log(condimentsItems);
	console.log(condimentsPrices);
	console.log(SandwichMaker.addTopping(condimentsPrices));

	//CREATE INNERHTML STRING:
	yourSandwich.push(condimentsItems.toString());
	condimentsSandwich.innerHTML = yourSandwich;
});

veggiesChooser.addEventListener("change", function(e){
	var yourSandwich = ["Veggies chosen: "];
	var nodeValuesVeggies = document.getElementById('veggies').childNodes;

	var veggiesItems = SandwichMaker.addVeggies(nodeValuesVeggies);
	var veggiesPrices = SandwichMaker.getVeggiesPrices(veggiesItems);

	console.log(veggiesItems);
	console.log(veggiesPrices);
	console.log(SandwichMaker.addTopping(veggiesPrices));

	//CREATE INNERHTML STRING:
	yourSandwich.push(veggiesItems.toString());
	veggiesSandwich.innerHTML = yourSandwich;

});

breadChooser.addEventListener("change", function (e){
	var yourSandwich = ["Bread chosen: "];

	var nodeValuesBread = document.getElementById('breads').childNodes;

	var breadItems = SandwichMaker.addBread(nodeValuesBread);
	var breadPrices = SandwichMaker.getBreadPrices(breadItems);

	//CREATE INNERHTML STRING:
	yourSandwich.push(breadItems.toString());
	breadSandwich.innerHTML = yourSandwich;

	//INNERHTML ACTIONS
	console.log(breadPrices);
	console.log(SandwichMaker.addTopping(breadPrices));
	
	return breadPrices;

});







