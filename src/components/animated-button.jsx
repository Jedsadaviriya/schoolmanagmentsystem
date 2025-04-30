"use client"

import { useState } from "react"
import styles from "./animated-button.module.css"

export default function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  className = "",
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true)
  }

  const handleMouseUp = () => {
    if (!disabled) setIsPressed(false)
  }

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e)
  }

  return (
    <button
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${isPressed ? styles.pressed : ""} 
        ${disabled ? styles.disabled : ""}
        ${className}
      `}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      disabled={disabled}
      {...props}
    >
      <span className={styles.content}>{children}</span>
    </button>
  )
}
