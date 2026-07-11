"use client"

import LightDefaultButton2 from "./LightDefaultButton2"
import Link from "next/link"
import { motion, easeOut } from "motion/react"

const ProjectCard = ({ links, title, subtitle, description, stacks }) => {
    return (
        <div className="flex flex-col gap-10 md:gap-2">
            <Link href={links}>
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="hover:bg-black/5 transition-all duration-450 rounded-2xl hover:shadow-xs gap-3 flex flex-col md:p-8 m-0 p-4">
                    <div className="flex gap-4 items-center">
                        <div>
                            <div className="font-black text-lg">
                                {title}
                            </div>
                            <div className="font-extralight text-sm">
                                {subtitle}
                            </div>
                        </div>
                        <div className="text-zinc-400 text-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right text-zinc-500 shrink-0 mt-1" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </div>
                    </div>
                    <div className="text-zinc-400">
                        {description}
                    </div>
                    <div className="zoom-75 flex w-fit gap-3">
                        {stacks.map((stack) => (
                            <LightDefaultButton2>{stack}</LightDefaultButton2>
                        ))}
                    </div>
                </motion.div>
            </Link>
        </div>
    )
}

export default ProjectCard