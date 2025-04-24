import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "School Management System",
  description: "Manage your school events and grades",
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <header className="bg-primary-500 text-primary-foreground  shadow-md">
            <div >
              <h1 className="seitenTitel">SMS</h1>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
