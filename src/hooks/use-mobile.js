import * as React from "react";
var MOBILE_BREAKPOINT = 768;
export function useIsMobile() {
    var _a = React.useState(undefined), isMobile = _a[0], setIsMobile = _a[1];
    React.useEffect(function () {
        var mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
        var onChange = function () {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return function () { return mql.removeEventListener("change", onChange); };
    }, []);
    return !!isMobile;
}