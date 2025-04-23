"use client"

import Link from "next/link"
import ThemeSwitcher from "@/components/theme-switcher"
import ExampleComponent from "@/components/ExampleComponent"

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-background text-foreground min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary-500">School Management System</h1>
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <Link href="/kalender" className="flex-1">
          <div className="bg-content1 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-secondary-500">
            <h2 className="text-xl font-semibold text-primary-500 mb-2">Kalender</h2>
            <p className="text-foreground">Verwalte deine Events und Tests</p>
          </div>
        </Link>
        <Link href="/noten" className="flex-1">
          <div className="bg-content1 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow border-l-4 border-primary-500">
            <h2 className="text-xl font-semibold text-secondary-500 mb-2">Noten</h2>
            <p className="text-foreground">Trage deine Noten ein und berechne deinen Schnitt</p>
          </div>
        </Link>
      </div>

      <ExampleComponent />
    </div>
  )
}
