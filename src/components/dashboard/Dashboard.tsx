import * as React from "react";
import Title from "./Title";
import ShowFrom from "./ShowFrom";
import Search from "./Search";
import AssignRoles from "./AssignRoles";
import { DataTable } from "./table/data-table";
import { columns } from "./table/Columns";
import data from "@/data/data.json";

interface User {
	id: number;
	name: string;
	roles: string; // Updated to hold multiple roles
	lastLogin: string;
	status: boolean;
	email: string;
}

// Function to transform usersData
const usersData = data.users;
const rolesMap = new Map(data.roles.map((role) => [role.id, role.name]));
const users: User[] = usersData.map((user) => ({
	id: user.id,
	name: user.name,
	email: user.email,
	roles: user.roles
		.map((roleId) => rolesMap.get(roleId) || "Unknown")
		.join(", "), // Map each role ID to its name
	lastLogin: user.lastLogin,
	status: user.status,
}));

const Dashboard = (): JSX.Element => {
	const [refreshKey, setRefreshKey] = React.useState(0);
	// Function to handle refresh
	const refreshDashboard = () => {
		// Incrementing refreshKey will force a re-render of the ShowFrom component
		setRefreshKey((prevKey) => prevKey + 1);
	};

	return (
		<div className="px-5">
			<div className="border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3 min-w-80 bg-secondary">
				<div className="flex items-center justify-between">
					<Title title={`User Access`} />
					<ShowFrom
						key={refreshKey} 
						from={1}
						to={20}
						reload={refreshDashboard} 
					/>
				</div>
				<div className="flex px-5 gap-2">
					<Search />
					<AssignRoles />
				</div>

				{/* table */}
				<DataTable
					columns={columns}
					data={users}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
