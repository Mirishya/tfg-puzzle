import React, { useEffect, useRef ,useState} from 'react';
import p5 from 'p5';

const Laberinto = () => {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false); // Estado para indicar si el juego ha terminado
  
  const cols = 10;
  const rows = 10;
  const w = 40;
  let grid = [];
  let player;

  class Cell {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.walls = [true, true, true, true]; // [arriba, derecha, abajo, izquierda]
      this.visited = false;
    }

    show(p) {
      const x = this.x * w;
      const y = this.y * w;

      p.stroke(255);
      if (this.walls[0]) p.line(x, y, x + w, y); // Arriba
      if (this.walls[1]) p.line(x + w, y, x + w, y + w); // Derecha
      if (this.walls[2]) p.line(x, y + w, x + w, y + w); // Abajo
      if (this.walls[3]) p.line(x, y, x, y + w); // Izquierda

      if (this.visited) {
        p.noStroke();
        if (this === grid[grid.length - 1]) {
          // Si es la casilla de salida, resalta en rojo
          p.fill(255, 0, 0, 100);
        } else {
          p.fill(255, 0, 255, 100);
        }
        p.rect(x, y, w, w);
      }
    }
    checkNeighbors() {
      const neighbors = [];

      const top = grid[index(this.x, this.y - 1)];
      const right = grid[index(this.x + 1, this.y)];
      const bottom = grid[index(this.x, this.y + 1)];
      const left = grid[index(this.x - 1, this.y)];

      if (top && !top.visited) neighbors.push(top);
      if (right && !right.visited) neighbors.push(right);
      if (bottom && !bottom.visited) neighbors.push(bottom);
      if (left && !left.visited) neighbors.push(left);

      if (neighbors.length > 0) {
        const randomIndex = Math.floor(Math.random() * neighbors.length);
        return neighbors[randomIndex];
      } else {
        return undefined;
      }
    }
  }

  const index = (x, y) => {
    if (x < 0 || y < 0 || x >= cols || y >= rows) return -1;
    return x + y * cols;
  };

  const removeWalls = (current, next) => {
    const x = current.x - next.x;
    if (x === 1) {
      current.walls[3] = false;
      next.walls[1] = false;
    } else if (x === -1) {
      current.walls[1] = false;
      next.walls[3] = false;
    }

    const y = current.y - next.y;
    if (y === 1) {
      current.walls[0] = false;
      next.walls[2] = false;
    } else if (y === -1) {
      current.walls[2] = false;
      next.walls[0] = false;
    }
  };

  /*
  const handleKeyPressed = (p) => {
    if (!gameOver) {
      // Solo se permite mover al jugador si el juego no ha terminado
      if (p.keyCode === p.UP_ARROW && player.y > 0 && !player.walls[0]) {
        // Tecla de flecha arriba (UP_ARROW)
        player = grid[index(player.x, player.y - 1)];
      } else if (p.keyCode === p.DOWN_ARROW && player.y < rows - 1 && !player.walls[2]) {
        // Tecla de flecha abajo (DOWN_ARROW)
        player = grid[index(player.x, player.y + 1)];
      } else if (p.keyCode === p.LEFT_ARROW && player.x > 0 && !player.walls[3]) {
        // Tecla de flecha izquierda (LEFT_ARROW)
        player = grid[index(player.x - 1, player.y)];
      } else if (p.keyCode === p.RIGHT_ARROW && player.x < cols - 1 && !player.walls[1]) {
        // Tecla de flecha derecha (RIGHT_ARROW)
        player = grid[index(player.x + 1, player.y)];
      }

      if (player === grid[grid.length - 1]) {
        // Si el jugador llega a la casilla de salida, termina el juego
        setGameOver(true);
        
       
      }
      
    }
  };
  */

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(cols * w, rows * w).parent(canvasRef.current);
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            grid.push(new Cell(x, y));
          }
        }
        player = grid[0];

        // Escuchar eventos de teclado fuera del sketch de p5.js
       // window.addEventListener('keydown', () => handleKeyPressed(p));
      };

      p.draw = () => {
        p.background(51);

        for (const cell of grid) {
          cell.show(p);
        }

        player.visited = true;
        const x = player.x * w;
        const y = player.y * w;
        p.noStroke();
        p.fill(0, 0, 255, 100);
        p.rect(x, y, w, w);

        const next = player.checkNeighbors();
        if (next) {
          next.visited = true;
          removeWalls(player, next);
          player = next;

          if (player === grid[grid.length - 1]) {
            // Si el jugador llega a la casilla de salida, termina el juego
            setGameOver(true);
         
          }
        }
      };

      
      p.keyPressed = () => {
        // No es necesario hacer nada aquí, la detección de teclas se maneja en el evento de setup
        if (!gameOver) {
      // Solo se permite mover al jugador si el juego no ha terminado
      if (p.keyCode === p.UP_ARROW && player.y > 0 && !player.walls[0]) {
        // Tecla de flecha arriba (UP_ARROW)
        player = grid[index(player.x, player.y - 1)];
      } else if (p.keyCode === p.DOWN_ARROW && player.y < rows - 1 && !player.walls[2]) {
        // Tecla de flecha abajo (DOWN_ARROW)
        player = grid[index(player.x, player.y + 1)];
      } else if (p.keyCode === p.LEFT_ARROW && player.x > 0 && !player.walls[3]) {
        // Tecla de flecha izquierda (LEFT_ARROW)
        player = grid[index(player.x - 1, player.y)];
      } else if (p.keyCode === p.RIGHT_ARROW && player.x < cols - 1 && !player.walls[1]) {
        // Tecla de flecha derecha (RIGHT_ARROW)
        player = grid[index(player.x + 1, player.y)];
      }

      if (player === grid[grid.length - 1]) {
        // Si el jugador llega a la casilla de salida, termina el juego
        setGameOver(true);
        
       
      }
      
    }
      };
      
    };

    new p5(sketch);

    // Limpia el canvas y elimina el sketch de p5.js al desmontar el componente
    return () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        while (canvas.firstChild) {
          canvas.firstChild.remove();
        }
      }

      // Eliminar el evento de escucha de teclado al desmontar el componente
    //  window.removeEventListener('keydown', handleKeyPressed);
    };
  }, []);

  return(
    <>
    <div ref={canvasRef}></div>;
  {gameOver && <div>Laberinto completado</div>}
  </>
  );
};

export default Laberinto;
