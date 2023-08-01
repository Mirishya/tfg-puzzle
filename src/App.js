import React from "react";
import "./App.css";
import { useSpring, animated } from 'react-spring';
import Tabs from "./Tabs.js";
//import { BrowserRouter, Navigate, Link,Route } from 'react-router-dom';


function App() {

	const springProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 3000 },
	});

	return (
	<animated.div style={springProps}>
	<div>
	
  <Tabs />
	</div>
	</animated.div>
	);
}

export default App;




