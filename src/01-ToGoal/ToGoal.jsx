import React, { createContext, useState } from "react";
import Input from "./Input";
import List from "./List";
import "./ToGoal.css";

export const GoalGlobalData = createContext();

function ToGoal() {
  const [goals, setGoals] = useState([]);

  return (
    <GoalGlobalData.Provider value={{ goals, setGoals }}>
      <div className="goal-main">
        <section className="goal-container">
          <header><h1>Today's Goal</h1>        
          </header>
 
          <div className="input-div">
            <Input />
          </div>
          <div className="goal-list">
            <List />
          </div>
        </section>
      </div>
    </GoalGlobalData.Provider>
  );
}

export default ToGoal;
