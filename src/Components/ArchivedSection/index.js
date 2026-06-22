"use client"

import { easeOut, motion } from "motion/react"
import LightDefaultButton2 from "../Utilities/LightDefaultButton2"
import Link from "next/link"

const ArchivedSection = () => {
    return (
        <section id="archived" className="w-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex flex-col justify-between h-full w-full p-14 gap-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="font-extralight tracking-[0.5em]">
                    ARCHIVED PROJECT
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="font-extralight tracking-wide">
                    You can see my archive repository on <a href="https://github.com/ryanarchv" className="underline font-bold">github</a> also.
                </motion.div>
                <div className="flex flex-col gap-10">
                    <Link href="https://josuraa.github.io/Josura-Offc-Web/">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-200px" }}
                            transition={{ duration: 0.7, ease: easeOut }}
                            className="hover:underline gap-3 flex flex-col active:underline">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <div className="font-black text-lg">
                                        HTML CSS Website
                                    </div>
                                    <div className="font-extralight text-sm">
                                        First project only using HTML and CSS
                                    </div>
                                </div>
                                <div className="text-zinc-400 text-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-zinc-500 shrink-0 mt-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                </div>
                            </div>
                            <div className="text-zinc-400">
                                A website project developed using only HTML and CSS as part of my journey into web development. The main goal of this project was to understand the core concepts of building web pages, such as structuring content with HTML and enhancing visual appearance with CSS. It demonstrates my ability to create responsive layouts and organized designs while applying fundamental front-end development practices.
                            </div>
                            <div className="zoom-75 flex w-fit gap-3">
                                <LightDefaultButton2>HTML</LightDefaultButton2>
                                <LightDefaultButton2>CSS</LightDefaultButton2>
                                <LightDefaultButton2>JavaScript</LightDefaultButton2>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href="https://healthyhighfive.netlify.app/">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-200px" }}
                            transition={{ duration: 0.7, ease: easeOut }}
                            className="hover:underline gap-3 flex flex-col active:underline">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <div className="font-black text-lg">
                                        Wordpress Website
                                    </div>
                                    <div className="font-extralight text-sm">
                                        Article web build using WordPress
                                    </div>
                                </div>
                                <div className="text-zinc-400 text-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-zinc-500 shrink-0 mt-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                </div>
                            </div>
                            <div className="text-zinc-400">
                                An article-based website built using WordPress, designed to publish and manage content efficiently. This project showcases content organization, responsive design, and the use of WordPress features to create an accessible and user-friendly reading experience.
                            </div>
                            <div className="zoom-75 flex w-fit gap-3">
                                <LightDefaultButton2>WordPress</LightDefaultButton2>
                                <LightDefaultButton2>Local WP</LightDefaultButton2>
                            </div>
                        </motion.div>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1lqOqszyivCCP-Xx_yUzXEtn_Hol0MsLK/view">
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-200px" }}
                            transition={{ duration: 0.7, ease: easeOut }}
                            className="hover:underline gap-3 flex flex-col active:underline">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <div className="font-black text-lg">
                                        UI Web Prototype
                                    </div>
                                    <div className="font-extralight text-sm">
                                        Figma prototype design
                                    </div>
                                </div>
                                <div className="text-zinc-400 text-right">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-zinc-500 shrink-0 mt-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                </div>
                            </div>
                            <div className="text-zinc-400">
                                A user interface prototype designed in Figma to visualize application workflows and user experiences. This project demonstrates wireframing, prototyping, and modern UI/UX design principles through interactive and user-centered designs.
                            </div>
                            <div className="zoom-75 flex w-fit gap-3">
                                <LightDefaultButton2>Figma</LightDefaultButton2>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ArchivedSection