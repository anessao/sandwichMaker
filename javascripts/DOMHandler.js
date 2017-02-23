//**********************
//DOCUMENT ELEMENT VARIABLES
//**********************

// // var breadChooser = document.getElementById("bread");
// var meatChooser = document.getElementById("meats");
// var totalPrice = document.getElementById("total");
// var sandwich = document.getElementById("sandwich");

// //**********************
// //BREAD VALUE FUNCTION
// //**********************
// // breadChooser.addEventListener("change", function(event){
	
// // });

// //**********************
// //MEAT VALUE FUNCTION
// //**********************

// meatChooser.addEventListener("change", function(event){
// 	//MEAT PRICES OBJECT
	// var meatPrices = {
	//   	turkey: 1.5,
	//   	bacon: .8,
	//   	ham: 1,
	//   	roastBeef: 1.8
 //  	};

//   //MEAT VARIABLES AND VALUES
// 	var nodeValues = document.getElementById('meats').childNodes;
// 	var meatsChosen = [];
// 	var meatsChosenPrices = [];

// 	//LOOP TO DETERMINE ITEMS CHECKED AND THEIR VALUES
// 	for (var i = 0; i < nodeValues.length; i++){
// 		if (nodeValues[i].checked === true){
// 			meatsChosen.push(nodeValues[i].defaultValue);
// 		}
// 	}

// 	//LOOP TO DETERMINE THE VALUE OF CHECKED ITEMS AGAINST MEAT PRICE OBJECT
// 	for (var j = 0; j < meatsChosen.length; j++) {
// 		keyValue = meatsChosen[j];
// 		meatsChosenPrices.push(meatPrices[keyValue]);
// 	}

// 	//RETURN VALUE FOR FINAL PRICE AND FINAL ITEM LIST
// 	var finalprice = meatsChosenPrices.reduce((x, y) => x+y, 0);
// 	totalPrice.innerHTML = finalprice;
// 	sandwich.innerHTML = meatsChosen;

// });


//***************************************************
//DOM LOCATION VARIABLES FOR PLACEMENT AND INFO GRABS
//***************************************************

var meatChooser = document.getElementById("meats");
var cheeseChooser = document.getElementById("cheese");
var sandwich = document.getElementById("sandwich");
var totalPrice = document.getElementById("total");

//***************************************************
//EVENT LISTENER THAT FIRES OFF ALL SUBSEQUENT FUNCTIONS
//***************************************************

meatChooser.addEventListener("change", function(e){
	
	//GET OBJECT OF CHECKLIST FROM BROWSER TO PASS THROUGH ALL FUNCTIONS
	var nodeValuesMeats = document.getElementById('meats').childNodes;
	
	//GET MEAT ITEM LIST
	var meatItems = SandwichMaker.addMeat(nodeValuesMeats);
	
	//GET MEAT PRICE LIST
	var meatPrices = SandwichMaker.getMeatPrices(meatItems);

	//SET INNERHTML OF EACH ITEMS
	sandwich.innerHTML = meatItems.toString();
	totalPrice.innerHTML = meatPrices;
	console.log(SandwichMaker.addTopping(meatPrices));
	

});

cheeseChooser.addEventListener("change", function(e){
	
	var nodeValuesCheese = document.getElementById('cheese').childNodes;

	var cheeseItems = SandwichMaker.addCheese(nodeValuesCheese);
	var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);

	console.log(cheeseItems);
	console.log(cheesePrices);
	console.log(SandwichMaker.addTopping(cheesePrices));

});






