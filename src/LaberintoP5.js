import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import './LaberintoP5.css';

let t = 20;
let ncanvas = 400;
let numceldas = ncanvas / t;

// Posición del jugador
let posX = 0;
let posY = 0;

// Position of the goal
let metaX;
let metaY;

let laberinto;

function drawMaze(p){
  p.background(220);

  // Dibuja el laberinto
  for (let x = 0; x < numceldas; x += 1) {
    for (let y = 0; y < numceldas; y += 1) {
      if (laberinto[x][y] === 0) {
        p.fill(0);
      } else if (laberinto[x][y] === 1) {
        p.fill(255);
      } else if (laberinto[x][y] === 2) {
        p.fill(255); // Color blanco para el camino
      }
      p.rect(x * t, y * t, t, t);
    }
  }
}

function drawGoal(p){
  p.fill(255, 0, 0);
  p.rect(metaX * t, metaY * t, t, t);
}

function drawPlayer(p){
  p.fill(0, 0, 255);
  p.rect(posX * t, posY * t, t, t);
}

const Maze = () => {
  const canvasRef = useRef();
  const [completed, setCompleted] = useState(false); // State to track if the maze is completed
  const [playerCanMove, setPlayerCanMove] = useState(true);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(ncanvas, ncanvas).parent(canvasRef.current);
        p.noStroke();

        generateMaze();
      };

      p.draw = () => {

        //Dibuja el laberinto 
        drawMaze(p);
       
        // Dibuja el objetivo (casilla roja)
        drawGoal(p);

        // Dibuja al jugador
       drawPlayer(p);
       
      };

      p.keyPressed = () => {

        if (!playerCanMove) {
          return;
        }
        if (p.keyCode === p.LEFT_ARROW && posX > 0) {
          if (laberinto[posX - 1][posY] !== 0) {
            posX -= 1;
          }
        } else if (p.keyCode === p.RIGHT_ARROW && posX < numceldas - 1) {
          if (laberinto[posX + 1][posY] !== 0) {
            posX += 1;
          }
        } else if (p.keyCode === p.UP_ARROW && posY > 0) {
          if (laberinto[posX][posY - 1] !== 0) {
            posY -= 1;
          }
        } else if (p.keyCode === p.DOWN_ARROW && posY < numceldas - 1) {
          if (laberinto[posX][posY + 1] !== 0) {
            posY += 1;
          }
        }

        // Comprueba si el jugador ha llegado a la meta
        if (posX === metaX && posY === metaY) {
          setPlayerCanMove(false);
          setCompleted(true);
        }
      };

      function generateMaze() {
        laberinto = [];
        for (let x = 0; x < numceldas; x += 1) {
          laberinto[x] = [];
          for (let y = 0; y < numceldas; y += 1) {
            laberinto[x][y] = 0;
          }
        }

        recursiveBacktracking(posX, posY);
        
        metaX = p.int(p.random(numceldas / 2)) * 2;
        metaY = p.int(p.random(numceldas / 2)) * 2;

        // Encuentra camino desde el jugador a la meta
        findPath(posX, posY);
      }

      function recursiveBacktracking(x, y) {
        laberinto[x][y] = 1;

        const direcciones = p.shuffle([
          { dx: 2, dy: 0 }, { dx: -2, dy: 0 }, { dx: 0, dy: 2 }, { dx: 0, dy: -2 }
          
        ]);

        for (const dir of direcciones) {
          const nx = x + dir.dx;
          const ny = y + dir.dy;

          if (nx >= 0 && nx < numceldas && ny >= 0 && ny < numceldas && laberinto[nx][ny] === 0) {
            laberinto[nx][ny] = 1;
            laberinto[x + dir.dx / 2][y + dir.dy / 2] = 1;
            recursiveBacktracking(nx, ny);
          }
        }
      }

      function findPath(x, y) {
        if (x === metaX && y === metaY) {

          // Encuentra la meta
          laberinto[x][y] = 2;
          return true;
        }

        if (x < 0 || x >= numceldas || y < 0 || y >= numceldas || laberinto[x][y] !== 1) {
          return false;
        }

        laberinto[x][y] = 2; 

        const direcciones = p.shuffle([
          { dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
        ]);

        for (const dir of direcciones) {
          const nx = x + dir.dx;
          const ny = y + dir.dy;

          if (findPath(nx, ny)) {
            return true;
          }
        }

        // Backtracking
        laberinto[x][y] = 1;
        return false;
      }
    };
    const p5Canvas = new p5(sketch);
    return () => {
      p5Canvas.remove(); // Elimina el sketch de p5.js al desmontar el componente
    
    };
  }, [playerCanMove]);

  return(
    <div className="maze" style={{ paddingLeft: '200px' }}>
    {completed && (
      <div className="maze-completed">
        <p><b>Laberinto completado</b></p>
      </div>
    )}
    <div ref={canvasRef}></div>
  </div>
  );
};

export default Maze;
