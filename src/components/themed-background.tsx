import { memo } from "../@lib";
import { useThemeContext } from "../context/theme";

export const ThemedBackground: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const { theme } = useThemeContext();
    console.log("ThemedBackground render", theme);
    return (
      <div
        className={`min-h-screen ${theme === "light" ? "bg-gray-100" : "bg-gray-900 text-white"}`}
      >
        {children}
      </div>
    );
  },
);
