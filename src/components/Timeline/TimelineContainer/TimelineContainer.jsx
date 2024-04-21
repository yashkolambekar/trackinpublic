import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Day from "./Day/Day";
import { nanoid } from "@reduxjs/toolkit";


const TimelineContainer = () => {

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref);

    return (
        <>
            <div style={{


    backgroundSize: "4.1666667% 2rem",
    backgroundPositionX: "2.08333%",
    backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.3) 1.5px, rgba(0, 0, 0, 0) 1px)"
  

            }}  className="ds-2 flex flex-row  w-[80rem] max-w-[80%] min-h-[10rem] bg-rose-100 border-4 border-black rounded-xl overflow-x-scroll" {...events} ref={ref} >
                <Day key={nanoid()} />
            </div>
        </>
    )
}

export default TimelineContainer;