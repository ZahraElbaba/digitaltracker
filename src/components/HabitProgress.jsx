// src/components/HabitProgress.jsx
import React from 'react';

const HabitProgress = ({ habit }) => {
  const completedDays = habit.history.filter((status) => status).length;
  const totalDays = habit.history.length;

  const progress = totalDays === 0 ? 0 : (completedDays / totalDays) * 100;

  return (
    <div className="habit-progress">
      <span>{completedDays}/{totalDays} days</span>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%`, backgroundColor: '#4CAF50' }}
        ></div>
      </div>
    </div>
  );
};

export default HabitProgress;
