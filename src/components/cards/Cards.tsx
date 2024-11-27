import * as React from "react";
import Card from "./Card";
import data from "@/data/data.json";
interface User {
	id: number;
	name: string;
	roles: number[];
}

interface Data {
	users: User[];
}

const getUserCountByRole = (roleId: number): number => {
	return (data as Data).users.filter((user: User) =>
		user.roles.includes(roleId)
	).length;
};

const Cards = ():JSX.Element => {
	return (
		<div className="p-2 px-5 overflow-x-scroll flex gap-3 scrollbar">
			{data.roles.map((role) => (
				<Card
					key={role.id}
					userCount={getUserCountByRole(role.id)}
					roles={role.name}
					permissionCount={role.permissions.length}
				/>
			))}
			
		</div>
	);
};

export default Cards;
