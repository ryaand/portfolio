"use client"

const LightDefaultButton2 = ({ children }) => {
    return (
        <div>
            <button className="border border-zinc-400/30 rounded-lg px-4 py-2 hover:bg-black/90 active:bg-black/90 active:text-white z-50 hover:text-white transition-all duration-200 cursor-pointer flex gap-2.5 items-center fill-black hover:fill-white active:fill-white text-sm font-semibold">
            {children}
            </button>
        </div>
    )
}

export default LightDefaultButton2