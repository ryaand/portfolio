"use client"

import { motion } from "motion/react"

const LightDefaultButton = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
        >
            <button className="bg-transparent border rounded-full px-4 py-2 cursor-pointer">
            {children}
            </button>
        </motion.div>
    )
}

export default LightDefaultButton