"use client"

import { easeOut, motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"
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
                    <p></p>
                    <TypeAnimation
                    sequence={[
                        'FRONTEND DEVELOPER',
                        1500,
                        'WEBSITE DEVELOPER',
                        1500,
                    ]}
                    speed={40}
                    repeat={Infinity}
                />
                </div>
                <div className="text-center text-6xl font-black">
                    <p>Rian<br></br>Archive</p>
                </div>
                <div className="text-center w-[67%] lg:w-[30%] text-zinc-500 font-light tracking-wider text-md sm:text-[17px]">
                    An 18 years old front-end developer dedicated to continuous improvement.
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