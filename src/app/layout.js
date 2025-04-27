import './globals.css'
import { Caudex } from 'next/font/google'

const caudex = Caudex({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold weights
})

export const metadata = {
  title: 'I R O N D O M E',
  description: 'Your gateway to amazing services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={caudex.className}>
        {children}
      </body>
    </html>
  )
}
