'use strict';

var productDisplay = document.createElement('product-display');
var pic1 = document.createElement('pic-1');
var pic2 = document.createElement('pic-2');
var pic3 = document.createElement('pic-3');
var productName = ['bag', 'bananna', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var imageFilePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

function ImageConstructor(imageName, imageFilePath, timesShown, timesClicked) {
  this.imageName = imageName;
  this.imageFilePath = imageFilePath;
  this.timesShown = timesShown;
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

var choicesMade = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

function randNum() {
  var min = 0;
  var max = 19;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function sum(a, b, c) {
  return a + b + c;
}

function uploadImgLeft() {
  var leftIndex = randNum();
  // return leftIndex;
  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  leftProduct.timesShown += 1;
  leftProduct.timesClicked += 1;
  var leftClicked = leftIndex.valueOf();

  var centerIndex = randNum();

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  // centerProduct.timesShown += 1;
  // centerProduct.timesClicked += 1;
  var centerClicked = centerIndex.valueOf();
  // console.log(centerClicked);
  return centerProduct.timesClicked;
  var rightIndex = randNum();
  // return rightIndex;

  while (rightProduct === centerProduct) {
    rightIndex = randNum();
  }

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  // rightProduct.timesShown += 1;
  // rightProduct.timesClicked += 1;
  var rightClicked = rightIndex.valueOf();
  var previouslyShown = [leftClicked, rightClicked, centerClicked];

  while (rightProduct === leftProduct || centerProduct === leftProduct ) {
    leftIndex = randNum();
  }
  while (rightProduct === centerProduct) {
    rightIndex = randNum();
    console.log('PS Compare:' + leftClicked, rightClicked, centerClicked);
    // break;
  }

  console.log('PSprevs' + previouslyShown);
  while (leftClicked + rightClicked + centerClicked > 10) {
    document.write('You\'re done');
  };
  // while (rightProduct.timesClicked + centerProduct.timesClicked + rightProduct.timesClicked > 10) {
  //   console.log('it works');
  //   break;

  var clicksMade = [bag.timesClicked, banana.timesClicked, bathroom.timesClicked, boots.timesClicked, breakfast.timesClicked, bubblegum.timesClicked, chair.timesClicked, cthulhu.timesClicked, dogDuck.timesClicked, dragon.timesClicked, pen.timesClicked, petSweep.timesClicked, scissors.timesClicked, shark.timesClicked, sweep.timesClicked, tauntaun.timesClicked, unicorn.timesClicked, usb.timesClicked, waterCan.timesClicked, wineGlass.timesClicked];
  console.log(clicksMade);
};
function uploadImgRight() {
  var leftIndex = randNum();
  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  // leftProduct.timesShown += 1;
  // leftProduct.timesClicked += 1;
  var leftClicked = leftIndex.valueOf();

  var centerIndex = randNum();
  while (leftIndex === centerIndex){
    leftIndex = randNum();
  }

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  // centerProduct.timesShown += 1;
  // centerProduct.timesClicked += 1;
  var centerClicked = centerIndex.valueOf();
  console.log(centerClicked);

  var rightIndex = randNum();

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  // rightProduct.timesShown += 1;
  // rightProduct.timesClicked += 1;
  var rightClicked = rightIndex.valueOf();
  var previouslyShown = [leftClicked, rightClicked, centerClicked];

  while (rightProduct === leftProduct || rightProduct === centerProduct) {
    rightIndex = randNum();
    console.log('PS Compare:' + leftClicked, rightClicked, centerClicked);
  }
  while (centerProduct === leftProduct) {
    leftIndex = randNum();
    console.log('PS2 Compare:' + leftIndex, rightIndex, centerIndex);
  }

  // while (rightProduct.timesClicked + centerProduct.timesClicked + rightProduct.timesClicked > 10) {
  //   console.log('it works');
  //   break;
  // };
  var clicksMade = [bag.timesClicked, banana.timesClicked, bathroom.timesClicked, boots.timesClicked, breakfast.timesClicked, bubblegum.timesClicked, chair.timesClicked, cthulhu.timesClicked, dogDuck.timesClicked, dragon.timesClicked, pen.timesClicked, petSweep.timesClicked, scissors.timesClicked, shark.timesClicked, sweep.timesClicked, tauntaun.timesClicked, unicorn.timesClicked, usb.timesClicked, waterCan.timesClicked, wineGlass.timesClicked];
  console.log(clicksMade);

};

function uploadImgCenter() {
  var leftIndex = randNum();

  var leftProduct = choicesMade[leftIndex];
  left.src = leftProduct.imageFilePath;
  left.alt = leftProduct.productName;
  // leftProduct.timesShown += 1;
  // leftProduct.timesClicked += 1;
  var leftClicked = leftIndex.valueOf();

  var centerIndex = randNum();
  while (centerIndex === leftIndex || centerIndex === rightIndex) {
    centerIndex = randNum();
  }

  var centerProduct = choicesMade[centerIndex];
  center.src = centerProduct.imageFilePath;
  center.alt = centerProduct.productName;
  centerProduct.timesShown += 1;
  centerProduct.timesClicked += 1;
  var centerClicked = centerIndex.valueOf();
  // console.log(centerClicked);
  // return centerProduct.timesClicked;
  var rightIndex = randNum();
  // return rightIndex;

  while (rightIndex === leftIndex) {
    rightIndex = randNum();
  }

  var rightProduct = choicesMade[rightIndex];
  right.src = rightProduct.imageFilePath;
  right.alt = rightProduct.productName;
  // rightProduct.timesShown += 1;
  // rightProduct.timesClicked += 1;
  var rightClicked = rightIndex.valueOf();
  var previouslyShown = [leftClicked, rightClicked, centerClicked];

  while (rightProduct === centerProduct || rightProduct === leftProduct ) {
    rightIndex = randNum();
    console.log('PS Compare:' + leftClicked, rightClicked, centerClicked);
    // break;

    console.log('PSprevs' + previouslyShown);
    // while (leftClicked + rightClicked + centerClicked < 5) {
    //   document.write('You\'re done');
    // };
    // while (rightProduct.timesClicked + centerProduct.timesClicked + rightProduct.timesClicked > 5) {
    //   console.log('it works');
    //   break;
    // };
    var clicksMade = [bag.timesClicked, banana.timesClicked, bathroom.timesClicked, boots.timesClicked, breakfast.timesClicked, bubblegum.timesClicked, chair.timesClicked, cthulhu.timesClicked, dogDuck.timesClicked, dragon.timesClicked, pen.timesClicked, petSweep.timesClicked, scissors.timesClicked, shark.timesClicked, sweep.timesClicked, tauntaun.timesClicked, unicorn.timesClicked, usb.timesClicked, waterCan.timesClicked, wineGlass.timesClicked];
    console.log(clicksMade);
  };
};

  // var clicks = sum(leftProduct.timesClicked, rightProduct.timesClicked, centerProduct.timesClicked);
  // console.log('clicks' + clicks)
// function clickCount() {
//   console.log('start');
//   left.timesClicked += 1;
//   left.timesShown += 1;
//   console.log('LCL' + left.timesClicked.valueOf());
//   center.timesClicked += 1;
//   center.timesShown += 1;
//   console.log('CENCL' + center.timesClicked.valueOf());
//   right.timesClicked += 1;
//   right.timesShown += 1;
//   console.log('RCL' + right.timesClicked.valueOf());

uploadImgLeft();
uploadImgRight();
uploadImgCenter();
// clickCount();

// leftProduct.timesClicked += 1;

// choicesMade.forEach()

// function clickAmounts() {
//   var sliceClicks = choicesMade.bag.timesClicked;
//   console.log('slice' + sliceClicks);
// };
// clickAmounts();
var imgElLeft = document.getElementById('left');
var imgElCenter = document.getElementById('center');
var imgElRight = document.getElementById('right');
var imgElAll = document.getElementById('left', 'center', 'right');
imgElLeft.addEventListener('click', uploadImgLeft, false);
imgElRight.addEventListener('click', uploadImgRight, false);
imgElCenter.addEventListener('click', uploadImgCenter, false);
// imgElRight.addEventListener('click', clickCount, false);

// localStorage.whatevernameyouwant = anyvalue you want will create a never ending superglowbal object!
