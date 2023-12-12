let nextTurn;



function setup() {
  createCanvas(1000, 1000);
  
  score = 0;
  lives = 3;
  
  p1h1Value = 1;
  p1h2Value = 1;
  p2h1Value = 1;
  p2h2Value = 1;
  
  p1h1Alive = true;
  p1h2Alive = true;
  p2h1Alive = true;
  p2h2Alive = true;
  
  p1h1Selected = false;
  p1h2Selected = false;
  p2h1Selected = false;
  p2h2Selected = false;
  
  bsp1h1 = false;
  bsp1h2 = false;
  bsp2h1 = false;
  bsp2h2 = false;
  
  totalHandsSelected = 0;
  
  playerTurn = true;
  
  p1Clicked1stHand = false;
  p1Clicked2ndHand = false;
  p2Clicked1stHand = false;
  p2Clicked2ndHand = false;
  

  
  
  
  

}





function draw() {
if (lives <= 0){
  background(240);
  text("You died :(", 350,350);
  text("Score: " + score, 350, 400);
  push();
  text("R to reset & Space to save score", 200, 900);
  textSize(10);
  pop();
}
  
  
if (lives > 0){
 background(240);
  
  if (p1h1Value >= 5){
      p1h1Value = 1;
      lives --;
  }
  if (p1h2Value >= 5){
     p1h2Value = 1; 
      lives --;
  }
  if (p2h1Value >= 5){
      p2h1Value = 1;
      score += 5 
  }
  if (p2h2Value >= 5){
      p2h2Value = 1;
    score += 5
  }

textSize(50)  
text("Lives: "+ lives,50,50)
text("Score: " + score, 250,50)


  

  
  
  
//Blue when selected
  push()
    p1h1Shape = rect(250, 250, 100);
    p1h1text = text(p1h1Value,250,250);
    
  if (p1h1Selected == true){
      fill(0,0,150)
      p1h1Shape = rect(250, 250, 100);
    }
  pop()

  push()
    p1h2Shape = rect(250, 500, 100);
    p1h2text = text(p1h2Value,250,500);
    
  if (p1h2Selected == true){
      fill(0,0,150)
      p1h2Shape = rect(250, 500, 100);
    }
  pop()

//Gray when hovering  
if (mouseX <= 350 && mouseX >= 200 && mouseY <= 350 && mouseY >= 250 && p1Clicked1stHand == false){
            push()
              fill(75)
              p1h1Shape = rect(250, 250, 100);
            pop()
}

if(mouseX <= 350 && mouseX >= 200 && mouseY >= 500 && mouseY <= 600 && p1Clicked1stHand == false){
             push()
              fill(75)
              p1h2Shape = rect(250, 500, 100);
             pop()
}  
  
  

    p2h1Shape = rect(750, 250, 100);
    p2h1text = text(p2h1Value,750,250);

    p2h2Shape = rect(750, 500, 100);
    p2h2text = text(p2h2Value,750,500);


  
  

  
  

addValues();  

}
//Player Turn
if (playerTurn == true){


      if (mouseX <= 350 && mouseX >= 200 && mouseY <= 350 && mouseY >= 250 && p1Clicked1stHand == false &&  mouseIsPressed){
        console.log("Player 1 Selects Hand 1");
        p1Clicked1stHand = true;
        totalHandsSelected ++;
        p1h1Selected = true;
        }
  
      if(mouseX <= 350 && mouseX >= 200 && mouseY >= 500 && mouseY <= 600 && p1Clicked1stHand == false &&  mouseIsPressed){
        console.log("Player 1 Selects Hand 2");
        p1Clicked1stHand = true;
        totalHandsSelected ++;
        p1h2Selected = true;
        }

      if(mouseX <= 850 && mouseX >= 650 && mouseY <= 350 && mouseY >= 250 && p1Clicked1stHand == true && mouseIsPressed){
        console.log("Player 1 Selects Opponent's Hand 1");
        p2h1Selected = true;
        totalHandsSelected ++;
        playerTurn = false;
        }
  
      if(mouseX <= 850 && mouseX >= 650 && mouseY >= 500 && mouseY <= 600 && p1Clicked1stHand == true && mouseIsPressed){
        console.log("Player 1 Selects Opponent's Hand 2")
        p2h2Selected = true;
        totalHandsSelected ++;
        playerTurn = false; 
        }
  
if (playerTurn == false){
  rand1stChoice = Math.floor(Math.random() * 2);
  rand2ndChoice = Math.floor(Math.random() * 2);

  
  switch(rand1stChoice){
    case 0:
      bsp2h1 = true;
      p2Clicked1stHand = true;

      break;
    case 1:
      p2h2Selected = true;
      bsp2h2 = true;
      p2Clicked1stHand = true;

      break;
  }
  
  switch(rand2ndChoice){
    case 0:
      bsp1h1 = true;
      p2Clicked2ndHand = true;

      
      break;
    case 1:
      bsp1h2 = true;
      p2Clicked2ndHand = true;

      break;
  }
      
  
  

  
}
  
//If Player Turn is true
}  

  
//Draw  
}


  function addValues(){
  if(totalHandsSelected == 2){
    
    switch(p1h1Selected){
      case true:
        switch(p2h1Selected){
          case true:
            p2h1Value = p1h1Value + p2h1Value
            score = score + p2h1Value
            resetTheAdd();
            console.log("IT'S ME 1");
            break;
         
          case false:
            break;
        }
        switch(p2h2Selected){
          case true:
            p2h2Value = p1h1Value + p2h2Value
            score = score + p2h2Value
            resetTheAdd();
            console.log("IT'S ME 2");
            break;
            
          case false:
            break;
        }
        break;
    
      case false:
        switch(p2h1Selected){
          case true:
            p2h1Value = p1h2Value + p2h1Value
            score = score + p2h1Value
            resetTheAdd();
            console.log("IT'S ME 3");
            break;
         
          case false:
            break;
        }
        switch(p2h2Selected){
          case true:
            p2h2Value = p1h2Value + p2h2Value
            score = score + p2h2Value
            resetTheAdd();
            console.log("IT'S ME 4");
            break;
            
          case false:
            break;
    }
  }
}
    
 
      
      if(playerTurn == false && p2Clicked2ndHand == true){
        switch(rand1stChoice){
          case 0:
            switch(rand2ndChoice){
              case 0:
                p1h1Value = p2h1Value + p1h1Value
                resetTheAdd();
                p2Clicked1stHand = false;
                p2Clicked2ndHand = false;
                playerTurn = true;
                console.log("IT'S ME 5");
                break;
              case 1:
                p1h2Value = p2h1Value + p1h2Value
                resetTheAdd();
                p2Clicked1stHand = false;
                p2Clicked2ndHand = false;
                playerTurn = true;
                console.log("IT'S ME 6");
                break;
            }
            break;
          case 1:
            switch(rand2ndChoice){
              case 0:
                p1h1Value = p2h2Value + p1h1Value
                resetTheAdd();
                p2Clicked1stHand = false;
                p2Clicked2ndHand = false;
                playerTurn = true;
                console.log("IT'S ME 7");
                break;
              case 1:
                p1h2Value = p2h2Value + p1h2Value
                resetTheAdd();
                p2Clicked1stHand = false;
                p2Clicked2ndHand = false;
                playerTurn = true;
                console.log("IT'S ME 8");
                break;
            }
          
        }
      }
    }


function resetTheAdd(){
  totalHandsSelected = 0;
  p1h1Selected = false;
  p1h2Selected = false;
  p2h1Selected = false;
  p2h2Selected = false;
  
  p1Clicked1stHand = false;
  p1Clicked2ndHand = false;
  
  
  console.log("Choice 1: " + rand1stChoice)
  console.log("Choice 2: " + rand2ndChoice)
  
  console.log("p1h1Value: " + p1h1Value);
  console.log("p1h2Value: " + p1h2Value);
  console.log("p2h1Value: " + p2h1Value);
  console.log("p2h2Value: " + p2h2Value);


  
  
}

function SaveScore(){
  saveCanvas("BlahBlah.jpg");
}

function restart(){
  lives = 3
  score = 0
  
  p1h1Value = 1;
  p1h2Value = 1;
  p2h1Value = 1;
  p2h2Value = 1;
  
}

function keyPressed(a){
    switch(a.keyCode){
    case 82:
     restart();
      break;
      
    case 32:
      SaveScore();
      break;
    }
  }
