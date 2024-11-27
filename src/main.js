import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/themeProvider";
createRoot(document.getElementById("root")).render(React.createElement(React.StrictMode, null,
    React.createElement(ThemeProvider, { defaultTheme: "dark", storageKey: "vite-ui-theme" },
        React.createElement(App, null))));
