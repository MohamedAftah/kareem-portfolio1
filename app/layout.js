import '../styles/globals.css';
import ProgrammingSpaceBackground from '../components/ProgrammingSpaceBackground';
import Navbar from '../components/Navbar';
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: 'Kareem Ibrahim | Portfolio',
  description: 'Software Engineer | Backend Developer — Kareem Ibrahim Mahmoud',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  keywords: [
    "Kareem Ibrahim",
    "Software Engineer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Programming",
    ".net",
    "C#",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProgrammingSpaceBackground />
        <Navbar />
        <Analytics />
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}