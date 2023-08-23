import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  const fileInputRef = useRef(null); 

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      bgSound.load(fileURL, () => {
        console.log('Canción cargada:', file.name);
      });
    }
  };

  function startSound() {
    bgSound.start();
  };

  function stopSound() {
    bgSound.stop();
  };

  function openFileInput() {
    fileInputRef.current.click(); 
  };

  function drawMenu(p){
    p.createCanvas(p.windowWidth, p.windowHeight);
    const createDivGrey = p.createDiv();
    createDivGrey.style('background-color', '#d3d3d3');
    createDivGrey.style('width', '1280px');
    createDivGrey.style('height','30px');
    createDivGrey.position(0, 700);

    //Texto para cargar la canción
    const textSong = p.createDiv('Selecciona tu canción');
    textSong.style('font-size', '16px');
    textSong.position(0, 700);

    //Texto para el start
    const textStart= p.createDiv('Dale a reproducir');
    textStart.style('font-size', '16px');
    textStart.position(300, 700);

    //Texto para el stop
    const textStop= p.createDiv('Detén la canción');
    textStop.style('font-size', '16px');
    textStop.position(550, 700);

    p.createButton('Start').position(445,700).mousePressed(() => startSound(p));
    p.createButton('Stop').position(675,700).mousePressed(() => stopSound(p));
    p.createButton('Browse...').position(175,700).mousePressed(() => openFileInput(p)); 

  }

  function drawEspectogram(p){
    p.background("#f0f0f0");
    levels = myFFT.getValue();

    for (let i = 0; i < levels.length; i++) {
      //Dibuja los colores del espectograma
      const intensity = levels[i];
      const colorValue = p.map(intensity, -100, 12, 0, 255); // Mapea la intensidad a un valor de color
      const color = p.color(colorValue, 0, 210 - colorValue); // Rojo a azul
      p.stroke(color);
      p.strokeWeight(5);

      //Dibuja las lineas del espectograma
      const binMapped = p.map(levels[i], -100, 12, p.height, 0);
      const x = p.map(i, 0, levels.length - 1, 10, p.width); // Calcula la posición horizontal
      p.line(x, p.height, x, binMapped);
    }
  }

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preloadAudio(p);

      const preloadAudio = (p) => {
        bgSound = new Tone.Player();
        myFFT = new Tone.FFT(32);
        bgSound.chain(myFFT, Tone.Destination);
      };

      p.setup = () => setupCanvas(p);

      const setupCanvas = (p) => {
        drawMenu(p);
      };
 
      p.draw = () => drawVisualization(p);

      const drawVisualization = (p) => {
       drawEspectogram(p);
      };
    };

      const canvas = new p5(sketch);

      return () => {
        canvas.remove();
        bgSound.dispose();
        myFFT.dispose();
      };
  }, []);

      return (
        <div>
          <div id="p5canvas" />
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFile} />
        </div>
      );
};

export default Visualizer;