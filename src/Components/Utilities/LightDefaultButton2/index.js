"use client"

const LightDefaultButton2 = ({ children }) => {
    return (
        <div>
            <button className="border border-zinc-400/30 rounded-full px-5 py-1.5 hover:bg-black/90 focus:bg-black/90 focus:text-white z-50 hover:text-white transition-all duration-300">
            {children}
            </button>
        </div>
    )
}

export default LightDefaultButton2