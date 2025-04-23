"use client"

import { createContext, useContext, useEffect, useState } from "react"

const initialState = {
  theme: "dark",
  setTheme: () => null,
}

const ThemeProviderContext = createContext(initialState)

export function ThemeProvider({ children, storageKey = "theme", ...props }) {
  const [theme, setTheme] = useState("dark")

  // Initialize theme based on system preference or stored preference
  useEffect(() => {
    // Sicherstellen, dass der Code nur im Browser ausgeführt wird
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem(storageKey)

      if (storedTheme) {
        setTheme(storedTheme)
      } else {
        // Check system preference
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        setTheme(systemTheme)
      }
    }
  }, [storageKey])

  useEffect(() => {
    // Sicherstellen, dass der Code nur im Browser ausgeführt wird
    if (typeof window !== "undefined") {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
