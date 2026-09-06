const LightButton = ({ children }) => {
    return (
        <div>
            <button className="bg-transparent border-zinc-400 border-2 rounded-lg px-8 py-3 cursor-pointer text-black hover:bg-white/40 focus:bg-white font-semibold text-sm items-center justify-center transition-all ease-in-out">
            {children}
            </button>
        </div>
    )
}

export default LightButton