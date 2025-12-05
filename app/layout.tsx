import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leslies Pariona Vargas - Psicóloga',
  description: 'Psicóloga especialista en psicoeducación emocional. Regulación emocional, acompañamiento psicológico y psicoeducación para jóvenes y adultos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
