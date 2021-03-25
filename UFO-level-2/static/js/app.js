// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the UFO data from data.js
// console.log(tableData);

// // Step 1: Loop Through `data` and console.log each UFO object
// tableData.forEach(function(ufoElement) {
//   console.log(ufoElement);
// });

// // Step 2:  Use d3 to append one table row `tr` for each UFO object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// tableData.forEach(function(ufoElement) {
//   console.log(ufoElement);
//   var row = tbody.append("tr");
// });

// // // Step 3:  Use `Object.entries` to console.log each UFO element value
// tableData.forEach(function(ufoElement) {
//   console.log(ufoElement);
//   var row = tbody.append("tr");
  
//   Object.entries(ufoElement).forEach(function([key, value]) {
//       console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per ufo report value (datetime, city, state, country, shape,durationMinutes,comments,)
// tableData.forEach(function(ufoElement) {
//   console.log(ufoElement);
//   var row = tbody.append("tr");

//   Object.entries(ufoElement).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the ufo report object
//     var cell = row.append("td");
//   });
// });

// // Step 5: Use d3 to update each cell's text with
// // ufo element values (datetime, city, state, country, shape,durationMinutes,comments)
// tableData.forEach(function(ufoElement) {
//   console.log(ufoElement);
//   var row = tbody.append("tr");
//   Object.entries(ufoElement).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

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
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(ufo);

  var filteredData = ufo.filter(oneElement => oneElement.datetime === inputValue);

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




//  // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);