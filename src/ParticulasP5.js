import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Particles = () => {
   let particles = [];
   let particleShape = 'sphere'; 
   let particleSpeed = 1;
   let particleCount = 200;
   let particleColor = '#ffffff';
 
  const handleParticleShapeChange = (event) => {
     particleShape = event.target.value;
  };

  const handleParticleSpeedChange = (event) => {
     particleSpeed = event.target.value;
  };
  const handleParticleCountChange = (event) => {
     particleCount = event.target.value;
  };
  const handleParticleColorChange = (event) => {
     particleColor = event.target.value;
  };


  function changeColor(p){
     //Texto color particulas
     const colorDiv = p.createDiv('Elige el color de la partícula');
     colorDiv.style('font-size', '16px');
     colorDiv.position(1000, 675);

     //Selector del color particulas
     const colorInput = p.createInput(particleColor, 'color');
     colorInput.position(1075, 700);
     colorInput.input(handleParticleColorChange);

  }


  function changeShape(p){

     // Crear el radio button y sus opciones
     const shapeRadio = p.createRadio();
     shapeRadio.style('background-color', '#d3d3d3');
     shapeRadio.style('width', '1280px');
     shapeRadio.style('height','50px');
     shapeRadio.option('sphere', 'Esferas');
     shapeRadio.option('box', 'Cubos');
     shapeRadio.option('cylinder', 'Cilindros');
     shapeRadio.option('plane','Cuadrados');

     // Posicionar el radio button en la interfaz
     const radioContainer = p.createDiv();
     radioContainer.child(shapeRadio);
     radioContainer.position(0, 680);

     // Asignar el evento changed() para capturar el cambio de selección
     shapeRadio.changed(handleParticleShapeChange);

  }

function changeNumber(p){
   //Texto numero partículas
    const titleDiv = p.createDiv('Elige tu número de partículas');
    titleDiv.style('font-size', '16px');
    titleDiv.position(450, 680);

    // Slider para cambiar el número de partículas
    const countSlider = p.createSlider(1, 1000, 200, 1);
    countSlider.position(500, 705);
    countSlider.style('width', '100px');
    countSlider.changed(handleParticleCountChange);

}

function changeSpeed(p){
   //Texto velocidad
   const speedDiv = p.createDiv('Ajusta tu velocidad');
   speedDiv.style('font-size', '16px');
   speedDiv.position(750, 680);
   
  //Slider de la velocidad
   const slider = p.createSlider(1, 10000, 1, 1); // Establece los valores mínimo, máximo e inicial del slider
   slider.position(770, 705);
   slider.style('width', '100px');

   // Asignar función para manejar el cambio de valor del slider de velocidad
   slider.changed(handleParticleSpeedChange);

}

  const sketch = (p) => {
    p.setup = () => {
     p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
     p.angleMode(p.DEGREES);

     //Cambiar la forma de las particulas
      changeShape(p);

     //Cambiar el numero de las particulas
     changeNumber(p);

     //Cambiar la velocidad de las particulas
     changeSpeed(p);
    
     //Cambiar el color de las particulas
     changeColor(p);

    };
    
    p.draw = () => {

    
      p.background(0, 0, 30);

      p.rotateX(p.sin(p.frameCount / 6) * 360);
      p.rotateY(p.cos(p.frameCount / 6) * 360);

      p.translate(0, 0, p.sin(p.frameCount) * 100);

      p.directionalLight([255], p.createVector(0, 0, -1));

      if (p.random(1) > 0.97 && particles.length < particleCount) {
        const x = p.random(-100, 100);
        const y = p.random(-100, 100);
        const z = p.random(-100, 100);

        const pos = p.createVector(x, y, z);

        for (let i = 0; i < particleCount; i++) {
          const r = p.map(p.sin(p.frameCount), -1, 1, 0, 255) + p.random(-50, 50);
          const g = p.map(p.sin(p.frameCount / 2), -1, 1, 255, 0) + p.random(-50, 50);
          const b = p.map(p.cos(p.frameCount / 4), -1, 1, 0, 255) + p.random(-50, 50);
          const c = p.color(r, g, b);

          const particle = new Particle(p, pos, c);
          particles.push(particle);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        if (
          p.dist(particles[i].pos.x, particles[i].pos.y, particles[i].pos.z, 0, 0, 0) < 500
        ) {
          particles[i].update(particleSpeed);
          particles[i].show();
        } else {
          particles.splice(i, 1);
        }
      }
    };


    class Particle {
      constructor(p, pos, c) {
        this.pos = p.createVector(pos.x, pos.y, pos.z);
        this.vel = p5.Vector.random3D().normalize().mult(p.random(4, 6));
        this.c = p.color(particleColor);
        this.w = p.random(4, 10);
      }

      update() {
        this.pos.add(this.vel);
      }

      show() {
        p.push();
        p.noStroke();
        p.fill(this.c);
        p.translate(this.pos.x, this.pos.y, this.pos.z);

       if (particleShape === 'sphere') {
        p.sphere(this.w);
      } else if (particleShape === 'box') {
        p.box(this.w);
      } else if (particleShape === 'cylinder') {
        p.cylinder(this.w, this.w * 2);
      }else if(particleShape ==='plane'){
        p.plane(this.w, this.w*2);
      }

        p.pop();
      }
    }

    
  };

  const sketchRef = useRef(null);

  useEffect(() => {
    
    const newSketch = new p5(sketch, sketchRef.current);
    return () => newSketch.remove();
  }, []);

  return <div ref={sketchRef}></div>;
};

export default Particles;