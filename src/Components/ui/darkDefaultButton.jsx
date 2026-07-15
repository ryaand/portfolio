const DarkDefaultButton = ({ children }) => {
    return (
        <div>
            <button className="bg-black border border-zinc-400 rounded-full px-4 py-2 cursor-pointer text-white hover:bg-black/65 focus:bg-black/65">
            {children}
            </button>
        </div>
    )
}

export default DarkDefaultButton