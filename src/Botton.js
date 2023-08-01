import React, { useState, useEffect, useRef } from 'react';
import "./App.css";
import "./Puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import { Audio } from "./Audio.js";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import mar from "./mar.jpg";

function Cronometer() {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [reward, setReward] = useState('');
	const [star1, setStar1] = useState('');
	const [star2, setStar2] = useState('');
	const [star3, setStar3] = useState('');
	
	const [isRunning, setIsRunning] = useState(false);
	const [elapsedTime, setElapsedTime] = useState(0);
	const intervalRef = useRef(null);

	const [filas, searchfilas] = useState('');
	const [columnas, searchcolumnas] = useState('');
	const [text, setText] = useState("Comienza el puzzle");

	const set = () => {
		setText("Puzzle completado");
		if (isRunning) {
			clearInterval(intervalRef.current);
			setIsRunning(false);
		}
		setIsActive(false);

		if (seconds >= 5 && seconds <= 9) {
			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2(star2 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar3(star3 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');

		}
		else if (seconds >= 10 && seconds <= 14) {

			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2(star2 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar3('');
		}
		else if (seconds >= 15 && seconds <= 20) {

			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2('');
			setStar3('');
		}
		else if (seconds > 20) {
			setReward('PUNTUACIÓN: Debes mejorar ');

			setStar1('');
			setStar2('');
			setStar3('');
		}

	};

	useEffect(() => {
		let intervalId = null;

		if (isActive) {
			intervalId = setInterval(() => {
				setSeconds((seconds) => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(intervalId);
		}
		return () => clearInterval(intervalId);
	}, [isActive, seconds]);

	const handleStart = () => {
		setIsActive(true);
		if (!isRunning) {
			const startTime = Date.now() - elapsedTime;
			intervalRef.current = setInterval(() => {
				const elapsedTime = Date.now() - startTime;
				setElapsedTime(elapsedTime);
			}, 10);
			setIsRunning(true);
		}

	};

	const handlePause = () => {
		if (isRunning) {
			clearInterval(intervalRef.current);
			setIsRunning(false);
		}
		setIsActive(false);
		if (seconds >= 5 && seconds <= 9) {
			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2(star2 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar3(star3 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');

		}
		else if (seconds >= 10 && seconds <= 14) {

			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2(star2 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar3('');
		}
		else if (seconds >= 15 && seconds <= 20) {

			setReward('PUNTUACIÓN: ');

			setStar1(star1 === '\uD83C\uDFC6' ? '\u2606' : '\uD83C\uDFC6');
			setStar2('');
			setStar3('');
		}
		else if (seconds > 20) {
			setReward('PUNTUACIÓN: Debes mejorar ');

			setStar1('');
			setStar2('');
			setStar3('');
		}
	};

	const handleReset = () => {
		clearInterval(intervalRef.current);
		setIsRunning(false);
		setElapsedTime(0);
		setIsActive(false);
		setSeconds(0);
		setReward('');
		setStar1('');
		setStar2('');
		setStar3('');

	};
	function formatTime(time) {
		const minutes = Math.floor(time / 60000);
		const seconds = Math.floor((time - minutes * 60000) / 1000);
		const milliseconds = Math.floor((time - minutes * 60000 - seconds * 1000) / 10);



		return `${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds)}`;

	}

	function padZero(num) {
		return num.toString().padStart(2, "0");
	}
	

	return (
		<div >

			<form>

				<p id="filas"><label>Ingresa número de filas: </label>
					<input type="text" name="filas" size="4" onChange={ev => searchfilas(ev.target.value)
					} /> </p>

				<p id="columnas"><label> Ingresa número de columnas: </label>
					<input type="text" name="columnas=" size="4" onChange={ev => searchcolumnas(ev.target.value)
					} /> </p>

				<p>Filas: {filas}</p>
				<p>Columnas: {columnas}</p>
			</form>

			<h2 className="tag">{text}</h2>
			<div className="crono">
				<div> <b>{formatTime(elapsedTime)} </b></div>
				<button id="comenzar" onClick={handleStart}>Start</button>
				<button id="parar" onClick={handlePause}>Stop</button>
				<button id="reset" onClick={handleReset}>Reset</button>
				<Audio></Audio>
				<p>
					<b>

						{reward}
					</b>
				</p>
			</div>

			<div className="star">
				{star1} {star2} {star3}
			</div>
			
   
			<JigsawPuzzle
				imageSrc={mar}
				rows={filas}
				columns={columnas}
				onSolved={set}
				className="jigsaw-puzzle"

			/>
		</div>
	);
}

export { Cronometer };
