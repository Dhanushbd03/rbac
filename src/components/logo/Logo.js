import * as React from "react";
import logo from "@/assets/logo.png";
var Logo = function () {
    return (React.createElement("div", { className: "flex items-center gap-2 py-3   " },
        React.createElement("img", { src: logo, alt: "", className: "size-16" }),
        React.createElement("p", { className: "font-bold text-base" }, "Security and Facility Services")));
};
export default Logo;
