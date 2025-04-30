"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import styles from "./page-transition.module.css"

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (pathname !== displayChildren.props.pathname) {
      setTransitionStage("fadeOut")
      const timeout = setTimeout(() => {
        setDisplayChildren(children)
        setTransitionStage("fadeIn")
      }, 300) // This should match the CSS transition time

      return () => clearTimeout(timeout)
    }
  }, [pathname, children, displayChildren.props.pathname])

  return <div className={`${styles.pageTransition} ${styles[transitionStage]}`}>{displayChildren}</div>
}
