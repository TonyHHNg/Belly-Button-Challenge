## Background

In this assignment, build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


## Instructions
#### Complete the following steps:

- Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.


![hw01](https://user-images.githubusercontent.com/116006523/228648639-4e8a3c93-bd39-474c-994e-94bc1d2f36ca.jpg)

#### Bar Chart

- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use ```sample_values``` as the values for the bar chart.

- Use ```otu_ids``` as the labels for the bar chart.

- Use ```otu_labels``` as the hovertext for the chart.

![bubble_chart](https://user-images.githubusercontent.com/116006523/228648686-f5b2e273-6ce8-4c53-ba01-aef45d0550c2.jpg)

#### Bubble Chart

- Create a bubble chart that displays each sample.

- Use ```otu_ids``` for the x values.

- Use ```sample_values``` for the y values.

- Use ```ample_values``` for the marker size.

- Use ```otu_ids``` for the marker colors.

- Use ```otu_labels``` for the text values.


![hw03](https://user-images.githubusercontent.com/116006523/228648707-d5917509-102e-480b-8fa6-37a697785976.jpg)

#### Demographic Information
- Display the sample metadata, i.e., an individual's demographic information.

- Display each key-value pair from the metadata JSON object somewhere on the page.

#### Combine the charts and demographic information 
![Screenshot 2023-03-29 203837](https://user-images.githubusercontent.com/116006523/228649256-08bab0a8-824c-475e-9d5b-bfdea0ed22bc.jpg)

