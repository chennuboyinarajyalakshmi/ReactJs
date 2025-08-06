import { useContext } from "react";
import { ThemeContext } from "./CreateContext";


export default function ThemeHome() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "2rem",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h1>use contetxt api example</h1>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
