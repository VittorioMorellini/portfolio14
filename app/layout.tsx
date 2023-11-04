import Footer from '@/app/components/footer'
import { NavBar } from '@/components/navbar'
import SEO from '@/components/SEO'
//import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import { Metadata } from 'next'

export const metadata = {
  title: 'eCommerce Next.js App router',
  description: 'Developed by Vittorio Morellini',
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
        <SEO />
        <body>            
          <div className='h-full'>
            <NavBar show={showMobileNav} />
            <div className="flex pb-8 pt-8 h-[calc(100%-160px)]">
                <div className="w-full mx-4"> 
                    {children}
                </div>
            </div>
          </div>
          <footer className="flex bg-gradient-to-tr from-cyan-100 to-cyan-500 items-center justify-center w-full h-20">
            <Footer />
          </footer>
        </body>
      </html>
    </>
  )
}
