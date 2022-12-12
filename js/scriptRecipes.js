/*MAIN HTML info.
--------------------------------*/

// Recipe constructor objects for recipe and inventory array.

function Recipe(id, name, description, ingredients, steps, time, servings, inventory) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.ingredients = ingredients;
  this.steps = steps;
  this.time = time;
  this.servings = servings;
  this.inventory = function() {    //Checks ingredients against inv. quantity to see if in stock.
    if (ingredients[ingredients.length - 1]) {
      return True
    } else {
      return False
    }
  };
}

// Create instances of recipes. 
const recipe101Ingredients = {
  "eggs": 2, "saltTsp": 1/4, "pepperBlackTsp": 1/4, "butterTbsp": 1, "tortilla": 2, "spinachBabyCup": 1/3, "cheeseAmericanSlice": 2, "hamBlackForestSlice": 2 
};
const recipe101Steps = {
  1: "Combine the eggs with a pinch of salt and several grinds of pepper in a small bowl and whisk to combine.", 2: "Melt the butter in a medium nonstick skillet over medium heat. Pour in the egg mixture and swirl the skillet to coat the bottom. Working quickly, dip the tortilla in the eggs, then flip it over and place it back in the skillet (both sides should be coated in egg). Season with another pinch of salt.", 3: "Continue to cook the eggs until they are completely set on the bottom, 1 to 2 minutes. Slide a large rubber or silicone spatula under the tortilla and flip the whole tortilla and egg over in one single motion. Scatter the spinach on the half of the tortilla that's closest to you, then top with the cheese and finally the ham. Continue to cook until the bottom is golden brown, about 1 minute more. Remove from the heat and slide onto a plate.", 4: "Starting with the side that has all the filling, start rolling the tortilla into a tight wrap or burrito. Keep the seam side facing downward so the wrap stays closed. Cut in half crosswise and serve." 
};

//Recipe 2 ingredients and steps.
const recipe102Ingredients = {
  "butterTbsp": 12, "sugarCup": 3/2, "eggs": 3, "vanillaExtractTsp": 3/2, "sourCreamCup": 1, "milkCup": 1/4, "FlourCup": 5/2, "bakingPowderTsp": 2, "bakingSodaTsp": 1/2, "saltTsp": 1/2, "blueberriesCup": 2
};
const recipe102Steps = {
  1: "Preheat the oven to 350 degrees F. Place 16 paper liners in muffin pans.", 2: "In the bowl of an electric mixer fitted with the paddle attachment, cream the butter and sugar until light and fluffy, about 5 minutes. With the mixer on low speed, add the eggs 1 at a time, then add the vanilla, sour cream, and milk. In a separate bowl, sift together the flour, baking powder, baking soda, and salt. With the mixer on low speed add the flour mixture to the batter and beat until just mixed. Fold in the blueberries with a spatula and be sure the batter is completely mixed.", 3: "Scoop the batter into the prepared muffin pans, filling each cup just over the top, and bake for 25 to 30 minutes, until the muffins are lightly browned on top and a cake tester comes out clean."
};
//Recipe 3 ingredients and steps.
const recipe103Ingredients = {
  "flourCup": 3/2, "sugarTbsp": 3, "bakingPowderTbsp": 1, "saltTsp": 1/4, "nutmegGroundTsp": 1/8, "eggs": 2, "milkCup": 5/4, "vanillaExtractTsp": 1/2, "butterTbsp": 3
};
const recipe103Steps = {
  1: "In a large bowl, whisk together the flour, sugar, baking powder, salt, and nutmeg.", 2: "In another bowl, beat the eggs and then whisk in the milk and vanilla.", 3: "Melt the butter in a large cast iron skillet or griddle over medium heat.", 4: "Whisk the butter into the milk mixture. Add the wet ingredients to the flour mixture, and whisk until a thick batter is just formed.", 5: "Keeping the skillet at medium heat, ladle about 1/4 cup of the batter onto the skillet, to make a pancake. Make 1 or 2 more pancakes, taking care to keep them evenly spaced apart. Cook, until bubbles break the surface of the pancakes, and the undersides are golden brown, about 2 minutes. Flip with a spatula and cook about 1 minute more on the second side. Serve immediately or transfer to a platter and cover loosely with foil to keep warm. Repeat with the remaining batter, adding more butter to the skillet as needed.", 6: "Procedure for adding fruit to pancakes: Once the bubbles break the surface of the pancakes, scatter the surface with sliced or diced fruit, or chocolate chips, nuts, etc. Flip with a spatula and cook for 1 minute more, being careful not to burn toppings."
}
const recipe101 = new Recipe(101, "Tortilla Breakfast Wrap", "Inspired by the Egg and Cheese Bread Omelet, we made a complete breakfast wrap--tortilla, eggs, spinach, cheese and ham included--entirely in one skillet, for a go-to dish you can make in a hurry. Enjoy right out of the pan or with a few dashes of your favorite hot sauce.", recipe101Ingredients, recipe101Steps, "10:00", 1, "True");
const recipe102 = new Recipe(102, "Blueberry Coffee Cake Muffins", "My go-to recipe for muffins, it never fails. The crumb is soft and moist and it can be done with a variety of fruits or toppings.", recipe102Ingredients, recipe102Steps, "37:00", 8, "True");
const recipe103 = new Recipe(103, "Pancakes", "I used to buy the prepared mix but since I made this the first time my husband got hooked.", recipe103Ingredients, recipe103Steps, "22:00", 4, "True");

const recipe201 = new Recipe(201, "Cheddar and Apple Grilled Cheese Sandwhich", "The classic combination of tart apples and savory Cheddar transform a basic grilled cheese into a sophisticated sandwich.", ["bread, cheese, apple, butter"], ["steps1", "steps2",], "15:00", 2, "True");
const recipe202 = new Recipe(202, "Chicken and Tomato Pozole", "A nourishing soup made with hominy and meat, pozole is prepared in a variety of ways throughout Mexico. Here, chili powder and peeled tomatoes stand in for guajillo and ancho chiles and provide a deep red color.", ["oil, onion, celery, garlic, chiliPowder, cumin, tomatos, oregano, chickenSkinL, cilantro, blackPepper"], ["Heat the oil in a medium saucepan over medium heat. Add the onion, celery, garlic, chili powder, and cumin, and cook until the onion softens, about 5 minutes. Add the chicken broth, bring to a boil, reduce the heat slightly, and simmer, uncovered, for 10 minutes. Add the green chiles, posole, tomatoes, and oregano and cook for another 5 minutes.", "Pull the saucepan from the heat and stir in the chicken, cilantro leaves, and lime juice. Season, to taste, with salt and pepper. Serve hot."], "1:05:00", 4, "True");
const recipe203 = new Recipe(203, "Mediterranean Tuna Wrap", "I have made these a few times. They're so yummy. I usually don't have whole grain raps so I've used homemade rolls, bread or just plain tortillas.", ["tuna, onionRed, parsley, olives, oil, lemonZest, lemonJuice, salt, blackPepper, wraps, tomatos"], ["In a medium bowl combine the tuna, onion, parsley, olives.", "In a small bowl, whisk together the olive oil, zest, lemon juice, salt and pepper. Pour about 2/3 the dressing over the tuna mixture and toss to combine. In a separate bowl, pour the rest of the dressing over the greens and toss to combine.", "Place some tuna salad onto each piece of wrap bread. Top with 1 1/2 cups of greens and a few tomato slices. Roll the wraps and serve."], "13:00", 4, "True");

const recipe301 = new Recipe(301, "Penne with Vodka Sauce and Mini Meatballs", "It was great pasta my family loved it!!!!.......", ["salt, pasta, groundBeef, cheeseParmesan, breadcrumbs, egg, basil, garlic, tomatos, oil, vodka, cream, pepper"], ["Bring a large pot of salted water to a boil. Add the pasta and cook as the label directs. Reserve 1/2 cup cooking water, then drain.", "Meanwhile, mix the beef, 1/4 cup parmesan, the breadcrumbs, egg, 1/2 cup basil, the minced garlic and 1/2 teaspoon salt in a large bowl with your hands until just combined. Form into 3/4-inch meatballs (about 20). Grate the tomatoes into a medium bowl; discard the skins.", "Heat a large nonstick skillet over medium heat. Add the olive oil, then the meatballs. Cook, turning, until browned on all sides, 2 to 3 minutes. Add the sliced garlic and cook until just golden, about 1 minute. Gradually add the vodka, then the grated tomatoes and cream. Bring to a simmer and cook until the sauce thickens and the meatballs are cooked through, 8 to 10 minutes. Season with 1/2 teaspoon salt and a few grinds of pepper.", "Add the pasta and the remaining 1/4 cup basil to the skillet; toss, adding the reserved cooking water as needed to loosen. Remove from the heat and add the remaining 1/2 cup parmesan; toss.",], "35:00", 4, "True");
const recipe302 = new Recipe(302, "Shortcut Chicken Enchiladas", "Ready in under an hour, this version of the Mexican favorite subs in store-bought rotisserie chicken and salsa for homemade fillings. It's a great use for that leftover half of a chicken, but if you have a whole chicken, you can easily double the recipe to make 8 to 12 servings.", ["beans, oregano, cheeseMonterey, chicken, meat, blackPepper, tomatoSalsa, tortillas, sourCream"], ["Preheat the oven to 375 degrees F. Stir together the beans, oregano and 1 cup cheese in a bowl. Add the chicken, season with pepper and stir until evenly combined.", "Stir the salsa together with 1 cup water in a bowl, then transfer 1 cup to cover the bottom of a 9-by-13-inch baking dish. Stack the tortillas, wrap them in damp paper towels and microwave until warm and pliable, about 15 seconds. ", "Arrange the tortillas on a workspace, then divide the chicken filling among the tortillas (about 1/4-cup filling per tortilla). Roll the tortillas up like a cigar, then transfer them to the baking dish seam-side down, positioning the rolls so that the dish is filled evenly. Press the rolls gently with your hands so they begin to soak the sauce up. Pour the remaining salsa mixture over the rolled tortillas, then sprinkle with the remaining 2 cups cheese. ", "Bake the enchiladas until the cheese melts and the enchiladas are hot in the center, about 30 minutes. Serve hot with sour cream and pickled jalapenos."], "50:00", 4, "True");
const recipe303 = new Recipe(303, "Pot Salmon with Garlic Potatoes and Greens", "Great recipe for cooking just the potatoes and greens without fish although salmon was fine.", ["potatoes, butter, pepper, salmon, paprika, lemonZest, garlic, spinach"], ["Put the potatoes in the bottom of an Instant Pot. Add 1 cup water, 2 tablespoons of the butter, 1/2 teaspoon salt and a few grinds of pepper. Place the pot's steam rack over the potatoes.", "Rub the top and sides of the salmon fillets with the paprika and lemon zest and season generously with salt and pepper. Place skin-side down on the rack. Put on the lid, making sure the steam valve is in the sealing position, and set the cooker to high pressure for 3 minutes. When finished, carefully turn the steam valve to the venting position to release the pressure.", "Remove the salmon and rack and set the cooker to saute at normal heat. When the potatoes start sizzling, add the garlic and cook, stirring, until softened, 1 to 2 minutes; stir in the remaining 2 tablespoons butter and season generously with salt and pepper. Smash the potatoes with a fork or wooden spoon until chunky.", "Turn off the cooker. Add the mixed greens to the potatoes and stir until wilted, 1 to 2 minutes. Season with salt and pepper. Divide the salmon and potato mixture among plates. Serve with lemon wedges."], "30:00", 4, "true");

const recipe401 = new Recipe(401, "Orange Banana Smoothie", "This recipe is delicious and I will make it again and again", ["orange, banana, lime, strawberries"], ["Combine the orange juice, lime juice, strawberries, and banana in a blender and process until smooth. Refrigerate until cold."], "5:00", 3, "True");
const recipe402 = new Recipe(402, "Peach Pie Smoothie", "Delicious and refreshing! I used fresh peaches because they are in season.", ["milk, yogurt, peaches, honey, vanillaExtract, cinnamon, nutmeg, ginger"], ["Put all ingredients into a blender and blend until smooth.", "Per Serving: Calories 240; Total Fat 0 g; (Sat Fat 0 g, Mono Fat 0 g, Poly Fat 0 g) ; Protein 12 g; Carb 49 g; Fiber 3 g; Cholesterol 5 mg; Sodium 150 mg Excellent source of: Protein, Vitamin C, Calcium, Good source of: Iodine, Phosphorus, Fiber, Vitamin A, Riboflavin"], "5:00", 1, "True");
const recipe403 = new Recipe(403, "Protein Bars", "Make this recipe regularly. Have substituted pea protein powder as have issue with soy protein. Also use whatever dried fruit I have on hand....always tastes great.", ["proteinPowder, oats, flour, salt, raisins, cherries, blueberries, apricots, appleJuice, sugar, eggs, peanutbutter, oil"], ["Line the bottom of a 13 by 9-inch glass baking dish with parchment paper and lightly coat with canola oil. Set aside. Preheat the oven to 350 degrees F.", "In a large mixing bowl, combine the protein powder, oat bran, wheat flour, wheat germ, and salt. Set aside.", "Coarsely chop the raisins, dried cherries, blueberries and apricots and place in a small bowl and set aside.", "In a third mixing bowl, whisk the tofu until smooth. Add the apple juice, brown sugar, eggs, and peanut butter, 1 at a time, and whisk to combine after each addition. Add this to the protein powder mixture and stir well to combine. Fold in the dried fruit. Spread evenly in the prepared baking dish and bake in the oven for 35 minutes or until the internal temperature reaches 205 degrees F. Remove from the oven and cool completely before cutting into squares. Cut into squares and store in an airtight container for up to a week."], "1:00:00", 4, "True");

//Create strings from ingredient and steps objects. 
const r101IngStr = JSON.stringify(recipe101Ingredients);
const r101StepsStr = JSON.stringify(recipe101Steps);
const r102IngStr = JSON.stringify(recipe102Ingredients);
const r102StepsStr = JSON.stringify(recipe102Steps);
const r103IngStr = JSON.stringify(recipe103Ingredients);
const r103StepsStr = JSON.stringify(recipe103Steps);

//Array of breakfast recipes.
const brekkieRecipeArr = [recipe101, recipe102, recipe103];
const lunchRecipeArr = [recipe201, recipe202, recipe203];
const dinnerRecipeArr = [recipe301, recipe302, recipe303];
const snacksRecipeArr = [recipe401, recipe402, recipe403];
const allRecipeArr = [];
allRecipeArr.push(brekkieRecipeArr);
allRecipeArr.push(lunchRecipeArr);
allRecipeArr.push(dinnerRecipeArr);
allRecipeArr.push(snacksRecipeArr);


//Inserts headings of recipes into HTML element.
function insRecipeHeadings(array, elem) {
  for (let recipe of array) {
    let recipeName = recipe.name;
    let recipeHead = document.createElement("button");
    recipeHead.setAttribute("id", recipe.id);
    recipeHead.setAttribute("data-show", "Off");
    let recipeText = document.createTextNode(recipeName);
    recipeHead.appendChild(recipeText);
    elem.appendChild(recipeHead);
  }
}

//Select HTML elements and insert recipe names. 
const brekkieLinks = document.getElementById("brekkieLinks");
const lunchLinks = document.getElementById("lunchLinks");
const dinnerLinks = document.getElementById("dinnerLinks");
const snacksLinks = document.getElementById("snacksLinks");

insRecipeHeadings(brekkieRecipeArr, brekkieLinks);
insRecipeHeadings(lunchRecipeArr, lunchLinks);
insRecipeHeadings(dinnerRecipeArr, dinnerLinks);
insRecipeHeadings(snacksRecipeArr, snacksLinks);

//Change color and view of selected recipe tab.

//Create DOM element nodes from recipe Ids. 
function createRecipeElem(array) {
	let recipeElemArr = [];
  for (let recipe of array) {
    let elemId = recipe.id.toString();
    let recipeElem = document.getElementById(elemId);
    recipeElemArr.push(recipeElem);
  }
	return recipeElemArr
}

let brekkieElemIds = createRecipeElem(brekkieRecipeArr);
let lunchElemIds = createRecipeElem(lunchRecipeArr);
let dinnerElemIds = createRecipeElem(dinnerRecipeArr);
let snacksElemIds = createRecipeElem(snacksRecipeArr);

//Create tab content elements for recipe information.
const rContentHead = document.getElementsByClassName("rHeadInfo");
const rTabContent = document.getElementsByClassName("tabContent");
const rContentTime = document.createElement("p");
const rContentIngr = document.createElement("p");
const rContentServ = document.createElement("p");
const rContentDescSteps = document.createElement("div");
const rStepsBtn = document.createElement("button");
rContentDescSteps.setAttribute("id", "descSteps");
const rContentDesc = document.createElement("p");
const rContentSteps = document.createElement("p");

//Create text nodes to insert into recipe elements.
let rTimeText = document.createTextNode("");
let rIngrText = document.createTextNode("");
let rServText = document.createTextNode("");
let rDescText = document.createTextNode("");
let rStepsText = document.createTextNode("");


//Loop through element Ids and add event listeners and insert corresponding text content.
function toggleRecipeTabs(array1, array2) {
  let i = 0;
  for (let recipe of array1) {
    let recipeTime = array2[i].time.toString();
    let recipeIngr = array2[i].ingredients.toString();
    let recipeServ = array2[i].servings.toString();
    let recipeDesc = array2[i].description.toString();
    let recipeSteps = array2[i].steps.toString();
    i++;
    recipe.addEventListener("click", function onClick() {
      rContentDescSteps.setAttribute("data-show", "Description");
      rStepsBtn.setAttribute("data-show", "Description");
      rStepsBtn.textContent = "Steps";
//Filter out the other tabs and turn view off.
      let filteredTabs = array1.filter(function(r) { return r !== recipe});
      for (let fTabs of filteredTabs) {
        fTabs.setAttribute("data-show", "Off");
      };
      if (recipe.getAttribute("data-show") == "Off") {
        recipe.setAttribute("data-show", "On");
      }
      if (recipe.getAttribute("data-show") == "On") {
      rTimeText.nodeValue = "Time: " + recipeTime;
      rIngrText.nodeValue = "Ingredients: " + recipeIngr;
      rServText.nodeValue = "Servings: " + recipeServ;
      rDescText.textContent = "Description: " + recipeDesc;
      rStepsText.textContent = "Steps: " + recipeSteps;  
      //append the text information to content elems.
      rContentTime.appendChild(rTimeText);
      rContentIngr.appendChild(rIngrText);
      rContentServ.appendChild(rServText);
      rContentDesc.appendChild(rDescText);
      rContentSteps.appendChild(rStepsText);
      rContentDescSteps.appendChild(rContentDesc);
      rContentDescSteps.appendChild(rContentSteps);
      //Append to correct elem in HTML.
      let j = 0;
      if (array2 == lunchRecipeArr) {
          j = 1;
      } else if (array2 == dinnerRecipeArr) {
          j = 2;
      } else if (array2 == snacksRecipeArr) {
          j = 3;
      }
      rContentHead[j].appendChild(rContentTime);
      rContentHead[j].appendChild(rContentIngr);
      rContentHead[j].appendChild(rContentServ);
      rTabContent[j].appendChild(rContentDescSteps);
      rTabContent[j].appendChild(rStepsBtn);
    };    
      //Reset the description display on clicking a new recipe.
      let descPara = rContentDescSteps.firstChild;
      let stepsPara = rContentDescSteps.lastChild;
      descPara.style.display = "";
      stepsPara.style.display = "none";
});
};
};
toggleRecipeTabs(brekkieElemIds, brekkieRecipeArr);
toggleRecipeTabs(lunchElemIds, lunchRecipeArr);
toggleRecipeTabs(dinnerElemIds, dinnerRecipeArr);
toggleRecipeTabs(snacksElemIds, snacksRecipeArr);

//Event listener for clicking the description/steps button.
        rStepsBtn.addEventListener("click", function onClick() {
	  let btnDescSteps = document.getElementById("descSteps");
          let descPara = btnDescSteps.firstChild;
          let stepsPara = btnDescSteps.lastChild;
          if (rStepsBtn.getAttribute("data-show") == "Description") {
  	    descPara.style.display = "none";
  	    stepsPara.style.display = "";
            btnDescSteps.setAttribute("data-show", "Steps");
            rStepsBtn.textContent = "Description";
            rStepsBtn.setAttribute("data-show", "Steps");
          } else {
  	    descPara.style.display = "";
  	    stepsPara.style.display = "none";
            btnDescSteps.setAttribute("data-show", "Description");
            rStepsBtn.textContent = "Steps";
            rStepsBtn.setAttribute("data-show", "Description");
          }
        });
