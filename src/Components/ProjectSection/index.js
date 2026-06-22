"use client"

import { easeOut, motion } from "motion/react"

const ProjectSection = () => {
    return (
        <section id="projects" className="w-screen h-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex flex-col h-full w-full p-14 gap-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="font-extralight tracking-[0.5em]">
                    PROJECTS
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-400px" }}
                    transition={{ duration: 0.7, ease:easeOut }}
                    className="opacity-60 flex flex-col h-full items-center justify-center gap-2">
                    <div className="flex font-extralight justify-center w-fit items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M 12 2 C 8.6983746 2 6 4.6983746 6 8 L 6 9 L 5.5 9 C 4.1309372 9 3 10.130937 3 11.5 L 3 19.5 C 3 20.869063 4.1309372 22 5.5 22 L 18.5 22 C 19.869063 22 21 20.869063 21 19.5 L 21 11.5 C 21 10.130937 19.869063 9 18.5 9 L 18 9 L 18 8 C 18 4.6983746 15.301625 2 12 2 z M 12 4 C 14.220375 4 16 5.7796254 16 8 L 16 9 L 8 9 L 8 8 C 8 5.7796254 9.7796254 4 12 4 z M 5.5 11 L 6.8320312 11 A 1.0001 1.0001 0 0 0 7.1582031 11 L 16.832031 11 A 1.0001 1.0001 0 0 0 17.158203 11 L 18.5 11 C 18.786937 11 19 11.213063 19 11.5 L 19 19.5 C 19 19.786937 18.786937 20 18.5 20 L 5.5 20 C 5.2130628 20 5 19.786937 5 19.5 L 5 11.5 C 5 11.213063 5.2130628 11 5.5 11 z"></path>
                        </svg>
                        <div>
                            NO PROJECT
                        </div>
                    </div>
                    <div className="text-lg">
                        Still no concept/active project here
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectSection