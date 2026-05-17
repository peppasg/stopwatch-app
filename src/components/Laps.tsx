type Lap = {
    id: number;
    time: string;
    lapTime: string;
    calcTime: number;
}

type LapProps = {
    laps: Lap[];
}

const Laps= ({laps}: LapProps) => {
    return(
        <>
            {laps.length > 0 && (
                <div className="max-h-[250px] overflow-y-auto space-y-3">

                    {/* Header */}
                    <div className="flex mt-6 border-b border-gray-700 pb-2 font-bold text-black">
                        <span className="w-16">Lap</span>
                        <span className="flex-1 text-right">Lap Time</span>
                        <span className="flex-1 text-right">Total Time</span>
                    </div>

                    {/* Rows */}
                    {laps.map((lap) => (
                        <div
                            className="flex border-b border-gray-700 pb-2 text-black"
                        >
                            <span className="w-16 font-medium">
                                {lap.id}
                            </span>

                            <span className="flex-1 font-mono text-lg text-right">
                                {lap.lapTime}
                            </span>

                            <span className="flex-1 font-mono text-lg text-right">
                                {lap.time}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>


    )
}
export default Laps;