// src/components/HabitList.jsx
import React from "react";
import HabitItem from "./HabitItem"; // Import HabitItem component

const HabitList = ({ habits, onUpdateHabit, onDeleteHabit, type }) => {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onUpdateHabit={onUpdateHabit}
          onDeleteHabit={onDeleteHabit}
          type={type}
        />
      ))}
    </div>
  );
};

export default HabitList;
