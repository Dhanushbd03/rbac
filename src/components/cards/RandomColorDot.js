import { useState } from "react";
import * as React from "react";
var getRandomColor = function () {
    var randomValue = function () { return Math.floor(Math.random() * 256); }; // Random value between 0 and 255
    return "rgb(".concat(randomValue(), ", ").concat(randomValue(), ", ").concat(randomValue(), ")");
};
var RandomColorDot = function () {
    var _a = useState(getRandomColor()), color = _a[0], setColor = _a[1];
    var handleClick = function () {
        setColor(getRandomColor()); // Generate a new color on click
    };
    return (React.createElement("div", { onClick: handleClick, className: "size-2 rounded-full cursor-pointer", style: {
            backgroundColor: color,
        } }));
};
export default RandomColorDot;
