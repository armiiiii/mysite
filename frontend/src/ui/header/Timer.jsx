import { useState, useEffect } from "react";

import { Paper } from "@mui/material";


const refactorTime = (count) => {
  if (Math.floor(count / 10) === 0) {
    return `0${count}`;
  }
  return count;
}

const emptyData = {
    seconds: 0,
    minutes: 0,
    hours: 0,
}

export default function Timer() {
  
  const [time, setTime] = useState(emptyData);

  useEffect(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setTime({hours: hours, minutes: minutes, seconds: seconds});

    setInterval(() => {
      setTime({...time, seconds: time.seconds+1})
      if (time.seconds % 60 === 0) {
        setTime({...time, seconds: 0, minutes: time.minutes+1})
      }
      if (time.minutes % 60 === 0) {
        setTime({...emptyData, hours: time.hours+1})
      }
    }, 1000)
  }, []);

  return (
    <Paper variant="Window" sx={{
        width: "150px",
        height: 'fit-content',
        justifyItems: "center",
      }}>
        {`${refactorTime(time.hours)}:${refactorTime(time.minutes)}`}
      </Paper>
  );
}
