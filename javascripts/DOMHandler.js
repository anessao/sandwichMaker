//***************************************************
//DOM LOCATION VARIABLES FOR PLACEMENT AND INFO GRABS
//***************************************************

var meatChooser = document.getElementById("meats");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var breadChooser = document.getElementById("breads");
var checkboxes = document.getElementById("menuItems");

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

// meatChooser.addEventListener("change", function(e){
// 	//YOUR SANDWICH STRING

// 	var yourSandwich = ["Meats chosen: "];

// 	//GET OBJECT OF CHECKLIST FROM BROWSER TO PASS THROUGH ALL FUNCTIONS
// 	var nodeValues = document.getElementById('meats').childNodes;
	
// 	//GET MEAT ITEM LIST
// 	var meatItems = SandwichMaker.addMeat(nodeValues);
	
// 	//GET MEAT PRICE LIST
// 	totalPrice.innerHTML = SandwichMaker.getMeatPrices(meatItems);
	
// 	//SET INNERHTML OF EACH ITEMS
// 	yourSandwich.push(meatItems);
// 	meatSandwich.innerHTML = yourSandwich.toString();

// });


// cheeseChooser.addEventListener("change", function(e){
// 	var yourSandwich = ["Cheese chosen: "];
// 	var nodeValues = document.getElementById('cheese').childNodes;
// 	var cheeseItems = SandwichMaker.addCheese(nodeValues);
// 	var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);

// 	yourSandwich.push(cheeseItems);
// 	cheeseSandwich.innerHTML = yourSandwich;

// });

// condimentsChooser.addEventListener("change", function(e){
// 	var yourSandwich = ["Condiments chosen: "];
// 	var nodeValues = document.getElementById('condiments').childNodes;

// 	var condimentsItems = SandwichMaker.addCondiments(nodeValues);
// 	var condimentsPrices = SandwichMaker.getCondimentsPrices(condimentsItems);

// 	console.log(condimentsItems);
// 	console.log(condimentsPrices);
// 	console.log(SandwichMaker.addTopping(condimentsPrices));

// 	//CREATE INNERHTML STRING:
// 	yourSandwich.push(condimentsItems.toString());
// 	condimentsSandwich.innerHTML = yourSandwich;
// });

// veggiesChooser.addEventListener("change", function(e){
// 	var yourSandwich = ["Veggies chosen: "];
// 	var nodeValues = document.getElementById('veggies').childNodes;

// 	var veggiesItems = SandwichMaker.addVeggies(nodeValues);
// 	var veggiesPrices = SandwichMaker.getVeggiesPrices(veggiesItems);

// 	console.log(veggiesItems);
// 	console.log(veggiesPrices);
// 	console.log(SandwichMaker.addTopping(veggiesPrices));

// 	//CREATE INNERHTML STRING:
// 	yourSandwich.push(veggiesItems.toString());
// 	veggiesSandwich.innerHTML = yourSandwich;

// });

// breadChooser.addEventListener("change", function (e){
// 	var yourSandwich = ["Bread chosen: "];

// 	var nodeValues = document.getElementById('breads').childNodes;

// 	var breadItems = SandwichMaker.addBread(nodeValues);
// 	var breadPrices = SandwichMaker.getBreadPrices(breadItems);

// 	//CREATE INNERHTML STRING:
// 	yourSandwich.push(breadItems.toString());
// 	breadSandwich.innerHTML = yourSandwich;

// 	//INNERHTML ACTIONS
// 	console.log(breadPrices);
// 	console.log(SandwichMaker.addTopping(breadPrices));

// });

checkboxes.addEventListener("change", function (e){
	var toppingInputs = document.getElementsByTagName("input");
	var allPrices = [];
	console.log(toppingInputs.name);
	for (var y = 0; y < toppingInputs.length; y++) {
		if (toppingInputs[y].checked === true) {
			if (toppingInputs[y].name === "meats") {
				var nodeMeatValues = document.getElementById('meats').childNodes;
				var meatItems = SandwichMaker.addMeat(nodeMeatValues);
				var meatPrices = SandwichMaker.getMeatPrices(meatItems);
				allPrices.push(meatPrices);
			} if (toppingInputs[y].name === "cheese") {
				var nodeCheeseValues = document.getElementById('cheese').childNodes;
				var cheeseItems = SandwichMaker.addCheese(nodeCheeseValues);
				var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);
			} if (toppingInputs[y].name === "condiments") {
				var nodeCondimentsValues = document.getElementById('condiments').childNodes;
				var condimentsItems = SandwichMaker.addCondiments(nodeCondimentsValues);
				var condimentsPrices = SandwichMaker.getCondimentsPrices(condimentsItems);
			} if (toppingInputs[y].name === "veggies") {
				var nodeVeggiesValues = document.getElementById('veggies').childNodes;
				var veggiesItems = SandwichMaker.addVeggies(nodeVeggiesValues);
				var veggiesPrices = SandwichMaker.getVeggiesPrices(veggiesItems);
			} if (toppingInputs[y].name === "breads") {
				var nodeBreadsValues = document.getElementById('breads').childNodes;
				var breadsItems = SandwichMaker.addBread(nodeBreadsValues);
				var breadPrices = SandwichMaker.getBreadPrices(breadsItems);
			} else {
				console.log("nada");
			}
		}
	}
	allPrices = [meatPrices, cheesePrices, condimentsPrices, veggiesPrices, breadPrices];
	totalPrice.innerHTML = allPrices.reduce((x, y) => x+y, 0);

	// if (fullPrices === undefined) {
	// totalPrice.innerHTML = "$0.00";	
	// } else {
	// totalPrice.innerHTML = meatPrices + " " + cheesePrices + " " + condimentsPrices + " " + veggiesPrices + " " + breadPrices;
	
});



















