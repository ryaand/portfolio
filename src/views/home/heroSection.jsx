"use client"

import DarkDefaultButton from "../../Components/ui/darkDefaultButton"
import { easeOut, motion } from "motion/react"
import LightDefaultButton2 from "../../Components/ui/lightDefaultButton2"
import DarkButton from "@/Components/ui/darkButton"
import LightButton from "@/Components/ui/lightButton"

const HeroSection = () => {
    return (
        <section
            className="h-screen w-screen max-w-7xl">
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px", once: true }}
                transition={{ duration: 0.7, ease: easeOut }}
                className="flex flex-col w-screen h-screen justify-center items-center gap-7">
                <div className="text-center font-extralight tracking-[0.5em] text-sm px-4">
                    <p>FRONTEND DEVELOPER</p>
                </div>
                <div className="text-center text-6xl font-black">
                    <p>Rian<br></br>Archive</p>
                </div>
                <div className="text-center w-[80%] lg:w-[30%] text-zinc-500 font-light tracking-wider text-[17px] max-w-2xl">
                    An 18 years old front-end developer dedicated to continuous improvement, actively deepening skills in UI/UX design and full-stack development.
                </div>
                <div className="flex sm:flex-row flex-col gap-2 items-center justify-center">
                    <a href="#projects"><DarkButton>Explore Projects</DarkButton></a>
                    <a href="#archived"><LightButton>Archived Projects</LightButton></a>
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