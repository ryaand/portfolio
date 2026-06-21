"use client"

import { motion } from "motion/react"
import { useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

const Navbar = () => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const topNavbar = "flex justify-center px-8 py-2.5 rounded-full items-center text-gray-600 text-[14px] transition-all ease-in-out duration-800"

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
        if (latest > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    let navbarClass = scrolled ? `${topNavbar} backdrop-blur-md bg-zinc-200/40 border-zinc-400 border shadow-lg` : `${topNavbar} border-transparent shadow-none`

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed justify-between items-center w-full">
            <div
            className="flex justify-center px-24 items-center w-full text-gray-600 text-[14px] h-16">
                <div className={navbarClass}>
                    <ul className="flex gap-10 justify-center font-semibold">
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-150"><a href="#about">About</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#skills">Skills</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#projects">Projects</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#archived">Archived</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar