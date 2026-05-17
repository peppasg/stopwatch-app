import Buttons from "./Buttons.tsx";
import {useState} from "react";
import Laps from "./Laps.tsx";
import Display from "./Display.tsx";


const StopWatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [laps, setLaps] = useState<Lap[]>([]);
    const [intervalId, setIntervalId] = useState<number | null>(null);

    type Lap = {
        id: number;
        time: string;
        lapTime: string;
        calcTime: number;
    }

    const formatTime = (ms: number): string => {

        const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
        const seconds = String(
            Math.floor((ms % 60000) / 1000)
        ).padStart(2, "0");

        const milliseconds = String(
            Math.floor((ms % 1000) / 10)
        ).padStart(2, "0");

        return `${minutes}:${seconds}.${milliseconds}`;
    };

    const handleStart = () => {
        if (isRunning) return;

        setIsRunning(true);

        const id = window.setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);

        setIntervalId(id);
    };

    const handleStop = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setIsRunning(false);
    };


    const handleReset = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        setTime(0);
        setLaps([]);
        setIsRunning(false);
    };



    const handleLap = () => {
        if (time === 0) return;

        const lastLapTime = laps.length > 0 ? laps[0].calcTime : 0;

        const lapDiff = time - lastLapTime;

        setLaps((prev) => [
            {
                id: prev.length + 1,
                time: formatTime(time),
                lapTime: formatTime(lapDiff),
                calcTime: time
            },
            ...prev,
        ]);
    };


    return (
        <>
            <Display time={formatTime(time)}/>

            <div className="flex-1 mt-6" >
                <Buttons
                label="Reset"
                onClick={handleReset}
                disabled={isRunning}
                addClasses="w-full flex  py-3 rounded-full bg-gray-500 text-white hover:bg-gray-400 hover:text-black"
                />

                {isRunning && (
                    <Buttons
                    label="Lap"
                    onClick={handleLap}
                    addClasses="flex  py-3 rounded-full bg-blue-500 text-white"/>

                )}

                {isRunning ? (
                    <Buttons
                    label="Stop"
                    onClick={handleStop}
                    addClasses="flex py-3 rounded-full bg-red-500 text-white font-semibold
                    hover:bg-red-400 transition"/>
                ) : (
                    <Buttons
                    label="Start"
                    onClick={handleStart}
                    addClasses="flex py-3 rounded-full bg-green-500 text-black font-semibold
                    hover:bg-green-400 transition"/>
                )}
            </div>
            <Laps laps={laps} />

        </>
    )
}
export default StopWatch;