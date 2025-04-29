"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./page.module.css"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const cards = [
    {
      title: "Kalender",
      description: "Verwalte deine Events und Tests",
      href: "/kalender",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.cardIcon}
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      title: "Noten",
      description: "Trage deine Noten ein und berechne deinen Schnitt",
      href: "/noten",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.cardIcon}
        >
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      ),
    },
    {
      title: "Module",
      description: "Verwalte deine Module und Kurse",
      href: "/module",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.cardIcon}
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      ),
    },
  ]

  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ""}`}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>School Management System</h1>
          <p className={styles.heroDescription}>Verwalte deine schulischen Aktivitäten einfach und effizient</p>
        </div>
        <div className={styles.heroGraphic}>
          <div className={styles.graphicElement}></div>
          <div className={styles.graphicElement}></div>
          <div className={styles.graphicElement}></div>
        </div>
      </div>

      <div className={`${styles.grid} stagger-animation ${isLoaded ? "animate" : ""}`}>
        {cards.map((card, index) => (
          <Link
            href={card.href}
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={`${styles.card} card-hover ${activeCard === index ? styles.activeCard : ""}`}>
              <div className={styles.cardIconWrapper}>{card.icon}</div>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.cardArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
