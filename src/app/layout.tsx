import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Furniture Site',
  description: 'Figma to code prac',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-black text-white ${mont.className}`}>{children}</body>
    </html>
  )
}
