import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Headers/page'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hassan Omar Mohamed',
  description: `hassan omar mohamed's portofolio`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>SOMPIC</title>
        <meta property="Auther" content="Hassan Omar Mohamed" />
      </Head>
      <body className={inter.className}>
    <Header/>

        {children}</body>
    </html>
  )
}
