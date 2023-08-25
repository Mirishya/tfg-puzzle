/*import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  const fileInputRef = useRef(null); 

  const preloadAudio = (p) => {
  bgSound = new Tone.Player();
  myFFT = new Tone.FFT(32);
  bgSound.chain(myFFT, Tone.Destination);
  bgSound.load(fileURL, () => {
    console.log('Canción cargada:', file.name);
    startSound();
  }, (error) => {
    console.error('Error al cargar la canción:', error);
  });
};

function startSound() {
  if (bgSound.loaded) {
    Tone.start().then(() => {
      bgSound.start();
    });
  } else {
    console.error("Buffer is not loaded yet.");
  }
}

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
*/
/*  ESTE FUNCIONA
import React, { useEffect } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';
import musica from './musica.mp3';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];

  function drawMenu(p){
    p.createCanvas(p.windowWidth, p.windowHeight);
    const createDivGrey = p.createDiv();
    createDivGrey.style('background-color', '#d3d3d3');
    createDivGrey.style('width', '1280px');
    createDivGrey.style('height','30px');
    createDivGrey.position(0, 160);

    //Texto para el start
    const textStart= p.createDiv('Dale a reproducir');
    textStart.style('font-size', '16px');
    textStart.position(300, 160);

    //Texto para el stop
    const textStop= p.createDiv('Detén la canción');
    textStop.style('font-size', '16px');
    textStop.position(550, 160);

    p.createButton('Start').position(445,160).mousePressed(() => startSound(p));
    p.createButton('Stop').position(675,160).mousePressed(() => stopSound(p));
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

  const startSound = () => {
    bgSound.start();
  };

  const stopSound = () => {
    bgSound.stop();
  };

  useEffect(() => {
    const sketch = (p) => {

      p.preload = () => preload(p);
  const preload = (p) => {
    bgSound = new Tone.Player(musica);
    myFFT = new Tone.FFT(32);
    bgSound.chain(myFFT, Tone.Destination);
  };

  p.setup = () => setup(p);
  const setup = (p) => {
    drawMenu(p);
  };

  p.draw = () => draw(p);
  const draw = (p) => {
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
    </div>
  );
};

export default Visualizer;

*/
////

/*

import React, { useEffect } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';
import musica from './electronica.mp3';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  let currentVisualization = 'Espectrograma';

 
    function drawMenu(p){
      p.createCanvas(p.windowWidth, p.windowHeight);
      const createDivGrey = p.createDiv();
      createDivGrey.style('background-color', '#d3d3d3');
      createDivGrey.style('width', '1280px');
      createDivGrey.style('height','30px');
      createDivGrey.position(0, 140);
  
  
      //Texto para el start
      const textStart= p.createDiv('Dale a reproducir');
      textStart.style('font-size', '16px');
      textStart.position(300, 140);
  
      //Texto para el stop
      const textStop= p.createDiv('Detén la canción');
      textStop.style('font-size', '16px');
      textStop.position(550, 140);
  
      p.createButton('Start').position(445,140).mousePressed(() => startSound(p));
      p.createButton('Stop').position(675,140).mousePressed(() => stopSound(p));
      //p.createButton('Browse...').position(175,700).mousePressed(() => openFileInput(p)); 
  
    

    const visualizationSelect = p.createSelect();
    visualizationSelect.position(800, 140);
    visualizationSelect.option('Espectrograma');
    visualizationSelect.option('Osciloscopio');
    visualizationSelect.option('Ondas');
    visualizationSelect.changed(() => changeVisualization(p, visualizationSelect.value()));
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

  function drawCircularVisualization(p) {
    p.background("#f0f0f0");
  levels = myFFT.getValue();

  const radius = p.min(p.width, p.height) * 0.4;
  const centerX = p.width / 2;
  const centerY = p.height / 2;
  const numLevels = levels.length;
  const angleIncrement = p.TWO_PI / numLevels;

  for (let i = 0; i < numLevels; i++) {
    const angle = i * angleIncrement - p.HALF_PI;
    const intensity = levels[i];
    const colorValue = p.map(intensity, -100, 12, 0, 255); // Mapea la intensidad a un valor de color
    const color = p.color(colorValue, 0, 210 - colorValue); // Rojo a azul
    p.stroke(color);
    p.strokeWeight(5);

    const mappedRadius = radius + intensity * 10; // Ajustar el radio según la intensidad
    const x = centerX + p.cos(angle) * mappedRadius;
    const y = centerY + p.sin(angle) * mappedRadius;
    p.point(x, y);
  }
  }
  
  

  function drawWaveforms(p) {
    p.noFill();
    p.strokeWeight(1);
    p.beginShape();
    for (let i = 0; i < levels.length; i++) {
      const x = p.map(i, 0, levels.length - 1, 0, p.width);
      const y = p.map(levels[i], -100, 12, p.height, 0);
      p.vertex(x, y);
    }
    p.endShape();
  }
  
  
  

  const changeVisualization = (p, newVisualization) => {
    currentVisualization = newVisualization;
  };

  const startSound = () => {
    bgSound.start();
  };

  const stopSound = () => {
    bgSound.stop();
  };
  

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preload(p);

      const preload = (p) => {
        bgSound = new Tone.Player(musica);
        myFFT = new Tone.FFT(32);
        bgSound.chain(myFFT, Tone.Destination);
      };

      p.setup = () => setup(p);
      const setup = (p) => {
        drawMenu(p);
      };

      p.draw = () => draw(p);
      const draw = (p) => {
        p.background("#f0f0f0");
        levels = myFFT.getValue();

        if (currentVisualization === 'Espectrograma') {
          drawEspectogram(p);
        } else if (currentVisualization === 'Osciloscopio') {
          drawCircularVisualization(p)
        } else if (currentVisualization === 'Ondas') {
          drawWaveforms(p);
        
        }
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
    </div>
  );
};

export default Visualizer;
*/
///////////

import React, { useEffect } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';
//import musica from './electronica.mp3';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  let currentVisualization = 'Espectrograma';
  let currentGenre = 'Electrónica'; 

  const songs = {
    Electrónica: require('./electronica.mp3'), 
    Chillout: require('./chillout.mp3'), 
    Rock: require('./rock.mp3'),
    Jazz: require('./jazz.mp3'),
    Clásica: require('./clasica.mp3'),
    Ópera: require('./opera.mp3'),
    Pop: require ('./pop.mp3')
  };

  const changeGenre = async (p, newGenre) => {
    currentGenre = newGenre;
    
    if (bgSound.state === 'started') {
      bgSound.stop();
    }
    await bgSound.load(songs[currentGenre]);
    bgSound.start();
  };

  function drawMenu(p){
    p.createCanvas(p.windowWidth, p.windowHeight);
    const createDivGrey = p.createDiv();
    createDivGrey.style('background-color', '#d3d3d3');
    createDivGrey.style('width', '1280px');
    createDivGrey.style('height','30px');
    createDivGrey.position(0, 140);

    //Texto para canciones
    const textSongs= p.createDiv('Selecciona la canción');
    textSongs.style('font-size', '16px');
    textSongs.position(0, 140);
    
    //Texto para el start
    const textStart= p.createDiv('Dale a reproducir');
    textStart.style('font-size', '16px');
    textStart.position(300, 140);
    
    //Texto para el stop
    const textStop= p.createDiv('Detén la canción');
    textStop.style('font-size', '16px');
    textStop.position(550, 140);

    //Texto para formas
    const textForms= p.createDiv('Elige la forma');
    textForms.style('font-size', '16px');
    textForms.position(750, 140);
    
    p.createButton('Start').position(445,143).mousePressed(() => startSound(p));
    p.createButton('Stop').position(675,143).mousePressed(() => stopSound(p));

    //Selector de formas
    const visualizationSelect = p.createSelect();
    visualizationSelect.position(860, 145);
    visualizationSelect.option('Espectrograma');
    visualizationSelect.option('Círculo');
    visualizationSelect.option('Ondas');
    visualizationSelect.changed(() => changeVisualization(p, visualizationSelect.value()));

    //Selector canciones
    const genreSelect = p.createSelect();
    genreSelect.position(165, 145);
    for (const genre in songs) {
      genreSelect.option(genre);
    }
    genreSelect.changed(() => changeGenre(p, genreSelect.value()));
    }

  function drawEspectogramForms(p){
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

  function drawCircularForms(p) {
    p.background("#f0f0f0");
    levels = myFFT.getValue();

    const radius = p.min(p.width, p.height) * 0.4;
    const centerX = p.width / 2;
    const centerY = p.height / 2;
    const numLevels = levels.length;
    const angleIncrement = p.TWO_PI / numLevels;

    for (let i = 0; i < numLevels; i++) {
      const angle = i * angleIncrement - p.HALF_PI;
      const intensity = levels[i];
      const colorValue = p.map(intensity, -100, 12, 0, 255); // Mapea la intensidad a un valor de color
      const color = p.color(colorValue, 0, 210 - colorValue); // Rojo a azul
      p.stroke(color);
      p.strokeWeight(5);

      const mappedRadius = radius + intensity * 10; 
      const x = centerX + p.cos(angle) * mappedRadius;
      const y = centerY + p.sin(angle) * mappedRadius;
      p.point(x, y);
    }
  }

  function drawWaveForms(p) {
    p.noFill();
    p.strokeWeight(1);
    p.beginShape();
    for (let i = 0; i < levels.length; i++) {
      const x = p.map(i, 0, levels.length - 1, 0, p.width);
      const y = p.map(levels[i], -100, 12, p.height, 0);
      p.vertex(x, y);
    }
    p.endShape();
  }

  const changeVisualization = (p, newVisualization) => {
    currentVisualization = newVisualization;
  };

  const startSound = () => {
    bgSound.start();
  };

  const stopSound = () => {
     bgSound.stop();
  };

  function drawVisualization(p){
    p.background("#f0f0f0");
        levels = myFFT.getValue();

        if (currentVisualization === 'Espectrograma') {
          drawEspectogramForms(p);
        } else if (currentVisualization === 'Círculo') {
          drawCircularForms(p)
        } else if (currentVisualization === 'Ondas') {
          drawWaveForms(p);
        }
  }
  
  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preload(p);

      const preload = (p) => {
        bgSound = new Tone.Player(songs[currentGenre]);
        myFFT = new Tone.FFT(32);
        bgSound.chain(myFFT, Tone.Destination);
      };
      
      p.setup = () => setup(p);
      const setup = (p) => {
        drawMenu(p);
      };

      p.draw = () => draw(p);
      const draw = (p) => {
        drawVisualization(p);
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
      </div>
    );
};

export default Visualizer;

//////
/*
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  const fileInputRef = useRef(null);

  const preload = (p) => {
    if (bgSound) {
      bgSound.dispose();
    }
    bgSound = new Tone.Player(fileInputRef.current.files[0]);
    myFFT = new Tone.FFT(32);
    bgSound.chain(myFFT, Tone.Destination);
  };

  const setup = (p) => {
    p.createCanvas(800, 400);
    p.createButton('start').mousePressed(startSound);
    p.createButton('stop').mousePressed(stopSound);
  };

  const draw = (p) => {
    p.background("limegreen");

    levels = myFFT.getValue();

    for (let i = 0; i < levels.length; i++) {
      p.push();
      p.strokeWeight(30); // thicc lines
      let binMapped = p.map(levels[i], -100, 12, p.height, 0); // map the FFT values so we can use them how we want
      p.stroke(binMapped, binMapped, binMapped); // have line color adapt to FFT value as well
      p.line(i * 25, p.height, i * 25, binMapped); // line height grows from bottom of screen
      p.pop();

      p.push();
      p.stroke(0);
      p.strokeWeight(10);
      p.line(i * 25 - 3, binMapped, i * 25 + 3, binMapped); // makes thin black line at actual sound level. Look into making a peak meter for a future video
      p.pop();
    }
  };

  const startSound = () => {
    if (bgSound.state !== 'started') {
      bgSound.start();
    } else {
      bgSound.restart();
    }
  };

  const stopSound = () => {
    bgSound.stop();
  };

  const handleFileChange = () => {
    preload();
  };

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preload(p);
      p.setup = () => setup(p);
      p.draw = () => draw(p);
    };

    const canvas = new p5(sketch);

    return () => {
      canvas.remove();
      if (bgSound) {
        bgSound.dispose();
      }
      if (myFFT) {
        myFFT.dispose();
      }
    };
  }, []);

  return (
    <div>
      <div>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} />
      </div>
      <div id="p5canvas" />
    </div>
  );
};

export default Visualizer;
*/