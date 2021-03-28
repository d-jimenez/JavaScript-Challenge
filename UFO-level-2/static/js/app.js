// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Use d3 to update each cell's text with
// // ufo element values (datetime, city, state, country, shape,durationMinutes,comments)

// BONUS: Refactor to use Arrow Functions!
tableData.forEach((ufoElement) => {
    var row = tbody.append("tr");
    Object.entries(ufoElement).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Date Time Filter
  // Select the input element and get the raw HTML node
  var inputDate = d3.select("#datetime");
  // Get the value property of the input element
  var dateValue = inputDate.property("value");

   // City Filter
  // Select the input element and get the raw HTML node
  var inputCity = d3.select("#city");
  // Get the value property of the input element
  var cityValue = inputCity.property("value");

  // State Filter
  // Select the input element and get the raw HTML node
  var inputState = d3.select("#state");
  // Get the value property of the input element
  var stateValue = inputState.property("value");

  // Country Filter
  // Select the input element and get the raw HTML node
  var inputCountry = d3.select("#country");
  // Get the value property of the input element
  var countryValue = inputCountry.property("value");

  // Shape Filter
  // Select the input element and get the raw HTML node
  var inputShape = d3.select("#shape");
  // Get the value property of the input element
  var shapeValue = inputShape.property("value");

  // Check to see if the Date filter is empty, otherwise perform the filter
  if(dateValue==""){
    console.log("No Date Filter")
    var filterDate=ufo;
  } else{
    var filterDate = ufo.filter(oneElement => oneElement.datetime === dateValue);
  };

  // Check to see if the Date filter is empty, otherwise perform the filter
  if(cityValue == ""){
    console.log("No City Filter");
    var filterCity=filterDate
  } else{
    var filterCity = filterDate.filter(oneElement => oneElement.city === cityValue);
  };

   // Check to see if the Stat filter is empty, otherwise perform the filter
   if(stateValue == ""){
    console.log("No State Filter");
    var filterState=filterCity
  } else{
    var filterState = filterCity.filter(oneElement => oneElement.state === stateValue);
  };

  // Check to see if the Stat filter is empty, otherwise perform the filter
  if(countryValue == ""){
    console.log("No Country Filter");
    var filterCountry=filterState
  } else{
    var filterCountry = filterState.filter(oneElement => oneElement.country === countryValue);
  };

   // Check to see if the Stat filter is empty, otherwise perform the filter
   if(shapeValue == ""){
    console.log("No Shape Filter");
    var filterShape=filterCountry
  } else{
    var filterShape = filterCountry.filter(oneElement => oneElement.shape === shapeValue);
  };

  // Then, select the unordered tbofy element by class name
  var table = d3.select("tbody");

  // remove any children from the tbody
  table.html("");

  filterShape.forEach((ufoElement) => {
    var row = tbody.append("tr");
    Object.entries(ufoElement).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
