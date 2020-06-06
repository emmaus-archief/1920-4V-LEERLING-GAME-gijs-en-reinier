/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var STARTSCHERM = 3;
var UITLEG = 0;
var SPELEN = 1;
var GAMEOVER = 2;
// variabelen voor de
const xPositieSpeler = 300;
var yPositieSpeler = 200;

var spelStatus = STARTSCHERM;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

const muurX = 1200; // waarde voor de x-positie van de rechtermuur
const muurLengte = 700; // waarde voor de lengte van de rechtermuur

var score = 0; // aantal behaalde punten

var keyIsDown = true; // variabele die checkt of er een toets wordt ingedrukt
var spelerLengte = 100; // variabele voor de lengte van de speler met beginlengte

var balX = 600; // x-waarde van de beginpositie van de bal
var balY = 300; // y-waarde van de beginpositie van de bal
const spelerBreedte = 10; // waarde voor de breedte van de speler

var beweegVariabeleX = 5; // variabele voor de snelheid waarmee de bal beweegt over de x-as
var beweegVariabeleY = 2.5; // variabele voor de snelheid waarmee de bal beweegt over de y-as

const balBreedte = 20; // waarde voor de breedte van de bal
const balLengte = 20; // waarde voor de lengte van de bal

const veldBreedte = 1280; // waarde voor de breedte van het hele veld (x-as)
const veldLengte = 720; // waarde voor de lengte van het hele veld (y-as)

var kleurWaarde = 255;

var mouseX;
var mouseY;
var mouseIsPressed;
var tekstgrootteUitleg = 50;
var tekstgrootteSpelen = 50;
var vergrotertekstUitlegenSpelen = 10;
/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill(kleurWaarde, 103, 77);
  rect(0, 0, veldBreedte, veldLengte);
  fill("white");
  rect(muurX, 10, 10, muurLengte);
  fill("white");
  textFont('georgia');
  textSize(80);
  text("Pong!", veldBreedte / 2 - 200, 100);
  textSize(75);
  text("score:  " + score, veldBreedte / 2 - 600, 100)
  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(veldBreedte, veldLengte, tekstgrootteUitleg, tekstgrootteSpelen, vergrotertekstUitlegenSpelen) {
    

};

var veranderKleur = function(kleurWaarde, score){
    if (score >= 5){
        kleurWaarde = kleurWaarde - 10;
    }
}
/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(xPositieSpeler, yPositieSpeler) {
  fill("white");
  rect(xPositieSpeler, yPositieSpeler, spelerBreedte, spelerLengte);
};



/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function() {
    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var tekenBal = function(balX, balY) {
   fill("white");
   ellipse(balX, balY, balBreedte, balLengte);
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};



/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  
};

var checkVijandGeraakt = function(){
   return false;
};
/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};



/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case STARTSCHERM:
    tekenVijand(veldBreedte, veldLengte, tekstgrootteUitleg, tekstgrootteSpelen, vergrotertekstUitlegenSpelen); {
         fill(102, 215, 237);
         rect(0, 0, veldBreedte, veldLengte);
         fill("white");
         textSize(50);
         textFont("georgia");
         text("Welkom bij Pong!", 400, 100);
         textSize(40);
         text("'s werelds leukste game", 400, 200);
         textSize(tekstgrootteUitleg);
         text("Uitleg", 200, 400, 300, 450);
         textSize(tekstgrootteSpelen);
         text("Spelen", 900, 400, 1000, 450);
         if (mouseX >= 200 && mouseX <= 300 && mouseY >= 400 && mouseY <= 450 && mouseIsPressed){
             spelStatus = UITLEG;
         }
         else if (mouseX >= 700 && mouseX <= 800 && mouseY >= 400 && mouseY <= 450 && mouseIsPressed){
             spelStatus = SPELEN;
         }
         else if(mouseX >= 200 && mouseX <= 300 && mouseY >= 400 && mouseY <= 450){
              tekstgrootteUitlegenSpelen = tekstgrootteUitlegenSpelen + vergrotertekstUitlegenSpelen;
              if (tekstgrootteUitlegenSpelen = 60){
                  vergrotertekstUitlegenSpelen = -10;

              } 
         }
         else if (mouseX >= 700 && mouseX <= 800 && mouseY >= 400 && mouseY <= 450){
             tekstgrootteUitlegenSpelen = tekstgrootteUitlegenSpelen + 10;
             if (tekstgrootteUitlegenSpelen = 60){
                  vergrotertekstUitlegenSpelen = -10;

              } 
         
        }
    }



    break;

    case UITLEG:
    checkSpelerGeraakt();{
        fill(102, 215, 237);
        rect(0, 0, veldBreedte, veldLengte);
        textSize(50);
        textFont("georgia");
        text("Welkom bij Pong!", 400, 100);
        textSize(40);
        text("'s werelds leukste game", 350, 200);
        fill("white");
        textSize(20);
        text("Bij Pong is het de bedoeling om een zo hoog mogelijke score te halen. Dit doe je door met je speler, die je door middel van de pijltjes omhoog en omlaag op je toetsenbord omhoog en omlaag kan laten bewegen, het witte balletje terug te kaatsen naar waar die vandaan komt. Als dan het balletje de witte muur aan de rechterzijde van het speelveld raakt, krijg je een punt. Hoe hoger je score, hoe moeilijker het spelletje wordt. Je speler wordt kleiner en het balletje beweegt sneller. Veel succes!", 200, 300, 1000, 800);
        textSize(30);
        text("Menu", 200, 600, 300, 650);
        text("Spelen", 1100, 600, 1150, 650);
        if (mouseX >= 200 && mouseX <= 300 && mouseY >= 600 && mouseY <= 650 && mouseIsPressed ){
            spelStatus = STARTSCHERM
        }
        else if (mouseX >= 1100 && mouseX <= 1150 && mouseY >= 600 && mouseY <= 650 && mouseIsPressed){
            spelStatus = SPELEN
        }
    }
    break;

    case SPELEN:
      beweegSpeler(); {
          if (keyIsDown(UP_ARROW) && yPositieSpeler > 15  ) {
              yPositieSpeler = yPositieSpeler - 10;
          }
          if (keyIsDown(DOWN_ARROW) && yPositieSpeler < 605) {
              yPositieSpeler = yPositieSpeler + 10;
          }
      }
      
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
     
      tekenVeld();
      veranderKleur(kleurWaarde, score);
      tekenBal(balX, balY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(xPositieSpeler, yPositieSpeler);
      beweegVijand(); {
          if (balX > xPositieSpeler +  0.5 * balBreedte + spelerBreedte || balX <= xPositieSpeler)  // laat de bal vanaf zijn beginpositie naar linksboven bewegen. 
          // zorgt ervoor dat de bal omhoog/omlaag beweegt als hij de onderste/bovenste rand raakt en naar links bewegen als hij de witte muur raakt.
          {
              balX = balX - beweegVariabeleX;
              balY = balY - beweegVariabeleY;
              if (balY === 0 + 0.5 * balLengte){
                beweegVariabeleY = beweegVariabeleY * -1;
                balY = balY - beweegVariabeleY;
              }
              else if (balY === 700 - 0.5 * balLengte){
                beweegVariabeleY = beweegVariabeleY * -1;
                balY = balY - beweegVariabeleY;}
              else if (balX === muurX - 0.5 * balBreedte){
                 beweegVariabeleX = beweegVariabeleX * -1;
                 balX = balX - beweegVariabeleX;
                 score = score + 1; // verhoogt de score als het balletje de rechtermuur raakt
              
              
          }
                    }       
                    // laat de bal terugkaatsen als hij de speler raakt   
          else if (balX === xPositieSpeler + 0.5 * balBreedte + spelerBreedte && balY >= yPositieSpeler && balY <= yPositieSpeler + 100) {
              
          beweegVariabeleX = beweegVariabeleX * -1
          balX = balX - beweegVariabeleX;
              
          }       // laat de bal doorgaan als hij de x- maar niet de y-positie van de speler raakt.
          else if (balY > yPositieSpeler + 100 ||  balY < yPositieSpeler) {
              balX = balX - beweegVariabeleX;
              balY = balY - beweegVariabeleY;
          }
           

          
      }
        checkVijandGeraakt(); 
          
      
      
      
      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
