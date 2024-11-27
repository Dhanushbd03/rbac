import React, { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

// Define User Type
export type Users = {
	id: number;
	name: string;
	roles: string;
	lastLogin: string;
	status: boolean;
};

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export const columns: ColumnDef<Users>[] = [
	{
		accessorKey: "name",
		header: () => <div className="mx-auto w-fit">Names</div>,
		cell: ({ row }) => {
			const users = row.original;
			return (
				<div className="flex justify-center items-center gap-3">
					<div className="flex items-center gap-3 w-40">
						<Avatar className="justify-self-start">
							<AvatarImage src={`https://i.pravatar.cc/300?u=${users.id}`} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<p>{users.name}</p>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "roles",
		header: () => <div className="mx-auto w-fit">Roles</div>,
		cell: ({ row }) => {
			const users = row.original;

			// Split roles and apply random colors
			return (
				<div className="flex justify-center">
					{users.roles.split(",").map((role, index) => {
						const color = getRandomColor(); // Get a random color for each role
						return (
							<span
								key={index}
								className={`bg-primary   text-white rounded-full px-2 py-1 m-1`}>
								{role}
							</span>
						);
					})}
				</div>
			);
		},
	},
	{
		accessorKey: "lastLogin",
		header: () => <div className="mx-auto w-fit">Last Login</div>,
		cell: ({ row }) => {
			const users = row.original;
			const lastLogin = `${new Date(users.lastLogin).toLocaleDateString()} ${new Date(users.lastLogin).toLocaleTimeString()}`;
			return <div className="flex justify-center">{lastLogin}</div>;
		},
	},
	{
		accessorKey: "status",
		header: () => <div className="mx-auto w-fit">Status</div>,
		cell: ({ row, column }) => {
			const users = row.original;
			const [status, setStatus] = useState(users.status);

			return (
				<div className="flex justify-center">
					<Switch
						checked={status}
						onClick={() => {
							setStatus(!status);
						}}
					/>
				</div>
			);
		},
	},
	{
		id: "actions",
		header: () => <div className="mx-auto w-fit">Actions</div>,
		cell: ({ row }) => {
			const users = row.original;

			return (
				<div className="flex justify-center">
					<Button variant="custom">
						<Edit size={16} />
					</Button>
				</div>
			);
		},
	},
];
