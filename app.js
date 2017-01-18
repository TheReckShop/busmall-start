'use strict';

var choicesMade = [];
var productDisplay = document.createElement('product-display');
var pic1 = document.createElement('pic-1');
var pic2 = document.createElement('pic-2');
var pic3 = document.createElement('pic-3');
var productName = ['bag', 'bananna', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageFilePath = ['img/bag.jpg', 'img/bananna.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/imgwine-glass.jpg'];
var timesShown = 0;
var timesClicked = 0;

function ImageConstructor(imageName, imageFilePath, timesShown, timesClicked) {
  this.imageName = imageName;
  this.imageFilePath = imageFilePath;
  this.timesShown = timeShown;
  this.timesClicked = timesClicked;
};

var bag = new ImageConstructor(productName[0], imageFilePath[0], 0, 0);
var banana = new ImageConstructor(productName[1], imageFilePath[1], 0, 0);
var bathroom = new ImageConstructor(productName[2], imageFilePath[2], 0, 0);
var boots = new ImageConstructor(productName[3], imageFilePath[3], 0, 0);
var breakfast = new ImageConstructor(productName[4], imageFilePath[4], 0, 0);
var bubblegum = new ImageConstructor(productName[5], imageFilePath[5], 0, 0);
var chair = new ImageConstructor(productName[6], imageFilePath[6], 0, 0);
var cthulhu = new ImageConstructor(productName[7], imageFilePath[7], 0, 0);
var dogDuck = new ImageConstructor(productName[8], imageFilePath[8], 0, 0);
var dragon = new ImageConstructor(productName[9], imageFilePath[9], 0, 0);
var pen = new ImageConstructor(productName[10], imageFilePath[10], 0, 0);
var petSweep = new ImageConstructor(productName[11], imageFilePath[11], 0, 0);
var scissors = new ImageConstructor(productName[12], imageFilePath[12], 0, 0);
var shark = new ImageConstructor(productName[13], imageFilePath[13], 0, 0);
var sweep = new ImageConstructor(productName[14], imageFilePath[14], 0, 0);
var tauntaun = new ImageConstructor(productName[15], imageFilePath[15], 0, 0);
var unicorn = new ImageConstructor(productName[16], imageFilePath[16], 0, 0);
var usb = new ImageConstructor(productName[17], imageFilePath[17], 0, 0);
var waterCan = new ImageConstructor(productName[18], imageFilePath[18], 0, 0);
var wineGlass = new ImageConstructor(productName[19], imageFilePath[19], 0, 0);
