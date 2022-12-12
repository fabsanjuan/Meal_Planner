//Script for Schedule page of meal_planner site.

//Select buttons and elements from page.
const dailyBtn = document.getElementById("dailyBtn");
const weeklyBtn = document.getElementById("weeklyBtn");
const monthlyBtn = document.getElementById("monthlyBtn");

const dailyBackground = document.getElementById("dailySched");
const weeklyBackground = document.getElementById("weeklySched");
const monthlyBackground = document.getElementById("monthlySched");

const monthlyView = document.getElementById("monthView");
const weeklyView = document.getElementById("weekView");
const dailyView = document.getElementById("dayView");

//Update the selection on click event.
dailyBtn.addEventListener("click", function onClick() {
  dailyBackground.removeAttribute("class");
  dailyBackground.setAttribute("class", "on");
  weeklyBackground.setAttribute("class", "off");
  monthlyBackground.setAttribute("class", "off");
  monthlyView.style.display = "none";
  weeklyView.style.display = "none";
  dailyView.style.display = "table";
});
weeklyBtn.addEventListener("click", function onClick() {
  weeklyBackground.removeAttribute("class");
  weeklyBackground.setAttribute("class", "on");
  dailyBackground.setAttribute("class", "off");
  monthlyBackground.setAttribute("class", "off");
  monthlyView.style.display = "none";
  weeklyView.style.display = "table";
  dailyView.style.display = "none";
});
monthlyBtn.addEventListener("click", function onClick() {
  monthlyBackground.removeAttribute("class");
  monthlyBackground.setAttribute("class", "on");
  weeklyBackground.setAttribute("class", "off");
  dailyBackground.setAttribute("class", "off");
  monthlyView.style.display = "table";
  weeklyView.style.display = "none";
  dailyView.style.display = "none";
});


let monthTable = document.getElementById("monthTable");
let weekTable = document.getElementById("weekTable");
let dayTable = document.getElementById("dayTable");

//Create a monthly calendar
function createCalendar(year, month, elem) {
  let mon = month - 1;
  let d = new Date(year, mon);
  let firstRow = true;
  
  //Create new rows and append to table.
  while (d.getMonth() == mon) {
    for (i=0; i<6; i++) {
    let row = document.createElement("tr");
    elem.appendChild(row);

    //Spaces for the first row until the first day of the month.
    if (firstRow) {
      for (let j=0; j<d.getDay(); j++) {
        let emptyCell = document.createElement("td");
        row.appendChild(emptyCell);    
      }
    }
    firstRow = false;

    //Data for the days of the month.  
    for (i=d.getDay(); i<6; i++) {
      let cellData = document.createElement("td");
      let cellDay = document.createElement("p");
      let cellText = document.createTextNode(d.getDate());
      cellDay.appendChild(cellText);
      cellData.appendChild(cellDay);
      row.appendChild(cellData);
      d.setDate(d.getDate() + 1);
      //When we pass to the next month add spaces to the end of calendar and return out of function.
      if (d.getMonth() == mon + 1) {
        for (j=d.getDay(); j<7; j++) {
        let emptyCell = document.createElement("td");
        row.appendChild(emptyCell); 
        } return;
      }
    }
    let cellData = document.createElement("td");
    let cellDay = document.createElement("p");
    let cellText = document.createTextNode(d.getDate());
    cellDay.appendChild(cellText);
    cellData.appendChild(cellDay);
    row.appendChild(cellData);
    d.setDate(d.getDate() + 1);
    continue;
}
}
}

createCalendar(2022, 9, monthTable);

//Create a weekly calendar.

function weeklyCalendar(year, month, day, elem) {
  let mon = month - 1;
  let d = new Date(year, mon, day);
  let row = document.createElement("tr");
  elem.appendChild(row);
  
  //If date is not Sunday set it back to Sunday.
  if (d.getDay() !== 0) {
    d.setDate(d.getDate() - d.getDay());
  };
  //Create weekly data.
  for (i=0; i<7; i++) {
    let cellData = document.createElement("td");
    let cellDay = document.createElement("p");
    let cellText = document.createTextNode(d.getDate());
    cellDay.appendChild(cellText);
    cellData.appendChild(cellDay);
    row.appendChild(cellData);
    d.setDate(d.getDate() + 1);
  };
};
weeklyCalendar(2022, 10, 6, weekTable);

//Create a table for today.

function dayCalendar(year, month, day, elem) {
  let mon = month -1;
  let d = new Date(year, mon, day);
  let row = document.createElement("tr");
  let cellData = document.createElement("td");
  let cellDay = document.createElement("p");
  let cellText = document.createTextNode(d.getDate());
  cellDay.appendChild(cellText);
  cellData.appendChild(cellDay);
  row.appendChild(cellData); 
  elem.appendChild(row);
};

dayCalendar(2022, 10, 4, dayTable);



