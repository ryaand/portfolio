"use client"

import { motion } from "motion/react"

const DarkDefaultButton = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.85 }}
        >
            <button className="bg-black/80 border border-zinc-400 rounded-full px-4 py-2 cursor-pointer text-white">
            {children}
            </button>
        </motion.div>
    )
}

export default DarkDefaultButton