import React from "react";
import data from "@/data/data.json";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
var AssignRoles = function () {
    return (React.createElement("div", null,
        React.createElement(Select, null,
            React.createElement(SelectTrigger, { className: "w-60" },
                React.createElement(SelectValue, { className: "text-white", placeholder: "Assign Roles" })),
            React.createElement(SelectContent, null,
                React.createElement(SelectItem, { value: "All" }, "All"),
                data.roles.map(function (role) { return (React.createElement(SelectItem, { key: role.id, value: role.name }, role.name)); })))));
};
export default AssignRoles;
