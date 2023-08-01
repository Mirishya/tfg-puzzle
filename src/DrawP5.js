import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Draw = () => {
  const canvasRef = useRef(null);
  let colorPicker;
  let sel;
  let slider;
  const bgcolor = 'white';

  let canvasInstance;

//Guardar Imagen
  function saveCanvas () {
    if (canvasInstance) {
      //Seleccionamos la zona que queremos guardar, todo el canvas menos la parte superior del menú
      const to_save = canvasInstance.get(0, 100, canvasInstance.width, canvasInstance.height - 100);
      to_save.save("image.png");
    }
    
  };

  const clearBG = (p) => {
    p.fill(bgcolor);
    p.noStroke();
    p.rect(0, 100, p.width, p.height - 100);
  };

  function drawMenu(p){

    p.noStroke();
    p.fill('#d3d3d3');
    p.rect(0, 0, p.width, 100);

    p.fill('black');
    p.textSize(16);
    p.text("Regula la intensidad del borrador  \n (puedes presionar + ó - )", 550, 30);

    p.fill('black');
    p.textSize(16);
    p.text("Selecciona brocha/borrador", 260, 30);

    p.fill('black');
    p.textSize(16);
    p.text("Selecciona el color", 10, 30);

    if (p.mouseIsPressed && p.mouseY > 100) {
      if (sel.value() === "Trazo libre") {
        p.stroke(colorPicker.color());
        p.strokeWeight(slider.value());
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      } else if (sel.value() === "Dispersión de puntos") {
        for (let i = 0; i < p.random(1, 10); i++) {
          p.noStroke();
          p.fill(colorPicker.color());
          p.ellipse(
            p.mouseX + p.random(-100, 100),
            p.mouseY + p.random(-100, 100),
            slider.value(),
            slider.value()
          );
        }
      } else if (sel.value() === "Borrador") {
        p.stroke(bgcolor);
        p.strokeWeight(slider.value());
        p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
      } else if (sel.value() === "Dibuja rectángulos") {
        p.fill(colorPicker.color());
        p.rect(p.mouseX, p.mouseY, slider.value(), slider.value());
      } else if (sel.value() === "Dibuja triángulos") {
        p.fill(colorPicker.color());
        p.triangle(
          p.mouseX,
          p.mouseY,
          p.mouseX + slider.value(),
          p.mouseY + slider.value(),
          p.mouseX - slider.value(),
          p.mouseY + slider.value()
        );
      }
    }

  }

  useEffect(() => {
    const sketch = new p5(p => {

      //Para guardar imagen
      canvasInstance=p;

      p.setup = () => {
        p.createCanvas(1260, 500).parent(canvasRef.current);
        p.background(bgcolor);
        setupCanvas(p);
      };

      p.draw = () => {
        
        drawMenu(p);

      };
      
      const setupCanvas = (p) => {
        p.noStroke();

        colorPicker = p.createColorPicker('#000000');
        colorPicker.position(50, 750);

        sel = p.createSelect();
        sel.position(260, 750);
        sel.option("Trazo libre");
        sel.option("Dispersión de puntos");
        sel.option("Borrador");
        sel.option("Dibuja rectángulos");
        sel.option("Dibuja triángulos");

        slider = p.createSlider(1, 100, 20, 1);
        slider.position(550, 750);
        slider.style('width', '180px');

        p.createButton("Borrar todo")
          .position(900, 700)
          .mousePressed(() => clearBG(p));
        
        p.createButton("Guardar la imagen   ")
          .position(900, 750)
          .mousePressed(saveCanvas);

      };

      p.keyPressed = () => {
         if (p.key === '+') {
          slider.value(slider.value() + 1);
        } else if (p.key === '-') {
          slider.value(slider.value() - 1);
        }
        
      };
    });

    return () => sketch.remove();
  }, []);

  return (
  <div>
  <div ref={canvasRef}></div>;
  </div>
  )
};

export default Draw;