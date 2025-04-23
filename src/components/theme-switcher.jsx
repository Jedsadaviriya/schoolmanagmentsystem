"use client"

import { useTheme } from "@/components/theme-provider"
// Wir verwenden SVG direkt statt Lucide-React
// Keine externen Abhängigkeiten nötig

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2 bg-content1 p-2 rounded-lg">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md ${
          theme === "light"
            ? "bg-secondary-500 text-secondary-foreground"
            : "text-content1-foreground hover:bg-content2"
        }`}
        aria-label="Light mode"
      >
        {/* Sun Icon als SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md ${
          theme === "dark" ? "bg-secondary-500 text-secondary-foreground" : "text-content1-foreground hover:bg-content2"
        }`}
        aria-label="Dark mode"
      >
        {/* Moon Icon als SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>
    </div>
  )
}
