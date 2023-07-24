/*import React from 'react';
import Paper from '@material-ui/core/Paper';
import { BezierCurveEditor } from 'react-bezier-curve-editor';
//import BezierCurve from 'react-bezier-curve';

function BezierCurve() {
  const curve = {
    start: [50, 50],
    end: [250, 250],
    c1: [50, 250],
    c2: [250, 50],
  };

  return (
    <Paper elevation={3} style={{width: '300px', height: '300px'}}>
      <BezierCurveEditor
        start={curve.start}
        end={curve.end}
        c1={curve.c1}
        c2={curve.c2}
        stroke={'#333'}
        strokeWidth={2}
      />
    </Paper>
  );
}


export {BezierCurve};
*/
import React from 'react';
import { PaperScope, Project, Layer, Path } from 'paper';

function PuzzlePiece({ shape }) {
  const { x, y, width, height } = shape;

  return (
    <Layer>
      <Path
        pathData={`M${x},${y} C${x + 35},${y + 15} ${x + 37},${y + 5} ${x + 40},${y} ${x + 38},${y - 5} ${x + 20},${y - 20} ${x + 50},${y - 20} ${x + 80},${y - 20} ${x + 62},${y - 5} ${x + 60},${y} ${x + 63},${y + 5} ${x + 65},${y + 15} ${x + 100},${y}`}
        closed
        strokeColor="black"
        fillColor="white"
        position={[x, y]}
        scaling={[width / 100, height / 100]}
      />
    </Layer>
  );
}

function BezierCurve() {
  // Define las formas y posiciones de los rompecabezas
  const puzzleShapes = [
    { x: 50, y: 100, width: 100, height: 100 },
    { x: 200, y: 50, width: 120, height: 80 },
    { x: 350, y: 120, width: 80, height: 120 },
  ];

  return (
    <PaperScope>
      <Project>
        {puzzleShapes.map((shape, index) => (
          <PuzzlePiece key={index} shape={shape} />
        ))}
      </Project>
    </PaperScope>
  );
}

export {BezierCurve};