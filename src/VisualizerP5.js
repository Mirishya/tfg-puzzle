/*
import React, { useEffect } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';
import musica from './musica.mp3';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];

  const preload = (p) => {
    bgSound = new Tone.Player(musica);
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
    

    levels = myFFT.getValue(); // get FFT values for each bin

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
    bgSound.start();
  };

  const stopSound = () => {
    bgSound.stop();
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

/*
import React, { useEffect } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';
import musica from './musica.mp3';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];

  const preloadAudio = (p) => {
    bgSound = new Tone.Player(musica);
    myFFT = new Tone.FFT(32);
    bgSound.chain(myFFT, Tone.Destination);
  };

  const setupCanvas = (p) => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.createButton('start').mousePressed(startSound);
    p.createButton('stop').mousePressed(stopSound);
  };

  const drawVisualization = (p) => {
    p.background("limegreen");

    levels = myFFT.getValue();

    for (let i = 0; i < levels.length; i++) {
      const intensity = levels[i];
      const colorValue = p.map(intensity, -100, 12, 0, 255); // Mapea la intensidad a un valor de color
      const color = p.color(colorValue, 100, 255 - colorValue); // Usa colores en el rango de azul a morado
      p.stroke(color);
      p.strokeWeight(5);

      const binMapped = p.map(levels[i], -100, 12, p.height, 0);
      p.line(i * 25, p.height, i * 25, binMapped);
    }
  };

  const startSound = () => {
    bgSound.start();
  };

  const stopSound = () => {
    bgSound.stop();
  };

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preloadAudio(p);
      p.setup = () => setupCanvas(p);
      p.draw = () => drawVisualization(p);
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

import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import * as Tone from 'tone';

const Visualizer = () => {
  let bgSound, myFFT;
  let levels = [];
  const fileInputRef = useRef(null); // Referencia al input de archivo

  const preloadAudio = (p) => {
    bgSound = new Tone.Player();
    myFFT = new Tone.FFT(32);
    bgSound.chain(myFFT, Tone.Destination);
  };

  const setupCanvas = (p) => {
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
  };

  const openFileInput = () => {
    fileInputRef.current.click(); // Simula el clic en el input de archivo oculto
  };

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      bgSound.load(fileURL, () => {
        console.log('Canción cargada:', file.name);
      });
    }
  };

  const drawVisualization = (p) => {
    p.background("#f0f0f0");

    levels = myFFT.getValue();

    for (let i = 0; i < levels.length; i++) {
      const intensity = levels[i];
      const colorValue = p.map(intensity, -100, 12, 0, 255); // Mapea la intensidad a un valor de color
      const color = p.color(colorValue, 0, 210 - colorValue); // Rojo a azul
      p.stroke(color);
      p.strokeWeight(5);


      //dibuja las lineas del espectograma
      const binMapped = p.map(levels[i], -100, 12, p.height, 0);
      const x = p.map(i, 0, levels.length - 1, 10, p.width); // Calcula la posición horizontal
      p.line(x, p.height, x, binMapped);

     
    }
  };

  const startSound = () => {
    bgSound.start();
  };

  const stopSound = () => {
    bgSound.stop();
  };

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preloadAudio(p);
      p.setup = () => setupCanvas(p);
      p.draw = () => drawVisualization(p);
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





/*
const Visualizer = () => {
  let song;
  let img;
  let fft;
  const particles = [];

  const preload = (p) => {
    song = p.loadSound('./olas.mp3');
    img = p.loadImage('./mar2.jpg');
  };

  const setup = (p) => {
    p.createCanvas(400, 400);
    p.angleMode(p.DEGREES);
    p.imageMode(p.CENTER);
    p.rectMode(p.CENTER);
    fft = new p5.FFT(0.3);

    img.filter(p.BLUR, 12);

    p.noLoop();
  };

  const draw = (p) => {
    p.background(0);

    p.translate(p.width / 2, p.height / 2);

    fft.analyze();
    const amp = fft.getEnergy(20, 200);

    p.push();
    if (amp > 230) {
      p.rotate(p.random(-0.5, 0.5));
    }
    p.image(img, 0, 0, p.width + 100, p.height + 100);
    p.pop();

    const alfa = p.map(amp, 0, 255, 180, 150);
    p.fill(0, alfa);

    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    p.stroke(255);
    p.strokeWeight(3);
    p.noFill();

    const wave = fft.waveform();

    for (let t = -1; t <= 1; t += 2) {
      p.beginShape();
      for (let i = 0; i <= 180; i += 0.5) {
        const index = Math.floor(p.map(i, 0, 180, 0, wave.length - 1));

        const r = p.map(wave[index], -1, 1, 150, 350);

        const x = r * p.sin(i) * t;
        const y = r * p.cos(i);

        p.vertex(x, y);
      }
      p.endShape();
    }
    const newParticle = new Particle(p);

    particles.push(newParticle);

    for (let i = particles.length - 1; i >= 0; i--) {
      if (!particles[i].edges()) {
        particles[i].update(amp > 230);
        particles[i].show(p);
      } else {
        particles.splice(i, 1);
      }
    }
  };

  const mouseClicked = (p) => {
    if (song.isPlaying()) {
      song.pause();
      p.noLoop();
    } else {
      song.play();
      p.loop();
    }
  };

  class Particle {
    constructor(p) {
      this.p = p;
      this.pos = p.createVector(p.random(-1, 1), p.random(-1, 1)).mult(250);
  
      this.vel = p.createVector(0, 0);
  
      this.acc = this.pos.copy().mult(p.random(0.0001, 0.00001));
  
      this.w = p.random(3, 5);
      this.color = [p.random(200, 255), p.random(200, 255), p.random(200, 255)];
    }
  
    update(cond) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      if (cond) {
        this.pos.add(this.vel);
        this.pos.add(this.vel);
        this.pos.add(this.vel);
      }
    }
  
    edges() {
      return (
        this.pos.x < -this.p.width / 2 ||
        this.pos.x > this.p.width / 2 ||
        this.pos.y < -this.p.height / 2 ||
        this.pos.y > this.p.height / 2
      );
    }
  
    show() {
      this.p.noStroke();
      this.p.fill(this.color);
      this.p.ellipse(this.pos.x, this.pos.y, this.w);
    }
  }
  

  useEffect(() => {
    const sketch = (p) => {
      p.preload = () => preload(p);
      p.setup = () => setup(p);
      p.draw = () => draw(p);
      p.mouseClicked = () => mouseClicked(p);
    };

    new p5(sketch);

    // Clean up the p5 instance when the component unmounts
    return () => {
      p5.remove();
    };
  }, []);

  return <div />;
};

export default Visualizer;
*/

