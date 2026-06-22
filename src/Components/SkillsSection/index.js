"use client"

import { easeOut, motion } from "motion/react"
import LightDefaultButton2 from "../Utilities/LightDefaultButton2"

const SkillsSection = () => {
    return (
        <section id="skills" className="w-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex flex-col justify-between h-full w-full p-14 gap-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="font-extralight tracking-[0.5em]">
                    SKILLS
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y:5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="flex flex-col gap-3">
                    <div className="font-extralight text-sm tracking-[0.2em]">
                        LANGUAGE
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <LightDefaultButton2>JavaScript</LightDefaultButton2>
                        <LightDefaultButton2>Python</LightDefaultButton2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y:5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="flex flex-col gap-3">
                    <div className="font-extralight text-sm tracking-[0.2em]">
                        FRONT END
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <LightDefaultButton2>Next.js</LightDefaultButton2>
                        <LightDefaultButton2>Tailwind</LightDefaultButton2>
                        <LightDefaultButton2>HTML</LightDefaultButton2>
                        <LightDefaultButton2>CSS</LightDefaultButton2>
                        <LightDefaultButton2>React</LightDefaultButton2>
                        <LightDefaultButton2>Bootstrap</LightDefaultButton2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y:5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="flex flex-col gap-3">
                    <div className="font-extralight text-sm tracking-[0.2em]">
                        TECHNOLOGIES
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <LightDefaultButton2>VS Code</LightDefaultButton2>
                        <LightDefaultButton2>Github</LightDefaultButton2>
                        <LightDefaultButton2>Git</LightDefaultButton2>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y:5 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="flex flex-col gap-3">
                    <div className="font-extralight text-sm tracking-[0.2em]">
                        OTHERS
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <LightDefaultButton2>Figma</LightDefaultButton2>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SkillsSection