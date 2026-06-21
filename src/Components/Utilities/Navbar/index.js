"use client"

import { motion } from "motion/react"
import { useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

const Navbar = () => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const topNavbar = "flex justify-between items-center md:justify-center px-10 py-4 md:px-10 rounded-2xl md:rounded-full items-center text-gray-600 transition-all ease-in-out duration-400 w-full md:w-fit border-transparent border"
    const [toggleNavbar, setToggleNavbar] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log(latest)
        if (latest > 30) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })

    const isNavbarActive = scrolled || toggleNavbar

    const navbarClass = isNavbarActive ? `${topNavbar} backdrop-blur-md bg-zinc-400/20 border-zinc-400 border shadow-lg` : `${topNavbar} shadow-none`

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed justify-between items-center w-full">
            <div className="flex justify-center px-6 items-center w-full text-gray-600 text-[14px] pt-6">
                <div className={navbarClass}>
                    <div className="md:hidden font-extrabold">rianArchive</div>
                    <ul className="gap-10 justify-center font-semibold hidden md:flex">
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-150"><a href="#about">About</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#skills">Skills</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#projects">Projects</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#archived">Archived</a></li>
                        <li className="opacity-75 hover:opacity-100 transition-opacity duration-300"><a href="#contact">Contact</a></li>
                    </ul>
                    <button onClick={() => setToggleNavbar(toggleNavbar ? false : true)} className="md:hidden cursor-pointer rounded-md p-1">
                        <svg className={toggleNavbar ? "hidden" : "block"} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                        <svg className={toggleNavbar ? "block" : "hidden"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)"></path><path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: toggleNavbar ? 1 : 0, y: toggleNavbar ? 0 : -10 }}
                transition={{ duration: 0.15 }}
                className={toggleNavbar ? "md:hidden" : "hidden"}>
                <div className="flex bg-zinc-400/20 backdrop-blur-md border-zinc-400 border shadow-lg m-6 rounded-2xl transition-all duration-300">
                    <ul className="flex flex-col w-full gap-1 py-6 px-6 justify-center text-sm font-semibold">
                        <a href="#about">
                            <li className="opacity-75 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300 py-2 px-4 rounded-xl">About</li>
                        </a>
                        <a href="#skills">
                            <li className="opacity-75 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300 py-2 px-4 rounded-xl">Skills</li>
                        </a>
                        <a href="#projects">
                            <li className="opacity-75 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300 py-2 px-4 rounded-xl">Projects</li>
                        </a>
                        <a href="#archived">
                            <li className="opacity-75 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300 py-2 px-4 rounded-xl">Archived</li>
                        </a>
                        <a href="#contact">
                            <li className="opacity-75 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300 py-2 px-4 rounded-xl">Contact</li>
                        </a>
                    </ul>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar