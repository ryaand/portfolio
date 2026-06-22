import Image from "next/image"
import Email from "@/assets/email.png"
import Link from "next/link"
import Github from "@/assets/github.png"

const Footer = () => {
    return (
        <section className="w-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex flex-col md:flex-row justify-between items-center w-full p-14 gap-5 max-w-3xl zoom-80">
                <div className="font-light">
                    © 2026 rian. All rights reserved.
                </div>
                <div className="flex gap-2 md:gap-4 items-center justify-center w-fit ">
                    <Link className="opacity-45 hover:opacity-100 active:opacity-100 transition-all duration-300 flex gap-2" href="mailto:bahriansyah3@outlook.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></Link>
                    <Link className="opacity-30 hover:opacity-100 active:opacity-100 transition-all duration-300 flex gap-2" href="https://github.com/ryaand"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></Link>
                </div>
            </div>
        </section>
    )
}

export default Footer