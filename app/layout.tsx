"use client"
import Footer from '@/components/footer'
import { NavBar } from '@/components/navbar'
import SEO from '@/components/SEO'
import { Box } from '@mui/material'
import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <RecoilRoot>
      <html lang="en">
        <SEO />
        <body>            
          <Box className='h-full'>
            <NavBar show={showMobileNav} onChangeVisibility={setShowMobileNav} />
            <div className="flex pb-8 pt-8 h-[calc(100%-160px)]">
                <div className="w-full mx-4"> 
                    {children}
                </div>
            </div>
          </Box>
          <footer className="flex bg-gradient-to-tr from-yellow-200 to-yellow-600 items-center justify-center w-full" style={{flex: 1, height: '80px'}}>
            <Footer />
          </footer>
        </body>
      </html>
    </RecoilRoot>
  )
}
