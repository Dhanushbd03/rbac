import React from "react";
import { RotateCcw } from "lucide-react";
interface Props {
	from: number;
	to: number;
	reload: () => void;
}

const ShowFrom = ({ from, to, reload }: Props): JSX.Element => {
	return (
		<div className="px-5 flex  items-center gap-2">
			<p className="">
				Show {from} - {to}
			</p>
			<RotateCcw
				className="hover:text-primary hover:scale-95 transition-all duration-300"
				onClick={() => {
					reload;
				}}
			/>
		</div>
	);
};

export default ShowFrom;
