// src/components/HabitItem.jsx
import React from "react";

const daysOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

const HabitItem = ({ habit, onUpdateHabit, onDeleteHabit }) => {
  const handleCheckboxChange = (dayIndex) => (e) => {
    const completed = e.target.checked;
    onUpdateHabit(habit.id, dayIndex, completed);
  };

  const handleDeleteClick = () => {
    onDeleteHabit(habit.id); // Call the onDeleteHabit function passed as a prop
  };

  return (
    <div className="habit-item">
      <div className="habit-name">
        <span>{habit.name}</span>
        <button className="delete-btn" onClick={handleDeleteClick}>Delete</button>
      </div>
      <div className="habit-days">
        {daysOfWeek.map((day, index) => (
          <label key={index} className="habit-day">
            <input
              type="checkbox"
              checked={habit.history[index]}
              onChange={handleCheckboxChange(index)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default HabitItem;
