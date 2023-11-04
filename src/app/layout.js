import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MDB-Movie Database',
  description: 'A Movie Database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/*Header*/}
      <Header />

      {/*Navbar*/}

      {/*Searchbox*/}


      {children}
      </body>
    </html>
  )
}
