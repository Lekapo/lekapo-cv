import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lekapo - CV',
  description: 'Lekapo CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="bg-brutal-blue dark:bg-black dark:text-white" className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
