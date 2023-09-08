import Navbar from '@/components/views/Navbar'
import './globals.css'

import { Bree_Serif } from 'next/font/google'
import Wrapper from '@/components/shared/Wrapper'

const inter = Bree_Serif({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Sahal Sooq',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
