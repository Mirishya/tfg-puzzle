import React from "react";
import "./Puzzle.css";
import { Cronometer } from "./Cronometer.js"
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useSpring,animated} from 'react-spring';
import Card from "./Card.jsx";
import mar2 from "./mar2.jpg";

function Puzzle() {

	const springProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 4000 },
	});

	return (
		<animated.div style={springProps}>
        	<div className="Puzzle">
				<Card
					image={mar2}
					title="Puzzle"
					description="REGLAS: Determina número de filas y columnas, cuando estés listo pulsa Start. 
					En cuanto finalices el puzzle podrás ver tu Puntuación. Si quieres relajarte pulsa en Reproduce música, y si necesitas un poco de ayuda, haz click en Pista."

				/>
				<Cronometer />
			</div>
		</animated.div>
	);
}

export default Puzzle;