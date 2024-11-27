import * as React from "react";
import { Settings, Lock } from "lucide-react";
import RandomColorDot from "./RandomColorDot";
var Card = function (_a) {
    var userCount = _a.userCount, roles = _a.roles, permissionCount = _a.permissionCount;
    return (React.createElement("div", { className: "max-w-sm p-6 border border-primary rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-3 min-w-80 bg-secondary " },
        React.createElement("div", { className: "flex justify-between dark:text-gray-500 items-center" },
            React.createElement("h3", null,
                userCount,
                " users"),
            React.createElement(Settings, { className: "border size-8 rounded-sm p-1" })),
        React.createElement("h1", { className: "font-bold text-xl" }, roles),
        React.createElement("div", { className: "flex flex-wrap justify-center items-center w-fit border dark:text-gray-500 rounded-sm p-1 space-x-2" },
            React.createElement(Lock, { className: "size-5 p-1" }),
            React.createElement("p", { className: "text-left text-xs" }, "Permissions"),
            Array.from({ length: permissionCount }).map(function (_, index) { return (React.createElement(RandomColorDot, { key: index })); }))));
};
export default Card;
