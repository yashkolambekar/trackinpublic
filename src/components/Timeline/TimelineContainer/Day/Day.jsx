import { nanoid } from "@reduxjs/toolkit";
import Task from "./Task/Task";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Day = () => {

    const [leftValue, setLeftValue] = useState(0);

    const secondsToWidth = (seconds) => {
        const oneSecond = 0.0011574;
        const width = parseFloat(oneSecond * seconds);
        return width;
    };

    const leftValueUpdate = () => {
        const currentTime = new Date();
        const currentSecs = (currentTime.getHours() * 60 * 60) + (currentTime.getMinutes() * 60) + (currentTime.getSeconds());
        setLeftValue(secondsToWidth(currentSecs));
    }

    setInterval(() => {
        leftValueUpdate();
    }, 1 * 1000)


    const activity = useSelector(state => state.activity);

    const tasks = activity.map(item => {
        return (
            <>
                <Task key={nanoid()} datapoints={item.datapoints} color={item.color} reallynigga={leftValue}/>
            </>
        )
    })

    return (
        <>  
            <div  className="min-h-full  min-w-[8000%]  border-l-[1px] border-[rgba(0,0,0,0.1)] flex flex-col relative py-[2rem] pb-[5rem] relative">
                {tasks}
                <div style={
                    {
                        left: `${leftValue}%`
                    }
                }  className="absolute top-0 w-[1px] h-full bg-black"></div>
            </div>
        </>
    )
}

export default Day;