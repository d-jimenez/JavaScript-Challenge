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

// // Step 4: Use d3 to append 1 cell per ufo report value (datetime: "1/1/2010", city, state, country, shape,durationMinutes,comments,)
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
// // weather report values (weekday, date, high, low)
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