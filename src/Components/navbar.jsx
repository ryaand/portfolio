"use client"

import { easeInOut, motion } from "motion/react"
import { useScroll, useMotionValueEvent } from "motion/react"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Navbar = () => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("")
    const topNavbar = "flex justify-between items-center md:justify-center px-10 py-3 md:px-4 md:py-2 rounded-2xl md:rounded-full text-gray-600 transition-all ease-in-out duration-400 w-full md:w-fit border border-transparent sm:border-none"
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const pathname = usePathname()
    console.log(pathname)
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setScrolled(true)
            if (latest >= 600 && latest < 1300) {
                setActive("About")
            } else if (latest >= 1300 && latest < 1900) {
                setActive("Skills")
            } else if (latest >= 1900 && latest < 2511.800048828125) {
                setActive("Projects")
            } else if (latest >= 2512.800048828125 && latest < 3112) {
                setActive("Archived")
            } else if (latest >= 3112 && latest < 5000) {
                setActive("Contact")
            } else if (pathname === "/blog") {
                setActive("Blog")
            } else {
                setActive("")
            }
        } else {
            setScrolled(false)
        }
        console.log(latest)
    })

    const isNavbarActive = scrolled || toggleNavbar

    const navbarClass = isNavbarActive ? `${topNavbar} backdrop-blur-md bg-zinc-400/10 shadow-md border-zinc-400 sm:border-none` : `${topNavbar} shadow-none`
    const navLink = [
        { name: "About", link: "/#about" },
        { name: "Skills", link: "/#skills" },
        { name: "Projects", link: "/#projects" },
        { name: "Blog", link: "/blog" },
        { name: "Archived", link: "/#archived" },
        { name: "Contact", link: "/#contact" },
    ]

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="fixed justify-between items-center w-full z-50">
            <div className="flex justify-center px-6 items-center w-full text-gray-600 text-[14px] pt-6">
                <div className={navbarClass}>
                    <div className="md:hidden font-extrabold">rianArchive</div>
                    <ul className="gap-2 justify-center text-[13px] font-semibold hidden md:flex">
                        {navLink.map((nav) => {
                            return (
                                <li className="relative text-zinc-950/50 hover:text-zinc-950/75 transition-text duration-300 px-4 py-1 cursor-pointer rounded-full">
                                    {active === nav.name ? <motion.div layoutId="nigga" className="absolute px-4 py-1 cursor-pointer rounded-full bg-white inset-0 -z-10 "></motion.div> : null}
                                    <a href={nav.link}>{nav.name}</a>
                                </li>
                            )
                        })}
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
                <div className="flex bg-zinc-400/10 backdrop-blur-sm border-zinc-400 border shadow-md m-6 rounded-2xl">
                    <ul className="flex flex-col w-full gap-1 py-4 px-4 justify-center text-sm font-semibold">
                        <a href="/#about">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">About</li>
                        </a>
                        <a href="/#skills">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">Skills</li>
                        </a>
                        <a href="/#projects">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">Projects</li>
                        </a>
                        <a href="/blog">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">Blog</li>
                        </a>
                        <a href="/#archived">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">Archived</li>
                        </a>
                        <a href="/#contact">
                            <li className="opacity-55 hover:opacity-100 transition-all duration-150 hover:bg-zinc-300/25 py-2 px-6 rounded-lg">Contact</li>
                        </a>
                    </ul>
                </div>
            </motion.div>
        </motion.nav>
    )
}

export default Navbar