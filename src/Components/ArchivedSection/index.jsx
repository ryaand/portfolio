"use client"

import { easeOut, motion } from "motion/react"
import ProjectCard from "../Utilities/projectCard"

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
                <div className="flex flex-col gap-10 md:gap-2">
                    <ProjectCard
                        links={"https://josuraa.github.io/Josura-Offc-Web/"}
                        title={"HTML CSS Website"}
                        subtitle={"First project only using HTML and CSS"}
                        description={"A website project developed using only HTML and CSS as part of my journey into web development. The main goal of this project was to understand the core concepts of building web pages, such as structuring content with HTML and enhancing visual appearance with CSS."}
                        stacks={["HTML", "CSS", "JavaScript"]}></ProjectCard>
                    <ProjectCard
                        links={"https://healthyhighfive.netlify.app/"}
                        title={"Wordpress Website"}
                        subtitle={"Article web build using WordPress"}
                        description={"An article-based website built using WordPress, designed to publish and manage content efficiently. This project showcases content organization, responsive design, and the use of WordPress features to create an accessible and user-friendly reading experience."}
                        stacks={["WordPress", "Local WP"]}></ProjectCard>
                    <ProjectCard
                        links={"https://drive.google.com/file/d/1lqOqszyivCCP-Xx_yUzXEtn_Hol0MsLK/view"}
                        title={"UI Web Prototype"}
                        subtitle={"Article web build using WordPress"}
                        description={"A user interface prototype designed in Figma to visualize application workflows and user experiences. This project demonstrates wireframing, prototyping, and modern UI/UX design principles through interactive and user-centered designs."}
                        stacks={["Figma"]}></ProjectCard>
                </div>
            </div>
        </section>
    )
}

export default ArchivedSection