import React from "react";
import data from "@/data/data.json";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
const AssignRoles = () => {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-60">
					<SelectValue
						className="text-white"
						placeholder={`Assign Roles`}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={`All`}>{`All`}</SelectItem>

					{data.roles.map((role) => (
						<SelectItem key={role.id}value={role.name}>{role.name}</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};

export default AssignRoles;
