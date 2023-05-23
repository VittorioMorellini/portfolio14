"use client"
import Footer from '@/components/footer'
import { NavBar } from '@/components/navbar'
import SEO from '@/components/SEO'
import { Box } from '@mui/material'
import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import { ToastProvider } from 'react-toast-notifications'

export const metadata = {
  title: 'eCommerce Next.js 13',
  description: 'Developed by Vittorio Morellini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
    <RecoilRoot>
      <html lang="en">
        <SEO />
        <body>            
          <Box className='h-full'>
            <NavBar show={showMobileNav} onChangeVisibility={setShowMobileNav} />
            <div className="flex pb-8 pt-8 h-[calc(100%-160px)]">
            <ToastProvider autoDismiss={true} 
              autoDismissTimeout={6000} 
              placement="top-center"
              //components={{ Toast: CustomToast }}
            >       
                <div className="w-full mx-4"> 
                    {children}
                </div>
            </ToastProvider>
            </div>
          </Box>
          <footer className="flex bg-gradient-to-tr from-cyan-100 to-cyan-500 items-center justify-center w-full" style={{flex: 1, height: '80px'}}>
            <Footer />
          </footer>
        </body>
      </html>
    </RecoilRoot>
    </>
  )
}
