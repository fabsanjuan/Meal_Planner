//Create and insert HTML header, vertical nav bar, and footer elements.

//Header elements to be inserted to heading tag. 
const headerGrid = document.createElement("div");
const headerLogo = document.createElement("h1");
const userContainer1 = document.createElement("div");
const userContainer2 = document.createElement("div");
const headerUserProfile = document.createElement("h2");
const headerSignUp = document.createElement("button");
const headerLogin = document.createElement("button");
const headerSignOut = document.createElement("button");

//Create HTML content, text, and buttons in header and set element attributes.
headerGrid.setAttribute("id", "hGridContainer"); //sets id for css grid.
userContainer1.setAttribute("id", "userContainer1");
userContainer2.setAttribute("id", "userContainer2");
const logoText = document.createTextNode("Logo");
headerLogo.appendChild(logoText);
headerUserProfile.setAttribute("id", "userName");
const userText = document.createTextNode("Fabio");
headerUserProfile.appendChild(userText);
headerSignUp.setAttribute("id", "signUpBtn");
const signUpText = document.createTextNode("Sign Up");
headerSignUp.appendChild(signUpText);
headerLogin.setAttribute("id", "loginBtn");
headerLogin.setAttribute("type", "button");
const loginText = document.createTextNode("Login");
headerLogin.appendChild(loginText);
headerSignOut.setAttribute("id", "signOutBtn");
const signOutText = document.createTextNode("Sign Out");
headerSignOut.appendChild(signOutText);
headerGrid.appendChild(headerLogo);
headerGrid.appendChild(userContainer1);
headerGrid.appendChild(userContainer2);
userContainer1.appendChild(headerSignUp);
userContainer1.appendChild(headerLogin);
userContainer2.appendChild(headerUserProfile);
userContainer2.appendChild(headerSignOut);

//add elements to HTML doc.
const headerHTML = document.getElementById("mainHeading");
headerHTML.appendChild(headerGrid);

//Display and hide user profile on top right of page when signed in.
headerLogin.addEventListener("click", function() {
  document.getElementById("userContainer2").style.display = "block";
  document.getElementById("userContainer1").style.display = "none";
});
headerSignOut.addEventListener("click", function() {
  document.getElementById("userContainer1").style.display = "block";
  document.getElementById("userContainer2").style.display = "none";
});

/* Nav Bar */
//Nav bar elements to be inserted into HTML.
const itemHome = document.createElement("li");
const itemSchedule = document.createElement("li");
const itemRecipes = document.createElement("li");
const itemInventory = document.createElement("li");
const linkHome = document.createElement("a");
const linkSchedule = document.createElement("a");
const linkRecipes = document.createElement("a");
const linkInventory = document.createElement("a");

//src of links for nav bar.
linkHome.setAttribute("href", "C:/Users/fabiosanjuan/Documents/MealPlanSite/HTML/mpSiteHNF.html");
linkSchedule.setAttribute("href", "C:/Users/fabiosanjuan/Documents/MealPlanSite/HTML/mealPlanPage2A3.html");
linkRecipes.setAttribute("href", "C:/Users/fabiosanjuan/Documents/MealPlanSite/HTML/mealPlanRecipes.html");
linkInventory.setAttribute("href", "C:/Users/fabiosanjuan/Documents/MealPlanSite/HTML/mealPlanInventory.html");

//Text content of links.
const itemHomeText = document.createTextNode("Home");
const itemScheduleText = document.createTextNode("Schedule");
const itemRecipesText = document.createTextNode("Recipes");
const itemInventoryText = document.createTextNode("Inventory");

//Add link texts to link.
linkHome.appendChild(itemHomeText);
linkSchedule.appendChild(itemScheduleText);
linkRecipes.appendChild(itemRecipesText);
linkInventory.appendChild(itemInventoryText);

//append each link to list item.
itemHome.appendChild(linkHome);
itemSchedule.appendChild(linkSchedule);
itemRecipes.appendChild(linkRecipes);
itemInventory.appendChild(linkInventory);

//Append nav bar elements to HTML page.
const navBarHTML = document.getElementById("navBar");
navBarHTML.appendChild(itemHome);
navBarHTML.appendChild(itemSchedule);
navBarHTML.appendChild(itemRecipes);
navBarHTML.appendChild(itemInventory);


/* Footer */
//Create HTML footer elements.
const authorP = document.createElement("p");
const socialP = document.createElement("p");
const fundP = document.createElement("p");
const helpP = document.createElement("p");

//Add text content to footer elements.
const authorText = document.createTextNode("Author: Fabio Sanjuan Gomez");
const socialText = document.createTextNode("Social");
const fundText = document.createTextNode("Donate");
const helpText = document.createTextNode("Help");

//Append text to footer elements and append to HTML page.
authorP.appendChild(authorText);
socialP.appendChild(socialText);
fundP.appendChild(fundText);
helpP.appendChild(helpText);
const footerHTML = document.getElementById("footer");
footerHTML.appendChild(authorP);
footerHTML.appendChild(socialP);
footerHTML.appendChild(fundP);
footerHTML.appendChild(helpP);