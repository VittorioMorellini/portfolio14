"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function Code() {
    return (
        <motion.div whileHover={{ scale: 1.1 }} className="relative w-full h-76 md:h-full text-center">
            <Image
                //unoptimized
                src={"/images/Coding.jpg"}
                alt="Coding is our life"
                width={500}
                height={300}                
            />
        </motion.div>
    )
}
