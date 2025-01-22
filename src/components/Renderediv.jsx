import React, { useState } from "react";
import SleepTracker from "./Sleepschedule";
import TimeTracker from "./Timetracker";
import CurrentDate from "./currentDate";
import Duration from "./Duration";
import SleepQuality from "./SleepQuality";
import "./SleepTracker.css";

const Renderdiv = () => {
    const [tracking, setTracking] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [stopTime, setStopTime] = useState(null);
    const [duration, setDuration] = useState(0); // Duration in seconds

    const startTracking = () => {
        setTracking(true);
        setStartTime(new Date());
        setStopTime(null); // Clear stopTime when starting new tracking
        setDuration(0); // Reset duration
      };

    const stopTracking = () => {
        setTracking(false);
        setStopTime(new Date());
        if (startTime) {
            const totalDuration = Math.floor((new Date() - startTime) / 1000); // Total duration in seconds
            setDuration(totalDuration);
          }
    };

    return (
        <div>
            <h1><CurrentDate /></h1>
            <div className="main-container">
                <SleepTracker startTracking={startTracking} />
                <TimeTracker tracking={tracking} stopTracking={stopTracking} />
            </div>
            <div className="main-container">
                <SleepQuality duration={duration} idealSleepDuration={8 * 60 * 60} />
                <Duration tracking={tracking} startTime={startTime} stopTime={stopTime} />
            </div>
        </div>
    );
};

export default Renderdiv;
