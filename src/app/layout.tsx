import type { Metadata } from 'next'
import './globals.css'
import clsx from 'clsx'
import Header from './ui/header'
import { GeistSans } from 'geist/font'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(
        "bg-gray-50",
        GeistSans.className
      )}>
        <Header />
        {children}
      </body>
    </html>
  )
}
