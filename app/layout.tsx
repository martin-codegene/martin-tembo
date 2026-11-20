import type { Metadata } from "next";
import { Fira_Code, JetBrains_Mono, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Martin Tembo — Full Stack Engineer",
  description: "I'm Martin Tembo, a Full Stack Developer specializing in Next.js, TypeScript, and Cloud Architecture. I craft robust applications ranging from AI-powered SaaS platforms to enterprise-grade management systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${firaCode.variable} ${outfit.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
