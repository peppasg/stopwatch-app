const Header = () => {

    return (
        <>
            <header className="bg-amber-600 fixed w-full">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <p className=" py-6 text-center font-bold">STOPWATCH</p>

                    <nav className="flex gap-4 text-white font-medium">
                        <a href="/public">Home</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;