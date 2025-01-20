import Footer from '@/app/(components)/footer'
import { NavBar } from '@/components/navbar'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
//import AuthProvider from '@/components/provider/authProvider'

export const metadata: Metadata = {
  title: 'Vittorio Morellini',
  description: 'Developed by Vittorio Morellini',
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://portfolio-vittoriomorellini.vercel.app",
    siteName: "Personal site",
    images: [
        {
            url: "",
            alt: "",
            height: 1920,
            width: 1080,
            type: "image/png",
        },
    ],
  },
  twitter: {
      card: "summary",
      site: "",
      title: "Portfolio Vittorio Morellini",
  }        
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const [showMobileNav, setShowMobileNav] = useState(false);
  let showMobileNav: boolean = false
  const toggleShowMobileNav = (open: boolean) => {
    showMobileNav = open
  }

  return (
    <>
      <html lang="en">
        <body>            
          <div className='h-full'>
            <NavBar show={showMobileNav} />
            <div className="flex pb-8 pt-8 h-[calc(100%-160px)]">
                <Toaster position='top-center'/>
                <div className="w-full mx-4"> 
                    {children}
                </div>
            </div>
            <footer className="flex bg-gradient-to-tr from-cyan-100 to-cyan-500 items-center justify-center w-full h-20">
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </>
  )
}
