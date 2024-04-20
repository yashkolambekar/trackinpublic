import { nanoid } from "@reduxjs/toolkit";
import Task from "./Task/Task";

const Day = () => {
    return (
        <>  
            <div className="min-h-full  min-w-[20em] w-[20em] border-l-[1px] border-[rgba(0,0,0,0.1)] flex flex-col relative pb-[3rem]">
                <Task key={nanoid()} />
            </div>
        </>
    )
}

export default Day;