const Task = () => {

    const secondsToWidth = (seconds) =>{
        const oneSecond = 0.00115740;
        const width = parseFloat(oneSecond * seconds);
        return width;
    }

    let data = [
        {
            seconds: 10000,
            wasWorking: true
        },
        {
            seconds: 5288,
            wasWorking: false
        },
        {
            seconds: 8008,
            wasWorking: true
        },
        {
            seconds: 600,
            wasWorking: false
        },
        {
            seconds: 28921,
            wasWorking: true
        }
    ]

    const frags = data.map(datapoint => {

        let colorValue = datapoint.wasWorking ? `bg-purple-300`: "";

        return (
            <>  
                <div className={`rounded h-full ${colorValue}`} style={{width: `${secondsToWidth(datapoint.seconds)}%`}}></div>
            </>
        )
    })

    return (
        <>
            <div className="w-[100%] h-[3rem] flex flex-row">
                {frags}
            </div>
        </>
    )
}

export default Task;