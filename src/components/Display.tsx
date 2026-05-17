type DisplayProps = {
    time: string;
}

const Display = ({time}: DisplayProps) => {
    return (
        <>
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-black">{time}</h1>
            </div>
        </>
    )
}
export default Display;