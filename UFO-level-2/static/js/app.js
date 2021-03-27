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

  var filteredData = ufo.filter(oneElement => 
    oneElement.datetime === dateValue &&
    oneElement.city==cityValue);

  // console.log(filteredData);
  
  // Then, select the unordered tbofy element by class name
  var table = d3.select("tbody");

  // remove any children from the tbody
  table.html("");

  filteredData.forEach((ufoElement) => {
    var row = tbody.append("tr");
    Object.entries(ufoElement).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
