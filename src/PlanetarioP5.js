import React, { useEffect,useState } from "react";
import p5 from "p5";

const SunRadius = 50;

const MercuryRadius = 8;
const VenusRadius = 14;
const EarthRadius = 15;
const MarsRadius = 10;
const JupiterRadius = 15*3;
const SaturnRadius = 15*2.5;
const UranRadius = 15*2;
const NeptuneRadius = 15*1.75;

let MercuryAngle = 0;
let VenusAngle = 0;
let EarthAngle = 0;
let MarsAngle = 0;
let JupiterAngle = 0;
let SaturnAngle = 0;
let UranAngle = 0;
let NeptuneAngle = 0;

const MercuryOrbitWidth = 110;
const MercuryOrbitHeight = 50;

const VenusOrbitWidth = 150;
const VenusOrbitHeight = 80;

const EarthOrbitWidth = 200;
const EarthOrbitHeight = 100;

const MarsOrbitWidth = 250;
const MarsOrbitHeight = 120;

const JupiterOrbitWidth = 300;
const JupiterOrbitHeight = 140;

const SaturnOrbitWidth = 350;
const SaturnOrbitHeight = 160;

const UranOrbitWidth = 400;
const UranOrbitHeight = 180;

const NeptuneOrbitWidth = 450;
const NeptuneOrbitHeight = 200;
const messages = {
  tierra: "Planeta Tierra: Es el tercer planeta del sistema solar...",
  mercurio: "Planeta Mercurio: Información sobre Mercurio...",
  venus: "Planeta Venus: Información sobre Venus...",
  // Agrega mensajes para los otros planetas aquí
   mars: "Planeta Marte: Información sobre Marte...",
 jupiter: "Planeta Júpiter: Información sobre Júpiter...",
   saturn: "Planeta Saturno: Información sobre Saturno...",
   uranus: "Planeta Urano: Información sobre Urano...",
   neptune: "Planeta Neptuno: Información sobre Neptuno..."
};

const P5Sketch = () => {
  let EarthX, EarthY,MercuryX, MercuryY,VenusX,VenusY,MarsX,MarsY,JupiterX,JupiterY,SaturnX,SaturnY,UranX,UranY,NeptuneX,NeptuneY;
  let InfoText;
  let timer=null;
  const StarSpeed = 0.3; //Velocidad estrellas
 // let IsShowingInfo = false;
 let stars = [];
 const [showInfo, setShowInfo] = useState(false); // Estado para controlar si se muestra el mensaje
 

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(1260, 500);
        
        InfoText = p.createP("");
        InfoText.position(10, 30);
        InfoText.style("color", "#fff");
        InfoText.style("font-size", "20px");
        // Inicializa las estrellas en posiciones aleatorias
        for (let i = 0; i < 200; i++) {
          stars.push({
            x: p.random(p.width),
            y: p.random(p.height),
          });
        }
      };

      p.draw = () => {
        p.background(0);

        // Dibuja las estrellas en posiciones actualizadas
        p.fill(255);
        for (let i = 0; i < stars.length; i++) {
          let star = stars[i];
          p.ellipse(star.x, star.y, 2, 2);

          // Actualiza la posición de la estrella según la velocidad
          star.x += StarSpeed;
          if (star.x > p.width) {
            star.x = 0; // Reinicia la posición cuando llega al borde derecho
          }
        }

        // Dibuja el Sol
        p.fill(255, 255, 0);
        p.noStroke();
        p.ellipse(p.width / 2, p.height / 2, SunRadius * 2, SunRadius * 2);

        // Dibuja la línea de la órbita elíptica de Mercurio
        p.stroke(100);
        p.noFill();
        p.ellipse(p.width / 2, p.height / 2, MercuryOrbitWidth * 2, MercuryOrbitHeight * 2);

        // Dibuja la línea de la órbita elíptica de Venus
        p.stroke(100);
        p.noFill();
        p.ellipse(p.width / 2, p.height / 2, VenusOrbitWidth * 2, VenusOrbitHeight * 2);

        // Dibuja la línea de la órbita elíptica de la Tierra
        p.stroke(100);
        p.noFill();
        p.ellipse(p.width / 2, p.height / 2, EarthOrbitWidth * 2, EarthOrbitHeight * 2);

        // Dibuja la línea de la órbita elíptica de Marte
         p.stroke(100);
         p.noFill();
         p.ellipse(p.width / 2, p.height / 2, MarsOrbitWidth * 2, MarsOrbitHeight * 2);

        // Dibuja la línea de la órbita elíptica de Jupiter
        p.stroke(100);
        p.noFill();
        p.ellipse(p.width / 2, p.height / 2, JupiterOrbitWidth * 2, JupiterOrbitHeight * 2);

         // Dibuja la línea de la órbita elíptica de Saturno
         p.stroke(100);
         p.noFill();
         p.ellipse(p.width / 2, p.height / 2, SaturnOrbitWidth * 2, SaturnOrbitHeight * 2);
         // Dibuja la línea de la órbita elíptica de Urano
        p.stroke(100);
        p.noFill();
        p.ellipse(p.width / 2, p.height / 2, UranOrbitWidth * 2, UranOrbitHeight * 2);

         // Dibuja la línea de la órbita elíptica de Neptuno
         p.stroke(100);
         p.noFill();
         p.ellipse(p.width / 2, p.height / 2, NeptuneOrbitWidth * 2, NeptuneOrbitHeight * 2);

         // Dibuja Mercurio en una órbita elíptica alrededor del Sol
         MercuryX = p.width / 2 + MercuryOrbitWidth * p.cos(MercuryAngle);
         MercuryY = p.height / 2 + MercuryOrbitHeight * p.sin(MercuryAngle);
         p.fill(200, 200, 255);
         p.ellipse(MercuryX, MercuryY, MercuryRadius * 2, MercuryRadius * 2);
 
         // Actualiza el ángulo de Mercurio para hacerlo rotar alrededor del Sol
         MercuryAngle += 0.009;

          // Dibuja Venus en una órbita elíptica alrededor del Sol
        VenusX = p.width / 2 + VenusOrbitWidth * p.cos(VenusAngle);
        VenusY = p.height / 2 + VenusOrbitHeight * p.sin(VenusAngle);
        p.fill(255, 150, 0);;
        p.ellipse(VenusX, VenusY, VenusRadius * 2, VenusRadius * 2);

        // Actualiza el ángulo de Venus para hacerlo rotar alrededor del Sol
        VenusAngle += 0.0075;

        // Dibuja la Tierra en una órbita elíptica alrededor del Sol
        EarthX = p.width / 2 + EarthOrbitWidth * p.cos(EarthAngle);
        EarthY = p.height / 2 + EarthOrbitHeight * p.sin(EarthAngle);
        p.fill(0, 0, 255);
        p.ellipse(EarthX, EarthY, EarthRadius * 2, EarthRadius * 2);

        // Actualiza el ángulo de la Tierra para hacerla rotar alrededor del Sol
        EarthAngle += 0.006;
      
       // Dibuja Marte en una órbita elíptica alrededor del Sol
       MarsX = p.width / 2 + MarsOrbitWidth * p.cos(MarsAngle);
       MarsY = p.height / 2 + MarsOrbitHeight * p.sin(MarsAngle);
       p.fill(255, 10, 0);
       p.ellipse(MarsX, MarsY, MarsRadius * 2, MarsRadius * 2);

       // Actualiza el ángulo de Marte para hacerlo rotar alrededor del Sol
       MarsAngle += 0.0035;
     
      // Dibuja Jupiter en una órbita elíptica alrededor del Sol
      JupiterX = p.width / 2 + JupiterOrbitWidth * p.cos(JupiterAngle);
      JupiterY = p.height / 2 + JupiterOrbitHeight * p.sin(JupiterAngle);
      p.fill(150, 100, 0);
      p.ellipse(JupiterX, JupiterY, JupiterRadius * 2, JupiterRadius * 2);

      // Actualiza el ángulo de Jupiter para hacerlo rotar alrededor del Sol
      JupiterAngle += 0.0015;
    
     // Dibuja Saturno en una órbita elíptica alrededor del Sol
     SaturnX = p.width / 2 + SaturnOrbitWidth * p.cos(SaturnAngle);
     SaturnY = p.height / 2 + SaturnOrbitHeight * p.sin(SaturnAngle);
     p.fill(200, 150, 50);
     p.ellipse(SaturnX, SaturnY, SaturnRadius * 2, SaturnRadius * 2);

     //Dibuja el anillo de Saturno
    

     // Actualiza el ángulo de Saturno para hacerlo rotar alrededor del Sol
     SaturnAngle += 0.0011;
   
    // Dibuja Urano en una órbita elíptica alrededor del Sol
    UranX = p.width / 2 + UranOrbitWidth * p.cos(UranAngle);
    UranY = p.height / 2 + UranOrbitHeight * p.sin(UranAngle);
    p.fill(0, 100, 100);
    p.ellipse(UranX, UranY, UranRadius * 2, UranRadius * 2);

    // Actualiza el ángulo de Urano para hacerlo rotar alrededor del Sol
    UranAngle += 0.0008;
  
   // Dibuja Neptuno en una órbita elíptica alrededor del Sol
   NeptuneX = p.width / 2 + NeptuneOrbitWidth * p.cos(NeptuneAngle);
   NeptuneY = p.height / 2 + NeptuneOrbitHeight * p.sin(NeptuneAngle);
   p.fill(0, 0, 200);
   p.ellipse(NeptuneX, NeptuneY, NeptuneRadius * 2, NeptuneRadius * 2);

   // Actualiza el ángulo de Neptuno para hacerlo rotar alrededor del Sol
   NeptuneAngle += 0.0005;


  
 };
 

      
        p.mouseClicked = () => {
        
        let d = p.dist(p.mouseX, p.mouseY, EarthX, EarthY);
        if (d < EarthRadius) {
          
          setShowInfo(true);

          if(timer){
            clearInterval(timer);
          }

           // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
           timer = setInterval(() => {
            setShowInfo(false);
          }, 27000);

         
        }
      }
        
      };


  
/*
    new p5(sketch);
  }, []);
  */
  const p5Canvas = new p5(sketch);
  return () => {
    p5Canvas.remove(); // Elimina el sketch de p5.js al desmontar el componente
 
    if(timer){
      clearInterval(timer);
    }
  };
}, []);

  return (
  <div>
  
  <div id="p5-canvas"></div>
  {showInfo && (

    
<div>
  <p><b>Planeta Tierra: </b></p> Es el tercer planeta del sistema solar, cuenta con una inclinación de 23,5º.
   El tiempo de rotación de la Tierra es de 24 horas, mientras que el tiempo de traslación, es decir, alrededor del Sol es de 365 días.
   Su temperatura máxima es de 50ºC, y su temperatura mínima ha llegado a alcanzar los -90ºC. El único satélite de la Tierra es la Luna, tarda 27,3 días en rotar sobre su eje y en orbitar la Tierra. Aunque es un satélite de la Tierra, la Luna, cuenta con un diámetro de aproximadamente 3.475 kilómetros.
</div>
)}
 
</div>
);
};

export default P5Sketch;
