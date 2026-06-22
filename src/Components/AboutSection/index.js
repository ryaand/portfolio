"use client"

import { easeIn, easeInOut, easeOut, motion } from "motion/react"

const AboutSection = () => {
    return (
        <section className="w-screen flex justify-center items-center border-b border-zinc-400">
            <div className="flex items-center  max-w-3xl w-full h-full text-zinc-400">
                <div className="flex flex-col justify-between h-full p-14 gap-10">
                    <motion.div 
                    initial={{ opacity: 0, x:-20 }}
                    whileInView={{ opacity: 1, x:0 }}
                    viewport={{ margin: "-110px" }}
                    transition={{ duration:0.8 }}
                    className="font-extralight tracking-[0.5em] text-zinc-400">
                        ABOUT
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-300px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="text-justify text-zinc-400">
                        I am an Informatics Engineering student at Politeknik Negeri Malang with a strong interest in Front-End Development. I enjoy creating clean, minimal, and user-focused interfaces — combining functionality, simplicity, and thoughtful design into meaningful digital experiences.
                        <br></br>
                        <br></br>
                        As I continue my learning journey, I am constantly exploring new ideas, improving my problem-solving skills, and deepening my understanding of how design and technology work together. I believe that great products are built not only through technical expertise, but also through attention to detail and a genuine focus on users.
                        <br></br>
                        <br></br>
                        Beyond personal growth, I am passionate about collaboration — learning from others, sharing ideas, and building impactful projects as part of a team. My goal is to contribute to products that create real value while growing alongside people who are equally driven to learn and innovate.
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, y:10 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ margin: "-200px" }}
                    transition={{ duration:0.7, ease:easeOut }}
                    className="grid grid-cols-2 gap-4 border-t pt-10 border-zinc-400">
                        <div>
                            <div className="font-black text-2xl text-black">0+</div>
                            <div className="font-light">Projects</div>
                        </div>
                        <div>
                            <div className="font-black text-2xl text-black">10+</div>
                            <div className="font-light">Technologies</div>
                        </div>
                        <div>
                            <div className="font-black text-2xl text-black">Front End</div>
                            <div className="font-light">Focus</div>
                        </div>
                        <div>
                            <div className="font-black text-2xl text-black">2026</div>
                            <div className="font-light">High School Graduating</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection