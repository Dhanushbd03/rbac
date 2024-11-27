import { useState } from "react";
import * as React from "react";
const getRandomColor = () => {
	const randomValue = () => Math.floor(Math.random() * 256); // Random value between 0 and 255
	return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};

const RandomColorDot = () => {
	const [color, setColor] = useState(getRandomColor());

	const handleClick = () => {
		setColor(getRandomColor()); // Generate a new color on click
	};

	return (
		<div
			onClick={handleClick}
			className={`size-2 rounded-full cursor-pointer`}
			style={{
				backgroundColor: color,
			}}></div>
	);
};

export default RandomColorDot;
