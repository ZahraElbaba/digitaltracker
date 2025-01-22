import React, { useEffect, useState } from "react";
import "./SleepTracker.css"

const Duration = ({ tracking, startTime,stopTime }) => {
  const [duration, setDuration] = useState(0); // Duration in seconds

  useEffect(() => {
    if (!tracking || !startTime) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = Math.floor((now - startTime) / 1000); // Difference in seconds
      setDuration(timeDiff);
    }, 1000);

    return () => clearInterval(interval);
  }, [tracking, startTime]);

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatTime = (time) =>
    time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });


    return (
      <div className="container blue">
        <h2>Duration</h2>
        <p>{formatDuration(duration)}</p>
      </div>
    );
  }


export default Duration;
