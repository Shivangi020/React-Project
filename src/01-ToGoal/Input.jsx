import React, { useContext, useState } from "react";
import { GoalGlobalData } from "./ToGoal";
import { addLeadingZeros, dateFormatter } from "./functions";

function Input() {
  const { goals, setGoals } = useContext(GoalGlobalData);
  let currentDatetime = new Date();
  let formattedDate =
    currentDatetime.getFullYear() +
    "-" +
    addLeadingZeros(currentDatetime.getMonth() + 1) +
    "-" +
    addLeadingZeros(currentDatetime.getDate());

  const [inputValue, setInputValue] = useState({
    id: "",
    goal: "",
    posted_date: new Date().toLocaleDateString(),
    due_date: new Date().toLocaleDateString(),
    isCompleted: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.goal.trim()) {
      setGoals([...goals, inputValue]);
    } else {
      alert("Please write your goal");
    }
    localStorage.setItem('goals',goals)
    setInputValue({ ...inputValue, goal: "" });
  };

  const handleInput = (e) => {
    setInputValue({
      ...inputValue,
      goal: e.target.value,
      id: inputValue.goal.length,
    });
  };

  const handledate = (e) => {
    const due_date = dateFormatter(e.target.value);
    setInputValue({ ...inputValue, due_date: due_date });
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
      <i className="date-in"></i>
      <input
        type="date"
        className="input-date"
        onChange={handledate}
        min={formattedDate}
      ></input>
      <label className="date-label"></label>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default Input;
