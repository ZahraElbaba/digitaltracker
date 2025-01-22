import React, { useState } from 'react';

function SportRec() {
  const [type, setType] = useState('');
  const [area, setArea] = useState('');
  const [level, setLevel] = useState('');
  const [results, setResults] = useState([]);

  async function getRec(event) {
    event.preventDefault(); 

    try {
      const res = await fetch(`https://api.sebhulse.com/v1/filter/?type=${type}&area=${area}&level=${level}`);
      if (!res.ok) {
        throw new Error("Could not fetch data");
      }
      const data = await res.json();
      console.log("API Response:", data);
      setResults(data.workout.slice(0, 10)); // Get first 10 workouts
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="sport-section-rec">
      <h1>Sport Recommendation</h1>
      <form onSubmit={getRec}>
        <h3>Type:</h3>
        <label>
          <input type="radio" name="type" value="strength" onChange={(e) => setType(e.target.value)} /> Strength
        </label>
        <label>
          <input type="radio" name="type" value="cardio" onChange={(e) => setType(e.target.value)} /> Cardio
        </label>

        <h3>Level:</h3>
        <label>
          <input type="radio" name="level" value="beginner" onChange={(e) => setLevel(e.target.value)} /> Beginner
        </label>
        <label>
          <input type="radio" name="level" value="intermediate" onChange={(e) => setLevel(e.target.value)} /> Intermediate
        </label>
        <label>
          <input type="radio" name="level" value="advanced" onChange={(e) => setLevel(e.target.value)} /> Advanced
        </label>

        <h3>Area:</h3>
        <label>
          <input type="radio" name="area" value="full" onChange={(e) => setArea(e.target.value)} /> Full
        </label>
        <label>
          <input type="radio" name="area" value="upper" onChange={(e) => setArea(e.target.value)} /> Upper
        </label>
        <label>
          <input type="radio" name="area" value="lower" onChange={(e) => setArea(e.target.value)} /> Lower
        </label>
        <label>
          <input type="radio" name="area" value="core" onChange={(e) => setArea(e.target.value)} /> Core
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="results">
      <h2>Results</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p>No workouts found. Try changing your selection.</p>
        )}
            </div>
    </div>
  );
}

export default SportRec;