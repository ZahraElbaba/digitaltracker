// src/App.jsx
import React, { useState, useEffect } from "react";
import HabitList from "./components/HabitList";
import CardKPI from "./components/card";
import "./App.css";
import Renderdiv from "./components/Renderediv";
import Sports from "./components/sports";
import SportRec from "./components/SportRec";
const App = () => {
  // to make it appear 
  const [personalHabits, setPersonalHabits] = useState([]);
  const [workHabits, setWorkHabits] = useState([]);
  
  // States for input fields its where i can add 
  const [personalHabitInput, setPersonalHabitInput] = useState("");
  const [workHabitInput, setWorkHabitInput] = useState("");

  //  this step is to be stores in the local storage 
  useEffect(() => {
    const storedPersonalHabits = JSON.parse(localStorage.getItem("personalHabits"));
    const storedWorkHabits = JSON.parse(localStorage.getItem("workHabits"));
    if (storedPersonalHabits) setPersonalHabits(storedPersonalHabits);
    if (storedWorkHabits) setWorkHabits(storedWorkHabits);
  }, []);

  // Save habits to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("personalHabits", JSON.stringify(personalHabits));
    localStorage.setItem("workHabits", JSON.stringify(workHabits));
  }, [personalHabits, workHabits]);

  // Update habit (for ticking the days)
  const updateHabit = (id, dayIndex, completed, type) => {
    if (type === "personal") {
      setPersonalHabits(
        personalHabits.map((habit) =>
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
    } else {
      setWorkHabits(
        workHabits.map((habit) =>
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
    }
  };

  // Add a new habit (personal or work)
  const handleAddHabit = (type) => {
    const newHabitObj = {
      id: Date.now(),  // Unique ID for the habit
      name: type === "personal" ? personalHabitInput : workHabitInput,
      history: Array(7).fill(false),  // Initialize history for the days of the week
    };

    if (type === "personal" && personalHabitInput.trim()) {
      setPersonalHabits([...personalHabits, newHabitObj]);
      setPersonalHabitInput("");  // Reset the input field
    } else if (type === "work" && workHabitInput.trim()) {
      setWorkHabits([...workHabits, newHabitObj]);
      setWorkHabitInput("");  // Reset the input field
    }
  };

  // Delete a habit (personal or work)
  const handleDeleteHabit = (id, type) => {
    if (type === "personal") {
      setPersonalHabits(personalHabits.filter((habit) => habit.id !== id));
    } else {
      setWorkHabits(workHabits.filter((habit) => habit.id !== id));
    }
  };

  return (
    <>
    <div className="app-container">
      <h1>Habit Tracker</h1>

      <div className="tracker-container">
        {/* Personal Tracker */}
        <div className="tracker personal-tracker">
          <h2>Personal Tracker</h2>
          <div className="habit-input-container">
            <input
              type="text"
              value={personalHabitInput}
              onChange={(e) => setPersonalHabitInput(e.target.value)}
              placeholder="Add a new personal habit..."
            />
            <button onClick={() => handleAddHabit("personal")}>Add Habit</button>
          </div>
          <HabitList
            habits={personalHabits}
            onUpdateHabit={updateHabit}
            onDeleteHabit={handleDeleteHabit}
            type="personal"
          />
        </div>

        {/* Work Tracker */}
        <div className="tracker work-tracker">
          <h2>Work Tracker</h2>
          <div className="habit-input-container">
            <input
              type="text"
              value={workHabitInput}
              onChange={(e) => setWorkHabitInput(e.target.value)}
              placeholder="Add a new work habit..."
            />
            <button onClick={() => handleAddHabit("work")}>Add Habit</button>
          </div>
          <HabitList
            habits={workHabits}
            onUpdateHabit={updateHabit}
            onDeleteHabit={handleDeleteHabit}
            type="work"
          />
        </div>
      </div>
    </div>
    <div className="health-section">
    <CardKPI title='Heart Pulse' content='109' unit='BPM' icon="&#x1F5A4;"/>
    <CardKPI title='Total Steps' content='1298' unit='Kcal' icon="&#128293;"/>
    </div>
    <Sports />
    <SportRec />

    <Renderdiv />
    </>
  );
};

export default App;
