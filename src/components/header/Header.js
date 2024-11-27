import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell } from "lucide-react";
// import profile from "@/assets/logo.png";
var Header = function () {
    return (React.createElement("div", { className: "flex py-5 w-full items-center px-2 " },
        React.createElement(SidebarTrigger, { className: "bg-primary hover:bg-primary/70 text-white hover:text-white dark:bg-primary dark:hover:bg-primary/70 " }),
        React.createElement("h1", { className: "text-2xl ml-10 !font-bold" }, "Users"),
        React.createElement("div", { className: "ml-auto border-2 p-2 rounded-xl hover:bg-secondary" },
            React.createElement(Bell, null),
            React.createElement("img", { src: "profile", alt: "", className: "" }))));
};
export default Header;
