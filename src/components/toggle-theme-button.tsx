import { memo } from "react";
import { useThemeContext } from "../context/theme";

export const ToggleThemeButton: React.FC = memo(() => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
    >
      {theme === "light" ? "다크 모드" : "라이트 모드"}
    </button>
  );
});
