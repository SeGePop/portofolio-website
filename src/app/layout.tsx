import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from './Components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sergiu-George Pop | Web Developer Portfolio',
  description: 'Romanian Front-End Developer | Skilled in React.js, Node.js, Express.js, Bash, PostgreSQL, and More',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        
        {children}
        <footer style={{"font-size": "10px",'display':'flex', 'justify-content':'center'}}>
          Designed and Coded by Sergiu-George Pop
        </footer>
        </body>
    </html>
  );
}
