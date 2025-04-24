import Link from "next/link"
import ThemeSwitcher from "@/components/theme-switcher"
import ExampleComponent from "@/components/ExampleComponent"

import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={`${styles.container} bg-background text-foreground`}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>School Management System</h1>
        <ThemeSwitcher />
      </div>

      {/* Card grid */}
      <div className={styles.grid}>
        <Link href="/kalender">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Kalender</h2>
            <p className={styles.cardDescription}>Verwalte deine Events und Tests</p>
          </div>
        </Link>

        <Link href="/noten">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Noten</h2>
            <p className={styles.cardDescription}>Trage deine Noten ein und berechne deinen Schnitt</p>
          </div>
        </Link>

        <Link href="/module">
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Module</h2>
            <p className={styles.cardDescription}>Trage deine Noten ein und berechne deinen Schnitt</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
