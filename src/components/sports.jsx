import React from 'react'
import './sports.css'

function Sports() {

  const targets=[
    {id:1,targetfor:"Upper Body"},
    {id:2,targetfor:"Lower Body"},
    {id:3,targetfor:"Triceps"},

  ]
  const types=[
    {id:2,intensity:"Flexibility"},
    {id:3,intensity:"Endurance"},
    {id:4,intensity:"Strength"},

  ]

  const goals=[
    {id:1,goal:"Lose Weight"},
    {id:2,goal:"Gain Muscle"},
    {id:3,goal:"Stay Fit"},

  ]
  
  const listoftypes = types.map(type => (
    <label key={type.id}>
      <input type="checkbox" value={type.intensity} /> {type.intensity}
    </label>
  ));

  const listoftargets = targets.map(target => (
    <label key={target.id}>
      <input type="checkbox" value={target.targetfor} /> {target.targetfor}
    </label>
  ));

  const listofgoals = goals.map(goal => (
    <label key={goal.id}>
      <input type="checkbox" value={goal.goal} /> {goal.goal}
    </label>
  ));
  
  return (
    <>
    <div className="sports-tracker">
    <div className="list-of-options">
        <h3 className="sports-title">Type of the Exercise</h3>
        {listoftypes}
      </div>
      <div className="list-of-options">
        <h3 className="sports-title">Exercise Goal</h3>
        {listofgoals}
      </div>
      <div className="list-of-options">
        <h3 className="sports-title">Body Targets</h3>
        {listoftargets}
      </div>

    </div>
    </>

  )
}

export default Sports
