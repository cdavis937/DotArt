let width;
let height;

function setup() {
  width = windowWidth;
  height = windowHeight;
  
  createCanvas(width, height);
  noLoop();
}

function draw() {
  background(255);

  var nRow = height / 10; //number of columns and rows of grid
  var nCol = width / 10; //number of columns and rows of grid

  //Two for loops nested create a grid of ellipses here:
  for (var i = 0; i < nCol; i++) {
    for (var j = 0; j < nRow; j++) {

      var r = int(random(0,255));
      var g = int(random(0,10));
      var b = int(random(0,10));

      fill(r, g, b);
      noStroke();

      var size = int(random(2,3));

      var wiggleX = int(random(-5, 5));
      var wiggleY = int(random(-5, 5));


      //Two cases: Uncomment / Comment to see the two scenarios.

      //Case 1: circles are small or big
      ellipse(10 + (i * 20), 10 + (j * 20), size * 10);

      //Case 2: circles are small or big, and they are randomly shifted by the wiggle variables
      ellipse(10+(i*20)+wiggleX, 10+(j*20)+wiggleY, size*5);

    }
  }
}

function mouseClicked() {
  redraw();
}

function touchEnded()
{
  redraw();
}