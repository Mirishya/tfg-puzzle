import React from "react";
import "./App.css";
import { useSpring, animated } from 'react-spring';
/*
import "./App.css";
import "./puzzle.css";
//import "./Formulario.php"
//import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import { Cronometer } from "./Botton.js"
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
//import { Audio } from "./Audio.js";
import { useSpring, animated } from 'react-spring';
import Card from "./Card.jsx";
import mar2 from "./mar2.jpg";
*/
import Tabs from "./Tabs.js";
//import { BrowserRouter, Navigate, Link,Route } from 'react-router-dom';


function App() {

	const springProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 3000 },
	});

	return (
		
		/*	<animated.div style={springProps}>
				<Tabs></Tabs>
				<Card
					image={mar2}
					title="Puzzle React"
					description="REGLAS: Determina número de filas y columnas, cuando estés listo pulsa Start. 
		En cuanto finalices el puzzle podrás ver tu Puntuación. Si quieres relajarte pulsa en Reproduce música."

				/>
				
				<Cronometer />
				
			</ animated.div>
	);
	*/
	<animated.div style={springProps}>
	<div className="Bottom">
		<h1> </h1>
  <Tabs />
	</div>
	</animated.div>
	);
}

export default App;




