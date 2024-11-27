import * as React from "react";
import Card from "./Card";
import data from "@/data/data.json";
var getUserCountByRole = function (roleId) {
    return data.users.filter(function (user) {
        return user.roles.includes(roleId);
    }).length;
};
var Cards = function () {
    return (React.createElement("div", { className: "p-2 px-5 overflow-x-scroll flex gap-3 scrollbar" }, data.roles.map(function (role) { return (React.createElement(Card, { key: role.id, userCount: getUserCountByRole(role.id), roles: role.name, permissionCount: role.permissions.length })); })));
};
export default Cards;
