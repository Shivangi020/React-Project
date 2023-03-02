import React, { useContext, useState } from "react";
import { GoalGlobalData } from "./ToGoal";


function Input() {
  const { goals, setGoals } = useContext(GoalGlobalData);
  const [inputValue, setInputValue] = useState({
    id: "",
    goal: "",
    isCompleted: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.goal.trim()) {
      setGoals([...goals, inputValue]);
    } else {
      alert("Please write your goal");
    }
    setInputValue({ ...inputValue, goal: "" });
  };

  const handleInput = (e) => {
    const uniqueID = Math.floor(Math.random()*100) + Date.now()+goals.length
 
    setInputValue({
      ...inputValue,
      goal: e.target.value,
      id: uniqueID,
    });
  };

  return (
    <form className="form" type="submit" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="form-field"
        placeholder="Write your goals"
        onChange={handleInput}
        value={inputValue.goal}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default Input;
