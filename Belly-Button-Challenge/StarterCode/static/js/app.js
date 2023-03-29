// Define url as a constant 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });


// Display the default plots
function startup() {

    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
             console.log(data);
           
        // An array of id names
        let names = data.names;

        // Iterate through the names Array
        names.forEach((name) => {
            // Append each name as an option to the drop down menu
            dropdownMenu.append("option")
            .text(name)
            .property("value", name);
        });

        // Define the first sample from the list
        let name = names[0];

        // Build the initial plots
        demographic(name);
        bar(name);
        bubble(name);
    });
}

// Build the demographics panel
function demographic(selected_data) {
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
        console.log(data);

        // An array of metadata objects
        let metadata = data.metadata;
        
        // Filter data where id = selected value after converting their types 
        let filtered_data = metadata.filter((meta) => meta.id == selected_data);
      
        // Define the first sample from the list
        let obj = filtered_data[0]
        
        // Clear the child elements in div with id sample-metadata
        d3.select("#sample-metadata").html("");
  
        // Object.entries() is a built-in method in JavaScript 
        let entries = Object.entries(obj);
        
        // Iterate through the entries array
        entries.forEach(([key,value]) => {
            d3.select("#sample-metadata")
            .append("h5")
            .text(`${key}: ${value}`);
        });

        // Console log the entries array
        console.log(entries);
    });
  }
  

// Make the bar chart
function bar(selected_data) {
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
             console.log(data);

        // An array of sample objects
        let samples = data.samples;

        // Filter data where id = selected value 
        let filtered_data = samples.filter((sample) => sample.id == selected_data);

        // Define the first object to results 
        let results = filtered_data[0];

        // Rename variables 
        let sample_values = results.sample_values;
        let otu_ids = results.otu_ids;
        let otu_labels = results.otu_labels;
        
        // Trace for bar chart
        let trace1 = [{
            // Slice the top 10 otus
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker: {
                color: "rgb(247, 0, 88)"
            },
            
        }];
        
        // Define layout
        let layout = {
            title: "Top 10 otus",
        }


        // Use Plotly to plot the bar chart
        Plotly.newPlot("bar", trace1,layout);
    });
}
  
// Make the bubble chart
function bubble(selected_data) {
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
        console.log(data);

        // An array of sample objects
        let samples = data.samples;
    
        // Filter data where id = selected value 
        let filtered_data = samples.filter((sample) => sample.id == selected_data);
    
        // Define the first object to results 
        let results = filtered_data[0];
        
        // Rename variables 
        let sample_values = results.sample_values;
        let otu_ids = results.otu_ids;
        let otu_labels = results.otu_labels;

        // Trace for bubble chart
        let trace2 = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Picnic"
            }
        }];
    
        // Define layout
        let layout = {
            title: "Bubble Chart",
            xaxis: {title: "OTU ID"}
        };
    
        // Use Plotly to plot the bubble chart
        Plotly.newPlot("bubble", trace2, layout);
    });
}

// Toggle to new plots when option changed
function optionChanged(selected_data) {
         demographic(selected_data);
         bar(selected_data);
         bubble(selected_data);
   
}

startup();