import PageTransition from '@/components/pageTransition'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Resume() {
        
    return (
        <PageTransition allowScroll={false}>
        <div className='flex flex-col justify-center items-center gap-4'>        
            <Link href={'/static/Resume.pdf'}  target="_blank" rel="noopener noreferrer" className="font-bold text-2xl px-4 hover:underline" >
                Download Resume
            </Link>
            {/* <a href={'/static/Resume.pdf'} target='_blank' className="font-bold text-2xl px-4 hover:underline" rel='noopener noreferrer '>
                Download Resume
            </a> 
            <Image src="/images/micheleriva_bejs.jpg" alt="Michele riva" width={550} height={400} />
            */}
        </div>
        </PageTransition>
    )
}
