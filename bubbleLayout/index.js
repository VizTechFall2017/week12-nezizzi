var width = document.getElementById('svg1').clientWidth;
var height = document.getElementById('svg1').clientHeight;

var marginLeft = 0;
var marginTop = 0;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

var color = d3.scaleOrdinal(d3.schemeCategory20);

//import the data from the .csv file
d3.csv('./banks.csv', function(banks){

    console.log(banks);

    countryList = banks.map(function(d){return d.country});

    console.log(countryList);

    uniqueList = countryList.filter(function (d, i, a) {
        return a.indexOf(d) == i;
    });

    console.log(uniqueList);

});



