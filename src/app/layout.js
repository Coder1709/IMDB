import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MDB-Movie Database',
  description: 'A Movie Database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Providers>

      {/*Header*/}
      <Header />

      {/*Navbar*/}
      <Navbar/>

      {/*Searchbox*/}


      {children}
      </Providers>
      </body>
    </html>
  )
}
