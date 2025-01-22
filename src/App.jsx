// src/App.jsx
import React, { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import CardKPI from "./components/card";
import "./App.css";

const App = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [todayIndex, setTodayIndex] = useState(new Date().getDay());

  // Load habits from localStorage when the app loads
  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits"));
    if (storedHabits) {
      setHabits(storedHabits);
    }
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits]);

  const updateHabit = (id, dayIndex, completed) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              history: habit.history.map((status, index) =>
                index === dayIndex ? completed : status
              ),
            }
          : habit
      )
    );
  };

  const handleAddHabit = () => {
    if (newHabit.trim()) {
      const newHabitObj = {
        id: Date.now(),  // Unique ID based on current time
        name: newHabit,
        history: Array(7).fill(false),  // Initialize with 7 false values for each day
      };
      setHabits([...habits, newHabitObj]);
      setNewHabit("");  // Reset input field
    }
  };

  const handleDeleteHabit = (id) => {
    // Filter out the habit with the given id
    const updatedHabits = habits.filter(habit => habit.id !== id);
    setHabits(updatedHabits); // Update state
  };

  return (
    <>
    <div className="app-container">
      <h1>Habit Tracker</h1>
      <div className="habit-input-container">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit..."
        />
        <button onClick={handleAddHabit}>Add Habit</button>
      </div>
      <HabitList habits={habits} onUpdateHabit={updateHabit} onDeleteHabit={handleDeleteHabit} />
    </div>
    <CardKPI title='Pulse' content='109' unit='BPM'/>
    <h2>Debugging purposes</h2>
    <CardKPI title='Calories Burnt' content='1298' unit='Kcal'/>
    </>
  );
};

export default App;
