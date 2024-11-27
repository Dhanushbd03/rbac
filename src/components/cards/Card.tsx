import * as React from "react";
import { Settings, Lock } from "lucide-react";
import RandomColorDot from "./RandomColorDot";

type Props = {
	userCount: number; // Number of users
	roles: string; // Role name
	permissionCount: number; // Number of permissions
};

const Card = ({ userCount, roles, permissionCount }): JSX.Element => {
	return (
		<div className="max-w-sm p-6 border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3 min-w-80 bg-secondary ">
			{/* Header */}
			<div className="flex justify-between dark:text-gray-500 items-center">
				<h3>{userCount} users</h3>
				<Settings className="border size-8 rounded-sm p-1" />
			</div>

			{/* Role */}
			<h1 className="font-bold text-xl">{roles}</h1>

			{/* Permissions */}
			<div className="flex flex-wrap justify-center items-center w-fit border dark:text-gray-500 rounded-sm p-1 space-x-2">
				<Lock className="size-5 p-1" />
				<p className="text-left text-xs">Permissions</p>
				{Array.from({ length: permissionCount }).map((_, index) => (
					<RandomColorDot key={index} />
				))}
			</div>
		</div>
	);
};

export default Card;
