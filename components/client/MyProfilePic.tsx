"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function MyProfilePic() {
    return (
        <motion.div className="w-full mx-auto"
            whileHover={{scale: 1.1}}
        >
            <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src="/images/vittorio.png"
                width={200}
                height={200}
                alt="Dave Gray"
                priority={true}
            />
        </motion.div>
    )
}