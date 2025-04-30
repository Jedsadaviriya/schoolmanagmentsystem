import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { AnimationProvider } from "@/components/animation-provider"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AnimationProvider>
            <div className="page-wrapper">
              <Header />
              <main className="main-content">{children}</main>
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
