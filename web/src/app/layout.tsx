import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const headingFont = Noto_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Inter({
  variable: "--font-body-base",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alarynt",
  description: "We turn your company's data chaos into a system that actually works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-surface text-on-surface`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
