import { useState } from "react";

const SubtitleTimer = (props) => {
  const [hmsArray, setHmsArray] = useState([0, 0, 0]);

  const lastDatapoint = props.lastDatapoint;
  const isActive = props.isActive;

  let secondsElapsed = 0;

  if (isActive) {
    setInterval(() => {
      increment();
    }, 1000);

    const increment = () => {
      const dt = new Date();
      const secs =
        dt.getSeconds() + 60 * dt.getMinutes() + 60 * 60 * dt.getHours();
      secondsElapsed = Math.floor(secs - lastDatapoint.start);
      const h = Math.floor(secondsElapsed / 3600);
      const m = Math.floor((secondsElapsed % 3600) / 60);
      const s = Math.floor((secondsElapsed % 3600) % 60);
      setHmsArray([h, m, s]);
    };

    return (
      <>
        <p className="mt-2">
          {String(hmsArray[0]).padStart(2, 0)}:
          {String(hmsArray[1]).padStart(2, 0)}:
          {String(hmsArray[2]).padStart(2, 0)}
        </p>
      </>
    );
  }
};

export default SubtitleTimer;
