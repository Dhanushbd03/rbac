import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/themeProvider";
export function ModeToggle(_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, setTheme = _b.setTheme; // Ensure you're accessing `theme` to toggle it dynamically.
    // Function to toggle between dark and light modes.
    var toggleTheme = function () {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (React.createElement(Button, { variant: "outline", size: "icon", onClick: toggleTheme, className: className },
        React.createElement(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
        React.createElement(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
        React.createElement("span", { className: "sr-only" }, "Toggle theme")));
}
