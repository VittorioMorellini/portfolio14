"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.div className="flex w-full h-full text-center justify-center"
        whileHover={{ scale: 1.1 }}
    >
        <Image
            src={"/images/vittorio.png"}
            alt="Vittorio Morellini"
            width="300"
            height="300"
        />
    </motion.div>
)
}
