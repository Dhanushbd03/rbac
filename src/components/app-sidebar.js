import * as React from "react";
import { Home, User } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, } from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";
// Menu items.
var items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Users",
        url: "#",
        icon: User,
    },
];
var AppSidebar = function () {
    return (React.createElement(Sidebar, { className: "bg-secondary rounded-r-3xl" },
        React.createElement(SidebarHeader, { className: "py-0 border-b-2" },
            React.createElement(Logo, null)),
        React.createElement(SidebarContent, null,
            React.createElement(SearchForm, { className: "pt-5" }),
            React.createElement(SidebarGroup, null,
                React.createElement(SidebarGroupContent, null,
                    React.createElement(SidebarMenu, { className: "gap-2" }, items.map(function (item) { return (React.createElement(SidebarMenuItem, { key: item.title, className: "hover:bg-primary rounded-xl hover:text-white" },
                        React.createElement(SidebarMenuButton, { asChild: true, className: "gap-2" },
                            React.createElement("a", { href: item.url, className: "[&>svg]:!size-6 !h-14 " },
                                React.createElement(item.icon, null),
                                React.createElement("span", null, item.title))))); }))))),
        React.createElement(SidebarFooter, null,
            React.createElement(ModeToggle, { className: "bg-primary hover:bg-primary/70 text-white hover:text-white dark:bg-primary dark:hover:bg-primary/70 border-0" }))));
};
export { AppSidebar };
