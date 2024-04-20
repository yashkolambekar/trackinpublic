import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Day from "./Day/Day";


const TimelineContainer = () => {

    const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref);

    return (
        <>
            <div className="flex flex-row min-w-[80rem] max-w-[80rem] min-h-[30rem] bg-rose-100 my-8 border-4 border-black rounded-xl overflow-x-scroll" {...events} ref={ref} >
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day /> 
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day />    
                <Day /> 
            </div>
        </>
    )
}

export default TimelineContainer;