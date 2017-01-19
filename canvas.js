'use strict';

var context = document.getElementById('demo-chart').getContext('2d');

var chartData = [100, 200, 300, 50, 10];
var chartColors = ['blue','red','yellow','orange','green'];
var chartLabels = [];

var chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// var chartOptions = {};
// chartOptions.scales.yAxes.ticks.beginAtZero = true;

var myFirstChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: chartColors,
    datasets: [{
      label: '# of votes for each color',
      data: chartData,
      backgroundColor: chartColors
    }]
  },
  options: chartOptions

});
