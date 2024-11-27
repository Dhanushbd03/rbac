var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Search } from "lucide-react";
import * as React from "react";
import { Label } from "@/components/ui/label";
import { SidebarGroup, SidebarGroupContent, SidebarInput, } from "@/components/ui/sidebar";
export function SearchForm(_a) {
    var props = __rest(_a, []);
    return (React.createElement("form", __assign({}, props),
        React.createElement(SidebarGroup, { className: "py-0" },
            React.createElement(SidebarGroupContent, { className: "relative" },
                React.createElement(Label, { htmlFor: "search", className: "sr-only" }, "Search"),
                React.createElement(SidebarInput, { id: "search", placeholder: "Search the docs...", className: "pl-8" }),
                React.createElement(Search, { className: "pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" })))));
}
