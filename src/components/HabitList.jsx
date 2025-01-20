// src/components/HabitList.jsx
import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onUpdateHabit }) => {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onUpdateHabit={onUpdateHabit} />
      ))}
    </div>
  );
};

export default HabitList;
