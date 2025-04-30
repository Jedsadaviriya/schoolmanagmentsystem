"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const AnimationContext = createContext({
  isPageLoaded: false,
  isNavigating: false,
  previousPath: null,
  currentPath: null,
})

export function AnimationProvider({ children }) {
  const pathname = usePathname()
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const [previousPath, setPreviousPath] = useState(null)
  const [currentPath, setCurrentPath] = useState(null)

  // Handle initial page load animation
  useEffect(() => {
    if (!isPageLoaded) {
      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setIsPageLoaded(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPageLoaded])

  // Handle page transitions
  useEffect(() => {
    if (currentPath && pathname !== currentPath) {
      setPreviousPath(currentPath)
      setIsNavigating(true)

      // Reset navigation state after animation completes
      const timer = setTimeout(() => {
        setIsNavigating(false)
      }, 800) // Match this with your transition duration

      return () => clearTimeout(timer)
    }

    setCurrentPath(pathname)
  }, [pathname, currentPath])

  return (
    <AnimationContext.Provider value={{ isPageLoaded, isNavigating, previousPath, currentPath }}>
      <div className={`app-container ${isPageLoaded ? "app-loaded" : ""}`}>{children}</div>
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)
