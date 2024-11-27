import React from "react";
import { RotateCcw } from "lucide-react";
var ShowFrom = function (_a) {
    var from = _a.from, to = _a.to, reload = _a.reload;
    return (React.createElement("div", { className: "px-5 flex  items-center gap-2" },
        React.createElement("p", { className: "" },
            "Show ",
            from,
            " - ",
            to),
        React.createElement(RotateCcw, { className: "hover:text-primary hover:scale-95 transition-all duration-300", onClick: function () {
                reload;
            } })));
};
export default ShowFrom;
