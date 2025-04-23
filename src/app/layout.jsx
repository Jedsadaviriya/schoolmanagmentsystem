import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/themes.css';
import { ThemeProvider } from '../components/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'School Management System',
  description: 'Manage your school events and grades',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <ThemeProvider>
          <header className="bg-primary-500 text-primary-foreground p-4">
            <h1 className="text-2xl font-bold">SMS</h1>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}