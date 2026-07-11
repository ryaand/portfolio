"use client"

import { useState } from 'react'

const ContactSection = () => {

    const [result, setResult] = useState("");
    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault()

        setIsSending(true)

        const formData = new FormData(event.target)
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json();
            setResult(data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsSending(false)
        }
    }

    console.log(result)

    return (
        <section id="contact" className="w-screen flex justify-center items-center border-b border-zinc-400/30">
            <div className="flex flex-col justify-center h-full w-full p-14 gap-10 max-w-3xl">
                <div className="font-extralight tracking-[0.5em]">
                    CONTACT
                </div>
                <p className='font-bold text-xl'>Have a project in mind? Let's talk, i am open to collaborations.</p>
                <div className="gap-10 flex flex-col md:grid md:grid-cols-2">
                    <div className="gap-2 md:pt-2 flex flex-col">
                        <a href="https://www.instagram.com/riaaand_/" className="opacity-50 flex items-center gap-1 text-sm font-semibold hover:opacity-100 focus:opacity-100 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z" /><path fill="#000000" d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z" /></svg>
                            instagram.com/riaaand_
                        </a>
                        <a href="mailto:bahriansyah3@outlook.com" className="opacity-50 flex items-center gap-1 text-sm font-semibold hover:opacity-100 focus:opacity-100 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000000" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z" /></svg>
                            bahriansyah3@outlook.com
                        </a>
                        <a href="https://github.com/ryaand" className="opacity-50 flex items-center gap-1 text-sm font-semibold hover:opacity-100 focus:opacity-100 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="30" strokeDashoffset="30" d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="30;0" /></path><path strokeDasharray="10" strokeDashoffset="10" d="M9 19C7.59375 19 6.15625 18.4375 5.3125 17.8125C4.46875 17.1875 4.21875 16.1562 3 15.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0" /></path></g></svg>
                            github.com/ryaand
                        </a>
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col gap-3">
                        <p className="font-bold text-zinc-600 tracking-widest">NAME</p>
                        <input type="text" name="name" placeholder="Your Name" className="focus:outline-2 border rounded-md border-zinc-400/50 p-2 justify-center text-sm font-medium pl-3 tracking-wide" required />
                        <p className="font-bold text-zinc-600 tracking-widest">EMAIL</p>
                        <input type="email" name="email" placeholder="your_email@example.com" className="focus:outline-2 border rounded-md border-zinc-400/50 p-2 justify-center text-sm font-medium pl-3 tracking-wide" required />
                        <p className="font-bold text-zinc-600 tracking-widest">MASSAGE</p>
                        <textarea name="message" placeholder="Massage..." className="focus:outline-2 border rounded-md border-zinc-400/50 p-2 justify-center text-sm font-medium pl-3 tracking-wide resize-none h-30" required></textarea>
                        <div className=''>
                            <div className={(isSending || result) ? "hidden" : "flex"}>
                                <button type="submit" className="bg-black border border-zinc-400 rounded-md px-4 py-2 cursor-pointer text-white hover:bg-black/80 w-full">Submit</button>
                            </div>
                            <div className={(isSending || result) ? "flex" : "hidden"}>
                                <button type="submit" className="bg-black/50 border border-zinc-400 rounded-md px-4 py-2 text-white w-full" children disabled>{result ? "Submitted!" : "Sending..."}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
