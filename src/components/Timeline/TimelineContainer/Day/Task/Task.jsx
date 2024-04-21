import { nanoid } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const Task = (props) => {
  const datapoints = props.datapoints;
  const color = props.color;

  const secondsToWidth = (seconds) => {
    const oneSecond = 0.0011574;
    const width = parseFloat(oneSecond * seconds);
    return width;
  };

  let lastEnd = 0;

  let frags = datapoints.map((datapoint) => {
    const blankSpaceSecs = datapoint.start - lastEnd;
    const blackSpaceWidth = secondsToWidth(blankSpaceSecs);
    const taskSecs = datapoint.end - datapoint.start;
    const taskWidth = secondsToWidth(taskSecs);

    let fragsArr = [];

    fragsArr.push(
      <>
        <div
          key={nanoid()}
          className={`rounded h-full`}
          style={{ width: `${blackSpaceWidth}%` }}
        ></div>
      </>
    );

    if (typeof(datapoint.end) != "undefined") {
      fragsArr.push(
        <>
          <div
            key={nanoid()}
            className={`rounded-full border-[1px] border-[rgba(0,0,0,0.5)] h-full ${
              color || "bg-purple-400"
            }`}
            style={{ width: `${taskWidth}%` }}
          ></div>
        </>
      );
      lastEnd = datapoint.end;
    } else {
        const currentTime = new Date();
        const currentSecs = (currentTime.getHours() * 60 * 60) + (currentTime.getMinutes() * 60) + (currentTime.getSeconds());
      fragsArr.push(
        <>
          <div
            key={nanoid()}
            className={`rounded-full border-[1px] border-[rgba(0,0,0,0.5)] h-full ${
              color || "bg-purple-400"
            }`}
            style={{
              width: `${secondsToWidth(
                currentSecs - datapoint.start
              )}%`,
            }}
          ></div>
        </>
      );
      lastEnd = new Date().getSeconds;
    }

    return <>{fragsArr}</>;
  });

  frags.push(
    <div
      key={nanoid()}
      className={`rounded h-full`}
      style={{ width: `${secondsToWidth(86400 - lastEnd)}%` }}
    ></div>
  );

  return (
    <>
      <div className="w-[100%] h-[3rem] flex flex-row my-2">{frags}</div>
    </>
  );
};

export default Task;
