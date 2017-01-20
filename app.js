'use strict';

var productDisplay = document.createElement('product-display');
var pic1 = document.createElement('pic-1');
var pic2 = document.createElement('pic-2');
var pic3 = document.createElement('pic-3');
var productName = ['bag', 'bananna', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageFilePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var leftProduct;
var rightProduct;
var centerProduct;
function ImageConstructor(imageName, imageFilePath, timesShown, timesClicked) {
  this.imageName = imageName;
  this.imageFilePath = imageFilePath;
  this.timesShown = 0;
  this.timesClicked = 0;
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

var choicesMade = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];


// parseInt(totalClicks);

function randNum() {
  var min = 0;
  var max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function uploadImgLeft() {
  var totalClicks = bag.timesClicked + banana.timesClicked + bathroom.timesClicked + boots.timesClicked + breakfast.timesClicked + bubblegum.timesClicked + chair.timesClicked + cthulhu.timesClicked + dogDuck.timesClicked + dragon.timesClicked + pen.timesClicked + petSweep.timesClicked + scissors.timesClicked + shark.timesClicked + sweep.timesClicked + tauntaun.timesClicked + unicorn.timesClicked + usb.timesClicked + waterCan.timesClicked + wineGlass.timesClicked;
  console.log('TC: ' + totalClicks);
  console.log('TC: ' + totalClicks);
  var leftIndex = randNum();
  console.log('start');
  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  leftProduct.timesShown += 1;
  leftProduct.timesClicked += 1;
  var centerIndex = randNum();
  while (centerIndex === leftIndex) {
    centerIndex = randNum();
  }

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  // centerProduct.timesShown += 1;
  // centerProduct.timesClicked += 1;
  var rightIndex = randNum();
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum();
  }

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  // rightProduct.timesShown += 1;
  // rightProduct.timesClicked += 1;

  var previouslyShown = [leftIndex, rightIndex, centerIndex];
  console.log('PS' + previouslyShown);
  while (previouslyShown[0] === previouslyShown[1] || previouslyShown[0] === previouslyShown[2]) {
    leftIndex = randNum();
    console.log('test1');
    break;
  }
  while (previouslyShown[1] === previouslyShown[2]) {
    rightIndex = randNum();
    console.log('test2');
    break;
  }
  console.log('timesClicked ' + leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked);

  while (leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked === 5) {
    console.log('test');
    break;
    // var text = document.getElementById('totals').textContent;
    // document.getElementById('totals').textContent = 'This is some text'
  }
};

function uploadImgCenter() {
  var leftIndex = randNum();
  console.log('start');
  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  // leftProduct.timesShown += 1;
  // leftProduct.timesClicked += 1;
  var centerIndex = randNum();
  while (centerIndex === leftIndex) {
    centerIndex = randNum();
  }

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  centerProduct.timesShown += 1;
  centerProduct.timesClicked += 1;
  var rightIndex = randNum();
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum();
  }

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  // rightProduct.timesShown += 1;
  // rightProduct.timesClicked += 1;

  var previouslyShown = [rightIndex, leftIndex, centerIndex];
  console.log(previouslyShown);
  while (previouslyShown[0] === previouslyShown[1] || previouslyShown[0] === previouslyShown[2]) {
    leftIndex = randNum();
    break;
  }
  while (previouslyShown[1] === previouslyShown[2]) {
    rightIndex = randNum();
    break;
  }
  console.log('timesClicked ' + leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked);

  while (leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked === 5) {
    console.log('test');
  };
};
function uploadImgRight() {
  var leftIndex = randNum();
  console.log('start');
  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  // leftProduct.timesShown += 1;
  // leftProduct.timesClicked += 1;
  var centerIndex = randNum();
  while (centerIndex === leftIndex) {
    centerIndex = randNum();
  }

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  // centerProduct.timesShown += 1;
  // centerProduct.timesClicked += 1;
  var rightIndex = randNum();
  while (rightIndex === leftIndex || rightIndex === centerIndex) {
    rightIndex = randNum();
  }

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  rightProduct.timesShown += 1;
  rightProduct.timesClicked += 1;

  var previouslyShown = [rightIndex, leftIndex, centerIndex];
  console.log(previouslyShown);
  while (previouslyShown[0] === previouslyShown[1] || previouslyShown[0] === previouslyShown[2]) {
    rightIndex = randNum();
    previouslyShown[0] = rightIndex;
    console.log(' rightIndex' + rightIndex );
  }
  while (previouslyShown[1] === previouslyShown[2]) {
    leftIndex = randNum();
    previouslyShown[1] = leftIndex;
    console.log('leftindex' + leftIndex);
  }
  console.log('timesClicked ' + leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked);

  while (leftProduct.timesClicked + rightProduct.timesClicked + centerProduct.timesClicked === 5) {
    console.log('test');
    // var text = document.getElementById('totals').textContent;
    // document.getElementById('totals').textContent = 'This is some text'
    break;
  }
};
uploadImgLeft();
uploadImgRight();
uploadImgCenter();
var imgElLeft = document.getElementById('left');
var imgElCenter = document.getElementById('center');
var imgElRight = document.getElementById('right');
imgElLeft.addEventListener('click', uploadImgLeft, false);
imgElRight.addEventListener('click', uploadImgRight, false);
imgElCenter.addEventListener('click', uploadImgCenter, false);
