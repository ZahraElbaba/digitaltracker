import React, { useState } from "react";
import SleepTracker from "./Sleepschedule";
import TimeTracker from "./Timetracker";
import CurrentDate from "./currentDate";

const Renderdiv = () => {
  const [tracking, setTracking] = useState(false);

  const startTracking = () => {
    setTracking(true);
  };

  const stopTracking = () => {
    setTracking(false);
  };

  return (
    <div>
      <h1><CurrentDate/></h1>
      <SleepTracker startTracking={startTracking} />
      <TimeTracker tracking={tracking} stopTracking={stopTracking} />
    </div>
  );
};

export default Renderdiv;
