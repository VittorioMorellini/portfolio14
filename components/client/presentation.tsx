"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function Presentation() {
    const svgVariants = {
        initial: {
            //rotate: -360
            opacity: 0
        },
        animate: {
            //rotate: 0,
            opacity: 1,
            transition: {
                duration: 2.5,
                ease: 'easeInOut'
            }
        },
        exit: {
            opacity: 0.5
        }
    }
      
    return (
        <AnimatePresence>
            <motion.div className="h-full w-full md:m-0"
                variants={svgVariants}
                initial="initial"
                animate="animate"
                exit="exit"    
                whileHover={{ scale: 1.1 }}        
            >
                <div className="bg-cyan-200">
                    <h1 className="font-black text-2xl md:text-5xl">
                        Software engineer at{" "}
                        <Link
                            href="https://sixtema.it"
                            className="underline hover:text-sky-400"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sixtema
                        </Link>
                        <br />(Modena, Italy)
                    </h1>
                    <h2 className="text-xl md:text-3xl mt-2">
                        Software Developer dotnet (C#) and React.js (typescript)
                    </h2>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
