import { Container } from './components/container'
import Hero from '@/components/client/hero'
import Presentation from '@/components/client/presentation'
import PageTransition from '@/components/pageTransition'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Home() {
  return (
    <PageTransition allowScroll={false}>
      <div className='pt-8'>
        <Container size="2xl">
          <div className='w-full flex flex-col justify-center my-4 items-center'>
            <h1 className='font-extrabold text-4xl'>Welcome to my web !!</h1>
            <p className='font-semibold text-2xl'>
              Click to Login to enter or Register to the Portfolio
            </p>
          </div>
        </Container>
        <Container size="2xl">
          <div className='grid gap-10 md:grid-cols-2'>
            <Hero />
            <Presentation />
          </div>
          <div className='flex pt-8 justify-center gap-8'>
            <Link
              title='Sign in'
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-gradient-to-tr from-cyan-200 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-600 md:text-base"
            >
              <span>Log in</span>
            </Link>
            <Link
              title='Register'
              href="/signup"
              className="flex items-center gap-5 self-start rounded-lg bg-gradient-to-tr from-blue-200 to-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 md:text-base"
            >
              <span>Sign up</span>
            </Link>
          </div> 
          <div className='flex pt-8 justify-center gap-8'>
            <Link href={'/static/Resume.pdf'}  target="_blank" className="font-bold text-2xl px-4 hover:underline" rel="noopener noreferrer">My Resume</Link>            
          </div>       
        </Container>
      </div>
    </PageTransition>  
  )
}

export default Home
