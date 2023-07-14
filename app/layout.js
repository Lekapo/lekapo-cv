import './globals.css'
import { Darker_Grotesque, VT323 } from 'next/font/google'
import { Navigation} from '@/components'

const darkerGrotesque = Darker_Grotesque({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const vt323 = VT323({ 
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Lekapo - CV',
  description: 'Lekapo CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={darkerGrotesque.className}>
      <body class="bg-orangeyellow dark:bg-black dark:text-white">
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
