"use client"

import LightDefaultButton from "../Utilities/LightDefaultButton"
import DarkDefaultButton from "../Utilities/DarkDefaultButton"
import { easeIn, easeInOut, easeOut, motion } from "motion/react"

const HeroSection = () => {
    return (
        <section
            className="h-screen w-screen max-w-7xl justify-center items-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="flex flex-col w-screen h-screen justify-center items-center gap-7">
                <div className="text-center font-extralight tracking-[0.5em] text-sm px-4">
                    <p>FRONTEND DEVELOPER | WEBSITE DEVELOPER</p>
                </div>
                <div className="text-center text-6xl font-bold">
                    <p>Rian<br></br>Archive</p>
                </div>
                <div className="text-center w-[80%] text-zinc-500 text-[17px] max-w-2xl">
                    An 18 years old front-end developer dedicated to continuous improvement, actively deepening skills in UI/UX design and full-stack development.
                </div>
                <div className="flex gap-4">
                    <a href="#about"><LightDefaultButton>About</LightDefaultButton></a>
                    <a href="#projects"><DarkDefaultButton>Projects</DarkDefaultButton></a>
                    <a href="#archived"><LightDefaultButton>Archived</LightDefaultButton></a>
                </div>
                <div className="absolute bottom-7 text-center opacity-40 font-extralight tracking-[0.5em]">
                    |<br></br>
                    scroll
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection