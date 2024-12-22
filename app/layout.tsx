import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CodeAnt AI",
  description: "AI-powered code review and security platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

