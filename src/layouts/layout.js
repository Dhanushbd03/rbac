import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar";
export default function Layout(_a) {
    var children = _a.children;
    return (React.createElement(SidebarProvider, null,
        React.createElement(AppSidebar, null),
        React.createElement("main", { className: "w-full" }, children)));
}
