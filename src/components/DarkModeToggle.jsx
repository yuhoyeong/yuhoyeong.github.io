import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DarkModeToggle() {
  const { toggleDarkMode, isDarkMode } = use(ThemeContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
          outline: "none",
          padding: "10px 20px",
          fontWeight: "bold",
          fontSize: "1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "all 0.2s",
        }}
      >
        {isDarkMode ? "라이트 모드" : "다크 모드"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
