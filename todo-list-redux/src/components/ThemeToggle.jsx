import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const toggleTheme = () => {
        const body = document.body;
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
        }
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;
