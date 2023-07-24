import React from 'react';
import p5 from 'p5';

const Tab2Content = () => {
  let p5Canvas;
  let myP5;

  // Función sketch que define el lienzo y la animación
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400).parent(p5Canvas);
    };

    p.draw = () => {
      p.background(220);

      // Calcula el valor de parpadeo usando la función frameCount
      // Cambia la frecuencia de parpadeo ajustando el divisor (por ejemplo, 30)
      let blink = p.frameCount % 16 < 15;

      if (blink) {
        // Muestra el círculo cuando blink sea verdadero
        p.fill(255, 255, 0); // Color amarillo (puedes ajustar el color según tus preferencias)
        p.ellipse(p.width / 2, p.height / 2, 50, 50); // Círculo en el centro del lienzo
      }
    };
  };

  // Función para limpiar el lienzo antes de desmontar el componente
  const cleanUp = () => {
    myP5.remove();
  };

  // Inicializar el lienzo cuando el componente se monte
  React.useEffect(() => {
    p5Canvas = document.getElementById('p5canvas');
    myP5 = new p5(sketch);
    return () => cleanUp(); // Limpia el lienzo al desmontar el componente
  }, []);

  return <div id="p5canvas"></div>;
};

export default Tab2Content;
