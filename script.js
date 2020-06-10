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
var PAUZE = 4;
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

var balX = 700; // x-waarde van de beginpositie van de bal
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
var vergrotertekstUitleg = 10;
var vergrotertekstSpelen = 10;
var rechthoekX = 425;
var rechthoekY = 200;
/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () { // er wordt een veld getekend
  fill(kleurWaarde, 103, 77);
  rect(0, 0, veldBreedte, veldLengte);
  fill("white");
  rect(muurX, 10, 10, muurLengte); // witte muur aan de rechterzijde wordt getekend
  fill("white");
  textFont('georgia');
  textSize(80);
  text("Pong!", veldBreedte / 2 - 200, 100);
  textSize(60);
  text("score:  " + score, veldBreedte / 2 - 600, 100) // je kan je score linksboven in het scherm zien
  textSize(30);
  text("Menu", 100, 600, 250, 650);
  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 600 && mouseY <= 650 && mouseIsPressed ){ // als je op Menu klikt ga je terug naar het beginscherm
            spelStatus = STARTSCHERM;
            score = score - score;
            balX = 500;
            balY = 300;
            beweegVariabeleX = 5;
            beweegVariabeleY = 2.5;
        }
  text("Pauze", 100, 650, 250, 700);
  if (mouseX >= 100 && mouseX <= 250 && mouseY >= 650 && mouseY <= 700 && mouseIsPressed){ // als je op Pauze klikt pauzeer je het spel
      spelStatus = PAUZE;
  }  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(veldBreedte, veldLengte, tekstgrootteUitleg, tekstgrootteSpelen, vergrotertekstUitlegenSpelen) {
    

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
var tekenSpeler = function(xPositieSpeler, yPositieSpeler) { // je speler wordt getekend
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
var tekenBal = function(balX, balY) { // de bal wordt getekend
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
    // je krijgt een startscherm te zien met uitlegoptie en speeloptie
    tekenVijand(veldBreedte, veldLengte, tekstgrootteUitleg, tekstgrootteSpelen, vergrotertekstUitleg, vergrotertekstSpelen); {
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
         if (mouseX >= 200 && mouseX <= 300 && mouseY >= 400 && mouseY <= 450 && mouseIsPressed){ // Als je op Uitleg drukt krijg je het uitlegscherm te zien
             spelStatus = UITLEG;
         }
         else if (mouseX >= 900 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 450 && mouseIsPressed){ // als je op Spelen drukt ga je naar het speelscherm
             spelStatus = SPELEN;
         }
         else if(mouseX >= 200 && mouseX <= 300 && mouseY >= 400 && mouseY <= 450){ // als de muis over Uitleg beweegt wordt Uitleg groter
              tekstgrootteUitleg = tekstgrootteUitleg + vergrotertekstUitleg;
              if (tekstgrootteUitleg = 60){ // tekst wordt maar een keer groter, en blijf niet groter worden als je de muis op Uitleg houdt voor een langere periode
                  vergrotertekstUitleg = 0;
              }
         }
         else if (mouseX >= 900 && mouseX <= 1000 && mouseY >= 400 && mouseY <= 450){ // als de muis over Spelen beweegt wordt Spelen groter
             tekstgrootteSpelen = tekstgrootteSpelen + vergrotertekstSpelen;
             if (tekstgrootteSpelen = 60){ // de tekst wordt maar een keer groter, en blijft niet groter worden als je de muis op Spelen houdt voor een langere periode.
                 vergrotertekstSpelen = 0;
             }
        }
         else if (mouseX < 200 || mouseX > 300 || mouseY < 400 || mouseY > 450 && mouseX < 700 || mouseX > 800 || mouseY < 400 || mouseY > 450 ){ // Spelen en Uitleg wordt weer kleiner als de muis niet meer over Uitleg beweegt
            tekstgrootteUitleg = 50;
            tekstgrootteSpelen = 50;
        }
      
        
    }



    break;
   
    case UITLEG:
    checkSpelerGeraakt();{
        fill(102, 215, 237);
        rect(0, 0, veldBreedte, veldLengte);
        textSize(50);
        
        textFont("georgia");
        fill("white");
        text("Welkom bij Pong!", 400, 100);
        textSize(35);
        text("'s werelds leukste game", 350, 200);
        
        textSize(20);
        text("Bij Pong is het de bedoeling om een zo hoog mogelijke score te halen. Dit doe je door met je speler, die je door middel van de pijltjes omhoog en omlaag op je toetsenbord omhoog en omlaag kan laten bewegen, het witte balletje terug te kaatsen naar waar die vandaan komt. Als dan het balletje de witte muur aan de rechterzijde van het speelveld raakt, krijg je een punt. Hoe hoger je score, hoe moeilijker het spelletje wordt. Je speler wordt kleiner en het balletje beweegt sneller. Tijdens het spelen kan je stoppen door op de Pauze-knop te drukken. Als je terug gaat naar het menu, gaat je score verloren. Veel succes!", 200, 300, 1000, 800);
        textSize(30);
        text("Menu", 200, 600, 300, 650);
        text("Spelen", 1100, 600, 1150, 650);
        if (mouseX >= 200 && mouseX <= 300 && mouseY >= 600 && mouseY <= 650 && mouseIsPressed ){ // als je op Menu klikt ga je terug naar het beginscherm
            spelStatus = STARTSCHERM
        }
        else if (mouseX >= 1100 && mouseX <= 1150 && mouseY >= 600 && mouseY <= 650 && mouseIsPressed){ // als je op Spelen klikt ga je naar het speelscherm
            spelStatus = SPELEN
        }
    }
    break;

    case SPELEN:
      beweegSpeler(); {
          if (keyIsDown(UP_ARROW) && yPositieSpeler > 0  ) { // met het pijltje omhoog kan je de speler omhoog bewegen
              yPositieSpeler = yPositieSpeler - 10;
          }
          if (keyIsDown(DOWN_ARROW) && yPositieSpeler < 700 - spelerLengte) { // met het pijltje omlaag kan je de speler omlaag bewegen
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

      case PAUZE:
      balX = balX - 0; // de bal stopt met bewegen in de pauze-modus
      balY = balY - 0; // de bal stopt met bewegen in de pauze-modus
       if (keyIsDown(UP_ARROW) && yPositieSpeler > 0  ) { // met het pijltje omhoog kan je de speler niet meer omhoog bewegen
              yPositieSpeler = yPositieSpeler;
          }
       else if (keyIsDown(DOWN_ARROW) && yPositieSpeler < 700 - spelerLengte) { // met het pijltje omlaag kan je de speler niet meer omlaag bewegen
              yPositieSpeler = yPositieSpeler;
          }
        else if (mouseX > rechthoekX + 30 && mouseX < rechthoekX + 130 && mouseY > rechthoekY + 100 && mouseY < rechthoekY + 150 && mouseIsPressed){ // als je op de "ja" optie drukt ga je verder met spelen
            spelStatus = SPELEN; 
            
        }
        else if (mouseX > rechthoekX + 300 && mouseX < rechthoekX + 400 && mouseY > rechthoekY + 100 && mouseY < rechthoekY + 150 && mouseIsPressed){ // als je op de "nee" optie drukt ga je na het startscherm en wordt je score en de gegevens van het balletje hersteld
            spelStatus = STARTSCHERM;
            score = score - score;
            balX = 500;
            balY = 300;
            beweegVariabeleX = 5;
            beweegVariabeleY = 2.5;
        }
      fill(218, 225, 227);  // er wordt een veld getekent waarop staat dat je gepauzeerd hebt 
      rect(rechthoekX, rechthoekY, 450, 225);
      fill(210, 220, 220);
      stroke(2);
      rect(rechthoekX + 30, rechthoekY + 100, 100, 50); // er worden in het veld 2 kleine velden getekend waarop je kan kiezen of je verder speelt of niet
      rect(rechthoekX + 300, rechthoekY + 100, 100, 50);
      fill("black");
      text("Ja", rechthoekX + 50, rechthoekY + 130);
      text("Nee", rechthoekX + 320, rechthoekY + 130);
      textSize(25);
      text("Pauze. Verder spelen?", 500, 225, 400, 300);
      break;
  }
}

