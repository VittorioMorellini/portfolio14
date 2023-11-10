import PageTransition from '@/components/pageTransition'
import Link from 'next/link'
import React from 'react'

export default function Resume() {
        
    return (
        <PageTransition allowScroll={false}>
        <div className='flex flex-col justify-center items-center gap-4'>        
            <Link href={'/static/Resume.pdf'}  target="_blank" rel="noopener noreferrer" className="font-bold text-2xl px-4 hover:underline" >
                View Resume
            </Link>
        </div>
        </PageTransition>
    )
}
