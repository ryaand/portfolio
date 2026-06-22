import Image from "next/image"
import Email from "@/assets/email.png"
import Link from "next/link"
import Github from "@/assets/github.png"

const Footer = () => {
    return (
        <section className="w-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex justify-between h-full w-full p-14 gap-10 max-w-3xl">
                <div>
                    © 2026 rian
                </div>
                <div className="flex gap-3">
                    <Link className="opacity-50 hover:opacity-100 transition-all duration-300" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpctRWvSnMpJjtFlWCxldFvCHlsbMgBRLZrzHJWLWQtkxKdPNDjZHZbFLcCkPTqDfKSPhg"><Image alt="email" src={Email} width={20}></Image></Link>
                    <Link className="opacity-50 hover:opacity-100 transition-all duration-300" href="https://github.com/ryaand"><Image alt="github" src={Github} width={20}></Image></Link>
                </div>
            </div>
        </section>
    )
}

export default Footer