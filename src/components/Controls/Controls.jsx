import { useSelector } from "react-redux";
import ToggleButton from "./ToggleButton/ToggleButton";
import { nanoid } from "@reduxjs/toolkit";


const Controls = () => {

    const activity = useSelector(state => state.activity);

    const buttonsArray = activity.map(item => {
        
        return(
            <>
                <ToggleButton key={nanoid()} title={item.name} identifier={item.identifier} isActive={item.isActive} lastDatapoint={item.datapoints[item.datapoints.length - 1]} />
            </>
        )
    })

    return (
        <>
            <div className="p-8 flex flex-col items-center">
                <p>Start or stop the propogation</p>
                <div className="mt-4 flex flex-row">
                    {
                        buttonsArray
                    }
                </div>
            </div>
        </>
    )
}

export default Controls;