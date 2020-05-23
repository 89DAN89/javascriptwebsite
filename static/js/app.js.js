
// making variable for given data
var ufoData = data;

console.log(ufoData);



// selecting the body in the html code

var tbody = d3.select("tbody");



// creating a function to pass in each sighting
ufoData.forEach(function(Sightings) {

    console.log(Sightings);

    // Making a new row for each sighting

    var row = tbody.append("tr");


    Object.entries(Sightings).forEach(function([key, value]) {

      console.log(key, value);

      // making a new cell for each value

      var cell = row.append("td");

      cell.text(value);

    });

  });





// filtering Data with user input

var button = d3.select("#filter-btn");

button.on("click", function() {



    tbody.html("");

    var selectedDate = d3.select("#datetime");

    var valueSelected = selectedDate.property("value");

    var filteredData = ufoData.filter(s => s.datetime === valueSelected);

    console.log(filteredData);

    filteredData.forEach(function(s) {

    console.log(s);

    // Adding a row into the html code

    var row = tbody.append("tr");

    // logging data into cells

    Object.entries(s).forEach(function([key, value]) {

        console.log(key, value);

        var cell = row.append("td");

        cell.text(value);

    });

});

});