import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Image Keeper',
  description: 'By webtensei. Hosted on webtensei.ru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*className='dark' on html*/}
      <body className={font.className}>{children}</body>
    </html>
  )
}
