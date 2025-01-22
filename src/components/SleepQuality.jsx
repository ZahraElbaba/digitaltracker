import React from "react";
import "./SleepTracker.css"

const SleepQuality = ({ duration, idealSleepDuration }) => {
  const calculateQuality = () => {
    if (!duration || !idealSleepDuration) return 0;
    return Math.min((duration / idealSleepDuration) * 100, 100); // Cap at 100%
  };

  const sleepQuality = calculateQuality();

  return (
    <div className="container blue">
      <h2>Sleep Quality</h2>
      <p>{sleepQuality.toFixed(2)}%</p>
    </div>
  );
};

export default SleepQuality;
