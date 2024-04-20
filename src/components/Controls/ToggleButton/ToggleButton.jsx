import { useDispatch } from "react-redux";
import { toggleActive } from "../../../slices/activitySlice";
import SubtitleTimer from "./SubtitleTimer/SubtitleTimer";

const ToggleButton = (props) => {

    const dispatch = useDispatch();

    const title = props.title;
    const identifier = props.identifier;
    const isActive = props.isActive;
    const lastDatapoint = props.lastDatapoint;

    const toggleState  = () => {
        dispatch(toggleActive({name: title, identifier: identifier}))
    }
    
    const bgColor = isActive ? "bg-green-400" :"bg-rose-400";

    return (
        <>
            <div className="flex flex-col items-center mx-4">
                <button onClick={toggleState} type="button" className={`ds-1 ds-1-active rounded-md p-4 px-8 mx-2 text-[1.2rem] ${bgColor}`}>{title}</button>
                <SubtitleTimer lastDatapoint={lastDatapoint} isActive={isActive} />
            </div>
        </>
    )
}

export default ToggleButton;