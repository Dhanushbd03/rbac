import React, { JSXElementConstructor } from "react";

type Props = {
	title: string;
};

const Title = ({ title }: Props): JSX.Element => {
	return (
		<div>
			<h1 className="text-2xl font-semibold p-5">{title}</h1>
		</div>
	);
};

export default Title;
