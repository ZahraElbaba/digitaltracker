import React, { useState, useEffect } from "react";
import "./SleepTracker.css"

const TimeTracker = ({ tracking, stopTracking }) => {
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    //if (!tracking) return; // Do not update time if tracking is stopped

    const interval = setInterval(() => {
      const now = new Date();

      // Format the time as HH:MM
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(formattedTime);

      // Determine the greeting based on the current hour
      const hours = now.getHours();
      if (hours >= 5 && hours < 12) {
        setGreeting("Good morning");
      } else if (hours >= 12 && hours < 18) {
        setGreeting("Good afternoon");
      } else {
        setGreeting("Good night");
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount or when tracking stops
  }, [tracking]);

  return (
    <div style={{ padding: "20px"}} className="container">
      {tracking ? (
        <>
          <h2>{greeting}</h2>
          <p>{currentTime}</p>
          <button onClick={stopTracking}>
            Stop Tracking
          </button>
        </>
      ) : (
        <>
          <h2>{greeting}</h2>
          <p>{currentTime}</p>
          <p>Tracking stopped</p>
        </>
      )}
    </div>
  );
};

export default TimeTracker;

