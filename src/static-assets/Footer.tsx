const Footer =() => {
    const currentYear: number = new Date().getFullYear();

    return(
        <>
            <footer className="bg-amber-600 text-black font-medium ">
                <div className="container mx-auto py-8 text-center">
                    &copy; {currentYear} Coding Factory 9. All Rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer;