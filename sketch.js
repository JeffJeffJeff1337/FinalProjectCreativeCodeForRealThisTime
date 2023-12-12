let mySun;
let sunColor;

let backgroundColor1;
let backgroundColor2;
let backgroundColor3;


function setup() {
  createCanvas(400, 400);
  
  backgroundColor1 = 171;
  backgroundColor2 = 32;
  backgroundColor3 = 253;
  
  mySun = new sun(width / 2, height / 2, 100);
  
}

function draw() {
  background(backgroundColor1, backgroundColor2, backgroundColor3);
  skyBackground();
  mySun.display();
  
  cityBackground();
}



class sun{
  constructor(xSunPos,ySunPos, sunSize){
    this.xSunPos = xSunPos;
    this.ySunPos = ySunPos;
    this.sunSize = sunSize;
  }
    display(){
      push();
      noStroke();
      const sunColor = color(255,125,0);
      sunColor.setAlpha = (5);
      fill(sunColor);
      ellipse(this.xSunPos,this.ySunPos,this.sunSize);
      pop();
      
      push();
      noStroke();
      fill(0,0,139);
      rect(this.xSunPos - 50, this.ySunPos + 40, this.sunSize , this.sunSize / 10)
      pop();
      
      push();
      noStroke();
      fill(0,0,139);
      rect(this.xSunPos - 50, this.ySunPos + 20, this.sunSize , this.sunSize / 10)
      pop();
      
      push();
      noStroke();
      fill(0,0,139);
      rect(this.xSunPos - 50, this.ySunPos, this.sunSize , this.sunSize / 10)
      pop();
      
    }
}

function skyBackground(){
  push()
  noStroke();
  fill(0,0,139)
  rect(0, 0, width, height / 1.5);
  pop()
  
}

function cityBackground(){
  
 
//Light purple Building 1
  push();
  noStroke();
  fill(125,18,255);
  rect(75, 200, 50, 75);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(80,210,15,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(100,210,15,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(80,217,40,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(80,225,10,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(95,225,10,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(110,230,10,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(100,245,10,3);
  pop();
  
  
//Light purple Building 2
  push();
  noStroke();
  fill(125,18,255);
  rect(275, 200, 50, 75);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(280,210,15,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(300,220,15,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(280,230,40,3);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(280,240,10,3);
  pop();
  
  //ForeGround Building 1
  push();
  noStroke();
  fill(32,5,137);
  rect(50, 300, 150, 100);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(60,310,40,15);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(110,310,30,15);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(145,310,30,15);
  pop();
  
  push();
  noStroke();
  fill(255,255,255);
  rect(110,360,75,15);
  pop();
  
  
  
}



