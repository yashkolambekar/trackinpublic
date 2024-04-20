import TimelineContainer from "./TimelineContainer/TimelineContainer";

const Timeline = () => {
    return (
        <>
            <div className="container p-8 max-w-full w-full bg-rose-300 flex flex-col items-center">
                <div className="mb-4">
                    <p>Your Timeline</p>
                </div>
                <TimelineContainer />
            </div>
        </>
    )
}

export default Timeline;