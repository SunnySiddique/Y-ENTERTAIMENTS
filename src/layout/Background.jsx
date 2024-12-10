import { strokeColors } from "../constants";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { theme } = useTheme();

  const strokeColor = strokeColors[theme] || strokeColors.dark;

  return (
    <div className="absolute inset-0 z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default Background;
