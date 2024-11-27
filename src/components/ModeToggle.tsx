import { Moon, Sun } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/themeProvider";

export function ModeToggle({className}: {className?: string}) {
	const { theme, setTheme } = useTheme(); // Ensure you're accessing `theme` to toggle it dynamically.

	// Function to toggle between dark and light modes.
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={toggleTheme}
      className={className}
		>
			{/* Sun icon for light mode */}
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			{/* Moon icon for dark mode */}
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			{/* Accessibility label */}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
