import './globals.css'
import { Inter } from 'next/font/google'

import bgSwissMovement from "public/backgrounds/bg_swiss_movement.mp4"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HUROS',
  description: 'Timepiece Ownership Redefined',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className='scrollbar bg-huros-bg-gray-1 '>{children}</body>
    </html>
  )
}
