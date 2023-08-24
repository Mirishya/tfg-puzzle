import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';
  
  const PerlinNoise = () => {
    const canvasRef = useRef(null);
    let canvasInstance;
    const [cameraRotationX, setCameraRotationX] = useState(0);
    const [cameraRotationY, setCameraRotationY] = useState(0);
    const [xOffSliderValue, setXOffSliderValue] = useState(0);
    const [yOffSliderValue, setYOffSliderValue] = useState(0);

    function drawSlider(p){
      canvasInstance = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.angleMode(p.DEGREES);
      p.noiseDetail(1);
        
      const sliderContainer = p.createDiv();
      const xOffSlider = p.createSlider(0, 3, xOffSliderValue, 0.01);
      const yOffSlider = p.createSlider(0, 3, yOffSliderValue, 0.01);
    
      sliderContainer.style('background-color', '#d3d3d3');
      sliderContainer.style('width', '1280px');
      sliderContainer.style('height','30px');

      // Posicionar el contenedor de sliders en algún lugar de la pantalla
      sliderContainer.position(0, p.height - 420); // Ajusta la posición en función de tus necesidades

      // Posicionar los sliders dentro del contenedor
      const xOffSliderLabel = p.createP('Ajusta el eje X:');
      xOffSliderLabel.parent(sliderContainer);
      xOffSliderLabel.position(10, -10); // Ajusta la posición del texto

      // Posicionar los sliders dentro del contenedor
      const yOffSliderLabel = p.createP('Ajusta el eje Y:');
      yOffSliderLabel.parent(sliderContainer);
      yOffSliderLabel.position(400, -10); // Ajusta la posición del texto

      xOffSlider.parent(sliderContainer); // Asignar el contenedor como el padre del slider
      yOffSlider.parent(sliderContainer); // Asignar el contenedor como el padre del slider

      // Posicionar los sliders dentro del contenedor
      xOffSlider.position(150, 10);
      yOffSlider.position(550, 10);

      xOffSlider.input(() => setXOffSliderValue(xOffSlider.value()));
      yOffSlider.input(() => setYOffSliderValue(yOffSlider.value()));
    }
    
    function drawPerlinNoise(p){
      p.background(100, 150, 100);
      p.orbitControl();
      p.translate(0, -100, -500);
      p.rotateX(p.radians(cameraRotationX));
      p.rotateY(p.radians(cameraRotationY));
  
      p.rotateX(90);
      p.rotateZ(p.frameCount / 4);
      p.rotateX(p.map(p.cos(p.frameCount / 4), -1, 1, 30, -30));
      p.rotateY(p.map(p.sin(p.frameCount / 4), -1, 1, -30, 30));
      p.noStroke();

      p.directionalLight(255, 255, 255, 0, 0, -1);
      p.directionalLight(255, 255, 255, 0, 0, -1);
  
      const w = 10;
      const start = p.frameCount / 100;

      for (let x = -p.width / 2; x <= p.width / 2; x += w) {
        for (let y = -p.height / 2; y <= p.height / 2; y += w) {
          const h = p.map(p.noise(xOffSliderValue + x * 0.01, yOffSliderValue + y * 0.01), 0, 1, -100, 100);

          const r = p.map(x, -p.width / 2, p.width / 2, 0, 255);
          const g = p.map(y, -p.height / 2, p.height / 2, 255, 0);
          const b = p.map(h, -100, 100, 0, 255);

          p.push();
          p.fill(r, g, b);
          p.translate(x, y, -h / 2);
          p.box(w, w, h);
          p.pop();
        }
      }
    }

    useEffect(() => {
      const sketch = (p) => {
        p.setup = () => {

          //Dibuja el setup y el slider
          drawSlider(p);
      
        };
  
        p.draw = () => {

          //Dibuja todo el perlin Noise
          drawPerlinNoise(p);
        };
      }
        const p5Canvas = new p5(sketch);
        return () => {
          p5Canvas.remove(); // Elimina el sketch de p5.js al desmontar el componente
        };

  }, [xOffSliderValue,yOffSliderValue]);
 
      return (
      <div>
        <h3>Desliza el ratón para visualizar la figura en 3D, puedes ampliarla o reducirla. Edita los valores de X e Y, para ver los cambios en la figura.</h3>
        <div ref={canvasRef} />;
      </div>
      );
  };
  
  export default PerlinNoise;