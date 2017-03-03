#NSS ASSIGNMENT: SANDWICH MAKER
An Introduction to iife formats


###PROJECT PARAMETERS:
Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

1. bread
2. meat
3. cheese
4. condiments
5. veggies

####PROJECT DETAILS:
#####One HTML file that includes:
	- options list for each sandwich part
	- selections allow for multiple or zero choices
	- empty DOM elements to include the final sandwich order for the cost to be inserted

#####Main objectives for iife format and file structure:
	- ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.
	- ingredient choices in object format that contains ingredients as keys with a value of their cost
		```
		{
			"turkey": 0.90, 
			"bacon": 1.50
		}
		```
	- Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user. EXAMPLE CODE PROVIDED BELOW:

	```
	if (toppingInputs[y].name === "cheese") {
		var cheeseItems = SandwichMaker.addCheese(nodeCheeseValues);
		var cheesePrices = SandwichMaker.getCheesePrices(cheeseItems);
		var finalCheese = SandwichMaker.addTopping(cheesePrices);

	}
	```
#####Extra Notes:
	- Don't worry about exposing the prices to the user until you display the final cost
	- DOM handler JS file for handling DOM events

#####PROJECT BREAKDOWN:
	- index.html with `<input type="radio"` buttons for the bread options (you can only have 1) and `<input type="checkbox">` for the sandwich options.

#####HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#####SCREENSHOT
![sandwich maker app screenshot](https://raw.githubusercontent.com/anessao/sandwichMaker/maker/Screen%20Shot%202017-03-03%20at%204.11.48%20PM.png)




