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

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
const xPositieSpeler = 300;
var yPositieSpeler = 200;

var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten

var keyIsPressed = true;
var spelerLengte = 100; // variabele voor de lengte van de speler met beginlengte

var balX = 500;
var balY = 300;
const spelerBreedte = 10;

const balBreedte = 20;
const balLengte = 20;

const veldBreedte = 1280;
const veldLengte = 720;

/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("black");
  rect(0, 0, veldBreedte, veldLengte);
  fill("white")
  rect(1200, 10, 10, 700);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    

};


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
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
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
  fill("black")
  rect(0, 0, 1280, 720);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegSpeler(); {
          if (keyIsDown(UP_ARROW) && yPositieSpeler > 15  ) {
              yPositieSpeler = yPositieSpeler - 10;
          }
         if (keyIsDown(DOWN_ARROW) && yPositieSpeler < 605) {
              yPositieSpeler = yPositieSpeler + 10;
          }
      }
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenBal(balX, balY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(xPositieSpeler, yPositieSpeler);
      beweegVijand(); {
          if (balX > xPositieSpeler +  0.5 * balBreedte + spelerBreedte || balX <= xPositieSpeler) {
          balX = balX - 2;
          balY = balY - 0.5;}
         
          else if (balX === xPositieSpeler + 0.5 * balBreedte + spelerBreedte && balY > yPositieSpeler && balY < yPositieSpeler + 100) {
              balX = balX + 2;
              balY = balY + 0.5;
          }
          else if (balY > yPositieSpeler + 100 ||  balY < yPositieSpeler) {
              balX = balX - 2;
              balY = balY - 0.5;
          }
          else if (balY === 0 + 0.5 * balBreedte){
              balY = balY + 0.5;
          }
          else if (balY === 700 - 0.5 * balBreedte){
              balY = balY = 0.5;
          }

          
      }
        
      
      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
