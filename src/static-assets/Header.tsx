const Header = () => {

    return (
        <>
            <header className="bg-amber-600  fixed w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a className="flex" href="/">
                        <p className=" py-6 text-center font-bold ">Stopwatch Application</p>
                        <img
                            className="h-12 w-auto object-contain mix-blend-multiply"
                            src="../../public/digital-stopwatch-icon-outline-stop-timer-vector.jpg"
                            alt="Stopwatch Image"/>
                    </a>

                    <nav className="flex gap-4 text-black font-medium">
                        <a href="/">Home</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;