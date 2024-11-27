import * as React from "react";
import Title from "./Title";
import ShowFrom from "./ShowFrom";
import Search from "./Search";
import AssignRoles from "./AssignRoles";
import { DataTable } from "./table/data-table";
import { columns } from "./table/Columns";
import data from "@/data/data.json";
// Function to transform usersData
var usersData = data.users;
var rolesMap = new Map(data.roles.map(function (role) { return [role.id, role.name]; }));
var users = usersData.map(function (user) { return ({
    id: user.id,
    name: user.name,
    roles: user.roles
        .map(function (roleId) { return rolesMap.get(roleId) || "Unknown"; })
        .join(", "), // Map each role ID to its name
    lastLogin: user.lastLogin,
    status: user.status,
}); });
var Dashboard = function () {
    var _a = React.useState(0), refreshKey = _a[0], setRefreshKey = _a[1];
    // Function to handle refresh
    var refreshDashboard = function () {
        // Incrementing refreshKey will force a re-render of the ShowFrom component
        setRefreshKey(function (prevKey) { return prevKey + 1; });
    };
    return (React.createElement("div", { className: "px-5" },
        React.createElement("div", { className: "border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3 min-w-80 bg-secondary" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement(Title, { title: "User Access" }),
                React.createElement(ShowFrom, { key: refreshKey, from: 1, to: 20, reload: refreshDashboard })),
            React.createElement("div", { className: "flex" },
                React.createElement(Search, null),
                React.createElement(AssignRoles, null)),
            React.createElement(DataTable, { columns: columns, data: users }))));
};
export default Dashboard;
