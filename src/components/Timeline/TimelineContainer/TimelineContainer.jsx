import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Day from "./Day/Day";
import { nanoid } from "@reduxjs/toolkit";


const TimelineContainer = () => {

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref);

    return (
        <>
            <div className="flex flex-row  w-[80rem] max-w-[80%] min-h-[30rem] bg-rose-100 border-4 border-black rounded-xl overflow-x-scroll" {...events} ref={ref} >
                <Day key={nanoid()} />    
                <Day key={nanoid()} />    
            </div>
        </>
    )
}

export default TimelineContainer;