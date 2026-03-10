import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const adwaitaSans = localFont({
  src: "../fonts/AdwaitaSans-Regular.ttf",
  variable: "--font-adwaita-sans",
});

export const metadata: Metadata = {
  title: "Portfolio - Carsten Lund",
  description:
    "A website to display my personal portfolio based on my starred GitHub repositories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${adwaitaSans.className} ${sourceSerif.variable} antialiased font-serif`}
      >
        <header className="antialiased mb-6 mx-auto border-b border-accent pb-6 md:pb-0">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <div className="text-2xl font-bold py-6 text-center md:text-left md:py-12">
              Carsten Lund
            </div>
            <nav className="flex gap-6 md:gap-10 self-center">
              <Link className="font-medium" href="/">
                Home
              </Link>
              <Link className="font-medium" href="/my-projects">
                My Projects
              </Link>
              <Link className="font-medium" href="/about-me">
                About me
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
