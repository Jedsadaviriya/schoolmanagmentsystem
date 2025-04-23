'use client';

import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ExampleComponent from '../components/ExampleComponent';

export default function Home() {
  return (
    <div className="container mx-auto p-4 bg-background text-foreground min-h-screen">
      <div className="flex justify-end mb-4">
        <ThemeSwitcher />
      </div>
      <h1 className="text-2xl font-bold mb-4 text-primary-500">School Management System</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Link href="/kalender" className="flex-1">
          <div className="bg-content1 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-content1-foreground">Kalender</h2>
            <p className="text-default-700">Verwalte deine Events und Tests</p>
          </div>
        </Link>
        <Link href="/noten" className="flex-1">
          <div className="bg-content1 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-content1-foreground">Noten</h2>
            <p className="text-default-700">Trage deine Noten ein und berechne deinen Schnitt</p>
          </div>
        </Link>
      </div>
      <ExampleComponent />
    </div>
  );
}