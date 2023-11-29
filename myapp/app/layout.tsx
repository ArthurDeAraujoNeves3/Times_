import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Times',
  description: 'Gerencie o seu tempo com times.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body >{children}</body>
    </html>
  )
}
