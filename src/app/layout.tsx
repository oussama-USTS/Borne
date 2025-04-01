import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valeo - Demo',
  description: 'Démonstration du projet Valeo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
} 