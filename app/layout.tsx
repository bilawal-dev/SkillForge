import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Skill Forge',
  description: 'SkillForge - Creates personalized learning paths by recommending courses based on skills, career and goals.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}