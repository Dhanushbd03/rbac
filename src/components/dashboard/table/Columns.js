import React, { useState } from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
var getRandomColor = function () {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
export var columns = [
    {
        accessorKey: "name",
        header: function () { return React.createElement("div", { className: "mx-auto w-fit" }, "Names"); },
        cell: function (_a) {
            var row = _a.row;
            var users = row.original;
            return (React.createElement("div", { className: "flex justify-center items-center gap-3" },
                React.createElement("div", { className: "flex items-center gap-3 w-40" },
                    React.createElement(Avatar, { className: "justify-self-start" },
                        React.createElement(AvatarImage, { src: "https://i.pravatar.cc/300?u=".concat(users.id) }),
                        React.createElement(AvatarFallback, null, "CN")),
                    React.createElement("p", null, users.name))));
        },
    },
    {
        accessorKey: "roles",
        header: function () { return React.createElement("div", { className: "mx-auto w-fit" }, "Roles"); },
        cell: function (_a) {
            var row = _a.row;
            var users = row.original;
            // Split roles and apply random colors
            return (React.createElement("div", { className: "flex justify-center" }, users.roles.split(",").map(function (role, index) {
                var color = getRandomColor(); // Get a random color for each role
                return (React.createElement("span", { key: index, className: "bg-primary   text-white rounded-full px-2 py-1 m-1" }, role));
            })));
        },
    },
    {
        accessorKey: "lastLogin",
        header: function () { return React.createElement("div", { className: "mx-auto w-fit" }, "Last Login"); },
        cell: function (_a) {
            var row = _a.row;
            var users = row.original;
            var lastLogin = "".concat(new Date(users.lastLogin).toLocaleDateString(), " ").concat(new Date(users.lastLogin).toLocaleTimeString());
            return React.createElement("div", { className: "flex justify-center" }, lastLogin);
        },
    },
    {
        accessorKey: "status",
        header: function () { return React.createElement("div", { className: "mx-auto w-fit" }, "Status"); },
        cell: function (_a) {
            var row = _a.row, column = _a.column;
            var users = row.original;
            var _b = useState(users.status), status = _b[0], setStatus = _b[1];
            return (React.createElement("div", { className: "flex justify-center" },
                React.createElement(Switch, { checked: status, onClick: function () {
                        setStatus(!status);
                    } })));
        },
    },
    {
        id: "actions",
        header: function () { return React.createElement("div", { className: "mx-auto w-fit" }, "Actions"); },
        cell: function (_a) {
            var row = _a.row;
            var users = row.original;
            return (React.createElement("div", { className: "flex justify-center" },
                React.createElement(Button, { variant: "custom" },
                    React.createElement(Edit, { size: 16 }))));
        },
    },
];
