type DisplayProps = {
    time: string;
}

const Display = ({time}: DisplayProps) => {
    return (
        <>
            <div className="min-h-screen text-center mb-8">
                <h1 className="text-xl font-light text-black">{time}</h1>
            </div>
        </>
    )
}
export default Display;