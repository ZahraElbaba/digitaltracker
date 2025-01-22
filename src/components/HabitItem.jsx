// src/components/HabitItem.jsx
import React from "react";

const HabitItem = ({ habit, onUpdateHabit, onDeleteHabit, type }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleCheckboxChange = (index) => {
    const updatedHistory = [...habit.history];
    updatedHistory[index] = !updatedHistory[index]; // Toggle the day status
    onUpdateHabit(habit.id, index, updatedHistory[index], type); // Update habit state
  };

  return (
    <div className="habit-item">
      <div className="habit-name">
        <span>{habit.name}</span>
      </div>
      <div className="habit-days">
        {habit.history.map((status, index) => (
          <div key={index} className="habit-day">
            <input
              type="checkbox"
              checked={status}
              onChange={() => handleCheckboxChange(index)} // Toggling the completion state
            />
            <label>{daysOfWeek[index]}</label>
          </div>
        ))}
      </div>

      {/* Place delete button after the days of the week */}
      <div className="delete-container">
        <button
          className="delete-btn"
          onClick={() => onDeleteHabit(habit.id, type)} // Pass habit id and type for deletion
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
