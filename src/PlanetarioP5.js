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

let EarthX, EarthY,MercuryX, MercuryY,VenusX,VenusY,MarsX,MarsY,JupiterX,JupiterY,SaturnX,SaturnY,UranX,UranY,NeptuneX,NeptuneY;

function drawSun (p) {
  p.fill(255, 255, 0);
  p.noStroke();
  p.ellipse(p.width / 2, p.height / 2, SunRadius * 2, SunRadius * 2);
};

function ellipseMercury (p) {
  p.stroke(100);
  p.noFill();
  p.ellipse(p.width / 2, p.height / 2, MercuryOrbitWidth * 2, MercuryOrbitHeight * 2);
};

function ellipseVenus (p) {
  p.stroke(100);
  p.noFill();
  p.ellipse(p.width / 2, p.height / 2, VenusOrbitWidth * 2, VenusOrbitHeight * 2);
};
 
 function ellipseEarth (p) {
  p.stroke(100);
  p.noFill();
  p.ellipse(p.width / 2, p.height / 2, EarthOrbitWidth * 2, EarthOrbitHeight * 2);
 }

 function ellipseMars (p) {
    p.stroke(100);
    p.noFill();
    p.ellipse(p.width / 2, p.height / 2, MarsOrbitWidth * 2, MarsOrbitHeight * 2);
 }

 function ellipseJupiter (p) {
    p.stroke(100);
    p.noFill();
    p.ellipse(p.width / 2, p.height / 2, JupiterOrbitWidth * 2, JupiterOrbitHeight * 2);
 }
 function ellipseSaturn (p) {
    p.stroke(100);
    p.noFill();
    p.ellipse(p.width / 2, p.height / 2, SaturnOrbitWidth * 2, SaturnOrbitHeight * 2);
 }
 
 function ellipseUran (p) {
    p.stroke(100);
    p.noFill();
    p.ellipse(p.width / 2, p.height / 2, UranOrbitWidth * 2, UranOrbitHeight * 2);
  }
  
  function ellipseNeptune (p) {
    p.stroke(100);
    p.noFill();
    p.ellipse(p.width / 2, p.height / 2, NeptuneOrbitWidth * 2, NeptuneOrbitHeight * 2);
  }

  function drawMercury (p) {

    MercuryX = p.width / 2 + MercuryOrbitWidth * p.cos(MercuryAngle);
    MercuryY = p.height / 2 + MercuryOrbitHeight * p.sin(MercuryAngle);
    p.fill(200, 200, 255);
    p.ellipse(MercuryX, MercuryY, MercuryRadius * 2, MercuryRadius * 2);

    // Actualiza el ángulo de Mercurio para hacerlo rotar alrededor del Sol
    MercuryAngle += 0.009;
  }

  function drawVenus (p) {

   VenusX = p.width / 2 + VenusOrbitWidth * p.cos(VenusAngle);
   VenusY = p.height / 2 + VenusOrbitHeight * p.sin(VenusAngle);
   p.fill(255, 150, 0);;
   p.ellipse(VenusX, VenusY, VenusRadius * 2, VenusRadius * 2);

   // Actualiza el ángulo de Venus para hacerlo rotar alrededor del Sol
   VenusAngle += 0.0075;
  }

  function drawEarth (p) {
   
   EarthX = p.width / 2 + EarthOrbitWidth * p.cos(EarthAngle);
   EarthY = p.height / 2 + EarthOrbitHeight * p.sin(EarthAngle);
   p.fill(0, 0, 255);
   p.ellipse(EarthX, EarthY, EarthRadius * 2, EarthRadius * 2);

   // Actualiza el ángulo de la Tierra para hacerla rotar alrededor del Sol
   EarthAngle += 0.006;
  }

  function drawMars (p)  {
 
    MarsX = p.width / 2 + MarsOrbitWidth * p.cos(MarsAngle);
    MarsY = p.height / 2 + MarsOrbitHeight * p.sin(MarsAngle);
    p.fill(255, 10, 0);
    p.ellipse(MarsX, MarsY, MarsRadius * 2, MarsRadius * 2);

    // Actualiza el ángulo de Marte para hacerlo rotar alrededor del Sol
    MarsAngle += 0.0035;
  }

 function drawJupiter (p)  {
 
    JupiterX = p.width / 2 + JupiterOrbitWidth * p.cos(JupiterAngle);
    JupiterY = p.height / 2 + JupiterOrbitHeight * p.sin(JupiterAngle);
    p.fill(150, 100, 0);
    p.ellipse(JupiterX, JupiterY, JupiterRadius * 2, JupiterRadius * 2);

    // Actualiza el ángulo de Jupiter para hacerlo rotar alrededor del Sol
    JupiterAngle += 0.0015;
 }

 function drawSaturn (p) {

    SaturnX = p.width / 2 + SaturnOrbitWidth * p.cos(SaturnAngle);
    SaturnY = p.height / 2 + SaturnOrbitHeight * p.sin(SaturnAngle);
    p.fill(200, 150, 50);
    p.ellipse(SaturnX, SaturnY, SaturnRadius * 2, SaturnRadius * 2);

    //Dibuja el anillo de Saturno

    const RingWidth = 20;
    const RingOffset = 5;
      
    p.noFill();
    p.stroke(200);
    p.ellipse(SaturnX, SaturnY, (SaturnRadius + RingOffset + RingWidth) * 2, (SaturnRadius + RingOffset + RingWidth) * 1.5);
    
    // Actualiza el ángulo de Saturno para hacerlo rotar alrededor del Sol
    SaturnAngle += 0.0011;
 }

 function drawUran (p) {

    UranX = p.width / 2 + UranOrbitWidth * p.cos(UranAngle);
    UranY = p.height / 2 + UranOrbitHeight * p.sin(UranAngle);
    p.fill(0, 100, 100);
    p.ellipse(UranX, UranY, UranRadius * 2, UranRadius * 2);

    // Actualiza el ángulo de Urano para hacerlo rotar alrededor del Sol
    UranAngle += 0.0008;
 }

 function drawNeptune (p) {
 
    NeptuneX = p.width / 2 + NeptuneOrbitWidth * p.cos(NeptuneAngle);
    NeptuneY = p.height / 2 + NeptuneOrbitHeight * p.sin(NeptuneAngle);
    p.fill(0, 0, 200);
    p.ellipse(NeptuneX, NeptuneY, NeptuneRadius * 2, NeptuneRadius * 2);

    // Actualiza el ángulo de Neptuno para hacerlo rotar alrededor del Sol
    NeptuneAngle += 0.0005;
 }

  //Variables para la velocidad y estrellas
  const StarSpeed = 0.3; //Velocidad estrellas
  let stars = []; 

 function drawBackground (p) {
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
  }

const Planetario = () => {
  
  let InfoText;
  let timer=null;
  
  const [showSun, setShowSun] = useState(false); // Muestra el mensaje del Sol
  const [showMercury, setShowMercury] = useState(false); // Muestra el mensaje de Mercurio
  const [showVenus, setShowVenus] = useState(false); // Muestra el mensaje de Venus
  const [showEarth, setShowEarth] = useState(false); // Muestra el mensaje de la Tierra
  const [showMars, setShowMars] = useState(false); // Muestra el mensaje de Marte
  const [showJupiter, setShowJupiter] = useState(false); // Muestra el mensaje de Jupiter
  const [showSaturn, setShowSaturn] = useState(false); // Muestra el mensaje de Saturno
  const [showUran, setShowUran] = useState(false); // Muestra el mensaje de Urano
  const [showNeptune, setShowNeptune] = useState(false); // Muestra el mensaje de Neptuno
 
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

          //Dibuja el fondo
          drawBackground(p);

          // Dibuja el Sol 
          drawSun(p);
     
          // Dibuja la línea de la órbita elíptica de Mercurio
          ellipseMercury(p);
        
          // Dibuja la línea de la órbita elíptica de Venus
         ellipseVenus(p);

          // Dibuja la línea de la órbita elíptica de la Tierra
          ellipseEarth(p);

          // Dibuja la línea de la órbita elíptica de Marte
          ellipseMars(p);

          // Dibuja la línea de la órbita elíptica de Jupiter
          ellipseJupiter(p);

          // Dibuja la línea de la órbita elíptica de Saturno
          ellipseSaturn(p);

          // Dibuja la línea de la órbita elíptica de Urano
          ellipseUran(p);

          // Dibuja la línea de la órbita elíptica de Neptuno
          ellipseNeptune(p);

          // Dibuja Mercurio en una órbita elíptica alrededor del Sol
          drawMercury(p);

          // Dibuja Venus en una órbita elíptica alrededor del Sol
          drawVenus(p);

          // Dibuja la Tierra en una órbita elíptica alrededor del Sol
          drawEarth(p);

          // Dibuja Marte en una órbita elíptica alrededor del Sol
          drawMars(p);

          // Dibuja Jupiter en una órbita elíptica alrededor del Sol
          drawJupiter(p);

          // Dibuja Saturno en una órbita elíptica alrededor del Sol
          drawSaturn(p);

          // Dibuja Urano en una órbita elíptica alrededor del Sol
          drawUran(p);

          // Dibuja Neptuno en una órbita elíptica alrededor del Sol
          drawNeptune(p);

        };
 
        p.mouseClicked = () => {

          const SunX = p.width / 2; // Coordenada X del centro del canvas
          const SunY = p.height / 2; // Coordenada Y del centro del canvas
          
          let sun= p.dist(p.mouseX,p.mouseY,SunX,SunY);
          let mercury = p.dist(p.mouseX, p.mouseY, MercuryX, MercuryY);
          let venus= p.dist(p.mouseX,p.mouseY,VenusX,VenusY);
          let earth = p.dist(p.mouseX, p.mouseY, EarthX, EarthY);
          let mars= p.dist(p.mouseX,p.mouseY,MarsX,MarsY);
          let jupiter = p.dist(p.mouseX, p.mouseY, JupiterX, JupiterY);
          let saturn= p.dist(p.mouseX,p.mouseY,SaturnX,SaturnY);
          let uran = p.dist(p.mouseX, p.mouseY, UranX, UranY);
          let neptune= p.dist(p.mouseX,p.mouseY,NeptuneX,NeptuneY);

          if(sun<SunRadius){

            setShowSun(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowSun(false);
            }, 27000);
          }

          if (mercury < MercuryRadius) {
          
            setShowMercury(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowMercury(false);
            }, 27000);
          }
        
          if (venus < VenusRadius) {
          
            setShowVenus(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowVenus(false);
            }, 27000);
          }

          if (earth < EarthRadius) {
          
            setShowEarth(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowEarth(false);
            }, 27000);
          }

          if (mars < MarsRadius) {
          
            setShowMars(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowMars(false);
            }, 27000);
          }
        
          if (jupiter < JupiterRadius) {
          
            setShowJupiter(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowJupiter(false);
            }, 27000);
          }

          if (saturn < SaturnRadius) {
          
            setShowSaturn(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowSaturn(false);
            }, 27000);
          }

          if (uran < UranRadius) {
          
            setShowUran(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowUran(false);
            }, 27000);
          }
        
          if (neptune < NeptuneRadius) {
          
            setShowNeptune(true);

          if(timer){
            clearInterval(timer);
          }

            // Establecer un nuevo temporizador para ocultar el mensaje después de 7 segundos
            timer = setInterval(() => {
              setShowNeptune(false);
            }, 27000);

          }
       
        }
        
      };

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
        {showSun && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Sol: </b></p> El Sol es una estrella enana amarilla en el centro del sistema solar, se formó hace unos 4.6 mil millones de años y está a mitad de su vida. Tiene un diámetro de aproximadamente 1.4 millones de kilómetros.
            Está compuesto principalmente de hidrógeno y helio. Su temperatura en el núcleo es de alrededor de 15 millones de grados Celsius.

          </div>
        )}

        {showMercury && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Mercurio: </b></p> Es el primer planeta del sistema solar,cuenta con una inclinación de 0.03º.
            El tiempo de rotación de Mercurio es de aproximadamente 58.6 días, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 88 días.
            Su temperatura máxima durante el día puede alcanzar hasta 430ºC, y su temperatura mínima durante la noche puede descender hasta -180ºC. Mercurio no tiene satélites naturales.
  
          </div>
        )}

        {showVenus && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Venus: </b></p>Es el segundo planeta del sistema solar,cuenta con una inclinación de 177.3º, lo que significa que su rotación es retrógrada.
            El tiempo de rotación de Venus es de aproximadamente 243 días, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 225 días.
            Su temperatura es extremadamente alta, llegando hasta 470ºC debido a su densa atmósfera compuesta principalmente por dióxido de carbono.Venus tampoco tiene satélites naturales conocidos.

          </div>
        )}

        {showEarth && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Tierra: </b></p> Es el tercer planeta del sistema solar, cuenta con una inclinación de 23,5º.
             El tiempo de rotación de la Tierra es de 24 horas, mientras que el tiempo de traslación, es decir, alrededor del Sol es de 365 días.
             Su temperatura máxima es de 50ºC, y su temperatura mínima ha llegado a alcanzar los -90ºC. El único satélite de la Tierra es la Luna, tarda 27,3 días en rotar sobre su eje y en orbitar la Tierra. Aunque es un satélite de la Tierra, la Luna, cuenta con un diámetro de aproximadamente 3.475 kilómetros.

          </div>
        )}

        {showMars && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Marte: </b></p> Es el cuarto planeta del sistema solar, cuenta con una inclinación de 25.2º.
            El tiempo de rotación de Marte es de aproximadamente 24.6 horas, similar al de la Tierra. Su tiempo de traslación alrededor del Sol es de aproximadamente 687 días.
            La temperatura en Marte puede variar desde -153ºC en las regiones polares hasta 20ºC en las regiones ecuatoriales durante el día.
            Marte tiene dos pequeñas lunas llamadas Fobos y Deimos.

          </div>
        )}

        {showJupiter && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Jupiter: </b></p> Es el quinto planeta del sistema solar y el más grande, cuenta con una inclinación de aproximadamente 3.1º.
            El tiempo de rotación de Júpiter es de aproximadamente 9.9 horas, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 11.9 años.
            La temperatura en la parte superior de la atmósfera de Júpiter puede ser tan baja como -145ºC. Júpiter tiene un sistema de anillos y más de 80 lunas conocidas, las más grandes son Ío, Europa, Ganímedes y Calisto.
  
          </div>
        )}

        {showSaturn && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Saturno: </b></p> Es el sexto planeta del sistema solar y es conocido por sus impresionantes anillos, cuenta con una inclinación de aproximadamente 26.7º.
            El tiempo de rotación de Saturno es de aproximadamente 10.7 horas, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 29.5 años.
            La temperatura promedio en la parte superior de la atmósfera de Saturno es de alrededor de -178ºC. Saturno tiene un sistema de anillos espectacular y tiene más de 80 lunas conocidas, las más grandes son Titán, Rea, Dione, Tetis y Encélado.

          </div>
        )}

        {showUran && (

          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Urano: </b></p> Es el séptimo planeta del sistema solar, cuenta con una inclinación extrema de aproximadamente 97.8º, lo que hace que su eje de rotación esté casi en posición horizontal.
            El tiempo de rotación de Urano es de aproximadamente 17.2 horas, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 84 años.
            La temperatura promedio en la atmósfera superior de Urano es extremadamente fría, alrededor de -224ºC. Urano tiene 27 lunas conocidas, las más grandes son Titania, Oberón, Umbriel, Ariel y Miranda.
  
          </div>
        )}

        {showNeptune && (

    
          <div style={{ paddingLeft: '20px' }}>
            <p><b>Planeta Neptuno: </b></p> Es el octavo y último planeta principal del sistema solar, cuenta con una inclinación de aproximadamente 28.3º.
            El tiempo de rotación de Neptuno es de aproximadamente 16.1 horas, mientras que su tiempo de traslación alrededor del Sol es de aproximadamente 165 años.
            Neptuno es un planeta gaseoso con una atmósfera fría, donde las temperaturas promedio son de alrededor de -214ºC.
            Neptuno tiene 14 lunas conocidas, las más grandes son Tritón, Nereida, Náyade y Proteo.
  
          </div>
        )}
 
    </div>
  );
};

export default Planetario;