var circleX = 50;
var circleY = 50;
var rectX = 100;
var rectY = 100;
var rectSpeed = 5;
var xspeed = 1;
var ySpeed = 3;
var r = 50;
var color3;
var hi;
var p;
var button;
var cButton;
var slider;
var slider2;
var input1;
var nameP;
var sW =8;

function setup() {
  nameP = createP('Your name!')
  nameP.mouseOver(overP)
  nameP.mouseOut(outP)
  
  createCanvas(400, 400);
  color3 = color(random(255), random(255), random(255))
  //stroke is put in once
  stroke(0, 255, 0);
  h1 = createElement('h1', 'Waiting...')
  p = createP()
  button = createButton("change rect speed")
  cButton = createButton("lower circle speed")
  button.mousePressed(changeRectSpeed)
  cButton.mousePressed(lowerCircleSpeed)

  slider = createSlider(10, 130, 50);
  slider2 = createSlider(0, 255, 0);
  slider3 = createSlider(3, 20, 12);
  input1 = createInput("type your name");
  input1.input(updateText);
  slider3.input(updateSize);
  p.style("background-color", "pink");
  p.style('color', color(150,150,255))
  p.mouseOver(changeStyle);
  p.mouseOut(revertStyle);
  //button.mousePressed(changeStyle);
  paragraphs = selectAll('p')
  for (var i = 0; i < paragraphs.length; i++) 
  {paragraphs[i].mouseOver(changeStyle);
   paragraphs[i].mouseOut(revertStyle);                                           
    
  }
}
function updateSize() {
  nameP.style("font-size", slider3.value() + "pt")
}


function changeStyle() {
 this.style("background-color", "black");
  this.style('color', 'white')
}

function revertStyle() {
  this.style("background-color", "green");
  this.style('color', 'blue')
  p.style("background-color", "pink");
  p.style('color', color(150,150,255))
}
function updateText() {
 nameP.html(input1.value()); 
}

function overP(){
  nameP.html('your mouse is over me!');
}
function outP(){
  nameP.html('your mouse is out!');
}
 
function draw() {
  value2 = slider2.value()
  background(value2);
  fill(color3);
  strokeWeight(sW);
  //prevent stroke from repeating again and again so I can change it.
  //stroke(0,255,0);
  ellipse(circleX, circleY, slider.value());
  rect(rectX, rectY, r, r);
  circleX += xspeed
  circleY += ySpeed
  //this make the speed become it's opposite, so that the ball apears to bounce. Depending on the wall, the x or y speed stays the same.
  value = slider.value()
  if (circleX < value/2 +sW/2|| circleX > width - value/2 - sW/2) {
    xspeed *= -1
    color3 = color(random(255), random(255), random(255));
  }
  //I use width and height so that it works even if I change canvas size
  if (circleY < value/2 + sW/2|| circleY > height - value/2 - sW/2) {
    ySpeed *= -1
    color3 = color(random(255), random(255), random(255))

  }
  //I use an or statement to compact code
  rectX += rectSpeed
  if (rectX < 0 +sW/2|| rectX > width - r - sW/2) {
    rectSpeed *= -1;
    stroke(random(0, 255), random(0, 255), random(0, 255))
  }
  h1.position(rectX-50, 550)
  p.position(0, 600)
  text(input1.value(), 10, 20);
  //nameP.html(input1.value());
}

function mousePressed() {
  if (xspeed > 0) {
    xspeed += 1
  } else {
    xspeed -= 1;
  }
  h1.html("Circle speed below")
  p.html("you changed the circles speed! It is " + Math.abs(xspeed))
}

function changeRectSpeed() {
  if (rectSpeed > 0) {
    rectSpeed = random(3, 12)
  } else {
    rectSpeed = random(-1, -5)
  }
}

function lowerCircleSpeed() {
  if (xspeed > 0) {
    xspeed -= 2
  } else {
    xspeed += 2
  }
}
