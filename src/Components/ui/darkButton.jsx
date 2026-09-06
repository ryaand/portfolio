const DarkButton = ({ children }) => {
    return (
        <div>
            <button className="bg-black border rounded-lg px-8 py-3 cursor-pointer text-white hover:bg-black/85 focus:bg-black/65 font-semibold text-sm items-center justify-center transition-all ease-in-out">
            {children}
            </button>
        </div>
    )
}

export default DarkButton