import React from "react";

const SleepTracker = ({ startTracking }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginBottom: "20px" }}>
      <h2>Sleep Tracker</h2>
      <p>Sleep time: 10:30 PM - 05:15 AM</p>
      <button onClick={startTracking} style={{ padding: "10px" }}>
        Start Tracking
      </button>
    </div>
  );
};

export default SleepTracker;


