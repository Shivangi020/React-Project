import React, { useContext } from "react";
import { GoalGlobalData } from "./ToGoal";
import {RiDeleteBin5Fill} from 'react-icons/ri'

function GoalList() {
  const { goals, setGoals } = useContext(GoalGlobalData);

  const deleteGoal = (index) => {
    const newGoals = goals.filter((item)=>{
      return item.id !== index
    });
    setGoals(newGoals)
  };

 
  const handleCheckbox = (e,index) => {
    const updatedGoals = goals.map((item) => {
      if(item.id === index) {
        return {...item, isCompleted: e.target.checked}
      }
      return item
    })
    setGoals(updatedGoals)
  }
  

  return (
    <ul className="list">
      {goals.map((goalList, index) => {
        const { goal, id ,isCompleted} = goalList;
        return (
          <li key={index}>
            <div  className={isCompleted?'goal-label test':'goal-label'}>
            <input type="checkbox" onClick={(e)=>handleCheckbox(e,id)}></input>
            <label>{goal}</label>
            </div>
            <div className="goal-action">
              <div className="del-i" onClick={()=>deleteGoal(id)}><RiDeleteBin5Fill className="icon"/></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default GoalList;
