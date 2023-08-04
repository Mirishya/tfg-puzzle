import React, { useEffect, useState } from 'react';
import p5 from 'p5';

const FlowField = () => {
  let lineShape = 'ellipse'; // Estado para almacenar la forma de fondo elegida
  let points = [];
  let mult;
  let r1, r2, g1, g2, b1, b2;
  let mouseVector;
  let canvasInstance;

  //Guardar Imagen
  function saveCanvas () {
    if (canvasInstance) {
      //Seleccionamos la zona que queremos guardar, todo el canvas menos la parte superior del menú
      const to_save = canvasInstance.get(0, 50, canvasInstance.width, canvasInstance.height - 50);
      to_save.save("image.png");
    }
  }  

  const handleLineShape = (event) => {
    lineShape = event.target.value;
  };

  function resetCanvas(p) {
    p.clear(); 
    points = []; 
    drawLines(p); // Reinicializa el flow field
  }

  function menuFlowField(p){
    const shapeRadio = p.createRadio();
    shapeRadio.style('background-color', '#d3d3d3');
    shapeRadio.style('width', '1280px');
    shapeRadio.style('height','30px');
    shapeRadio.option('ellipse', 'Líneas');
    shapeRadio.option('square', 'Cuadrados');
    shapeRadio.option('triangle','Triángulos');

    // Posicionar el radio button en la interfaz
    const radioContainer = p.createDiv();
    radioContainer.child(shapeRadio);
    radioContainer.position(0, 660);

    // Asignar el evento changed para capturar el cambio de selección
    shapeRadio.changed(handleLineShape);

    //Crear botón de reset
    p.createButton("Reset")
    .position(450, 665)
    .mousePressed(() => resetCanvas(p)); 

    //Crear botón de guardar
    p.createButton("Guardar imagen")
    .position(700, 665)
    .mousePressed(saveCanvas);

  }

  function drawLines(p){
    canvasInstance = p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(30);
    p.angleMode(p.DEGREES);
    p.noiseDetail(1);

    let density = 50;
    let space = p.width / density;

    for (let x = 0; x < p.width; x += space) {
      for (let y = 0; y < p.height; y += space) {
        let pe = p.createVector(x + p.random(-10, 10), y + p.random(-10, 10));
        points.push(pe);
      }
    }

      p.shuffle(points, true);

      r1 = p.random(255);
      r2 = p.random(255);
      g1 = p.random(255);
      g2 = p.random(255);
      b1 = p.random(255);
      b2 = p.random(255);

      mult = p.random(0.002, 0.01);

      // Inicializa el vector del ratón en el centro de la pantalla
      mouseVector = p.createVector(p.width / 2, p.height / 2);
  }

  function drawFlowField(p){
    p.noStroke();
    let max = Math.min(p.frameCount * 5, points.length);
    for (let i = 0; i < max; i++) {
      let r = p.map(points[i].x, 0, p.width, r1, r2);
      let g = p.map(points[i].y, 0, p.height, g1, g2);
      let b = p.map(points[i].x, 0, p.width, b1, b2);

      let alfa = p.map(p.dist(p.width / 2, p.height / 2, points[i].x, points[i].y), 0, 350, 300, 0);
      p.fill(r, g, b, alfa);

      // Calcula la dirección hacia el ratón
      let direction = p.createVector(mouseVector.x - points[i].x, mouseVector.y - points[i].y);
      let distance = direction.mag(); // Magnitud de la distancia al ratón
      direction.normalize(); // Normaliza el vector para tener solo la dirección
      direction.mult(10000 / (distance * distance)); // Ajusta la magnitud de la fuerza

      // Aplica la fuerza del ratón a la partícula
      points[i].add(direction);

      // Dibuja la forma de fondo según la elección del usuario
      if (p.dist(p.width / 2, p.height / 2, points[i].x, points[i].y) < 200) {
        if (lineShape === 'ellipse') {
        
          p.ellipse(points[i].x, points[i].y, 2);
        }
        else if (lineShape === 'square') {
        
          p.ellipse(points[i].x, points[i].y, 1);

          // Cambio a cuadrado
          var sizeSquare = 2; // Puedes cambiar el tamaño del cuadrado a tu preferencia

          // Calcular las coordenadas de la esquina superior izquierda del cuadrado
          var x = points[i].x - sizeSquare / 2;
          var y = points[i].y - sizeSquare / 2;

          // Dibujar el cuadrado utilizando la función rect()
          p.rect(x, y, sizeSquare, sizeSquare);

        }
        else if (lineShape === 'triangle') {
     
          p.ellipse(points[i].x, points[i].y, 1);
          var sizeTriangle = 3; // Puedes cambiar el tamaño del triángulo a tu preferencia

          // Calcular las coordenadas de los tres vértices del triángulo
          var x1 = points[i].x;
          var y1 = points[i].y - sizeTriangle / 2;
          var x2 = points[i].x - sizeTriangle / 2;
          var y2 = points[i].y + sizeTriangle / 2;
          var x3 = points[i].x + sizeTriangle / 2;
          var y3 = points[i].y + sizeTriangle / 2;

          // Dibujar el triángulo utilizando la función triangle()
          p.triangle(x1, y1, x2, y2, x3, y3);

        }
      }
  }
}
  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        drawLines(p);
     };

      // Actualiza la posición del vector del ratón cuando el ratón se mueve
      p.mouseMoved = () => {
        mouseVector.set(p.mouseX, p.mouseY);
      };

      //Muestra el menú de opciones de líneas
      menuFlowField(p);

      p.draw = () => {
      
      //Dibuja todo el Flow Field
      drawFlowField(p); 
      };
    };

    const p5Canvas = new p5(sketch);
    return () => {
      p5Canvas.remove(); // Elimina el sketch de p5.js al desmontar el componente
    };
  }, []);

  return (
    <div> </div>
  );
};

export default FlowField;
