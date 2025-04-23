// src/components/ThemeSwitcher.jsx
'use client';

import { useTheme } from './ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-secondary-500 text-secondary-foreground rounded hover:bg-secondary-600"
    >
      Wechsel zu {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}