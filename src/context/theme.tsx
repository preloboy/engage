import { createContext, useState } from "react";

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
});

const Theme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        </ThemeContext.Provider>
    )
}
export default Theme