import React from "react";
import "./SleepTracker.css";

const SleepTracker = ({ startTracking }) => {
  return (
    <div style={{ padding: "20px", marginBottom: "20px" }} className="container">
      <h2>Sleep Tracker</h2>
      <p>Sleep time: 10:30 PM - 05:30 AM</p>
      <button onClick={startTracking}>
        Start Tracking
      </button>
    </div>
  );
};

export default SleepTracker;


