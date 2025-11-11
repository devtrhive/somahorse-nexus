import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Somahorse Nexus',
  description: 'Front-End Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  )
}

