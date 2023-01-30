import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
interface Children {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Children) {
  return (
    <html>
      <head />
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
