import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { ColorModeScript } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Company Evaluation',
  description: 'Share anonymously about companies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
